// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcDataSourceProps extends cdktn.TerraformMetaArguments {
    /**
    * Unique AWS AppSync GraphQL API identifier where this data source will be created.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source#api_id CcDataSource#api_id}
    */
    readonly apiId: string;
    /**
    * The description of the data source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source#description CcDataSource#description}
    */
    readonly description?: string;
    /**
    * AWS Region and TableName for an Amazon DynamoDB table in your account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source#dynamo_db_config CcDataSource#dynamo_db_config}
    */
    readonly dynamoDbConfig?: CcDataSource.DynamoDBConfigProperty;
    /**
    * AWS Region and Endpoints for an Amazon OpenSearch Service domain in your account.
    * As of September 2021, Amazon Elasticsearch Service is Amazon OpenSearch Service. This property is deprecated. For new data sources, use OpenSearchServiceConfig to specify an OpenSearch Service data source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source#elasticsearch_config CcDataSource#elasticsearch_config}
    */
    readonly elasticsearchConfig?: CcDataSource.ElasticsearchConfigProperty;
    /**
    * ARN for the EventBridge bus.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source#event_bridge_config CcDataSource#event_bridge_config}
    */
    readonly eventBridgeConfig?: CcDataSource.EventBridgeConfigProperty;
    /**
    * Endpoints for an HTTP data source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source#http_config CcDataSource#http_config}
    */
    readonly httpConfig?: CcDataSource.HttpConfigProperty;
    /**
    * An ARN of a Lambda function in valid ARN format. This can be the ARN of a Lambda function that exists in the current account or in another account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source#lambda_config CcDataSource#lambda_config}
    */
    readonly lambdaConfig?: CcDataSource.LambdaConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source#metrics_config CcDataSource#metrics_config}
    */
    readonly metricsConfig?: string;
    /**
    * Friendly name for you to identify your AppSync data source after creation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source#name CcDataSource#name}
    */
    readonly name: string;
    /**
    * AWS Region and Endpoints for an Amazon OpenSearch Service domain in your account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source#open_search_service_config CcDataSource#open_search_service_config}
    */
    readonly openSearchServiceConfig?: CcDataSource.OpenSearchServiceConfigProperty;
    /**
    * Relational Database configuration of the relational database data source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source#relational_database_config CcDataSource#relational_database_config}
    */
    readonly relationalDatabaseConfig?: CcDataSource.RelationalDatabaseConfigProperty;
    /**
    * The AWS Identity and Access Management service role ARN for the data source. The system assumes this role when accessing the data source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source#service_role_arn CcDataSource#service_role_arn}
    */
    readonly serviceRoleArn?: string;
    /**
    * The type of the data source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source#type CcDataSource#type}
    */
    readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source awscc_appsync_data_source}
*/
export class CcDataSource extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_appsync_data_source";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcDataSource resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcDataSource to import
    * @param importFromId The id of the existing CcDataSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcDataSource to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_appsync_data_source", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source awscc_appsync_data_source} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcDataSourceProps
    */
    public constructor(scope: Construct, id: string, config: CcDataSourceProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_appsync_data_source',
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
        this._apiId = config.apiId;
        this._description = config.description;
        this._dynamoDbConfig.internalValue = config.dynamoDbConfig;
        this._elasticsearchConfig.internalValue = config.elasticsearchConfig;
        this._eventBridgeConfig.internalValue = config.eventBridgeConfig;
        this._httpConfig.internalValue = config.httpConfig;
        this._lambdaConfig.internalValue = config.lambdaConfig;
        this._metricsConfig = config.metricsConfig;
        this._name = config.name;
        this._openSearchServiceConfig.internalValue = config.openSearchServiceConfig;
        this._relationalDatabaseConfig.internalValue = config.relationalDatabaseConfig;
        this._serviceRoleArn = config.serviceRoleArn;
        this._type = config.type;
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

    // data_source_arn - computed: true, optional: false, required: false
    public get dataSourceArn() {
        return this.getStringAttribute('data_source_arn');
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

    // dynamo_db_config - computed: true, optional: true, required: false
    private _dynamoDbConfig = new CcDataSource.DynamoDBConfigPropertyOutputReference(this, "dynamo_db_config");
    public get dynamoDbConfig() {
        return this._dynamoDbConfig;
    }
    public putDynamoDbConfig(value: CcDataSource.DynamoDBConfigProperty) {
        this._dynamoDbConfig.internalValue = value;
    }
    public resetDynamoDbConfig() {
        this._dynamoDbConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dynamoDbConfigInput() {
        return this._dynamoDbConfig.internalValue;
    }

    // elasticsearch_config - computed: true, optional: true, required: false
    private _elasticsearchConfig = new CcDataSource.ElasticsearchConfigPropertyOutputReference(this, "elasticsearch_config");
    public get elasticsearchConfig() {
        return this._elasticsearchConfig;
    }
    public putElasticsearchConfig(value: CcDataSource.ElasticsearchConfigProperty) {
        this._elasticsearchConfig.internalValue = value;
    }
    public resetElasticsearchConfig() {
        this._elasticsearchConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get elasticsearchConfigInput() {
        return this._elasticsearchConfig.internalValue;
    }

    // event_bridge_config - computed: true, optional: true, required: false
    private _eventBridgeConfig = new CcDataSource.EventBridgeConfigPropertyOutputReference(this, "event_bridge_config");
    public get eventBridgeConfig() {
        return this._eventBridgeConfig;
    }
    public putEventBridgeConfig(value: CcDataSource.EventBridgeConfigProperty) {
        this._eventBridgeConfig.internalValue = value;
    }
    public resetEventBridgeConfig() {
        this._eventBridgeConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventBridgeConfigInput() {
        return this._eventBridgeConfig.internalValue;
    }

    // http_config - computed: true, optional: true, required: false
    private _httpConfig = new CcDataSource.HttpConfigPropertyOutputReference(this, "http_config");
    public get httpConfig() {
        return this._httpConfig;
    }
    public putHttpConfig(value: CcDataSource.HttpConfigProperty) {
        this._httpConfig.internalValue = value;
    }
    public resetHttpConfig() {
        this._httpConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get httpConfigInput() {
        return this._httpConfig.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // lambda_config - computed: true, optional: true, required: false
    private _lambdaConfig = new CcDataSource.LambdaConfigPropertyOutputReference(this, "lambda_config");
    public get lambdaConfig() {
        return this._lambdaConfig;
    }
    public putLambdaConfig(value: CcDataSource.LambdaConfigProperty) {
        this._lambdaConfig.internalValue = value;
    }
    public resetLambdaConfig() {
        this._lambdaConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lambdaConfigInput() {
        return this._lambdaConfig.internalValue;
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

    // open_search_service_config - computed: true, optional: true, required: false
    private _openSearchServiceConfig = new CcDataSource.OpenSearchServiceConfigPropertyOutputReference(this, "open_search_service_config");
    public get openSearchServiceConfig() {
        return this._openSearchServiceConfig;
    }
    public putOpenSearchServiceConfig(value: CcDataSource.OpenSearchServiceConfigProperty) {
        this._openSearchServiceConfig.internalValue = value;
    }
    public resetOpenSearchServiceConfig() {
        this._openSearchServiceConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get openSearchServiceConfigInput() {
        return this._openSearchServiceConfig.internalValue;
    }

    // relational_database_config - computed: true, optional: true, required: false
    private _relationalDatabaseConfig = new CcDataSource.RelationalDatabaseConfigPropertyOutputReference(this, "relational_database_config");
    public get relationalDatabaseConfig() {
        return this._relationalDatabaseConfig;
    }
    public putRelationalDatabaseConfig(value: CcDataSource.RelationalDatabaseConfigProperty) {
        this._relationalDatabaseConfig.internalValue = value;
    }
    public resetRelationalDatabaseConfig() {
        this._relationalDatabaseConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get relationalDatabaseConfigInput() {
        return this._relationalDatabaseConfig.internalValue;
    }

    // service_role_arn - computed: true, optional: true, required: false
    private _serviceRoleArn?: string; 
    public get serviceRoleArn() {
        return this.getStringAttribute('service_role_arn');
    }
    public set serviceRoleArn(value: string) {
        this._serviceRoleArn = value;
    }
    public resetServiceRoleArn() {
        this._serviceRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceRoleArnInput() {
        return this._serviceRoleArn;
    }

    // type - computed: false, optional: false, required: true
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            api_id: cdktn.stringToTerraform(this._apiId),
            description: cdktn.stringToTerraform(this._description),
            dynamo_db_config: ccDataSourceDynamoDBConfigPropertyToTerraform(this._dynamoDbConfig.internalValue),
            elasticsearch_config: ccDataSourceElasticsearchConfigPropertyToTerraform(this._elasticsearchConfig.internalValue),
            event_bridge_config: ccDataSourceEventBridgeConfigPropertyToTerraform(this._eventBridgeConfig.internalValue),
            http_config: ccDataSourceHttpConfigPropertyToTerraform(this._httpConfig.internalValue),
            lambda_config: ccDataSourceLambdaConfigPropertyToTerraform(this._lambdaConfig.internalValue),
            metrics_config: cdktn.stringToTerraform(this._metricsConfig),
            name: cdktn.stringToTerraform(this._name),
            open_search_service_config: ccDataSourceOpenSearchServiceConfigPropertyToTerraform(this._openSearchServiceConfig.internalValue),
            relational_database_config: ccDataSourceRelationalDatabaseConfigPropertyToTerraform(this._relationalDatabaseConfig.internalValue),
            service_role_arn: cdktn.stringToTerraform(this._serviceRoleArn),
            type: cdktn.stringToTerraform(this._type),
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
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            dynamo_db_config: {
                value: ccDataSourceDynamoDBConfigPropertyToHclTerraform(this._dynamoDbConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDataSource.DynamoDBConfigProperty",
            },
            elasticsearch_config: {
                value: ccDataSourceElasticsearchConfigPropertyToHclTerraform(this._elasticsearchConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDataSource.ElasticsearchConfigProperty",
            },
            event_bridge_config: {
                value: ccDataSourceEventBridgeConfigPropertyToHclTerraform(this._eventBridgeConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDataSource.EventBridgeConfigProperty",
            },
            http_config: {
                value: ccDataSourceHttpConfigPropertyToHclTerraform(this._httpConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDataSource.HttpConfigProperty",
            },
            lambda_config: {
                value: ccDataSourceLambdaConfigPropertyToHclTerraform(this._lambdaConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDataSource.LambdaConfigProperty",
            },
            metrics_config: {
                value: cdktn.stringToHclTerraform(this._metricsConfig),
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
            open_search_service_config: {
                value: ccDataSourceOpenSearchServiceConfigPropertyToHclTerraform(this._openSearchServiceConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDataSource.OpenSearchServiceConfigProperty",
            },
            relational_database_config: {
                value: ccDataSourceRelationalDatabaseConfigPropertyToHclTerraform(this._relationalDatabaseConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDataSource.RelationalDatabaseConfigProperty",
            },
            service_role_arn: {
                value: cdktn.stringToHclTerraform(this._serviceRoleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            type: {
                value: cdktn.stringToHclTerraform(this._type),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccDataSourceDeltaSyncConfigPropertyToTerraform(struct?: CcDataSource.DeltaSyncConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        base_table_ttl: cdktn.stringToTerraform(struct!.baseTableTtl),
        delta_sync_table_name: cdktn.stringToTerraform(struct!.deltaSyncTableName),
        delta_sync_table_ttl: cdktn.stringToTerraform(struct!.deltaSyncTableTtl),
    }
}


export function ccDataSourceDeltaSyncConfigPropertyToHclTerraform(struct?: CcDataSource.DeltaSyncConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        base_table_ttl: {
            value: cdktn.stringToHclTerraform(struct!.baseTableTtl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        delta_sync_table_name: {
            value: cdktn.stringToHclTerraform(struct!.deltaSyncTableName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        delta_sync_table_ttl: {
            value: cdktn.stringToHclTerraform(struct!.deltaSyncTableTtl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceDynamoDBConfigPropertyToTerraform(struct?: CcDataSource.DynamoDBConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        aws_region: cdktn.stringToTerraform(struct!.awsRegion),
        delta_sync_config: ccDataSourceDeltaSyncConfigPropertyToTerraform(struct!.deltaSyncConfig),
        table_name: cdktn.stringToTerraform(struct!.tableName),
        use_caller_credentials: cdktn.booleanToTerraform(struct!.useCallerCredentials),
        versioned: cdktn.booleanToTerraform(struct!.versioned),
    }
}


export function ccDataSourceDynamoDBConfigPropertyToHclTerraform(struct?: CcDataSource.DynamoDBConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        aws_region: {
            value: cdktn.stringToHclTerraform(struct!.awsRegion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        delta_sync_config: {
            value: ccDataSourceDeltaSyncConfigPropertyToHclTerraform(struct!.deltaSyncConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "DeltaSyncConfigProperty",
        },
        table_name: {
            value: cdktn.stringToHclTerraform(struct!.tableName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        use_caller_credentials: {
            value: cdktn.booleanToHclTerraform(struct!.useCallerCredentials),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        versioned: {
            value: cdktn.booleanToHclTerraform(struct!.versioned),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceElasticsearchConfigPropertyToTerraform(struct?: CcDataSource.ElasticsearchConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        aws_region: cdktn.stringToTerraform(struct!.awsRegion),
        endpoint: cdktn.stringToTerraform(struct!.endpoint),
    }
}


export function ccDataSourceElasticsearchConfigPropertyToHclTerraform(struct?: CcDataSource.ElasticsearchConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        aws_region: {
            value: cdktn.stringToHclTerraform(struct!.awsRegion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        endpoint: {
            value: cdktn.stringToHclTerraform(struct!.endpoint),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceEventBridgeConfigPropertyToTerraform(struct?: CcDataSource.EventBridgeConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        event_bus_arn: cdktn.stringToTerraform(struct!.eventBusArn),
    }
}


export function ccDataSourceEventBridgeConfigPropertyToHclTerraform(struct?: CcDataSource.EventBridgeConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        event_bus_arn: {
            value: cdktn.stringToHclTerraform(struct!.eventBusArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceAwsIamConfigPropertyToTerraform(struct?: CcDataSource.AwsIamConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        signing_region: cdktn.stringToTerraform(struct!.signingRegion),
        signing_service_name: cdktn.stringToTerraform(struct!.signingServiceName),
    }
}


export function ccDataSourceAwsIamConfigPropertyToHclTerraform(struct?: CcDataSource.AwsIamConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        signing_region: {
            value: cdktn.stringToHclTerraform(struct!.signingRegion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        signing_service_name: {
            value: cdktn.stringToHclTerraform(struct!.signingServiceName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceAuthorizationConfigPropertyToTerraform(struct?: CcDataSource.AuthorizationConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        authorization_type: cdktn.stringToTerraform(struct!.authorizationType),
        aws_iam_config: ccDataSourceAwsIamConfigPropertyToTerraform(struct!.awsIamConfig),
    }
}


export function ccDataSourceAuthorizationConfigPropertyToHclTerraform(struct?: CcDataSource.AuthorizationConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        authorization_type: {
            value: cdktn.stringToHclTerraform(struct!.authorizationType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        aws_iam_config: {
            value: ccDataSourceAwsIamConfigPropertyToHclTerraform(struct!.awsIamConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "AwsIamConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceHttpConfigPropertyToTerraform(struct?: CcDataSource.HttpConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        authorization_config: ccDataSourceAuthorizationConfigPropertyToTerraform(struct!.authorizationConfig),
        endpoint: cdktn.stringToTerraform(struct!.endpoint),
    }
}


export function ccDataSourceHttpConfigPropertyToHclTerraform(struct?: CcDataSource.HttpConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        authorization_config: {
            value: ccDataSourceAuthorizationConfigPropertyToHclTerraform(struct!.authorizationConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "AuthorizationConfigProperty",
        },
        endpoint: {
            value: cdktn.stringToHclTerraform(struct!.endpoint),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceLambdaConfigPropertyToTerraform(struct?: CcDataSource.LambdaConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        lambda_function_arn: cdktn.stringToTerraform(struct!.lambdaFunctionArn),
    }
}


export function ccDataSourceLambdaConfigPropertyToHclTerraform(struct?: CcDataSource.LambdaConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        lambda_function_arn: {
            value: cdktn.stringToHclTerraform(struct!.lambdaFunctionArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceOpenSearchServiceConfigPropertyToTerraform(struct?: CcDataSource.OpenSearchServiceConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        aws_region: cdktn.stringToTerraform(struct!.awsRegion),
        endpoint: cdktn.stringToTerraform(struct!.endpoint),
    }
}


export function ccDataSourceOpenSearchServiceConfigPropertyToHclTerraform(struct?: CcDataSource.OpenSearchServiceConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        aws_region: {
            value: cdktn.stringToHclTerraform(struct!.awsRegion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        endpoint: {
            value: cdktn.stringToHclTerraform(struct!.endpoint),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceRdsHttpEndpointConfigPropertyToTerraform(struct?: CcDataSource.RdsHttpEndpointConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        aws_region: cdktn.stringToTerraform(struct!.awsRegion),
        aws_secret_store_arn: cdktn.stringToTerraform(struct!.awsSecretStoreArn),
        database_name: cdktn.stringToTerraform(struct!.databaseName),
        db_cluster_identifier: cdktn.stringToTerraform(struct!.dbClusterIdentifier),
        schema: cdktn.stringToTerraform(struct!.schema),
    }
}


export function ccDataSourceRdsHttpEndpointConfigPropertyToHclTerraform(struct?: CcDataSource.RdsHttpEndpointConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        aws_region: {
            value: cdktn.stringToHclTerraform(struct!.awsRegion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        aws_secret_store_arn: {
            value: cdktn.stringToHclTerraform(struct!.awsSecretStoreArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        database_name: {
            value: cdktn.stringToHclTerraform(struct!.databaseName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        db_cluster_identifier: {
            value: cdktn.stringToHclTerraform(struct!.dbClusterIdentifier),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        schema: {
            value: cdktn.stringToHclTerraform(struct!.schema),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceRelationalDatabaseConfigPropertyToTerraform(struct?: CcDataSource.RelationalDatabaseConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        rds_http_endpoint_config: ccDataSourceRdsHttpEndpointConfigPropertyToTerraform(struct!.rdsHttpEndpointConfig),
        relational_database_source_type: cdktn.stringToTerraform(struct!.relationalDatabaseSourceType),
    }
}


export function ccDataSourceRelationalDatabaseConfigPropertyToHclTerraform(struct?: CcDataSource.RelationalDatabaseConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        rds_http_endpoint_config: {
            value: ccDataSourceRdsHttpEndpointConfigPropertyToHclTerraform(struct!.rdsHttpEndpointConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "RdsHttpEndpointConfigProperty",
        },
        relational_database_source_type: {
            value: cdktn.stringToHclTerraform(struct!.relationalDatabaseSourceType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcDataSource {
export interface DeltaSyncConfigProperty {
    /**
    * The number of minutes that an Item is stored in the data source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source#base_table_ttl CcDataSource#base_table_ttl}
    */
    readonly baseTableTtl?: string;
    /**
    * The Delta Sync table name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source#delta_sync_table_name CcDataSource#delta_sync_table_name}
    */
    readonly deltaSyncTableName?: string;
    /**
    * The number of minutes that a Delta Sync log entry is stored in the Delta Sync table.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source#delta_sync_table_ttl CcDataSource#delta_sync_table_ttl}
    */
    readonly deltaSyncTableTtl?: string;
}
export class DeltaSyncConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DeltaSyncConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._baseTableTtl !== undefined) {
            hasAnyValues = true;
            internalValueResult.baseTableTtl = this._baseTableTtl;
        }
        if (this._deltaSyncTableName !== undefined) {
            hasAnyValues = true;
            internalValueResult.deltaSyncTableName = this._deltaSyncTableName;
        }
        if (this._deltaSyncTableTtl !== undefined) {
            hasAnyValues = true;
            internalValueResult.deltaSyncTableTtl = this._deltaSyncTableTtl;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DeltaSyncConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._baseTableTtl = undefined;
            this._deltaSyncTableName = undefined;
            this._deltaSyncTableTtl = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._baseTableTtl = value.baseTableTtl;
            this._deltaSyncTableName = value.deltaSyncTableName;
            this._deltaSyncTableTtl = value.deltaSyncTableTtl;
        }
    }

    // base_table_ttl - computed: true, optional: true, required: false
    private _baseTableTtl?: string; 
    public get baseTableTtl() {
        return this.getStringAttribute('base_table_ttl');
    }
    public set baseTableTtl(value: string) {
        this._baseTableTtl = value;
    }
    public resetBaseTableTtl() {
        this._baseTableTtl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get baseTableTtlInput() {
        return this._baseTableTtl;
    }

    // delta_sync_table_name - computed: true, optional: true, required: false
    private _deltaSyncTableName?: string; 
    public get deltaSyncTableName() {
        return this.getStringAttribute('delta_sync_table_name');
    }
    public set deltaSyncTableName(value: string) {
        this._deltaSyncTableName = value;
    }
    public resetDeltaSyncTableName() {
        this._deltaSyncTableName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deltaSyncTableNameInput() {
        return this._deltaSyncTableName;
    }

    // delta_sync_table_ttl - computed: true, optional: true, required: false
    private _deltaSyncTableTtl?: string; 
    public get deltaSyncTableTtl() {
        return this.getStringAttribute('delta_sync_table_ttl');
    }
    public set deltaSyncTableTtl(value: string) {
        this._deltaSyncTableTtl = value;
    }
    public resetDeltaSyncTableTtl() {
        this._deltaSyncTableTtl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deltaSyncTableTtlInput() {
        return this._deltaSyncTableTtl;
    }
}
export interface DynamoDBConfigProperty {
    /**
    * The AWS Region.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source#aws_region CcDataSource#aws_region}
    */
    readonly awsRegion?: string;
    /**
    * The DeltaSyncConfig for a versioned datasource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source#delta_sync_config CcDataSource#delta_sync_config}
    */
    readonly deltaSyncConfig?: DeltaSyncConfigProperty;
    /**
    * The table name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source#table_name CcDataSource#table_name}
    */
    readonly tableName?: string;
    /**
    * Set to TRUE to use AWS Identity and Access Management with this data source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source#use_caller_credentials CcDataSource#use_caller_credentials}
    */
    readonly useCallerCredentials?: boolean | cdktn.IResolvable;
    /**
    * Set to TRUE to use Conflict Detection and Resolution with this data source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source#versioned CcDataSource#versioned}
    */
    readonly versioned?: boolean | cdktn.IResolvable;
}
export class DynamoDBConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DynamoDBConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._awsRegion !== undefined) {
            hasAnyValues = true;
            internalValueResult.awsRegion = this._awsRegion;
        }
        if (this._deltaSyncConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.deltaSyncConfig = this._deltaSyncConfig?.internalValue;
        }
        if (this._tableName !== undefined) {
            hasAnyValues = true;
            internalValueResult.tableName = this._tableName;
        }
        if (this._useCallerCredentials !== undefined) {
            hasAnyValues = true;
            internalValueResult.useCallerCredentials = this._useCallerCredentials;
        }
        if (this._versioned !== undefined) {
            hasAnyValues = true;
            internalValueResult.versioned = this._versioned;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DynamoDBConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._awsRegion = undefined;
            this._deltaSyncConfig.internalValue = undefined;
            this._tableName = undefined;
            this._useCallerCredentials = undefined;
            this._versioned = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._awsRegion = value.awsRegion;
            this._deltaSyncConfig.internalValue = value.deltaSyncConfig;
            this._tableName = value.tableName;
            this._useCallerCredentials = value.useCallerCredentials;
            this._versioned = value.versioned;
        }
    }

    // aws_region - computed: true, optional: true, required: false
    private _awsRegion?: string; 
    public get awsRegion() {
        return this.getStringAttribute('aws_region');
    }
    public set awsRegion(value: string) {
        this._awsRegion = value;
    }
    public resetAwsRegion() {
        this._awsRegion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get awsRegionInput() {
        return this._awsRegion;
    }

    // delta_sync_config - computed: true, optional: true, required: false
    private _deltaSyncConfig = new DeltaSyncConfigPropertyOutputReference(this, "delta_sync_config");
    public get deltaSyncConfig() {
        return this._deltaSyncConfig;
    }
    public putDeltaSyncConfig(value: DeltaSyncConfigProperty) {
        this._deltaSyncConfig.internalValue = value;
    }
    public resetDeltaSyncConfig() {
        this._deltaSyncConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deltaSyncConfigInput() {
        return this._deltaSyncConfig.internalValue;
    }

    // table_name - computed: true, optional: true, required: false
    private _tableName?: string; 
    public get tableName() {
        return this.getStringAttribute('table_name');
    }
    public set tableName(value: string) {
        this._tableName = value;
    }
    public resetTableName() {
        this._tableName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tableNameInput() {
        return this._tableName;
    }

    // use_caller_credentials - computed: true, optional: true, required: false
    private _useCallerCredentials?: boolean | cdktn.IResolvable; 
    public get useCallerCredentials() {
        return this.getBooleanAttribute('use_caller_credentials');
    }
    public set useCallerCredentials(value: boolean | cdktn.IResolvable) {
        this._useCallerCredentials = value;
    }
    public resetUseCallerCredentials() {
        this._useCallerCredentials = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useCallerCredentialsInput() {
        return this._useCallerCredentials;
    }

    // versioned - computed: true, optional: true, required: false
    private _versioned?: boolean | cdktn.IResolvable; 
    public get versioned() {
        return this.getBooleanAttribute('versioned');
    }
    public set versioned(value: boolean | cdktn.IResolvable) {
        this._versioned = value;
    }
    public resetVersioned() {
        this._versioned = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get versionedInput() {
        return this._versioned;
    }
}
export interface ElasticsearchConfigProperty {
    /**
    * The AWS Region.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source#aws_region CcDataSource#aws_region}
    */
    readonly awsRegion?: string;
    /**
    * The endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source#endpoint CcDataSource#endpoint}
    */
    readonly endpoint?: string;
}
export class ElasticsearchConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ElasticsearchConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._awsRegion !== undefined) {
            hasAnyValues = true;
            internalValueResult.awsRegion = this._awsRegion;
        }
        if (this._endpoint !== undefined) {
            hasAnyValues = true;
            internalValueResult.endpoint = this._endpoint;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ElasticsearchConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._awsRegion = undefined;
            this._endpoint = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._awsRegion = value.awsRegion;
            this._endpoint = value.endpoint;
        }
    }

    // aws_region - computed: true, optional: true, required: false
    private _awsRegion?: string; 
    public get awsRegion() {
        return this.getStringAttribute('aws_region');
    }
    public set awsRegion(value: string) {
        this._awsRegion = value;
    }
    public resetAwsRegion() {
        this._awsRegion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get awsRegionInput() {
        return this._awsRegion;
    }

    // endpoint - computed: true, optional: true, required: false
    private _endpoint?: string; 
    public get endpoint() {
        return this.getStringAttribute('endpoint');
    }
    public set endpoint(value: string) {
        this._endpoint = value;
    }
    public resetEndpoint() {
        this._endpoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointInput() {
        return this._endpoint;
    }
}
export interface EventBridgeConfigProperty {
    /**
    * ARN for the EventBridge bus.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source#event_bus_arn CcDataSource#event_bus_arn}
    */
    readonly eventBusArn?: string;
}
export class EventBridgeConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EventBridgeConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._eventBusArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.eventBusArn = this._eventBusArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EventBridgeConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._eventBusArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._eventBusArn = value.eventBusArn;
        }
    }

    // event_bus_arn - computed: true, optional: true, required: false
    private _eventBusArn?: string; 
    public get eventBusArn() {
        return this.getStringAttribute('event_bus_arn');
    }
    public set eventBusArn(value: string) {
        this._eventBusArn = value;
    }
    public resetEventBusArn() {
        this._eventBusArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventBusArnInput() {
        return this._eventBusArn;
    }
}
export interface AwsIamConfigProperty {
    /**
    * The signing Region for AWS Identity and Access Management authorization.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source#signing_region CcDataSource#signing_region}
    */
    readonly signingRegion?: string;
    /**
    * The signing service name for AWS Identity and Access Management authorization.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source#signing_service_name CcDataSource#signing_service_name}
    */
    readonly signingServiceName?: string;
}
export class AwsIamConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AwsIamConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._signingRegion !== undefined) {
            hasAnyValues = true;
            internalValueResult.signingRegion = this._signingRegion;
        }
        if (this._signingServiceName !== undefined) {
            hasAnyValues = true;
            internalValueResult.signingServiceName = this._signingServiceName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AwsIamConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._signingRegion = undefined;
            this._signingServiceName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._signingRegion = value.signingRegion;
            this._signingServiceName = value.signingServiceName;
        }
    }

    // signing_region - computed: true, optional: true, required: false
    private _signingRegion?: string; 
    public get signingRegion() {
        return this.getStringAttribute('signing_region');
    }
    public set signingRegion(value: string) {
        this._signingRegion = value;
    }
    public resetSigningRegion() {
        this._signingRegion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get signingRegionInput() {
        return this._signingRegion;
    }

    // signing_service_name - computed: true, optional: true, required: false
    private _signingServiceName?: string; 
    public get signingServiceName() {
        return this.getStringAttribute('signing_service_name');
    }
    public set signingServiceName(value: string) {
        this._signingServiceName = value;
    }
    public resetSigningServiceName() {
        this._signingServiceName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get signingServiceNameInput() {
        return this._signingServiceName;
    }
}
export interface AuthorizationConfigProperty {
    /**
    * The authorization type that the HTTP endpoint requires.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source#authorization_type CcDataSource#authorization_type}
    */
    readonly authorizationType?: string;
    /**
    * The AWS Identity and Access Management settings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source#aws_iam_config CcDataSource#aws_iam_config}
    */
    readonly awsIamConfig?: AwsIamConfigProperty;
}
export class AuthorizationConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AuthorizationConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._authorizationType !== undefined) {
            hasAnyValues = true;
            internalValueResult.authorizationType = this._authorizationType;
        }
        if (this._awsIamConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.awsIamConfig = this._awsIamConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AuthorizationConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authorizationType = undefined;
            this._awsIamConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authorizationType = value.authorizationType;
            this._awsIamConfig.internalValue = value.awsIamConfig;
        }
    }

    // authorization_type - computed: true, optional: true, required: false
    private _authorizationType?: string; 
    public get authorizationType() {
        return this.getStringAttribute('authorization_type');
    }
    public set authorizationType(value: string) {
        this._authorizationType = value;
    }
    public resetAuthorizationType() {
        this._authorizationType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizationTypeInput() {
        return this._authorizationType;
    }

    // aws_iam_config - computed: true, optional: true, required: false
    private _awsIamConfig = new AwsIamConfigPropertyOutputReference(this, "aws_iam_config");
    public get awsIamConfig() {
        return this._awsIamConfig;
    }
    public putAwsIamConfig(value: AwsIamConfigProperty) {
        this._awsIamConfig.internalValue = value;
    }
    public resetAwsIamConfig() {
        this._awsIamConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get awsIamConfigInput() {
        return this._awsIamConfig.internalValue;
    }
}
export interface HttpConfigProperty {
    /**
    * The authorization configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source#authorization_config CcDataSource#authorization_config}
    */
    readonly authorizationConfig?: AuthorizationConfigProperty;
    /**
    * The endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source#endpoint CcDataSource#endpoint}
    */
    readonly endpoint?: string;
}
export class HttpConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HttpConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._authorizationConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.authorizationConfig = this._authorizationConfig?.internalValue;
        }
        if (this._endpoint !== undefined) {
            hasAnyValues = true;
            internalValueResult.endpoint = this._endpoint;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HttpConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authorizationConfig.internalValue = undefined;
            this._endpoint = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authorizationConfig.internalValue = value.authorizationConfig;
            this._endpoint = value.endpoint;
        }
    }

    // authorization_config - computed: true, optional: true, required: false
    private _authorizationConfig = new AuthorizationConfigPropertyOutputReference(this, "authorization_config");
    public get authorizationConfig() {
        return this._authorizationConfig;
    }
    public putAuthorizationConfig(value: AuthorizationConfigProperty) {
        this._authorizationConfig.internalValue = value;
    }
    public resetAuthorizationConfig() {
        this._authorizationConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizationConfigInput() {
        return this._authorizationConfig.internalValue;
    }

    // endpoint - computed: true, optional: true, required: false
    private _endpoint?: string; 
    public get endpoint() {
        return this.getStringAttribute('endpoint');
    }
    public set endpoint(value: string) {
        this._endpoint = value;
    }
    public resetEndpoint() {
        this._endpoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointInput() {
        return this._endpoint;
    }
}
export interface LambdaConfigProperty {
    /**
    * The ARN for the Lambda function.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source#lambda_function_arn CcDataSource#lambda_function_arn}
    */
    readonly lambdaFunctionArn?: string;
}
export class LambdaConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LambdaConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._lambdaFunctionArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.lambdaFunctionArn = this._lambdaFunctionArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LambdaConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._lambdaFunctionArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._lambdaFunctionArn = value.lambdaFunctionArn;
        }
    }

    // lambda_function_arn - computed: true, optional: true, required: false
    private _lambdaFunctionArn?: string; 
    public get lambdaFunctionArn() {
        return this.getStringAttribute('lambda_function_arn');
    }
    public set lambdaFunctionArn(value: string) {
        this._lambdaFunctionArn = value;
    }
    public resetLambdaFunctionArn() {
        this._lambdaFunctionArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lambdaFunctionArnInput() {
        return this._lambdaFunctionArn;
    }
}
export interface OpenSearchServiceConfigProperty {
    /**
    * The AWS Region.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source#aws_region CcDataSource#aws_region}
    */
    readonly awsRegion?: string;
    /**
    * The endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source#endpoint CcDataSource#endpoint}
    */
    readonly endpoint?: string;
}
export class OpenSearchServiceConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OpenSearchServiceConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._awsRegion !== undefined) {
            hasAnyValues = true;
            internalValueResult.awsRegion = this._awsRegion;
        }
        if (this._endpoint !== undefined) {
            hasAnyValues = true;
            internalValueResult.endpoint = this._endpoint;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OpenSearchServiceConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._awsRegion = undefined;
            this._endpoint = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._awsRegion = value.awsRegion;
            this._endpoint = value.endpoint;
        }
    }

    // aws_region - computed: true, optional: true, required: false
    private _awsRegion?: string; 
    public get awsRegion() {
        return this.getStringAttribute('aws_region');
    }
    public set awsRegion(value: string) {
        this._awsRegion = value;
    }
    public resetAwsRegion() {
        this._awsRegion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get awsRegionInput() {
        return this._awsRegion;
    }

    // endpoint - computed: true, optional: true, required: false
    private _endpoint?: string; 
    public get endpoint() {
        return this.getStringAttribute('endpoint');
    }
    public set endpoint(value: string) {
        this._endpoint = value;
    }
    public resetEndpoint() {
        this._endpoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointInput() {
        return this._endpoint;
    }
}
export interface RdsHttpEndpointConfigProperty {
    /**
    * AWS Region for RDS HTTP endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source#aws_region CcDataSource#aws_region}
    */
    readonly awsRegion?: string;
    /**
    * The ARN for database credentials stored in AWS Secrets Manager.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source#aws_secret_store_arn CcDataSource#aws_secret_store_arn}
    */
    readonly awsSecretStoreArn?: string;
    /**
    * Logical database name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source#database_name CcDataSource#database_name}
    */
    readonly databaseName?: string;
    /**
    * Amazon RDS cluster Amazon Resource Name (ARN).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source#db_cluster_identifier CcDataSource#db_cluster_identifier}
    */
    readonly dbClusterIdentifier?: string;
    /**
    * Logical schema name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source#schema CcDataSource#schema}
    */
    readonly schema?: string;
}
export class RdsHttpEndpointConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RdsHttpEndpointConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._awsRegion !== undefined) {
            hasAnyValues = true;
            internalValueResult.awsRegion = this._awsRegion;
        }
        if (this._awsSecretStoreArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.awsSecretStoreArn = this._awsSecretStoreArn;
        }
        if (this._databaseName !== undefined) {
            hasAnyValues = true;
            internalValueResult.databaseName = this._databaseName;
        }
        if (this._dbClusterIdentifier !== undefined) {
            hasAnyValues = true;
            internalValueResult.dbClusterIdentifier = this._dbClusterIdentifier;
        }
        if (this._schema !== undefined) {
            hasAnyValues = true;
            internalValueResult.schema = this._schema;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RdsHttpEndpointConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._awsRegion = undefined;
            this._awsSecretStoreArn = undefined;
            this._databaseName = undefined;
            this._dbClusterIdentifier = undefined;
            this._schema = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._awsRegion = value.awsRegion;
            this._awsSecretStoreArn = value.awsSecretStoreArn;
            this._databaseName = value.databaseName;
            this._dbClusterIdentifier = value.dbClusterIdentifier;
            this._schema = value.schema;
        }
    }

    // aws_region - computed: true, optional: true, required: false
    private _awsRegion?: string; 
    public get awsRegion() {
        return this.getStringAttribute('aws_region');
    }
    public set awsRegion(value: string) {
        this._awsRegion = value;
    }
    public resetAwsRegion() {
        this._awsRegion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get awsRegionInput() {
        return this._awsRegion;
    }

    // aws_secret_store_arn - computed: true, optional: true, required: false
    private _awsSecretStoreArn?: string; 
    public get awsSecretStoreArn() {
        return this.getStringAttribute('aws_secret_store_arn');
    }
    public set awsSecretStoreArn(value: string) {
        this._awsSecretStoreArn = value;
    }
    public resetAwsSecretStoreArn() {
        this._awsSecretStoreArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get awsSecretStoreArnInput() {
        return this._awsSecretStoreArn;
    }

    // database_name - computed: true, optional: true, required: false
    private _databaseName?: string; 
    public get databaseName() {
        return this.getStringAttribute('database_name');
    }
    public set databaseName(value: string) {
        this._databaseName = value;
    }
    public resetDatabaseName() {
        this._databaseName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseNameInput() {
        return this._databaseName;
    }

    // db_cluster_identifier - computed: true, optional: true, required: false
    private _dbClusterIdentifier?: string; 
    public get dbClusterIdentifier() {
        return this.getStringAttribute('db_cluster_identifier');
    }
    public set dbClusterIdentifier(value: string) {
        this._dbClusterIdentifier = value;
    }
    public resetDbClusterIdentifier() {
        this._dbClusterIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dbClusterIdentifierInput() {
        return this._dbClusterIdentifier;
    }

    // schema - computed: true, optional: true, required: false
    private _schema?: string; 
    public get schema() {
        return this.getStringAttribute('schema');
    }
    public set schema(value: string) {
        this._schema = value;
    }
    public resetSchema() {
        this._schema = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get schemaInput() {
        return this._schema;
    }
}
export interface RelationalDatabaseConfigProperty {
    /**
    * Information about the Amazon RDS resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source#rds_http_endpoint_config CcDataSource#rds_http_endpoint_config}
    */
    readonly rdsHttpEndpointConfig?: RdsHttpEndpointConfigProperty;
    /**
    * The type of relational data source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appsync_data_source#relational_database_source_type CcDataSource#relational_database_source_type}
    */
    readonly relationalDatabaseSourceType?: string;
}
export class RelationalDatabaseConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RelationalDatabaseConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._rdsHttpEndpointConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.rdsHttpEndpointConfig = this._rdsHttpEndpointConfig?.internalValue;
        }
        if (this._relationalDatabaseSourceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.relationalDatabaseSourceType = this._relationalDatabaseSourceType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RelationalDatabaseConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._rdsHttpEndpointConfig.internalValue = undefined;
            this._relationalDatabaseSourceType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._rdsHttpEndpointConfig.internalValue = value.rdsHttpEndpointConfig;
            this._relationalDatabaseSourceType = value.relationalDatabaseSourceType;
        }
    }

    // rds_http_endpoint_config - computed: true, optional: true, required: false
    private _rdsHttpEndpointConfig = new RdsHttpEndpointConfigPropertyOutputReference(this, "rds_http_endpoint_config");
    public get rdsHttpEndpointConfig() {
        return this._rdsHttpEndpointConfig;
    }
    public putRdsHttpEndpointConfig(value: RdsHttpEndpointConfigProperty) {
        this._rdsHttpEndpointConfig.internalValue = value;
    }
    public resetRdsHttpEndpointConfig() {
        this._rdsHttpEndpointConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rdsHttpEndpointConfigInput() {
        return this._rdsHttpEndpointConfig.internalValue;
    }

    // relational_database_source_type - computed: true, optional: true, required: false
    private _relationalDatabaseSourceType?: string; 
    public get relationalDatabaseSourceType() {
        return this.getStringAttribute('relational_database_source_type');
    }
    public set relationalDatabaseSourceType(value: string) {
        this._relationalDatabaseSourceType = value;
    }
    public resetRelationalDatabaseSourceType() {
        this._relationalDatabaseSourceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get relationalDatabaseSourceTypeInput() {
        return this._relationalDatabaseSourceType;
    }
}
}
