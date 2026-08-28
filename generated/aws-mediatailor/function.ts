// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediatailor_function

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcFunctionProps extends cdktn.TerraformMetaArguments {
    /**
    * Configuration for custom output functions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediatailor_function#custom_output_configuration CcFunction#custom_output_configuration}
    */
    readonly customOutputConfiguration?: CcFunction.CustomOutputConfigurationProperty;
    /**
    * A description of the function.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediatailor_function#description CcFunction#description}
    */
    readonly description?: string;
    /**
    * The unique identifier for the function.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediatailor_function#function_id CcFunction#function_id}
    */
    readonly functionId: string;
    /**
    * The type of the function. Determines which configuration object is used.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediatailor_function#function_type CcFunction#function_type}
    */
    readonly functionType: string;
    /**
    * Configuration for HTTP request functions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediatailor_function#http_request_configuration CcFunction#http_request_configuration}
    */
    readonly httpRequestConfiguration?: CcFunction.HttpRequestConfigurationProperty;
    /**
    * Configuration for sequential executor functions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediatailor_function#sequential_executor_configuration CcFunction#sequential_executor_configuration}
    */
    readonly sequentialExecutorConfiguration?: CcFunction.SequentialExecutorConfigurationProperty;
    /**
    * The tags to assign to the function resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediatailor_function#tags CcFunction#tags}
    */
    readonly tags?: CcFunction.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediatailor_function awscc_mediatailor_function}
*/
export class CcFunction extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_mediatailor_function";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcFunction resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcFunction to import
    * @param importFromId The id of the existing CcFunction that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediatailor_function#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcFunction to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_mediatailor_function", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediatailor_function awscc_mediatailor_function} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcFunctionProps
    */
    public constructor(scope: Construct, id: string, config: CcFunctionProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_mediatailor_function',
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
        this._customOutputConfiguration.internalValue = config.customOutputConfiguration;
        this._description = config.description;
        this._functionId = config.functionId;
        this._functionType = config.functionType;
        this._httpRequestConfiguration.internalValue = config.httpRequestConfiguration;
        this._sequentialExecutorConfiguration.internalValue = config.sequentialExecutorConfiguration;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // custom_output_configuration - computed: true, optional: true, required: false
    private _customOutputConfiguration = new CcFunction.CustomOutputConfigurationPropertyOutputReference(this, "custom_output_configuration");
    public get customOutputConfiguration() {
        return this._customOutputConfiguration;
    }
    public putCustomOutputConfiguration(value: CcFunction.CustomOutputConfigurationProperty) {
        this._customOutputConfiguration.internalValue = value;
    }
    public resetCustomOutputConfiguration() {
        this._customOutputConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customOutputConfigurationInput() {
        return this._customOutputConfiguration.internalValue;
    }

    // description - computed: true, optional: true, required: false
    private _description?: string; 
    public get description() {
        return this.getStringAttribute('description');
    }
    public set description(value: string) {
        this._description = value;
    }
    public resetDescription() {
        this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
        return this._description;
    }

    // function_id - computed: false, optional: false, required: true
    private _functionId?: string; 
    public get functionId() {
        return this.getStringAttribute('function_id');
    }
    public set functionId(value: string) {
        this._functionId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get functionIdInput() {
        return this._functionId;
    }

    // function_type - computed: false, optional: false, required: true
    private _functionType?: string; 
    public get functionType() {
        return this.getStringAttribute('function_type');
    }
    public set functionType(value: string) {
        this._functionType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get functionTypeInput() {
        return this._functionType;
    }

    // http_request_configuration - computed: true, optional: true, required: false
    private _httpRequestConfiguration = new CcFunction.HttpRequestConfigurationPropertyOutputReference(this, "http_request_configuration");
    public get httpRequestConfiguration() {
        return this._httpRequestConfiguration;
    }
    public putHttpRequestConfiguration(value: CcFunction.HttpRequestConfigurationProperty) {
        this._httpRequestConfiguration.internalValue = value;
    }
    public resetHttpRequestConfiguration() {
        this._httpRequestConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get httpRequestConfigurationInput() {
        return this._httpRequestConfiguration.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // sequential_executor_configuration - computed: true, optional: true, required: false
    private _sequentialExecutorConfiguration = new CcFunction.SequentialExecutorConfigurationPropertyOutputReference(this, "sequential_executor_configuration");
    public get sequentialExecutorConfiguration() {
        return this._sequentialExecutorConfiguration;
    }
    public putSequentialExecutorConfiguration(value: CcFunction.SequentialExecutorConfigurationProperty) {
        this._sequentialExecutorConfiguration.internalValue = value;
    }
    public resetSequentialExecutorConfiguration() {
        this._sequentialExecutorConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sequentialExecutorConfigurationInput() {
        return this._sequentialExecutorConfiguration.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcFunction.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcFunction.TagProperty[] | cdktn.IResolvable) {
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
            custom_output_configuration: ccFunctionCustomOutputConfigurationPropertyToTerraform(this._customOutputConfiguration.internalValue),
            description: cdktn.stringToTerraform(this._description),
            function_id: cdktn.stringToTerraform(this._functionId),
            function_type: cdktn.stringToTerraform(this._functionType),
            http_request_configuration: ccFunctionHttpRequestConfigurationPropertyToTerraform(this._httpRequestConfiguration.internalValue),
            sequential_executor_configuration: ccFunctionSequentialExecutorConfigurationPropertyToTerraform(this._sequentialExecutorConfiguration.internalValue),
            tags: cdktn.listMapper(ccFunctionTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            custom_output_configuration: {
                value: ccFunctionCustomOutputConfigurationPropertyToHclTerraform(this._customOutputConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcFunction.CustomOutputConfigurationProperty",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            function_id: {
                value: cdktn.stringToHclTerraform(this._functionId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            function_type: {
                value: cdktn.stringToHclTerraform(this._functionType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            http_request_configuration: {
                value: ccFunctionHttpRequestConfigurationPropertyToHclTerraform(this._httpRequestConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcFunction.HttpRequestConfigurationProperty",
            },
            sequential_executor_configuration: {
                value: ccFunctionSequentialExecutorConfigurationPropertyToHclTerraform(this._sequentialExecutorConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcFunction.SequentialExecutorConfigurationProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccFunctionTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcFunction.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccFunctionCustomOutputConfigurationPropertyToTerraform(struct?: CcFunction.CustomOutputConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        output: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.output),
        runtime: cdktn.stringToTerraform(struct!.runtime),
    }
}


export function ccFunctionCustomOutputConfigurationPropertyToHclTerraform(struct?: CcFunction.CustomOutputConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        output: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.output),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        runtime: {
            value: cdktn.stringToHclTerraform(struct!.runtime),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFunctionHttpRequestConfigurationPropertyToTerraform(struct?: CcFunction.HttpRequestConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        body: cdktn.stringToTerraform(struct!.body),
        headers: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.headers),
        method_type: cdktn.stringToTerraform(struct!.methodType),
        output: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.output),
        request_timeout_milliseconds: cdktn.numberToTerraform(struct!.requestTimeoutMilliseconds),
        runtime: cdktn.stringToTerraform(struct!.runtime),
        url: cdktn.stringToTerraform(struct!.url),
    }
}


export function ccFunctionHttpRequestConfigurationPropertyToHclTerraform(struct?: CcFunction.HttpRequestConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        body: {
            value: cdktn.stringToHclTerraform(struct!.body),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        headers: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.headers),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        method_type: {
            value: cdktn.stringToHclTerraform(struct!.methodType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        output: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.output),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        request_timeout_milliseconds: {
            value: cdktn.numberToHclTerraform(struct!.requestTimeoutMilliseconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        runtime: {
            value: cdktn.stringToHclTerraform(struct!.runtime),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        url: {
            value: cdktn.stringToHclTerraform(struct!.url),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFunctionFunctionRefPropertyToTerraform(struct?: CcFunction.FunctionRefProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        function_id: cdktn.stringToTerraform(struct!.functionId),
        run_condition: cdktn.stringToTerraform(struct!.runCondition),
    }
}


export function ccFunctionFunctionRefPropertyToHclTerraform(struct?: CcFunction.FunctionRefProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        function_id: {
            value: cdktn.stringToHclTerraform(struct!.functionId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        run_condition: {
            value: cdktn.stringToHclTerraform(struct!.runCondition),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFunctionSequentialExecutorConfigurationPropertyToTerraform(struct?: CcFunction.SequentialExecutorConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        function_list: cdktn.listMapper(ccFunctionFunctionRefPropertyToTerraform, false)(struct!.functionList),
        output: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.output),
        runtime: cdktn.stringToTerraform(struct!.runtime),
        timeout_milliseconds: cdktn.numberToTerraform(struct!.timeoutMilliseconds),
    }
}


export function ccFunctionSequentialExecutorConfigurationPropertyToHclTerraform(struct?: CcFunction.SequentialExecutorConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        function_list: {
            value: cdktn.listMapperHcl(ccFunctionFunctionRefPropertyToHclTerraform, false)(struct!.functionList),
            isBlock: true,
            type: "list",
            storageClassType: "FunctionRefPropertyList",
        },
        output: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.output),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        runtime: {
            value: cdktn.stringToHclTerraform(struct!.runtime),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        timeout_milliseconds: {
            value: cdktn.numberToHclTerraform(struct!.timeoutMilliseconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFunctionTagPropertyToTerraform(struct?: CcFunction.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccFunctionTagPropertyToHclTerraform(struct?: CcFunction.TagProperty | cdktn.IResolvable): any {
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


export namespace CcFunction {
export interface CustomOutputConfigurationProperty {
    /**
    * A map of output key-value pairs that define the custom output.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediatailor_function#output CcFunction#output}
    */
    readonly output?: { [key: string]: string };
    /**
    * The runtime environment for the function expression language.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediatailor_function#runtime CcFunction#runtime}
    */
    readonly runtime?: string;
}
export class CustomOutputConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CustomOutputConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._output !== undefined) {
            hasAnyValues = true;
            internalValueResult.output = this._output;
        }
        if (this._runtime !== undefined) {
            hasAnyValues = true;
            internalValueResult.runtime = this._runtime;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CustomOutputConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._output = undefined;
            this._runtime = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._output = value.output;
            this._runtime = value.runtime;
        }
    }

    // output - computed: true, optional: true, required: false
    private _output?: { [key: string]: string }; 
    public get output() {
        return this.getStringMapAttribute('output');
    }
    public set output(value: { [key: string]: string }) {
        this._output = value;
    }
    public resetOutput() {
        this._output = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outputInput() {
        return this._output;
    }

    // runtime - computed: true, optional: true, required: false
    private _runtime?: string; 
    public get runtime() {
        return this.getStringAttribute('runtime');
    }
    public set runtime(value: string) {
        this._runtime = value;
    }
    public resetRuntime() {
        this._runtime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get runtimeInput() {
        return this._runtime;
    }
}
export interface HttpRequestConfigurationProperty {
    /**
    * The body of the HTTP request.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediatailor_function#body CcFunction#body}
    */
    readonly body?: string;
    /**
    * A map of HTTP headers to include in the request.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediatailor_function#headers CcFunction#headers}
    */
    readonly headers?: { [key: string]: string };
    /**
    * The HTTP method type for the request.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediatailor_function#method_type CcFunction#method_type}
    */
    readonly methodType?: string;
    /**
    * A map of output key-value pairs. Keys must start with session., temp., avail., scte., or be a valid adsRequest directive.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediatailor_function#output CcFunction#output}
    */
    readonly output?: { [key: string]: string };
    /**
    * The timeout in milliseconds for the HTTP request. Maximum value is 2000.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediatailor_function#request_timeout_milliseconds CcFunction#request_timeout_milliseconds}
    */
    readonly requestTimeoutMilliseconds?: number;
    /**
    * The runtime environment for the function expression language.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediatailor_function#runtime CcFunction#runtime}
    */
    readonly runtime?: string;
    /**
    * The URL endpoint for the HTTP request.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediatailor_function#url CcFunction#url}
    */
    readonly url?: string;
}
export class HttpRequestConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HttpRequestConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._body !== undefined) {
            hasAnyValues = true;
            internalValueResult.body = this._body;
        }
        if (this._headers !== undefined) {
            hasAnyValues = true;
            internalValueResult.headers = this._headers;
        }
        if (this._methodType !== undefined) {
            hasAnyValues = true;
            internalValueResult.methodType = this._methodType;
        }
        if (this._output !== undefined) {
            hasAnyValues = true;
            internalValueResult.output = this._output;
        }
        if (this._requestTimeoutMilliseconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.requestTimeoutMilliseconds = this._requestTimeoutMilliseconds;
        }
        if (this._runtime !== undefined) {
            hasAnyValues = true;
            internalValueResult.runtime = this._runtime;
        }
        if (this._url !== undefined) {
            hasAnyValues = true;
            internalValueResult.url = this._url;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HttpRequestConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._body = undefined;
            this._headers = undefined;
            this._methodType = undefined;
            this._output = undefined;
            this._requestTimeoutMilliseconds = undefined;
            this._runtime = undefined;
            this._url = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._body = value.body;
            this._headers = value.headers;
            this._methodType = value.methodType;
            this._output = value.output;
            this._requestTimeoutMilliseconds = value.requestTimeoutMilliseconds;
            this._runtime = value.runtime;
            this._url = value.url;
        }
    }

    // body - computed: true, optional: true, required: false
    private _body?: string; 
    public get body() {
        return this.getStringAttribute('body');
    }
    public set body(value: string) {
        this._body = value;
    }
    public resetBody() {
        this._body = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bodyInput() {
        return this._body;
    }

    // headers - computed: true, optional: true, required: false
    private _headers?: { [key: string]: string }; 
    public get headers() {
        return this.getStringMapAttribute('headers');
    }
    public set headers(value: { [key: string]: string }) {
        this._headers = value;
    }
    public resetHeaders() {
        this._headers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get headersInput() {
        return this._headers;
    }

    // method_type - computed: true, optional: true, required: false
    private _methodType?: string; 
    public get methodType() {
        return this.getStringAttribute('method_type');
    }
    public set methodType(value: string) {
        this._methodType = value;
    }
    public resetMethodType() {
        this._methodType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get methodTypeInput() {
        return this._methodType;
    }

    // output - computed: true, optional: true, required: false
    private _output?: { [key: string]: string }; 
    public get output() {
        return this.getStringMapAttribute('output');
    }
    public set output(value: { [key: string]: string }) {
        this._output = value;
    }
    public resetOutput() {
        this._output = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outputInput() {
        return this._output;
    }

    // request_timeout_milliseconds - computed: true, optional: true, required: false
    private _requestTimeoutMilliseconds?: number; 
    public get requestTimeoutMilliseconds() {
        return this.getNumberAttribute('request_timeout_milliseconds');
    }
    public set requestTimeoutMilliseconds(value: number) {
        this._requestTimeoutMilliseconds = value;
    }
    public resetRequestTimeoutMilliseconds() {
        this._requestTimeoutMilliseconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requestTimeoutMillisecondsInput() {
        return this._requestTimeoutMilliseconds;
    }

    // runtime - computed: true, optional: true, required: false
    private _runtime?: string; 
    public get runtime() {
        return this.getStringAttribute('runtime');
    }
    public set runtime(value: string) {
        this._runtime = value;
    }
    public resetRuntime() {
        this._runtime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get runtimeInput() {
        return this._runtime;
    }

    // url - computed: true, optional: true, required: false
    private _url?: string; 
    public get url() {
        return this.getStringAttribute('url');
    }
    public set url(value: string) {
        this._url = value;
    }
    public resetUrl() {
        this._url = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get urlInput() {
        return this._url;
    }
}
export interface FunctionRefProperty {
    /**
    * The identifier of the function to execute.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediatailor_function#function_id CcFunction#function_id}
    */
    readonly functionId?: string;
    /**
    * A conditional expression that determines whether this function should execute.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediatailor_function#run_condition CcFunction#run_condition}
    */
    readonly runCondition?: string;
}
export class FunctionRefPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): FunctionRefProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._functionId !== undefined) {
            hasAnyValues = true;
            internalValueResult.functionId = this._functionId;
        }
        if (this._runCondition !== undefined) {
            hasAnyValues = true;
            internalValueResult.runCondition = this._runCondition;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FunctionRefProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._functionId = undefined;
            this._runCondition = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._functionId = value.functionId;
            this._runCondition = value.runCondition;
        }
    }

    // function_id - computed: true, optional: true, required: false
    private _functionId?: string; 
    public get functionId() {
        return this.getStringAttribute('function_id');
    }
    public set functionId(value: string) {
        this._functionId = value;
    }
    public resetFunctionId() {
        this._functionId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get functionIdInput() {
        return this._functionId;
    }

    // run_condition - computed: true, optional: true, required: false
    private _runCondition?: string; 
    public get runCondition() {
        return this.getStringAttribute('run_condition');
    }
    public set runCondition(value: string) {
        this._runCondition = value;
    }
    public resetRunCondition() {
        this._runCondition = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get runConditionInput() {
        return this._runCondition;
    }
}

export class FunctionRefPropertyList extends cdktn.ComplexList {
    public internalValue? : FunctionRefProperty[] | cdktn.IResolvable

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
    public get(index: number): FunctionRefPropertyOutputReference {
        return new FunctionRefPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface SequentialExecutorConfigurationProperty {
    /**
    * The list of functions to execute sequentially.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediatailor_function#function_list CcFunction#function_list}
    */
    readonly functionList?: FunctionRefProperty[] | cdktn.IResolvable;
    /**
    * A map of output key-value pairs that define the final output from sequential execution.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediatailor_function#output CcFunction#output}
    */
    readonly output?: { [key: string]: string };
    /**
    * The runtime environment for the function expression language.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediatailor_function#runtime CcFunction#runtime}
    */
    readonly runtime?: string;
    /**
    * The timeout in milliseconds for the entire sequential execution chain.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediatailor_function#timeout_milliseconds CcFunction#timeout_milliseconds}
    */
    readonly timeoutMilliseconds?: number;
}
export class SequentialExecutorConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SequentialExecutorConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._functionList?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.functionList = this._functionList?.internalValue;
        }
        if (this._output !== undefined) {
            hasAnyValues = true;
            internalValueResult.output = this._output;
        }
        if (this._runtime !== undefined) {
            hasAnyValues = true;
            internalValueResult.runtime = this._runtime;
        }
        if (this._timeoutMilliseconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.timeoutMilliseconds = this._timeoutMilliseconds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SequentialExecutorConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._functionList.internalValue = undefined;
            this._output = undefined;
            this._runtime = undefined;
            this._timeoutMilliseconds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._functionList.internalValue = value.functionList;
            this._output = value.output;
            this._runtime = value.runtime;
            this._timeoutMilliseconds = value.timeoutMilliseconds;
        }
    }

    // function_list - computed: true, optional: true, required: false
    private _functionList = new FunctionRefPropertyList(this, "function_list", false);
    public get functionList() {
        return this._functionList;
    }
    public putFunctionList(value: FunctionRefProperty[] | cdktn.IResolvable) {
        this._functionList.internalValue = value;
    }
    public resetFunctionList() {
        this._functionList.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get functionListInput() {
        return this._functionList.internalValue;
    }

    // output - computed: true, optional: true, required: false
    private _output?: { [key: string]: string }; 
    public get output() {
        return this.getStringMapAttribute('output');
    }
    public set output(value: { [key: string]: string }) {
        this._output = value;
    }
    public resetOutput() {
        this._output = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outputInput() {
        return this._output;
    }

    // runtime - computed: true, optional: true, required: false
    private _runtime?: string; 
    public get runtime() {
        return this.getStringAttribute('runtime');
    }
    public set runtime(value: string) {
        this._runtime = value;
    }
    public resetRuntime() {
        this._runtime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get runtimeInput() {
        return this._runtime;
    }

    // timeout_milliseconds - computed: true, optional: true, required: false
    private _timeoutMilliseconds?: number; 
    public get timeoutMilliseconds() {
        return this.getNumberAttribute('timeout_milliseconds');
    }
    public set timeoutMilliseconds(value: number) {
        this._timeoutMilliseconds = value;
    }
    public resetTimeoutMilliseconds() {
        this._timeoutMilliseconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutMillisecondsInput() {
        return this._timeoutMilliseconds;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediatailor_function#key CcFunction#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/mediatailor_function#value CcFunction#value}
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
