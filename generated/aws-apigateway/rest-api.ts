// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_rest_api

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcRestApiProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_rest_api#api_key_source_type CcRestApi#api_key_source_type}
    */
    readonly apiKeySourceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_rest_api#binary_media_types CcRestApi#binary_media_types}
    */
    readonly binaryMediaTypes?: string[];
    /**
    * An OpenAPI specification that defines a set of RESTful APIs in JSON format. For YAML templates, you can also provide the specification in YAML format.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_rest_api#body CcRestApi#body}
    */
    readonly body?: string;
    /**
    * The Amazon Simple Storage Service (Amazon S3) location that points to an OpenAPI file, which defines a set of RESTful APIs in JSON or YAML format.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_rest_api#body_s3_location CcRestApi#body_s3_location}
    */
    readonly bodyS3Location?: CcRestApi.S3LocationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_rest_api#clone_from CcRestApi#clone_from}
    */
    readonly cloneFrom?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_rest_api#description CcRestApi#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_rest_api#disable_execute_api_endpoint CcRestApi#disable_execute_api_endpoint}
    */
    readonly disableExecuteApiEndpoint?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_rest_api#endpoint_access_mode CcRestApi#endpoint_access_mode}
    */
    readonly endpointAccessMode?: string;
    /**
    * A list of the endpoint types and IP address types of the API. Use this property when creating an API. When importing an existing API, specify the endpoint configuration types using the ``Parameters`` property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_rest_api#endpoint_configuration CcRestApi#endpoint_configuration}
    */
    readonly endpointConfiguration?: CcRestApi.EndpointConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_rest_api#fail_on_warnings CcRestApi#fail_on_warnings}
    */
    readonly failOnWarnings?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_rest_api#minimum_compression_size CcRestApi#minimum_compression_size}
    */
    readonly minimumCompressionSize?: number;
    /**
    * This property applies only when you use OpenAPI to define your REST API. The ``Mode`` determines how API Gateway handles resource updates.
    *  Valid values are ``overwrite`` or ``merge``. 
    *  For ``overwrite``, the new API definition replaces the existing one. The existing API identifier remains unchanged.
    *   For ``merge``, the new API definition is merged with the existing API.
    *  If you don't specify this property, a default value is chosen. For REST APIs created before March 29, 2021, the default is ``overwrite``. For REST APIs created after March 29, 2021, the new API definition takes precedence, but any container types such as endpoint configurations and binary media types are merged with the existing API. 
    *  Use the default mode to define top-level ``RestApi`` properties in addition to using OpenAPI. Generally, it's preferred to use API Gateway's OpenAPI extensions to model these properties.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_rest_api#mode CcRestApi#mode}
    */
    readonly mode?: string;
    /**
    * The name of the RestApi. A name is required if the REST API is not based on an OpenAPI specification.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_rest_api#name CcRestApi#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_rest_api#parameters CcRestApi#parameters}
    */
    readonly parameters?: string;
    /**
    * A policy document that contains the permissions for the ``RestApi`` resource. To set the ARN for the policy, use the ``!Join`` intrinsic function with ``""`` as delimiter and values of ``"execute-api:/"`` and ``"*"``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_rest_api#policy CcRestApi#policy}
    */
    readonly policy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_rest_api#security_policy CcRestApi#security_policy}
    */
    readonly securityPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_rest_api#tags CcRestApi#tags}
    */
    readonly tags?: CcRestApi.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_rest_api awscc_apigateway_rest_api}
*/
export class CcRestApi extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_apigateway_rest_api";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcRestApi resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcRestApi to import
    * @param importFromId The id of the existing CcRestApi that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_rest_api#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcRestApi to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_apigateway_rest_api", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_rest_api awscc_apigateway_rest_api} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcRestApiProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcRestApiProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_apigateway_rest_api',
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
        this._apiKeySourceType = config.apiKeySourceType;
        this._binaryMediaTypes = config.binaryMediaTypes;
        this._body = config.body;
        this._bodyS3Location.internalValue = config.bodyS3Location;
        this._cloneFrom = config.cloneFrom;
        this._description = config.description;
        this._disableExecuteApiEndpoint = config.disableExecuteApiEndpoint;
        this._endpointAccessMode = config.endpointAccessMode;
        this._endpointConfiguration.internalValue = config.endpointConfiguration;
        this._failOnWarnings = config.failOnWarnings;
        this._minimumCompressionSize = config.minimumCompressionSize;
        this._mode = config.mode;
        this._name = config.name;
        this._parameters = config.parameters;
        this._policy = config.policy;
        this._securityPolicy = config.securityPolicy;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // api_key_source_type - computed: true, optional: true, required: false
    private _apiKeySourceType?: string; 
    public get apiKeySourceType() {
        return this.getStringAttribute('api_key_source_type');
    }
    public set apiKeySourceType(value: string) {
        this._apiKeySourceType = value;
    }
    public resetApiKeySourceType() {
        this._apiKeySourceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get apiKeySourceTypeInput() {
        return this._apiKeySourceType;
    }

    // binary_media_types - computed: true, optional: true, required: false
    private _binaryMediaTypes?: string[]; 
    public get binaryMediaTypes() {
        return this.getListAttribute('binary_media_types');
    }
    public set binaryMediaTypes(value: string[]) {
        this._binaryMediaTypes = value;
    }
    public resetBinaryMediaTypes() {
        this._binaryMediaTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get binaryMediaTypesInput() {
        return this._binaryMediaTypes;
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

    // body_s3_location - computed: true, optional: true, required: false
    private _bodyS3Location = new CcRestApi.S3LocationPropertyOutputReference(this, "body_s3_location");
    public get bodyS3Location() {
        return this._bodyS3Location;
    }
    public putBodyS3Location(value: CcRestApi.S3LocationProperty) {
        this._bodyS3Location.internalValue = value;
    }
    public resetBodyS3Location() {
        this._bodyS3Location.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bodyS3LocationInput() {
        return this._bodyS3Location.internalValue;
    }

    // clone_from - computed: true, optional: true, required: false
    private _cloneFrom?: string; 
    public get cloneFrom() {
        return this.getStringAttribute('clone_from');
    }
    public set cloneFrom(value: string) {
        this._cloneFrom = value;
    }
    public resetCloneFrom() {
        this._cloneFrom = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cloneFromInput() {
        return this._cloneFrom;
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

    // disable_execute_api_endpoint - computed: true, optional: true, required: false
    private _disableExecuteApiEndpoint?: boolean | cdktn.IResolvable; 
    public get disableExecuteApiEndpoint() {
        return this.getBooleanAttribute('disable_execute_api_endpoint');
    }
    public set disableExecuteApiEndpoint(value: boolean | cdktn.IResolvable) {
        this._disableExecuteApiEndpoint = value;
    }
    public resetDisableExecuteApiEndpoint() {
        this._disableExecuteApiEndpoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get disableExecuteApiEndpointInput() {
        return this._disableExecuteApiEndpoint;
    }

    // endpoint_access_mode - computed: true, optional: true, required: false
    private _endpointAccessMode?: string; 
    public get endpointAccessMode() {
        return this.getStringAttribute('endpoint_access_mode');
    }
    public set endpointAccessMode(value: string) {
        this._endpointAccessMode = value;
    }
    public resetEndpointAccessMode() {
        this._endpointAccessMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointAccessModeInput() {
        return this._endpointAccessMode;
    }

    // endpoint_configuration - computed: true, optional: true, required: false
    private _endpointConfiguration = new CcRestApi.EndpointConfigurationPropertyOutputReference(this, "endpoint_configuration");
    public get endpointConfiguration() {
        return this._endpointConfiguration;
    }
    public putEndpointConfiguration(value: CcRestApi.EndpointConfigurationProperty) {
        this._endpointConfiguration.internalValue = value;
    }
    public resetEndpointConfiguration() {
        this._endpointConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointConfigurationInput() {
        return this._endpointConfiguration.internalValue;
    }

    // fail_on_warnings - computed: true, optional: true, required: false
    private _failOnWarnings?: boolean | cdktn.IResolvable; 
    public get failOnWarnings() {
        return this.getBooleanAttribute('fail_on_warnings');
    }
    public set failOnWarnings(value: boolean | cdktn.IResolvable) {
        this._failOnWarnings = value;
    }
    public resetFailOnWarnings() {
        this._failOnWarnings = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get failOnWarningsInput() {
        return this._failOnWarnings;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // minimum_compression_size - computed: true, optional: true, required: false
    private _minimumCompressionSize?: number; 
    public get minimumCompressionSize() {
        return this.getNumberAttribute('minimum_compression_size');
    }
    public set minimumCompressionSize(value: number) {
        this._minimumCompressionSize = value;
    }
    public resetMinimumCompressionSize() {
        this._minimumCompressionSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minimumCompressionSizeInput() {
        return this._minimumCompressionSize;
    }

    // mode - computed: true, optional: true, required: false
    private _mode?: string; 
    public get mode() {
        return this.getStringAttribute('mode');
    }
    public set mode(value: string) {
        this._mode = value;
    }
    public resetMode() {
        this._mode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modeInput() {
        return this._mode;
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

    // parameters - computed: true, optional: true, required: false
    private _parameters?: string; 
    public get parameters() {
        return this.getStringAttribute('parameters');
    }
    public set parameters(value: string) {
        this._parameters = value;
    }
    public resetParameters() {
        this._parameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parametersInput() {
        return this._parameters;
    }

    // policy - computed: true, optional: true, required: false
    private _policy?: string; 
    public get policy() {
        return this.getStringAttribute('policy');
    }
    public set policy(value: string) {
        this._policy = value;
    }
    public resetPolicy() {
        this._policy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policyInput() {
        return this._policy;
    }

    // rest_api_id - computed: true, optional: false, required: false
    public get restApiId() {
        return this.getStringAttribute('rest_api_id');
    }

    // root_resource_id - computed: true, optional: false, required: false
    public get rootResourceId() {
        return this.getStringAttribute('root_resource_id');
    }

    // security_policy - computed: true, optional: true, required: false
    private _securityPolicy?: string; 
    public get securityPolicy() {
        return this.getStringAttribute('security_policy');
    }
    public set securityPolicy(value: string) {
        this._securityPolicy = value;
    }
    public resetSecurityPolicy() {
        this._securityPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityPolicyInput() {
        return this._securityPolicy;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcRestApi.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcRestApi.TagProperty[] | cdktn.IResolvable) {
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
            api_key_source_type: cdktn.stringToTerraform(this._apiKeySourceType),
            binary_media_types: cdktn.listMapper(cdktn.stringToTerraform, false)(this._binaryMediaTypes),
            body: cdktn.stringToTerraform(this._body),
            body_s3_location: ccRestApiS3LocationPropertyToTerraform(this._bodyS3Location.internalValue),
            clone_from: cdktn.stringToTerraform(this._cloneFrom),
            description: cdktn.stringToTerraform(this._description),
            disable_execute_api_endpoint: cdktn.booleanToTerraform(this._disableExecuteApiEndpoint),
            endpoint_access_mode: cdktn.stringToTerraform(this._endpointAccessMode),
            endpoint_configuration: ccRestApiEndpointConfigurationPropertyToTerraform(this._endpointConfiguration.internalValue),
            fail_on_warnings: cdktn.booleanToTerraform(this._failOnWarnings),
            minimum_compression_size: cdktn.numberToTerraform(this._minimumCompressionSize),
            mode: cdktn.stringToTerraform(this._mode),
            name: cdktn.stringToTerraform(this._name),
            parameters: cdktn.stringToTerraform(this._parameters),
            policy: cdktn.stringToTerraform(this._policy),
            security_policy: cdktn.stringToTerraform(this._securityPolicy),
            tags: cdktn.listMapper(ccRestApiTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            api_key_source_type: {
                value: cdktn.stringToHclTerraform(this._apiKeySourceType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            binary_media_types: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._binaryMediaTypes),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            body: {
                value: cdktn.stringToHclTerraform(this._body),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            body_s3_location: {
                value: ccRestApiS3LocationPropertyToHclTerraform(this._bodyS3Location.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcRestApi.S3LocationProperty",
            },
            clone_from: {
                value: cdktn.stringToHclTerraform(this._cloneFrom),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            disable_execute_api_endpoint: {
                value: cdktn.booleanToHclTerraform(this._disableExecuteApiEndpoint),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            endpoint_access_mode: {
                value: cdktn.stringToHclTerraform(this._endpointAccessMode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            endpoint_configuration: {
                value: ccRestApiEndpointConfigurationPropertyToHclTerraform(this._endpointConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcRestApi.EndpointConfigurationProperty",
            },
            fail_on_warnings: {
                value: cdktn.booleanToHclTerraform(this._failOnWarnings),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            minimum_compression_size: {
                value: cdktn.numberToHclTerraform(this._minimumCompressionSize),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            mode: {
                value: cdktn.stringToHclTerraform(this._mode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            parameters: {
                value: cdktn.stringToHclTerraform(this._parameters),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            policy: {
                value: cdktn.stringToHclTerraform(this._policy),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            security_policy: {
                value: cdktn.stringToHclTerraform(this._securityPolicy),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccRestApiTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcRestApi.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccRestApiS3LocationPropertyToTerraform(struct?: CcRestApi.S3LocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bucket: cdktn.stringToTerraform(struct!.bucket),
        e_tag: cdktn.stringToTerraform(struct!.eTag),
        key: cdktn.stringToTerraform(struct!.key),
        version: cdktn.stringToTerraform(struct!.version),
    }
}


export function ccRestApiS3LocationPropertyToHclTerraform(struct?: CcRestApi.S3LocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bucket: {
            value: cdktn.stringToHclTerraform(struct!.bucket),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        e_tag: {
            value: cdktn.stringToHclTerraform(struct!.eTag),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key: {
            value: cdktn.stringToHclTerraform(struct!.key),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        version: {
            value: cdktn.stringToHclTerraform(struct!.version),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRestApiEndpointConfigurationPropertyToTerraform(struct?: CcRestApi.EndpointConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        ip_address_type: cdktn.stringToTerraform(struct!.ipAddressType),
        types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.types),
        vpc_endpoint_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.vpcEndpointIds),
    }
}


export function ccRestApiEndpointConfigurationPropertyToHclTerraform(struct?: CcRestApi.EndpointConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        ip_address_type: {
            value: cdktn.stringToHclTerraform(struct!.ipAddressType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.types),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        vpc_endpoint_ids: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.vpcEndpointIds),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRestApiTagPropertyToTerraform(struct?: CcRestApi.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccRestApiTagPropertyToHclTerraform(struct?: CcRestApi.TagProperty | cdktn.IResolvable): any {
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


export namespace CcRestApi {
export interface S3LocationProperty {
    /**
    * The name of the S3 bucket where the OpenAPI file is stored.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_rest_api#bucket CcRestApi#bucket}
    */
    readonly bucket?: string;
    /**
    * The Amazon S3 ETag (a file checksum) of the OpenAPI file. If you don't specify a value, API Gateway skips ETag validation of your OpenAPI file.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_rest_api#e_tag CcRestApi#e_tag}
    */
    readonly eTag?: string;
    /**
    * The file name of the OpenAPI file (Amazon S3 object name).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_rest_api#key CcRestApi#key}
    */
    readonly key?: string;
    /**
    * For versioning-enabled buckets, a specific version of the OpenAPI file.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_rest_api#version CcRestApi#version}
    */
    readonly version?: string;
}
export class S3LocationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3LocationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bucket !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucket = this._bucket;
        }
        if (this._eTag !== undefined) {
            hasAnyValues = true;
            internalValueResult.eTag = this._eTag;
        }
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._version !== undefined) {
            hasAnyValues = true;
            internalValueResult.version = this._version;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3LocationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bucket = undefined;
            this._eTag = undefined;
            this._key = undefined;
            this._version = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bucket = value.bucket;
            this._eTag = value.eTag;
            this._key = value.key;
            this._version = value.version;
        }
    }

    // bucket - computed: true, optional: true, required: false
    private _bucket?: string; 
    public get bucket() {
        return this.getStringAttribute('bucket');
    }
    public set bucket(value: string) {
        this._bucket = value;
    }
    public resetBucket() {
        this._bucket = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketInput() {
        return this._bucket;
    }

    // e_tag - computed: true, optional: true, required: false
    private _eTag?: string; 
    public get eTag() {
        return this.getStringAttribute('e_tag');
    }
    public set eTag(value: string) {
        this._eTag = value;
    }
    public resetETag() {
        this._eTag = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eTagInput() {
        return this._eTag;
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

    // version - computed: true, optional: true, required: false
    private _version?: string; 
    public get version() {
        return this.getStringAttribute('version');
    }
    public set version(value: string) {
        this._version = value;
    }
    public resetVersion() {
        this._version = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get versionInput() {
        return this._version;
    }
}
export interface EndpointConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_rest_api#ip_address_type CcRestApi#ip_address_type}
    */
    readonly ipAddressType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_rest_api#types CcRestApi#types}
    */
    readonly types?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_rest_api#vpc_endpoint_ids CcRestApi#vpc_endpoint_ids}
    */
    readonly vpcEndpointIds?: string[];
}
export class EndpointConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EndpointConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._ipAddressType !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipAddressType = this._ipAddressType;
        }
        if (this._types !== undefined) {
            hasAnyValues = true;
            internalValueResult.types = this._types;
        }
        if (this._vpcEndpointIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.vpcEndpointIds = this._vpcEndpointIds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EndpointConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._ipAddressType = undefined;
            this._types = undefined;
            this._vpcEndpointIds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._ipAddressType = value.ipAddressType;
            this._types = value.types;
            this._vpcEndpointIds = value.vpcEndpointIds;
        }
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

    // types - computed: true, optional: true, required: false
    private _types?: string[]; 
    public get types() {
        return this.getListAttribute('types');
    }
    public set types(value: string[]) {
        this._types = value;
    }
    public resetTypes() {
        this._types = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typesInput() {
        return this._types;
    }

    // vpc_endpoint_ids - computed: true, optional: true, required: false
    private _vpcEndpointIds?: string[]; 
    public get vpcEndpointIds() {
        return this.getListAttribute('vpc_endpoint_ids');
    }
    public set vpcEndpointIds(value: string[]) {
        this._vpcEndpointIds = value;
    }
    public resetVpcEndpointIds() {
        this._vpcEndpointIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcEndpointIdsInput() {
        return this._vpcEndpointIds;
    }
}
export interface TagProperty {
    /**
    * A string you can use to assign a value. The combination of tag keys and values can help you organize and categorize your resources.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_rest_api#key CcRestApi#key}
    */
    readonly key?: string;
    /**
    * The value for the specified tag key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/apigateway_rest_api#value CcRestApi#value}
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
