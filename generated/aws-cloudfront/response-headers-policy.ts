// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_response_headers_policy

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcResponseHeadersPolicyProps extends cdktn.TerraformMetaArguments {
    /**
    * A response headers policy configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_response_headers_policy#response_headers_policy_config CcResponseHeadersPolicy#response_headers_policy_config}
    */
    readonly responseHeadersPolicyConfig: CcResponseHeadersPolicy.ResponseHeadersPolicyConfigProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_response_headers_policy awscc_cloudfront_response_headers_policy}
*/
export class CcResponseHeadersPolicy extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_cloudfront_response_headers_policy";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcResponseHeadersPolicy resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcResponseHeadersPolicy to import
    * @param importFromId The id of the existing CcResponseHeadersPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_response_headers_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcResponseHeadersPolicy to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cloudfront_response_headers_policy", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_response_headers_policy awscc_cloudfront_response_headers_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcResponseHeadersPolicyProps
    */
    public constructor(scope: Construct, id: string, config: CcResponseHeadersPolicyProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_cloudfront_response_headers_policy',
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
        this._responseHeadersPolicyConfig.internalValue = config.responseHeadersPolicyConfig;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // last_modified_time - computed: true, optional: false, required: false
    public get lastModifiedTime() {
        return this.getStringAttribute('last_modified_time');
    }

    // response_headers_policy_config - computed: false, optional: false, required: true
    private _responseHeadersPolicyConfig = new CcResponseHeadersPolicy.ResponseHeadersPolicyConfigPropertyOutputReference(this, "response_headers_policy_config");
    public get responseHeadersPolicyConfig() {
        return this._responseHeadersPolicyConfig;
    }
    public putResponseHeadersPolicyConfig(value: CcResponseHeadersPolicy.ResponseHeadersPolicyConfigProperty) {
        this._responseHeadersPolicyConfig.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get responseHeadersPolicyConfigInput() {
        return this._responseHeadersPolicyConfig.internalValue;
    }

    // response_headers_policy_id - computed: true, optional: false, required: false
    public get responseHeadersPolicyId() {
        return this.getStringAttribute('response_headers_policy_id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            response_headers_policy_config: ccResponseHeadersPolicyResponseHeadersPolicyConfigPropertyToTerraform(this._responseHeadersPolicyConfig.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            response_headers_policy_config: {
                value: ccResponseHeadersPolicyResponseHeadersPolicyConfigPropertyToHclTerraform(this._responseHeadersPolicyConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcResponseHeadersPolicy.ResponseHeadersPolicyConfigProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccResponseHeadersPolicyAccessControlAllowHeadersPropertyToTerraform(struct?: CcResponseHeadersPolicy.AccessControlAllowHeadersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        items: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.items),
    }
}


export function ccResponseHeadersPolicyAccessControlAllowHeadersPropertyToHclTerraform(struct?: CcResponseHeadersPolicy.AccessControlAllowHeadersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        items: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.items),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccResponseHeadersPolicyAccessControlAllowMethodsPropertyToTerraform(struct?: CcResponseHeadersPolicy.AccessControlAllowMethodsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        items: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.items),
    }
}


export function ccResponseHeadersPolicyAccessControlAllowMethodsPropertyToHclTerraform(struct?: CcResponseHeadersPolicy.AccessControlAllowMethodsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        items: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.items),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccResponseHeadersPolicyAccessControlAllowOriginsPropertyToTerraform(struct?: CcResponseHeadersPolicy.AccessControlAllowOriginsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        items: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.items),
    }
}


export function ccResponseHeadersPolicyAccessControlAllowOriginsPropertyToHclTerraform(struct?: CcResponseHeadersPolicy.AccessControlAllowOriginsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        items: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.items),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccResponseHeadersPolicyAccessControlExposeHeadersPropertyToTerraform(struct?: CcResponseHeadersPolicy.AccessControlExposeHeadersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        items: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.items),
    }
}


export function ccResponseHeadersPolicyAccessControlExposeHeadersPropertyToHclTerraform(struct?: CcResponseHeadersPolicy.AccessControlExposeHeadersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        items: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.items),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccResponseHeadersPolicyCorsConfigPropertyToTerraform(struct?: CcResponseHeadersPolicy.CorsConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        access_control_allow_credentials: cdktn.booleanToTerraform(struct!.accessControlAllowCredentials),
        access_control_allow_headers: ccResponseHeadersPolicyAccessControlAllowHeadersPropertyToTerraform(struct!.accessControlAllowHeaders),
        access_control_allow_methods: ccResponseHeadersPolicyAccessControlAllowMethodsPropertyToTerraform(struct!.accessControlAllowMethods),
        access_control_allow_origins: ccResponseHeadersPolicyAccessControlAllowOriginsPropertyToTerraform(struct!.accessControlAllowOrigins),
        access_control_expose_headers: ccResponseHeadersPolicyAccessControlExposeHeadersPropertyToTerraform(struct!.accessControlExposeHeaders),
        access_control_max_age_sec: cdktn.numberToTerraform(struct!.accessControlMaxAgeSec),
        origin_override: cdktn.booleanToTerraform(struct!.originOverride),
    }
}


export function ccResponseHeadersPolicyCorsConfigPropertyToHclTerraform(struct?: CcResponseHeadersPolicy.CorsConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        access_control_allow_credentials: {
            value: cdktn.booleanToHclTerraform(struct!.accessControlAllowCredentials),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        access_control_allow_headers: {
            value: ccResponseHeadersPolicyAccessControlAllowHeadersPropertyToHclTerraform(struct!.accessControlAllowHeaders),
            isBlock: true,
            type: "struct",
            storageClassType: "AccessControlAllowHeadersProperty",
        },
        access_control_allow_methods: {
            value: ccResponseHeadersPolicyAccessControlAllowMethodsPropertyToHclTerraform(struct!.accessControlAllowMethods),
            isBlock: true,
            type: "struct",
            storageClassType: "AccessControlAllowMethodsProperty",
        },
        access_control_allow_origins: {
            value: ccResponseHeadersPolicyAccessControlAllowOriginsPropertyToHclTerraform(struct!.accessControlAllowOrigins),
            isBlock: true,
            type: "struct",
            storageClassType: "AccessControlAllowOriginsProperty",
        },
        access_control_expose_headers: {
            value: ccResponseHeadersPolicyAccessControlExposeHeadersPropertyToHclTerraform(struct!.accessControlExposeHeaders),
            isBlock: true,
            type: "struct",
            storageClassType: "AccessControlExposeHeadersProperty",
        },
        access_control_max_age_sec: {
            value: cdktn.numberToHclTerraform(struct!.accessControlMaxAgeSec),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        origin_override: {
            value: cdktn.booleanToHclTerraform(struct!.originOverride),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccResponseHeadersPolicyCustomHeaderPropertyToTerraform(struct?: CcResponseHeadersPolicy.CustomHeaderProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        header: cdktn.stringToTerraform(struct!.header),
        override: cdktn.booleanToTerraform(struct!.override),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccResponseHeadersPolicyCustomHeaderPropertyToHclTerraform(struct?: CcResponseHeadersPolicy.CustomHeaderProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        header: {
            value: cdktn.stringToHclTerraform(struct!.header),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        override: {
            value: cdktn.booleanToHclTerraform(struct!.override),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
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


export function ccResponseHeadersPolicyCustomHeadersConfigPropertyToTerraform(struct?: CcResponseHeadersPolicy.CustomHeadersConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        items: cdktn.listMapper(ccResponseHeadersPolicyCustomHeaderPropertyToTerraform, false)(struct!.items),
    }
}


export function ccResponseHeadersPolicyCustomHeadersConfigPropertyToHclTerraform(struct?: CcResponseHeadersPolicy.CustomHeadersConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        items: {
            value: cdktn.listMapperHcl(ccResponseHeadersPolicyCustomHeaderPropertyToHclTerraform, false)(struct!.items),
            isBlock: true,
            type: "list",
            storageClassType: "CustomHeaderPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccResponseHeadersPolicyRemoveHeaderPropertyToTerraform(struct?: CcResponseHeadersPolicy.RemoveHeaderProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        header: cdktn.stringToTerraform(struct!.header),
    }
}


export function ccResponseHeadersPolicyRemoveHeaderPropertyToHclTerraform(struct?: CcResponseHeadersPolicy.RemoveHeaderProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        header: {
            value: cdktn.stringToHclTerraform(struct!.header),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccResponseHeadersPolicyRemoveHeadersConfigPropertyToTerraform(struct?: CcResponseHeadersPolicy.RemoveHeadersConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        items: cdktn.listMapper(ccResponseHeadersPolicyRemoveHeaderPropertyToTerraform, false)(struct!.items),
    }
}


export function ccResponseHeadersPolicyRemoveHeadersConfigPropertyToHclTerraform(struct?: CcResponseHeadersPolicy.RemoveHeadersConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        items: {
            value: cdktn.listMapperHcl(ccResponseHeadersPolicyRemoveHeaderPropertyToHclTerraform, false)(struct!.items),
            isBlock: true,
            type: "set",
            storageClassType: "RemoveHeaderPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccResponseHeadersPolicyContentSecurityPolicyPropertyToTerraform(struct?: CcResponseHeadersPolicy.ContentSecurityPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_security_policy: cdktn.stringToTerraform(struct!.contentSecurityPolicy),
        override: cdktn.booleanToTerraform(struct!.override),
    }
}


export function ccResponseHeadersPolicyContentSecurityPolicyPropertyToHclTerraform(struct?: CcResponseHeadersPolicy.ContentSecurityPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_security_policy: {
            value: cdktn.stringToHclTerraform(struct!.contentSecurityPolicy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        override: {
            value: cdktn.booleanToHclTerraform(struct!.override),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccResponseHeadersPolicyContentTypeOptionsPropertyToTerraform(struct?: CcResponseHeadersPolicy.ContentTypeOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        override: cdktn.booleanToTerraform(struct!.override),
    }
}


export function ccResponseHeadersPolicyContentTypeOptionsPropertyToHclTerraform(struct?: CcResponseHeadersPolicy.ContentTypeOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        override: {
            value: cdktn.booleanToHclTerraform(struct!.override),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccResponseHeadersPolicyFrameOptionsPropertyToTerraform(struct?: CcResponseHeadersPolicy.FrameOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        frame_option: cdktn.stringToTerraform(struct!.frameOption),
        override: cdktn.booleanToTerraform(struct!.override),
    }
}


export function ccResponseHeadersPolicyFrameOptionsPropertyToHclTerraform(struct?: CcResponseHeadersPolicy.FrameOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        frame_option: {
            value: cdktn.stringToHclTerraform(struct!.frameOption),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        override: {
            value: cdktn.booleanToHclTerraform(struct!.override),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccResponseHeadersPolicyReferrerPolicyPropertyToTerraform(struct?: CcResponseHeadersPolicy.ReferrerPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        override: cdktn.booleanToTerraform(struct!.override),
        referrer_policy: cdktn.stringToTerraform(struct!.referrerPolicy),
    }
}


export function ccResponseHeadersPolicyReferrerPolicyPropertyToHclTerraform(struct?: CcResponseHeadersPolicy.ReferrerPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        override: {
            value: cdktn.booleanToHclTerraform(struct!.override),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        referrer_policy: {
            value: cdktn.stringToHclTerraform(struct!.referrerPolicy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccResponseHeadersPolicyStrictTransportSecurityPropertyToTerraform(struct?: CcResponseHeadersPolicy.StrictTransportSecurityProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        access_control_max_age_sec: cdktn.numberToTerraform(struct!.accessControlMaxAgeSec),
        include_subdomains: cdktn.booleanToTerraform(struct!.includeSubdomains),
        override: cdktn.booleanToTerraform(struct!.override),
        preload: cdktn.booleanToTerraform(struct!.preload),
    }
}


export function ccResponseHeadersPolicyStrictTransportSecurityPropertyToHclTerraform(struct?: CcResponseHeadersPolicy.StrictTransportSecurityProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        access_control_max_age_sec: {
            value: cdktn.numberToHclTerraform(struct!.accessControlMaxAgeSec),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        include_subdomains: {
            value: cdktn.booleanToHclTerraform(struct!.includeSubdomains),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        override: {
            value: cdktn.booleanToHclTerraform(struct!.override),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        preload: {
            value: cdktn.booleanToHclTerraform(struct!.preload),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccResponseHeadersPolicyXSSProtectionPropertyToTerraform(struct?: CcResponseHeadersPolicy.XSSProtectionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        mode_block: cdktn.booleanToTerraform(struct!.modeBlock),
        override: cdktn.booleanToTerraform(struct!.override),
        protection: cdktn.booleanToTerraform(struct!.protection),
        report_uri: cdktn.stringToTerraform(struct!.reportUri),
    }
}


export function ccResponseHeadersPolicyXSSProtectionPropertyToHclTerraform(struct?: CcResponseHeadersPolicy.XSSProtectionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        mode_block: {
            value: cdktn.booleanToHclTerraform(struct!.modeBlock),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        override: {
            value: cdktn.booleanToHclTerraform(struct!.override),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        protection: {
            value: cdktn.booleanToHclTerraform(struct!.protection),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        report_uri: {
            value: cdktn.stringToHclTerraform(struct!.reportUri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccResponseHeadersPolicySecurityHeadersConfigPropertyToTerraform(struct?: CcResponseHeadersPolicy.SecurityHeadersConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_security_policy: ccResponseHeadersPolicyContentSecurityPolicyPropertyToTerraform(struct!.contentSecurityPolicy),
        content_type_options: ccResponseHeadersPolicyContentTypeOptionsPropertyToTerraform(struct!.contentTypeOptions),
        frame_options: ccResponseHeadersPolicyFrameOptionsPropertyToTerraform(struct!.frameOptions),
        referrer_policy: ccResponseHeadersPolicyReferrerPolicyPropertyToTerraform(struct!.referrerPolicy),
        strict_transport_security: ccResponseHeadersPolicyStrictTransportSecurityPropertyToTerraform(struct!.strictTransportSecurity),
        xss_protection: ccResponseHeadersPolicyXSSProtectionPropertyToTerraform(struct!.xssProtection),
    }
}


export function ccResponseHeadersPolicySecurityHeadersConfigPropertyToHclTerraform(struct?: CcResponseHeadersPolicy.SecurityHeadersConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_security_policy: {
            value: ccResponseHeadersPolicyContentSecurityPolicyPropertyToHclTerraform(struct!.contentSecurityPolicy),
            isBlock: true,
            type: "struct",
            storageClassType: "ContentSecurityPolicyProperty",
        },
        content_type_options: {
            value: ccResponseHeadersPolicyContentTypeOptionsPropertyToHclTerraform(struct!.contentTypeOptions),
            isBlock: true,
            type: "struct",
            storageClassType: "ContentTypeOptionsProperty",
        },
        frame_options: {
            value: ccResponseHeadersPolicyFrameOptionsPropertyToHclTerraform(struct!.frameOptions),
            isBlock: true,
            type: "struct",
            storageClassType: "FrameOptionsProperty",
        },
        referrer_policy: {
            value: ccResponseHeadersPolicyReferrerPolicyPropertyToHclTerraform(struct!.referrerPolicy),
            isBlock: true,
            type: "struct",
            storageClassType: "ReferrerPolicyProperty",
        },
        strict_transport_security: {
            value: ccResponseHeadersPolicyStrictTransportSecurityPropertyToHclTerraform(struct!.strictTransportSecurity),
            isBlock: true,
            type: "struct",
            storageClassType: "StrictTransportSecurityProperty",
        },
        xss_protection: {
            value: ccResponseHeadersPolicyXSSProtectionPropertyToHclTerraform(struct!.xssProtection),
            isBlock: true,
            type: "struct",
            storageClassType: "XSSProtectionProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccResponseHeadersPolicyServerTimingHeadersConfigPropertyToTerraform(struct?: CcResponseHeadersPolicy.ServerTimingHeadersConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
        sampling_rate: cdktn.numberToTerraform(struct!.samplingRate),
    }
}


export function ccResponseHeadersPolicyServerTimingHeadersConfigPropertyToHclTerraform(struct?: CcResponseHeadersPolicy.ServerTimingHeadersConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enabled: {
            value: cdktn.booleanToHclTerraform(struct!.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        sampling_rate: {
            value: cdktn.numberToHclTerraform(struct!.samplingRate),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccResponseHeadersPolicyResponseHeadersPolicyConfigPropertyToTerraform(struct?: CcResponseHeadersPolicy.ResponseHeadersPolicyConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comment: cdktn.stringToTerraform(struct!.comment),
        cors_config: ccResponseHeadersPolicyCorsConfigPropertyToTerraform(struct!.corsConfig),
        custom_headers_config: ccResponseHeadersPolicyCustomHeadersConfigPropertyToTerraform(struct!.customHeadersConfig),
        name: cdktn.stringToTerraform(struct!.name),
        remove_headers_config: ccResponseHeadersPolicyRemoveHeadersConfigPropertyToTerraform(struct!.removeHeadersConfig),
        security_headers_config: ccResponseHeadersPolicySecurityHeadersConfigPropertyToTerraform(struct!.securityHeadersConfig),
        server_timing_headers_config: ccResponseHeadersPolicyServerTimingHeadersConfigPropertyToTerraform(struct!.serverTimingHeadersConfig),
    }
}


export function ccResponseHeadersPolicyResponseHeadersPolicyConfigPropertyToHclTerraform(struct?: CcResponseHeadersPolicy.ResponseHeadersPolicyConfigProperty | cdktn.IResolvable): any {
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
        cors_config: {
            value: ccResponseHeadersPolicyCorsConfigPropertyToHclTerraform(struct!.corsConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "CorsConfigProperty",
        },
        custom_headers_config: {
            value: ccResponseHeadersPolicyCustomHeadersConfigPropertyToHclTerraform(struct!.customHeadersConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "CustomHeadersConfigProperty",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        remove_headers_config: {
            value: ccResponseHeadersPolicyRemoveHeadersConfigPropertyToHclTerraform(struct!.removeHeadersConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "RemoveHeadersConfigProperty",
        },
        security_headers_config: {
            value: ccResponseHeadersPolicySecurityHeadersConfigPropertyToHclTerraform(struct!.securityHeadersConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "SecurityHeadersConfigProperty",
        },
        server_timing_headers_config: {
            value: ccResponseHeadersPolicyServerTimingHeadersConfigPropertyToHclTerraform(struct!.serverTimingHeadersConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "ServerTimingHeadersConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcResponseHeadersPolicy {
export interface AccessControlAllowHeadersProperty {
    /**
    * The list of HTTP header names. You can specify ``*`` to allow all headers.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_response_headers_policy#items CcResponseHeadersPolicy#items}
    */
    readonly items?: string[];
}
export class AccessControlAllowHeadersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AccessControlAllowHeadersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._items !== undefined) {
            hasAnyValues = true;
            internalValueResult.items = this._items;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AccessControlAllowHeadersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._items = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._items = value.items;
        }
    }

    // items - computed: true, optional: true, required: false
    private _items?: string[]; 
    public get items() {
        return this.getListAttribute('items');
    }
    public set items(value: string[]) {
        this._items = value;
    }
    public resetItems() {
        this._items = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get itemsInput() {
        return this._items;
    }
}
export interface AccessControlAllowMethodsProperty {
    /**
    * The list of HTTP methods. Valid values are:
    *   +   ``GET`` 
    *   +   ``DELETE`` 
    *   +   ``HEAD`` 
    *   +   ``OPTIONS`` 
    *   +   ``PATCH`` 
    *   +   ``POST`` 
    *   +   ``PUT`` 
    *   +   ``ALL`` 
    *   
    *  ``ALL`` is a special value that includes all of the listed HTTP methods.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_response_headers_policy#items CcResponseHeadersPolicy#items}
    */
    readonly items?: string[];
}
export class AccessControlAllowMethodsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AccessControlAllowMethodsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._items !== undefined) {
            hasAnyValues = true;
            internalValueResult.items = this._items;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AccessControlAllowMethodsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._items = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._items = value.items;
        }
    }

    // items - computed: true, optional: true, required: false
    private _items?: string[]; 
    public get items() {
        return this.getListAttribute('items');
    }
    public set items(value: string[]) {
        this._items = value;
    }
    public resetItems() {
        this._items = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get itemsInput() {
        return this._items;
    }
}
export interface AccessControlAllowOriginsProperty {
    /**
    * The list of origins (domain names). You can specify ``*`` to allow all origins.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_response_headers_policy#items CcResponseHeadersPolicy#items}
    */
    readonly items?: string[];
}
export class AccessControlAllowOriginsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AccessControlAllowOriginsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._items !== undefined) {
            hasAnyValues = true;
            internalValueResult.items = this._items;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AccessControlAllowOriginsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._items = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._items = value.items;
        }
    }

    // items - computed: true, optional: true, required: false
    private _items?: string[]; 
    public get items() {
        return this.getListAttribute('items');
    }
    public set items(value: string[]) {
        this._items = value;
    }
    public resetItems() {
        this._items = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get itemsInput() {
        return this._items;
    }
}
export interface AccessControlExposeHeadersProperty {
    /**
    * The list of HTTP headers. You can specify ``*`` to expose all headers.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_response_headers_policy#items CcResponseHeadersPolicy#items}
    */
    readonly items?: string[];
}
export class AccessControlExposeHeadersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AccessControlExposeHeadersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._items !== undefined) {
            hasAnyValues = true;
            internalValueResult.items = this._items;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AccessControlExposeHeadersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._items = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._items = value.items;
        }
    }

    // items - computed: true, optional: true, required: false
    private _items?: string[]; 
    public get items() {
        return this.getListAttribute('items');
    }
    public set items(value: string[]) {
        this._items = value;
    }
    public resetItems() {
        this._items = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get itemsInput() {
        return this._items;
    }
}
export interface CorsConfigProperty {
    /**
    * A Boolean that CloudFront uses as the value for the ``Access-Control-Allow-Credentials`` HTTP response header.
    *  For more information about the ``Access-Control-Allow-Credentials`` HTTP response header, see [Access-Control-Allow-Credentials](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Credentials) in the MDN Web Docs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_response_headers_policy#access_control_allow_credentials CcResponseHeadersPolicy#access_control_allow_credentials}
    */
    readonly accessControlAllowCredentials?: boolean | cdktn.IResolvable;
    /**
    * A list of HTTP header names that CloudFront includes as values for the ``Access-Control-Allow-Headers`` HTTP response header.
    *  For more information about the ``Access-Control-Allow-Headers`` HTTP response header, see [Access-Control-Allow-Headers](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Headers) in the MDN Web Docs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_response_headers_policy#access_control_allow_headers CcResponseHeadersPolicy#access_control_allow_headers}
    */
    readonly accessControlAllowHeaders?: AccessControlAllowHeadersProperty;
    /**
    * A list of HTTP methods that CloudFront includes as values for the ``Access-Control-Allow-Methods`` HTTP response header.
    *  For more information about the ``Access-Control-Allow-Methods`` HTTP response header, see [Access-Control-Allow-Methods](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Methods) in the MDN Web Docs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_response_headers_policy#access_control_allow_methods CcResponseHeadersPolicy#access_control_allow_methods}
    */
    readonly accessControlAllowMethods?: AccessControlAllowMethodsProperty;
    /**
    * A list of origins (domain names) that CloudFront can use as the value for the ``Access-Control-Allow-Origin`` HTTP response header.
    *  For more information about the ``Access-Control-Allow-Origin`` HTTP response header, see [Access-Control-Allow-Origin](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin) in the MDN Web Docs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_response_headers_policy#access_control_allow_origins CcResponseHeadersPolicy#access_control_allow_origins}
    */
    readonly accessControlAllowOrigins?: AccessControlAllowOriginsProperty;
    /**
    * A list of HTTP headers that CloudFront includes as values for the ``Access-Control-Expose-Headers`` HTTP response header.
    *  For more information about the ``Access-Control-Expose-Headers`` HTTP response header, see [Access-Control-Expose-Headers](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Expose-Headers) in the MDN Web Docs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_response_headers_policy#access_control_expose_headers CcResponseHeadersPolicy#access_control_expose_headers}
    */
    readonly accessControlExposeHeaders?: AccessControlExposeHeadersProperty;
    /**
    * A number that CloudFront uses as the value for the ``Access-Control-Max-Age`` HTTP response header.
    *  For more information about the ``Access-Control-Max-Age`` HTTP response header, see [Access-Control-Max-Age](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Max-Age) in the MDN Web Docs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_response_headers_policy#access_control_max_age_sec CcResponseHeadersPolicy#access_control_max_age_sec}
    */
    readonly accessControlMaxAgeSec?: number;
    /**
    * A Boolean that determines whether CloudFront overrides HTTP response headers received from the origin with the ones specified in this response headers policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_response_headers_policy#origin_override CcResponseHeadersPolicy#origin_override}
    */
    readonly originOverride?: boolean | cdktn.IResolvable;
}
export class CorsConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CorsConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._accessControlAllowCredentials !== undefined) {
            hasAnyValues = true;
            internalValueResult.accessControlAllowCredentials = this._accessControlAllowCredentials;
        }
        if (this._accessControlAllowHeaders?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.accessControlAllowHeaders = this._accessControlAllowHeaders?.internalValue;
        }
        if (this._accessControlAllowMethods?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.accessControlAllowMethods = this._accessControlAllowMethods?.internalValue;
        }
        if (this._accessControlAllowOrigins?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.accessControlAllowOrigins = this._accessControlAllowOrigins?.internalValue;
        }
        if (this._accessControlExposeHeaders?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.accessControlExposeHeaders = this._accessControlExposeHeaders?.internalValue;
        }
        if (this._accessControlMaxAgeSec !== undefined) {
            hasAnyValues = true;
            internalValueResult.accessControlMaxAgeSec = this._accessControlMaxAgeSec;
        }
        if (this._originOverride !== undefined) {
            hasAnyValues = true;
            internalValueResult.originOverride = this._originOverride;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CorsConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accessControlAllowCredentials = undefined;
            this._accessControlAllowHeaders.internalValue = undefined;
            this._accessControlAllowMethods.internalValue = undefined;
            this._accessControlAllowOrigins.internalValue = undefined;
            this._accessControlExposeHeaders.internalValue = undefined;
            this._accessControlMaxAgeSec = undefined;
            this._originOverride = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accessControlAllowCredentials = value.accessControlAllowCredentials;
            this._accessControlAllowHeaders.internalValue = value.accessControlAllowHeaders;
            this._accessControlAllowMethods.internalValue = value.accessControlAllowMethods;
            this._accessControlAllowOrigins.internalValue = value.accessControlAllowOrigins;
            this._accessControlExposeHeaders.internalValue = value.accessControlExposeHeaders;
            this._accessControlMaxAgeSec = value.accessControlMaxAgeSec;
            this._originOverride = value.originOverride;
        }
    }

    // access_control_allow_credentials - computed: true, optional: true, required: false
    private _accessControlAllowCredentials?: boolean | cdktn.IResolvable; 
    public get accessControlAllowCredentials() {
        return this.getBooleanAttribute('access_control_allow_credentials');
    }
    public set accessControlAllowCredentials(value: boolean | cdktn.IResolvable) {
        this._accessControlAllowCredentials = value;
    }
    public resetAccessControlAllowCredentials() {
        this._accessControlAllowCredentials = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accessControlAllowCredentialsInput() {
        return this._accessControlAllowCredentials;
    }

    // access_control_allow_headers - computed: true, optional: true, required: false
    private _accessControlAllowHeaders = new AccessControlAllowHeadersPropertyOutputReference(this, "access_control_allow_headers");
    public get accessControlAllowHeaders() {
        return this._accessControlAllowHeaders;
    }
    public putAccessControlAllowHeaders(value: AccessControlAllowHeadersProperty) {
        this._accessControlAllowHeaders.internalValue = value;
    }
    public resetAccessControlAllowHeaders() {
        this._accessControlAllowHeaders.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accessControlAllowHeadersInput() {
        return this._accessControlAllowHeaders.internalValue;
    }

    // access_control_allow_methods - computed: true, optional: true, required: false
    private _accessControlAllowMethods = new AccessControlAllowMethodsPropertyOutputReference(this, "access_control_allow_methods");
    public get accessControlAllowMethods() {
        return this._accessControlAllowMethods;
    }
    public putAccessControlAllowMethods(value: AccessControlAllowMethodsProperty) {
        this._accessControlAllowMethods.internalValue = value;
    }
    public resetAccessControlAllowMethods() {
        this._accessControlAllowMethods.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accessControlAllowMethodsInput() {
        return this._accessControlAllowMethods.internalValue;
    }

    // access_control_allow_origins - computed: true, optional: true, required: false
    private _accessControlAllowOrigins = new AccessControlAllowOriginsPropertyOutputReference(this, "access_control_allow_origins");
    public get accessControlAllowOrigins() {
        return this._accessControlAllowOrigins;
    }
    public putAccessControlAllowOrigins(value: AccessControlAllowOriginsProperty) {
        this._accessControlAllowOrigins.internalValue = value;
    }
    public resetAccessControlAllowOrigins() {
        this._accessControlAllowOrigins.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accessControlAllowOriginsInput() {
        return this._accessControlAllowOrigins.internalValue;
    }

    // access_control_expose_headers - computed: true, optional: true, required: false
    private _accessControlExposeHeaders = new AccessControlExposeHeadersPropertyOutputReference(this, "access_control_expose_headers");
    public get accessControlExposeHeaders() {
        return this._accessControlExposeHeaders;
    }
    public putAccessControlExposeHeaders(value: AccessControlExposeHeadersProperty) {
        this._accessControlExposeHeaders.internalValue = value;
    }
    public resetAccessControlExposeHeaders() {
        this._accessControlExposeHeaders.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accessControlExposeHeadersInput() {
        return this._accessControlExposeHeaders.internalValue;
    }

    // access_control_max_age_sec - computed: true, optional: true, required: false
    private _accessControlMaxAgeSec?: number; 
    public get accessControlMaxAgeSec() {
        return this.getNumberAttribute('access_control_max_age_sec');
    }
    public set accessControlMaxAgeSec(value: number) {
        this._accessControlMaxAgeSec = value;
    }
    public resetAccessControlMaxAgeSec() {
        this._accessControlMaxAgeSec = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accessControlMaxAgeSecInput() {
        return this._accessControlMaxAgeSec;
    }

    // origin_override - computed: true, optional: true, required: false
    private _originOverride?: boolean | cdktn.IResolvable; 
    public get originOverride() {
        return this.getBooleanAttribute('origin_override');
    }
    public set originOverride(value: boolean | cdktn.IResolvable) {
        this._originOverride = value;
    }
    public resetOriginOverride() {
        this._originOverride = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get originOverrideInput() {
        return this._originOverride;
    }
}
export interface CustomHeaderProperty {
    /**
    * The HTTP response header name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_response_headers_policy#header CcResponseHeadersPolicy#header}
    */
    readonly header?: string;
    /**
    * A Boolean that determines whether CloudFront overrides a response header with the same name received from the origin with the header specified here.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_response_headers_policy#override CcResponseHeadersPolicy#override}
    */
    readonly override?: boolean | cdktn.IResolvable;
    /**
    * The value for the HTTP response header.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_response_headers_policy#value CcResponseHeadersPolicy#value}
    */
    readonly value?: string;
}
export class CustomHeaderPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): CustomHeaderProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._header !== undefined) {
            hasAnyValues = true;
            internalValueResult.header = this._header;
        }
        if (this._override !== undefined) {
            hasAnyValues = true;
            internalValueResult.override = this._override;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CustomHeaderProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._header = undefined;
            this._override = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._header = value.header;
            this._override = value.override;
            this._value = value.value;
        }
    }

    // header - computed: true, optional: true, required: false
    private _header?: string; 
    public get header() {
        return this.getStringAttribute('header');
    }
    public set header(value: string) {
        this._header = value;
    }
    public resetHeader() {
        this._header = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get headerInput() {
        return this._header;
    }

    // override - computed: true, optional: true, required: false
    private _override?: boolean | cdktn.IResolvable; 
    public get override() {
        return this.getBooleanAttribute('override');
    }
    public set override(value: boolean | cdktn.IResolvable) {
        this._override = value;
    }
    public resetOverride() {
        this._override = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get overrideInput() {
        return this._override;
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

export class CustomHeaderPropertyList extends cdktn.ComplexList {
    public internalValue? : CustomHeaderProperty[] | cdktn.IResolvable

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
    public get(index: number): CustomHeaderPropertyOutputReference {
        return new CustomHeaderPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface CustomHeadersConfigProperty {
    /**
    * The list of HTTP response headers and their values.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_response_headers_policy#items CcResponseHeadersPolicy#items}
    */
    readonly items?: CustomHeaderProperty[] | cdktn.IResolvable;
}
export class CustomHeadersConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CustomHeadersConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._items?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.items = this._items?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CustomHeadersConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._items.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._items.internalValue = value.items;
        }
    }

    // items - computed: true, optional: true, required: false
    private _items = new CustomHeaderPropertyList(this, "items", false);
    public get items() {
        return this._items;
    }
    public putItems(value: CustomHeaderProperty[] | cdktn.IResolvable) {
        this._items.internalValue = value;
    }
    public resetItems() {
        this._items.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get itemsInput() {
        return this._items.internalValue;
    }
}
export interface RemoveHeaderProperty {
    /**
    * The HTTP header name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_response_headers_policy#header CcResponseHeadersPolicy#header}
    */
    readonly header?: string;
}
export class RemoveHeaderPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): RemoveHeaderProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._header !== undefined) {
            hasAnyValues = true;
            internalValueResult.header = this._header;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RemoveHeaderProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._header = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._header = value.header;
        }
    }

    // header - computed: true, optional: true, required: false
    private _header?: string; 
    public get header() {
        return this.getStringAttribute('header');
    }
    public set header(value: string) {
        this._header = value;
    }
    public resetHeader() {
        this._header = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get headerInput() {
        return this._header;
    }
}

export class RemoveHeaderPropertyList extends cdktn.ComplexList {
    public internalValue? : RemoveHeaderProperty[] | cdktn.IResolvable

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
    public get(index: number): RemoveHeaderPropertyOutputReference {
        return new RemoveHeaderPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface RemoveHeadersConfigProperty {
    /**
    * The list of HTTP header names.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_response_headers_policy#items CcResponseHeadersPolicy#items}
    */
    readonly items?: RemoveHeaderProperty[] | cdktn.IResolvable;
}
export class RemoveHeadersConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RemoveHeadersConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._items?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.items = this._items?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RemoveHeadersConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._items.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._items.internalValue = value.items;
        }
    }

    // items - computed: true, optional: true, required: false
    private _items = new RemoveHeaderPropertyList(this, "items", true);
    public get items() {
        return this._items;
    }
    public putItems(value: RemoveHeaderProperty[] | cdktn.IResolvable) {
        this._items.internalValue = value;
    }
    public resetItems() {
        this._items.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get itemsInput() {
        return this._items.internalValue;
    }
}
export interface ContentSecurityPolicyProperty {
    /**
    * The policy directives and their values that CloudFront includes as values for the ``Content-Security-Policy`` HTTP response header.
    *  For more information about the ``Content-Security-Policy`` HTTP response header, see [Content-Security-Policy](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy) in the MDN Web Docs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_response_headers_policy#content_security_policy CcResponseHeadersPolicy#content_security_policy}
    */
    readonly contentSecurityPolicy?: string;
    /**
    * A Boolean that determines whether CloudFront overrides the ``Content-Security-Policy`` HTTP response header received from the origin with the one specified in this response headers policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_response_headers_policy#override CcResponseHeadersPolicy#override}
    */
    readonly override?: boolean | cdktn.IResolvable;
}
export class ContentSecurityPolicyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ContentSecurityPolicyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentSecurityPolicy !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentSecurityPolicy = this._contentSecurityPolicy;
        }
        if (this._override !== undefined) {
            hasAnyValues = true;
            internalValueResult.override = this._override;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ContentSecurityPolicyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentSecurityPolicy = undefined;
            this._override = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentSecurityPolicy = value.contentSecurityPolicy;
            this._override = value.override;
        }
    }

    // content_security_policy - computed: true, optional: true, required: false
    private _contentSecurityPolicy?: string; 
    public get contentSecurityPolicy() {
        return this.getStringAttribute('content_security_policy');
    }
    public set contentSecurityPolicy(value: string) {
        this._contentSecurityPolicy = value;
    }
    public resetContentSecurityPolicy() {
        this._contentSecurityPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentSecurityPolicyInput() {
        return this._contentSecurityPolicy;
    }

    // override - computed: true, optional: true, required: false
    private _override?: boolean | cdktn.IResolvable; 
    public get override() {
        return this.getBooleanAttribute('override');
    }
    public set override(value: boolean | cdktn.IResolvable) {
        this._override = value;
    }
    public resetOverride() {
        this._override = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get overrideInput() {
        return this._override;
    }
}
export interface ContentTypeOptionsProperty {
    /**
    * A Boolean that determines whether CloudFront overrides the ``X-Content-Type-Options`` HTTP response header received from the origin with the one specified in this response headers policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_response_headers_policy#override CcResponseHeadersPolicy#override}
    */
    readonly override?: boolean | cdktn.IResolvable;
}
export class ContentTypeOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ContentTypeOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._override !== undefined) {
            hasAnyValues = true;
            internalValueResult.override = this._override;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ContentTypeOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._override = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._override = value.override;
        }
    }

    // override - computed: true, optional: true, required: false
    private _override?: boolean | cdktn.IResolvable; 
    public get override() {
        return this.getBooleanAttribute('override');
    }
    public set override(value: boolean | cdktn.IResolvable) {
        this._override = value;
    }
    public resetOverride() {
        this._override = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get overrideInput() {
        return this._override;
    }
}
export interface FrameOptionsProperty {
    /**
    * The value of the ``X-Frame-Options`` HTTP response header. Valid values are ``DENY`` and ``SAMEORIGIN``.
    *  For more information about these values, see [X-Frame-Options](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options) in the MDN Web Docs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_response_headers_policy#frame_option CcResponseHeadersPolicy#frame_option}
    */
    readonly frameOption?: string;
    /**
    * A Boolean that determines whether CloudFront overrides the ``X-Frame-Options`` HTTP response header received from the origin with the one specified in this response headers policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_response_headers_policy#override CcResponseHeadersPolicy#override}
    */
    readonly override?: boolean | cdktn.IResolvable;
}
export class FrameOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FrameOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._frameOption !== undefined) {
            hasAnyValues = true;
            internalValueResult.frameOption = this._frameOption;
        }
        if (this._override !== undefined) {
            hasAnyValues = true;
            internalValueResult.override = this._override;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FrameOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._frameOption = undefined;
            this._override = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._frameOption = value.frameOption;
            this._override = value.override;
        }
    }

    // frame_option - computed: true, optional: true, required: false
    private _frameOption?: string; 
    public get frameOption() {
        return this.getStringAttribute('frame_option');
    }
    public set frameOption(value: string) {
        this._frameOption = value;
    }
    public resetFrameOption() {
        this._frameOption = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get frameOptionInput() {
        return this._frameOption;
    }

    // override - computed: true, optional: true, required: false
    private _override?: boolean | cdktn.IResolvable; 
    public get override() {
        return this.getBooleanAttribute('override');
    }
    public set override(value: boolean | cdktn.IResolvable) {
        this._override = value;
    }
    public resetOverride() {
        this._override = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get overrideInput() {
        return this._override;
    }
}
export interface ReferrerPolicyProperty {
    /**
    * A Boolean that determines whether CloudFront overrides the ``Referrer-Policy`` HTTP response header received from the origin with the one specified in this response headers policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_response_headers_policy#override CcResponseHeadersPolicy#override}
    */
    readonly override?: boolean | cdktn.IResolvable;
    /**
    * Determines whether CloudFront includes the ``Referrer-Policy`` HTTP response header and the header's value.
    *  For more information about the ``Referrer-Policy`` HTTP response header, see [Referrer-Policy](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy) in the MDN Web Docs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_response_headers_policy#referrer_policy CcResponseHeadersPolicy#referrer_policy}
    */
    readonly referrerPolicy?: string;
}
export class ReferrerPolicyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ReferrerPolicyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._override !== undefined) {
            hasAnyValues = true;
            internalValueResult.override = this._override;
        }
        if (this._referrerPolicy !== undefined) {
            hasAnyValues = true;
            internalValueResult.referrerPolicy = this._referrerPolicy;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ReferrerPolicyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._override = undefined;
            this._referrerPolicy = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._override = value.override;
            this._referrerPolicy = value.referrerPolicy;
        }
    }

    // override - computed: true, optional: true, required: false
    private _override?: boolean | cdktn.IResolvable; 
    public get override() {
        return this.getBooleanAttribute('override');
    }
    public set override(value: boolean | cdktn.IResolvable) {
        this._override = value;
    }
    public resetOverride() {
        this._override = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get overrideInput() {
        return this._override;
    }

    // referrer_policy - computed: true, optional: true, required: false
    private _referrerPolicy?: string; 
    public get referrerPolicy() {
        return this.getStringAttribute('referrer_policy');
    }
    public set referrerPolicy(value: string) {
        this._referrerPolicy = value;
    }
    public resetReferrerPolicy() {
        this._referrerPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get referrerPolicyInput() {
        return this._referrerPolicy;
    }
}
export interface StrictTransportSecurityProperty {
    /**
    * A number that CloudFront uses as the value for the ``max-age`` directive in the ``Strict-Transport-Security`` HTTP response header.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_response_headers_policy#access_control_max_age_sec CcResponseHeadersPolicy#access_control_max_age_sec}
    */
    readonly accessControlMaxAgeSec?: number;
    /**
    * A Boolean that determines whether CloudFront includes the ``includeSubDomains`` directive in the ``Strict-Transport-Security`` HTTP response header.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_response_headers_policy#include_subdomains CcResponseHeadersPolicy#include_subdomains}
    */
    readonly includeSubdomains?: boolean | cdktn.IResolvable;
    /**
    * A Boolean that determines whether CloudFront overrides the ``Strict-Transport-Security`` HTTP response header received from the origin with the one specified in this response headers policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_response_headers_policy#override CcResponseHeadersPolicy#override}
    */
    readonly override?: boolean | cdktn.IResolvable;
    /**
    * A Boolean that determines whether CloudFront includes the ``preload`` directive in the ``Strict-Transport-Security`` HTTP response header.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_response_headers_policy#preload CcResponseHeadersPolicy#preload}
    */
    readonly preload?: boolean | cdktn.IResolvable;
}
export class StrictTransportSecurityPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StrictTransportSecurityProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._accessControlMaxAgeSec !== undefined) {
            hasAnyValues = true;
            internalValueResult.accessControlMaxAgeSec = this._accessControlMaxAgeSec;
        }
        if (this._includeSubdomains !== undefined) {
            hasAnyValues = true;
            internalValueResult.includeSubdomains = this._includeSubdomains;
        }
        if (this._override !== undefined) {
            hasAnyValues = true;
            internalValueResult.override = this._override;
        }
        if (this._preload !== undefined) {
            hasAnyValues = true;
            internalValueResult.preload = this._preload;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StrictTransportSecurityProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accessControlMaxAgeSec = undefined;
            this._includeSubdomains = undefined;
            this._override = undefined;
            this._preload = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accessControlMaxAgeSec = value.accessControlMaxAgeSec;
            this._includeSubdomains = value.includeSubdomains;
            this._override = value.override;
            this._preload = value.preload;
        }
    }

    // access_control_max_age_sec - computed: true, optional: true, required: false
    private _accessControlMaxAgeSec?: number; 
    public get accessControlMaxAgeSec() {
        return this.getNumberAttribute('access_control_max_age_sec');
    }
    public set accessControlMaxAgeSec(value: number) {
        this._accessControlMaxAgeSec = value;
    }
    public resetAccessControlMaxAgeSec() {
        this._accessControlMaxAgeSec = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accessControlMaxAgeSecInput() {
        return this._accessControlMaxAgeSec;
    }

    // include_subdomains - computed: true, optional: true, required: false
    private _includeSubdomains?: boolean | cdktn.IResolvable; 
    public get includeSubdomains() {
        return this.getBooleanAttribute('include_subdomains');
    }
    public set includeSubdomains(value: boolean | cdktn.IResolvable) {
        this._includeSubdomains = value;
    }
    public resetIncludeSubdomains() {
        this._includeSubdomains = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get includeSubdomainsInput() {
        return this._includeSubdomains;
    }

    // override - computed: true, optional: true, required: false
    private _override?: boolean | cdktn.IResolvable; 
    public get override() {
        return this.getBooleanAttribute('override');
    }
    public set override(value: boolean | cdktn.IResolvable) {
        this._override = value;
    }
    public resetOverride() {
        this._override = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get overrideInput() {
        return this._override;
    }

    // preload - computed: true, optional: true, required: false
    private _preload?: boolean | cdktn.IResolvable; 
    public get preload() {
        return this.getBooleanAttribute('preload');
    }
    public set preload(value: boolean | cdktn.IResolvable) {
        this._preload = value;
    }
    public resetPreload() {
        this._preload = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get preloadInput() {
        return this._preload;
    }
}
export interface XSSProtectionProperty {
    /**
    * A Boolean that determines whether CloudFront includes the ``mode=block`` directive in the ``X-XSS-Protection`` header.
    *  For more information about this directive, see [X-XSS-Protection](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection) in the MDN Web Docs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_response_headers_policy#mode_block CcResponseHeadersPolicy#mode_block}
    */
    readonly modeBlock?: boolean | cdktn.IResolvable;
    /**
    * A Boolean that determines whether CloudFront overrides the ``X-XSS-Protection`` HTTP response header received from the origin with the one specified in this response headers policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_response_headers_policy#override CcResponseHeadersPolicy#override}
    */
    readonly override?: boolean | cdktn.IResolvable;
    /**
    * A Boolean that determines the value of the ``X-XSS-Protection`` HTTP response header. When this setting is ``true``, the value of the ``X-XSS-Protection`` header is ``1``. When this setting is ``false``, the value of the ``X-XSS-Protection`` header is ``0``.
    *  For more information about these settings, see [X-XSS-Protection](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection) in the MDN Web Docs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_response_headers_policy#protection CcResponseHeadersPolicy#protection}
    */
    readonly protection?: boolean | cdktn.IResolvable;
    /**
    * A reporting URI, which CloudFront uses as the value of the ``report`` directive in the ``X-XSS-Protection`` header.
    *  You cannot specify a ``ReportUri`` when ``ModeBlock`` is ``true``.
    *  For more information about using a reporting URL, see [X-XSS-Protection](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection) in the MDN Web Docs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_response_headers_policy#report_uri CcResponseHeadersPolicy#report_uri}
    */
    readonly reportUri?: string;
}
export class XSSProtectionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): XSSProtectionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._modeBlock !== undefined) {
            hasAnyValues = true;
            internalValueResult.modeBlock = this._modeBlock;
        }
        if (this._override !== undefined) {
            hasAnyValues = true;
            internalValueResult.override = this._override;
        }
        if (this._protection !== undefined) {
            hasAnyValues = true;
            internalValueResult.protection = this._protection;
        }
        if (this._reportUri !== undefined) {
            hasAnyValues = true;
            internalValueResult.reportUri = this._reportUri;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: XSSProtectionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._modeBlock = undefined;
            this._override = undefined;
            this._protection = undefined;
            this._reportUri = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._modeBlock = value.modeBlock;
            this._override = value.override;
            this._protection = value.protection;
            this._reportUri = value.reportUri;
        }
    }

    // mode_block - computed: true, optional: true, required: false
    private _modeBlock?: boolean | cdktn.IResolvable; 
    public get modeBlock() {
        return this.getBooleanAttribute('mode_block');
    }
    public set modeBlock(value: boolean | cdktn.IResolvable) {
        this._modeBlock = value;
    }
    public resetModeBlock() {
        this._modeBlock = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modeBlockInput() {
        return this._modeBlock;
    }

    // override - computed: true, optional: true, required: false
    private _override?: boolean | cdktn.IResolvable; 
    public get override() {
        return this.getBooleanAttribute('override');
    }
    public set override(value: boolean | cdktn.IResolvable) {
        this._override = value;
    }
    public resetOverride() {
        this._override = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get overrideInput() {
        return this._override;
    }

    // protection - computed: true, optional: true, required: false
    private _protection?: boolean | cdktn.IResolvable; 
    public get protection() {
        return this.getBooleanAttribute('protection');
    }
    public set protection(value: boolean | cdktn.IResolvable) {
        this._protection = value;
    }
    public resetProtection() {
        this._protection = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get protectionInput() {
        return this._protection;
    }

    // report_uri - computed: true, optional: true, required: false
    private _reportUri?: string; 
    public get reportUri() {
        return this.getStringAttribute('report_uri');
    }
    public set reportUri(value: string) {
        this._reportUri = value;
    }
    public resetReportUri() {
        this._reportUri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get reportUriInput() {
        return this._reportUri;
    }
}
export interface SecurityHeadersConfigProperty {
    /**
    * The policy directives and their values that CloudFront includes as values for the ``Content-Security-Policy`` HTTP response header.
    *  For more information about the ``Content-Security-Policy`` HTTP response header, see [Content-Security-Policy](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy) in the MDN Web Docs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_response_headers_policy#content_security_policy CcResponseHeadersPolicy#content_security_policy}
    */
    readonly contentSecurityPolicy?: ContentSecurityPolicyProperty;
    /**
    * Determines whether CloudFront includes the ``X-Content-Type-Options`` HTTP response header with its value set to ``nosniff``.
    *  For more information about the ``X-Content-Type-Options`` HTTP response header, see [X-Content-Type-Options](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options) in the MDN Web Docs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_response_headers_policy#content_type_options CcResponseHeadersPolicy#content_type_options}
    */
    readonly contentTypeOptions?: ContentTypeOptionsProperty;
    /**
    * Determines whether CloudFront includes the ``X-Frame-Options`` HTTP response header and the header's value.
    *  For more information about the ``X-Frame-Options`` HTTP response header, see [X-Frame-Options](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options) in the MDN Web Docs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_response_headers_policy#frame_options CcResponseHeadersPolicy#frame_options}
    */
    readonly frameOptions?: FrameOptionsProperty;
    /**
    * Determines whether CloudFront includes the ``Referrer-Policy`` HTTP response header and the header's value.
    *  For more information about the ``Referrer-Policy`` HTTP response header, see [Referrer-Policy](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy) in the MDN Web Docs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_response_headers_policy#referrer_policy CcResponseHeadersPolicy#referrer_policy}
    */
    readonly referrerPolicy?: ReferrerPolicyProperty;
    /**
    * Determines whether CloudFront includes the ``Strict-Transport-Security`` HTTP response header and the header's value.
    *  For more information about the ``Strict-Transport-Security`` HTTP response header, see [Security headers](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/understanding-response-headers-policies.html#understanding-response-headers-policies-security) in the *Amazon CloudFront Developer Guide* and [Strict-Transport-Security](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security) in the MDN Web Docs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_response_headers_policy#strict_transport_security CcResponseHeadersPolicy#strict_transport_security}
    */
    readonly strictTransportSecurity?: StrictTransportSecurityProperty;
    /**
    * Determines whether CloudFront includes the ``X-XSS-Protection`` HTTP response header and the header's value.
    *  For more information about the ``X-XSS-Protection`` HTTP response header, see [X-XSS-Protection](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection) in the MDN Web Docs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_response_headers_policy#xss_protection CcResponseHeadersPolicy#xss_protection}
    */
    readonly xssProtection?: XSSProtectionProperty;
}
export class SecurityHeadersConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SecurityHeadersConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentSecurityPolicy?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentSecurityPolicy = this._contentSecurityPolicy?.internalValue;
        }
        if (this._contentTypeOptions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentTypeOptions = this._contentTypeOptions?.internalValue;
        }
        if (this._frameOptions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.frameOptions = this._frameOptions?.internalValue;
        }
        if (this._referrerPolicy?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.referrerPolicy = this._referrerPolicy?.internalValue;
        }
        if (this._strictTransportSecurity?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.strictTransportSecurity = this._strictTransportSecurity?.internalValue;
        }
        if (this._xssProtection?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.xssProtection = this._xssProtection?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SecurityHeadersConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentSecurityPolicy.internalValue = undefined;
            this._contentTypeOptions.internalValue = undefined;
            this._frameOptions.internalValue = undefined;
            this._referrerPolicy.internalValue = undefined;
            this._strictTransportSecurity.internalValue = undefined;
            this._xssProtection.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentSecurityPolicy.internalValue = value.contentSecurityPolicy;
            this._contentTypeOptions.internalValue = value.contentTypeOptions;
            this._frameOptions.internalValue = value.frameOptions;
            this._referrerPolicy.internalValue = value.referrerPolicy;
            this._strictTransportSecurity.internalValue = value.strictTransportSecurity;
            this._xssProtection.internalValue = value.xssProtection;
        }
    }

    // content_security_policy - computed: true, optional: true, required: false
    private _contentSecurityPolicy = new ContentSecurityPolicyPropertyOutputReference(this, "content_security_policy");
    public get contentSecurityPolicy() {
        return this._contentSecurityPolicy;
    }
    public putContentSecurityPolicy(value: ContentSecurityPolicyProperty) {
        this._contentSecurityPolicy.internalValue = value;
    }
    public resetContentSecurityPolicy() {
        this._contentSecurityPolicy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentSecurityPolicyInput() {
        return this._contentSecurityPolicy.internalValue;
    }

    // content_type_options - computed: true, optional: true, required: false
    private _contentTypeOptions = new ContentTypeOptionsPropertyOutputReference(this, "content_type_options");
    public get contentTypeOptions() {
        return this._contentTypeOptions;
    }
    public putContentTypeOptions(value: ContentTypeOptionsProperty) {
        this._contentTypeOptions.internalValue = value;
    }
    public resetContentTypeOptions() {
        this._contentTypeOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentTypeOptionsInput() {
        return this._contentTypeOptions.internalValue;
    }

    // frame_options - computed: true, optional: true, required: false
    private _frameOptions = new FrameOptionsPropertyOutputReference(this, "frame_options");
    public get frameOptions() {
        return this._frameOptions;
    }
    public putFrameOptions(value: FrameOptionsProperty) {
        this._frameOptions.internalValue = value;
    }
    public resetFrameOptions() {
        this._frameOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get frameOptionsInput() {
        return this._frameOptions.internalValue;
    }

    // referrer_policy - computed: true, optional: true, required: false
    private _referrerPolicy = new ReferrerPolicyPropertyOutputReference(this, "referrer_policy");
    public get referrerPolicy() {
        return this._referrerPolicy;
    }
    public putReferrerPolicy(value: ReferrerPolicyProperty) {
        this._referrerPolicy.internalValue = value;
    }
    public resetReferrerPolicy() {
        this._referrerPolicy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get referrerPolicyInput() {
        return this._referrerPolicy.internalValue;
    }

    // strict_transport_security - computed: true, optional: true, required: false
    private _strictTransportSecurity = new StrictTransportSecurityPropertyOutputReference(this, "strict_transport_security");
    public get strictTransportSecurity() {
        return this._strictTransportSecurity;
    }
    public putStrictTransportSecurity(value: StrictTransportSecurityProperty) {
        this._strictTransportSecurity.internalValue = value;
    }
    public resetStrictTransportSecurity() {
        this._strictTransportSecurity.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get strictTransportSecurityInput() {
        return this._strictTransportSecurity.internalValue;
    }

    // xss_protection - computed: true, optional: true, required: false
    private _xssProtection = new XSSProtectionPropertyOutputReference(this, "xss_protection");
    public get xssProtection() {
        return this._xssProtection;
    }
    public putXssProtection(value: XSSProtectionProperty) {
        this._xssProtection.internalValue = value;
    }
    public resetXssProtection() {
        this._xssProtection.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get xssProtectionInput() {
        return this._xssProtection.internalValue;
    }
}
export interface ServerTimingHeadersConfigProperty {
    /**
    * A Boolean that determines whether CloudFront adds the ``Server-Timing`` header to HTTP responses that it sends in response to requests that match a cache behavior that's associated with this response headers policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_response_headers_policy#enabled CcResponseHeadersPolicy#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
    /**
    * A number 0?100 (inclusive) that specifies the percentage of responses that you want CloudFront to add the ``Server-Timing`` header to. When you set the sampling rate to 100, CloudFront adds the ``Server-Timing`` header to the HTTP response for every request that matches the cache behavior that this response headers policy is attached to. When you set it to 50, CloudFront adds the header to 50% of the responses for requests that match the cache behavior. You can set the sampling rate to any number 0?100 with up to four decimal places.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_response_headers_policy#sampling_rate CcResponseHeadersPolicy#sampling_rate}
    */
    readonly samplingRate?: number;
}
export class ServerTimingHeadersConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ServerTimingHeadersConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._samplingRate !== undefined) {
            hasAnyValues = true;
            internalValueResult.samplingRate = this._samplingRate;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ServerTimingHeadersConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
            this._samplingRate = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
            this._samplingRate = value.samplingRate;
        }
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

    // sampling_rate - computed: true, optional: true, required: false
    private _samplingRate?: number; 
    public get samplingRate() {
        return this.getNumberAttribute('sampling_rate');
    }
    public set samplingRate(value: number) {
        this._samplingRate = value;
    }
    public resetSamplingRate() {
        this._samplingRate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get samplingRateInput() {
        return this._samplingRate;
    }
}
export interface ResponseHeadersPolicyConfigProperty {
    /**
    * A comment to describe the response headers policy.
    *  The comment cannot be longer than 128 characters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_response_headers_policy#comment CcResponseHeadersPolicy#comment}
    */
    readonly comment?: string;
    /**
    * A configuration for a set of HTTP response headers that are used for cross-origin resource sharing (CORS).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_response_headers_policy#cors_config CcResponseHeadersPolicy#cors_config}
    */
    readonly corsConfig?: CorsConfigProperty;
    /**
    * A configuration for a set of custom HTTP response headers.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_response_headers_policy#custom_headers_config CcResponseHeadersPolicy#custom_headers_config}
    */
    readonly customHeadersConfig?: CustomHeadersConfigProperty;
    /**
    * A name to identify the response headers policy.
    *  The name must be unique for response headers policies in this AWS-account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_response_headers_policy#name CcResponseHeadersPolicy#name}
    */
    readonly name: string;
    /**
    * A configuration for a set of HTTP headers to remove from the HTTP response.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_response_headers_policy#remove_headers_config CcResponseHeadersPolicy#remove_headers_config}
    */
    readonly removeHeadersConfig?: RemoveHeadersConfigProperty;
    /**
    * A configuration for a set of security-related HTTP response headers.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_response_headers_policy#security_headers_config CcResponseHeadersPolicy#security_headers_config}
    */
    readonly securityHeadersConfig?: SecurityHeadersConfigProperty;
    /**
    * A configuration for enabling the ``Server-Timing`` header in HTTP responses sent from CloudFront.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudfront_response_headers_policy#server_timing_headers_config CcResponseHeadersPolicy#server_timing_headers_config}
    */
    readonly serverTimingHeadersConfig?: ServerTimingHeadersConfigProperty;
}
export class ResponseHeadersPolicyConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ResponseHeadersPolicyConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comment !== undefined) {
            hasAnyValues = true;
            internalValueResult.comment = this._comment;
        }
        if (this._corsConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.corsConfig = this._corsConfig?.internalValue;
        }
        if (this._customHeadersConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.customHeadersConfig = this._customHeadersConfig?.internalValue;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._removeHeadersConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.removeHeadersConfig = this._removeHeadersConfig?.internalValue;
        }
        if (this._securityHeadersConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.securityHeadersConfig = this._securityHeadersConfig?.internalValue;
        }
        if (this._serverTimingHeadersConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.serverTimingHeadersConfig = this._serverTimingHeadersConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ResponseHeadersPolicyConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comment = undefined;
            this._corsConfig.internalValue = undefined;
            this._customHeadersConfig.internalValue = undefined;
            this._name = undefined;
            this._removeHeadersConfig.internalValue = undefined;
            this._securityHeadersConfig.internalValue = undefined;
            this._serverTimingHeadersConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comment = value.comment;
            this._corsConfig.internalValue = value.corsConfig;
            this._customHeadersConfig.internalValue = value.customHeadersConfig;
            this._name = value.name;
            this._removeHeadersConfig.internalValue = value.removeHeadersConfig;
            this._securityHeadersConfig.internalValue = value.securityHeadersConfig;
            this._serverTimingHeadersConfig.internalValue = value.serverTimingHeadersConfig;
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

    // cors_config - computed: true, optional: true, required: false
    private _corsConfig = new CorsConfigPropertyOutputReference(this, "cors_config");
    public get corsConfig() {
        return this._corsConfig;
    }
    public putCorsConfig(value: CorsConfigProperty) {
        this._corsConfig.internalValue = value;
    }
    public resetCorsConfig() {
        this._corsConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get corsConfigInput() {
        return this._corsConfig.internalValue;
    }

    // custom_headers_config - computed: true, optional: true, required: false
    private _customHeadersConfig = new CustomHeadersConfigPropertyOutputReference(this, "custom_headers_config");
    public get customHeadersConfig() {
        return this._customHeadersConfig;
    }
    public putCustomHeadersConfig(value: CustomHeadersConfigProperty) {
        this._customHeadersConfig.internalValue = value;
    }
    public resetCustomHeadersConfig() {
        this._customHeadersConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customHeadersConfigInput() {
        return this._customHeadersConfig.internalValue;
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

    // remove_headers_config - computed: true, optional: true, required: false
    private _removeHeadersConfig = new RemoveHeadersConfigPropertyOutputReference(this, "remove_headers_config");
    public get removeHeadersConfig() {
        return this._removeHeadersConfig;
    }
    public putRemoveHeadersConfig(value: RemoveHeadersConfigProperty) {
        this._removeHeadersConfig.internalValue = value;
    }
    public resetRemoveHeadersConfig() {
        this._removeHeadersConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get removeHeadersConfigInput() {
        return this._removeHeadersConfig.internalValue;
    }

    // security_headers_config - computed: true, optional: true, required: false
    private _securityHeadersConfig = new SecurityHeadersConfigPropertyOutputReference(this, "security_headers_config");
    public get securityHeadersConfig() {
        return this._securityHeadersConfig;
    }
    public putSecurityHeadersConfig(value: SecurityHeadersConfigProperty) {
        this._securityHeadersConfig.internalValue = value;
    }
    public resetSecurityHeadersConfig() {
        this._securityHeadersConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityHeadersConfigInput() {
        return this._securityHeadersConfig.internalValue;
    }

    // server_timing_headers_config - computed: true, optional: true, required: false
    private _serverTimingHeadersConfig = new ServerTimingHeadersConfigPropertyOutputReference(this, "server_timing_headers_config");
    public get serverTimingHeadersConfig() {
        return this._serverTimingHeadersConfig;
    }
    public putServerTimingHeadersConfig(value: ServerTimingHeadersConfigProperty) {
        this._serverTimingHeadersConfig.internalValue = value;
    }
    public resetServerTimingHeadersConfig() {
        this._serverTimingHeadersConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serverTimingHeadersConfigInput() {
        return this._serverTimingHeadersConfig.internalValue;
    }
}
}
