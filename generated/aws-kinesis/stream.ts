// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kinesis_stream

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcStreamProps extends cdktn.TerraformMetaArguments {
    /**
    * The final list of shard-level metrics
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kinesis_stream#desired_shard_level_metrics CcStream#desired_shard_level_metrics}
    */
    readonly desiredShardLevelMetrics?: string[];
    /**
    * Maximum size of a data record in KiB allowed to be put into Kinesis stream.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kinesis_stream#max_record_size_in_ki_b CcStream#max_record_size_in_ki_b}
    */
    readonly maxRecordSizeInKiB?: number;
    /**
    * The name of the Kinesis stream.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kinesis_stream#name CcStream#name}
    */
    readonly name?: string;
    /**
    * The number of hours for the data records that are stored in shards to remain accessible.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kinesis_stream#retention_period_hours CcStream#retention_period_hours}
    */
    readonly retentionPeriodHours?: number;
    /**
    * The number of shards that the stream uses. Required when StreamMode = PROVISIONED is passed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kinesis_stream#shard_count CcStream#shard_count}
    */
    readonly shardCount?: number;
    /**
    * When specified, enables or updates server-side encryption using an AWS KMS key for a specified stream.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kinesis_stream#stream_encryption CcStream#stream_encryption}
    */
    readonly streamEncryption?: CcStream.StreamEncryptionProperty;
    /**
    * The mode in which the stream is running.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kinesis_stream#stream_mode_details CcStream#stream_mode_details}
    */
    readonly streamModeDetails?: CcStream.StreamModeDetailsProperty;
    /**
    * An arbitrary set of tags (key-value pairs) to associate with the Kinesis stream.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kinesis_stream#tags CcStream#tags}
    */
    readonly tags?: CcStream.TagProperty[] | cdktn.IResolvable;
    /**
    * Target warm throughput in MiB/s for the stream. This property can ONLY be set when StreamMode is ON_DEMAND.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kinesis_stream#warm_throughput_mi_bps CcStream#warm_throughput_mi_bps}
    */
    readonly warmThroughputMiBps?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kinesis_stream awscc_kinesis_stream}
*/
export class CcStream extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_kinesis_stream";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcStream resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcStream to import
    * @param importFromId The id of the existing CcStream that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kinesis_stream#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcStream to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_kinesis_stream", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kinesis_stream awscc_kinesis_stream} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcStreamProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcStreamProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_kinesis_stream',
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
        this._desiredShardLevelMetrics = config.desiredShardLevelMetrics;
        this._maxRecordSizeInKiB = config.maxRecordSizeInKiB;
        this._name = config.name;
        this._retentionPeriodHours = config.retentionPeriodHours;
        this._shardCount = config.shardCount;
        this._streamEncryption.internalValue = config.streamEncryption;
        this._streamModeDetails.internalValue = config.streamModeDetails;
        this._tags.internalValue = config.tags;
        this._warmThroughputMiBps = config.warmThroughputMiBps;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // desired_shard_level_metrics - computed: true, optional: true, required: false
    private _desiredShardLevelMetrics?: string[]; 
    public get desiredShardLevelMetrics() {
        return cdktn.Fn.tolist(this.getListAttribute('desired_shard_level_metrics'));
    }
    public set desiredShardLevelMetrics(value: string[]) {
        this._desiredShardLevelMetrics = value;
    }
    public resetDesiredShardLevelMetrics() {
        this._desiredShardLevelMetrics = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get desiredShardLevelMetricsInput() {
        return this._desiredShardLevelMetrics;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // max_record_size_in_ki_b - computed: true, optional: true, required: false
    private _maxRecordSizeInKiB?: number; 
    public get maxRecordSizeInKiB() {
        return this.getNumberAttribute('max_record_size_in_ki_b');
    }
    public set maxRecordSizeInKiB(value: number) {
        this._maxRecordSizeInKiB = value;
    }
    public resetMaxRecordSizeInKiB() {
        this._maxRecordSizeInKiB = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxRecordSizeInKiBInput() {
        return this._maxRecordSizeInKiB;
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

    // shard_count - computed: true, optional: true, required: false
    private _shardCount?: number; 
    public get shardCount() {
        return this.getNumberAttribute('shard_count');
    }
    public set shardCount(value: number) {
        this._shardCount = value;
    }
    public resetShardCount() {
        this._shardCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shardCountInput() {
        return this._shardCount;
    }

    // stream_encryption - computed: true, optional: true, required: false
    private _streamEncryption = new CcStream.StreamEncryptionPropertyOutputReference(this, "stream_encryption");
    public get streamEncryption() {
        return this._streamEncryption;
    }
    public putStreamEncryption(value: CcStream.StreamEncryptionProperty) {
        this._streamEncryption.internalValue = value;
    }
    public resetStreamEncryption() {
        this._streamEncryption.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get streamEncryptionInput() {
        return this._streamEncryption.internalValue;
    }

    // stream_mode_details - computed: true, optional: true, required: false
    private _streamModeDetails = new CcStream.StreamModeDetailsPropertyOutputReference(this, "stream_mode_details");
    public get streamModeDetails() {
        return this._streamModeDetails;
    }
    public putStreamModeDetails(value: CcStream.StreamModeDetailsProperty) {
        this._streamModeDetails.internalValue = value;
    }
    public resetStreamModeDetails() {
        this._streamModeDetails.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get streamModeDetailsInput() {
        return this._streamModeDetails.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcStream.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcStream.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // warm_throughput_mi_bps - computed: true, optional: true, required: false
    private _warmThroughputMiBps?: number; 
    public get warmThroughputMiBps() {
        return this.getNumberAttribute('warm_throughput_mi_bps');
    }
    public set warmThroughputMiBps(value: number) {
        this._warmThroughputMiBps = value;
    }
    public resetWarmThroughputMiBps() {
        this._warmThroughputMiBps = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get warmThroughputMiBpsInput() {
        return this._warmThroughputMiBps;
    }

    // warm_throughput_object - computed: true, optional: false, required: false
    private _warmThroughputObject = new CcStream.WarmThroughputObjectPropertyOutputReference(this, "warm_throughput_object");
    public get warmThroughputObject() {
        return this._warmThroughputObject;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            desired_shard_level_metrics: cdktn.listMapper(cdktn.stringToTerraform, false)(this._desiredShardLevelMetrics),
            max_record_size_in_ki_b: cdktn.numberToTerraform(this._maxRecordSizeInKiB),
            name: cdktn.stringToTerraform(this._name),
            retention_period_hours: cdktn.numberToTerraform(this._retentionPeriodHours),
            shard_count: cdktn.numberToTerraform(this._shardCount),
            stream_encryption: ccStreamStreamEncryptionPropertyToTerraform(this._streamEncryption.internalValue),
            stream_mode_details: ccStreamStreamModeDetailsPropertyToTerraform(this._streamModeDetails.internalValue),
            tags: cdktn.listMapper(ccStreamTagPropertyToTerraform, false)(this._tags.internalValue),
            warm_throughput_mi_bps: cdktn.numberToTerraform(this._warmThroughputMiBps),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            desired_shard_level_metrics: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._desiredShardLevelMetrics),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            max_record_size_in_ki_b: {
                value: cdktn.numberToHclTerraform(this._maxRecordSizeInKiB),
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
            retention_period_hours: {
                value: cdktn.numberToHclTerraform(this._retentionPeriodHours),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            shard_count: {
                value: cdktn.numberToHclTerraform(this._shardCount),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            stream_encryption: {
                value: ccStreamStreamEncryptionPropertyToHclTerraform(this._streamEncryption.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcStream.StreamEncryptionProperty",
            },
            stream_mode_details: {
                value: ccStreamStreamModeDetailsPropertyToHclTerraform(this._streamModeDetails.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcStream.StreamModeDetailsProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccStreamTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcStream.TagPropertyList",
            },
            warm_throughput_mi_bps: {
                value: cdktn.numberToHclTerraform(this._warmThroughputMiBps),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccStreamStreamEncryptionPropertyToTerraform(struct?: CcStream.StreamEncryptionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        encryption_type: cdktn.stringToTerraform(struct!.encryptionType),
        key_id: cdktn.stringToTerraform(struct!.keyId),
    }
}


export function ccStreamStreamEncryptionPropertyToHclTerraform(struct?: CcStream.StreamEncryptionProperty | cdktn.IResolvable): any {
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


export function ccStreamStreamModeDetailsPropertyToTerraform(struct?: CcStream.StreamModeDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        stream_mode: cdktn.stringToTerraform(struct!.streamMode),
    }
}


export function ccStreamStreamModeDetailsPropertyToHclTerraform(struct?: CcStream.StreamModeDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        stream_mode: {
            value: cdktn.stringToHclTerraform(struct!.streamMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccStreamTagPropertyToTerraform(struct?: CcStream.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccStreamTagPropertyToHclTerraform(struct?: CcStream.TagProperty | cdktn.IResolvable): any {
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


export function ccStreamWarmThroughputObjectPropertyToTerraform(struct?: CcStream.WarmThroughputObjectProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccStreamWarmThroughputObjectPropertyToHclTerraform(struct?: CcStream.WarmThroughputObjectProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export namespace CcStream {
export interface StreamEncryptionProperty {
    /**
    * The encryption type to use. The only valid value is KMS. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kinesis_stream#encryption_type CcStream#encryption_type}
    */
    readonly encryptionType?: string;
    /**
    * The GUID for the customer-managed AWS KMS key to use for encryption. This value can be a globally unique identifier, a fully specified Amazon Resource Name (ARN) to either an alias or a key, or an alias name prefixed by "alias/".You can also use a master key owned by Kinesis Data Streams by specifying the alias aws/kinesis.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kinesis_stream#key_id CcStream#key_id}
    */
    readonly keyId?: string;
}
export class StreamEncryptionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StreamEncryptionProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: StreamEncryptionProperty | cdktn.IResolvable | undefined) {
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
export interface StreamModeDetailsProperty {
    /**
    * The mode of the stream
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kinesis_stream#stream_mode CcStream#stream_mode}
    */
    readonly streamMode?: string;
}
export class StreamModeDetailsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StreamModeDetailsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._streamMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.streamMode = this._streamMode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StreamModeDetailsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._streamMode = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._streamMode = value.streamMode;
        }
    }

    // stream_mode - computed: true, optional: true, required: false
    private _streamMode?: string; 
    public get streamMode() {
        return this.getStringAttribute('stream_mode');
    }
    public set streamMode(value: string) {
        this._streamMode = value;
    }
    public resetStreamMode() {
        this._streamMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get streamModeInput() {
        return this._streamMode;
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kinesis_stream#key CcStream#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kinesis_stream#value CcStream#value}
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
export interface WarmThroughputObjectProperty {
}
export class WarmThroughputObjectPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): WarmThroughputObjectProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WarmThroughputObjectProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // current_mi_bps - computed: true, optional: false, required: false
    public get currentMiBps() {
        return this.getNumberAttribute('current_mi_bps');
    }

    // target_mi_bps - computed: true, optional: false, required: false
    public get targetMiBps() {
        return this.getNumberAttribute('target_mi_bps');
    }
}
}
