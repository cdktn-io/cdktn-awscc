// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_instance_storage_config

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcInstanceStorageConfigProps extends cdktn.TerraformMetaArguments {
    /**
    * Connect Instance ID with which the storage config will be associated
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_instance_storage_config#instance_arn CcInstanceStorageConfig#instance_arn}
    */
    readonly instanceArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_instance_storage_config#kinesis_firehose_config CcInstanceStorageConfig#kinesis_firehose_config}
    */
    readonly kinesisFirehoseConfig?: CcInstanceStorageConfig.KinesisFirehoseConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_instance_storage_config#kinesis_stream_config CcInstanceStorageConfig#kinesis_stream_config}
    */
    readonly kinesisStreamConfig?: CcInstanceStorageConfig.KinesisStreamConfigProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_instance_storage_config#kinesis_video_stream_config CcInstanceStorageConfig#kinesis_video_stream_config}
    */
    readonly kinesisVideoStreamConfig?: CcInstanceStorageConfig.KinesisVideoStreamConfigProperty;
    /**
    * Specifies the type of storage resource available for the instance
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_instance_storage_config#resource_type CcInstanceStorageConfig#resource_type}
    */
    readonly resourceType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_instance_storage_config#s3_config CcInstanceStorageConfig#s3_config}
    */
    readonly s3Config?: CcInstanceStorageConfig.S3ConfigProperty;
    /**
    * Specifies the storage type to be associated with the instance
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_instance_storage_config#storage_type CcInstanceStorageConfig#storage_type}
    */
    readonly storageType: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_instance_storage_config awscc_connect_instance_storage_config}
*/
export class CcInstanceStorageConfig extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_connect_instance_storage_config";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcInstanceStorageConfig resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcInstanceStorageConfig to import
    * @param importFromId The id of the existing CcInstanceStorageConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_instance_storage_config#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcInstanceStorageConfig to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_connect_instance_storage_config", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_instance_storage_config awscc_connect_instance_storage_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcInstanceStorageConfigProps
    */
    public constructor(scope: Construct, id: string, config: CcInstanceStorageConfigProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_connect_instance_storage_config',
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
        this._instanceArn = config.instanceArn;
        this._kinesisFirehoseConfig.internalValue = config.kinesisFirehoseConfig;
        this._kinesisStreamConfig.internalValue = config.kinesisStreamConfig;
        this._kinesisVideoStreamConfig.internalValue = config.kinesisVideoStreamConfig;
        this._resourceType = config.resourceType;
        this._s3Config.internalValue = config.s3Config;
        this._storageType = config.storageType;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // association_id - computed: true, optional: false, required: false
    public get associationId() {
        return this.getStringAttribute('association_id');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // instance_arn - computed: false, optional: false, required: true
    private _instanceArn?: string; 
    public get instanceArn() {
        return this.getStringAttribute('instance_arn');
    }
    public set instanceArn(value: string) {
        this._instanceArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceArnInput() {
        return this._instanceArn;
    }

    // kinesis_firehose_config - computed: true, optional: true, required: false
    private _kinesisFirehoseConfig = new CcInstanceStorageConfig.KinesisFirehoseConfigPropertyOutputReference(this, "kinesis_firehose_config");
    public get kinesisFirehoseConfig() {
        return this._kinesisFirehoseConfig;
    }
    public putKinesisFirehoseConfig(value: CcInstanceStorageConfig.KinesisFirehoseConfigProperty) {
        this._kinesisFirehoseConfig.internalValue = value;
    }
    public resetKinesisFirehoseConfig() {
        this._kinesisFirehoseConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kinesisFirehoseConfigInput() {
        return this._kinesisFirehoseConfig.internalValue;
    }

    // kinesis_stream_config - computed: true, optional: true, required: false
    private _kinesisStreamConfig = new CcInstanceStorageConfig.KinesisStreamConfigPropertyOutputReference(this, "kinesis_stream_config");
    public get kinesisStreamConfig() {
        return this._kinesisStreamConfig;
    }
    public putKinesisStreamConfig(value: CcInstanceStorageConfig.KinesisStreamConfigProperty) {
        this._kinesisStreamConfig.internalValue = value;
    }
    public resetKinesisStreamConfig() {
        this._kinesisStreamConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kinesisStreamConfigInput() {
        return this._kinesisStreamConfig.internalValue;
    }

    // kinesis_video_stream_config - computed: true, optional: true, required: false
    private _kinesisVideoStreamConfig = new CcInstanceStorageConfig.KinesisVideoStreamConfigPropertyOutputReference(this, "kinesis_video_stream_config");
    public get kinesisVideoStreamConfig() {
        return this._kinesisVideoStreamConfig;
    }
    public putKinesisVideoStreamConfig(value: CcInstanceStorageConfig.KinesisVideoStreamConfigProperty) {
        this._kinesisVideoStreamConfig.internalValue = value;
    }
    public resetKinesisVideoStreamConfig() {
        this._kinesisVideoStreamConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kinesisVideoStreamConfigInput() {
        return this._kinesisVideoStreamConfig.internalValue;
    }

    // resource_type - computed: false, optional: false, required: true
    private _resourceType?: string; 
    public get resourceType() {
        return this.getStringAttribute('resource_type');
    }
    public set resourceType(value: string) {
        this._resourceType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceTypeInput() {
        return this._resourceType;
    }

    // s3_config - computed: true, optional: true, required: false
    private _s3Config = new CcInstanceStorageConfig.S3ConfigPropertyOutputReference(this, "s3_config");
    public get s3Config() {
        return this._s3Config;
    }
    public putS3Config(value: CcInstanceStorageConfig.S3ConfigProperty) {
        this._s3Config.internalValue = value;
    }
    public resetS3Config() {
        this._s3Config.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3ConfigInput() {
        return this._s3Config.internalValue;
    }

    // storage_type - computed: false, optional: false, required: true
    private _storageType?: string; 
    public get storageType() {
        return this.getStringAttribute('storage_type');
    }
    public set storageType(value: string) {
        this._storageType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get storageTypeInput() {
        return this._storageType;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            instance_arn: cdktn.stringToTerraform(this._instanceArn),
            kinesis_firehose_config: ccInstanceStorageConfigKinesisFirehoseConfigPropertyToTerraform(this._kinesisFirehoseConfig.internalValue),
            kinesis_stream_config: ccInstanceStorageConfigKinesisStreamConfigPropertyToTerraform(this._kinesisStreamConfig.internalValue),
            kinesis_video_stream_config: ccInstanceStorageConfigKinesisVideoStreamConfigPropertyToTerraform(this._kinesisVideoStreamConfig.internalValue),
            resource_type: cdktn.stringToTerraform(this._resourceType),
            s3_config: ccInstanceStorageConfigS3ConfigPropertyToTerraform(this._s3Config.internalValue),
            storage_type: cdktn.stringToTerraform(this._storageType),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            instance_arn: {
                value: cdktn.stringToHclTerraform(this._instanceArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            kinesis_firehose_config: {
                value: ccInstanceStorageConfigKinesisFirehoseConfigPropertyToHclTerraform(this._kinesisFirehoseConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcInstanceStorageConfig.KinesisFirehoseConfigProperty",
            },
            kinesis_stream_config: {
                value: ccInstanceStorageConfigKinesisStreamConfigPropertyToHclTerraform(this._kinesisStreamConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcInstanceStorageConfig.KinesisStreamConfigProperty",
            },
            kinesis_video_stream_config: {
                value: ccInstanceStorageConfigKinesisVideoStreamConfigPropertyToHclTerraform(this._kinesisVideoStreamConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcInstanceStorageConfig.KinesisVideoStreamConfigProperty",
            },
            resource_type: {
                value: cdktn.stringToHclTerraform(this._resourceType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            s3_config: {
                value: ccInstanceStorageConfigS3ConfigPropertyToHclTerraform(this._s3Config.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcInstanceStorageConfig.S3ConfigProperty",
            },
            storage_type: {
                value: cdktn.stringToHclTerraform(this._storageType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccInstanceStorageConfigKinesisFirehoseConfigPropertyToTerraform(struct?: CcInstanceStorageConfig.KinesisFirehoseConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        firehose_arn: cdktn.stringToTerraform(struct!.firehoseArn),
    }
}


export function ccInstanceStorageConfigKinesisFirehoseConfigPropertyToHclTerraform(struct?: CcInstanceStorageConfig.KinesisFirehoseConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        firehose_arn: {
            value: cdktn.stringToHclTerraform(struct!.firehoseArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInstanceStorageConfigKinesisStreamConfigPropertyToTerraform(struct?: CcInstanceStorageConfig.KinesisStreamConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        stream_arn: cdktn.stringToTerraform(struct!.streamArn),
    }
}


export function ccInstanceStorageConfigKinesisStreamConfigPropertyToHclTerraform(struct?: CcInstanceStorageConfig.KinesisStreamConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        stream_arn: {
            value: cdktn.stringToHclTerraform(struct!.streamArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInstanceStorageConfigEncryptionConfigPropertyToTerraform(struct?: CcInstanceStorageConfig.EncryptionConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        encryption_type: cdktn.stringToTerraform(struct!.encryptionType),
        key_id: cdktn.stringToTerraform(struct!.keyId),
    }
}


export function ccInstanceStorageConfigEncryptionConfigPropertyToHclTerraform(struct?: CcInstanceStorageConfig.EncryptionConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        encryption_type: {
            value: cdktn.stringToHclTerraform(struct!.encryptionType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key_id: {
            value: cdktn.stringToHclTerraform(struct!.keyId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInstanceStorageConfigKinesisVideoStreamConfigPropertyToTerraform(struct?: CcInstanceStorageConfig.KinesisVideoStreamConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        encryption_config: ccInstanceStorageConfigEncryptionConfigPropertyToTerraform(struct!.encryptionConfig),
        prefix: cdktn.stringToTerraform(struct!.prefix),
        retention_period_hours: cdktn.numberToTerraform(struct!.retentionPeriodHours),
    }
}


export function ccInstanceStorageConfigKinesisVideoStreamConfigPropertyToHclTerraform(struct?: CcInstanceStorageConfig.KinesisVideoStreamConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        encryption_config: {
            value: ccInstanceStorageConfigEncryptionConfigPropertyToHclTerraform(struct!.encryptionConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "EncryptionConfigProperty",
        },
        prefix: {
            value: cdktn.stringToHclTerraform(struct!.prefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        retention_period_hours: {
            value: cdktn.numberToHclTerraform(struct!.retentionPeriodHours),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInstanceStorageConfigS3ConfigEncryptionConfigPropertyToTerraform(struct?: CcInstanceStorageConfig.S3ConfigEncryptionConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        encryption_type: cdktn.stringToTerraform(struct!.encryptionType),
        key_id: cdktn.stringToTerraform(struct!.keyId),
    }
}


export function ccInstanceStorageConfigS3ConfigEncryptionConfigPropertyToHclTerraform(struct?: CcInstanceStorageConfig.S3ConfigEncryptionConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        encryption_type: {
            value: cdktn.stringToHclTerraform(struct!.encryptionType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key_id: {
            value: cdktn.stringToHclTerraform(struct!.keyId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInstanceStorageConfigS3ConfigPropertyToTerraform(struct?: CcInstanceStorageConfig.S3ConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bucket_name: cdktn.stringToTerraform(struct!.bucketName),
        bucket_prefix: cdktn.stringToTerraform(struct!.bucketPrefix),
        encryption_config: ccInstanceStorageConfigS3ConfigEncryptionConfigPropertyToTerraform(struct!.encryptionConfig),
    }
}


export function ccInstanceStorageConfigS3ConfigPropertyToHclTerraform(struct?: CcInstanceStorageConfig.S3ConfigProperty | cdktn.IResolvable): any {
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
        bucket_prefix: {
            value: cdktn.stringToHclTerraform(struct!.bucketPrefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        encryption_config: {
            value: ccInstanceStorageConfigS3ConfigEncryptionConfigPropertyToHclTerraform(struct!.encryptionConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "S3ConfigEncryptionConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcInstanceStorageConfig {
export interface KinesisFirehoseConfigProperty {
    /**
    * An ARN is a unique AWS resource identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_instance_storage_config#firehose_arn CcInstanceStorageConfig#firehose_arn}
    */
    readonly firehoseArn?: string;
}
export class KinesisFirehoseConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): KinesisFirehoseConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._firehoseArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.firehoseArn = this._firehoseArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: KinesisFirehoseConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._firehoseArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._firehoseArn = value.firehoseArn;
        }
    }

    // firehose_arn - computed: true, optional: true, required: false
    private _firehoseArn?: string; 
    public get firehoseArn() {
        return this.getStringAttribute('firehose_arn');
    }
    public set firehoseArn(value: string) {
        this._firehoseArn = value;
    }
    public resetFirehoseArn() {
        this._firehoseArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get firehoseArnInput() {
        return this._firehoseArn;
    }
}
export interface KinesisStreamConfigProperty {
    /**
    * An ARN is a unique AWS resource identifier.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_instance_storage_config#stream_arn CcInstanceStorageConfig#stream_arn}
    */
    readonly streamArn?: string;
}
export class KinesisStreamConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): KinesisStreamConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._streamArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.streamArn = this._streamArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: KinesisStreamConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._streamArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._streamArn = value.streamArn;
        }
    }

    // stream_arn - computed: true, optional: true, required: false
    private _streamArn?: string; 
    public get streamArn() {
        return this.getStringAttribute('stream_arn');
    }
    public set streamArn(value: string) {
        this._streamArn = value;
    }
    public resetStreamArn() {
        this._streamArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get streamArnInput() {
        return this._streamArn;
    }
}
export interface EncryptionConfigProperty {
    /**
    * Specifies default encryption using AWS KMS-Managed Keys
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_instance_storage_config#encryption_type CcInstanceStorageConfig#encryption_type}
    */
    readonly encryptionType?: string;
    /**
    * Specifies the encryption key id
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_instance_storage_config#key_id CcInstanceStorageConfig#key_id}
    */
    readonly keyId?: string;
}
export class EncryptionConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EncryptionConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._encryptionType !== undefined) {
            hasAnyValues = true;
            internalValueResult.encryptionType = this._encryptionType;
        }
        if (this._keyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyId = this._keyId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EncryptionConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._encryptionType = undefined;
            this._keyId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._encryptionType = value.encryptionType;
            this._keyId = value.keyId;
        }
    }

    // encryption_type - computed: true, optional: true, required: false
    private _encryptionType?: string; 
    public get encryptionType() {
        return this.getStringAttribute('encryption_type');
    }
    public set encryptionType(value: string) {
        this._encryptionType = value;
    }
    public resetEncryptionType() {
        this._encryptionType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionTypeInput() {
        return this._encryptionType;
    }

    // key_id - computed: true, optional: true, required: false
    private _keyId?: string; 
    public get keyId() {
        return this.getStringAttribute('key_id');
    }
    public set keyId(value: string) {
        this._keyId = value;
    }
    public resetKeyId() {
        this._keyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyIdInput() {
        return this._keyId;
    }
}
export interface KinesisVideoStreamConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_instance_storage_config#encryption_config CcInstanceStorageConfig#encryption_config}
    */
    readonly encryptionConfig?: EncryptionConfigProperty;
    /**
    * Prefixes are used to infer logical hierarchy
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_instance_storage_config#prefix CcInstanceStorageConfig#prefix}
    */
    readonly prefix?: string;
    /**
    * Number of hours
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_instance_storage_config#retention_period_hours CcInstanceStorageConfig#retention_period_hours}
    */
    readonly retentionPeriodHours?: number;
}
export class KinesisVideoStreamConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): KinesisVideoStreamConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._encryptionConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.encryptionConfig = this._encryptionConfig?.internalValue;
        }
        if (this._prefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.prefix = this._prefix;
        }
        if (this._retentionPeriodHours !== undefined) {
            hasAnyValues = true;
            internalValueResult.retentionPeriodHours = this._retentionPeriodHours;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: KinesisVideoStreamConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._encryptionConfig.internalValue = undefined;
            this._prefix = undefined;
            this._retentionPeriodHours = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._encryptionConfig.internalValue = value.encryptionConfig;
            this._prefix = value.prefix;
            this._retentionPeriodHours = value.retentionPeriodHours;
        }
    }

    // encryption_config - computed: true, optional: true, required: false
    private _encryptionConfig = new EncryptionConfigPropertyOutputReference(this, "encryption_config");
    public get encryptionConfig() {
        return this._encryptionConfig;
    }
    public putEncryptionConfig(value: EncryptionConfigProperty) {
        this._encryptionConfig.internalValue = value;
    }
    public resetEncryptionConfig() {
        this._encryptionConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionConfigInput() {
        return this._encryptionConfig.internalValue;
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

    // retention_period_hours - computed: true, optional: true, required: false
    private _retentionPeriodHours?: number; 
    public get retentionPeriodHours() {
        return this.getNumberAttribute('retention_period_hours');
    }
    public set retentionPeriodHours(value: number) {
        this._retentionPeriodHours = value;
    }
    public resetRetentionPeriodHours() {
        this._retentionPeriodHours = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get retentionPeriodHoursInput() {
        return this._retentionPeriodHours;
    }
}
export interface S3ConfigEncryptionConfigProperty {
    /**
    * Specifies default encryption using AWS KMS-Managed Keys
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_instance_storage_config#encryption_type CcInstanceStorageConfig#encryption_type}
    */
    readonly encryptionType?: string;
    /**
    * Specifies the encryption key id
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_instance_storage_config#key_id CcInstanceStorageConfig#key_id}
    */
    readonly keyId?: string;
}
export class S3ConfigEncryptionConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3ConfigEncryptionConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._encryptionType !== undefined) {
            hasAnyValues = true;
            internalValueResult.encryptionType = this._encryptionType;
        }
        if (this._keyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyId = this._keyId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3ConfigEncryptionConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._encryptionType = undefined;
            this._keyId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._encryptionType = value.encryptionType;
            this._keyId = value.keyId;
        }
    }

    // encryption_type - computed: true, optional: true, required: false
    private _encryptionType?: string; 
    public get encryptionType() {
        return this.getStringAttribute('encryption_type');
    }
    public set encryptionType(value: string) {
        this._encryptionType = value;
    }
    public resetEncryptionType() {
        this._encryptionType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionTypeInput() {
        return this._encryptionType;
    }

    // key_id - computed: true, optional: true, required: false
    private _keyId?: string; 
    public get keyId() {
        return this.getStringAttribute('key_id');
    }
    public set keyId(value: string) {
        this._keyId = value;
    }
    public resetKeyId() {
        this._keyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyIdInput() {
        return this._keyId;
    }
}
export interface S3ConfigProperty {
    /**
    * A name for the S3 Bucket
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_instance_storage_config#bucket_name CcInstanceStorageConfig#bucket_name}
    */
    readonly bucketName?: string;
    /**
    * Prefixes are used to infer logical hierarchy
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_instance_storage_config#bucket_prefix CcInstanceStorageConfig#bucket_prefix}
    */
    readonly bucketPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/connect_instance_storage_config#encryption_config CcInstanceStorageConfig#encryption_config}
    */
    readonly encryptionConfig?: S3ConfigEncryptionConfigProperty;
}
export class S3ConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3ConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bucketName !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketName = this._bucketName;
        }
        if (this._bucketPrefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketPrefix = this._bucketPrefix;
        }
        if (this._encryptionConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.encryptionConfig = this._encryptionConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3ConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bucketName = undefined;
            this._bucketPrefix = undefined;
            this._encryptionConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bucketName = value.bucketName;
            this._bucketPrefix = value.bucketPrefix;
            this._encryptionConfig.internalValue = value.encryptionConfig;
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

    // bucket_prefix - computed: true, optional: true, required: false
    private _bucketPrefix?: string; 
    public get bucketPrefix() {
        return this.getStringAttribute('bucket_prefix');
    }
    public set bucketPrefix(value: string) {
        this._bucketPrefix = value;
    }
    public resetBucketPrefix() {
        this._bucketPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketPrefixInput() {
        return this._bucketPrefix;
    }

    // encryption_config - computed: true, optional: true, required: false
    private _encryptionConfig = new S3ConfigEncryptionConfigPropertyOutputReference(this, "encryption_config");
    public get encryptionConfig() {
        return this._encryptionConfig;
    }
    public putEncryptionConfig(value: S3ConfigEncryptionConfigProperty) {
        this._encryptionConfig.internalValue = value;
    }
    public resetEncryptionConfig() {
        this._encryptionConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionConfigInput() {
        return this._encryptionConfig.internalValue;
    }
}
}
