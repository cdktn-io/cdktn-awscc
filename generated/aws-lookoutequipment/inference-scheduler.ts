// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutequipment_inference_scheduler

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcInferenceSchedulerProps extends cdktn.TerraformMetaArguments {
    /**
    * A period of time (in minutes) by which inference on the data is delayed after the data starts.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutequipment_inference_scheduler#data_delay_offset_in_minutes CcInferenceScheduler#data_delay_offset_in_minutes}
    */
    readonly dataDelayOffsetInMinutes?: number;
    /**
    * Specifies configuration information for the input data for the inference scheduler, including delimiter, format, and dataset location.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutequipment_inference_scheduler#data_input_configuration CcInferenceScheduler#data_input_configuration}
    */
    readonly dataInputConfiguration: CcInferenceScheduler.DataInputConfigurationProperty;
    /**
    * Specifies configuration information for the output results for the inference scheduler, including the S3 location for the output.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutequipment_inference_scheduler#data_output_configuration CcInferenceScheduler#data_output_configuration}
    */
    readonly dataOutputConfiguration: CcInferenceScheduler.DataOutputConfigurationProperty;
    /**
    * How often data is uploaded to the source S3 bucket for the input data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutequipment_inference_scheduler#data_upload_frequency CcInferenceScheduler#data_upload_frequency}
    */
    readonly dataUploadFrequency: string;
    /**
    * The name of the inference scheduler being created.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutequipment_inference_scheduler#inference_scheduler_name CcInferenceScheduler#inference_scheduler_name}
    */
    readonly inferenceSchedulerName?: string;
    /**
    * The name of the previously trained ML model being used to create the inference scheduler.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutequipment_inference_scheduler#model_name CcInferenceScheduler#model_name}
    */
    readonly modelName: string;
    /**
    * The Amazon Resource Name (ARN) of a role with permission to access the data source being used for the inference.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutequipment_inference_scheduler#role_arn CcInferenceScheduler#role_arn}
    */
    readonly roleArn: string;
    /**
    * Provides the identifier of the AWS KMS customer master key (CMK) used to encrypt inference scheduler data by Amazon Lookout for Equipment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutequipment_inference_scheduler#server_side_kms_key_id CcInferenceScheduler#server_side_kms_key_id}
    */
    readonly serverSideKmsKeyId?: string;
    /**
    * Any tags associated with the inference scheduler.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutequipment_inference_scheduler#tags CcInferenceScheduler#tags}
    */
    readonly tags?: CcInferenceScheduler.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutequipment_inference_scheduler awscc_lookoutequipment_inference_scheduler}
*/
export class CcInferenceScheduler extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_lookoutequipment_inference_scheduler";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcInferenceScheduler resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcInferenceScheduler to import
    * @param importFromId The id of the existing CcInferenceScheduler that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutequipment_inference_scheduler#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcInferenceScheduler to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_lookoutequipment_inference_scheduler", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutequipment_inference_scheduler awscc_lookoutequipment_inference_scheduler} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcInferenceSchedulerProps
    */
    public constructor(scope: Construct, id: string, config: CcInferenceSchedulerProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_lookoutequipment_inference_scheduler',
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
        this._dataDelayOffsetInMinutes = config.dataDelayOffsetInMinutes;
        this._dataInputConfiguration.internalValue = config.dataInputConfiguration;
        this._dataOutputConfiguration.internalValue = config.dataOutputConfiguration;
        this._dataUploadFrequency = config.dataUploadFrequency;
        this._inferenceSchedulerName = config.inferenceSchedulerName;
        this._modelName = config.modelName;
        this._roleArn = config.roleArn;
        this._serverSideKmsKeyId = config.serverSideKmsKeyId;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // data_delay_offset_in_minutes - computed: true, optional: true, required: false
    private _dataDelayOffsetInMinutes?: number; 
    public get dataDelayOffsetInMinutes() {
        return this.getNumberAttribute('data_delay_offset_in_minutes');
    }
    public set dataDelayOffsetInMinutes(value: number) {
        this._dataDelayOffsetInMinutes = value;
    }
    public resetDataDelayOffsetInMinutes() {
        this._dataDelayOffsetInMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataDelayOffsetInMinutesInput() {
        return this._dataDelayOffsetInMinutes;
    }

    // data_input_configuration - computed: false, optional: false, required: true
    private _dataInputConfiguration = new CcInferenceScheduler.DataInputConfigurationPropertyOutputReference(this, "data_input_configuration");
    public get dataInputConfiguration() {
        return this._dataInputConfiguration;
    }
    public putDataInputConfiguration(value: CcInferenceScheduler.DataInputConfigurationProperty) {
        this._dataInputConfiguration.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get dataInputConfigurationInput() {
        return this._dataInputConfiguration.internalValue;
    }

    // data_output_configuration - computed: false, optional: false, required: true
    private _dataOutputConfiguration = new CcInferenceScheduler.DataOutputConfigurationPropertyOutputReference(this, "data_output_configuration");
    public get dataOutputConfiguration() {
        return this._dataOutputConfiguration;
    }
    public putDataOutputConfiguration(value: CcInferenceScheduler.DataOutputConfigurationProperty) {
        this._dataOutputConfiguration.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get dataOutputConfigurationInput() {
        return this._dataOutputConfiguration.internalValue;
    }

    // data_upload_frequency - computed: false, optional: false, required: true
    private _dataUploadFrequency?: string; 
    public get dataUploadFrequency() {
        return this.getStringAttribute('data_upload_frequency');
    }
    public set dataUploadFrequency(value: string) {
        this._dataUploadFrequency = value;
    }
    // Temporarily expose input value. Use with caution.
    public get dataUploadFrequencyInput() {
        return this._dataUploadFrequency;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // inference_scheduler_arn - computed: true, optional: false, required: false
    public get inferenceSchedulerArn() {
        return this.getStringAttribute('inference_scheduler_arn');
    }

    // inference_scheduler_name - computed: true, optional: true, required: false
    private _inferenceSchedulerName?: string; 
    public get inferenceSchedulerName() {
        return this.getStringAttribute('inference_scheduler_name');
    }
    public set inferenceSchedulerName(value: string) {
        this._inferenceSchedulerName = value;
    }
    public resetInferenceSchedulerName() {
        this._inferenceSchedulerName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inferenceSchedulerNameInput() {
        return this._inferenceSchedulerName;
    }

    // model_name - computed: false, optional: false, required: true
    private _modelName?: string; 
    public get modelName() {
        return this.getStringAttribute('model_name');
    }
    public set modelName(value: string) {
        this._modelName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get modelNameInput() {
        return this._modelName;
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

    // server_side_kms_key_id - computed: true, optional: true, required: false
    private _serverSideKmsKeyId?: string; 
    public get serverSideKmsKeyId() {
        return this.getStringAttribute('server_side_kms_key_id');
    }
    public set serverSideKmsKeyId(value: string) {
        this._serverSideKmsKeyId = value;
    }
    public resetServerSideKmsKeyId() {
        this._serverSideKmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serverSideKmsKeyIdInput() {
        return this._serverSideKmsKeyId;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcInferenceScheduler.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcInferenceScheduler.TagProperty[] | cdktn.IResolvable) {
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
            data_delay_offset_in_minutes: cdktn.numberToTerraform(this._dataDelayOffsetInMinutes),
            data_input_configuration: ccInferenceSchedulerDataInputConfigurationPropertyToTerraform(this._dataInputConfiguration.internalValue),
            data_output_configuration: ccInferenceSchedulerDataOutputConfigurationPropertyToTerraform(this._dataOutputConfiguration.internalValue),
            data_upload_frequency: cdktn.stringToTerraform(this._dataUploadFrequency),
            inference_scheduler_name: cdktn.stringToTerraform(this._inferenceSchedulerName),
            model_name: cdktn.stringToTerraform(this._modelName),
            role_arn: cdktn.stringToTerraform(this._roleArn),
            server_side_kms_key_id: cdktn.stringToTerraform(this._serverSideKmsKeyId),
            tags: cdktn.listMapper(ccInferenceSchedulerTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            data_delay_offset_in_minutes: {
                value: cdktn.numberToHclTerraform(this._dataDelayOffsetInMinutes),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            data_input_configuration: {
                value: ccInferenceSchedulerDataInputConfigurationPropertyToHclTerraform(this._dataInputConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcInferenceScheduler.DataInputConfigurationProperty",
            },
            data_output_configuration: {
                value: ccInferenceSchedulerDataOutputConfigurationPropertyToHclTerraform(this._dataOutputConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcInferenceScheduler.DataOutputConfigurationProperty",
            },
            data_upload_frequency: {
                value: cdktn.stringToHclTerraform(this._dataUploadFrequency),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            inference_scheduler_name: {
                value: cdktn.stringToHclTerraform(this._inferenceSchedulerName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            model_name: {
                value: cdktn.stringToHclTerraform(this._modelName),
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
            server_side_kms_key_id: {
                value: cdktn.stringToHclTerraform(this._serverSideKmsKeyId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccInferenceSchedulerTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcInferenceScheduler.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccInferenceSchedulerInputNameConfigurationPropertyToTerraform(struct?: CcInferenceScheduler.InputNameConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        component_timestamp_delimiter: cdktn.stringToTerraform(struct!.componentTimestampDelimiter),
        timestamp_format: cdktn.stringToTerraform(struct!.timestampFormat),
    }
}


export function ccInferenceSchedulerInputNameConfigurationPropertyToHclTerraform(struct?: CcInferenceScheduler.InputNameConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        component_timestamp_delimiter: {
            value: cdktn.stringToHclTerraform(struct!.componentTimestampDelimiter),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInferenceSchedulerS3InputConfigurationPropertyToTerraform(struct?: CcInferenceScheduler.S3InputConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bucket: cdktn.stringToTerraform(struct!.bucket),
        prefix: cdktn.stringToTerraform(struct!.prefix),
    }
}


export function ccInferenceSchedulerS3InputConfigurationPropertyToHclTerraform(struct?: CcInferenceScheduler.S3InputConfigurationProperty | cdktn.IResolvable): any {
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


export function ccInferenceSchedulerDataInputConfigurationPropertyToTerraform(struct?: CcInferenceScheduler.DataInputConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        inference_input_name_configuration: ccInferenceSchedulerInputNameConfigurationPropertyToTerraform(struct!.inferenceInputNameConfiguration),
        input_time_zone_offset: cdktn.stringToTerraform(struct!.inputTimeZoneOffset),
        s3_input_configuration: ccInferenceSchedulerS3InputConfigurationPropertyToTerraform(struct!.s3InputConfiguration),
    }
}


export function ccInferenceSchedulerDataInputConfigurationPropertyToHclTerraform(struct?: CcInferenceScheduler.DataInputConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        inference_input_name_configuration: {
            value: ccInferenceSchedulerInputNameConfigurationPropertyToHclTerraform(struct!.inferenceInputNameConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "InputNameConfigurationProperty",
        },
        input_time_zone_offset: {
            value: cdktn.stringToHclTerraform(struct!.inputTimeZoneOffset),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_input_configuration: {
            value: ccInferenceSchedulerS3InputConfigurationPropertyToHclTerraform(struct!.s3InputConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "S3InputConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInferenceSchedulerS3OutputConfigurationPropertyToTerraform(struct?: CcInferenceScheduler.S3OutputConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bucket: cdktn.stringToTerraform(struct!.bucket),
        prefix: cdktn.stringToTerraform(struct!.prefix),
    }
}


export function ccInferenceSchedulerS3OutputConfigurationPropertyToHclTerraform(struct?: CcInferenceScheduler.S3OutputConfigurationProperty | cdktn.IResolvable): any {
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


export function ccInferenceSchedulerDataOutputConfigurationPropertyToTerraform(struct?: CcInferenceScheduler.DataOutputConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        kms_key_id: cdktn.stringToTerraform(struct!.kmsKeyId),
        s3_output_configuration: ccInferenceSchedulerS3OutputConfigurationPropertyToTerraform(struct!.s3OutputConfiguration),
    }
}


export function ccInferenceSchedulerDataOutputConfigurationPropertyToHclTerraform(struct?: CcInferenceScheduler.DataOutputConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        kms_key_id: {
            value: cdktn.stringToHclTerraform(struct!.kmsKeyId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_output_configuration: {
            value: ccInferenceSchedulerS3OutputConfigurationPropertyToHclTerraform(struct!.s3OutputConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "S3OutputConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInferenceSchedulerTagPropertyToTerraform(struct?: CcInferenceScheduler.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInferenceSchedulerTagPropertyToHclTerraform(struct?: CcInferenceScheduler.TagProperty | cdktn.IResolvable): any {
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


export namespace CcInferenceScheduler {
export interface InputNameConfigurationProperty {
    /**
    * Indicates the delimiter character used between items in the data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutequipment_inference_scheduler#component_timestamp_delimiter CcInferenceScheduler#component_timestamp_delimiter}
    */
    readonly componentTimestampDelimiter?: string;
    /**
    * The format of the timestamp, whether Epoch time, or standard, with or without hyphens (-).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutequipment_inference_scheduler#timestamp_format CcInferenceScheduler#timestamp_format}
    */
    readonly timestampFormat?: string;
}
export class InputNameConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InputNameConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._componentTimestampDelimiter !== undefined) {
            hasAnyValues = true;
            internalValueResult.componentTimestampDelimiter = this._componentTimestampDelimiter;
        }
        if (this._timestampFormat !== undefined) {
            hasAnyValues = true;
            internalValueResult.timestampFormat = this._timestampFormat;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InputNameConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._componentTimestampDelimiter = undefined;
            this._timestampFormat = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._componentTimestampDelimiter = value.componentTimestampDelimiter;
            this._timestampFormat = value.timestampFormat;
        }
    }

    // component_timestamp_delimiter - computed: true, optional: true, required: false
    private _componentTimestampDelimiter?: string; 
    public get componentTimestampDelimiter() {
        return this.getStringAttribute('component_timestamp_delimiter');
    }
    public set componentTimestampDelimiter(value: string) {
        this._componentTimestampDelimiter = value;
    }
    public resetComponentTimestampDelimiter() {
        this._componentTimestampDelimiter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get componentTimestampDelimiterInput() {
        return this._componentTimestampDelimiter;
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
}
export interface S3InputConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutequipment_inference_scheduler#bucket CcInferenceScheduler#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutequipment_inference_scheduler#prefix CcInferenceScheduler#prefix}
    */
    readonly prefix?: string;
}
export class S3InputConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3InputConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bucket !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucket = this._bucket;
        }
        if (this._prefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.prefix = this._prefix;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3InputConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bucket = undefined;
            this._prefix = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bucket = value.bucket;
            this._prefix = value.prefix;
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
export interface DataInputConfigurationProperty {
    /**
    * Specifies configuration information for the input data for the inference, including timestamp format and delimiter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutequipment_inference_scheduler#inference_input_name_configuration CcInferenceScheduler#inference_input_name_configuration}
    */
    readonly inferenceInputNameConfiguration?: InputNameConfigurationProperty;
    /**
    * Indicates the difference between your time zone and Greenwich Mean Time (GMT).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutequipment_inference_scheduler#input_time_zone_offset CcInferenceScheduler#input_time_zone_offset}
    */
    readonly inputTimeZoneOffset?: string;
    /**
    * Specifies configuration information for the input data for the inference, including input data S3 location.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutequipment_inference_scheduler#s3_input_configuration CcInferenceScheduler#s3_input_configuration}
    */
    readonly s3InputConfiguration: S3InputConfigurationProperty;
}
export class DataInputConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DataInputConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._inferenceInputNameConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.inferenceInputNameConfiguration = this._inferenceInputNameConfiguration?.internalValue;
        }
        if (this._inputTimeZoneOffset !== undefined) {
            hasAnyValues = true;
            internalValueResult.inputTimeZoneOffset = this._inputTimeZoneOffset;
        }
        if (this._s3InputConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3InputConfiguration = this._s3InputConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DataInputConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._inferenceInputNameConfiguration.internalValue = undefined;
            this._inputTimeZoneOffset = undefined;
            this._s3InputConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._inferenceInputNameConfiguration.internalValue = value.inferenceInputNameConfiguration;
            this._inputTimeZoneOffset = value.inputTimeZoneOffset;
            this._s3InputConfiguration.internalValue = value.s3InputConfiguration;
        }
    }

    // inference_input_name_configuration - computed: true, optional: true, required: false
    private _inferenceInputNameConfiguration = new InputNameConfigurationPropertyOutputReference(this, "inference_input_name_configuration");
    public get inferenceInputNameConfiguration() {
        return this._inferenceInputNameConfiguration;
    }
    public putInferenceInputNameConfiguration(value: InputNameConfigurationProperty) {
        this._inferenceInputNameConfiguration.internalValue = value;
    }
    public resetInferenceInputNameConfiguration() {
        this._inferenceInputNameConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inferenceInputNameConfigurationInput() {
        return this._inferenceInputNameConfiguration.internalValue;
    }

    // input_time_zone_offset - computed: true, optional: true, required: false
    private _inputTimeZoneOffset?: string; 
    public get inputTimeZoneOffset() {
        return this.getStringAttribute('input_time_zone_offset');
    }
    public set inputTimeZoneOffset(value: string) {
        this._inputTimeZoneOffset = value;
    }
    public resetInputTimeZoneOffset() {
        this._inputTimeZoneOffset = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputTimeZoneOffsetInput() {
        return this._inputTimeZoneOffset;
    }

    // s3_input_configuration - computed: false, optional: false, required: true
    private _s3InputConfiguration = new S3InputConfigurationPropertyOutputReference(this, "s3_input_configuration");
    public get s3InputConfiguration() {
        return this._s3InputConfiguration;
    }
    public putS3InputConfiguration(value: S3InputConfigurationProperty) {
        this._s3InputConfiguration.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get s3InputConfigurationInput() {
        return this._s3InputConfiguration.internalValue;
    }
}
export interface S3OutputConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutequipment_inference_scheduler#bucket CcInferenceScheduler#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutequipment_inference_scheduler#prefix CcInferenceScheduler#prefix}
    */
    readonly prefix?: string;
}
export class S3OutputConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3OutputConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bucket !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucket = this._bucket;
        }
        if (this._prefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.prefix = this._prefix;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3OutputConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bucket = undefined;
            this._prefix = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bucket = value.bucket;
            this._prefix = value.prefix;
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
export interface DataOutputConfigurationProperty {
    /**
    * The ID number for the AWS KMS key used to encrypt the inference output.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutequipment_inference_scheduler#kms_key_id CcInferenceScheduler#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Specifies configuration information for the output results from the inference, including output S3 location.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutequipment_inference_scheduler#s3_output_configuration CcInferenceScheduler#s3_output_configuration}
    */
    readonly s3OutputConfiguration: S3OutputConfigurationProperty;
}
export class DataOutputConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DataOutputConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._kmsKeyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsKeyId = this._kmsKeyId;
        }
        if (this._s3OutputConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3OutputConfiguration = this._s3OutputConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DataOutputConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._kmsKeyId = undefined;
            this._s3OutputConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._kmsKeyId = value.kmsKeyId;
            this._s3OutputConfiguration.internalValue = value.s3OutputConfiguration;
        }
    }

    // kms_key_id - computed: true, optional: true, required: false
    private _kmsKeyId?: string; 
    public get kmsKeyId() {
        return this.getStringAttribute('kms_key_id');
    }
    public set kmsKeyId(value: string) {
        this._kmsKeyId = value;
    }
    public resetKmsKeyId() {
        this._kmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyIdInput() {
        return this._kmsKeyId;
    }

    // s3_output_configuration - computed: false, optional: false, required: true
    private _s3OutputConfiguration = new S3OutputConfigurationPropertyOutputReference(this, "s3_output_configuration");
    public get s3OutputConfiguration() {
        return this._s3OutputConfiguration;
    }
    public putS3OutputConfiguration(value: S3OutputConfigurationProperty) {
        this._s3OutputConfiguration.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get s3OutputConfigurationInput() {
        return this._s3OutputConfiguration.internalValue;
    }
}
export interface TagProperty {
    /**
    * The key for the specified tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutequipment_inference_scheduler#key CcInferenceScheduler#key}
    */
    readonly key?: string;
    /**
    * The value for the specified tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lookoutequipment_inference_scheduler#value CcInferenceScheduler#value}
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
