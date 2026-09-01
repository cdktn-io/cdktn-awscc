// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_replication_group

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcReplicationGroupProps extends cdktn.TerraformMetaArguments {
    /**
    * A flag that enables encryption at rest when set to true.AtRestEncryptionEnabled after the replication group is created. To enable encryption at rest on a replication group you must set AtRestEncryptionEnabled to true when you create the replication group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_replication_group#at_rest_encryption_enabled CcReplicationGroup#at_rest_encryption_enabled}
    */
    readonly atRestEncryptionEnabled?: boolean | cdktn.IResolvable;
    /**
    * Reserved parameter. The password used to access a password protected server.AuthToken can be specified only on replication groups where TransitEncryptionEnabled is true. For more information.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_replication_group#auth_token CcReplicationGroup#auth_token}
    */
    readonly authToken?: string;
    /**
    * This parameter is currently disabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_replication_group#auto_minor_version_upgrade CcReplicationGroup#auto_minor_version_upgrade}
    */
    readonly autoMinorVersionUpgrade?: boolean | cdktn.IResolvable;
    /**
    * Specifies whether a read-only replica is automatically promoted to read/write primary if the existing primary fails. AutomaticFailoverEnabled must be enabled for Redis (cluster mode enabled) replication groups.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_replication_group#automatic_failover_enabled CcReplicationGroup#automatic_failover_enabled}
    */
    readonly automaticFailoverEnabled?: boolean | cdktn.IResolvable;
    /**
    * The compute and memory capacity of the nodes in the node group (shard).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_replication_group#cache_node_type CcReplicationGroup#cache_node_type}
    */
    readonly cacheNodeType?: string;
    /**
    * The name of the parameter group to associate with this replication group. If this argument is omitted, the default cache parameter group for the specified engine is used.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_replication_group#cache_parameter_group_name CcReplicationGroup#cache_parameter_group_name}
    */
    readonly cacheParameterGroupName?: string;
    /**
    * A list of cache security group names to associate with this replication group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_replication_group#cache_security_group_names CcReplicationGroup#cache_security_group_names}
    */
    readonly cacheSecurityGroupNames?: string[];
    /**
    * The name of the cache subnet group to be used for the replication group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_replication_group#cache_subnet_group_name CcReplicationGroup#cache_subnet_group_name}
    */
    readonly cacheSubnetGroupName?: string;
    /**
    * Enabled or Disabled. To modify cluster mode from Disabled to Enabled, you must first set the cluster mode to Compatible. Compatible mode allows your Redis OSS clients to connect using both cluster mode enabled and cluster mode disabled. After you migrate all Redis OSS clients to use cluster mode enabled, you can then complete cluster mode configuration and set the cluster mode to Enabled. For more information, see Modify cluster mode.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_replication_group#cluster_mode CcReplicationGroup#cluster_mode}
    */
    readonly clusterMode?: string;
    /**
    * Enables data tiering. Data tiering is only supported for replication groups using the r6gd node type. This parameter must be set to true when using r6gd nodes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_replication_group#data_tiering_enabled CcReplicationGroup#data_tiering_enabled}
    */
    readonly dataTieringEnabled?: boolean | cdktn.IResolvable;
    /**
    * The durability setting for the replication group. Valid values: default, async, sync, disabled. Enabling durability on an existing non-durable cluster or disabling durability on an existing durable cluster is not currently supported and will result in an error; specify the desired durability at create time. The resolved state is returned in EffectiveDurability.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_replication_group#durability CcReplicationGroup#durability}
    */
    readonly durability?: string;
    /**
    * The name of the cache engine to be used for the clusters in this replication group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_replication_group#engine CcReplicationGroup#engine}
    */
    readonly engine?: string;
    /**
    * The version number of the cache engine to be used for the clusters in this replication group. To view the supported cache engine versions, use the DescribeCacheEngineVersions operation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_replication_group#engine_version CcReplicationGroup#engine_version}
    */
    readonly engineVersion?: string;
    /**
    * The name of the Global datastore
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_replication_group#global_replication_group_id CcReplicationGroup#global_replication_group_id}
    */
    readonly globalReplicationGroupId?: string;
    /**
    * The network type you choose when creating a replication group, either ipv4 | ipv6. IPv6 is supported for workloads using Redis OSS engine version 6.2 onward or Memcached engine version 1.6.6 on all instances built on the Nitro system.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_replication_group#ip_discovery CcReplicationGroup#ip_discovery}
    */
    readonly ipDiscovery?: string;
    /**
    * The ID of the KMS key used to encrypt the disk on the cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_replication_group#kms_key_id CcReplicationGroup#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Specifies the destination, format and type of the logs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_replication_group#log_delivery_configurations CcReplicationGroup#log_delivery_configurations}
    */
    readonly logDeliveryConfigurations?: CcReplicationGroup.LogDeliveryConfigurationRequestProperty[] | cdktn.IResolvable;
    /**
    * A flag indicating if you have Multi-AZ enabled to enhance fault tolerance. For more information, see Minimizing Downtime: Multi-AZ.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_replication_group#multi_az_enabled CcReplicationGroup#multi_az_enabled}
    */
    readonly multiAzEnabled?: boolean | cdktn.IResolvable;
    /**
    * Must be either ipv4 | ipv6 | dual_stack. IPv6 is supported for workloads using Redis OSS engine version 6.2 onward or Memcached engine version 1.6.6 on all instances built on the Nitro system
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_replication_group#network_type CcReplicationGroup#network_type}
    */
    readonly networkType?: string;
    /**
    * NodeGroupConfiguration is a property of the AWS::ElastiCache::ReplicationGroup resource that configures an Amazon ElastiCache (ElastiCache) Redis cluster node group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_replication_group#node_group_configuration CcReplicationGroup#node_group_configuration}
    */
    readonly nodeGroupConfiguration?: CcReplicationGroup.NodeGroupConfigurationProperty[] | cdktn.IResolvable;
    /**
    * The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) topic to which notifications are sent.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_replication_group#notification_topic_arn CcReplicationGroup#notification_topic_arn}
    */
    readonly notificationTopicArn?: string;
    /**
    * The number of clusters this replication group initially has.This parameter is not used if there is more than one node group (shard). You should use ReplicasPerNodeGroup instead.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_replication_group#num_cache_clusters CcReplicationGroup#num_cache_clusters}
    */
    readonly numCacheClusters?: number;
    /**
    * An optional parameter that specifies the number of node groups (shards) for this Redis (cluster mode enabled) replication group. For Redis (cluster mode disabled) either omit this parameter or set it to 1.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_replication_group#num_node_groups CcReplicationGroup#num_node_groups}
    */
    readonly numNodeGroups?: number;
    /**
    * The port number on which each member of the replication group accepts connections.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_replication_group#port CcReplicationGroup#port}
    */
    readonly port?: number;
    /**
    * A list of EC2 Availability Zones in which the replication group's clusters are created. The order of the Availability Zones in the list is the order in which clusters are allocated. The primary cluster is created in the first AZ in the list. This parameter is not used if there is more than one node group (shard). You should use NodeGroupConfiguration instead.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_replication_group#preferred_cache_cluster_a_zs CcReplicationGroup#preferred_cache_cluster_a_zs}
    */
    readonly preferredCacheClusterAZs?: string[];
    /**
    * Specifies the weekly time range during which maintenance on the cluster is performed. It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_replication_group#preferred_maintenance_window CcReplicationGroup#preferred_maintenance_window}
    */
    readonly preferredMaintenanceWindow?: string;
    /**
    * The identifier of the cluster that serves as the primary for this replication group. This cluster must already exist and have a status of available.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_replication_group#primary_cluster_id CcReplicationGroup#primary_cluster_id}
    */
    readonly primaryClusterId?: string;
    /**
    * An optional parameter that specifies the number of replica nodes in each node group (shard). Valid values are 0 to 5.
    * 
    * **Note:** Using ReplicasPerNodeGroup with NodeGroupConfiguration results in resource replacement. For online scaling, use ReplicasPerNodeGroup alone.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_replication_group#replicas_per_node_group CcReplicationGroup#replicas_per_node_group}
    */
    readonly replicasPerNodeGroup?: number;
    /**
    * A user-created description for the replication group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_replication_group#replication_group_description CcReplicationGroup#replication_group_description}
    */
    readonly replicationGroupDescription: string;
    /**
    * The replication group identifier. This parameter is stored as a lowercase string.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_replication_group#replication_group_id CcReplicationGroup#replication_group_id}
    */
    readonly replicationGroupId?: string;
    /**
    * One or more Amazon VPC security groups associated with this replication group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_replication_group#security_group_ids CcReplicationGroup#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * A list of Amazon Resource Names (ARN) that uniquely identify the Redis RDB snapshot files stored in Amazon S3.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_replication_group#snapshot_arns CcReplicationGroup#snapshot_arns}
    */
    readonly snapshotArns?: string[];
    /**
    * The name of a snapshot from which to restore data into the new replication group. The snapshot status changes to restoring while the new replication group is being created.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_replication_group#snapshot_name CcReplicationGroup#snapshot_name}
    */
    readonly snapshotName?: string;
    /**
    * The number of days for which ElastiCache retains automatic snapshots before deleting them. For example, if you set SnapshotRetentionLimit to 5, a snapshot that was taken today is retained for 5 days before being deleted.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_replication_group#snapshot_retention_limit CcReplicationGroup#snapshot_retention_limit}
    */
    readonly snapshotRetentionLimit?: number;
    /**
    * The daily time range (in UTC) during which ElastiCache begins taking a daily snapshot of your node group (shard).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_replication_group#snapshot_window CcReplicationGroup#snapshot_window}
    */
    readonly snapshotWindow?: string;
    /**
    * The cluster ID that is used as the daily snapshot source for the replication group. This parameter cannot be set for Redis (cluster mode enabled) replication groups.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_replication_group#snapshotting_cluster_id CcReplicationGroup#snapshotting_cluster_id}
    */
    readonly snapshottingClusterId?: string;
    /**
    * A list of cost allocation tags to be added to this resource. Tags are comma-separated key,value pairs (e.g. Key=myKey, Value=myKeyValue. You can include multiple tags as shown following: Key=myKey, Value=myKeyValue Key=mySecondKey, Value=mySecondKeyValue.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_replication_group#tags CcReplicationGroup#tags}
    */
    readonly tags?: CcReplicationGroup.TagProperty[] | cdktn.IResolvable;
    /**
    * A flag that enables in-transit encryption when set to true.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_replication_group#transit_encryption_enabled CcReplicationGroup#transit_encryption_enabled}
    */
    readonly transitEncryptionEnabled?: boolean | cdktn.IResolvable;
    /**
    * A setting that allows you to migrate your clients to use in-transit encryption, with no downtime. When setting TransitEncryptionEnabled to true, you can set your TransitEncryptionMode to preferred in the same request, to allow both encrypted and unencrypted connections at the same time. Once you migrate all your Redis OSS clients to use encrypted connections you can modify the value to required to allow encrypted connections only. Setting TransitEncryptionMode to required is a two-step process that requires you to first set the TransitEncryptionMode to preferred, after that you can set TransitEncryptionMode to required. This process will not trigger the replacement of the replication group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_replication_group#transit_encryption_mode CcReplicationGroup#transit_encryption_mode}
    */
    readonly transitEncryptionMode?: string;
    /**
    * The ID of user group to associate with the replication group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_replication_group#user_group_ids CcReplicationGroup#user_group_ids}
    */
    readonly userGroupIds?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_replication_group awscc_elasticache_replication_group}
*/
export class CcReplicationGroup extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_elasticache_replication_group";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcReplicationGroup resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcReplicationGroup to import
    * @param importFromId The id of the existing CcReplicationGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_replication_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcReplicationGroup to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_elasticache_replication_group", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_replication_group awscc_elasticache_replication_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcReplicationGroupProps
    */
    public constructor(scope: Construct, id: string, config: CcReplicationGroupProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_elasticache_replication_group',
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
        this._atRestEncryptionEnabled = config.atRestEncryptionEnabled;
        this._authToken = config.authToken;
        this._autoMinorVersionUpgrade = config.autoMinorVersionUpgrade;
        this._automaticFailoverEnabled = config.automaticFailoverEnabled;
        this._cacheNodeType = config.cacheNodeType;
        this._cacheParameterGroupName = config.cacheParameterGroupName;
        this._cacheSecurityGroupNames = config.cacheSecurityGroupNames;
        this._cacheSubnetGroupName = config.cacheSubnetGroupName;
        this._clusterMode = config.clusterMode;
        this._dataTieringEnabled = config.dataTieringEnabled;
        this._durability = config.durability;
        this._engine = config.engine;
        this._engineVersion = config.engineVersion;
        this._globalReplicationGroupId = config.globalReplicationGroupId;
        this._ipDiscovery = config.ipDiscovery;
        this._kmsKeyId = config.kmsKeyId;
        this._logDeliveryConfigurations.internalValue = config.logDeliveryConfigurations;
        this._multiAzEnabled = config.multiAzEnabled;
        this._networkType = config.networkType;
        this._nodeGroupConfiguration.internalValue = config.nodeGroupConfiguration;
        this._notificationTopicArn = config.notificationTopicArn;
        this._numCacheClusters = config.numCacheClusters;
        this._numNodeGroups = config.numNodeGroups;
        this._port = config.port;
        this._preferredCacheClusterAZs = config.preferredCacheClusterAZs;
        this._preferredMaintenanceWindow = config.preferredMaintenanceWindow;
        this._primaryClusterId = config.primaryClusterId;
        this._replicasPerNodeGroup = config.replicasPerNodeGroup;
        this._replicationGroupDescription = config.replicationGroupDescription;
        this._replicationGroupId = config.replicationGroupId;
        this._securityGroupIds = config.securityGroupIds;
        this._snapshotArns = config.snapshotArns;
        this._snapshotName = config.snapshotName;
        this._snapshotRetentionLimit = config.snapshotRetentionLimit;
        this._snapshotWindow = config.snapshotWindow;
        this._snapshottingClusterId = config.snapshottingClusterId;
        this._tags.internalValue = config.tags;
        this._transitEncryptionEnabled = config.transitEncryptionEnabled;
        this._transitEncryptionMode = config.transitEncryptionMode;
        this._userGroupIds = config.userGroupIds;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // at_rest_encryption_enabled - computed: true, optional: true, required: false
    private _atRestEncryptionEnabled?: boolean | cdktn.IResolvable; 
    public get atRestEncryptionEnabled() {
        return this.getBooleanAttribute('at_rest_encryption_enabled');
    }
    public set atRestEncryptionEnabled(value: boolean | cdktn.IResolvable) {
        this._atRestEncryptionEnabled = value;
    }
    public resetAtRestEncryptionEnabled() {
        this._atRestEncryptionEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get atRestEncryptionEnabledInput() {
        return this._atRestEncryptionEnabled;
    }

    // auth_token - computed: true, optional: true, required: false
    private _authToken?: string; 
    public get authToken() {
        return this.getStringAttribute('auth_token');
    }
    public set authToken(value: string) {
        this._authToken = value;
    }
    public resetAuthToken() {
        this._authToken = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authTokenInput() {
        return this._authToken;
    }

    // auto_minor_version_upgrade - computed: true, optional: true, required: false
    private _autoMinorVersionUpgrade?: boolean | cdktn.IResolvable; 
    public get autoMinorVersionUpgrade() {
        return this.getBooleanAttribute('auto_minor_version_upgrade');
    }
    public set autoMinorVersionUpgrade(value: boolean | cdktn.IResolvable) {
        this._autoMinorVersionUpgrade = value;
    }
    public resetAutoMinorVersionUpgrade() {
        this._autoMinorVersionUpgrade = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoMinorVersionUpgradeInput() {
        return this._autoMinorVersionUpgrade;
    }

    // automatic_failover_enabled - computed: true, optional: true, required: false
    private _automaticFailoverEnabled?: boolean | cdktn.IResolvable; 
    public get automaticFailoverEnabled() {
        return this.getBooleanAttribute('automatic_failover_enabled');
    }
    public set automaticFailoverEnabled(value: boolean | cdktn.IResolvable) {
        this._automaticFailoverEnabled = value;
    }
    public resetAutomaticFailoverEnabled() {
        this._automaticFailoverEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get automaticFailoverEnabledInput() {
        return this._automaticFailoverEnabled;
    }

    // cache_node_type - computed: true, optional: true, required: false
    private _cacheNodeType?: string; 
    public get cacheNodeType() {
        return this.getStringAttribute('cache_node_type');
    }
    public set cacheNodeType(value: string) {
        this._cacheNodeType = value;
    }
    public resetCacheNodeType() {
        this._cacheNodeType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cacheNodeTypeInput() {
        return this._cacheNodeType;
    }

    // cache_parameter_group_name - computed: true, optional: true, required: false
    private _cacheParameterGroupName?: string; 
    public get cacheParameterGroupName() {
        return this.getStringAttribute('cache_parameter_group_name');
    }
    public set cacheParameterGroupName(value: string) {
        this._cacheParameterGroupName = value;
    }
    public resetCacheParameterGroupName() {
        this._cacheParameterGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cacheParameterGroupNameInput() {
        return this._cacheParameterGroupName;
    }

    // cache_security_group_names - computed: true, optional: true, required: false
    private _cacheSecurityGroupNames?: string[]; 
    public get cacheSecurityGroupNames() {
        return this.getListAttribute('cache_security_group_names');
    }
    public set cacheSecurityGroupNames(value: string[]) {
        this._cacheSecurityGroupNames = value;
    }
    public resetCacheSecurityGroupNames() {
        this._cacheSecurityGroupNames = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cacheSecurityGroupNamesInput() {
        return this._cacheSecurityGroupNames;
    }

    // cache_subnet_group_name - computed: true, optional: true, required: false
    private _cacheSubnetGroupName?: string; 
    public get cacheSubnetGroupName() {
        return this.getStringAttribute('cache_subnet_group_name');
    }
    public set cacheSubnetGroupName(value: string) {
        this._cacheSubnetGroupName = value;
    }
    public resetCacheSubnetGroupName() {
        this._cacheSubnetGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cacheSubnetGroupNameInput() {
        return this._cacheSubnetGroupName;
    }

    // cluster_mode - computed: true, optional: true, required: false
    private _clusterMode?: string; 
    public get clusterMode() {
        return this.getStringAttribute('cluster_mode');
    }
    public set clusterMode(value: string) {
        this._clusterMode = value;
    }
    public resetClusterMode() {
        this._clusterMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterModeInput() {
        return this._clusterMode;
    }

    // configuration_end_point - computed: true, optional: false, required: false
    private _configurationEndPoint = new CcReplicationGroup.ConfigurationEndPointPropertyOutputReference(this, "configuration_end_point");
    public get configurationEndPoint() {
        return this._configurationEndPoint;
    }

    // data_tiering_enabled - computed: true, optional: true, required: false
    private _dataTieringEnabled?: boolean | cdktn.IResolvable; 
    public get dataTieringEnabled() {
        return this.getBooleanAttribute('data_tiering_enabled');
    }
    public set dataTieringEnabled(value: boolean | cdktn.IResolvable) {
        this._dataTieringEnabled = value;
    }
    public resetDataTieringEnabled() {
        this._dataTieringEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataTieringEnabledInput() {
        return this._dataTieringEnabled;
    }

    // durability - computed: true, optional: true, required: false
    private _durability?: string; 
    public get durability() {
        return this.getStringAttribute('durability');
    }
    public set durability(value: string) {
        this._durability = value;
    }
    public resetDurability() {
        this._durability = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get durabilityInput() {
        return this._durability;
    }

    // effective_durability - computed: true, optional: false, required: false
    public get effectiveDurability() {
        return this.getStringAttribute('effective_durability');
    }

    // engine - computed: true, optional: true, required: false
    private _engine?: string; 
    public get engine() {
        return this.getStringAttribute('engine');
    }
    public set engine(value: string) {
        this._engine = value;
    }
    public resetEngine() {
        this._engine = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get engineInput() {
        return this._engine;
    }

    // engine_version - computed: true, optional: true, required: false
    private _engineVersion?: string; 
    public get engineVersion() {
        return this.getStringAttribute('engine_version');
    }
    public set engineVersion(value: string) {
        this._engineVersion = value;
    }
    public resetEngineVersion() {
        this._engineVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get engineVersionInput() {
        return this._engineVersion;
    }

    // global_replication_group_id - computed: true, optional: true, required: false
    private _globalReplicationGroupId?: string; 
    public get globalReplicationGroupId() {
        return this.getStringAttribute('global_replication_group_id');
    }
    public set globalReplicationGroupId(value: string) {
        this._globalReplicationGroupId = value;
    }
    public resetGlobalReplicationGroupId() {
        this._globalReplicationGroupId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get globalReplicationGroupIdInput() {
        return this._globalReplicationGroupId;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // ip_discovery - computed: true, optional: true, required: false
    private _ipDiscovery?: string; 
    public get ipDiscovery() {
        return this.getStringAttribute('ip_discovery');
    }
    public set ipDiscovery(value: string) {
        this._ipDiscovery = value;
    }
    public resetIpDiscovery() {
        this._ipDiscovery = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ipDiscoveryInput() {
        return this._ipDiscovery;
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

    // log_delivery_configurations - computed: true, optional: true, required: false
    private _logDeliveryConfigurations = new CcReplicationGroup.LogDeliveryConfigurationRequestPropertyList(this, "log_delivery_configurations", false);
    public get logDeliveryConfigurations() {
        return this._logDeliveryConfigurations;
    }
    public putLogDeliveryConfigurations(value: CcReplicationGroup.LogDeliveryConfigurationRequestProperty[] | cdktn.IResolvable) {
        this._logDeliveryConfigurations.internalValue = value;
    }
    public resetLogDeliveryConfigurations() {
        this._logDeliveryConfigurations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logDeliveryConfigurationsInput() {
        return this._logDeliveryConfigurations.internalValue;
    }

    // multi_az_enabled - computed: true, optional: true, required: false
    private _multiAzEnabled?: boolean | cdktn.IResolvable; 
    public get multiAzEnabled() {
        return this.getBooleanAttribute('multi_az_enabled');
    }
    public set multiAzEnabled(value: boolean | cdktn.IResolvable) {
        this._multiAzEnabled = value;
    }
    public resetMultiAzEnabled() {
        this._multiAzEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get multiAzEnabledInput() {
        return this._multiAzEnabled;
    }

    // network_type - computed: true, optional: true, required: false
    private _networkType?: string; 
    public get networkType() {
        return this.getStringAttribute('network_type');
    }
    public set networkType(value: string) {
        this._networkType = value;
    }
    public resetNetworkType() {
        this._networkType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkTypeInput() {
        return this._networkType;
    }

    // node_group_configuration - computed: true, optional: true, required: false
    private _nodeGroupConfiguration = new CcReplicationGroup.NodeGroupConfigurationPropertyList(this, "node_group_configuration", false);
    public get nodeGroupConfiguration() {
        return this._nodeGroupConfiguration;
    }
    public putNodeGroupConfiguration(value: CcReplicationGroup.NodeGroupConfigurationProperty[] | cdktn.IResolvable) {
        this._nodeGroupConfiguration.internalValue = value;
    }
    public resetNodeGroupConfiguration() {
        this._nodeGroupConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nodeGroupConfigurationInput() {
        return this._nodeGroupConfiguration.internalValue;
    }

    // notification_topic_arn - computed: true, optional: true, required: false
    private _notificationTopicArn?: string; 
    public get notificationTopicArn() {
        return this.getStringAttribute('notification_topic_arn');
    }
    public set notificationTopicArn(value: string) {
        this._notificationTopicArn = value;
    }
    public resetNotificationTopicArn() {
        this._notificationTopicArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get notificationTopicArnInput() {
        return this._notificationTopicArn;
    }

    // num_cache_clusters - computed: true, optional: true, required: false
    private _numCacheClusters?: number; 
    public get numCacheClusters() {
        return this.getNumberAttribute('num_cache_clusters');
    }
    public set numCacheClusters(value: number) {
        this._numCacheClusters = value;
    }
    public resetNumCacheClusters() {
        this._numCacheClusters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get numCacheClustersInput() {
        return this._numCacheClusters;
    }

    // num_node_groups - computed: true, optional: true, required: false
    private _numNodeGroups?: number; 
    public get numNodeGroups() {
        return this.getNumberAttribute('num_node_groups');
    }
    public set numNodeGroups(value: number) {
        this._numNodeGroups = value;
    }
    public resetNumNodeGroups() {
        this._numNodeGroups = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get numNodeGroupsInput() {
        return this._numNodeGroups;
    }

    // port - computed: true, optional: true, required: false
    private _port?: number; 
    public get port() {
        return this.getNumberAttribute('port');
    }
    public set port(value: number) {
        this._port = value;
    }
    public resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portInput() {
        return this._port;
    }

    // preferred_cache_cluster_a_zs - computed: true, optional: true, required: false
    private _preferredCacheClusterAZs?: string[]; 
    public get preferredCacheClusterAZs() {
        return this.getListAttribute('preferred_cache_cluster_a_zs');
    }
    public set preferredCacheClusterAZs(value: string[]) {
        this._preferredCacheClusterAZs = value;
    }
    public resetPreferredCacheClusterAZs() {
        this._preferredCacheClusterAZs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get preferredCacheClusterAZsInput() {
        return this._preferredCacheClusterAZs;
    }

    // preferred_maintenance_window - computed: true, optional: true, required: false
    private _preferredMaintenanceWindow?: string; 
    public get preferredMaintenanceWindow() {
        return this.getStringAttribute('preferred_maintenance_window');
    }
    public set preferredMaintenanceWindow(value: string) {
        this._preferredMaintenanceWindow = value;
    }
    public resetPreferredMaintenanceWindow() {
        this._preferredMaintenanceWindow = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get preferredMaintenanceWindowInput() {
        return this._preferredMaintenanceWindow;
    }

    // primary_cluster_id - computed: true, optional: true, required: false
    private _primaryClusterId?: string; 
    public get primaryClusterId() {
        return this.getStringAttribute('primary_cluster_id');
    }
    public set primaryClusterId(value: string) {
        this._primaryClusterId = value;
    }
    public resetPrimaryClusterId() {
        this._primaryClusterId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get primaryClusterIdInput() {
        return this._primaryClusterId;
    }

    // primary_end_point - computed: true, optional: false, required: false
    private _primaryEndPoint = new CcReplicationGroup.PrimaryEndPointPropertyOutputReference(this, "primary_end_point");
    public get primaryEndPoint() {
        return this._primaryEndPoint;
    }

    // read_end_point - computed: true, optional: false, required: false
    private _readEndPoint = new CcReplicationGroup.ReadEndPointPropertyOutputReference(this, "read_end_point");
    public get readEndPoint() {
        return this._readEndPoint;
    }

    // reader_end_point - computed: true, optional: false, required: false
    private _readerEndPoint = new CcReplicationGroup.ReaderEndPointPropertyOutputReference(this, "reader_end_point");
    public get readerEndPoint() {
        return this._readerEndPoint;
    }

    // replicas_per_node_group - computed: true, optional: true, required: false
    private _replicasPerNodeGroup?: number; 
    public get replicasPerNodeGroup() {
        return this.getNumberAttribute('replicas_per_node_group');
    }
    public set replicasPerNodeGroup(value: number) {
        this._replicasPerNodeGroup = value;
    }
    public resetReplicasPerNodeGroup() {
        this._replicasPerNodeGroup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get replicasPerNodeGroupInput() {
        return this._replicasPerNodeGroup;
    }

    // replication_group_description - computed: false, optional: false, required: true
    private _replicationGroupDescription?: string; 
    public get replicationGroupDescription() {
        return this.getStringAttribute('replication_group_description');
    }
    public set replicationGroupDescription(value: string) {
        this._replicationGroupDescription = value;
    }
    // Temporarily expose input value. Use with caution.
    public get replicationGroupDescriptionInput() {
        return this._replicationGroupDescription;
    }

    // replication_group_id - computed: true, optional: true, required: false
    private _replicationGroupId?: string; 
    public get replicationGroupId() {
        return this.getStringAttribute('replication_group_id');
    }
    public set replicationGroupId(value: string) {
        this._replicationGroupId = value;
    }
    public resetReplicationGroupId() {
        this._replicationGroupId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get replicationGroupIdInput() {
        return this._replicationGroupId;
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

    // snapshot_arns - computed: true, optional: true, required: false
    private _snapshotArns?: string[]; 
    public get snapshotArns() {
        return this.getListAttribute('snapshot_arns');
    }
    public set snapshotArns(value: string[]) {
        this._snapshotArns = value;
    }
    public resetSnapshotArns() {
        this._snapshotArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get snapshotArnsInput() {
        return this._snapshotArns;
    }

    // snapshot_name - computed: true, optional: true, required: false
    private _snapshotName?: string; 
    public get snapshotName() {
        return this.getStringAttribute('snapshot_name');
    }
    public set snapshotName(value: string) {
        this._snapshotName = value;
    }
    public resetSnapshotName() {
        this._snapshotName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get snapshotNameInput() {
        return this._snapshotName;
    }

    // snapshot_retention_limit - computed: true, optional: true, required: false
    private _snapshotRetentionLimit?: number; 
    public get snapshotRetentionLimit() {
        return this.getNumberAttribute('snapshot_retention_limit');
    }
    public set snapshotRetentionLimit(value: number) {
        this._snapshotRetentionLimit = value;
    }
    public resetSnapshotRetentionLimit() {
        this._snapshotRetentionLimit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get snapshotRetentionLimitInput() {
        return this._snapshotRetentionLimit;
    }

    // snapshot_window - computed: true, optional: true, required: false
    private _snapshotWindow?: string; 
    public get snapshotWindow() {
        return this.getStringAttribute('snapshot_window');
    }
    public set snapshotWindow(value: string) {
        this._snapshotWindow = value;
    }
    public resetSnapshotWindow() {
        this._snapshotWindow = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get snapshotWindowInput() {
        return this._snapshotWindow;
    }

    // snapshotting_cluster_id - computed: true, optional: true, required: false
    private _snapshottingClusterId?: string; 
    public get snapshottingClusterId() {
        return this.getStringAttribute('snapshotting_cluster_id');
    }
    public set snapshottingClusterId(value: string) {
        this._snapshottingClusterId = value;
    }
    public resetSnapshottingClusterId() {
        this._snapshottingClusterId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get snapshottingClusterIdInput() {
        return this._snapshottingClusterId;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcReplicationGroup.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcReplicationGroup.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // transit_encryption_enabled - computed: true, optional: true, required: false
    private _transitEncryptionEnabled?: boolean | cdktn.IResolvable; 
    public get transitEncryptionEnabled() {
        return this.getBooleanAttribute('transit_encryption_enabled');
    }
    public set transitEncryptionEnabled(value: boolean | cdktn.IResolvable) {
        this._transitEncryptionEnabled = value;
    }
    public resetTransitEncryptionEnabled() {
        this._transitEncryptionEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get transitEncryptionEnabledInput() {
        return this._transitEncryptionEnabled;
    }

    // transit_encryption_mode - computed: true, optional: true, required: false
    private _transitEncryptionMode?: string; 
    public get transitEncryptionMode() {
        return this.getStringAttribute('transit_encryption_mode');
    }
    public set transitEncryptionMode(value: string) {
        this._transitEncryptionMode = value;
    }
    public resetTransitEncryptionMode() {
        this._transitEncryptionMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get transitEncryptionModeInput() {
        return this._transitEncryptionMode;
    }

    // user_group_ids - computed: true, optional: true, required: false
    private _userGroupIds?: string[]; 
    public get userGroupIds() {
        return this.getListAttribute('user_group_ids');
    }
    public set userGroupIds(value: string[]) {
        this._userGroupIds = value;
    }
    public resetUserGroupIds() {
        this._userGroupIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userGroupIdsInput() {
        return this._userGroupIds;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            at_rest_encryption_enabled: cdktn.booleanToTerraform(this._atRestEncryptionEnabled),
            auth_token: cdktn.stringToTerraform(this._authToken),
            auto_minor_version_upgrade: cdktn.booleanToTerraform(this._autoMinorVersionUpgrade),
            automatic_failover_enabled: cdktn.booleanToTerraform(this._automaticFailoverEnabled),
            cache_node_type: cdktn.stringToTerraform(this._cacheNodeType),
            cache_parameter_group_name: cdktn.stringToTerraform(this._cacheParameterGroupName),
            cache_security_group_names: cdktn.listMapper(cdktn.stringToTerraform, false)(this._cacheSecurityGroupNames),
            cache_subnet_group_name: cdktn.stringToTerraform(this._cacheSubnetGroupName),
            cluster_mode: cdktn.stringToTerraform(this._clusterMode),
            data_tiering_enabled: cdktn.booleanToTerraform(this._dataTieringEnabled),
            durability: cdktn.stringToTerraform(this._durability),
            engine: cdktn.stringToTerraform(this._engine),
            engine_version: cdktn.stringToTerraform(this._engineVersion),
            global_replication_group_id: cdktn.stringToTerraform(this._globalReplicationGroupId),
            ip_discovery: cdktn.stringToTerraform(this._ipDiscovery),
            kms_key_id: cdktn.stringToTerraform(this._kmsKeyId),
            log_delivery_configurations: cdktn.listMapper(ccReplicationGroupLogDeliveryConfigurationRequestPropertyToTerraform, false)(this._logDeliveryConfigurations.internalValue),
            multi_az_enabled: cdktn.booleanToTerraform(this._multiAzEnabled),
            network_type: cdktn.stringToTerraform(this._networkType),
            node_group_configuration: cdktn.listMapper(ccReplicationGroupNodeGroupConfigurationPropertyToTerraform, false)(this._nodeGroupConfiguration.internalValue),
            notification_topic_arn: cdktn.stringToTerraform(this._notificationTopicArn),
            num_cache_clusters: cdktn.numberToTerraform(this._numCacheClusters),
            num_node_groups: cdktn.numberToTerraform(this._numNodeGroups),
            port: cdktn.numberToTerraform(this._port),
            preferred_cache_cluster_a_zs: cdktn.listMapper(cdktn.stringToTerraform, false)(this._preferredCacheClusterAZs),
            preferred_maintenance_window: cdktn.stringToTerraform(this._preferredMaintenanceWindow),
            primary_cluster_id: cdktn.stringToTerraform(this._primaryClusterId),
            replicas_per_node_group: cdktn.numberToTerraform(this._replicasPerNodeGroup),
            replication_group_description: cdktn.stringToTerraform(this._replicationGroupDescription),
            replication_group_id: cdktn.stringToTerraform(this._replicationGroupId),
            security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._securityGroupIds),
            snapshot_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(this._snapshotArns),
            snapshot_name: cdktn.stringToTerraform(this._snapshotName),
            snapshot_retention_limit: cdktn.numberToTerraform(this._snapshotRetentionLimit),
            snapshot_window: cdktn.stringToTerraform(this._snapshotWindow),
            snapshotting_cluster_id: cdktn.stringToTerraform(this._snapshottingClusterId),
            tags: cdktn.listMapper(ccReplicationGroupTagPropertyToTerraform, false)(this._tags.internalValue),
            transit_encryption_enabled: cdktn.booleanToTerraform(this._transitEncryptionEnabled),
            transit_encryption_mode: cdktn.stringToTerraform(this._transitEncryptionMode),
            user_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._userGroupIds),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            at_rest_encryption_enabled: {
                value: cdktn.booleanToHclTerraform(this._atRestEncryptionEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            auth_token: {
                value: cdktn.stringToHclTerraform(this._authToken),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            auto_minor_version_upgrade: {
                value: cdktn.booleanToHclTerraform(this._autoMinorVersionUpgrade),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            automatic_failover_enabled: {
                value: cdktn.booleanToHclTerraform(this._automaticFailoverEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            cache_node_type: {
                value: cdktn.stringToHclTerraform(this._cacheNodeType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            cache_parameter_group_name: {
                value: cdktn.stringToHclTerraform(this._cacheParameterGroupName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            cache_security_group_names: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._cacheSecurityGroupNames),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            cache_subnet_group_name: {
                value: cdktn.stringToHclTerraform(this._cacheSubnetGroupName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            cluster_mode: {
                value: cdktn.stringToHclTerraform(this._clusterMode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            data_tiering_enabled: {
                value: cdktn.booleanToHclTerraform(this._dataTieringEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            durability: {
                value: cdktn.stringToHclTerraform(this._durability),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            engine: {
                value: cdktn.stringToHclTerraform(this._engine),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            engine_version: {
                value: cdktn.stringToHclTerraform(this._engineVersion),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            global_replication_group_id: {
                value: cdktn.stringToHclTerraform(this._globalReplicationGroupId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ip_discovery: {
                value: cdktn.stringToHclTerraform(this._ipDiscovery),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            kms_key_id: {
                value: cdktn.stringToHclTerraform(this._kmsKeyId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            log_delivery_configurations: {
                value: cdktn.listMapperHcl(ccReplicationGroupLogDeliveryConfigurationRequestPropertyToHclTerraform, false)(this._logDeliveryConfigurations.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcReplicationGroup.LogDeliveryConfigurationRequestPropertyList",
            },
            multi_az_enabled: {
                value: cdktn.booleanToHclTerraform(this._multiAzEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            network_type: {
                value: cdktn.stringToHclTerraform(this._networkType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            node_group_configuration: {
                value: cdktn.listMapperHcl(ccReplicationGroupNodeGroupConfigurationPropertyToHclTerraform, false)(this._nodeGroupConfiguration.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcReplicationGroup.NodeGroupConfigurationPropertyList",
            },
            notification_topic_arn: {
                value: cdktn.stringToHclTerraform(this._notificationTopicArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            num_cache_clusters: {
                value: cdktn.numberToHclTerraform(this._numCacheClusters),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            num_node_groups: {
                value: cdktn.numberToHclTerraform(this._numNodeGroups),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            port: {
                value: cdktn.numberToHclTerraform(this._port),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            preferred_cache_cluster_a_zs: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._preferredCacheClusterAZs),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            preferred_maintenance_window: {
                value: cdktn.stringToHclTerraform(this._preferredMaintenanceWindow),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            primary_cluster_id: {
                value: cdktn.stringToHclTerraform(this._primaryClusterId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            replicas_per_node_group: {
                value: cdktn.numberToHclTerraform(this._replicasPerNodeGroup),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            replication_group_description: {
                value: cdktn.stringToHclTerraform(this._replicationGroupDescription),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            replication_group_id: {
                value: cdktn.stringToHclTerraform(this._replicationGroupId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            security_group_ids: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._securityGroupIds),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            snapshot_arns: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._snapshotArns),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            snapshot_name: {
                value: cdktn.stringToHclTerraform(this._snapshotName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            snapshot_retention_limit: {
                value: cdktn.numberToHclTerraform(this._snapshotRetentionLimit),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            snapshot_window: {
                value: cdktn.stringToHclTerraform(this._snapshotWindow),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            snapshotting_cluster_id: {
                value: cdktn.stringToHclTerraform(this._snapshottingClusterId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccReplicationGroupTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcReplicationGroup.TagPropertyList",
            },
            transit_encryption_enabled: {
                value: cdktn.booleanToHclTerraform(this._transitEncryptionEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            transit_encryption_mode: {
                value: cdktn.stringToHclTerraform(this._transitEncryptionMode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            user_group_ids: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._userGroupIds),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccReplicationGroupConfigurationEndPointPropertyToTerraform(struct?: CcReplicationGroup.ConfigurationEndPointProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccReplicationGroupConfigurationEndPointPropertyToHclTerraform(struct?: CcReplicationGroup.ConfigurationEndPointProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccReplicationGroupCloudWatchLogsDestinationDetailsPropertyToTerraform(struct?: CcReplicationGroup.CloudWatchLogsDestinationDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        log_group: cdktn.stringToTerraform(struct!.logGroup),
    }
}


export function ccReplicationGroupCloudWatchLogsDestinationDetailsPropertyToHclTerraform(struct?: CcReplicationGroup.CloudWatchLogsDestinationDetailsProperty | cdktn.IResolvable): any {
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


export function ccReplicationGroupKinesisFirehoseDestinationDetailsPropertyToTerraform(struct?: CcReplicationGroup.KinesisFirehoseDestinationDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        delivery_stream: cdktn.stringToTerraform(struct!.deliveryStream),
    }
}


export function ccReplicationGroupKinesisFirehoseDestinationDetailsPropertyToHclTerraform(struct?: CcReplicationGroup.KinesisFirehoseDestinationDetailsProperty | cdktn.IResolvable): any {
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccReplicationGroupDestinationDetailsPropertyToTerraform(struct?: CcReplicationGroup.DestinationDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cloudwatch_logs_details: ccReplicationGroupCloudWatchLogsDestinationDetailsPropertyToTerraform(struct!.cloudwatchLogsDetails),
        kinesis_firehose_details: ccReplicationGroupKinesisFirehoseDestinationDetailsPropertyToTerraform(struct!.kinesisFirehoseDetails),
    }
}


export function ccReplicationGroupDestinationDetailsPropertyToHclTerraform(struct?: CcReplicationGroup.DestinationDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cloudwatch_logs_details: {
            value: ccReplicationGroupCloudWatchLogsDestinationDetailsPropertyToHclTerraform(struct!.cloudwatchLogsDetails),
            isBlock: true,
            type: "struct",
            storageClassType: "CloudWatchLogsDestinationDetailsProperty",
        },
        kinesis_firehose_details: {
            value: ccReplicationGroupKinesisFirehoseDestinationDetailsPropertyToHclTerraform(struct!.kinesisFirehoseDetails),
            isBlock: true,
            type: "struct",
            storageClassType: "KinesisFirehoseDestinationDetailsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccReplicationGroupLogDeliveryConfigurationRequestPropertyToTerraform(struct?: CcReplicationGroup.LogDeliveryConfigurationRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        destination_details: ccReplicationGroupDestinationDetailsPropertyToTerraform(struct!.destinationDetails),
        destination_type: cdktn.stringToTerraform(struct!.destinationType),
        log_format: cdktn.stringToTerraform(struct!.logFormat),
        log_type: cdktn.stringToTerraform(struct!.logType),
    }
}


export function ccReplicationGroupLogDeliveryConfigurationRequestPropertyToHclTerraform(struct?: CcReplicationGroup.LogDeliveryConfigurationRequestProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        destination_details: {
            value: ccReplicationGroupDestinationDetailsPropertyToHclTerraform(struct!.destinationDetails),
            isBlock: true,
            type: "struct",
            storageClassType: "DestinationDetailsProperty",
        },
        destination_type: {
            value: cdktn.stringToHclTerraform(struct!.destinationType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        log_format: {
            value: cdktn.stringToHclTerraform(struct!.logFormat),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        log_type: {
            value: cdktn.stringToHclTerraform(struct!.logType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccReplicationGroupNodeGroupConfigurationPropertyToTerraform(struct?: CcReplicationGroup.NodeGroupConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        node_group_id: cdktn.stringToTerraform(struct!.nodeGroupId),
        primary_availability_zone: cdktn.stringToTerraform(struct!.primaryAvailabilityZone),
        replica_availability_zones: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.replicaAvailabilityZones),
        replica_count: cdktn.numberToTerraform(struct!.replicaCount),
        slots: cdktn.stringToTerraform(struct!.slots),
    }
}


export function ccReplicationGroupNodeGroupConfigurationPropertyToHclTerraform(struct?: CcReplicationGroup.NodeGroupConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        node_group_id: {
            value: cdktn.stringToHclTerraform(struct!.nodeGroupId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        primary_availability_zone: {
            value: cdktn.stringToHclTerraform(struct!.primaryAvailabilityZone),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        replica_availability_zones: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.replicaAvailabilityZones),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        replica_count: {
            value: cdktn.numberToHclTerraform(struct!.replicaCount),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        slots: {
            value: cdktn.stringToHclTerraform(struct!.slots),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccReplicationGroupPrimaryEndPointPropertyToTerraform(struct?: CcReplicationGroup.PrimaryEndPointProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccReplicationGroupPrimaryEndPointPropertyToHclTerraform(struct?: CcReplicationGroup.PrimaryEndPointProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccReplicationGroupReadEndPointPropertyToTerraform(struct?: CcReplicationGroup.ReadEndPointProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccReplicationGroupReadEndPointPropertyToHclTerraform(struct?: CcReplicationGroup.ReadEndPointProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccReplicationGroupReaderEndPointPropertyToTerraform(struct?: CcReplicationGroup.ReaderEndPointProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccReplicationGroupReaderEndPointPropertyToHclTerraform(struct?: CcReplicationGroup.ReaderEndPointProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccReplicationGroupTagPropertyToTerraform(struct?: CcReplicationGroup.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccReplicationGroupTagPropertyToHclTerraform(struct?: CcReplicationGroup.TagProperty | cdktn.IResolvable): any {
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


export namespace CcReplicationGroup {
export interface ConfigurationEndPointProperty {
}
export class ConfigurationEndPointPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConfigurationEndPointProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConfigurationEndPointProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // address - computed: true, optional: false, required: false
    public get address() {
        return this.getStringAttribute('address');
    }

    // port - computed: true, optional: false, required: false
    public get port() {
        return this.getStringAttribute('port');
    }
}
export interface CloudWatchLogsDestinationDetailsProperty {
    /**
    * The name of the CloudWatch Logs log group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_replication_group#log_group CcReplicationGroup#log_group}
    */
    readonly logGroup?: string;
}
export class CloudWatchLogsDestinationDetailsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CloudWatchLogsDestinationDetailsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: CloudWatchLogsDestinationDetailsProperty | cdktn.IResolvable | undefined) {
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
export interface KinesisFirehoseDestinationDetailsProperty {
    /**
    * The name of the Kinesis Data Firehose delivery stream.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_replication_group#delivery_stream CcReplicationGroup#delivery_stream}
    */
    readonly deliveryStream?: string;
}
export class KinesisFirehoseDestinationDetailsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): KinesisFirehoseDestinationDetailsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._deliveryStream !== undefined) {
            hasAnyValues = true;
            internalValueResult.deliveryStream = this._deliveryStream;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: KinesisFirehoseDestinationDetailsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._deliveryStream = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._deliveryStream = value.deliveryStream;
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
}
export interface DestinationDetailsProperty {
    /**
    * The configuration details of the CloudWatch Logs destination. Note that this field is marked as required but only if CloudWatch Logs was chosen as the destination.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_replication_group#cloudwatch_logs_details CcReplicationGroup#cloudwatch_logs_details}
    */
    readonly cloudwatchLogsDetails?: CloudWatchLogsDestinationDetailsProperty;
    /**
    * The configuration details of the Kinesis Data Firehose destination. Note that this field is marked as required but only if Kinesis Data Firehose was chosen as the destination.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_replication_group#kinesis_firehose_details CcReplicationGroup#kinesis_firehose_details}
    */
    readonly kinesisFirehoseDetails?: KinesisFirehoseDestinationDetailsProperty;
}
export class DestinationDetailsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DestinationDetailsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cloudwatchLogsDetails?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.cloudwatchLogsDetails = this._cloudwatchLogsDetails?.internalValue;
        }
        if (this._kinesisFirehoseDetails?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.kinesisFirehoseDetails = this._kinesisFirehoseDetails?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DestinationDetailsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cloudwatchLogsDetails.internalValue = undefined;
            this._kinesisFirehoseDetails.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cloudwatchLogsDetails.internalValue = value.cloudwatchLogsDetails;
            this._kinesisFirehoseDetails.internalValue = value.kinesisFirehoseDetails;
        }
    }

    // cloudwatch_logs_details - computed: true, optional: true, required: false
    private _cloudwatchLogsDetails = new CloudWatchLogsDestinationDetailsPropertyOutputReference(this, "cloudwatch_logs_details");
    public get cloudwatchLogsDetails() {
        return this._cloudwatchLogsDetails;
    }
    public putCloudwatchLogsDetails(value: CloudWatchLogsDestinationDetailsProperty) {
        this._cloudwatchLogsDetails.internalValue = value;
    }
    public resetCloudwatchLogsDetails() {
        this._cloudwatchLogsDetails.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cloudwatchLogsDetailsInput() {
        return this._cloudwatchLogsDetails.internalValue;
    }

    // kinesis_firehose_details - computed: true, optional: true, required: false
    private _kinesisFirehoseDetails = new KinesisFirehoseDestinationDetailsPropertyOutputReference(this, "kinesis_firehose_details");
    public get kinesisFirehoseDetails() {
        return this._kinesisFirehoseDetails;
    }
    public putKinesisFirehoseDetails(value: KinesisFirehoseDestinationDetailsProperty) {
        this._kinesisFirehoseDetails.internalValue = value;
    }
    public resetKinesisFirehoseDetails() {
        this._kinesisFirehoseDetails.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kinesisFirehoseDetailsInput() {
        return this._kinesisFirehoseDetails.internalValue;
    }
}
export interface LogDeliveryConfigurationRequestProperty {
    /**
    * Configuration details of either a CloudWatch Logs destination or Kinesis Data Firehose destination.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_replication_group#destination_details CcReplicationGroup#destination_details}
    */
    readonly destinationDetails?: DestinationDetailsProperty;
    /**
    * Specify either CloudWatch Logs or Kinesis Data Firehose as the destination type. Valid values are either cloudwatch-logs or kinesis-firehose.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_replication_group#destination_type CcReplicationGroup#destination_type}
    */
    readonly destinationType?: string;
    /**
    * Valid values are either json or text.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_replication_group#log_format CcReplicationGroup#log_format}
    */
    readonly logFormat?: string;
    /**
    * Valid value is either slow-log, which refers to slow-log or engine-log.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_replication_group#log_type CcReplicationGroup#log_type}
    */
    readonly logType?: string;
}
export class LogDeliveryConfigurationRequestPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): LogDeliveryConfigurationRequestProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._destinationDetails?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinationDetails = this._destinationDetails?.internalValue;
        }
        if (this._destinationType !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinationType = this._destinationType;
        }
        if (this._logFormat !== undefined) {
            hasAnyValues = true;
            internalValueResult.logFormat = this._logFormat;
        }
        if (this._logType !== undefined) {
            hasAnyValues = true;
            internalValueResult.logType = this._logType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LogDeliveryConfigurationRequestProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._destinationDetails.internalValue = undefined;
            this._destinationType = undefined;
            this._logFormat = undefined;
            this._logType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._destinationDetails.internalValue = value.destinationDetails;
            this._destinationType = value.destinationType;
            this._logFormat = value.logFormat;
            this._logType = value.logType;
        }
    }

    // destination_details - computed: true, optional: true, required: false
    private _destinationDetails = new DestinationDetailsPropertyOutputReference(this, "destination_details");
    public get destinationDetails() {
        return this._destinationDetails;
    }
    public putDestinationDetails(value: DestinationDetailsProperty) {
        this._destinationDetails.internalValue = value;
    }
    public resetDestinationDetails() {
        this._destinationDetails.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationDetailsInput() {
        return this._destinationDetails.internalValue;
    }

    // destination_type - computed: true, optional: true, required: false
    private _destinationType?: string; 
    public get destinationType() {
        return this.getStringAttribute('destination_type');
    }
    public set destinationType(value: string) {
        this._destinationType = value;
    }
    public resetDestinationType() {
        this._destinationType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationTypeInput() {
        return this._destinationType;
    }

    // log_format - computed: true, optional: true, required: false
    private _logFormat?: string; 
    public get logFormat() {
        return this.getStringAttribute('log_format');
    }
    public set logFormat(value: string) {
        this._logFormat = value;
    }
    public resetLogFormat() {
        this._logFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logFormatInput() {
        return this._logFormat;
    }

    // log_type - computed: true, optional: true, required: false
    private _logType?: string; 
    public get logType() {
        return this.getStringAttribute('log_type');
    }
    public set logType(value: string) {
        this._logType = value;
    }
    public resetLogType() {
        this._logType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logTypeInput() {
        return this._logType;
    }
}

export class LogDeliveryConfigurationRequestPropertyList extends cdktn.ComplexList {
    public internalValue? : LogDeliveryConfigurationRequestProperty[] | cdktn.IResolvable

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
    public get(index: number): LogDeliveryConfigurationRequestPropertyOutputReference {
        return new LogDeliveryConfigurationRequestPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface NodeGroupConfigurationProperty {
    /**
    * Either the ElastiCache for Redis supplied 4-digit id or a user supplied id for the node group these configuration values apply to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_replication_group#node_group_id CcReplicationGroup#node_group_id}
    */
    readonly nodeGroupId?: string;
    /**
    * The Availability Zone where the primary node of this node group (shard) is launched.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_replication_group#primary_availability_zone CcReplicationGroup#primary_availability_zone}
    */
    readonly primaryAvailabilityZone?: string;
    /**
    * A list of Availability Zones to be used for the read replicas. The number of Availability Zones in this list must match the value of ReplicaCount or ReplicasPerNodeGroup if not specified.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_replication_group#replica_availability_zones CcReplicationGroup#replica_availability_zones}
    */
    readonly replicaAvailabilityZones?: string[];
    /**
    * The number of read replica nodes in this node group (shard).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_replication_group#replica_count CcReplicationGroup#replica_count}
    */
    readonly replicaCount?: number;
    /**
    * A string of comma-separated values where the first set of values are the slot numbers (zero based), and the second set of values are the keyspaces for each slot. The following example specifies three slots (numbered 0, 1, and 2): 0,1,2,0-4999,5000-9999,10000-16,383.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_replication_group#slots CcReplicationGroup#slots}
    */
    readonly slots?: string;
}
export class NodeGroupConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): NodeGroupConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._nodeGroupId !== undefined) {
            hasAnyValues = true;
            internalValueResult.nodeGroupId = this._nodeGroupId;
        }
        if (this._primaryAvailabilityZone !== undefined) {
            hasAnyValues = true;
            internalValueResult.primaryAvailabilityZone = this._primaryAvailabilityZone;
        }
        if (this._replicaAvailabilityZones !== undefined) {
            hasAnyValues = true;
            internalValueResult.replicaAvailabilityZones = this._replicaAvailabilityZones;
        }
        if (this._replicaCount !== undefined) {
            hasAnyValues = true;
            internalValueResult.replicaCount = this._replicaCount;
        }
        if (this._slots !== undefined) {
            hasAnyValues = true;
            internalValueResult.slots = this._slots;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NodeGroupConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._nodeGroupId = undefined;
            this._primaryAvailabilityZone = undefined;
            this._replicaAvailabilityZones = undefined;
            this._replicaCount = undefined;
            this._slots = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._nodeGroupId = value.nodeGroupId;
            this._primaryAvailabilityZone = value.primaryAvailabilityZone;
            this._replicaAvailabilityZones = value.replicaAvailabilityZones;
            this._replicaCount = value.replicaCount;
            this._slots = value.slots;
        }
    }

    // node_group_id - computed: true, optional: true, required: false
    private _nodeGroupId?: string; 
    public get nodeGroupId() {
        return this.getStringAttribute('node_group_id');
    }
    public set nodeGroupId(value: string) {
        this._nodeGroupId = value;
    }
    public resetNodeGroupId() {
        this._nodeGroupId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nodeGroupIdInput() {
        return this._nodeGroupId;
    }

    // primary_availability_zone - computed: true, optional: true, required: false
    private _primaryAvailabilityZone?: string; 
    public get primaryAvailabilityZone() {
        return this.getStringAttribute('primary_availability_zone');
    }
    public set primaryAvailabilityZone(value: string) {
        this._primaryAvailabilityZone = value;
    }
    public resetPrimaryAvailabilityZone() {
        this._primaryAvailabilityZone = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get primaryAvailabilityZoneInput() {
        return this._primaryAvailabilityZone;
    }

    // replica_availability_zones - computed: true, optional: true, required: false
    private _replicaAvailabilityZones?: string[]; 
    public get replicaAvailabilityZones() {
        return this.getListAttribute('replica_availability_zones');
    }
    public set replicaAvailabilityZones(value: string[]) {
        this._replicaAvailabilityZones = value;
    }
    public resetReplicaAvailabilityZones() {
        this._replicaAvailabilityZones = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get replicaAvailabilityZonesInput() {
        return this._replicaAvailabilityZones;
    }

    // replica_count - computed: true, optional: true, required: false
    private _replicaCount?: number; 
    public get replicaCount() {
        return this.getNumberAttribute('replica_count');
    }
    public set replicaCount(value: number) {
        this._replicaCount = value;
    }
    public resetReplicaCount() {
        this._replicaCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get replicaCountInput() {
        return this._replicaCount;
    }

    // slots - computed: true, optional: true, required: false
    private _slots?: string; 
    public get slots() {
        return this.getStringAttribute('slots');
    }
    public set slots(value: string) {
        this._slots = value;
    }
    public resetSlots() {
        this._slots = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get slotsInput() {
        return this._slots;
    }
}

export class NodeGroupConfigurationPropertyList extends cdktn.ComplexList {
    public internalValue? : NodeGroupConfigurationProperty[] | cdktn.IResolvable

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
    public get(index: number): NodeGroupConfigurationPropertyOutputReference {
        return new NodeGroupConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface PrimaryEndPointProperty {
}
export class PrimaryEndPointPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PrimaryEndPointProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PrimaryEndPointProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // address - computed: true, optional: false, required: false
    public get address() {
        return this.getStringAttribute('address');
    }

    // port - computed: true, optional: false, required: false
    public get port() {
        return this.getStringAttribute('port');
    }
}
export interface ReadEndPointProperty {
}
export class ReadEndPointPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ReadEndPointProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ReadEndPointProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // addresses - computed: true, optional: false, required: false
    public get addresses() {
        return this.getStringAttribute('addresses');
    }

    // addresses_list - computed: true, optional: false, required: false
    public get addressesList() {
        return this.getListAttribute('addresses_list');
    }

    // ports - computed: true, optional: false, required: false
    public get ports() {
        return this.getStringAttribute('ports');
    }

    // ports_list - computed: true, optional: false, required: false
    public get portsList() {
        return this.getListAttribute('ports_list');
    }
}
export interface ReaderEndPointProperty {
}
export class ReaderEndPointPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ReaderEndPointProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ReaderEndPointProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // address - computed: true, optional: false, required: false
    public get address() {
        return this.getStringAttribute('address');
    }

    // port - computed: true, optional: false, required: false
    public get port() {
        return this.getStringAttribute('port');
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_replication_group#key CcReplicationGroup#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_replication_group#value CcReplicationGroup#value}
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
