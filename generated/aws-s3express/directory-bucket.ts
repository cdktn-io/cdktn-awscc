// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3express_directory_bucket

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcDirectoryBucketProps extends cdktn.TerraformMetaArguments {
    /**
    * Specifies default encryption for a bucket using server-side encryption with Amazon S3 managed keys (SSE-S3) or AWS KMS keys (SSE-KMS).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3express_directory_bucket#bucket_encryption CcDirectoryBucket#bucket_encryption}
    */
    readonly bucketEncryption?: CcDirectoryBucket.BucketEncryptionProperty;
    /**
    * Specifies a name for the bucket. The bucket name must contain only lowercase letters, numbers, and hyphens (-). A directory bucket name must be unique in the chosen Availability Zone or Local Zone. The bucket name must also follow the format 'bucket_base_name--zone_id--x-s3'. The zone_id can be the ID of an Availability Zone or a Local Zone. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the bucket name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3express_directory_bucket#bucket_name CcDirectoryBucket#bucket_name}
    */
    readonly bucketName?: string;
    /**
    * Specifies the number of Availability Zone or Local Zone that's used for redundancy for the bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3express_directory_bucket#data_redundancy CcDirectoryBucket#data_redundancy}
    */
    readonly dataRedundancy: string;
    /**
    * The inventory configuration for an Amazon S3 Express bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3express_directory_bucket#inventory_configurations CcDirectoryBucket#inventory_configurations}
    */
    readonly inventoryConfigurations?: CcDirectoryBucket.InventoryConfigurationProperty[] | cdktn.IResolvable;
    /**
    * Lifecycle rules that define how Amazon S3 Express manages objects during their lifetime.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3express_directory_bucket#lifecycle_configuration CcDirectoryBucket#lifecycle_configuration}
    */
    readonly lifecycleConfiguration?: CcDirectoryBucket.LifecycleConfigurationProperty;
    /**
    * Specifies the Zone ID of the Availability Zone or Local Zone where the directory bucket will be created. An example Availability Zone ID value is 'use1-az5'.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3express_directory_bucket#location_name CcDirectoryBucket#location_name}
    */
    readonly locationName: string;
    /**
    * Specifies the metrics configurations for the Amazon S3 Express bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3express_directory_bucket#metrics_configurations CcDirectoryBucket#metrics_configurations}
    */
    readonly metricsConfigurations?: CcDirectoryBucket.MetricsConfigurationProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3express_directory_bucket#tags CcDirectoryBucket#tags}
    */
    readonly tags?: CcDirectoryBucket.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3express_directory_bucket awscc_s3express_directory_bucket}
*/
export class CcDirectoryBucket extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_s3express_directory_bucket";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcDirectoryBucket resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcDirectoryBucket to import
    * @param importFromId The id of the existing CcDirectoryBucket that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3express_directory_bucket#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcDirectoryBucket to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_s3express_directory_bucket", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3express_directory_bucket awscc_s3express_directory_bucket} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcDirectoryBucketProps
    */
    public constructor(scope: Construct, id: string, config: CcDirectoryBucketProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_s3express_directory_bucket',
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
        this._bucketEncryption.internalValue = config.bucketEncryption;
        this._bucketName = config.bucketName;
        this._dataRedundancy = config.dataRedundancy;
        this._inventoryConfigurations.internalValue = config.inventoryConfigurations;
        this._lifecycleConfiguration.internalValue = config.lifecycleConfiguration;
        this._locationName = config.locationName;
        this._metricsConfigurations.internalValue = config.metricsConfigurations;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // availability_zone_name - computed: true, optional: false, required: false
    public get availabilityZoneName() {
        return this.getStringAttribute('availability_zone_name');
    }

    // bucket_encryption - computed: true, optional: true, required: false
    private _bucketEncryption = new CcDirectoryBucket.BucketEncryptionPropertyOutputReference(this, "bucket_encryption");
    public get bucketEncryption() {
        return this._bucketEncryption;
    }
    public putBucketEncryption(value: CcDirectoryBucket.BucketEncryptionProperty) {
        this._bucketEncryption.internalValue = value;
    }
    public resetBucketEncryption() {
        this._bucketEncryption.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketEncryptionInput() {
        return this._bucketEncryption.internalValue;
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

    // data_redundancy - computed: false, optional: false, required: true
    private _dataRedundancy?: string; 
    public get dataRedundancy() {
        return this.getStringAttribute('data_redundancy');
    }
    public set dataRedundancy(value: string) {
        this._dataRedundancy = value;
    }
    // Temporarily expose input value. Use with caution.
    public get dataRedundancyInput() {
        return this._dataRedundancy;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // inventory_configurations - computed: true, optional: true, required: false
    private _inventoryConfigurations = new CcDirectoryBucket.InventoryConfigurationPropertyList(this, "inventory_configurations", false);
    public get inventoryConfigurations() {
        return this._inventoryConfigurations;
    }
    public putInventoryConfigurations(value: CcDirectoryBucket.InventoryConfigurationProperty[] | cdktn.IResolvable) {
        this._inventoryConfigurations.internalValue = value;
    }
    public resetInventoryConfigurations() {
        this._inventoryConfigurations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inventoryConfigurationsInput() {
        return this._inventoryConfigurations.internalValue;
    }

    // lifecycle_configuration - computed: true, optional: true, required: false
    private _lifecycleConfiguration = new CcDirectoryBucket.LifecycleConfigurationPropertyOutputReference(this, "lifecycle_configuration");
    public get lifecycleConfiguration() {
        return this._lifecycleConfiguration;
    }
    public putLifecycleConfiguration(value: CcDirectoryBucket.LifecycleConfigurationProperty) {
        this._lifecycleConfiguration.internalValue = value;
    }
    public resetLifecycleConfiguration() {
        this._lifecycleConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lifecycleConfigurationInput() {
        return this._lifecycleConfiguration.internalValue;
    }

    // location_name - computed: false, optional: false, required: true
    private _locationName?: string; 
    public get locationName() {
        return this.getStringAttribute('location_name');
    }
    public set locationName(value: string) {
        this._locationName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get locationNameInput() {
        return this._locationName;
    }

    // metrics_configurations - computed: true, optional: true, required: false
    private _metricsConfigurations = new CcDirectoryBucket.MetricsConfigurationPropertyList(this, "metrics_configurations", false);
    public get metricsConfigurations() {
        return this._metricsConfigurations;
    }
    public putMetricsConfigurations(value: CcDirectoryBucket.MetricsConfigurationProperty[] | cdktn.IResolvable) {
        this._metricsConfigurations.internalValue = value;
    }
    public resetMetricsConfigurations() {
        this._metricsConfigurations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricsConfigurationsInput() {
        return this._metricsConfigurations.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcDirectoryBucket.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcDirectoryBucket.TagProperty[] | cdktn.IResolvable) {
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
            bucket_encryption: ccDirectoryBucketBucketEncryptionPropertyToTerraform(this._bucketEncryption.internalValue),
            bucket_name: cdktn.stringToTerraform(this._bucketName),
            data_redundancy: cdktn.stringToTerraform(this._dataRedundancy),
            inventory_configurations: cdktn.listMapper(ccDirectoryBucketInventoryConfigurationPropertyToTerraform, false)(this._inventoryConfigurations.internalValue),
            lifecycle_configuration: ccDirectoryBucketLifecycleConfigurationPropertyToTerraform(this._lifecycleConfiguration.internalValue),
            location_name: cdktn.stringToTerraform(this._locationName),
            metrics_configurations: cdktn.listMapper(ccDirectoryBucketMetricsConfigurationPropertyToTerraform, false)(this._metricsConfigurations.internalValue),
            tags: cdktn.listMapper(ccDirectoryBucketTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            bucket_encryption: {
                value: ccDirectoryBucketBucketEncryptionPropertyToHclTerraform(this._bucketEncryption.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDirectoryBucket.BucketEncryptionProperty",
            },
            bucket_name: {
                value: cdktn.stringToHclTerraform(this._bucketName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            data_redundancy: {
                value: cdktn.stringToHclTerraform(this._dataRedundancy),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            inventory_configurations: {
                value: cdktn.listMapperHcl(ccDirectoryBucketInventoryConfigurationPropertyToHclTerraform, false)(this._inventoryConfigurations.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcDirectoryBucket.InventoryConfigurationPropertyList",
            },
            lifecycle_configuration: {
                value: ccDirectoryBucketLifecycleConfigurationPropertyToHclTerraform(this._lifecycleConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDirectoryBucket.LifecycleConfigurationProperty",
            },
            location_name: {
                value: cdktn.stringToHclTerraform(this._locationName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            metrics_configurations: {
                value: cdktn.listMapperHcl(ccDirectoryBucketMetricsConfigurationPropertyToHclTerraform, false)(this._metricsConfigurations.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcDirectoryBucket.MetricsConfigurationPropertyList",
            },
            tags: {
                value: cdktn.listMapperHcl(ccDirectoryBucketTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcDirectoryBucket.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccDirectoryBucketServerSideEncryptionByDefaultPropertyToTerraform(struct?: CcDirectoryBucket.ServerSideEncryptionByDefaultProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        kms_master_key_id: cdktn.stringToTerraform(struct!.kmsMasterKeyId),
        sse_algorithm: cdktn.stringToTerraform(struct!.sseAlgorithm),
    }
}


export function ccDirectoryBucketServerSideEncryptionByDefaultPropertyToHclTerraform(struct?: CcDirectoryBucket.ServerSideEncryptionByDefaultProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        kms_master_key_id: {
            value: cdktn.stringToHclTerraform(struct!.kmsMasterKeyId),
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


export function ccDirectoryBucketServerSideEncryptionRulePropertyToTerraform(struct?: CcDirectoryBucket.ServerSideEncryptionRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bucket_key_enabled: cdktn.booleanToTerraform(struct!.bucketKeyEnabled),
        server_side_encryption_by_default: ccDirectoryBucketServerSideEncryptionByDefaultPropertyToTerraform(struct!.serverSideEncryptionByDefault),
    }
}


export function ccDirectoryBucketServerSideEncryptionRulePropertyToHclTerraform(struct?: CcDirectoryBucket.ServerSideEncryptionRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bucket_key_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.bucketKeyEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        server_side_encryption_by_default: {
            value: ccDirectoryBucketServerSideEncryptionByDefaultPropertyToHclTerraform(struct!.serverSideEncryptionByDefault),
            isBlock: true,
            type: "struct",
            storageClassType: "ServerSideEncryptionByDefaultProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDirectoryBucketBucketEncryptionPropertyToTerraform(struct?: CcDirectoryBucket.BucketEncryptionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        server_side_encryption_configuration: cdktn.listMapper(ccDirectoryBucketServerSideEncryptionRulePropertyToTerraform, false)(struct!.serverSideEncryptionConfiguration),
    }
}


export function ccDirectoryBucketBucketEncryptionPropertyToHclTerraform(struct?: CcDirectoryBucket.BucketEncryptionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        server_side_encryption_configuration: {
            value: cdktn.listMapperHcl(ccDirectoryBucketServerSideEncryptionRulePropertyToHclTerraform, false)(struct!.serverSideEncryptionConfiguration),
            isBlock: true,
            type: "list",
            storageClassType: "ServerSideEncryptionRulePropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDirectoryBucketDestinationPropertyToTerraform(struct?: CcDirectoryBucket.DestinationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bucket_account_id: cdktn.stringToTerraform(struct!.bucketAccountId),
        bucket_arn: cdktn.stringToTerraform(struct!.bucketArn),
        format: cdktn.stringToTerraform(struct!.format),
        prefix: cdktn.stringToTerraform(struct!.prefix),
    }
}


export function ccDirectoryBucketDestinationPropertyToHclTerraform(struct?: CcDirectoryBucket.DestinationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bucket_account_id: {
            value: cdktn.stringToHclTerraform(struct!.bucketAccountId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        bucket_arn: {
            value: cdktn.stringToHclTerraform(struct!.bucketArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        format: {
            value: cdktn.stringToHclTerraform(struct!.format),
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


export function ccDirectoryBucketInventoryConfigurationPropertyToTerraform(struct?: CcDirectoryBucket.InventoryConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        destination: ccDirectoryBucketDestinationPropertyToTerraform(struct!.destination),
        enabled: cdktn.booleanToTerraform(struct!.enabled),
        id: cdktn.stringToTerraform(struct!.id),
        included_object_versions: cdktn.stringToTerraform(struct!.includedObjectVersions),
        optional_fields: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.optionalFields),
        prefix: cdktn.stringToTerraform(struct!.prefix),
        schedule_frequency: cdktn.stringToTerraform(struct!.scheduleFrequency),
    }
}


export function ccDirectoryBucketInventoryConfigurationPropertyToHclTerraform(struct?: CcDirectoryBucket.InventoryConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        destination: {
            value: ccDirectoryBucketDestinationPropertyToHclTerraform(struct!.destination),
            isBlock: true,
            type: "struct",
            storageClassType: "DestinationProperty",
        },
        enabled: {
            value: cdktn.booleanToHclTerraform(struct!.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        id: {
            value: cdktn.stringToHclTerraform(struct!.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        included_object_versions: {
            value: cdktn.stringToHclTerraform(struct!.includedObjectVersions),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        optional_fields: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.optionalFields),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        prefix: {
            value: cdktn.stringToHclTerraform(struct!.prefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        schedule_frequency: {
            value: cdktn.stringToHclTerraform(struct!.scheduleFrequency),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDirectoryBucketAbortIncompleteMultipartUploadPropertyToTerraform(struct?: CcDirectoryBucket.AbortIncompleteMultipartUploadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        days_after_initiation: cdktn.numberToTerraform(struct!.daysAfterInitiation),
    }
}


export function ccDirectoryBucketAbortIncompleteMultipartUploadPropertyToHclTerraform(struct?: CcDirectoryBucket.AbortIncompleteMultipartUploadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        days_after_initiation: {
            value: cdktn.numberToHclTerraform(struct!.daysAfterInitiation),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDirectoryBucketRulePropertyToTerraform(struct?: CcDirectoryBucket.RuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        abort_incomplete_multipart_upload: ccDirectoryBucketAbortIncompleteMultipartUploadPropertyToTerraform(struct!.abortIncompleteMultipartUpload),
        expiration_in_days: cdktn.numberToTerraform(struct!.expirationInDays),
        id: cdktn.stringToTerraform(struct!.id),
        object_size_greater_than: cdktn.stringToTerraform(struct!.objectSizeGreaterThan),
        object_size_less_than: cdktn.stringToTerraform(struct!.objectSizeLessThan),
        prefix: cdktn.stringToTerraform(struct!.prefix),
        status: cdktn.stringToTerraform(struct!.status),
    }
}


export function ccDirectoryBucketRulePropertyToHclTerraform(struct?: CcDirectoryBucket.RuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        abort_incomplete_multipart_upload: {
            value: ccDirectoryBucketAbortIncompleteMultipartUploadPropertyToHclTerraform(struct!.abortIncompleteMultipartUpload),
            isBlock: true,
            type: "struct",
            storageClassType: "AbortIncompleteMultipartUploadProperty",
        },
        expiration_in_days: {
            value: cdktn.numberToHclTerraform(struct!.expirationInDays),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        id: {
            value: cdktn.stringToHclTerraform(struct!.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        object_size_greater_than: {
            value: cdktn.stringToHclTerraform(struct!.objectSizeGreaterThan),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        object_size_less_than: {
            value: cdktn.stringToHclTerraform(struct!.objectSizeLessThan),
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


export function ccDirectoryBucketLifecycleConfigurationPropertyToTerraform(struct?: CcDirectoryBucket.LifecycleConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        rules: cdktn.listMapper(ccDirectoryBucketRulePropertyToTerraform, false)(struct!.rules),
    }
}


export function ccDirectoryBucketLifecycleConfigurationPropertyToHclTerraform(struct?: CcDirectoryBucket.LifecycleConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        rules: {
            value: cdktn.listMapperHcl(ccDirectoryBucketRulePropertyToHclTerraform, false)(struct!.rules),
            isBlock: true,
            type: "list",
            storageClassType: "RulePropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDirectoryBucketMetricsConfigurationPropertyToTerraform(struct?: CcDirectoryBucket.MetricsConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        access_point_arn: cdktn.stringToTerraform(struct!.accessPointArn),
        id: cdktn.stringToTerraform(struct!.id),
        prefix: cdktn.stringToTerraform(struct!.prefix),
    }
}


export function ccDirectoryBucketMetricsConfigurationPropertyToHclTerraform(struct?: CcDirectoryBucket.MetricsConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        access_point_arn: {
            value: cdktn.stringToHclTerraform(struct!.accessPointArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        id: {
            value: cdktn.stringToHclTerraform(struct!.id),
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


export function ccDirectoryBucketTagPropertyToTerraform(struct?: CcDirectoryBucket.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccDirectoryBucketTagPropertyToHclTerraform(struct?: CcDirectoryBucket.TagProperty | cdktn.IResolvable): any {
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


export namespace CcDirectoryBucket {
export interface ServerSideEncryptionByDefaultProperty {
    /**
    * AWS Key Management Service (KMS) customer managed key ID to use for the default encryption. This parameter is allowed only if SSEAlgorithm is set to aws:kms. You can specify this parameter with the key ID or the Amazon Resource Name (ARN) of the KMS key
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3express_directory_bucket#kms_master_key_id CcDirectoryBucket#kms_master_key_id}
    */
    readonly kmsMasterKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3express_directory_bucket#sse_algorithm CcDirectoryBucket#sse_algorithm}
    */
    readonly sseAlgorithm?: string;
}
export class ServerSideEncryptionByDefaultPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ServerSideEncryptionByDefaultProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._kmsMasterKeyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsMasterKeyId = this._kmsMasterKeyId;
        }
        if (this._sseAlgorithm !== undefined) {
            hasAnyValues = true;
            internalValueResult.sseAlgorithm = this._sseAlgorithm;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ServerSideEncryptionByDefaultProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._kmsMasterKeyId = undefined;
            this._sseAlgorithm = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._kmsMasterKeyId = value.kmsMasterKeyId;
            this._sseAlgorithm = value.sseAlgorithm;
        }
    }

    // kms_master_key_id - computed: true, optional: true, required: false
    private _kmsMasterKeyId?: string; 
    public get kmsMasterKeyId() {
        return this.getStringAttribute('kms_master_key_id');
    }
    public set kmsMasterKeyId(value: string) {
        this._kmsMasterKeyId = value;
    }
    public resetKmsMasterKeyId() {
        this._kmsMasterKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsMasterKeyIdInput() {
        return this._kmsMasterKeyId;
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
export interface ServerSideEncryptionRuleProperty {
    /**
    * Specifies whether Amazon S3 should use an S3 Bucket Key with server-side encryption using KMS (SSE-KMS) for new objects in the bucket. Existing objects are not affected. Amazon S3 Express One Zone uses an S3 Bucket Key with SSE-KMS and S3 Bucket Key cannot be disabled. It's only allowed to set the BucketKeyEnabled element to true.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3express_directory_bucket#bucket_key_enabled CcDirectoryBucket#bucket_key_enabled}
    */
    readonly bucketKeyEnabled?: boolean | cdktn.IResolvable;
    /**
    * Specifies the default server-side encryption to apply to new objects in the bucket. If a PUT Object request doesn't specify any server-side encryption, this default encryption will be applied.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3express_directory_bucket#server_side_encryption_by_default CcDirectoryBucket#server_side_encryption_by_default}
    */
    readonly serverSideEncryptionByDefault?: ServerSideEncryptionByDefaultProperty;
}
export class ServerSideEncryptionRulePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ServerSideEncryptionRuleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bucketKeyEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketKeyEnabled = this._bucketKeyEnabled;
        }
        if (this._serverSideEncryptionByDefault?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.serverSideEncryptionByDefault = this._serverSideEncryptionByDefault?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ServerSideEncryptionRuleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bucketKeyEnabled = undefined;
            this._serverSideEncryptionByDefault.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bucketKeyEnabled = value.bucketKeyEnabled;
            this._serverSideEncryptionByDefault.internalValue = value.serverSideEncryptionByDefault;
        }
    }

    // bucket_key_enabled - computed: true, optional: true, required: false
    private _bucketKeyEnabled?: boolean | cdktn.IResolvable; 
    public get bucketKeyEnabled() {
        return this.getBooleanAttribute('bucket_key_enabled');
    }
    public set bucketKeyEnabled(value: boolean | cdktn.IResolvable) {
        this._bucketKeyEnabled = value;
    }
    public resetBucketKeyEnabled() {
        this._bucketKeyEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketKeyEnabledInput() {
        return this._bucketKeyEnabled;
    }

    // server_side_encryption_by_default - computed: true, optional: true, required: false
    private _serverSideEncryptionByDefault = new ServerSideEncryptionByDefaultPropertyOutputReference(this, "server_side_encryption_by_default");
    public get serverSideEncryptionByDefault() {
        return this._serverSideEncryptionByDefault;
    }
    public putServerSideEncryptionByDefault(value: ServerSideEncryptionByDefaultProperty) {
        this._serverSideEncryptionByDefault.internalValue = value;
    }
    public resetServerSideEncryptionByDefault() {
        this._serverSideEncryptionByDefault.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serverSideEncryptionByDefaultInput() {
        return this._serverSideEncryptionByDefault.internalValue;
    }
}

export class ServerSideEncryptionRulePropertyList extends cdktn.ComplexList {
    public internalValue? : ServerSideEncryptionRuleProperty[] | cdktn.IResolvable

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
    public get(index: number): ServerSideEncryptionRulePropertyOutputReference {
        return new ServerSideEncryptionRulePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface BucketEncryptionProperty {
    /**
    * Specifies the default server-side-encryption configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3express_directory_bucket#server_side_encryption_configuration CcDirectoryBucket#server_side_encryption_configuration}
    */
    readonly serverSideEncryptionConfiguration?: ServerSideEncryptionRuleProperty[] | cdktn.IResolvable;
}
export class BucketEncryptionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): BucketEncryptionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._serverSideEncryptionConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.serverSideEncryptionConfiguration = this._serverSideEncryptionConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BucketEncryptionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._serverSideEncryptionConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._serverSideEncryptionConfiguration.internalValue = value.serverSideEncryptionConfiguration;
        }
    }

    // server_side_encryption_configuration - computed: true, optional: true, required: false
    private _serverSideEncryptionConfiguration = new ServerSideEncryptionRulePropertyList(this, "server_side_encryption_configuration", false);
    public get serverSideEncryptionConfiguration() {
        return this._serverSideEncryptionConfiguration;
    }
    public putServerSideEncryptionConfiguration(value: ServerSideEncryptionRuleProperty[] | cdktn.IResolvable) {
        this._serverSideEncryptionConfiguration.internalValue = value;
    }
    public resetServerSideEncryptionConfiguration() {
        this._serverSideEncryptionConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serverSideEncryptionConfigurationInput() {
        return this._serverSideEncryptionConfiguration.internalValue;
    }
}
export interface DestinationProperty {
    /**
    * The account ID that owns the destination S3 bucket. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3express_directory_bucket#bucket_account_id CcDirectoryBucket#bucket_account_id}
    */
    readonly bucketAccountId?: string;
    /**
    * The Amazon Resource Name (ARN) of the destination Amazon S3 bucket to which data is exported.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3express_directory_bucket#bucket_arn CcDirectoryBucket#bucket_arn}
    */
    readonly bucketArn?: string;
    /**
    * Specifies the file format used when exporting data to Amazon S3.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3express_directory_bucket#format CcDirectoryBucket#format}
    */
    readonly format?: string;
    /**
    * The prefix to use when exporting data. The prefix is prepended to all results.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3express_directory_bucket#prefix CcDirectoryBucket#prefix}
    */
    readonly prefix?: string;
}
export class DestinationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DestinationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bucketAccountId !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketAccountId = this._bucketAccountId;
        }
        if (this._bucketArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketArn = this._bucketArn;
        }
        if (this._format !== undefined) {
            hasAnyValues = true;
            internalValueResult.format = this._format;
        }
        if (this._prefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.prefix = this._prefix;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DestinationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bucketAccountId = undefined;
            this._bucketArn = undefined;
            this._format = undefined;
            this._prefix = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bucketAccountId = value.bucketAccountId;
            this._bucketArn = value.bucketArn;
            this._format = value.format;
            this._prefix = value.prefix;
        }
    }

    // bucket_account_id - computed: true, optional: true, required: false
    private _bucketAccountId?: string; 
    public get bucketAccountId() {
        return this.getStringAttribute('bucket_account_id');
    }
    public set bucketAccountId(value: string) {
        this._bucketAccountId = value;
    }
    public resetBucketAccountId() {
        this._bucketAccountId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketAccountIdInput() {
        return this._bucketAccountId;
    }

    // bucket_arn - computed: true, optional: true, required: false
    private _bucketArn?: string; 
    public get bucketArn() {
        return this.getStringAttribute('bucket_arn');
    }
    public set bucketArn(value: string) {
        this._bucketArn = value;
    }
    public resetBucketArn() {
        this._bucketArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketArnInput() {
        return this._bucketArn;
    }

    // format - computed: true, optional: true, required: false
    private _format?: string; 
    public get format() {
        return this.getStringAttribute('format');
    }
    public set format(value: string) {
        this._format = value;
    }
    public resetFormat() {
        this._format = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get formatInput() {
        return this._format;
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
export interface InventoryConfigurationProperty {
    /**
    * Specifies information about where to publish inventory reports for an Amazon S3 Express bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3express_directory_bucket#destination CcDirectoryBucket#destination}
    */
    readonly destination?: DestinationProperty;
    /**
    * Specifies whether the inventory is enabled or disabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3express_directory_bucket#enabled CcDirectoryBucket#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
    /**
    * The ID used to identify the inventory configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3express_directory_bucket#id CcDirectoryBucket#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Object versions to include in the inventory list.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3express_directory_bucket#included_object_versions CcDirectoryBucket#included_object_versions}
    */
    readonly includedObjectVersions?: string;
    /**
    * Contains the optional fields that are included in the inventory results.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3express_directory_bucket#optional_fields CcDirectoryBucket#optional_fields}
    */
    readonly optionalFields?: string[];
    /**
    * The prefix that is prepended to all inventory results.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3express_directory_bucket#prefix CcDirectoryBucket#prefix}
    */
    readonly prefix?: string;
    /**
    * Specifies the schedule for generating inventory results.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3express_directory_bucket#schedule_frequency CcDirectoryBucket#schedule_frequency}
    */
    readonly scheduleFrequency?: string;
}
export class InventoryConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): InventoryConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._destination?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.destination = this._destination?.internalValue;
        }
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        if (this._includedObjectVersions !== undefined) {
            hasAnyValues = true;
            internalValueResult.includedObjectVersions = this._includedObjectVersions;
        }
        if (this._optionalFields !== undefined) {
            hasAnyValues = true;
            internalValueResult.optionalFields = this._optionalFields;
        }
        if (this._prefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.prefix = this._prefix;
        }
        if (this._scheduleFrequency !== undefined) {
            hasAnyValues = true;
            internalValueResult.scheduleFrequency = this._scheduleFrequency;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InventoryConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._destination.internalValue = undefined;
            this._enabled = undefined;
            this._id = undefined;
            this._includedObjectVersions = undefined;
            this._optionalFields = undefined;
            this._prefix = undefined;
            this._scheduleFrequency = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._destination.internalValue = value.destination;
            this._enabled = value.enabled;
            this._id = value.id;
            this._includedObjectVersions = value.includedObjectVersions;
            this._optionalFields = value.optionalFields;
            this._prefix = value.prefix;
            this._scheduleFrequency = value.scheduleFrequency;
        }
    }

    // destination - computed: true, optional: true, required: false
    private _destination = new DestinationPropertyOutputReference(this, "destination");
    public get destination() {
        return this._destination;
    }
    public putDestination(value: DestinationProperty) {
        this._destination.internalValue = value;
    }
    public resetDestination() {
        this._destination.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationInput() {
        return this._destination.internalValue;
    }

    // enabled - computed: true, optional: true, required: false
    private _enabled?: boolean | cdktn.IResolvable; 
    public get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    public set enabled(value: boolean | cdktn.IResolvable) {
        this._enabled = value;
    }
    public resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
        return this._enabled;
    }

    // id - computed: true, optional: true, required: false
    private _id?: string; 
    public get id() {
        return this.getStringAttribute('id');
    }
    public set id(value: string) {
        this._id = value;
    }
    public resetId() {
        this._id = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idInput() {
        return this._id;
    }

    // included_object_versions - computed: true, optional: true, required: false
    private _includedObjectVersions?: string; 
    public get includedObjectVersions() {
        return this.getStringAttribute('included_object_versions');
    }
    public set includedObjectVersions(value: string) {
        this._includedObjectVersions = value;
    }
    public resetIncludedObjectVersions() {
        this._includedObjectVersions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get includedObjectVersionsInput() {
        return this._includedObjectVersions;
    }

    // optional_fields - computed: true, optional: true, required: false
    private _optionalFields?: string[]; 
    public get optionalFields() {
        return this.getListAttribute('optional_fields');
    }
    public set optionalFields(value: string[]) {
        this._optionalFields = value;
    }
    public resetOptionalFields() {
        this._optionalFields = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get optionalFieldsInput() {
        return this._optionalFields;
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

    // schedule_frequency - computed: true, optional: true, required: false
    private _scheduleFrequency?: string; 
    public get scheduleFrequency() {
        return this.getStringAttribute('schedule_frequency');
    }
    public set scheduleFrequency(value: string) {
        this._scheduleFrequency = value;
    }
    public resetScheduleFrequency() {
        this._scheduleFrequency = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduleFrequencyInput() {
        return this._scheduleFrequency;
    }
}

export class InventoryConfigurationPropertyList extends cdktn.ComplexList {
    public internalValue? : InventoryConfigurationProperty[] | cdktn.IResolvable

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
    public get(index: number): InventoryConfigurationPropertyOutputReference {
        return new InventoryConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface AbortIncompleteMultipartUploadProperty {
    /**
    * Specifies the number of days after which Amazon S3 aborts an incomplete multipart upload.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3express_directory_bucket#days_after_initiation CcDirectoryBucket#days_after_initiation}
    */
    readonly daysAfterInitiation?: number;
}
export class AbortIncompleteMultipartUploadPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AbortIncompleteMultipartUploadProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._daysAfterInitiation !== undefined) {
            hasAnyValues = true;
            internalValueResult.daysAfterInitiation = this._daysAfterInitiation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AbortIncompleteMultipartUploadProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._daysAfterInitiation = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._daysAfterInitiation = value.daysAfterInitiation;
        }
    }

    // days_after_initiation - computed: true, optional: true, required: false
    private _daysAfterInitiation?: number; 
    public get daysAfterInitiation() {
        return this.getNumberAttribute('days_after_initiation');
    }
    public set daysAfterInitiation(value: number) {
        this._daysAfterInitiation = value;
    }
    public resetDaysAfterInitiation() {
        this._daysAfterInitiation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get daysAfterInitiationInput() {
        return this._daysAfterInitiation;
    }
}
export interface RuleProperty {
    /**
    * Specifies the days since the initiation of an incomplete multipart upload that Amazon S3 will wait before permanently removing all parts of the upload.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3express_directory_bucket#abort_incomplete_multipart_upload CcDirectoryBucket#abort_incomplete_multipart_upload}
    */
    readonly abortIncompleteMultipartUpload?: AbortIncompleteMultipartUploadProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3express_directory_bucket#expiration_in_days CcDirectoryBucket#expiration_in_days}
    */
    readonly expirationInDays?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3express_directory_bucket#id CcDirectoryBucket#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3express_directory_bucket#object_size_greater_than CcDirectoryBucket#object_size_greater_than}
    */
    readonly objectSizeGreaterThan?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3express_directory_bucket#object_size_less_than CcDirectoryBucket#object_size_less_than}
    */
    readonly objectSizeLessThan?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3express_directory_bucket#prefix CcDirectoryBucket#prefix}
    */
    readonly prefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3express_directory_bucket#status CcDirectoryBucket#status}
    */
    readonly status?: string;
}
export class RulePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): RuleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._abortIncompleteMultipartUpload?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.abortIncompleteMultipartUpload = this._abortIncompleteMultipartUpload?.internalValue;
        }
        if (this._expirationInDays !== undefined) {
            hasAnyValues = true;
            internalValueResult.expirationInDays = this._expirationInDays;
        }
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        if (this._objectSizeGreaterThan !== undefined) {
            hasAnyValues = true;
            internalValueResult.objectSizeGreaterThan = this._objectSizeGreaterThan;
        }
        if (this._objectSizeLessThan !== undefined) {
            hasAnyValues = true;
            internalValueResult.objectSizeLessThan = this._objectSizeLessThan;
        }
        if (this._prefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.prefix = this._prefix;
        }
        if (this._status !== undefined) {
            hasAnyValues = true;
            internalValueResult.status = this._status;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RuleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._abortIncompleteMultipartUpload.internalValue = undefined;
            this._expirationInDays = undefined;
            this._id = undefined;
            this._objectSizeGreaterThan = undefined;
            this._objectSizeLessThan = undefined;
            this._prefix = undefined;
            this._status = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._abortIncompleteMultipartUpload.internalValue = value.abortIncompleteMultipartUpload;
            this._expirationInDays = value.expirationInDays;
            this._id = value.id;
            this._objectSizeGreaterThan = value.objectSizeGreaterThan;
            this._objectSizeLessThan = value.objectSizeLessThan;
            this._prefix = value.prefix;
            this._status = value.status;
        }
    }

    // abort_incomplete_multipart_upload - computed: true, optional: true, required: false
    private _abortIncompleteMultipartUpload = new AbortIncompleteMultipartUploadPropertyOutputReference(this, "abort_incomplete_multipart_upload");
    public get abortIncompleteMultipartUpload() {
        return this._abortIncompleteMultipartUpload;
    }
    public putAbortIncompleteMultipartUpload(value: AbortIncompleteMultipartUploadProperty) {
        this._abortIncompleteMultipartUpload.internalValue = value;
    }
    public resetAbortIncompleteMultipartUpload() {
        this._abortIncompleteMultipartUpload.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get abortIncompleteMultipartUploadInput() {
        return this._abortIncompleteMultipartUpload.internalValue;
    }

    // expiration_in_days - computed: true, optional: true, required: false
    private _expirationInDays?: number; 
    public get expirationInDays() {
        return this.getNumberAttribute('expiration_in_days');
    }
    public set expirationInDays(value: number) {
        this._expirationInDays = value;
    }
    public resetExpirationInDays() {
        this._expirationInDays = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get expirationInDaysInput() {
        return this._expirationInDays;
    }

    // id - computed: true, optional: true, required: false
    private _id?: string; 
    public get id() {
        return this.getStringAttribute('id');
    }
    public set id(value: string) {
        this._id = value;
    }
    public resetId() {
        this._id = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idInput() {
        return this._id;
    }

    // object_size_greater_than - computed: true, optional: true, required: false
    private _objectSizeGreaterThan?: string; 
    public get objectSizeGreaterThan() {
        return this.getStringAttribute('object_size_greater_than');
    }
    public set objectSizeGreaterThan(value: string) {
        this._objectSizeGreaterThan = value;
    }
    public resetObjectSizeGreaterThan() {
        this._objectSizeGreaterThan = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get objectSizeGreaterThanInput() {
        return this._objectSizeGreaterThan;
    }

    // object_size_less_than - computed: true, optional: true, required: false
    private _objectSizeLessThan?: string; 
    public get objectSizeLessThan() {
        return this.getStringAttribute('object_size_less_than');
    }
    public set objectSizeLessThan(value: string) {
        this._objectSizeLessThan = value;
    }
    public resetObjectSizeLessThan() {
        this._objectSizeLessThan = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get objectSizeLessThanInput() {
        return this._objectSizeLessThan;
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

export class RulePropertyList extends cdktn.ComplexList {
    public internalValue? : RuleProperty[] | cdktn.IResolvable

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
    public get(index: number): RulePropertyOutputReference {
        return new RulePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface LifecycleConfigurationProperty {
    /**
    * A lifecycle rule for individual objects in an Amazon S3 Express bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3express_directory_bucket#rules CcDirectoryBucket#rules}
    */
    readonly rules?: RuleProperty[] | cdktn.IResolvable;
}
export class LifecycleConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LifecycleConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._rules?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.rules = this._rules?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LifecycleConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._rules.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._rules.internalValue = value.rules;
        }
    }

    // rules - computed: true, optional: true, required: false
    private _rules = new RulePropertyList(this, "rules", false);
    public get rules() {
        return this._rules;
    }
    public putRules(value: RuleProperty[] | cdktn.IResolvable) {
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
export interface MetricsConfigurationProperty {
    /**
    * The access point ARN used when evaluating a metrics filter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3express_directory_bucket#access_point_arn CcDirectoryBucket#access_point_arn}
    */
    readonly accessPointArn?: string;
    /**
    * The ID used to identify the metrics configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3express_directory_bucket#id CcDirectoryBucket#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * The prefix used when evaluating a metrics filter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3express_directory_bucket#prefix CcDirectoryBucket#prefix}
    */
    readonly prefix?: string;
}
export class MetricsConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): MetricsConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._accessPointArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.accessPointArn = this._accessPointArn;
        }
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        if (this._prefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.prefix = this._prefix;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MetricsConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accessPointArn = undefined;
            this._id = undefined;
            this._prefix = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accessPointArn = value.accessPointArn;
            this._id = value.id;
            this._prefix = value.prefix;
        }
    }

    // access_point_arn - computed: true, optional: true, required: false
    private _accessPointArn?: string; 
    public get accessPointArn() {
        return this.getStringAttribute('access_point_arn');
    }
    public set accessPointArn(value: string) {
        this._accessPointArn = value;
    }
    public resetAccessPointArn() {
        this._accessPointArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accessPointArnInput() {
        return this._accessPointArn;
    }

    // id - computed: true, optional: true, required: false
    private _id?: string; 
    public get id() {
        return this.getStringAttribute('id');
    }
    public set id(value: string) {
        this._id = value;
    }
    public resetId() {
        this._id = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idInput() {
        return this._id;
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

export class MetricsConfigurationPropertyList extends cdktn.ComplexList {
    public internalValue? : MetricsConfigurationProperty[] | cdktn.IResolvable

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
    public get(index: number): MetricsConfigurationPropertyOutputReference {
        return new MetricsConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3express_directory_bucket#key CcDirectoryBucket#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3express_directory_bucket#value CcDirectoryBucket#value}
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
