// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcWebFunctionRevisionProps extends cdktn.TerraformMetaArguments {
    /**
    * The build configuration for the revision.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#build_config CcWebFunctionRevision#build_config}
    */
    readonly buildConfig: CcWebFunctionRevision.BuildConfigProperty;
    /**
    * A description of the revision.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#description CcWebFunctionRevision#description}
    */
    readonly description?: string;
    /**
    * The name of the web function this revision belongs to. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#function_name CcWebFunctionRevision#function_name}
    */
    readonly functionName: string;
    /**
    * The ARN of the KMS key used to encrypt the revision.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#kms_key_arn CcWebFunctionRevision#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * The service configuration for the revision.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#service_config CcWebFunctionRevision#service_config}
    */
    readonly serviceConfig: CcWebFunctionRevision.ServiceConfigProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision awscc_lambda_web_function_revision}
*/
export class CcWebFunctionRevision extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_lambda_web_function_revision";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcWebFunctionRevision resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcWebFunctionRevision to import
    * @param importFromId The id of the existing CcWebFunctionRevision that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcWebFunctionRevision to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_lambda_web_function_revision", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision awscc_lambda_web_function_revision} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcWebFunctionRevisionProps
    */
    public constructor(scope: Construct, id: string, config: CcWebFunctionRevisionProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_lambda_web_function_revision',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.105.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._buildConfig.internalValue = config.buildConfig;
        this._description = config.description;
        this._functionName = config.functionName;
        this._kmsKeyArn = config.kmsKeyArn;
        this._serviceConfig.internalValue = config.serviceConfig;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // build_config - computed: false, optional: false, required: true
    private _buildConfig = new CcWebFunctionRevision.BuildConfigPropertyOutputReference(this, "build_config");
    public get buildConfig() {
        return this._buildConfig;
    }
    public putBuildConfig(value: CcWebFunctionRevision.BuildConfigProperty) {
        this._buildConfig.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get buildConfigInput() {
        return this._buildConfig.internalValue;
    }

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
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

    // function_name - computed: false, optional: false, required: true
    private _functionName?: string; 
    public get functionName() {
        return this.getStringAttribute('function_name');
    }
    public set functionName(value: string) {
        this._functionName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get functionNameInput() {
        return this._functionName;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // kms_key_arn - computed: true, optional: true, required: false
    private _kmsKeyArn?: string; 
    public get kmsKeyArn() {
        return this.getStringAttribute('kms_key_arn');
    }
    public set kmsKeyArn(value: string) {
        this._kmsKeyArn = value;
    }
    public resetKmsKeyArn() {
        this._kmsKeyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyArnInput() {
        return this._kmsKeyArn;
    }

    // revision_arn - computed: true, optional: false, required: false
    public get revisionArn() {
        return this.getStringAttribute('revision_arn');
    }

    // revision_id - computed: true, optional: false, required: false
    public get revisionId() {
        return this.getStringAttribute('revision_id');
    }

    // service_config - computed: false, optional: false, required: true
    private _serviceConfig = new CcWebFunctionRevision.ServiceConfigPropertyOutputReference(this, "service_config");
    public get serviceConfig() {
        return this._serviceConfig;
    }
    public putServiceConfig(value: CcWebFunctionRevision.ServiceConfigProperty) {
        this._serviceConfig.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceConfigInput() {
        return this._serviceConfig.internalValue;
    }

    // state - computed: true, optional: false, required: false
    public get state() {
        return this.getStringAttribute('state');
    }

    // state_reason - computed: true, optional: false, required: false
    public get stateReason() {
        return this.getStringAttribute('state_reason');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            build_config: ccWebFunctionRevisionBuildConfigPropertyToTerraform(this._buildConfig.internalValue),
            description: cdktn.stringToTerraform(this._description),
            function_name: cdktn.stringToTerraform(this._functionName),
            kms_key_arn: cdktn.stringToTerraform(this._kmsKeyArn),
            service_config: ccWebFunctionRevisionServiceConfigPropertyToTerraform(this._serviceConfig.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            build_config: {
                value: ccWebFunctionRevisionBuildConfigPropertyToHclTerraform(this._buildConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcWebFunctionRevision.BuildConfigProperty",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            function_name: {
                value: cdktn.stringToHclTerraform(this._functionName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            kms_key_arn: {
                value: cdktn.stringToHclTerraform(this._kmsKeyArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            service_config: {
                value: ccWebFunctionRevisionServiceConfigPropertyToHclTerraform(this._serviceConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcWebFunctionRevision.ServiceConfigProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccWebFunctionRevisionS3ObjectPropertyToTerraform(struct?: CcWebFunctionRevision.S3ObjectProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bucket: cdktn.stringToTerraform(struct!.bucket),
        key: cdktn.stringToTerraform(struct!.key),
        version_id: cdktn.stringToTerraform(struct!.versionId),
    }
}


export function ccWebFunctionRevisionS3ObjectPropertyToHclTerraform(struct?: CcWebFunctionRevision.S3ObjectProperty | cdktn.IResolvable): any {
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
        key: {
            value: cdktn.stringToHclTerraform(struct!.key),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        version_id: {
            value: cdktn.stringToHclTerraform(struct!.versionId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWebFunctionRevisionCodeConfigPropertyToTerraform(struct?: CcWebFunctionRevision.CodeConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        s3_object: ccWebFunctionRevisionS3ObjectPropertyToTerraform(struct!.s3Object),
    }
}


export function ccWebFunctionRevisionCodeConfigPropertyToHclTerraform(struct?: CcWebFunctionRevision.CodeConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        s3_object: {
            value: ccWebFunctionRevisionS3ObjectPropertyToHclTerraform(struct!.s3Object),
            isBlock: true,
            type: "struct",
            storageClassType: "S3ObjectProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWebFunctionRevisionRuntimeConfigPropertyToTerraform(struct?: CcWebFunctionRevision.RuntimeConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        runtime: cdktn.stringToTerraform(struct!.runtime),
    }
}


export function ccWebFunctionRevisionRuntimeConfigPropertyToHclTerraform(struct?: CcWebFunctionRevision.RuntimeConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
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


export function ccWebFunctionRevisionBuildConfigPropertyToTerraform(struct?: CcWebFunctionRevision.BuildConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        code_config: ccWebFunctionRevisionCodeConfigPropertyToTerraform(struct!.codeConfig),
        runtime_config: ccWebFunctionRevisionRuntimeConfigPropertyToTerraform(struct!.runtimeConfig),
    }
}


export function ccWebFunctionRevisionBuildConfigPropertyToHclTerraform(struct?: CcWebFunctionRevision.BuildConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        code_config: {
            value: ccWebFunctionRevisionCodeConfigPropertyToHclTerraform(struct!.codeConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "CodeConfigProperty",
        },
        runtime_config: {
            value: ccWebFunctionRevisionRuntimeConfigPropertyToHclTerraform(struct!.runtimeConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "RuntimeConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWebFunctionRevisionLoggingConfigPropertyToTerraform(struct?: CcWebFunctionRevision.LoggingConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        application_log_level: cdktn.stringToTerraform(struct!.applicationLogLevel),
        log_group: cdktn.stringToTerraform(struct!.logGroup),
        system_log_level: cdktn.stringToTerraform(struct!.systemLogLevel),
    }
}


export function ccWebFunctionRevisionLoggingConfigPropertyToHclTerraform(struct?: CcWebFunctionRevision.LoggingConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        application_log_level: {
            value: cdktn.stringToHclTerraform(struct!.applicationLogLevel),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        log_group: {
            value: cdktn.stringToHclTerraform(struct!.logGroup),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        system_log_level: {
            value: cdktn.stringToHclTerraform(struct!.systemLogLevel),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWebFunctionRevisionTelemetryConfigPropertyToTerraform(struct?: CcWebFunctionRevision.TelemetryConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        logging_config: ccWebFunctionRevisionLoggingConfigPropertyToTerraform(struct!.loggingConfig),
    }
}


export function ccWebFunctionRevisionTelemetryConfigPropertyToHclTerraform(struct?: CcWebFunctionRevision.TelemetryConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        logging_config: {
            value: ccWebFunctionRevisionLoggingConfigPropertyToHclTerraform(struct!.loggingConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "LoggingConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWebFunctionRevisionServiceConfigPropertyToTerraform(struct?: CcWebFunctionRevision.ServiceConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        environment_variables: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.environmentVariables),
        execution_role_arn: cdktn.stringToTerraform(struct!.executionRoleArn),
        max_concurrency_per_environment: cdktn.numberToTerraform(struct!.maxConcurrencyPerEnvironment),
        telemetry_config: ccWebFunctionRevisionTelemetryConfigPropertyToTerraform(struct!.telemetryConfig),
        timeout_seconds: cdktn.numberToTerraform(struct!.timeoutSeconds),
    }
}


export function ccWebFunctionRevisionServiceConfigPropertyToHclTerraform(struct?: CcWebFunctionRevision.ServiceConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        environment_variables: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.environmentVariables),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        execution_role_arn: {
            value: cdktn.stringToHclTerraform(struct!.executionRoleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        max_concurrency_per_environment: {
            value: cdktn.numberToHclTerraform(struct!.maxConcurrencyPerEnvironment),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        telemetry_config: {
            value: ccWebFunctionRevisionTelemetryConfigPropertyToHclTerraform(struct!.telemetryConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "TelemetryConfigProperty",
        },
        timeout_seconds: {
            value: cdktn.numberToHclTerraform(struct!.timeoutSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcWebFunctionRevision {
export interface S3ObjectProperty {
    /**
    * The S3 bucket name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#bucket CcWebFunctionRevision#bucket}
    */
    readonly bucket: string;
    /**
    * The S3 object key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#key CcWebFunctionRevision#key}
    */
    readonly key: string;
    /**
    * The S3 object version ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#version_id CcWebFunctionRevision#version_id}
    */
    readonly versionId?: string;
}
export class S3ObjectPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3ObjectProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bucket !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucket = this._bucket;
        }
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._versionId !== undefined) {
            hasAnyValues = true;
            internalValueResult.versionId = this._versionId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3ObjectProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bucket = undefined;
            this._key = undefined;
            this._versionId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bucket = value.bucket;
            this._key = value.key;
            this._versionId = value.versionId;
        }
    }

    // bucket - computed: false, optional: false, required: true
    private _bucket?: string; 
    public get bucket() {
        return this.getStringAttribute('bucket');
    }
    public set bucket(value: string) {
        this._bucket = value;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketInput() {
        return this._bucket;
    }

    // key - computed: false, optional: false, required: true
    private _key?: string; 
    public get key() {
        return this.getStringAttribute('key');
    }
    public set key(value: string) {
        this._key = value;
    }
    // Temporarily expose input value. Use with caution.
    public get keyInput() {
        return this._key;
    }

    // version_id - computed: true, optional: true, required: false
    private _versionId?: string; 
    public get versionId() {
        return this.getStringAttribute('version_id');
    }
    public set versionId(value: string) {
        this._versionId = value;
    }
    public resetVersionId() {
        this._versionId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get versionIdInput() {
        return this._versionId;
    }
}
export interface CodeConfigProperty {
    /**
    * The Amazon S3 location of the deployment artifact.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#s3_object CcWebFunctionRevision#s3_object}
    */
    readonly s3Object: S3ObjectProperty;
}
export class CodeConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CodeConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._s3Object?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Object = this._s3Object?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CodeConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._s3Object.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._s3Object.internalValue = value.s3Object;
        }
    }

    // s3_object - computed: false, optional: false, required: true
    private _s3Object = new S3ObjectPropertyOutputReference(this, "s3_object");
    public get s3Object() {
        return this._s3Object;
    }
    public putS3Object(value: S3ObjectProperty) {
        this._s3Object.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get s3ObjectInput() {
        return this._s3Object.internalValue;
    }
}
export interface RuntimeConfigProperty {
    /**
    * The runtime identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#runtime CcWebFunctionRevision#runtime}
    */
    readonly runtime: string;
}
export class RuntimeConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RuntimeConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._runtime !== undefined) {
            hasAnyValues = true;
            internalValueResult.runtime = this._runtime;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RuntimeConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._runtime = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._runtime = value.runtime;
        }
    }

    // runtime - computed: false, optional: false, required: true
    private _runtime?: string; 
    public get runtime() {
        return this.getStringAttribute('runtime');
    }
    public set runtime(value: string) {
        this._runtime = value;
    }
    // Temporarily expose input value. Use with caution.
    public get runtimeInput() {
        return this._runtime;
    }
}
export interface BuildConfigProperty {
    /**
    * The code configuration for the revision.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#code_config CcWebFunctionRevision#code_config}
    */
    readonly codeConfig: CodeConfigProperty;
    /**
    * The runtime configuration for the revision.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#runtime_config CcWebFunctionRevision#runtime_config}
    */
    readonly runtimeConfig: RuntimeConfigProperty;
}
export class BuildConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): BuildConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._codeConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.codeConfig = this._codeConfig?.internalValue;
        }
        if (this._runtimeConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.runtimeConfig = this._runtimeConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BuildConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._codeConfig.internalValue = undefined;
            this._runtimeConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._codeConfig.internalValue = value.codeConfig;
            this._runtimeConfig.internalValue = value.runtimeConfig;
        }
    }

    // code_config - computed: false, optional: false, required: true
    private _codeConfig = new CodeConfigPropertyOutputReference(this, "code_config");
    public get codeConfig() {
        return this._codeConfig;
    }
    public putCodeConfig(value: CodeConfigProperty) {
        this._codeConfig.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get codeConfigInput() {
        return this._codeConfig.internalValue;
    }

    // runtime_config - computed: false, optional: false, required: true
    private _runtimeConfig = new RuntimeConfigPropertyOutputReference(this, "runtime_config");
    public get runtimeConfig() {
        return this._runtimeConfig;
    }
    public putRuntimeConfig(value: RuntimeConfigProperty) {
        this._runtimeConfig.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get runtimeConfigInput() {
        return this._runtimeConfig.internalValue;
    }
}
export interface LoggingConfigProperty {
    /**
    * The application log level.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#application_log_level CcWebFunctionRevision#application_log_level}
    */
    readonly applicationLogLevel?: string;
    /**
    * The CloudWatch log group name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#log_group CcWebFunctionRevision#log_group}
    */
    readonly logGroup?: string;
    /**
    * The system log level.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#system_log_level CcWebFunctionRevision#system_log_level}
    */
    readonly systemLogLevel?: string;
}
export class LoggingConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LoggingConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._applicationLogLevel !== undefined) {
            hasAnyValues = true;
            internalValueResult.applicationLogLevel = this._applicationLogLevel;
        }
        if (this._logGroup !== undefined) {
            hasAnyValues = true;
            internalValueResult.logGroup = this._logGroup;
        }
        if (this._systemLogLevel !== undefined) {
            hasAnyValues = true;
            internalValueResult.systemLogLevel = this._systemLogLevel;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LoggingConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._applicationLogLevel = undefined;
            this._logGroup = undefined;
            this._systemLogLevel = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._applicationLogLevel = value.applicationLogLevel;
            this._logGroup = value.logGroup;
            this._systemLogLevel = value.systemLogLevel;
        }
    }

    // application_log_level - computed: true, optional: true, required: false
    private _applicationLogLevel?: string; 
    public get applicationLogLevel() {
        return this.getStringAttribute('application_log_level');
    }
    public set applicationLogLevel(value: string) {
        this._applicationLogLevel = value;
    }
    public resetApplicationLogLevel() {
        this._applicationLogLevel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get applicationLogLevelInput() {
        return this._applicationLogLevel;
    }

    // log_group - computed: true, optional: true, required: false
    private _logGroup?: string; 
    public get logGroup() {
        return this.getStringAttribute('log_group');
    }
    public set logGroup(value: string) {
        this._logGroup = value;
    }
    public resetLogGroup() {
        this._logGroup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logGroupInput() {
        return this._logGroup;
    }

    // system_log_level - computed: true, optional: true, required: false
    private _systemLogLevel?: string; 
    public get systemLogLevel() {
        return this.getStringAttribute('system_log_level');
    }
    public set systemLogLevel(value: string) {
        this._systemLogLevel = value;
    }
    public resetSystemLogLevel() {
        this._systemLogLevel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get systemLogLevelInput() {
        return this._systemLogLevel;
    }
}
export interface TelemetryConfigProperty {
    /**
    * The logging configuration for the web function.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#logging_config CcWebFunctionRevision#logging_config}
    */
    readonly loggingConfig?: LoggingConfigProperty;
}
export class TelemetryConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TelemetryConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._loggingConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.loggingConfig = this._loggingConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TelemetryConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._loggingConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._loggingConfig.internalValue = value.loggingConfig;
        }
    }

    // logging_config - computed: true, optional: true, required: false
    private _loggingConfig = new LoggingConfigPropertyOutputReference(this, "logging_config");
    public get loggingConfig() {
        return this._loggingConfig;
    }
    public putLoggingConfig(value: LoggingConfigProperty) {
        this._loggingConfig.internalValue = value;
    }
    public resetLoggingConfig() {
        this._loggingConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get loggingConfigInput() {
        return this._loggingConfig.internalValue;
    }
}
export interface ServiceConfigProperty {
    /**
    * Environment variables for the function.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#environment_variables CcWebFunctionRevision#environment_variables}
    */
    readonly environmentVariables?: { [key: string]: string };
    /**
    * The ARN of the execution role.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#execution_role_arn CcWebFunctionRevision#execution_role_arn}
    */
    readonly executionRoleArn: string;
    /**
    * The maximum concurrency per environment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#max_concurrency_per_environment CcWebFunctionRevision#max_concurrency_per_environment}
    */
    readonly maxConcurrencyPerEnvironment?: number;
    /**
    * The telemetry configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#telemetry_config CcWebFunctionRevision#telemetry_config}
    */
    readonly telemetryConfig?: TelemetryConfigProperty;
    /**
    * The function timeout in seconds.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_revision#timeout_seconds CcWebFunctionRevision#timeout_seconds}
    */
    readonly timeoutSeconds?: number;
}
export class ServiceConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ServiceConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._environmentVariables !== undefined) {
            hasAnyValues = true;
            internalValueResult.environmentVariables = this._environmentVariables;
        }
        if (this._executionRoleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.executionRoleArn = this._executionRoleArn;
        }
        if (this._maxConcurrencyPerEnvironment !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxConcurrencyPerEnvironment = this._maxConcurrencyPerEnvironment;
        }
        if (this._telemetryConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.telemetryConfig = this._telemetryConfig?.internalValue;
        }
        if (this._timeoutSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.timeoutSeconds = this._timeoutSeconds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ServiceConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._environmentVariables = undefined;
            this._executionRoleArn = undefined;
            this._maxConcurrencyPerEnvironment = undefined;
            this._telemetryConfig.internalValue = undefined;
            this._timeoutSeconds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._environmentVariables = value.environmentVariables;
            this._executionRoleArn = value.executionRoleArn;
            this._maxConcurrencyPerEnvironment = value.maxConcurrencyPerEnvironment;
            this._telemetryConfig.internalValue = value.telemetryConfig;
            this._timeoutSeconds = value.timeoutSeconds;
        }
    }

    // environment_variables - computed: true, optional: true, required: false
    private _environmentVariables?: { [key: string]: string }; 
    public get environmentVariables() {
        return this.getStringMapAttribute('environment_variables');
    }
    public set environmentVariables(value: { [key: string]: string }) {
        this._environmentVariables = value;
    }
    public resetEnvironmentVariables() {
        this._environmentVariables = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get environmentVariablesInput() {
        return this._environmentVariables;
    }

    // execution_role_arn - computed: false, optional: false, required: true
    private _executionRoleArn?: string; 
    public get executionRoleArn() {
        return this.getStringAttribute('execution_role_arn');
    }
    public set executionRoleArn(value: string) {
        this._executionRoleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get executionRoleArnInput() {
        return this._executionRoleArn;
    }

    // max_concurrency_per_environment - computed: true, optional: true, required: false
    private _maxConcurrencyPerEnvironment?: number; 
    public get maxConcurrencyPerEnvironment() {
        return this.getNumberAttribute('max_concurrency_per_environment');
    }
    public set maxConcurrencyPerEnvironment(value: number) {
        this._maxConcurrencyPerEnvironment = value;
    }
    public resetMaxConcurrencyPerEnvironment() {
        this._maxConcurrencyPerEnvironment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxConcurrencyPerEnvironmentInput() {
        return this._maxConcurrencyPerEnvironment;
    }

    // telemetry_config - computed: true, optional: true, required: false
    private _telemetryConfig = new TelemetryConfigPropertyOutputReference(this, "telemetry_config");
    public get telemetryConfig() {
        return this._telemetryConfig;
    }
    public putTelemetryConfig(value: TelemetryConfigProperty) {
        this._telemetryConfig.internalValue = value;
    }
    public resetTelemetryConfig() {
        this._telemetryConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get telemetryConfigInput() {
        return this._telemetryConfig.internalValue;
    }

    // timeout_seconds - computed: true, optional: true, required: false
    private _timeoutSeconds?: number; 
    public get timeoutSeconds() {
        return this.getNumberAttribute('timeout_seconds');
    }
    public set timeoutSeconds(value: number) {
        this._timeoutSeconds = value;
    }
    public resetTimeoutSeconds() {
        this._timeoutSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutSecondsInput() {
        return this._timeoutSeconds;
    }
}
}
