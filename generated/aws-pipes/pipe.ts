// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcPipeProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#description CcPipe#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#desired_state CcPipe#desired_state}
    */
    readonly desiredState?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#enrichment CcPipe#enrichment}
    */
    readonly enrichment?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#enrichment_parameters CcPipe#enrichment_parameters}
    */
    readonly enrichmentParameters?: CcPipe.PipeEnrichmentParametersProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#kms_key_identifier CcPipe#kms_key_identifier}
    */
    readonly kmsKeyIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#log_configuration CcPipe#log_configuration}
    */
    readonly logConfiguration?: CcPipe.PipeLogConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#name CcPipe#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#role_arn CcPipe#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#source CcPipe#source}
    */
    readonly source: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#source_parameters CcPipe#source_parameters}
    */
    readonly sourceParameters?: CcPipe.PipeSourceParametersProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#tags CcPipe#tags}
    */
    readonly tags?: { [key: string]: string };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#target CcPipe#target}
    */
    readonly target: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#target_parameters CcPipe#target_parameters}
    */
    readonly targetParameters?: CcPipe.PipeTargetParametersProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe awscc_pipes_pipe}
*/
export class CcPipe extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_pipes_pipe";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcPipe resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcPipe to import
    * @param importFromId The id of the existing CcPipe that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcPipe to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_pipes_pipe", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe awscc_pipes_pipe} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcPipeProps
    */
    public constructor(scope: Construct, id: string, config: CcPipeProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_pipes_pipe',
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
        this._description = config.description;
        this._desiredState = config.desiredState;
        this._enrichment = config.enrichment;
        this._enrichmentParameters.internalValue = config.enrichmentParameters;
        this._kmsKeyIdentifier = config.kmsKeyIdentifier;
        this._logConfiguration.internalValue = config.logConfiguration;
        this._name = config.name;
        this._roleArn = config.roleArn;
        this._source = config.source;
        this._sourceParameters.internalValue = config.sourceParameters;
        this._tags = config.tags;
        this._target = config.target;
        this._targetParameters.internalValue = config.targetParameters;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // creation_time - computed: true, optional: false, required: false
    public get creationTime() {
        return this.getStringAttribute('creation_time');
    }

    // current_state - computed: true, optional: false, required: false
    public get currentState() {
        return this.getStringAttribute('current_state');
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

    // desired_state - computed: true, optional: true, required: false
    private _desiredState?: string; 
    public get desiredState() {
        return this.getStringAttribute('desired_state');
    }
    public set desiredState(value: string) {
        this._desiredState = value;
    }
    public resetDesiredState() {
        this._desiredState = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get desiredStateInput() {
        return this._desiredState;
    }

    // enrichment - computed: true, optional: true, required: false
    private _enrichment?: string; 
    public get enrichment() {
        return this.getStringAttribute('enrichment');
    }
    public set enrichment(value: string) {
        this._enrichment = value;
    }
    public resetEnrichment() {
        this._enrichment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enrichmentInput() {
        return this._enrichment;
    }

    // enrichment_parameters - computed: true, optional: true, required: false
    private _enrichmentParameters = new CcPipe.PipeEnrichmentParametersPropertyOutputReference(this, "enrichment_parameters");
    public get enrichmentParameters() {
        return this._enrichmentParameters;
    }
    public putEnrichmentParameters(value: CcPipe.PipeEnrichmentParametersProperty) {
        this._enrichmentParameters.internalValue = value;
    }
    public resetEnrichmentParameters() {
        this._enrichmentParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enrichmentParametersInput() {
        return this._enrichmentParameters.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // kms_key_identifier - computed: true, optional: true, required: false
    private _kmsKeyIdentifier?: string; 
    public get kmsKeyIdentifier() {
        return this.getStringAttribute('kms_key_identifier');
    }
    public set kmsKeyIdentifier(value: string) {
        this._kmsKeyIdentifier = value;
    }
    public resetKmsKeyIdentifier() {
        this._kmsKeyIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyIdentifierInput() {
        return this._kmsKeyIdentifier;
    }

    // last_modified_time - computed: true, optional: false, required: false
    public get lastModifiedTime() {
        return this.getStringAttribute('last_modified_time');
    }

    // log_configuration - computed: true, optional: true, required: false
    private _logConfiguration = new CcPipe.PipeLogConfigurationPropertyOutputReference(this, "log_configuration");
    public get logConfiguration() {
        return this._logConfiguration;
    }
    public putLogConfiguration(value: CcPipe.PipeLogConfigurationProperty) {
        this._logConfiguration.internalValue = value;
    }
    public resetLogConfiguration() {
        this._logConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logConfigurationInput() {
        return this._logConfiguration.internalValue;
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

    // role_arn - computed: false, optional: false, required: true
    private _roleArn?: string; 
    public get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
        this._roleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
        return this._roleArn;
    }

    // source - computed: false, optional: false, required: true
    private _source?: string; 
    public get source() {
        return this.getStringAttribute('source');
    }
    public set source(value: string) {
        this._source = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceInput() {
        return this._source;
    }

    // source_parameters - computed: true, optional: true, required: false
    private _sourceParameters = new CcPipe.PipeSourceParametersPropertyOutputReference(this, "source_parameters");
    public get sourceParameters() {
        return this._sourceParameters;
    }
    public putSourceParameters(value: CcPipe.PipeSourceParametersProperty) {
        this._sourceParameters.internalValue = value;
    }
    public resetSourceParameters() {
        this._sourceParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceParametersInput() {
        return this._sourceParameters.internalValue;
    }

    // state_reason - computed: true, optional: false, required: false
    public get stateReason() {
        return this.getStringAttribute('state_reason');
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string }; 
    public get tags() {
        return this.getStringMapAttribute('tags');
    }
    public set tags(value: { [key: string]: string }) {
        this._tags = value;
    }
    public resetTags() {
        this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags;
    }

    // target - computed: false, optional: false, required: true
    private _target?: string; 
    public get target() {
        return this.getStringAttribute('target');
    }
    public set target(value: string) {
        this._target = value;
    }
    // Temporarily expose input value. Use with caution.
    public get targetInput() {
        return this._target;
    }

    // target_parameters - computed: true, optional: true, required: false
    private _targetParameters = new CcPipe.PipeTargetParametersPropertyOutputReference(this, "target_parameters");
    public get targetParameters() {
        return this._targetParameters;
    }
    public putTargetParameters(value: CcPipe.PipeTargetParametersProperty) {
        this._targetParameters.internalValue = value;
    }
    public resetTargetParameters() {
        this._targetParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetParametersInput() {
        return this._targetParameters.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            description: cdktn.stringToTerraform(this._description),
            desired_state: cdktn.stringToTerraform(this._desiredState),
            enrichment: cdktn.stringToTerraform(this._enrichment),
            enrichment_parameters: ccPipePipeEnrichmentParametersPropertyToTerraform(this._enrichmentParameters.internalValue),
            kms_key_identifier: cdktn.stringToTerraform(this._kmsKeyIdentifier),
            log_configuration: ccPipePipeLogConfigurationPropertyToTerraform(this._logConfiguration.internalValue),
            name: cdktn.stringToTerraform(this._name),
            role_arn: cdktn.stringToTerraform(this._roleArn),
            source: cdktn.stringToTerraform(this._source),
            source_parameters: ccPipePipeSourceParametersPropertyToTerraform(this._sourceParameters.internalValue),
            tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
            target: cdktn.stringToTerraform(this._target),
            target_parameters: ccPipePipeTargetParametersPropertyToTerraform(this._targetParameters.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            desired_state: {
                value: cdktn.stringToHclTerraform(this._desiredState),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            enrichment: {
                value: cdktn.stringToHclTerraform(this._enrichment),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            enrichment_parameters: {
                value: ccPipePipeEnrichmentParametersPropertyToHclTerraform(this._enrichmentParameters.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcPipe.PipeEnrichmentParametersProperty",
            },
            kms_key_identifier: {
                value: cdktn.stringToHclTerraform(this._kmsKeyIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            log_configuration: {
                value: ccPipePipeLogConfigurationPropertyToHclTerraform(this._logConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcPipe.PipeLogConfigurationProperty",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            role_arn: {
                value: cdktn.stringToHclTerraform(this._roleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            source: {
                value: cdktn.stringToHclTerraform(this._source),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            source_parameters: {
                value: ccPipePipeSourceParametersPropertyToHclTerraform(this._sourceParameters.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcPipe.PipeSourceParametersProperty",
            },
            tags: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            target: {
                value: cdktn.stringToHclTerraform(this._target),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            target_parameters: {
                value: ccPipePipeTargetParametersPropertyToHclTerraform(this._targetParameters.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcPipe.PipeTargetParametersProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccPipePipeEnrichmentHttpParametersPropertyToTerraform(struct?: CcPipe.PipeEnrichmentHttpParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        header_parameters: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.headerParameters),
        path_parameter_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.pathParameterValues),
        query_string_parameters: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.queryStringParameters),
    }
}


export function ccPipePipeEnrichmentHttpParametersPropertyToHclTerraform(struct?: CcPipe.PipeEnrichmentHttpParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        header_parameters: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.headerParameters),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        path_parameter_values: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.pathParameterValues),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        query_string_parameters: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.queryStringParameters),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipePipeEnrichmentParametersPropertyToTerraform(struct?: CcPipe.PipeEnrichmentParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        http_parameters: ccPipePipeEnrichmentHttpParametersPropertyToTerraform(struct!.httpParameters),
        input_template: cdktn.stringToTerraform(struct!.inputTemplate),
    }
}


export function ccPipePipeEnrichmentParametersPropertyToHclTerraform(struct?: CcPipe.PipeEnrichmentParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        http_parameters: {
            value: ccPipePipeEnrichmentHttpParametersPropertyToHclTerraform(struct!.httpParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "PipeEnrichmentHttpParametersProperty",
        },
        input_template: {
            value: cdktn.stringToHclTerraform(struct!.inputTemplate),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipeCloudwatchLogsLogDestinationPropertyToTerraform(struct?: CcPipe.CloudwatchLogsLogDestinationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        log_group_arn: cdktn.stringToTerraform(struct!.logGroupArn),
    }
}


export function ccPipeCloudwatchLogsLogDestinationPropertyToHclTerraform(struct?: CcPipe.CloudwatchLogsLogDestinationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        log_group_arn: {
            value: cdktn.stringToHclTerraform(struct!.logGroupArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipeFirehoseLogDestinationPropertyToTerraform(struct?: CcPipe.FirehoseLogDestinationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        delivery_stream_arn: cdktn.stringToTerraform(struct!.deliveryStreamArn),
    }
}


export function ccPipeFirehoseLogDestinationPropertyToHclTerraform(struct?: CcPipe.FirehoseLogDestinationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        delivery_stream_arn: {
            value: cdktn.stringToHclTerraform(struct!.deliveryStreamArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipeS3LogDestinationPropertyToTerraform(struct?: CcPipe.S3LogDestinationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bucket_name: cdktn.stringToTerraform(struct!.bucketName),
        bucket_owner: cdktn.stringToTerraform(struct!.bucketOwner),
        output_format: cdktn.stringToTerraform(struct!.outputFormat),
        prefix: cdktn.stringToTerraform(struct!.prefix),
    }
}


export function ccPipeS3LogDestinationPropertyToHclTerraform(struct?: CcPipe.S3LogDestinationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bucket_name: {
            value: cdktn.stringToHclTerraform(struct!.bucketName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        bucket_owner: {
            value: cdktn.stringToHclTerraform(struct!.bucketOwner),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        output_format: {
            value: cdktn.stringToHclTerraform(struct!.outputFormat),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        prefix: {
            value: cdktn.stringToHclTerraform(struct!.prefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipePipeLogConfigurationPropertyToTerraform(struct?: CcPipe.PipeLogConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cloudwatch_logs_log_destination: ccPipeCloudwatchLogsLogDestinationPropertyToTerraform(struct!.cloudwatchLogsLogDestination),
        firehose_log_destination: ccPipeFirehoseLogDestinationPropertyToTerraform(struct!.firehoseLogDestination),
        include_execution_data: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.includeExecutionData),
        level: cdktn.stringToTerraform(struct!.level),
        s3_log_destination: ccPipeS3LogDestinationPropertyToTerraform(struct!.s3LogDestination),
    }
}


export function ccPipePipeLogConfigurationPropertyToHclTerraform(struct?: CcPipe.PipeLogConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cloudwatch_logs_log_destination: {
            value: ccPipeCloudwatchLogsLogDestinationPropertyToHclTerraform(struct!.cloudwatchLogsLogDestination),
            isBlock: true,
            type: "struct",
            storageClassType: "CloudwatchLogsLogDestinationProperty",
        },
        firehose_log_destination: {
            value: ccPipeFirehoseLogDestinationPropertyToHclTerraform(struct!.firehoseLogDestination),
            isBlock: true,
            type: "struct",
            storageClassType: "FirehoseLogDestinationProperty",
        },
        include_execution_data: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.includeExecutionData),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        level: {
            value: cdktn.stringToHclTerraform(struct!.level),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_log_destination: {
            value: ccPipeS3LogDestinationPropertyToHclTerraform(struct!.s3LogDestination),
            isBlock: true,
            type: "struct",
            storageClassType: "S3LogDestinationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipeMQBrokerAccessCredentialsPropertyToTerraform(struct?: CcPipe.MQBrokerAccessCredentialsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        basic_auth: cdktn.stringToTerraform(struct!.basicAuth),
    }
}


export function ccPipeMQBrokerAccessCredentialsPropertyToHclTerraform(struct?: CcPipe.MQBrokerAccessCredentialsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        basic_auth: {
            value: cdktn.stringToHclTerraform(struct!.basicAuth),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipePipeSourceActiveMQBrokerParametersPropertyToTerraform(struct?: CcPipe.PipeSourceActiveMQBrokerParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        batch_size: cdktn.numberToTerraform(struct!.batchSize),
        credentials: ccPipeMQBrokerAccessCredentialsPropertyToTerraform(struct!.credentials),
        maximum_batching_window_in_seconds: cdktn.numberToTerraform(struct!.maximumBatchingWindowInSeconds),
        queue_name: cdktn.stringToTerraform(struct!.queueName),
    }
}


export function ccPipePipeSourceActiveMQBrokerParametersPropertyToHclTerraform(struct?: CcPipe.PipeSourceActiveMQBrokerParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        batch_size: {
            value: cdktn.numberToHclTerraform(struct!.batchSize),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        credentials: {
            value: ccPipeMQBrokerAccessCredentialsPropertyToHclTerraform(struct!.credentials),
            isBlock: true,
            type: "struct",
            storageClassType: "MQBrokerAccessCredentialsProperty",
        },
        maximum_batching_window_in_seconds: {
            value: cdktn.numberToHclTerraform(struct!.maximumBatchingWindowInSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        queue_name: {
            value: cdktn.stringToHclTerraform(struct!.queueName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipeDeadLetterConfigPropertyToTerraform(struct?: CcPipe.DeadLetterConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        arn: cdktn.stringToTerraform(struct!.arn),
    }
}


export function ccPipeDeadLetterConfigPropertyToHclTerraform(struct?: CcPipe.DeadLetterConfigProperty | cdktn.IResolvable): any {
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipePipeSourceDynamoDBStreamParametersPropertyToTerraform(struct?: CcPipe.PipeSourceDynamoDBStreamParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        batch_size: cdktn.numberToTerraform(struct!.batchSize),
        dead_letter_config: ccPipeDeadLetterConfigPropertyToTerraform(struct!.deadLetterConfig),
        maximum_batching_window_in_seconds: cdktn.numberToTerraform(struct!.maximumBatchingWindowInSeconds),
        maximum_record_age_in_seconds: cdktn.numberToTerraform(struct!.maximumRecordAgeInSeconds),
        maximum_retry_attempts: cdktn.numberToTerraform(struct!.maximumRetryAttempts),
        on_partial_batch_item_failure: cdktn.stringToTerraform(struct!.onPartialBatchItemFailure),
        parallelization_factor: cdktn.numberToTerraform(struct!.parallelizationFactor),
        starting_position: cdktn.stringToTerraform(struct!.startingPosition),
    }
}


export function ccPipePipeSourceDynamoDBStreamParametersPropertyToHclTerraform(struct?: CcPipe.PipeSourceDynamoDBStreamParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        batch_size: {
            value: cdktn.numberToHclTerraform(struct!.batchSize),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        dead_letter_config: {
            value: ccPipeDeadLetterConfigPropertyToHclTerraform(struct!.deadLetterConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "DeadLetterConfigProperty",
        },
        maximum_batching_window_in_seconds: {
            value: cdktn.numberToHclTerraform(struct!.maximumBatchingWindowInSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        maximum_record_age_in_seconds: {
            value: cdktn.numberToHclTerraform(struct!.maximumRecordAgeInSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        maximum_retry_attempts: {
            value: cdktn.numberToHclTerraform(struct!.maximumRetryAttempts),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        on_partial_batch_item_failure: {
            value: cdktn.stringToHclTerraform(struct!.onPartialBatchItemFailure),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        parallelization_factor: {
            value: cdktn.numberToHclTerraform(struct!.parallelizationFactor),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        starting_position: {
            value: cdktn.stringToHclTerraform(struct!.startingPosition),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipeFilterPropertyToTerraform(struct?: CcPipe.FilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        pattern: cdktn.stringToTerraform(struct!.pattern),
    }
}


export function ccPipeFilterPropertyToHclTerraform(struct?: CcPipe.FilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        pattern: {
            value: cdktn.stringToHclTerraform(struct!.pattern),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipeFilterCriteriaPropertyToTerraform(struct?: CcPipe.FilterCriteriaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        filters: cdktn.listMapper(ccPipeFilterPropertyToTerraform, false)(struct!.filters),
    }
}


export function ccPipeFilterCriteriaPropertyToHclTerraform(struct?: CcPipe.FilterCriteriaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        filters: {
            value: cdktn.listMapperHcl(ccPipeFilterPropertyToHclTerraform, false)(struct!.filters),
            isBlock: true,
            type: "list",
            storageClassType: "FilterPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipeSourceParametersKinesisStreamParametersDeadLetterConfigPropertyToTerraform(struct?: CcPipe.SourceParametersKinesisStreamParametersDeadLetterConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        arn: cdktn.stringToTerraform(struct!.arn),
    }
}


export function ccPipeSourceParametersKinesisStreamParametersDeadLetterConfigPropertyToHclTerraform(struct?: CcPipe.SourceParametersKinesisStreamParametersDeadLetterConfigProperty | cdktn.IResolvable): any {
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipePipeSourceKinesisStreamParametersPropertyToTerraform(struct?: CcPipe.PipeSourceKinesisStreamParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        batch_size: cdktn.numberToTerraform(struct!.batchSize),
        dead_letter_config: ccPipeSourceParametersKinesisStreamParametersDeadLetterConfigPropertyToTerraform(struct!.deadLetterConfig),
        maximum_batching_window_in_seconds: cdktn.numberToTerraform(struct!.maximumBatchingWindowInSeconds),
        maximum_record_age_in_seconds: cdktn.numberToTerraform(struct!.maximumRecordAgeInSeconds),
        maximum_retry_attempts: cdktn.numberToTerraform(struct!.maximumRetryAttempts),
        on_partial_batch_item_failure: cdktn.stringToTerraform(struct!.onPartialBatchItemFailure),
        parallelization_factor: cdktn.numberToTerraform(struct!.parallelizationFactor),
        starting_position: cdktn.stringToTerraform(struct!.startingPosition),
        starting_position_timestamp: cdktn.stringToTerraform(struct!.startingPositionTimestamp),
    }
}


export function ccPipePipeSourceKinesisStreamParametersPropertyToHclTerraform(struct?: CcPipe.PipeSourceKinesisStreamParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        batch_size: {
            value: cdktn.numberToHclTerraform(struct!.batchSize),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        dead_letter_config: {
            value: ccPipeSourceParametersKinesisStreamParametersDeadLetterConfigPropertyToHclTerraform(struct!.deadLetterConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "SourceParametersKinesisStreamParametersDeadLetterConfigProperty",
        },
        maximum_batching_window_in_seconds: {
            value: cdktn.numberToHclTerraform(struct!.maximumBatchingWindowInSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        maximum_record_age_in_seconds: {
            value: cdktn.numberToHclTerraform(struct!.maximumRecordAgeInSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        maximum_retry_attempts: {
            value: cdktn.numberToHclTerraform(struct!.maximumRetryAttempts),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        on_partial_batch_item_failure: {
            value: cdktn.stringToHclTerraform(struct!.onPartialBatchItemFailure),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        parallelization_factor: {
            value: cdktn.numberToHclTerraform(struct!.parallelizationFactor),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        starting_position: {
            value: cdktn.stringToHclTerraform(struct!.startingPosition),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        starting_position_timestamp: {
            value: cdktn.stringToHclTerraform(struct!.startingPositionTimestamp),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipeMSKAccessCredentialsPropertyToTerraform(struct?: CcPipe.MSKAccessCredentialsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        client_certificate_tls_auth: cdktn.stringToTerraform(struct!.clientCertificateTlsAuth),
        sasl_scram_512_auth: cdktn.stringToTerraform(struct!.saslScram512Auth),
    }
}


export function ccPipeMSKAccessCredentialsPropertyToHclTerraform(struct?: CcPipe.MSKAccessCredentialsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        client_certificate_tls_auth: {
            value: cdktn.stringToHclTerraform(struct!.clientCertificateTlsAuth),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sasl_scram_512_auth: {
            value: cdktn.stringToHclTerraform(struct!.saslScram512Auth),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipePipeSourceManagedStreamingKafkaParametersPropertyToTerraform(struct?: CcPipe.PipeSourceManagedStreamingKafkaParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        batch_size: cdktn.numberToTerraform(struct!.batchSize),
        consumer_group_id: cdktn.stringToTerraform(struct!.consumerGroupId),
        credentials: ccPipeMSKAccessCredentialsPropertyToTerraform(struct!.credentials),
        maximum_batching_window_in_seconds: cdktn.numberToTerraform(struct!.maximumBatchingWindowInSeconds),
        starting_position: cdktn.stringToTerraform(struct!.startingPosition),
        topic_name: cdktn.stringToTerraform(struct!.topicName),
    }
}


export function ccPipePipeSourceManagedStreamingKafkaParametersPropertyToHclTerraform(struct?: CcPipe.PipeSourceManagedStreamingKafkaParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        batch_size: {
            value: cdktn.numberToHclTerraform(struct!.batchSize),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        consumer_group_id: {
            value: cdktn.stringToHclTerraform(struct!.consumerGroupId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        credentials: {
            value: ccPipeMSKAccessCredentialsPropertyToHclTerraform(struct!.credentials),
            isBlock: true,
            type: "struct",
            storageClassType: "MSKAccessCredentialsProperty",
        },
        maximum_batching_window_in_seconds: {
            value: cdktn.numberToHclTerraform(struct!.maximumBatchingWindowInSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        starting_position: {
            value: cdktn.stringToHclTerraform(struct!.startingPosition),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        topic_name: {
            value: cdktn.stringToHclTerraform(struct!.topicName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipeCredentialsPropertyToTerraform(struct?: CcPipe.CredentialsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        basic_auth: cdktn.stringToTerraform(struct!.basicAuth),
    }
}


export function ccPipeCredentialsPropertyToHclTerraform(struct?: CcPipe.CredentialsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        basic_auth: {
            value: cdktn.stringToHclTerraform(struct!.basicAuth),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipePipeSourceRabbitMQBrokerParametersPropertyToTerraform(struct?: CcPipe.PipeSourceRabbitMQBrokerParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        batch_size: cdktn.numberToTerraform(struct!.batchSize),
        credentials: ccPipeCredentialsPropertyToTerraform(struct!.credentials),
        maximum_batching_window_in_seconds: cdktn.numberToTerraform(struct!.maximumBatchingWindowInSeconds),
        queue_name: cdktn.stringToTerraform(struct!.queueName),
        virtual_host: cdktn.stringToTerraform(struct!.virtualHost),
    }
}


export function ccPipePipeSourceRabbitMQBrokerParametersPropertyToHclTerraform(struct?: CcPipe.PipeSourceRabbitMQBrokerParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        batch_size: {
            value: cdktn.numberToHclTerraform(struct!.batchSize),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        credentials: {
            value: ccPipeCredentialsPropertyToHclTerraform(struct!.credentials),
            isBlock: true,
            type: "struct",
            storageClassType: "CredentialsProperty",
        },
        maximum_batching_window_in_seconds: {
            value: cdktn.numberToHclTerraform(struct!.maximumBatchingWindowInSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        queue_name: {
            value: cdktn.stringToHclTerraform(struct!.queueName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        virtual_host: {
            value: cdktn.stringToHclTerraform(struct!.virtualHost),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipeSelfManagedKafkaAccessConfigurationCredentialsPropertyToTerraform(struct?: CcPipe.SelfManagedKafkaAccessConfigurationCredentialsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        basic_auth: cdktn.stringToTerraform(struct!.basicAuth),
        client_certificate_tls_auth: cdktn.stringToTerraform(struct!.clientCertificateTlsAuth),
        sasl_scram_256_auth: cdktn.stringToTerraform(struct!.saslScram256Auth),
        sasl_scram_512_auth: cdktn.stringToTerraform(struct!.saslScram512Auth),
    }
}


export function ccPipeSelfManagedKafkaAccessConfigurationCredentialsPropertyToHclTerraform(struct?: CcPipe.SelfManagedKafkaAccessConfigurationCredentialsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        basic_auth: {
            value: cdktn.stringToHclTerraform(struct!.basicAuth),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        client_certificate_tls_auth: {
            value: cdktn.stringToHclTerraform(struct!.clientCertificateTlsAuth),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sasl_scram_256_auth: {
            value: cdktn.stringToHclTerraform(struct!.saslScram256Auth),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sasl_scram_512_auth: {
            value: cdktn.stringToHclTerraform(struct!.saslScram512Auth),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipeSelfManagedKafkaAccessConfigurationVpcPropertyToTerraform(struct?: CcPipe.SelfManagedKafkaAccessConfigurationVpcProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        security_group: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroup),
        subnets: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnets),
    }
}


export function ccPipeSelfManagedKafkaAccessConfigurationVpcPropertyToHclTerraform(struct?: CcPipe.SelfManagedKafkaAccessConfigurationVpcProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        security_group: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroup),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        subnets: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnets),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipePipeSourceSelfManagedKafkaParametersPropertyToTerraform(struct?: CcPipe.PipeSourceSelfManagedKafkaParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        additional_bootstrap_servers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.additionalBootstrapServers),
        batch_size: cdktn.numberToTerraform(struct!.batchSize),
        consumer_group_id: cdktn.stringToTerraform(struct!.consumerGroupId),
        credentials: ccPipeSelfManagedKafkaAccessConfigurationCredentialsPropertyToTerraform(struct!.credentials),
        maximum_batching_window_in_seconds: cdktn.numberToTerraform(struct!.maximumBatchingWindowInSeconds),
        server_root_ca_certificate: cdktn.stringToTerraform(struct!.serverRootCaCertificate),
        starting_position: cdktn.stringToTerraform(struct!.startingPosition),
        topic_name: cdktn.stringToTerraform(struct!.topicName),
        vpc: ccPipeSelfManagedKafkaAccessConfigurationVpcPropertyToTerraform(struct!.vpc),
    }
}


export function ccPipePipeSourceSelfManagedKafkaParametersPropertyToHclTerraform(struct?: CcPipe.PipeSourceSelfManagedKafkaParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        additional_bootstrap_servers: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.additionalBootstrapServers),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        batch_size: {
            value: cdktn.numberToHclTerraform(struct!.batchSize),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        consumer_group_id: {
            value: cdktn.stringToHclTerraform(struct!.consumerGroupId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        credentials: {
            value: ccPipeSelfManagedKafkaAccessConfigurationCredentialsPropertyToHclTerraform(struct!.credentials),
            isBlock: true,
            type: "struct",
            storageClassType: "SelfManagedKafkaAccessConfigurationCredentialsProperty",
        },
        maximum_batching_window_in_seconds: {
            value: cdktn.numberToHclTerraform(struct!.maximumBatchingWindowInSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        server_root_ca_certificate: {
            value: cdktn.stringToHclTerraform(struct!.serverRootCaCertificate),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        starting_position: {
            value: cdktn.stringToHclTerraform(struct!.startingPosition),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        topic_name: {
            value: cdktn.stringToHclTerraform(struct!.topicName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        vpc: {
            value: ccPipeSelfManagedKafkaAccessConfigurationVpcPropertyToHclTerraform(struct!.vpc),
            isBlock: true,
            type: "struct",
            storageClassType: "SelfManagedKafkaAccessConfigurationVpcProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipePipeSourceSqsQueueParametersPropertyToTerraform(struct?: CcPipe.PipeSourceSqsQueueParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        batch_size: cdktn.numberToTerraform(struct!.batchSize),
        maximum_batching_window_in_seconds: cdktn.numberToTerraform(struct!.maximumBatchingWindowInSeconds),
    }
}


export function ccPipePipeSourceSqsQueueParametersPropertyToHclTerraform(struct?: CcPipe.PipeSourceSqsQueueParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        batch_size: {
            value: cdktn.numberToHclTerraform(struct!.batchSize),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        maximum_batching_window_in_seconds: {
            value: cdktn.numberToHclTerraform(struct!.maximumBatchingWindowInSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipePipeSourceParametersPropertyToTerraform(struct?: CcPipe.PipeSourceParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        active_mq_broker_parameters: ccPipePipeSourceActiveMQBrokerParametersPropertyToTerraform(struct!.activeMqBrokerParameters),
        dynamo_db_stream_parameters: ccPipePipeSourceDynamoDBStreamParametersPropertyToTerraform(struct!.dynamoDbStreamParameters),
        filter_criteria: ccPipeFilterCriteriaPropertyToTerraform(struct!.filterCriteria),
        kinesis_stream_parameters: ccPipePipeSourceKinesisStreamParametersPropertyToTerraform(struct!.kinesisStreamParameters),
        managed_streaming_kafka_parameters: ccPipePipeSourceManagedStreamingKafkaParametersPropertyToTerraform(struct!.managedStreamingKafkaParameters),
        rabbit_mq_broker_parameters: ccPipePipeSourceRabbitMQBrokerParametersPropertyToTerraform(struct!.rabbitMqBrokerParameters),
        self_managed_kafka_parameters: ccPipePipeSourceSelfManagedKafkaParametersPropertyToTerraform(struct!.selfManagedKafkaParameters),
        sqs_queue_parameters: ccPipePipeSourceSqsQueueParametersPropertyToTerraform(struct!.sqsQueueParameters),
    }
}


export function ccPipePipeSourceParametersPropertyToHclTerraform(struct?: CcPipe.PipeSourceParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        active_mq_broker_parameters: {
            value: ccPipePipeSourceActiveMQBrokerParametersPropertyToHclTerraform(struct!.activeMqBrokerParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "PipeSourceActiveMQBrokerParametersProperty",
        },
        dynamo_db_stream_parameters: {
            value: ccPipePipeSourceDynamoDBStreamParametersPropertyToHclTerraform(struct!.dynamoDbStreamParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "PipeSourceDynamoDBStreamParametersProperty",
        },
        filter_criteria: {
            value: ccPipeFilterCriteriaPropertyToHclTerraform(struct!.filterCriteria),
            isBlock: true,
            type: "struct",
            storageClassType: "FilterCriteriaProperty",
        },
        kinesis_stream_parameters: {
            value: ccPipePipeSourceKinesisStreamParametersPropertyToHclTerraform(struct!.kinesisStreamParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "PipeSourceKinesisStreamParametersProperty",
        },
        managed_streaming_kafka_parameters: {
            value: ccPipePipeSourceManagedStreamingKafkaParametersPropertyToHclTerraform(struct!.managedStreamingKafkaParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "PipeSourceManagedStreamingKafkaParametersProperty",
        },
        rabbit_mq_broker_parameters: {
            value: ccPipePipeSourceRabbitMQBrokerParametersPropertyToHclTerraform(struct!.rabbitMqBrokerParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "PipeSourceRabbitMQBrokerParametersProperty",
        },
        self_managed_kafka_parameters: {
            value: ccPipePipeSourceSelfManagedKafkaParametersPropertyToHclTerraform(struct!.selfManagedKafkaParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "PipeSourceSelfManagedKafkaParametersProperty",
        },
        sqs_queue_parameters: {
            value: ccPipePipeSourceSqsQueueParametersPropertyToHclTerraform(struct!.sqsQueueParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "PipeSourceSqsQueueParametersProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipeBatchArrayPropertiesPropertyToTerraform(struct?: CcPipe.BatchArrayPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        size: cdktn.numberToTerraform(struct!.size),
    }
}


export function ccPipeBatchArrayPropertiesPropertyToHclTerraform(struct?: CcPipe.BatchArrayPropertiesProperty | cdktn.IResolvable): any {
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


export function ccPipeBatchEnvironmentVariablePropertyToTerraform(struct?: CcPipe.BatchEnvironmentVariableProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccPipeBatchEnvironmentVariablePropertyToHclTerraform(struct?: CcPipe.BatchEnvironmentVariableProperty | cdktn.IResolvable): any {
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


export function ccPipeBatchResourceRequirementPropertyToTerraform(struct?: CcPipe.BatchResourceRequirementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        type: cdktn.stringToTerraform(struct!.type),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccPipeBatchResourceRequirementPropertyToHclTerraform(struct?: CcPipe.BatchResourceRequirementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
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


export function ccPipeBatchContainerOverridesPropertyToTerraform(struct?: CcPipe.BatchContainerOverridesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        command: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.command),
        environment: cdktn.listMapper(ccPipeBatchEnvironmentVariablePropertyToTerraform, false)(struct!.environment),
        instance_type: cdktn.stringToTerraform(struct!.instanceType),
        resource_requirements: cdktn.listMapper(ccPipeBatchResourceRequirementPropertyToTerraform, false)(struct!.resourceRequirements),
    }
}


export function ccPipeBatchContainerOverridesPropertyToHclTerraform(struct?: CcPipe.BatchContainerOverridesProperty | cdktn.IResolvable): any {
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
        environment: {
            value: cdktn.listMapperHcl(ccPipeBatchEnvironmentVariablePropertyToHclTerraform, false)(struct!.environment),
            isBlock: true,
            type: "list",
            storageClassType: "BatchEnvironmentVariablePropertyList",
        },
        instance_type: {
            value: cdktn.stringToHclTerraform(struct!.instanceType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        resource_requirements: {
            value: cdktn.listMapperHcl(ccPipeBatchResourceRequirementPropertyToHclTerraform, false)(struct!.resourceRequirements),
            isBlock: true,
            type: "list",
            storageClassType: "BatchResourceRequirementPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipeBatchJobDependencyPropertyToTerraform(struct?: CcPipe.BatchJobDependencyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        job_id: cdktn.stringToTerraform(struct!.jobId),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccPipeBatchJobDependencyPropertyToHclTerraform(struct?: CcPipe.BatchJobDependencyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        job_id: {
            value: cdktn.stringToHclTerraform(struct!.jobId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipeBatchRetryStrategyPropertyToTerraform(struct?: CcPipe.BatchRetryStrategyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        attempts: cdktn.numberToTerraform(struct!.attempts),
    }
}


export function ccPipeBatchRetryStrategyPropertyToHclTerraform(struct?: CcPipe.BatchRetryStrategyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        attempts: {
            value: cdktn.numberToHclTerraform(struct!.attempts),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipePipeTargetBatchJobParametersPropertyToTerraform(struct?: CcPipe.PipeTargetBatchJobParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        array_properties: ccPipeBatchArrayPropertiesPropertyToTerraform(struct!.arrayProperties),
        container_overrides: ccPipeBatchContainerOverridesPropertyToTerraform(struct!.containerOverrides),
        depends_on: cdktn.listMapper(ccPipeBatchJobDependencyPropertyToTerraform, false)(struct!.dependsOn),
        job_definition: cdktn.stringToTerraform(struct!.jobDefinition),
        job_name: cdktn.stringToTerraform(struct!.jobName),
        parameters: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.parameters),
        retry_strategy: ccPipeBatchRetryStrategyPropertyToTerraform(struct!.retryStrategy),
    }
}


export function ccPipePipeTargetBatchJobParametersPropertyToHclTerraform(struct?: CcPipe.PipeTargetBatchJobParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        array_properties: {
            value: ccPipeBatchArrayPropertiesPropertyToHclTerraform(struct!.arrayProperties),
            isBlock: true,
            type: "struct",
            storageClassType: "BatchArrayPropertiesProperty",
        },
        container_overrides: {
            value: ccPipeBatchContainerOverridesPropertyToHclTerraform(struct!.containerOverrides),
            isBlock: true,
            type: "struct",
            storageClassType: "BatchContainerOverridesProperty",
        },
        depends_on: {
            value: cdktn.listMapperHcl(ccPipeBatchJobDependencyPropertyToHclTerraform, false)(struct!.dependsOn),
            isBlock: true,
            type: "list",
            storageClassType: "BatchJobDependencyPropertyList",
        },
        job_definition: {
            value: cdktn.stringToHclTerraform(struct!.jobDefinition),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        job_name: {
            value: cdktn.stringToHclTerraform(struct!.jobName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        parameters: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.parameters),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        retry_strategy: {
            value: ccPipeBatchRetryStrategyPropertyToHclTerraform(struct!.retryStrategy),
            isBlock: true,
            type: "struct",
            storageClassType: "BatchRetryStrategyProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipePipeTargetCloudWatchLogsParametersPropertyToTerraform(struct?: CcPipe.PipeTargetCloudWatchLogsParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        log_stream_name: cdktn.stringToTerraform(struct!.logStreamName),
        timestamp: cdktn.stringToTerraform(struct!.timestamp),
    }
}


export function ccPipePipeTargetCloudWatchLogsParametersPropertyToHclTerraform(struct?: CcPipe.PipeTargetCloudWatchLogsParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        log_stream_name: {
            value: cdktn.stringToHclTerraform(struct!.logStreamName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        timestamp: {
            value: cdktn.stringToHclTerraform(struct!.timestamp),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipeCapacityProviderStrategyItemPropertyToTerraform(struct?: CcPipe.CapacityProviderStrategyItemProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        base: cdktn.numberToTerraform(struct!.base),
        capacity_provider: cdktn.stringToTerraform(struct!.capacityProvider),
        weight: cdktn.numberToTerraform(struct!.weight),
    }
}


export function ccPipeCapacityProviderStrategyItemPropertyToHclTerraform(struct?: CcPipe.CapacityProviderStrategyItemProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        base: {
            value: cdktn.numberToHclTerraform(struct!.base),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        capacity_provider: {
            value: cdktn.stringToHclTerraform(struct!.capacityProvider),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        weight: {
            value: cdktn.numberToHclTerraform(struct!.weight),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipeAwsVpcConfigurationPropertyToTerraform(struct?: CcPipe.AwsVpcConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        assign_public_ip: cdktn.stringToTerraform(struct!.assignPublicIp),
        security_groups: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroups),
        subnets: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnets),
    }
}


export function ccPipeAwsVpcConfigurationPropertyToHclTerraform(struct?: CcPipe.AwsVpcConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        assign_public_ip: {
            value: cdktn.stringToHclTerraform(struct!.assignPublicIp),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        security_groups: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.securityGroups),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        subnets: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.subnets),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipeNetworkConfigurationPropertyToTerraform(struct?: CcPipe.NetworkConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        awsvpc_configuration: ccPipeAwsVpcConfigurationPropertyToTerraform(struct!.awsvpcConfiguration),
    }
}


export function ccPipeNetworkConfigurationPropertyToHclTerraform(struct?: CcPipe.NetworkConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        awsvpc_configuration: {
            value: ccPipeAwsVpcConfigurationPropertyToHclTerraform(struct!.awsvpcConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "AwsVpcConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipeEcsEnvironmentVariablePropertyToTerraform(struct?: CcPipe.EcsEnvironmentVariableProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccPipeEcsEnvironmentVariablePropertyToHclTerraform(struct?: CcPipe.EcsEnvironmentVariableProperty | cdktn.IResolvable): any {
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


export function ccPipeEcsEnvironmentFilePropertyToTerraform(struct?: CcPipe.EcsEnvironmentFileProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        type: cdktn.stringToTerraform(struct!.type),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccPipeEcsEnvironmentFilePropertyToHclTerraform(struct?: CcPipe.EcsEnvironmentFileProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
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


export function ccPipeEcsResourceRequirementPropertyToTerraform(struct?: CcPipe.EcsResourceRequirementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        type: cdktn.stringToTerraform(struct!.type),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccPipeEcsResourceRequirementPropertyToHclTerraform(struct?: CcPipe.EcsResourceRequirementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
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


export function ccPipeEcsContainerOverridePropertyToTerraform(struct?: CcPipe.EcsContainerOverrideProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        command: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.command),
        cpu: cdktn.numberToTerraform(struct!.cpu),
        environment: cdktn.listMapper(ccPipeEcsEnvironmentVariablePropertyToTerraform, false)(struct!.environment),
        environment_files: cdktn.listMapper(ccPipeEcsEnvironmentFilePropertyToTerraform, false)(struct!.environmentFiles),
        memory: cdktn.numberToTerraform(struct!.memory),
        memory_reservation: cdktn.numberToTerraform(struct!.memoryReservation),
        name: cdktn.stringToTerraform(struct!.name),
        resource_requirements: cdktn.listMapper(ccPipeEcsResourceRequirementPropertyToTerraform, false)(struct!.resourceRequirements),
    }
}


export function ccPipeEcsContainerOverridePropertyToHclTerraform(struct?: CcPipe.EcsContainerOverrideProperty | cdktn.IResolvable): any {
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
        cpu: {
            value: cdktn.numberToHclTerraform(struct!.cpu),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        environment: {
            value: cdktn.listMapperHcl(ccPipeEcsEnvironmentVariablePropertyToHclTerraform, false)(struct!.environment),
            isBlock: true,
            type: "list",
            storageClassType: "EcsEnvironmentVariablePropertyList",
        },
        environment_files: {
            value: cdktn.listMapperHcl(ccPipeEcsEnvironmentFilePropertyToHclTerraform, false)(struct!.environmentFiles),
            isBlock: true,
            type: "list",
            storageClassType: "EcsEnvironmentFilePropertyList",
        },
        memory: {
            value: cdktn.numberToHclTerraform(struct!.memory),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        memory_reservation: {
            value: cdktn.numberToHclTerraform(struct!.memoryReservation),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        resource_requirements: {
            value: cdktn.listMapperHcl(ccPipeEcsResourceRequirementPropertyToHclTerraform, false)(struct!.resourceRequirements),
            isBlock: true,
            type: "list",
            storageClassType: "EcsResourceRequirementPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipeEcsEphemeralStoragePropertyToTerraform(struct?: CcPipe.EcsEphemeralStorageProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        size_in_gi_b: cdktn.numberToTerraform(struct!.sizeInGiB),
    }
}


export function ccPipeEcsEphemeralStoragePropertyToHclTerraform(struct?: CcPipe.EcsEphemeralStorageProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        size_in_gi_b: {
            value: cdktn.numberToHclTerraform(struct!.sizeInGiB),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipeEcsInferenceAcceleratorOverridePropertyToTerraform(struct?: CcPipe.EcsInferenceAcceleratorOverrideProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        device_name: cdktn.stringToTerraform(struct!.deviceName),
        device_type: cdktn.stringToTerraform(struct!.deviceType),
    }
}


export function ccPipeEcsInferenceAcceleratorOverridePropertyToHclTerraform(struct?: CcPipe.EcsInferenceAcceleratorOverrideProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        device_name: {
            value: cdktn.stringToHclTerraform(struct!.deviceName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        device_type: {
            value: cdktn.stringToHclTerraform(struct!.deviceType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipeEcsTaskOverridePropertyToTerraform(struct?: CcPipe.EcsTaskOverrideProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        container_overrides: cdktn.listMapper(ccPipeEcsContainerOverridePropertyToTerraform, false)(struct!.containerOverrides),
        cpu: cdktn.stringToTerraform(struct!.cpu),
        ephemeral_storage: ccPipeEcsEphemeralStoragePropertyToTerraform(struct!.ephemeralStorage),
        execution_role_arn: cdktn.stringToTerraform(struct!.executionRoleArn),
        inference_accelerator_overrides: cdktn.listMapper(ccPipeEcsInferenceAcceleratorOverridePropertyToTerraform, false)(struct!.inferenceAcceleratorOverrides),
        memory: cdktn.stringToTerraform(struct!.memory),
        task_role_arn: cdktn.stringToTerraform(struct!.taskRoleArn),
    }
}


export function ccPipeEcsTaskOverridePropertyToHclTerraform(struct?: CcPipe.EcsTaskOverrideProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        container_overrides: {
            value: cdktn.listMapperHcl(ccPipeEcsContainerOverridePropertyToHclTerraform, false)(struct!.containerOverrides),
            isBlock: true,
            type: "list",
            storageClassType: "EcsContainerOverridePropertyList",
        },
        cpu: {
            value: cdktn.stringToHclTerraform(struct!.cpu),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ephemeral_storage: {
            value: ccPipeEcsEphemeralStoragePropertyToHclTerraform(struct!.ephemeralStorage),
            isBlock: true,
            type: "struct",
            storageClassType: "EcsEphemeralStorageProperty",
        },
        execution_role_arn: {
            value: cdktn.stringToHclTerraform(struct!.executionRoleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        inference_accelerator_overrides: {
            value: cdktn.listMapperHcl(ccPipeEcsInferenceAcceleratorOverridePropertyToHclTerraform, false)(struct!.inferenceAcceleratorOverrides),
            isBlock: true,
            type: "list",
            storageClassType: "EcsInferenceAcceleratorOverridePropertyList",
        },
        memory: {
            value: cdktn.stringToHclTerraform(struct!.memory),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        task_role_arn: {
            value: cdktn.stringToHclTerraform(struct!.taskRoleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipePlacementConstraintPropertyToTerraform(struct?: CcPipe.PlacementConstraintProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        expression: cdktn.stringToTerraform(struct!.expression),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccPipePlacementConstraintPropertyToHclTerraform(struct?: CcPipe.PlacementConstraintProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        expression: {
            value: cdktn.stringToHclTerraform(struct!.expression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipePlacementStrategyPropertyToTerraform(struct?: CcPipe.PlacementStrategyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        field: cdktn.stringToTerraform(struct!.field),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccPipePlacementStrategyPropertyToHclTerraform(struct?: CcPipe.PlacementStrategyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        field: {
            value: cdktn.stringToHclTerraform(struct!.field),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipeTagPropertyToTerraform(struct?: CcPipe.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccPipeTagPropertyToHclTerraform(struct?: CcPipe.TagProperty | cdktn.IResolvable): any {
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


export function ccPipePipeTargetEcsTaskParametersPropertyToTerraform(struct?: CcPipe.PipeTargetEcsTaskParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        capacity_provider_strategy: cdktn.listMapper(ccPipeCapacityProviderStrategyItemPropertyToTerraform, false)(struct!.capacityProviderStrategy),
        enable_ecs_managed_tags: cdktn.booleanToTerraform(struct!.enableEcsManagedTags),
        enable_execute_command: cdktn.booleanToTerraform(struct!.enableExecuteCommand),
        group: cdktn.stringToTerraform(struct!.group),
        launch_type: cdktn.stringToTerraform(struct!.launchType),
        network_configuration: ccPipeNetworkConfigurationPropertyToTerraform(struct!.networkConfiguration),
        overrides: ccPipeEcsTaskOverridePropertyToTerraform(struct!.overrides),
        placement_constraints: cdktn.listMapper(ccPipePlacementConstraintPropertyToTerraform, false)(struct!.placementConstraints),
        placement_strategy: cdktn.listMapper(ccPipePlacementStrategyPropertyToTerraform, false)(struct!.placementStrategy),
        platform_version: cdktn.stringToTerraform(struct!.platformVersion),
        propagate_tags: cdktn.stringToTerraform(struct!.propagateTags),
        reference_id: cdktn.stringToTerraform(struct!.referenceId),
        tags: cdktn.listMapper(ccPipeTagPropertyToTerraform, false)(struct!.tags),
        task_count: cdktn.numberToTerraform(struct!.taskCount),
        task_definition_arn: cdktn.stringToTerraform(struct!.taskDefinitionArn),
    }
}


export function ccPipePipeTargetEcsTaskParametersPropertyToHclTerraform(struct?: CcPipe.PipeTargetEcsTaskParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        capacity_provider_strategy: {
            value: cdktn.listMapperHcl(ccPipeCapacityProviderStrategyItemPropertyToHclTerraform, false)(struct!.capacityProviderStrategy),
            isBlock: true,
            type: "list",
            storageClassType: "CapacityProviderStrategyItemPropertyList",
        },
        enable_ecs_managed_tags: {
            value: cdktn.booleanToHclTerraform(struct!.enableEcsManagedTags),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        enable_execute_command: {
            value: cdktn.booleanToHclTerraform(struct!.enableExecuteCommand),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        group: {
            value: cdktn.stringToHclTerraform(struct!.group),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        launch_type: {
            value: cdktn.stringToHclTerraform(struct!.launchType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        network_configuration: {
            value: ccPipeNetworkConfigurationPropertyToHclTerraform(struct!.networkConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "NetworkConfigurationProperty",
        },
        overrides: {
            value: ccPipeEcsTaskOverridePropertyToHclTerraform(struct!.overrides),
            isBlock: true,
            type: "struct",
            storageClassType: "EcsTaskOverrideProperty",
        },
        placement_constraints: {
            value: cdktn.listMapperHcl(ccPipePlacementConstraintPropertyToHclTerraform, false)(struct!.placementConstraints),
            isBlock: true,
            type: "list",
            storageClassType: "PlacementConstraintPropertyList",
        },
        placement_strategy: {
            value: cdktn.listMapperHcl(ccPipePlacementStrategyPropertyToHclTerraform, false)(struct!.placementStrategy),
            isBlock: true,
            type: "list",
            storageClassType: "PlacementStrategyPropertyList",
        },
        platform_version: {
            value: cdktn.stringToHclTerraform(struct!.platformVersion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        propagate_tags: {
            value: cdktn.stringToHclTerraform(struct!.propagateTags),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        reference_id: {
            value: cdktn.stringToHclTerraform(struct!.referenceId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        tags: {
            value: cdktn.listMapperHcl(ccPipeTagPropertyToHclTerraform, false)(struct!.tags),
            isBlock: true,
            type: "list",
            storageClassType: "TagPropertyList",
        },
        task_count: {
            value: cdktn.numberToHclTerraform(struct!.taskCount),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        task_definition_arn: {
            value: cdktn.stringToHclTerraform(struct!.taskDefinitionArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipePipeTargetEventBridgeEventBusParametersPropertyToTerraform(struct?: CcPipe.PipeTargetEventBridgeEventBusParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        detail_type: cdktn.stringToTerraform(struct!.detailType),
        endpoint_id: cdktn.stringToTerraform(struct!.endpointId),
        resources: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resources),
        source: cdktn.stringToTerraform(struct!.source),
        time: cdktn.stringToTerraform(struct!.time),
    }
}


export function ccPipePipeTargetEventBridgeEventBusParametersPropertyToHclTerraform(struct?: CcPipe.PipeTargetEventBridgeEventBusParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        detail_type: {
            value: cdktn.stringToHclTerraform(struct!.detailType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        endpoint_id: {
            value: cdktn.stringToHclTerraform(struct!.endpointId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        resources: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resources),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        source: {
            value: cdktn.stringToHclTerraform(struct!.source),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        time: {
            value: cdktn.stringToHclTerraform(struct!.time),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipePipeTargetHttpParametersPropertyToTerraform(struct?: CcPipe.PipeTargetHttpParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        header_parameters: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.headerParameters),
        path_parameter_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.pathParameterValues),
        query_string_parameters: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.queryStringParameters),
    }
}


export function ccPipePipeTargetHttpParametersPropertyToHclTerraform(struct?: CcPipe.PipeTargetHttpParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        header_parameters: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.headerParameters),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        path_parameter_values: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.pathParameterValues),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        query_string_parameters: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.queryStringParameters),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipePipeTargetKinesisStreamParametersPropertyToTerraform(struct?: CcPipe.PipeTargetKinesisStreamParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        partition_key: cdktn.stringToTerraform(struct!.partitionKey),
    }
}


export function ccPipePipeTargetKinesisStreamParametersPropertyToHclTerraform(struct?: CcPipe.PipeTargetKinesisStreamParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        partition_key: {
            value: cdktn.stringToHclTerraform(struct!.partitionKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipePipeTargetLambdaFunctionParametersPropertyToTerraform(struct?: CcPipe.PipeTargetLambdaFunctionParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        invocation_type: cdktn.stringToTerraform(struct!.invocationType),
    }
}


export function ccPipePipeTargetLambdaFunctionParametersPropertyToHclTerraform(struct?: CcPipe.PipeTargetLambdaFunctionParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        invocation_type: {
            value: cdktn.stringToHclTerraform(struct!.invocationType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipePipeTargetRedshiftDataParametersPropertyToTerraform(struct?: CcPipe.PipeTargetRedshiftDataParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        database: cdktn.stringToTerraform(struct!.database),
        db_user: cdktn.stringToTerraform(struct!.dbUser),
        secret_manager_arn: cdktn.stringToTerraform(struct!.secretManagerArn),
        sqls: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sqls),
        statement_name: cdktn.stringToTerraform(struct!.statementName),
        with_event: cdktn.booleanToTerraform(struct!.withEvent),
    }
}


export function ccPipePipeTargetRedshiftDataParametersPropertyToHclTerraform(struct?: CcPipe.PipeTargetRedshiftDataParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        database: {
            value: cdktn.stringToHclTerraform(struct!.database),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        db_user: {
            value: cdktn.stringToHclTerraform(struct!.dbUser),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secret_manager_arn: {
            value: cdktn.stringToHclTerraform(struct!.secretManagerArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sqls: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sqls),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        statement_name: {
            value: cdktn.stringToHclTerraform(struct!.statementName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        with_event: {
            value: cdktn.booleanToHclTerraform(struct!.withEvent),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipeSageMakerPipelineParameterPropertyToTerraform(struct?: CcPipe.SageMakerPipelineParameterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccPipeSageMakerPipelineParameterPropertyToHclTerraform(struct?: CcPipe.SageMakerPipelineParameterProperty | cdktn.IResolvable): any {
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


export function ccPipePipeTargetSageMakerPipelineParametersPropertyToTerraform(struct?: CcPipe.PipeTargetSageMakerPipelineParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        pipeline_parameter_list: cdktn.listMapper(ccPipeSageMakerPipelineParameterPropertyToTerraform, false)(struct!.pipelineParameterList),
    }
}


export function ccPipePipeTargetSageMakerPipelineParametersPropertyToHclTerraform(struct?: CcPipe.PipeTargetSageMakerPipelineParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        pipeline_parameter_list: {
            value: cdktn.listMapperHcl(ccPipeSageMakerPipelineParameterPropertyToHclTerraform, false)(struct!.pipelineParameterList),
            isBlock: true,
            type: "list",
            storageClassType: "SageMakerPipelineParameterPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipePipeTargetSqsQueueParametersPropertyToTerraform(struct?: CcPipe.PipeTargetSqsQueueParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        message_deduplication_id: cdktn.stringToTerraform(struct!.messageDeduplicationId),
        message_group_id: cdktn.stringToTerraform(struct!.messageGroupId),
    }
}


export function ccPipePipeTargetSqsQueueParametersPropertyToHclTerraform(struct?: CcPipe.PipeTargetSqsQueueParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        message_deduplication_id: {
            value: cdktn.stringToHclTerraform(struct!.messageDeduplicationId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        message_group_id: {
            value: cdktn.stringToHclTerraform(struct!.messageGroupId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipePipeTargetStateMachineParametersPropertyToTerraform(struct?: CcPipe.PipeTargetStateMachineParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        invocation_type: cdktn.stringToTerraform(struct!.invocationType),
    }
}


export function ccPipePipeTargetStateMachineParametersPropertyToHclTerraform(struct?: CcPipe.PipeTargetStateMachineParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        invocation_type: {
            value: cdktn.stringToHclTerraform(struct!.invocationType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipeDimensionMappingPropertyToTerraform(struct?: CcPipe.DimensionMappingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dimension_name: cdktn.stringToTerraform(struct!.dimensionName),
        dimension_value: cdktn.stringToTerraform(struct!.dimensionValue),
        dimension_value_type: cdktn.stringToTerraform(struct!.dimensionValueType),
    }
}


export function ccPipeDimensionMappingPropertyToHclTerraform(struct?: CcPipe.DimensionMappingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        dimension_name: {
            value: cdktn.stringToHclTerraform(struct!.dimensionName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        dimension_value: {
            value: cdktn.stringToHclTerraform(struct!.dimensionValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        dimension_value_type: {
            value: cdktn.stringToHclTerraform(struct!.dimensionValueType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipeMultiMeasureAttributeMappingPropertyToTerraform(struct?: CcPipe.MultiMeasureAttributeMappingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        measure_value: cdktn.stringToTerraform(struct!.measureValue),
        measure_value_type: cdktn.stringToTerraform(struct!.measureValueType),
        multi_measure_attribute_name: cdktn.stringToTerraform(struct!.multiMeasureAttributeName),
    }
}


export function ccPipeMultiMeasureAttributeMappingPropertyToHclTerraform(struct?: CcPipe.MultiMeasureAttributeMappingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        measure_value: {
            value: cdktn.stringToHclTerraform(struct!.measureValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        measure_value_type: {
            value: cdktn.stringToHclTerraform(struct!.measureValueType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        multi_measure_attribute_name: {
            value: cdktn.stringToHclTerraform(struct!.multiMeasureAttributeName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipeMultiMeasureMappingPropertyToTerraform(struct?: CcPipe.MultiMeasureMappingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        multi_measure_attribute_mappings: cdktn.listMapper(ccPipeMultiMeasureAttributeMappingPropertyToTerraform, false)(struct!.multiMeasureAttributeMappings),
        multi_measure_name: cdktn.stringToTerraform(struct!.multiMeasureName),
    }
}


export function ccPipeMultiMeasureMappingPropertyToHclTerraform(struct?: CcPipe.MultiMeasureMappingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        multi_measure_attribute_mappings: {
            value: cdktn.listMapperHcl(ccPipeMultiMeasureAttributeMappingPropertyToHclTerraform, false)(struct!.multiMeasureAttributeMappings),
            isBlock: true,
            type: "list",
            storageClassType: "MultiMeasureAttributeMappingPropertyList",
        },
        multi_measure_name: {
            value: cdktn.stringToHclTerraform(struct!.multiMeasureName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipeSingleMeasureMappingPropertyToTerraform(struct?: CcPipe.SingleMeasureMappingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        measure_name: cdktn.stringToTerraform(struct!.measureName),
        measure_value: cdktn.stringToTerraform(struct!.measureValue),
        measure_value_type: cdktn.stringToTerraform(struct!.measureValueType),
    }
}


export function ccPipeSingleMeasureMappingPropertyToHclTerraform(struct?: CcPipe.SingleMeasureMappingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        measure_name: {
            value: cdktn.stringToHclTerraform(struct!.measureName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        measure_value: {
            value: cdktn.stringToHclTerraform(struct!.measureValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        measure_value_type: {
            value: cdktn.stringToHclTerraform(struct!.measureValueType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipePipeTargetTimestreamParametersPropertyToTerraform(struct?: CcPipe.PipeTargetTimestreamParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dimension_mappings: cdktn.listMapper(ccPipeDimensionMappingPropertyToTerraform, false)(struct!.dimensionMappings),
        epoch_time_unit: cdktn.stringToTerraform(struct!.epochTimeUnit),
        multi_measure_mappings: cdktn.listMapper(ccPipeMultiMeasureMappingPropertyToTerraform, false)(struct!.multiMeasureMappings),
        single_measure_mappings: cdktn.listMapper(ccPipeSingleMeasureMappingPropertyToTerraform, false)(struct!.singleMeasureMappings),
        time_field_type: cdktn.stringToTerraform(struct!.timeFieldType),
        time_value: cdktn.stringToTerraform(struct!.timeValue),
        timestamp_format: cdktn.stringToTerraform(struct!.timestampFormat),
        version_value: cdktn.stringToTerraform(struct!.versionValue),
    }
}


export function ccPipePipeTargetTimestreamParametersPropertyToHclTerraform(struct?: CcPipe.PipeTargetTimestreamParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        dimension_mappings: {
            value: cdktn.listMapperHcl(ccPipeDimensionMappingPropertyToHclTerraform, false)(struct!.dimensionMappings),
            isBlock: true,
            type: "list",
            storageClassType: "DimensionMappingPropertyList",
        },
        epoch_time_unit: {
            value: cdktn.stringToHclTerraform(struct!.epochTimeUnit),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        multi_measure_mappings: {
            value: cdktn.listMapperHcl(ccPipeMultiMeasureMappingPropertyToHclTerraform, false)(struct!.multiMeasureMappings),
            isBlock: true,
            type: "list",
            storageClassType: "MultiMeasureMappingPropertyList",
        },
        single_measure_mappings: {
            value: cdktn.listMapperHcl(ccPipeSingleMeasureMappingPropertyToHclTerraform, false)(struct!.singleMeasureMappings),
            isBlock: true,
            type: "list",
            storageClassType: "SingleMeasureMappingPropertyList",
        },
        time_field_type: {
            value: cdktn.stringToHclTerraform(struct!.timeFieldType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        time_value: {
            value: cdktn.stringToHclTerraform(struct!.timeValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        timestamp_format: {
            value: cdktn.stringToHclTerraform(struct!.timestampFormat),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        version_value: {
            value: cdktn.stringToHclTerraform(struct!.versionValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipePipeTargetParametersPropertyToTerraform(struct?: CcPipe.PipeTargetParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        batch_job_parameters: ccPipePipeTargetBatchJobParametersPropertyToTerraform(struct!.batchJobParameters),
        cloudwatch_logs_parameters: ccPipePipeTargetCloudWatchLogsParametersPropertyToTerraform(struct!.cloudwatchLogsParameters),
        ecs_task_parameters: ccPipePipeTargetEcsTaskParametersPropertyToTerraform(struct!.ecsTaskParameters),
        event_bridge_event_bus_parameters: ccPipePipeTargetEventBridgeEventBusParametersPropertyToTerraform(struct!.eventBridgeEventBusParameters),
        http_parameters: ccPipePipeTargetHttpParametersPropertyToTerraform(struct!.httpParameters),
        input_template: cdktn.stringToTerraform(struct!.inputTemplate),
        kinesis_stream_parameters: ccPipePipeTargetKinesisStreamParametersPropertyToTerraform(struct!.kinesisStreamParameters),
        lambda_function_parameters: ccPipePipeTargetLambdaFunctionParametersPropertyToTerraform(struct!.lambdaFunctionParameters),
        redshift_data_parameters: ccPipePipeTargetRedshiftDataParametersPropertyToTerraform(struct!.redshiftDataParameters),
        sage_maker_pipeline_parameters: ccPipePipeTargetSageMakerPipelineParametersPropertyToTerraform(struct!.sageMakerPipelineParameters),
        sqs_queue_parameters: ccPipePipeTargetSqsQueueParametersPropertyToTerraform(struct!.sqsQueueParameters),
        step_function_state_machine_parameters: ccPipePipeTargetStateMachineParametersPropertyToTerraform(struct!.stepFunctionStateMachineParameters),
        timestream_parameters: ccPipePipeTargetTimestreamParametersPropertyToTerraform(struct!.timestreamParameters),
    }
}


export function ccPipePipeTargetParametersPropertyToHclTerraform(struct?: CcPipe.PipeTargetParametersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        batch_job_parameters: {
            value: ccPipePipeTargetBatchJobParametersPropertyToHclTerraform(struct!.batchJobParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "PipeTargetBatchJobParametersProperty",
        },
        cloudwatch_logs_parameters: {
            value: ccPipePipeTargetCloudWatchLogsParametersPropertyToHclTerraform(struct!.cloudwatchLogsParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "PipeTargetCloudWatchLogsParametersProperty",
        },
        ecs_task_parameters: {
            value: ccPipePipeTargetEcsTaskParametersPropertyToHclTerraform(struct!.ecsTaskParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "PipeTargetEcsTaskParametersProperty",
        },
        event_bridge_event_bus_parameters: {
            value: ccPipePipeTargetEventBridgeEventBusParametersPropertyToHclTerraform(struct!.eventBridgeEventBusParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "PipeTargetEventBridgeEventBusParametersProperty",
        },
        http_parameters: {
            value: ccPipePipeTargetHttpParametersPropertyToHclTerraform(struct!.httpParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "PipeTargetHttpParametersProperty",
        },
        input_template: {
            value: cdktn.stringToHclTerraform(struct!.inputTemplate),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        kinesis_stream_parameters: {
            value: ccPipePipeTargetKinesisStreamParametersPropertyToHclTerraform(struct!.kinesisStreamParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "PipeTargetKinesisStreamParametersProperty",
        },
        lambda_function_parameters: {
            value: ccPipePipeTargetLambdaFunctionParametersPropertyToHclTerraform(struct!.lambdaFunctionParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "PipeTargetLambdaFunctionParametersProperty",
        },
        redshift_data_parameters: {
            value: ccPipePipeTargetRedshiftDataParametersPropertyToHclTerraform(struct!.redshiftDataParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "PipeTargetRedshiftDataParametersProperty",
        },
        sage_maker_pipeline_parameters: {
            value: ccPipePipeTargetSageMakerPipelineParametersPropertyToHclTerraform(struct!.sageMakerPipelineParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "PipeTargetSageMakerPipelineParametersProperty",
        },
        sqs_queue_parameters: {
            value: ccPipePipeTargetSqsQueueParametersPropertyToHclTerraform(struct!.sqsQueueParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "PipeTargetSqsQueueParametersProperty",
        },
        step_function_state_machine_parameters: {
            value: ccPipePipeTargetStateMachineParametersPropertyToHclTerraform(struct!.stepFunctionStateMachineParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "PipeTargetStateMachineParametersProperty",
        },
        timestream_parameters: {
            value: ccPipePipeTargetTimestreamParametersPropertyToHclTerraform(struct!.timestreamParameters),
            isBlock: true,
            type: "struct",
            storageClassType: "PipeTargetTimestreamParametersProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcPipe {
export interface PipeEnrichmentHttpParametersProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#header_parameters CcPipe#header_parameters}
    */
    readonly headerParameters?: { [key: string]: string };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#path_parameter_values CcPipe#path_parameter_values}
    */
    readonly pathParameterValues?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#query_string_parameters CcPipe#query_string_parameters}
    */
    readonly queryStringParameters?: { [key: string]: string };
}
export class PipeEnrichmentHttpParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PipeEnrichmentHttpParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._headerParameters !== undefined) {
            hasAnyValues = true;
            internalValueResult.headerParameters = this._headerParameters;
        }
        if (this._pathParameterValues !== undefined) {
            hasAnyValues = true;
            internalValueResult.pathParameterValues = this._pathParameterValues;
        }
        if (this._queryStringParameters !== undefined) {
            hasAnyValues = true;
            internalValueResult.queryStringParameters = this._queryStringParameters;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PipeEnrichmentHttpParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._headerParameters = undefined;
            this._pathParameterValues = undefined;
            this._queryStringParameters = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._headerParameters = value.headerParameters;
            this._pathParameterValues = value.pathParameterValues;
            this._queryStringParameters = value.queryStringParameters;
        }
    }

    // header_parameters - computed: true, optional: true, required: false
    private _headerParameters?: { [key: string]: string }; 
    public get headerParameters() {
        return this.getStringMapAttribute('header_parameters');
    }
    public set headerParameters(value: { [key: string]: string }) {
        this._headerParameters = value;
    }
    public resetHeaderParameters() {
        this._headerParameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get headerParametersInput() {
        return this._headerParameters;
    }

    // path_parameter_values - computed: true, optional: true, required: false
    private _pathParameterValues?: string[]; 
    public get pathParameterValues() {
        return this.getListAttribute('path_parameter_values');
    }
    public set pathParameterValues(value: string[]) {
        this._pathParameterValues = value;
    }
    public resetPathParameterValues() {
        this._pathParameterValues = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pathParameterValuesInput() {
        return this._pathParameterValues;
    }

    // query_string_parameters - computed: true, optional: true, required: false
    private _queryStringParameters?: { [key: string]: string }; 
    public get queryStringParameters() {
        return this.getStringMapAttribute('query_string_parameters');
    }
    public set queryStringParameters(value: { [key: string]: string }) {
        this._queryStringParameters = value;
    }
    public resetQueryStringParameters() {
        this._queryStringParameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get queryStringParametersInput() {
        return this._queryStringParameters;
    }
}
export interface PipeEnrichmentParametersProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#http_parameters CcPipe#http_parameters}
    */
    readonly httpParameters?: PipeEnrichmentHttpParametersProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#input_template CcPipe#input_template}
    */
    readonly inputTemplate?: string;
}
export class PipeEnrichmentParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PipeEnrichmentParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._httpParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.httpParameters = this._httpParameters?.internalValue;
        }
        if (this._inputTemplate !== undefined) {
            hasAnyValues = true;
            internalValueResult.inputTemplate = this._inputTemplate;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PipeEnrichmentParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._httpParameters.internalValue = undefined;
            this._inputTemplate = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._httpParameters.internalValue = value.httpParameters;
            this._inputTemplate = value.inputTemplate;
        }
    }

    // http_parameters - computed: true, optional: true, required: false
    private _httpParameters = new PipeEnrichmentHttpParametersPropertyOutputReference(this, "http_parameters");
    public get httpParameters() {
        return this._httpParameters;
    }
    public putHttpParameters(value: PipeEnrichmentHttpParametersProperty) {
        this._httpParameters.internalValue = value;
    }
    public resetHttpParameters() {
        this._httpParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get httpParametersInput() {
        return this._httpParameters.internalValue;
    }

    // input_template - computed: true, optional: true, required: false
    private _inputTemplate?: string; 
    public get inputTemplate() {
        return this.getStringAttribute('input_template');
    }
    public set inputTemplate(value: string) {
        this._inputTemplate = value;
    }
    public resetInputTemplate() {
        this._inputTemplate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputTemplateInput() {
        return this._inputTemplate;
    }
}
export interface CloudwatchLogsLogDestinationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#log_group_arn CcPipe#log_group_arn}
    */
    readonly logGroupArn?: string;
}
export class CloudwatchLogsLogDestinationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CloudwatchLogsLogDestinationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._logGroupArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.logGroupArn = this._logGroupArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CloudwatchLogsLogDestinationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._logGroupArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._logGroupArn = value.logGroupArn;
        }
    }

    // log_group_arn - computed: true, optional: true, required: false
    private _logGroupArn?: string; 
    public get logGroupArn() {
        return this.getStringAttribute('log_group_arn');
    }
    public set logGroupArn(value: string) {
        this._logGroupArn = value;
    }
    public resetLogGroupArn() {
        this._logGroupArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logGroupArnInput() {
        return this._logGroupArn;
    }
}
export interface FirehoseLogDestinationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#delivery_stream_arn CcPipe#delivery_stream_arn}
    */
    readonly deliveryStreamArn?: string;
}
export class FirehoseLogDestinationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FirehoseLogDestinationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._deliveryStreamArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.deliveryStreamArn = this._deliveryStreamArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FirehoseLogDestinationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._deliveryStreamArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._deliveryStreamArn = value.deliveryStreamArn;
        }
    }

    // delivery_stream_arn - computed: true, optional: true, required: false
    private _deliveryStreamArn?: string; 
    public get deliveryStreamArn() {
        return this.getStringAttribute('delivery_stream_arn');
    }
    public set deliveryStreamArn(value: string) {
        this._deliveryStreamArn = value;
    }
    public resetDeliveryStreamArn() {
        this._deliveryStreamArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deliveryStreamArnInput() {
        return this._deliveryStreamArn;
    }
}
export interface S3LogDestinationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#bucket_name CcPipe#bucket_name}
    */
    readonly bucketName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#bucket_owner CcPipe#bucket_owner}
    */
    readonly bucketOwner?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#output_format CcPipe#output_format}
    */
    readonly outputFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#prefix CcPipe#prefix}
    */
    readonly prefix?: string;
}
export class S3LogDestinationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3LogDestinationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bucketName !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketName = this._bucketName;
        }
        if (this._bucketOwner !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketOwner = this._bucketOwner;
        }
        if (this._outputFormat !== undefined) {
            hasAnyValues = true;
            internalValueResult.outputFormat = this._outputFormat;
        }
        if (this._prefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.prefix = this._prefix;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3LogDestinationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bucketName = undefined;
            this._bucketOwner = undefined;
            this._outputFormat = undefined;
            this._prefix = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bucketName = value.bucketName;
            this._bucketOwner = value.bucketOwner;
            this._outputFormat = value.outputFormat;
            this._prefix = value.prefix;
        }
    }

    // bucket_name - computed: true, optional: true, required: false
    private _bucketName?: string; 
    public get bucketName() {
        return this.getStringAttribute('bucket_name');
    }
    public set bucketName(value: string) {
        this._bucketName = value;
    }
    public resetBucketName() {
        this._bucketName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketNameInput() {
        return this._bucketName;
    }

    // bucket_owner - computed: true, optional: true, required: false
    private _bucketOwner?: string; 
    public get bucketOwner() {
        return this.getStringAttribute('bucket_owner');
    }
    public set bucketOwner(value: string) {
        this._bucketOwner = value;
    }
    public resetBucketOwner() {
        this._bucketOwner = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketOwnerInput() {
        return this._bucketOwner;
    }

    // output_format - computed: true, optional: true, required: false
    private _outputFormat?: string; 
    public get outputFormat() {
        return this.getStringAttribute('output_format');
    }
    public set outputFormat(value: string) {
        this._outputFormat = value;
    }
    public resetOutputFormat() {
        this._outputFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outputFormatInput() {
        return this._outputFormat;
    }

    // prefix - computed: true, optional: true, required: false
    private _prefix?: string; 
    public get prefix() {
        return this.getStringAttribute('prefix');
    }
    public set prefix(value: string) {
        this._prefix = value;
    }
    public resetPrefix() {
        this._prefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get prefixInput() {
        return this._prefix;
    }
}
export interface PipeLogConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#cloudwatch_logs_log_destination CcPipe#cloudwatch_logs_log_destination}
    */
    readonly cloudwatchLogsLogDestination?: CloudwatchLogsLogDestinationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#firehose_log_destination CcPipe#firehose_log_destination}
    */
    readonly firehoseLogDestination?: FirehoseLogDestinationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#include_execution_data CcPipe#include_execution_data}
    */
    readonly includeExecutionData?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#level CcPipe#level}
    */
    readonly level?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#s3_log_destination CcPipe#s3_log_destination}
    */
    readonly s3LogDestination?: S3LogDestinationProperty;
}
export class PipeLogConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PipeLogConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cloudwatchLogsLogDestination?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.cloudwatchLogsLogDestination = this._cloudwatchLogsLogDestination?.internalValue;
        }
        if (this._firehoseLogDestination?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.firehoseLogDestination = this._firehoseLogDestination?.internalValue;
        }
        if (this._includeExecutionData !== undefined) {
            hasAnyValues = true;
            internalValueResult.includeExecutionData = this._includeExecutionData;
        }
        if (this._level !== undefined) {
            hasAnyValues = true;
            internalValueResult.level = this._level;
        }
        if (this._s3LogDestination?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3LogDestination = this._s3LogDestination?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PipeLogConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cloudwatchLogsLogDestination.internalValue = undefined;
            this._firehoseLogDestination.internalValue = undefined;
            this._includeExecutionData = undefined;
            this._level = undefined;
            this._s3LogDestination.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cloudwatchLogsLogDestination.internalValue = value.cloudwatchLogsLogDestination;
            this._firehoseLogDestination.internalValue = value.firehoseLogDestination;
            this._includeExecutionData = value.includeExecutionData;
            this._level = value.level;
            this._s3LogDestination.internalValue = value.s3LogDestination;
        }
    }

    // cloudwatch_logs_log_destination - computed: true, optional: true, required: false
    private _cloudwatchLogsLogDestination = new CloudwatchLogsLogDestinationPropertyOutputReference(this, "cloudwatch_logs_log_destination");
    public get cloudwatchLogsLogDestination() {
        return this._cloudwatchLogsLogDestination;
    }
    public putCloudwatchLogsLogDestination(value: CloudwatchLogsLogDestinationProperty) {
        this._cloudwatchLogsLogDestination.internalValue = value;
    }
    public resetCloudwatchLogsLogDestination() {
        this._cloudwatchLogsLogDestination.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cloudwatchLogsLogDestinationInput() {
        return this._cloudwatchLogsLogDestination.internalValue;
    }

    // firehose_log_destination - computed: true, optional: true, required: false
    private _firehoseLogDestination = new FirehoseLogDestinationPropertyOutputReference(this, "firehose_log_destination");
    public get firehoseLogDestination() {
        return this._firehoseLogDestination;
    }
    public putFirehoseLogDestination(value: FirehoseLogDestinationProperty) {
        this._firehoseLogDestination.internalValue = value;
    }
    public resetFirehoseLogDestination() {
        this._firehoseLogDestination.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get firehoseLogDestinationInput() {
        return this._firehoseLogDestination.internalValue;
    }

    // include_execution_data - computed: true, optional: true, required: false
    private _includeExecutionData?: string[]; 
    public get includeExecutionData() {
        return this.getListAttribute('include_execution_data');
    }
    public set includeExecutionData(value: string[]) {
        this._includeExecutionData = value;
    }
    public resetIncludeExecutionData() {
        this._includeExecutionData = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get includeExecutionDataInput() {
        return this._includeExecutionData;
    }

    // level - computed: true, optional: true, required: false
    private _level?: string; 
    public get level() {
        return this.getStringAttribute('level');
    }
    public set level(value: string) {
        this._level = value;
    }
    public resetLevel() {
        this._level = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get levelInput() {
        return this._level;
    }

    // s3_log_destination - computed: true, optional: true, required: false
    private _s3LogDestination = new S3LogDestinationPropertyOutputReference(this, "s3_log_destination");
    public get s3LogDestination() {
        return this._s3LogDestination;
    }
    public putS3LogDestination(value: S3LogDestinationProperty) {
        this._s3LogDestination.internalValue = value;
    }
    public resetS3LogDestination() {
        this._s3LogDestination.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3LogDestinationInput() {
        return this._s3LogDestination.internalValue;
    }
}
export interface MQBrokerAccessCredentialsProperty {
    /**
    * Optional SecretManager ARN which stores the database credentials
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#basic_auth CcPipe#basic_auth}
    */
    readonly basicAuth?: string;
}
export class MQBrokerAccessCredentialsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MQBrokerAccessCredentialsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._basicAuth !== undefined) {
            hasAnyValues = true;
            internalValueResult.basicAuth = this._basicAuth;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MQBrokerAccessCredentialsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._basicAuth = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._basicAuth = value.basicAuth;
        }
    }

    // basic_auth - computed: true, optional: true, required: false
    private _basicAuth?: string; 
    public get basicAuth() {
        return this.getStringAttribute('basic_auth');
    }
    public set basicAuth(value: string) {
        this._basicAuth = value;
    }
    public resetBasicAuth() {
        this._basicAuth = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get basicAuthInput() {
        return this._basicAuth;
    }
}
export interface PipeSourceActiveMQBrokerParametersProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#batch_size CcPipe#batch_size}
    */
    readonly batchSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#credentials CcPipe#credentials}
    */
    readonly credentials?: MQBrokerAccessCredentialsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#maximum_batching_window_in_seconds CcPipe#maximum_batching_window_in_seconds}
    */
    readonly maximumBatchingWindowInSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#queue_name CcPipe#queue_name}
    */
    readonly queueName?: string;
}
export class PipeSourceActiveMQBrokerParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PipeSourceActiveMQBrokerParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._batchSize !== undefined) {
            hasAnyValues = true;
            internalValueResult.batchSize = this._batchSize;
        }
        if (this._credentials?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.credentials = this._credentials?.internalValue;
        }
        if (this._maximumBatchingWindowInSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.maximumBatchingWindowInSeconds = this._maximumBatchingWindowInSeconds;
        }
        if (this._queueName !== undefined) {
            hasAnyValues = true;
            internalValueResult.queueName = this._queueName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PipeSourceActiveMQBrokerParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._batchSize = undefined;
            this._credentials.internalValue = undefined;
            this._maximumBatchingWindowInSeconds = undefined;
            this._queueName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._batchSize = value.batchSize;
            this._credentials.internalValue = value.credentials;
            this._maximumBatchingWindowInSeconds = value.maximumBatchingWindowInSeconds;
            this._queueName = value.queueName;
        }
    }

    // batch_size - computed: true, optional: true, required: false
    private _batchSize?: number; 
    public get batchSize() {
        return this.getNumberAttribute('batch_size');
    }
    public set batchSize(value: number) {
        this._batchSize = value;
    }
    public resetBatchSize() {
        this._batchSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get batchSizeInput() {
        return this._batchSize;
    }

    // credentials - computed: true, optional: true, required: false
    private _credentials = new MQBrokerAccessCredentialsPropertyOutputReference(this, "credentials");
    public get credentials() {
        return this._credentials;
    }
    public putCredentials(value: MQBrokerAccessCredentialsProperty) {
        this._credentials.internalValue = value;
    }
    public resetCredentials() {
        this._credentials.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get credentialsInput() {
        return this._credentials.internalValue;
    }

    // maximum_batching_window_in_seconds - computed: true, optional: true, required: false
    private _maximumBatchingWindowInSeconds?: number; 
    public get maximumBatchingWindowInSeconds() {
        return this.getNumberAttribute('maximum_batching_window_in_seconds');
    }
    public set maximumBatchingWindowInSeconds(value: number) {
        this._maximumBatchingWindowInSeconds = value;
    }
    public resetMaximumBatchingWindowInSeconds() {
        this._maximumBatchingWindowInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maximumBatchingWindowInSecondsInput() {
        return this._maximumBatchingWindowInSeconds;
    }

    // queue_name - computed: true, optional: true, required: false
    private _queueName?: string; 
    public get queueName() {
        return this.getStringAttribute('queue_name');
    }
    public set queueName(value: string) {
        this._queueName = value;
    }
    public resetQueueName() {
        this._queueName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get queueNameInput() {
        return this._queueName;
    }
}
export interface DeadLetterConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#arn CcPipe#arn}
    */
    readonly arn?: string;
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
        if (this._arn !== undefined) {
            hasAnyValues = true;
            internalValueResult.arn = this._arn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DeadLetterConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._arn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._arn = value.arn;
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
}
export interface PipeSourceDynamoDBStreamParametersProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#batch_size CcPipe#batch_size}
    */
    readonly batchSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#dead_letter_config CcPipe#dead_letter_config}
    */
    readonly deadLetterConfig?: DeadLetterConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#maximum_batching_window_in_seconds CcPipe#maximum_batching_window_in_seconds}
    */
    readonly maximumBatchingWindowInSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#maximum_record_age_in_seconds CcPipe#maximum_record_age_in_seconds}
    */
    readonly maximumRecordAgeInSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#maximum_retry_attempts CcPipe#maximum_retry_attempts}
    */
    readonly maximumRetryAttempts?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#on_partial_batch_item_failure CcPipe#on_partial_batch_item_failure}
    */
    readonly onPartialBatchItemFailure?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#parallelization_factor CcPipe#parallelization_factor}
    */
    readonly parallelizationFactor?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#starting_position CcPipe#starting_position}
    */
    readonly startingPosition?: string;
}
export class PipeSourceDynamoDBStreamParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PipeSourceDynamoDBStreamParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._batchSize !== undefined) {
            hasAnyValues = true;
            internalValueResult.batchSize = this._batchSize;
        }
        if (this._deadLetterConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.deadLetterConfig = this._deadLetterConfig?.internalValue;
        }
        if (this._maximumBatchingWindowInSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.maximumBatchingWindowInSeconds = this._maximumBatchingWindowInSeconds;
        }
        if (this._maximumRecordAgeInSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.maximumRecordAgeInSeconds = this._maximumRecordAgeInSeconds;
        }
        if (this._maximumRetryAttempts !== undefined) {
            hasAnyValues = true;
            internalValueResult.maximumRetryAttempts = this._maximumRetryAttempts;
        }
        if (this._onPartialBatchItemFailure !== undefined) {
            hasAnyValues = true;
            internalValueResult.onPartialBatchItemFailure = this._onPartialBatchItemFailure;
        }
        if (this._parallelizationFactor !== undefined) {
            hasAnyValues = true;
            internalValueResult.parallelizationFactor = this._parallelizationFactor;
        }
        if (this._startingPosition !== undefined) {
            hasAnyValues = true;
            internalValueResult.startingPosition = this._startingPosition;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PipeSourceDynamoDBStreamParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._batchSize = undefined;
            this._deadLetterConfig.internalValue = undefined;
            this._maximumBatchingWindowInSeconds = undefined;
            this._maximumRecordAgeInSeconds = undefined;
            this._maximumRetryAttempts = undefined;
            this._onPartialBatchItemFailure = undefined;
            this._parallelizationFactor = undefined;
            this._startingPosition = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._batchSize = value.batchSize;
            this._deadLetterConfig.internalValue = value.deadLetterConfig;
            this._maximumBatchingWindowInSeconds = value.maximumBatchingWindowInSeconds;
            this._maximumRecordAgeInSeconds = value.maximumRecordAgeInSeconds;
            this._maximumRetryAttempts = value.maximumRetryAttempts;
            this._onPartialBatchItemFailure = value.onPartialBatchItemFailure;
            this._parallelizationFactor = value.parallelizationFactor;
            this._startingPosition = value.startingPosition;
        }
    }

    // batch_size - computed: true, optional: true, required: false
    private _batchSize?: number; 
    public get batchSize() {
        return this.getNumberAttribute('batch_size');
    }
    public set batchSize(value: number) {
        this._batchSize = value;
    }
    public resetBatchSize() {
        this._batchSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get batchSizeInput() {
        return this._batchSize;
    }

    // dead_letter_config - computed: true, optional: true, required: false
    private _deadLetterConfig = new DeadLetterConfigPropertyOutputReference(this, "dead_letter_config");
    public get deadLetterConfig() {
        return this._deadLetterConfig;
    }
    public putDeadLetterConfig(value: DeadLetterConfigProperty) {
        this._deadLetterConfig.internalValue = value;
    }
    public resetDeadLetterConfig() {
        this._deadLetterConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deadLetterConfigInput() {
        return this._deadLetterConfig.internalValue;
    }

    // maximum_batching_window_in_seconds - computed: true, optional: true, required: false
    private _maximumBatchingWindowInSeconds?: number; 
    public get maximumBatchingWindowInSeconds() {
        return this.getNumberAttribute('maximum_batching_window_in_seconds');
    }
    public set maximumBatchingWindowInSeconds(value: number) {
        this._maximumBatchingWindowInSeconds = value;
    }
    public resetMaximumBatchingWindowInSeconds() {
        this._maximumBatchingWindowInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maximumBatchingWindowInSecondsInput() {
        return this._maximumBatchingWindowInSeconds;
    }

    // maximum_record_age_in_seconds - computed: true, optional: true, required: false
    private _maximumRecordAgeInSeconds?: number; 
    public get maximumRecordAgeInSeconds() {
        return this.getNumberAttribute('maximum_record_age_in_seconds');
    }
    public set maximumRecordAgeInSeconds(value: number) {
        this._maximumRecordAgeInSeconds = value;
    }
    public resetMaximumRecordAgeInSeconds() {
        this._maximumRecordAgeInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maximumRecordAgeInSecondsInput() {
        return this._maximumRecordAgeInSeconds;
    }

    // maximum_retry_attempts - computed: true, optional: true, required: false
    private _maximumRetryAttempts?: number; 
    public get maximumRetryAttempts() {
        return this.getNumberAttribute('maximum_retry_attempts');
    }
    public set maximumRetryAttempts(value: number) {
        this._maximumRetryAttempts = value;
    }
    public resetMaximumRetryAttempts() {
        this._maximumRetryAttempts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maximumRetryAttemptsInput() {
        return this._maximumRetryAttempts;
    }

    // on_partial_batch_item_failure - computed: true, optional: true, required: false
    private _onPartialBatchItemFailure?: string; 
    public get onPartialBatchItemFailure() {
        return this.getStringAttribute('on_partial_batch_item_failure');
    }
    public set onPartialBatchItemFailure(value: string) {
        this._onPartialBatchItemFailure = value;
    }
    public resetOnPartialBatchItemFailure() {
        this._onPartialBatchItemFailure = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get onPartialBatchItemFailureInput() {
        return this._onPartialBatchItemFailure;
    }

    // parallelization_factor - computed: true, optional: true, required: false
    private _parallelizationFactor?: number; 
    public get parallelizationFactor() {
        return this.getNumberAttribute('parallelization_factor');
    }
    public set parallelizationFactor(value: number) {
        this._parallelizationFactor = value;
    }
    public resetParallelizationFactor() {
        this._parallelizationFactor = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parallelizationFactorInput() {
        return this._parallelizationFactor;
    }

    // starting_position - computed: true, optional: true, required: false
    private _startingPosition?: string; 
    public get startingPosition() {
        return this.getStringAttribute('starting_position');
    }
    public set startingPosition(value: string) {
        this._startingPosition = value;
    }
    public resetStartingPosition() {
        this._startingPosition = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startingPositionInput() {
        return this._startingPosition;
    }
}
export interface FilterProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#pattern CcPipe#pattern}
    */
    readonly pattern?: string;
}
export class FilterPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): FilterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._pattern !== undefined) {
            hasAnyValues = true;
            internalValueResult.pattern = this._pattern;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FilterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._pattern = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._pattern = value.pattern;
        }
    }

    // pattern - computed: true, optional: true, required: false
    private _pattern?: string; 
    public get pattern() {
        return this.getStringAttribute('pattern');
    }
    public set pattern(value: string) {
        this._pattern = value;
    }
    public resetPattern() {
        this._pattern = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get patternInput() {
        return this._pattern;
    }
}

export class FilterPropertyList extends cdktn.ComplexList {
    public internalValue? : FilterProperty[] | cdktn.IResolvable

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
    public get(index: number): FilterPropertyOutputReference {
        return new FilterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface FilterCriteriaProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#filters CcPipe#filters}
    */
    readonly filters?: FilterProperty[] | cdktn.IResolvable;
}
export class FilterCriteriaPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FilterCriteriaProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._filters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.filters = this._filters?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FilterCriteriaProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._filters.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._filters.internalValue = value.filters;
        }
    }

    // filters - computed: true, optional: true, required: false
    private _filters = new FilterPropertyList(this, "filters", false);
    public get filters() {
        return this._filters;
    }
    public putFilters(value: FilterProperty[] | cdktn.IResolvable) {
        this._filters.internalValue = value;
    }
    public resetFilters() {
        this._filters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filtersInput() {
        return this._filters.internalValue;
    }
}
export interface SourceParametersKinesisStreamParametersDeadLetterConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#arn CcPipe#arn}
    */
    readonly arn?: string;
}
export class SourceParametersKinesisStreamParametersDeadLetterConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SourceParametersKinesisStreamParametersDeadLetterConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._arn !== undefined) {
            hasAnyValues = true;
            internalValueResult.arn = this._arn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SourceParametersKinesisStreamParametersDeadLetterConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._arn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._arn = value.arn;
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
}
export interface PipeSourceKinesisStreamParametersProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#batch_size CcPipe#batch_size}
    */
    readonly batchSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#dead_letter_config CcPipe#dead_letter_config}
    */
    readonly deadLetterConfig?: SourceParametersKinesisStreamParametersDeadLetterConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#maximum_batching_window_in_seconds CcPipe#maximum_batching_window_in_seconds}
    */
    readonly maximumBatchingWindowInSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#maximum_record_age_in_seconds CcPipe#maximum_record_age_in_seconds}
    */
    readonly maximumRecordAgeInSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#maximum_retry_attempts CcPipe#maximum_retry_attempts}
    */
    readonly maximumRetryAttempts?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#on_partial_batch_item_failure CcPipe#on_partial_batch_item_failure}
    */
    readonly onPartialBatchItemFailure?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#parallelization_factor CcPipe#parallelization_factor}
    */
    readonly parallelizationFactor?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#starting_position CcPipe#starting_position}
    */
    readonly startingPosition?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#starting_position_timestamp CcPipe#starting_position_timestamp}
    */
    readonly startingPositionTimestamp?: string;
}
export class PipeSourceKinesisStreamParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PipeSourceKinesisStreamParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._batchSize !== undefined) {
            hasAnyValues = true;
            internalValueResult.batchSize = this._batchSize;
        }
        if (this._deadLetterConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.deadLetterConfig = this._deadLetterConfig?.internalValue;
        }
        if (this._maximumBatchingWindowInSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.maximumBatchingWindowInSeconds = this._maximumBatchingWindowInSeconds;
        }
        if (this._maximumRecordAgeInSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.maximumRecordAgeInSeconds = this._maximumRecordAgeInSeconds;
        }
        if (this._maximumRetryAttempts !== undefined) {
            hasAnyValues = true;
            internalValueResult.maximumRetryAttempts = this._maximumRetryAttempts;
        }
        if (this._onPartialBatchItemFailure !== undefined) {
            hasAnyValues = true;
            internalValueResult.onPartialBatchItemFailure = this._onPartialBatchItemFailure;
        }
        if (this._parallelizationFactor !== undefined) {
            hasAnyValues = true;
            internalValueResult.parallelizationFactor = this._parallelizationFactor;
        }
        if (this._startingPosition !== undefined) {
            hasAnyValues = true;
            internalValueResult.startingPosition = this._startingPosition;
        }
        if (this._startingPositionTimestamp !== undefined) {
            hasAnyValues = true;
            internalValueResult.startingPositionTimestamp = this._startingPositionTimestamp;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PipeSourceKinesisStreamParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._batchSize = undefined;
            this._deadLetterConfig.internalValue = undefined;
            this._maximumBatchingWindowInSeconds = undefined;
            this._maximumRecordAgeInSeconds = undefined;
            this._maximumRetryAttempts = undefined;
            this._onPartialBatchItemFailure = undefined;
            this._parallelizationFactor = undefined;
            this._startingPosition = undefined;
            this._startingPositionTimestamp = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._batchSize = value.batchSize;
            this._deadLetterConfig.internalValue = value.deadLetterConfig;
            this._maximumBatchingWindowInSeconds = value.maximumBatchingWindowInSeconds;
            this._maximumRecordAgeInSeconds = value.maximumRecordAgeInSeconds;
            this._maximumRetryAttempts = value.maximumRetryAttempts;
            this._onPartialBatchItemFailure = value.onPartialBatchItemFailure;
            this._parallelizationFactor = value.parallelizationFactor;
            this._startingPosition = value.startingPosition;
            this._startingPositionTimestamp = value.startingPositionTimestamp;
        }
    }

    // batch_size - computed: true, optional: true, required: false
    private _batchSize?: number; 
    public get batchSize() {
        return this.getNumberAttribute('batch_size');
    }
    public set batchSize(value: number) {
        this._batchSize = value;
    }
    public resetBatchSize() {
        this._batchSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get batchSizeInput() {
        return this._batchSize;
    }

    // dead_letter_config - computed: true, optional: true, required: false
    private _deadLetterConfig = new SourceParametersKinesisStreamParametersDeadLetterConfigPropertyOutputReference(this, "dead_letter_config");
    public get deadLetterConfig() {
        return this._deadLetterConfig;
    }
    public putDeadLetterConfig(value: SourceParametersKinesisStreamParametersDeadLetterConfigProperty) {
        this._deadLetterConfig.internalValue = value;
    }
    public resetDeadLetterConfig() {
        this._deadLetterConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deadLetterConfigInput() {
        return this._deadLetterConfig.internalValue;
    }

    // maximum_batching_window_in_seconds - computed: true, optional: true, required: false
    private _maximumBatchingWindowInSeconds?: number; 
    public get maximumBatchingWindowInSeconds() {
        return this.getNumberAttribute('maximum_batching_window_in_seconds');
    }
    public set maximumBatchingWindowInSeconds(value: number) {
        this._maximumBatchingWindowInSeconds = value;
    }
    public resetMaximumBatchingWindowInSeconds() {
        this._maximumBatchingWindowInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maximumBatchingWindowInSecondsInput() {
        return this._maximumBatchingWindowInSeconds;
    }

    // maximum_record_age_in_seconds - computed: true, optional: true, required: false
    private _maximumRecordAgeInSeconds?: number; 
    public get maximumRecordAgeInSeconds() {
        return this.getNumberAttribute('maximum_record_age_in_seconds');
    }
    public set maximumRecordAgeInSeconds(value: number) {
        this._maximumRecordAgeInSeconds = value;
    }
    public resetMaximumRecordAgeInSeconds() {
        this._maximumRecordAgeInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maximumRecordAgeInSecondsInput() {
        return this._maximumRecordAgeInSeconds;
    }

    // maximum_retry_attempts - computed: true, optional: true, required: false
    private _maximumRetryAttempts?: number; 
    public get maximumRetryAttempts() {
        return this.getNumberAttribute('maximum_retry_attempts');
    }
    public set maximumRetryAttempts(value: number) {
        this._maximumRetryAttempts = value;
    }
    public resetMaximumRetryAttempts() {
        this._maximumRetryAttempts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maximumRetryAttemptsInput() {
        return this._maximumRetryAttempts;
    }

    // on_partial_batch_item_failure - computed: true, optional: true, required: false
    private _onPartialBatchItemFailure?: string; 
    public get onPartialBatchItemFailure() {
        return this.getStringAttribute('on_partial_batch_item_failure');
    }
    public set onPartialBatchItemFailure(value: string) {
        this._onPartialBatchItemFailure = value;
    }
    public resetOnPartialBatchItemFailure() {
        this._onPartialBatchItemFailure = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get onPartialBatchItemFailureInput() {
        return this._onPartialBatchItemFailure;
    }

    // parallelization_factor - computed: true, optional: true, required: false
    private _parallelizationFactor?: number; 
    public get parallelizationFactor() {
        return this.getNumberAttribute('parallelization_factor');
    }
    public set parallelizationFactor(value: number) {
        this._parallelizationFactor = value;
    }
    public resetParallelizationFactor() {
        this._parallelizationFactor = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parallelizationFactorInput() {
        return this._parallelizationFactor;
    }

    // starting_position - computed: true, optional: true, required: false
    private _startingPosition?: string; 
    public get startingPosition() {
        return this.getStringAttribute('starting_position');
    }
    public set startingPosition(value: string) {
        this._startingPosition = value;
    }
    public resetStartingPosition() {
        this._startingPosition = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startingPositionInput() {
        return this._startingPosition;
    }

    // starting_position_timestamp - computed: true, optional: true, required: false
    private _startingPositionTimestamp?: string; 
    public get startingPositionTimestamp() {
        return this.getStringAttribute('starting_position_timestamp');
    }
    public set startingPositionTimestamp(value: string) {
        this._startingPositionTimestamp = value;
    }
    public resetStartingPositionTimestamp() {
        this._startingPositionTimestamp = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startingPositionTimestampInput() {
        return this._startingPositionTimestamp;
    }
}
export interface MSKAccessCredentialsProperty {
    /**
    * Optional SecretManager ARN which stores the database credentials
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#client_certificate_tls_auth CcPipe#client_certificate_tls_auth}
    */
    readonly clientCertificateTlsAuth?: string;
    /**
    * Optional SecretManager ARN which stores the database credentials
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#sasl_scram_512_auth CcPipe#sasl_scram_512_auth}
    */
    readonly saslScram512Auth?: string;
}
export class MSKAccessCredentialsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MSKAccessCredentialsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._clientCertificateTlsAuth !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientCertificateTlsAuth = this._clientCertificateTlsAuth;
        }
        if (this._saslScram512Auth !== undefined) {
            hasAnyValues = true;
            internalValueResult.saslScram512Auth = this._saslScram512Auth;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MSKAccessCredentialsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._clientCertificateTlsAuth = undefined;
            this._saslScram512Auth = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._clientCertificateTlsAuth = value.clientCertificateTlsAuth;
            this._saslScram512Auth = value.saslScram512Auth;
        }
    }

    // client_certificate_tls_auth - computed: true, optional: true, required: false
    private _clientCertificateTlsAuth?: string; 
    public get clientCertificateTlsAuth() {
        return this.getStringAttribute('client_certificate_tls_auth');
    }
    public set clientCertificateTlsAuth(value: string) {
        this._clientCertificateTlsAuth = value;
    }
    public resetClientCertificateTlsAuth() {
        this._clientCertificateTlsAuth = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientCertificateTlsAuthInput() {
        return this._clientCertificateTlsAuth;
    }

    // sasl_scram_512_auth - computed: true, optional: true, required: false
    private _saslScram512Auth?: string; 
    public get saslScram512Auth() {
        return this.getStringAttribute('sasl_scram_512_auth');
    }
    public set saslScram512Auth(value: string) {
        this._saslScram512Auth = value;
    }
    public resetSaslScram512Auth() {
        this._saslScram512Auth = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get saslScram512AuthInput() {
        return this._saslScram512Auth;
    }
}
export interface PipeSourceManagedStreamingKafkaParametersProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#batch_size CcPipe#batch_size}
    */
    readonly batchSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#consumer_group_id CcPipe#consumer_group_id}
    */
    readonly consumerGroupId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#credentials CcPipe#credentials}
    */
    readonly credentials?: MSKAccessCredentialsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#maximum_batching_window_in_seconds CcPipe#maximum_batching_window_in_seconds}
    */
    readonly maximumBatchingWindowInSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#starting_position CcPipe#starting_position}
    */
    readonly startingPosition?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#topic_name CcPipe#topic_name}
    */
    readonly topicName?: string;
}
export class PipeSourceManagedStreamingKafkaParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PipeSourceManagedStreamingKafkaParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._batchSize !== undefined) {
            hasAnyValues = true;
            internalValueResult.batchSize = this._batchSize;
        }
        if (this._consumerGroupId !== undefined) {
            hasAnyValues = true;
            internalValueResult.consumerGroupId = this._consumerGroupId;
        }
        if (this._credentials?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.credentials = this._credentials?.internalValue;
        }
        if (this._maximumBatchingWindowInSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.maximumBatchingWindowInSeconds = this._maximumBatchingWindowInSeconds;
        }
        if (this._startingPosition !== undefined) {
            hasAnyValues = true;
            internalValueResult.startingPosition = this._startingPosition;
        }
        if (this._topicName !== undefined) {
            hasAnyValues = true;
            internalValueResult.topicName = this._topicName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PipeSourceManagedStreamingKafkaParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._batchSize = undefined;
            this._consumerGroupId = undefined;
            this._credentials.internalValue = undefined;
            this._maximumBatchingWindowInSeconds = undefined;
            this._startingPosition = undefined;
            this._topicName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._batchSize = value.batchSize;
            this._consumerGroupId = value.consumerGroupId;
            this._credentials.internalValue = value.credentials;
            this._maximumBatchingWindowInSeconds = value.maximumBatchingWindowInSeconds;
            this._startingPosition = value.startingPosition;
            this._topicName = value.topicName;
        }
    }

    // batch_size - computed: true, optional: true, required: false
    private _batchSize?: number; 
    public get batchSize() {
        return this.getNumberAttribute('batch_size');
    }
    public set batchSize(value: number) {
        this._batchSize = value;
    }
    public resetBatchSize() {
        this._batchSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get batchSizeInput() {
        return this._batchSize;
    }

    // consumer_group_id - computed: true, optional: true, required: false
    private _consumerGroupId?: string; 
    public get consumerGroupId() {
        return this.getStringAttribute('consumer_group_id');
    }
    public set consumerGroupId(value: string) {
        this._consumerGroupId = value;
    }
    public resetConsumerGroupId() {
        this._consumerGroupId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get consumerGroupIdInput() {
        return this._consumerGroupId;
    }

    // credentials - computed: true, optional: true, required: false
    private _credentials = new MSKAccessCredentialsPropertyOutputReference(this, "credentials");
    public get credentials() {
        return this._credentials;
    }
    public putCredentials(value: MSKAccessCredentialsProperty) {
        this._credentials.internalValue = value;
    }
    public resetCredentials() {
        this._credentials.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get credentialsInput() {
        return this._credentials.internalValue;
    }

    // maximum_batching_window_in_seconds - computed: true, optional: true, required: false
    private _maximumBatchingWindowInSeconds?: number; 
    public get maximumBatchingWindowInSeconds() {
        return this.getNumberAttribute('maximum_batching_window_in_seconds');
    }
    public set maximumBatchingWindowInSeconds(value: number) {
        this._maximumBatchingWindowInSeconds = value;
    }
    public resetMaximumBatchingWindowInSeconds() {
        this._maximumBatchingWindowInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maximumBatchingWindowInSecondsInput() {
        return this._maximumBatchingWindowInSeconds;
    }

    // starting_position - computed: true, optional: true, required: false
    private _startingPosition?: string; 
    public get startingPosition() {
        return this.getStringAttribute('starting_position');
    }
    public set startingPosition(value: string) {
        this._startingPosition = value;
    }
    public resetStartingPosition() {
        this._startingPosition = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startingPositionInput() {
        return this._startingPosition;
    }

    // topic_name - computed: true, optional: true, required: false
    private _topicName?: string; 
    public get topicName() {
        return this.getStringAttribute('topic_name');
    }
    public set topicName(value: string) {
        this._topicName = value;
    }
    public resetTopicName() {
        this._topicName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get topicNameInput() {
        return this._topicName;
    }
}
export interface CredentialsProperty {
    /**
    * Optional SecretManager ARN which stores the database credentials
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#basic_auth CcPipe#basic_auth}
    */
    readonly basicAuth?: string;
}
export class CredentialsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CredentialsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._basicAuth !== undefined) {
            hasAnyValues = true;
            internalValueResult.basicAuth = this._basicAuth;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CredentialsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._basicAuth = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._basicAuth = value.basicAuth;
        }
    }

    // basic_auth - computed: true, optional: true, required: false
    private _basicAuth?: string; 
    public get basicAuth() {
        return this.getStringAttribute('basic_auth');
    }
    public set basicAuth(value: string) {
        this._basicAuth = value;
    }
    public resetBasicAuth() {
        this._basicAuth = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get basicAuthInput() {
        return this._basicAuth;
    }
}
export interface PipeSourceRabbitMQBrokerParametersProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#batch_size CcPipe#batch_size}
    */
    readonly batchSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#credentials CcPipe#credentials}
    */
    readonly credentials?: CredentialsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#maximum_batching_window_in_seconds CcPipe#maximum_batching_window_in_seconds}
    */
    readonly maximumBatchingWindowInSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#queue_name CcPipe#queue_name}
    */
    readonly queueName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#virtual_host CcPipe#virtual_host}
    */
    readonly virtualHost?: string;
}
export class PipeSourceRabbitMQBrokerParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PipeSourceRabbitMQBrokerParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._batchSize !== undefined) {
            hasAnyValues = true;
            internalValueResult.batchSize = this._batchSize;
        }
        if (this._credentials?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.credentials = this._credentials?.internalValue;
        }
        if (this._maximumBatchingWindowInSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.maximumBatchingWindowInSeconds = this._maximumBatchingWindowInSeconds;
        }
        if (this._queueName !== undefined) {
            hasAnyValues = true;
            internalValueResult.queueName = this._queueName;
        }
        if (this._virtualHost !== undefined) {
            hasAnyValues = true;
            internalValueResult.virtualHost = this._virtualHost;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PipeSourceRabbitMQBrokerParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._batchSize = undefined;
            this._credentials.internalValue = undefined;
            this._maximumBatchingWindowInSeconds = undefined;
            this._queueName = undefined;
            this._virtualHost = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._batchSize = value.batchSize;
            this._credentials.internalValue = value.credentials;
            this._maximumBatchingWindowInSeconds = value.maximumBatchingWindowInSeconds;
            this._queueName = value.queueName;
            this._virtualHost = value.virtualHost;
        }
    }

    // batch_size - computed: true, optional: true, required: false
    private _batchSize?: number; 
    public get batchSize() {
        return this.getNumberAttribute('batch_size');
    }
    public set batchSize(value: number) {
        this._batchSize = value;
    }
    public resetBatchSize() {
        this._batchSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get batchSizeInput() {
        return this._batchSize;
    }

    // credentials - computed: true, optional: true, required: false
    private _credentials = new CredentialsPropertyOutputReference(this, "credentials");
    public get credentials() {
        return this._credentials;
    }
    public putCredentials(value: CredentialsProperty) {
        this._credentials.internalValue = value;
    }
    public resetCredentials() {
        this._credentials.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get credentialsInput() {
        return this._credentials.internalValue;
    }

    // maximum_batching_window_in_seconds - computed: true, optional: true, required: false
    private _maximumBatchingWindowInSeconds?: number; 
    public get maximumBatchingWindowInSeconds() {
        return this.getNumberAttribute('maximum_batching_window_in_seconds');
    }
    public set maximumBatchingWindowInSeconds(value: number) {
        this._maximumBatchingWindowInSeconds = value;
    }
    public resetMaximumBatchingWindowInSeconds() {
        this._maximumBatchingWindowInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maximumBatchingWindowInSecondsInput() {
        return this._maximumBatchingWindowInSeconds;
    }

    // queue_name - computed: true, optional: true, required: false
    private _queueName?: string; 
    public get queueName() {
        return this.getStringAttribute('queue_name');
    }
    public set queueName(value: string) {
        this._queueName = value;
    }
    public resetQueueName() {
        this._queueName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get queueNameInput() {
        return this._queueName;
    }

    // virtual_host - computed: true, optional: true, required: false
    private _virtualHost?: string; 
    public get virtualHost() {
        return this.getStringAttribute('virtual_host');
    }
    public set virtualHost(value: string) {
        this._virtualHost = value;
    }
    public resetVirtualHost() {
        this._virtualHost = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get virtualHostInput() {
        return this._virtualHost;
    }
}
export interface SelfManagedKafkaAccessConfigurationCredentialsProperty {
    /**
    * Optional SecretManager ARN which stores the database credentials
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#basic_auth CcPipe#basic_auth}
    */
    readonly basicAuth?: string;
    /**
    * Optional SecretManager ARN which stores the database credentials
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#client_certificate_tls_auth CcPipe#client_certificate_tls_auth}
    */
    readonly clientCertificateTlsAuth?: string;
    /**
    * Optional SecretManager ARN which stores the database credentials
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#sasl_scram_256_auth CcPipe#sasl_scram_256_auth}
    */
    readonly saslScram256Auth?: string;
    /**
    * Optional SecretManager ARN which stores the database credentials
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#sasl_scram_512_auth CcPipe#sasl_scram_512_auth}
    */
    readonly saslScram512Auth?: string;
}
export class SelfManagedKafkaAccessConfigurationCredentialsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SelfManagedKafkaAccessConfigurationCredentialsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._basicAuth !== undefined) {
            hasAnyValues = true;
            internalValueResult.basicAuth = this._basicAuth;
        }
        if (this._clientCertificateTlsAuth !== undefined) {
            hasAnyValues = true;
            internalValueResult.clientCertificateTlsAuth = this._clientCertificateTlsAuth;
        }
        if (this._saslScram256Auth !== undefined) {
            hasAnyValues = true;
            internalValueResult.saslScram256Auth = this._saslScram256Auth;
        }
        if (this._saslScram512Auth !== undefined) {
            hasAnyValues = true;
            internalValueResult.saslScram512Auth = this._saslScram512Auth;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SelfManagedKafkaAccessConfigurationCredentialsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._basicAuth = undefined;
            this._clientCertificateTlsAuth = undefined;
            this._saslScram256Auth = undefined;
            this._saslScram512Auth = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._basicAuth = value.basicAuth;
            this._clientCertificateTlsAuth = value.clientCertificateTlsAuth;
            this._saslScram256Auth = value.saslScram256Auth;
            this._saslScram512Auth = value.saslScram512Auth;
        }
    }

    // basic_auth - computed: true, optional: true, required: false
    private _basicAuth?: string; 
    public get basicAuth() {
        return this.getStringAttribute('basic_auth');
    }
    public set basicAuth(value: string) {
        this._basicAuth = value;
    }
    public resetBasicAuth() {
        this._basicAuth = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get basicAuthInput() {
        return this._basicAuth;
    }

    // client_certificate_tls_auth - computed: true, optional: true, required: false
    private _clientCertificateTlsAuth?: string; 
    public get clientCertificateTlsAuth() {
        return this.getStringAttribute('client_certificate_tls_auth');
    }
    public set clientCertificateTlsAuth(value: string) {
        this._clientCertificateTlsAuth = value;
    }
    public resetClientCertificateTlsAuth() {
        this._clientCertificateTlsAuth = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientCertificateTlsAuthInput() {
        return this._clientCertificateTlsAuth;
    }

    // sasl_scram_256_auth - computed: true, optional: true, required: false
    private _saslScram256Auth?: string; 
    public get saslScram256Auth() {
        return this.getStringAttribute('sasl_scram_256_auth');
    }
    public set saslScram256Auth(value: string) {
        this._saslScram256Auth = value;
    }
    public resetSaslScram256Auth() {
        this._saslScram256Auth = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get saslScram256AuthInput() {
        return this._saslScram256Auth;
    }

    // sasl_scram_512_auth - computed: true, optional: true, required: false
    private _saslScram512Auth?: string; 
    public get saslScram512Auth() {
        return this.getStringAttribute('sasl_scram_512_auth');
    }
    public set saslScram512Auth(value: string) {
        this._saslScram512Auth = value;
    }
    public resetSaslScram512Auth() {
        this._saslScram512Auth = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get saslScram512AuthInput() {
        return this._saslScram512Auth;
    }
}
export interface SelfManagedKafkaAccessConfigurationVpcProperty {
    /**
    * List of SecurityGroupId.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#security_group CcPipe#security_group}
    */
    readonly securityGroup?: string[];
    /**
    * List of SubnetId.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#subnets CcPipe#subnets}
    */
    readonly subnets?: string[];
}
export class SelfManagedKafkaAccessConfigurationVpcPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SelfManagedKafkaAccessConfigurationVpcProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._securityGroup !== undefined) {
            hasAnyValues = true;
            internalValueResult.securityGroup = this._securityGroup;
        }
        if (this._subnets !== undefined) {
            hasAnyValues = true;
            internalValueResult.subnets = this._subnets;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SelfManagedKafkaAccessConfigurationVpcProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._securityGroup = undefined;
            this._subnets = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._securityGroup = value.securityGroup;
            this._subnets = value.subnets;
        }
    }

    // security_group - computed: true, optional: true, required: false
    private _securityGroup?: string[]; 
    public get securityGroup() {
        return this.getListAttribute('security_group');
    }
    public set securityGroup(value: string[]) {
        this._securityGroup = value;
    }
    public resetSecurityGroup() {
        this._securityGroup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupInput() {
        return this._securityGroup;
    }

    // subnets - computed: true, optional: true, required: false
    private _subnets?: string[]; 
    public get subnets() {
        return this.getListAttribute('subnets');
    }
    public set subnets(value: string[]) {
        this._subnets = value;
    }
    public resetSubnets() {
        this._subnets = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetsInput() {
        return this._subnets;
    }
}
export interface PipeSourceSelfManagedKafkaParametersProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#additional_bootstrap_servers CcPipe#additional_bootstrap_servers}
    */
    readonly additionalBootstrapServers?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#batch_size CcPipe#batch_size}
    */
    readonly batchSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#consumer_group_id CcPipe#consumer_group_id}
    */
    readonly consumerGroupId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#credentials CcPipe#credentials}
    */
    readonly credentials?: SelfManagedKafkaAccessConfigurationCredentialsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#maximum_batching_window_in_seconds CcPipe#maximum_batching_window_in_seconds}
    */
    readonly maximumBatchingWindowInSeconds?: number;
    /**
    * Optional SecretManager ARN which stores the database credentials
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#server_root_ca_certificate CcPipe#server_root_ca_certificate}
    */
    readonly serverRootCaCertificate?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#starting_position CcPipe#starting_position}
    */
    readonly startingPosition?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#topic_name CcPipe#topic_name}
    */
    readonly topicName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#vpc CcPipe#vpc}
    */
    readonly vpc?: SelfManagedKafkaAccessConfigurationVpcProperty;
}
export class PipeSourceSelfManagedKafkaParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PipeSourceSelfManagedKafkaParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._additionalBootstrapServers !== undefined) {
            hasAnyValues = true;
            internalValueResult.additionalBootstrapServers = this._additionalBootstrapServers;
        }
        if (this._batchSize !== undefined) {
            hasAnyValues = true;
            internalValueResult.batchSize = this._batchSize;
        }
        if (this._consumerGroupId !== undefined) {
            hasAnyValues = true;
            internalValueResult.consumerGroupId = this._consumerGroupId;
        }
        if (this._credentials?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.credentials = this._credentials?.internalValue;
        }
        if (this._maximumBatchingWindowInSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.maximumBatchingWindowInSeconds = this._maximumBatchingWindowInSeconds;
        }
        if (this._serverRootCaCertificate !== undefined) {
            hasAnyValues = true;
            internalValueResult.serverRootCaCertificate = this._serverRootCaCertificate;
        }
        if (this._startingPosition !== undefined) {
            hasAnyValues = true;
            internalValueResult.startingPosition = this._startingPosition;
        }
        if (this._topicName !== undefined) {
            hasAnyValues = true;
            internalValueResult.topicName = this._topicName;
        }
        if (this._vpc?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.vpc = this._vpc?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PipeSourceSelfManagedKafkaParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._additionalBootstrapServers = undefined;
            this._batchSize = undefined;
            this._consumerGroupId = undefined;
            this._credentials.internalValue = undefined;
            this._maximumBatchingWindowInSeconds = undefined;
            this._serverRootCaCertificate = undefined;
            this._startingPosition = undefined;
            this._topicName = undefined;
            this._vpc.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._additionalBootstrapServers = value.additionalBootstrapServers;
            this._batchSize = value.batchSize;
            this._consumerGroupId = value.consumerGroupId;
            this._credentials.internalValue = value.credentials;
            this._maximumBatchingWindowInSeconds = value.maximumBatchingWindowInSeconds;
            this._serverRootCaCertificate = value.serverRootCaCertificate;
            this._startingPosition = value.startingPosition;
            this._topicName = value.topicName;
            this._vpc.internalValue = value.vpc;
        }
    }

    // additional_bootstrap_servers - computed: true, optional: true, required: false
    private _additionalBootstrapServers?: string[]; 
    public get additionalBootstrapServers() {
        return this.getListAttribute('additional_bootstrap_servers');
    }
    public set additionalBootstrapServers(value: string[]) {
        this._additionalBootstrapServers = value;
    }
    public resetAdditionalBootstrapServers() {
        this._additionalBootstrapServers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get additionalBootstrapServersInput() {
        return this._additionalBootstrapServers;
    }

    // batch_size - computed: true, optional: true, required: false
    private _batchSize?: number; 
    public get batchSize() {
        return this.getNumberAttribute('batch_size');
    }
    public set batchSize(value: number) {
        this._batchSize = value;
    }
    public resetBatchSize() {
        this._batchSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get batchSizeInput() {
        return this._batchSize;
    }

    // consumer_group_id - computed: true, optional: true, required: false
    private _consumerGroupId?: string; 
    public get consumerGroupId() {
        return this.getStringAttribute('consumer_group_id');
    }
    public set consumerGroupId(value: string) {
        this._consumerGroupId = value;
    }
    public resetConsumerGroupId() {
        this._consumerGroupId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get consumerGroupIdInput() {
        return this._consumerGroupId;
    }

    // credentials - computed: true, optional: true, required: false
    private _credentials = new SelfManagedKafkaAccessConfigurationCredentialsPropertyOutputReference(this, "credentials");
    public get credentials() {
        return this._credentials;
    }
    public putCredentials(value: SelfManagedKafkaAccessConfigurationCredentialsProperty) {
        this._credentials.internalValue = value;
    }
    public resetCredentials() {
        this._credentials.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get credentialsInput() {
        return this._credentials.internalValue;
    }

    // maximum_batching_window_in_seconds - computed: true, optional: true, required: false
    private _maximumBatchingWindowInSeconds?: number; 
    public get maximumBatchingWindowInSeconds() {
        return this.getNumberAttribute('maximum_batching_window_in_seconds');
    }
    public set maximumBatchingWindowInSeconds(value: number) {
        this._maximumBatchingWindowInSeconds = value;
    }
    public resetMaximumBatchingWindowInSeconds() {
        this._maximumBatchingWindowInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maximumBatchingWindowInSecondsInput() {
        return this._maximumBatchingWindowInSeconds;
    }

    // server_root_ca_certificate - computed: true, optional: true, required: false
    private _serverRootCaCertificate?: string; 
    public get serverRootCaCertificate() {
        return this.getStringAttribute('server_root_ca_certificate');
    }
    public set serverRootCaCertificate(value: string) {
        this._serverRootCaCertificate = value;
    }
    public resetServerRootCaCertificate() {
        this._serverRootCaCertificate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serverRootCaCertificateInput() {
        return this._serverRootCaCertificate;
    }

    // starting_position - computed: true, optional: true, required: false
    private _startingPosition?: string; 
    public get startingPosition() {
        return this.getStringAttribute('starting_position');
    }
    public set startingPosition(value: string) {
        this._startingPosition = value;
    }
    public resetStartingPosition() {
        this._startingPosition = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startingPositionInput() {
        return this._startingPosition;
    }

    // topic_name - computed: true, optional: true, required: false
    private _topicName?: string; 
    public get topicName() {
        return this.getStringAttribute('topic_name');
    }
    public set topicName(value: string) {
        this._topicName = value;
    }
    public resetTopicName() {
        this._topicName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get topicNameInput() {
        return this._topicName;
    }

    // vpc - computed: true, optional: true, required: false
    private _vpc = new SelfManagedKafkaAccessConfigurationVpcPropertyOutputReference(this, "vpc");
    public get vpc() {
        return this._vpc;
    }
    public putVpc(value: SelfManagedKafkaAccessConfigurationVpcProperty) {
        this._vpc.internalValue = value;
    }
    public resetVpc() {
        this._vpc.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcInput() {
        return this._vpc.internalValue;
    }
}
export interface PipeSourceSqsQueueParametersProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#batch_size CcPipe#batch_size}
    */
    readonly batchSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#maximum_batching_window_in_seconds CcPipe#maximum_batching_window_in_seconds}
    */
    readonly maximumBatchingWindowInSeconds?: number;
}
export class PipeSourceSqsQueueParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PipeSourceSqsQueueParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._batchSize !== undefined) {
            hasAnyValues = true;
            internalValueResult.batchSize = this._batchSize;
        }
        if (this._maximumBatchingWindowInSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.maximumBatchingWindowInSeconds = this._maximumBatchingWindowInSeconds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PipeSourceSqsQueueParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._batchSize = undefined;
            this._maximumBatchingWindowInSeconds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._batchSize = value.batchSize;
            this._maximumBatchingWindowInSeconds = value.maximumBatchingWindowInSeconds;
        }
    }

    // batch_size - computed: true, optional: true, required: false
    private _batchSize?: number; 
    public get batchSize() {
        return this.getNumberAttribute('batch_size');
    }
    public set batchSize(value: number) {
        this._batchSize = value;
    }
    public resetBatchSize() {
        this._batchSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get batchSizeInput() {
        return this._batchSize;
    }

    // maximum_batching_window_in_seconds - computed: true, optional: true, required: false
    private _maximumBatchingWindowInSeconds?: number; 
    public get maximumBatchingWindowInSeconds() {
        return this.getNumberAttribute('maximum_batching_window_in_seconds');
    }
    public set maximumBatchingWindowInSeconds(value: number) {
        this._maximumBatchingWindowInSeconds = value;
    }
    public resetMaximumBatchingWindowInSeconds() {
        this._maximumBatchingWindowInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maximumBatchingWindowInSecondsInput() {
        return this._maximumBatchingWindowInSeconds;
    }
}
export interface PipeSourceParametersProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#active_mq_broker_parameters CcPipe#active_mq_broker_parameters}
    */
    readonly activeMqBrokerParameters?: PipeSourceActiveMQBrokerParametersProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#dynamo_db_stream_parameters CcPipe#dynamo_db_stream_parameters}
    */
    readonly dynamoDbStreamParameters?: PipeSourceDynamoDBStreamParametersProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#filter_criteria CcPipe#filter_criteria}
    */
    readonly filterCriteria?: FilterCriteriaProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#kinesis_stream_parameters CcPipe#kinesis_stream_parameters}
    */
    readonly kinesisStreamParameters?: PipeSourceKinesisStreamParametersProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#managed_streaming_kafka_parameters CcPipe#managed_streaming_kafka_parameters}
    */
    readonly managedStreamingKafkaParameters?: PipeSourceManagedStreamingKafkaParametersProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#rabbit_mq_broker_parameters CcPipe#rabbit_mq_broker_parameters}
    */
    readonly rabbitMqBrokerParameters?: PipeSourceRabbitMQBrokerParametersProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#self_managed_kafka_parameters CcPipe#self_managed_kafka_parameters}
    */
    readonly selfManagedKafkaParameters?: PipeSourceSelfManagedKafkaParametersProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#sqs_queue_parameters CcPipe#sqs_queue_parameters}
    */
    readonly sqsQueueParameters?: PipeSourceSqsQueueParametersProperty;
}
export class PipeSourceParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PipeSourceParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._activeMqBrokerParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.activeMqBrokerParameters = this._activeMqBrokerParameters?.internalValue;
        }
        if (this._dynamoDbStreamParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dynamoDbStreamParameters = this._dynamoDbStreamParameters?.internalValue;
        }
        if (this._filterCriteria?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.filterCriteria = this._filterCriteria?.internalValue;
        }
        if (this._kinesisStreamParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.kinesisStreamParameters = this._kinesisStreamParameters?.internalValue;
        }
        if (this._managedStreamingKafkaParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.managedStreamingKafkaParameters = this._managedStreamingKafkaParameters?.internalValue;
        }
        if (this._rabbitMqBrokerParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.rabbitMqBrokerParameters = this._rabbitMqBrokerParameters?.internalValue;
        }
        if (this._selfManagedKafkaParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.selfManagedKafkaParameters = this._selfManagedKafkaParameters?.internalValue;
        }
        if (this._sqsQueueParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sqsQueueParameters = this._sqsQueueParameters?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PipeSourceParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._activeMqBrokerParameters.internalValue = undefined;
            this._dynamoDbStreamParameters.internalValue = undefined;
            this._filterCriteria.internalValue = undefined;
            this._kinesisStreamParameters.internalValue = undefined;
            this._managedStreamingKafkaParameters.internalValue = undefined;
            this._rabbitMqBrokerParameters.internalValue = undefined;
            this._selfManagedKafkaParameters.internalValue = undefined;
            this._sqsQueueParameters.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._activeMqBrokerParameters.internalValue = value.activeMqBrokerParameters;
            this._dynamoDbStreamParameters.internalValue = value.dynamoDbStreamParameters;
            this._filterCriteria.internalValue = value.filterCriteria;
            this._kinesisStreamParameters.internalValue = value.kinesisStreamParameters;
            this._managedStreamingKafkaParameters.internalValue = value.managedStreamingKafkaParameters;
            this._rabbitMqBrokerParameters.internalValue = value.rabbitMqBrokerParameters;
            this._selfManagedKafkaParameters.internalValue = value.selfManagedKafkaParameters;
            this._sqsQueueParameters.internalValue = value.sqsQueueParameters;
        }
    }

    // active_mq_broker_parameters - computed: true, optional: true, required: false
    private _activeMqBrokerParameters = new PipeSourceActiveMQBrokerParametersPropertyOutputReference(this, "active_mq_broker_parameters");
    public get activeMqBrokerParameters() {
        return this._activeMqBrokerParameters;
    }
    public putActiveMqBrokerParameters(value: PipeSourceActiveMQBrokerParametersProperty) {
        this._activeMqBrokerParameters.internalValue = value;
    }
    public resetActiveMqBrokerParameters() {
        this._activeMqBrokerParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get activeMqBrokerParametersInput() {
        return this._activeMqBrokerParameters.internalValue;
    }

    // dynamo_db_stream_parameters - computed: true, optional: true, required: false
    private _dynamoDbStreamParameters = new PipeSourceDynamoDBStreamParametersPropertyOutputReference(this, "dynamo_db_stream_parameters");
    public get dynamoDbStreamParameters() {
        return this._dynamoDbStreamParameters;
    }
    public putDynamoDbStreamParameters(value: PipeSourceDynamoDBStreamParametersProperty) {
        this._dynamoDbStreamParameters.internalValue = value;
    }
    public resetDynamoDbStreamParameters() {
        this._dynamoDbStreamParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dynamoDbStreamParametersInput() {
        return this._dynamoDbStreamParameters.internalValue;
    }

    // filter_criteria - computed: true, optional: true, required: false
    private _filterCriteria = new FilterCriteriaPropertyOutputReference(this, "filter_criteria");
    public get filterCriteria() {
        return this._filterCriteria;
    }
    public putFilterCriteria(value: FilterCriteriaProperty) {
        this._filterCriteria.internalValue = value;
    }
    public resetFilterCriteria() {
        this._filterCriteria.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterCriteriaInput() {
        return this._filterCriteria.internalValue;
    }

    // kinesis_stream_parameters - computed: true, optional: true, required: false
    private _kinesisStreamParameters = new PipeSourceKinesisStreamParametersPropertyOutputReference(this, "kinesis_stream_parameters");
    public get kinesisStreamParameters() {
        return this._kinesisStreamParameters;
    }
    public putKinesisStreamParameters(value: PipeSourceKinesisStreamParametersProperty) {
        this._kinesisStreamParameters.internalValue = value;
    }
    public resetKinesisStreamParameters() {
        this._kinesisStreamParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kinesisStreamParametersInput() {
        return this._kinesisStreamParameters.internalValue;
    }

    // managed_streaming_kafka_parameters - computed: true, optional: true, required: false
    private _managedStreamingKafkaParameters = new PipeSourceManagedStreamingKafkaParametersPropertyOutputReference(this, "managed_streaming_kafka_parameters");
    public get managedStreamingKafkaParameters() {
        return this._managedStreamingKafkaParameters;
    }
    public putManagedStreamingKafkaParameters(value: PipeSourceManagedStreamingKafkaParametersProperty) {
        this._managedStreamingKafkaParameters.internalValue = value;
    }
    public resetManagedStreamingKafkaParameters() {
        this._managedStreamingKafkaParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get managedStreamingKafkaParametersInput() {
        return this._managedStreamingKafkaParameters.internalValue;
    }

    // rabbit_mq_broker_parameters - computed: true, optional: true, required: false
    private _rabbitMqBrokerParameters = new PipeSourceRabbitMQBrokerParametersPropertyOutputReference(this, "rabbit_mq_broker_parameters");
    public get rabbitMqBrokerParameters() {
        return this._rabbitMqBrokerParameters;
    }
    public putRabbitMqBrokerParameters(value: PipeSourceRabbitMQBrokerParametersProperty) {
        this._rabbitMqBrokerParameters.internalValue = value;
    }
    public resetRabbitMqBrokerParameters() {
        this._rabbitMqBrokerParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rabbitMqBrokerParametersInput() {
        return this._rabbitMqBrokerParameters.internalValue;
    }

    // self_managed_kafka_parameters - computed: true, optional: true, required: false
    private _selfManagedKafkaParameters = new PipeSourceSelfManagedKafkaParametersPropertyOutputReference(this, "self_managed_kafka_parameters");
    public get selfManagedKafkaParameters() {
        return this._selfManagedKafkaParameters;
    }
    public putSelfManagedKafkaParameters(value: PipeSourceSelfManagedKafkaParametersProperty) {
        this._selfManagedKafkaParameters.internalValue = value;
    }
    public resetSelfManagedKafkaParameters() {
        this._selfManagedKafkaParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get selfManagedKafkaParametersInput() {
        return this._selfManagedKafkaParameters.internalValue;
    }

    // sqs_queue_parameters - computed: true, optional: true, required: false
    private _sqsQueueParameters = new PipeSourceSqsQueueParametersPropertyOutputReference(this, "sqs_queue_parameters");
    public get sqsQueueParameters() {
        return this._sqsQueueParameters;
    }
    public putSqsQueueParameters(value: PipeSourceSqsQueueParametersProperty) {
        this._sqsQueueParameters.internalValue = value;
    }
    public resetSqsQueueParameters() {
        this._sqsQueueParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sqsQueueParametersInput() {
        return this._sqsQueueParameters.internalValue;
    }
}
export interface BatchArrayPropertiesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#size CcPipe#size}
    */
    readonly size?: number;
}
export class BatchArrayPropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): BatchArrayPropertiesProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: BatchArrayPropertiesProperty | cdktn.IResolvable | undefined) {
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
export interface BatchEnvironmentVariableProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#name CcPipe#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#value CcPipe#value}
    */
    readonly value?: string;
}
export class BatchEnvironmentVariablePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): BatchEnvironmentVariableProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BatchEnvironmentVariableProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._value = value.value;
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

export class BatchEnvironmentVariablePropertyList extends cdktn.ComplexList {
    public internalValue? : BatchEnvironmentVariableProperty[] | cdktn.IResolvable

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
    public get(index: number): BatchEnvironmentVariablePropertyOutputReference {
        return new BatchEnvironmentVariablePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface BatchResourceRequirementProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#type CcPipe#type}
    */
    readonly type?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#value CcPipe#value}
    */
    readonly value?: string;
}
export class BatchResourceRequirementPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): BatchResourceRequirementProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BatchResourceRequirementProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._type = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._type = value.type;
            this._value = value.value;
        }
    }

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
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

export class BatchResourceRequirementPropertyList extends cdktn.ComplexList {
    public internalValue? : BatchResourceRequirementProperty[] | cdktn.IResolvable

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
    public get(index: number): BatchResourceRequirementPropertyOutputReference {
        return new BatchResourceRequirementPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface BatchContainerOverridesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#command CcPipe#command}
    */
    readonly command?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#environment CcPipe#environment}
    */
    readonly environment?: BatchEnvironmentVariableProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#instance_type CcPipe#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#resource_requirements CcPipe#resource_requirements}
    */
    readonly resourceRequirements?: BatchResourceRequirementProperty[] | cdktn.IResolvable;
}
export class BatchContainerOverridesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): BatchContainerOverridesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._command !== undefined) {
            hasAnyValues = true;
            internalValueResult.command = this._command;
        }
        if (this._environment?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.environment = this._environment?.internalValue;
        }
        if (this._instanceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceType = this._instanceType;
        }
        if (this._resourceRequirements?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceRequirements = this._resourceRequirements?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BatchContainerOverridesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._command = undefined;
            this._environment.internalValue = undefined;
            this._instanceType = undefined;
            this._resourceRequirements.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._command = value.command;
            this._environment.internalValue = value.environment;
            this._instanceType = value.instanceType;
            this._resourceRequirements.internalValue = value.resourceRequirements;
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

    // environment - computed: true, optional: true, required: false
    private _environment = new BatchEnvironmentVariablePropertyList(this, "environment", false);
    public get environment() {
        return this._environment;
    }
    public putEnvironment(value: BatchEnvironmentVariableProperty[] | cdktn.IResolvable) {
        this._environment.internalValue = value;
    }
    public resetEnvironment() {
        this._environment.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get environmentInput() {
        return this._environment.internalValue;
    }

    // instance_type - computed: true, optional: true, required: false
    private _instanceType?: string; 
    public get instanceType() {
        return this.getStringAttribute('instance_type');
    }
    public set instanceType(value: string) {
        this._instanceType = value;
    }
    public resetInstanceType() {
        this._instanceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceTypeInput() {
        return this._instanceType;
    }

    // resource_requirements - computed: true, optional: true, required: false
    private _resourceRequirements = new BatchResourceRequirementPropertyList(this, "resource_requirements", false);
    public get resourceRequirements() {
        return this._resourceRequirements;
    }
    public putResourceRequirements(value: BatchResourceRequirementProperty[] | cdktn.IResolvable) {
        this._resourceRequirements.internalValue = value;
    }
    public resetResourceRequirements() {
        this._resourceRequirements.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceRequirementsInput() {
        return this._resourceRequirements.internalValue;
    }
}
export interface BatchJobDependencyProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#job_id CcPipe#job_id}
    */
    readonly jobId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#type CcPipe#type}
    */
    readonly type?: string;
}
export class BatchJobDependencyPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): BatchJobDependencyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._jobId !== undefined) {
            hasAnyValues = true;
            internalValueResult.jobId = this._jobId;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BatchJobDependencyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._jobId = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._jobId = value.jobId;
            this._type = value.type;
        }
    }

    // job_id - computed: true, optional: true, required: false
    private _jobId?: string; 
    public get jobId() {
        return this.getStringAttribute('job_id');
    }
    public set jobId(value: string) {
        this._jobId = value;
    }
    public resetJobId() {
        this._jobId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jobIdInput() {
        return this._jobId;
    }

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }
}

export class BatchJobDependencyPropertyList extends cdktn.ComplexList {
    public internalValue? : BatchJobDependencyProperty[] | cdktn.IResolvable

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
    public get(index: number): BatchJobDependencyPropertyOutputReference {
        return new BatchJobDependencyPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface BatchRetryStrategyProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#attempts CcPipe#attempts}
    */
    readonly attempts?: number;
}
export class BatchRetryStrategyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): BatchRetryStrategyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._attempts !== undefined) {
            hasAnyValues = true;
            internalValueResult.attempts = this._attempts;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BatchRetryStrategyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._attempts = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._attempts = value.attempts;
        }
    }

    // attempts - computed: true, optional: true, required: false
    private _attempts?: number; 
    public get attempts() {
        return this.getNumberAttribute('attempts');
    }
    public set attempts(value: number) {
        this._attempts = value;
    }
    public resetAttempts() {
        this._attempts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get attemptsInput() {
        return this._attempts;
    }
}
export interface PipeTargetBatchJobParametersProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#array_properties CcPipe#array_properties}
    */
    readonly arrayProperties?: BatchArrayPropertiesProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#container_overrides CcPipe#container_overrides}
    */
    readonly containerOverrides?: BatchContainerOverridesProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#depends_on CcPipe#depends_on}
    */
    readonly dependsOn?: BatchJobDependencyProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#job_definition CcPipe#job_definition}
    */
    readonly jobDefinition?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#job_name CcPipe#job_name}
    */
    readonly jobName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#parameters CcPipe#parameters}
    */
    readonly parameters?: { [key: string]: string };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#retry_strategy CcPipe#retry_strategy}
    */
    readonly retryStrategy?: BatchRetryStrategyProperty;
}
export class PipeTargetBatchJobParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PipeTargetBatchJobParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._arrayProperties?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.arrayProperties = this._arrayProperties?.internalValue;
        }
        if (this._containerOverrides?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.containerOverrides = this._containerOverrides?.internalValue;
        }
        if (this._dependsOn?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dependsOn = this._dependsOn?.internalValue;
        }
        if (this._jobDefinition !== undefined) {
            hasAnyValues = true;
            internalValueResult.jobDefinition = this._jobDefinition;
        }
        if (this._jobName !== undefined) {
            hasAnyValues = true;
            internalValueResult.jobName = this._jobName;
        }
        if (this._parameters !== undefined) {
            hasAnyValues = true;
            internalValueResult.parameters = this._parameters;
        }
        if (this._retryStrategy?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.retryStrategy = this._retryStrategy?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PipeTargetBatchJobParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._arrayProperties.internalValue = undefined;
            this._containerOverrides.internalValue = undefined;
            this._dependsOn.internalValue = undefined;
            this._jobDefinition = undefined;
            this._jobName = undefined;
            this._parameters = undefined;
            this._retryStrategy.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._arrayProperties.internalValue = value.arrayProperties;
            this._containerOverrides.internalValue = value.containerOverrides;
            this._dependsOn.internalValue = value.dependsOn;
            this._jobDefinition = value.jobDefinition;
            this._jobName = value.jobName;
            this._parameters = value.parameters;
            this._retryStrategy.internalValue = value.retryStrategy;
        }
    }

    // array_properties - computed: true, optional: true, required: false
    private _arrayProperties = new BatchArrayPropertiesPropertyOutputReference(this, "array_properties");
    public get arrayProperties() {
        return this._arrayProperties;
    }
    public putArrayProperties(value: BatchArrayPropertiesProperty) {
        this._arrayProperties.internalValue = value;
    }
    public resetArrayProperties() {
        this._arrayProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get arrayPropertiesInput() {
        return this._arrayProperties.internalValue;
    }

    // container_overrides - computed: true, optional: true, required: false
    private _containerOverrides = new BatchContainerOverridesPropertyOutputReference(this, "container_overrides");
    public get containerOverrides() {
        return this._containerOverrides;
    }
    public putContainerOverrides(value: BatchContainerOverridesProperty) {
        this._containerOverrides.internalValue = value;
    }
    public resetContainerOverrides() {
        this._containerOverrides.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get containerOverridesInput() {
        return this._containerOverrides.internalValue;
    }

    // depends_on - computed: true, optional: true, required: false
    private _dependsOn = new BatchJobDependencyPropertyList(this, "depends_on", false);
    public get dependsOn() {
        return this._dependsOn;
    }
    public putDependsOn(value: BatchJobDependencyProperty[] | cdktn.IResolvable) {
        this._dependsOn.internalValue = value;
    }
    public resetDependsOn() {
        this._dependsOn.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dependsOnInput() {
        return this._dependsOn.internalValue;
    }

    // job_definition - computed: true, optional: true, required: false
    private _jobDefinition?: string; 
    public get jobDefinition() {
        return this.getStringAttribute('job_definition');
    }
    public set jobDefinition(value: string) {
        this._jobDefinition = value;
    }
    public resetJobDefinition() {
        this._jobDefinition = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jobDefinitionInput() {
        return this._jobDefinition;
    }

    // job_name - computed: true, optional: true, required: false
    private _jobName?: string; 
    public get jobName() {
        return this.getStringAttribute('job_name');
    }
    public set jobName(value: string) {
        this._jobName = value;
    }
    public resetJobName() {
        this._jobName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jobNameInput() {
        return this._jobName;
    }

    // parameters - computed: true, optional: true, required: false
    private _parameters?: { [key: string]: string }; 
    public get parameters() {
        return this.getStringMapAttribute('parameters');
    }
    public set parameters(value: { [key: string]: string }) {
        this._parameters = value;
    }
    public resetParameters() {
        this._parameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parametersInput() {
        return this._parameters;
    }

    // retry_strategy - computed: true, optional: true, required: false
    private _retryStrategy = new BatchRetryStrategyPropertyOutputReference(this, "retry_strategy");
    public get retryStrategy() {
        return this._retryStrategy;
    }
    public putRetryStrategy(value: BatchRetryStrategyProperty) {
        this._retryStrategy.internalValue = value;
    }
    public resetRetryStrategy() {
        this._retryStrategy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get retryStrategyInput() {
        return this._retryStrategy.internalValue;
    }
}
export interface PipeTargetCloudWatchLogsParametersProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#log_stream_name CcPipe#log_stream_name}
    */
    readonly logStreamName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#timestamp CcPipe#timestamp}
    */
    readonly timestamp?: string;
}
export class PipeTargetCloudWatchLogsParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PipeTargetCloudWatchLogsParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._logStreamName !== undefined) {
            hasAnyValues = true;
            internalValueResult.logStreamName = this._logStreamName;
        }
        if (this._timestamp !== undefined) {
            hasAnyValues = true;
            internalValueResult.timestamp = this._timestamp;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PipeTargetCloudWatchLogsParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._logStreamName = undefined;
            this._timestamp = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._logStreamName = value.logStreamName;
            this._timestamp = value.timestamp;
        }
    }

    // log_stream_name - computed: true, optional: true, required: false
    private _logStreamName?: string; 
    public get logStreamName() {
        return this.getStringAttribute('log_stream_name');
    }
    public set logStreamName(value: string) {
        this._logStreamName = value;
    }
    public resetLogStreamName() {
        this._logStreamName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logStreamNameInput() {
        return this._logStreamName;
    }

    // timestamp - computed: true, optional: true, required: false
    private _timestamp?: string; 
    public get timestamp() {
        return this.getStringAttribute('timestamp');
    }
    public set timestamp(value: string) {
        this._timestamp = value;
    }
    public resetTimestamp() {
        this._timestamp = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timestampInput() {
        return this._timestamp;
    }
}
export interface CapacityProviderStrategyItemProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#base CcPipe#base}
    */
    readonly base?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#capacity_provider CcPipe#capacity_provider}
    */
    readonly capacityProvider?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#weight CcPipe#weight}
    */
    readonly weight?: number;
}
export class CapacityProviderStrategyItemPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): CapacityProviderStrategyItemProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._base !== undefined) {
            hasAnyValues = true;
            internalValueResult.base = this._base;
        }
        if (this._capacityProvider !== undefined) {
            hasAnyValues = true;
            internalValueResult.capacityProvider = this._capacityProvider;
        }
        if (this._weight !== undefined) {
            hasAnyValues = true;
            internalValueResult.weight = this._weight;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CapacityProviderStrategyItemProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._base = undefined;
            this._capacityProvider = undefined;
            this._weight = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._base = value.base;
            this._capacityProvider = value.capacityProvider;
            this._weight = value.weight;
        }
    }

    // base - computed: true, optional: true, required: false
    private _base?: number; 
    public get base() {
        return this.getNumberAttribute('base');
    }
    public set base(value: number) {
        this._base = value;
    }
    public resetBase() {
        this._base = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get baseInput() {
        return this._base;
    }

    // capacity_provider - computed: true, optional: true, required: false
    private _capacityProvider?: string; 
    public get capacityProvider() {
        return this.getStringAttribute('capacity_provider');
    }
    public set capacityProvider(value: string) {
        this._capacityProvider = value;
    }
    public resetCapacityProvider() {
        this._capacityProvider = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get capacityProviderInput() {
        return this._capacityProvider;
    }

    // weight - computed: true, optional: true, required: false
    private _weight?: number; 
    public get weight() {
        return this.getNumberAttribute('weight');
    }
    public set weight(value: number) {
        this._weight = value;
    }
    public resetWeight() {
        this._weight = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get weightInput() {
        return this._weight;
    }
}

export class CapacityProviderStrategyItemPropertyList extends cdktn.ComplexList {
    public internalValue? : CapacityProviderStrategyItemProperty[] | cdktn.IResolvable

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
    public get(index: number): CapacityProviderStrategyItemPropertyOutputReference {
        return new CapacityProviderStrategyItemPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface AwsVpcConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#assign_public_ip CcPipe#assign_public_ip}
    */
    readonly assignPublicIp?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#security_groups CcPipe#security_groups}
    */
    readonly securityGroups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#subnets CcPipe#subnets}
    */
    readonly subnets?: string[];
}
export class AwsVpcConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AwsVpcConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._assignPublicIp !== undefined) {
            hasAnyValues = true;
            internalValueResult.assignPublicIp = this._assignPublicIp;
        }
        if (this._securityGroups !== undefined) {
            hasAnyValues = true;
            internalValueResult.securityGroups = this._securityGroups;
        }
        if (this._subnets !== undefined) {
            hasAnyValues = true;
            internalValueResult.subnets = this._subnets;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AwsVpcConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._assignPublicIp = undefined;
            this._securityGroups = undefined;
            this._subnets = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._assignPublicIp = value.assignPublicIp;
            this._securityGroups = value.securityGroups;
            this._subnets = value.subnets;
        }
    }

    // assign_public_ip - computed: true, optional: true, required: false
    private _assignPublicIp?: string; 
    public get assignPublicIp() {
        return this.getStringAttribute('assign_public_ip');
    }
    public set assignPublicIp(value: string) {
        this._assignPublicIp = value;
    }
    public resetAssignPublicIp() {
        this._assignPublicIp = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get assignPublicIpInput() {
        return this._assignPublicIp;
    }

    // security_groups - computed: true, optional: true, required: false
    private _securityGroups?: string[]; 
    public get securityGroups() {
        return this.getListAttribute('security_groups');
    }
    public set securityGroups(value: string[]) {
        this._securityGroups = value;
    }
    public resetSecurityGroups() {
        this._securityGroups = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupsInput() {
        return this._securityGroups;
    }

    // subnets - computed: true, optional: true, required: false
    private _subnets?: string[]; 
    public get subnets() {
        return this.getListAttribute('subnets');
    }
    public set subnets(value: string[]) {
        this._subnets = value;
    }
    public resetSubnets() {
        this._subnets = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetsInput() {
        return this._subnets;
    }
}
export interface NetworkConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#awsvpc_configuration CcPipe#awsvpc_configuration}
    */
    readonly awsvpcConfiguration?: AwsVpcConfigurationProperty;
}
export class NetworkConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): NetworkConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._awsvpcConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.awsvpcConfiguration = this._awsvpcConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NetworkConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._awsvpcConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._awsvpcConfiguration.internalValue = value.awsvpcConfiguration;
        }
    }

    // awsvpc_configuration - computed: true, optional: true, required: false
    private _awsvpcConfiguration = new AwsVpcConfigurationPropertyOutputReference(this, "awsvpc_configuration");
    public get awsvpcConfiguration() {
        return this._awsvpcConfiguration;
    }
    public putAwsvpcConfiguration(value: AwsVpcConfigurationProperty) {
        this._awsvpcConfiguration.internalValue = value;
    }
    public resetAwsvpcConfiguration() {
        this._awsvpcConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get awsvpcConfigurationInput() {
        return this._awsvpcConfiguration.internalValue;
    }
}
export interface EcsEnvironmentVariableProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#name CcPipe#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#value CcPipe#value}
    */
    readonly value?: string;
}
export class EcsEnvironmentVariablePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): EcsEnvironmentVariableProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EcsEnvironmentVariableProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._value = value.value;
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

export class EcsEnvironmentVariablePropertyList extends cdktn.ComplexList {
    public internalValue? : EcsEnvironmentVariableProperty[] | cdktn.IResolvable

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
    public get(index: number): EcsEnvironmentVariablePropertyOutputReference {
        return new EcsEnvironmentVariablePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface EcsEnvironmentFileProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#type CcPipe#type}
    */
    readonly type?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#value CcPipe#value}
    */
    readonly value?: string;
}
export class EcsEnvironmentFilePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): EcsEnvironmentFileProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EcsEnvironmentFileProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._type = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._type = value.type;
            this._value = value.value;
        }
    }

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
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

export class EcsEnvironmentFilePropertyList extends cdktn.ComplexList {
    public internalValue? : EcsEnvironmentFileProperty[] | cdktn.IResolvable

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
    public get(index: number): EcsEnvironmentFilePropertyOutputReference {
        return new EcsEnvironmentFilePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface EcsResourceRequirementProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#type CcPipe#type}
    */
    readonly type?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#value CcPipe#value}
    */
    readonly value?: string;
}
export class EcsResourceRequirementPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): EcsResourceRequirementProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EcsResourceRequirementProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._type = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._type = value.type;
            this._value = value.value;
        }
    }

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
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

export class EcsResourceRequirementPropertyList extends cdktn.ComplexList {
    public internalValue? : EcsResourceRequirementProperty[] | cdktn.IResolvable

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
    public get(index: number): EcsResourceRequirementPropertyOutputReference {
        return new EcsResourceRequirementPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface EcsContainerOverrideProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#command CcPipe#command}
    */
    readonly command?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#cpu CcPipe#cpu}
    */
    readonly cpu?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#environment CcPipe#environment}
    */
    readonly environment?: EcsEnvironmentVariableProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#environment_files CcPipe#environment_files}
    */
    readonly environmentFiles?: EcsEnvironmentFileProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#memory CcPipe#memory}
    */
    readonly memory?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#memory_reservation CcPipe#memory_reservation}
    */
    readonly memoryReservation?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#name CcPipe#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#resource_requirements CcPipe#resource_requirements}
    */
    readonly resourceRequirements?: EcsResourceRequirementProperty[] | cdktn.IResolvable;
}
export class EcsContainerOverridePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): EcsContainerOverrideProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._command !== undefined) {
            hasAnyValues = true;
            internalValueResult.command = this._command;
        }
        if (this._cpu !== undefined) {
            hasAnyValues = true;
            internalValueResult.cpu = this._cpu;
        }
        if (this._environment?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.environment = this._environment?.internalValue;
        }
        if (this._environmentFiles?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.environmentFiles = this._environmentFiles?.internalValue;
        }
        if (this._memory !== undefined) {
            hasAnyValues = true;
            internalValueResult.memory = this._memory;
        }
        if (this._memoryReservation !== undefined) {
            hasAnyValues = true;
            internalValueResult.memoryReservation = this._memoryReservation;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._resourceRequirements?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceRequirements = this._resourceRequirements?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EcsContainerOverrideProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._command = undefined;
            this._cpu = undefined;
            this._environment.internalValue = undefined;
            this._environmentFiles.internalValue = undefined;
            this._memory = undefined;
            this._memoryReservation = undefined;
            this._name = undefined;
            this._resourceRequirements.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._command = value.command;
            this._cpu = value.cpu;
            this._environment.internalValue = value.environment;
            this._environmentFiles.internalValue = value.environmentFiles;
            this._memory = value.memory;
            this._memoryReservation = value.memoryReservation;
            this._name = value.name;
            this._resourceRequirements.internalValue = value.resourceRequirements;
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

    // cpu - computed: true, optional: true, required: false
    private _cpu?: number; 
    public get cpu() {
        return this.getNumberAttribute('cpu');
    }
    public set cpu(value: number) {
        this._cpu = value;
    }
    public resetCpu() {
        this._cpu = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cpuInput() {
        return this._cpu;
    }

    // environment - computed: true, optional: true, required: false
    private _environment = new EcsEnvironmentVariablePropertyList(this, "environment", false);
    public get environment() {
        return this._environment;
    }
    public putEnvironment(value: EcsEnvironmentVariableProperty[] | cdktn.IResolvable) {
        this._environment.internalValue = value;
    }
    public resetEnvironment() {
        this._environment.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get environmentInput() {
        return this._environment.internalValue;
    }

    // environment_files - computed: true, optional: true, required: false
    private _environmentFiles = new EcsEnvironmentFilePropertyList(this, "environment_files", false);
    public get environmentFiles() {
        return this._environmentFiles;
    }
    public putEnvironmentFiles(value: EcsEnvironmentFileProperty[] | cdktn.IResolvable) {
        this._environmentFiles.internalValue = value;
    }
    public resetEnvironmentFiles() {
        this._environmentFiles.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get environmentFilesInput() {
        return this._environmentFiles.internalValue;
    }

    // memory - computed: true, optional: true, required: false
    private _memory?: number; 
    public get memory() {
        return this.getNumberAttribute('memory');
    }
    public set memory(value: number) {
        this._memory = value;
    }
    public resetMemory() {
        this._memory = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get memoryInput() {
        return this._memory;
    }

    // memory_reservation - computed: true, optional: true, required: false
    private _memoryReservation?: number; 
    public get memoryReservation() {
        return this.getNumberAttribute('memory_reservation');
    }
    public set memoryReservation(value: number) {
        this._memoryReservation = value;
    }
    public resetMemoryReservation() {
        this._memoryReservation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get memoryReservationInput() {
        return this._memoryReservation;
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

    // resource_requirements - computed: true, optional: true, required: false
    private _resourceRequirements = new EcsResourceRequirementPropertyList(this, "resource_requirements", false);
    public get resourceRequirements() {
        return this._resourceRequirements;
    }
    public putResourceRequirements(value: EcsResourceRequirementProperty[] | cdktn.IResolvable) {
        this._resourceRequirements.internalValue = value;
    }
    public resetResourceRequirements() {
        this._resourceRequirements.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceRequirementsInput() {
        return this._resourceRequirements.internalValue;
    }
}

export class EcsContainerOverridePropertyList extends cdktn.ComplexList {
    public internalValue? : EcsContainerOverrideProperty[] | cdktn.IResolvable

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
    public get(index: number): EcsContainerOverridePropertyOutputReference {
        return new EcsContainerOverridePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface EcsEphemeralStorageProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#size_in_gi_b CcPipe#size_in_gi_b}
    */
    readonly sizeInGiB?: number;
}
export class EcsEphemeralStoragePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EcsEphemeralStorageProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._sizeInGiB !== undefined) {
            hasAnyValues = true;
            internalValueResult.sizeInGiB = this._sizeInGiB;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EcsEphemeralStorageProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._sizeInGiB = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._sizeInGiB = value.sizeInGiB;
        }
    }

    // size_in_gi_b - computed: true, optional: true, required: false
    private _sizeInGiB?: number; 
    public get sizeInGiB() {
        return this.getNumberAttribute('size_in_gi_b');
    }
    public set sizeInGiB(value: number) {
        this._sizeInGiB = value;
    }
    public resetSizeInGiB() {
        this._sizeInGiB = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sizeInGiBInput() {
        return this._sizeInGiB;
    }
}
export interface EcsInferenceAcceleratorOverrideProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#device_name CcPipe#device_name}
    */
    readonly deviceName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#device_type CcPipe#device_type}
    */
    readonly deviceType?: string;
}
export class EcsInferenceAcceleratorOverridePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): EcsInferenceAcceleratorOverrideProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._deviceName !== undefined) {
            hasAnyValues = true;
            internalValueResult.deviceName = this._deviceName;
        }
        if (this._deviceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.deviceType = this._deviceType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EcsInferenceAcceleratorOverrideProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._deviceName = undefined;
            this._deviceType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._deviceName = value.deviceName;
            this._deviceType = value.deviceType;
        }
    }

    // device_name - computed: true, optional: true, required: false
    private _deviceName?: string; 
    public get deviceName() {
        return this.getStringAttribute('device_name');
    }
    public set deviceName(value: string) {
        this._deviceName = value;
    }
    public resetDeviceName() {
        this._deviceName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deviceNameInput() {
        return this._deviceName;
    }

    // device_type - computed: true, optional: true, required: false
    private _deviceType?: string; 
    public get deviceType() {
        return this.getStringAttribute('device_type');
    }
    public set deviceType(value: string) {
        this._deviceType = value;
    }
    public resetDeviceType() {
        this._deviceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deviceTypeInput() {
        return this._deviceType;
    }
}

export class EcsInferenceAcceleratorOverridePropertyList extends cdktn.ComplexList {
    public internalValue? : EcsInferenceAcceleratorOverrideProperty[] | cdktn.IResolvable

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
    public get(index: number): EcsInferenceAcceleratorOverridePropertyOutputReference {
        return new EcsInferenceAcceleratorOverridePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface EcsTaskOverrideProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#container_overrides CcPipe#container_overrides}
    */
    readonly containerOverrides?: EcsContainerOverrideProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#cpu CcPipe#cpu}
    */
    readonly cpu?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#ephemeral_storage CcPipe#ephemeral_storage}
    */
    readonly ephemeralStorage?: EcsEphemeralStorageProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#execution_role_arn CcPipe#execution_role_arn}
    */
    readonly executionRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#inference_accelerator_overrides CcPipe#inference_accelerator_overrides}
    */
    readonly inferenceAcceleratorOverrides?: EcsInferenceAcceleratorOverrideProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#memory CcPipe#memory}
    */
    readonly memory?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#task_role_arn CcPipe#task_role_arn}
    */
    readonly taskRoleArn?: string;
}
export class EcsTaskOverridePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EcsTaskOverrideProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._containerOverrides?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.containerOverrides = this._containerOverrides?.internalValue;
        }
        if (this._cpu !== undefined) {
            hasAnyValues = true;
            internalValueResult.cpu = this._cpu;
        }
        if (this._ephemeralStorage?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ephemeralStorage = this._ephemeralStorage?.internalValue;
        }
        if (this._executionRoleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.executionRoleArn = this._executionRoleArn;
        }
        if (this._inferenceAcceleratorOverrides?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.inferenceAcceleratorOverrides = this._inferenceAcceleratorOverrides?.internalValue;
        }
        if (this._memory !== undefined) {
            hasAnyValues = true;
            internalValueResult.memory = this._memory;
        }
        if (this._taskRoleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.taskRoleArn = this._taskRoleArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EcsTaskOverrideProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._containerOverrides.internalValue = undefined;
            this._cpu = undefined;
            this._ephemeralStorage.internalValue = undefined;
            this._executionRoleArn = undefined;
            this._inferenceAcceleratorOverrides.internalValue = undefined;
            this._memory = undefined;
            this._taskRoleArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._containerOverrides.internalValue = value.containerOverrides;
            this._cpu = value.cpu;
            this._ephemeralStorage.internalValue = value.ephemeralStorage;
            this._executionRoleArn = value.executionRoleArn;
            this._inferenceAcceleratorOverrides.internalValue = value.inferenceAcceleratorOverrides;
            this._memory = value.memory;
            this._taskRoleArn = value.taskRoleArn;
        }
    }

    // container_overrides - computed: true, optional: true, required: false
    private _containerOverrides = new EcsContainerOverridePropertyList(this, "container_overrides", false);
    public get containerOverrides() {
        return this._containerOverrides;
    }
    public putContainerOverrides(value: EcsContainerOverrideProperty[] | cdktn.IResolvable) {
        this._containerOverrides.internalValue = value;
    }
    public resetContainerOverrides() {
        this._containerOverrides.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get containerOverridesInput() {
        return this._containerOverrides.internalValue;
    }

    // cpu - computed: true, optional: true, required: false
    private _cpu?: string; 
    public get cpu() {
        return this.getStringAttribute('cpu');
    }
    public set cpu(value: string) {
        this._cpu = value;
    }
    public resetCpu() {
        this._cpu = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cpuInput() {
        return this._cpu;
    }

    // ephemeral_storage - computed: true, optional: true, required: false
    private _ephemeralStorage = new EcsEphemeralStoragePropertyOutputReference(this, "ephemeral_storage");
    public get ephemeralStorage() {
        return this._ephemeralStorage;
    }
    public putEphemeralStorage(value: EcsEphemeralStorageProperty) {
        this._ephemeralStorage.internalValue = value;
    }
    public resetEphemeralStorage() {
        this._ephemeralStorage.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ephemeralStorageInput() {
        return this._ephemeralStorage.internalValue;
    }

    // execution_role_arn - computed: true, optional: true, required: false
    private _executionRoleArn?: string; 
    public get executionRoleArn() {
        return this.getStringAttribute('execution_role_arn');
    }
    public set executionRoleArn(value: string) {
        this._executionRoleArn = value;
    }
    public resetExecutionRoleArn() {
        this._executionRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get executionRoleArnInput() {
        return this._executionRoleArn;
    }

    // inference_accelerator_overrides - computed: true, optional: true, required: false
    private _inferenceAcceleratorOverrides = new EcsInferenceAcceleratorOverridePropertyList(this, "inference_accelerator_overrides", false);
    public get inferenceAcceleratorOverrides() {
        return this._inferenceAcceleratorOverrides;
    }
    public putInferenceAcceleratorOverrides(value: EcsInferenceAcceleratorOverrideProperty[] | cdktn.IResolvable) {
        this._inferenceAcceleratorOverrides.internalValue = value;
    }
    public resetInferenceAcceleratorOverrides() {
        this._inferenceAcceleratorOverrides.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inferenceAcceleratorOverridesInput() {
        return this._inferenceAcceleratorOverrides.internalValue;
    }

    // memory - computed: true, optional: true, required: false
    private _memory?: string; 
    public get memory() {
        return this.getStringAttribute('memory');
    }
    public set memory(value: string) {
        this._memory = value;
    }
    public resetMemory() {
        this._memory = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get memoryInput() {
        return this._memory;
    }

    // task_role_arn - computed: true, optional: true, required: false
    private _taskRoleArn?: string; 
    public get taskRoleArn() {
        return this.getStringAttribute('task_role_arn');
    }
    public set taskRoleArn(value: string) {
        this._taskRoleArn = value;
    }
    public resetTaskRoleArn() {
        this._taskRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get taskRoleArnInput() {
        return this._taskRoleArn;
    }
}
export interface PlacementConstraintProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#expression CcPipe#expression}
    */
    readonly expression?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#type CcPipe#type}
    */
    readonly type?: string;
}
export class PlacementConstraintPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): PlacementConstraintProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._expression !== undefined) {
            hasAnyValues = true;
            internalValueResult.expression = this._expression;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PlacementConstraintProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._expression = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._expression = value.expression;
            this._type = value.type;
        }
    }

    // expression - computed: true, optional: true, required: false
    private _expression?: string; 
    public get expression() {
        return this.getStringAttribute('expression');
    }
    public set expression(value: string) {
        this._expression = value;
    }
    public resetExpression() {
        this._expression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get expressionInput() {
        return this._expression;
    }

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }
}

export class PlacementConstraintPropertyList extends cdktn.ComplexList {
    public internalValue? : PlacementConstraintProperty[] | cdktn.IResolvable

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
    public get(index: number): PlacementConstraintPropertyOutputReference {
        return new PlacementConstraintPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface PlacementStrategyProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#field CcPipe#field}
    */
    readonly field?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#type CcPipe#type}
    */
    readonly type?: string;
}
export class PlacementStrategyPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): PlacementStrategyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._field !== undefined) {
            hasAnyValues = true;
            internalValueResult.field = this._field;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PlacementStrategyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._field = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._field = value.field;
            this._type = value.type;
        }
    }

    // field - computed: true, optional: true, required: false
    private _field?: string; 
    public get field() {
        return this.getStringAttribute('field');
    }
    public set field(value: string) {
        this._field = value;
    }
    public resetField() {
        this._field = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fieldInput() {
        return this._field;
    }

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }
}

export class PlacementStrategyPropertyList extends cdktn.ComplexList {
    public internalValue? : PlacementStrategyProperty[] | cdktn.IResolvable

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
    public get(index: number): PlacementStrategyPropertyOutputReference {
        return new PlacementStrategyPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#key CcPipe#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#value CcPipe#value}
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
export interface PipeTargetEcsTaskParametersProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#capacity_provider_strategy CcPipe#capacity_provider_strategy}
    */
    readonly capacityProviderStrategy?: CapacityProviderStrategyItemProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#enable_ecs_managed_tags CcPipe#enable_ecs_managed_tags}
    */
    readonly enableEcsManagedTags?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#enable_execute_command CcPipe#enable_execute_command}
    */
    readonly enableExecuteCommand?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#group CcPipe#group}
    */
    readonly group?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#launch_type CcPipe#launch_type}
    */
    readonly launchType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#network_configuration CcPipe#network_configuration}
    */
    readonly networkConfiguration?: NetworkConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#overrides CcPipe#overrides}
    */
    readonly overrides?: EcsTaskOverrideProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#placement_constraints CcPipe#placement_constraints}
    */
    readonly placementConstraints?: PlacementConstraintProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#placement_strategy CcPipe#placement_strategy}
    */
    readonly placementStrategy?: PlacementStrategyProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#platform_version CcPipe#platform_version}
    */
    readonly platformVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#propagate_tags CcPipe#propagate_tags}
    */
    readonly propagateTags?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#reference_id CcPipe#reference_id}
    */
    readonly referenceId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#tags CcPipe#tags}
    */
    readonly tags?: TagProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#task_count CcPipe#task_count}
    */
    readonly taskCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#task_definition_arn CcPipe#task_definition_arn}
    */
    readonly taskDefinitionArn?: string;
}
export class PipeTargetEcsTaskParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PipeTargetEcsTaskParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._capacityProviderStrategy?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.capacityProviderStrategy = this._capacityProviderStrategy?.internalValue;
        }
        if (this._enableEcsManagedTags !== undefined) {
            hasAnyValues = true;
            internalValueResult.enableEcsManagedTags = this._enableEcsManagedTags;
        }
        if (this._enableExecuteCommand !== undefined) {
            hasAnyValues = true;
            internalValueResult.enableExecuteCommand = this._enableExecuteCommand;
        }
        if (this._group !== undefined) {
            hasAnyValues = true;
            internalValueResult.group = this._group;
        }
        if (this._launchType !== undefined) {
            hasAnyValues = true;
            internalValueResult.launchType = this._launchType;
        }
        if (this._networkConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.networkConfiguration = this._networkConfiguration?.internalValue;
        }
        if (this._overrides?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.overrides = this._overrides?.internalValue;
        }
        if (this._placementConstraints?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.placementConstraints = this._placementConstraints?.internalValue;
        }
        if (this._placementStrategy?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.placementStrategy = this._placementStrategy?.internalValue;
        }
        if (this._platformVersion !== undefined) {
            hasAnyValues = true;
            internalValueResult.platformVersion = this._platformVersion;
        }
        if (this._propagateTags !== undefined) {
            hasAnyValues = true;
            internalValueResult.propagateTags = this._propagateTags;
        }
        if (this._referenceId !== undefined) {
            hasAnyValues = true;
            internalValueResult.referenceId = this._referenceId;
        }
        if (this._tags?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tags = this._tags?.internalValue;
        }
        if (this._taskCount !== undefined) {
            hasAnyValues = true;
            internalValueResult.taskCount = this._taskCount;
        }
        if (this._taskDefinitionArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.taskDefinitionArn = this._taskDefinitionArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PipeTargetEcsTaskParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._capacityProviderStrategy.internalValue = undefined;
            this._enableEcsManagedTags = undefined;
            this._enableExecuteCommand = undefined;
            this._group = undefined;
            this._launchType = undefined;
            this._networkConfiguration.internalValue = undefined;
            this._overrides.internalValue = undefined;
            this._placementConstraints.internalValue = undefined;
            this._placementStrategy.internalValue = undefined;
            this._platformVersion = undefined;
            this._propagateTags = undefined;
            this._referenceId = undefined;
            this._tags.internalValue = undefined;
            this._taskCount = undefined;
            this._taskDefinitionArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._capacityProviderStrategy.internalValue = value.capacityProviderStrategy;
            this._enableEcsManagedTags = value.enableEcsManagedTags;
            this._enableExecuteCommand = value.enableExecuteCommand;
            this._group = value.group;
            this._launchType = value.launchType;
            this._networkConfiguration.internalValue = value.networkConfiguration;
            this._overrides.internalValue = value.overrides;
            this._placementConstraints.internalValue = value.placementConstraints;
            this._placementStrategy.internalValue = value.placementStrategy;
            this._platformVersion = value.platformVersion;
            this._propagateTags = value.propagateTags;
            this._referenceId = value.referenceId;
            this._tags.internalValue = value.tags;
            this._taskCount = value.taskCount;
            this._taskDefinitionArn = value.taskDefinitionArn;
        }
    }

    // capacity_provider_strategy - computed: true, optional: true, required: false
    private _capacityProviderStrategy = new CapacityProviderStrategyItemPropertyList(this, "capacity_provider_strategy", false);
    public get capacityProviderStrategy() {
        return this._capacityProviderStrategy;
    }
    public putCapacityProviderStrategy(value: CapacityProviderStrategyItemProperty[] | cdktn.IResolvable) {
        this._capacityProviderStrategy.internalValue = value;
    }
    public resetCapacityProviderStrategy() {
        this._capacityProviderStrategy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get capacityProviderStrategyInput() {
        return this._capacityProviderStrategy.internalValue;
    }

    // enable_ecs_managed_tags - computed: true, optional: true, required: false
    private _enableEcsManagedTags?: boolean | cdktn.IResolvable; 
    public get enableEcsManagedTags() {
        return this.getBooleanAttribute('enable_ecs_managed_tags');
    }
    public set enableEcsManagedTags(value: boolean | cdktn.IResolvable) {
        this._enableEcsManagedTags = value;
    }
    public resetEnableEcsManagedTags() {
        this._enableEcsManagedTags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableEcsManagedTagsInput() {
        return this._enableEcsManagedTags;
    }

    // enable_execute_command - computed: true, optional: true, required: false
    private _enableExecuteCommand?: boolean | cdktn.IResolvable; 
    public get enableExecuteCommand() {
        return this.getBooleanAttribute('enable_execute_command');
    }
    public set enableExecuteCommand(value: boolean | cdktn.IResolvable) {
        this._enableExecuteCommand = value;
    }
    public resetEnableExecuteCommand() {
        this._enableExecuteCommand = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableExecuteCommandInput() {
        return this._enableExecuteCommand;
    }

    // group - computed: true, optional: true, required: false
    private _group?: string; 
    public get group() {
        return this.getStringAttribute('group');
    }
    public set group(value: string) {
        this._group = value;
    }
    public resetGroup() {
        this._group = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get groupInput() {
        return this._group;
    }

    // launch_type - computed: true, optional: true, required: false
    private _launchType?: string; 
    public get launchType() {
        return this.getStringAttribute('launch_type');
    }
    public set launchType(value: string) {
        this._launchType = value;
    }
    public resetLaunchType() {
        this._launchType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get launchTypeInput() {
        return this._launchType;
    }

    // network_configuration - computed: true, optional: true, required: false
    private _networkConfiguration = new NetworkConfigurationPropertyOutputReference(this, "network_configuration");
    public get networkConfiguration() {
        return this._networkConfiguration;
    }
    public putNetworkConfiguration(value: NetworkConfigurationProperty) {
        this._networkConfiguration.internalValue = value;
    }
    public resetNetworkConfiguration() {
        this._networkConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkConfigurationInput() {
        return this._networkConfiguration.internalValue;
    }

    // overrides - computed: true, optional: true, required: false
    private _overrides = new EcsTaskOverridePropertyOutputReference(this, "overrides");
    public get overrides() {
        return this._overrides;
    }
    public putOverrides(value: EcsTaskOverrideProperty) {
        this._overrides.internalValue = value;
    }
    public resetOverrides() {
        this._overrides.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get overridesInput() {
        return this._overrides.internalValue;
    }

    // placement_constraints - computed: true, optional: true, required: false
    private _placementConstraints = new PlacementConstraintPropertyList(this, "placement_constraints", false);
    public get placementConstraints() {
        return this._placementConstraints;
    }
    public putPlacementConstraints(value: PlacementConstraintProperty[] | cdktn.IResolvable) {
        this._placementConstraints.internalValue = value;
    }
    public resetPlacementConstraints() {
        this._placementConstraints.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get placementConstraintsInput() {
        return this._placementConstraints.internalValue;
    }

    // placement_strategy - computed: true, optional: true, required: false
    private _placementStrategy = new PlacementStrategyPropertyList(this, "placement_strategy", false);
    public get placementStrategy() {
        return this._placementStrategy;
    }
    public putPlacementStrategy(value: PlacementStrategyProperty[] | cdktn.IResolvable) {
        this._placementStrategy.internalValue = value;
    }
    public resetPlacementStrategy() {
        this._placementStrategy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get placementStrategyInput() {
        return this._placementStrategy.internalValue;
    }

    // platform_version - computed: true, optional: true, required: false
    private _platformVersion?: string; 
    public get platformVersion() {
        return this.getStringAttribute('platform_version');
    }
    public set platformVersion(value: string) {
        this._platformVersion = value;
    }
    public resetPlatformVersion() {
        this._platformVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get platformVersionInput() {
        return this._platformVersion;
    }

    // propagate_tags - computed: true, optional: true, required: false
    private _propagateTags?: string; 
    public get propagateTags() {
        return this.getStringAttribute('propagate_tags');
    }
    public set propagateTags(value: string) {
        this._propagateTags = value;
    }
    public resetPropagateTags() {
        this._propagateTags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propagateTagsInput() {
        return this._propagateTags;
    }

    // reference_id - computed: true, optional: true, required: false
    private _referenceId?: string; 
    public get referenceId() {
        return this.getStringAttribute('reference_id');
    }
    public set referenceId(value: string) {
        this._referenceId = value;
    }
    public resetReferenceId() {
        this._referenceId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get referenceIdInput() {
        return this._referenceId;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // task_count - computed: true, optional: true, required: false
    private _taskCount?: number; 
    public get taskCount() {
        return this.getNumberAttribute('task_count');
    }
    public set taskCount(value: number) {
        this._taskCount = value;
    }
    public resetTaskCount() {
        this._taskCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get taskCountInput() {
        return this._taskCount;
    }

    // task_definition_arn - computed: true, optional: true, required: false
    private _taskDefinitionArn?: string; 
    public get taskDefinitionArn() {
        return this.getStringAttribute('task_definition_arn');
    }
    public set taskDefinitionArn(value: string) {
        this._taskDefinitionArn = value;
    }
    public resetTaskDefinitionArn() {
        this._taskDefinitionArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get taskDefinitionArnInput() {
        return this._taskDefinitionArn;
    }
}
export interface PipeTargetEventBridgeEventBusParametersProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#detail_type CcPipe#detail_type}
    */
    readonly detailType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#endpoint_id CcPipe#endpoint_id}
    */
    readonly endpointId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#resources CcPipe#resources}
    */
    readonly resources?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#source CcPipe#source}
    */
    readonly source?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#time CcPipe#time}
    */
    readonly time?: string;
}
export class PipeTargetEventBridgeEventBusParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PipeTargetEventBridgeEventBusParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._detailType !== undefined) {
            hasAnyValues = true;
            internalValueResult.detailType = this._detailType;
        }
        if (this._endpointId !== undefined) {
            hasAnyValues = true;
            internalValueResult.endpointId = this._endpointId;
        }
        if (this._resources !== undefined) {
            hasAnyValues = true;
            internalValueResult.resources = this._resources;
        }
        if (this._source !== undefined) {
            hasAnyValues = true;
            internalValueResult.source = this._source;
        }
        if (this._time !== undefined) {
            hasAnyValues = true;
            internalValueResult.time = this._time;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PipeTargetEventBridgeEventBusParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._detailType = undefined;
            this._endpointId = undefined;
            this._resources = undefined;
            this._source = undefined;
            this._time = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._detailType = value.detailType;
            this._endpointId = value.endpointId;
            this._resources = value.resources;
            this._source = value.source;
            this._time = value.time;
        }
    }

    // detail_type - computed: true, optional: true, required: false
    private _detailType?: string; 
    public get detailType() {
        return this.getStringAttribute('detail_type');
    }
    public set detailType(value: string) {
        this._detailType = value;
    }
    public resetDetailType() {
        this._detailType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get detailTypeInput() {
        return this._detailType;
    }

    // endpoint_id - computed: true, optional: true, required: false
    private _endpointId?: string; 
    public get endpointId() {
        return this.getStringAttribute('endpoint_id');
    }
    public set endpointId(value: string) {
        this._endpointId = value;
    }
    public resetEndpointId() {
        this._endpointId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointIdInput() {
        return this._endpointId;
    }

    // resources - computed: true, optional: true, required: false
    private _resources?: string[]; 
    public get resources() {
        return this.getListAttribute('resources');
    }
    public set resources(value: string[]) {
        this._resources = value;
    }
    public resetResources() {
        this._resources = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourcesInput() {
        return this._resources;
    }

    // source - computed: true, optional: true, required: false
    private _source?: string; 
    public get source() {
        return this.getStringAttribute('source');
    }
    public set source(value: string) {
        this._source = value;
    }
    public resetSource() {
        this._source = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceInput() {
        return this._source;
    }

    // time - computed: true, optional: true, required: false
    private _time?: string; 
    public get time() {
        return this.getStringAttribute('time');
    }
    public set time(value: string) {
        this._time = value;
    }
    public resetTime() {
        this._time = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeInput() {
        return this._time;
    }
}
export interface PipeTargetHttpParametersProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#header_parameters CcPipe#header_parameters}
    */
    readonly headerParameters?: { [key: string]: string };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#path_parameter_values CcPipe#path_parameter_values}
    */
    readonly pathParameterValues?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#query_string_parameters CcPipe#query_string_parameters}
    */
    readonly queryStringParameters?: { [key: string]: string };
}
export class PipeTargetHttpParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PipeTargetHttpParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._headerParameters !== undefined) {
            hasAnyValues = true;
            internalValueResult.headerParameters = this._headerParameters;
        }
        if (this._pathParameterValues !== undefined) {
            hasAnyValues = true;
            internalValueResult.pathParameterValues = this._pathParameterValues;
        }
        if (this._queryStringParameters !== undefined) {
            hasAnyValues = true;
            internalValueResult.queryStringParameters = this._queryStringParameters;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PipeTargetHttpParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._headerParameters = undefined;
            this._pathParameterValues = undefined;
            this._queryStringParameters = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._headerParameters = value.headerParameters;
            this._pathParameterValues = value.pathParameterValues;
            this._queryStringParameters = value.queryStringParameters;
        }
    }

    // header_parameters - computed: true, optional: true, required: false
    private _headerParameters?: { [key: string]: string }; 
    public get headerParameters() {
        return this.getStringMapAttribute('header_parameters');
    }
    public set headerParameters(value: { [key: string]: string }) {
        this._headerParameters = value;
    }
    public resetHeaderParameters() {
        this._headerParameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get headerParametersInput() {
        return this._headerParameters;
    }

    // path_parameter_values - computed: true, optional: true, required: false
    private _pathParameterValues?: string[]; 
    public get pathParameterValues() {
        return this.getListAttribute('path_parameter_values');
    }
    public set pathParameterValues(value: string[]) {
        this._pathParameterValues = value;
    }
    public resetPathParameterValues() {
        this._pathParameterValues = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pathParameterValuesInput() {
        return this._pathParameterValues;
    }

    // query_string_parameters - computed: true, optional: true, required: false
    private _queryStringParameters?: { [key: string]: string }; 
    public get queryStringParameters() {
        return this.getStringMapAttribute('query_string_parameters');
    }
    public set queryStringParameters(value: { [key: string]: string }) {
        this._queryStringParameters = value;
    }
    public resetQueryStringParameters() {
        this._queryStringParameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get queryStringParametersInput() {
        return this._queryStringParameters;
    }
}
export interface PipeTargetKinesisStreamParametersProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#partition_key CcPipe#partition_key}
    */
    readonly partitionKey?: string;
}
export class PipeTargetKinesisStreamParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PipeTargetKinesisStreamParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._partitionKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.partitionKey = this._partitionKey;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PipeTargetKinesisStreamParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._partitionKey = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._partitionKey = value.partitionKey;
        }
    }

    // partition_key - computed: true, optional: true, required: false
    private _partitionKey?: string; 
    public get partitionKey() {
        return this.getStringAttribute('partition_key');
    }
    public set partitionKey(value: string) {
        this._partitionKey = value;
    }
    public resetPartitionKey() {
        this._partitionKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get partitionKeyInput() {
        return this._partitionKey;
    }
}
export interface PipeTargetLambdaFunctionParametersProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#invocation_type CcPipe#invocation_type}
    */
    readonly invocationType?: string;
}
export class PipeTargetLambdaFunctionParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PipeTargetLambdaFunctionParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._invocationType !== undefined) {
            hasAnyValues = true;
            internalValueResult.invocationType = this._invocationType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PipeTargetLambdaFunctionParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._invocationType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._invocationType = value.invocationType;
        }
    }

    // invocation_type - computed: true, optional: true, required: false
    private _invocationType?: string; 
    public get invocationType() {
        return this.getStringAttribute('invocation_type');
    }
    public set invocationType(value: string) {
        this._invocationType = value;
    }
    public resetInvocationType() {
        this._invocationType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get invocationTypeInput() {
        return this._invocationType;
    }
}
export interface PipeTargetRedshiftDataParametersProperty {
    /**
    * Redshift Database
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#database CcPipe#database}
    */
    readonly database?: string;
    /**
    * Database user name
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#db_user CcPipe#db_user}
    */
    readonly dbUser?: string;
    /**
    * Optional SecretManager ARN which stores the database credentials
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#secret_manager_arn CcPipe#secret_manager_arn}
    */
    readonly secretManagerArn?: string;
    /**
    * A list of SQLs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#sqls CcPipe#sqls}
    */
    readonly sqls?: string[];
    /**
    * A name for Redshift DataAPI statement which can be used as filter of ListStatement.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#statement_name CcPipe#statement_name}
    */
    readonly statementName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#with_event CcPipe#with_event}
    */
    readonly withEvent?: boolean | cdktn.IResolvable;
}
export class PipeTargetRedshiftDataParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PipeTargetRedshiftDataParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._database !== undefined) {
            hasAnyValues = true;
            internalValueResult.database = this._database;
        }
        if (this._dbUser !== undefined) {
            hasAnyValues = true;
            internalValueResult.dbUser = this._dbUser;
        }
        if (this._secretManagerArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretManagerArn = this._secretManagerArn;
        }
        if (this._sqls !== undefined) {
            hasAnyValues = true;
            internalValueResult.sqls = this._sqls;
        }
        if (this._statementName !== undefined) {
            hasAnyValues = true;
            internalValueResult.statementName = this._statementName;
        }
        if (this._withEvent !== undefined) {
            hasAnyValues = true;
            internalValueResult.withEvent = this._withEvent;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PipeTargetRedshiftDataParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._database = undefined;
            this._dbUser = undefined;
            this._secretManagerArn = undefined;
            this._sqls = undefined;
            this._statementName = undefined;
            this._withEvent = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._database = value.database;
            this._dbUser = value.dbUser;
            this._secretManagerArn = value.secretManagerArn;
            this._sqls = value.sqls;
            this._statementName = value.statementName;
            this._withEvent = value.withEvent;
        }
    }

    // database - computed: true, optional: true, required: false
    private _database?: string; 
    public get database() {
        return this.getStringAttribute('database');
    }
    public set database(value: string) {
        this._database = value;
    }
    public resetDatabase() {
        this._database = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseInput() {
        return this._database;
    }

    // db_user - computed: true, optional: true, required: false
    private _dbUser?: string; 
    public get dbUser() {
        return this.getStringAttribute('db_user');
    }
    public set dbUser(value: string) {
        this._dbUser = value;
    }
    public resetDbUser() {
        this._dbUser = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dbUserInput() {
        return this._dbUser;
    }

    // secret_manager_arn - computed: true, optional: true, required: false
    private _secretManagerArn?: string; 
    public get secretManagerArn() {
        return this.getStringAttribute('secret_manager_arn');
    }
    public set secretManagerArn(value: string) {
        this._secretManagerArn = value;
    }
    public resetSecretManagerArn() {
        this._secretManagerArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretManagerArnInput() {
        return this._secretManagerArn;
    }

    // sqls - computed: true, optional: true, required: false
    private _sqls?: string[]; 
    public get sqls() {
        return this.getListAttribute('sqls');
    }
    public set sqls(value: string[]) {
        this._sqls = value;
    }
    public resetSqls() {
        this._sqls = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sqlsInput() {
        return this._sqls;
    }

    // statement_name - computed: true, optional: true, required: false
    private _statementName?: string; 
    public get statementName() {
        return this.getStringAttribute('statement_name');
    }
    public set statementName(value: string) {
        this._statementName = value;
    }
    public resetStatementName() {
        this._statementName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statementNameInput() {
        return this._statementName;
    }

    // with_event - computed: true, optional: true, required: false
    private _withEvent?: boolean | cdktn.IResolvable; 
    public get withEvent() {
        return this.getBooleanAttribute('with_event');
    }
    public set withEvent(value: boolean | cdktn.IResolvable) {
        this._withEvent = value;
    }
    public resetWithEvent() {
        this._withEvent = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get withEventInput() {
        return this._withEvent;
    }
}
export interface SageMakerPipelineParameterProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#name CcPipe#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#value CcPipe#value}
    */
    readonly value?: string;
}
export class SageMakerPipelineParameterPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): SageMakerPipelineParameterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SageMakerPipelineParameterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._value = value.value;
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

export class SageMakerPipelineParameterPropertyList extends cdktn.ComplexList {
    public internalValue? : SageMakerPipelineParameterProperty[] | cdktn.IResolvable

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
    public get(index: number): SageMakerPipelineParameterPropertyOutputReference {
        return new SageMakerPipelineParameterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface PipeTargetSageMakerPipelineParametersProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#pipeline_parameter_list CcPipe#pipeline_parameter_list}
    */
    readonly pipelineParameterList?: SageMakerPipelineParameterProperty[] | cdktn.IResolvable;
}
export class PipeTargetSageMakerPipelineParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PipeTargetSageMakerPipelineParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._pipelineParameterList?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.pipelineParameterList = this._pipelineParameterList?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PipeTargetSageMakerPipelineParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._pipelineParameterList.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._pipelineParameterList.internalValue = value.pipelineParameterList;
        }
    }

    // pipeline_parameter_list - computed: true, optional: true, required: false
    private _pipelineParameterList = new SageMakerPipelineParameterPropertyList(this, "pipeline_parameter_list", false);
    public get pipelineParameterList() {
        return this._pipelineParameterList;
    }
    public putPipelineParameterList(value: SageMakerPipelineParameterProperty[] | cdktn.IResolvable) {
        this._pipelineParameterList.internalValue = value;
    }
    public resetPipelineParameterList() {
        this._pipelineParameterList.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pipelineParameterListInput() {
        return this._pipelineParameterList.internalValue;
    }
}
export interface PipeTargetSqsQueueParametersProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#message_deduplication_id CcPipe#message_deduplication_id}
    */
    readonly messageDeduplicationId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#message_group_id CcPipe#message_group_id}
    */
    readonly messageGroupId?: string;
}
export class PipeTargetSqsQueueParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PipeTargetSqsQueueParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._messageDeduplicationId !== undefined) {
            hasAnyValues = true;
            internalValueResult.messageDeduplicationId = this._messageDeduplicationId;
        }
        if (this._messageGroupId !== undefined) {
            hasAnyValues = true;
            internalValueResult.messageGroupId = this._messageGroupId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PipeTargetSqsQueueParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._messageDeduplicationId = undefined;
            this._messageGroupId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._messageDeduplicationId = value.messageDeduplicationId;
            this._messageGroupId = value.messageGroupId;
        }
    }

    // message_deduplication_id - computed: true, optional: true, required: false
    private _messageDeduplicationId?: string; 
    public get messageDeduplicationId() {
        return this.getStringAttribute('message_deduplication_id');
    }
    public set messageDeduplicationId(value: string) {
        this._messageDeduplicationId = value;
    }
    public resetMessageDeduplicationId() {
        this._messageDeduplicationId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get messageDeduplicationIdInput() {
        return this._messageDeduplicationId;
    }

    // message_group_id - computed: true, optional: true, required: false
    private _messageGroupId?: string; 
    public get messageGroupId() {
        return this.getStringAttribute('message_group_id');
    }
    public set messageGroupId(value: string) {
        this._messageGroupId = value;
    }
    public resetMessageGroupId() {
        this._messageGroupId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get messageGroupIdInput() {
        return this._messageGroupId;
    }
}
export interface PipeTargetStateMachineParametersProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#invocation_type CcPipe#invocation_type}
    */
    readonly invocationType?: string;
}
export class PipeTargetStateMachineParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PipeTargetStateMachineParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._invocationType !== undefined) {
            hasAnyValues = true;
            internalValueResult.invocationType = this._invocationType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PipeTargetStateMachineParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._invocationType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._invocationType = value.invocationType;
        }
    }

    // invocation_type - computed: true, optional: true, required: false
    private _invocationType?: string; 
    public get invocationType() {
        return this.getStringAttribute('invocation_type');
    }
    public set invocationType(value: string) {
        this._invocationType = value;
    }
    public resetInvocationType() {
        this._invocationType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get invocationTypeInput() {
        return this._invocationType;
    }
}
export interface DimensionMappingProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#dimension_name CcPipe#dimension_name}
    */
    readonly dimensionName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#dimension_value CcPipe#dimension_value}
    */
    readonly dimensionValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#dimension_value_type CcPipe#dimension_value_type}
    */
    readonly dimensionValueType?: string;
}
export class DimensionMappingPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): DimensionMappingProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dimensionName !== undefined) {
            hasAnyValues = true;
            internalValueResult.dimensionName = this._dimensionName;
        }
        if (this._dimensionValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dimensionValue = this._dimensionValue;
        }
        if (this._dimensionValueType !== undefined) {
            hasAnyValues = true;
            internalValueResult.dimensionValueType = this._dimensionValueType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DimensionMappingProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dimensionName = undefined;
            this._dimensionValue = undefined;
            this._dimensionValueType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dimensionName = value.dimensionName;
            this._dimensionValue = value.dimensionValue;
            this._dimensionValueType = value.dimensionValueType;
        }
    }

    // dimension_name - computed: true, optional: true, required: false
    private _dimensionName?: string; 
    public get dimensionName() {
        return this.getStringAttribute('dimension_name');
    }
    public set dimensionName(value: string) {
        this._dimensionName = value;
    }
    public resetDimensionName() {
        this._dimensionName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dimensionNameInput() {
        return this._dimensionName;
    }

    // dimension_value - computed: true, optional: true, required: false
    private _dimensionValue?: string; 
    public get dimensionValue() {
        return this.getStringAttribute('dimension_value');
    }
    public set dimensionValue(value: string) {
        this._dimensionValue = value;
    }
    public resetDimensionValue() {
        this._dimensionValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dimensionValueInput() {
        return this._dimensionValue;
    }

    // dimension_value_type - computed: true, optional: true, required: false
    private _dimensionValueType?: string; 
    public get dimensionValueType() {
        return this.getStringAttribute('dimension_value_type');
    }
    public set dimensionValueType(value: string) {
        this._dimensionValueType = value;
    }
    public resetDimensionValueType() {
        this._dimensionValueType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dimensionValueTypeInput() {
        return this._dimensionValueType;
    }
}

export class DimensionMappingPropertyList extends cdktn.ComplexList {
    public internalValue? : DimensionMappingProperty[] | cdktn.IResolvable

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
    public get(index: number): DimensionMappingPropertyOutputReference {
        return new DimensionMappingPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface MultiMeasureAttributeMappingProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#measure_value CcPipe#measure_value}
    */
    readonly measureValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#measure_value_type CcPipe#measure_value_type}
    */
    readonly measureValueType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#multi_measure_attribute_name CcPipe#multi_measure_attribute_name}
    */
    readonly multiMeasureAttributeName?: string;
}
export class MultiMeasureAttributeMappingPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): MultiMeasureAttributeMappingProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._measureValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.measureValue = this._measureValue;
        }
        if (this._measureValueType !== undefined) {
            hasAnyValues = true;
            internalValueResult.measureValueType = this._measureValueType;
        }
        if (this._multiMeasureAttributeName !== undefined) {
            hasAnyValues = true;
            internalValueResult.multiMeasureAttributeName = this._multiMeasureAttributeName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MultiMeasureAttributeMappingProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._measureValue = undefined;
            this._measureValueType = undefined;
            this._multiMeasureAttributeName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._measureValue = value.measureValue;
            this._measureValueType = value.measureValueType;
            this._multiMeasureAttributeName = value.multiMeasureAttributeName;
        }
    }

    // measure_value - computed: true, optional: true, required: false
    private _measureValue?: string; 
    public get measureValue() {
        return this.getStringAttribute('measure_value');
    }
    public set measureValue(value: string) {
        this._measureValue = value;
    }
    public resetMeasureValue() {
        this._measureValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get measureValueInput() {
        return this._measureValue;
    }

    // measure_value_type - computed: true, optional: true, required: false
    private _measureValueType?: string; 
    public get measureValueType() {
        return this.getStringAttribute('measure_value_type');
    }
    public set measureValueType(value: string) {
        this._measureValueType = value;
    }
    public resetMeasureValueType() {
        this._measureValueType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get measureValueTypeInput() {
        return this._measureValueType;
    }

    // multi_measure_attribute_name - computed: true, optional: true, required: false
    private _multiMeasureAttributeName?: string; 
    public get multiMeasureAttributeName() {
        return this.getStringAttribute('multi_measure_attribute_name');
    }
    public set multiMeasureAttributeName(value: string) {
        this._multiMeasureAttributeName = value;
    }
    public resetMultiMeasureAttributeName() {
        this._multiMeasureAttributeName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get multiMeasureAttributeNameInput() {
        return this._multiMeasureAttributeName;
    }
}

export class MultiMeasureAttributeMappingPropertyList extends cdktn.ComplexList {
    public internalValue? : MultiMeasureAttributeMappingProperty[] | cdktn.IResolvable

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
    public get(index: number): MultiMeasureAttributeMappingPropertyOutputReference {
        return new MultiMeasureAttributeMappingPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface MultiMeasureMappingProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#multi_measure_attribute_mappings CcPipe#multi_measure_attribute_mappings}
    */
    readonly multiMeasureAttributeMappings?: MultiMeasureAttributeMappingProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#multi_measure_name CcPipe#multi_measure_name}
    */
    readonly multiMeasureName?: string;
}
export class MultiMeasureMappingPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): MultiMeasureMappingProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._multiMeasureAttributeMappings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.multiMeasureAttributeMappings = this._multiMeasureAttributeMappings?.internalValue;
        }
        if (this._multiMeasureName !== undefined) {
            hasAnyValues = true;
            internalValueResult.multiMeasureName = this._multiMeasureName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MultiMeasureMappingProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._multiMeasureAttributeMappings.internalValue = undefined;
            this._multiMeasureName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._multiMeasureAttributeMappings.internalValue = value.multiMeasureAttributeMappings;
            this._multiMeasureName = value.multiMeasureName;
        }
    }

    // multi_measure_attribute_mappings - computed: true, optional: true, required: false
    private _multiMeasureAttributeMappings = new MultiMeasureAttributeMappingPropertyList(this, "multi_measure_attribute_mappings", false);
    public get multiMeasureAttributeMappings() {
        return this._multiMeasureAttributeMappings;
    }
    public putMultiMeasureAttributeMappings(value: MultiMeasureAttributeMappingProperty[] | cdktn.IResolvable) {
        this._multiMeasureAttributeMappings.internalValue = value;
    }
    public resetMultiMeasureAttributeMappings() {
        this._multiMeasureAttributeMappings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get multiMeasureAttributeMappingsInput() {
        return this._multiMeasureAttributeMappings.internalValue;
    }

    // multi_measure_name - computed: true, optional: true, required: false
    private _multiMeasureName?: string; 
    public get multiMeasureName() {
        return this.getStringAttribute('multi_measure_name');
    }
    public set multiMeasureName(value: string) {
        this._multiMeasureName = value;
    }
    public resetMultiMeasureName() {
        this._multiMeasureName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get multiMeasureNameInput() {
        return this._multiMeasureName;
    }
}

export class MultiMeasureMappingPropertyList extends cdktn.ComplexList {
    public internalValue? : MultiMeasureMappingProperty[] | cdktn.IResolvable

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
    public get(index: number): MultiMeasureMappingPropertyOutputReference {
        return new MultiMeasureMappingPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface SingleMeasureMappingProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#measure_name CcPipe#measure_name}
    */
    readonly measureName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#measure_value CcPipe#measure_value}
    */
    readonly measureValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#measure_value_type CcPipe#measure_value_type}
    */
    readonly measureValueType?: string;
}
export class SingleMeasureMappingPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): SingleMeasureMappingProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._measureName !== undefined) {
            hasAnyValues = true;
            internalValueResult.measureName = this._measureName;
        }
        if (this._measureValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.measureValue = this._measureValue;
        }
        if (this._measureValueType !== undefined) {
            hasAnyValues = true;
            internalValueResult.measureValueType = this._measureValueType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SingleMeasureMappingProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._measureName = undefined;
            this._measureValue = undefined;
            this._measureValueType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._measureName = value.measureName;
            this._measureValue = value.measureValue;
            this._measureValueType = value.measureValueType;
        }
    }

    // measure_name - computed: true, optional: true, required: false
    private _measureName?: string; 
    public get measureName() {
        return this.getStringAttribute('measure_name');
    }
    public set measureName(value: string) {
        this._measureName = value;
    }
    public resetMeasureName() {
        this._measureName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get measureNameInput() {
        return this._measureName;
    }

    // measure_value - computed: true, optional: true, required: false
    private _measureValue?: string; 
    public get measureValue() {
        return this.getStringAttribute('measure_value');
    }
    public set measureValue(value: string) {
        this._measureValue = value;
    }
    public resetMeasureValue() {
        this._measureValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get measureValueInput() {
        return this._measureValue;
    }

    // measure_value_type - computed: true, optional: true, required: false
    private _measureValueType?: string; 
    public get measureValueType() {
        return this.getStringAttribute('measure_value_type');
    }
    public set measureValueType(value: string) {
        this._measureValueType = value;
    }
    public resetMeasureValueType() {
        this._measureValueType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get measureValueTypeInput() {
        return this._measureValueType;
    }
}

export class SingleMeasureMappingPropertyList extends cdktn.ComplexList {
    public internalValue? : SingleMeasureMappingProperty[] | cdktn.IResolvable

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
    public get(index: number): SingleMeasureMappingPropertyOutputReference {
        return new SingleMeasureMappingPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface PipeTargetTimestreamParametersProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#dimension_mappings CcPipe#dimension_mappings}
    */
    readonly dimensionMappings?: DimensionMappingProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#epoch_time_unit CcPipe#epoch_time_unit}
    */
    readonly epochTimeUnit?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#multi_measure_mappings CcPipe#multi_measure_mappings}
    */
    readonly multiMeasureMappings?: MultiMeasureMappingProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#single_measure_mappings CcPipe#single_measure_mappings}
    */
    readonly singleMeasureMappings?: SingleMeasureMappingProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#time_field_type CcPipe#time_field_type}
    */
    readonly timeFieldType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#time_value CcPipe#time_value}
    */
    readonly timeValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#timestamp_format CcPipe#timestamp_format}
    */
    readonly timestampFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#version_value CcPipe#version_value}
    */
    readonly versionValue?: string;
}
export class PipeTargetTimestreamParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PipeTargetTimestreamParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dimensionMappings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dimensionMappings = this._dimensionMappings?.internalValue;
        }
        if (this._epochTimeUnit !== undefined) {
            hasAnyValues = true;
            internalValueResult.epochTimeUnit = this._epochTimeUnit;
        }
        if (this._multiMeasureMappings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.multiMeasureMappings = this._multiMeasureMappings?.internalValue;
        }
        if (this._singleMeasureMappings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.singleMeasureMappings = this._singleMeasureMappings?.internalValue;
        }
        if (this._timeFieldType !== undefined) {
            hasAnyValues = true;
            internalValueResult.timeFieldType = this._timeFieldType;
        }
        if (this._timeValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.timeValue = this._timeValue;
        }
        if (this._timestampFormat !== undefined) {
            hasAnyValues = true;
            internalValueResult.timestampFormat = this._timestampFormat;
        }
        if (this._versionValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.versionValue = this._versionValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PipeTargetTimestreamParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dimensionMappings.internalValue = undefined;
            this._epochTimeUnit = undefined;
            this._multiMeasureMappings.internalValue = undefined;
            this._singleMeasureMappings.internalValue = undefined;
            this._timeFieldType = undefined;
            this._timeValue = undefined;
            this._timestampFormat = undefined;
            this._versionValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dimensionMappings.internalValue = value.dimensionMappings;
            this._epochTimeUnit = value.epochTimeUnit;
            this._multiMeasureMappings.internalValue = value.multiMeasureMappings;
            this._singleMeasureMappings.internalValue = value.singleMeasureMappings;
            this._timeFieldType = value.timeFieldType;
            this._timeValue = value.timeValue;
            this._timestampFormat = value.timestampFormat;
            this._versionValue = value.versionValue;
        }
    }

    // dimension_mappings - computed: true, optional: true, required: false
    private _dimensionMappings = new DimensionMappingPropertyList(this, "dimension_mappings", false);
    public get dimensionMappings() {
        return this._dimensionMappings;
    }
    public putDimensionMappings(value: DimensionMappingProperty[] | cdktn.IResolvable) {
        this._dimensionMappings.internalValue = value;
    }
    public resetDimensionMappings() {
        this._dimensionMappings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dimensionMappingsInput() {
        return this._dimensionMappings.internalValue;
    }

    // epoch_time_unit - computed: true, optional: true, required: false
    private _epochTimeUnit?: string; 
    public get epochTimeUnit() {
        return this.getStringAttribute('epoch_time_unit');
    }
    public set epochTimeUnit(value: string) {
        this._epochTimeUnit = value;
    }
    public resetEpochTimeUnit() {
        this._epochTimeUnit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get epochTimeUnitInput() {
        return this._epochTimeUnit;
    }

    // multi_measure_mappings - computed: true, optional: true, required: false
    private _multiMeasureMappings = new MultiMeasureMappingPropertyList(this, "multi_measure_mappings", false);
    public get multiMeasureMappings() {
        return this._multiMeasureMappings;
    }
    public putMultiMeasureMappings(value: MultiMeasureMappingProperty[] | cdktn.IResolvable) {
        this._multiMeasureMappings.internalValue = value;
    }
    public resetMultiMeasureMappings() {
        this._multiMeasureMappings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get multiMeasureMappingsInput() {
        return this._multiMeasureMappings.internalValue;
    }

    // single_measure_mappings - computed: true, optional: true, required: false
    private _singleMeasureMappings = new SingleMeasureMappingPropertyList(this, "single_measure_mappings", false);
    public get singleMeasureMappings() {
        return this._singleMeasureMappings;
    }
    public putSingleMeasureMappings(value: SingleMeasureMappingProperty[] | cdktn.IResolvable) {
        this._singleMeasureMappings.internalValue = value;
    }
    public resetSingleMeasureMappings() {
        this._singleMeasureMappings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get singleMeasureMappingsInput() {
        return this._singleMeasureMappings.internalValue;
    }

    // time_field_type - computed: true, optional: true, required: false
    private _timeFieldType?: string; 
    public get timeFieldType() {
        return this.getStringAttribute('time_field_type');
    }
    public set timeFieldType(value: string) {
        this._timeFieldType = value;
    }
    public resetTimeFieldType() {
        this._timeFieldType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeFieldTypeInput() {
        return this._timeFieldType;
    }

    // time_value - computed: true, optional: true, required: false
    private _timeValue?: string; 
    public get timeValue() {
        return this.getStringAttribute('time_value');
    }
    public set timeValue(value: string) {
        this._timeValue = value;
    }
    public resetTimeValue() {
        this._timeValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeValueInput() {
        return this._timeValue;
    }

    // timestamp_format - computed: true, optional: true, required: false
    private _timestampFormat?: string; 
    public get timestampFormat() {
        return this.getStringAttribute('timestamp_format');
    }
    public set timestampFormat(value: string) {
        this._timestampFormat = value;
    }
    public resetTimestampFormat() {
        this._timestampFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timestampFormatInput() {
        return this._timestampFormat;
    }

    // version_value - computed: true, optional: true, required: false
    private _versionValue?: string; 
    public get versionValue() {
        return this.getStringAttribute('version_value');
    }
    public set versionValue(value: string) {
        this._versionValue = value;
    }
    public resetVersionValue() {
        this._versionValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get versionValueInput() {
        return this._versionValue;
    }
}
export interface PipeTargetParametersProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#batch_job_parameters CcPipe#batch_job_parameters}
    */
    readonly batchJobParameters?: PipeTargetBatchJobParametersProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#cloudwatch_logs_parameters CcPipe#cloudwatch_logs_parameters}
    */
    readonly cloudwatchLogsParameters?: PipeTargetCloudWatchLogsParametersProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#ecs_task_parameters CcPipe#ecs_task_parameters}
    */
    readonly ecsTaskParameters?: PipeTargetEcsTaskParametersProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#event_bridge_event_bus_parameters CcPipe#event_bridge_event_bus_parameters}
    */
    readonly eventBridgeEventBusParameters?: PipeTargetEventBridgeEventBusParametersProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#http_parameters CcPipe#http_parameters}
    */
    readonly httpParameters?: PipeTargetHttpParametersProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#input_template CcPipe#input_template}
    */
    readonly inputTemplate?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#kinesis_stream_parameters CcPipe#kinesis_stream_parameters}
    */
    readonly kinesisStreamParameters?: PipeTargetKinesisStreamParametersProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#lambda_function_parameters CcPipe#lambda_function_parameters}
    */
    readonly lambdaFunctionParameters?: PipeTargetLambdaFunctionParametersProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#redshift_data_parameters CcPipe#redshift_data_parameters}
    */
    readonly redshiftDataParameters?: PipeTargetRedshiftDataParametersProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#sage_maker_pipeline_parameters CcPipe#sage_maker_pipeline_parameters}
    */
    readonly sageMakerPipelineParameters?: PipeTargetSageMakerPipelineParametersProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#sqs_queue_parameters CcPipe#sqs_queue_parameters}
    */
    readonly sqsQueueParameters?: PipeTargetSqsQueueParametersProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#step_function_state_machine_parameters CcPipe#step_function_state_machine_parameters}
    */
    readonly stepFunctionStateMachineParameters?: PipeTargetStateMachineParametersProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pipes_pipe#timestream_parameters CcPipe#timestream_parameters}
    */
    readonly timestreamParameters?: PipeTargetTimestreamParametersProperty;
}
export class PipeTargetParametersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PipeTargetParametersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._batchJobParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.batchJobParameters = this._batchJobParameters?.internalValue;
        }
        if (this._cloudwatchLogsParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.cloudwatchLogsParameters = this._cloudwatchLogsParameters?.internalValue;
        }
        if (this._ecsTaskParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.ecsTaskParameters = this._ecsTaskParameters?.internalValue;
        }
        if (this._eventBridgeEventBusParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.eventBridgeEventBusParameters = this._eventBridgeEventBusParameters?.internalValue;
        }
        if (this._httpParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.httpParameters = this._httpParameters?.internalValue;
        }
        if (this._inputTemplate !== undefined) {
            hasAnyValues = true;
            internalValueResult.inputTemplate = this._inputTemplate;
        }
        if (this._kinesisStreamParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.kinesisStreamParameters = this._kinesisStreamParameters?.internalValue;
        }
        if (this._lambdaFunctionParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.lambdaFunctionParameters = this._lambdaFunctionParameters?.internalValue;
        }
        if (this._redshiftDataParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.redshiftDataParameters = this._redshiftDataParameters?.internalValue;
        }
        if (this._sageMakerPipelineParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sageMakerPipelineParameters = this._sageMakerPipelineParameters?.internalValue;
        }
        if (this._sqsQueueParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sqsQueueParameters = this._sqsQueueParameters?.internalValue;
        }
        if (this._stepFunctionStateMachineParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.stepFunctionStateMachineParameters = this._stepFunctionStateMachineParameters?.internalValue;
        }
        if (this._timestreamParameters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.timestreamParameters = this._timestreamParameters?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PipeTargetParametersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._batchJobParameters.internalValue = undefined;
            this._cloudwatchLogsParameters.internalValue = undefined;
            this._ecsTaskParameters.internalValue = undefined;
            this._eventBridgeEventBusParameters.internalValue = undefined;
            this._httpParameters.internalValue = undefined;
            this._inputTemplate = undefined;
            this._kinesisStreamParameters.internalValue = undefined;
            this._lambdaFunctionParameters.internalValue = undefined;
            this._redshiftDataParameters.internalValue = undefined;
            this._sageMakerPipelineParameters.internalValue = undefined;
            this._sqsQueueParameters.internalValue = undefined;
            this._stepFunctionStateMachineParameters.internalValue = undefined;
            this._timestreamParameters.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._batchJobParameters.internalValue = value.batchJobParameters;
            this._cloudwatchLogsParameters.internalValue = value.cloudwatchLogsParameters;
            this._ecsTaskParameters.internalValue = value.ecsTaskParameters;
            this._eventBridgeEventBusParameters.internalValue = value.eventBridgeEventBusParameters;
            this._httpParameters.internalValue = value.httpParameters;
            this._inputTemplate = value.inputTemplate;
            this._kinesisStreamParameters.internalValue = value.kinesisStreamParameters;
            this._lambdaFunctionParameters.internalValue = value.lambdaFunctionParameters;
            this._redshiftDataParameters.internalValue = value.redshiftDataParameters;
            this._sageMakerPipelineParameters.internalValue = value.sageMakerPipelineParameters;
            this._sqsQueueParameters.internalValue = value.sqsQueueParameters;
            this._stepFunctionStateMachineParameters.internalValue = value.stepFunctionStateMachineParameters;
            this._timestreamParameters.internalValue = value.timestreamParameters;
        }
    }

    // batch_job_parameters - computed: true, optional: true, required: false
    private _batchJobParameters = new PipeTargetBatchJobParametersPropertyOutputReference(this, "batch_job_parameters");
    public get batchJobParameters() {
        return this._batchJobParameters;
    }
    public putBatchJobParameters(value: PipeTargetBatchJobParametersProperty) {
        this._batchJobParameters.internalValue = value;
    }
    public resetBatchJobParameters() {
        this._batchJobParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get batchJobParametersInput() {
        return this._batchJobParameters.internalValue;
    }

    // cloudwatch_logs_parameters - computed: true, optional: true, required: false
    private _cloudwatchLogsParameters = new PipeTargetCloudWatchLogsParametersPropertyOutputReference(this, "cloudwatch_logs_parameters");
    public get cloudwatchLogsParameters() {
        return this._cloudwatchLogsParameters;
    }
    public putCloudwatchLogsParameters(value: PipeTargetCloudWatchLogsParametersProperty) {
        this._cloudwatchLogsParameters.internalValue = value;
    }
    public resetCloudwatchLogsParameters() {
        this._cloudwatchLogsParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cloudwatchLogsParametersInput() {
        return this._cloudwatchLogsParameters.internalValue;
    }

    // ecs_task_parameters - computed: true, optional: true, required: false
    private _ecsTaskParameters = new PipeTargetEcsTaskParametersPropertyOutputReference(this, "ecs_task_parameters");
    public get ecsTaskParameters() {
        return this._ecsTaskParameters;
    }
    public putEcsTaskParameters(value: PipeTargetEcsTaskParametersProperty) {
        this._ecsTaskParameters.internalValue = value;
    }
    public resetEcsTaskParameters() {
        this._ecsTaskParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ecsTaskParametersInput() {
        return this._ecsTaskParameters.internalValue;
    }

    // event_bridge_event_bus_parameters - computed: true, optional: true, required: false
    private _eventBridgeEventBusParameters = new PipeTargetEventBridgeEventBusParametersPropertyOutputReference(this, "event_bridge_event_bus_parameters");
    public get eventBridgeEventBusParameters() {
        return this._eventBridgeEventBusParameters;
    }
    public putEventBridgeEventBusParameters(value: PipeTargetEventBridgeEventBusParametersProperty) {
        this._eventBridgeEventBusParameters.internalValue = value;
    }
    public resetEventBridgeEventBusParameters() {
        this._eventBridgeEventBusParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventBridgeEventBusParametersInput() {
        return this._eventBridgeEventBusParameters.internalValue;
    }

    // http_parameters - computed: true, optional: true, required: false
    private _httpParameters = new PipeTargetHttpParametersPropertyOutputReference(this, "http_parameters");
    public get httpParameters() {
        return this._httpParameters;
    }
    public putHttpParameters(value: PipeTargetHttpParametersProperty) {
        this._httpParameters.internalValue = value;
    }
    public resetHttpParameters() {
        this._httpParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get httpParametersInput() {
        return this._httpParameters.internalValue;
    }

    // input_template - computed: true, optional: true, required: false
    private _inputTemplate?: string; 
    public get inputTemplate() {
        return this.getStringAttribute('input_template');
    }
    public set inputTemplate(value: string) {
        this._inputTemplate = value;
    }
    public resetInputTemplate() {
        this._inputTemplate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputTemplateInput() {
        return this._inputTemplate;
    }

    // kinesis_stream_parameters - computed: true, optional: true, required: false
    private _kinesisStreamParameters = new PipeTargetKinesisStreamParametersPropertyOutputReference(this, "kinesis_stream_parameters");
    public get kinesisStreamParameters() {
        return this._kinesisStreamParameters;
    }
    public putKinesisStreamParameters(value: PipeTargetKinesisStreamParametersProperty) {
        this._kinesisStreamParameters.internalValue = value;
    }
    public resetKinesisStreamParameters() {
        this._kinesisStreamParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kinesisStreamParametersInput() {
        return this._kinesisStreamParameters.internalValue;
    }

    // lambda_function_parameters - computed: true, optional: true, required: false
    private _lambdaFunctionParameters = new PipeTargetLambdaFunctionParametersPropertyOutputReference(this, "lambda_function_parameters");
    public get lambdaFunctionParameters() {
        return this._lambdaFunctionParameters;
    }
    public putLambdaFunctionParameters(value: PipeTargetLambdaFunctionParametersProperty) {
        this._lambdaFunctionParameters.internalValue = value;
    }
    public resetLambdaFunctionParameters() {
        this._lambdaFunctionParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lambdaFunctionParametersInput() {
        return this._lambdaFunctionParameters.internalValue;
    }

    // redshift_data_parameters - computed: true, optional: true, required: false
    private _redshiftDataParameters = new PipeTargetRedshiftDataParametersPropertyOutputReference(this, "redshift_data_parameters");
    public get redshiftDataParameters() {
        return this._redshiftDataParameters;
    }
    public putRedshiftDataParameters(value: PipeTargetRedshiftDataParametersProperty) {
        this._redshiftDataParameters.internalValue = value;
    }
    public resetRedshiftDataParameters() {
        this._redshiftDataParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get redshiftDataParametersInput() {
        return this._redshiftDataParameters.internalValue;
    }

    // sage_maker_pipeline_parameters - computed: true, optional: true, required: false
    private _sageMakerPipelineParameters = new PipeTargetSageMakerPipelineParametersPropertyOutputReference(this, "sage_maker_pipeline_parameters");
    public get sageMakerPipelineParameters() {
        return this._sageMakerPipelineParameters;
    }
    public putSageMakerPipelineParameters(value: PipeTargetSageMakerPipelineParametersProperty) {
        this._sageMakerPipelineParameters.internalValue = value;
    }
    public resetSageMakerPipelineParameters() {
        this._sageMakerPipelineParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sageMakerPipelineParametersInput() {
        return this._sageMakerPipelineParameters.internalValue;
    }

    // sqs_queue_parameters - computed: true, optional: true, required: false
    private _sqsQueueParameters = new PipeTargetSqsQueueParametersPropertyOutputReference(this, "sqs_queue_parameters");
    public get sqsQueueParameters() {
        return this._sqsQueueParameters;
    }
    public putSqsQueueParameters(value: PipeTargetSqsQueueParametersProperty) {
        this._sqsQueueParameters.internalValue = value;
    }
    public resetSqsQueueParameters() {
        this._sqsQueueParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sqsQueueParametersInput() {
        return this._sqsQueueParameters.internalValue;
    }

    // step_function_state_machine_parameters - computed: true, optional: true, required: false
    private _stepFunctionStateMachineParameters = new PipeTargetStateMachineParametersPropertyOutputReference(this, "step_function_state_machine_parameters");
    public get stepFunctionStateMachineParameters() {
        return this._stepFunctionStateMachineParameters;
    }
    public putStepFunctionStateMachineParameters(value: PipeTargetStateMachineParametersProperty) {
        this._stepFunctionStateMachineParameters.internalValue = value;
    }
    public resetStepFunctionStateMachineParameters() {
        this._stepFunctionStateMachineParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stepFunctionStateMachineParametersInput() {
        return this._stepFunctionStateMachineParameters.internalValue;
    }

    // timestream_parameters - computed: true, optional: true, required: false
    private _timestreamParameters = new PipeTargetTimestreamParametersPropertyOutputReference(this, "timestream_parameters");
    public get timestreamParameters() {
        return this._timestreamParameters;
    }
    public putTimestreamParameters(value: PipeTargetTimestreamParametersProperty) {
        this._timestreamParameters.internalValue = value;
    }
    public resetTimestreamParameters() {
        this._timestreamParameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timestreamParametersInput() {
        return this._timestreamParameters.internalValue;
    }
}
}
