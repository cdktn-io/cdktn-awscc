// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcFunctionProps extends cdktn.TerraformMetaArguments {
    /**
    * The instruction set architecture that the function supports. Enter a string array with one of the valid values (arm64 or x86_64). The default value is ``x86_64``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#architectures CcFunction#architectures}
    */
    readonly architectures?: string[];
    /**
    * Configuration for the capacity provider that manages compute resources for Lambda functions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#capacity_provider_config CcFunction#capacity_provider_config}
    */
    readonly capacityProviderConfig?: CcFunction.CapacityProviderConfigProperty;
    /**
    * The code for the function. You can define your function code in multiple ways:
    *   +  For .zip deployment packages, you can specify the S3 location of the .zip file in the ``S3Bucket``, ``S3Key``, and ``S3ObjectVersion`` properties.
    *   +  For .zip deployment packages, you can alternatively define the function code inline in the ``ZipFile`` property. This method works only for Node.js and Python functions.
    *   +  For container images, specify the URI of your container image in the ECR registry in the ``ImageUri`` property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#code CcFunction#code}
    */
    readonly code: CcFunction.CodeProperty;
    /**
    * To enable code signing for this function, specify the ARN of a code-signing configuration. A code-signing configuration includes a set of signing profiles, which define the trusted publishers for this function.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#code_signing_config_arn CcFunction#code_signing_config_arn}
    */
    readonly codeSigningConfigArn?: string;
    /**
    * A dead-letter queue configuration that specifies the queue or topic where Lambda sends asynchronous events when they fail processing. For more information, see [Dead-letter queues](https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#invocation-dlq).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#dead_letter_config CcFunction#dead_letter_config}
    */
    readonly deadLetterConfig?: CcFunction.DeadLetterConfigProperty;
    /**
    * A description of the function.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#description CcFunction#description}
    */
    readonly description?: string;
    /**
    * Configuration settings for [durable functions](https://docs.aws.amazon.com/lambda/latest/dg/durable-functions.html), including execution timeout and retention period for execution history.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#durable_config CcFunction#durable_config}
    */
    readonly durableConfig?: CcFunction.DurableConfigProperty;
    /**
    * Environment variables that are accessible from function code during execution.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#environment CcFunction#environment}
    */
    readonly environment?: CcFunction.EnvironmentProperty;
    /**
    * The size of the function's ``/tmp`` directory in MB. The default value is 512, but it can be any whole number between 512 and 10,240 MB.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#ephemeral_storage CcFunction#ephemeral_storage}
    */
    readonly ephemeralStorage?: CcFunction.EphemeralStorageProperty;
    /**
    * Connection settings for an Amazon EFS or Amazon S3 Files file system. To connect a function to a file system, a mount target must be available in every Availability Zone that your function connects to. If your template contains an [AWS::EFS::MountTarget](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-mounttarget.html) or [AWS::S3Files::MountTarget](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3files-mounttarget.html) resource, you must also specify a ``DependsOn`` attribute to ensure that the mount target is created or updated before the function.
    *  For more information about using the ``DependsOn`` attribute, see [DependsOn Attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-dependson.html).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#file_system_configs CcFunction#file_system_configs}
    */
    readonly fileSystemConfigs?: CcFunction.FileSystemConfigProperty[] | cdktn.IResolvable;
    /**
    * The name of the Lambda function, up to 64 characters in length. If you don't specify a name, CFN generates one.
    *  If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#function_name CcFunction#function_name}
    */
    readonly functionName?: string;
    /**
    * Configuration that defines the scaling behavior for a Lambda Managed Instances function, including the minimum and maximum number of execution environments that can be provisioned.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#function_scaling_config CcFunction#function_scaling_config}
    */
    readonly functionScalingConfig?: CcFunction.FunctionScalingConfigProperty;
    /**
    * The name of the method within your code that Lambda calls to run your function. Handler is required if the deployment package is a .zip file archive. The format includes the file name. It can also include namespaces and other qualifiers, depending on the runtime. For more information, see [Lambda programming model](https://docs.aws.amazon.com/lambda/latest/dg/foundation-progmodel.html).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#handler CcFunction#handler}
    */
    readonly handler?: string;
    /**
    * Configuration values that override the container image Dockerfile settings. For more information, see [Container image settings](https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-parms).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#image_config CcFunction#image_config}
    */
    readonly imageConfig?: CcFunction.ImageConfigProperty;
    /**
    * The ARN of the KMSlong (KMS) customer managed key that's used to encrypt the following resources:
    *   +  The function's [environment variables](https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html#configuration-envvars-encryption).
    *   +  The function's [Lambda SnapStart](https://docs.aws.amazon.com/lambda/latest/dg/snapstart-security.html) snapshots.
    *   +  When used with ``SourceKMSKeyArn``, the unzipped version of the .zip deployment package that's used for function invocations. For more information, see [Specifying a customer managed key for Lambda](https://docs.aws.amazon.com/lambda/latest/dg/encrypt-zip-package.html#enable-zip-custom-encryption).
    *   +  The optimized version of the container image that's used for function invocations. Note that this is not the same key that's used to protect your container image in the Amazon Elastic Container Registry (Amazon ECR). For more information, see [Function lifecycle](https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-lifecycle).
    *   
    *  If you don't provide a customer managed key, Lambda uses an [owned key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-owned-cmk) or an [](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#kms_key_arn CcFunction#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * A list of [function layers](https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html) to add to the function's execution environment. Specify each layer by its ARN, including the version.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#layers CcFunction#layers}
    */
    readonly layers?: string[];
    /**
    * The function's Amazon CloudWatch Logs configuration settings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#logging_config CcFunction#logging_config}
    */
    readonly loggingConfig?: CcFunction.LoggingConfigProperty;
    /**
    * The amount of [memory available to the function](https://docs.aws.amazon.com/lambda/latest/dg/configuration-function-common.html#configuration-memory-console) at runtime. Increasing the function memory also increases its CPU allocation. The default value is 128 MB. The value can be any multiple of 1 MB. Note that new AWS accounts have reduced concurrency and memory quotas. AWS raises these quotas automatically based on your usage. You can also request a quota increase.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#memory_size CcFunction#memory_size}
    */
    readonly memorySize?: number;
    /**
    * The type of deployment package. Set to ``Image`` for container image and set ``Zip`` for .zip file archive.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#package_type CcFunction#package_type}
    */
    readonly packageType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#publish_to_latest_published CcFunction#publish_to_latest_published}
    */
    readonly publishToLatestPublished?: boolean | cdktn.IResolvable;
    /**
    * The status of your function's recursive loop detection configuration.
    *  When this value is set to ``Allow``and Lambda detects your function being invoked as part of a recursive loop, it doesn't take any action.
    *  When this value is set to ``Terminate`` and Lambda detects your function being invoked as part of a recursive loop, it stops your function being invoked and notifies you.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#recursive_loop CcFunction#recursive_loop}
    */
    readonly recursiveLoop?: string;
    /**
    * The number of simultaneous executions to reserve for the function.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#reserved_concurrent_executions CcFunction#reserved_concurrent_executions}
    */
    readonly reservedConcurrentExecutions?: number;
    /**
    * The Amazon Resource Name (ARN) of the function's execution role.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#role CcFunction#role}
    */
    readonly role: string;
    /**
    * The identifier of the function's [runtime](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html). Runtime is required if the deployment package is a .zip file archive. Specifying a runtime results in an error if you're deploying a function using a container image.
    *  The following list includes deprecated runtimes. Lambda blocks creating new functions and updating existing functions shortly after each runtime is deprecated. For more information, see [Runtime use after deprecation](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtime-deprecation-levels).
    *  For a list of all currently supported runtimes, see [Supported runtimes](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtimes-supported).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#runtime CcFunction#runtime}
    */
    readonly runtime?: string;
    /**
    * Sets the runtime management configuration for a function's version. For more information, see [Runtime updates](https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#runtime_management_config CcFunction#runtime_management_config}
    */
    readonly runtimeManagementConfig?: CcFunction.RuntimeManagementConfigProperty;
    /**
    * The function's [SnapStart](https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html) setting.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#snap_start CcFunction#snap_start}
    */
    readonly snapStart?: CcFunction.SnapStartProperty;
    /**
    * A list of [tags](https://docs.aws.amazon.com/lambda/latest/dg/tagging.html) to apply to the function.
    *   You must have the ``lambda:TagResource``, ``lambda:UntagResource``, and ``lambda:ListTags`` permissions for your [principal](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html) to manage the CFN stack. If you don't have these permissions, there might be unexpected behavior with stack-level tags propagating to the resource during resource creation and update.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#tags CcFunction#tags}
    */
    readonly tags?: CcFunction.TagProperty[] | cdktn.IResolvable;
    /**
    * The function's tenant isolation configuration settings. Determines whether the Lambda function runs on a shared or dedicated infrastructure per unique tenant.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#tenancy_config CcFunction#tenancy_config}
    */
    readonly tenancyConfig?: CcFunction.TenancyConfigProperty;
    /**
    * The amount of time (in seconds) that Lambda allows a function to run before stopping it. The default is 3 seconds. The maximum allowed value is 900 seconds. For more information, see [Lambda execution environment](https://docs.aws.amazon.com/lambda/latest/dg/runtimes-context.html).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#timeout CcFunction#timeout}
    */
    readonly timeout?: number;
    /**
    * Set ``Mode`` to ``Active`` to sample and trace a subset of incoming requests with [X-Ray](https://docs.aws.amazon.com/lambda/latest/dg/services-xray.html).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#tracing_config CcFunction#tracing_config}
    */
    readonly tracingConfig?: CcFunction.TracingConfigProperty;
    /**
    * For network connectivity to AWS resources in a VPC, specify a list of security groups and subnets in the VPC. When you connect a function to a VPC, it can access resources and the internet only through that VPC. For more information, see [Configuring a Lambda function to access resources in a VPC](https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#vpc_config CcFunction#vpc_config}
    */
    readonly vpcConfig?: CcFunction.VpcConfigProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function awscc_lambda_function}
*/
export class CcFunction extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_lambda_function";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcFunction resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcFunction to import
    * @param importFromId The id of the existing CcFunction that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcFunction to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_lambda_function", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function awscc_lambda_function} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcFunctionProps
    */
    public constructor(scope: Construct, id: string, config: CcFunctionProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_lambda_function',
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
        this._architectures = config.architectures;
        this._capacityProviderConfig.internalValue = config.capacityProviderConfig;
        this._code.internalValue = config.code;
        this._codeSigningConfigArn = config.codeSigningConfigArn;
        this._deadLetterConfig.internalValue = config.deadLetterConfig;
        this._description = config.description;
        this._durableConfig.internalValue = config.durableConfig;
        this._environment.internalValue = config.environment;
        this._ephemeralStorage.internalValue = config.ephemeralStorage;
        this._fileSystemConfigs.internalValue = config.fileSystemConfigs;
        this._functionName = config.functionName;
        this._functionScalingConfig.internalValue = config.functionScalingConfig;
        this._handler = config.handler;
        this._imageConfig.internalValue = config.imageConfig;
        this._kmsKeyArn = config.kmsKeyArn;
        this._layers = config.layers;
        this._loggingConfig.internalValue = config.loggingConfig;
        this._memorySize = config.memorySize;
        this._packageType = config.packageType;
        this._publishToLatestPublished = config.publishToLatestPublished;
        this._recursiveLoop = config.recursiveLoop;
        this._reservedConcurrentExecutions = config.reservedConcurrentExecutions;
        this._role = config.role;
        this._runtime = config.runtime;
        this._runtimeManagementConfig.internalValue = config.runtimeManagementConfig;
        this._snapStart.internalValue = config.snapStart;
        this._tags.internalValue = config.tags;
        this._tenancyConfig.internalValue = config.tenancyConfig;
        this._timeout = config.timeout;
        this._tracingConfig.internalValue = config.tracingConfig;
        this._vpcConfig.internalValue = config.vpcConfig;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // architectures - computed: true, optional: true, required: false
    private _architectures?: string[]; 
    public get architectures() {
        return this.getListAttribute('architectures');
    }
    public set architectures(value: string[]) {
        this._architectures = value;
    }
    public resetArchitectures() {
        this._architectures = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get architecturesInput() {
        return this._architectures;
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // capacity_provider_config - computed: true, optional: true, required: false
    private _capacityProviderConfig = new CcFunction.CapacityProviderConfigPropertyOutputReference(this, "capacity_provider_config");
    public get capacityProviderConfig() {
        return this._capacityProviderConfig;
    }
    public putCapacityProviderConfig(value: CcFunction.CapacityProviderConfigProperty) {
        this._capacityProviderConfig.internalValue = value;
    }
    public resetCapacityProviderConfig() {
        this._capacityProviderConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get capacityProviderConfigInput() {
        return this._capacityProviderConfig.internalValue;
    }

    // code - computed: false, optional: false, required: true
    private _code = new CcFunction.CodePropertyOutputReference(this, "code");
    public get code() {
        return this._code;
    }
    public putCode(value: CcFunction.CodeProperty) {
        this._code.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get codeInput() {
        return this._code.internalValue;
    }

    // code_signing_config_arn - computed: true, optional: true, required: false
    private _codeSigningConfigArn?: string; 
    public get codeSigningConfigArn() {
        return this.getStringAttribute('code_signing_config_arn');
    }
    public set codeSigningConfigArn(value: string) {
        this._codeSigningConfigArn = value;
    }
    public resetCodeSigningConfigArn() {
        this._codeSigningConfigArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get codeSigningConfigArnInput() {
        return this._codeSigningConfigArn;
    }

    // dead_letter_config - computed: true, optional: true, required: false
    private _deadLetterConfig = new CcFunction.DeadLetterConfigPropertyOutputReference(this, "dead_letter_config");
    public get deadLetterConfig() {
        return this._deadLetterConfig;
    }
    public putDeadLetterConfig(value: CcFunction.DeadLetterConfigProperty) {
        this._deadLetterConfig.internalValue = value;
    }
    public resetDeadLetterConfig() {
        this._deadLetterConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deadLetterConfigInput() {
        return this._deadLetterConfig.internalValue;
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

    // durable_config - computed: true, optional: true, required: false
    private _durableConfig = new CcFunction.DurableConfigPropertyOutputReference(this, "durable_config");
    public get durableConfig() {
        return this._durableConfig;
    }
    public putDurableConfig(value: CcFunction.DurableConfigProperty) {
        this._durableConfig.internalValue = value;
    }
    public resetDurableConfig() {
        this._durableConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get durableConfigInput() {
        return this._durableConfig.internalValue;
    }

    // environment - computed: true, optional: true, required: false
    private _environment = new CcFunction.EnvironmentPropertyOutputReference(this, "environment");
    public get environment() {
        return this._environment;
    }
    public putEnvironment(value: CcFunction.EnvironmentProperty) {
        this._environment.internalValue = value;
    }
    public resetEnvironment() {
        this._environment.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get environmentInput() {
        return this._environment.internalValue;
    }

    // ephemeral_storage - computed: true, optional: true, required: false
    private _ephemeralStorage = new CcFunction.EphemeralStoragePropertyOutputReference(this, "ephemeral_storage");
    public get ephemeralStorage() {
        return this._ephemeralStorage;
    }
    public putEphemeralStorage(value: CcFunction.EphemeralStorageProperty) {
        this._ephemeralStorage.internalValue = value;
    }
    public resetEphemeralStorage() {
        this._ephemeralStorage.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ephemeralStorageInput() {
        return this._ephemeralStorage.internalValue;
    }

    // file_system_configs - computed: true, optional: true, required: false
    private _fileSystemConfigs = new CcFunction.FileSystemConfigPropertyList(this, "file_system_configs", false);
    public get fileSystemConfigs() {
        return this._fileSystemConfigs;
    }
    public putFileSystemConfigs(value: CcFunction.FileSystemConfigProperty[] | cdktn.IResolvable) {
        this._fileSystemConfigs.internalValue = value;
    }
    public resetFileSystemConfigs() {
        this._fileSystemConfigs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fileSystemConfigsInput() {
        return this._fileSystemConfigs.internalValue;
    }

    // function_name - computed: true, optional: true, required: false
    private _functionName?: string; 
    public get functionName() {
        return this.getStringAttribute('function_name');
    }
    public set functionName(value: string) {
        this._functionName = value;
    }
    public resetFunctionName() {
        this._functionName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get functionNameInput() {
        return this._functionName;
    }

    // function_scaling_config - computed: true, optional: true, required: false
    private _functionScalingConfig = new CcFunction.FunctionScalingConfigPropertyOutputReference(this, "function_scaling_config");
    public get functionScalingConfig() {
        return this._functionScalingConfig;
    }
    public putFunctionScalingConfig(value: CcFunction.FunctionScalingConfigProperty) {
        this._functionScalingConfig.internalValue = value;
    }
    public resetFunctionScalingConfig() {
        this._functionScalingConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get functionScalingConfigInput() {
        return this._functionScalingConfig.internalValue;
    }

    // handler - computed: true, optional: true, required: false
    private _handler?: string; 
    public get handler() {
        return this.getStringAttribute('handler');
    }
    public set handler(value: string) {
        this._handler = value;
    }
    public resetHandler() {
        this._handler = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get handlerInput() {
        return this._handler;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // image_config - computed: true, optional: true, required: false
    private _imageConfig = new CcFunction.ImageConfigPropertyOutputReference(this, "image_config");
    public get imageConfig() {
        return this._imageConfig;
    }
    public putImageConfig(value: CcFunction.ImageConfigProperty) {
        this._imageConfig.internalValue = value;
    }
    public resetImageConfig() {
        this._imageConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageConfigInput() {
        return this._imageConfig.internalValue;
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

    // layers - computed: true, optional: true, required: false
    private _layers?: string[]; 
    public get layers() {
        return this.getListAttribute('layers');
    }
    public set layers(value: string[]) {
        this._layers = value;
    }
    public resetLayers() {
        this._layers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get layersInput() {
        return this._layers;
    }

    // logging_config - computed: true, optional: true, required: false
    private _loggingConfig = new CcFunction.LoggingConfigPropertyOutputReference(this, "logging_config");
    public get loggingConfig() {
        return this._loggingConfig;
    }
    public putLoggingConfig(value: CcFunction.LoggingConfigProperty) {
        this._loggingConfig.internalValue = value;
    }
    public resetLoggingConfig() {
        this._loggingConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get loggingConfigInput() {
        return this._loggingConfig.internalValue;
    }

    // memory_size - computed: true, optional: true, required: false
    private _memorySize?: number; 
    public get memorySize() {
        return this.getNumberAttribute('memory_size');
    }
    public set memorySize(value: number) {
        this._memorySize = value;
    }
    public resetMemorySize() {
        this._memorySize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get memorySizeInput() {
        return this._memorySize;
    }

    // package_type - computed: true, optional: true, required: false
    private _packageType?: string; 
    public get packageType() {
        return this.getStringAttribute('package_type');
    }
    public set packageType(value: string) {
        this._packageType = value;
    }
    public resetPackageType() {
        this._packageType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get packageTypeInput() {
        return this._packageType;
    }

    // publish_to_latest_published - computed: true, optional: true, required: false
    private _publishToLatestPublished?: boolean | cdktn.IResolvable; 
    public get publishToLatestPublished() {
        return this.getBooleanAttribute('publish_to_latest_published');
    }
    public set publishToLatestPublished(value: boolean | cdktn.IResolvable) {
        this._publishToLatestPublished = value;
    }
    public resetPublishToLatestPublished() {
        this._publishToLatestPublished = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get publishToLatestPublishedInput() {
        return this._publishToLatestPublished;
    }

    // recursive_loop - computed: true, optional: true, required: false
    private _recursiveLoop?: string; 
    public get recursiveLoop() {
        return this.getStringAttribute('recursive_loop');
    }
    public set recursiveLoop(value: string) {
        this._recursiveLoop = value;
    }
    public resetRecursiveLoop() {
        this._recursiveLoop = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get recursiveLoopInput() {
        return this._recursiveLoop;
    }

    // reserved_concurrent_executions - computed: true, optional: true, required: false
    private _reservedConcurrentExecutions?: number; 
    public get reservedConcurrentExecutions() {
        return this.getNumberAttribute('reserved_concurrent_executions');
    }
    public set reservedConcurrentExecutions(value: number) {
        this._reservedConcurrentExecutions = value;
    }
    public resetReservedConcurrentExecutions() {
        this._reservedConcurrentExecutions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get reservedConcurrentExecutionsInput() {
        return this._reservedConcurrentExecutions;
    }

    // role - computed: false, optional: false, required: true
    private _role?: string; 
    public get role() {
        return this.getStringAttribute('role');
    }
    public set role(value: string) {
        this._role = value;
    }
    // Temporarily expose input value. Use with caution.
    public get roleInput() {
        return this._role;
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

    // runtime_management_config - computed: true, optional: true, required: false
    private _runtimeManagementConfig = new CcFunction.RuntimeManagementConfigPropertyOutputReference(this, "runtime_management_config");
    public get runtimeManagementConfig() {
        return this._runtimeManagementConfig;
    }
    public putRuntimeManagementConfig(value: CcFunction.RuntimeManagementConfigProperty) {
        this._runtimeManagementConfig.internalValue = value;
    }
    public resetRuntimeManagementConfig() {
        this._runtimeManagementConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get runtimeManagementConfigInput() {
        return this._runtimeManagementConfig.internalValue;
    }

    // snap_start - computed: true, optional: true, required: false
    private _snapStart = new CcFunction.SnapStartPropertyOutputReference(this, "snap_start");
    public get snapStart() {
        return this._snapStart;
    }
    public putSnapStart(value: CcFunction.SnapStartProperty) {
        this._snapStart.internalValue = value;
    }
    public resetSnapStart() {
        this._snapStart.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get snapStartInput() {
        return this._snapStart.internalValue;
    }

    // snap_start_response - computed: true, optional: false, required: false
    private _snapStartResponse = new CcFunction.SnapStartResponsePropertyOutputReference(this, "snap_start_response");
    public get snapStartResponse() {
        return this._snapStartResponse;
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

    // tenancy_config - computed: true, optional: true, required: false
    private _tenancyConfig = new CcFunction.TenancyConfigPropertyOutputReference(this, "tenancy_config");
    public get tenancyConfig() {
        return this._tenancyConfig;
    }
    public putTenancyConfig(value: CcFunction.TenancyConfigProperty) {
        this._tenancyConfig.internalValue = value;
    }
    public resetTenancyConfig() {
        this._tenancyConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tenancyConfigInput() {
        return this._tenancyConfig.internalValue;
    }

    // timeout - computed: true, optional: true, required: false
    private _timeout?: number; 
    public get timeout() {
        return this.getNumberAttribute('timeout');
    }
    public set timeout(value: number) {
        this._timeout = value;
    }
    public resetTimeout() {
        this._timeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutInput() {
        return this._timeout;
    }

    // tracing_config - computed: true, optional: true, required: false
    private _tracingConfig = new CcFunction.TracingConfigPropertyOutputReference(this, "tracing_config");
    public get tracingConfig() {
        return this._tracingConfig;
    }
    public putTracingConfig(value: CcFunction.TracingConfigProperty) {
        this._tracingConfig.internalValue = value;
    }
    public resetTracingConfig() {
        this._tracingConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tracingConfigInput() {
        return this._tracingConfig.internalValue;
    }

    // vpc_config - computed: true, optional: true, required: false
    private _vpcConfig = new CcFunction.VpcConfigPropertyOutputReference(this, "vpc_config");
    public get vpcConfig() {
        return this._vpcConfig;
    }
    public putVpcConfig(value: CcFunction.VpcConfigProperty) {
        this._vpcConfig.internalValue = value;
    }
    public resetVpcConfig() {
        this._vpcConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcConfigInput() {
        return this._vpcConfig.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            architectures: cdktn.listMapper(cdktn.stringToTerraform, false)(this._architectures),
            capacity_provider_config: ccFunctionCapacityProviderConfigPropertyToTerraform(this._capacityProviderConfig.internalValue),
            code: ccFunctionCodePropertyToTerraform(this._code.internalValue),
            code_signing_config_arn: cdktn.stringToTerraform(this._codeSigningConfigArn),
            dead_letter_config: ccFunctionDeadLetterConfigPropertyToTerraform(this._deadLetterConfig.internalValue),
            description: cdktn.stringToTerraform(this._description),
            durable_config: ccFunctionDurableConfigPropertyToTerraform(this._durableConfig.internalValue),
            environment: ccFunctionEnvironmentPropertyToTerraform(this._environment.internalValue),
            ephemeral_storage: ccFunctionEphemeralStoragePropertyToTerraform(this._ephemeralStorage.internalValue),
            file_system_configs: cdktn.listMapper(ccFunctionFileSystemConfigPropertyToTerraform, false)(this._fileSystemConfigs.internalValue),
            function_name: cdktn.stringToTerraform(this._functionName),
            function_scaling_config: ccFunctionFunctionScalingConfigPropertyToTerraform(this._functionScalingConfig.internalValue),
            handler: cdktn.stringToTerraform(this._handler),
            image_config: ccFunctionImageConfigPropertyToTerraform(this._imageConfig.internalValue),
            kms_key_arn: cdktn.stringToTerraform(this._kmsKeyArn),
            layers: cdktn.listMapper(cdktn.stringToTerraform, false)(this._layers),
            logging_config: ccFunctionLoggingConfigPropertyToTerraform(this._loggingConfig.internalValue),
            memory_size: cdktn.numberToTerraform(this._memorySize),
            package_type: cdktn.stringToTerraform(this._packageType),
            publish_to_latest_published: cdktn.booleanToTerraform(this._publishToLatestPublished),
            recursive_loop: cdktn.stringToTerraform(this._recursiveLoop),
            reserved_concurrent_executions: cdktn.numberToTerraform(this._reservedConcurrentExecutions),
            role: cdktn.stringToTerraform(this._role),
            runtime: cdktn.stringToTerraform(this._runtime),
            runtime_management_config: ccFunctionRuntimeManagementConfigPropertyToTerraform(this._runtimeManagementConfig.internalValue),
            snap_start: ccFunctionSnapStartPropertyToTerraform(this._snapStart.internalValue),
            tags: cdktn.listMapper(ccFunctionTagPropertyToTerraform, false)(this._tags.internalValue),
            tenancy_config: ccFunctionTenancyConfigPropertyToTerraform(this._tenancyConfig.internalValue),
            timeout: cdktn.numberToTerraform(this._timeout),
            tracing_config: ccFunctionTracingConfigPropertyToTerraform(this._tracingConfig.internalValue),
            vpc_config: ccFunctionVpcConfigPropertyToTerraform(this._vpcConfig.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            architectures: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._architectures),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            capacity_provider_config: {
                value: ccFunctionCapacityProviderConfigPropertyToHclTerraform(this._capacityProviderConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcFunction.CapacityProviderConfigProperty",
            },
            code: {
                value: ccFunctionCodePropertyToHclTerraform(this._code.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcFunction.CodeProperty",
            },
            code_signing_config_arn: {
                value: cdktn.stringToHclTerraform(this._codeSigningConfigArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            dead_letter_config: {
                value: ccFunctionDeadLetterConfigPropertyToHclTerraform(this._deadLetterConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcFunction.DeadLetterConfigProperty",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            durable_config: {
                value: ccFunctionDurableConfigPropertyToHclTerraform(this._durableConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcFunction.DurableConfigProperty",
            },
            environment: {
                value: ccFunctionEnvironmentPropertyToHclTerraform(this._environment.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcFunction.EnvironmentProperty",
            },
            ephemeral_storage: {
                value: ccFunctionEphemeralStoragePropertyToHclTerraform(this._ephemeralStorage.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcFunction.EphemeralStorageProperty",
            },
            file_system_configs: {
                value: cdktn.listMapperHcl(ccFunctionFileSystemConfigPropertyToHclTerraform, false)(this._fileSystemConfigs.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcFunction.FileSystemConfigPropertyList",
            },
            function_name: {
                value: cdktn.stringToHclTerraform(this._functionName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            function_scaling_config: {
                value: ccFunctionFunctionScalingConfigPropertyToHclTerraform(this._functionScalingConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcFunction.FunctionScalingConfigProperty",
            },
            handler: {
                value: cdktn.stringToHclTerraform(this._handler),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            image_config: {
                value: ccFunctionImageConfigPropertyToHclTerraform(this._imageConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcFunction.ImageConfigProperty",
            },
            kms_key_arn: {
                value: cdktn.stringToHclTerraform(this._kmsKeyArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            layers: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._layers),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            logging_config: {
                value: ccFunctionLoggingConfigPropertyToHclTerraform(this._loggingConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcFunction.LoggingConfigProperty",
            },
            memory_size: {
                value: cdktn.numberToHclTerraform(this._memorySize),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            package_type: {
                value: cdktn.stringToHclTerraform(this._packageType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            publish_to_latest_published: {
                value: cdktn.booleanToHclTerraform(this._publishToLatestPublished),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            recursive_loop: {
                value: cdktn.stringToHclTerraform(this._recursiveLoop),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            reserved_concurrent_executions: {
                value: cdktn.numberToHclTerraform(this._reservedConcurrentExecutions),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            role: {
                value: cdktn.stringToHclTerraform(this._role),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            runtime: {
                value: cdktn.stringToHclTerraform(this._runtime),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            runtime_management_config: {
                value: ccFunctionRuntimeManagementConfigPropertyToHclTerraform(this._runtimeManagementConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcFunction.RuntimeManagementConfigProperty",
            },
            snap_start: {
                value: ccFunctionSnapStartPropertyToHclTerraform(this._snapStart.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcFunction.SnapStartProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccFunctionTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcFunction.TagPropertyList",
            },
            tenancy_config: {
                value: ccFunctionTenancyConfigPropertyToHclTerraform(this._tenancyConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcFunction.TenancyConfigProperty",
            },
            timeout: {
                value: cdktn.numberToHclTerraform(this._timeout),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            tracing_config: {
                value: ccFunctionTracingConfigPropertyToHclTerraform(this._tracingConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcFunction.TracingConfigProperty",
            },
            vpc_config: {
                value: ccFunctionVpcConfigPropertyToHclTerraform(this._vpcConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcFunction.VpcConfigProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccFunctionLambdaManagedInstancesCapacityProviderConfigPropertyToTerraform(struct?: CcFunction.LambdaManagedInstancesCapacityProviderConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        capacity_provider_arn: cdktn.stringToTerraform(struct!.capacityProviderArn),
        execution_environment_memory_gi_b_per_v_cpu: cdktn.numberToTerraform(struct!.executionEnvironmentMemoryGiBPerVCpu),
        per_execution_environment_max_concurrency: cdktn.numberToTerraform(struct!.perExecutionEnvironmentMaxConcurrency),
    }
}


export function ccFunctionLambdaManagedInstancesCapacityProviderConfigPropertyToHclTerraform(struct?: CcFunction.LambdaManagedInstancesCapacityProviderConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        capacity_provider_arn: {
            value: cdktn.stringToHclTerraform(struct!.capacityProviderArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        execution_environment_memory_gi_b_per_v_cpu: {
            value: cdktn.numberToHclTerraform(struct!.executionEnvironmentMemoryGiBPerVCpu),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        per_execution_environment_max_concurrency: {
            value: cdktn.numberToHclTerraform(struct!.perExecutionEnvironmentMaxConcurrency),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFunctionCapacityProviderConfigPropertyToTerraform(struct?: CcFunction.CapacityProviderConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        lambda_managed_instances_capacity_provider_config: ccFunctionLambdaManagedInstancesCapacityProviderConfigPropertyToTerraform(struct!.lambdaManagedInstancesCapacityProviderConfig),
    }
}


export function ccFunctionCapacityProviderConfigPropertyToHclTerraform(struct?: CcFunction.CapacityProviderConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        lambda_managed_instances_capacity_provider_config: {
            value: ccFunctionLambdaManagedInstancesCapacityProviderConfigPropertyToHclTerraform(struct!.lambdaManagedInstancesCapacityProviderConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "LambdaManagedInstancesCapacityProviderConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFunctionCodePropertyToTerraform(struct?: CcFunction.CodeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        image_uri: cdktn.stringToTerraform(struct!.imageUri),
        s3_bucket: cdktn.stringToTerraform(struct!.s3Bucket),
        s3_key: cdktn.stringToTerraform(struct!.s3Key),
        s3_object_storage_mode: cdktn.stringToTerraform(struct!.s3ObjectStorageMode),
        s3_object_version: cdktn.stringToTerraform(struct!.s3ObjectVersion),
        source_kms_key_arn: cdktn.stringToTerraform(struct!.sourceKmsKeyArn),
        zip_file: cdktn.stringToTerraform(struct!.zipFile),
    }
}


export function ccFunctionCodePropertyToHclTerraform(struct?: CcFunction.CodeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        image_uri: {
            value: cdktn.stringToHclTerraform(struct!.imageUri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_bucket: {
            value: cdktn.stringToHclTerraform(struct!.s3Bucket),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_key: {
            value: cdktn.stringToHclTerraform(struct!.s3Key),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_object_storage_mode: {
            value: cdktn.stringToHclTerraform(struct!.s3ObjectStorageMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_object_version: {
            value: cdktn.stringToHclTerraform(struct!.s3ObjectVersion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        source_kms_key_arn: {
            value: cdktn.stringToHclTerraform(struct!.sourceKmsKeyArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        zip_file: {
            value: cdktn.stringToHclTerraform(struct!.zipFile),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFunctionDeadLetterConfigPropertyToTerraform(struct?: CcFunction.DeadLetterConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        target_arn: cdktn.stringToTerraform(struct!.targetArn),
    }
}


export function ccFunctionDeadLetterConfigPropertyToHclTerraform(struct?: CcFunction.DeadLetterConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        target_arn: {
            value: cdktn.stringToHclTerraform(struct!.targetArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFunctionDurableConfigPropertyToTerraform(struct?: CcFunction.DurableConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        execution_timeout: cdktn.numberToTerraform(struct!.executionTimeout),
        retention_period_in_days: cdktn.numberToTerraform(struct!.retentionPeriodInDays),
    }
}


export function ccFunctionDurableConfigPropertyToHclTerraform(struct?: CcFunction.DurableConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        execution_timeout: {
            value: cdktn.numberToHclTerraform(struct!.executionTimeout),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        retention_period_in_days: {
            value: cdktn.numberToHclTerraform(struct!.retentionPeriodInDays),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFunctionEnvironmentPropertyToTerraform(struct?: CcFunction.EnvironmentProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        variables: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.variables),
    }
}


export function ccFunctionEnvironmentPropertyToHclTerraform(struct?: CcFunction.EnvironmentProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        variables: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.variables),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFunctionEphemeralStoragePropertyToTerraform(struct?: CcFunction.EphemeralStorageProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        size: cdktn.numberToTerraform(struct!.size),
    }
}


export function ccFunctionEphemeralStoragePropertyToHclTerraform(struct?: CcFunction.EphemeralStorageProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        size: {
            value: cdktn.numberToHclTerraform(struct!.size),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFunctionFileSystemConfigPropertyToTerraform(struct?: CcFunction.FileSystemConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        arn: cdktn.stringToTerraform(struct!.arn),
        local_mount_path: cdktn.stringToTerraform(struct!.localMountPath),
    }
}


export function ccFunctionFileSystemConfigPropertyToHclTerraform(struct?: CcFunction.FileSystemConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        arn: {
            value: cdktn.stringToHclTerraform(struct!.arn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        local_mount_path: {
            value: cdktn.stringToHclTerraform(struct!.localMountPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFunctionFunctionScalingConfigPropertyToTerraform(struct?: CcFunction.FunctionScalingConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max_execution_environments: cdktn.numberToTerraform(struct!.maxExecutionEnvironments),
        min_execution_environments: cdktn.numberToTerraform(struct!.minExecutionEnvironments),
    }
}


export function ccFunctionFunctionScalingConfigPropertyToHclTerraform(struct?: CcFunction.FunctionScalingConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max_execution_environments: {
            value: cdktn.numberToHclTerraform(struct!.maxExecutionEnvironments),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        min_execution_environments: {
            value: cdktn.numberToHclTerraform(struct!.minExecutionEnvironments),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFunctionImageConfigPropertyToTerraform(struct?: CcFunction.ImageConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        command: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.command),
        entry_point: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.entryPoint),
        working_directory: cdktn.stringToTerraform(struct!.workingDirectory),
    }
}


export function ccFunctionImageConfigPropertyToHclTerraform(struct?: CcFunction.ImageConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        command: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.command),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        entry_point: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.entryPoint),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        working_directory: {
            value: cdktn.stringToHclTerraform(struct!.workingDirectory),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFunctionLoggingConfigPropertyToTerraform(struct?: CcFunction.LoggingConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        application_log_level: cdktn.stringToTerraform(struct!.applicationLogLevel),
        log_format: cdktn.stringToTerraform(struct!.logFormat),
        log_group: cdktn.stringToTerraform(struct!.logGroup),
        system_log_level: cdktn.stringToTerraform(struct!.systemLogLevel),
    }
}


export function ccFunctionLoggingConfigPropertyToHclTerraform(struct?: CcFunction.LoggingConfigProperty | cdktn.IResolvable): any {
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
        log_format: {
            value: cdktn.stringToHclTerraform(struct!.logFormat),
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


export function ccFunctionRuntimeManagementConfigPropertyToTerraform(struct?: CcFunction.RuntimeManagementConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        runtime_version_arn: cdktn.stringToTerraform(struct!.runtimeVersionArn),
        update_runtime_on: cdktn.stringToTerraform(struct!.updateRuntimeOn),
    }
}


export function ccFunctionRuntimeManagementConfigPropertyToHclTerraform(struct?: CcFunction.RuntimeManagementConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        runtime_version_arn: {
            value: cdktn.stringToHclTerraform(struct!.runtimeVersionArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        update_runtime_on: {
            value: cdktn.stringToHclTerraform(struct!.updateRuntimeOn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFunctionSnapStartPropertyToTerraform(struct?: CcFunction.SnapStartProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        apply_on: cdktn.stringToTerraform(struct!.applyOn),
    }
}


export function ccFunctionSnapStartPropertyToHclTerraform(struct?: CcFunction.SnapStartProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        apply_on: {
            value: cdktn.stringToHclTerraform(struct!.applyOn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFunctionSnapStartResponsePropertyToTerraform(struct?: CcFunction.SnapStartResponseProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccFunctionSnapStartResponsePropertyToHclTerraform(struct?: CcFunction.SnapStartResponseProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
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


export function ccFunctionTenancyConfigPropertyToTerraform(struct?: CcFunction.TenancyConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        tenant_isolation_mode: cdktn.stringToTerraform(struct!.tenantIsolationMode),
    }
}


export function ccFunctionTenancyConfigPropertyToHclTerraform(struct?: CcFunction.TenancyConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        tenant_isolation_mode: {
            value: cdktn.stringToHclTerraform(struct!.tenantIsolationMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFunctionTracingConfigPropertyToTerraform(struct?: CcFunction.TracingConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        mode: cdktn.stringToTerraform(struct!.mode),
    }
}


export function ccFunctionTracingConfigPropertyToHclTerraform(struct?: CcFunction.TracingConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        mode: {
            value: cdktn.stringToHclTerraform(struct!.mode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccFunctionVpcConfigPropertyToTerraform(struct?: CcFunction.VpcConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        ipv_6_allowed_for_dual_stack: cdktn.booleanToTerraform(struct!.ipv6AllowedForDualStack),
        security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
        subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnetIds),
    }
}


export function ccFunctionVpcConfigPropertyToHclTerraform(struct?: CcFunction.VpcConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        ipv_6_allowed_for_dual_stack: {
            value: cdktn.booleanToHclTerraform(struct!.ipv6AllowedForDualStack),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        security_group_ids: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroupIds),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        subnet_ids: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnetIds),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcFunction {
export interface LambdaManagedInstancesCapacityProviderConfigProperty {
    /**
    * The Amazon Resource Name (ARN) of the capacity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#capacity_provider_arn CcFunction#capacity_provider_arn}
    */
    readonly capacityProviderArn?: string;
    /**
    * The amount of memory in GiB allocated per vCPU for execution environments.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#execution_environment_memory_gi_b_per_v_cpu CcFunction#execution_environment_memory_gi_b_per_v_cpu}
    */
    readonly executionEnvironmentMemoryGiBPerVCpu?: number;
    /**
    * The maximum number of concurrent executions that can run on each execution environment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#per_execution_environment_max_concurrency CcFunction#per_execution_environment_max_concurrency}
    */
    readonly perExecutionEnvironmentMaxConcurrency?: number;
}
export class LambdaManagedInstancesCapacityProviderConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LambdaManagedInstancesCapacityProviderConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._capacityProviderArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.capacityProviderArn = this._capacityProviderArn;
        }
        if (this._executionEnvironmentMemoryGiBPerVCpu !== undefined) {
            hasAnyValues = true;
            internalValueResult.executionEnvironmentMemoryGiBPerVCpu = this._executionEnvironmentMemoryGiBPerVCpu;
        }
        if (this._perExecutionEnvironmentMaxConcurrency !== undefined) {
            hasAnyValues = true;
            internalValueResult.perExecutionEnvironmentMaxConcurrency = this._perExecutionEnvironmentMaxConcurrency;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LambdaManagedInstancesCapacityProviderConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._capacityProviderArn = undefined;
            this._executionEnvironmentMemoryGiBPerVCpu = undefined;
            this._perExecutionEnvironmentMaxConcurrency = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._capacityProviderArn = value.capacityProviderArn;
            this._executionEnvironmentMemoryGiBPerVCpu = value.executionEnvironmentMemoryGiBPerVCpu;
            this._perExecutionEnvironmentMaxConcurrency = value.perExecutionEnvironmentMaxConcurrency;
        }
    }

    // capacity_provider_arn - computed: true, optional: true, required: false
    private _capacityProviderArn?: string; 
    public get capacityProviderArn() {
        return this.getStringAttribute('capacity_provider_arn');
    }
    public set capacityProviderArn(value: string) {
        this._capacityProviderArn = value;
    }
    public resetCapacityProviderArn() {
        this._capacityProviderArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get capacityProviderArnInput() {
        return this._capacityProviderArn;
    }

    // execution_environment_memory_gi_b_per_v_cpu - computed: true, optional: true, required: false
    private _executionEnvironmentMemoryGiBPerVCpu?: number; 
    public get executionEnvironmentMemoryGiBPerVCpu() {
        return this.getNumberAttribute('execution_environment_memory_gi_b_per_v_cpu');
    }
    public set executionEnvironmentMemoryGiBPerVCpu(value: number) {
        this._executionEnvironmentMemoryGiBPerVCpu = value;
    }
    public resetExecutionEnvironmentMemoryGiBPerVCpu() {
        this._executionEnvironmentMemoryGiBPerVCpu = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get executionEnvironmentMemoryGiBPerVCpuInput() {
        return this._executionEnvironmentMemoryGiBPerVCpu;
    }

    // per_execution_environment_max_concurrency - computed: true, optional: true, required: false
    private _perExecutionEnvironmentMaxConcurrency?: number; 
    public get perExecutionEnvironmentMaxConcurrency() {
        return this.getNumberAttribute('per_execution_environment_max_concurrency');
    }
    public set perExecutionEnvironmentMaxConcurrency(value: number) {
        this._perExecutionEnvironmentMaxConcurrency = value;
    }
    public resetPerExecutionEnvironmentMaxConcurrency() {
        this._perExecutionEnvironmentMaxConcurrency = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get perExecutionEnvironmentMaxConcurrencyInput() {
        return this._perExecutionEnvironmentMaxConcurrency;
    }
}
export interface CapacityProviderConfigProperty {
    /**
    * Configuration for Lambda-managed instances used by the capacity provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#lambda_managed_instances_capacity_provider_config CcFunction#lambda_managed_instances_capacity_provider_config}
    */
    readonly lambdaManagedInstancesCapacityProviderConfig?: LambdaManagedInstancesCapacityProviderConfigProperty;
}
export class CapacityProviderConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CapacityProviderConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._lambdaManagedInstancesCapacityProviderConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.lambdaManagedInstancesCapacityProviderConfig = this._lambdaManagedInstancesCapacityProviderConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CapacityProviderConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._lambdaManagedInstancesCapacityProviderConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._lambdaManagedInstancesCapacityProviderConfig.internalValue = value.lambdaManagedInstancesCapacityProviderConfig;
        }
    }

    // lambda_managed_instances_capacity_provider_config - computed: true, optional: true, required: false
    private _lambdaManagedInstancesCapacityProviderConfig = new LambdaManagedInstancesCapacityProviderConfigPropertyOutputReference(this, "lambda_managed_instances_capacity_provider_config");
    public get lambdaManagedInstancesCapacityProviderConfig() {
        return this._lambdaManagedInstancesCapacityProviderConfig;
    }
    public putLambdaManagedInstancesCapacityProviderConfig(value: LambdaManagedInstancesCapacityProviderConfigProperty) {
        this._lambdaManagedInstancesCapacityProviderConfig.internalValue = value;
    }
    public resetLambdaManagedInstancesCapacityProviderConfig() {
        this._lambdaManagedInstancesCapacityProviderConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lambdaManagedInstancesCapacityProviderConfigInput() {
        return this._lambdaManagedInstancesCapacityProviderConfig.internalValue;
    }
}
export interface CodeProperty {
    /**
    * URI of a [container image](https://docs.aws.amazon.com/lambda/latest/dg/lambda-images.html) in the Amazon ECR registry.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#image_uri CcFunction#image_uri}
    */
    readonly imageUri?: string;
    /**
    * An Amazon S3 bucket in the same AWS-Region as your function. The bucket can be in a different AWS-account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#s3_bucket CcFunction#s3_bucket}
    */
    readonly s3Bucket?: string;
    /**
    * The Amazon S3 key of the deployment package.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#s3_key CcFunction#s3_key}
    */
    readonly s3Key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#s3_object_storage_mode CcFunction#s3_object_storage_mode}
    */
    readonly s3ObjectStorageMode?: string;
    /**
    * For versioned objects, the version of the deployment package object to use.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#s3_object_version CcFunction#s3_object_version}
    */
    readonly s3ObjectVersion?: string;
    /**
    * The ARN of the KMSlong (KMS) customer managed key that's used to encrypt your function's .zip deployment package. If you don't provide a customer managed key, Lambda uses an [owned key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-owned-cmk).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#source_kms_key_arn CcFunction#source_kms_key_arn}
    */
    readonly sourceKmsKeyArn?: string;
    /**
    * (Node.js and Python) The source code of your Lambda function. If you include your function source inline with this parameter, CFN places it in a file named ``index`` and zips it to create a [deployment package](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-package.html). This zip file cannot exceed 4MB. For the ``Handler`` property, the first part of the handler identifier must be ``index``. For example, ``index.handler``.
    *   When you specify source code inline for a Node.js function, the ``index`` file that CFN creates uses the extension ``.js``. This means that Node.js treats the file as a CommonJS module.
    *  When using Node.js 24 or later, Node.js can automatically detect if a ``.js`` file should be treated as CommonJS or as an ES module. To enable auto-detection, add the ``--experimental-detect-module`` flag to the ``NODE_OPTIONS`` environment variable. For more information, see [Experimental Node.js features](https://docs.aws.amazon.com//lambda/latest/dg/lambda-nodejs.html#nodejs-experimental-features).
    *    For JSON, you must escape quotes and special characters such as newline (``\n``) with a backslash.
    *  If you specify a function that interacts with an AWS CloudFormation custom resource, you don't have to write your own functions to send responses to the custom resource that invoked the function. AWS CloudFormation provides a response module ([cfn-response](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-lambda-function-code-cfnresponsemodule.html)) that simplifies sending responses. See [Using Lambda with CloudFormation](https://docs.aws.amazon.com/lambda/latest/dg/services-cloudformation.html) for details.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#zip_file CcFunction#zip_file}
    */
    readonly zipFile?: string;
}
export class CodePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CodeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._imageUri !== undefined) {
            hasAnyValues = true;
            internalValueResult.imageUri = this._imageUri;
        }
        if (this._s3Bucket !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Bucket = this._s3Bucket;
        }
        if (this._s3Key !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Key = this._s3Key;
        }
        if (this._s3ObjectStorageMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3ObjectStorageMode = this._s3ObjectStorageMode;
        }
        if (this._s3ObjectVersion !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3ObjectVersion = this._s3ObjectVersion;
        }
        if (this._sourceKmsKeyArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceKmsKeyArn = this._sourceKmsKeyArn;
        }
        if (this._zipFile !== undefined) {
            hasAnyValues = true;
            internalValueResult.zipFile = this._zipFile;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CodeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._imageUri = undefined;
            this._s3Bucket = undefined;
            this._s3Key = undefined;
            this._s3ObjectStorageMode = undefined;
            this._s3ObjectVersion = undefined;
            this._sourceKmsKeyArn = undefined;
            this._zipFile = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._imageUri = value.imageUri;
            this._s3Bucket = value.s3Bucket;
            this._s3Key = value.s3Key;
            this._s3ObjectStorageMode = value.s3ObjectStorageMode;
            this._s3ObjectVersion = value.s3ObjectVersion;
            this._sourceKmsKeyArn = value.sourceKmsKeyArn;
            this._zipFile = value.zipFile;
        }
    }

    // image_uri - computed: true, optional: true, required: false
    private _imageUri?: string; 
    public get imageUri() {
        return this.getStringAttribute('image_uri');
    }
    public set imageUri(value: string) {
        this._imageUri = value;
    }
    public resetImageUri() {
        this._imageUri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageUriInput() {
        return this._imageUri;
    }

    // s3_bucket - computed: true, optional: true, required: false
    private _s3Bucket?: string; 
    public get s3Bucket() {
        return this.getStringAttribute('s3_bucket');
    }
    public set s3Bucket(value: string) {
        this._s3Bucket = value;
    }
    public resetS3Bucket() {
        this._s3Bucket = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3BucketInput() {
        return this._s3Bucket;
    }

    // s3_key - computed: true, optional: true, required: false
    private _s3Key?: string; 
    public get s3Key() {
        return this.getStringAttribute('s3_key');
    }
    public set s3Key(value: string) {
        this._s3Key = value;
    }
    public resetS3Key() {
        this._s3Key = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3KeyInput() {
        return this._s3Key;
    }

    // s3_object_storage_mode - computed: true, optional: true, required: false
    private _s3ObjectStorageMode?: string; 
    public get s3ObjectStorageMode() {
        return this.getStringAttribute('s3_object_storage_mode');
    }
    public set s3ObjectStorageMode(value: string) {
        this._s3ObjectStorageMode = value;
    }
    public resetS3ObjectStorageMode() {
        this._s3ObjectStorageMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3ObjectStorageModeInput() {
        return this._s3ObjectStorageMode;
    }

    // s3_object_version - computed: true, optional: true, required: false
    private _s3ObjectVersion?: string; 
    public get s3ObjectVersion() {
        return this.getStringAttribute('s3_object_version');
    }
    public set s3ObjectVersion(value: string) {
        this._s3ObjectVersion = value;
    }
    public resetS3ObjectVersion() {
        this._s3ObjectVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3ObjectVersionInput() {
        return this._s3ObjectVersion;
    }

    // source_kms_key_arn - computed: true, optional: true, required: false
    private _sourceKmsKeyArn?: string; 
    public get sourceKmsKeyArn() {
        return this.getStringAttribute('source_kms_key_arn');
    }
    public set sourceKmsKeyArn(value: string) {
        this._sourceKmsKeyArn = value;
    }
    public resetSourceKmsKeyArn() {
        this._sourceKmsKeyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceKmsKeyArnInput() {
        return this._sourceKmsKeyArn;
    }

    // zip_file - computed: true, optional: true, required: false
    private _zipFile?: string; 
    public get zipFile() {
        return this.getStringAttribute('zip_file');
    }
    public set zipFile(value: string) {
        this._zipFile = value;
    }
    public resetZipFile() {
        this._zipFile = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get zipFileInput() {
        return this._zipFile;
    }
}
export interface DeadLetterConfigProperty {
    /**
    * The Amazon Resource Name (ARN) of an Amazon SQS queue or Amazon SNS topic.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#target_arn CcFunction#target_arn}
    */
    readonly targetArn?: string;
}
export class DeadLetterConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DeadLetterConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._targetArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetArn = this._targetArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DeadLetterConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._targetArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._targetArn = value.targetArn;
        }
    }

    // target_arn - computed: true, optional: true, required: false
    private _targetArn?: string; 
    public get targetArn() {
        return this.getStringAttribute('target_arn');
    }
    public set targetArn(value: string) {
        this._targetArn = value;
    }
    public resetTargetArn() {
        this._targetArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetArnInput() {
        return this._targetArn;
    }
}
export interface DurableConfigProperty {
    /**
    * The maximum time (in seconds) that a durable execution can run before timing out. This timeout applies to the entire durable execution, not individual function invocations.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#execution_timeout CcFunction#execution_timeout}
    */
    readonly executionTimeout?: number;
    /**
    * The number of days to retain execution history after a durable execution completes. After this period, execution history is no longer available through the GetDurableExecutionHistory API.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#retention_period_in_days CcFunction#retention_period_in_days}
    */
    readonly retentionPeriodInDays?: number;
}
export class DurableConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DurableConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._executionTimeout !== undefined) {
            hasAnyValues = true;
            internalValueResult.executionTimeout = this._executionTimeout;
        }
        if (this._retentionPeriodInDays !== undefined) {
            hasAnyValues = true;
            internalValueResult.retentionPeriodInDays = this._retentionPeriodInDays;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DurableConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._executionTimeout = undefined;
            this._retentionPeriodInDays = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._executionTimeout = value.executionTimeout;
            this._retentionPeriodInDays = value.retentionPeriodInDays;
        }
    }

    // execution_timeout - computed: true, optional: true, required: false
    private _executionTimeout?: number; 
    public get executionTimeout() {
        return this.getNumberAttribute('execution_timeout');
    }
    public set executionTimeout(value: number) {
        this._executionTimeout = value;
    }
    public resetExecutionTimeout() {
        this._executionTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get executionTimeoutInput() {
        return this._executionTimeout;
    }

    // retention_period_in_days - computed: true, optional: true, required: false
    private _retentionPeriodInDays?: number; 
    public get retentionPeriodInDays() {
        return this.getNumberAttribute('retention_period_in_days');
    }
    public set retentionPeriodInDays(value: number) {
        this._retentionPeriodInDays = value;
    }
    public resetRetentionPeriodInDays() {
        this._retentionPeriodInDays = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get retentionPeriodInDaysInput() {
        return this._retentionPeriodInDays;
    }
}
export interface EnvironmentProperty {
    /**
    * Environment variable key-value pairs. For more information, see [Using Lambda environment variables](https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html).
    *  If the value of the environment variable is a time or a duration, enclose the value in quotes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#variables CcFunction#variables}
    */
    readonly variables?: { [key: string]: string };
}
export class EnvironmentPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EnvironmentProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._variables !== undefined) {
            hasAnyValues = true;
            internalValueResult.variables = this._variables;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EnvironmentProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._variables = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._variables = value.variables;
        }
    }

    // variables - computed: true, optional: true, required: false
    private _variables?: { [key: string]: string }; 
    public get variables() {
        return this.getStringMapAttribute('variables');
    }
    public set variables(value: { [key: string]: string }) {
        this._variables = value;
    }
    public resetVariables() {
        this._variables = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get variablesInput() {
        return this._variables;
    }
}
export interface EphemeralStorageProperty {
    /**
    * The size of the function's ``/tmp`` directory.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#size CcFunction#size}
    */
    readonly size?: number;
}
export class EphemeralStoragePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EphemeralStorageProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._size !== undefined) {
            hasAnyValues = true;
            internalValueResult.size = this._size;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EphemeralStorageProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._size = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._size = value.size;
        }
    }

    // size - computed: true, optional: true, required: false
    private _size?: number; 
    public get size() {
        return this.getNumberAttribute('size');
    }
    public set size(value: number) {
        this._size = value;
    }
    public resetSize() {
        this._size = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sizeInput() {
        return this._size;
    }
}
export interface FileSystemConfigProperty {
    /**
    * The Amazon Resource Name (ARN) of the Amazon EFS or Amazon S3 Files access point that provides access to the file system.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#arn CcFunction#arn}
    */
    readonly arn?: string;
    /**
    * The path where the function can access the file system, starting with ``/mnt/``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#local_mount_path CcFunction#local_mount_path}
    */
    readonly localMountPath?: string;
}
export class FileSystemConfigPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): FileSystemConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._arn !== undefined) {
            hasAnyValues = true;
            internalValueResult.arn = this._arn;
        }
        if (this._localMountPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.localMountPath = this._localMountPath;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FileSystemConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._arn = undefined;
            this._localMountPath = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._arn = value.arn;
            this._localMountPath = value.localMountPath;
        }
    }

    // arn - computed: true, optional: true, required: false
    private _arn?: string; 
    public get arn() {
        return this.getStringAttribute('arn');
    }
    public set arn(value: string) {
        this._arn = value;
    }
    public resetArn() {
        this._arn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get arnInput() {
        return this._arn;
    }

    // local_mount_path - computed: true, optional: true, required: false
    private _localMountPath?: string; 
    public get localMountPath() {
        return this.getStringAttribute('local_mount_path');
    }
    public set localMountPath(value: string) {
        this._localMountPath = value;
    }
    public resetLocalMountPath() {
        this._localMountPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get localMountPathInput() {
        return this._localMountPath;
    }
}

export class FileSystemConfigPropertyList extends cdktn.ComplexList {
    public internalValue? : FileSystemConfigProperty[] | cdktn.IResolvable

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
    public get(index: number): FileSystemConfigPropertyOutputReference {
        return new FileSystemConfigPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface FunctionScalingConfigProperty {
    /**
    * The maximum number of execution environments that can be provisioned for the function.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#max_execution_environments CcFunction#max_execution_environments}
    */
    readonly maxExecutionEnvironments?: number;
    /**
    * The minimum number of execution environments to maintain for the function.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#min_execution_environments CcFunction#min_execution_environments}
    */
    readonly minExecutionEnvironments?: number;
}
export class FunctionScalingConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FunctionScalingConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._maxExecutionEnvironments !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxExecutionEnvironments = this._maxExecutionEnvironments;
        }
        if (this._minExecutionEnvironments !== undefined) {
            hasAnyValues = true;
            internalValueResult.minExecutionEnvironments = this._minExecutionEnvironments;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FunctionScalingConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maxExecutionEnvironments = undefined;
            this._minExecutionEnvironments = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maxExecutionEnvironments = value.maxExecutionEnvironments;
            this._minExecutionEnvironments = value.minExecutionEnvironments;
        }
    }

    // max_execution_environments - computed: true, optional: true, required: false
    private _maxExecutionEnvironments?: number; 
    public get maxExecutionEnvironments() {
        return this.getNumberAttribute('max_execution_environments');
    }
    public set maxExecutionEnvironments(value: number) {
        this._maxExecutionEnvironments = value;
    }
    public resetMaxExecutionEnvironments() {
        this._maxExecutionEnvironments = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxExecutionEnvironmentsInput() {
        return this._maxExecutionEnvironments;
    }

    // min_execution_environments - computed: true, optional: true, required: false
    private _minExecutionEnvironments?: number; 
    public get minExecutionEnvironments() {
        return this.getNumberAttribute('min_execution_environments');
    }
    public set minExecutionEnvironments(value: number) {
        this._minExecutionEnvironments = value;
    }
    public resetMinExecutionEnvironments() {
        this._minExecutionEnvironments = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minExecutionEnvironmentsInput() {
        return this._minExecutionEnvironments;
    }
}
export interface ImageConfigProperty {
    /**
    * Specifies parameters that you want to pass in with ENTRYPOINT. You can specify a maximum of 1,500 parameters in the list.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#command CcFunction#command}
    */
    readonly command?: string[];
    /**
    * Specifies the entry point to their application, which is typically the location of the runtime executable. You can specify a maximum of 1,500 string entries in the list.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#entry_point CcFunction#entry_point}
    */
    readonly entryPoint?: string[];
    /**
    * Specifies the working directory. The length of the directory string cannot exceed 1,000 characters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#working_directory CcFunction#working_directory}
    */
    readonly workingDirectory?: string;
}
export class ImageConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ImageConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._command !== undefined) {
            hasAnyValues = true;
            internalValueResult.command = this._command;
        }
        if (this._entryPoint !== undefined) {
            hasAnyValues = true;
            internalValueResult.entryPoint = this._entryPoint;
        }
        if (this._workingDirectory !== undefined) {
            hasAnyValues = true;
            internalValueResult.workingDirectory = this._workingDirectory;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ImageConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._command = undefined;
            this._entryPoint = undefined;
            this._workingDirectory = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._command = value.command;
            this._entryPoint = value.entryPoint;
            this._workingDirectory = value.workingDirectory;
        }
    }

    // command - computed: true, optional: true, required: false
    private _command?: string[]; 
    public get command() {
        return this.getListAttribute('command');
    }
    public set command(value: string[]) {
        this._command = value;
    }
    public resetCommand() {
        this._command = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get commandInput() {
        return this._command;
    }

    // entry_point - computed: true, optional: true, required: false
    private _entryPoint?: string[]; 
    public get entryPoint() {
        return this.getListAttribute('entry_point');
    }
    public set entryPoint(value: string[]) {
        this._entryPoint = value;
    }
    public resetEntryPoint() {
        this._entryPoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get entryPointInput() {
        return this._entryPoint;
    }

    // working_directory - computed: true, optional: true, required: false
    private _workingDirectory?: string; 
    public get workingDirectory() {
        return this.getStringAttribute('working_directory');
    }
    public set workingDirectory(value: string) {
        this._workingDirectory = value;
    }
    public resetWorkingDirectory() {
        this._workingDirectory = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get workingDirectoryInput() {
        return this._workingDirectory;
    }
}
export interface LoggingConfigProperty {
    /**
    * Set this property to filter the application logs for your function that Lambda sends to CloudWatch. Lambda only sends application logs at the selected level of detail and lower, where ``TRACE`` is the highest level and ``FATAL`` is the lowest.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#application_log_level CcFunction#application_log_level}
    */
    readonly applicationLogLevel?: string;
    /**
    * The format in which Lambda sends your function's application and system logs to CloudWatch. Select between plain text and structured JSON.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#log_format CcFunction#log_format}
    */
    readonly logFormat?: string;
    /**
    * The name of the Amazon CloudWatch log group the function sends logs to. By default, Lambda functions send logs to a default log group named ``/aws/lambda/<function name>``. To use a different log group, enter an existing log group or enter a new log group name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#log_group CcFunction#log_group}
    */
    readonly logGroup?: string;
    /**
    * Set this property to filter the system logs for your function that Lambda sends to CloudWatch. Lambda only sends system logs at the selected level of detail and lower, where ``DEBUG`` is the highest level and ``WARN`` is the lowest.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#system_log_level CcFunction#system_log_level}
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
        if (this._logFormat !== undefined) {
            hasAnyValues = true;
            internalValueResult.logFormat = this._logFormat;
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
            this._logFormat = undefined;
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
            this._logFormat = value.logFormat;
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

    // log_format - computed: true, optional: true, required: false
    private _logFormat?: string; 
    public get logFormat() {
        return this.getStringAttribute('log_format');
    }
    public set logFormat(value: string) {
        this._logFormat = value;
    }
    public resetLogFormat() {
        this._logFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logFormatInput() {
        return this._logFormat;
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
export interface RuntimeManagementConfigProperty {
    /**
    * The ARN of the runtime version you want the function to use.
    *   This is only required if you're using the *Manual* runtime update mode.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#runtime_version_arn CcFunction#runtime_version_arn}
    */
    readonly runtimeVersionArn?: string;
    /**
    * Specify the runtime update mode.
    *   +  *Auto (default)* - Automatically update to the most recent and secure runtime version using a [Two-phase runtime version rollout](https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html#runtime-management-two-phase). This is the best choice for most customers to ensure they always benefit from runtime updates.
    *   +  *FunctionUpdate* - LAM updates the runtime of you function to the most recent and secure runtime version when you update your function. This approach synchronizes runtime updates with function deployments, giving you control over when runtime updates are applied and allowing you to detect and mitigate rare runtime update incompatibilities early. When using this setting, you need to regularly update your functions to keep their runtime up-to-date.
    *   +  *Manual* - You specify a runtime version in your function configuration. The function will use this runtime version indefinitely. In the rare case where a new runtime version is incompatible with an existing function, this allows you to roll back your function to an earlier runtime version. For more information, see [Roll back a runtime version](https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html#runtime-management-rollback).
    *   
    *  *Valid Values*: ``Auto`` | ``FunctionUpdate`` | ``Manual``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#update_runtime_on CcFunction#update_runtime_on}
    */
    readonly updateRuntimeOn?: string;
}
export class RuntimeManagementConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RuntimeManagementConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._runtimeVersionArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.runtimeVersionArn = this._runtimeVersionArn;
        }
        if (this._updateRuntimeOn !== undefined) {
            hasAnyValues = true;
            internalValueResult.updateRuntimeOn = this._updateRuntimeOn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RuntimeManagementConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._runtimeVersionArn = undefined;
            this._updateRuntimeOn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._runtimeVersionArn = value.runtimeVersionArn;
            this._updateRuntimeOn = value.updateRuntimeOn;
        }
    }

    // runtime_version_arn - computed: true, optional: true, required: false
    private _runtimeVersionArn?: string; 
    public get runtimeVersionArn() {
        return this.getStringAttribute('runtime_version_arn');
    }
    public set runtimeVersionArn(value: string) {
        this._runtimeVersionArn = value;
    }
    public resetRuntimeVersionArn() {
        this._runtimeVersionArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get runtimeVersionArnInput() {
        return this._runtimeVersionArn;
    }

    // update_runtime_on - computed: true, optional: true, required: false
    private _updateRuntimeOn?: string; 
    public get updateRuntimeOn() {
        return this.getStringAttribute('update_runtime_on');
    }
    public set updateRuntimeOn(value: string) {
        this._updateRuntimeOn = value;
    }
    public resetUpdateRuntimeOn() {
        this._updateRuntimeOn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateRuntimeOnInput() {
        return this._updateRuntimeOn;
    }
}
export interface SnapStartProperty {
    /**
    * Set ``ApplyOn`` to ``PublishedVersions`` to create a snapshot of the initialized execution environment when you publish a function version.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#apply_on CcFunction#apply_on}
    */
    readonly applyOn?: string;
}
export class SnapStartPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SnapStartProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._applyOn !== undefined) {
            hasAnyValues = true;
            internalValueResult.applyOn = this._applyOn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SnapStartProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._applyOn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._applyOn = value.applyOn;
        }
    }

    // apply_on - computed: true, optional: true, required: false
    private _applyOn?: string; 
    public get applyOn() {
        return this.getStringAttribute('apply_on');
    }
    public set applyOn(value: string) {
        this._applyOn = value;
    }
    public resetApplyOn() {
        this._applyOn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get applyOnInput() {
        return this._applyOn;
    }
}
export interface SnapStartResponseProperty {
}
export class SnapStartResponsePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SnapStartResponseProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SnapStartResponseProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // apply_on - computed: true, optional: false, required: false
    public get applyOn() {
        return this.getStringAttribute('apply_on');
    }

    // optimization_status - computed: true, optional: false, required: false
    public get optimizationStatus() {
        return this.getStringAttribute('optimization_status');
    }
}
export interface TagProperty {
    /**
    * The key for this tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#key CcFunction#key}
    */
    readonly key?: string;
    /**
    * The value for this tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#value CcFunction#value}
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
export interface TenancyConfigProperty {
    /**
    * Tenant isolation mode allows for invocation to be sent to a corresponding execution environment dedicated to a specific tenant ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#tenant_isolation_mode CcFunction#tenant_isolation_mode}
    */
    readonly tenantIsolationMode?: string;
}
export class TenancyConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TenancyConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._tenantIsolationMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.tenantIsolationMode = this._tenantIsolationMode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TenancyConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._tenantIsolationMode = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._tenantIsolationMode = value.tenantIsolationMode;
        }
    }

    // tenant_isolation_mode - computed: true, optional: true, required: false
    private _tenantIsolationMode?: string; 
    public get tenantIsolationMode() {
        return this.getStringAttribute('tenant_isolation_mode');
    }
    public set tenantIsolationMode(value: string) {
        this._tenantIsolationMode = value;
    }
    public resetTenantIsolationMode() {
        this._tenantIsolationMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tenantIsolationModeInput() {
        return this._tenantIsolationMode;
    }
}
export interface TracingConfigProperty {
    /**
    * The tracing mode.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#mode CcFunction#mode}
    */
    readonly mode?: string;
}
export class TracingConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TracingConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._mode !== undefined) {
            hasAnyValues = true;
            internalValueResult.mode = this._mode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TracingConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._mode = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._mode = value.mode;
        }
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
}
export interface VpcConfigProperty {
    /**
    * Allows outbound IPv6 traffic on VPC functions that are connected to dual-stack subnets.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#ipv_6_allowed_for_dual_stack CcFunction#ipv_6_allowed_for_dual_stack}
    */
    readonly ipv6AllowedForDualStack?: boolean | cdktn.IResolvable;
    /**
    * A list of VPC security group IDs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#security_group_ids CcFunction#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * A list of VPC subnet IDs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_function#subnet_ids CcFunction#subnet_ids}
    */
    readonly subnetIds?: string[];
}
export class VpcConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VpcConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._ipv6AllowedForDualStack !== undefined) {
            hasAnyValues = true;
            internalValueResult.ipv6AllowedForDualStack = this._ipv6AllowedForDualStack;
        }
        if (this._securityGroupIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.securityGroupIds = this._securityGroupIds;
        }
        if (this._subnetIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.subnetIds = this._subnetIds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VpcConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._ipv6AllowedForDualStack = undefined;
            this._securityGroupIds = undefined;
            this._subnetIds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._ipv6AllowedForDualStack = value.ipv6AllowedForDualStack;
            this._securityGroupIds = value.securityGroupIds;
            this._subnetIds = value.subnetIds;
        }
    }

    // ipv_6_allowed_for_dual_stack - computed: true, optional: true, required: false
    private _ipv6AllowedForDualStack?: boolean | cdktn.IResolvable; 
    public get ipv6AllowedForDualStack() {
        return this.getBooleanAttribute('ipv_6_allowed_for_dual_stack');
    }
    public set ipv6AllowedForDualStack(value: boolean | cdktn.IResolvable) {
        this._ipv6AllowedForDualStack = value;
    }
    public resetIpv6AllowedForDualStack() {
        this._ipv6AllowedForDualStack = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipv6AllowedForDualStackInput() {
        return this._ipv6AllowedForDualStack;
    }

    // security_group_ids - computed: true, optional: true, required: false
    private _securityGroupIds?: string[]; 
    public get securityGroupIds() {
        return this.getListAttribute('security_group_ids');
    }
    public set securityGroupIds(value: string[]) {
        this._securityGroupIds = value;
    }
    public resetSecurityGroupIds() {
        this._securityGroupIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupIdsInput() {
        return this._securityGroupIds;
    }

    // subnet_ids - computed: true, optional: true, required: false
    private _subnetIds?: string[]; 
    public get subnetIds() {
        return this.getListAttribute('subnet_ids');
    }
    public set subnetIds(value: string[]) {
        this._subnetIds = value;
    }
    public resetSubnetIds() {
        this._subnetIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdsInput() {
        return this._subnetIds;
    }
}
}
