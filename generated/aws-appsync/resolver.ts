// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_resolver

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcResolverProps extends cdktn.TerraformMetaArguments {
    /**
    * The APSYlong GraphQL API to which you want to attach this resolver.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_resolver#api_id CcResolver#api_id}
    */
    readonly apiId: string;
    /**
    * The caching configuration for the resolver.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_resolver#caching_config CcResolver#caching_config}
    */
    readonly cachingConfig?: CcResolver.CachingConfigProperty;
    /**
    * The ``resolver`` code that contains the request and response functions. When code is used, the ``runtime`` is required. The runtime value must be ``APPSYNC_JS``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_resolver#code CcResolver#code}
    */
    readonly code?: string;
    /**
    * The Amazon S3 endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_resolver#code_s3_location CcResolver#code_s3_location}
    */
    readonly codeS3Location?: string;
    /**
    * The resolver data source name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_resolver#data_source_name CcResolver#data_source_name}
    */
    readonly dataSourceName?: string;
    /**
    * The GraphQL field on a type that invokes the resolver.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_resolver#field_name CcResolver#field_name}
    */
    readonly fieldName: string;
    /**
    * The resolver type.
    *   +  *UNIT*: A UNIT resolver type. A UNIT resolver is the default resolver type. You can use a UNIT resolver to run a GraphQL query against a single data source.
    *   +  *PIPELINE*: A PIPELINE resolver type. You can use a PIPELINE resolver to invoke a series of ``Function`` objects in a serial manner. You can use a pipeline resolver to run a GraphQL query against multiple data sources.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_resolver#kind CcResolver#kind}
    */
    readonly kind?: string;
    /**
    * The maximum number of resolver request inputs that will be sent to a single LAMlong function in a ``BatchInvoke`` operation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_resolver#max_batch_size CcResolver#max_batch_size}
    */
    readonly maxBatchSize?: number;
    /**
    * Enables or disables enhanced resolver metrics for specified resolvers. Note that ``MetricsConfig`` won't be used unless the ``resolverLevelMetricsBehavior`` value is set to ``PER_RESOLVER_METRICS``. If the ``resolverLevelMetricsBehavior`` is set to ``FULL_REQUEST_RESOLVER_METRICS`` instead, ``MetricsConfig`` will be ignored. However, you can still set its value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_resolver#metrics_config CcResolver#metrics_config}
    */
    readonly metricsConfig?: string;
    /**
    * Functions linked with the pipeline resolver.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_resolver#pipeline_config CcResolver#pipeline_config}
    */
    readonly pipelineConfig?: CcResolver.PipelineConfigProperty;
    /**
    * The request mapping template.
    *  Request mapping templates are optional when using a Lambda data source. For all other data sources, a request mapping template is required.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_resolver#request_mapping_template CcResolver#request_mapping_template}
    */
    readonly requestMappingTemplate?: string;
    /**
    * The location of a request mapping template in an S3 bucket. Use this if you want to provision with a template file in S3 rather than embedding it in your CFNshort template.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_resolver#request_mapping_template_s3_location CcResolver#request_mapping_template_s3_location}
    */
    readonly requestMappingTemplateS3Location?: string;
    /**
    * The response mapping template.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_resolver#response_mapping_template CcResolver#response_mapping_template}
    */
    readonly responseMappingTemplate?: string;
    /**
    * The location of a response mapping template in an S3 bucket. Use this if you want to provision with a template file in S3 rather than embedding it in your CFNshort template.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_resolver#response_mapping_template_s3_location CcResolver#response_mapping_template_s3_location}
    */
    readonly responseMappingTemplateS3Location?: string;
    /**
    * Describes a runtime used by an APSYlong resolver or APSYlong function. Specifies the name and version of the runtime to use. Note that if a runtime is specified, code must also be specified.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_resolver#runtime CcResolver#runtime}
    */
    readonly runtime?: CcResolver.AppSyncRuntimeProperty;
    /**
    * The ``SyncConfig`` for a resolver attached to a versioned data source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_resolver#sync_config CcResolver#sync_config}
    */
    readonly syncConfig?: CcResolver.SyncConfigProperty;
    /**
    * The GraphQL type that invokes this resolver.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_resolver#type_name CcResolver#type_name}
    */
    readonly typeName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_resolver awscc_appsync_resolver}
*/
export class CcResolver extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_appsync_resolver";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcResolver resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcResolver to import
    * @param importFromId The id of the existing CcResolver that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_resolver#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcResolver to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_appsync_resolver", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_resolver awscc_appsync_resolver} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcResolverProps
    */
    public constructor(scope: Construct, id: string, config: CcResolverProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_appsync_resolver',
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
        this._apiId = config.apiId;
        this._cachingConfig.internalValue = config.cachingConfig;
        this._code = config.code;
        this._codeS3Location = config.codeS3Location;
        this._dataSourceName = config.dataSourceName;
        this._fieldName = config.fieldName;
        this._kind = config.kind;
        this._maxBatchSize = config.maxBatchSize;
        this._metricsConfig = config.metricsConfig;
        this._pipelineConfig.internalValue = config.pipelineConfig;
        this._requestMappingTemplate = config.requestMappingTemplate;
        this._requestMappingTemplateS3Location = config.requestMappingTemplateS3Location;
        this._responseMappingTemplate = config.responseMappingTemplate;
        this._responseMappingTemplateS3Location = config.responseMappingTemplateS3Location;
        this._runtime.internalValue = config.runtime;
        this._syncConfig.internalValue = config.syncConfig;
        this._typeName = config.typeName;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // api_id - computed: false, optional: false, required: true
    private _apiId?: string; 
    public get apiId() {
        return this.getStringAttribute('api_id');
    }
    public set apiId(value: string) {
        this._apiId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get apiIdInput() {
        return this._apiId;
    }

    // caching_config - computed: true, optional: true, required: false
    private _cachingConfig = new CcResolver.CachingConfigPropertyOutputReference(this, "caching_config");
    public get cachingConfig() {
        return this._cachingConfig;
    }
    public putCachingConfig(value: CcResolver.CachingConfigProperty) {
        this._cachingConfig.internalValue = value;
    }
    public resetCachingConfig() {
        this._cachingConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cachingConfigInput() {
        return this._cachingConfig.internalValue;
    }

    // code - computed: true, optional: true, required: false
    private _code?: string; 
    public get code() {
        return this.getStringAttribute('code');
    }
    public set code(value: string) {
        this._code = value;
    }
    public resetCode() {
        this._code = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get codeInput() {
        return this._code;
    }

    // code_s3_location - computed: true, optional: true, required: false
    private _codeS3Location?: string; 
    public get codeS3Location() {
        return this.getStringAttribute('code_s3_location');
    }
    public set codeS3Location(value: string) {
        this._codeS3Location = value;
    }
    public resetCodeS3Location() {
        this._codeS3Location = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get codeS3LocationInput() {
        return this._codeS3Location;
    }

    // data_source_name - computed: true, optional: true, required: false
    private _dataSourceName?: string; 
    public get dataSourceName() {
        return this.getStringAttribute('data_source_name');
    }
    public set dataSourceName(value: string) {
        this._dataSourceName = value;
    }
    public resetDataSourceName() {
        this._dataSourceName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataSourceNameInput() {
        return this._dataSourceName;
    }

    // field_name - computed: false, optional: false, required: true
    private _fieldName?: string; 
    public get fieldName() {
        return this.getStringAttribute('field_name');
    }
    public set fieldName(value: string) {
        this._fieldName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get fieldNameInput() {
        return this._fieldName;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // kind - computed: true, optional: true, required: false
    private _kind?: string; 
    public get kind() {
        return this.getStringAttribute('kind');
    }
    public set kind(value: string) {
        this._kind = value;
    }
    public resetKind() {
        this._kind = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kindInput() {
        return this._kind;
    }

    // max_batch_size - computed: true, optional: true, required: false
    private _maxBatchSize?: number; 
    public get maxBatchSize() {
        return this.getNumberAttribute('max_batch_size');
    }
    public set maxBatchSize(value: number) {
        this._maxBatchSize = value;
    }
    public resetMaxBatchSize() {
        this._maxBatchSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxBatchSizeInput() {
        return this._maxBatchSize;
    }

    // metrics_config - computed: true, optional: true, required: false
    private _metricsConfig?: string; 
    public get metricsConfig() {
        return this.getStringAttribute('metrics_config');
    }
    public set metricsConfig(value: string) {
        this._metricsConfig = value;
    }
    public resetMetricsConfig() {
        this._metricsConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricsConfigInput() {
        return this._metricsConfig;
    }

    // pipeline_config - computed: true, optional: true, required: false
    private _pipelineConfig = new CcResolver.PipelineConfigPropertyOutputReference(this, "pipeline_config");
    public get pipelineConfig() {
        return this._pipelineConfig;
    }
    public putPipelineConfig(value: CcResolver.PipelineConfigProperty) {
        this._pipelineConfig.internalValue = value;
    }
    public resetPipelineConfig() {
        this._pipelineConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pipelineConfigInput() {
        return this._pipelineConfig.internalValue;
    }

    // request_mapping_template - computed: true, optional: true, required: false
    private _requestMappingTemplate?: string; 
    public get requestMappingTemplate() {
        return this.getStringAttribute('request_mapping_template');
    }
    public set requestMappingTemplate(value: string) {
        this._requestMappingTemplate = value;
    }
    public resetRequestMappingTemplate() {
        this._requestMappingTemplate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requestMappingTemplateInput() {
        return this._requestMappingTemplate;
    }

    // request_mapping_template_s3_location - computed: true, optional: true, required: false
    private _requestMappingTemplateS3Location?: string; 
    public get requestMappingTemplateS3Location() {
        return this.getStringAttribute('request_mapping_template_s3_location');
    }
    public set requestMappingTemplateS3Location(value: string) {
        this._requestMappingTemplateS3Location = value;
    }
    public resetRequestMappingTemplateS3Location() {
        this._requestMappingTemplateS3Location = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requestMappingTemplateS3LocationInput() {
        return this._requestMappingTemplateS3Location;
    }

    // resolver_arn - computed: true, optional: false, required: false
    public get resolverArn() {
        return this.getStringAttribute('resolver_arn');
    }

    // response_mapping_template - computed: true, optional: true, required: false
    private _responseMappingTemplate?: string; 
    public get responseMappingTemplate() {
        return this.getStringAttribute('response_mapping_template');
    }
    public set responseMappingTemplate(value: string) {
        this._responseMappingTemplate = value;
    }
    public resetResponseMappingTemplate() {
        this._responseMappingTemplate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get responseMappingTemplateInput() {
        return this._responseMappingTemplate;
    }

    // response_mapping_template_s3_location - computed: true, optional: true, required: false
    private _responseMappingTemplateS3Location?: string; 
    public get responseMappingTemplateS3Location() {
        return this.getStringAttribute('response_mapping_template_s3_location');
    }
    public set responseMappingTemplateS3Location(value: string) {
        this._responseMappingTemplateS3Location = value;
    }
    public resetResponseMappingTemplateS3Location() {
        this._responseMappingTemplateS3Location = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get responseMappingTemplateS3LocationInput() {
        return this._responseMappingTemplateS3Location;
    }

    // runtime - computed: true, optional: true, required: false
    private _runtime = new CcResolver.AppSyncRuntimePropertyOutputReference(this, "runtime");
    public get runtime() {
        return this._runtime;
    }
    public putRuntime(value: CcResolver.AppSyncRuntimeProperty) {
        this._runtime.internalValue = value;
    }
    public resetRuntime() {
        this._runtime.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get runtimeInput() {
        return this._runtime.internalValue;
    }

    // sync_config - computed: true, optional: true, required: false
    private _syncConfig = new CcResolver.SyncConfigPropertyOutputReference(this, "sync_config");
    public get syncConfig() {
        return this._syncConfig;
    }
    public putSyncConfig(value: CcResolver.SyncConfigProperty) {
        this._syncConfig.internalValue = value;
    }
    public resetSyncConfig() {
        this._syncConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get syncConfigInput() {
        return this._syncConfig.internalValue;
    }

    // type_name - computed: false, optional: false, required: true
    private _typeName?: string; 
    public get typeName() {
        return this.getStringAttribute('type_name');
    }
    public set typeName(value: string) {
        this._typeName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get typeNameInput() {
        return this._typeName;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            api_id: cdktn.stringToTerraform(this._apiId),
            caching_config: ccResolverCachingConfigPropertyToTerraform(this._cachingConfig.internalValue),
            code: cdktn.stringToTerraform(this._code),
            code_s3_location: cdktn.stringToTerraform(this._codeS3Location),
            data_source_name: cdktn.stringToTerraform(this._dataSourceName),
            field_name: cdktn.stringToTerraform(this._fieldName),
            kind: cdktn.stringToTerraform(this._kind),
            max_batch_size: cdktn.numberToTerraform(this._maxBatchSize),
            metrics_config: cdktn.stringToTerraform(this._metricsConfig),
            pipeline_config: ccResolverPipelineConfigPropertyToTerraform(this._pipelineConfig.internalValue),
            request_mapping_template: cdktn.stringToTerraform(this._requestMappingTemplate),
            request_mapping_template_s3_location: cdktn.stringToTerraform(this._requestMappingTemplateS3Location),
            response_mapping_template: cdktn.stringToTerraform(this._responseMappingTemplate),
            response_mapping_template_s3_location: cdktn.stringToTerraform(this._responseMappingTemplateS3Location),
            runtime: ccResolverAppSyncRuntimePropertyToTerraform(this._runtime.internalValue),
            sync_config: ccResolverSyncConfigPropertyToTerraform(this._syncConfig.internalValue),
            type_name: cdktn.stringToTerraform(this._typeName),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            api_id: {
                value: cdktn.stringToHclTerraform(this._apiId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            caching_config: {
                value: ccResolverCachingConfigPropertyToHclTerraform(this._cachingConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcResolver.CachingConfigProperty",
            },
            code: {
                value: cdktn.stringToHclTerraform(this._code),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            code_s3_location: {
                value: cdktn.stringToHclTerraform(this._codeS3Location),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            data_source_name: {
                value: cdktn.stringToHclTerraform(this._dataSourceName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            field_name: {
                value: cdktn.stringToHclTerraform(this._fieldName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            kind: {
                value: cdktn.stringToHclTerraform(this._kind),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            max_batch_size: {
                value: cdktn.numberToHclTerraform(this._maxBatchSize),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            metrics_config: {
                value: cdktn.stringToHclTerraform(this._metricsConfig),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            pipeline_config: {
                value: ccResolverPipelineConfigPropertyToHclTerraform(this._pipelineConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcResolver.PipelineConfigProperty",
            },
            request_mapping_template: {
                value: cdktn.stringToHclTerraform(this._requestMappingTemplate),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            request_mapping_template_s3_location: {
                value: cdktn.stringToHclTerraform(this._requestMappingTemplateS3Location),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            response_mapping_template: {
                value: cdktn.stringToHclTerraform(this._responseMappingTemplate),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            response_mapping_template_s3_location: {
                value: cdktn.stringToHclTerraform(this._responseMappingTemplateS3Location),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            runtime: {
                value: ccResolverAppSyncRuntimePropertyToHclTerraform(this._runtime.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcResolver.AppSyncRuntimeProperty",
            },
            sync_config: {
                value: ccResolverSyncConfigPropertyToHclTerraform(this._syncConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcResolver.SyncConfigProperty",
            },
            type_name: {
                value: cdktn.stringToHclTerraform(this._typeName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccResolverCachingConfigPropertyToTerraform(struct?: CcResolver.CachingConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        caching_keys: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.cachingKeys),
        ttl: cdktn.numberToTerraform(struct!.ttl),
    }
}


export function ccResolverCachingConfigPropertyToHclTerraform(struct?: CcResolver.CachingConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        caching_keys: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.cachingKeys),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        ttl: {
            value: cdktn.numberToHclTerraform(struct!.ttl),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccResolverPipelineConfigPropertyToTerraform(struct?: CcResolver.PipelineConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        functions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.functions),
    }
}


export function ccResolverPipelineConfigPropertyToHclTerraform(struct?: CcResolver.PipelineConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        functions: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.functions),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccResolverAppSyncRuntimePropertyToTerraform(struct?: CcResolver.AppSyncRuntimeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        runtime_version: cdktn.stringToTerraform(struct!.runtimeVersion),
    }
}


export function ccResolverAppSyncRuntimePropertyToHclTerraform(struct?: CcResolver.AppSyncRuntimeProperty | cdktn.IResolvable): any {
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
        runtime_version: {
            value: cdktn.stringToHclTerraform(struct!.runtimeVersion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccResolverLambdaConflictHandlerConfigPropertyToTerraform(struct?: CcResolver.LambdaConflictHandlerConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        lambda_conflict_handler_arn: cdktn.stringToTerraform(struct!.lambdaConflictHandlerArn),
    }
}


export function ccResolverLambdaConflictHandlerConfigPropertyToHclTerraform(struct?: CcResolver.LambdaConflictHandlerConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        lambda_conflict_handler_arn: {
            value: cdktn.stringToHclTerraform(struct!.lambdaConflictHandlerArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccResolverSyncConfigPropertyToTerraform(struct?: CcResolver.SyncConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        conflict_detection: cdktn.stringToTerraform(struct!.conflictDetection),
        conflict_handler: cdktn.stringToTerraform(struct!.conflictHandler),
        lambda_conflict_handler_config: ccResolverLambdaConflictHandlerConfigPropertyToTerraform(struct!.lambdaConflictHandlerConfig),
    }
}


export function ccResolverSyncConfigPropertyToHclTerraform(struct?: CcResolver.SyncConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        conflict_detection: {
            value: cdktn.stringToHclTerraform(struct!.conflictDetection),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        conflict_handler: {
            value: cdktn.stringToHclTerraform(struct!.conflictHandler),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        lambda_conflict_handler_config: {
            value: ccResolverLambdaConflictHandlerConfigPropertyToHclTerraform(struct!.lambdaConflictHandlerConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "LambdaConflictHandlerConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcResolver {
export interface CachingConfigProperty {
    /**
    * The caching keys for a resolver that has caching activated.
    *  Valid values are entries from the ``$context.arguments``, ``$context.source``, and ``$context.identity`` maps.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_resolver#caching_keys CcResolver#caching_keys}
    */
    readonly cachingKeys?: string[];
    /**
    * The TTL in seconds for a resolver that has caching activated.
    *  Valid values are 1?3,600 seconds.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_resolver#ttl CcResolver#ttl}
    */
    readonly ttl?: number;
}
export class CachingConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CachingConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cachingKeys !== undefined) {
            hasAnyValues = true;
            internalValueResult.cachingKeys = this._cachingKeys;
        }
        if (this._ttl !== undefined) {
            hasAnyValues = true;
            internalValueResult.ttl = this._ttl;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CachingConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cachingKeys = undefined;
            this._ttl = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cachingKeys = value.cachingKeys;
            this._ttl = value.ttl;
        }
    }

    // caching_keys - computed: true, optional: true, required: false
    private _cachingKeys?: string[]; 
    public get cachingKeys() {
        return this.getListAttribute('caching_keys');
    }
    public set cachingKeys(value: string[]) {
        this._cachingKeys = value;
    }
    public resetCachingKeys() {
        this._cachingKeys = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cachingKeysInput() {
        return this._cachingKeys;
    }

    // ttl - computed: true, optional: true, required: false
    private _ttl?: number; 
    public get ttl() {
        return this.getNumberAttribute('ttl');
    }
    public set ttl(value: number) {
        this._ttl = value;
    }
    public resetTtl() {
        this._ttl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ttlInput() {
        return this._ttl;
    }
}
export interface PipelineConfigProperty {
    /**
    * A list of ``Function`` objects.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_resolver#functions CcResolver#functions}
    */
    readonly functions?: string[];
}
export class PipelineConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PipelineConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._functions !== undefined) {
            hasAnyValues = true;
            internalValueResult.functions = this._functions;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PipelineConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._functions = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._functions = value.functions;
        }
    }

    // functions - computed: true, optional: true, required: false
    private _functions?: string[]; 
    public get functions() {
        return this.getListAttribute('functions');
    }
    public set functions(value: string[]) {
        this._functions = value;
    }
    public resetFunctions() {
        this._functions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get functionsInput() {
        return this._functions;
    }
}
export interface AppSyncRuntimeProperty {
    /**
    * The ``name`` of the runtime to use. Currently, the only allowed value is ``APPSYNC_JS``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_resolver#name CcResolver#name}
    */
    readonly name?: string;
    /**
    * The ``version`` of the runtime to use. Currently, the only allowed version is ``1.0.0``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_resolver#runtime_version CcResolver#runtime_version}
    */
    readonly runtimeVersion?: string;
}
export class AppSyncRuntimePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AppSyncRuntimeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._runtimeVersion !== undefined) {
            hasAnyValues = true;
            internalValueResult.runtimeVersion = this._runtimeVersion;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AppSyncRuntimeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._runtimeVersion = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._runtimeVersion = value.runtimeVersion;
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

    // runtime_version - computed: true, optional: true, required: false
    private _runtimeVersion?: string; 
    public get runtimeVersion() {
        return this.getStringAttribute('runtime_version');
    }
    public set runtimeVersion(value: string) {
        this._runtimeVersion = value;
    }
    public resetRuntimeVersion() {
        this._runtimeVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get runtimeVersionInput() {
        return this._runtimeVersion;
    }
}
export interface LambdaConflictHandlerConfigProperty {
    /**
    * The Amazon Resource Name (ARN) for the Lambda function to use as the Conflict Handler.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_resolver#lambda_conflict_handler_arn CcResolver#lambda_conflict_handler_arn}
    */
    readonly lambdaConflictHandlerArn?: string;
}
export class LambdaConflictHandlerConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LambdaConflictHandlerConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._lambdaConflictHandlerArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.lambdaConflictHandlerArn = this._lambdaConflictHandlerArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LambdaConflictHandlerConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._lambdaConflictHandlerArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._lambdaConflictHandlerArn = value.lambdaConflictHandlerArn;
        }
    }

    // lambda_conflict_handler_arn - computed: true, optional: true, required: false
    private _lambdaConflictHandlerArn?: string; 
    public get lambdaConflictHandlerArn() {
        return this.getStringAttribute('lambda_conflict_handler_arn');
    }
    public set lambdaConflictHandlerArn(value: string) {
        this._lambdaConflictHandlerArn = value;
    }
    public resetLambdaConflictHandlerArn() {
        this._lambdaConflictHandlerArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lambdaConflictHandlerArnInput() {
        return this._lambdaConflictHandlerArn;
    }
}
export interface SyncConfigProperty {
    /**
    * The Conflict Detection strategy to use.
    *   +  *VERSION*: Detect conflicts based on object versions for this resolver.
    *   +  *NONE*: Do not detect conflicts when invoking this resolver.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_resolver#conflict_detection CcResolver#conflict_detection}
    */
    readonly conflictDetection?: string;
    /**
    * The Conflict Resolution strategy to perform in the event of a conflict.
    *   +  *OPTIMISTIC_CONCURRENCY*: Resolve conflicts by rejecting mutations when versions don't match the latest version at the server.
    *   +  *AUTOMERGE*: Resolve conflicts with the Automerge conflict resolution strategy.
    *   +  *LAMBDA*: Resolve conflicts with an LAMlong function supplied in the ``LambdaConflictHandlerConfig``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_resolver#conflict_handler CcResolver#conflict_handler}
    */
    readonly conflictHandler?: string;
    /**
    * The ``LambdaConflictHandlerConfig`` when configuring ``LAMBDA`` as the Conflict Handler.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appsync_resolver#lambda_conflict_handler_config CcResolver#lambda_conflict_handler_config}
    */
    readonly lambdaConflictHandlerConfig?: LambdaConflictHandlerConfigProperty;
}
export class SyncConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SyncConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._conflictDetection !== undefined) {
            hasAnyValues = true;
            internalValueResult.conflictDetection = this._conflictDetection;
        }
        if (this._conflictHandler !== undefined) {
            hasAnyValues = true;
            internalValueResult.conflictHandler = this._conflictHandler;
        }
        if (this._lambdaConflictHandlerConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.lambdaConflictHandlerConfig = this._lambdaConflictHandlerConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SyncConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._conflictDetection = undefined;
            this._conflictHandler = undefined;
            this._lambdaConflictHandlerConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._conflictDetection = value.conflictDetection;
            this._conflictHandler = value.conflictHandler;
            this._lambdaConflictHandlerConfig.internalValue = value.lambdaConflictHandlerConfig;
        }
    }

    // conflict_detection - computed: true, optional: true, required: false
    private _conflictDetection?: string; 
    public get conflictDetection() {
        return this.getStringAttribute('conflict_detection');
    }
    public set conflictDetection(value: string) {
        this._conflictDetection = value;
    }
    public resetConflictDetection() {
        this._conflictDetection = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get conflictDetectionInput() {
        return this._conflictDetection;
    }

    // conflict_handler - computed: true, optional: true, required: false
    private _conflictHandler?: string; 
    public get conflictHandler() {
        return this.getStringAttribute('conflict_handler');
    }
    public set conflictHandler(value: string) {
        this._conflictHandler = value;
    }
    public resetConflictHandler() {
        this._conflictHandler = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get conflictHandlerInput() {
        return this._conflictHandler;
    }

    // lambda_conflict_handler_config - computed: true, optional: true, required: false
    private _lambdaConflictHandlerConfig = new LambdaConflictHandlerConfigPropertyOutputReference(this, "lambda_conflict_handler_config");
    public get lambdaConflictHandlerConfig() {
        return this._lambdaConflictHandlerConfig;
    }
    public putLambdaConflictHandlerConfig(value: LambdaConflictHandlerConfigProperty) {
        this._lambdaConflictHandlerConfig.internalValue = value;
    }
    public resetLambdaConflictHandlerConfig() {
        this._lambdaConflictHandlerConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lambdaConflictHandlerConfigInput() {
        return this._lambdaConflictHandlerConfig.internalValue;
    }
}
}
