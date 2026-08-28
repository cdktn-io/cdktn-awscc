// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_channel

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcChannelProps extends cdktn.TerraformMetaArguments {
    /**
    * Name of the channel
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_channel#channel_name CcChannel#channel_name}
    */
    readonly channelName: string;
    /**
    * The Amazon Resource Name (ARN) of the cluster
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_channel#cluster_arn CcChannel#cluster_arn}
    */
    readonly clusterArn?: string;
    /**
    * Encryption configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_channel#encryption_configuration CcChannel#encryption_configuration}
    */
    readonly encryptionConfiguration?: CcChannel.EncryptionConfigurationProperty;
    /**
    * Iceberg destination configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_channel#iceberg_destination_configuration CcChannel#iceberg_destination_configuration}
    */
    readonly icebergDestinationConfiguration?: CcChannel.IcebergDestinationConfigurationProperty;
    /**
    * Log configuration details for Channel
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_channel#logging_info CcChannel#logging_info}
    */
    readonly loggingInfo?: CcChannel.ChannelLoggingInfoProperty;
    /**
    * S3 destination configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_channel#s3_destination_configuration CcChannel#s3_destination_configuration}
    */
    readonly s3DestinationConfiguration?: CcChannel.S3DestinationConfigurationProperty;
    /**
    * Tags attached to the channel
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_channel#tags CcChannel#tags}
    */
    readonly tags?: { [key: string]: string };
    /**
    * Topic configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_channel#topic_configuration_list CcChannel#topic_configuration_list}
    */
    readonly topicConfigurationList: CcChannel.TopicConfigurationProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_channel awscc_msk_channel}
*/
export class CcChannel extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_msk_channel";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcChannel resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcChannel to import
    * @param importFromId The id of the existing CcChannel that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_channel#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcChannel to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_msk_channel", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_channel awscc_msk_channel} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcChannelProps
    */
    public constructor(scope: Construct, id: string, config: CcChannelProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_msk_channel',
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
        this._channelName = config.channelName;
        this._clusterArn = config.clusterArn;
        this._encryptionConfiguration.internalValue = config.encryptionConfiguration;
        this._icebergDestinationConfiguration.internalValue = config.icebergDestinationConfiguration;
        this._loggingInfo.internalValue = config.loggingInfo;
        this._s3DestinationConfiguration.internalValue = config.s3DestinationConfiguration;
        this._tags = config.tags;
        this._topicConfigurationList.internalValue = config.topicConfigurationList;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // channel_arn - computed: true, optional: false, required: false
    public get channelArn() {
        return this.getStringAttribute('channel_arn');
    }

    // channel_name - computed: false, optional: false, required: true
    private _channelName?: string; 
    public get channelName() {
        return this.getStringAttribute('channel_name');
    }
    public set channelName(value: string) {
        this._channelName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get channelNameInput() {
        return this._channelName;
    }

    // cluster_arn - computed: true, optional: true, required: false
    private _clusterArn?: string; 
    public get clusterArn() {
        return this.getStringAttribute('cluster_arn');
    }
    public set clusterArn(value: string) {
        this._clusterArn = value;
    }
    public resetClusterArn() {
        this._clusterArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterArnInput() {
        return this._clusterArn;
    }

    // encryption_configuration - computed: true, optional: true, required: false
    private _encryptionConfiguration = new CcChannel.EncryptionConfigurationPropertyOutputReference(this, "encryption_configuration");
    public get encryptionConfiguration() {
        return this._encryptionConfiguration;
    }
    public putEncryptionConfiguration(value: CcChannel.EncryptionConfigurationProperty) {
        this._encryptionConfiguration.internalValue = value;
    }
    public resetEncryptionConfiguration() {
        this._encryptionConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionConfigurationInput() {
        return this._encryptionConfiguration.internalValue;
    }

    // iceberg_destination_configuration - computed: true, optional: true, required: false
    private _icebergDestinationConfiguration = new CcChannel.IcebergDestinationConfigurationPropertyOutputReference(this, "iceberg_destination_configuration");
    public get icebergDestinationConfiguration() {
        return this._icebergDestinationConfiguration;
    }
    public putIcebergDestinationConfiguration(value: CcChannel.IcebergDestinationConfigurationProperty) {
        this._icebergDestinationConfiguration.internalValue = value;
    }
    public resetIcebergDestinationConfiguration() {
        this._icebergDestinationConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get icebergDestinationConfigurationInput() {
        return this._icebergDestinationConfiguration.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // logging_info - computed: true, optional: true, required: false
    private _loggingInfo = new CcChannel.ChannelLoggingInfoPropertyOutputReference(this, "logging_info");
    public get loggingInfo() {
        return this._loggingInfo;
    }
    public putLoggingInfo(value: CcChannel.ChannelLoggingInfoProperty) {
        this._loggingInfo.internalValue = value;
    }
    public resetLoggingInfo() {
        this._loggingInfo.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get loggingInfoInput() {
        return this._loggingInfo.internalValue;
    }

    // s3_destination_configuration - computed: true, optional: true, required: false
    private _s3DestinationConfiguration = new CcChannel.S3DestinationConfigurationPropertyOutputReference(this, "s3_destination_configuration");
    public get s3DestinationConfiguration() {
        return this._s3DestinationConfiguration;
    }
    public putS3DestinationConfiguration(value: CcChannel.S3DestinationConfigurationProperty) {
        this._s3DestinationConfiguration.internalValue = value;
    }
    public resetS3DestinationConfiguration() {
        this._s3DestinationConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3DestinationConfigurationInput() {
        return this._s3DestinationConfiguration.internalValue;
    }

    // state_info - computed: true, optional: false, required: false
    private _stateInfo = new CcChannel.StateInfoPropertyOutputReference(this, "state_info");
    public get stateInfo() {
        return this._stateInfo;
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
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

    // topic_configuration_list - computed: false, optional: false, required: true
    private _topicConfigurationList = new CcChannel.TopicConfigurationPropertyList(this, "topic_configuration_list", false);
    public get topicConfigurationList() {
        return this._topicConfigurationList;
    }
    public putTopicConfigurationList(value: CcChannel.TopicConfigurationProperty[] | cdktn.IResolvable) {
        this._topicConfigurationList.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get topicConfigurationListInput() {
        return this._topicConfigurationList.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            channel_name: cdktn.stringToTerraform(this._channelName),
            cluster_arn: cdktn.stringToTerraform(this._clusterArn),
            encryption_configuration: ccChannelEncryptionConfigurationPropertyToTerraform(this._encryptionConfiguration.internalValue),
            iceberg_destination_configuration: ccChannelIcebergDestinationConfigurationPropertyToTerraform(this._icebergDestinationConfiguration.internalValue),
            logging_info: ccChannelChannelLoggingInfoPropertyToTerraform(this._loggingInfo.internalValue),
            s3_destination_configuration: ccChannelS3DestinationConfigurationPropertyToTerraform(this._s3DestinationConfiguration.internalValue),
            tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
            topic_configuration_list: cdktn.listMapper(ccChannelTopicConfigurationPropertyToTerraform, false)(this._topicConfigurationList.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            channel_name: {
                value: cdktn.stringToHclTerraform(this._channelName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            cluster_arn: {
                value: cdktn.stringToHclTerraform(this._clusterArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            encryption_configuration: {
                value: ccChannelEncryptionConfigurationPropertyToHclTerraform(this._encryptionConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcChannel.EncryptionConfigurationProperty",
            },
            iceberg_destination_configuration: {
                value: ccChannelIcebergDestinationConfigurationPropertyToHclTerraform(this._icebergDestinationConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcChannel.IcebergDestinationConfigurationProperty",
            },
            logging_info: {
                value: ccChannelChannelLoggingInfoPropertyToHclTerraform(this._loggingInfo.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcChannel.ChannelLoggingInfoProperty",
            },
            s3_destination_configuration: {
                value: ccChannelS3DestinationConfigurationPropertyToHclTerraform(this._s3DestinationConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcChannel.S3DestinationConfigurationProperty",
            },
            tags: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            topic_configuration_list: {
                value: cdktn.listMapperHcl(ccChannelTopicConfigurationPropertyToHclTerraform, false)(this._topicConfigurationList.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcChannel.TopicConfigurationPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccChannelEncryptionConfigurationPropertyToTerraform(struct?: CcChannel.EncryptionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        kms_key_arn: cdktn.stringToTerraform(struct!.kmsKeyArn),
    }
}


export function ccChannelEncryptionConfigurationPropertyToHclTerraform(struct?: CcChannel.EncryptionConfigurationProperty | cdktn.IResolvable): any {
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


export function ccChannelCatalogPropertyToTerraform(struct?: CcChannel.CatalogProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        catalog_arn: cdktn.stringToTerraform(struct!.catalogArn),
        warehouse_location: cdktn.stringToTerraform(struct!.warehouseLocation),
    }
}


export function ccChannelCatalogPropertyToHclTerraform(struct?: CcChannel.CatalogProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        catalog_arn: {
            value: cdktn.stringToHclTerraform(struct!.catalogArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        warehouse_location: {
            value: cdktn.stringToHclTerraform(struct!.warehouseLocation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccChannelDeadLetterQueueS3PropertyToTerraform(struct?: CcChannel.DeadLetterQueueS3Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bucket_arn: cdktn.stringToTerraform(struct!.bucketArn),
        error_output_prefix: cdktn.stringToTerraform(struct!.errorOutputPrefix),
        expected_bucket_owner: cdktn.stringToTerraform(struct!.expectedBucketOwner),
    }
}


export function ccChannelDeadLetterQueueS3PropertyToHclTerraform(struct?: CcChannel.DeadLetterQueueS3Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bucket_arn: {
            value: cdktn.stringToHclTerraform(struct!.bucketArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        error_output_prefix: {
            value: cdktn.stringToHclTerraform(struct!.errorOutputPrefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        expected_bucket_owner: {
            value: cdktn.stringToHclTerraform(struct!.expectedBucketOwner),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccChannelPartitionSourcePropertyToTerraform(struct?: CcChannel.PartitionSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        source_name: cdktn.stringToTerraform(struct!.sourceName),
    }
}


export function ccChannelPartitionSourcePropertyToHclTerraform(struct?: CcChannel.PartitionSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        source_name: {
            value: cdktn.stringToHclTerraform(struct!.sourceName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccChannelPartitionSpecPropertyToTerraform(struct?: CcChannel.PartitionSpecProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        partition_strategy: cdktn.stringToTerraform(struct!.partitionStrategy),
        source_list: cdktn.listMapper(ccChannelPartitionSourcePropertyToTerraform, false)(struct!.sourceList),
    }
}


export function ccChannelPartitionSpecPropertyToHclTerraform(struct?: CcChannel.PartitionSpecProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        partition_strategy: {
            value: cdktn.stringToHclTerraform(struct!.partitionStrategy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        source_list: {
            value: cdktn.listMapperHcl(ccChannelPartitionSourcePropertyToHclTerraform, false)(struct!.sourceList),
            isBlock: true,
            type: "list",
            storageClassType: "PartitionSourcePropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccChannelDestinationTablePropertyToTerraform(struct?: CcChannel.DestinationTableProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        destination_database_name: cdktn.stringToTerraform(struct!.destinationDatabaseName),
        destination_table_name: cdktn.stringToTerraform(struct!.destinationTableName),
        partition_spec: ccChannelPartitionSpecPropertyToTerraform(struct!.partitionSpec),
    }
}


export function ccChannelDestinationTablePropertyToHclTerraform(struct?: CcChannel.DestinationTableProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        destination_database_name: {
            value: cdktn.stringToHclTerraform(struct!.destinationDatabaseName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        destination_table_name: {
            value: cdktn.stringToHclTerraform(struct!.destinationTableName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        partition_spec: {
            value: ccChannelPartitionSpecPropertyToHclTerraform(struct!.partitionSpec),
            isBlock: true,
            type: "struct",
            storageClassType: "PartitionSpecProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccChannelSchemaEvolutionPropertyToTerraform(struct?: CcChannel.SchemaEvolutionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enable_schema_evolution: cdktn.booleanToTerraform(struct!.enableSchemaEvolution),
    }
}


export function ccChannelSchemaEvolutionPropertyToHclTerraform(struct?: CcChannel.SchemaEvolutionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enable_schema_evolution: {
            value: cdktn.booleanToHclTerraform(struct!.enableSchemaEvolution),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccChannelTableCreationPropertyToTerraform(struct?: CcChannel.TableCreationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enable_table_creation: cdktn.booleanToTerraform(struct!.enableTableCreation),
    }
}


export function ccChannelTableCreationPropertyToHclTerraform(struct?: CcChannel.TableCreationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enable_table_creation: {
            value: cdktn.booleanToHclTerraform(struct!.enableTableCreation),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccChannelIcebergDestinationConfigurationPropertyToTerraform(struct?: CcChannel.IcebergDestinationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        append_only: cdktn.booleanToTerraform(struct!.appendOnly),
        catalog: ccChannelCatalogPropertyToTerraform(struct!.catalog),
        compression_type: cdktn.stringToTerraform(struct!.compressionType),
        data_freshness_in_seconds: cdktn.numberToTerraform(struct!.dataFreshnessInSeconds),
        dead_letter_queue_s3: ccChannelDeadLetterQueueS3PropertyToTerraform(struct!.deadLetterQueueS3),
        destination_table_list: cdktn.listMapper(ccChannelDestinationTablePropertyToTerraform, false)(struct!.destinationTableList),
        schema_evolution: ccChannelSchemaEvolutionPropertyToTerraform(struct!.schemaEvolution),
        service_execution_role_arn: cdktn.stringToTerraform(struct!.serviceExecutionRoleArn),
        table_creation: ccChannelTableCreationPropertyToTerraform(struct!.tableCreation),
    }
}


export function ccChannelIcebergDestinationConfigurationPropertyToHclTerraform(struct?: CcChannel.IcebergDestinationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        append_only: {
            value: cdktn.booleanToHclTerraform(struct!.appendOnly),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        catalog: {
            value: ccChannelCatalogPropertyToHclTerraform(struct!.catalog),
            isBlock: true,
            type: "struct",
            storageClassType: "CatalogProperty",
        },
        compression_type: {
            value: cdktn.stringToHclTerraform(struct!.compressionType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        data_freshness_in_seconds: {
            value: cdktn.numberToHclTerraform(struct!.dataFreshnessInSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        dead_letter_queue_s3: {
            value: ccChannelDeadLetterQueueS3PropertyToHclTerraform(struct!.deadLetterQueueS3),
            isBlock: true,
            type: "struct",
            storageClassType: "DeadLetterQueueS3Property",
        },
        destination_table_list: {
            value: cdktn.listMapperHcl(ccChannelDestinationTablePropertyToHclTerraform, false)(struct!.destinationTableList),
            isBlock: true,
            type: "list",
            storageClassType: "DestinationTablePropertyList",
        },
        schema_evolution: {
            value: ccChannelSchemaEvolutionPropertyToHclTerraform(struct!.schemaEvolution),
            isBlock: true,
            type: "struct",
            storageClassType: "SchemaEvolutionProperty",
        },
        service_execution_role_arn: {
            value: cdktn.stringToHclTerraform(struct!.serviceExecutionRoleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        table_creation: {
            value: ccChannelTableCreationPropertyToHclTerraform(struct!.tableCreation),
            isBlock: true,
            type: "struct",
            storageClassType: "TableCreationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccChannelCloudWatchLogsLogDestinationPropertyToTerraform(struct?: CcChannel.CloudWatchLogsLogDestinationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enabled: cdktn.booleanToTerraform(struct!.enabled),
        log_group: cdktn.stringToTerraform(struct!.logGroup),
    }
}


export function ccChannelCloudWatchLogsLogDestinationPropertyToHclTerraform(struct?: CcChannel.CloudWatchLogsLogDestinationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enabled: {
            value: cdktn.booleanToHclTerraform(struct!.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
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


export function ccChannelFirehoseLogDestinationPropertyToTerraform(struct?: CcChannel.FirehoseLogDestinationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        delivery_stream: cdktn.stringToTerraform(struct!.deliveryStream),
        enabled: cdktn.booleanToTerraform(struct!.enabled),
    }
}


export function ccChannelFirehoseLogDestinationPropertyToHclTerraform(struct?: CcChannel.FirehoseLogDestinationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        delivery_stream: {
            value: cdktn.stringToHclTerraform(struct!.deliveryStream),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        enabled: {
            value: cdktn.booleanToHclTerraform(struct!.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccChannelS3LogDestinationPropertyToTerraform(struct?: CcChannel.S3LogDestinationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bucket: cdktn.stringToTerraform(struct!.bucket),
        enabled: cdktn.booleanToTerraform(struct!.enabled),
        prefix: cdktn.stringToTerraform(struct!.prefix),
    }
}


export function ccChannelS3LogDestinationPropertyToHclTerraform(struct?: CcChannel.S3LogDestinationProperty | cdktn.IResolvable): any {
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
        enabled: {
            value: cdktn.booleanToHclTerraform(struct!.enabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
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


export function ccChannelChannelLoggingInfoPropertyToTerraform(struct?: CcChannel.ChannelLoggingInfoProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cloudwatch_logs: ccChannelCloudWatchLogsLogDestinationPropertyToTerraform(struct!.cloudwatchLogs),
        firehose: ccChannelFirehoseLogDestinationPropertyToTerraform(struct!.firehose),
        s3: ccChannelS3LogDestinationPropertyToTerraform(struct!.s3),
    }
}


export function ccChannelChannelLoggingInfoPropertyToHclTerraform(struct?: CcChannel.ChannelLoggingInfoProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cloudwatch_logs: {
            value: ccChannelCloudWatchLogsLogDestinationPropertyToHclTerraform(struct!.cloudwatchLogs),
            isBlock: true,
            type: "struct",
            storageClassType: "CloudWatchLogsLogDestinationProperty",
        },
        firehose: {
            value: ccChannelFirehoseLogDestinationPropertyToHclTerraform(struct!.firehose),
            isBlock: true,
            type: "struct",
            storageClassType: "FirehoseLogDestinationProperty",
        },
        s3: {
            value: ccChannelS3LogDestinationPropertyToHclTerraform(struct!.s3),
            isBlock: true,
            type: "struct",
            storageClassType: "S3LogDestinationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccChannelS3DestinationConfigurationDeadLetterQueueS3PropertyToTerraform(struct?: CcChannel.S3DestinationConfigurationDeadLetterQueueS3Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bucket_arn: cdktn.stringToTerraform(struct!.bucketArn),
        error_output_prefix: cdktn.stringToTerraform(struct!.errorOutputPrefix),
        expected_bucket_owner: cdktn.stringToTerraform(struct!.expectedBucketOwner),
    }
}


export function ccChannelS3DestinationConfigurationDeadLetterQueueS3PropertyToHclTerraform(struct?: CcChannel.S3DestinationConfigurationDeadLetterQueueS3Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bucket_arn: {
            value: cdktn.stringToHclTerraform(struct!.bucketArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        error_output_prefix: {
            value: cdktn.stringToHclTerraform(struct!.errorOutputPrefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        expected_bucket_owner: {
            value: cdktn.stringToHclTerraform(struct!.expectedBucketOwner),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccChannelS3StoragePropertyToTerraform(struct?: CcChannel.S3StorageProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bucket_arn: cdktn.stringToTerraform(struct!.bucketArn),
        compression_type: cdktn.stringToTerraform(struct!.compressionType),
        expected_bucket_owner: cdktn.stringToTerraform(struct!.expectedBucketOwner),
        output_key_template: cdktn.stringToTerraform(struct!.outputKeyTemplate),
        output_prefix: cdktn.stringToTerraform(struct!.outputPrefix),
        storage_class: cdktn.stringToTerraform(struct!.storageClass),
    }
}


export function ccChannelS3StoragePropertyToHclTerraform(struct?: CcChannel.S3StorageProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bucket_arn: {
            value: cdktn.stringToHclTerraform(struct!.bucketArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        compression_type: {
            value: cdktn.stringToHclTerraform(struct!.compressionType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        expected_bucket_owner: {
            value: cdktn.stringToHclTerraform(struct!.expectedBucketOwner),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        output_key_template: {
            value: cdktn.stringToHclTerraform(struct!.outputKeyTemplate),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        output_prefix: {
            value: cdktn.stringToHclTerraform(struct!.outputPrefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
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


export function ccChannelS3DestinationConfigurationPropertyToTerraform(struct?: CcChannel.S3DestinationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        data_freshness_in_seconds: cdktn.numberToTerraform(struct!.dataFreshnessInSeconds),
        dead_letter_queue_s3: ccChannelS3DestinationConfigurationDeadLetterQueueS3PropertyToTerraform(struct!.deadLetterQueueS3),
        service_execution_role_arn: cdktn.stringToTerraform(struct!.serviceExecutionRoleArn),
        storage: ccChannelS3StoragePropertyToTerraform(struct!.storage),
    }
}


export function ccChannelS3DestinationConfigurationPropertyToHclTerraform(struct?: CcChannel.S3DestinationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        data_freshness_in_seconds: {
            value: cdktn.numberToHclTerraform(struct!.dataFreshnessInSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        dead_letter_queue_s3: {
            value: ccChannelS3DestinationConfigurationDeadLetterQueueS3PropertyToHclTerraform(struct!.deadLetterQueueS3),
            isBlock: true,
            type: "struct",
            storageClassType: "S3DestinationConfigurationDeadLetterQueueS3Property",
        },
        service_execution_role_arn: {
            value: cdktn.stringToHclTerraform(struct!.serviceExecutionRoleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        storage: {
            value: ccChannelS3StoragePropertyToHclTerraform(struct!.storage),
            isBlock: true,
            type: "struct",
            storageClassType: "S3StorageProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccChannelStateInfoPropertyToTerraform(struct?: CcChannel.StateInfoProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccChannelStateInfoPropertyToHclTerraform(struct?: CcChannel.StateInfoProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccChannelRecordConverterPropertyToTerraform(struct?: CcChannel.RecordConverterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        value_converter: cdktn.stringToTerraform(struct!.valueConverter),
    }
}


export function ccChannelRecordConverterPropertyToHclTerraform(struct?: CcChannel.RecordConverterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        value_converter: {
            value: cdktn.stringToHclTerraform(struct!.valueConverter),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccChannelRecordSchemaPropertyToTerraform(struct?: CcChannel.RecordSchemaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        gsr_arn: cdktn.stringToTerraform(struct!.gsrArn),
    }
}


export function ccChannelRecordSchemaPropertyToHclTerraform(struct?: CcChannel.RecordSchemaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        gsr_arn: {
            value: cdktn.stringToHclTerraform(struct!.gsrArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccChannelTopicConfigurationPropertyToTerraform(struct?: CcChannel.TopicConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        record_converter: ccChannelRecordConverterPropertyToTerraform(struct!.recordConverter),
        record_schema: ccChannelRecordSchemaPropertyToTerraform(struct!.recordSchema),
        topic_arn: cdktn.stringToTerraform(struct!.topicArn),
    }
}


export function ccChannelTopicConfigurationPropertyToHclTerraform(struct?: CcChannel.TopicConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        record_converter: {
            value: ccChannelRecordConverterPropertyToHclTerraform(struct!.recordConverter),
            isBlock: true,
            type: "struct",
            storageClassType: "RecordConverterProperty",
        },
        record_schema: {
            value: ccChannelRecordSchemaPropertyToHclTerraform(struct!.recordSchema),
            isBlock: true,
            type: "struct",
            storageClassType: "RecordSchemaProperty",
        },
        topic_arn: {
            value: cdktn.stringToHclTerraform(struct!.topicArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcChannel {
export interface EncryptionConfigurationProperty {
    /**
    * The ARN of the KMS key for encryption
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_channel#kms_key_arn CcChannel#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
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
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EncryptionConfigurationProperty | cdktn.IResolvable | undefined) {
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
export interface CatalogProperty {
    /**
    * The ARN of the catalog
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_channel#catalog_arn CcChannel#catalog_arn}
    */
    readonly catalogArn?: string;
    /**
    * The warehouse location
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_channel#warehouse_location CcChannel#warehouse_location}
    */
    readonly warehouseLocation?: string;
}
export class CatalogPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CatalogProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._catalogArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.catalogArn = this._catalogArn;
        }
        if (this._warehouseLocation !== undefined) {
            hasAnyValues = true;
            internalValueResult.warehouseLocation = this._warehouseLocation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CatalogProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._catalogArn = undefined;
            this._warehouseLocation = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._catalogArn = value.catalogArn;
            this._warehouseLocation = value.warehouseLocation;
        }
    }

    // catalog_arn - computed: true, optional: true, required: false
    private _catalogArn?: string; 
    public get catalogArn() {
        return this.getStringAttribute('catalog_arn');
    }
    public set catalogArn(value: string) {
        this._catalogArn = value;
    }
    public resetCatalogArn() {
        this._catalogArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get catalogArnInput() {
        return this._catalogArn;
    }

    // warehouse_location - computed: true, optional: true, required: false
    private _warehouseLocation?: string; 
    public get warehouseLocation() {
        return this.getStringAttribute('warehouse_location');
    }
    public set warehouseLocation(value: string) {
        this._warehouseLocation = value;
    }
    public resetWarehouseLocation() {
        this._warehouseLocation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get warehouseLocationInput() {
        return this._warehouseLocation;
    }
}
export interface DeadLetterQueueS3Property {
    /**
    * The ARN of the S3 bucket
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_channel#bucket_arn CcChannel#bucket_arn}
    */
    readonly bucketArn?: string;
    /**
    * The error output prefix
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_channel#error_output_prefix CcChannel#error_output_prefix}
    */
    readonly errorOutputPrefix?: string;
    /**
    * Optional 12-digit AWS account ID expected to own the dead-letter S3 bucket
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_channel#expected_bucket_owner CcChannel#expected_bucket_owner}
    */
    readonly expectedBucketOwner?: string;
}
export class DeadLetterQueueS3PropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DeadLetterQueueS3Property | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bucketArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketArn = this._bucketArn;
        }
        if (this._errorOutputPrefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.errorOutputPrefix = this._errorOutputPrefix;
        }
        if (this._expectedBucketOwner !== undefined) {
            hasAnyValues = true;
            internalValueResult.expectedBucketOwner = this._expectedBucketOwner;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DeadLetterQueueS3Property | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bucketArn = undefined;
            this._errorOutputPrefix = undefined;
            this._expectedBucketOwner = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bucketArn = value.bucketArn;
            this._errorOutputPrefix = value.errorOutputPrefix;
            this._expectedBucketOwner = value.expectedBucketOwner;
        }
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

    // error_output_prefix - computed: true, optional: true, required: false
    private _errorOutputPrefix?: string; 
    public get errorOutputPrefix() {
        return this.getStringAttribute('error_output_prefix');
    }
    public set errorOutputPrefix(value: string) {
        this._errorOutputPrefix = value;
    }
    public resetErrorOutputPrefix() {
        this._errorOutputPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get errorOutputPrefixInput() {
        return this._errorOutputPrefix;
    }

    // expected_bucket_owner - computed: true, optional: true, required: false
    private _expectedBucketOwner?: string; 
    public get expectedBucketOwner() {
        return this.getStringAttribute('expected_bucket_owner');
    }
    public set expectedBucketOwner(value: string) {
        this._expectedBucketOwner = value;
    }
    public resetExpectedBucketOwner() {
        this._expectedBucketOwner = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get expectedBucketOwnerInput() {
        return this._expectedBucketOwner;
    }
}
export interface PartitionSourceProperty {
    /**
    * Source name
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_channel#source_name CcChannel#source_name}
    */
    readonly sourceName?: string;
}
export class PartitionSourcePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): PartitionSourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._sourceName !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceName = this._sourceName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PartitionSourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._sourceName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._sourceName = value.sourceName;
        }
    }

    // source_name - computed: true, optional: true, required: false
    private _sourceName?: string; 
    public get sourceName() {
        return this.getStringAttribute('source_name');
    }
    public set sourceName(value: string) {
        this._sourceName = value;
    }
    public resetSourceName() {
        this._sourceName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceNameInput() {
        return this._sourceName;
    }
}

export class PartitionSourcePropertyList extends cdktn.ComplexList {
    public internalValue? : PartitionSourceProperty[] | cdktn.IResolvable

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
    public get(index: number): PartitionSourcePropertyOutputReference {
        return new PartitionSourcePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface PartitionSpecProperty {
    /**
    * Partition strategy for MSK channel
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_channel#partition_strategy CcChannel#partition_strategy}
    */
    readonly partitionStrategy?: string;
    /**
    * Source list
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_channel#source_list CcChannel#source_list}
    */
    readonly sourceList?: PartitionSourceProperty[] | cdktn.IResolvable;
}
export class PartitionSpecPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PartitionSpecProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._partitionStrategy !== undefined) {
            hasAnyValues = true;
            internalValueResult.partitionStrategy = this._partitionStrategy;
        }
        if (this._sourceList?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceList = this._sourceList?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PartitionSpecProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._partitionStrategy = undefined;
            this._sourceList.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._partitionStrategy = value.partitionStrategy;
            this._sourceList.internalValue = value.sourceList;
        }
    }

    // partition_strategy - computed: true, optional: true, required: false
    private _partitionStrategy?: string; 
    public get partitionStrategy() {
        return this.getStringAttribute('partition_strategy');
    }
    public set partitionStrategy(value: string) {
        this._partitionStrategy = value;
    }
    public resetPartitionStrategy() {
        this._partitionStrategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get partitionStrategyInput() {
        return this._partitionStrategy;
    }

    // source_list - computed: true, optional: true, required: false
    private _sourceList = new PartitionSourcePropertyList(this, "source_list", false);
    public get sourceList() {
        return this._sourceList;
    }
    public putSourceList(value: PartitionSourceProperty[] | cdktn.IResolvable) {
        this._sourceList.internalValue = value;
    }
    public resetSourceList() {
        this._sourceList.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceListInput() {
        return this._sourceList.internalValue;
    }
}
export interface DestinationTableProperty {
    /**
    * The destination database name
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_channel#destination_database_name CcChannel#destination_database_name}
    */
    readonly destinationDatabaseName?: string;
    /**
    * The destination table name
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_channel#destination_table_name CcChannel#destination_table_name}
    */
    readonly destinationTableName?: string;
    /**
    * Partition specification
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_channel#partition_spec CcChannel#partition_spec}
    */
    readonly partitionSpec?: PartitionSpecProperty;
}
export class DestinationTablePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): DestinationTableProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._destinationDatabaseName !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinationDatabaseName = this._destinationDatabaseName;
        }
        if (this._destinationTableName !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinationTableName = this._destinationTableName;
        }
        if (this._partitionSpec?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.partitionSpec = this._partitionSpec?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DestinationTableProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._destinationDatabaseName = undefined;
            this._destinationTableName = undefined;
            this._partitionSpec.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._destinationDatabaseName = value.destinationDatabaseName;
            this._destinationTableName = value.destinationTableName;
            this._partitionSpec.internalValue = value.partitionSpec;
        }
    }

    // destination_database_name - computed: true, optional: true, required: false
    private _destinationDatabaseName?: string; 
    public get destinationDatabaseName() {
        return this.getStringAttribute('destination_database_name');
    }
    public set destinationDatabaseName(value: string) {
        this._destinationDatabaseName = value;
    }
    public resetDestinationDatabaseName() {
        this._destinationDatabaseName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationDatabaseNameInput() {
        return this._destinationDatabaseName;
    }

    // destination_table_name - computed: true, optional: true, required: false
    private _destinationTableName?: string; 
    public get destinationTableName() {
        return this.getStringAttribute('destination_table_name');
    }
    public set destinationTableName(value: string) {
        this._destinationTableName = value;
    }
    public resetDestinationTableName() {
        this._destinationTableName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationTableNameInput() {
        return this._destinationTableName;
    }

    // partition_spec - computed: true, optional: true, required: false
    private _partitionSpec = new PartitionSpecPropertyOutputReference(this, "partition_spec");
    public get partitionSpec() {
        return this._partitionSpec;
    }
    public putPartitionSpec(value: PartitionSpecProperty) {
        this._partitionSpec.internalValue = value;
    }
    public resetPartitionSpec() {
        this._partitionSpec.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get partitionSpecInput() {
        return this._partitionSpec.internalValue;
    }
}

export class DestinationTablePropertyList extends cdktn.ComplexList {
    public internalValue? : DestinationTableProperty[] | cdktn.IResolvable

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
    public get(index: number): DestinationTablePropertyOutputReference {
        return new DestinationTablePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface SchemaEvolutionProperty {
    /**
    * Whether schema evolution is enabled
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_channel#enable_schema_evolution CcChannel#enable_schema_evolution}
    */
    readonly enableSchemaEvolution?: boolean | cdktn.IResolvable;
}
export class SchemaEvolutionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SchemaEvolutionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enableSchemaEvolution !== undefined) {
            hasAnyValues = true;
            internalValueResult.enableSchemaEvolution = this._enableSchemaEvolution;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SchemaEvolutionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enableSchemaEvolution = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enableSchemaEvolution = value.enableSchemaEvolution;
        }
    }

    // enable_schema_evolution - computed: true, optional: true, required: false
    private _enableSchemaEvolution?: boolean | cdktn.IResolvable; 
    public get enableSchemaEvolution() {
        return this.getBooleanAttribute('enable_schema_evolution');
    }
    public set enableSchemaEvolution(value: boolean | cdktn.IResolvable) {
        this._enableSchemaEvolution = value;
    }
    public resetEnableSchemaEvolution() {
        this._enableSchemaEvolution = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableSchemaEvolutionInput() {
        return this._enableSchemaEvolution;
    }
}
export interface TableCreationProperty {
    /**
    * Whether table creation is enabled
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_channel#enable_table_creation CcChannel#enable_table_creation}
    */
    readonly enableTableCreation?: boolean | cdktn.IResolvable;
}
export class TableCreationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TableCreationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enableTableCreation !== undefined) {
            hasAnyValues = true;
            internalValueResult.enableTableCreation = this._enableTableCreation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TableCreationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enableTableCreation = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enableTableCreation = value.enableTableCreation;
        }
    }

    // enable_table_creation - computed: true, optional: true, required: false
    private _enableTableCreation?: boolean | cdktn.IResolvable; 
    public get enableTableCreation() {
        return this.getBooleanAttribute('enable_table_creation');
    }
    public set enableTableCreation(value: boolean | cdktn.IResolvable) {
        this._enableTableCreation = value;
    }
    public resetEnableTableCreation() {
        this._enableTableCreation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableTableCreationInput() {
        return this._enableTableCreation;
    }
}
export interface IcebergDestinationConfigurationProperty {
    /**
    * Append only mode
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_channel#append_only CcChannel#append_only}
    */
    readonly appendOnly?: boolean | cdktn.IResolvable;
    /**
    * Catalog configuration of the destination
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_channel#catalog CcChannel#catalog}
    */
    readonly catalog?: CatalogProperty;
    /**
    * Compression codec for Iceberg table data files. Defaults to ZSTD.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_channel#compression_type CcChannel#compression_type}
    */
    readonly compressionType?: string;
    /**
    * Data freshness in seconds
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_channel#data_freshness_in_seconds CcChannel#data_freshness_in_seconds}
    */
    readonly dataFreshnessInSeconds?: number;
    /**
    * Dead letter queue S3 configuration of the destination
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_channel#dead_letter_queue_s3 CcChannel#dead_letter_queue_s3}
    */
    readonly deadLetterQueueS3?: DeadLetterQueueS3Property;
    /**
    * List of destination tables
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_channel#destination_table_list CcChannel#destination_table_list}
    */
    readonly destinationTableList?: DestinationTableProperty[] | cdktn.IResolvable;
    /**
    * Schema evolution configuration of the destination
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_channel#schema_evolution CcChannel#schema_evolution}
    */
    readonly schemaEvolution?: SchemaEvolutionProperty;
    /**
    * The Amazon Resource Name (ARN) of an IAM role used by MSK to access the table
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_channel#service_execution_role_arn CcChannel#service_execution_role_arn}
    */
    readonly serviceExecutionRoleArn?: string;
    /**
    * Table creation configuration of the destination
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_channel#table_creation CcChannel#table_creation}
    */
    readonly tableCreation?: TableCreationProperty;
}
export class IcebergDestinationConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IcebergDestinationConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._appendOnly !== undefined) {
            hasAnyValues = true;
            internalValueResult.appendOnly = this._appendOnly;
        }
        if (this._catalog?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.catalog = this._catalog?.internalValue;
        }
        if (this._compressionType !== undefined) {
            hasAnyValues = true;
            internalValueResult.compressionType = this._compressionType;
        }
        if (this._dataFreshnessInSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataFreshnessInSeconds = this._dataFreshnessInSeconds;
        }
        if (this._deadLetterQueueS3?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.deadLetterQueueS3 = this._deadLetterQueueS3?.internalValue;
        }
        if (this._destinationTableList?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinationTableList = this._destinationTableList?.internalValue;
        }
        if (this._schemaEvolution?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.schemaEvolution = this._schemaEvolution?.internalValue;
        }
        if (this._serviceExecutionRoleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.serviceExecutionRoleArn = this._serviceExecutionRoleArn;
        }
        if (this._tableCreation?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tableCreation = this._tableCreation?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IcebergDestinationConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._appendOnly = undefined;
            this._catalog.internalValue = undefined;
            this._compressionType = undefined;
            this._dataFreshnessInSeconds = undefined;
            this._deadLetterQueueS3.internalValue = undefined;
            this._destinationTableList.internalValue = undefined;
            this._schemaEvolution.internalValue = undefined;
            this._serviceExecutionRoleArn = undefined;
            this._tableCreation.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._appendOnly = value.appendOnly;
            this._catalog.internalValue = value.catalog;
            this._compressionType = value.compressionType;
            this._dataFreshnessInSeconds = value.dataFreshnessInSeconds;
            this._deadLetterQueueS3.internalValue = value.deadLetterQueueS3;
            this._destinationTableList.internalValue = value.destinationTableList;
            this._schemaEvolution.internalValue = value.schemaEvolution;
            this._serviceExecutionRoleArn = value.serviceExecutionRoleArn;
            this._tableCreation.internalValue = value.tableCreation;
        }
    }

    // append_only - computed: true, optional: true, required: false
    private _appendOnly?: boolean | cdktn.IResolvable; 
    public get appendOnly() {
        return this.getBooleanAttribute('append_only');
    }
    public set appendOnly(value: boolean | cdktn.IResolvable) {
        this._appendOnly = value;
    }
    public resetAppendOnly() {
        this._appendOnly = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get appendOnlyInput() {
        return this._appendOnly;
    }

    // catalog - computed: true, optional: true, required: false
    private _catalog = new CatalogPropertyOutputReference(this, "catalog");
    public get catalog() {
        return this._catalog;
    }
    public putCatalog(value: CatalogProperty) {
        this._catalog.internalValue = value;
    }
    public resetCatalog() {
        this._catalog.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get catalogInput() {
        return this._catalog.internalValue;
    }

    // compression_type - computed: true, optional: true, required: false
    private _compressionType?: string; 
    public get compressionType() {
        return this.getStringAttribute('compression_type');
    }
    public set compressionType(value: string) {
        this._compressionType = value;
    }
    public resetCompressionType() {
        this._compressionType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get compressionTypeInput() {
        return this._compressionType;
    }

    // data_freshness_in_seconds - computed: true, optional: true, required: false
    private _dataFreshnessInSeconds?: number; 
    public get dataFreshnessInSeconds() {
        return this.getNumberAttribute('data_freshness_in_seconds');
    }
    public set dataFreshnessInSeconds(value: number) {
        this._dataFreshnessInSeconds = value;
    }
    public resetDataFreshnessInSeconds() {
        this._dataFreshnessInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataFreshnessInSecondsInput() {
        return this._dataFreshnessInSeconds;
    }

    // dead_letter_queue_s3 - computed: true, optional: true, required: false
    private _deadLetterQueueS3 = new DeadLetterQueueS3PropertyOutputReference(this, "dead_letter_queue_s3");
    public get deadLetterQueueS3() {
        return this._deadLetterQueueS3;
    }
    public putDeadLetterQueueS3(value: DeadLetterQueueS3Property) {
        this._deadLetterQueueS3.internalValue = value;
    }
    public resetDeadLetterQueueS3() {
        this._deadLetterQueueS3.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deadLetterQueueS3Input() {
        return this._deadLetterQueueS3.internalValue;
    }

    // destination_table_list - computed: true, optional: true, required: false
    private _destinationTableList = new DestinationTablePropertyList(this, "destination_table_list", false);
    public get destinationTableList() {
        return this._destinationTableList;
    }
    public putDestinationTableList(value: DestinationTableProperty[] | cdktn.IResolvable) {
        this._destinationTableList.internalValue = value;
    }
    public resetDestinationTableList() {
        this._destinationTableList.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationTableListInput() {
        return this._destinationTableList.internalValue;
    }

    // schema_evolution - computed: true, optional: true, required: false
    private _schemaEvolution = new SchemaEvolutionPropertyOutputReference(this, "schema_evolution");
    public get schemaEvolution() {
        return this._schemaEvolution;
    }
    public putSchemaEvolution(value: SchemaEvolutionProperty) {
        this._schemaEvolution.internalValue = value;
    }
    public resetSchemaEvolution() {
        this._schemaEvolution.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get schemaEvolutionInput() {
        return this._schemaEvolution.internalValue;
    }

    // service_execution_role_arn - computed: true, optional: true, required: false
    private _serviceExecutionRoleArn?: string; 
    public get serviceExecutionRoleArn() {
        return this.getStringAttribute('service_execution_role_arn');
    }
    public set serviceExecutionRoleArn(value: string) {
        this._serviceExecutionRoleArn = value;
    }
    public resetServiceExecutionRoleArn() {
        this._serviceExecutionRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceExecutionRoleArnInput() {
        return this._serviceExecutionRoleArn;
    }

    // table_creation - computed: true, optional: true, required: false
    private _tableCreation = new TableCreationPropertyOutputReference(this, "table_creation");
    public get tableCreation() {
        return this._tableCreation;
    }
    public putTableCreation(value: TableCreationProperty) {
        this._tableCreation.internalValue = value;
    }
    public resetTableCreation() {
        this._tableCreation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tableCreationInput() {
        return this._tableCreation.internalValue;
    }
}
export interface CloudWatchLogsLogDestinationProperty {
    /**
    * Whether CloudWatch Logs logging is enabled
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_channel#enabled CcChannel#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
    /**
    * The CloudWatch log group for log delivery
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_channel#log_group CcChannel#log_group}
    */
    readonly logGroup?: string;
}
export class CloudWatchLogsLogDestinationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CloudWatchLogsLogDestinationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._logGroup !== undefined) {
            hasAnyValues = true;
            internalValueResult.logGroup = this._logGroup;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CloudWatchLogsLogDestinationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enabled = undefined;
            this._logGroup = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enabled = value.enabled;
            this._logGroup = value.logGroup;
        }
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
export interface FirehoseLogDestinationProperty {
    /**
    * The Firehose delivery stream for log delivery
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_channel#delivery_stream CcChannel#delivery_stream}
    */
    readonly deliveryStream?: string;
    /**
    * Whether Firehose logging is enabled
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_channel#enabled CcChannel#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
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
        if (this._deliveryStream !== undefined) {
            hasAnyValues = true;
            internalValueResult.deliveryStream = this._deliveryStream;
        }
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FirehoseLogDestinationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._deliveryStream = undefined;
            this._enabled = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._deliveryStream = value.deliveryStream;
            this._enabled = value.enabled;
        }
    }

    // delivery_stream - computed: true, optional: true, required: false
    private _deliveryStream?: string; 
    public get deliveryStream() {
        return this.getStringAttribute('delivery_stream');
    }
    public set deliveryStream(value: string) {
        this._deliveryStream = value;
    }
    public resetDeliveryStream() {
        this._deliveryStream = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deliveryStreamInput() {
        return this._deliveryStream;
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
}
export interface S3LogDestinationProperty {
    /**
    * The name of the S3 bucket for log delivery
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_channel#bucket CcChannel#bucket}
    */
    readonly bucket?: string;
    /**
    * Whether S3 logging is enabled
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_channel#enabled CcChannel#enabled}
    */
    readonly enabled?: boolean | cdktn.IResolvable;
    /**
    * The S3 prefix for log delivery
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_channel#prefix CcChannel#prefix}
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
        if (this._bucket !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucket = this._bucket;
        }
        if (this._enabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
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
            this._bucket = undefined;
            this._enabled = undefined;
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
            this._enabled = value.enabled;
            this._prefix = value.prefix;
        }
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
export interface ChannelLoggingInfoProperty {
    /**
    * CloudWatch Logs log destination details
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_channel#cloudwatch_logs CcChannel#cloudwatch_logs}
    */
    readonly cloudwatchLogs?: CloudWatchLogsLogDestinationProperty;
    /**
    * Firehose log destination details
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_channel#firehose CcChannel#firehose}
    */
    readonly firehose?: FirehoseLogDestinationProperty;
    /**
    * S3 log destination details
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_channel#s3 CcChannel#s3}
    */
    readonly s3?: S3LogDestinationProperty;
}
export class ChannelLoggingInfoPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ChannelLoggingInfoProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cloudwatchLogs?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.cloudwatchLogs = this._cloudwatchLogs?.internalValue;
        }
        if (this._firehose?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.firehose = this._firehose?.internalValue;
        }
        if (this._s3?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3 = this._s3?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ChannelLoggingInfoProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cloudwatchLogs.internalValue = undefined;
            this._firehose.internalValue = undefined;
            this._s3.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cloudwatchLogs.internalValue = value.cloudwatchLogs;
            this._firehose.internalValue = value.firehose;
            this._s3.internalValue = value.s3;
        }
    }

    // cloudwatch_logs - computed: true, optional: true, required: false
    private _cloudwatchLogs = new CloudWatchLogsLogDestinationPropertyOutputReference(this, "cloudwatch_logs");
    public get cloudwatchLogs() {
        return this._cloudwatchLogs;
    }
    public putCloudwatchLogs(value: CloudWatchLogsLogDestinationProperty) {
        this._cloudwatchLogs.internalValue = value;
    }
    public resetCloudwatchLogs() {
        this._cloudwatchLogs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cloudwatchLogsInput() {
        return this._cloudwatchLogs.internalValue;
    }

    // firehose - computed: true, optional: true, required: false
    private _firehose = new FirehoseLogDestinationPropertyOutputReference(this, "firehose");
    public get firehose() {
        return this._firehose;
    }
    public putFirehose(value: FirehoseLogDestinationProperty) {
        this._firehose.internalValue = value;
    }
    public resetFirehose() {
        this._firehose.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get firehoseInput() {
        return this._firehose.internalValue;
    }

    // s3 - computed: true, optional: true, required: false
    private _s3 = new S3LogDestinationPropertyOutputReference(this, "s3");
    public get s3() {
        return this._s3;
    }
    public putS3(value: S3LogDestinationProperty) {
        this._s3.internalValue = value;
    }
    public resetS3() {
        this._s3.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3Input() {
        return this._s3.internalValue;
    }
}
export interface S3DestinationConfigurationDeadLetterQueueS3Property {
    /**
    * The ARN of the S3 bucket
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_channel#bucket_arn CcChannel#bucket_arn}
    */
    readonly bucketArn?: string;
    /**
    * The error output prefix
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_channel#error_output_prefix CcChannel#error_output_prefix}
    */
    readonly errorOutputPrefix?: string;
    /**
    * Optional 12-digit AWS account ID expected to own the dead-letter S3 bucket
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_channel#expected_bucket_owner CcChannel#expected_bucket_owner}
    */
    readonly expectedBucketOwner?: string;
}
export class S3DestinationConfigurationDeadLetterQueueS3PropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3DestinationConfigurationDeadLetterQueueS3Property | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bucketArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketArn = this._bucketArn;
        }
        if (this._errorOutputPrefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.errorOutputPrefix = this._errorOutputPrefix;
        }
        if (this._expectedBucketOwner !== undefined) {
            hasAnyValues = true;
            internalValueResult.expectedBucketOwner = this._expectedBucketOwner;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3DestinationConfigurationDeadLetterQueueS3Property | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bucketArn = undefined;
            this._errorOutputPrefix = undefined;
            this._expectedBucketOwner = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bucketArn = value.bucketArn;
            this._errorOutputPrefix = value.errorOutputPrefix;
            this._expectedBucketOwner = value.expectedBucketOwner;
        }
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

    // error_output_prefix - computed: true, optional: true, required: false
    private _errorOutputPrefix?: string; 
    public get errorOutputPrefix() {
        return this.getStringAttribute('error_output_prefix');
    }
    public set errorOutputPrefix(value: string) {
        this._errorOutputPrefix = value;
    }
    public resetErrorOutputPrefix() {
        this._errorOutputPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get errorOutputPrefixInput() {
        return this._errorOutputPrefix;
    }

    // expected_bucket_owner - computed: true, optional: true, required: false
    private _expectedBucketOwner?: string; 
    public get expectedBucketOwner() {
        return this.getStringAttribute('expected_bucket_owner');
    }
    public set expectedBucketOwner(value: string) {
        this._expectedBucketOwner = value;
    }
    public resetExpectedBucketOwner() {
        this._expectedBucketOwner = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get expectedBucketOwnerInput() {
        return this._expectedBucketOwner;
    }
}
export interface S3StorageProperty {
    /**
    * ARN of the S3 bucket
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_channel#bucket_arn CcChannel#bucket_arn}
    */
    readonly bucketArn?: string;
    /**
    * S3 compression type
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_channel#compression_type CcChannel#compression_type}
    */
    readonly compressionType?: string;
    /**
    * Optional 12-digit AWS account ID expected to own the S3 bucket
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_channel#expected_bucket_owner CcChannel#expected_bucket_owner}
    */
    readonly expectedBucketOwner?: string;
    /**
    * Template for S3 key for output objects, used for partitioning
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_channel#output_key_template CcChannel#output_key_template}
    */
    readonly outputKeyTemplate?: string;
    /**
    * Optional prefix for output objects
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_channel#output_prefix CcChannel#output_prefix}
    */
    readonly outputPrefix?: string;
    /**
    * S3 storage class
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_channel#storage_class CcChannel#storage_class}
    */
    readonly storageClass?: string;
}
export class S3StoragePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3StorageProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bucketArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketArn = this._bucketArn;
        }
        if (this._compressionType !== undefined) {
            hasAnyValues = true;
            internalValueResult.compressionType = this._compressionType;
        }
        if (this._expectedBucketOwner !== undefined) {
            hasAnyValues = true;
            internalValueResult.expectedBucketOwner = this._expectedBucketOwner;
        }
        if (this._outputKeyTemplate !== undefined) {
            hasAnyValues = true;
            internalValueResult.outputKeyTemplate = this._outputKeyTemplate;
        }
        if (this._outputPrefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.outputPrefix = this._outputPrefix;
        }
        if (this._storageClass !== undefined) {
            hasAnyValues = true;
            internalValueResult.storageClass = this._storageClass;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3StorageProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bucketArn = undefined;
            this._compressionType = undefined;
            this._expectedBucketOwner = undefined;
            this._outputKeyTemplate = undefined;
            this._outputPrefix = undefined;
            this._storageClass = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bucketArn = value.bucketArn;
            this._compressionType = value.compressionType;
            this._expectedBucketOwner = value.expectedBucketOwner;
            this._outputKeyTemplate = value.outputKeyTemplate;
            this._outputPrefix = value.outputPrefix;
            this._storageClass = value.storageClass;
        }
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

    // compression_type - computed: true, optional: true, required: false
    private _compressionType?: string; 
    public get compressionType() {
        return this.getStringAttribute('compression_type');
    }
    public set compressionType(value: string) {
        this._compressionType = value;
    }
    public resetCompressionType() {
        this._compressionType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get compressionTypeInput() {
        return this._compressionType;
    }

    // expected_bucket_owner - computed: true, optional: true, required: false
    private _expectedBucketOwner?: string; 
    public get expectedBucketOwner() {
        return this.getStringAttribute('expected_bucket_owner');
    }
    public set expectedBucketOwner(value: string) {
        this._expectedBucketOwner = value;
    }
    public resetExpectedBucketOwner() {
        this._expectedBucketOwner = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get expectedBucketOwnerInput() {
        return this._expectedBucketOwner;
    }

    // output_key_template - computed: true, optional: true, required: false
    private _outputKeyTemplate?: string; 
    public get outputKeyTemplate() {
        return this.getStringAttribute('output_key_template');
    }
    public set outputKeyTemplate(value: string) {
        this._outputKeyTemplate = value;
    }
    public resetOutputKeyTemplate() {
        this._outputKeyTemplate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outputKeyTemplateInput() {
        return this._outputKeyTemplate;
    }

    // output_prefix - computed: true, optional: true, required: false
    private _outputPrefix?: string; 
    public get outputPrefix() {
        return this.getStringAttribute('output_prefix');
    }
    public set outputPrefix(value: string) {
        this._outputPrefix = value;
    }
    public resetOutputPrefix() {
        this._outputPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outputPrefixInput() {
        return this._outputPrefix;
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
export interface S3DestinationConfigurationProperty {
    /**
    * Data freshness in seconds
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_channel#data_freshness_in_seconds CcChannel#data_freshness_in_seconds}
    */
    readonly dataFreshnessInSeconds?: number;
    /**
    * Dead letter queue S3 configuration of the destination
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_channel#dead_letter_queue_s3 CcChannel#dead_letter_queue_s3}
    */
    readonly deadLetterQueueS3?: S3DestinationConfigurationDeadLetterQueueS3Property;
    /**
    * The Amazon Resource Name (ARN) of an IAM role used by MSK to access S3
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_channel#service_execution_role_arn CcChannel#service_execution_role_arn}
    */
    readonly serviceExecutionRoleArn?: string;
    /**
    * S3 storage configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_channel#storage CcChannel#storage}
    */
    readonly storage?: S3StorageProperty;
}
export class S3DestinationConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3DestinationConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dataFreshnessInSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataFreshnessInSeconds = this._dataFreshnessInSeconds;
        }
        if (this._deadLetterQueueS3?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.deadLetterQueueS3 = this._deadLetterQueueS3?.internalValue;
        }
        if (this._serviceExecutionRoleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.serviceExecutionRoleArn = this._serviceExecutionRoleArn;
        }
        if (this._storage?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.storage = this._storage?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3DestinationConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dataFreshnessInSeconds = undefined;
            this._deadLetterQueueS3.internalValue = undefined;
            this._serviceExecutionRoleArn = undefined;
            this._storage.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dataFreshnessInSeconds = value.dataFreshnessInSeconds;
            this._deadLetterQueueS3.internalValue = value.deadLetterQueueS3;
            this._serviceExecutionRoleArn = value.serviceExecutionRoleArn;
            this._storage.internalValue = value.storage;
        }
    }

    // data_freshness_in_seconds - computed: true, optional: true, required: false
    private _dataFreshnessInSeconds?: number; 
    public get dataFreshnessInSeconds() {
        return this.getNumberAttribute('data_freshness_in_seconds');
    }
    public set dataFreshnessInSeconds(value: number) {
        this._dataFreshnessInSeconds = value;
    }
    public resetDataFreshnessInSeconds() {
        this._dataFreshnessInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataFreshnessInSecondsInput() {
        return this._dataFreshnessInSeconds;
    }

    // dead_letter_queue_s3 - computed: true, optional: true, required: false
    private _deadLetterQueueS3 = new S3DestinationConfigurationDeadLetterQueueS3PropertyOutputReference(this, "dead_letter_queue_s3");
    public get deadLetterQueueS3() {
        return this._deadLetterQueueS3;
    }
    public putDeadLetterQueueS3(value: S3DestinationConfigurationDeadLetterQueueS3Property) {
        this._deadLetterQueueS3.internalValue = value;
    }
    public resetDeadLetterQueueS3() {
        this._deadLetterQueueS3.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deadLetterQueueS3Input() {
        return this._deadLetterQueueS3.internalValue;
    }

    // service_execution_role_arn - computed: true, optional: true, required: false
    private _serviceExecutionRoleArn?: string; 
    public get serviceExecutionRoleArn() {
        return this.getStringAttribute('service_execution_role_arn');
    }
    public set serviceExecutionRoleArn(value: string) {
        this._serviceExecutionRoleArn = value;
    }
    public resetServiceExecutionRoleArn() {
        this._serviceExecutionRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceExecutionRoleArnInput() {
        return this._serviceExecutionRoleArn;
    }

    // storage - computed: true, optional: true, required: false
    private _storage = new S3StoragePropertyOutputReference(this, "storage");
    public get storage() {
        return this._storage;
    }
    public putStorage(value: S3StorageProperty) {
        this._storage.internalValue = value;
    }
    public resetStorage() {
        this._storage.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get storageInput() {
        return this._storage.internalValue;
    }
}
export interface StateInfoProperty {
}
export class StateInfoPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): StateInfoProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StateInfoProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // code - computed: true, optional: false, required: false
    public get code() {
        return this.getStringAttribute('code');
    }

    // message - computed: true, optional: false, required: false
    public get message() {
        return this.getStringAttribute('message');
    }
}
export interface RecordConverterProperty {
    /**
    * Value converter for topic data
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_channel#value_converter CcChannel#value_converter}
    */
    readonly valueConverter: string;
}
export class RecordConverterPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RecordConverterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._valueConverter !== undefined) {
            hasAnyValues = true;
            internalValueResult.valueConverter = this._valueConverter;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RecordConverterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._valueConverter = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._valueConverter = value.valueConverter;
        }
    }

    // value_converter - computed: false, optional: false, required: true
    private _valueConverter?: string; 
    public get valueConverter() {
        return this.getStringAttribute('value_converter');
    }
    public set valueConverter(value: string) {
        this._valueConverter = value;
    }
    // Temporarily expose input value. Use with caution.
    public get valueConverterInput() {
        return this._valueConverter;
    }
}
export interface RecordSchemaProperty {
    /**
    * ARN of Glue Schema Registry resource used for table schema
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_channel#gsr_arn CcChannel#gsr_arn}
    */
    readonly gsrArn?: string;
}
export class RecordSchemaPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RecordSchemaProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._gsrArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.gsrArn = this._gsrArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RecordSchemaProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._gsrArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._gsrArn = value.gsrArn;
        }
    }

    // gsr_arn - computed: true, optional: true, required: false
    private _gsrArn?: string; 
    public get gsrArn() {
        return this.getStringAttribute('gsr_arn');
    }
    public set gsrArn(value: string) {
        this._gsrArn = value;
    }
    public resetGsrArn() {
        this._gsrArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get gsrArnInput() {
        return this._gsrArn;
    }
}
export interface TopicConfigurationProperty {
    /**
    * Record converter configuration for a topic
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_channel#record_converter CcChannel#record_converter}
    */
    readonly recordConverter: RecordConverterProperty;
    /**
    * Record schema configuration for a topic
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_channel#record_schema CcChannel#record_schema}
    */
    readonly recordSchema?: RecordSchemaProperty;
    /**
    * The Amazon Resource Name (ARN) that uniquely identifies the topic
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/msk_channel#topic_arn CcChannel#topic_arn}
    */
    readonly topicArn: string;
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
        if (this._recordConverter?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.recordConverter = this._recordConverter?.internalValue;
        }
        if (this._recordSchema?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.recordSchema = this._recordSchema?.internalValue;
        }
        if (this._topicArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.topicArn = this._topicArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TopicConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._recordConverter.internalValue = undefined;
            this._recordSchema.internalValue = undefined;
            this._topicArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._recordConverter.internalValue = value.recordConverter;
            this._recordSchema.internalValue = value.recordSchema;
            this._topicArn = value.topicArn;
        }
    }

    // record_converter - computed: false, optional: false, required: true
    private _recordConverter = new RecordConverterPropertyOutputReference(this, "record_converter");
    public get recordConverter() {
        return this._recordConverter;
    }
    public putRecordConverter(value: RecordConverterProperty) {
        this._recordConverter.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get recordConverterInput() {
        return this._recordConverter.internalValue;
    }

    // record_schema - computed: true, optional: true, required: false
    private _recordSchema = new RecordSchemaPropertyOutputReference(this, "record_schema");
    public get recordSchema() {
        return this._recordSchema;
    }
    public putRecordSchema(value: RecordSchemaProperty) {
        this._recordSchema.internalValue = value;
    }
    public resetRecordSchema() {
        this._recordSchema.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get recordSchemaInput() {
        return this._recordSchema.internalValue;
    }

    // topic_arn - computed: false, optional: false, required: true
    private _topicArn?: string; 
    public get topicArn() {
        return this.getStringAttribute('topic_arn');
    }
    public set topicArn(value: string) {
        this._topicArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get topicArnInput() {
        return this._topicArn;
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
}
