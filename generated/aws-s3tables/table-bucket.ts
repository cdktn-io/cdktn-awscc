// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3tables_table_bucket

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcTableBucketProps extends cdktn.TerraformMetaArguments {
    /**
    * Specifies encryption settings for the table bucket
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3tables_table_bucket#encryption_configuration CcTableBucket#encryption_configuration}
    */
    readonly encryptionConfiguration?: CcTableBucket.EncryptionConfigurationProperty;
    /**
    * Settings governing the Metric configuration for the table bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3tables_table_bucket#metrics_configuration CcTableBucket#metrics_configuration}
    */
    readonly metricsConfiguration?: CcTableBucket.MetricsConfigurationProperty;
    /**
    * Specifies replication configuration for the table bucket
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3tables_table_bucket#replication_configuration CcTableBucket#replication_configuration}
    */
    readonly replicationConfiguration?: CcTableBucket.ReplicationConfigurationProperty;
    /**
    * Specifies storage class settings for the table bucket
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3tables_table_bucket#storage_class_configuration CcTableBucket#storage_class_configuration}
    */
    readonly storageClassConfiguration?: CcTableBucket.StorageClassConfigurationProperty;
    /**
    * A name for the table bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3tables_table_bucket#table_bucket_name CcTableBucket#table_bucket_name}
    */
    readonly tableBucketName: string;
    /**
    * User tags (key-value pairs) to associate with the table bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3tables_table_bucket#tags CcTableBucket#tags}
    */
    readonly tags?: CcTableBucket.TagProperty[] | cdktn.IResolvable;
    /**
    * Settings governing the Unreferenced File Removal maintenance action. Unreferenced file removal identifies and deletes all objects that are not referenced by any table snapshots.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3tables_table_bucket#unreferenced_file_removal CcTableBucket#unreferenced_file_removal}
    */
    readonly unreferencedFileRemoval?: CcTableBucket.UnreferencedFileRemovalProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3tables_table_bucket awscc_s3tables_table_bucket}
*/
export class CcTableBucket extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_s3tables_table_bucket";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcTableBucket resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcTableBucket to import
    * @param importFromId The id of the existing CcTableBucket that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3tables_table_bucket#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcTableBucket to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_s3tables_table_bucket", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3tables_table_bucket awscc_s3tables_table_bucket} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcTableBucketProps
    */
    public constructor(scope: Construct, id: string, config: CcTableBucketProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_s3tables_table_bucket',
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
        this._encryptionConfiguration.internalValue = config.encryptionConfiguration;
        this._metricsConfiguration.internalValue = config.metricsConfiguration;
        this._replicationConfiguration.internalValue = config.replicationConfiguration;
        this._storageClassConfiguration.internalValue = config.storageClassConfiguration;
        this._tableBucketName = config.tableBucketName;
        this._tags.internalValue = config.tags;
        this._unreferencedFileRemoval.internalValue = config.unreferencedFileRemoval;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // encryption_configuration - computed: true, optional: true, required: false
    private _encryptionConfiguration = new CcTableBucket.EncryptionConfigurationPropertyOutputReference(this, "encryption_configuration");
    public get encryptionConfiguration() {
        return this._encryptionConfiguration;
    }
    public putEncryptionConfiguration(value: CcTableBucket.EncryptionConfigurationProperty) {
        this._encryptionConfiguration.internalValue = value;
    }
    public resetEncryptionConfiguration() {
        this._encryptionConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionConfigurationInput() {
        return this._encryptionConfiguration.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // metrics_configuration - computed: true, optional: true, required: false
    private _metricsConfiguration = new CcTableBucket.MetricsConfigurationPropertyOutputReference(this, "metrics_configuration");
    public get metricsConfiguration() {
        return this._metricsConfiguration;
    }
    public putMetricsConfiguration(value: CcTableBucket.MetricsConfigurationProperty) {
        this._metricsConfiguration.internalValue = value;
    }
    public resetMetricsConfiguration() {
        this._metricsConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricsConfigurationInput() {
        return this._metricsConfiguration.internalValue;
    }

    // replication_configuration - computed: true, optional: true, required: false
    private _replicationConfiguration = new CcTableBucket.ReplicationConfigurationPropertyOutputReference(this, "replication_configuration");
    public get replicationConfiguration() {
        return this._replicationConfiguration;
    }
    public putReplicationConfiguration(value: CcTableBucket.ReplicationConfigurationProperty) {
        this._replicationConfiguration.internalValue = value;
    }
    public resetReplicationConfiguration() {
        this._replicationConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get replicationConfigurationInput() {
        return this._replicationConfiguration.internalValue;
    }

    // storage_class_configuration - computed: true, optional: true, required: false
    private _storageClassConfiguration = new CcTableBucket.StorageClassConfigurationPropertyOutputReference(this, "storage_class_configuration");
    public get storageClassConfiguration() {
        return this._storageClassConfiguration;
    }
    public putStorageClassConfiguration(value: CcTableBucket.StorageClassConfigurationProperty) {
        this._storageClassConfiguration.internalValue = value;
    }
    public resetStorageClassConfiguration() {
        this._storageClassConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get storageClassConfigurationInput() {
        return this._storageClassConfiguration.internalValue;
    }

    // table_bucket_arn - computed: true, optional: false, required: false
    public get tableBucketArn() {
        return this.getStringAttribute('table_bucket_arn');
    }

    // table_bucket_name - computed: false, optional: false, required: true
    private _tableBucketName?: string; 
    public get tableBucketName() {
        return this.getStringAttribute('table_bucket_name');
    }
    public set tableBucketName(value: string) {
        this._tableBucketName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get tableBucketNameInput() {
        return this._tableBucketName;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcTableBucket.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcTableBucket.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // unreferenced_file_removal - computed: true, optional: true, required: false
    private _unreferencedFileRemoval = new CcTableBucket.UnreferencedFileRemovalPropertyOutputReference(this, "unreferenced_file_removal");
    public get unreferencedFileRemoval() {
        return this._unreferencedFileRemoval;
    }
    public putUnreferencedFileRemoval(value: CcTableBucket.UnreferencedFileRemovalProperty) {
        this._unreferencedFileRemoval.internalValue = value;
    }
    public resetUnreferencedFileRemoval() {
        this._unreferencedFileRemoval.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get unreferencedFileRemovalInput() {
        return this._unreferencedFileRemoval.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            encryption_configuration: ccTableBucketEncryptionConfigurationPropertyToTerraform(this._encryptionConfiguration.internalValue),
            metrics_configuration: ccTableBucketMetricsConfigurationPropertyToTerraform(this._metricsConfiguration.internalValue),
            replication_configuration: ccTableBucketReplicationConfigurationPropertyToTerraform(this._replicationConfiguration.internalValue),
            storage_class_configuration: ccTableBucketStorageClassConfigurationPropertyToTerraform(this._storageClassConfiguration.internalValue),
            table_bucket_name: cdktn.stringToTerraform(this._tableBucketName),
            tags: cdktn.listMapper(ccTableBucketTagPropertyToTerraform, false)(this._tags.internalValue),
            unreferenced_file_removal: ccTableBucketUnreferencedFileRemovalPropertyToTerraform(this._unreferencedFileRemoval.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            encryption_configuration: {
                value: ccTableBucketEncryptionConfigurationPropertyToHclTerraform(this._encryptionConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcTableBucket.EncryptionConfigurationProperty",
            },
            metrics_configuration: {
                value: ccTableBucketMetricsConfigurationPropertyToHclTerraform(this._metricsConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcTableBucket.MetricsConfigurationProperty",
            },
            replication_configuration: {
                value: ccTableBucketReplicationConfigurationPropertyToHclTerraform(this._replicationConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcTableBucket.ReplicationConfigurationProperty",
            },
            storage_class_configuration: {
                value: ccTableBucketStorageClassConfigurationPropertyToHclTerraform(this._storageClassConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcTableBucket.StorageClassConfigurationProperty",
            },
            table_bucket_name: {
                value: cdktn.stringToHclTerraform(this._tableBucketName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccTableBucketTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcTableBucket.TagPropertyList",
            },
            unreferenced_file_removal: {
                value: ccTableBucketUnreferencedFileRemovalPropertyToHclTerraform(this._unreferencedFileRemoval.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcTableBucket.UnreferencedFileRemovalProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccTableBucketEncryptionConfigurationPropertyToTerraform(struct?: CcTableBucket.EncryptionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        kms_key_arn: cdktn.stringToTerraform(struct!.kmsKeyArn),
        sse_algorithm: cdktn.stringToTerraform(struct!.sseAlgorithm),
    }
}


export function ccTableBucketEncryptionConfigurationPropertyToHclTerraform(struct?: CcTableBucket.EncryptionConfigurationProperty | cdktn.IResolvable): any {
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
        sse_algorithm: {
            value: cdktn.stringToHclTerraform(struct!.sseAlgorithm),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTableBucketMetricsConfigurationPropertyToTerraform(struct?: CcTableBucket.MetricsConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        status: cdktn.stringToTerraform(struct!.status),
    }
}


export function ccTableBucketMetricsConfigurationPropertyToHclTerraform(struct?: CcTableBucket.MetricsConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        status: {
            value: cdktn.stringToHclTerraform(struct!.status),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTableBucketReplicationDestinationPropertyToTerraform(struct?: CcTableBucket.ReplicationDestinationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        destination_table_bucket_arn: cdktn.stringToTerraform(struct!.destinationTableBucketArn),
    }
}


export function ccTableBucketReplicationDestinationPropertyToHclTerraform(struct?: CcTableBucket.ReplicationDestinationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        destination_table_bucket_arn: {
            value: cdktn.stringToHclTerraform(struct!.destinationTableBucketArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTableBucketReplicationRulePropertyToTerraform(struct?: CcTableBucket.ReplicationRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        destinations: cdktn.listMapper(ccTableBucketReplicationDestinationPropertyToTerraform, false)(struct!.destinations),
    }
}


export function ccTableBucketReplicationRulePropertyToHclTerraform(struct?: CcTableBucket.ReplicationRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        destinations: {
            value: cdktn.listMapperHcl(ccTableBucketReplicationDestinationPropertyToHclTerraform, false)(struct!.destinations),
            isBlock: true,
            type: "list",
            storageClassType: "ReplicationDestinationPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTableBucketReplicationConfigurationPropertyToTerraform(struct?: CcTableBucket.ReplicationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        role: cdktn.stringToTerraform(struct!.role),
        rules: cdktn.listMapper(ccTableBucketReplicationRulePropertyToTerraform, false)(struct!.rules),
    }
}


export function ccTableBucketReplicationConfigurationPropertyToHclTerraform(struct?: CcTableBucket.ReplicationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        role: {
            value: cdktn.stringToHclTerraform(struct!.role),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        rules: {
            value: cdktn.listMapperHcl(ccTableBucketReplicationRulePropertyToHclTerraform, false)(struct!.rules),
            isBlock: true,
            type: "list",
            storageClassType: "ReplicationRulePropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTableBucketStorageClassConfigurationPropertyToTerraform(struct?: CcTableBucket.StorageClassConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        storage_class: cdktn.stringToTerraform(struct!.storageClass),
    }
}


export function ccTableBucketStorageClassConfigurationPropertyToHclTerraform(struct?: CcTableBucket.StorageClassConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        storage_class: {
            value: cdktn.stringToHclTerraform(struct!.storageClass),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTableBucketTagPropertyToTerraform(struct?: CcTableBucket.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccTableBucketTagPropertyToHclTerraform(struct?: CcTableBucket.TagProperty | cdktn.IResolvable): any {
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


export function ccTableBucketUnreferencedFileRemovalPropertyToTerraform(struct?: CcTableBucket.UnreferencedFileRemovalProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        noncurrent_days: cdktn.numberToTerraform(struct!.noncurrentDays),
        status: cdktn.stringToTerraform(struct!.status),
        unreferenced_days: cdktn.numberToTerraform(struct!.unreferencedDays),
    }
}


export function ccTableBucketUnreferencedFileRemovalPropertyToHclTerraform(struct?: CcTableBucket.UnreferencedFileRemovalProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        noncurrent_days: {
            value: cdktn.numberToHclTerraform(struct!.noncurrentDays),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        status: {
            value: cdktn.stringToHclTerraform(struct!.status),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        unreferenced_days: {
            value: cdktn.numberToHclTerraform(struct!.unreferencedDays),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcTableBucket {
export interface EncryptionConfigurationProperty {
    /**
    * ARN of the KMS key to use for encryption
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3tables_table_bucket#kms_key_arn CcTableBucket#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Server-side encryption algorithm
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3tables_table_bucket#sse_algorithm CcTableBucket#sse_algorithm}
    */
    readonly sseAlgorithm?: string;
}
export class EncryptionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EncryptionConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._kmsKeyArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsKeyArn = this._kmsKeyArn;
        }
        if (this._sseAlgorithm !== undefined) {
            hasAnyValues = true;
            internalValueResult.sseAlgorithm = this._sseAlgorithm;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EncryptionConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._kmsKeyArn = undefined;
            this._sseAlgorithm = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._kmsKeyArn = value.kmsKeyArn;
            this._sseAlgorithm = value.sseAlgorithm;
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

    // sse_algorithm - computed: true, optional: true, required: false
    private _sseAlgorithm?: string; 
    public get sseAlgorithm() {
        return this.getStringAttribute('sse_algorithm');
    }
    public set sseAlgorithm(value: string) {
        this._sseAlgorithm = value;
    }
    public resetSseAlgorithm() {
        this._sseAlgorithm = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sseAlgorithmInput() {
        return this._sseAlgorithm;
    }
}
export interface MetricsConfigurationProperty {
    /**
    * Indicates whether Metrics are enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3tables_table_bucket#status CcTableBucket#status}
    */
    readonly status?: string;
}
export class MetricsConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MetricsConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._status !== undefined) {
            hasAnyValues = true;
            internalValueResult.status = this._status;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MetricsConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._status = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._status = value.status;
        }
    }

    // status - computed: true, optional: true, required: false
    private _status?: string; 
    public get status() {
        return this.getStringAttribute('status');
    }
    public set status(value: string) {
        this._status = value;
    }
    public resetStatus() {
        this._status = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statusInput() {
        return this._status;
    }
}
export interface ReplicationDestinationProperty {
    /**
    * The ARN of the destination table bucket
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3tables_table_bucket#destination_table_bucket_arn CcTableBucket#destination_table_bucket_arn}
    */
    readonly destinationTableBucketArn?: string;
}
export class ReplicationDestinationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ReplicationDestinationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._destinationTableBucketArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinationTableBucketArn = this._destinationTableBucketArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ReplicationDestinationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._destinationTableBucketArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._destinationTableBucketArn = value.destinationTableBucketArn;
        }
    }

    // destination_table_bucket_arn - computed: true, optional: true, required: false
    private _destinationTableBucketArn?: string; 
    public get destinationTableBucketArn() {
        return this.getStringAttribute('destination_table_bucket_arn');
    }
    public set destinationTableBucketArn(value: string) {
        this._destinationTableBucketArn = value;
    }
    public resetDestinationTableBucketArn() {
        this._destinationTableBucketArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationTableBucketArnInput() {
        return this._destinationTableBucketArn;
    }
}

export class ReplicationDestinationPropertyList extends cdktn.ComplexList {
    public internalValue? : ReplicationDestinationProperty[] | cdktn.IResolvable

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
    public get(index: number): ReplicationDestinationPropertyOutputReference {
        return new ReplicationDestinationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ReplicationRuleProperty {
    /**
    * List of replication destinations
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3tables_table_bucket#destinations CcTableBucket#destinations}
    */
    readonly destinations?: ReplicationDestinationProperty[] | cdktn.IResolvable;
}
export class ReplicationRulePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ReplicationRuleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._destinations?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinations = this._destinations?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ReplicationRuleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._destinations.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._destinations.internalValue = value.destinations;
        }
    }

    // destinations - computed: true, optional: true, required: false
    private _destinations = new ReplicationDestinationPropertyList(this, "destinations", false);
    public get destinations() {
        return this._destinations;
    }
    public putDestinations(value: ReplicationDestinationProperty[] | cdktn.IResolvable) {
        this._destinations.internalValue = value;
    }
    public resetDestinations() {
        this._destinations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationsInput() {
        return this._destinations.internalValue;
    }
}

export class ReplicationRulePropertyList extends cdktn.ComplexList {
    public internalValue? : ReplicationRuleProperty[] | cdktn.IResolvable

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
    public get(index: number): ReplicationRulePropertyOutputReference {
        return new ReplicationRulePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ReplicationConfigurationProperty {
    /**
    * The ARN of the IAM role to use for replication
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3tables_table_bucket#role CcTableBucket#role}
    */
    readonly role?: string;
    /**
    * List of replication rules
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3tables_table_bucket#rules CcTableBucket#rules}
    */
    readonly rules?: ReplicationRuleProperty[] | cdktn.IResolvable;
}
export class ReplicationConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ReplicationConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._role !== undefined) {
            hasAnyValues = true;
            internalValueResult.role = this._role;
        }
        if (this._rules?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.rules = this._rules?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ReplicationConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._role = undefined;
            this._rules.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._role = value.role;
            this._rules.internalValue = value.rules;
        }
    }

    // role - computed: true, optional: true, required: false
    private _role?: string; 
    public get role() {
        return this.getStringAttribute('role');
    }
    public set role(value: string) {
        this._role = value;
    }
    public resetRole() {
        this._role = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get roleInput() {
        return this._role;
    }

    // rules - computed: true, optional: true, required: false
    private _rules = new ReplicationRulePropertyList(this, "rules", false);
    public get rules() {
        return this._rules;
    }
    public putRules(value: ReplicationRuleProperty[] | cdktn.IResolvable) {
        this._rules.internalValue = value;
    }
    public resetRules() {
        this._rules.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rulesInput() {
        return this._rules.internalValue;
    }
}
export interface StorageClassConfigurationProperty {
    /**
    * The storage class for the table bucket
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3tables_table_bucket#storage_class CcTableBucket#storage_class}
    */
    readonly storageClass?: string;
}
export class StorageClassConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StorageClassConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._storageClass !== undefined) {
            hasAnyValues = true;
            internalValueResult.storageClass = this._storageClass;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StorageClassConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._storageClass = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._storageClass = value.storageClass;
        }
    }

    // storage_class - computed: true, optional: true, required: false
    private _storageClass?: string; 
    public get storageClass() {
        return this.getStringAttribute('storage_class');
    }
    public set storageClass(value: string) {
        this._storageClass = value;
    }
    public resetStorageClass() {
        this._storageClass = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get storageClassInput() {
        return this._storageClass;
    }
}
export interface TagProperty {
    /**
    * Tag key must be between 1 to 128 characters in length. Tag key cannot start with 'aws:' and can only contain alphanumeric characters, spaces, _, ., /, =, +, -, and @.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3tables_table_bucket#key CcTableBucket#key}
    */
    readonly key?: string;
    /**
    * Tag value must be between 0 to 256 characters in length. Tag value can only contain alphanumeric characters, spaces, _, ., /, =, +, -, and @.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3tables_table_bucket#value CcTableBucket#value}
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
export interface UnreferencedFileRemovalProperty {
    /**
    * S3 permanently deletes noncurrent objects after the number of days specified by the NoncurrentDays property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3tables_table_bucket#noncurrent_days CcTableBucket#noncurrent_days}
    */
    readonly noncurrentDays?: number;
    /**
    * Indicates whether the Unreferenced File Removal maintenance action is enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3tables_table_bucket#status CcTableBucket#status}
    */
    readonly status?: string;
    /**
    * For any object not referenced by your table and older than the UnreferencedDays property, S3 creates a delete marker and marks the object version as noncurrent.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3tables_table_bucket#unreferenced_days CcTableBucket#unreferenced_days}
    */
    readonly unreferencedDays?: number;
}
export class UnreferencedFileRemovalPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): UnreferencedFileRemovalProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._noncurrentDays !== undefined) {
            hasAnyValues = true;
            internalValueResult.noncurrentDays = this._noncurrentDays;
        }
        if (this._status !== undefined) {
            hasAnyValues = true;
            internalValueResult.status = this._status;
        }
        if (this._unreferencedDays !== undefined) {
            hasAnyValues = true;
            internalValueResult.unreferencedDays = this._unreferencedDays;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: UnreferencedFileRemovalProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._noncurrentDays = undefined;
            this._status = undefined;
            this._unreferencedDays = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._noncurrentDays = value.noncurrentDays;
            this._status = value.status;
            this._unreferencedDays = value.unreferencedDays;
        }
    }

    // noncurrent_days - computed: true, optional: true, required: false
    private _noncurrentDays?: number; 
    public get noncurrentDays() {
        return this.getNumberAttribute('noncurrent_days');
    }
    public set noncurrentDays(value: number) {
        this._noncurrentDays = value;
    }
    public resetNoncurrentDays() {
        this._noncurrentDays = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get noncurrentDaysInput() {
        return this._noncurrentDays;
    }

    // status - computed: true, optional: true, required: false
    private _status?: string; 
    public get status() {
        return this.getStringAttribute('status');
    }
    public set status(value: string) {
        this._status = value;
    }
    public resetStatus() {
        this._status = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statusInput() {
        return this._status;
    }

    // unreferenced_days - computed: true, optional: true, required: false
    private _unreferencedDays?: number; 
    public get unreferencedDays() {
        return this.getNumberAttribute('unreferenced_days');
    }
    public set unreferencedDays(value: number) {
        this._unreferencedDays = value;
    }
    public resetUnreferencedDays() {
        this._unreferencedDays = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get unreferencedDaysInput() {
        return this._unreferencedDays;
    }
}
}
