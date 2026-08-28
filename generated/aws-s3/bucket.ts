// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcBucketProps extends cdktn.TerraformMetaArguments {
    /**
    * Configures the transfer acceleration state for an Amazon S3 bucket. For more information, see [Amazon S3 Transfer Acceleration](https://docs.aws.amazon.com/AmazonS3/latest/dev/transfer-acceleration.html) in the *Amazon S3 User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#accelerate_configuration CcBucket#accelerate_configuration}
    */
    readonly accelerateConfiguration?: CcBucket.AccelerateConfigurationProperty;
    /**
    * This is a legacy property, and it is not recommended for most use cases. A majority of modern use cases in Amazon S3 no longer require the use of ACLs, and we recommend that you keep ACLs disabled. For more information, see [Controlling object ownership](https://docs.aws.amazon.com//AmazonS3/latest/userguide/about-object-ownership.html) in the *Amazon S3 User Guide*.
    *   A canned access control list (ACL) that grants predefined permissions to the bucket. For more information about canned ACLs, see [Canned ACL](https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl) in the *Amazon S3 User Guide*.
    *   S3 buckets are created with ACLs disabled by default. Therefore, unless you explicitly set the [AWS::S3::OwnershipControls](https://docs.aws.amazon.com//AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-ownershipcontrols.html) property to enable ACLs, your resource will fail to deploy with any value other than Private. Use cases requiring ACLs are uncommon.
    *   The majority of access control configurations can be successfully and more easily achieved with bucket policies. For more information, see [AWS::S3::BucketPolicy](https://docs.aws.amazon.com//AWSCloudFormation/latest/UserGuide/aws-properties-s3-policy.html). For examples of common policy configurations, including S3 Server Access Logs buckets and more, see [Bucket policy examples](https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-bucket-policies.html) in the *Amazon S3 User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#access_control CcBucket#access_control}
    */
    readonly accessControl?: string;
    /**
    * Specifies the configuration and any analyses for the analytics filter of an Amazon S3 bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#analytics_configurations CcBucket#analytics_configurations}
    */
    readonly analyticsConfigurations?: CcBucket.AnalyticsConfigurationProperty[] | cdktn.IResolvable;
    /**
    * Specifies default encryption for a bucket using server-side encryption with Amazon S3-managed keys (SSE-S3), AWS KMS-managed keys (SSE-KMS), or dual-layer server-side encryption with KMS-managed keys (DSSE-KMS). For information about the Amazon S3 default encryption feature, see [Amazon S3 Default Encryption for S3 Buckets](https://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-encryption.html) in the *Amazon S3 User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#bucket_encryption CcBucket#bucket_encryption}
    */
    readonly bucketEncryption?: CcBucket.BucketEncryptionProperty;
    /**
    * A name for the bucket. If you don't specify a name, AWS CloudFormation generates a unique ID and uses that ID for the bucket name. The bucket name must contain only lowercase letters, numbers, periods (.), and dashes (-) and must follow [Amazon S3 bucket restrictions and limitations](https://docs.aws.amazon.com/AmazonS3/latest/dev/BucketRestrictions.html). For more information, see [Rules for naming Amazon S3 buckets](https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucketnamingrules.html) in the *Amazon S3 User Guide*. 
    *   If you specify a name, you can't perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you need to replace the resource, specify a new name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#bucket_name CcBucket#bucket_name}
    */
    readonly bucketName?: string;
    /**
    * Describes the cross-origin access configuration for objects in an Amazon S3 bucket. For more information, see [Enabling Cross-Origin Resource Sharing](https://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html) in the *Amazon S3 User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#cors_configuration CcBucket#cors_configuration}
    */
    readonly corsConfiguration?: CcBucket.CorsConfigurationProperty;
    /**
    * Defines how Amazon S3 handles Intelligent-Tiering storage.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#intelligent_tiering_configurations CcBucket#intelligent_tiering_configurations}
    */
    readonly intelligentTieringConfigurations?: CcBucket.IntelligentTieringConfigurationProperty[] | cdktn.IResolvable;
    /**
    * Specifies the inventory configuration for an Amazon S3 bucket. For more information, see [GET Bucket inventory](https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketGETInventoryConfig.html) in the *Amazon S3 API Reference*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#inventory_configurations CcBucket#inventory_configurations}
    */
    readonly inventoryConfigurations?: CcBucket.InventoryConfigurationProperty[] | cdktn.IResolvable;
    /**
    * Specifies the lifecycle configuration for objects in an Amazon S3 bucket. For more information, see [Object Lifecycle Management](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lifecycle-mgmt.html) in the *Amazon S3 User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#lifecycle_configuration CcBucket#lifecycle_configuration}
    */
    readonly lifecycleConfiguration?: CcBucket.LifecycleConfigurationProperty;
    /**
    * Settings that define where logs are stored.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#logging_configuration CcBucket#logging_configuration}
    */
    readonly loggingConfiguration?: CcBucket.LoggingConfigurationProperty;
    /**
    * The metadata table configuration of an S3 general purpose bucket. For more information, see [Accelerating data discovery with S3 Metadata](https://docs.aws.amazon.com/AmazonS3/latest/userguide/metadata-tables-overview.html) and [Setting up permissions for configuring metadata tables](https://docs.aws.amazon.com/AmazonS3/latest/userguide/metadata-tables-permissions.html).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#metadata_table_configuration CcBucket#metadata_table_configuration}
    */
    readonly metadataTableConfiguration?: CcBucket.MetadataTableConfigurationProperty;
    /**
    * Specifies a metrics configuration for the CloudWatch request metrics (specified by the metrics configuration ID) from an Amazon S3 bucket. If you're updating an existing metrics configuration, note that this is a full replacement of the existing metrics configuration. If you don't include the elements you want to keep, they are erased. For more information, see [PutBucketMetricsConfiguration](https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTMetricConfiguration.html).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#metrics_configurations CcBucket#metrics_configurations}
    */
    readonly metricsConfigurations?: CcBucket.MetricsConfigurationProperty[] | cdktn.IResolvable;
    /**
    * Configuration that defines how Amazon S3 handles bucket notifications.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#notification_configuration CcBucket#notification_configuration}
    */
    readonly notificationConfiguration?: CcBucket.NotificationConfigurationProperty;
    /**
    * This operation is not supported for directory buckets.
    *   Places an Object Lock configuration on the specified bucket. The rule specified in the Object Lock configuration will be applied by default to every new object placed in the specified bucket. For more information, see [Locking Objects](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock.html). 
    *    +  The ``DefaultRetention`` settings require both a mode and a period.
    *   +  The ``DefaultRetention`` period can be either ``Days`` or ``Years`` but you must select one. You cannot specify ``Days`` and ``Years`` at the same time.
    *   +  You can enable Object Lock for new or existing buckets. For more information, see [Configuring Object Lock](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-configure.html).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#object_lock_configuration CcBucket#object_lock_configuration}
    */
    readonly objectLockConfiguration?: CcBucket.ObjectLockConfigurationProperty;
    /**
    * Indicates whether this bucket has an Object Lock configuration enabled. Enable ``ObjectLockEnabled`` when you apply ``ObjectLockConfiguration`` to a bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#object_lock_enabled CcBucket#object_lock_enabled}
    */
    readonly objectLockEnabled?: boolean | cdktn.IResolvable;
    /**
    * Configuration that defines how Amazon S3 handles Object Ownership rules.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#ownership_controls CcBucket#ownership_controls}
    */
    readonly ownershipControls?: CcBucket.OwnershipControlsProperty;
    /**
    * Configuration that defines how Amazon S3 handles public access.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#public_access_block_configuration CcBucket#public_access_block_configuration}
    */
    readonly publicAccessBlockConfiguration?: CcBucket.PublicAccessBlockConfigurationProperty;
    /**
    * Configuration for replicating objects in an S3 bucket. To enable replication, you must also enable versioning by using the ``VersioningConfiguration`` property.
    *  Amazon S3 can store replicated objects in a single destination bucket or multiple destination buckets. The destination bucket or buckets must already exist.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#replication_configuration CcBucket#replication_configuration}
    */
    readonly replicationConfiguration?: CcBucket.ReplicationConfigurationProperty;
    /**
    * An arbitrary set of tags (key-value pairs) for this S3 bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#tags CcBucket#tags}
    */
    readonly tags?: CcBucket.TagProperty[] | cdktn.IResolvable;
    /**
    * Enables multiple versions of all objects in this bucket. You might enable versioning to prevent objects from being deleted or overwritten by mistake or to archive objects so that you can retrieve previous versions of them.
    *   When you enable versioning on a bucket for the first time, it might take a short amount of time for the change to be fully propagated. We recommend that you wait for 15 minutes after enabling versioning before issuing write operations (``PUT`` or ``DELETE``) on objects in the bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#versioning_configuration CcBucket#versioning_configuration}
    */
    readonly versioningConfiguration?: CcBucket.VersioningConfigurationProperty;
    /**
    * Information used to configure the bucket as a static website. For more information, see [Hosting Websites on Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#website_configuration CcBucket#website_configuration}
    */
    readonly websiteConfiguration?: CcBucket.WebsiteConfigurationProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket awscc_s3_bucket}
*/
export class CcBucket extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_s3_bucket";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcBucket resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcBucket to import
    * @param importFromId The id of the existing CcBucket that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcBucket to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_s3_bucket", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket awscc_s3_bucket} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcBucketProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcBucketProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_s3_bucket',
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
        this._accelerateConfiguration.internalValue = config.accelerateConfiguration;
        this._accessControl = config.accessControl;
        this._analyticsConfigurations.internalValue = config.analyticsConfigurations;
        this._bucketEncryption.internalValue = config.bucketEncryption;
        this._bucketName = config.bucketName;
        this._corsConfiguration.internalValue = config.corsConfiguration;
        this._intelligentTieringConfigurations.internalValue = config.intelligentTieringConfigurations;
        this._inventoryConfigurations.internalValue = config.inventoryConfigurations;
        this._lifecycleConfiguration.internalValue = config.lifecycleConfiguration;
        this._loggingConfiguration.internalValue = config.loggingConfiguration;
        this._metadataTableConfiguration.internalValue = config.metadataTableConfiguration;
        this._metricsConfigurations.internalValue = config.metricsConfigurations;
        this._notificationConfiguration.internalValue = config.notificationConfiguration;
        this._objectLockConfiguration.internalValue = config.objectLockConfiguration;
        this._objectLockEnabled = config.objectLockEnabled;
        this._ownershipControls.internalValue = config.ownershipControls;
        this._publicAccessBlockConfiguration.internalValue = config.publicAccessBlockConfiguration;
        this._replicationConfiguration.internalValue = config.replicationConfiguration;
        this._tags.internalValue = config.tags;
        this._versioningConfiguration.internalValue = config.versioningConfiguration;
        this._websiteConfiguration.internalValue = config.websiteConfiguration;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // accelerate_configuration - computed: true, optional: true, required: false
    private _accelerateConfiguration = new CcBucket.AccelerateConfigurationPropertyOutputReference(this, "accelerate_configuration");
    public get accelerateConfiguration() {
        return this._accelerateConfiguration;
    }
    public putAccelerateConfiguration(value: CcBucket.AccelerateConfigurationProperty) {
        this._accelerateConfiguration.internalValue = value;
    }
    public resetAccelerateConfiguration() {
        this._accelerateConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accelerateConfigurationInput() {
        return this._accelerateConfiguration.internalValue;
    }

    // access_control - computed: true, optional: true, required: false
    private _accessControl?: string; 
    public get accessControl() {
        return this.getStringAttribute('access_control');
    }
    public set accessControl(value: string) {
        this._accessControl = value;
    }
    public resetAccessControl() {
        this._accessControl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accessControlInput() {
        return this._accessControl;
    }

    // analytics_configurations - computed: true, optional: true, required: false
    private _analyticsConfigurations = new CcBucket.AnalyticsConfigurationPropertyList(this, "analytics_configurations", false);
    public get analyticsConfigurations() {
        return this._analyticsConfigurations;
    }
    public putAnalyticsConfigurations(value: CcBucket.AnalyticsConfigurationProperty[] | cdktn.IResolvable) {
        this._analyticsConfigurations.internalValue = value;
    }
    public resetAnalyticsConfigurations() {
        this._analyticsConfigurations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get analyticsConfigurationsInput() {
        return this._analyticsConfigurations.internalValue;
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // bucket_encryption - computed: true, optional: true, required: false
    private _bucketEncryption = new CcBucket.BucketEncryptionPropertyOutputReference(this, "bucket_encryption");
    public get bucketEncryption() {
        return this._bucketEncryption;
    }
    public putBucketEncryption(value: CcBucket.BucketEncryptionProperty) {
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

    // cors_configuration - computed: true, optional: true, required: false
    private _corsConfiguration = new CcBucket.CorsConfigurationPropertyOutputReference(this, "cors_configuration");
    public get corsConfiguration() {
        return this._corsConfiguration;
    }
    public putCorsConfiguration(value: CcBucket.CorsConfigurationProperty) {
        this._corsConfiguration.internalValue = value;
    }
    public resetCorsConfiguration() {
        this._corsConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get corsConfigurationInput() {
        return this._corsConfiguration.internalValue;
    }

    // domain_name - computed: true, optional: false, required: false
    public get domainName() {
        return this.getStringAttribute('domain_name');
    }

    // dual_stack_domain_name - computed: true, optional: false, required: false
    public get dualStackDomainName() {
        return this.getStringAttribute('dual_stack_domain_name');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // intelligent_tiering_configurations - computed: true, optional: true, required: false
    private _intelligentTieringConfigurations = new CcBucket.IntelligentTieringConfigurationPropertyList(this, "intelligent_tiering_configurations", false);
    public get intelligentTieringConfigurations() {
        return this._intelligentTieringConfigurations;
    }
    public putIntelligentTieringConfigurations(value: CcBucket.IntelligentTieringConfigurationProperty[] | cdktn.IResolvable) {
        this._intelligentTieringConfigurations.internalValue = value;
    }
    public resetIntelligentTieringConfigurations() {
        this._intelligentTieringConfigurations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get intelligentTieringConfigurationsInput() {
        return this._intelligentTieringConfigurations.internalValue;
    }

    // inventory_configurations - computed: true, optional: true, required: false
    private _inventoryConfigurations = new CcBucket.InventoryConfigurationPropertyList(this, "inventory_configurations", false);
    public get inventoryConfigurations() {
        return this._inventoryConfigurations;
    }
    public putInventoryConfigurations(value: CcBucket.InventoryConfigurationProperty[] | cdktn.IResolvable) {
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
    private _lifecycleConfiguration = new CcBucket.LifecycleConfigurationPropertyOutputReference(this, "lifecycle_configuration");
    public get lifecycleConfiguration() {
        return this._lifecycleConfiguration;
    }
    public putLifecycleConfiguration(value: CcBucket.LifecycleConfigurationProperty) {
        this._lifecycleConfiguration.internalValue = value;
    }
    public resetLifecycleConfiguration() {
        this._lifecycleConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lifecycleConfigurationInput() {
        return this._lifecycleConfiguration.internalValue;
    }

    // logging_configuration - computed: true, optional: true, required: false
    private _loggingConfiguration = new CcBucket.LoggingConfigurationPropertyOutputReference(this, "logging_configuration");
    public get loggingConfiguration() {
        return this._loggingConfiguration;
    }
    public putLoggingConfiguration(value: CcBucket.LoggingConfigurationProperty) {
        this._loggingConfiguration.internalValue = value;
    }
    public resetLoggingConfiguration() {
        this._loggingConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get loggingConfigurationInput() {
        return this._loggingConfiguration.internalValue;
    }

    // metadata_table_configuration - computed: true, optional: true, required: false
    private _metadataTableConfiguration = new CcBucket.MetadataTableConfigurationPropertyOutputReference(this, "metadata_table_configuration");
    public get metadataTableConfiguration() {
        return this._metadataTableConfiguration;
    }
    public putMetadataTableConfiguration(value: CcBucket.MetadataTableConfigurationProperty) {
        this._metadataTableConfiguration.internalValue = value;
    }
    public resetMetadataTableConfiguration() {
        this._metadataTableConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metadataTableConfigurationInput() {
        return this._metadataTableConfiguration.internalValue;
    }

    // metrics_configurations - computed: true, optional: true, required: false
    private _metricsConfigurations = new CcBucket.MetricsConfigurationPropertyList(this, "metrics_configurations", false);
    public get metricsConfigurations() {
        return this._metricsConfigurations;
    }
    public putMetricsConfigurations(value: CcBucket.MetricsConfigurationProperty[] | cdktn.IResolvable) {
        this._metricsConfigurations.internalValue = value;
    }
    public resetMetricsConfigurations() {
        this._metricsConfigurations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricsConfigurationsInput() {
        return this._metricsConfigurations.internalValue;
    }

    // notification_configuration - computed: true, optional: true, required: false
    private _notificationConfiguration = new CcBucket.NotificationConfigurationPropertyOutputReference(this, "notification_configuration");
    public get notificationConfiguration() {
        return this._notificationConfiguration;
    }
    public putNotificationConfiguration(value: CcBucket.NotificationConfigurationProperty) {
        this._notificationConfiguration.internalValue = value;
    }
    public resetNotificationConfiguration() {
        this._notificationConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get notificationConfigurationInput() {
        return this._notificationConfiguration.internalValue;
    }

    // object_lock_configuration - computed: true, optional: true, required: false
    private _objectLockConfiguration = new CcBucket.ObjectLockConfigurationPropertyOutputReference(this, "object_lock_configuration");
    public get objectLockConfiguration() {
        return this._objectLockConfiguration;
    }
    public putObjectLockConfiguration(value: CcBucket.ObjectLockConfigurationProperty) {
        this._objectLockConfiguration.internalValue = value;
    }
    public resetObjectLockConfiguration() {
        this._objectLockConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get objectLockConfigurationInput() {
        return this._objectLockConfiguration.internalValue;
    }

    // object_lock_enabled - computed: true, optional: true, required: false
    private _objectLockEnabled?: boolean | cdktn.IResolvable; 
    public get objectLockEnabled() {
        return this.getBooleanAttribute('object_lock_enabled');
    }
    public set objectLockEnabled(value: boolean | cdktn.IResolvable) {
        this._objectLockEnabled = value;
    }
    public resetObjectLockEnabled() {
        this._objectLockEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get objectLockEnabledInput() {
        return this._objectLockEnabled;
    }

    // ownership_controls - computed: true, optional: true, required: false
    private _ownershipControls = new CcBucket.OwnershipControlsPropertyOutputReference(this, "ownership_controls");
    public get ownershipControls() {
        return this._ownershipControls;
    }
    public putOwnershipControls(value: CcBucket.OwnershipControlsProperty) {
        this._ownershipControls.internalValue = value;
    }
    public resetOwnershipControls() {
        this._ownershipControls.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ownershipControlsInput() {
        return this._ownershipControls.internalValue;
    }

    // public_access_block_configuration - computed: true, optional: true, required: false
    private _publicAccessBlockConfiguration = new CcBucket.PublicAccessBlockConfigurationPropertyOutputReference(this, "public_access_block_configuration");
    public get publicAccessBlockConfiguration() {
        return this._publicAccessBlockConfiguration;
    }
    public putPublicAccessBlockConfiguration(value: CcBucket.PublicAccessBlockConfigurationProperty) {
        this._publicAccessBlockConfiguration.internalValue = value;
    }
    public resetPublicAccessBlockConfiguration() {
        this._publicAccessBlockConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get publicAccessBlockConfigurationInput() {
        return this._publicAccessBlockConfiguration.internalValue;
    }

    // regional_domain_name - computed: true, optional: false, required: false
    public get regionalDomainName() {
        return this.getStringAttribute('regional_domain_name');
    }

    // replication_configuration - computed: true, optional: true, required: false
    private _replicationConfiguration = new CcBucket.ReplicationConfigurationPropertyOutputReference(this, "replication_configuration");
    public get replicationConfiguration() {
        return this._replicationConfiguration;
    }
    public putReplicationConfiguration(value: CcBucket.ReplicationConfigurationProperty) {
        this._replicationConfiguration.internalValue = value;
    }
    public resetReplicationConfiguration() {
        this._replicationConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get replicationConfigurationInput() {
        return this._replicationConfiguration.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcBucket.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcBucket.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // versioning_configuration - computed: true, optional: true, required: false
    private _versioningConfiguration = new CcBucket.VersioningConfigurationPropertyOutputReference(this, "versioning_configuration");
    public get versioningConfiguration() {
        return this._versioningConfiguration;
    }
    public putVersioningConfiguration(value: CcBucket.VersioningConfigurationProperty) {
        this._versioningConfiguration.internalValue = value;
    }
    public resetVersioningConfiguration() {
        this._versioningConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get versioningConfigurationInput() {
        return this._versioningConfiguration.internalValue;
    }

    // website_configuration - computed: true, optional: true, required: false
    private _websiteConfiguration = new CcBucket.WebsiteConfigurationPropertyOutputReference(this, "website_configuration");
    public get websiteConfiguration() {
        return this._websiteConfiguration;
    }
    public putWebsiteConfiguration(value: CcBucket.WebsiteConfigurationProperty) {
        this._websiteConfiguration.internalValue = value;
    }
    public resetWebsiteConfiguration() {
        this._websiteConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get websiteConfigurationInput() {
        return this._websiteConfiguration.internalValue;
    }

    // website_url - computed: true, optional: false, required: false
    public get websiteUrl() {
        return this.getStringAttribute('website_url');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            accelerate_configuration: ccBucketAccelerateConfigurationPropertyToTerraform(this._accelerateConfiguration.internalValue),
            access_control: cdktn.stringToTerraform(this._accessControl),
            analytics_configurations: cdktn.listMapper(ccBucketAnalyticsConfigurationPropertyToTerraform, false)(this._analyticsConfigurations.internalValue),
            bucket_encryption: ccBucketBucketEncryptionPropertyToTerraform(this._bucketEncryption.internalValue),
            bucket_name: cdktn.stringToTerraform(this._bucketName),
            cors_configuration: ccBucketCorsConfigurationPropertyToTerraform(this._corsConfiguration.internalValue),
            intelligent_tiering_configurations: cdktn.listMapper(ccBucketIntelligentTieringConfigurationPropertyToTerraform, false)(this._intelligentTieringConfigurations.internalValue),
            inventory_configurations: cdktn.listMapper(ccBucketInventoryConfigurationPropertyToTerraform, false)(this._inventoryConfigurations.internalValue),
            lifecycle_configuration: ccBucketLifecycleConfigurationPropertyToTerraform(this._lifecycleConfiguration.internalValue),
            logging_configuration: ccBucketLoggingConfigurationPropertyToTerraform(this._loggingConfiguration.internalValue),
            metadata_table_configuration: ccBucketMetadataTableConfigurationPropertyToTerraform(this._metadataTableConfiguration.internalValue),
            metrics_configurations: cdktn.listMapper(ccBucketMetricsConfigurationPropertyToTerraform, false)(this._metricsConfigurations.internalValue),
            notification_configuration: ccBucketNotificationConfigurationPropertyToTerraform(this._notificationConfiguration.internalValue),
            object_lock_configuration: ccBucketObjectLockConfigurationPropertyToTerraform(this._objectLockConfiguration.internalValue),
            object_lock_enabled: cdktn.booleanToTerraform(this._objectLockEnabled),
            ownership_controls: ccBucketOwnershipControlsPropertyToTerraform(this._ownershipControls.internalValue),
            public_access_block_configuration: ccBucketPublicAccessBlockConfigurationPropertyToTerraform(this._publicAccessBlockConfiguration.internalValue),
            replication_configuration: ccBucketReplicationConfigurationPropertyToTerraform(this._replicationConfiguration.internalValue),
            tags: cdktn.listMapper(ccBucketTagPropertyToTerraform, false)(this._tags.internalValue),
            versioning_configuration: ccBucketVersioningConfigurationPropertyToTerraform(this._versioningConfiguration.internalValue),
            website_configuration: ccBucketWebsiteConfigurationPropertyToTerraform(this._websiteConfiguration.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            accelerate_configuration: {
                value: ccBucketAccelerateConfigurationPropertyToHclTerraform(this._accelerateConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcBucket.AccelerateConfigurationProperty",
            },
            access_control: {
                value: cdktn.stringToHclTerraform(this._accessControl),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            analytics_configurations: {
                value: cdktn.listMapperHcl(ccBucketAnalyticsConfigurationPropertyToHclTerraform, false)(this._analyticsConfigurations.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcBucket.AnalyticsConfigurationPropertyList",
            },
            bucket_encryption: {
                value: ccBucketBucketEncryptionPropertyToHclTerraform(this._bucketEncryption.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcBucket.BucketEncryptionProperty",
            },
            bucket_name: {
                value: cdktn.stringToHclTerraform(this._bucketName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            cors_configuration: {
                value: ccBucketCorsConfigurationPropertyToHclTerraform(this._corsConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcBucket.CorsConfigurationProperty",
            },
            intelligent_tiering_configurations: {
                value: cdktn.listMapperHcl(ccBucketIntelligentTieringConfigurationPropertyToHclTerraform, false)(this._intelligentTieringConfigurations.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcBucket.IntelligentTieringConfigurationPropertyList",
            },
            inventory_configurations: {
                value: cdktn.listMapperHcl(ccBucketInventoryConfigurationPropertyToHclTerraform, false)(this._inventoryConfigurations.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcBucket.InventoryConfigurationPropertyList",
            },
            lifecycle_configuration: {
                value: ccBucketLifecycleConfigurationPropertyToHclTerraform(this._lifecycleConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcBucket.LifecycleConfigurationProperty",
            },
            logging_configuration: {
                value: ccBucketLoggingConfigurationPropertyToHclTerraform(this._loggingConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcBucket.LoggingConfigurationProperty",
            },
            metadata_table_configuration: {
                value: ccBucketMetadataTableConfigurationPropertyToHclTerraform(this._metadataTableConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcBucket.MetadataTableConfigurationProperty",
            },
            metrics_configurations: {
                value: cdktn.listMapperHcl(ccBucketMetricsConfigurationPropertyToHclTerraform, false)(this._metricsConfigurations.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcBucket.MetricsConfigurationPropertyList",
            },
            notification_configuration: {
                value: ccBucketNotificationConfigurationPropertyToHclTerraform(this._notificationConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcBucket.NotificationConfigurationProperty",
            },
            object_lock_configuration: {
                value: ccBucketObjectLockConfigurationPropertyToHclTerraform(this._objectLockConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcBucket.ObjectLockConfigurationProperty",
            },
            object_lock_enabled: {
                value: cdktn.booleanToHclTerraform(this._objectLockEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            ownership_controls: {
                value: ccBucketOwnershipControlsPropertyToHclTerraform(this._ownershipControls.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcBucket.OwnershipControlsProperty",
            },
            public_access_block_configuration: {
                value: ccBucketPublicAccessBlockConfigurationPropertyToHclTerraform(this._publicAccessBlockConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcBucket.PublicAccessBlockConfigurationProperty",
            },
            replication_configuration: {
                value: ccBucketReplicationConfigurationPropertyToHclTerraform(this._replicationConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcBucket.ReplicationConfigurationProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccBucketTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcBucket.TagPropertyList",
            },
            versioning_configuration: {
                value: ccBucketVersioningConfigurationPropertyToHclTerraform(this._versioningConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcBucket.VersioningConfigurationProperty",
            },
            website_configuration: {
                value: ccBucketWebsiteConfigurationPropertyToHclTerraform(this._websiteConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcBucket.WebsiteConfigurationProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccBucketAccelerateConfigurationPropertyToTerraform(struct?: CcBucket.AccelerateConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        acceleration_status: cdktn.stringToTerraform(struct!.accelerationStatus),
    }
}


export function ccBucketAccelerateConfigurationPropertyToHclTerraform(struct?: CcBucket.AccelerateConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        acceleration_status: {
            value: cdktn.stringToHclTerraform(struct!.accelerationStatus),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccBucketDestinationPropertyToTerraform(struct?: CcBucket.DestinationProperty | cdktn.IResolvable): any {
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


export function ccBucketDestinationPropertyToHclTerraform(struct?: CcBucket.DestinationProperty | cdktn.IResolvable): any {
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


export function ccBucketDataExportPropertyToTerraform(struct?: CcBucket.DataExportProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        destination: ccBucketDestinationPropertyToTerraform(struct!.destination),
        output_schema_version: cdktn.stringToTerraform(struct!.outputSchemaVersion),
    }
}


export function ccBucketDataExportPropertyToHclTerraform(struct?: CcBucket.DataExportProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        destination: {
            value: ccBucketDestinationPropertyToHclTerraform(struct!.destination),
            isBlock: true,
            type: "struct",
            storageClassType: "DestinationProperty",
        },
        output_schema_version: {
            value: cdktn.stringToHclTerraform(struct!.outputSchemaVersion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccBucketStorageClassAnalysisPropertyToTerraform(struct?: CcBucket.StorageClassAnalysisProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        data_export: ccBucketDataExportPropertyToTerraform(struct!.dataExport),
    }
}


export function ccBucketStorageClassAnalysisPropertyToHclTerraform(struct?: CcBucket.StorageClassAnalysisProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        data_export: {
            value: ccBucketDataExportPropertyToHclTerraform(struct!.dataExport),
            isBlock: true,
            type: "struct",
            storageClassType: "DataExportProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccBucketTagFilterPropertyToTerraform(struct?: CcBucket.TagFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccBucketTagFilterPropertyToHclTerraform(struct?: CcBucket.TagFilterProperty | cdktn.IResolvable): any {
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


export function ccBucketAnalyticsConfigurationPropertyToTerraform(struct?: CcBucket.AnalyticsConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        id: cdktn.stringToTerraform(struct!.id),
        prefix: cdktn.stringToTerraform(struct!.prefix),
        storage_class_analysis: ccBucketStorageClassAnalysisPropertyToTerraform(struct!.storageClassAnalysis),
        tag_filters: cdktn.listMapper(ccBucketTagFilterPropertyToTerraform, false)(struct!.tagFilters),
    }
}


export function ccBucketAnalyticsConfigurationPropertyToHclTerraform(struct?: CcBucket.AnalyticsConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
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
        storage_class_analysis: {
            value: ccBucketStorageClassAnalysisPropertyToHclTerraform(struct!.storageClassAnalysis),
            isBlock: true,
            type: "struct",
            storageClassType: "StorageClassAnalysisProperty",
        },
        tag_filters: {
            value: cdktn.listMapperHcl(ccBucketTagFilterPropertyToHclTerraform, false)(struct!.tagFilters),
            isBlock: true,
            type: "list",
            storageClassType: "TagFilterPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccBucketServerSideEncryptionByDefaultPropertyToTerraform(struct?: CcBucket.ServerSideEncryptionByDefaultProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        kms_master_key_id: cdktn.stringToTerraform(struct!.kmsMasterKeyId),
        sse_algorithm: cdktn.stringToTerraform(struct!.sseAlgorithm),
    }
}


export function ccBucketServerSideEncryptionByDefaultPropertyToHclTerraform(struct?: CcBucket.ServerSideEncryptionByDefaultProperty | cdktn.IResolvable): any {
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


export function ccBucketServerSideEncryptionRulePropertyToTerraform(struct?: CcBucket.ServerSideEncryptionRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bucket_key_enabled: cdktn.booleanToTerraform(struct!.bucketKeyEnabled),
        server_side_encryption_by_default: ccBucketServerSideEncryptionByDefaultPropertyToTerraform(struct!.serverSideEncryptionByDefault),
    }
}


export function ccBucketServerSideEncryptionRulePropertyToHclTerraform(struct?: CcBucket.ServerSideEncryptionRuleProperty | cdktn.IResolvable): any {
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
            value: ccBucketServerSideEncryptionByDefaultPropertyToHclTerraform(struct!.serverSideEncryptionByDefault),
            isBlock: true,
            type: "struct",
            storageClassType: "ServerSideEncryptionByDefaultProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccBucketBucketEncryptionPropertyToTerraform(struct?: CcBucket.BucketEncryptionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        server_side_encryption_configuration: cdktn.listMapper(ccBucketServerSideEncryptionRulePropertyToTerraform, false)(struct!.serverSideEncryptionConfiguration),
    }
}


export function ccBucketBucketEncryptionPropertyToHclTerraform(struct?: CcBucket.BucketEncryptionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        server_side_encryption_configuration: {
            value: cdktn.listMapperHcl(ccBucketServerSideEncryptionRulePropertyToHclTerraform, false)(struct!.serverSideEncryptionConfiguration),
            isBlock: true,
            type: "list",
            storageClassType: "ServerSideEncryptionRulePropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccBucketCorsRulePropertyToTerraform(struct?: CcBucket.CorsRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        allowed_headers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedHeaders),
        allowed_methods: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedMethods),
        allowed_origins: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedOrigins),
        exposed_headers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.exposedHeaders),
        id: cdktn.stringToTerraform(struct!.id),
        max_age: cdktn.numberToTerraform(struct!.maxAge),
    }
}


export function ccBucketCorsRulePropertyToHclTerraform(struct?: CcBucket.CorsRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        allowed_headers: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedHeaders),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        allowed_methods: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedMethods),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        allowed_origins: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedOrigins),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        exposed_headers: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.exposedHeaders),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        id: {
            value: cdktn.stringToHclTerraform(struct!.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        max_age: {
            value: cdktn.numberToHclTerraform(struct!.maxAge),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccBucketCorsConfigurationPropertyToTerraform(struct?: CcBucket.CorsConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cors_rules: cdktn.listMapper(ccBucketCorsRulePropertyToTerraform, false)(struct!.corsRules),
    }
}


export function ccBucketCorsConfigurationPropertyToHclTerraform(struct?: CcBucket.CorsConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cors_rules: {
            value: cdktn.listMapperHcl(ccBucketCorsRulePropertyToHclTerraform, false)(struct!.corsRules),
            isBlock: true,
            type: "list",
            storageClassType: "CorsRulePropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccBucketIntelligentTieringConfigurationsTagFiltersPropertyToTerraform(struct?: CcBucket.IntelligentTieringConfigurationsTagFiltersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccBucketIntelligentTieringConfigurationsTagFiltersPropertyToHclTerraform(struct?: CcBucket.IntelligentTieringConfigurationsTagFiltersProperty | cdktn.IResolvable): any {
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


export function ccBucketTieringPropertyToTerraform(struct?: CcBucket.TieringProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        access_tier: cdktn.stringToTerraform(struct!.accessTier),
        days: cdktn.numberToTerraform(struct!.days),
    }
}


export function ccBucketTieringPropertyToHclTerraform(struct?: CcBucket.TieringProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        access_tier: {
            value: cdktn.stringToHclTerraform(struct!.accessTier),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        days: {
            value: cdktn.numberToHclTerraform(struct!.days),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccBucketIntelligentTieringConfigurationPropertyToTerraform(struct?: CcBucket.IntelligentTieringConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        id: cdktn.stringToTerraform(struct!.id),
        prefix: cdktn.stringToTerraform(struct!.prefix),
        status: cdktn.stringToTerraform(struct!.status),
        tag_filters: cdktn.listMapper(ccBucketIntelligentTieringConfigurationsTagFiltersPropertyToTerraform, false)(struct!.tagFilters),
        tierings: cdktn.listMapper(ccBucketTieringPropertyToTerraform, false)(struct!.tierings),
    }
}


export function ccBucketIntelligentTieringConfigurationPropertyToHclTerraform(struct?: CcBucket.IntelligentTieringConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
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
        status: {
            value: cdktn.stringToHclTerraform(struct!.status),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        tag_filters: {
            value: cdktn.listMapperHcl(ccBucketIntelligentTieringConfigurationsTagFiltersPropertyToHclTerraform, false)(struct!.tagFilters),
            isBlock: true,
            type: "list",
            storageClassType: "IntelligentTieringConfigurationsTagFiltersPropertyList",
        },
        tierings: {
            value: cdktn.listMapperHcl(ccBucketTieringPropertyToHclTerraform, false)(struct!.tierings),
            isBlock: true,
            type: "list",
            storageClassType: "TieringPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccBucketInventoryConfigurationsDestinationPropertyToTerraform(struct?: CcBucket.InventoryConfigurationsDestinationProperty | cdktn.IResolvable): any {
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


export function ccBucketInventoryConfigurationsDestinationPropertyToHclTerraform(struct?: CcBucket.InventoryConfigurationsDestinationProperty | cdktn.IResolvable): any {
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


export function ccBucketInventoryConfigurationPropertyToTerraform(struct?: CcBucket.InventoryConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        destination: ccBucketInventoryConfigurationsDestinationPropertyToTerraform(struct!.destination),
        enabled: cdktn.booleanToTerraform(struct!.enabled),
        id: cdktn.stringToTerraform(struct!.id),
        included_object_versions: cdktn.stringToTerraform(struct!.includedObjectVersions),
        optional_fields: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.optionalFields),
        prefix: cdktn.stringToTerraform(struct!.prefix),
        schedule_frequency: cdktn.stringToTerraform(struct!.scheduleFrequency),
    }
}


export function ccBucketInventoryConfigurationPropertyToHclTerraform(struct?: CcBucket.InventoryConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        destination: {
            value: ccBucketInventoryConfigurationsDestinationPropertyToHclTerraform(struct!.destination),
            isBlock: true,
            type: "struct",
            storageClassType: "InventoryConfigurationsDestinationProperty",
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


export function ccBucketAbortIncompleteMultipartUploadPropertyToTerraform(struct?: CcBucket.AbortIncompleteMultipartUploadProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        days_after_initiation: cdktn.numberToTerraform(struct!.daysAfterInitiation),
    }
}


export function ccBucketAbortIncompleteMultipartUploadPropertyToHclTerraform(struct?: CcBucket.AbortIncompleteMultipartUploadProperty | cdktn.IResolvable): any {
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


export function ccBucketNoncurrentVersionExpirationPropertyToTerraform(struct?: CcBucket.NoncurrentVersionExpirationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        newer_noncurrent_versions: cdktn.numberToTerraform(struct!.newerNoncurrentVersions),
        noncurrent_days: cdktn.numberToTerraform(struct!.noncurrentDays),
    }
}


export function ccBucketNoncurrentVersionExpirationPropertyToHclTerraform(struct?: CcBucket.NoncurrentVersionExpirationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        newer_noncurrent_versions: {
            value: cdktn.numberToHclTerraform(struct!.newerNoncurrentVersions),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        noncurrent_days: {
            value: cdktn.numberToHclTerraform(struct!.noncurrentDays),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccBucketNoncurrentVersionTransitionPropertyToTerraform(struct?: CcBucket.NoncurrentVersionTransitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        newer_noncurrent_versions: cdktn.numberToTerraform(struct!.newerNoncurrentVersions),
        storage_class: cdktn.stringToTerraform(struct!.storageClass),
        transition_in_days: cdktn.numberToTerraform(struct!.transitionInDays),
    }
}


export function ccBucketNoncurrentVersionTransitionPropertyToHclTerraform(struct?: CcBucket.NoncurrentVersionTransitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        newer_noncurrent_versions: {
            value: cdktn.numberToHclTerraform(struct!.newerNoncurrentVersions),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        storage_class: {
            value: cdktn.stringToHclTerraform(struct!.storageClass),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        transition_in_days: {
            value: cdktn.numberToHclTerraform(struct!.transitionInDays),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccBucketNoncurrentVersionTransitionsPropertyToTerraform(struct?: CcBucket.NoncurrentVersionTransitionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        newer_noncurrent_versions: cdktn.numberToTerraform(struct!.newerNoncurrentVersions),
        storage_class: cdktn.stringToTerraform(struct!.storageClass),
        transition_in_days: cdktn.numberToTerraform(struct!.transitionInDays),
    }
}


export function ccBucketNoncurrentVersionTransitionsPropertyToHclTerraform(struct?: CcBucket.NoncurrentVersionTransitionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        newer_noncurrent_versions: {
            value: cdktn.numberToHclTerraform(struct!.newerNoncurrentVersions),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        storage_class: {
            value: cdktn.stringToHclTerraform(struct!.storageClass),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        transition_in_days: {
            value: cdktn.numberToHclTerraform(struct!.transitionInDays),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccBucketLifecycleConfigurationRulesTagFiltersPropertyToTerraform(struct?: CcBucket.LifecycleConfigurationRulesTagFiltersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccBucketLifecycleConfigurationRulesTagFiltersPropertyToHclTerraform(struct?: CcBucket.LifecycleConfigurationRulesTagFiltersProperty | cdktn.IResolvable): any {
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


export function ccBucketTransitionPropertyToTerraform(struct?: CcBucket.TransitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        storage_class: cdktn.stringToTerraform(struct!.storageClass),
        transition_date: cdktn.stringToTerraform(struct!.transitionDate),
        transition_in_days: cdktn.numberToTerraform(struct!.transitionInDays),
    }
}


export function ccBucketTransitionPropertyToHclTerraform(struct?: CcBucket.TransitionProperty | cdktn.IResolvable): any {
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
        transition_date: {
            value: cdktn.stringToHclTerraform(struct!.transitionDate),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        transition_in_days: {
            value: cdktn.numberToHclTerraform(struct!.transitionInDays),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccBucketTransitionsPropertyToTerraform(struct?: CcBucket.TransitionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        storage_class: cdktn.stringToTerraform(struct!.storageClass),
        transition_date: cdktn.stringToTerraform(struct!.transitionDate),
        transition_in_days: cdktn.numberToTerraform(struct!.transitionInDays),
    }
}


export function ccBucketTransitionsPropertyToHclTerraform(struct?: CcBucket.TransitionsProperty | cdktn.IResolvable): any {
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
        transition_date: {
            value: cdktn.stringToHclTerraform(struct!.transitionDate),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        transition_in_days: {
            value: cdktn.numberToHclTerraform(struct!.transitionInDays),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccBucketRulePropertyToTerraform(struct?: CcBucket.RuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        abort_incomplete_multipart_upload: ccBucketAbortIncompleteMultipartUploadPropertyToTerraform(struct!.abortIncompleteMultipartUpload),
        expiration_date: cdktn.stringToTerraform(struct!.expirationDate),
        expiration_in_days: cdktn.numberToTerraform(struct!.expirationInDays),
        expired_object_delete_marker: cdktn.booleanToTerraform(struct!.expiredObjectDeleteMarker),
        id: cdktn.stringToTerraform(struct!.id),
        noncurrent_version_expiration: ccBucketNoncurrentVersionExpirationPropertyToTerraform(struct!.noncurrentVersionExpiration),
        noncurrent_version_expiration_in_days: cdktn.numberToTerraform(struct!.noncurrentVersionExpirationInDays),
        noncurrent_version_transition: ccBucketNoncurrentVersionTransitionPropertyToTerraform(struct!.noncurrentVersionTransition),
        noncurrent_version_transitions: cdktn.listMapper(ccBucketNoncurrentVersionTransitionsPropertyToTerraform, false)(struct!.noncurrentVersionTransitions),
        object_size_greater_than: cdktn.stringToTerraform(struct!.objectSizeGreaterThan),
        object_size_less_than: cdktn.stringToTerraform(struct!.objectSizeLessThan),
        prefix: cdktn.stringToTerraform(struct!.prefix),
        status: cdktn.stringToTerraform(struct!.status),
        tag_filters: cdktn.listMapper(ccBucketLifecycleConfigurationRulesTagFiltersPropertyToTerraform, false)(struct!.tagFilters),
        transition: ccBucketTransitionPropertyToTerraform(struct!.transition),
        transitions: cdktn.listMapper(ccBucketTransitionsPropertyToTerraform, false)(struct!.transitions),
    }
}


export function ccBucketRulePropertyToHclTerraform(struct?: CcBucket.RuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        abort_incomplete_multipart_upload: {
            value: ccBucketAbortIncompleteMultipartUploadPropertyToHclTerraform(struct!.abortIncompleteMultipartUpload),
            isBlock: true,
            type: "struct",
            storageClassType: "AbortIncompleteMultipartUploadProperty",
        },
        expiration_date: {
            value: cdktn.stringToHclTerraform(struct!.expirationDate),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        expiration_in_days: {
            value: cdktn.numberToHclTerraform(struct!.expirationInDays),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        expired_object_delete_marker: {
            value: cdktn.booleanToHclTerraform(struct!.expiredObjectDeleteMarker),
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
        noncurrent_version_expiration: {
            value: ccBucketNoncurrentVersionExpirationPropertyToHclTerraform(struct!.noncurrentVersionExpiration),
            isBlock: true,
            type: "struct",
            storageClassType: "NoncurrentVersionExpirationProperty",
        },
        noncurrent_version_expiration_in_days: {
            value: cdktn.numberToHclTerraform(struct!.noncurrentVersionExpirationInDays),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        noncurrent_version_transition: {
            value: ccBucketNoncurrentVersionTransitionPropertyToHclTerraform(struct!.noncurrentVersionTransition),
            isBlock: true,
            type: "struct",
            storageClassType: "NoncurrentVersionTransitionProperty",
        },
        noncurrent_version_transitions: {
            value: cdktn.listMapperHcl(ccBucketNoncurrentVersionTransitionsPropertyToHclTerraform, false)(struct!.noncurrentVersionTransitions),
            isBlock: true,
            type: "list",
            storageClassType: "NoncurrentVersionTransitionsPropertyList",
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
        tag_filters: {
            value: cdktn.listMapperHcl(ccBucketLifecycleConfigurationRulesTagFiltersPropertyToHclTerraform, false)(struct!.tagFilters),
            isBlock: true,
            type: "list",
            storageClassType: "LifecycleConfigurationRulesTagFiltersPropertyList",
        },
        transition: {
            value: ccBucketTransitionPropertyToHclTerraform(struct!.transition),
            isBlock: true,
            type: "struct",
            storageClassType: "TransitionProperty",
        },
        transitions: {
            value: cdktn.listMapperHcl(ccBucketTransitionsPropertyToHclTerraform, false)(struct!.transitions),
            isBlock: true,
            type: "list",
            storageClassType: "TransitionsPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccBucketLifecycleConfigurationPropertyToTerraform(struct?: CcBucket.LifecycleConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        rules: cdktn.listMapper(ccBucketRulePropertyToTerraform, false)(struct!.rules),
        transition_default_minimum_object_size: cdktn.stringToTerraform(struct!.transitionDefaultMinimumObjectSize),
    }
}


export function ccBucketLifecycleConfigurationPropertyToHclTerraform(struct?: CcBucket.LifecycleConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        rules: {
            value: cdktn.listMapperHcl(ccBucketRulePropertyToHclTerraform, false)(struct!.rules),
            isBlock: true,
            type: "list",
            storageClassType: "RulePropertyList",
        },
        transition_default_minimum_object_size: {
            value: cdktn.stringToHclTerraform(struct!.transitionDefaultMinimumObjectSize),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccBucketPartitionedPrefixPropertyToTerraform(struct?: CcBucket.PartitionedPrefixProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        partition_date_source: cdktn.stringToTerraform(struct!.partitionDateSource),
    }
}


export function ccBucketPartitionedPrefixPropertyToHclTerraform(struct?: CcBucket.PartitionedPrefixProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        partition_date_source: {
            value: cdktn.stringToHclTerraform(struct!.partitionDateSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccBucketTargetObjectKeyFormatPropertyToTerraform(struct?: CcBucket.TargetObjectKeyFormatProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        partitioned_prefix: ccBucketPartitionedPrefixPropertyToTerraform(struct!.partitionedPrefix),
        simple_prefix: cdktn.stringToTerraform(struct!.simplePrefix),
    }
}


export function ccBucketTargetObjectKeyFormatPropertyToHclTerraform(struct?: CcBucket.TargetObjectKeyFormatProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        partitioned_prefix: {
            value: ccBucketPartitionedPrefixPropertyToHclTerraform(struct!.partitionedPrefix),
            isBlock: true,
            type: "struct",
            storageClassType: "PartitionedPrefixProperty",
        },
        simple_prefix: {
            value: cdktn.stringToHclTerraform(struct!.simplePrefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccBucketLoggingConfigurationPropertyToTerraform(struct?: CcBucket.LoggingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        destination_bucket_name: cdktn.stringToTerraform(struct!.destinationBucketName),
        log_file_prefix: cdktn.stringToTerraform(struct!.logFilePrefix),
        target_object_key_format: ccBucketTargetObjectKeyFormatPropertyToTerraform(struct!.targetObjectKeyFormat),
    }
}


export function ccBucketLoggingConfigurationPropertyToHclTerraform(struct?: CcBucket.LoggingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        destination_bucket_name: {
            value: cdktn.stringToHclTerraform(struct!.destinationBucketName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        log_file_prefix: {
            value: cdktn.stringToHclTerraform(struct!.logFilePrefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        target_object_key_format: {
            value: ccBucketTargetObjectKeyFormatPropertyToHclTerraform(struct!.targetObjectKeyFormat),
            isBlock: true,
            type: "struct",
            storageClassType: "TargetObjectKeyFormatProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccBucketS3TablesDestinationPropertyToTerraform(struct?: CcBucket.S3TablesDestinationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        table_bucket_arn: cdktn.stringToTerraform(struct!.tableBucketArn),
        table_name: cdktn.stringToTerraform(struct!.tableName),
    }
}


export function ccBucketS3TablesDestinationPropertyToHclTerraform(struct?: CcBucket.S3TablesDestinationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        table_bucket_arn: {
            value: cdktn.stringToHclTerraform(struct!.tableBucketArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        table_name: {
            value: cdktn.stringToHclTerraform(struct!.tableName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccBucketMetadataTableConfigurationPropertyToTerraform(struct?: CcBucket.MetadataTableConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        s3_tables_destination: ccBucketS3TablesDestinationPropertyToTerraform(struct!.s3TablesDestination),
    }
}


export function ccBucketMetadataTableConfigurationPropertyToHclTerraform(struct?: CcBucket.MetadataTableConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        s3_tables_destination: {
            value: ccBucketS3TablesDestinationPropertyToHclTerraform(struct!.s3TablesDestination),
            isBlock: true,
            type: "struct",
            storageClassType: "S3TablesDestinationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccBucketMetricsConfigurationsTagFiltersPropertyToTerraform(struct?: CcBucket.MetricsConfigurationsTagFiltersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccBucketMetricsConfigurationsTagFiltersPropertyToHclTerraform(struct?: CcBucket.MetricsConfigurationsTagFiltersProperty | cdktn.IResolvable): any {
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


export function ccBucketMetricsConfigurationPropertyToTerraform(struct?: CcBucket.MetricsConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        access_point_arn: cdktn.stringToTerraform(struct!.accessPointArn),
        id: cdktn.stringToTerraform(struct!.id),
        prefix: cdktn.stringToTerraform(struct!.prefix),
        tag_filters: cdktn.listMapper(ccBucketMetricsConfigurationsTagFiltersPropertyToTerraform, false)(struct!.tagFilters),
    }
}


export function ccBucketMetricsConfigurationPropertyToHclTerraform(struct?: CcBucket.MetricsConfigurationProperty | cdktn.IResolvable): any {
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
        tag_filters: {
            value: cdktn.listMapperHcl(ccBucketMetricsConfigurationsTagFiltersPropertyToHclTerraform, false)(struct!.tagFilters),
            isBlock: true,
            type: "list",
            storageClassType: "MetricsConfigurationsTagFiltersPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccBucketEventBridgeConfigurationPropertyToTerraform(struct?: CcBucket.EventBridgeConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        event_bridge_enabled: cdktn.booleanToTerraform(struct!.eventBridgeEnabled),
    }
}


export function ccBucketEventBridgeConfigurationPropertyToHclTerraform(struct?: CcBucket.EventBridgeConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        event_bridge_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.eventBridgeEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccBucketFilterRulePropertyToTerraform(struct?: CcBucket.FilterRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccBucketFilterRulePropertyToHclTerraform(struct?: CcBucket.FilterRuleProperty | cdktn.IResolvable): any {
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


export function ccBucketS3KeyFilterPropertyToTerraform(struct?: CcBucket.S3KeyFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        rules: cdktn.listMapper(ccBucketFilterRulePropertyToTerraform, false)(struct!.rules),
    }
}


export function ccBucketS3KeyFilterPropertyToHclTerraform(struct?: CcBucket.S3KeyFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        rules: {
            value: cdktn.listMapperHcl(ccBucketFilterRulePropertyToHclTerraform, false)(struct!.rules),
            isBlock: true,
            type: "set",
            storageClassType: "FilterRulePropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccBucketNotificationFilterPropertyToTerraform(struct?: CcBucket.NotificationFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        s3_key: ccBucketS3KeyFilterPropertyToTerraform(struct!.s3Key),
    }
}


export function ccBucketNotificationFilterPropertyToHclTerraform(struct?: CcBucket.NotificationFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        s3_key: {
            value: ccBucketS3KeyFilterPropertyToHclTerraform(struct!.s3Key),
            isBlock: true,
            type: "struct",
            storageClassType: "S3KeyFilterProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccBucketLambdaConfigurationPropertyToTerraform(struct?: CcBucket.LambdaConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        event: cdktn.stringToTerraform(struct!.event),
        filter: ccBucketNotificationFilterPropertyToTerraform(struct!.filter),
        function: cdktn.stringToTerraform(struct!.function),
    }
}


export function ccBucketLambdaConfigurationPropertyToHclTerraform(struct?: CcBucket.LambdaConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        event: {
            value: cdktn.stringToHclTerraform(struct!.event),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        filter: {
            value: ccBucketNotificationFilterPropertyToHclTerraform(struct!.filter),
            isBlock: true,
            type: "struct",
            storageClassType: "NotificationFilterProperty",
        },
        function: {
            value: cdktn.stringToHclTerraform(struct!.function),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccBucketNotificationConfigurationQueueConfigurationsFilterS3KeyRulesPropertyToTerraform(struct?: CcBucket.NotificationConfigurationQueueConfigurationsFilterS3KeyRulesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccBucketNotificationConfigurationQueueConfigurationsFilterS3KeyRulesPropertyToHclTerraform(struct?: CcBucket.NotificationConfigurationQueueConfigurationsFilterS3KeyRulesProperty | cdktn.IResolvable): any {
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


export function ccBucketNotificationConfigurationQueueConfigurationsFilterS3KeyPropertyToTerraform(struct?: CcBucket.NotificationConfigurationQueueConfigurationsFilterS3KeyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        rules: cdktn.listMapper(ccBucketNotificationConfigurationQueueConfigurationsFilterS3KeyRulesPropertyToTerraform, false)(struct!.rules),
    }
}


export function ccBucketNotificationConfigurationQueueConfigurationsFilterS3KeyPropertyToHclTerraform(struct?: CcBucket.NotificationConfigurationQueueConfigurationsFilterS3KeyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        rules: {
            value: cdktn.listMapperHcl(ccBucketNotificationConfigurationQueueConfigurationsFilterS3KeyRulesPropertyToHclTerraform, false)(struct!.rules),
            isBlock: true,
            type: "set",
            storageClassType: "NotificationConfigurationQueueConfigurationsFilterS3KeyRulesPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccBucketNotificationConfigurationQueueConfigurationsFilterPropertyToTerraform(struct?: CcBucket.NotificationConfigurationQueueConfigurationsFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        s3_key: ccBucketNotificationConfigurationQueueConfigurationsFilterS3KeyPropertyToTerraform(struct!.s3Key),
    }
}


export function ccBucketNotificationConfigurationQueueConfigurationsFilterPropertyToHclTerraform(struct?: CcBucket.NotificationConfigurationQueueConfigurationsFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        s3_key: {
            value: ccBucketNotificationConfigurationQueueConfigurationsFilterS3KeyPropertyToHclTerraform(struct!.s3Key),
            isBlock: true,
            type: "struct",
            storageClassType: "NotificationConfigurationQueueConfigurationsFilterS3KeyProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccBucketQueueConfigurationPropertyToTerraform(struct?: CcBucket.QueueConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        event: cdktn.stringToTerraform(struct!.event),
        filter: ccBucketNotificationConfigurationQueueConfigurationsFilterPropertyToTerraform(struct!.filter),
        queue: cdktn.stringToTerraform(struct!.queue),
    }
}


export function ccBucketQueueConfigurationPropertyToHclTerraform(struct?: CcBucket.QueueConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        event: {
            value: cdktn.stringToHclTerraform(struct!.event),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        filter: {
            value: ccBucketNotificationConfigurationQueueConfigurationsFilterPropertyToHclTerraform(struct!.filter),
            isBlock: true,
            type: "struct",
            storageClassType: "NotificationConfigurationQueueConfigurationsFilterProperty",
        },
        queue: {
            value: cdktn.stringToHclTerraform(struct!.queue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccBucketNotificationConfigurationTopicConfigurationsFilterS3KeyRulesPropertyToTerraform(struct?: CcBucket.NotificationConfigurationTopicConfigurationsFilterS3KeyRulesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccBucketNotificationConfigurationTopicConfigurationsFilterS3KeyRulesPropertyToHclTerraform(struct?: CcBucket.NotificationConfigurationTopicConfigurationsFilterS3KeyRulesProperty | cdktn.IResolvable): any {
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


export function ccBucketNotificationConfigurationTopicConfigurationsFilterS3KeyPropertyToTerraform(struct?: CcBucket.NotificationConfigurationTopicConfigurationsFilterS3KeyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        rules: cdktn.listMapper(ccBucketNotificationConfigurationTopicConfigurationsFilterS3KeyRulesPropertyToTerraform, false)(struct!.rules),
    }
}


export function ccBucketNotificationConfigurationTopicConfigurationsFilterS3KeyPropertyToHclTerraform(struct?: CcBucket.NotificationConfigurationTopicConfigurationsFilterS3KeyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        rules: {
            value: cdktn.listMapperHcl(ccBucketNotificationConfigurationTopicConfigurationsFilterS3KeyRulesPropertyToHclTerraform, false)(struct!.rules),
            isBlock: true,
            type: "set",
            storageClassType: "NotificationConfigurationTopicConfigurationsFilterS3KeyRulesPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccBucketNotificationConfigurationTopicConfigurationsFilterPropertyToTerraform(struct?: CcBucket.NotificationConfigurationTopicConfigurationsFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        s3_key: ccBucketNotificationConfigurationTopicConfigurationsFilterS3KeyPropertyToTerraform(struct!.s3Key),
    }
}


export function ccBucketNotificationConfigurationTopicConfigurationsFilterPropertyToHclTerraform(struct?: CcBucket.NotificationConfigurationTopicConfigurationsFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        s3_key: {
            value: ccBucketNotificationConfigurationTopicConfigurationsFilterS3KeyPropertyToHclTerraform(struct!.s3Key),
            isBlock: true,
            type: "struct",
            storageClassType: "NotificationConfigurationTopicConfigurationsFilterS3KeyProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccBucketTopicConfigurationPropertyToTerraform(struct?: CcBucket.TopicConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        event: cdktn.stringToTerraform(struct!.event),
        filter: ccBucketNotificationConfigurationTopicConfigurationsFilterPropertyToTerraform(struct!.filter),
        topic: cdktn.stringToTerraform(struct!.topic),
    }
}


export function ccBucketTopicConfigurationPropertyToHclTerraform(struct?: CcBucket.TopicConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        event: {
            value: cdktn.stringToHclTerraform(struct!.event),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        filter: {
            value: ccBucketNotificationConfigurationTopicConfigurationsFilterPropertyToHclTerraform(struct!.filter),
            isBlock: true,
            type: "struct",
            storageClassType: "NotificationConfigurationTopicConfigurationsFilterProperty",
        },
        topic: {
            value: cdktn.stringToHclTerraform(struct!.topic),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccBucketNotificationConfigurationPropertyToTerraform(struct?: CcBucket.NotificationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        event_bridge_configuration: ccBucketEventBridgeConfigurationPropertyToTerraform(struct!.eventBridgeConfiguration),
        lambda_configurations: cdktn.listMapper(ccBucketLambdaConfigurationPropertyToTerraform, false)(struct!.lambdaConfigurations),
        queue_configurations: cdktn.listMapper(ccBucketQueueConfigurationPropertyToTerraform, false)(struct!.queueConfigurations),
        topic_configurations: cdktn.listMapper(ccBucketTopicConfigurationPropertyToTerraform, false)(struct!.topicConfigurations),
    }
}


export function ccBucketNotificationConfigurationPropertyToHclTerraform(struct?: CcBucket.NotificationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        event_bridge_configuration: {
            value: ccBucketEventBridgeConfigurationPropertyToHclTerraform(struct!.eventBridgeConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "EventBridgeConfigurationProperty",
        },
        lambda_configurations: {
            value: cdktn.listMapperHcl(ccBucketLambdaConfigurationPropertyToHclTerraform, false)(struct!.lambdaConfigurations),
            isBlock: true,
            type: "list",
            storageClassType: "LambdaConfigurationPropertyList",
        },
        queue_configurations: {
            value: cdktn.listMapperHcl(ccBucketQueueConfigurationPropertyToHclTerraform, false)(struct!.queueConfigurations),
            isBlock: true,
            type: "list",
            storageClassType: "QueueConfigurationPropertyList",
        },
        topic_configurations: {
            value: cdktn.listMapperHcl(ccBucketTopicConfigurationPropertyToHclTerraform, false)(struct!.topicConfigurations),
            isBlock: true,
            type: "list",
            storageClassType: "TopicConfigurationPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccBucketDefaultRetentionPropertyToTerraform(struct?: CcBucket.DefaultRetentionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        days: cdktn.numberToTerraform(struct!.days),
        mode: cdktn.stringToTerraform(struct!.mode),
        years: cdktn.numberToTerraform(struct!.years),
    }
}


export function ccBucketDefaultRetentionPropertyToHclTerraform(struct?: CcBucket.DefaultRetentionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        days: {
            value: cdktn.numberToHclTerraform(struct!.days),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        mode: {
            value: cdktn.stringToHclTerraform(struct!.mode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        years: {
            value: cdktn.numberToHclTerraform(struct!.years),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccBucketObjectLockRulePropertyToTerraform(struct?: CcBucket.ObjectLockRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        default_retention: ccBucketDefaultRetentionPropertyToTerraform(struct!.defaultRetention),
    }
}


export function ccBucketObjectLockRulePropertyToHclTerraform(struct?: CcBucket.ObjectLockRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        default_retention: {
            value: ccBucketDefaultRetentionPropertyToHclTerraform(struct!.defaultRetention),
            isBlock: true,
            type: "struct",
            storageClassType: "DefaultRetentionProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccBucketObjectLockConfigurationPropertyToTerraform(struct?: CcBucket.ObjectLockConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        object_lock_enabled: cdktn.stringToTerraform(struct!.objectLockEnabled),
        rule: ccBucketObjectLockRulePropertyToTerraform(struct!.rule),
    }
}


export function ccBucketObjectLockConfigurationPropertyToHclTerraform(struct?: CcBucket.ObjectLockConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        object_lock_enabled: {
            value: cdktn.stringToHclTerraform(struct!.objectLockEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        rule: {
            value: ccBucketObjectLockRulePropertyToHclTerraform(struct!.rule),
            isBlock: true,
            type: "struct",
            storageClassType: "ObjectLockRuleProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccBucketOwnershipControlsRulePropertyToTerraform(struct?: CcBucket.OwnershipControlsRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        object_ownership: cdktn.stringToTerraform(struct!.objectOwnership),
    }
}


export function ccBucketOwnershipControlsRulePropertyToHclTerraform(struct?: CcBucket.OwnershipControlsRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        object_ownership: {
            value: cdktn.stringToHclTerraform(struct!.objectOwnership),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccBucketOwnershipControlsPropertyToTerraform(struct?: CcBucket.OwnershipControlsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        rules: cdktn.listMapper(ccBucketOwnershipControlsRulePropertyToTerraform, false)(struct!.rules),
    }
}


export function ccBucketOwnershipControlsPropertyToHclTerraform(struct?: CcBucket.OwnershipControlsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        rules: {
            value: cdktn.listMapperHcl(ccBucketOwnershipControlsRulePropertyToHclTerraform, false)(struct!.rules),
            isBlock: true,
            type: "list",
            storageClassType: "OwnershipControlsRulePropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccBucketPublicAccessBlockConfigurationPropertyToTerraform(struct?: CcBucket.PublicAccessBlockConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        block_public_acls: cdktn.booleanToTerraform(struct!.blockPublicAcls),
        block_public_policy: cdktn.booleanToTerraform(struct!.blockPublicPolicy),
        ignore_public_acls: cdktn.booleanToTerraform(struct!.ignorePublicAcls),
        restrict_public_buckets: cdktn.booleanToTerraform(struct!.restrictPublicBuckets),
    }
}


export function ccBucketPublicAccessBlockConfigurationPropertyToHclTerraform(struct?: CcBucket.PublicAccessBlockConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        block_public_acls: {
            value: cdktn.booleanToHclTerraform(struct!.blockPublicAcls),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        block_public_policy: {
            value: cdktn.booleanToHclTerraform(struct!.blockPublicPolicy),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        ignore_public_acls: {
            value: cdktn.booleanToHclTerraform(struct!.ignorePublicAcls),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        restrict_public_buckets: {
            value: cdktn.booleanToHclTerraform(struct!.restrictPublicBuckets),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccBucketDeleteMarkerReplicationPropertyToTerraform(struct?: CcBucket.DeleteMarkerReplicationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        status: cdktn.stringToTerraform(struct!.status),
    }
}


export function ccBucketDeleteMarkerReplicationPropertyToHclTerraform(struct?: CcBucket.DeleteMarkerReplicationProperty | cdktn.IResolvable): any {
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


export function ccBucketAccessControlTranslationPropertyToTerraform(struct?: CcBucket.AccessControlTranslationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        owner: cdktn.stringToTerraform(struct!.owner),
    }
}


export function ccBucketAccessControlTranslationPropertyToHclTerraform(struct?: CcBucket.AccessControlTranslationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        owner: {
            value: cdktn.stringToHclTerraform(struct!.owner),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccBucketEncryptionConfigurationPropertyToTerraform(struct?: CcBucket.EncryptionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        replica_kms_key_id: cdktn.stringToTerraform(struct!.replicaKmsKeyId),
    }
}


export function ccBucketEncryptionConfigurationPropertyToHclTerraform(struct?: CcBucket.EncryptionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        replica_kms_key_id: {
            value: cdktn.stringToHclTerraform(struct!.replicaKmsKeyId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccBucketReplicationTimeValuePropertyToTerraform(struct?: CcBucket.ReplicationTimeValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        minutes: cdktn.numberToTerraform(struct!.minutes),
    }
}


export function ccBucketReplicationTimeValuePropertyToHclTerraform(struct?: CcBucket.ReplicationTimeValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        minutes: {
            value: cdktn.numberToHclTerraform(struct!.minutes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccBucketMetricsPropertyToTerraform(struct?: CcBucket.MetricsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        event_threshold: ccBucketReplicationTimeValuePropertyToTerraform(struct!.eventThreshold),
        status: cdktn.stringToTerraform(struct!.status),
    }
}


export function ccBucketMetricsPropertyToHclTerraform(struct?: CcBucket.MetricsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        event_threshold: {
            value: ccBucketReplicationTimeValuePropertyToHclTerraform(struct!.eventThreshold),
            isBlock: true,
            type: "struct",
            storageClassType: "ReplicationTimeValueProperty",
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


export function ccBucketTimePropertyToTerraform(struct?: CcBucket.TimeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        minutes: cdktn.numberToTerraform(struct!.minutes),
    }
}


export function ccBucketTimePropertyToHclTerraform(struct?: CcBucket.TimeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        minutes: {
            value: cdktn.numberToHclTerraform(struct!.minutes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccBucketReplicationTimePropertyToTerraform(struct?: CcBucket.ReplicationTimeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        status: cdktn.stringToTerraform(struct!.status),
        time: ccBucketTimePropertyToTerraform(struct!.time),
    }
}


export function ccBucketReplicationTimePropertyToHclTerraform(struct?: CcBucket.ReplicationTimeProperty | cdktn.IResolvable): any {
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
        time: {
            value: ccBucketTimePropertyToHclTerraform(struct!.time),
            isBlock: true,
            type: "struct",
            storageClassType: "TimeProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccBucketReplicationDestinationPropertyToTerraform(struct?: CcBucket.ReplicationDestinationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        access_control_translation: ccBucketAccessControlTranslationPropertyToTerraform(struct!.accessControlTranslation),
        account: cdktn.stringToTerraform(struct!.account),
        bucket: cdktn.stringToTerraform(struct!.bucket),
        encryption_configuration: ccBucketEncryptionConfigurationPropertyToTerraform(struct!.encryptionConfiguration),
        metrics: ccBucketMetricsPropertyToTerraform(struct!.metrics),
        replication_time: ccBucketReplicationTimePropertyToTerraform(struct!.replicationTime),
        storage_class: cdktn.stringToTerraform(struct!.storageClass),
    }
}


export function ccBucketReplicationDestinationPropertyToHclTerraform(struct?: CcBucket.ReplicationDestinationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        access_control_translation: {
            value: ccBucketAccessControlTranslationPropertyToHclTerraform(struct!.accessControlTranslation),
            isBlock: true,
            type: "struct",
            storageClassType: "AccessControlTranslationProperty",
        },
        account: {
            value: cdktn.stringToHclTerraform(struct!.account),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        bucket: {
            value: cdktn.stringToHclTerraform(struct!.bucket),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        encryption_configuration: {
            value: ccBucketEncryptionConfigurationPropertyToHclTerraform(struct!.encryptionConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "EncryptionConfigurationProperty",
        },
        metrics: {
            value: ccBucketMetricsPropertyToHclTerraform(struct!.metrics),
            isBlock: true,
            type: "struct",
            storageClassType: "MetricsProperty",
        },
        replication_time: {
            value: ccBucketReplicationTimePropertyToHclTerraform(struct!.replicationTime),
            isBlock: true,
            type: "struct",
            storageClassType: "ReplicationTimeProperty",
        },
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


export function ccBucketReplicationConfigurationRulesFilterAndTagFiltersPropertyToTerraform(struct?: CcBucket.ReplicationConfigurationRulesFilterAndTagFiltersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccBucketReplicationConfigurationRulesFilterAndTagFiltersPropertyToHclTerraform(struct?: CcBucket.ReplicationConfigurationRulesFilterAndTagFiltersProperty | cdktn.IResolvable): any {
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


export function ccBucketReplicationRuleAndOperatorPropertyToTerraform(struct?: CcBucket.ReplicationRuleAndOperatorProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        prefix: cdktn.stringToTerraform(struct!.prefix),
        tag_filters: cdktn.listMapper(ccBucketReplicationConfigurationRulesFilterAndTagFiltersPropertyToTerraform, false)(struct!.tagFilters),
    }
}


export function ccBucketReplicationRuleAndOperatorPropertyToHclTerraform(struct?: CcBucket.ReplicationRuleAndOperatorProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        prefix: {
            value: cdktn.stringToHclTerraform(struct!.prefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        tag_filters: {
            value: cdktn.listMapperHcl(ccBucketReplicationConfigurationRulesFilterAndTagFiltersPropertyToHclTerraform, false)(struct!.tagFilters),
            isBlock: true,
            type: "list",
            storageClassType: "ReplicationConfigurationRulesFilterAndTagFiltersPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccBucketReplicationConfigurationRulesFilterTagFilterPropertyToTerraform(struct?: CcBucket.ReplicationConfigurationRulesFilterTagFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccBucketReplicationConfigurationRulesFilterTagFilterPropertyToHclTerraform(struct?: CcBucket.ReplicationConfigurationRulesFilterTagFilterProperty | cdktn.IResolvable): any {
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


export function ccBucketReplicationRuleFilterPropertyToTerraform(struct?: CcBucket.ReplicationRuleFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        and: ccBucketReplicationRuleAndOperatorPropertyToTerraform(struct!.and),
        prefix: cdktn.stringToTerraform(struct!.prefix),
        tag_filter: ccBucketReplicationConfigurationRulesFilterTagFilterPropertyToTerraform(struct!.tagFilter),
    }
}


export function ccBucketReplicationRuleFilterPropertyToHclTerraform(struct?: CcBucket.ReplicationRuleFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        and: {
            value: ccBucketReplicationRuleAndOperatorPropertyToHclTerraform(struct!.and),
            isBlock: true,
            type: "struct",
            storageClassType: "ReplicationRuleAndOperatorProperty",
        },
        prefix: {
            value: cdktn.stringToHclTerraform(struct!.prefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        tag_filter: {
            value: ccBucketReplicationConfigurationRulesFilterTagFilterPropertyToHclTerraform(struct!.tagFilter),
            isBlock: true,
            type: "struct",
            storageClassType: "ReplicationConfigurationRulesFilterTagFilterProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccBucketReplicaModificationsPropertyToTerraform(struct?: CcBucket.ReplicaModificationsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        status: cdktn.stringToTerraform(struct!.status),
    }
}


export function ccBucketReplicaModificationsPropertyToHclTerraform(struct?: CcBucket.ReplicaModificationsProperty | cdktn.IResolvable): any {
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


export function ccBucketSseKmsEncryptedObjectsPropertyToTerraform(struct?: CcBucket.SseKmsEncryptedObjectsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        status: cdktn.stringToTerraform(struct!.status),
    }
}


export function ccBucketSseKmsEncryptedObjectsPropertyToHclTerraform(struct?: CcBucket.SseKmsEncryptedObjectsProperty | cdktn.IResolvable): any {
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


export function ccBucketSourceSelectionCriteriaPropertyToTerraform(struct?: CcBucket.SourceSelectionCriteriaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        replica_modifications: ccBucketReplicaModificationsPropertyToTerraform(struct!.replicaModifications),
        sse_kms_encrypted_objects: ccBucketSseKmsEncryptedObjectsPropertyToTerraform(struct!.sseKmsEncryptedObjects),
    }
}


export function ccBucketSourceSelectionCriteriaPropertyToHclTerraform(struct?: CcBucket.SourceSelectionCriteriaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        replica_modifications: {
            value: ccBucketReplicaModificationsPropertyToHclTerraform(struct!.replicaModifications),
            isBlock: true,
            type: "struct",
            storageClassType: "ReplicaModificationsProperty",
        },
        sse_kms_encrypted_objects: {
            value: ccBucketSseKmsEncryptedObjectsPropertyToHclTerraform(struct!.sseKmsEncryptedObjects),
            isBlock: true,
            type: "struct",
            storageClassType: "SseKmsEncryptedObjectsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccBucketReplicationRulePropertyToTerraform(struct?: CcBucket.ReplicationRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        delete_marker_replication: ccBucketDeleteMarkerReplicationPropertyToTerraform(struct!.deleteMarkerReplication),
        destination: ccBucketReplicationDestinationPropertyToTerraform(struct!.destination),
        filter: ccBucketReplicationRuleFilterPropertyToTerraform(struct!.filter),
        id: cdktn.stringToTerraform(struct!.id),
        prefix: cdktn.stringToTerraform(struct!.prefix),
        priority: cdktn.numberToTerraform(struct!.priority),
        source_selection_criteria: ccBucketSourceSelectionCriteriaPropertyToTerraform(struct!.sourceSelectionCriteria),
        status: cdktn.stringToTerraform(struct!.status),
    }
}


export function ccBucketReplicationRulePropertyToHclTerraform(struct?: CcBucket.ReplicationRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        delete_marker_replication: {
            value: ccBucketDeleteMarkerReplicationPropertyToHclTerraform(struct!.deleteMarkerReplication),
            isBlock: true,
            type: "struct",
            storageClassType: "DeleteMarkerReplicationProperty",
        },
        destination: {
            value: ccBucketReplicationDestinationPropertyToHclTerraform(struct!.destination),
            isBlock: true,
            type: "struct",
            storageClassType: "ReplicationDestinationProperty",
        },
        filter: {
            value: ccBucketReplicationRuleFilterPropertyToHclTerraform(struct!.filter),
            isBlock: true,
            type: "struct",
            storageClassType: "ReplicationRuleFilterProperty",
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
        priority: {
            value: cdktn.numberToHclTerraform(struct!.priority),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        source_selection_criteria: {
            value: ccBucketSourceSelectionCriteriaPropertyToHclTerraform(struct!.sourceSelectionCriteria),
            isBlock: true,
            type: "struct",
            storageClassType: "SourceSelectionCriteriaProperty",
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


export function ccBucketReplicationConfigurationPropertyToTerraform(struct?: CcBucket.ReplicationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        role: cdktn.stringToTerraform(struct!.role),
        rules: cdktn.listMapper(ccBucketReplicationRulePropertyToTerraform, false)(struct!.rules),
    }
}


export function ccBucketReplicationConfigurationPropertyToHclTerraform(struct?: CcBucket.ReplicationConfigurationProperty | cdktn.IResolvable): any {
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
            value: cdktn.listMapperHcl(ccBucketReplicationRulePropertyToHclTerraform, false)(struct!.rules),
            isBlock: true,
            type: "list",
            storageClassType: "ReplicationRulePropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccBucketTagPropertyToTerraform(struct?: CcBucket.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccBucketTagPropertyToHclTerraform(struct?: CcBucket.TagProperty | cdktn.IResolvable): any {
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


export function ccBucketVersioningConfigurationPropertyToTerraform(struct?: CcBucket.VersioningConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        status: cdktn.stringToTerraform(struct!.status),
    }
}


export function ccBucketVersioningConfigurationPropertyToHclTerraform(struct?: CcBucket.VersioningConfigurationProperty | cdktn.IResolvable): any {
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


export function ccBucketRedirectAllRequestsToPropertyToTerraform(struct?: CcBucket.RedirectAllRequestsToProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        host_name: cdktn.stringToTerraform(struct!.hostName),
        protocol: cdktn.stringToTerraform(struct!.protocol),
    }
}


export function ccBucketRedirectAllRequestsToPropertyToHclTerraform(struct?: CcBucket.RedirectAllRequestsToProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        host_name: {
            value: cdktn.stringToHclTerraform(struct!.hostName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        protocol: {
            value: cdktn.stringToHclTerraform(struct!.protocol),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccBucketRedirectRulePropertyToTerraform(struct?: CcBucket.RedirectRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        host_name: cdktn.stringToTerraform(struct!.hostName),
        http_redirect_code: cdktn.stringToTerraform(struct!.httpRedirectCode),
        protocol: cdktn.stringToTerraform(struct!.protocol),
        replace_key_prefix_with: cdktn.stringToTerraform(struct!.replaceKeyPrefixWith),
        replace_key_with: cdktn.stringToTerraform(struct!.replaceKeyWith),
    }
}


export function ccBucketRedirectRulePropertyToHclTerraform(struct?: CcBucket.RedirectRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        host_name: {
            value: cdktn.stringToHclTerraform(struct!.hostName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        http_redirect_code: {
            value: cdktn.stringToHclTerraform(struct!.httpRedirectCode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        protocol: {
            value: cdktn.stringToHclTerraform(struct!.protocol),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        replace_key_prefix_with: {
            value: cdktn.stringToHclTerraform(struct!.replaceKeyPrefixWith),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        replace_key_with: {
            value: cdktn.stringToHclTerraform(struct!.replaceKeyWith),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccBucketRoutingRuleConditionPropertyToTerraform(struct?: CcBucket.RoutingRuleConditionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        http_error_code_returned_equals: cdktn.stringToTerraform(struct!.httpErrorCodeReturnedEquals),
        key_prefix_equals: cdktn.stringToTerraform(struct!.keyPrefixEquals),
    }
}


export function ccBucketRoutingRuleConditionPropertyToHclTerraform(struct?: CcBucket.RoutingRuleConditionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        http_error_code_returned_equals: {
            value: cdktn.stringToHclTerraform(struct!.httpErrorCodeReturnedEquals),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key_prefix_equals: {
            value: cdktn.stringToHclTerraform(struct!.keyPrefixEquals),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccBucketRoutingRulePropertyToTerraform(struct?: CcBucket.RoutingRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        redirect_rule: ccBucketRedirectRulePropertyToTerraform(struct!.redirectRule),
        routing_rule_condition: ccBucketRoutingRuleConditionPropertyToTerraform(struct!.routingRuleCondition),
    }
}


export function ccBucketRoutingRulePropertyToHclTerraform(struct?: CcBucket.RoutingRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        redirect_rule: {
            value: ccBucketRedirectRulePropertyToHclTerraform(struct!.redirectRule),
            isBlock: true,
            type: "struct",
            storageClassType: "RedirectRuleProperty",
        },
        routing_rule_condition: {
            value: ccBucketRoutingRuleConditionPropertyToHclTerraform(struct!.routingRuleCondition),
            isBlock: true,
            type: "struct",
            storageClassType: "RoutingRuleConditionProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccBucketWebsiteConfigurationPropertyToTerraform(struct?: CcBucket.WebsiteConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        error_document: cdktn.stringToTerraform(struct!.errorDocument),
        index_document: cdktn.stringToTerraform(struct!.indexDocument),
        redirect_all_requests_to: ccBucketRedirectAllRequestsToPropertyToTerraform(struct!.redirectAllRequestsTo),
        routing_rules: cdktn.listMapper(ccBucketRoutingRulePropertyToTerraform, false)(struct!.routingRules),
    }
}


export function ccBucketWebsiteConfigurationPropertyToHclTerraform(struct?: CcBucket.WebsiteConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        error_document: {
            value: cdktn.stringToHclTerraform(struct!.errorDocument),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        index_document: {
            value: cdktn.stringToHclTerraform(struct!.indexDocument),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        redirect_all_requests_to: {
            value: ccBucketRedirectAllRequestsToPropertyToHclTerraform(struct!.redirectAllRequestsTo),
            isBlock: true,
            type: "struct",
            storageClassType: "RedirectAllRequestsToProperty",
        },
        routing_rules: {
            value: cdktn.listMapperHcl(ccBucketRoutingRulePropertyToHclTerraform, false)(struct!.routingRules),
            isBlock: true,
            type: "list",
            storageClassType: "RoutingRulePropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcBucket {
export interface AccelerateConfigurationProperty {
    /**
    * Specifies the transfer acceleration status of the bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#acceleration_status CcBucket#acceleration_status}
    */
    readonly accelerationStatus?: string;
}
export class AccelerateConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AccelerateConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._accelerationStatus !== undefined) {
            hasAnyValues = true;
            internalValueResult.accelerationStatus = this._accelerationStatus;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AccelerateConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accelerationStatus = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accelerationStatus = value.accelerationStatus;
        }
    }

    // acceleration_status - computed: true, optional: true, required: false
    private _accelerationStatus?: string; 
    public get accelerationStatus() {
        return this.getStringAttribute('acceleration_status');
    }
    public set accelerationStatus(value: string) {
        this._accelerationStatus = value;
    }
    public resetAccelerationStatus() {
        this._accelerationStatus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accelerationStatusInput() {
        return this._accelerationStatus;
    }
}
export interface DestinationProperty {
    /**
    * The account ID that owns the destination S3 bucket. If no account ID is provided, the owner is not validated before exporting data.
    *    Although this value is optional, we strongly recommend that you set it to help prevent problems if the destination bucket ownership changes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#bucket_account_id CcBucket#bucket_account_id}
    */
    readonly bucketAccountId?: string;
    /**
    * The Amazon Resource Name (ARN) of the bucket to which data is exported.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#bucket_arn CcBucket#bucket_arn}
    */
    readonly bucketArn?: string;
    /**
    * Specifies the file format used when exporting data to Amazon S3.
    *   *Allowed values*: ``CSV`` | ``ORC`` | ``Parquet``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#format CcBucket#format}
    */
    readonly format?: string;
    /**
    * The prefix to use when exporting data. The prefix is prepended to all results.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#prefix CcBucket#prefix}
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
export interface DataExportProperty {
    /**
    * The place to store the data for an analysis.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#destination CcBucket#destination}
    */
    readonly destination?: DestinationProperty;
    /**
    * The version of the output schema to use when exporting data. Must be ``V_1``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#output_schema_version CcBucket#output_schema_version}
    */
    readonly outputSchemaVersion?: string;
}
export class DataExportPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DataExportProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._destination?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.destination = this._destination?.internalValue;
        }
        if (this._outputSchemaVersion !== undefined) {
            hasAnyValues = true;
            internalValueResult.outputSchemaVersion = this._outputSchemaVersion;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DataExportProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._destination.internalValue = undefined;
            this._outputSchemaVersion = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._destination.internalValue = value.destination;
            this._outputSchemaVersion = value.outputSchemaVersion;
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

    // output_schema_version - computed: true, optional: true, required: false
    private _outputSchemaVersion?: string; 
    public get outputSchemaVersion() {
        return this.getStringAttribute('output_schema_version');
    }
    public set outputSchemaVersion(value: string) {
        this._outputSchemaVersion = value;
    }
    public resetOutputSchemaVersion() {
        this._outputSchemaVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outputSchemaVersionInput() {
        return this._outputSchemaVersion;
    }
}
export interface StorageClassAnalysisProperty {
    /**
    * Specifies how data related to the storage class analysis for an Amazon S3 bucket should be exported.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#data_export CcBucket#data_export}
    */
    readonly dataExport?: DataExportProperty;
}
export class StorageClassAnalysisPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StorageClassAnalysisProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dataExport?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataExport = this._dataExport?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StorageClassAnalysisProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dataExport.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dataExport.internalValue = value.dataExport;
        }
    }

    // data_export - computed: true, optional: true, required: false
    private _dataExport = new DataExportPropertyOutputReference(this, "data_export");
    public get dataExport() {
        return this._dataExport;
    }
    public putDataExport(value: DataExportProperty) {
        this._dataExport.internalValue = value;
    }
    public resetDataExport() {
        this._dataExport.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataExportInput() {
        return this._dataExport.internalValue;
    }
}
export interface TagFilterProperty {
    /**
    * The tag key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#key CcBucket#key}
    */
    readonly key?: string;
    /**
    * The tag value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#value CcBucket#value}
    */
    readonly value?: string;
}
export class TagFilterPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TagFilterProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: TagFilterProperty | cdktn.IResolvable | undefined) {
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

export class TagFilterPropertyList extends cdktn.ComplexList {
    public internalValue? : TagFilterProperty[] | cdktn.IResolvable

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
    public get(index: number): TagFilterPropertyOutputReference {
        return new TagFilterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface AnalyticsConfigurationProperty {
    /**
    * The ID that identifies the analytics configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#id CcBucket#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * The prefix that an object must have to be included in the analytics results.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#prefix CcBucket#prefix}
    */
    readonly prefix?: string;
    /**
    * Contains data related to access patterns to be collected and made available to analyze the tradeoffs between different storage classes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#storage_class_analysis CcBucket#storage_class_analysis}
    */
    readonly storageClassAnalysis?: StorageClassAnalysisProperty;
    /**
    * The tags to use when evaluating an analytics filter.
    *  The analytics only includes objects that meet the filter's criteria. If no filter is specified, all of the contents of the bucket are included in the analysis.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#tag_filters CcBucket#tag_filters}
    */
    readonly tagFilters?: TagFilterProperty[] | cdktn.IResolvable;
}
export class AnalyticsConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AnalyticsConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        if (this._prefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.prefix = this._prefix;
        }
        if (this._storageClassAnalysis?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.storageClassAnalysis = this._storageClassAnalysis?.internalValue;
        }
        if (this._tagFilters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tagFilters = this._tagFilters?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AnalyticsConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._id = undefined;
            this._prefix = undefined;
            this._storageClassAnalysis.internalValue = undefined;
            this._tagFilters.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._id = value.id;
            this._prefix = value.prefix;
            this._storageClassAnalysis.internalValue = value.storageClassAnalysis;
            this._tagFilters.internalValue = value.tagFilters;
        }
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

    // storage_class_analysis - computed: true, optional: true, required: false
    private _storageClassAnalysis = new StorageClassAnalysisPropertyOutputReference(this, "storage_class_analysis");
    public get storageClassAnalysis() {
        return this._storageClassAnalysis;
    }
    public putStorageClassAnalysis(value: StorageClassAnalysisProperty) {
        this._storageClassAnalysis.internalValue = value;
    }
    public resetStorageClassAnalysis() {
        this._storageClassAnalysis.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get storageClassAnalysisInput() {
        return this._storageClassAnalysis.internalValue;
    }

    // tag_filters - computed: true, optional: true, required: false
    private _tagFilters = new TagFilterPropertyList(this, "tag_filters", false);
    public get tagFilters() {
        return this._tagFilters;
    }
    public putTagFilters(value: TagFilterProperty[] | cdktn.IResolvable) {
        this._tagFilters.internalValue = value;
    }
    public resetTagFilters() {
        this._tagFilters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagFiltersInput() {
        return this._tagFilters.internalValue;
    }
}

export class AnalyticsConfigurationPropertyList extends cdktn.ComplexList {
    public internalValue? : AnalyticsConfigurationProperty[] | cdktn.IResolvable

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
    public get(index: number): AnalyticsConfigurationPropertyOutputReference {
        return new AnalyticsConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ServerSideEncryptionByDefaultProperty {
    /**
    * AWS Key Management Service (KMS) customer managed key ID to use for the default encryption. 
    *    +   *General purpose buckets* - This parameter is allowed if and only if ``SSEAlgorithm`` is set to ``aws:kms`` or ``aws:kms:dsse``.
    *   +   *Directory buckets* - This parameter is allowed if and only if ``SSEAlgorithm`` is set to ``aws:kms``.
    *   
    *   You can specify the key ID, key alias, or the Amazon Resource Name (ARN) of the KMS key.
    *   +  Key ID: ``1234abcd-12ab-34cd-56ef-1234567890ab`` 
    *   +  Key ARN: ``arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab`` 
    *   +  Key Alias: ``alias/alias-name`` 
    *   
    *  If you are using encryption with cross-account or AWS service operations, you must use a fully qualified KMS key ARN. For more information, see [Using encryption for cross-account operations](https://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-encryption.html#bucket-encryption-update-bucket-policy).
    *    +   *General purpose buckets* - If you're specifying a customer managed KMS key, we recommend using a fully qualified KMS key ARN. If you use a KMS key alias instead, then KMS resolves the key within the requester?s account. This behavior can result in data that's encrypted with a KMS key that belongs to the requester, and not the bucket owner. Also, if you use a key ID, you can run into a LogDestination undeliverable error when creating a VPC flow log. 
    *   +   *Directory buckets* - When you specify an [customer managed key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#customer-cmk) for encryption in your directory bucket, only use the key ID or key ARN. The key alias format of the KMS key isn't supported.
    *   
    *    Amazon S3 only supports symmetric encryption KMS keys. For more information, see [Asymmetric keys in KMS](https://docs.aws.amazon.com//kms/latest/developerguide/symmetric-asymmetric.html) in the *Key Management Service Developer Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#kms_master_key_id CcBucket#kms_master_key_id}
    */
    readonly kmsMasterKeyId?: string;
    /**
    * Server-side encryption algorithm to use for the default encryption.
    *   For directory buckets, there are only two supported values for server-side encryption: ``AES256`` and ``aws:kms``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#sse_algorithm CcBucket#sse_algorithm}
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
    * Specifies whether Amazon S3 should use an S3 Bucket Key with server-side encryption using KMS (SSE-KMS) for new objects in the bucket. Existing objects are not affected. Setting the ``BucketKeyEnabled`` element to ``true`` causes Amazon S3 to use an S3 Bucket Key. By default, S3 Bucket Key is not enabled.
    *  For more information, see [Amazon S3 Bucket Keys](https://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-key.html) in the *Amazon S3 User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#bucket_key_enabled CcBucket#bucket_key_enabled}
    */
    readonly bucketKeyEnabled?: boolean | cdktn.IResolvable;
    /**
    * Specifies the default server-side encryption to apply to new objects in the bucket. If a PUT Object request doesn't specify any server-side encryption, this default encryption will be applied.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#server_side_encryption_by_default CcBucket#server_side_encryption_by_default}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#server_side_encryption_configuration CcBucket#server_side_encryption_configuration}
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
export interface CorsRuleProperty {
    /**
    * Headers that are specified in the ``Access-Control-Request-Headers`` header. These headers are allowed in a preflight OPTIONS request. In response to any preflight OPTIONS request, Amazon S3 returns any requested headers that are allowed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#allowed_headers CcBucket#allowed_headers}
    */
    readonly allowedHeaders?: string[];
    /**
    * An HTTP method that you allow the origin to run.
    *   *Allowed values*: ``GET`` | ``PUT`` | ``HEAD`` | ``POST`` | ``DELETE``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#allowed_methods CcBucket#allowed_methods}
    */
    readonly allowedMethods?: string[];
    /**
    * One or more origins you want customers to be able to access the bucket from.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#allowed_origins CcBucket#allowed_origins}
    */
    readonly allowedOrigins?: string[];
    /**
    * One or more headers in the response that you want customers to be able to access from their applications (for example, from a JavaScript ``XMLHttpRequest`` object).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#exposed_headers CcBucket#exposed_headers}
    */
    readonly exposedHeaders?: string[];
    /**
    * A unique identifier for this rule. The value must be no more than 255 characters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#id CcBucket#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * The time in seconds that your browser is to cache the preflight response for the specified resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#max_age CcBucket#max_age}
    */
    readonly maxAge?: number;
}
export class CorsRulePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): CorsRuleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._allowedHeaders !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedHeaders = this._allowedHeaders;
        }
        if (this._allowedMethods !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedMethods = this._allowedMethods;
        }
        if (this._allowedOrigins !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedOrigins = this._allowedOrigins;
        }
        if (this._exposedHeaders !== undefined) {
            hasAnyValues = true;
            internalValueResult.exposedHeaders = this._exposedHeaders;
        }
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        if (this._maxAge !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxAge = this._maxAge;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CorsRuleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allowedHeaders = undefined;
            this._allowedMethods = undefined;
            this._allowedOrigins = undefined;
            this._exposedHeaders = undefined;
            this._id = undefined;
            this._maxAge = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allowedHeaders = value.allowedHeaders;
            this._allowedMethods = value.allowedMethods;
            this._allowedOrigins = value.allowedOrigins;
            this._exposedHeaders = value.exposedHeaders;
            this._id = value.id;
            this._maxAge = value.maxAge;
        }
    }

    // allowed_headers - computed: true, optional: true, required: false
    private _allowedHeaders?: string[]; 
    public get allowedHeaders() {
        return this.getListAttribute('allowed_headers');
    }
    public set allowedHeaders(value: string[]) {
        this._allowedHeaders = value;
    }
    public resetAllowedHeaders() {
        this._allowedHeaders = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedHeadersInput() {
        return this._allowedHeaders;
    }

    // allowed_methods - computed: true, optional: true, required: false
    private _allowedMethods?: string[]; 
    public get allowedMethods() {
        return this.getListAttribute('allowed_methods');
    }
    public set allowedMethods(value: string[]) {
        this._allowedMethods = value;
    }
    public resetAllowedMethods() {
        this._allowedMethods = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedMethodsInput() {
        return this._allowedMethods;
    }

    // allowed_origins - computed: true, optional: true, required: false
    private _allowedOrigins?: string[]; 
    public get allowedOrigins() {
        return this.getListAttribute('allowed_origins');
    }
    public set allowedOrigins(value: string[]) {
        this._allowedOrigins = value;
    }
    public resetAllowedOrigins() {
        this._allowedOrigins = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedOriginsInput() {
        return this._allowedOrigins;
    }

    // exposed_headers - computed: true, optional: true, required: false
    private _exposedHeaders?: string[]; 
    public get exposedHeaders() {
        return this.getListAttribute('exposed_headers');
    }
    public set exposedHeaders(value: string[]) {
        this._exposedHeaders = value;
    }
    public resetExposedHeaders() {
        this._exposedHeaders = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get exposedHeadersInput() {
        return this._exposedHeaders;
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

    // max_age - computed: true, optional: true, required: false
    private _maxAge?: number; 
    public get maxAge() {
        return this.getNumberAttribute('max_age');
    }
    public set maxAge(value: number) {
        this._maxAge = value;
    }
    public resetMaxAge() {
        this._maxAge = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxAgeInput() {
        return this._maxAge;
    }
}

export class CorsRulePropertyList extends cdktn.ComplexList {
    public internalValue? : CorsRuleProperty[] | cdktn.IResolvable

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
    public get(index: number): CorsRulePropertyOutputReference {
        return new CorsRulePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface CorsConfigurationProperty {
    /**
    * A set of origins and methods (cross-origin access that you want to allow). You can add up to 100 rules to the configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#cors_rules CcBucket#cors_rules}
    */
    readonly corsRules?: CorsRuleProperty[] | cdktn.IResolvable;
}
export class CorsConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CorsConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._corsRules?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.corsRules = this._corsRules?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CorsConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._corsRules.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._corsRules.internalValue = value.corsRules;
        }
    }

    // cors_rules - computed: true, optional: true, required: false
    private _corsRules = new CorsRulePropertyList(this, "cors_rules", false);
    public get corsRules() {
        return this._corsRules;
    }
    public putCorsRules(value: CorsRuleProperty[] | cdktn.IResolvable) {
        this._corsRules.internalValue = value;
    }
    public resetCorsRules() {
        this._corsRules.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get corsRulesInput() {
        return this._corsRules.internalValue;
    }
}
export interface IntelligentTieringConfigurationsTagFiltersProperty {
    /**
    * The tag key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#key CcBucket#key}
    */
    readonly key?: string;
    /**
    * The tag value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#value CcBucket#value}
    */
    readonly value?: string;
}
export class IntelligentTieringConfigurationsTagFiltersPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): IntelligentTieringConfigurationsTagFiltersProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: IntelligentTieringConfigurationsTagFiltersProperty | cdktn.IResolvable | undefined) {
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

export class IntelligentTieringConfigurationsTagFiltersPropertyList extends cdktn.ComplexList {
    public internalValue? : IntelligentTieringConfigurationsTagFiltersProperty[] | cdktn.IResolvable

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
    public get(index: number): IntelligentTieringConfigurationsTagFiltersPropertyOutputReference {
        return new IntelligentTieringConfigurationsTagFiltersPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TieringProperty {
    /**
    * S3 Intelligent-Tiering access tier. See [Storage class for automatically optimizing frequently and infrequently accessed objects](https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html#sc-dynamic-data-access) for a list of access tiers in the S3 Intelligent-Tiering storage class.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#access_tier CcBucket#access_tier}
    */
    readonly accessTier?: string;
    /**
    * The number of consecutive days of no access after which an object will be eligible to be transitioned to the corresponding tier. The minimum number of days specified for Archive Access tier must be at least 90 days and Deep Archive Access tier must be at least 180 days. The maximum can be up to 2 years (730 days).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#days CcBucket#days}
    */
    readonly days?: number;
}
export class TieringPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TieringProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._accessTier !== undefined) {
            hasAnyValues = true;
            internalValueResult.accessTier = this._accessTier;
        }
        if (this._days !== undefined) {
            hasAnyValues = true;
            internalValueResult.days = this._days;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TieringProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accessTier = undefined;
            this._days = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accessTier = value.accessTier;
            this._days = value.days;
        }
    }

    // access_tier - computed: true, optional: true, required: false
    private _accessTier?: string; 
    public get accessTier() {
        return this.getStringAttribute('access_tier');
    }
    public set accessTier(value: string) {
        this._accessTier = value;
    }
    public resetAccessTier() {
        this._accessTier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accessTierInput() {
        return this._accessTier;
    }

    // days - computed: true, optional: true, required: false
    private _days?: number; 
    public get days() {
        return this.getNumberAttribute('days');
    }
    public set days(value: number) {
        this._days = value;
    }
    public resetDays() {
        this._days = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get daysInput() {
        return this._days;
    }
}

export class TieringPropertyList extends cdktn.ComplexList {
    public internalValue? : TieringProperty[] | cdktn.IResolvable

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
    public get(index: number): TieringPropertyOutputReference {
        return new TieringPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface IntelligentTieringConfigurationProperty {
    /**
    * The ID used to identify the S3 Intelligent-Tiering configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#id CcBucket#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * An object key name prefix that identifies the subset of objects to which the rule applies.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#prefix CcBucket#prefix}
    */
    readonly prefix?: string;
    /**
    * Specifies the status of the configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#status CcBucket#status}
    */
    readonly status?: string;
    /**
    * A container for a key-value pair.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#tag_filters CcBucket#tag_filters}
    */
    readonly tagFilters?: IntelligentTieringConfigurationsTagFiltersProperty[] | cdktn.IResolvable;
    /**
    * Specifies a list of S3 Intelligent-Tiering storage class tiers in the configuration. At least one tier must be defined in the list. At most, you can specify two tiers in the list, one for each available AccessTier: ``ARCHIVE_ACCESS`` and ``DEEP_ARCHIVE_ACCESS``.
    *   You only need Intelligent Tiering Configuration enabled on a bucket if you want to automatically move objects stored in the Intelligent-Tiering storage class to Archive Access or Deep Archive Access tiers.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#tierings CcBucket#tierings}
    */
    readonly tierings?: TieringProperty[] | cdktn.IResolvable;
}
export class IntelligentTieringConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): IntelligentTieringConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        if (this._prefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.prefix = this._prefix;
        }
        if (this._status !== undefined) {
            hasAnyValues = true;
            internalValueResult.status = this._status;
        }
        if (this._tagFilters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tagFilters = this._tagFilters?.internalValue;
        }
        if (this._tierings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tierings = this._tierings?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IntelligentTieringConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._id = undefined;
            this._prefix = undefined;
            this._status = undefined;
            this._tagFilters.internalValue = undefined;
            this._tierings.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._id = value.id;
            this._prefix = value.prefix;
            this._status = value.status;
            this._tagFilters.internalValue = value.tagFilters;
            this._tierings.internalValue = value.tierings;
        }
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

    // tag_filters - computed: true, optional: true, required: false
    private _tagFilters = new IntelligentTieringConfigurationsTagFiltersPropertyList(this, "tag_filters", false);
    public get tagFilters() {
        return this._tagFilters;
    }
    public putTagFilters(value: IntelligentTieringConfigurationsTagFiltersProperty[] | cdktn.IResolvable) {
        this._tagFilters.internalValue = value;
    }
    public resetTagFilters() {
        this._tagFilters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagFiltersInput() {
        return this._tagFilters.internalValue;
    }

    // tierings - computed: true, optional: true, required: false
    private _tierings = new TieringPropertyList(this, "tierings", false);
    public get tierings() {
        return this._tierings;
    }
    public putTierings(value: TieringProperty[] | cdktn.IResolvable) {
        this._tierings.internalValue = value;
    }
    public resetTierings() {
        this._tierings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tieringsInput() {
        return this._tierings.internalValue;
    }
}

export class IntelligentTieringConfigurationPropertyList extends cdktn.ComplexList {
    public internalValue? : IntelligentTieringConfigurationProperty[] | cdktn.IResolvable

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
    public get(index: number): IntelligentTieringConfigurationPropertyOutputReference {
        return new IntelligentTieringConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface InventoryConfigurationsDestinationProperty {
    /**
    * The account ID that owns the destination S3 bucket. If no account ID is provided, the owner is not validated before exporting data.
    *    Although this value is optional, we strongly recommend that you set it to help prevent problems if the destination bucket ownership changes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#bucket_account_id CcBucket#bucket_account_id}
    */
    readonly bucketAccountId?: string;
    /**
    * The Amazon Resource Name (ARN) of the bucket to which data is exported.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#bucket_arn CcBucket#bucket_arn}
    */
    readonly bucketArn?: string;
    /**
    * Specifies the file format used when exporting data to Amazon S3.
    *   *Allowed values*: ``CSV`` | ``ORC`` | ``Parquet``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#format CcBucket#format}
    */
    readonly format?: string;
    /**
    * The prefix to use when exporting data. The prefix is prepended to all results.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#prefix CcBucket#prefix}
    */
    readonly prefix?: string;
}
export class InventoryConfigurationsDestinationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InventoryConfigurationsDestinationProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: InventoryConfigurationsDestinationProperty | cdktn.IResolvable | undefined) {
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
    * Contains information about where to publish the inventory results.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#destination CcBucket#destination}
    */
    readonly destination?: InventoryConfigurationsDestinationProperty;
    /**
    * Specifies whether the inventory is enabled or disabled. If set to ``True``, an inventory list is generated. If set to ``False``, no inventory list is generated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#enabled CcBucket#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
    /**
    * The ID used to identify the inventory configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#id CcBucket#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Object versions to include in the inventory list. If set to ``All``, the list includes all the object versions, which adds the version-related fields ``VersionId``, ``IsLatest``, and ``DeleteMarker`` to the list. If set to ``Current``, the list does not contain these version-related fields.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#included_object_versions CcBucket#included_object_versions}
    */
    readonly includedObjectVersions?: string;
    /**
    * Contains the optional fields that are included in the inventory results.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#optional_fields CcBucket#optional_fields}
    */
    readonly optionalFields?: string[];
    /**
    * Specifies the inventory filter prefix.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#prefix CcBucket#prefix}
    */
    readonly prefix?: string;
    /**
    * Specifies the schedule for generating inventory results.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#schedule_frequency CcBucket#schedule_frequency}
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
    private _destination = new InventoryConfigurationsDestinationPropertyOutputReference(this, "destination");
    public get destination() {
        return this._destination;
    }
    public putDestination(value: InventoryConfigurationsDestinationProperty) {
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
    * Specifies the number of days after which Amazon S3 stops an incomplete multipart upload.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#days_after_initiation CcBucket#days_after_initiation}
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
export interface NoncurrentVersionExpirationProperty {
    /**
    * Specifies how many noncurrent versions S3 will retain. If there are this many more recent noncurrent versions, S3 will take the associated action. For more information about noncurrent versions, see [Lifecycle configuration elements](https://docs.aws.amazon.com/AmazonS3/latest/userguide/intro-lifecycle-rules.html) in the *Amazon S3 User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#newer_noncurrent_versions CcBucket#newer_noncurrent_versions}
    */
    readonly newerNoncurrentVersions?: number;
    /**
    * Specifies the number of days an object is noncurrent before S3 can perform the associated action. For information about the noncurrent days calculations, see [How Amazon S3 Calculates When an Object Became Noncurrent](https://docs.aws.amazon.com/AmazonS3/latest/dev/intro-lifecycle-rules.html#non-current-days-calculations) in the *Amazon S3 User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#noncurrent_days CcBucket#noncurrent_days}
    */
    readonly noncurrentDays?: number;
}
export class NoncurrentVersionExpirationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): NoncurrentVersionExpirationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._newerNoncurrentVersions !== undefined) {
            hasAnyValues = true;
            internalValueResult.newerNoncurrentVersions = this._newerNoncurrentVersions;
        }
        if (this._noncurrentDays !== undefined) {
            hasAnyValues = true;
            internalValueResult.noncurrentDays = this._noncurrentDays;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NoncurrentVersionExpirationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._newerNoncurrentVersions = undefined;
            this._noncurrentDays = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._newerNoncurrentVersions = value.newerNoncurrentVersions;
            this._noncurrentDays = value.noncurrentDays;
        }
    }

    // newer_noncurrent_versions - computed: true, optional: true, required: false
    private _newerNoncurrentVersions?: number; 
    public get newerNoncurrentVersions() {
        return this.getNumberAttribute('newer_noncurrent_versions');
    }
    public set newerNoncurrentVersions(value: number) {
        this._newerNoncurrentVersions = value;
    }
    public resetNewerNoncurrentVersions() {
        this._newerNoncurrentVersions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get newerNoncurrentVersionsInput() {
        return this._newerNoncurrentVersions;
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
}
export interface NoncurrentVersionTransitionProperty {
    /**
    * Specifies how many noncurrent versions S3 will retain. If there are this many more recent noncurrent versions, S3 will take the associated action. For more information about noncurrent versions, see [Lifecycle configuration elements](https://docs.aws.amazon.com/AmazonS3/latest/userguide/intro-lifecycle-rules.html) in the *Amazon S3 User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#newer_noncurrent_versions CcBucket#newer_noncurrent_versions}
    */
    readonly newerNoncurrentVersions?: number;
    /**
    * The class of storage used to store the object.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#storage_class CcBucket#storage_class}
    */
    readonly storageClass?: string;
    /**
    * Specifies the number of days an object is noncurrent before Amazon S3 can perform the associated action. For information about the noncurrent days calculations, see [How Amazon S3 Calculates How Long an Object Has Been Noncurrent](https://docs.aws.amazon.com/AmazonS3/latest/dev/intro-lifecycle-rules.html#non-current-days-calculations) in the *Amazon S3 User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#transition_in_days CcBucket#transition_in_days}
    */
    readonly transitionInDays?: number;
}
export class NoncurrentVersionTransitionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): NoncurrentVersionTransitionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._newerNoncurrentVersions !== undefined) {
            hasAnyValues = true;
            internalValueResult.newerNoncurrentVersions = this._newerNoncurrentVersions;
        }
        if (this._storageClass !== undefined) {
            hasAnyValues = true;
            internalValueResult.storageClass = this._storageClass;
        }
        if (this._transitionInDays !== undefined) {
            hasAnyValues = true;
            internalValueResult.transitionInDays = this._transitionInDays;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NoncurrentVersionTransitionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._newerNoncurrentVersions = undefined;
            this._storageClass = undefined;
            this._transitionInDays = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._newerNoncurrentVersions = value.newerNoncurrentVersions;
            this._storageClass = value.storageClass;
            this._transitionInDays = value.transitionInDays;
        }
    }

    // newer_noncurrent_versions - computed: true, optional: true, required: false
    private _newerNoncurrentVersions?: number; 
    public get newerNoncurrentVersions() {
        return this.getNumberAttribute('newer_noncurrent_versions');
    }
    public set newerNoncurrentVersions(value: number) {
        this._newerNoncurrentVersions = value;
    }
    public resetNewerNoncurrentVersions() {
        this._newerNoncurrentVersions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get newerNoncurrentVersionsInput() {
        return this._newerNoncurrentVersions;
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

    // transition_in_days - computed: true, optional: true, required: false
    private _transitionInDays?: number; 
    public get transitionInDays() {
        return this.getNumberAttribute('transition_in_days');
    }
    public set transitionInDays(value: number) {
        this._transitionInDays = value;
    }
    public resetTransitionInDays() {
        this._transitionInDays = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get transitionInDaysInput() {
        return this._transitionInDays;
    }
}
export interface NoncurrentVersionTransitionsProperty {
    /**
    * Specifies how many noncurrent versions S3 will retain. If there are this many more recent noncurrent versions, S3 will take the associated action. For more information about noncurrent versions, see [Lifecycle configuration elements](https://docs.aws.amazon.com/AmazonS3/latest/userguide/intro-lifecycle-rules.html) in the *Amazon S3 User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#newer_noncurrent_versions CcBucket#newer_noncurrent_versions}
    */
    readonly newerNoncurrentVersions?: number;
    /**
    * The class of storage used to store the object.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#storage_class CcBucket#storage_class}
    */
    readonly storageClass?: string;
    /**
    * Specifies the number of days an object is noncurrent before Amazon S3 can perform the associated action. For information about the noncurrent days calculations, see [How Amazon S3 Calculates How Long an Object Has Been Noncurrent](https://docs.aws.amazon.com/AmazonS3/latest/dev/intro-lifecycle-rules.html#non-current-days-calculations) in the *Amazon S3 User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#transition_in_days CcBucket#transition_in_days}
    */
    readonly transitionInDays?: number;
}
export class NoncurrentVersionTransitionsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): NoncurrentVersionTransitionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._newerNoncurrentVersions !== undefined) {
            hasAnyValues = true;
            internalValueResult.newerNoncurrentVersions = this._newerNoncurrentVersions;
        }
        if (this._storageClass !== undefined) {
            hasAnyValues = true;
            internalValueResult.storageClass = this._storageClass;
        }
        if (this._transitionInDays !== undefined) {
            hasAnyValues = true;
            internalValueResult.transitionInDays = this._transitionInDays;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NoncurrentVersionTransitionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._newerNoncurrentVersions = undefined;
            this._storageClass = undefined;
            this._transitionInDays = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._newerNoncurrentVersions = value.newerNoncurrentVersions;
            this._storageClass = value.storageClass;
            this._transitionInDays = value.transitionInDays;
        }
    }

    // newer_noncurrent_versions - computed: true, optional: true, required: false
    private _newerNoncurrentVersions?: number; 
    public get newerNoncurrentVersions() {
        return this.getNumberAttribute('newer_noncurrent_versions');
    }
    public set newerNoncurrentVersions(value: number) {
        this._newerNoncurrentVersions = value;
    }
    public resetNewerNoncurrentVersions() {
        this._newerNoncurrentVersions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get newerNoncurrentVersionsInput() {
        return this._newerNoncurrentVersions;
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

    // transition_in_days - computed: true, optional: true, required: false
    private _transitionInDays?: number; 
    public get transitionInDays() {
        return this.getNumberAttribute('transition_in_days');
    }
    public set transitionInDays(value: number) {
        this._transitionInDays = value;
    }
    public resetTransitionInDays() {
        this._transitionInDays = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get transitionInDaysInput() {
        return this._transitionInDays;
    }
}

export class NoncurrentVersionTransitionsPropertyList extends cdktn.ComplexList {
    public internalValue? : NoncurrentVersionTransitionsProperty[] | cdktn.IResolvable

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
    public get(index: number): NoncurrentVersionTransitionsPropertyOutputReference {
        return new NoncurrentVersionTransitionsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface LifecycleConfigurationRulesTagFiltersProperty {
    /**
    * The tag key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#key CcBucket#key}
    */
    readonly key?: string;
    /**
    * The tag value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#value CcBucket#value}
    */
    readonly value?: string;
}
export class LifecycleConfigurationRulesTagFiltersPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): LifecycleConfigurationRulesTagFiltersProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: LifecycleConfigurationRulesTagFiltersProperty | cdktn.IResolvable | undefined) {
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

export class LifecycleConfigurationRulesTagFiltersPropertyList extends cdktn.ComplexList {
    public internalValue? : LifecycleConfigurationRulesTagFiltersProperty[] | cdktn.IResolvable

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
    public get(index: number): LifecycleConfigurationRulesTagFiltersPropertyOutputReference {
        return new LifecycleConfigurationRulesTagFiltersPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TransitionProperty {
    /**
    * The storage class to which you want the object to transition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#storage_class CcBucket#storage_class}
    */
    readonly storageClass?: string;
    /**
    * Indicates when objects are transitioned to the specified storage class. The date value must be in ISO 8601 format. The time is always midnight UTC.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#transition_date CcBucket#transition_date}
    */
    readonly transitionDate?: string;
    /**
    * Indicates the number of days after creation when objects are transitioned to the specified storage class. If the specified storage class is ``INTELLIGENT_TIERING``, ``GLACIER_IR``, ``GLACIER``, or ``DEEP_ARCHIVE``, valid values are ``0`` or positive integers. If the specified storage class is ``STANDARD_IA`` or ``ONEZONE_IA``, valid values are positive integers greater than ``30``. Be aware that some storage classes have a minimum storage duration and that you're charged for transitioning objects before their minimum storage duration. For more information, see [Constraints and considerations for transitions](https://docs.aws.amazon.com/AmazonS3/latest/userguide/lifecycle-transition-general-considerations.html#lifecycle-configuration-constraints) in the *Amazon S3 User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#transition_in_days CcBucket#transition_in_days}
    */
    readonly transitionInDays?: number;
}
export class TransitionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TransitionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._storageClass !== undefined) {
            hasAnyValues = true;
            internalValueResult.storageClass = this._storageClass;
        }
        if (this._transitionDate !== undefined) {
            hasAnyValues = true;
            internalValueResult.transitionDate = this._transitionDate;
        }
        if (this._transitionInDays !== undefined) {
            hasAnyValues = true;
            internalValueResult.transitionInDays = this._transitionInDays;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TransitionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._storageClass = undefined;
            this._transitionDate = undefined;
            this._transitionInDays = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._storageClass = value.storageClass;
            this._transitionDate = value.transitionDate;
            this._transitionInDays = value.transitionInDays;
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

    // transition_date - computed: true, optional: true, required: false
    private _transitionDate?: string; 
    public get transitionDate() {
        return this.getStringAttribute('transition_date');
    }
    public set transitionDate(value: string) {
        this._transitionDate = value;
    }
    public resetTransitionDate() {
        this._transitionDate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get transitionDateInput() {
        return this._transitionDate;
    }

    // transition_in_days - computed: true, optional: true, required: false
    private _transitionInDays?: number; 
    public get transitionInDays() {
        return this.getNumberAttribute('transition_in_days');
    }
    public set transitionInDays(value: number) {
        this._transitionInDays = value;
    }
    public resetTransitionInDays() {
        this._transitionInDays = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get transitionInDaysInput() {
        return this._transitionInDays;
    }
}
export interface TransitionsProperty {
    /**
    * The storage class to which you want the object to transition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#storage_class CcBucket#storage_class}
    */
    readonly storageClass?: string;
    /**
    * Indicates when objects are transitioned to the specified storage class. The date value must be in ISO 8601 format. The time is always midnight UTC.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#transition_date CcBucket#transition_date}
    */
    readonly transitionDate?: string;
    /**
    * Indicates the number of days after creation when objects are transitioned to the specified storage class. If the specified storage class is ``INTELLIGENT_TIERING``, ``GLACIER_IR``, ``GLACIER``, or ``DEEP_ARCHIVE``, valid values are ``0`` or positive integers. If the specified storage class is ``STANDARD_IA`` or ``ONEZONE_IA``, valid values are positive integers greater than ``30``. Be aware that some storage classes have a minimum storage duration and that you're charged for transitioning objects before their minimum storage duration. For more information, see [Constraints and considerations for transitions](https://docs.aws.amazon.com/AmazonS3/latest/userguide/lifecycle-transition-general-considerations.html#lifecycle-configuration-constraints) in the *Amazon S3 User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#transition_in_days CcBucket#transition_in_days}
    */
    readonly transitionInDays?: number;
}
export class TransitionsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TransitionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._storageClass !== undefined) {
            hasAnyValues = true;
            internalValueResult.storageClass = this._storageClass;
        }
        if (this._transitionDate !== undefined) {
            hasAnyValues = true;
            internalValueResult.transitionDate = this._transitionDate;
        }
        if (this._transitionInDays !== undefined) {
            hasAnyValues = true;
            internalValueResult.transitionInDays = this._transitionInDays;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TransitionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._storageClass = undefined;
            this._transitionDate = undefined;
            this._transitionInDays = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._storageClass = value.storageClass;
            this._transitionDate = value.transitionDate;
            this._transitionInDays = value.transitionInDays;
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

    // transition_date - computed: true, optional: true, required: false
    private _transitionDate?: string; 
    public get transitionDate() {
        return this.getStringAttribute('transition_date');
    }
    public set transitionDate(value: string) {
        this._transitionDate = value;
    }
    public resetTransitionDate() {
        this._transitionDate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get transitionDateInput() {
        return this._transitionDate;
    }

    // transition_in_days - computed: true, optional: true, required: false
    private _transitionInDays?: number; 
    public get transitionInDays() {
        return this.getNumberAttribute('transition_in_days');
    }
    public set transitionInDays(value: number) {
        this._transitionInDays = value;
    }
    public resetTransitionInDays() {
        this._transitionInDays = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get transitionInDaysInput() {
        return this._transitionInDays;
    }
}

export class TransitionsPropertyList extends cdktn.ComplexList {
    public internalValue? : TransitionsProperty[] | cdktn.IResolvable

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
    public get(index: number): TransitionsPropertyOutputReference {
        return new TransitionsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface RuleProperty {
    /**
    * Specifies a lifecycle rule that stops incomplete multipart uploads to an Amazon S3 bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#abort_incomplete_multipart_upload CcBucket#abort_incomplete_multipart_upload}
    */
    readonly abortIncompleteMultipartUpload?: AbortIncompleteMultipartUploadProperty;
    /**
    * Indicates when objects are deleted from Amazon S3 and Amazon S3 Glacier. The date value must be in ISO 8601 format. The time is always midnight UTC. If you specify an expiration and transition time, you must use the same time unit for both properties (either in days or by date). The expiration time must also be later than the transition time.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#expiration_date CcBucket#expiration_date}
    */
    readonly expirationDate?: string;
    /**
    * Indicates the number of days after creation when objects are deleted from Amazon S3 and Amazon S3 Glacier. If you specify an expiration and transition time, you must use the same time unit for both properties (either in days or by date). The expiration time must also be later than the transition time.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#expiration_in_days CcBucket#expiration_in_days}
    */
    readonly expirationInDays?: number;
    /**
    * Indicates whether Amazon S3 will remove a delete marker without any noncurrent versions. If set to true, the delete marker will be removed if there are no noncurrent versions. This cannot be specified with ``ExpirationInDays``, ``ExpirationDate``, or ``TagFilters``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#expired_object_delete_marker CcBucket#expired_object_delete_marker}
    */
    readonly expiredObjectDeleteMarker?: boolean | cdktn.IResolvable;
    /**
    * Unique identifier for the rule. The value can't be longer than 255 characters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#id CcBucket#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Specifies when noncurrent object versions expire. Upon expiration, S3 permanently deletes the noncurrent object versions. You set this lifecycle configuration action on a bucket that has versioning enabled (or suspended) to request that S3 delete noncurrent object versions at a specific period in the object's lifetime.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#noncurrent_version_expiration CcBucket#noncurrent_version_expiration}
    */
    readonly noncurrentVersionExpiration?: NoncurrentVersionExpirationProperty;
    /**
    * (Deprecated.) For buckets with versioning enabled (or suspended), specifies the time, in days, between when a new version of the object is uploaded to the bucket and when old versions of the object expire. When object versions expire, Amazon S3 permanently deletes them. If you specify a transition and expiration time, the expiration time must be later than the transition time.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#noncurrent_version_expiration_in_days CcBucket#noncurrent_version_expiration_in_days}
    */
    readonly noncurrentVersionExpirationInDays?: number;
    /**
    * (Deprecated.) For buckets with versioning enabled (or suspended), specifies when non-current objects transition to a specified storage class. If you specify a transition and expiration time, the expiration time must be later than the transition time. If you specify this property, don't specify the ``NoncurrentVersionTransitions`` property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#noncurrent_version_transition CcBucket#noncurrent_version_transition}
    */
    readonly noncurrentVersionTransition?: NoncurrentVersionTransitionProperty;
    /**
    * For buckets with versioning enabled (or suspended), one or more transition rules that specify when non-current objects transition to a specified storage class. If you specify a transition and expiration time, the expiration time must be later than the transition time. If you specify this property, don't specify the ``NoncurrentVersionTransition`` property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#noncurrent_version_transitions CcBucket#noncurrent_version_transitions}
    */
    readonly noncurrentVersionTransitions?: NoncurrentVersionTransitionsProperty[] | cdktn.IResolvable;
    /**
    * Specifies the minimum object size in bytes for this rule to apply to. Objects must be larger than this value in bytes. For more information about size based rules, see [Lifecycle configuration using size-based rules](https://docs.aws.amazon.com/AmazonS3/latest/userguide/lifecycle-configuration-examples.html#lc-size-rules) in the *Amazon S3 User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#object_size_greater_than CcBucket#object_size_greater_than}
    */
    readonly objectSizeGreaterThan?: string;
    /**
    * Specifies the maximum object size in bytes for this rule to apply to. Objects must be smaller than this value in bytes. For more information about sized based rules, see [Lifecycle configuration using size-based rules](https://docs.aws.amazon.com/AmazonS3/latest/userguide/lifecycle-configuration-examples.html#lc-size-rules) in the *Amazon S3 User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#object_size_less_than CcBucket#object_size_less_than}
    */
    readonly objectSizeLessThan?: string;
    /**
    * Object key prefix that identifies one or more objects to which this rule applies.
    *   Replacement must be made for object keys containing special characters (such as carriage returns) when using XML requests. For more information, see [XML related object key constraints](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-xml-related-constraints).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#prefix CcBucket#prefix}
    */
    readonly prefix?: string;
    /**
    * If ``Enabled``, the rule is currently being applied. If ``Disabled``, the rule is not currently being applied.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#status CcBucket#status}
    */
    readonly status?: string;
    /**
    * Tags to use to identify a subset of objects to which the lifecycle rule applies.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#tag_filters CcBucket#tag_filters}
    */
    readonly tagFilters?: LifecycleConfigurationRulesTagFiltersProperty[] | cdktn.IResolvable;
    /**
    * (Deprecated.) Specifies when an object transitions to a specified storage class. If you specify an expiration and transition time, you must use the same time unit for both properties (either in days or by date). The expiration time must also be later than the transition time. If you specify this property, don't specify the ``Transitions`` property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#transition CcBucket#transition}
    */
    readonly transition?: TransitionProperty;
    /**
    * One or more transition rules that specify when an object transitions to a specified storage class. If you specify an expiration and transition time, you must use the same time unit for both properties (either in days or by date). The expiration time must also be later than the transition time. If you specify this property, don't specify the ``Transition`` property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#transitions CcBucket#transitions}
    */
    readonly transitions?: TransitionsProperty[] | cdktn.IResolvable;
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
        if (this._expirationDate !== undefined) {
            hasAnyValues = true;
            internalValueResult.expirationDate = this._expirationDate;
        }
        if (this._expirationInDays !== undefined) {
            hasAnyValues = true;
            internalValueResult.expirationInDays = this._expirationInDays;
        }
        if (this._expiredObjectDeleteMarker !== undefined) {
            hasAnyValues = true;
            internalValueResult.expiredObjectDeleteMarker = this._expiredObjectDeleteMarker;
        }
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        if (this._noncurrentVersionExpiration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.noncurrentVersionExpiration = this._noncurrentVersionExpiration?.internalValue;
        }
        if (this._noncurrentVersionExpirationInDays !== undefined) {
            hasAnyValues = true;
            internalValueResult.noncurrentVersionExpirationInDays = this._noncurrentVersionExpirationInDays;
        }
        if (this._noncurrentVersionTransition?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.noncurrentVersionTransition = this._noncurrentVersionTransition?.internalValue;
        }
        if (this._noncurrentVersionTransitions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.noncurrentVersionTransitions = this._noncurrentVersionTransitions?.internalValue;
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
        if (this._tagFilters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tagFilters = this._tagFilters?.internalValue;
        }
        if (this._transition?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.transition = this._transition?.internalValue;
        }
        if (this._transitions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.transitions = this._transitions?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RuleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._abortIncompleteMultipartUpload.internalValue = undefined;
            this._expirationDate = undefined;
            this._expirationInDays = undefined;
            this._expiredObjectDeleteMarker = undefined;
            this._id = undefined;
            this._noncurrentVersionExpiration.internalValue = undefined;
            this._noncurrentVersionExpirationInDays = undefined;
            this._noncurrentVersionTransition.internalValue = undefined;
            this._noncurrentVersionTransitions.internalValue = undefined;
            this._objectSizeGreaterThan = undefined;
            this._objectSizeLessThan = undefined;
            this._prefix = undefined;
            this._status = undefined;
            this._tagFilters.internalValue = undefined;
            this._transition.internalValue = undefined;
            this._transitions.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._abortIncompleteMultipartUpload.internalValue = value.abortIncompleteMultipartUpload;
            this._expirationDate = value.expirationDate;
            this._expirationInDays = value.expirationInDays;
            this._expiredObjectDeleteMarker = value.expiredObjectDeleteMarker;
            this._id = value.id;
            this._noncurrentVersionExpiration.internalValue = value.noncurrentVersionExpiration;
            this._noncurrentVersionExpirationInDays = value.noncurrentVersionExpirationInDays;
            this._noncurrentVersionTransition.internalValue = value.noncurrentVersionTransition;
            this._noncurrentVersionTransitions.internalValue = value.noncurrentVersionTransitions;
            this._objectSizeGreaterThan = value.objectSizeGreaterThan;
            this._objectSizeLessThan = value.objectSizeLessThan;
            this._prefix = value.prefix;
            this._status = value.status;
            this._tagFilters.internalValue = value.tagFilters;
            this._transition.internalValue = value.transition;
            this._transitions.internalValue = value.transitions;
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

    // expiration_date - computed: true, optional: true, required: false
    private _expirationDate?: string; 
    public get expirationDate() {
        return this.getStringAttribute('expiration_date');
    }
    public set expirationDate(value: string) {
        this._expirationDate = value;
    }
    public resetExpirationDate() {
        this._expirationDate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get expirationDateInput() {
        return this._expirationDate;
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

    // expired_object_delete_marker - computed: true, optional: true, required: false
    private _expiredObjectDeleteMarker?: boolean | cdktn.IResolvable; 
    public get expiredObjectDeleteMarker() {
        return this.getBooleanAttribute('expired_object_delete_marker');
    }
    public set expiredObjectDeleteMarker(value: boolean | cdktn.IResolvable) {
        this._expiredObjectDeleteMarker = value;
    }
    public resetExpiredObjectDeleteMarker() {
        this._expiredObjectDeleteMarker = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get expiredObjectDeleteMarkerInput() {
        return this._expiredObjectDeleteMarker;
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

    // noncurrent_version_expiration - computed: true, optional: true, required: false
    private _noncurrentVersionExpiration = new NoncurrentVersionExpirationPropertyOutputReference(this, "noncurrent_version_expiration");
    public get noncurrentVersionExpiration() {
        return this._noncurrentVersionExpiration;
    }
    public putNoncurrentVersionExpiration(value: NoncurrentVersionExpirationProperty) {
        this._noncurrentVersionExpiration.internalValue = value;
    }
    public resetNoncurrentVersionExpiration() {
        this._noncurrentVersionExpiration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get noncurrentVersionExpirationInput() {
        return this._noncurrentVersionExpiration.internalValue;
    }

    // noncurrent_version_expiration_in_days - computed: true, optional: true, required: false
    private _noncurrentVersionExpirationInDays?: number; 
    public get noncurrentVersionExpirationInDays() {
        return this.getNumberAttribute('noncurrent_version_expiration_in_days');
    }
    public set noncurrentVersionExpirationInDays(value: number) {
        this._noncurrentVersionExpirationInDays = value;
    }
    public resetNoncurrentVersionExpirationInDays() {
        this._noncurrentVersionExpirationInDays = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get noncurrentVersionExpirationInDaysInput() {
        return this._noncurrentVersionExpirationInDays;
    }

    // noncurrent_version_transition - computed: true, optional: true, required: false
    private _noncurrentVersionTransition = new NoncurrentVersionTransitionPropertyOutputReference(this, "noncurrent_version_transition");
    public get noncurrentVersionTransition() {
        return this._noncurrentVersionTransition;
    }
    public putNoncurrentVersionTransition(value: NoncurrentVersionTransitionProperty) {
        this._noncurrentVersionTransition.internalValue = value;
    }
    public resetNoncurrentVersionTransition() {
        this._noncurrentVersionTransition.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get noncurrentVersionTransitionInput() {
        return this._noncurrentVersionTransition.internalValue;
    }

    // noncurrent_version_transitions - computed: true, optional: true, required: false
    private _noncurrentVersionTransitions = new NoncurrentVersionTransitionsPropertyList(this, "noncurrent_version_transitions", false);
    public get noncurrentVersionTransitions() {
        return this._noncurrentVersionTransitions;
    }
    public putNoncurrentVersionTransitions(value: NoncurrentVersionTransitionsProperty[] | cdktn.IResolvable) {
        this._noncurrentVersionTransitions.internalValue = value;
    }
    public resetNoncurrentVersionTransitions() {
        this._noncurrentVersionTransitions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get noncurrentVersionTransitionsInput() {
        return this._noncurrentVersionTransitions.internalValue;
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

    // tag_filters - computed: true, optional: true, required: false
    private _tagFilters = new LifecycleConfigurationRulesTagFiltersPropertyList(this, "tag_filters", false);
    public get tagFilters() {
        return this._tagFilters;
    }
    public putTagFilters(value: LifecycleConfigurationRulesTagFiltersProperty[] | cdktn.IResolvable) {
        this._tagFilters.internalValue = value;
    }
    public resetTagFilters() {
        this._tagFilters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagFiltersInput() {
        return this._tagFilters.internalValue;
    }

    // transition - computed: true, optional: true, required: false
    private _transition = new TransitionPropertyOutputReference(this, "transition");
    public get transition() {
        return this._transition;
    }
    public putTransition(value: TransitionProperty) {
        this._transition.internalValue = value;
    }
    public resetTransition() {
        this._transition.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get transitionInput() {
        return this._transition.internalValue;
    }

    // transitions - computed: true, optional: true, required: false
    private _transitions = new TransitionsPropertyList(this, "transitions", false);
    public get transitions() {
        return this._transitions;
    }
    public putTransitions(value: TransitionsProperty[] | cdktn.IResolvable) {
        this._transitions.internalValue = value;
    }
    public resetTransitions() {
        this._transitions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get transitionsInput() {
        return this._transitions.internalValue;
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
    * A lifecycle rule for individual objects in an Amazon S3 bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#rules CcBucket#rules}
    */
    readonly rules?: RuleProperty[] | cdktn.IResolvable;
    /**
    * Indicates which default minimum object size behavior is applied to the lifecycle configuration.
    *   This parameter applies to general purpose buckets only. It isn't supported for directory bucket lifecycle configurations.
    *    +   ``all_storage_classes_128K`` - Objects smaller than 128 KB will not transition to any storage class by default.
    *   +   ``varies_by_storage_class`` - Objects smaller than 128 KB will transition to Glacier Flexible Retrieval or Glacier Deep Archive storage classes. By default, all other storage classes will prevent transitions smaller than 128 KB. 
    *   
    *  To customize the minimum object size for any transition you can add a filter that specifies a custom ``ObjectSizeGreaterThan`` or ``ObjectSizeLessThan`` in the body of your transition rule. Custom filters always take precedence over the default transition behavior.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#transition_default_minimum_object_size CcBucket#transition_default_minimum_object_size}
    */
    readonly transitionDefaultMinimumObjectSize?: string;
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
        if (this._transitionDefaultMinimumObjectSize !== undefined) {
            hasAnyValues = true;
            internalValueResult.transitionDefaultMinimumObjectSize = this._transitionDefaultMinimumObjectSize;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LifecycleConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._rules.internalValue = undefined;
            this._transitionDefaultMinimumObjectSize = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._rules.internalValue = value.rules;
            this._transitionDefaultMinimumObjectSize = value.transitionDefaultMinimumObjectSize;
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

    // transition_default_minimum_object_size - computed: true, optional: true, required: false
    private _transitionDefaultMinimumObjectSize?: string; 
    public get transitionDefaultMinimumObjectSize() {
        return this.getStringAttribute('transition_default_minimum_object_size');
    }
    public set transitionDefaultMinimumObjectSize(value: string) {
        this._transitionDefaultMinimumObjectSize = value;
    }
    public resetTransitionDefaultMinimumObjectSize() {
        this._transitionDefaultMinimumObjectSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get transitionDefaultMinimumObjectSizeInput() {
        return this._transitionDefaultMinimumObjectSize;
    }
}
export interface PartitionedPrefixProperty {
    /**
    * Specifies the partition date source for the partitioned prefix. ``PartitionDateSource`` can be ``EventTime`` or ``DeliveryTime``.
    *  For ``DeliveryTime``, the time in the log file names corresponds to the delivery time for the log files. 
    *   For ``EventTime``, The logs delivered are for a specific day only. The year, month, and day correspond to the day on which the event occurred, and the hour, minutes and seconds are set to 00 in the key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#partition_date_source CcBucket#partition_date_source}
    */
    readonly partitionDateSource?: string;
}
export class PartitionedPrefixPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PartitionedPrefixProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._partitionDateSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.partitionDateSource = this._partitionDateSource;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PartitionedPrefixProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._partitionDateSource = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._partitionDateSource = value.partitionDateSource;
        }
    }

    // partition_date_source - computed: true, optional: true, required: false
    private _partitionDateSource?: string; 
    public get partitionDateSource() {
        return this.getStringAttribute('partition_date_source');
    }
    public set partitionDateSource(value: string) {
        this._partitionDateSource = value;
    }
    public resetPartitionDateSource() {
        this._partitionDateSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get partitionDateSourceInput() {
        return this._partitionDateSource;
    }
}
export interface TargetObjectKeyFormatProperty {
    /**
    * Amazon S3 keys for log objects are partitioned in the following format:
    *   ``[DestinationPrefix][SourceAccountId]/[SourceRegion]/[SourceBucket]/[YYYY]/[MM]/[DD]/[YYYY]-[MM]-[DD]-[hh]-[mm]-[ss]-[UniqueString]`` 
    *  PartitionedPrefix defaults to EventTime delivery when server access logs are delivered.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#partitioned_prefix CcBucket#partitioned_prefix}
    */
    readonly partitionedPrefix?: PartitionedPrefixProperty;
    /**
    * This format defaults the prefix to the given log file prefix for delivering server access log file.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#simple_prefix CcBucket#simple_prefix}
    */
    readonly simplePrefix?: string;
}
export class TargetObjectKeyFormatPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TargetObjectKeyFormatProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._partitionedPrefix?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.partitionedPrefix = this._partitionedPrefix?.internalValue;
        }
        if (this._simplePrefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.simplePrefix = this._simplePrefix;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TargetObjectKeyFormatProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._partitionedPrefix.internalValue = undefined;
            this._simplePrefix = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._partitionedPrefix.internalValue = value.partitionedPrefix;
            this._simplePrefix = value.simplePrefix;
        }
    }

    // partitioned_prefix - computed: true, optional: true, required: false
    private _partitionedPrefix = new PartitionedPrefixPropertyOutputReference(this, "partitioned_prefix");
    public get partitionedPrefix() {
        return this._partitionedPrefix;
    }
    public putPartitionedPrefix(value: PartitionedPrefixProperty) {
        this._partitionedPrefix.internalValue = value;
    }
    public resetPartitionedPrefix() {
        this._partitionedPrefix.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get partitionedPrefixInput() {
        return this._partitionedPrefix.internalValue;
    }

    // simple_prefix - computed: true, optional: true, required: false
    private _simplePrefix?: string; 
    public get simplePrefix() {
        return this.getStringAttribute('simple_prefix');
    }
    public set simplePrefix(value: string) {
        this._simplePrefix = value;
    }
    public resetSimplePrefix() {
        this._simplePrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get simplePrefixInput() {
        return this._simplePrefix;
    }
}
export interface LoggingConfigurationProperty {
    /**
    * The name of the bucket where Amazon S3 should store server access log files. You can store log files in any bucket that you own. By default, logs are stored in the bucket where the ``LoggingConfiguration`` property is defined.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#destination_bucket_name CcBucket#destination_bucket_name}
    */
    readonly destinationBucketName?: string;
    /**
    * A prefix for all log object keys. If you store log files from multiple Amazon S3 buckets in a single bucket, you can use a prefix to distinguish which log files came from which bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#log_file_prefix CcBucket#log_file_prefix}
    */
    readonly logFilePrefix?: string;
    /**
    * Amazon S3 key format for log objects. Only one format, either PartitionedPrefix or SimplePrefix, is allowed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#target_object_key_format CcBucket#target_object_key_format}
    */
    readonly targetObjectKeyFormat?: TargetObjectKeyFormatProperty;
}
export class LoggingConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LoggingConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._destinationBucketName !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinationBucketName = this._destinationBucketName;
        }
        if (this._logFilePrefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.logFilePrefix = this._logFilePrefix;
        }
        if (this._targetObjectKeyFormat?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetObjectKeyFormat = this._targetObjectKeyFormat?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LoggingConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._destinationBucketName = undefined;
            this._logFilePrefix = undefined;
            this._targetObjectKeyFormat.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._destinationBucketName = value.destinationBucketName;
            this._logFilePrefix = value.logFilePrefix;
            this._targetObjectKeyFormat.internalValue = value.targetObjectKeyFormat;
        }
    }

    // destination_bucket_name - computed: true, optional: true, required: false
    private _destinationBucketName?: string; 
    public get destinationBucketName() {
        return this.getStringAttribute('destination_bucket_name');
    }
    public set destinationBucketName(value: string) {
        this._destinationBucketName = value;
    }
    public resetDestinationBucketName() {
        this._destinationBucketName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationBucketNameInput() {
        return this._destinationBucketName;
    }

    // log_file_prefix - computed: true, optional: true, required: false
    private _logFilePrefix?: string; 
    public get logFilePrefix() {
        return this.getStringAttribute('log_file_prefix');
    }
    public set logFilePrefix(value: string) {
        this._logFilePrefix = value;
    }
    public resetLogFilePrefix() {
        this._logFilePrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logFilePrefixInput() {
        return this._logFilePrefix;
    }

    // target_object_key_format - computed: true, optional: true, required: false
    private _targetObjectKeyFormat = new TargetObjectKeyFormatPropertyOutputReference(this, "target_object_key_format");
    public get targetObjectKeyFormat() {
        return this._targetObjectKeyFormat;
    }
    public putTargetObjectKeyFormat(value: TargetObjectKeyFormatProperty) {
        this._targetObjectKeyFormat.internalValue = value;
    }
    public resetTargetObjectKeyFormat() {
        this._targetObjectKeyFormat.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetObjectKeyFormatInput() {
        return this._targetObjectKeyFormat.internalValue;
    }
}
export interface S3TablesDestinationProperty {
    /**
    * The Amazon Resource Name (ARN) for the table bucket that's specified as the destination in the metadata table configuration. The destination table bucket must be in the same Region and AWS-account as the general purpose bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#table_bucket_arn CcBucket#table_bucket_arn}
    */
    readonly tableBucketArn?: string;
    /**
    * The name for the metadata table in your metadata table configuration. The specified metadata table name must be unique within the ``aws_s3_metadata`` namespace in the destination table bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#table_name CcBucket#table_name}
    */
    readonly tableName?: string;
}
export class S3TablesDestinationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3TablesDestinationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._tableBucketArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.tableBucketArn = this._tableBucketArn;
        }
        if (this._tableName !== undefined) {
            hasAnyValues = true;
            internalValueResult.tableName = this._tableName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3TablesDestinationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._tableBucketArn = undefined;
            this._tableName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._tableBucketArn = value.tableBucketArn;
            this._tableName = value.tableName;
        }
    }

    // table_arn - computed: true, optional: false, required: false
    public get tableArn() {
        return this.getStringAttribute('table_arn');
    }

    // table_bucket_arn - computed: true, optional: true, required: false
    private _tableBucketArn?: string; 
    public get tableBucketArn() {
        return this.getStringAttribute('table_bucket_arn');
    }
    public set tableBucketArn(value: string) {
        this._tableBucketArn = value;
    }
    public resetTableBucketArn() {
        this._tableBucketArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tableBucketArnInput() {
        return this._tableBucketArn;
    }

    // table_name - computed: true, optional: true, required: false
    private _tableName?: string; 
    public get tableName() {
        return this.getStringAttribute('table_name');
    }
    public set tableName(value: string) {
        this._tableName = value;
    }
    public resetTableName() {
        this._tableName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tableNameInput() {
        return this._tableName;
    }

    // table_namespace - computed: true, optional: false, required: false
    public get tableNamespace() {
        return this.getStringAttribute('table_namespace');
    }
}
export interface MetadataTableConfigurationProperty {
    /**
    * The destination information for the metadata table configuration. The destination table bucket must be in the same Region and AWS-account as the general purpose bucket. The specified metadata table name must be unique within the ``aws_s3_metadata`` namespace in the destination table bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#s3_tables_destination CcBucket#s3_tables_destination}
    */
    readonly s3TablesDestination?: S3TablesDestinationProperty;
}
export class MetadataTableConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MetadataTableConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._s3TablesDestination?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3TablesDestination = this._s3TablesDestination?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MetadataTableConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._s3TablesDestination.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._s3TablesDestination.internalValue = value.s3TablesDestination;
        }
    }

    // s3_tables_destination - computed: true, optional: true, required: false
    private _s3TablesDestination = new S3TablesDestinationPropertyOutputReference(this, "s3_tables_destination");
    public get s3TablesDestination() {
        return this._s3TablesDestination;
    }
    public putS3TablesDestination(value: S3TablesDestinationProperty) {
        this._s3TablesDestination.internalValue = value;
    }
    public resetS3TablesDestination() {
        this._s3TablesDestination.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3TablesDestinationInput() {
        return this._s3TablesDestination.internalValue;
    }
}
export interface MetricsConfigurationsTagFiltersProperty {
    /**
    * The tag key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#key CcBucket#key}
    */
    readonly key?: string;
    /**
    * The tag value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#value CcBucket#value}
    */
    readonly value?: string;
}
export class MetricsConfigurationsTagFiltersPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): MetricsConfigurationsTagFiltersProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: MetricsConfigurationsTagFiltersProperty | cdktn.IResolvable | undefined) {
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

export class MetricsConfigurationsTagFiltersPropertyList extends cdktn.ComplexList {
    public internalValue? : MetricsConfigurationsTagFiltersProperty[] | cdktn.IResolvable

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
    public get(index: number): MetricsConfigurationsTagFiltersPropertyOutputReference {
        return new MetricsConfigurationsTagFiltersPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface MetricsConfigurationProperty {
    /**
    * The access point that was used while performing operations on the object. The metrics configuration only includes objects that meet the filter's criteria.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#access_point_arn CcBucket#access_point_arn}
    */
    readonly accessPointArn?: string;
    /**
    * The ID used to identify the metrics configuration. This can be any value you choose that helps you identify your metrics configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#id CcBucket#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * The prefix that an object must have to be included in the metrics results.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#prefix CcBucket#prefix}
    */
    readonly prefix?: string;
    /**
    * Specifies a list of tag filters to use as a metrics configuration filter. The metrics configuration includes only objects that meet the filter's criteria.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#tag_filters CcBucket#tag_filters}
    */
    readonly tagFilters?: MetricsConfigurationsTagFiltersProperty[] | cdktn.IResolvable;
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
        if (this._tagFilters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tagFilters = this._tagFilters?.internalValue;
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
            this._tagFilters.internalValue = undefined;
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
            this._tagFilters.internalValue = value.tagFilters;
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

    // tag_filters - computed: true, optional: true, required: false
    private _tagFilters = new MetricsConfigurationsTagFiltersPropertyList(this, "tag_filters", false);
    public get tagFilters() {
        return this._tagFilters;
    }
    public putTagFilters(value: MetricsConfigurationsTagFiltersProperty[] | cdktn.IResolvable) {
        this._tagFilters.internalValue = value;
    }
    public resetTagFilters() {
        this._tagFilters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagFiltersInput() {
        return this._tagFilters.internalValue;
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
export interface EventBridgeConfigurationProperty {
    /**
    * Enables delivery of events to Amazon EventBridge.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#event_bridge_enabled CcBucket#event_bridge_enabled}
    */
    readonly eventBridgeEnabled?: boolean | cdktn.IResolvable;
}
export class EventBridgeConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EventBridgeConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._eventBridgeEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.eventBridgeEnabled = this._eventBridgeEnabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EventBridgeConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._eventBridgeEnabled = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._eventBridgeEnabled = value.eventBridgeEnabled;
        }
    }

    // event_bridge_enabled - computed: true, optional: true, required: false
    private _eventBridgeEnabled?: boolean | cdktn.IResolvable; 
    public get eventBridgeEnabled() {
        return this.getBooleanAttribute('event_bridge_enabled');
    }
    public set eventBridgeEnabled(value: boolean | cdktn.IResolvable) {
        this._eventBridgeEnabled = value;
    }
    public resetEventBridgeEnabled() {
        this._eventBridgeEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventBridgeEnabledInput() {
        return this._eventBridgeEnabled;
    }
}
export interface FilterRuleProperty {
    /**
    * The object key name prefix or suffix identifying one or more objects to which the filtering rule applies. The maximum length is 1,024 characters. Overlapping prefixes and suffixes are not supported. For more information, see [Configuring Event Notifications](https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html) in the *Amazon S3 User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#name CcBucket#name}
    */
    readonly name?: string;
    /**
    * The value that the filter searches for in object key names.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#value CcBucket#value}
    */
    readonly value?: string;
}
export class FilterRulePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): FilterRuleProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: FilterRuleProperty | cdktn.IResolvable | undefined) {
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

export class FilterRulePropertyList extends cdktn.ComplexList {
    public internalValue? : FilterRuleProperty[] | cdktn.IResolvable

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
    public get(index: number): FilterRulePropertyOutputReference {
        return new FilterRulePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface S3KeyFilterProperty {
    /**
    * A list of containers for the key-value pair that defines the criteria for the filter rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#rules CcBucket#rules}
    */
    readonly rules?: FilterRuleProperty[] | cdktn.IResolvable;
}
export class S3KeyFilterPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3KeyFilterProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: S3KeyFilterProperty | cdktn.IResolvable | undefined) {
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
    private _rules = new FilterRulePropertyList(this, "rules", true);
    public get rules() {
        return this._rules;
    }
    public putRules(value: FilterRuleProperty[] | cdktn.IResolvable) {
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
export interface NotificationFilterProperty {
    /**
    * A container for object key name prefix and suffix filtering rules.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#s3_key CcBucket#s3_key}
    */
    readonly s3Key?: S3KeyFilterProperty;
}
export class NotificationFilterPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): NotificationFilterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._s3Key?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Key = this._s3Key?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NotificationFilterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._s3Key.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._s3Key.internalValue = value.s3Key;
        }
    }

    // s3_key - computed: true, optional: true, required: false
    private _s3Key = new S3KeyFilterPropertyOutputReference(this, "s3_key");
    public get s3Key() {
        return this._s3Key;
    }
    public putS3Key(value: S3KeyFilterProperty) {
        this._s3Key.internalValue = value;
    }
    public resetS3Key() {
        this._s3Key.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3KeyInput() {
        return this._s3Key.internalValue;
    }
}
export interface LambdaConfigurationProperty {
    /**
    * The Amazon S3 bucket event for which to invoke the LAMlong function. For more information, see [Supported Event Types](https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html) in the *Amazon S3 User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#event CcBucket#event}
    */
    readonly event?: string;
    /**
    * The filtering rules that determine which objects invoke the AWS Lambda function. For example, you can create a filter so that only image files with a ``.jpg`` extension invoke the function when they are added to the Amazon S3 bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#filter CcBucket#filter}
    */
    readonly filter?: NotificationFilterProperty;
    /**
    * The Amazon Resource Name (ARN) of the LAMlong function that Amazon S3 invokes when the specified event type occurs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#function CcBucket#function}
    */
    readonly function?: string;
}
export class LambdaConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): LambdaConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._event !== undefined) {
            hasAnyValues = true;
            internalValueResult.event = this._event;
        }
        if (this._filter?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.filter = this._filter?.internalValue;
        }
        if (this._function !== undefined) {
            hasAnyValues = true;
            internalValueResult.function = this._function;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LambdaConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._event = undefined;
            this._filter.internalValue = undefined;
            this._function = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._event = value.event;
            this._filter.internalValue = value.filter;
            this._function = value.function;
        }
    }

    // event - computed: true, optional: true, required: false
    private _event?: string; 
    public get event() {
        return this.getStringAttribute('event');
    }
    public set event(value: string) {
        this._event = value;
    }
    public resetEvent() {
        this._event = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventInput() {
        return this._event;
    }

    // filter - computed: true, optional: true, required: false
    private _filter = new NotificationFilterPropertyOutputReference(this, "filter");
    public get filter() {
        return this._filter;
    }
    public putFilter(value: NotificationFilterProperty) {
        this._filter.internalValue = value;
    }
    public resetFilter() {
        this._filter.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterInput() {
        return this._filter.internalValue;
    }

    // function - computed: true, optional: true, required: false
    private _function?: string; 
    public get function() {
        return this.getStringAttribute('function');
    }
    public set function(value: string) {
        this._function = value;
    }
    public resetFunction() {
        this._function = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get functionInput() {
        return this._function;
    }
}

export class LambdaConfigurationPropertyList extends cdktn.ComplexList {
    public internalValue? : LambdaConfigurationProperty[] | cdktn.IResolvable

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
    public get(index: number): LambdaConfigurationPropertyOutputReference {
        return new LambdaConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface NotificationConfigurationQueueConfigurationsFilterS3KeyRulesProperty {
    /**
    * The object key name prefix or suffix identifying one or more objects to which the filtering rule applies. The maximum length is 1,024 characters. Overlapping prefixes and suffixes are not supported. For more information, see [Configuring Event Notifications](https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html) in the *Amazon S3 User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#name CcBucket#name}
    */
    readonly name?: string;
    /**
    * The value that the filter searches for in object key names.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#value CcBucket#value}
    */
    readonly value?: string;
}
export class NotificationConfigurationQueueConfigurationsFilterS3KeyRulesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): NotificationConfigurationQueueConfigurationsFilterS3KeyRulesProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: NotificationConfigurationQueueConfigurationsFilterS3KeyRulesProperty | cdktn.IResolvable | undefined) {
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

export class NotificationConfigurationQueueConfigurationsFilterS3KeyRulesPropertyList extends cdktn.ComplexList {
    public internalValue? : NotificationConfigurationQueueConfigurationsFilterS3KeyRulesProperty[] | cdktn.IResolvable

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
    public get(index: number): NotificationConfigurationQueueConfigurationsFilterS3KeyRulesPropertyOutputReference {
        return new NotificationConfigurationQueueConfigurationsFilterS3KeyRulesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface NotificationConfigurationQueueConfigurationsFilterS3KeyProperty {
    /**
    * A list of containers for the key-value pair that defines the criteria for the filter rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#rules CcBucket#rules}
    */
    readonly rules?: NotificationConfigurationQueueConfigurationsFilterS3KeyRulesProperty[] | cdktn.IResolvable;
}
export class NotificationConfigurationQueueConfigurationsFilterS3KeyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): NotificationConfigurationQueueConfigurationsFilterS3KeyProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: NotificationConfigurationQueueConfigurationsFilterS3KeyProperty | cdktn.IResolvable | undefined) {
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
    private _rules = new NotificationConfigurationQueueConfigurationsFilterS3KeyRulesPropertyList(this, "rules", true);
    public get rules() {
        return this._rules;
    }
    public putRules(value: NotificationConfigurationQueueConfigurationsFilterS3KeyRulesProperty[] | cdktn.IResolvable) {
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
export interface NotificationConfigurationQueueConfigurationsFilterProperty {
    /**
    * A container for object key name prefix and suffix filtering rules.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#s3_key CcBucket#s3_key}
    */
    readonly s3Key?: NotificationConfigurationQueueConfigurationsFilterS3KeyProperty;
}
export class NotificationConfigurationQueueConfigurationsFilterPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): NotificationConfigurationQueueConfigurationsFilterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._s3Key?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Key = this._s3Key?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NotificationConfigurationQueueConfigurationsFilterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._s3Key.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._s3Key.internalValue = value.s3Key;
        }
    }

    // s3_key - computed: true, optional: true, required: false
    private _s3Key = new NotificationConfigurationQueueConfigurationsFilterS3KeyPropertyOutputReference(this, "s3_key");
    public get s3Key() {
        return this._s3Key;
    }
    public putS3Key(value: NotificationConfigurationQueueConfigurationsFilterS3KeyProperty) {
        this._s3Key.internalValue = value;
    }
    public resetS3Key() {
        this._s3Key.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3KeyInput() {
        return this._s3Key.internalValue;
    }
}
export interface QueueConfigurationProperty {
    /**
    * The Amazon S3 bucket event about which you want to publish messages to Amazon SQS. For more information, see [Supported Event Types](https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html) in the *Amazon S3 User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#event CcBucket#event}
    */
    readonly event?: string;
    /**
    * The filtering rules that determine which objects trigger notifications. For example, you can create a filter so that Amazon S3 sends notifications only when image files with a ``.jpg`` extension are added to the bucket. For more information, see [Configuring event notifications using object key name filtering](https://docs.aws.amazon.com/AmazonS3/latest/user-guide/notification-how-to-filtering.html) in the *Amazon S3 User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#filter CcBucket#filter}
    */
    readonly filter?: NotificationConfigurationQueueConfigurationsFilterProperty;
    /**
    * The Amazon Resource Name (ARN) of the Amazon SQS queue to which Amazon S3 publishes a message when it detects events of the specified type. FIFO queues are not allowed when enabling an SQS queue as the event notification destination.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#queue CcBucket#queue}
    */
    readonly queue?: string;
}
export class QueueConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): QueueConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._event !== undefined) {
            hasAnyValues = true;
            internalValueResult.event = this._event;
        }
        if (this._filter?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.filter = this._filter?.internalValue;
        }
        if (this._queue !== undefined) {
            hasAnyValues = true;
            internalValueResult.queue = this._queue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: QueueConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._event = undefined;
            this._filter.internalValue = undefined;
            this._queue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._event = value.event;
            this._filter.internalValue = value.filter;
            this._queue = value.queue;
        }
    }

    // event - computed: true, optional: true, required: false
    private _event?: string; 
    public get event() {
        return this.getStringAttribute('event');
    }
    public set event(value: string) {
        this._event = value;
    }
    public resetEvent() {
        this._event = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventInput() {
        return this._event;
    }

    // filter - computed: true, optional: true, required: false
    private _filter = new NotificationConfigurationQueueConfigurationsFilterPropertyOutputReference(this, "filter");
    public get filter() {
        return this._filter;
    }
    public putFilter(value: NotificationConfigurationQueueConfigurationsFilterProperty) {
        this._filter.internalValue = value;
    }
    public resetFilter() {
        this._filter.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterInput() {
        return this._filter.internalValue;
    }

    // queue - computed: true, optional: true, required: false
    private _queue?: string; 
    public get queue() {
        return this.getStringAttribute('queue');
    }
    public set queue(value: string) {
        this._queue = value;
    }
    public resetQueue() {
        this._queue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get queueInput() {
        return this._queue;
    }
}

export class QueueConfigurationPropertyList extends cdktn.ComplexList {
    public internalValue? : QueueConfigurationProperty[] | cdktn.IResolvable

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
    public get(index: number): QueueConfigurationPropertyOutputReference {
        return new QueueConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface NotificationConfigurationTopicConfigurationsFilterS3KeyRulesProperty {
    /**
    * The object key name prefix or suffix identifying one or more objects to which the filtering rule applies. The maximum length is 1,024 characters. Overlapping prefixes and suffixes are not supported. For more information, see [Configuring Event Notifications](https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html) in the *Amazon S3 User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#name CcBucket#name}
    */
    readonly name?: string;
    /**
    * The value that the filter searches for in object key names.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#value CcBucket#value}
    */
    readonly value?: string;
}
export class NotificationConfigurationTopicConfigurationsFilterS3KeyRulesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): NotificationConfigurationTopicConfigurationsFilterS3KeyRulesProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: NotificationConfigurationTopicConfigurationsFilterS3KeyRulesProperty | cdktn.IResolvable | undefined) {
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

export class NotificationConfigurationTopicConfigurationsFilterS3KeyRulesPropertyList extends cdktn.ComplexList {
    public internalValue? : NotificationConfigurationTopicConfigurationsFilterS3KeyRulesProperty[] | cdktn.IResolvable

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
    public get(index: number): NotificationConfigurationTopicConfigurationsFilterS3KeyRulesPropertyOutputReference {
        return new NotificationConfigurationTopicConfigurationsFilterS3KeyRulesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface NotificationConfigurationTopicConfigurationsFilterS3KeyProperty {
    /**
    * A list of containers for the key-value pair that defines the criteria for the filter rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#rules CcBucket#rules}
    */
    readonly rules?: NotificationConfigurationTopicConfigurationsFilterS3KeyRulesProperty[] | cdktn.IResolvable;
}
export class NotificationConfigurationTopicConfigurationsFilterS3KeyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): NotificationConfigurationTopicConfigurationsFilterS3KeyProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: NotificationConfigurationTopicConfigurationsFilterS3KeyProperty | cdktn.IResolvable | undefined) {
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
    private _rules = new NotificationConfigurationTopicConfigurationsFilterS3KeyRulesPropertyList(this, "rules", true);
    public get rules() {
        return this._rules;
    }
    public putRules(value: NotificationConfigurationTopicConfigurationsFilterS3KeyRulesProperty[] | cdktn.IResolvable) {
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
export interface NotificationConfigurationTopicConfigurationsFilterProperty {
    /**
    * A container for object key name prefix and suffix filtering rules.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#s3_key CcBucket#s3_key}
    */
    readonly s3Key?: NotificationConfigurationTopicConfigurationsFilterS3KeyProperty;
}
export class NotificationConfigurationTopicConfigurationsFilterPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): NotificationConfigurationTopicConfigurationsFilterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._s3Key?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Key = this._s3Key?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NotificationConfigurationTopicConfigurationsFilterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._s3Key.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._s3Key.internalValue = value.s3Key;
        }
    }

    // s3_key - computed: true, optional: true, required: false
    private _s3Key = new NotificationConfigurationTopicConfigurationsFilterS3KeyPropertyOutputReference(this, "s3_key");
    public get s3Key() {
        return this._s3Key;
    }
    public putS3Key(value: NotificationConfigurationTopicConfigurationsFilterS3KeyProperty) {
        this._s3Key.internalValue = value;
    }
    public resetS3Key() {
        this._s3Key.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3KeyInput() {
        return this._s3Key.internalValue;
    }
}
export interface TopicConfigurationProperty {
    /**
    * The Amazon S3 bucket event about which to send notifications. For more information, see [Supported Event Types](https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html) in the *Amazon S3 User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#event CcBucket#event}
    */
    readonly event?: string;
    /**
    * The filtering rules that determine for which objects to send notifications. For example, you can create a filter so that Amazon S3 sends notifications only when image files with a ``.jpg`` extension are added to the bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#filter CcBucket#filter}
    */
    readonly filter?: NotificationConfigurationTopicConfigurationsFilterProperty;
    /**
    * The Amazon Resource Name (ARN) of the Amazon SNS topic to which Amazon S3 publishes a message when it detects events of the specified type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#topic CcBucket#topic}
    */
    readonly topic?: string;
}
export class TopicConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TopicConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._event !== undefined) {
            hasAnyValues = true;
            internalValueResult.event = this._event;
        }
        if (this._filter?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.filter = this._filter?.internalValue;
        }
        if (this._topic !== undefined) {
            hasAnyValues = true;
            internalValueResult.topic = this._topic;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TopicConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._event = undefined;
            this._filter.internalValue = undefined;
            this._topic = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._event = value.event;
            this._filter.internalValue = value.filter;
            this._topic = value.topic;
        }
    }

    // event - computed: true, optional: true, required: false
    private _event?: string; 
    public get event() {
        return this.getStringAttribute('event');
    }
    public set event(value: string) {
        this._event = value;
    }
    public resetEvent() {
        this._event = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventInput() {
        return this._event;
    }

    // filter - computed: true, optional: true, required: false
    private _filter = new NotificationConfigurationTopicConfigurationsFilterPropertyOutputReference(this, "filter");
    public get filter() {
        return this._filter;
    }
    public putFilter(value: NotificationConfigurationTopicConfigurationsFilterProperty) {
        this._filter.internalValue = value;
    }
    public resetFilter() {
        this._filter.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterInput() {
        return this._filter.internalValue;
    }

    // topic - computed: true, optional: true, required: false
    private _topic?: string; 
    public get topic() {
        return this.getStringAttribute('topic');
    }
    public set topic(value: string) {
        this._topic = value;
    }
    public resetTopic() {
        this._topic = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get topicInput() {
        return this._topic;
    }
}

export class TopicConfigurationPropertyList extends cdktn.ComplexList {
    public internalValue? : TopicConfigurationProperty[] | cdktn.IResolvable

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
    public get(index: number): TopicConfigurationPropertyOutputReference {
        return new TopicConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface NotificationConfigurationProperty {
    /**
    * Enables delivery of events to Amazon EventBridge.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#event_bridge_configuration CcBucket#event_bridge_configuration}
    */
    readonly eventBridgeConfiguration?: EventBridgeConfigurationProperty;
    /**
    * Describes the LAMlong functions to invoke and the events for which to invoke them.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#lambda_configurations CcBucket#lambda_configurations}
    */
    readonly lambdaConfigurations?: LambdaConfigurationProperty[] | cdktn.IResolvable;
    /**
    * The Amazon Simple Queue Service queues to publish messages to and the events for which to publish messages.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#queue_configurations CcBucket#queue_configurations}
    */
    readonly queueConfigurations?: QueueConfigurationProperty[] | cdktn.IResolvable;
    /**
    * The topic to which notifications are sent and the events for which notifications are generated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#topic_configurations CcBucket#topic_configurations}
    */
    readonly topicConfigurations?: TopicConfigurationProperty[] | cdktn.IResolvable;
}
export class NotificationConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): NotificationConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._eventBridgeConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.eventBridgeConfiguration = this._eventBridgeConfiguration?.internalValue;
        }
        if (this._lambdaConfigurations?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.lambdaConfigurations = this._lambdaConfigurations?.internalValue;
        }
        if (this._queueConfigurations?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.queueConfigurations = this._queueConfigurations?.internalValue;
        }
        if (this._topicConfigurations?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.topicConfigurations = this._topicConfigurations?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NotificationConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._eventBridgeConfiguration.internalValue = undefined;
            this._lambdaConfigurations.internalValue = undefined;
            this._queueConfigurations.internalValue = undefined;
            this._topicConfigurations.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._eventBridgeConfiguration.internalValue = value.eventBridgeConfiguration;
            this._lambdaConfigurations.internalValue = value.lambdaConfigurations;
            this._queueConfigurations.internalValue = value.queueConfigurations;
            this._topicConfigurations.internalValue = value.topicConfigurations;
        }
    }

    // event_bridge_configuration - computed: true, optional: true, required: false
    private _eventBridgeConfiguration = new EventBridgeConfigurationPropertyOutputReference(this, "event_bridge_configuration");
    public get eventBridgeConfiguration() {
        return this._eventBridgeConfiguration;
    }
    public putEventBridgeConfiguration(value: EventBridgeConfigurationProperty) {
        this._eventBridgeConfiguration.internalValue = value;
    }
    public resetEventBridgeConfiguration() {
        this._eventBridgeConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventBridgeConfigurationInput() {
        return this._eventBridgeConfiguration.internalValue;
    }

    // lambda_configurations - computed: true, optional: true, required: false
    private _lambdaConfigurations = new LambdaConfigurationPropertyList(this, "lambda_configurations", false);
    public get lambdaConfigurations() {
        return this._lambdaConfigurations;
    }
    public putLambdaConfigurations(value: LambdaConfigurationProperty[] | cdktn.IResolvable) {
        this._lambdaConfigurations.internalValue = value;
    }
    public resetLambdaConfigurations() {
        this._lambdaConfigurations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lambdaConfigurationsInput() {
        return this._lambdaConfigurations.internalValue;
    }

    // queue_configurations - computed: true, optional: true, required: false
    private _queueConfigurations = new QueueConfigurationPropertyList(this, "queue_configurations", false);
    public get queueConfigurations() {
        return this._queueConfigurations;
    }
    public putQueueConfigurations(value: QueueConfigurationProperty[] | cdktn.IResolvable) {
        this._queueConfigurations.internalValue = value;
    }
    public resetQueueConfigurations() {
        this._queueConfigurations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get queueConfigurationsInput() {
        return this._queueConfigurations.internalValue;
    }

    // topic_configurations - computed: true, optional: true, required: false
    private _topicConfigurations = new TopicConfigurationPropertyList(this, "topic_configurations", false);
    public get topicConfigurations() {
        return this._topicConfigurations;
    }
    public putTopicConfigurations(value: TopicConfigurationProperty[] | cdktn.IResolvable) {
        this._topicConfigurations.internalValue = value;
    }
    public resetTopicConfigurations() {
        this._topicConfigurations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get topicConfigurationsInput() {
        return this._topicConfigurations.internalValue;
    }
}
export interface DefaultRetentionProperty {
    /**
    * The number of days that you want to specify for the default retention period. If Object Lock is turned on, you must specify ``Mode`` and specify either ``Days`` or ``Years``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#days CcBucket#days}
    */
    readonly days?: number;
    /**
    * The default Object Lock retention mode you want to apply to new objects placed in the specified bucket. If Object Lock is turned on, you must specify ``Mode`` and specify either ``Days`` or ``Years``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#mode CcBucket#mode}
    */
    readonly mode?: string;
    /**
    * The number of years that you want to specify for the default retention period. If Object Lock is turned on, you must specify ``Mode`` and specify either ``Days`` or ``Years``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#years CcBucket#years}
    */
    readonly years?: number;
}
export class DefaultRetentionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DefaultRetentionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._days !== undefined) {
            hasAnyValues = true;
            internalValueResult.days = this._days;
        }
        if (this._mode !== undefined) {
            hasAnyValues = true;
            internalValueResult.mode = this._mode;
        }
        if (this._years !== undefined) {
            hasAnyValues = true;
            internalValueResult.years = this._years;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DefaultRetentionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._days = undefined;
            this._mode = undefined;
            this._years = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._days = value.days;
            this._mode = value.mode;
            this._years = value.years;
        }
    }

    // days - computed: true, optional: true, required: false
    private _days?: number; 
    public get days() {
        return this.getNumberAttribute('days');
    }
    public set days(value: number) {
        this._days = value;
    }
    public resetDays() {
        this._days = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get daysInput() {
        return this._days;
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

    // years - computed: true, optional: true, required: false
    private _years?: number; 
    public get years() {
        return this.getNumberAttribute('years');
    }
    public set years(value: number) {
        this._years = value;
    }
    public resetYears() {
        this._years = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get yearsInput() {
        return this._years;
    }
}
export interface ObjectLockRuleProperty {
    /**
    * The default Object Lock retention mode and period that you want to apply to new objects placed in the specified bucket. If Object Lock is turned on, bucket settings require both ``Mode`` and a period of either ``Days`` or ``Years``. You cannot specify ``Days`` and ``Years`` at the same time. For more information about allowable values for mode and period, see [DefaultRetention](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-defaultretention.html).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#default_retention CcBucket#default_retention}
    */
    readonly defaultRetention?: DefaultRetentionProperty;
}
export class ObjectLockRulePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ObjectLockRuleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._defaultRetention?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultRetention = this._defaultRetention?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ObjectLockRuleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._defaultRetention.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._defaultRetention.internalValue = value.defaultRetention;
        }
    }

    // default_retention - computed: true, optional: true, required: false
    private _defaultRetention = new DefaultRetentionPropertyOutputReference(this, "default_retention");
    public get defaultRetention() {
        return this._defaultRetention;
    }
    public putDefaultRetention(value: DefaultRetentionProperty) {
        this._defaultRetention.internalValue = value;
    }
    public resetDefaultRetention() {
        this._defaultRetention.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultRetentionInput() {
        return this._defaultRetention.internalValue;
    }
}
export interface ObjectLockConfigurationProperty {
    /**
    * Indicates whether this bucket has an Object Lock configuration enabled. Enable ``ObjectLockEnabled`` when you apply ``ObjectLockConfiguration`` to a bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#object_lock_enabled CcBucket#object_lock_enabled}
    */
    readonly objectLockEnabled?: string;
    /**
    * Specifies the Object Lock rule for the specified object. Enable this rule when you apply ``ObjectLockConfiguration`` to a bucket. If Object Lock is turned on, bucket settings require both ``Mode`` and a period of either ``Days`` or ``Years``. You cannot specify ``Days`` and ``Years`` at the same time. For more information, see [ObjectLockRule](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-objectlockrule.html) and [DefaultRetention](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-defaultretention.html).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#rule CcBucket#rule}
    */
    readonly rule?: ObjectLockRuleProperty;
}
export class ObjectLockConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ObjectLockConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._objectLockEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.objectLockEnabled = this._objectLockEnabled;
        }
        if (this._rule?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.rule = this._rule?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ObjectLockConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._objectLockEnabled = undefined;
            this._rule.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._objectLockEnabled = value.objectLockEnabled;
            this._rule.internalValue = value.rule;
        }
    }

    // object_lock_enabled - computed: true, optional: true, required: false
    private _objectLockEnabled?: string; 
    public get objectLockEnabled() {
        return this.getStringAttribute('object_lock_enabled');
    }
    public set objectLockEnabled(value: string) {
        this._objectLockEnabled = value;
    }
    public resetObjectLockEnabled() {
        this._objectLockEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get objectLockEnabledInput() {
        return this._objectLockEnabled;
    }

    // rule - computed: true, optional: true, required: false
    private _rule = new ObjectLockRulePropertyOutputReference(this, "rule");
    public get rule() {
        return this._rule;
    }
    public putRule(value: ObjectLockRuleProperty) {
        this._rule.internalValue = value;
    }
    public resetRule() {
        this._rule.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ruleInput() {
        return this._rule.internalValue;
    }
}
export interface OwnershipControlsRuleProperty {
    /**
    * Specifies an object ownership rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#object_ownership CcBucket#object_ownership}
    */
    readonly objectOwnership?: string;
}
export class OwnershipControlsRulePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): OwnershipControlsRuleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._objectOwnership !== undefined) {
            hasAnyValues = true;
            internalValueResult.objectOwnership = this._objectOwnership;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OwnershipControlsRuleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._objectOwnership = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._objectOwnership = value.objectOwnership;
        }
    }

    // object_ownership - computed: true, optional: true, required: false
    private _objectOwnership?: string; 
    public get objectOwnership() {
        return this.getStringAttribute('object_ownership');
    }
    public set objectOwnership(value: string) {
        this._objectOwnership = value;
    }
    public resetObjectOwnership() {
        this._objectOwnership = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get objectOwnershipInput() {
        return this._objectOwnership;
    }
}

export class OwnershipControlsRulePropertyList extends cdktn.ComplexList {
    public internalValue? : OwnershipControlsRuleProperty[] | cdktn.IResolvable

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
    public get(index: number): OwnershipControlsRulePropertyOutputReference {
        return new OwnershipControlsRulePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface OwnershipControlsProperty {
    /**
    * Specifies the container element for Object Ownership rules.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#rules CcBucket#rules}
    */
    readonly rules?: OwnershipControlsRuleProperty[] | cdktn.IResolvable;
}
export class OwnershipControlsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OwnershipControlsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: OwnershipControlsProperty | cdktn.IResolvable | undefined) {
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
    private _rules = new OwnershipControlsRulePropertyList(this, "rules", false);
    public get rules() {
        return this._rules;
    }
    public putRules(value: OwnershipControlsRuleProperty[] | cdktn.IResolvable) {
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
export interface PublicAccessBlockConfigurationProperty {
    /**
    * Specifies whether Amazon S3 should block public access control lists (ACLs) for this bucket and objects in this bucket. Setting this element to ``TRUE`` causes the following behavior:
    *   +  PUT Bucket ACL and PUT Object ACL calls fail if the specified ACL is public.
    *   +  PUT Object calls fail if the request includes a public ACL.
    *   +  PUT Bucket calls fail if the request includes a public ACL.
    *   
    *  Enabling this setting doesn't affect existing policies or ACLs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#block_public_acls CcBucket#block_public_acls}
    */
    readonly blockPublicAcls?: boolean | cdktn.IResolvable;
    /**
    * Specifies whether Amazon S3 should block public bucket policies for this bucket. Setting this element to ``TRUE`` causes Amazon S3 to reject calls to PUT Bucket policy if the specified bucket policy allows public access. 
    *  Enabling this setting doesn't affect existing bucket policies.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#block_public_policy CcBucket#block_public_policy}
    */
    readonly blockPublicPolicy?: boolean | cdktn.IResolvable;
    /**
    * Specifies whether Amazon S3 should ignore public ACLs for this bucket and objects in this bucket. Setting this element to ``TRUE`` causes Amazon S3 to ignore all public ACLs on this bucket and objects in this bucket.
    *  Enabling this setting doesn't affect the persistence of any existing ACLs and doesn't prevent new public ACLs from being set.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#ignore_public_acls CcBucket#ignore_public_acls}
    */
    readonly ignorePublicAcls?: boolean | cdktn.IResolvable;
    /**
    * Specifies whether Amazon S3 should restrict public bucket policies for this bucket. Setting this element to ``TRUE`` restricts access to this bucket to only AWS-service principals and authorized users within this account if the bucket has a public policy.
    *  Enabling this setting doesn't affect previously stored bucket policies, except that public and cross-account access within any public bucket policy, including non-public delegation to specific accounts, is blocked.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#restrict_public_buckets CcBucket#restrict_public_buckets}
    */
    readonly restrictPublicBuckets?: boolean | cdktn.IResolvable;
}
export class PublicAccessBlockConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PublicAccessBlockConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._blockPublicAcls !== undefined) {
            hasAnyValues = true;
            internalValueResult.blockPublicAcls = this._blockPublicAcls;
        }
        if (this._blockPublicPolicy !== undefined) {
            hasAnyValues = true;
            internalValueResult.blockPublicPolicy = this._blockPublicPolicy;
        }
        if (this._ignorePublicAcls !== undefined) {
            hasAnyValues = true;
            internalValueResult.ignorePublicAcls = this._ignorePublicAcls;
        }
        if (this._restrictPublicBuckets !== undefined) {
            hasAnyValues = true;
            internalValueResult.restrictPublicBuckets = this._restrictPublicBuckets;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PublicAccessBlockConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._blockPublicAcls = undefined;
            this._blockPublicPolicy = undefined;
            this._ignorePublicAcls = undefined;
            this._restrictPublicBuckets = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._blockPublicAcls = value.blockPublicAcls;
            this._blockPublicPolicy = value.blockPublicPolicy;
            this._ignorePublicAcls = value.ignorePublicAcls;
            this._restrictPublicBuckets = value.restrictPublicBuckets;
        }
    }

    // block_public_acls - computed: true, optional: true, required: false
    private _blockPublicAcls?: boolean | cdktn.IResolvable; 
    public get blockPublicAcls() {
        return this.getBooleanAttribute('block_public_acls');
    }
    public set blockPublicAcls(value: boolean | cdktn.IResolvable) {
        this._blockPublicAcls = value;
    }
    public resetBlockPublicAcls() {
        this._blockPublicAcls = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get blockPublicAclsInput() {
        return this._blockPublicAcls;
    }

    // block_public_policy - computed: true, optional: true, required: false
    private _blockPublicPolicy?: boolean | cdktn.IResolvable; 
    public get blockPublicPolicy() {
        return this.getBooleanAttribute('block_public_policy');
    }
    public set blockPublicPolicy(value: boolean | cdktn.IResolvable) {
        this._blockPublicPolicy = value;
    }
    public resetBlockPublicPolicy() {
        this._blockPublicPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get blockPublicPolicyInput() {
        return this._blockPublicPolicy;
    }

    // ignore_public_acls - computed: true, optional: true, required: false
    private _ignorePublicAcls?: boolean | cdktn.IResolvable; 
    public get ignorePublicAcls() {
        return this.getBooleanAttribute('ignore_public_acls');
    }
    public set ignorePublicAcls(value: boolean | cdktn.IResolvable) {
        this._ignorePublicAcls = value;
    }
    public resetIgnorePublicAcls() {
        this._ignorePublicAcls = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ignorePublicAclsInput() {
        return this._ignorePublicAcls;
    }

    // restrict_public_buckets - computed: true, optional: true, required: false
    private _restrictPublicBuckets?: boolean | cdktn.IResolvable; 
    public get restrictPublicBuckets() {
        return this.getBooleanAttribute('restrict_public_buckets');
    }
    public set restrictPublicBuckets(value: boolean | cdktn.IResolvable) {
        this._restrictPublicBuckets = value;
    }
    public resetRestrictPublicBuckets() {
        this._restrictPublicBuckets = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get restrictPublicBucketsInput() {
        return this._restrictPublicBuckets;
    }
}
export interface DeleteMarkerReplicationProperty {
    /**
    * Indicates whether to replicate delete markers. Disabled by default.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#status CcBucket#status}
    */
    readonly status?: string;
}
export class DeleteMarkerReplicationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DeleteMarkerReplicationProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: DeleteMarkerReplicationProperty | cdktn.IResolvable | undefined) {
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
export interface AccessControlTranslationProperty {
    /**
    * Specifies the replica ownership. For default and valid values, see [PUT bucket replication](https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTreplication.html) in the *Amazon S3 API Reference*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#owner CcBucket#owner}
    */
    readonly owner?: string;
}
export class AccessControlTranslationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AccessControlTranslationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._owner !== undefined) {
            hasAnyValues = true;
            internalValueResult.owner = this._owner;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AccessControlTranslationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._owner = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._owner = value.owner;
        }
    }

    // owner - computed: true, optional: true, required: false
    private _owner?: string; 
    public get owner() {
        return this.getStringAttribute('owner');
    }
    public set owner(value: string) {
        this._owner = value;
    }
    public resetOwner() {
        this._owner = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ownerInput() {
        return this._owner;
    }
}
export interface EncryptionConfigurationProperty {
    /**
    * Specifies the ID (Key ARN or Alias ARN) of the customer managed AWS KMS key stored in AWS Key Management Service (KMS) for the destination bucket. Amazon S3 uses this key to encrypt replica objects. Amazon S3 only supports symmetric encryption KMS keys. For more information, see [Asymmetric keys in KMS](https://docs.aws.amazon.com//kms/latest/developerguide/symmetric-asymmetric.html) in the *Key Management Service Developer Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#replica_kms_key_id CcBucket#replica_kms_key_id}
    */
    readonly replicaKmsKeyId?: string;
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
        if (this._replicaKmsKeyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.replicaKmsKeyId = this._replicaKmsKeyId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EncryptionConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._replicaKmsKeyId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._replicaKmsKeyId = value.replicaKmsKeyId;
        }
    }

    // replica_kms_key_id - computed: true, optional: true, required: false
    private _replicaKmsKeyId?: string; 
    public get replicaKmsKeyId() {
        return this.getStringAttribute('replica_kms_key_id');
    }
    public set replicaKmsKeyId(value: string) {
        this._replicaKmsKeyId = value;
    }
    public resetReplicaKmsKeyId() {
        this._replicaKmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get replicaKmsKeyIdInput() {
        return this._replicaKmsKeyId;
    }
}
export interface ReplicationTimeValueProperty {
    /**
    * Contains an integer specifying time in minutes. 
    *   Valid value: 15
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#minutes CcBucket#minutes}
    */
    readonly minutes?: number;
}
export class ReplicationTimeValuePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ReplicationTimeValueProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._minutes !== undefined) {
            hasAnyValues = true;
            internalValueResult.minutes = this._minutes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ReplicationTimeValueProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._minutes = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._minutes = value.minutes;
        }
    }

    // minutes - computed: true, optional: true, required: false
    private _minutes?: number; 
    public get minutes() {
        return this.getNumberAttribute('minutes');
    }
    public set minutes(value: number) {
        this._minutes = value;
    }
    public resetMinutes() {
        this._minutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minutesInput() {
        return this._minutes;
    }
}
export interface MetricsProperty {
    /**
    * A container specifying the time threshold for emitting the ``s3:Replication:OperationMissedThreshold`` event.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#event_threshold CcBucket#event_threshold}
    */
    readonly eventThreshold?: ReplicationTimeValueProperty;
    /**
    * Specifies whether the replication metrics are enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#status CcBucket#status}
    */
    readonly status?: string;
}
export class MetricsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MetricsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._eventThreshold?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.eventThreshold = this._eventThreshold?.internalValue;
        }
        if (this._status !== undefined) {
            hasAnyValues = true;
            internalValueResult.status = this._status;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MetricsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._eventThreshold.internalValue = undefined;
            this._status = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._eventThreshold.internalValue = value.eventThreshold;
            this._status = value.status;
        }
    }

    // event_threshold - computed: true, optional: true, required: false
    private _eventThreshold = new ReplicationTimeValuePropertyOutputReference(this, "event_threshold");
    public get eventThreshold() {
        return this._eventThreshold;
    }
    public putEventThreshold(value: ReplicationTimeValueProperty) {
        this._eventThreshold.internalValue = value;
    }
    public resetEventThreshold() {
        this._eventThreshold.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventThresholdInput() {
        return this._eventThreshold.internalValue;
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
export interface TimeProperty {
    /**
    * Contains an integer specifying time in minutes. 
    *   Valid value: 15
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#minutes CcBucket#minutes}
    */
    readonly minutes?: number;
}
export class TimePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TimeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._minutes !== undefined) {
            hasAnyValues = true;
            internalValueResult.minutes = this._minutes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TimeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._minutes = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._minutes = value.minutes;
        }
    }

    // minutes - computed: true, optional: true, required: false
    private _minutes?: number; 
    public get minutes() {
        return this.getNumberAttribute('minutes');
    }
    public set minutes(value: number) {
        this._minutes = value;
    }
    public resetMinutes() {
        this._minutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minutesInput() {
        return this._minutes;
    }
}
export interface ReplicationTimeProperty {
    /**
    * Specifies whether the replication time is enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#status CcBucket#status}
    */
    readonly status?: string;
    /**
    * A container specifying the time by which replication should be complete for all objects and operations on objects.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#time CcBucket#time}
    */
    readonly time?: TimeProperty;
}
export class ReplicationTimePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ReplicationTimeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._status !== undefined) {
            hasAnyValues = true;
            internalValueResult.status = this._status;
        }
        if (this._time?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.time = this._time?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ReplicationTimeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._status = undefined;
            this._time.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._status = value.status;
            this._time.internalValue = value.time;
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

    // time - computed: true, optional: true, required: false
    private _time = new TimePropertyOutputReference(this, "time");
    public get time() {
        return this._time;
    }
    public putTime(value: TimeProperty) {
        this._time.internalValue = value;
    }
    public resetTime() {
        this._time.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeInput() {
        return this._time.internalValue;
    }
}
export interface ReplicationDestinationProperty {
    /**
    * Specify this only in a cross-account scenario (where source and destination bucket owners are not the same), and you want to change replica ownership to the AWS-account that owns the destination bucket. If this is not specified in the replication configuration, the replicas are owned by same AWS-account that owns the source object.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#access_control_translation CcBucket#access_control_translation}
    */
    readonly accessControlTranslation?: AccessControlTranslationProperty;
    /**
    * Destination bucket owner account ID. In a cross-account scenario, if you direct Amazon S3 to change replica ownership to the AWS-account that owns the destination bucket by specifying the ``AccessControlTranslation`` property, this is the account ID of the destination bucket owner. For more information, see [Cross-Region Replication Additional Configuration: Change Replica Owner](https://docs.aws.amazon.com/AmazonS3/latest/dev/crr-change-owner.html) in the *Amazon S3 User Guide*.
    *  If you specify the ``AccessControlTranslation`` property, the ``Account`` property is required.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#account CcBucket#account}
    */
    readonly account?: string;
    /**
    * The Amazon Resource Name (ARN) of the bucket where you want Amazon S3 to store the results.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#bucket CcBucket#bucket}
    */
    readonly bucket?: string;
    /**
    * Specifies encryption-related information.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#encryption_configuration CcBucket#encryption_configuration}
    */
    readonly encryptionConfiguration?: EncryptionConfigurationProperty;
    /**
    * A container specifying replication metrics-related settings enabling replication metrics and events.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#metrics CcBucket#metrics}
    */
    readonly metrics?: MetricsProperty;
    /**
    * A container specifying S3 Replication Time Control (S3 RTC), including whether S3 RTC is enabled and the time when all objects and operations on objects must be replicated. Must be specified together with a ``Metrics`` block.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#replication_time CcBucket#replication_time}
    */
    readonly replicationTime?: ReplicationTimeProperty;
    /**
    * The storage class to use when replicating objects, such as S3 Standard or reduced redundancy. By default, Amazon S3 uses the storage class of the source object to create the object replica. 
    *  For valid values, see the ``StorageClass`` element of the [PUT Bucket replication](https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTreplication.html) action in the *Amazon S3 API Reference*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#storage_class CcBucket#storage_class}
    */
    readonly storageClass?: string;
}
export class ReplicationDestinationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ReplicationDestinationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._accessControlTranslation?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.accessControlTranslation = this._accessControlTranslation?.internalValue;
        }
        if (this._account !== undefined) {
            hasAnyValues = true;
            internalValueResult.account = this._account;
        }
        if (this._bucket !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucket = this._bucket;
        }
        if (this._encryptionConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.encryptionConfiguration = this._encryptionConfiguration?.internalValue;
        }
        if (this._metrics?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.metrics = this._metrics?.internalValue;
        }
        if (this._replicationTime?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.replicationTime = this._replicationTime?.internalValue;
        }
        if (this._storageClass !== undefined) {
            hasAnyValues = true;
            internalValueResult.storageClass = this._storageClass;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ReplicationDestinationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accessControlTranslation.internalValue = undefined;
            this._account = undefined;
            this._bucket = undefined;
            this._encryptionConfiguration.internalValue = undefined;
            this._metrics.internalValue = undefined;
            this._replicationTime.internalValue = undefined;
            this._storageClass = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accessControlTranslation.internalValue = value.accessControlTranslation;
            this._account = value.account;
            this._bucket = value.bucket;
            this._encryptionConfiguration.internalValue = value.encryptionConfiguration;
            this._metrics.internalValue = value.metrics;
            this._replicationTime.internalValue = value.replicationTime;
            this._storageClass = value.storageClass;
        }
    }

    // access_control_translation - computed: true, optional: true, required: false
    private _accessControlTranslation = new AccessControlTranslationPropertyOutputReference(this, "access_control_translation");
    public get accessControlTranslation() {
        return this._accessControlTranslation;
    }
    public putAccessControlTranslation(value: AccessControlTranslationProperty) {
        this._accessControlTranslation.internalValue = value;
    }
    public resetAccessControlTranslation() {
        this._accessControlTranslation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accessControlTranslationInput() {
        return this._accessControlTranslation.internalValue;
    }

    // account - computed: true, optional: true, required: false
    private _account?: string; 
    public get account() {
        return this.getStringAttribute('account');
    }
    public set account(value: string) {
        this._account = value;
    }
    public resetAccount() {
        this._account = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accountInput() {
        return this._account;
    }

    // bucket - computed: true, optional: true, required: false
    private _bucket?: string; 
    public get bucket() {
        return this.getStringAttribute('bucket');
    }
    public set bucket(value: string) {
        this._bucket = value;
    }
    public resetBucket() {
        this._bucket = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketInput() {
        return this._bucket;
    }

    // encryption_configuration - computed: true, optional: true, required: false
    private _encryptionConfiguration = new EncryptionConfigurationPropertyOutputReference(this, "encryption_configuration");
    public get encryptionConfiguration() {
        return this._encryptionConfiguration;
    }
    public putEncryptionConfiguration(value: EncryptionConfigurationProperty) {
        this._encryptionConfiguration.internalValue = value;
    }
    public resetEncryptionConfiguration() {
        this._encryptionConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionConfigurationInput() {
        return this._encryptionConfiguration.internalValue;
    }

    // metrics - computed: true, optional: true, required: false
    private _metrics = new MetricsPropertyOutputReference(this, "metrics");
    public get metrics() {
        return this._metrics;
    }
    public putMetrics(value: MetricsProperty) {
        this._metrics.internalValue = value;
    }
    public resetMetrics() {
        this._metrics.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricsInput() {
        return this._metrics.internalValue;
    }

    // replication_time - computed: true, optional: true, required: false
    private _replicationTime = new ReplicationTimePropertyOutputReference(this, "replication_time");
    public get replicationTime() {
        return this._replicationTime;
    }
    public putReplicationTime(value: ReplicationTimeProperty) {
        this._replicationTime.internalValue = value;
    }
    public resetReplicationTime() {
        this._replicationTime.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get replicationTimeInput() {
        return this._replicationTime.internalValue;
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
export interface ReplicationConfigurationRulesFilterAndTagFiltersProperty {
    /**
    * The tag key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#key CcBucket#key}
    */
    readonly key?: string;
    /**
    * The tag value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#value CcBucket#value}
    */
    readonly value?: string;
}
export class ReplicationConfigurationRulesFilterAndTagFiltersPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ReplicationConfigurationRulesFilterAndTagFiltersProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: ReplicationConfigurationRulesFilterAndTagFiltersProperty | cdktn.IResolvable | undefined) {
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

export class ReplicationConfigurationRulesFilterAndTagFiltersPropertyList extends cdktn.ComplexList {
    public internalValue? : ReplicationConfigurationRulesFilterAndTagFiltersProperty[] | cdktn.IResolvable

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
    public get(index: number): ReplicationConfigurationRulesFilterAndTagFiltersPropertyOutputReference {
        return new ReplicationConfigurationRulesFilterAndTagFiltersPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ReplicationRuleAndOperatorProperty {
    /**
    * An object key name prefix that identifies the subset of objects to which the rule applies.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#prefix CcBucket#prefix}
    */
    readonly prefix?: string;
    /**
    * An array of tags containing key and value pairs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#tag_filters CcBucket#tag_filters}
    */
    readonly tagFilters?: ReplicationConfigurationRulesFilterAndTagFiltersProperty[] | cdktn.IResolvable;
}
export class ReplicationRuleAndOperatorPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ReplicationRuleAndOperatorProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._prefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.prefix = this._prefix;
        }
        if (this._tagFilters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tagFilters = this._tagFilters?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ReplicationRuleAndOperatorProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._prefix = undefined;
            this._tagFilters.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._prefix = value.prefix;
            this._tagFilters.internalValue = value.tagFilters;
        }
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

    // tag_filters - computed: true, optional: true, required: false
    private _tagFilters = new ReplicationConfigurationRulesFilterAndTagFiltersPropertyList(this, "tag_filters", false);
    public get tagFilters() {
        return this._tagFilters;
    }
    public putTagFilters(value: ReplicationConfigurationRulesFilterAndTagFiltersProperty[] | cdktn.IResolvable) {
        this._tagFilters.internalValue = value;
    }
    public resetTagFilters() {
        this._tagFilters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagFiltersInput() {
        return this._tagFilters.internalValue;
    }
}
export interface ReplicationConfigurationRulesFilterTagFilterProperty {
    /**
    * The tag key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#key CcBucket#key}
    */
    readonly key?: string;
    /**
    * The tag value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#value CcBucket#value}
    */
    readonly value?: string;
}
export class ReplicationConfigurationRulesFilterTagFilterPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ReplicationConfigurationRulesFilterTagFilterProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: ReplicationConfigurationRulesFilterTagFilterProperty | cdktn.IResolvable | undefined) {
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
export interface ReplicationRuleFilterProperty {
    /**
    * A container for specifying rule filters. The filters determine the subset of objects to which the rule applies. This element is required only if you specify more than one filter. For example: 
    *   +  If you specify both a ``Prefix`` and a ``TagFilter``, wrap these filters in an ``And`` tag.
    *   +  If you specify a filter based on multiple tags, wrap the ``TagFilter`` elements in an ``And`` tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#and CcBucket#and}
    */
    readonly and?: ReplicationRuleAndOperatorProperty;
    /**
    * An object key name prefix that identifies the subset of objects to which the rule applies.
    *   Replacement must be made for object keys containing special characters (such as carriage returns) when using XML requests. For more information, see [XML related object key constraints](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-xml-related-constraints).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#prefix CcBucket#prefix}
    */
    readonly prefix?: string;
    /**
    * A container for specifying a tag key and value. 
    *  The rule applies only to objects that have the tag in their tag set.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#tag_filter CcBucket#tag_filter}
    */
    readonly tagFilter?: ReplicationConfigurationRulesFilterTagFilterProperty;
}
export class ReplicationRuleFilterPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ReplicationRuleFilterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._and?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.and = this._and?.internalValue;
        }
        if (this._prefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.prefix = this._prefix;
        }
        if (this._tagFilter?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tagFilter = this._tagFilter?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ReplicationRuleFilterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._and.internalValue = undefined;
            this._prefix = undefined;
            this._tagFilter.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._and.internalValue = value.and;
            this._prefix = value.prefix;
            this._tagFilter.internalValue = value.tagFilter;
        }
    }

    // and - computed: true, optional: true, required: false
    private _and = new ReplicationRuleAndOperatorPropertyOutputReference(this, "and");
    public get and() {
        return this._and;
    }
    public putAnd(value: ReplicationRuleAndOperatorProperty) {
        this._and.internalValue = value;
    }
    public resetAnd() {
        this._and.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get andInput() {
        return this._and.internalValue;
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

    // tag_filter - computed: true, optional: true, required: false
    private _tagFilter = new ReplicationConfigurationRulesFilterTagFilterPropertyOutputReference(this, "tag_filter");
    public get tagFilter() {
        return this._tagFilter;
    }
    public putTagFilter(value: ReplicationConfigurationRulesFilterTagFilterProperty) {
        this._tagFilter.internalValue = value;
    }
    public resetTagFilter() {
        this._tagFilter.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagFilterInput() {
        return this._tagFilter.internalValue;
    }
}
export interface ReplicaModificationsProperty {
    /**
    * Specifies whether Amazon S3 replicates modifications on replicas.
    *   *Allowed values*: ``Enabled`` | ``Disabled``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#status CcBucket#status}
    */
    readonly status?: string;
}
export class ReplicaModificationsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ReplicaModificationsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: ReplicaModificationsProperty | cdktn.IResolvable | undefined) {
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
export interface SseKmsEncryptedObjectsProperty {
    /**
    * Specifies whether Amazon S3 replicates objects created with server-side encryption using an AWS KMS key stored in AWS Key Management Service.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#status CcBucket#status}
    */
    readonly status?: string;
}
export class SseKmsEncryptedObjectsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SseKmsEncryptedObjectsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: SseKmsEncryptedObjectsProperty | cdktn.IResolvable | undefined) {
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
export interface SourceSelectionCriteriaProperty {
    /**
    * A filter that you can specify for selection for modifications on replicas.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#replica_modifications CcBucket#replica_modifications}
    */
    readonly replicaModifications?: ReplicaModificationsProperty;
    /**
    * A container for filter information for the selection of Amazon S3 objects encrypted with AWS KMS.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#sse_kms_encrypted_objects CcBucket#sse_kms_encrypted_objects}
    */
    readonly sseKmsEncryptedObjects?: SseKmsEncryptedObjectsProperty;
}
export class SourceSelectionCriteriaPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SourceSelectionCriteriaProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._replicaModifications?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.replicaModifications = this._replicaModifications?.internalValue;
        }
        if (this._sseKmsEncryptedObjects?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sseKmsEncryptedObjects = this._sseKmsEncryptedObjects?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SourceSelectionCriteriaProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._replicaModifications.internalValue = undefined;
            this._sseKmsEncryptedObjects.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._replicaModifications.internalValue = value.replicaModifications;
            this._sseKmsEncryptedObjects.internalValue = value.sseKmsEncryptedObjects;
        }
    }

    // replica_modifications - computed: true, optional: true, required: false
    private _replicaModifications = new ReplicaModificationsPropertyOutputReference(this, "replica_modifications");
    public get replicaModifications() {
        return this._replicaModifications;
    }
    public putReplicaModifications(value: ReplicaModificationsProperty) {
        this._replicaModifications.internalValue = value;
    }
    public resetReplicaModifications() {
        this._replicaModifications.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get replicaModificationsInput() {
        return this._replicaModifications.internalValue;
    }

    // sse_kms_encrypted_objects - computed: true, optional: true, required: false
    private _sseKmsEncryptedObjects = new SseKmsEncryptedObjectsPropertyOutputReference(this, "sse_kms_encrypted_objects");
    public get sseKmsEncryptedObjects() {
        return this._sseKmsEncryptedObjects;
    }
    public putSseKmsEncryptedObjects(value: SseKmsEncryptedObjectsProperty) {
        this._sseKmsEncryptedObjects.internalValue = value;
    }
    public resetSseKmsEncryptedObjects() {
        this._sseKmsEncryptedObjects.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sseKmsEncryptedObjectsInput() {
        return this._sseKmsEncryptedObjects.internalValue;
    }
}
export interface ReplicationRuleProperty {
    /**
    * Specifies whether Amazon S3 replicates delete markers. If you specify a ``Filter`` in your replication configuration, you must also include a ``DeleteMarkerReplication`` element. If your ``Filter`` includes a ``Tag`` element, the ``DeleteMarkerReplication`` ``Status`` must be set to Disabled, because Amazon S3 does not support replicating delete markers for tag-based rules. For an example configuration, see [Basic Rule Configuration](https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-add-config.html#replication-config-min-rule-config). 
    *  For more information about delete marker replication, see [Basic Rule Configuration](https://docs.aws.amazon.com/AmazonS3/latest/dev/delete-marker-replication.html). 
    *   If you are using an earlier version of the replication configuration, Amazon S3 handles replication of delete markers differently. For more information, see [Backward Compatibility](https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-add-config.html#replication-backward-compat-considerations).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#delete_marker_replication CcBucket#delete_marker_replication}
    */
    readonly deleteMarkerReplication?: DeleteMarkerReplicationProperty;
    /**
    * A container for information about the replication destination and its configurations including enabling the S3 Replication Time Control (S3 RTC).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#destination CcBucket#destination}
    */
    readonly destination?: ReplicationDestinationProperty;
    /**
    * A filter that identifies the subset of objects to which the replication rule applies. A ``Filter`` must specify exactly one ``Prefix``, ``TagFilter``, or an ``And`` child element. The use of the filter field indicates that this is a V2 replication configuration. This field isn't supported in a V1 replication configuration.
    *   V1 replication configuration only supports filtering by key prefix. To filter using a V1 replication configuration, add the ``Prefix`` directly as a child element of the ``Rule`` element.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#filter CcBucket#filter}
    */
    readonly filter?: ReplicationRuleFilterProperty;
    /**
    * A unique identifier for the rule. The maximum value is 255 characters. If you don't specify a value, AWS CloudFormation generates a random ID. When using a V2 replication configuration this property is capitalized as "ID".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#id CcBucket#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * An object key name prefix that identifies the object or objects to which the rule applies. The maximum prefix length is 1,024 characters. To include all objects in a bucket, specify an empty string. To filter using a V1 replication configuration, add the ``Prefix`` directly as a child element of the ``Rule`` element.
    *   Replacement must be made for object keys containing special characters (such as carriage returns) when using XML requests. For more information, see [XML related object key constraints](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-xml-related-constraints).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#prefix CcBucket#prefix}
    */
    readonly prefix?: string;
    /**
    * The priority indicates which rule has precedence whenever two or more replication rules conflict. Amazon S3 will attempt to replicate objects according to all replication rules. However, if there are two or more rules with the same destination bucket, then objects will be replicated according to the rule with the highest priority. The higher the number, the higher the priority. 
    *  For more information, see [Replication](https://docs.aws.amazon.com/AmazonS3/latest/dev/replication.html) in the *Amazon S3 User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#priority CcBucket#priority}
    */
    readonly priority?: number;
    /**
    * A container that describes additional filters for identifying the source objects that you want to replicate. You can choose to enable or disable the replication of these objects.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#source_selection_criteria CcBucket#source_selection_criteria}
    */
    readonly sourceSelectionCriteria?: SourceSelectionCriteriaProperty;
    /**
    * Specifies whether the rule is enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#status CcBucket#status}
    */
    readonly status?: string;
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
        if (this._deleteMarkerReplication?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.deleteMarkerReplication = this._deleteMarkerReplication?.internalValue;
        }
        if (this._destination?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.destination = this._destination?.internalValue;
        }
        if (this._filter?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.filter = this._filter?.internalValue;
        }
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        if (this._prefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.prefix = this._prefix;
        }
        if (this._priority !== undefined) {
            hasAnyValues = true;
            internalValueResult.priority = this._priority;
        }
        if (this._sourceSelectionCriteria?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceSelectionCriteria = this._sourceSelectionCriteria?.internalValue;
        }
        if (this._status !== undefined) {
            hasAnyValues = true;
            internalValueResult.status = this._status;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ReplicationRuleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._deleteMarkerReplication.internalValue = undefined;
            this._destination.internalValue = undefined;
            this._filter.internalValue = undefined;
            this._id = undefined;
            this._prefix = undefined;
            this._priority = undefined;
            this._sourceSelectionCriteria.internalValue = undefined;
            this._status = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._deleteMarkerReplication.internalValue = value.deleteMarkerReplication;
            this._destination.internalValue = value.destination;
            this._filter.internalValue = value.filter;
            this._id = value.id;
            this._prefix = value.prefix;
            this._priority = value.priority;
            this._sourceSelectionCriteria.internalValue = value.sourceSelectionCriteria;
            this._status = value.status;
        }
    }

    // delete_marker_replication - computed: true, optional: true, required: false
    private _deleteMarkerReplication = new DeleteMarkerReplicationPropertyOutputReference(this, "delete_marker_replication");
    public get deleteMarkerReplication() {
        return this._deleteMarkerReplication;
    }
    public putDeleteMarkerReplication(value: DeleteMarkerReplicationProperty) {
        this._deleteMarkerReplication.internalValue = value;
    }
    public resetDeleteMarkerReplication() {
        this._deleteMarkerReplication.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteMarkerReplicationInput() {
        return this._deleteMarkerReplication.internalValue;
    }

    // destination - computed: true, optional: true, required: false
    private _destination = new ReplicationDestinationPropertyOutputReference(this, "destination");
    public get destination() {
        return this._destination;
    }
    public putDestination(value: ReplicationDestinationProperty) {
        this._destination.internalValue = value;
    }
    public resetDestination() {
        this._destination.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationInput() {
        return this._destination.internalValue;
    }

    // filter - computed: true, optional: true, required: false
    private _filter = new ReplicationRuleFilterPropertyOutputReference(this, "filter");
    public get filter() {
        return this._filter;
    }
    public putFilter(value: ReplicationRuleFilterProperty) {
        this._filter.internalValue = value;
    }
    public resetFilter() {
        this._filter.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterInput() {
        return this._filter.internalValue;
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

    // priority - computed: true, optional: true, required: false
    private _priority?: number; 
    public get priority() {
        return this.getNumberAttribute('priority');
    }
    public set priority(value: number) {
        this._priority = value;
    }
    public resetPriority() {
        this._priority = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get priorityInput() {
        return this._priority;
    }

    // source_selection_criteria - computed: true, optional: true, required: false
    private _sourceSelectionCriteria = new SourceSelectionCriteriaPropertyOutputReference(this, "source_selection_criteria");
    public get sourceSelectionCriteria() {
        return this._sourceSelectionCriteria;
    }
    public putSourceSelectionCriteria(value: SourceSelectionCriteriaProperty) {
        this._sourceSelectionCriteria.internalValue = value;
    }
    public resetSourceSelectionCriteria() {
        this._sourceSelectionCriteria.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceSelectionCriteriaInput() {
        return this._sourceSelectionCriteria.internalValue;
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
    * The Amazon Resource Name (ARN) of the IAMlong (IAM) role that Amazon S3 assumes when replicating objects. For more information, see [How to Set Up Replication](https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-how-setup.html) in the *Amazon S3 User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#role CcBucket#role}
    */
    readonly role?: string;
    /**
    * A container for one or more replication rules. A replication configuration must have at least one rule and can contain a maximum of 1,000 rules.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#rules CcBucket#rules}
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
export interface TagProperty {
    /**
    * Name of the object key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#key CcBucket#key}
    */
    readonly key?: string;
    /**
    * Value of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#value CcBucket#value}
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
export interface VersioningConfigurationProperty {
    /**
    * The versioning state of the bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#status CcBucket#status}
    */
    readonly status?: string;
}
export class VersioningConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): VersioningConfigurationProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: VersioningConfigurationProperty | cdktn.IResolvable | undefined) {
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
export interface RedirectAllRequestsToProperty {
    /**
    * Name of the host where requests are redirected.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#host_name CcBucket#host_name}
    */
    readonly hostName?: string;
    /**
    * Protocol to use when redirecting requests. The default is the protocol that is used in the original request.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#protocol CcBucket#protocol}
    */
    readonly protocol?: string;
}
export class RedirectAllRequestsToPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RedirectAllRequestsToProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._hostName !== undefined) {
            hasAnyValues = true;
            internalValueResult.hostName = this._hostName;
        }
        if (this._protocol !== undefined) {
            hasAnyValues = true;
            internalValueResult.protocol = this._protocol;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RedirectAllRequestsToProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._hostName = undefined;
            this._protocol = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._hostName = value.hostName;
            this._protocol = value.protocol;
        }
    }

    // host_name - computed: true, optional: true, required: false
    private _hostName?: string; 
    public get hostName() {
        return this.getStringAttribute('host_name');
    }
    public set hostName(value: string) {
        this._hostName = value;
    }
    public resetHostName() {
        this._hostName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostNameInput() {
        return this._hostName;
    }

    // protocol - computed: true, optional: true, required: false
    private _protocol?: string; 
    public get protocol() {
        return this.getStringAttribute('protocol');
    }
    public set protocol(value: string) {
        this._protocol = value;
    }
    public resetProtocol() {
        this._protocol = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get protocolInput() {
        return this._protocol;
    }
}
export interface RedirectRuleProperty {
    /**
    * The host name to use in the redirect request.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#host_name CcBucket#host_name}
    */
    readonly hostName?: string;
    /**
    * The HTTP redirect code to use on the response. Not required if one of the siblings is present.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#http_redirect_code CcBucket#http_redirect_code}
    */
    readonly httpRedirectCode?: string;
    /**
    * Protocol to use when redirecting requests. The default is the protocol that is used in the original request.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#protocol CcBucket#protocol}
    */
    readonly protocol?: string;
    /**
    * The object key prefix to use in the redirect request. For example, to redirect requests for all pages with prefix ``docs/`` (objects in the ``docs/`` folder) to ``documents/``, you can set a condition block with ``KeyPrefixEquals`` set to ``docs/`` and in the Redirect set ``ReplaceKeyPrefixWith`` to ``/documents``. Not required if one of the siblings is present. Can be present only if ``ReplaceKeyWith`` is not provided.
    *   Replacement must be made for object keys containing special characters (such as carriage returns) when using XML requests. For more information, see [XML related object key constraints](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-xml-related-constraints).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#replace_key_prefix_with CcBucket#replace_key_prefix_with}
    */
    readonly replaceKeyPrefixWith?: string;
    /**
    * The specific object key to use in the redirect request. For example, redirect request to ``error.html``. Not required if one of the siblings is present. Can be present only if ``ReplaceKeyPrefixWith`` is not provided.
    *   Replacement must be made for object keys containing special characters (such as carriage returns) when using XML requests. For more information, see [XML related object key constraints](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-xml-related-constraints).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#replace_key_with CcBucket#replace_key_with}
    */
    readonly replaceKeyWith?: string;
}
export class RedirectRulePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RedirectRuleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._hostName !== undefined) {
            hasAnyValues = true;
            internalValueResult.hostName = this._hostName;
        }
        if (this._httpRedirectCode !== undefined) {
            hasAnyValues = true;
            internalValueResult.httpRedirectCode = this._httpRedirectCode;
        }
        if (this._protocol !== undefined) {
            hasAnyValues = true;
            internalValueResult.protocol = this._protocol;
        }
        if (this._replaceKeyPrefixWith !== undefined) {
            hasAnyValues = true;
            internalValueResult.replaceKeyPrefixWith = this._replaceKeyPrefixWith;
        }
        if (this._replaceKeyWith !== undefined) {
            hasAnyValues = true;
            internalValueResult.replaceKeyWith = this._replaceKeyWith;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RedirectRuleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._hostName = undefined;
            this._httpRedirectCode = undefined;
            this._protocol = undefined;
            this._replaceKeyPrefixWith = undefined;
            this._replaceKeyWith = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._hostName = value.hostName;
            this._httpRedirectCode = value.httpRedirectCode;
            this._protocol = value.protocol;
            this._replaceKeyPrefixWith = value.replaceKeyPrefixWith;
            this._replaceKeyWith = value.replaceKeyWith;
        }
    }

    // host_name - computed: true, optional: true, required: false
    private _hostName?: string; 
    public get hostName() {
        return this.getStringAttribute('host_name');
    }
    public set hostName(value: string) {
        this._hostName = value;
    }
    public resetHostName() {
        this._hostName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostNameInput() {
        return this._hostName;
    }

    // http_redirect_code - computed: true, optional: true, required: false
    private _httpRedirectCode?: string; 
    public get httpRedirectCode() {
        return this.getStringAttribute('http_redirect_code');
    }
    public set httpRedirectCode(value: string) {
        this._httpRedirectCode = value;
    }
    public resetHttpRedirectCode() {
        this._httpRedirectCode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get httpRedirectCodeInput() {
        return this._httpRedirectCode;
    }

    // protocol - computed: true, optional: true, required: false
    private _protocol?: string; 
    public get protocol() {
        return this.getStringAttribute('protocol');
    }
    public set protocol(value: string) {
        this._protocol = value;
    }
    public resetProtocol() {
        this._protocol = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get protocolInput() {
        return this._protocol;
    }

    // replace_key_prefix_with - computed: true, optional: true, required: false
    private _replaceKeyPrefixWith?: string; 
    public get replaceKeyPrefixWith() {
        return this.getStringAttribute('replace_key_prefix_with');
    }
    public set replaceKeyPrefixWith(value: string) {
        this._replaceKeyPrefixWith = value;
    }
    public resetReplaceKeyPrefixWith() {
        this._replaceKeyPrefixWith = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get replaceKeyPrefixWithInput() {
        return this._replaceKeyPrefixWith;
    }

    // replace_key_with - computed: true, optional: true, required: false
    private _replaceKeyWith?: string; 
    public get replaceKeyWith() {
        return this.getStringAttribute('replace_key_with');
    }
    public set replaceKeyWith(value: string) {
        this._replaceKeyWith = value;
    }
    public resetReplaceKeyWith() {
        this._replaceKeyWith = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get replaceKeyWithInput() {
        return this._replaceKeyWith;
    }
}
export interface RoutingRuleConditionProperty {
    /**
    * The HTTP error code when the redirect is applied. In the event of an error, if the error code equals this value, then the specified redirect is applied.
    *  Required when parent element ``Condition`` is specified and sibling ``KeyPrefixEquals`` is not specified. If both are specified, then both must be true for the redirect to be applied.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#http_error_code_returned_equals CcBucket#http_error_code_returned_equals}
    */
    readonly httpErrorCodeReturnedEquals?: string;
    /**
    * The object key name prefix when the redirect is applied. For example, to redirect requests for ``ExamplePage.html``, the key prefix will be ``ExamplePage.html``. To redirect request for all pages with the prefix ``docs/``, the key prefix will be ``/docs``, which identifies all objects in the docs/ folder.
    *  Required when the parent element ``Condition`` is specified and sibling ``HttpErrorCodeReturnedEquals`` is not specified. If both conditions are specified, both must be true for the redirect to be applied.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#key_prefix_equals CcBucket#key_prefix_equals}
    */
    readonly keyPrefixEquals?: string;
}
export class RoutingRuleConditionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RoutingRuleConditionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._httpErrorCodeReturnedEquals !== undefined) {
            hasAnyValues = true;
            internalValueResult.httpErrorCodeReturnedEquals = this._httpErrorCodeReturnedEquals;
        }
        if (this._keyPrefixEquals !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyPrefixEquals = this._keyPrefixEquals;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RoutingRuleConditionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._httpErrorCodeReturnedEquals = undefined;
            this._keyPrefixEquals = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._httpErrorCodeReturnedEquals = value.httpErrorCodeReturnedEquals;
            this._keyPrefixEquals = value.keyPrefixEquals;
        }
    }

    // http_error_code_returned_equals - computed: true, optional: true, required: false
    private _httpErrorCodeReturnedEquals?: string; 
    public get httpErrorCodeReturnedEquals() {
        return this.getStringAttribute('http_error_code_returned_equals');
    }
    public set httpErrorCodeReturnedEquals(value: string) {
        this._httpErrorCodeReturnedEquals = value;
    }
    public resetHttpErrorCodeReturnedEquals() {
        this._httpErrorCodeReturnedEquals = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get httpErrorCodeReturnedEqualsInput() {
        return this._httpErrorCodeReturnedEquals;
    }

    // key_prefix_equals - computed: true, optional: true, required: false
    private _keyPrefixEquals?: string; 
    public get keyPrefixEquals() {
        return this.getStringAttribute('key_prefix_equals');
    }
    public set keyPrefixEquals(value: string) {
        this._keyPrefixEquals = value;
    }
    public resetKeyPrefixEquals() {
        this._keyPrefixEquals = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyPrefixEqualsInput() {
        return this._keyPrefixEquals;
    }
}
export interface RoutingRuleProperty {
    /**
    * Container for redirect information. You can redirect requests to another host, to another page, or with another protocol. In the event of an error, you can specify a different error code to return.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#redirect_rule CcBucket#redirect_rule}
    */
    readonly redirectRule?: RedirectRuleProperty;
    /**
    * A container for describing a condition that must be met for the specified redirect to apply. For example, 1. If request is for pages in the ``/docs`` folder, redirect to the ``/documents`` folder. 2. If request results in HTTP error 4xx, redirect request to another host where you might process the error.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#routing_rule_condition CcBucket#routing_rule_condition}
    */
    readonly routingRuleCondition?: RoutingRuleConditionProperty;
}
export class RoutingRulePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): RoutingRuleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._redirectRule?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.redirectRule = this._redirectRule?.internalValue;
        }
        if (this._routingRuleCondition?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.routingRuleCondition = this._routingRuleCondition?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RoutingRuleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._redirectRule.internalValue = undefined;
            this._routingRuleCondition.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._redirectRule.internalValue = value.redirectRule;
            this._routingRuleCondition.internalValue = value.routingRuleCondition;
        }
    }

    // redirect_rule - computed: true, optional: true, required: false
    private _redirectRule = new RedirectRulePropertyOutputReference(this, "redirect_rule");
    public get redirectRule() {
        return this._redirectRule;
    }
    public putRedirectRule(value: RedirectRuleProperty) {
        this._redirectRule.internalValue = value;
    }
    public resetRedirectRule() {
        this._redirectRule.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get redirectRuleInput() {
        return this._redirectRule.internalValue;
    }

    // routing_rule_condition - computed: true, optional: true, required: false
    private _routingRuleCondition = new RoutingRuleConditionPropertyOutputReference(this, "routing_rule_condition");
    public get routingRuleCondition() {
        return this._routingRuleCondition;
    }
    public putRoutingRuleCondition(value: RoutingRuleConditionProperty) {
        this._routingRuleCondition.internalValue = value;
    }
    public resetRoutingRuleCondition() {
        this._routingRuleCondition.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get routingRuleConditionInput() {
        return this._routingRuleCondition.internalValue;
    }
}

export class RoutingRulePropertyList extends cdktn.ComplexList {
    public internalValue? : RoutingRuleProperty[] | cdktn.IResolvable

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
    public get(index: number): RoutingRulePropertyOutputReference {
        return new RoutingRulePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface WebsiteConfigurationProperty {
    /**
    * The name of the error document for the website.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#error_document CcBucket#error_document}
    */
    readonly errorDocument?: string;
    /**
    * The name of the index document for the website.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#index_document CcBucket#index_document}
    */
    readonly indexDocument?: string;
    /**
    * The redirect behavior for every request to this bucket's website endpoint.
    *   If you specify this property, you can't specify any other property.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#redirect_all_requests_to CcBucket#redirect_all_requests_to}
    */
    readonly redirectAllRequestsTo?: RedirectAllRequestsToProperty;
    /**
    * Rules that define when a redirect is applied and the redirect behavior.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/s3_bucket#routing_rules CcBucket#routing_rules}
    */
    readonly routingRules?: RoutingRuleProperty[] | cdktn.IResolvable;
}
export class WebsiteConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): WebsiteConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._errorDocument !== undefined) {
            hasAnyValues = true;
            internalValueResult.errorDocument = this._errorDocument;
        }
        if (this._indexDocument !== undefined) {
            hasAnyValues = true;
            internalValueResult.indexDocument = this._indexDocument;
        }
        if (this._redirectAllRequestsTo?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.redirectAllRequestsTo = this._redirectAllRequestsTo?.internalValue;
        }
        if (this._routingRules?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.routingRules = this._routingRules?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WebsiteConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._errorDocument = undefined;
            this._indexDocument = undefined;
            this._redirectAllRequestsTo.internalValue = undefined;
            this._routingRules.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._errorDocument = value.errorDocument;
            this._indexDocument = value.indexDocument;
            this._redirectAllRequestsTo.internalValue = value.redirectAllRequestsTo;
            this._routingRules.internalValue = value.routingRules;
        }
    }

    // error_document - computed: true, optional: true, required: false
    private _errorDocument?: string; 
    public get errorDocument() {
        return this.getStringAttribute('error_document');
    }
    public set errorDocument(value: string) {
        this._errorDocument = value;
    }
    public resetErrorDocument() {
        this._errorDocument = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get errorDocumentInput() {
        return this._errorDocument;
    }

    // index_document - computed: true, optional: true, required: false
    private _indexDocument?: string; 
    public get indexDocument() {
        return this.getStringAttribute('index_document');
    }
    public set indexDocument(value: string) {
        this._indexDocument = value;
    }
    public resetIndexDocument() {
        this._indexDocument = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get indexDocumentInput() {
        return this._indexDocument;
    }

    // redirect_all_requests_to - computed: true, optional: true, required: false
    private _redirectAllRequestsTo = new RedirectAllRequestsToPropertyOutputReference(this, "redirect_all_requests_to");
    public get redirectAllRequestsTo() {
        return this._redirectAllRequestsTo;
    }
    public putRedirectAllRequestsTo(value: RedirectAllRequestsToProperty) {
        this._redirectAllRequestsTo.internalValue = value;
    }
    public resetRedirectAllRequestsTo() {
        this._redirectAllRequestsTo.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get redirectAllRequestsToInput() {
        return this._redirectAllRequestsTo.internalValue;
    }

    // routing_rules - computed: true, optional: true, required: false
    private _routingRules = new RoutingRulePropertyList(this, "routing_rules", false);
    public get routingRules() {
        return this._routingRules;
    }
    public putRoutingRules(value: RoutingRuleProperty[] | cdktn.IResolvable) {
        this._routingRules.internalValue = value;
    }
    public resetRoutingRules() {
        this._routingRules.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get routingRulesInput() {
        return this._routingRules.internalValue;
    }
}
}
