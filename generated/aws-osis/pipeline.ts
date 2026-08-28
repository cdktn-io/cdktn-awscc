// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/osis_pipeline

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcPipelineProps extends cdktn.TerraformMetaArguments {
    /**
    * Key-value pairs to configure buffering.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/osis_pipeline#buffer_options CcPipeline#buffer_options}
    */
    readonly bufferOptions?: CcPipeline.BufferOptionsProperty;
    /**
    * Key-value pairs to configure encryption at rest.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/osis_pipeline#encryption_at_rest_options CcPipeline#encryption_at_rest_options}
    */
    readonly encryptionAtRestOptions?: CcPipeline.EncryptionAtRestOptionsProperty;
    /**
    * Key-value pairs to configure log publishing.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/osis_pipeline#log_publishing_options CcPipeline#log_publishing_options}
    */
    readonly logPublishingOptions?: CcPipeline.LogPublishingOptionsProperty;
    /**
    * The maximum pipeline capacity, in Ingestion OpenSearch Compute Units (OCUs).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/osis_pipeline#max_units CcPipeline#max_units}
    */
    readonly maxUnits: number;
    /**
    * The minimum pipeline capacity, in Ingestion OpenSearch Compute Units (OCUs).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/osis_pipeline#min_units CcPipeline#min_units}
    */
    readonly minUnits: number;
    /**
    * The Data Prepper pipeline configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/osis_pipeline#pipeline_configuration_body CcPipeline#pipeline_configuration_body}
    */
    readonly pipelineConfigurationBody: string;
    /**
    * Name of the OpenSearch Ingestion Service pipeline to create. Pipeline names are unique across the pipelines owned by an account within an AWS Region.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/osis_pipeline#pipeline_name CcPipeline#pipeline_name}
    */
    readonly pipelineName: string;
    /**
    * The Pipeline Role (ARN) for the pipeline.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/osis_pipeline#pipeline_role_arn CcPipeline#pipeline_role_arn}
    */
    readonly pipelineRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/osis_pipeline#resource_policy CcPipeline#resource_policy}
    */
    readonly resourcePolicy?: CcPipeline.ResourcePolicyProperty;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/osis_pipeline#tags CcPipeline#tags}
    */
    readonly tags?: CcPipeline.TagProperty[] | cdktn.IResolvable;
    /**
    * Container for the values required to configure VPC access for the pipeline. If you don't specify these values, OpenSearch Ingestion Service creates the pipeline with a public endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/osis_pipeline#vpc_options CcPipeline#vpc_options}
    */
    readonly vpcOptions?: CcPipeline.VpcOptionsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/osis_pipeline awscc_osis_pipeline}
*/
export class CcPipeline extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_osis_pipeline";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcPipeline resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcPipeline to import
    * @param importFromId The id of the existing CcPipeline that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/osis_pipeline#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcPipeline to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_osis_pipeline", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/osis_pipeline awscc_osis_pipeline} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcPipelineProps
    */
    public constructor(scope: Construct, id: string, config: CcPipelineProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_osis_pipeline',
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
        this._bufferOptions.internalValue = config.bufferOptions;
        this._encryptionAtRestOptions.internalValue = config.encryptionAtRestOptions;
        this._logPublishingOptions.internalValue = config.logPublishingOptions;
        this._maxUnits = config.maxUnits;
        this._minUnits = config.minUnits;
        this._pipelineConfigurationBody = config.pipelineConfigurationBody;
        this._pipelineName = config.pipelineName;
        this._pipelineRoleArn = config.pipelineRoleArn;
        this._resourcePolicy.internalValue = config.resourcePolicy;
        this._tags.internalValue = config.tags;
        this._vpcOptions.internalValue = config.vpcOptions;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // buffer_options - computed: true, optional: true, required: false
    private _bufferOptions = new CcPipeline.BufferOptionsPropertyOutputReference(this, "buffer_options");
    public get bufferOptions() {
        return this._bufferOptions;
    }
    public putBufferOptions(value: CcPipeline.BufferOptionsProperty) {
        this._bufferOptions.internalValue = value;
    }
    public resetBufferOptions() {
        this._bufferOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bufferOptionsInput() {
        return this._bufferOptions.internalValue;
    }

    // encryption_at_rest_options - computed: true, optional: true, required: false
    private _encryptionAtRestOptions = new CcPipeline.EncryptionAtRestOptionsPropertyOutputReference(this, "encryption_at_rest_options");
    public get encryptionAtRestOptions() {
        return this._encryptionAtRestOptions;
    }
    public putEncryptionAtRestOptions(value: CcPipeline.EncryptionAtRestOptionsProperty) {
        this._encryptionAtRestOptions.internalValue = value;
    }
    public resetEncryptionAtRestOptions() {
        this._encryptionAtRestOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionAtRestOptionsInput() {
        return this._encryptionAtRestOptions.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // ingest_endpoint_urls - computed: true, optional: false, required: false
    public get ingestEndpointUrls() {
        return this.getListAttribute('ingest_endpoint_urls');
    }

    // log_publishing_options - computed: true, optional: true, required: false
    private _logPublishingOptions = new CcPipeline.LogPublishingOptionsPropertyOutputReference(this, "log_publishing_options");
    public get logPublishingOptions() {
        return this._logPublishingOptions;
    }
    public putLogPublishingOptions(value: CcPipeline.LogPublishingOptionsProperty) {
        this._logPublishingOptions.internalValue = value;
    }
    public resetLogPublishingOptions() {
        this._logPublishingOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logPublishingOptionsInput() {
        return this._logPublishingOptions.internalValue;
    }

    // max_units - computed: false, optional: false, required: true
    private _maxUnits?: number; 
    public get maxUnits() {
        return this.getNumberAttribute('max_units');
    }
    public set maxUnits(value: number) {
        this._maxUnits = value;
    }
    // Temporarily expose input value. Use with caution.
    public get maxUnitsInput() {
        return this._maxUnits;
    }

    // min_units - computed: false, optional: false, required: true
    private _minUnits?: number; 
    public get minUnits() {
        return this.getNumberAttribute('min_units');
    }
    public set minUnits(value: number) {
        this._minUnits = value;
    }
    // Temporarily expose input value. Use with caution.
    public get minUnitsInput() {
        return this._minUnits;
    }

    // pipeline_arn - computed: true, optional: false, required: false
    public get pipelineArn() {
        return this.getStringAttribute('pipeline_arn');
    }

    // pipeline_configuration_body - computed: false, optional: false, required: true
    private _pipelineConfigurationBody?: string; 
    public get pipelineConfigurationBody() {
        return this.getStringAttribute('pipeline_configuration_body');
    }
    public set pipelineConfigurationBody(value: string) {
        this._pipelineConfigurationBody = value;
    }
    // Temporarily expose input value. Use with caution.
    public get pipelineConfigurationBodyInput() {
        return this._pipelineConfigurationBody;
    }

    // pipeline_name - computed: false, optional: false, required: true
    private _pipelineName?: string; 
    public get pipelineName() {
        return this.getStringAttribute('pipeline_name');
    }
    public set pipelineName(value: string) {
        this._pipelineName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get pipelineNameInput() {
        return this._pipelineName;
    }

    // pipeline_role_arn - computed: true, optional: true, required: false
    private _pipelineRoleArn?: string; 
    public get pipelineRoleArn() {
        return this.getStringAttribute('pipeline_role_arn');
    }
    public set pipelineRoleArn(value: string) {
        this._pipelineRoleArn = value;
    }
    public resetPipelineRoleArn() {
        this._pipelineRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pipelineRoleArnInput() {
        return this._pipelineRoleArn;
    }

    // resource_policy - computed: true, optional: true, required: false
    private _resourcePolicy = new CcPipeline.ResourcePolicyPropertyOutputReference(this, "resource_policy");
    public get resourcePolicy() {
        return this._resourcePolicy;
    }
    public putResourcePolicy(value: CcPipeline.ResourcePolicyProperty) {
        this._resourcePolicy.internalValue = value;
    }
    public resetResourcePolicy() {
        this._resourcePolicy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourcePolicyInput() {
        return this._resourcePolicy.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcPipeline.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcPipeline.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // vpc_endpoint_service - computed: true, optional: false, required: false
    public get vpcEndpointService() {
        return this.getStringAttribute('vpc_endpoint_service');
    }

    // vpc_endpoints - computed: true, optional: false, required: false
    private _vpcEndpoints = new CcPipeline.VpcEndpointsPropertyList(this, "vpc_endpoints", false);
    public get vpcEndpoints() {
        return this._vpcEndpoints;
    }

    // vpc_options - computed: true, optional: true, required: false
    private _vpcOptions = new CcPipeline.VpcOptionsPropertyOutputReference(this, "vpc_options");
    public get vpcOptions() {
        return this._vpcOptions;
    }
    public putVpcOptions(value: CcPipeline.VpcOptionsProperty) {
        this._vpcOptions.internalValue = value;
    }
    public resetVpcOptions() {
        this._vpcOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcOptionsInput() {
        return this._vpcOptions.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            buffer_options: ccPipelineBufferOptionsPropertyToTerraform(this._bufferOptions.internalValue),
            encryption_at_rest_options: ccPipelineEncryptionAtRestOptionsPropertyToTerraform(this._encryptionAtRestOptions.internalValue),
            log_publishing_options: ccPipelineLogPublishingOptionsPropertyToTerraform(this._logPublishingOptions.internalValue),
            max_units: cdktn.numberToTerraform(this._maxUnits),
            min_units: cdktn.numberToTerraform(this._minUnits),
            pipeline_configuration_body: cdktn.stringToTerraform(this._pipelineConfigurationBody),
            pipeline_name: cdktn.stringToTerraform(this._pipelineName),
            pipeline_role_arn: cdktn.stringToTerraform(this._pipelineRoleArn),
            resource_policy: ccPipelineResourcePolicyPropertyToTerraform(this._resourcePolicy.internalValue),
            tags: cdktn.listMapper(ccPipelineTagPropertyToTerraform, false)(this._tags.internalValue),
            vpc_options: ccPipelineVpcOptionsPropertyToTerraform(this._vpcOptions.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            buffer_options: {
                value: ccPipelineBufferOptionsPropertyToHclTerraform(this._bufferOptions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcPipeline.BufferOptionsProperty",
            },
            encryption_at_rest_options: {
                value: ccPipelineEncryptionAtRestOptionsPropertyToHclTerraform(this._encryptionAtRestOptions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcPipeline.EncryptionAtRestOptionsProperty",
            },
            log_publishing_options: {
                value: ccPipelineLogPublishingOptionsPropertyToHclTerraform(this._logPublishingOptions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcPipeline.LogPublishingOptionsProperty",
            },
            max_units: {
                value: cdktn.numberToHclTerraform(this._maxUnits),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            min_units: {
                value: cdktn.numberToHclTerraform(this._minUnits),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            pipeline_configuration_body: {
                value: cdktn.stringToHclTerraform(this._pipelineConfigurationBody),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            pipeline_name: {
                value: cdktn.stringToHclTerraform(this._pipelineName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            pipeline_role_arn: {
                value: cdktn.stringToHclTerraform(this._pipelineRoleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            resource_policy: {
                value: ccPipelineResourcePolicyPropertyToHclTerraform(this._resourcePolicy.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcPipeline.ResourcePolicyProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccPipelineTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcPipeline.TagPropertyList",
            },
            vpc_options: {
                value: ccPipelineVpcOptionsPropertyToHclTerraform(this._vpcOptions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcPipeline.VpcOptionsProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccPipelineBufferOptionsPropertyToTerraform(struct?: CcPipeline.BufferOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        persistent_buffer_enabled: cdktn.booleanToTerraform(struct!.persistentBufferEnabled),
    }
}


export function ccPipelineBufferOptionsPropertyToHclTerraform(struct?: CcPipeline.BufferOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        persistent_buffer_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.persistentBufferEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipelineEncryptionAtRestOptionsPropertyToTerraform(struct?: CcPipeline.EncryptionAtRestOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        kms_key_arn: cdktn.stringToTerraform(struct!.kmsKeyArn),
    }
}


export function ccPipelineEncryptionAtRestOptionsPropertyToHclTerraform(struct?: CcPipeline.EncryptionAtRestOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        kms_key_arn: {
            value: cdktn.stringToHclTerraform(struct!.kmsKeyArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipelineCloudWatchLogDestinationPropertyToTerraform(struct?: CcPipeline.CloudWatchLogDestinationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        log_group: cdktn.stringToTerraform(struct!.logGroup),
    }
}


export function ccPipelineCloudWatchLogDestinationPropertyToHclTerraform(struct?: CcPipeline.CloudWatchLogDestinationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        log_group: {
            value: cdktn.stringToHclTerraform(struct!.logGroup),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipelineLogPublishingOptionsPropertyToTerraform(struct?: CcPipeline.LogPublishingOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cloudwatch_log_destination: ccPipelineCloudWatchLogDestinationPropertyToTerraform(struct!.cloudwatchLogDestination),
        is_logging_enabled: cdktn.booleanToTerraform(struct!.isLoggingEnabled),
    }
}


export function ccPipelineLogPublishingOptionsPropertyToHclTerraform(struct?: CcPipeline.LogPublishingOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cloudwatch_log_destination: {
            value: ccPipelineCloudWatchLogDestinationPropertyToHclTerraform(struct!.cloudwatchLogDestination),
            isBlock: true,
            type: "struct",
            storageClassType: "CloudWatchLogDestinationProperty",
        },
        is_logging_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.isLoggingEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipelineResourcePolicyPropertyToTerraform(struct?: CcPipeline.ResourcePolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        policy: cdktn.stringToTerraform(struct!.policy),
    }
}


export function ccPipelineResourcePolicyPropertyToHclTerraform(struct?: CcPipeline.ResourcePolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        policy: {
            value: cdktn.stringToHclTerraform(struct!.policy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipelineTagPropertyToTerraform(struct?: CcPipeline.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccPipelineTagPropertyToHclTerraform(struct?: CcPipeline.TagProperty | cdktn.IResolvable): any {
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


export function ccPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsPropertyToTerraform(struct?: CcPipeline.VpcEndpointsVpcOptionsVpcAttachmentOptionsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsPropertyToHclTerraform(struct?: CcPipeline.VpcEndpointsVpcOptionsVpcAttachmentOptionsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccPipelineVpcEndpointsVpcOptionsPropertyToTerraform(struct?: CcPipeline.VpcEndpointsVpcOptionsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccPipelineVpcEndpointsVpcOptionsPropertyToHclTerraform(struct?: CcPipeline.VpcEndpointsVpcOptionsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccPipelineVpcEndpointsPropertyToTerraform(struct?: CcPipeline.VpcEndpointsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccPipelineVpcEndpointsPropertyToHclTerraform(struct?: CcPipeline.VpcEndpointsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccPipelineVpcAttachmentOptionsPropertyToTerraform(struct?: CcPipeline.VpcAttachmentOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        attach_to_vpc: cdktn.booleanToTerraform(struct!.attachToVpc),
        cidr_block: cdktn.stringToTerraform(struct!.cidrBlock),
    }
}


export function ccPipelineVpcAttachmentOptionsPropertyToHclTerraform(struct?: CcPipeline.VpcAttachmentOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        attach_to_vpc: {
            value: cdktn.booleanToHclTerraform(struct!.attachToVpc),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        cidr_block: {
            value: cdktn.stringToHclTerraform(struct!.cidrBlock),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPipelineVpcOptionsPropertyToTerraform(struct?: CcPipeline.VpcOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.securityGroupIds),
        subnet_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.subnetIds),
        vpc_attachment_options: ccPipelineVpcAttachmentOptionsPropertyToTerraform(struct!.vpcAttachmentOptions),
        vpc_endpoint_management: cdktn.stringToTerraform(struct!.vpcEndpointManagement),
    }
}


export function ccPipelineVpcOptionsPropertyToHclTerraform(struct?: CcPipeline.VpcOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
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
        vpc_attachment_options: {
            value: ccPipelineVpcAttachmentOptionsPropertyToHclTerraform(struct!.vpcAttachmentOptions),
            isBlock: true,
            type: "struct",
            storageClassType: "VpcAttachmentOptionsProperty",
        },
        vpc_endpoint_management: {
            value: cdktn.stringToHclTerraform(struct!.vpcEndpointManagement),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcPipeline {
export interface BufferOptionsProperty {
    /**
    * Whether persistent buffering should be enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/osis_pipeline#persistent_buffer_enabled CcPipeline#persistent_buffer_enabled}
    */
    readonly persistentBufferEnabled?: boolean | cdktn.IResolvable;
}
export class BufferOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): BufferOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._persistentBufferEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.persistentBufferEnabled = this._persistentBufferEnabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BufferOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._persistentBufferEnabled = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._persistentBufferEnabled = value.persistentBufferEnabled;
        }
    }

    // persistent_buffer_enabled - computed: true, optional: true, required: false
    private _persistentBufferEnabled?: boolean | cdktn.IResolvable; 
    public get persistentBufferEnabled() {
        return this.getBooleanAttribute('persistent_buffer_enabled');
    }
    public set persistentBufferEnabled(value: boolean | cdktn.IResolvable) {
        this._persistentBufferEnabled = value;
    }
    public resetPersistentBufferEnabled() {
        this._persistentBufferEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get persistentBufferEnabledInput() {
        return this._persistentBufferEnabled;
    }
}
export interface EncryptionAtRestOptionsProperty {
    /**
    * The KMS key to use for encrypting data. By default an AWS owned key is used
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/osis_pipeline#kms_key_arn CcPipeline#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
}
export class EncryptionAtRestOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EncryptionAtRestOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._kmsKeyArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsKeyArn = this._kmsKeyArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EncryptionAtRestOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._kmsKeyArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._kmsKeyArn = value.kmsKeyArn;
        }
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
}
export interface CloudWatchLogDestinationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/osis_pipeline#log_group CcPipeline#log_group}
    */
    readonly logGroup?: string;
}
export class CloudWatchLogDestinationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CloudWatchLogDestinationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._logGroup !== undefined) {
            hasAnyValues = true;
            internalValueResult.logGroup = this._logGroup;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CloudWatchLogDestinationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._logGroup = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._logGroup = value.logGroup;
        }
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
}
export interface LogPublishingOptionsProperty {
    /**
    * The destination for OpenSearch Ingestion Service logs sent to Amazon CloudWatch.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/osis_pipeline#cloudwatch_log_destination CcPipeline#cloudwatch_log_destination}
    */
    readonly cloudwatchLogDestination?: CloudWatchLogDestinationProperty;
    /**
    * Whether logs should be published.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/osis_pipeline#is_logging_enabled CcPipeline#is_logging_enabled}
    */
    readonly isLoggingEnabled?: boolean | cdktn.IResolvable;
}
export class LogPublishingOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LogPublishingOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cloudwatchLogDestination?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.cloudwatchLogDestination = this._cloudwatchLogDestination?.internalValue;
        }
        if (this._isLoggingEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.isLoggingEnabled = this._isLoggingEnabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LogPublishingOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cloudwatchLogDestination.internalValue = undefined;
            this._isLoggingEnabled = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cloudwatchLogDestination.internalValue = value.cloudwatchLogDestination;
            this._isLoggingEnabled = value.isLoggingEnabled;
        }
    }

    // cloudwatch_log_destination - computed: true, optional: true, required: false
    private _cloudwatchLogDestination = new CloudWatchLogDestinationPropertyOutputReference(this, "cloudwatch_log_destination");
    public get cloudwatchLogDestination() {
        return this._cloudwatchLogDestination;
    }
    public putCloudwatchLogDestination(value: CloudWatchLogDestinationProperty) {
        this._cloudwatchLogDestination.internalValue = value;
    }
    public resetCloudwatchLogDestination() {
        this._cloudwatchLogDestination.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cloudwatchLogDestinationInput() {
        return this._cloudwatchLogDestination.internalValue;
    }

    // is_logging_enabled - computed: true, optional: true, required: false
    private _isLoggingEnabled?: boolean | cdktn.IResolvable; 
    public get isLoggingEnabled() {
        return this.getBooleanAttribute('is_logging_enabled');
    }
    public set isLoggingEnabled(value: boolean | cdktn.IResolvable) {
        this._isLoggingEnabled = value;
    }
    public resetIsLoggingEnabled() {
        this._isLoggingEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get isLoggingEnabledInput() {
        return this._isLoggingEnabled;
    }
}
export interface ResourcePolicyProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/osis_pipeline#policy CcPipeline#policy}
    */
    readonly policy?: string;
}
export class ResourcePolicyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ResourcePolicyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._policy !== undefined) {
            hasAnyValues = true;
            internalValueResult.policy = this._policy;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ResourcePolicyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._policy = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._policy = value.policy;
        }
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
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/osis_pipeline#key CcPipeline#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/osis_pipeline#value CcPipeline#value}
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
export interface VpcEndpointsVpcOptionsVpcAttachmentOptionsProperty {
}
export class VpcEndpointsVpcOptionsVpcAttachmentOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VpcEndpointsVpcOptionsVpcAttachmentOptionsProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VpcEndpointsVpcOptionsVpcAttachmentOptionsProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // attach_to_vpc - computed: true, optional: false, required: false
    public get attachToVpc() {
        return this.getBooleanAttribute('attach_to_vpc');
    }

    // cidr_block - computed: true, optional: false, required: false
    public get cidrBlock() {
        return this.getStringAttribute('cidr_block');
    }
}
export interface VpcEndpointsVpcOptionsProperty {
}
export class VpcEndpointsVpcOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VpcEndpointsVpcOptionsProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VpcEndpointsVpcOptionsProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // security_group_ids - computed: true, optional: false, required: false
    public get securityGroupIds() {
        return this.getListAttribute('security_group_ids');
    }

    // subnet_ids - computed: true, optional: false, required: false
    public get subnetIds() {
        return this.getListAttribute('subnet_ids');
    }

    // vpc_attachment_options - computed: true, optional: false, required: false
    private _vpcAttachmentOptions = new VpcEndpointsVpcOptionsVpcAttachmentOptionsPropertyOutputReference(this, "vpc_attachment_options");
    public get vpcAttachmentOptions() {
        return this._vpcAttachmentOptions;
    }

    // vpc_endpoint_management - computed: true, optional: false, required: false
    public get vpcEndpointManagement() {
        return this.getStringAttribute('vpc_endpoint_management');
    }
}
export interface VpcEndpointsProperty {
}
export class VpcEndpointsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): VpcEndpointsProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VpcEndpointsProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // vpc_endpoint_id - computed: true, optional: false, required: false
    public get vpcEndpointId() {
        return this.getStringAttribute('vpc_endpoint_id');
    }

    // vpc_id - computed: true, optional: false, required: false
    public get vpcId() {
        return this.getStringAttribute('vpc_id');
    }

    // vpc_options - computed: true, optional: false, required: false
    private _vpcOptions = new VpcEndpointsVpcOptionsPropertyOutputReference(this, "vpc_options");
    public get vpcOptions() {
        return this._vpcOptions;
    }
}

export class VpcEndpointsPropertyList extends cdktn.ComplexList {

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
    public get(index: number): VpcEndpointsPropertyOutputReference {
        return new VpcEndpointsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface VpcAttachmentOptionsProperty {
    /**
    * Whether the pipeline should be attached to the provided VPC
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/osis_pipeline#attach_to_vpc CcPipeline#attach_to_vpc}
    */
    readonly attachToVpc?: boolean | cdktn.IResolvable;
    /**
    * The CIDR block to be reserved for OpenSearch Ingestion to create elastic network interfaces (ENIs).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/osis_pipeline#cidr_block CcPipeline#cidr_block}
    */
    readonly cidrBlock?: string;
}
export class VpcAttachmentOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VpcAttachmentOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._attachToVpc !== undefined) {
            hasAnyValues = true;
            internalValueResult.attachToVpc = this._attachToVpc;
        }
        if (this._cidrBlock !== undefined) {
            hasAnyValues = true;
            internalValueResult.cidrBlock = this._cidrBlock;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VpcAttachmentOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._attachToVpc = undefined;
            this._cidrBlock = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._attachToVpc = value.attachToVpc;
            this._cidrBlock = value.cidrBlock;
        }
    }

    // attach_to_vpc - computed: true, optional: true, required: false
    private _attachToVpc?: boolean | cdktn.IResolvable; 
    public get attachToVpc() {
        return this.getBooleanAttribute('attach_to_vpc');
    }
    public set attachToVpc(value: boolean | cdktn.IResolvable) {
        this._attachToVpc = value;
    }
    public resetAttachToVpc() {
        this._attachToVpc = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get attachToVpcInput() {
        return this._attachToVpc;
    }

    // cidr_block - computed: true, optional: true, required: false
    private _cidrBlock?: string; 
    public get cidrBlock() {
        return this.getStringAttribute('cidr_block');
    }
    public set cidrBlock(value: string) {
        this._cidrBlock = value;
    }
    public resetCidrBlock() {
        this._cidrBlock = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cidrBlockInput() {
        return this._cidrBlock;
    }
}
export interface VpcOptionsProperty {
    /**
    * A list of security groups associated with the VPC endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/osis_pipeline#security_group_ids CcPipeline#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * A list of subnet IDs associated with the VPC endpoint.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/osis_pipeline#subnet_ids CcPipeline#subnet_ids}
    */
    readonly subnetIds?: string[];
    /**
    * Options for attaching a VPC to the pipeline.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/osis_pipeline#vpc_attachment_options CcPipeline#vpc_attachment_options}
    */
    readonly vpcAttachmentOptions?: VpcAttachmentOptionsProperty;
    /**
    * Defines whether you or Amazon OpenSearch Ingestion service create and manage the VPC endpoint configured for the pipeline.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/osis_pipeline#vpc_endpoint_management CcPipeline#vpc_endpoint_management}
    */
    readonly vpcEndpointManagement?: string;
}
export class VpcOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VpcOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._securityGroupIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.securityGroupIds = this._securityGroupIds;
        }
        if (this._subnetIds !== undefined) {
            hasAnyValues = true;
            internalValueResult.subnetIds = this._subnetIds;
        }
        if (this._vpcAttachmentOptions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.vpcAttachmentOptions = this._vpcAttachmentOptions?.internalValue;
        }
        if (this._vpcEndpointManagement !== undefined) {
            hasAnyValues = true;
            internalValueResult.vpcEndpointManagement = this._vpcEndpointManagement;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VpcOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._securityGroupIds = undefined;
            this._subnetIds = undefined;
            this._vpcAttachmentOptions.internalValue = undefined;
            this._vpcEndpointManagement = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._securityGroupIds = value.securityGroupIds;
            this._subnetIds = value.subnetIds;
            this._vpcAttachmentOptions.internalValue = value.vpcAttachmentOptions;
            this._vpcEndpointManagement = value.vpcEndpointManagement;
        }
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

    // vpc_attachment_options - computed: true, optional: true, required: false
    private _vpcAttachmentOptions = new VpcAttachmentOptionsPropertyOutputReference(this, "vpc_attachment_options");
    public get vpcAttachmentOptions() {
        return this._vpcAttachmentOptions;
    }
    public putVpcAttachmentOptions(value: VpcAttachmentOptionsProperty) {
        this._vpcAttachmentOptions.internalValue = value;
    }
    public resetVpcAttachmentOptions() {
        this._vpcAttachmentOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcAttachmentOptionsInput() {
        return this._vpcAttachmentOptions.internalValue;
    }

    // vpc_endpoint_management - computed: true, optional: true, required: false
    private _vpcEndpointManagement?: string; 
    public get vpcEndpointManagement() {
        return this.getStringAttribute('vpc_endpoint_management');
    }
    public set vpcEndpointManagement(value: string) {
        this._vpcEndpointManagement = value;
    }
    public resetVpcEndpointManagement() {
        this._vpcEndpointManagement = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcEndpointManagementInput() {
        return this._vpcEndpointManagement;
    }
}
}
