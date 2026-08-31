// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_url

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcUrlProps extends cdktn.TerraformMetaArguments {
    /**
    * Can be either AWS_IAM if the requests are authorized via IAM, or NONE if no authorization is configured on the Function URL.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_url#auth_type CcUrl#auth_type}
    */
    readonly authType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_url#cors CcUrl#cors}
    */
    readonly cors?: CcUrl.CorsProperty;
    /**
    * The invocation mode for the function's URL. Set to BUFFERED if you want to buffer responses before returning them to the client. Set to RESPONSE_STREAM if you want to stream responses, allowing faster time to first byte and larger response payload sizes. If not set, defaults to BUFFERED.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_url#invoke_mode CcUrl#invoke_mode}
    */
    readonly invokeMode?: string;
    /**
    * The alias qualifier for the target function. If TargetFunctionArn is unqualified then Qualifier must be passed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_url#qualifier CcUrl#qualifier}
    */
    readonly qualifier?: string;
    /**
    * The Amazon Resource Name (ARN) of the function associated with the Function URL.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_url#target_function_arn CcUrl#target_function_arn}
    */
    readonly targetFunctionArn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_url awscc_lambda_url}
*/
export class CcUrl extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_lambda_url";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcUrl resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcUrl to import
    * @param importFromId The id of the existing CcUrl that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_url#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcUrl to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_lambda_url", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_url awscc_lambda_url} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcUrlProps
    */
    public constructor(scope: Construct, id: string, config: CcUrlProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_lambda_url',
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
        this._authType = config.authType;
        this._cors.internalValue = config.cors;
        this._invokeMode = config.invokeMode;
        this._qualifier = config.qualifier;
        this._targetFunctionArn = config.targetFunctionArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // auth_type - computed: false, optional: false, required: true
    private _authType?: string; 
    public get authType() {
        return this.getStringAttribute('auth_type');
    }
    public set authType(value: string) {
        this._authType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get authTypeInput() {
        return this._authType;
    }

    // cors - computed: true, optional: true, required: false
    private _cors = new CcUrl.CorsPropertyOutputReference(this, "cors");
    public get cors() {
        return this._cors;
    }
    public putCors(value: CcUrl.CorsProperty) {
        this._cors.internalValue = value;
    }
    public resetCors() {
        this._cors.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get corsInput() {
        return this._cors.internalValue;
    }

    // function_arn - computed: true, optional: false, required: false
    public get functionArn() {
        return this.getStringAttribute('function_arn');
    }

    // function_url - computed: true, optional: false, required: false
    public get functionUrl() {
        return this.getStringAttribute('function_url');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // invoke_mode - computed: true, optional: true, required: false
    private _invokeMode?: string; 
    public get invokeMode() {
        return this.getStringAttribute('invoke_mode');
    }
    public set invokeMode(value: string) {
        this._invokeMode = value;
    }
    public resetInvokeMode() {
        this._invokeMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get invokeModeInput() {
        return this._invokeMode;
    }

    // qualifier - computed: true, optional: true, required: false
    private _qualifier?: string; 
    public get qualifier() {
        return this.getStringAttribute('qualifier');
    }
    public set qualifier(value: string) {
        this._qualifier = value;
    }
    public resetQualifier() {
        this._qualifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get qualifierInput() {
        return this._qualifier;
    }

    // target_function_arn - computed: false, optional: false, required: true
    private _targetFunctionArn?: string; 
    public get targetFunctionArn() {
        return this.getStringAttribute('target_function_arn');
    }
    public set targetFunctionArn(value: string) {
        this._targetFunctionArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get targetFunctionArnInput() {
        return this._targetFunctionArn;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            auth_type: cdktn.stringToTerraform(this._authType),
            cors: ccUrlCorsPropertyToTerraform(this._cors.internalValue),
            invoke_mode: cdktn.stringToTerraform(this._invokeMode),
            qualifier: cdktn.stringToTerraform(this._qualifier),
            target_function_arn: cdktn.stringToTerraform(this._targetFunctionArn),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            auth_type: {
                value: cdktn.stringToHclTerraform(this._authType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            cors: {
                value: ccUrlCorsPropertyToHclTerraform(this._cors.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcUrl.CorsProperty",
            },
            invoke_mode: {
                value: cdktn.stringToHclTerraform(this._invokeMode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            qualifier: {
                value: cdktn.stringToHclTerraform(this._qualifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            target_function_arn: {
                value: cdktn.stringToHclTerraform(this._targetFunctionArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccUrlCorsPropertyToTerraform(struct?: CcUrl.CorsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        allow_credentials: cdktn.booleanToTerraform(struct!.allowCredentials),
        allow_headers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowHeaders),
        allow_methods: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowMethods),
        allow_origins: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowOrigins),
        expose_headers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.exposeHeaders),
        max_age: cdktn.numberToTerraform(struct!.maxAge),
    }
}


export function ccUrlCorsPropertyToHclTerraform(struct?: CcUrl.CorsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        allow_credentials: {
            value: cdktn.booleanToHclTerraform(struct!.allowCredentials),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        allow_headers: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowHeaders),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        allow_methods: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowMethods),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        allow_origins: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowOrigins),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        expose_headers: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.exposeHeaders),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        max_age: {
            value: cdktn.numberToHclTerraform(struct!.maxAge),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcUrl {
export interface CorsProperty {
    /**
    * Specifies whether credentials are included in the CORS request.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_url#allow_credentials CcUrl#allow_credentials}
    */
    readonly allowCredentials?: boolean | cdktn.IResolvable;
    /**
    * Represents a collection of allowed headers.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_url#allow_headers CcUrl#allow_headers}
    */
    readonly allowHeaders?: string[];
    /**
    * Represents a collection of allowed HTTP methods.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_url#allow_methods CcUrl#allow_methods}
    */
    readonly allowMethods?: string[];
    /**
    * Represents a collection of allowed origins.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_url#allow_origins CcUrl#allow_origins}
    */
    readonly allowOrigins?: string[];
    /**
    * Represents a collection of exposed headers.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_url#expose_headers CcUrl#expose_headers}
    */
    readonly exposeHeaders?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lambda_url#max_age CcUrl#max_age}
    */
    readonly maxAge?: number;
}
export class CorsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CorsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._allowCredentials !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowCredentials = this._allowCredentials;
        }
        if (this._allowHeaders !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowHeaders = this._allowHeaders;
        }
        if (this._allowMethods !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowMethods = this._allowMethods;
        }
        if (this._allowOrigins !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowOrigins = this._allowOrigins;
        }
        if (this._exposeHeaders !== undefined) {
            hasAnyValues = true;
            internalValueResult.exposeHeaders = this._exposeHeaders;
        }
        if (this._maxAge !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxAge = this._maxAge;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CorsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allowCredentials = undefined;
            this._allowHeaders = undefined;
            this._allowMethods = undefined;
            this._allowOrigins = undefined;
            this._exposeHeaders = undefined;
            this._maxAge = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allowCredentials = value.allowCredentials;
            this._allowHeaders = value.allowHeaders;
            this._allowMethods = value.allowMethods;
            this._allowOrigins = value.allowOrigins;
            this._exposeHeaders = value.exposeHeaders;
            this._maxAge = value.maxAge;
        }
    }

    // allow_credentials - computed: true, optional: true, required: false
    private _allowCredentials?: boolean | cdktn.IResolvable; 
    public get allowCredentials() {
        return this.getBooleanAttribute('allow_credentials');
    }
    public set allowCredentials(value: boolean | cdktn.IResolvable) {
        this._allowCredentials = value;
    }
    public resetAllowCredentials() {
        this._allowCredentials = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowCredentialsInput() {
        return this._allowCredentials;
    }

    // allow_headers - computed: true, optional: true, required: false
    private _allowHeaders?: string[]; 
    public get allowHeaders() {
        return this.getListAttribute('allow_headers');
    }
    public set allowHeaders(value: string[]) {
        this._allowHeaders = value;
    }
    public resetAllowHeaders() {
        this._allowHeaders = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowHeadersInput() {
        return this._allowHeaders;
    }

    // allow_methods - computed: true, optional: true, required: false
    private _allowMethods?: string[]; 
    public get allowMethods() {
        return this.getListAttribute('allow_methods');
    }
    public set allowMethods(value: string[]) {
        this._allowMethods = value;
    }
    public resetAllowMethods() {
        this._allowMethods = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowMethodsInput() {
        return this._allowMethods;
    }

    // allow_origins - computed: true, optional: true, required: false
    private _allowOrigins?: string[]; 
    public get allowOrigins() {
        return this.getListAttribute('allow_origins');
    }
    public set allowOrigins(value: string[]) {
        this._allowOrigins = value;
    }
    public resetAllowOrigins() {
        this._allowOrigins = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowOriginsInput() {
        return this._allowOrigins;
    }

    // expose_headers - computed: true, optional: true, required: false
    private _exposeHeaders?: string[]; 
    public get exposeHeaders() {
        return this.getListAttribute('expose_headers');
    }
    public set exposeHeaders(value: string[]) {
        this._exposeHeaders = value;
    }
    public resetExposeHeaders() {
        this._exposeHeaders = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get exposeHeadersInput() {
        return this._exposeHeaders;
    }

    // max_age - computed: true, optional: true, required: false
    private _maxAge?: number; 
    public get maxAge() {
        return this.getNumberAttribute('max_age');
    }
    public set maxAge(value: number) {
        this._maxAge = value;
    }
    public resetMaxAge() {
        this._maxAge = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxAgeInput() {
        return this._maxAge;
    }
}
}
