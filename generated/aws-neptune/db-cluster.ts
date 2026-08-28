// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/neptune_db_cluster

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcDBClusterProps extends cdktn.TerraformMetaArguments {
    /**
    * Provides a list of the AWS Identity and Access Management (IAM) roles that are associated with the DB cluster. IAM roles that are associated with a DB cluster grant permission for the DB cluster to access other AWS services on your behalf.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/neptune_db_cluster#associated_roles CcDBCluster#associated_roles}
    */
    readonly associatedRoles?: CcDBCluster.DBClusterRoleProperty[] | cdktn.IResolvable;
    /**
    * Provides the list of EC2 Availability Zones that instances in the DB cluster can be created in.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/neptune_db_cluster#availability_zones CcDBCluster#availability_zones}
    */
    readonly availabilityZones?: string[];
    /**
    * Specifies the number of days for which automatic DB snapshots are retained.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/neptune_db_cluster#backup_retention_period CcDBCluster#backup_retention_period}
    */
    readonly backupRetentionPeriod?: number;
    /**
    * A value that indicates whether to copy all tags from the DB cluster to snapshots of the DB cluster. The default behaviour is not to copy them.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/neptune_db_cluster#copy_tags_to_snapshot CcDBCluster#copy_tags_to_snapshot}
    */
    readonly copyTagsToSnapshot?: boolean | cdktn.IResolvable;
    /**
    * The DB cluster identifier. Contains a user-supplied DB cluster identifier. This identifier is the unique key that identifies a DB cluster stored as a lowercase string.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/neptune_db_cluster#db_cluster_identifier CcDBCluster#db_cluster_identifier}
    */
    readonly dbClusterIdentifier?: string;
    /**
    * Provides the name of the DB cluster parameter group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/neptune_db_cluster#db_cluster_parameter_group_name CcDBCluster#db_cluster_parameter_group_name}
    */
    readonly dbClusterParameterGroupName?: string;
    /**
    * The name of the DB parameter group to apply to all instances of the DB cluster. Used only in case of a major EngineVersion upgrade request.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/neptune_db_cluster#db_instance_parameter_group_name CcDBCluster#db_instance_parameter_group_name}
    */
    readonly dbInstanceParameterGroupName?: string;
    /**
    * The port number on which the DB instances in the DB cluster accept connections. 
    * 
    * If not specified, the default port used is `8182`. 
    * 
    * Note: `Port` property will soon be deprecated from this resource. Please update existing templates to rename it with new property `DBPort` having same functionalities.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/neptune_db_cluster#db_port CcDBCluster#db_port}
    */
    readonly dbPort?: number;
    /**
    * Specifies information on the subnet group associated with the DB cluster, including the name, description, and subnets in the subnet group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/neptune_db_cluster#db_subnet_group_name CcDBCluster#db_subnet_group_name}
    */
    readonly dbSubnetGroupName?: string;
    /**
    * Indicates whether or not the DB cluster has deletion protection enabled. The database can't be deleted when deletion protection is enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/neptune_db_cluster#deletion_protection CcDBCluster#deletion_protection}
    */
    readonly deletionProtection?: boolean | cdktn.IResolvable;
    /**
    * Specifies a list of log types that are enabled for export to CloudWatch Logs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/neptune_db_cluster#enable_cloudwatch_logs_exports CcDBCluster#enable_cloudwatch_logs_exports}
    */
    readonly enableCloudwatchLogsExports?: string[];
    /**
    * Indicates the database engine version.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/neptune_db_cluster#engine_version CcDBCluster#engine_version}
    */
    readonly engineVersion?: string;
    /**
    * The ID of the Neptune global database to which this new DB cluster should be added.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/neptune_db_cluster#global_cluster_identifier CcDBCluster#global_cluster_identifier}
    */
    readonly globalClusterIdentifier?: string;
    /**
    * True if mapping of Amazon Identity and Access Management (IAM) accounts to database accounts is enabled, and otherwise false.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/neptune_db_cluster#iam_auth_enabled CcDBCluster#iam_auth_enabled}
    */
    readonly iamAuthEnabled?: boolean | cdktn.IResolvable;
    /**
    * The Amazon Resource Name (ARN) of the AWS KMS key that is used to encrypt the database instances in the DB cluster, such as arn:aws:kms:us-east-1:012345678910:key/abcd1234-a123-456a-a12b-a123b4cd56ef. If you enable the StorageEncrypted property but don't specify this property, the default KMS key is used. If you specify this property, you must set the StorageEncrypted property to true.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/neptune_db_cluster#kms_key_id CcDBCluster#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * The network type of the DB cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/neptune_db_cluster#network_type CcDBCluster#network_type}
    */
    readonly networkType?: string;
    /**
    * Specifies the daily time range during which automated backups are created if automated backups are enabled, as determined by the BackupRetentionPeriod.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/neptune_db_cluster#preferred_backup_window CcDBCluster#preferred_backup_window}
    */
    readonly preferredBackupWindow?: string;
    /**
    * Specifies the weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/neptune_db_cluster#preferred_maintenance_window CcDBCluster#preferred_maintenance_window}
    */
    readonly preferredMaintenanceWindow?: string;
    /**
    * Creates a new DB cluster from a DB snapshot or DB cluster snapshot.
    * 
    * If a DB snapshot is specified, the target DB cluster is created from the source DB snapshot with a default configuration and default security group.
    * 
    * If a DB cluster snapshot is specified, the target DB cluster is created from the source DB cluster restore point with the same configuration as the original source DB cluster, except that the new DB cluster is created with the default security group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/neptune_db_cluster#restore_to_time CcDBCluster#restore_to_time}
    */
    readonly restoreToTime?: string;
    /**
    * Creates a new DB cluster from a DB snapshot or DB cluster snapshot.
    * 
    * If a DB snapshot is specified, the target DB cluster is created from the source DB snapshot with a default configuration and default security group.
    * 
    * If a DB cluster snapshot is specified, the target DB cluster is created from the source DB cluster restore point with the same configuration as the original source DB cluster, except that the new DB cluster is created with the default security group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/neptune_db_cluster#restore_type CcDBCluster#restore_type}
    */
    readonly restoreType?: string;
    /**
    * Contains the scaling configuration used by the Neptune Serverless Instances within this DB cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/neptune_db_cluster#serverless_scaling_configuration CcDBCluster#serverless_scaling_configuration}
    */
    readonly serverlessScalingConfiguration?: CcDBCluster.ServerlessScalingConfigurationProperty;
    /**
    * Specifies the identifier for a DB cluster snapshot. Must match the identifier of an existing snapshot.
    * 
    * After you restore a DB cluster using a SnapshotIdentifier, you must specify the same SnapshotIdentifier for any future updates to the DB cluster. When you specify this property for an update, the DB cluster is not restored from the snapshot again, and the data in the database is not changed.
    * 
    * However, if you don't specify the SnapshotIdentifier, an empty DB cluster is created, and the original DB cluster is deleted. If you specify a property that is different from the previous snapshot restore property, the DB cluster is restored from the snapshot specified by the SnapshotIdentifier, and the original DB cluster is deleted.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/neptune_db_cluster#snapshot_identifier CcDBCluster#snapshot_identifier}
    */
    readonly snapshotIdentifier?: string;
    /**
    * Creates a new DB cluster from a DB snapshot or DB cluster snapshot.
    * 
    * If a DB snapshot is specified, the target DB cluster is created from the source DB snapshot with a default configuration and default security group.
    * 
    * If a DB cluster snapshot is specified, the target DB cluster is created from the source DB cluster restore point with the same configuration as the original source DB cluster, except that the new DB cluster is created with the default security group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/neptune_db_cluster#source_db_cluster_identifier CcDBCluster#source_db_cluster_identifier}
    */
    readonly sourceDbClusterIdentifier?: string;
    /**
    * Indicates whether the DB cluster is encrypted.
    * 
    * If you specify the KmsKeyId property, then you must enable encryption and set this property to true.
    * 
    * If you enable the StorageEncrypted property but don't specify KmsKeyId property, then the default KMS key is used. If you specify KmsKeyId property, then that KMS Key is used to encrypt the database instances in the DB cluster.
    * 
    * If you specify the SourceDBClusterIdentifier property and don't specify this property or disable it. The value is inherited from the source DB cluster, and if the DB cluster is encrypted, the KmsKeyId property from the source cluster is used.
    * 
    * If you specify the DBSnapshotIdentifier and don't specify this property or disable it. The value is inherited from the snapshot, and the specified KmsKeyId property from the snapshot is used.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/neptune_db_cluster#storage_encrypted CcDBCluster#storage_encrypted}
    */
    readonly storageEncrypted?: boolean | cdktn.IResolvable;
    /**
    * The tags assigned to this cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/neptune_db_cluster#tags CcDBCluster#tags}
    */
    readonly tags?: CcDBCluster.TagProperty[] | cdktn.IResolvable;
    /**
    * Creates a new DB cluster from a DB snapshot or DB cluster snapshot.
    * 
    * If a DB snapshot is specified, the target DB cluster is created from the source DB snapshot with a default configuration and default security group.
    * 
    * If a DB cluster snapshot is specified, the target DB cluster is created from the source DB cluster restore point with the same configuration as the original source DB cluster, except that the new DB cluster is created with the default security group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/neptune_db_cluster#use_latest_restorable_time CcDBCluster#use_latest_restorable_time}
    */
    readonly useLatestRestorableTime?: boolean | cdktn.IResolvable;
    /**
    * Provides a list of VPC security groups that the DB cluster belongs to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/neptune_db_cluster#vpc_security_group_ids CcDBCluster#vpc_security_group_ids}
    */
    readonly vpcSecurityGroupIds?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/neptune_db_cluster awscc_neptune_db_cluster}
*/
export class CcDBCluster extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_neptune_db_cluster";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcDBCluster resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcDBCluster to import
    * @param importFromId The id of the existing CcDBCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/neptune_db_cluster#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcDBCluster to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_neptune_db_cluster", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/neptune_db_cluster awscc_neptune_db_cluster} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcDBClusterProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcDBClusterProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_neptune_db_cluster',
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
        this._associatedRoles.internalValue = config.associatedRoles;
        this._availabilityZones = config.availabilityZones;
        this._backupRetentionPeriod = config.backupRetentionPeriod;
        this._copyTagsToSnapshot = config.copyTagsToSnapshot;
        this._dbClusterIdentifier = config.dbClusterIdentifier;
        this._dbClusterParameterGroupName = config.dbClusterParameterGroupName;
        this._dbInstanceParameterGroupName = config.dbInstanceParameterGroupName;
        this._dbPort = config.dbPort;
        this._dbSubnetGroupName = config.dbSubnetGroupName;
        this._deletionProtection = config.deletionProtection;
        this._enableCloudwatchLogsExports = config.enableCloudwatchLogsExports;
        this._engineVersion = config.engineVersion;
        this._globalClusterIdentifier = config.globalClusterIdentifier;
        this._iamAuthEnabled = config.iamAuthEnabled;
        this._kmsKeyId = config.kmsKeyId;
        this._networkType = config.networkType;
        this._preferredBackupWindow = config.preferredBackupWindow;
        this._preferredMaintenanceWindow = config.preferredMaintenanceWindow;
        this._restoreToTime = config.restoreToTime;
        this._restoreType = config.restoreType;
        this._serverlessScalingConfiguration.internalValue = config.serverlessScalingConfiguration;
        this._snapshotIdentifier = config.snapshotIdentifier;
        this._sourceDbClusterIdentifier = config.sourceDbClusterIdentifier;
        this._storageEncrypted = config.storageEncrypted;
        this._tags.internalValue = config.tags;
        this._useLatestRestorableTime = config.useLatestRestorableTime;
        this._vpcSecurityGroupIds = config.vpcSecurityGroupIds;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // associated_roles - computed: true, optional: true, required: false
    private _associatedRoles = new CcDBCluster.DBClusterRolePropertyList(this, "associated_roles", false);
    public get associatedRoles() {
        return this._associatedRoles;
    }
    public putAssociatedRoles(value: CcDBCluster.DBClusterRoleProperty[] | cdktn.IResolvable) {
        this._associatedRoles.internalValue = value;
    }
    public resetAssociatedRoles() {
        this._associatedRoles.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get associatedRolesInput() {
        return this._associatedRoles.internalValue;
    }

    // availability_zones - computed: true, optional: true, required: false
    private _availabilityZones?: string[]; 
    public get availabilityZones() {
        return this.getListAttribute('availability_zones');
    }
    public set availabilityZones(value: string[]) {
        this._availabilityZones = value;
    }
    public resetAvailabilityZones() {
        this._availabilityZones = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get availabilityZonesInput() {
        return this._availabilityZones;
    }

    // backup_retention_period - computed: true, optional: true, required: false
    private _backupRetentionPeriod?: number; 
    public get backupRetentionPeriod() {
        return this.getNumberAttribute('backup_retention_period');
    }
    public set backupRetentionPeriod(value: number) {
        this._backupRetentionPeriod = value;
    }
    public resetBackupRetentionPeriod() {
        this._backupRetentionPeriod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get backupRetentionPeriodInput() {
        return this._backupRetentionPeriod;
    }

    // cluster_resource_id - computed: true, optional: false, required: false
    public get clusterResourceId() {
        return this.getStringAttribute('cluster_resource_id');
    }

    // copy_tags_to_snapshot - computed: true, optional: true, required: false
    private _copyTagsToSnapshot?: boolean | cdktn.IResolvable; 
    public get copyTagsToSnapshot() {
        return this.getBooleanAttribute('copy_tags_to_snapshot');
    }
    public set copyTagsToSnapshot(value: boolean | cdktn.IResolvable) {
        this._copyTagsToSnapshot = value;
    }
    public resetCopyTagsToSnapshot() {
        this._copyTagsToSnapshot = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get copyTagsToSnapshotInput() {
        return this._copyTagsToSnapshot;
    }

    // db_cluster_identifier - computed: true, optional: true, required: false
    private _dbClusterIdentifier?: string; 
    public get dbClusterIdentifier() {
        return this.getStringAttribute('db_cluster_identifier');
    }
    public set dbClusterIdentifier(value: string) {
        this._dbClusterIdentifier = value;
    }
    public resetDbClusterIdentifier() {
        this._dbClusterIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dbClusterIdentifierInput() {
        return this._dbClusterIdentifier;
    }

    // db_cluster_parameter_group_name - computed: true, optional: true, required: false
    private _dbClusterParameterGroupName?: string; 
    public get dbClusterParameterGroupName() {
        return this.getStringAttribute('db_cluster_parameter_group_name');
    }
    public set dbClusterParameterGroupName(value: string) {
        this._dbClusterParameterGroupName = value;
    }
    public resetDbClusterParameterGroupName() {
        this._dbClusterParameterGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dbClusterParameterGroupNameInput() {
        return this._dbClusterParameterGroupName;
    }

    // db_instance_parameter_group_name - computed: true, optional: true, required: false
    private _dbInstanceParameterGroupName?: string; 
    public get dbInstanceParameterGroupName() {
        return this.getStringAttribute('db_instance_parameter_group_name');
    }
    public set dbInstanceParameterGroupName(value: string) {
        this._dbInstanceParameterGroupName = value;
    }
    public resetDbInstanceParameterGroupName() {
        this._dbInstanceParameterGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dbInstanceParameterGroupNameInput() {
        return this._dbInstanceParameterGroupName;
    }

    // db_port - computed: true, optional: true, required: false
    private _dbPort?: number; 
    public get dbPort() {
        return this.getNumberAttribute('db_port');
    }
    public set dbPort(value: number) {
        this._dbPort = value;
    }
    public resetDbPort() {
        this._dbPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dbPortInput() {
        return this._dbPort;
    }

    // db_subnet_group_name - computed: true, optional: true, required: false
    private _dbSubnetGroupName?: string; 
    public get dbSubnetGroupName() {
        return this.getStringAttribute('db_subnet_group_name');
    }
    public set dbSubnetGroupName(value: string) {
        this._dbSubnetGroupName = value;
    }
    public resetDbSubnetGroupName() {
        this._dbSubnetGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dbSubnetGroupNameInput() {
        return this._dbSubnetGroupName;
    }

    // deletion_protection - computed: true, optional: true, required: false
    private _deletionProtection?: boolean | cdktn.IResolvable; 
    public get deletionProtection() {
        return this.getBooleanAttribute('deletion_protection');
    }
    public set deletionProtection(value: boolean | cdktn.IResolvable) {
        this._deletionProtection = value;
    }
    public resetDeletionProtection() {
        this._deletionProtection = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deletionProtectionInput() {
        return this._deletionProtection;
    }

    // enable_cloudwatch_logs_exports - computed: true, optional: true, required: false
    private _enableCloudwatchLogsExports?: string[]; 
    public get enableCloudwatchLogsExports() {
        return this.getListAttribute('enable_cloudwatch_logs_exports');
    }
    public set enableCloudwatchLogsExports(value: string[]) {
        this._enableCloudwatchLogsExports = value;
    }
    public resetEnableCloudwatchLogsExports() {
        this._enableCloudwatchLogsExports = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableCloudwatchLogsExportsInput() {
        return this._enableCloudwatchLogsExports;
    }

    // endpoint - computed: true, optional: false, required: false
    public get endpoint() {
        return this.getStringAttribute('endpoint');
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

    // global_cluster_identifier - computed: true, optional: true, required: false
    private _globalClusterIdentifier?: string; 
    public get globalClusterIdentifier() {
        return this.getStringAttribute('global_cluster_identifier');
    }
    public set globalClusterIdentifier(value: string) {
        this._globalClusterIdentifier = value;
    }
    public resetGlobalClusterIdentifier() {
        this._globalClusterIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get globalClusterIdentifierInput() {
        return this._globalClusterIdentifier;
    }

    // iam_auth_enabled - computed: true, optional: true, required: false
    private _iamAuthEnabled?: boolean | cdktn.IResolvable; 
    public get iamAuthEnabled() {
        return this.getBooleanAttribute('iam_auth_enabled');
    }
    public set iamAuthEnabled(value: boolean | cdktn.IResolvable) {
        this._iamAuthEnabled = value;
    }
    public resetIamAuthEnabled() {
        this._iamAuthEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iamAuthEnabledInput() {
        return this._iamAuthEnabled;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
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

    // port - computed: true, optional: false, required: false
    public get port() {
        return this.getStringAttribute('port');
    }

    // preferred_backup_window - computed: true, optional: true, required: false
    private _preferredBackupWindow?: string; 
    public get preferredBackupWindow() {
        return this.getStringAttribute('preferred_backup_window');
    }
    public set preferredBackupWindow(value: string) {
        this._preferredBackupWindow = value;
    }
    public resetPreferredBackupWindow() {
        this._preferredBackupWindow = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get preferredBackupWindowInput() {
        return this._preferredBackupWindow;
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

    // read_endpoint - computed: true, optional: false, required: false
    public get readEndpoint() {
        return this.getStringAttribute('read_endpoint');
    }

    // restore_to_time - computed: true, optional: true, required: false
    private _restoreToTime?: string; 
    public get restoreToTime() {
        return this.getStringAttribute('restore_to_time');
    }
    public set restoreToTime(value: string) {
        this._restoreToTime = value;
    }
    public resetRestoreToTime() {
        this._restoreToTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get restoreToTimeInput() {
        return this._restoreToTime;
    }

    // restore_type - computed: true, optional: true, required: false
    private _restoreType?: string; 
    public get restoreType() {
        return this.getStringAttribute('restore_type');
    }
    public set restoreType(value: string) {
        this._restoreType = value;
    }
    public resetRestoreType() {
        this._restoreType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get restoreTypeInput() {
        return this._restoreType;
    }

    // serverless_scaling_configuration - computed: true, optional: true, required: false
    private _serverlessScalingConfiguration = new CcDBCluster.ServerlessScalingConfigurationPropertyOutputReference(this, "serverless_scaling_configuration");
    public get serverlessScalingConfiguration() {
        return this._serverlessScalingConfiguration;
    }
    public putServerlessScalingConfiguration(value: CcDBCluster.ServerlessScalingConfigurationProperty) {
        this._serverlessScalingConfiguration.internalValue = value;
    }
    public resetServerlessScalingConfiguration() {
        this._serverlessScalingConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serverlessScalingConfigurationInput() {
        return this._serverlessScalingConfiguration.internalValue;
    }

    // snapshot_identifier - computed: true, optional: true, required: false
    private _snapshotIdentifier?: string; 
    public get snapshotIdentifier() {
        return this.getStringAttribute('snapshot_identifier');
    }
    public set snapshotIdentifier(value: string) {
        this._snapshotIdentifier = value;
    }
    public resetSnapshotIdentifier() {
        this._snapshotIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get snapshotIdentifierInput() {
        return this._snapshotIdentifier;
    }

    // source_db_cluster_identifier - computed: true, optional: true, required: false
    private _sourceDbClusterIdentifier?: string; 
    public get sourceDbClusterIdentifier() {
        return this.getStringAttribute('source_db_cluster_identifier');
    }
    public set sourceDbClusterIdentifier(value: string) {
        this._sourceDbClusterIdentifier = value;
    }
    public resetSourceDbClusterIdentifier() {
        this._sourceDbClusterIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceDbClusterIdentifierInput() {
        return this._sourceDbClusterIdentifier;
    }

    // storage_encrypted - computed: true, optional: true, required: false
    private _storageEncrypted?: boolean | cdktn.IResolvable; 
    public get storageEncrypted() {
        return this.getBooleanAttribute('storage_encrypted');
    }
    public set storageEncrypted(value: boolean | cdktn.IResolvable) {
        this._storageEncrypted = value;
    }
    public resetStorageEncrypted() {
        this._storageEncrypted = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get storageEncryptedInput() {
        return this._storageEncrypted;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcDBCluster.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcDBCluster.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // use_latest_restorable_time - computed: true, optional: true, required: false
    private _useLatestRestorableTime?: boolean | cdktn.IResolvable; 
    public get useLatestRestorableTime() {
        return this.getBooleanAttribute('use_latest_restorable_time');
    }
    public set useLatestRestorableTime(value: boolean | cdktn.IResolvable) {
        this._useLatestRestorableTime = value;
    }
    public resetUseLatestRestorableTime() {
        this._useLatestRestorableTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useLatestRestorableTimeInput() {
        return this._useLatestRestorableTime;
    }

    // vpc_security_group_ids - computed: true, optional: true, required: false
    private _vpcSecurityGroupIds?: string[]; 
    public get vpcSecurityGroupIds() {
        return this.getListAttribute('vpc_security_group_ids');
    }
    public set vpcSecurityGroupIds(value: string[]) {
        this._vpcSecurityGroupIds = value;
    }
    public resetVpcSecurityGroupIds() {
        this._vpcSecurityGroupIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcSecurityGroupIdsInput() {
        return this._vpcSecurityGroupIds;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            associated_roles: cdktn.listMapper(ccDBClusterDBClusterRolePropertyToTerraform, false)(this._associatedRoles.internalValue),
            availability_zones: cdktn.listMapper(cdktn.stringToTerraform, false)(this._availabilityZones),
            backup_retention_period: cdktn.numberToTerraform(this._backupRetentionPeriod),
            copy_tags_to_snapshot: cdktn.booleanToTerraform(this._copyTagsToSnapshot),
            db_cluster_identifier: cdktn.stringToTerraform(this._dbClusterIdentifier),
            db_cluster_parameter_group_name: cdktn.stringToTerraform(this._dbClusterParameterGroupName),
            db_instance_parameter_group_name: cdktn.stringToTerraform(this._dbInstanceParameterGroupName),
            db_port: cdktn.numberToTerraform(this._dbPort),
            db_subnet_group_name: cdktn.stringToTerraform(this._dbSubnetGroupName),
            deletion_protection: cdktn.booleanToTerraform(this._deletionProtection),
            enable_cloudwatch_logs_exports: cdktn.listMapper(cdktn.stringToTerraform, false)(this._enableCloudwatchLogsExports),
            engine_version: cdktn.stringToTerraform(this._engineVersion),
            global_cluster_identifier: cdktn.stringToTerraform(this._globalClusterIdentifier),
            iam_auth_enabled: cdktn.booleanToTerraform(this._iamAuthEnabled),
            kms_key_id: cdktn.stringToTerraform(this._kmsKeyId),
            network_type: cdktn.stringToTerraform(this._networkType),
            preferred_backup_window: cdktn.stringToTerraform(this._preferredBackupWindow),
            preferred_maintenance_window: cdktn.stringToTerraform(this._preferredMaintenanceWindow),
            restore_to_time: cdktn.stringToTerraform(this._restoreToTime),
            restore_type: cdktn.stringToTerraform(this._restoreType),
            serverless_scaling_configuration: ccDBClusterServerlessScalingConfigurationPropertyToTerraform(this._serverlessScalingConfiguration.internalValue),
            snapshot_identifier: cdktn.stringToTerraform(this._snapshotIdentifier),
            source_db_cluster_identifier: cdktn.stringToTerraform(this._sourceDbClusterIdentifier),
            storage_encrypted: cdktn.booleanToTerraform(this._storageEncrypted),
            tags: cdktn.listMapper(ccDBClusterTagPropertyToTerraform, false)(this._tags.internalValue),
            use_latest_restorable_time: cdktn.booleanToTerraform(this._useLatestRestorableTime),
            vpc_security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._vpcSecurityGroupIds),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            associated_roles: {
                value: cdktn.listMapperHcl(ccDBClusterDBClusterRolePropertyToHclTerraform, false)(this._associatedRoles.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcDBCluster.DBClusterRolePropertyList",
            },
            availability_zones: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._availabilityZones),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            backup_retention_period: {
                value: cdktn.numberToHclTerraform(this._backupRetentionPeriod),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            copy_tags_to_snapshot: {
                value: cdktn.booleanToHclTerraform(this._copyTagsToSnapshot),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            db_cluster_identifier: {
                value: cdktn.stringToHclTerraform(this._dbClusterIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            db_cluster_parameter_group_name: {
                value: cdktn.stringToHclTerraform(this._dbClusterParameterGroupName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            db_instance_parameter_group_name: {
                value: cdktn.stringToHclTerraform(this._dbInstanceParameterGroupName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            db_port: {
                value: cdktn.numberToHclTerraform(this._dbPort),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            db_subnet_group_name: {
                value: cdktn.stringToHclTerraform(this._dbSubnetGroupName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            deletion_protection: {
                value: cdktn.booleanToHclTerraform(this._deletionProtection),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            enable_cloudwatch_logs_exports: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._enableCloudwatchLogsExports),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            engine_version: {
                value: cdktn.stringToHclTerraform(this._engineVersion),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            global_cluster_identifier: {
                value: cdktn.stringToHclTerraform(this._globalClusterIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            iam_auth_enabled: {
                value: cdktn.booleanToHclTerraform(this._iamAuthEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            kms_key_id: {
                value: cdktn.stringToHclTerraform(this._kmsKeyId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            network_type: {
                value: cdktn.stringToHclTerraform(this._networkType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            preferred_backup_window: {
                value: cdktn.stringToHclTerraform(this._preferredBackupWindow),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            preferred_maintenance_window: {
                value: cdktn.stringToHclTerraform(this._preferredMaintenanceWindow),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            restore_to_time: {
                value: cdktn.stringToHclTerraform(this._restoreToTime),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            restore_type: {
                value: cdktn.stringToHclTerraform(this._restoreType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            serverless_scaling_configuration: {
                value: ccDBClusterServerlessScalingConfigurationPropertyToHclTerraform(this._serverlessScalingConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDBCluster.ServerlessScalingConfigurationProperty",
            },
            snapshot_identifier: {
                value: cdktn.stringToHclTerraform(this._snapshotIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            source_db_cluster_identifier: {
                value: cdktn.stringToHclTerraform(this._sourceDbClusterIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            storage_encrypted: {
                value: cdktn.booleanToHclTerraform(this._storageEncrypted),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            tags: {
                value: cdktn.listMapperHcl(ccDBClusterTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcDBCluster.TagPropertyList",
            },
            use_latest_restorable_time: {
                value: cdktn.booleanToHclTerraform(this._useLatestRestorableTime),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            vpc_security_group_ids: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._vpcSecurityGroupIds),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccDBClusterDBClusterRolePropertyToTerraform(struct?: CcDBCluster.DBClusterRoleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        feature_name: cdktn.stringToTerraform(struct!.featureName),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
    }
}


export function ccDBClusterDBClusterRolePropertyToHclTerraform(struct?: CcDBCluster.DBClusterRoleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        feature_name: {
            value: cdktn.stringToHclTerraform(struct!.featureName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        role_arn: {
            value: cdktn.stringToHclTerraform(struct!.roleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDBClusterServerlessScalingConfigurationPropertyToTerraform(struct?: CcDBCluster.ServerlessScalingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max_capacity: cdktn.numberToTerraform(struct!.maxCapacity),
        min_capacity: cdktn.numberToTerraform(struct!.minCapacity),
    }
}


export function ccDBClusterServerlessScalingConfigurationPropertyToHclTerraform(struct?: CcDBCluster.ServerlessScalingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max_capacity: {
            value: cdktn.numberToHclTerraform(struct!.maxCapacity),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        min_capacity: {
            value: cdktn.numberToHclTerraform(struct!.minCapacity),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDBClusterTagPropertyToTerraform(struct?: CcDBCluster.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccDBClusterTagPropertyToHclTerraform(struct?: CcDBCluster.TagProperty | cdktn.IResolvable): any {
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


export namespace CcDBCluster {
export interface DBClusterRoleProperty {
    /**
    * The name of the feature associated with the AWS Identity and Access Management (IAM) role. For the list of supported feature names, see DBEngineVersion in the Amazon Neptune API Reference.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/neptune_db_cluster#feature_name CcDBCluster#feature_name}
    */
    readonly featureName?: string;
    /**
    * The Amazon Resource Name (ARN) of the IAM role that is associated with the DB cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/neptune_db_cluster#role_arn CcDBCluster#role_arn}
    */
    readonly roleArn?: string;
}
export class DBClusterRolePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): DBClusterRoleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._featureName !== undefined) {
            hasAnyValues = true;
            internalValueResult.featureName = this._featureName;
        }
        if (this._roleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DBClusterRoleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._featureName = undefined;
            this._roleArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._featureName = value.featureName;
            this._roleArn = value.roleArn;
        }
    }

    // feature_name - computed: true, optional: true, required: false
    private _featureName?: string; 
    public get featureName() {
        return this.getStringAttribute('feature_name');
    }
    public set featureName(value: string) {
        this._featureName = value;
    }
    public resetFeatureName() {
        this._featureName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get featureNameInput() {
        return this._featureName;
    }

    // role_arn - computed: true, optional: true, required: false
    private _roleArn?: string; 
    public get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
        this._roleArn = value;
    }
    public resetRoleArn() {
        this._roleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
        return this._roleArn;
    }
}

export class DBClusterRolePropertyList extends cdktn.ComplexList {
    public internalValue? : DBClusterRoleProperty[] | cdktn.IResolvable

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
    public get(index: number): DBClusterRolePropertyOutputReference {
        return new DBClusterRolePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ServerlessScalingConfigurationProperty {
    /**
    * The maximum number of Neptune capacity units (NCUs) for a DB instance in an Neptune Serverless cluster. You can specify NCU values in half-step increments, such as 40, 40.5, 41, and so on. The smallest value you can use is 2.5, whereas the largest is 128.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/neptune_db_cluster#max_capacity CcDBCluster#max_capacity}
    */
    readonly maxCapacity?: number;
    /**
    * The minimum number of Neptune capacity units (NCUs) for a DB instance in an Neptune Serverless cluster. You can specify NCU values in half-step increments, such as 8, 8.5, 9, and so on. The smallest value you can use is 1, whereas the largest is 128.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/neptune_db_cluster#min_capacity CcDBCluster#min_capacity}
    */
    readonly minCapacity?: number;
}
export class ServerlessScalingConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ServerlessScalingConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._maxCapacity !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxCapacity = this._maxCapacity;
        }
        if (this._minCapacity !== undefined) {
            hasAnyValues = true;
            internalValueResult.minCapacity = this._minCapacity;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ServerlessScalingConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maxCapacity = undefined;
            this._minCapacity = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maxCapacity = value.maxCapacity;
            this._minCapacity = value.minCapacity;
        }
    }

    // max_capacity - computed: true, optional: true, required: false
    private _maxCapacity?: number; 
    public get maxCapacity() {
        return this.getNumberAttribute('max_capacity');
    }
    public set maxCapacity(value: number) {
        this._maxCapacity = value;
    }
    public resetMaxCapacity() {
        this._maxCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxCapacityInput() {
        return this._maxCapacity;
    }

    // min_capacity - computed: true, optional: true, required: false
    private _minCapacity?: number; 
    public get minCapacity() {
        return this.getNumberAttribute('min_capacity');
    }
    public set minCapacity(value: number) {
        this._minCapacity = value;
    }
    public resetMinCapacity() {
        this._minCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minCapacityInput() {
        return this._minCapacity;
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/neptune_db_cluster#key CcDBCluster#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/neptune_db_cluster#value CcDBCluster#value}
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
