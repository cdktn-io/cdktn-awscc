// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cassandra_table

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcTableProps extends cdktn.TerraformMetaArguments {
    /**
    * Represents the read and write settings used for AutoScaling.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cassandra_table#auto_scaling_specifications CcTable#auto_scaling_specifications}
    */
    readonly autoScalingSpecifications?: CcTable.AutoScalingSpecificationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cassandra_table#billing_mode CcTable#billing_mode}
    */
    readonly billingMode?: CcTable.BillingModeProperty;
    /**
    * Represents the CDC configuration for the table
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cassandra_table#cdc_specification CcTable#cdc_specification}
    */
    readonly cdcSpecification?: CcTable.CdcSpecificationProperty;
    /**
    * Indicates whether client side timestamps are enabled (true) or disabled (false) on the table. False by default, once it is enabled it cannot be disabled again.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cassandra_table#client_side_timestamps_enabled CcTable#client_side_timestamps_enabled}
    */
    readonly clientSideTimestampsEnabled?: boolean | cdktn.IResolvable;
    /**
    * Clustering key columns of the table
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cassandra_table#clustering_key_columns CcTable#clustering_key_columns}
    */
    readonly clusteringKeyColumns?: CcTable.ClusteringKeyColumnProperty[] | cdktn.IResolvable;
    /**
    * Default TTL (Time To Live) in seconds, where zero is disabled. If the value is greater than zero, TTL is enabled for the entire table and an expiration timestamp is added to each column.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cassandra_table#default_time_to_live CcTable#default_time_to_live}
    */
    readonly defaultTimeToLive?: number;
    /**
    * Represents the settings used to enable server-side encryption
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cassandra_table#encryption_specification CcTable#encryption_specification}
    */
    readonly encryptionSpecification?: CcTable.EncryptionSpecificationProperty;
    /**
    * Name for Cassandra keyspace
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cassandra_table#keyspace_name CcTable#keyspace_name}
    */
    readonly keyspaceName: string;
    /**
    * Partition key columns of the table
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cassandra_table#partition_key_columns CcTable#partition_key_columns}
    */
    readonly partitionKeyColumns: CcTable.PartitionKeyColumnsProperty[] | cdktn.IResolvable;
    /**
    * Indicates whether point in time recovery is enabled (true) or disabled (false) on the table
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cassandra_table#point_in_time_recovery_enabled CcTable#point_in_time_recovery_enabled}
    */
    readonly pointInTimeRecoveryEnabled?: boolean | cdktn.IResolvable;
    /**
    * Non-key columns of the table
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cassandra_table#regular_columns CcTable#regular_columns}
    */
    readonly regularColumns?: CcTable.RegularColumnsProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cassandra_table#replica_specifications CcTable#replica_specifications}
    */
    readonly replicaSpecifications?: CcTable.ReplicaSpecificationProperty[] | cdktn.IResolvable;
    /**
    * Name for Cassandra table
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cassandra_table#table_name CcTable#table_name}
    */
    readonly tableName?: string;
    /**
    * An array of key-value pairs to apply to this resource
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cassandra_table#tags CcTable#tags}
    */
    readonly tags?: CcTable.TagsProperty[] | cdktn.IResolvable;
    /**
    * Warm throughput configuration for the table
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cassandra_table#warm_throughput CcTable#warm_throughput}
    */
    readonly warmThroughput?: CcTable.WarmThroughputProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cassandra_table awscc_cassandra_table}
*/
export class CcTable extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_cassandra_table";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcTable resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcTable to import
    * @param importFromId The id of the existing CcTable that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cassandra_table#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcTable to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cassandra_table", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cassandra_table awscc_cassandra_table} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcTableProps
    */
    public constructor(scope: Construct, id: string, config: CcTableProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_cassandra_table',
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
        this._autoScalingSpecifications.internalValue = config.autoScalingSpecifications;
        this._billingMode.internalValue = config.billingMode;
        this._cdcSpecification.internalValue = config.cdcSpecification;
        this._clientSideTimestampsEnabled = config.clientSideTimestampsEnabled;
        this._clusteringKeyColumns.internalValue = config.clusteringKeyColumns;
        this._defaultTimeToLive = config.defaultTimeToLive;
        this._encryptionSpecification.internalValue = config.encryptionSpecification;
        this._keyspaceName = config.keyspaceName;
        this._partitionKeyColumns.internalValue = config.partitionKeyColumns;
        this._pointInTimeRecoveryEnabled = config.pointInTimeRecoveryEnabled;
        this._regularColumns.internalValue = config.regularColumns;
        this._replicaSpecifications.internalValue = config.replicaSpecifications;
        this._tableName = config.tableName;
        this._tags.internalValue = config.tags;
        this._warmThroughput.internalValue = config.warmThroughput;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // auto_scaling_specifications - computed: true, optional: true, required: false
    private _autoScalingSpecifications = new CcTable.AutoScalingSpecificationPropertyOutputReference(this, "auto_scaling_specifications");
    public get autoScalingSpecifications() {
        return this._autoScalingSpecifications;
    }
    public putAutoScalingSpecifications(value: CcTable.AutoScalingSpecificationProperty) {
        this._autoScalingSpecifications.internalValue = value;
    }
    public resetAutoScalingSpecifications() {
        this._autoScalingSpecifications.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoScalingSpecificationsInput() {
        return this._autoScalingSpecifications.internalValue;
    }

    // billing_mode - computed: true, optional: true, required: false
    private _billingMode = new CcTable.BillingModePropertyOutputReference(this, "billing_mode");
    public get billingMode() {
        return this._billingMode;
    }
    public putBillingMode(value: CcTable.BillingModeProperty) {
        this._billingMode.internalValue = value;
    }
    public resetBillingMode() {
        this._billingMode.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get billingModeInput() {
        return this._billingMode.internalValue;
    }

    // cdc_specification - computed: true, optional: true, required: false
    private _cdcSpecification = new CcTable.CdcSpecificationPropertyOutputReference(this, "cdc_specification");
    public get cdcSpecification() {
        return this._cdcSpecification;
    }
    public putCdcSpecification(value: CcTable.CdcSpecificationProperty) {
        this._cdcSpecification.internalValue = value;
    }
    public resetCdcSpecification() {
        this._cdcSpecification.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cdcSpecificationInput() {
        return this._cdcSpecification.internalValue;
    }

    // client_side_timestamps_enabled - computed: true, optional: true, required: false
    private _clientSideTimestampsEnabled?: boolean | cdktn.IResolvable; 
    public get clientSideTimestampsEnabled() {
        return this.getBooleanAttribute('client_side_timestamps_enabled');
    }
    public set clientSideTimestampsEnabled(value: boolean | cdktn.IResolvable) {
        this._clientSideTimestampsEnabled = value;
    }
    public resetClientSideTimestampsEnabled() {
        this._clientSideTimestampsEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientSideTimestampsEnabledInput() {
        return this._clientSideTimestampsEnabled;
    }

    // clustering_key_columns - computed: true, optional: true, required: false
    private _clusteringKeyColumns = new CcTable.ClusteringKeyColumnPropertyList(this, "clustering_key_columns", false);
    public get clusteringKeyColumns() {
        return this._clusteringKeyColumns;
    }
    public putClusteringKeyColumns(value: CcTable.ClusteringKeyColumnProperty[] | cdktn.IResolvable) {
        this._clusteringKeyColumns.internalValue = value;
    }
    public resetClusteringKeyColumns() {
        this._clusteringKeyColumns.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clusteringKeyColumnsInput() {
        return this._clusteringKeyColumns.internalValue;
    }

    // default_time_to_live - computed: true, optional: true, required: false
    private _defaultTimeToLive?: number; 
    public get defaultTimeToLive() {
        return this.getNumberAttribute('default_time_to_live');
    }
    public set defaultTimeToLive(value: number) {
        this._defaultTimeToLive = value;
    }
    public resetDefaultTimeToLive() {
        this._defaultTimeToLive = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultTimeToLiveInput() {
        return this._defaultTimeToLive;
    }

    // encryption_specification - computed: true, optional: true, required: false
    private _encryptionSpecification = new CcTable.EncryptionSpecificationPropertyOutputReference(this, "encryption_specification");
    public get encryptionSpecification() {
        return this._encryptionSpecification;
    }
    public putEncryptionSpecification(value: CcTable.EncryptionSpecificationProperty) {
        this._encryptionSpecification.internalValue = value;
    }
    public resetEncryptionSpecification() {
        this._encryptionSpecification.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionSpecificationInput() {
        return this._encryptionSpecification.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // keyspace_name - computed: false, optional: false, required: true
    private _keyspaceName?: string; 
    public get keyspaceName() {
        return this.getStringAttribute('keyspace_name');
    }
    public set keyspaceName(value: string) {
        this._keyspaceName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get keyspaceNameInput() {
        return this._keyspaceName;
    }

    // partition_key_columns - computed: false, optional: false, required: true
    private _partitionKeyColumns = new CcTable.PartitionKeyColumnsPropertyList(this, "partition_key_columns", false);
    public get partitionKeyColumns() {
        return this._partitionKeyColumns;
    }
    public putPartitionKeyColumns(value: CcTable.PartitionKeyColumnsProperty[] | cdktn.IResolvable) {
        this._partitionKeyColumns.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get partitionKeyColumnsInput() {
        return this._partitionKeyColumns.internalValue;
    }

    // point_in_time_recovery_enabled - computed: true, optional: true, required: false
    private _pointInTimeRecoveryEnabled?: boolean | cdktn.IResolvable; 
    public get pointInTimeRecoveryEnabled() {
        return this.getBooleanAttribute('point_in_time_recovery_enabled');
    }
    public set pointInTimeRecoveryEnabled(value: boolean | cdktn.IResolvable) {
        this._pointInTimeRecoveryEnabled = value;
    }
    public resetPointInTimeRecoveryEnabled() {
        this._pointInTimeRecoveryEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pointInTimeRecoveryEnabledInput() {
        return this._pointInTimeRecoveryEnabled;
    }

    // regular_columns - computed: true, optional: true, required: false
    private _regularColumns = new CcTable.RegularColumnsPropertyList(this, "regular_columns", true);
    public get regularColumns() {
        return this._regularColumns;
    }
    public putRegularColumns(value: CcTable.RegularColumnsProperty[] | cdktn.IResolvable) {
        this._regularColumns.internalValue = value;
    }
    public resetRegularColumns() {
        this._regularColumns.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get regularColumnsInput() {
        return this._regularColumns.internalValue;
    }

    // replica_specifications - computed: true, optional: true, required: false
    private _replicaSpecifications = new CcTable.ReplicaSpecificationPropertyList(this, "replica_specifications", false);
    public get replicaSpecifications() {
        return this._replicaSpecifications;
    }
    public putReplicaSpecifications(value: CcTable.ReplicaSpecificationProperty[] | cdktn.IResolvable) {
        this._replicaSpecifications.internalValue = value;
    }
    public resetReplicaSpecifications() {
        this._replicaSpecifications.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get replicaSpecificationsInput() {
        return this._replicaSpecifications.internalValue;
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

    // tags - computed: true, optional: true, required: false
    private _tags = new CcTable.TagsPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcTable.TagsProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // warm_throughput - computed: true, optional: true, required: false
    private _warmThroughput = new CcTable.WarmThroughputPropertyOutputReference(this, "warm_throughput");
    public get warmThroughput() {
        return this._warmThroughput;
    }
    public putWarmThroughput(value: CcTable.WarmThroughputProperty) {
        this._warmThroughput.internalValue = value;
    }
    public resetWarmThroughput() {
        this._warmThroughput.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get warmThroughputInput() {
        return this._warmThroughput.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            auto_scaling_specifications: ccTableAutoScalingSpecificationPropertyToTerraform(this._autoScalingSpecifications.internalValue),
            billing_mode: ccTableBillingModePropertyToTerraform(this._billingMode.internalValue),
            cdc_specification: ccTableCdcSpecificationPropertyToTerraform(this._cdcSpecification.internalValue),
            client_side_timestamps_enabled: cdktn.booleanToTerraform(this._clientSideTimestampsEnabled),
            clustering_key_columns: cdktn.listMapper(ccTableClusteringKeyColumnPropertyToTerraform, false)(this._clusteringKeyColumns.internalValue),
            default_time_to_live: cdktn.numberToTerraform(this._defaultTimeToLive),
            encryption_specification: ccTableEncryptionSpecificationPropertyToTerraform(this._encryptionSpecification.internalValue),
            keyspace_name: cdktn.stringToTerraform(this._keyspaceName),
            partition_key_columns: cdktn.listMapper(ccTablePartitionKeyColumnsPropertyToTerraform, false)(this._partitionKeyColumns.internalValue),
            point_in_time_recovery_enabled: cdktn.booleanToTerraform(this._pointInTimeRecoveryEnabled),
            regular_columns: cdktn.listMapper(ccTableRegularColumnsPropertyToTerraform, false)(this._regularColumns.internalValue),
            replica_specifications: cdktn.listMapper(ccTableReplicaSpecificationPropertyToTerraform, false)(this._replicaSpecifications.internalValue),
            table_name: cdktn.stringToTerraform(this._tableName),
            tags: cdktn.listMapper(ccTableTagsPropertyToTerraform, false)(this._tags.internalValue),
            warm_throughput: ccTableWarmThroughputPropertyToTerraform(this._warmThroughput.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            auto_scaling_specifications: {
                value: ccTableAutoScalingSpecificationPropertyToHclTerraform(this._autoScalingSpecifications.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcTable.AutoScalingSpecificationProperty",
            },
            billing_mode: {
                value: ccTableBillingModePropertyToHclTerraform(this._billingMode.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcTable.BillingModeProperty",
            },
            cdc_specification: {
                value: ccTableCdcSpecificationPropertyToHclTerraform(this._cdcSpecification.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcTable.CdcSpecificationProperty",
            },
            client_side_timestamps_enabled: {
                value: cdktn.booleanToHclTerraform(this._clientSideTimestampsEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            clustering_key_columns: {
                value: cdktn.listMapperHcl(ccTableClusteringKeyColumnPropertyToHclTerraform, false)(this._clusteringKeyColumns.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcTable.ClusteringKeyColumnPropertyList",
            },
            default_time_to_live: {
                value: cdktn.numberToHclTerraform(this._defaultTimeToLive),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            encryption_specification: {
                value: ccTableEncryptionSpecificationPropertyToHclTerraform(this._encryptionSpecification.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcTable.EncryptionSpecificationProperty",
            },
            keyspace_name: {
                value: cdktn.stringToHclTerraform(this._keyspaceName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            partition_key_columns: {
                value: cdktn.listMapperHcl(ccTablePartitionKeyColumnsPropertyToHclTerraform, false)(this._partitionKeyColumns.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcTable.PartitionKeyColumnsPropertyList",
            },
            point_in_time_recovery_enabled: {
                value: cdktn.booleanToHclTerraform(this._pointInTimeRecoveryEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            regular_columns: {
                value: cdktn.listMapperHcl(ccTableRegularColumnsPropertyToHclTerraform, false)(this._regularColumns.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcTable.RegularColumnsPropertyList",
            },
            replica_specifications: {
                value: cdktn.listMapperHcl(ccTableReplicaSpecificationPropertyToHclTerraform, false)(this._replicaSpecifications.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcTable.ReplicaSpecificationPropertyList",
            },
            table_name: {
                value: cdktn.stringToHclTerraform(this._tableName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccTableTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcTable.TagsPropertyList",
            },
            warm_throughput: {
                value: ccTableWarmThroughputPropertyToHclTerraform(this._warmThroughput.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcTable.WarmThroughputProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccTableTargetTrackingScalingPolicyConfigurationPropertyToTerraform(struct?: CcTable.TargetTrackingScalingPolicyConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        disable_scale_in: cdktn.booleanToTerraform(struct!.disableScaleIn),
        scale_in_cooldown: cdktn.numberToTerraform(struct!.scaleInCooldown),
        scale_out_cooldown: cdktn.numberToTerraform(struct!.scaleOutCooldown),
        target_value: cdktn.numberToTerraform(struct!.targetValue),
    }
}


export function ccTableTargetTrackingScalingPolicyConfigurationPropertyToHclTerraform(struct?: CcTable.TargetTrackingScalingPolicyConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        disable_scale_in: {
            value: cdktn.booleanToHclTerraform(struct!.disableScaleIn),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        scale_in_cooldown: {
            value: cdktn.numberToHclTerraform(struct!.scaleInCooldown),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        scale_out_cooldown: {
            value: cdktn.numberToHclTerraform(struct!.scaleOutCooldown),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        target_value: {
            value: cdktn.numberToHclTerraform(struct!.targetValue),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTableScalingPolicyPropertyToTerraform(struct?: CcTable.ScalingPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        target_tracking_scaling_policy_configuration: ccTableTargetTrackingScalingPolicyConfigurationPropertyToTerraform(struct!.targetTrackingScalingPolicyConfiguration),
    }
}


export function ccTableScalingPolicyPropertyToHclTerraform(struct?: CcTable.ScalingPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        target_tracking_scaling_policy_configuration: {
            value: ccTableTargetTrackingScalingPolicyConfigurationPropertyToHclTerraform(struct!.targetTrackingScalingPolicyConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "TargetTrackingScalingPolicyConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTableAutoScalingSettingPropertyToTerraform(struct?: CcTable.AutoScalingSettingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        auto_scaling_disabled: cdktn.booleanToTerraform(struct!.autoScalingDisabled),
        maximum_units: cdktn.numberToTerraform(struct!.maximumUnits),
        minimum_units: cdktn.numberToTerraform(struct!.minimumUnits),
        scaling_policy: ccTableScalingPolicyPropertyToTerraform(struct!.scalingPolicy),
    }
}


export function ccTableAutoScalingSettingPropertyToHclTerraform(struct?: CcTable.AutoScalingSettingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        auto_scaling_disabled: {
            value: cdktn.booleanToHclTerraform(struct!.autoScalingDisabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        maximum_units: {
            value: cdktn.numberToHclTerraform(struct!.maximumUnits),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        minimum_units: {
            value: cdktn.numberToHclTerraform(struct!.minimumUnits),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        scaling_policy: {
            value: ccTableScalingPolicyPropertyToHclTerraform(struct!.scalingPolicy),
            isBlock: true,
            type: "struct",
            storageClassType: "ScalingPolicyProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationPropertyToTerraform(struct?: CcTable.AutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        disable_scale_in: cdktn.booleanToTerraform(struct!.disableScaleIn),
        scale_in_cooldown: cdktn.numberToTerraform(struct!.scaleInCooldown),
        scale_out_cooldown: cdktn.numberToTerraform(struct!.scaleOutCooldown),
        target_value: cdktn.numberToTerraform(struct!.targetValue),
    }
}


export function ccTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationPropertyToHclTerraform(struct?: CcTable.AutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        disable_scale_in: {
            value: cdktn.booleanToHclTerraform(struct!.disableScaleIn),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        scale_in_cooldown: {
            value: cdktn.numberToHclTerraform(struct!.scaleInCooldown),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        scale_out_cooldown: {
            value: cdktn.numberToHclTerraform(struct!.scaleOutCooldown),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        target_value: {
            value: cdktn.numberToHclTerraform(struct!.targetValue),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyPropertyToTerraform(struct?: CcTable.AutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        target_tracking_scaling_policy_configuration: ccTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationPropertyToTerraform(struct!.targetTrackingScalingPolicyConfiguration),
    }
}


export function ccTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyPropertyToHclTerraform(struct?: CcTable.AutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        target_tracking_scaling_policy_configuration: {
            value: ccTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationPropertyToHclTerraform(struct!.targetTrackingScalingPolicyConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "AutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTableWriteCapacityAutoScalingPropertyToTerraform(struct?: CcTable.WriteCapacityAutoScalingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        auto_scaling_disabled: cdktn.booleanToTerraform(struct!.autoScalingDisabled),
        maximum_units: cdktn.numberToTerraform(struct!.maximumUnits),
        minimum_units: cdktn.numberToTerraform(struct!.minimumUnits),
        scaling_policy: ccTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyPropertyToTerraform(struct!.scalingPolicy),
    }
}


export function ccTableWriteCapacityAutoScalingPropertyToHclTerraform(struct?: CcTable.WriteCapacityAutoScalingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        auto_scaling_disabled: {
            value: cdktn.booleanToHclTerraform(struct!.autoScalingDisabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        maximum_units: {
            value: cdktn.numberToHclTerraform(struct!.maximumUnits),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        minimum_units: {
            value: cdktn.numberToHclTerraform(struct!.minimumUnits),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        scaling_policy: {
            value: ccTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyPropertyToHclTerraform(struct!.scalingPolicy),
            isBlock: true,
            type: "struct",
            storageClassType: "AutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTableAutoScalingSpecificationPropertyToTerraform(struct?: CcTable.AutoScalingSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        read_capacity_auto_scaling: ccTableAutoScalingSettingPropertyToTerraform(struct!.readCapacityAutoScaling),
        write_capacity_auto_scaling: ccTableWriteCapacityAutoScalingPropertyToTerraform(struct!.writeCapacityAutoScaling),
    }
}


export function ccTableAutoScalingSpecificationPropertyToHclTerraform(struct?: CcTable.AutoScalingSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        read_capacity_auto_scaling: {
            value: ccTableAutoScalingSettingPropertyToHclTerraform(struct!.readCapacityAutoScaling),
            isBlock: true,
            type: "struct",
            storageClassType: "AutoScalingSettingProperty",
        },
        write_capacity_auto_scaling: {
            value: ccTableWriteCapacityAutoScalingPropertyToHclTerraform(struct!.writeCapacityAutoScaling),
            isBlock: true,
            type: "struct",
            storageClassType: "WriteCapacityAutoScalingProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTableProvisionedThroughputPropertyToTerraform(struct?: CcTable.ProvisionedThroughputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        read_capacity_units: cdktn.numberToTerraform(struct!.readCapacityUnits),
        write_capacity_units: cdktn.numberToTerraform(struct!.writeCapacityUnits),
    }
}


export function ccTableProvisionedThroughputPropertyToHclTerraform(struct?: CcTable.ProvisionedThroughputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        read_capacity_units: {
            value: cdktn.numberToHclTerraform(struct!.readCapacityUnits),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        write_capacity_units: {
            value: cdktn.numberToHclTerraform(struct!.writeCapacityUnits),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTableBillingModePropertyToTerraform(struct?: CcTable.BillingModeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        mode: cdktn.stringToTerraform(struct!.mode),
        provisioned_throughput: ccTableProvisionedThroughputPropertyToTerraform(struct!.provisionedThroughput),
    }
}


export function ccTableBillingModePropertyToHclTerraform(struct?: CcTable.BillingModeProperty | cdktn.IResolvable): any {
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
        provisioned_throughput: {
            value: ccTableProvisionedThroughputPropertyToHclTerraform(struct!.provisionedThroughput),
            isBlock: true,
            type: "struct",
            storageClassType: "ProvisionedThroughputProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTableTagPropertyToTerraform(struct?: CcTable.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccTableTagPropertyToHclTerraform(struct?: CcTable.TagProperty | cdktn.IResolvable): any {
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


export function ccTableCdcSpecificationPropertyToTerraform(struct?: CcTable.CdcSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        status: cdktn.stringToTerraform(struct!.status),
        tags: cdktn.listMapper(ccTableTagPropertyToTerraform, false)(struct!.tags),
        view_type: cdktn.stringToTerraform(struct!.viewType),
    }
}


export function ccTableCdcSpecificationPropertyToHclTerraform(struct?: CcTable.CdcSpecificationProperty | cdktn.IResolvable): any {
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
        tags: {
            value: cdktn.listMapperHcl(ccTableTagPropertyToHclTerraform, false)(struct!.tags),
            isBlock: true,
            type: "list",
            storageClassType: "TagPropertyList",
        },
        view_type: {
            value: cdktn.stringToHclTerraform(struct!.viewType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTableColumnPropertyToTerraform(struct?: CcTable.ColumnProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        column_name: cdktn.stringToTerraform(struct!.columnName),
        column_type: cdktn.stringToTerraform(struct!.columnType),
    }
}


export function ccTableColumnPropertyToHclTerraform(struct?: CcTable.ColumnProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        column_name: {
            value: cdktn.stringToHclTerraform(struct!.columnName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        column_type: {
            value: cdktn.stringToHclTerraform(struct!.columnType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTableClusteringKeyColumnPropertyToTerraform(struct?: CcTable.ClusteringKeyColumnProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        column: ccTableColumnPropertyToTerraform(struct!.column),
        order_by: cdktn.stringToTerraform(struct!.orderBy),
    }
}


export function ccTableClusteringKeyColumnPropertyToHclTerraform(struct?: CcTable.ClusteringKeyColumnProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        column: {
            value: ccTableColumnPropertyToHclTerraform(struct!.column),
            isBlock: true,
            type: "struct",
            storageClassType: "ColumnProperty",
        },
        order_by: {
            value: cdktn.stringToHclTerraform(struct!.orderBy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTableEncryptionSpecificationPropertyToTerraform(struct?: CcTable.EncryptionSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        encryption_type: cdktn.stringToTerraform(struct!.encryptionType),
        kms_key_identifier: cdktn.stringToTerraform(struct!.kmsKeyIdentifier),
    }
}


export function ccTableEncryptionSpecificationPropertyToHclTerraform(struct?: CcTable.EncryptionSpecificationProperty | cdktn.IResolvable): any {
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
        kms_key_identifier: {
            value: cdktn.stringToHclTerraform(struct!.kmsKeyIdentifier),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTablePartitionKeyColumnsPropertyToTerraform(struct?: CcTable.PartitionKeyColumnsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        column_name: cdktn.stringToTerraform(struct!.columnName),
        column_type: cdktn.stringToTerraform(struct!.columnType),
    }
}


export function ccTablePartitionKeyColumnsPropertyToHclTerraform(struct?: CcTable.PartitionKeyColumnsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        column_name: {
            value: cdktn.stringToHclTerraform(struct!.columnName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        column_type: {
            value: cdktn.stringToHclTerraform(struct!.columnType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTableRegularColumnsPropertyToTerraform(struct?: CcTable.RegularColumnsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        column_name: cdktn.stringToTerraform(struct!.columnName),
        column_type: cdktn.stringToTerraform(struct!.columnType),
    }
}


export function ccTableRegularColumnsPropertyToHclTerraform(struct?: CcTable.RegularColumnsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        column_name: {
            value: cdktn.stringToHclTerraform(struct!.columnName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        column_type: {
            value: cdktn.stringToHclTerraform(struct!.columnType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationPropertyToTerraform(struct?: CcTable.ReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        disable_scale_in: cdktn.booleanToTerraform(struct!.disableScaleIn),
        scale_in_cooldown: cdktn.numberToTerraform(struct!.scaleInCooldown),
        scale_out_cooldown: cdktn.numberToTerraform(struct!.scaleOutCooldown),
        target_value: cdktn.numberToTerraform(struct!.targetValue),
    }
}


export function ccTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationPropertyToHclTerraform(struct?: CcTable.ReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        disable_scale_in: {
            value: cdktn.booleanToHclTerraform(struct!.disableScaleIn),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        scale_in_cooldown: {
            value: cdktn.numberToHclTerraform(struct!.scaleInCooldown),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        scale_out_cooldown: {
            value: cdktn.numberToHclTerraform(struct!.scaleOutCooldown),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        target_value: {
            value: cdktn.numberToHclTerraform(struct!.targetValue),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyPropertyToTerraform(struct?: CcTable.ReplicaSpecificationsReadCapacityAutoScalingScalingPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        target_tracking_scaling_policy_configuration: ccTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationPropertyToTerraform(struct!.targetTrackingScalingPolicyConfiguration),
    }
}


export function ccTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyPropertyToHclTerraform(struct?: CcTable.ReplicaSpecificationsReadCapacityAutoScalingScalingPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        target_tracking_scaling_policy_configuration: {
            value: ccTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationPropertyToHclTerraform(struct!.targetTrackingScalingPolicyConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "ReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTableReadCapacityAutoScalingPropertyToTerraform(struct?: CcTable.ReadCapacityAutoScalingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        auto_scaling_disabled: cdktn.booleanToTerraform(struct!.autoScalingDisabled),
        maximum_units: cdktn.numberToTerraform(struct!.maximumUnits),
        minimum_units: cdktn.numberToTerraform(struct!.minimumUnits),
        scaling_policy: ccTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyPropertyToTerraform(struct!.scalingPolicy),
    }
}


export function ccTableReadCapacityAutoScalingPropertyToHclTerraform(struct?: CcTable.ReadCapacityAutoScalingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        auto_scaling_disabled: {
            value: cdktn.booleanToHclTerraform(struct!.autoScalingDisabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        maximum_units: {
            value: cdktn.numberToHclTerraform(struct!.maximumUnits),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        minimum_units: {
            value: cdktn.numberToHclTerraform(struct!.minimumUnits),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        scaling_policy: {
            value: ccTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyPropertyToHclTerraform(struct!.scalingPolicy),
            isBlock: true,
            type: "struct",
            storageClassType: "ReplicaSpecificationsReadCapacityAutoScalingScalingPolicyProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTableReplicaSpecificationPropertyToTerraform(struct?: CcTable.ReplicaSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        read_capacity_auto_scaling: ccTableReadCapacityAutoScalingPropertyToTerraform(struct!.readCapacityAutoScaling),
        read_capacity_units: cdktn.numberToTerraform(struct!.readCapacityUnits),
        region: cdktn.stringToTerraform(struct!.region),
    }
}


export function ccTableReplicaSpecificationPropertyToHclTerraform(struct?: CcTable.ReplicaSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        read_capacity_auto_scaling: {
            value: ccTableReadCapacityAutoScalingPropertyToHclTerraform(struct!.readCapacityAutoScaling),
            isBlock: true,
            type: "struct",
            storageClassType: "ReadCapacityAutoScalingProperty",
        },
        read_capacity_units: {
            value: cdktn.numberToHclTerraform(struct!.readCapacityUnits),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        region: {
            value: cdktn.stringToHclTerraform(struct!.region),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTableTagsPropertyToTerraform(struct?: CcTable.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccTableTagsPropertyToHclTerraform(struct?: CcTable.TagsProperty | cdktn.IResolvable): any {
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


export function ccTableWarmThroughputPropertyToTerraform(struct?: CcTable.WarmThroughputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        read_units_per_second: cdktn.numberToTerraform(struct!.readUnitsPerSecond),
        write_units_per_second: cdktn.numberToTerraform(struct!.writeUnitsPerSecond),
    }
}


export function ccTableWarmThroughputPropertyToHclTerraform(struct?: CcTable.WarmThroughputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        read_units_per_second: {
            value: cdktn.numberToHclTerraform(struct!.readUnitsPerSecond),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        write_units_per_second: {
            value: cdktn.numberToHclTerraform(struct!.writeUnitsPerSecond),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcTable {
export interface TargetTrackingScalingPolicyConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cassandra_table#disable_scale_in CcTable#disable_scale_in}
    */
    readonly disableScaleIn?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cassandra_table#scale_in_cooldown CcTable#scale_in_cooldown}
    */
    readonly scaleInCooldown?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cassandra_table#scale_out_cooldown CcTable#scale_out_cooldown}
    */
    readonly scaleOutCooldown?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cassandra_table#target_value CcTable#target_value}
    */
    readonly targetValue?: number;
}
export class TargetTrackingScalingPolicyConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TargetTrackingScalingPolicyConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._disableScaleIn !== undefined) {
            hasAnyValues = true;
            internalValueResult.disableScaleIn = this._disableScaleIn;
        }
        if (this._scaleInCooldown !== undefined) {
            hasAnyValues = true;
            internalValueResult.scaleInCooldown = this._scaleInCooldown;
        }
        if (this._scaleOutCooldown !== undefined) {
            hasAnyValues = true;
            internalValueResult.scaleOutCooldown = this._scaleOutCooldown;
        }
        if (this._targetValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetValue = this._targetValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TargetTrackingScalingPolicyConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._disableScaleIn = undefined;
            this._scaleInCooldown = undefined;
            this._scaleOutCooldown = undefined;
            this._targetValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._disableScaleIn = value.disableScaleIn;
            this._scaleInCooldown = value.scaleInCooldown;
            this._scaleOutCooldown = value.scaleOutCooldown;
            this._targetValue = value.targetValue;
        }
    }

    // disable_scale_in - computed: true, optional: true, required: false
    private _disableScaleIn?: boolean | cdktn.IResolvable; 
    public get disableScaleIn() {
        return this.getBooleanAttribute('disable_scale_in');
    }
    public set disableScaleIn(value: boolean | cdktn.IResolvable) {
        this._disableScaleIn = value;
    }
    public resetDisableScaleIn() {
        this._disableScaleIn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get disableScaleInInput() {
        return this._disableScaleIn;
    }

    // scale_in_cooldown - computed: true, optional: true, required: false
    private _scaleInCooldown?: number; 
    public get scaleInCooldown() {
        return this.getNumberAttribute('scale_in_cooldown');
    }
    public set scaleInCooldown(value: number) {
        this._scaleInCooldown = value;
    }
    public resetScaleInCooldown() {
        this._scaleInCooldown = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scaleInCooldownInput() {
        return this._scaleInCooldown;
    }

    // scale_out_cooldown - computed: true, optional: true, required: false
    private _scaleOutCooldown?: number; 
    public get scaleOutCooldown() {
        return this.getNumberAttribute('scale_out_cooldown');
    }
    public set scaleOutCooldown(value: number) {
        this._scaleOutCooldown = value;
    }
    public resetScaleOutCooldown() {
        this._scaleOutCooldown = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scaleOutCooldownInput() {
        return this._scaleOutCooldown;
    }

    // target_value - computed: true, optional: true, required: false
    private _targetValue?: number; 
    public get targetValue() {
        return this.getNumberAttribute('target_value');
    }
    public set targetValue(value: number) {
        this._targetValue = value;
    }
    public resetTargetValue() {
        this._targetValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetValueInput() {
        return this._targetValue;
    }
}
export interface ScalingPolicyProperty {
    /**
    * Represents configuration for target tracking scaling policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cassandra_table#target_tracking_scaling_policy_configuration CcTable#target_tracking_scaling_policy_configuration}
    */
    readonly targetTrackingScalingPolicyConfiguration?: TargetTrackingScalingPolicyConfigurationProperty;
}
export class ScalingPolicyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ScalingPolicyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._targetTrackingScalingPolicyConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetTrackingScalingPolicyConfiguration = this._targetTrackingScalingPolicyConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ScalingPolicyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._targetTrackingScalingPolicyConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._targetTrackingScalingPolicyConfiguration.internalValue = value.targetTrackingScalingPolicyConfiguration;
        }
    }

    // target_tracking_scaling_policy_configuration - computed: true, optional: true, required: false
    private _targetTrackingScalingPolicyConfiguration = new TargetTrackingScalingPolicyConfigurationPropertyOutputReference(this, "target_tracking_scaling_policy_configuration");
    public get targetTrackingScalingPolicyConfiguration() {
        return this._targetTrackingScalingPolicyConfiguration;
    }
    public putTargetTrackingScalingPolicyConfiguration(value: TargetTrackingScalingPolicyConfigurationProperty) {
        this._targetTrackingScalingPolicyConfiguration.internalValue = value;
    }
    public resetTargetTrackingScalingPolicyConfiguration() {
        this._targetTrackingScalingPolicyConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetTrackingScalingPolicyConfigurationInput() {
        return this._targetTrackingScalingPolicyConfiguration.internalValue;
    }
}
export interface AutoScalingSettingProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cassandra_table#auto_scaling_disabled CcTable#auto_scaling_disabled}
    */
    readonly autoScalingDisabled?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cassandra_table#maximum_units CcTable#maximum_units}
    */
    readonly maximumUnits?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cassandra_table#minimum_units CcTable#minimum_units}
    */
    readonly minimumUnits?: number;
    /**
    * Represents scaling policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cassandra_table#scaling_policy CcTable#scaling_policy}
    */
    readonly scalingPolicy?: ScalingPolicyProperty;
}
export class AutoScalingSettingPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AutoScalingSettingProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._autoScalingDisabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.autoScalingDisabled = this._autoScalingDisabled;
        }
        if (this._maximumUnits !== undefined) {
            hasAnyValues = true;
            internalValueResult.maximumUnits = this._maximumUnits;
        }
        if (this._minimumUnits !== undefined) {
            hasAnyValues = true;
            internalValueResult.minimumUnits = this._minimumUnits;
        }
        if (this._scalingPolicy?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.scalingPolicy = this._scalingPolicy?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AutoScalingSettingProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._autoScalingDisabled = undefined;
            this._maximumUnits = undefined;
            this._minimumUnits = undefined;
            this._scalingPolicy.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._autoScalingDisabled = value.autoScalingDisabled;
            this._maximumUnits = value.maximumUnits;
            this._minimumUnits = value.minimumUnits;
            this._scalingPolicy.internalValue = value.scalingPolicy;
        }
    }

    // auto_scaling_disabled - computed: true, optional: true, required: false
    private _autoScalingDisabled?: boolean | cdktn.IResolvable; 
    public get autoScalingDisabled() {
        return this.getBooleanAttribute('auto_scaling_disabled');
    }
    public set autoScalingDisabled(value: boolean | cdktn.IResolvable) {
        this._autoScalingDisabled = value;
    }
    public resetAutoScalingDisabled() {
        this._autoScalingDisabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoScalingDisabledInput() {
        return this._autoScalingDisabled;
    }

    // maximum_units - computed: true, optional: true, required: false
    private _maximumUnits?: number; 
    public get maximumUnits() {
        return this.getNumberAttribute('maximum_units');
    }
    public set maximumUnits(value: number) {
        this._maximumUnits = value;
    }
    public resetMaximumUnits() {
        this._maximumUnits = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maximumUnitsInput() {
        return this._maximumUnits;
    }

    // minimum_units - computed: true, optional: true, required: false
    private _minimumUnits?: number; 
    public get minimumUnits() {
        return this.getNumberAttribute('minimum_units');
    }
    public set minimumUnits(value: number) {
        this._minimumUnits = value;
    }
    public resetMinimumUnits() {
        this._minimumUnits = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minimumUnitsInput() {
        return this._minimumUnits;
    }

    // scaling_policy - computed: true, optional: true, required: false
    private _scalingPolicy = new ScalingPolicyPropertyOutputReference(this, "scaling_policy");
    public get scalingPolicy() {
        return this._scalingPolicy;
    }
    public putScalingPolicy(value: ScalingPolicyProperty) {
        this._scalingPolicy.internalValue = value;
    }
    public resetScalingPolicy() {
        this._scalingPolicy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scalingPolicyInput() {
        return this._scalingPolicy.internalValue;
    }
}
export interface AutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cassandra_table#disable_scale_in CcTable#disable_scale_in}
    */
    readonly disableScaleIn?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cassandra_table#scale_in_cooldown CcTable#scale_in_cooldown}
    */
    readonly scaleInCooldown?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cassandra_table#scale_out_cooldown CcTable#scale_out_cooldown}
    */
    readonly scaleOutCooldown?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cassandra_table#target_value CcTable#target_value}
    */
    readonly targetValue?: number;
}
export class AutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._disableScaleIn !== undefined) {
            hasAnyValues = true;
            internalValueResult.disableScaleIn = this._disableScaleIn;
        }
        if (this._scaleInCooldown !== undefined) {
            hasAnyValues = true;
            internalValueResult.scaleInCooldown = this._scaleInCooldown;
        }
        if (this._scaleOutCooldown !== undefined) {
            hasAnyValues = true;
            internalValueResult.scaleOutCooldown = this._scaleOutCooldown;
        }
        if (this._targetValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetValue = this._targetValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._disableScaleIn = undefined;
            this._scaleInCooldown = undefined;
            this._scaleOutCooldown = undefined;
            this._targetValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._disableScaleIn = value.disableScaleIn;
            this._scaleInCooldown = value.scaleInCooldown;
            this._scaleOutCooldown = value.scaleOutCooldown;
            this._targetValue = value.targetValue;
        }
    }

    // disable_scale_in - computed: true, optional: true, required: false
    private _disableScaleIn?: boolean | cdktn.IResolvable; 
    public get disableScaleIn() {
        return this.getBooleanAttribute('disable_scale_in');
    }
    public set disableScaleIn(value: boolean | cdktn.IResolvable) {
        this._disableScaleIn = value;
    }
    public resetDisableScaleIn() {
        this._disableScaleIn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get disableScaleInInput() {
        return this._disableScaleIn;
    }

    // scale_in_cooldown - computed: true, optional: true, required: false
    private _scaleInCooldown?: number; 
    public get scaleInCooldown() {
        return this.getNumberAttribute('scale_in_cooldown');
    }
    public set scaleInCooldown(value: number) {
        this._scaleInCooldown = value;
    }
    public resetScaleInCooldown() {
        this._scaleInCooldown = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scaleInCooldownInput() {
        return this._scaleInCooldown;
    }

    // scale_out_cooldown - computed: true, optional: true, required: false
    private _scaleOutCooldown?: number; 
    public get scaleOutCooldown() {
        return this.getNumberAttribute('scale_out_cooldown');
    }
    public set scaleOutCooldown(value: number) {
        this._scaleOutCooldown = value;
    }
    public resetScaleOutCooldown() {
        this._scaleOutCooldown = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scaleOutCooldownInput() {
        return this._scaleOutCooldown;
    }

    // target_value - computed: true, optional: true, required: false
    private _targetValue?: number; 
    public get targetValue() {
        return this.getNumberAttribute('target_value');
    }
    public set targetValue(value: number) {
        this._targetValue = value;
    }
    public resetTargetValue() {
        this._targetValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetValueInput() {
        return this._targetValue;
    }
}
export interface AutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyProperty {
    /**
    * Represents configuration for target tracking scaling policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cassandra_table#target_tracking_scaling_policy_configuration CcTable#target_tracking_scaling_policy_configuration}
    */
    readonly targetTrackingScalingPolicyConfiguration?: AutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationProperty;
}
export class AutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._targetTrackingScalingPolicyConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetTrackingScalingPolicyConfiguration = this._targetTrackingScalingPolicyConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._targetTrackingScalingPolicyConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._targetTrackingScalingPolicyConfiguration.internalValue = value.targetTrackingScalingPolicyConfiguration;
        }
    }

    // target_tracking_scaling_policy_configuration - computed: true, optional: true, required: false
    private _targetTrackingScalingPolicyConfiguration = new AutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationPropertyOutputReference(this, "target_tracking_scaling_policy_configuration");
    public get targetTrackingScalingPolicyConfiguration() {
        return this._targetTrackingScalingPolicyConfiguration;
    }
    public putTargetTrackingScalingPolicyConfiguration(value: AutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationProperty) {
        this._targetTrackingScalingPolicyConfiguration.internalValue = value;
    }
    public resetTargetTrackingScalingPolicyConfiguration() {
        this._targetTrackingScalingPolicyConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetTrackingScalingPolicyConfigurationInput() {
        return this._targetTrackingScalingPolicyConfiguration.internalValue;
    }
}
export interface WriteCapacityAutoScalingProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cassandra_table#auto_scaling_disabled CcTable#auto_scaling_disabled}
    */
    readonly autoScalingDisabled?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cassandra_table#maximum_units CcTable#maximum_units}
    */
    readonly maximumUnits?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cassandra_table#minimum_units CcTable#minimum_units}
    */
    readonly minimumUnits?: number;
    /**
    * Represents scaling policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cassandra_table#scaling_policy CcTable#scaling_policy}
    */
    readonly scalingPolicy?: AutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyProperty;
}
export class WriteCapacityAutoScalingPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): WriteCapacityAutoScalingProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._autoScalingDisabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.autoScalingDisabled = this._autoScalingDisabled;
        }
        if (this._maximumUnits !== undefined) {
            hasAnyValues = true;
            internalValueResult.maximumUnits = this._maximumUnits;
        }
        if (this._minimumUnits !== undefined) {
            hasAnyValues = true;
            internalValueResult.minimumUnits = this._minimumUnits;
        }
        if (this._scalingPolicy?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.scalingPolicy = this._scalingPolicy?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WriteCapacityAutoScalingProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._autoScalingDisabled = undefined;
            this._maximumUnits = undefined;
            this._minimumUnits = undefined;
            this._scalingPolicy.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._autoScalingDisabled = value.autoScalingDisabled;
            this._maximumUnits = value.maximumUnits;
            this._minimumUnits = value.minimumUnits;
            this._scalingPolicy.internalValue = value.scalingPolicy;
        }
    }

    // auto_scaling_disabled - computed: true, optional: true, required: false
    private _autoScalingDisabled?: boolean | cdktn.IResolvable; 
    public get autoScalingDisabled() {
        return this.getBooleanAttribute('auto_scaling_disabled');
    }
    public set autoScalingDisabled(value: boolean | cdktn.IResolvable) {
        this._autoScalingDisabled = value;
    }
    public resetAutoScalingDisabled() {
        this._autoScalingDisabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoScalingDisabledInput() {
        return this._autoScalingDisabled;
    }

    // maximum_units - computed: true, optional: true, required: false
    private _maximumUnits?: number; 
    public get maximumUnits() {
        return this.getNumberAttribute('maximum_units');
    }
    public set maximumUnits(value: number) {
        this._maximumUnits = value;
    }
    public resetMaximumUnits() {
        this._maximumUnits = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maximumUnitsInput() {
        return this._maximumUnits;
    }

    // minimum_units - computed: true, optional: true, required: false
    private _minimumUnits?: number; 
    public get minimumUnits() {
        return this.getNumberAttribute('minimum_units');
    }
    public set minimumUnits(value: number) {
        this._minimumUnits = value;
    }
    public resetMinimumUnits() {
        this._minimumUnits = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minimumUnitsInput() {
        return this._minimumUnits;
    }

    // scaling_policy - computed: true, optional: true, required: false
    private _scalingPolicy = new AutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyPropertyOutputReference(this, "scaling_policy");
    public get scalingPolicy() {
        return this._scalingPolicy;
    }
    public putScalingPolicy(value: AutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyProperty) {
        this._scalingPolicy.internalValue = value;
    }
    public resetScalingPolicy() {
        this._scalingPolicy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scalingPolicyInput() {
        return this._scalingPolicy.internalValue;
    }
}
export interface AutoScalingSpecificationProperty {
    /**
    * Represents configuration for auto scaling.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cassandra_table#read_capacity_auto_scaling CcTable#read_capacity_auto_scaling}
    */
    readonly readCapacityAutoScaling?: AutoScalingSettingProperty;
    /**
    * Represents configuration for auto scaling.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cassandra_table#write_capacity_auto_scaling CcTable#write_capacity_auto_scaling}
    */
    readonly writeCapacityAutoScaling?: WriteCapacityAutoScalingProperty;
}
export class AutoScalingSpecificationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AutoScalingSpecificationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._readCapacityAutoScaling?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.readCapacityAutoScaling = this._readCapacityAutoScaling?.internalValue;
        }
        if (this._writeCapacityAutoScaling?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.writeCapacityAutoScaling = this._writeCapacityAutoScaling?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AutoScalingSpecificationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._readCapacityAutoScaling.internalValue = undefined;
            this._writeCapacityAutoScaling.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._readCapacityAutoScaling.internalValue = value.readCapacityAutoScaling;
            this._writeCapacityAutoScaling.internalValue = value.writeCapacityAutoScaling;
        }
    }

    // read_capacity_auto_scaling - computed: true, optional: true, required: false
    private _readCapacityAutoScaling = new AutoScalingSettingPropertyOutputReference(this, "read_capacity_auto_scaling");
    public get readCapacityAutoScaling() {
        return this._readCapacityAutoScaling;
    }
    public putReadCapacityAutoScaling(value: AutoScalingSettingProperty) {
        this._readCapacityAutoScaling.internalValue = value;
    }
    public resetReadCapacityAutoScaling() {
        this._readCapacityAutoScaling.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get readCapacityAutoScalingInput() {
        return this._readCapacityAutoScaling.internalValue;
    }

    // write_capacity_auto_scaling - computed: true, optional: true, required: false
    private _writeCapacityAutoScaling = new WriteCapacityAutoScalingPropertyOutputReference(this, "write_capacity_auto_scaling");
    public get writeCapacityAutoScaling() {
        return this._writeCapacityAutoScaling;
    }
    public putWriteCapacityAutoScaling(value: WriteCapacityAutoScalingProperty) {
        this._writeCapacityAutoScaling.internalValue = value;
    }
    public resetWriteCapacityAutoScaling() {
        this._writeCapacityAutoScaling.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get writeCapacityAutoScalingInput() {
        return this._writeCapacityAutoScaling.internalValue;
    }
}
export interface ProvisionedThroughputProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cassandra_table#read_capacity_units CcTable#read_capacity_units}
    */
    readonly readCapacityUnits?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cassandra_table#write_capacity_units CcTable#write_capacity_units}
    */
    readonly writeCapacityUnits?: number;
}
export class ProvisionedThroughputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ProvisionedThroughputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._readCapacityUnits !== undefined) {
            hasAnyValues = true;
            internalValueResult.readCapacityUnits = this._readCapacityUnits;
        }
        if (this._writeCapacityUnits !== undefined) {
            hasAnyValues = true;
            internalValueResult.writeCapacityUnits = this._writeCapacityUnits;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ProvisionedThroughputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._readCapacityUnits = undefined;
            this._writeCapacityUnits = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._readCapacityUnits = value.readCapacityUnits;
            this._writeCapacityUnits = value.writeCapacityUnits;
        }
    }

    // read_capacity_units - computed: true, optional: true, required: false
    private _readCapacityUnits?: number; 
    public get readCapacityUnits() {
        return this.getNumberAttribute('read_capacity_units');
    }
    public set readCapacityUnits(value: number) {
        this._readCapacityUnits = value;
    }
    public resetReadCapacityUnits() {
        this._readCapacityUnits = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get readCapacityUnitsInput() {
        return this._readCapacityUnits;
    }

    // write_capacity_units - computed: true, optional: true, required: false
    private _writeCapacityUnits?: number; 
    public get writeCapacityUnits() {
        return this.getNumberAttribute('write_capacity_units');
    }
    public set writeCapacityUnits(value: number) {
        this._writeCapacityUnits = value;
    }
    public resetWriteCapacityUnits() {
        this._writeCapacityUnits = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get writeCapacityUnitsInput() {
        return this._writeCapacityUnits;
    }
}
export interface BillingModeProperty {
    /**
    * Capacity mode for the specified table
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cassandra_table#mode CcTable#mode}
    */
    readonly mode?: string;
    /**
    * Throughput for the specified table, which consists of values for ReadCapacityUnits and WriteCapacityUnits
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cassandra_table#provisioned_throughput CcTable#provisioned_throughput}
    */
    readonly provisionedThroughput?: ProvisionedThroughputProperty;
}
export class BillingModePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): BillingModeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._mode !== undefined) {
            hasAnyValues = true;
            internalValueResult.mode = this._mode;
        }
        if (this._provisionedThroughput?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.provisionedThroughput = this._provisionedThroughput?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BillingModeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._mode = undefined;
            this._provisionedThroughput.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._mode = value.mode;
            this._provisionedThroughput.internalValue = value.provisionedThroughput;
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

    // provisioned_throughput - computed: true, optional: true, required: false
    private _provisionedThroughput = new ProvisionedThroughputPropertyOutputReference(this, "provisioned_throughput");
    public get provisionedThroughput() {
        return this._provisionedThroughput;
    }
    public putProvisionedThroughput(value: ProvisionedThroughputProperty) {
        this._provisionedThroughput.internalValue = value;
    }
    public resetProvisionedThroughput() {
        this._provisionedThroughput.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get provisionedThroughputInput() {
        return this._provisionedThroughput.internalValue;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cassandra_table#key CcTable#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cassandra_table#value CcTable#value}
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
export interface CdcSpecificationProperty {
    /**
    * Indicates whether CDC is enabled or disabled for the table
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cassandra_table#status CcTable#status}
    */
    readonly status?: string;
    /**
    * An array of key-value pairs to apply to the CDC stream resource
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cassandra_table#tags CcTable#tags}
    */
    readonly tags?: TagProperty[] | cdktn.IResolvable;
    /**
    * Specifies what data should be captured in the change data stream
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cassandra_table#view_type CcTable#view_type}
    */
    readonly viewType?: string;
}
export class CdcSpecificationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CdcSpecificationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._status !== undefined) {
            hasAnyValues = true;
            internalValueResult.status = this._status;
        }
        if (this._tags?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tags = this._tags?.internalValue;
        }
        if (this._viewType !== undefined) {
            hasAnyValues = true;
            internalValueResult.viewType = this._viewType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CdcSpecificationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._status = undefined;
            this._tags.internalValue = undefined;
            this._viewType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._status = value.status;
            this._tags.internalValue = value.tags;
            this._viewType = value.viewType;
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

    // view_type - computed: true, optional: true, required: false
    private _viewType?: string; 
    public get viewType() {
        return this.getStringAttribute('view_type');
    }
    public set viewType(value: string) {
        this._viewType = value;
    }
    public resetViewType() {
        this._viewType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get viewTypeInput() {
        return this._viewType;
    }
}
export interface ColumnProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cassandra_table#column_name CcTable#column_name}
    */
    readonly columnName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cassandra_table#column_type CcTable#column_type}
    */
    readonly columnType?: string;
}
export class ColumnPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ColumnProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._columnName !== undefined) {
            hasAnyValues = true;
            internalValueResult.columnName = this._columnName;
        }
        if (this._columnType !== undefined) {
            hasAnyValues = true;
            internalValueResult.columnType = this._columnType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ColumnProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._columnName = undefined;
            this._columnType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._columnName = value.columnName;
            this._columnType = value.columnType;
        }
    }

    // column_name - computed: true, optional: true, required: false
    private _columnName?: string; 
    public get columnName() {
        return this.getStringAttribute('column_name');
    }
    public set columnName(value: string) {
        this._columnName = value;
    }
    public resetColumnName() {
        this._columnName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get columnNameInput() {
        return this._columnName;
    }

    // column_type - computed: true, optional: true, required: false
    private _columnType?: string; 
    public get columnType() {
        return this.getStringAttribute('column_type');
    }
    public set columnType(value: string) {
        this._columnType = value;
    }
    public resetColumnType() {
        this._columnType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get columnTypeInput() {
        return this._columnType;
    }
}
export interface ClusteringKeyColumnProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cassandra_table#column CcTable#column}
    */
    readonly column?: ColumnProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cassandra_table#order_by CcTable#order_by}
    */
    readonly orderBy?: string;
}
export class ClusteringKeyColumnPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ClusteringKeyColumnProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._column?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.column = this._column?.internalValue;
        }
        if (this._orderBy !== undefined) {
            hasAnyValues = true;
            internalValueResult.orderBy = this._orderBy;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ClusteringKeyColumnProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._column.internalValue = undefined;
            this._orderBy = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._column.internalValue = value.column;
            this._orderBy = value.orderBy;
        }
    }

    // column - computed: true, optional: true, required: false
    private _column = new ColumnPropertyOutputReference(this, "column");
    public get column() {
        return this._column;
    }
    public putColumn(value: ColumnProperty) {
        this._column.internalValue = value;
    }
    public resetColumn() {
        this._column.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get columnInput() {
        return this._column.internalValue;
    }

    // order_by - computed: true, optional: true, required: false
    private _orderBy?: string; 
    public get orderBy() {
        return this.getStringAttribute('order_by');
    }
    public set orderBy(value: string) {
        this._orderBy = value;
    }
    public resetOrderBy() {
        this._orderBy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get orderByInput() {
        return this._orderBy;
    }
}

export class ClusteringKeyColumnPropertyList extends cdktn.ComplexList {
    public internalValue? : ClusteringKeyColumnProperty[] | cdktn.IResolvable

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
    public get(index: number): ClusteringKeyColumnPropertyOutputReference {
        return new ClusteringKeyColumnPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface EncryptionSpecificationProperty {
    /**
    * Server-side encryption type
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cassandra_table#encryption_type CcTable#encryption_type}
    */
    readonly encryptionType?: string;
    /**
    * The AWS KMS customer master key (CMK) that should be used for the AWS KMS encryption. To specify a CMK, use its key ID, Amazon Resource Name (ARN), alias name, or alias ARN. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cassandra_table#kms_key_identifier CcTable#kms_key_identifier}
    */
    readonly kmsKeyIdentifier?: string;
}
export class EncryptionSpecificationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EncryptionSpecificationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._encryptionType !== undefined) {
            hasAnyValues = true;
            internalValueResult.encryptionType = this._encryptionType;
        }
        if (this._kmsKeyIdentifier !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsKeyIdentifier = this._kmsKeyIdentifier;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EncryptionSpecificationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._encryptionType = undefined;
            this._kmsKeyIdentifier = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._encryptionType = value.encryptionType;
            this._kmsKeyIdentifier = value.kmsKeyIdentifier;
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
}
export interface PartitionKeyColumnsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cassandra_table#column_name CcTable#column_name}
    */
    readonly columnName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cassandra_table#column_type CcTable#column_type}
    */
    readonly columnType: string;
}
export class PartitionKeyColumnsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): PartitionKeyColumnsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._columnName !== undefined) {
            hasAnyValues = true;
            internalValueResult.columnName = this._columnName;
        }
        if (this._columnType !== undefined) {
            hasAnyValues = true;
            internalValueResult.columnType = this._columnType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PartitionKeyColumnsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._columnName = undefined;
            this._columnType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._columnName = value.columnName;
            this._columnType = value.columnType;
        }
    }

    // column_name - computed: false, optional: false, required: true
    private _columnName?: string; 
    public get columnName() {
        return this.getStringAttribute('column_name');
    }
    public set columnName(value: string) {
        this._columnName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get columnNameInput() {
        return this._columnName;
    }

    // column_type - computed: false, optional: false, required: true
    private _columnType?: string; 
    public get columnType() {
        return this.getStringAttribute('column_type');
    }
    public set columnType(value: string) {
        this._columnType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get columnTypeInput() {
        return this._columnType;
    }
}

export class PartitionKeyColumnsPropertyList extends cdktn.ComplexList {
    public internalValue? : PartitionKeyColumnsProperty[] | cdktn.IResolvable

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
    public get(index: number): PartitionKeyColumnsPropertyOutputReference {
        return new PartitionKeyColumnsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface RegularColumnsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cassandra_table#column_name CcTable#column_name}
    */
    readonly columnName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cassandra_table#column_type CcTable#column_type}
    */
    readonly columnType?: string;
}
export class RegularColumnsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): RegularColumnsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._columnName !== undefined) {
            hasAnyValues = true;
            internalValueResult.columnName = this._columnName;
        }
        if (this._columnType !== undefined) {
            hasAnyValues = true;
            internalValueResult.columnType = this._columnType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RegularColumnsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._columnName = undefined;
            this._columnType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._columnName = value.columnName;
            this._columnType = value.columnType;
        }
    }

    // column_name - computed: true, optional: true, required: false
    private _columnName?: string; 
    public get columnName() {
        return this.getStringAttribute('column_name');
    }
    public set columnName(value: string) {
        this._columnName = value;
    }
    public resetColumnName() {
        this._columnName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get columnNameInput() {
        return this._columnName;
    }

    // column_type - computed: true, optional: true, required: false
    private _columnType?: string; 
    public get columnType() {
        return this.getStringAttribute('column_type');
    }
    public set columnType(value: string) {
        this._columnType = value;
    }
    public resetColumnType() {
        this._columnType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get columnTypeInput() {
        return this._columnType;
    }
}

export class RegularColumnsPropertyList extends cdktn.ComplexList {
    public internalValue? : RegularColumnsProperty[] | cdktn.IResolvable

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
    public get(index: number): RegularColumnsPropertyOutputReference {
        return new RegularColumnsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cassandra_table#disable_scale_in CcTable#disable_scale_in}
    */
    readonly disableScaleIn?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cassandra_table#scale_in_cooldown CcTable#scale_in_cooldown}
    */
    readonly scaleInCooldown?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cassandra_table#scale_out_cooldown CcTable#scale_out_cooldown}
    */
    readonly scaleOutCooldown?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cassandra_table#target_value CcTable#target_value}
    */
    readonly targetValue?: number;
}
export class ReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._disableScaleIn !== undefined) {
            hasAnyValues = true;
            internalValueResult.disableScaleIn = this._disableScaleIn;
        }
        if (this._scaleInCooldown !== undefined) {
            hasAnyValues = true;
            internalValueResult.scaleInCooldown = this._scaleInCooldown;
        }
        if (this._scaleOutCooldown !== undefined) {
            hasAnyValues = true;
            internalValueResult.scaleOutCooldown = this._scaleOutCooldown;
        }
        if (this._targetValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetValue = this._targetValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._disableScaleIn = undefined;
            this._scaleInCooldown = undefined;
            this._scaleOutCooldown = undefined;
            this._targetValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._disableScaleIn = value.disableScaleIn;
            this._scaleInCooldown = value.scaleInCooldown;
            this._scaleOutCooldown = value.scaleOutCooldown;
            this._targetValue = value.targetValue;
        }
    }

    // disable_scale_in - computed: true, optional: true, required: false
    private _disableScaleIn?: boolean | cdktn.IResolvable; 
    public get disableScaleIn() {
        return this.getBooleanAttribute('disable_scale_in');
    }
    public set disableScaleIn(value: boolean | cdktn.IResolvable) {
        this._disableScaleIn = value;
    }
    public resetDisableScaleIn() {
        this._disableScaleIn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get disableScaleInInput() {
        return this._disableScaleIn;
    }

    // scale_in_cooldown - computed: true, optional: true, required: false
    private _scaleInCooldown?: number; 
    public get scaleInCooldown() {
        return this.getNumberAttribute('scale_in_cooldown');
    }
    public set scaleInCooldown(value: number) {
        this._scaleInCooldown = value;
    }
    public resetScaleInCooldown() {
        this._scaleInCooldown = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scaleInCooldownInput() {
        return this._scaleInCooldown;
    }

    // scale_out_cooldown - computed: true, optional: true, required: false
    private _scaleOutCooldown?: number; 
    public get scaleOutCooldown() {
        return this.getNumberAttribute('scale_out_cooldown');
    }
    public set scaleOutCooldown(value: number) {
        this._scaleOutCooldown = value;
    }
    public resetScaleOutCooldown() {
        this._scaleOutCooldown = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scaleOutCooldownInput() {
        return this._scaleOutCooldown;
    }

    // target_value - computed: true, optional: true, required: false
    private _targetValue?: number; 
    public get targetValue() {
        return this.getNumberAttribute('target_value');
    }
    public set targetValue(value: number) {
        this._targetValue = value;
    }
    public resetTargetValue() {
        this._targetValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetValueInput() {
        return this._targetValue;
    }
}
export interface ReplicaSpecificationsReadCapacityAutoScalingScalingPolicyProperty {
    /**
    * Represents configuration for target tracking scaling policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cassandra_table#target_tracking_scaling_policy_configuration CcTable#target_tracking_scaling_policy_configuration}
    */
    readonly targetTrackingScalingPolicyConfiguration?: ReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationProperty;
}
export class ReplicaSpecificationsReadCapacityAutoScalingScalingPolicyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ReplicaSpecificationsReadCapacityAutoScalingScalingPolicyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._targetTrackingScalingPolicyConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetTrackingScalingPolicyConfiguration = this._targetTrackingScalingPolicyConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ReplicaSpecificationsReadCapacityAutoScalingScalingPolicyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._targetTrackingScalingPolicyConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._targetTrackingScalingPolicyConfiguration.internalValue = value.targetTrackingScalingPolicyConfiguration;
        }
    }

    // target_tracking_scaling_policy_configuration - computed: true, optional: true, required: false
    private _targetTrackingScalingPolicyConfiguration = new ReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationPropertyOutputReference(this, "target_tracking_scaling_policy_configuration");
    public get targetTrackingScalingPolicyConfiguration() {
        return this._targetTrackingScalingPolicyConfiguration;
    }
    public putTargetTrackingScalingPolicyConfiguration(value: ReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationProperty) {
        this._targetTrackingScalingPolicyConfiguration.internalValue = value;
    }
    public resetTargetTrackingScalingPolicyConfiguration() {
        this._targetTrackingScalingPolicyConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetTrackingScalingPolicyConfigurationInput() {
        return this._targetTrackingScalingPolicyConfiguration.internalValue;
    }
}
export interface ReadCapacityAutoScalingProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cassandra_table#auto_scaling_disabled CcTable#auto_scaling_disabled}
    */
    readonly autoScalingDisabled?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cassandra_table#maximum_units CcTable#maximum_units}
    */
    readonly maximumUnits?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cassandra_table#minimum_units CcTable#minimum_units}
    */
    readonly minimumUnits?: number;
    /**
    * Represents scaling policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cassandra_table#scaling_policy CcTable#scaling_policy}
    */
    readonly scalingPolicy?: ReplicaSpecificationsReadCapacityAutoScalingScalingPolicyProperty;
}
export class ReadCapacityAutoScalingPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ReadCapacityAutoScalingProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._autoScalingDisabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.autoScalingDisabled = this._autoScalingDisabled;
        }
        if (this._maximumUnits !== undefined) {
            hasAnyValues = true;
            internalValueResult.maximumUnits = this._maximumUnits;
        }
        if (this._minimumUnits !== undefined) {
            hasAnyValues = true;
            internalValueResult.minimumUnits = this._minimumUnits;
        }
        if (this._scalingPolicy?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.scalingPolicy = this._scalingPolicy?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ReadCapacityAutoScalingProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._autoScalingDisabled = undefined;
            this._maximumUnits = undefined;
            this._minimumUnits = undefined;
            this._scalingPolicy.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._autoScalingDisabled = value.autoScalingDisabled;
            this._maximumUnits = value.maximumUnits;
            this._minimumUnits = value.minimumUnits;
            this._scalingPolicy.internalValue = value.scalingPolicy;
        }
    }

    // auto_scaling_disabled - computed: true, optional: true, required: false
    private _autoScalingDisabled?: boolean | cdktn.IResolvable; 
    public get autoScalingDisabled() {
        return this.getBooleanAttribute('auto_scaling_disabled');
    }
    public set autoScalingDisabled(value: boolean | cdktn.IResolvable) {
        this._autoScalingDisabled = value;
    }
    public resetAutoScalingDisabled() {
        this._autoScalingDisabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoScalingDisabledInput() {
        return this._autoScalingDisabled;
    }

    // maximum_units - computed: true, optional: true, required: false
    private _maximumUnits?: number; 
    public get maximumUnits() {
        return this.getNumberAttribute('maximum_units');
    }
    public set maximumUnits(value: number) {
        this._maximumUnits = value;
    }
    public resetMaximumUnits() {
        this._maximumUnits = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maximumUnitsInput() {
        return this._maximumUnits;
    }

    // minimum_units - computed: true, optional: true, required: false
    private _minimumUnits?: number; 
    public get minimumUnits() {
        return this.getNumberAttribute('minimum_units');
    }
    public set minimumUnits(value: number) {
        this._minimumUnits = value;
    }
    public resetMinimumUnits() {
        this._minimumUnits = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minimumUnitsInput() {
        return this._minimumUnits;
    }

    // scaling_policy - computed: true, optional: true, required: false
    private _scalingPolicy = new ReplicaSpecificationsReadCapacityAutoScalingScalingPolicyPropertyOutputReference(this, "scaling_policy");
    public get scalingPolicy() {
        return this._scalingPolicy;
    }
    public putScalingPolicy(value: ReplicaSpecificationsReadCapacityAutoScalingScalingPolicyProperty) {
        this._scalingPolicy.internalValue = value;
    }
    public resetScalingPolicy() {
        this._scalingPolicy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scalingPolicyInput() {
        return this._scalingPolicy.internalValue;
    }
}
export interface ReplicaSpecificationProperty {
    /**
    * Represents configuration for auto scaling.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cassandra_table#read_capacity_auto_scaling CcTable#read_capacity_auto_scaling}
    */
    readonly readCapacityAutoScaling?: ReadCapacityAutoScalingProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cassandra_table#read_capacity_units CcTable#read_capacity_units}
    */
    readonly readCapacityUnits?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cassandra_table#region CcTable#region}
    */
    readonly region?: string;
}
export class ReplicaSpecificationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ReplicaSpecificationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._readCapacityAutoScaling?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.readCapacityAutoScaling = this._readCapacityAutoScaling?.internalValue;
        }
        if (this._readCapacityUnits !== undefined) {
            hasAnyValues = true;
            internalValueResult.readCapacityUnits = this._readCapacityUnits;
        }
        if (this._region !== undefined) {
            hasAnyValues = true;
            internalValueResult.region = this._region;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ReplicaSpecificationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._readCapacityAutoScaling.internalValue = undefined;
            this._readCapacityUnits = undefined;
            this._region = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._readCapacityAutoScaling.internalValue = value.readCapacityAutoScaling;
            this._readCapacityUnits = value.readCapacityUnits;
            this._region = value.region;
        }
    }

    // read_capacity_auto_scaling - computed: true, optional: true, required: false
    private _readCapacityAutoScaling = new ReadCapacityAutoScalingPropertyOutputReference(this, "read_capacity_auto_scaling");
    public get readCapacityAutoScaling() {
        return this._readCapacityAutoScaling;
    }
    public putReadCapacityAutoScaling(value: ReadCapacityAutoScalingProperty) {
        this._readCapacityAutoScaling.internalValue = value;
    }
    public resetReadCapacityAutoScaling() {
        this._readCapacityAutoScaling.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get readCapacityAutoScalingInput() {
        return this._readCapacityAutoScaling.internalValue;
    }

    // read_capacity_units - computed: true, optional: true, required: false
    private _readCapacityUnits?: number; 
    public get readCapacityUnits() {
        return this.getNumberAttribute('read_capacity_units');
    }
    public set readCapacityUnits(value: number) {
        this._readCapacityUnits = value;
    }
    public resetReadCapacityUnits() {
        this._readCapacityUnits = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get readCapacityUnitsInput() {
        return this._readCapacityUnits;
    }

    // region - computed: true, optional: true, required: false
    private _region?: string; 
    public get region() {
        return this.getStringAttribute('region');
    }
    public set region(value: string) {
        this._region = value;
    }
    public resetRegion() {
        this._region = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get regionInput() {
        return this._region;
    }
}

export class ReplicaSpecificationPropertyList extends cdktn.ComplexList {
    public internalValue? : ReplicaSpecificationProperty[] | cdktn.IResolvable

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
    public get(index: number): ReplicaSpecificationPropertyOutputReference {
        return new ReplicaSpecificationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cassandra_table#key CcTable#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cassandra_table#value CcTable#value}
    */
    readonly value?: string;
}
export class TagsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TagsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: TagsProperty | cdktn.IResolvable | undefined) {
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

export class TagsPropertyList extends cdktn.ComplexList {
    public internalValue? : TagsProperty[] | cdktn.IResolvable

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
    public get(index: number): TagsPropertyOutputReference {
        return new TagsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface WarmThroughputProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cassandra_table#read_units_per_second CcTable#read_units_per_second}
    */
    readonly readUnitsPerSecond?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cassandra_table#write_units_per_second CcTable#write_units_per_second}
    */
    readonly writeUnitsPerSecond?: number;
}
export class WarmThroughputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): WarmThroughputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._readUnitsPerSecond !== undefined) {
            hasAnyValues = true;
            internalValueResult.readUnitsPerSecond = this._readUnitsPerSecond;
        }
        if (this._writeUnitsPerSecond !== undefined) {
            hasAnyValues = true;
            internalValueResult.writeUnitsPerSecond = this._writeUnitsPerSecond;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WarmThroughputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._readUnitsPerSecond = undefined;
            this._writeUnitsPerSecond = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._readUnitsPerSecond = value.readUnitsPerSecond;
            this._writeUnitsPerSecond = value.writeUnitsPerSecond;
        }
    }

    // read_units_per_second - computed: true, optional: true, required: false
    private _readUnitsPerSecond?: number; 
    public get readUnitsPerSecond() {
        return this.getNumberAttribute('read_units_per_second');
    }
    public set readUnitsPerSecond(value: number) {
        this._readUnitsPerSecond = value;
    }
    public resetReadUnitsPerSecond() {
        this._readUnitsPerSecond = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get readUnitsPerSecondInput() {
        return this._readUnitsPerSecond;
    }

    // write_units_per_second - computed: true, optional: true, required: false
    private _writeUnitsPerSecond?: number; 
    public get writeUnitsPerSecond() {
        return this.getNumberAttribute('write_units_per_second');
    }
    public set writeUnitsPerSecond(value: number) {
        this._writeUnitsPerSecond = value;
    }
    public resetWriteUnitsPerSecond() {
        this._writeUnitsPerSecond = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get writeUnitsPerSecondInput() {
        return this._writeUnitsPerSecond;
    }
}
}
