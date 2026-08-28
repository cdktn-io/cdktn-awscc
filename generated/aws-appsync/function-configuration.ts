// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appsync_function_configuration

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcFunctionConfigurationProps extends cdktn.TerraformMetaArguments {
    /**
    * The AWS AppSync GraphQL API that you want to attach using this function.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appsync_function_configuration#api_id CcFunctionConfiguration#api_id}
    */
    readonly apiId: string;
    /**
    * The resolver code that contains the request and response functions. When code is used, the runtime is required. The runtime value must be APPSYNC_JS.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appsync_function_configuration#code CcFunctionConfiguration#code}
    */
    readonly code?: string;
    /**
    * The Amazon S3 endpoint (where the code is located??).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appsync_function_configuration#code_s3_location CcFunctionConfiguration#code_s3_location}
    */
    readonly codeS3Location?: string;
    /**
    * The name of data source this function will attach.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appsync_function_configuration#data_source_name CcFunctionConfiguration#data_source_name}
    */
    readonly dataSourceName: string;
    /**
    * The function description.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appsync_function_configuration#description CcFunctionConfiguration#description}
    */
    readonly description?: string;
    /**
    * The version of the request mapping template. Currently, only the 2018-05-29 version of the template is supported.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appsync_function_configuration#function_version CcFunctionConfiguration#function_version}
    */
    readonly functionVersion?: string;
    /**
    * The maximum number of resolver request inputs that will be sent to a single AWS Lambda function in a BatchInvoke operation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appsync_function_configuration#max_batch_size CcFunctionConfiguration#max_batch_size}
    */
    readonly maxBatchSize?: number;
    /**
    * The name of the function.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appsync_function_configuration#name CcFunctionConfiguration#name}
    */
    readonly name: string;
    /**
    * The Function request mapping template. Functions support only the 2018-05-29 version of the request mapping template.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appsync_function_configuration#request_mapping_template CcFunctionConfiguration#request_mapping_template}
    */
    readonly requestMappingTemplate?: string;
    /**
    * Describes a Sync configuration for a resolver. Contains information on which Conflict Detection, as well as Resolution strategy, should be performed when the resolver is invoked.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appsync_function_configuration#request_mapping_template_s3_location CcFunctionConfiguration#request_mapping_template_s3_location}
    */
    readonly requestMappingTemplateS3Location?: string;
    /**
    * The Function response mapping template.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appsync_function_configuration#response_mapping_template CcFunctionConfiguration#response_mapping_template}
    */
    readonly responseMappingTemplate?: string;
    /**
    * The location of a response mapping template in an Amazon S3 bucket. Use this if you want to provision with a template file in Amazon S3 rather than embedding it in your CloudFormation template.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appsync_function_configuration#response_mapping_template_s3_location CcFunctionConfiguration#response_mapping_template_s3_location}
    */
    readonly responseMappingTemplateS3Location?: string;
    /**
    * Describes a runtime used by an AWS AppSync pipeline resolver or AWS AppSync function. Specifies the name and version of the runtime to use. Note that if a runtime is specified, code must also be specified.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appsync_function_configuration#runtime CcFunctionConfiguration#runtime}
    */
    readonly runtime?: CcFunctionConfiguration.AppSyncRuntimeProperty;
    /**
    * Describes a Sync configuration for a resolver. Specifies which Conflict Detection strategy and Resolution strategy to use when the resolver is invoked.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appsync_function_configuration#sync_config CcFunctionConfiguration#sync_config}
    */
    readonly syncConfig?: CcFunctionConfiguration.SyncConfigProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appsync_function_configuration awscc_appsync_function_configuration}
*/
export class CcFunctionConfiguration extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_appsync_function_configuration";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcFunctionConfiguration resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcFunctionConfiguration to import
    * @param importFromId The id of the existing CcFunctionConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appsync_function_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcFunctionConfiguration to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_appsync_function_configuration", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appsync_function_configuration awscc_appsync_function_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcFunctionConfigurationProps
    */
    public constructor(scope: Construct, id: string, config: CcFunctionConfigurationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_appsync_function_configuration',
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
        this._apiId = config.apiId;
        this._code = config.code;
        this._codeS3Location = config.codeS3Location;
        this._dataSourceName = config.dataSourceName;
        this._description = config.description;
        this._functionVersion = config.functionVersion;
        this._maxBatchSize = config.maxBatchSize;
        this._name = config.name;
        this._requestMappingTemplate = config.requestMappingTemplate;
        this._requestMappingTemplateS3Location = config.requestMappingTemplateS3Location;
        this._responseMappingTemplate = config.responseMappingTemplate;
        this._responseMappingTemplateS3Location = config.responseMappingTemplateS3Location;
        this._runtime.internalValue = config.runtime;
        this._syncConfig.internalValue = config.syncConfig;
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

    // data_source_name - computed: false, optional: false, required: true
    private _dataSourceName?: string; 
    public get dataSourceName() {
        return this.getStringAttribute('data_source_name');
    }
    public set dataSourceName(value: string) {
        this._dataSourceName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get dataSourceNameInput() {
        return this._dataSourceName;
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

    // function_arn - computed: true, optional: false, required: false
    public get functionArn() {
        return this.getStringAttribute('function_arn');
    }

    // function_id - computed: true, optional: false, required: false
    public get functionId() {
        return this.getStringAttribute('function_id');
    }

    // function_version - computed: true, optional: true, required: false
    private _functionVersion?: string; 
    public get functionVersion() {
        return this.getStringAttribute('function_version');
    }
    public set functionVersion(value: string) {
        this._functionVersion = value;
    }
    public resetFunctionVersion() {
        this._functionVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get functionVersionInput() {
        return this._functionVersion;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
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
    private _runtime = new CcFunctionConfiguration.AppSyncRuntimePropertyOutputReference(this, "runtime");
    public get runtime() {
        return this._runtime;
    }
    public putRuntime(value: CcFunctionConfiguration.AppSyncRuntimeProperty) {
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
    private _syncConfig = new CcFunctionConfiguration.SyncConfigPropertyOutputReference(this, "sync_config");
    public get syncConfig() {
        return this._syncConfig;
    }
    public putSyncConfig(value: CcFunctionConfiguration.SyncConfigProperty) {
        this._syncConfig.internalValue = value;
    }
    public resetSyncConfig() {
        this._syncConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get syncConfigInput() {
        return this._syncConfig.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            api_id: cdktn.stringToTerraform(this._apiId),
            code: cdktn.stringToTerraform(this._code),
            code_s3_location: cdktn.stringToTerraform(this._codeS3Location),
            data_source_name: cdktn.stringToTerraform(this._dataSourceName),
            description: cdktn.stringToTerraform(this._description),
            function_version: cdktn.stringToTerraform(this._functionVersion),
            max_batch_size: cdktn.numberToTerraform(this._maxBatchSize),
            name: cdktn.stringToTerraform(this._name),
            request_mapping_template: cdktn.stringToTerraform(this._requestMappingTemplate),
            request_mapping_template_s3_location: cdktn.stringToTerraform(this._requestMappingTemplateS3Location),
            response_mapping_template: cdktn.stringToTerraform(this._responseMappingTemplate),
            response_mapping_template_s3_location: cdktn.stringToTerraform(this._responseMappingTemplateS3Location),
            runtime: ccFunctionConfigurationAppSyncRuntimePropertyToTerraform(this._runtime.internalValue),
            sync_config: ccFunctionConfigurationSyncConfigPropertyToTerraform(this._syncConfig.internalValue),
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
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            function_version: {
                value: cdktn.stringToHclTerraform(this._functionVersion),
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
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
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
                value: ccFunctionConfigurationAppSyncRuntimePropertyToHclTerraform(this._runtime.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcFunctionConfiguration.AppSyncRuntimeProperty",
            },
            sync_config: {
                value: ccFunctionConfigurationSyncConfigPropertyToHclTerraform(this._syncConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcFunctionConfiguration.SyncConfigProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccFunctionConfigurationAppSyncRuntimePropertyToTerraform(struct?: CcFunctionConfiguration.AppSyncRuntimeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        runtime_version: cdktn.stringToTerraform(struct!.runtimeVersion),
    }
}


export function ccFunctionConfigurationAppSyncRuntimePropertyToHclTerraform(struct?: CcFunctionConfiguration.AppSyncRuntimeProperty | cdktn.IResolvable): any {
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


export function ccFunctionConfigurationLambdaConflictHandlerConfigPropertyToTerraform(struct?: CcFunctionConfiguration.LambdaConflictHandlerConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        lambda_conflict_handler_arn: cdktn.stringToTerraform(struct!.lambdaConflictHandlerArn),
    }
}


export function ccFunctionConfigurationLambdaConflictHandlerConfigPropertyToHclTerraform(struct?: CcFunctionConfiguration.LambdaConflictHandlerConfigProperty | cdktn.IResolvable): any {
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


export function ccFunctionConfigurationSyncConfigPropertyToTerraform(struct?: CcFunctionConfiguration.SyncConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        conflict_detection: cdktn.stringToTerraform(struct!.conflictDetection),
        conflict_handler: cdktn.stringToTerraform(struct!.conflictHandler),
        lambda_conflict_handler_config: ccFunctionConfigurationLambdaConflictHandlerConfigPropertyToTerraform(struct!.lambdaConflictHandlerConfig),
    }
}


export function ccFunctionConfigurationSyncConfigPropertyToHclTerraform(struct?: CcFunctionConfiguration.SyncConfigProperty | cdktn.IResolvable): any {
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
            value: ccFunctionConfigurationLambdaConflictHandlerConfigPropertyToHclTerraform(struct!.lambdaConflictHandlerConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "LambdaConflictHandlerConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcFunctionConfiguration {
export interface AppSyncRuntimeProperty {
    /**
    * The name of the runtime to use. Currently, the only allowed value is APPSYNC_JS.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appsync_function_configuration#name CcFunctionConfiguration#name}
    */
    readonly name?: string;
    /**
    * The version of the runtime to use. Currently, the only allowed version is 1.0.0.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appsync_function_configuration#runtime_version CcFunctionConfiguration#runtime_version}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appsync_function_configuration#lambda_conflict_handler_arn CcFunctionConfiguration#lambda_conflict_handler_arn}
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
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appsync_function_configuration#conflict_detection CcFunctionConfiguration#conflict_detection}
    */
    readonly conflictDetection?: string;
    /**
    * The Conflict Resolution strategy to perform in the event of a conflict.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appsync_function_configuration#conflict_handler CcFunctionConfiguration#conflict_handler}
    */
    readonly conflictHandler?: string;
    /**
    * The LambdaConflictHandlerConfig when configuring LAMBDA as the Conflict Handler.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appsync_function_configuration#lambda_conflict_handler_config CcFunctionConfiguration#lambda_conflict_handler_config}
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
