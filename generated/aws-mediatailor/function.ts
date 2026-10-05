// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcFunctionProps extends cdktn.TerraformMetaArguments {
    /**
    * The configuration for an AWS_SERVICE_REQUEST function. Contains the target service, target Region, and request parameters that the function uses to call an AWS service API. For more information, see AWS_SERVICE_REQUEST (https://docs.aws.amazon.com/mediatailor/latest/ug/monetization-functions-types-aws-service-request.html) in the MediaTailor User Guide.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#aws_service_request_configuration CcFunction#aws_service_request_configuration}
    */
    readonly awsServiceRequestConfiguration?: CcFunction.AwsServiceRequestConfigurationProperty;
    /**
    * The configuration for a CONCURRENT_EXECUTOR function. Required when FunctionType is CONCURRENT_EXECUTOR.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#concurrent_executor_configuration CcFunction#concurrent_executor_configuration}
    */
    readonly concurrentExecutorConfiguration?: CcFunction.ConcurrentExecutorConfigurationProperty;
    /**
    * Configuration for custom output functions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#custom_output_configuration CcFunction#custom_output_configuration}
    */
    readonly customOutputConfiguration?: CcFunction.CustomOutputConfigurationProperty;
    /**
    * A description of the function.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#description CcFunction#description}
    */
    readonly description?: string;
    /**
    * The unique identifier for the function.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#function_id CcFunction#function_id}
    */
    readonly functionId: string;
    /**
    * The type of the function. Determines which configuration object is used.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#function_type CcFunction#function_type}
    */
    readonly functionType: string;
    /**
    * Configuration for HTTP request functions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#http_request_configuration CcFunction#http_request_configuration}
    */
    readonly httpRequestConfiguration?: CcFunction.HttpRequestConfigurationProperty;
    /**
    * The configuration for a SEQUENTIAL_EXECUTOR function. A SEQUENTIAL_EXECUTOR runs an ordered list of child functions one at a time, passing data between them. For more information about functions, see Working with functions (https://docs.aws.amazon.com/mediatailor/latest/ug/monetization-functions.html) in the MediaTailor User Guide.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#sequential_executor_configuration CcFunction#sequential_executor_configuration}
    */
    readonly sequentialExecutorConfiguration?: CcFunction.SequentialExecutorConfigurationProperty;
    /**
    * The tags to assign to the function resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#tags CcFunction#tags}
    */
    readonly tags?: CcFunction.TagProperty[] | cdktn.IResolvable;
    /**
    * The configuration for a VAST_REQUEST function. Specifies the HTTP method, URL, headers, body, timeout, and output expressions for a request to a VAST endpoint. MediaTailor parses the response as VAST and resolves wrapper redirects, then makes the parsed ads available to the function's output expressions. For more information, see Function types and composition (https://docs.aws.amazon.com/mediatailor/latest/ug/monetization-functions-types.html) in the MediaTailor User Guide.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#vast_request_configuration CcFunction#vast_request_configuration}
    */
    readonly vastRequestConfiguration?: CcFunction.VastRequestConfigurationProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function awscc_mediatailor_function}
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
    * @param importFromId The id of the existing CcFunction that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcFunction to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_mediatailor_function", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function awscc_mediatailor_function} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcFunctionProps
    */
    public constructor(scope: Construct, id: string, config: CcFunctionProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_mediatailor_function',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.104.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._awsServiceRequestConfiguration.internalValue = config.awsServiceRequestConfiguration;
        this._concurrentExecutorConfiguration.internalValue = config.concurrentExecutorConfiguration;
        this._customOutputConfiguration.internalValue = config.customOutputConfiguration;
        this._description = config.description;
        this._functionId = config.functionId;
        this._functionType = config.functionType;
        this._httpRequestConfiguration.internalValue = config.httpRequestConfiguration;
        this._sequentialExecutorConfiguration.internalValue = config.sequentialExecutorConfiguration;
        this._tags.internalValue = config.tags;
        this._vastRequestConfiguration.internalValue = config.vastRequestConfiguration;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // aws_service_request_configuration - computed: true, optional: true, required: false
    private _awsServiceRequestConfiguration = new CcFunction.AwsServiceRequestConfigurationPropertyOutputReference(this, "aws_service_request_configuration");
    public get awsServiceRequestConfiguration() {
        return this._awsServiceRequestConfiguration;
    }
    public putAwsServiceRequestConfiguration(value: CcFunction.AwsServiceRequestConfigurationProperty) {
        this._awsServiceRequestConfiguration.internalValue = value;
    }
    public resetAwsServiceRequestConfiguration() {
        this._awsServiceRequestConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get awsServiceRequestConfigurationInput() {
        return this._awsServiceRequestConfiguration.internalValue;
    }

    // concurrent_executor_configuration - computed: true, optional: true, required: false
    private _concurrentExecutorConfiguration = new CcFunction.ConcurrentExecutorConfigurationPropertyOutputReference(this, "concurrent_executor_configuration");
    public get concurrentExecutorConfiguration() {
        return this._concurrentExecutorConfiguration;
    }
    public putConcurrentExecutorConfiguration(value: CcFunction.ConcurrentExecutorConfigurationProperty) {
        this._concurrentExecutorConfiguration.internalValue = value;
    }
    public resetConcurrentExecutorConfiguration() {
        this._concurrentExecutorConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get concurrentExecutorConfigurationInput() {
        return this._concurrentExecutorConfiguration.internalValue;
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

    // vast_request_configuration - computed: true, optional: true, required: false
    private _vastRequestConfiguration = new CcFunction.VastRequestConfigurationPropertyOutputReference(this, "vast_request_configuration");
    public get vastRequestConfiguration() {
        return this._vastRequestConfiguration;
    }
    public putVastRequestConfiguration(value: CcFunction.VastRequestConfigurationProperty) {
        this._vastRequestConfiguration.internalValue = value;
    }
    public resetVastRequestConfiguration() {
        this._vastRequestConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vastRequestConfigurationInput() {
        return this._vastRequestConfiguration.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            aws_service_request_configuration: ccFunctionAwsServiceRequestConfigurationPropertyToTerraform(this._awsServiceRequestConfiguration.internalValue),
            concurrent_executor_configuration: ccFunctionConcurrentExecutorConfigurationPropertyToTerraform(this._concurrentExecutorConfiguration.internalValue),
            custom_output_configuration: ccFunctionCustomOutputConfigurationPropertyToTerraform(this._customOutputConfiguration.internalValue),
            description: cdktn.stringToTerraform(this._description),
            function_id: cdktn.stringToTerraform(this._functionId),
            function_type: cdktn.stringToTerraform(this._functionType),
            http_request_configuration: ccFunctionHttpRequestConfigurationPropertyToTerraform(this._httpRequestConfiguration.internalValue),
            sequential_executor_configuration: ccFunctionSequentialExecutorConfigurationPropertyToTerraform(this._sequentialExecutorConfiguration.internalValue),
            tags: cdktn.listMapper(ccFunctionTagPropertyToTerraform, false)(this._tags.internalValue),
            vast_request_configuration: ccFunctionVastRequestConfigurationPropertyToTerraform(this._vastRequestConfiguration.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            aws_service_request_configuration: {
                value: ccFunctionAwsServiceRequestConfigurationPropertyToHclTerraform(this._awsServiceRequestConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcFunction.AwsServiceRequestConfigurationProperty",
            },
            concurrent_executor_configuration: {
                value: ccFunctionConcurrentExecutorConfigurationPropertyToHclTerraform(this._concurrentExecutorConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcFunction.ConcurrentExecutorConfigurationProperty",
            },
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
            vast_request_configuration: {
                value: ccFunctionVastRequestConfigurationPropertyToHclTerraform(this._vastRequestConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcFunction.VastRequestConfigurationProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccFunctionAwsServiceRequestConfigurationPropertyToTerraform(struct?: CcFunction.AwsServiceRequestConfigurationProperty | cdktn.IResolvable): any {
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
        target_region: cdktn.stringToTerraform(struct!.targetRegion),
        target_service: cdktn.stringToTerraform(struct!.targetService),
        url: cdktn.stringToTerraform(struct!.url),
    }
}


export function ccFunctionAwsServiceRequestConfigurationPropertyToHclTerraform(struct?: CcFunction.AwsServiceRequestConfigurationProperty | cdktn.IResolvable): any {
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
        target_region: {
            value: cdktn.stringToHclTerraform(struct!.targetRegion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        target_service: {
            value: cdktn.stringToHclTerraform(struct!.targetService),
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


export function ccFunctionFunctionListPropertyToTerraform(struct?: CcFunction.FunctionListProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        alias: cdktn.stringToTerraform(struct!.alias),
        function_id: cdktn.stringToTerraform(struct!.functionId),
        run_condition: cdktn.stringToTerraform(struct!.runCondition),
    }
}


export function ccFunctionFunctionListPropertyToHclTerraform(struct?: CcFunction.FunctionListProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        alias: {
            value: cdktn.stringToHclTerraform(struct!.alias),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
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


export function ccFunctionConcurrentExecutorConfigurationPropertyToTerraform(struct?: CcFunction.ConcurrentExecutorConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        function_list: cdktn.listMapper(ccFunctionFunctionListPropertyToTerraform, false)(struct!.functionList),
        max_concurrency: cdktn.numberToTerraform(struct!.maxConcurrency),
        output: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.output),
        runtime: cdktn.stringToTerraform(struct!.runtime),
        timeout_milliseconds: cdktn.numberToTerraform(struct!.timeoutMilliseconds),
    }
}


export function ccFunctionConcurrentExecutorConfigurationPropertyToHclTerraform(struct?: CcFunction.ConcurrentExecutorConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        function_list: {
            value: cdktn.listMapperHcl(ccFunctionFunctionListPropertyToHclTerraform, false)(struct!.functionList),
            isBlock: true,
            type: "list",
            storageClassType: "FunctionListPropertyList",
        },
        max_concurrency: {
            value: cdktn.numberToHclTerraform(struct!.maxConcurrency),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
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
        alias: cdktn.stringToTerraform(struct!.alias),
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
        alias: {
            value: cdktn.stringToHclTerraform(struct!.alias),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
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


export function ccFunctionVastRequestConfigurationPropertyToTerraform(struct?: CcFunction.VastRequestConfigurationProperty | cdktn.IResolvable): any {
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


export function ccFunctionVastRequestConfigurationPropertyToHclTerraform(struct?: CcFunction.VastRequestConfigurationProperty | cdktn.IResolvable): any {
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


export namespace CcFunction {
export interface AwsServiceRequestConfigurationProperty {
    /**
    * An expression that evaluates to the request body for the AWS service API call. The body must conform to the input format that the target service operation expects. Applies only when the target operation accepts a request body. The maximum size after evaluation is 64 KB.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#body CcFunction#body}
    */
    readonly body?: string;
    /**
    * A map of HTTP header names to expression values. MediaTailor evaluates each header value expression at runtime and includes the result in the outbound request to the AWS service. Use this to pass any headers required by the target service operation. You can include a maximum of 50 headers.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#headers CcFunction#headers}
    */
    readonly headers?: { [key: string]: string };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#method_type CcFunction#method_type}
    */
    readonly methodType?: string;
    /**
    * A map of output bindings. Each key is a namespaced output path, such as player_params.device_type. Each value is an expression that MediaTailor evaluates at runtime and can reference the response object from the target service. For more information, see JSONata expression reference (https://docs.aws.amazon.com/mediatailor/latest/ug/monetization-functions-jsonata.html) in the MediaTailor User Guide.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#output CcFunction#output}
    */
    readonly output?: { [key: string]: string };
    /**
    * The maximum time, in milliseconds, that MediaTailor waits for a response from the AWS service. If the call exceeds this timeout, MediaTailor sets the response status code to null and proceeds with output expression evaluation. Valid values are 100 to 2000.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#request_timeout_milliseconds CcFunction#request_timeout_milliseconds}
    */
    readonly requestTimeoutMilliseconds?: number;
    /**
    * The expression language used to evaluate expressions in the function configuration. Set this to JSONATA.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#runtime CcFunction#runtime}
    */
    readonly runtime?: string;
    /**
    * The AWS Region for the target service. Specify a static Region code (for example, us-east-1) or a JSONata expression that resolves to a Region code at runtime (for example, {%inference.region%}).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#target_region CcFunction#target_region}
    */
    readonly targetRegion?: string;
    /**
    * The AWS service to call. Valid value: elemental-inference (AWS Elemental Inference).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#target_service CcFunction#target_service}
    */
    readonly targetService?: string;
    /**
    * An expression that evaluates to the endpoint URL for the target AWS service API operation. Use {%...%} delimiters for dynamic expressions. The URL must correspond to a valid endpoint for the service specified in TargetService. The maximum length after evaluation is 2,048 characters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#url CcFunction#url}
    */
    readonly url?: string;
}
export class AwsServiceRequestConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AwsServiceRequestConfigurationProperty | cdktn.IResolvable | undefined {
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
        if (this._targetRegion !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetRegion = this._targetRegion;
        }
        if (this._targetService !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetService = this._targetService;
        }
        if (this._url !== undefined) {
            hasAnyValues = true;
            internalValueResult.url = this._url;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AwsServiceRequestConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._body = undefined;
            this._headers = undefined;
            this._methodType = undefined;
            this._output = undefined;
            this._requestTimeoutMilliseconds = undefined;
            this._runtime = undefined;
            this._targetRegion = undefined;
            this._targetService = undefined;
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
            this._targetRegion = value.targetRegion;
            this._targetService = value.targetService;
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

    // target_region - computed: true, optional: true, required: false
    private _targetRegion?: string; 
    public get targetRegion() {
        return this.getStringAttribute('target_region');
    }
    public set targetRegion(value: string) {
        this._targetRegion = value;
    }
    public resetTargetRegion() {
        this._targetRegion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetRegionInput() {
        return this._targetRegion;
    }

    // target_service - computed: true, optional: true, required: false
    private _targetService?: string; 
    public get targetService() {
        return this.getStringAttribute('target_service');
    }
    public set targetService(value: string) {
        this._targetService = value;
    }
    public resetTargetService() {
        this._targetService = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetServiceInput() {
        return this._targetService;
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
export interface FunctionListProperty {
    /**
    * An optional alternate name for the child function within the executor. MediaTailor uses this value as the namespace for the child function's output. If omitted, MediaTailor uses the function identifier. The resolved namespace must be unique across all child functions in the list.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#alias CcFunction#alias}
    */
    readonly alias?: string;
    /**
    * The identifier of the child function to execute.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#function_id CcFunction#function_id}
    */
    readonly functionId?: string;
    /**
    * An optional expression that evaluates to a boolean. MediaTailor evaluates this expression immediately before running the child function, using the accumulated state at that point. If the expression evaluates to false, MediaTailor skips the child function. If omitted, the child function always runs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#run_condition CcFunction#run_condition}
    */
    readonly runCondition?: string;
}
export class FunctionListPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): FunctionListProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._alias !== undefined) {
            hasAnyValues = true;
            internalValueResult.alias = this._alias;
        }
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

    public set internalValue(value: FunctionListProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._alias = undefined;
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
            this._alias = value.alias;
            this._functionId = value.functionId;
            this._runCondition = value.runCondition;
        }
    }

    // alias - computed: true, optional: true, required: false
    private _alias?: string; 
    public get alias() {
        return this.getStringAttribute('alias');
    }
    public set alias(value: string) {
        this._alias = value;
    }
    public resetAlias() {
        this._alias = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get aliasInput() {
        return this._alias;
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

export class FunctionListPropertyList extends cdktn.ComplexList {
    public internalValue? : FunctionListProperty[] | cdktn.IResolvable

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
    public get(index: number): FunctionListPropertyOutputReference {
        return new FunctionListPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ConcurrentExecutorConfigurationProperty {
    /**
    * The list of 1 to 10 child functions that MediaTailor runs in parallel. Each entry specifies a child function to execute and an optional run condition expression that controls whether the function runs. Child functions cannot themselves be executors, and each child function's resolved namespace must be unique across the list.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#function_list CcFunction#function_list}
    */
    readonly functionList?: FunctionListProperty[] | cdktn.IResolvable;
    /**
    * The maximum number of child functions that MediaTailor runs simultaneously. When the list contains more functions than MaxConcurrency, MediaTailor starts additional functions as running ones complete, so that no more than MaxConcurrency functions run at the same time. Valid values are 1 to 2.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#max_concurrency CcFunction#max_concurrency}
    */
    readonly maxConcurrency?: number;
    /**
    * A map of output bindings that controls which bindings the executor commits to the session state after all child functions complete. Each key is a namespaced output path, and each value is an expression that MediaTailor evaluates against the combined results of the child functions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#output CcFunction#output}
    */
    readonly output?: { [key: string]: string };
    /**
    * The expression language used to evaluate expressions in the function configuration. Set this to JSONATA.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#runtime CcFunction#runtime}
    */
    readonly runtime?: string;
    /**
    * The maximum time, in milliseconds, for all child functions to complete. This timeout covers every function in the list, including any HTTP calls the child functions make. If the executor exceeds this timeout, MediaTailor discards all output from the executor and proceeds with default behavior. Valid values are 100 to 2000.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#timeout_milliseconds CcFunction#timeout_milliseconds}
    */
    readonly timeoutMilliseconds?: number;
}
export class ConcurrentExecutorConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConcurrentExecutorConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._functionList?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.functionList = this._functionList?.internalValue;
        }
        if (this._maxConcurrency !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxConcurrency = this._maxConcurrency;
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

    public set internalValue(value: ConcurrentExecutorConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._functionList.internalValue = undefined;
            this._maxConcurrency = undefined;
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
            this._maxConcurrency = value.maxConcurrency;
            this._output = value.output;
            this._runtime = value.runtime;
            this._timeoutMilliseconds = value.timeoutMilliseconds;
        }
    }

    // function_list - computed: true, optional: true, required: false
    private _functionList = new FunctionListPropertyList(this, "function_list", false);
    public get functionList() {
        return this._functionList;
    }
    public putFunctionList(value: FunctionListProperty[] | cdktn.IResolvable) {
        this._functionList.internalValue = value;
    }
    public resetFunctionList() {
        this._functionList.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get functionListInput() {
        return this._functionList.internalValue;
    }

    // max_concurrency - computed: true, optional: true, required: false
    private _maxConcurrency?: number; 
    public get maxConcurrency() {
        return this.getNumberAttribute('max_concurrency');
    }
    public set maxConcurrency(value: number) {
        this._maxConcurrency = value;
    }
    public resetMaxConcurrency() {
        this._maxConcurrency = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxConcurrencyInput() {
        return this._maxConcurrency;
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
export interface CustomOutputConfigurationProperty {
    /**
    * A map of output key-value pairs that define the custom output.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#output CcFunction#output}
    */
    readonly output?: { [key: string]: string };
    /**
    * The runtime environment for the function expression language.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#runtime CcFunction#runtime}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#body CcFunction#body}
    */
    readonly body?: string;
    /**
    * A map of HTTP headers to include in the request.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#headers CcFunction#headers}
    */
    readonly headers?: { [key: string]: string };
    /**
    * The HTTP method type for the request.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#method_type CcFunction#method_type}
    */
    readonly methodType?: string;
    /**
    * A map of output key-value pairs. Keys must start with session., temp., avail., scte., or be a valid adsRequest directive.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#output CcFunction#output}
    */
    readonly output?: { [key: string]: string };
    /**
    * The timeout in milliseconds for the HTTP request. Maximum value is 2000.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#request_timeout_milliseconds CcFunction#request_timeout_milliseconds}
    */
    readonly requestTimeoutMilliseconds?: number;
    /**
    * The runtime environment for the function expression language.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#runtime CcFunction#runtime}
    */
    readonly runtime?: string;
    /**
    * The URL endpoint for the HTTP request.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#url CcFunction#url}
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
    * An optional alternate name for the child function within the executor. MediaTailor uses this value as the namespace for the child function's output. If omitted, MediaTailor uses the function identifier. The resolved namespace must be unique across all child functions in the list.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#alias CcFunction#alias}
    */
    readonly alias?: string;
    /**
    * The identifier of the child function to execute.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#function_id CcFunction#function_id}
    */
    readonly functionId?: string;
    /**
    * An optional expression that evaluates to a boolean. MediaTailor evaluates this expression immediately before running the child function, using the accumulated state at that point. If the expression evaluates to false, MediaTailor skips the child function. If omitted, the child function always runs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#run_condition CcFunction#run_condition}
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
        if (this._alias !== undefined) {
            hasAnyValues = true;
            internalValueResult.alias = this._alias;
        }
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
            this._alias = undefined;
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
            this._alias = value.alias;
            this._functionId = value.functionId;
            this._runCondition = value.runCondition;
        }
    }

    // alias - computed: true, optional: true, required: false
    private _alias?: string; 
    public get alias() {
        return this.getStringAttribute('alias');
    }
    public set alias(value: string) {
        this._alias = value;
    }
    public resetAlias() {
        this._alias = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get aliasInput() {
        return this._alias;
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
    * An ordered list of 1 to 10 steps. Each step specifies a child function to execute and an optional run condition expression that controls whether the step runs. MediaTailor executes the steps in order, passing data between steps through temporary data. Each step's resolved namespace must be unique across the list.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#function_list CcFunction#function_list}
    */
    readonly functionList?: FunctionRefProperty[] | cdktn.IResolvable;
    /**
    * A map of output bindings that controls which bindings the sequence commits to the session state after all steps complete. Each key is a namespaced output path, and each value is an expression that MediaTailor evaluates against the accumulated results of the steps.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#output CcFunction#output}
    */
    readonly output?: { [key: string]: string };
    /**
    * The expression language used to evaluate expressions in the function configuration. Set this to JSONATA.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#runtime CcFunction#runtime}
    */
    readonly runtime?: string;
    /**
    * The maximum time, in milliseconds, for the entire sequence to complete. This timeout covers all steps, including any HTTP calls made by child functions. If the sequence exceeds this timeout, MediaTailor discards all output from the sequence and proceeds with default behavior. Valid values are 100 to 2000.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#timeout_milliseconds CcFunction#timeout_milliseconds}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#key CcFunction#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#value CcFunction#value}
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
export interface VastRequestConfigurationProperty {
    /**
    * An expression that evaluates to the request body, for example to send an OpenRTB bid request. The expression can be up to 100,000 characters, and the body after evaluation can be up to 64 KB.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#body CcFunction#body}
    */
    readonly body?: string;
    /**
    * A map of HTTP header names to expression values. MediaTailor evaluates each header value expression at runtime and includes the result in the outbound request. Headers beginning with X-Amz- are reserved by the service, and method override headers are not allowed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#headers CcFunction#headers}
    */
    readonly headers?: { [key: string]: string };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#method_type CcFunction#method_type}
    */
    readonly methodType?: string;
    /**
    * A map of output bindings. Each key is a namespaced output path (such as temp.wrappedAds), and each value is an expression that MediaTailor evaluates at runtime. Output expressions in a VAST_REQUEST function can reference the response object, which exposes response.parsedAds, the ads parsed from the VAST response after schema validation and wrapper resolution, and response.statusCode. For more information about expression syntax, see JSONata expression reference (https://docs.aws.amazon.com/mediatailor/latest/ug/monetization-functions-jsonata.html) in the MediaTailor User Guide.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#output CcFunction#output}
    */
    readonly output?: { [key: string]: string };
    /**
    * The maximum time, in milliseconds, that MediaTailor waits for a response from the VAST endpoint. The timeout covers the entire response, including any wrapper redirects that MediaTailor follows. If the call exceeds this timeout, MediaTailor proceeds with an empty ad list and continues output expression evaluation. Valid values are 100 to 2000.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#request_timeout_milliseconds CcFunction#request_timeout_milliseconds}
    */
    readonly requestTimeoutMilliseconds?: number;
    /**
    * The expression language used to evaluate expressions in the function configuration. Set this to JSONATA.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#runtime CcFunction#runtime}
    */
    readonly runtime?: string;
    /**
    * An expression that evaluates to the VAST endpoint URL. Use {%...%} delimiters for dynamic expressions. A literal value must be an https:// URL. The expression can be up to 25,000 characters, and the URL after evaluation can be up to 2,048 characters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/mediatailor_function#url CcFunction#url}
    */
    readonly url?: string;
}
export class VastRequestConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VastRequestConfigurationProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: VastRequestConfigurationProperty | cdktn.IResolvable | undefined) {
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
}
