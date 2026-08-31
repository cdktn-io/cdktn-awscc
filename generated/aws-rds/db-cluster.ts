// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcDBClusterProps extends cdktn.TerraformMetaArguments {
    /**
    * The amount of storage in gibibytes (GiB) to allocate to each DB instance in the Multi-AZ DB cluster.
    *  Valid for Cluster Type: Multi-AZ DB clusters only
    *  This setting is required to create a Multi-AZ DB cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#allocated_storage CcDBCluster#allocated_storage}
    */
    readonly allocatedStorage?: number;
    /**
    * Provides a list of the AWS Identity and Access Management (IAM) roles that are associated with the DB cluster. IAM roles that are associated with a DB cluster grant permission for the DB cluster to access other Amazon Web Services on your behalf.
    *  Valid for: Aurora DB clusters and Multi-AZ DB clusters
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#associated_roles CcDBCluster#associated_roles}
    */
    readonly associatedRoles?: CcDBCluster.DBClusterRoleProperty[] | cdktn.IResolvable;
    /**
    * Specifies whether minor engine upgrades are applied automatically to the DB cluster during the maintenance window. By default, minor engine upgrades are applied automatically.
    *  Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB cluster.
    *  For more information about automatic minor version upgrades, see [Automatically upgrading the minor engine version](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Upgrading.html#USER_UpgradeDBInstance.Upgrading.AutoMinorVersionUpgrades).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#auto_minor_version_upgrade CcDBCluster#auto_minor_version_upgrade}
    */
    readonly autoMinorVersionUpgrade?: boolean | cdktn.IResolvable;
    /**
    * A list of Availability Zones (AZs) where instances in the DB cluster can be created. For information on AWS Regions and Availability Zones, see [Choosing the Regions and Availability Zones](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.RegionsAndAvailabilityZones.html) in the *Amazon Aurora User Guide*. 
    *  Valid for: Aurora DB clusters only
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#availability_zones CcDBCluster#availability_zones}
    */
    readonly availabilityZones?: string[];
    /**
    * The target backtrack window, in seconds. To disable backtracking, set this value to ``0``.
    *  Valid for Cluster Type: Aurora MySQL DB clusters only
    *  Default: ``0``
    *  Constraints:
    *   +  If specified, this value must be set to a number from 0 to 259,200 (72 hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#backtrack_window CcDBCluster#backtrack_window}
    */
    readonly backtrackWindow?: number;
    /**
    * The number of days for which automated backups are retained.
    *  Default: 1
    *  Constraints:
    *   +  Must be a value from 1 to 35
    *   
    *  Valid for: Aurora DB clusters and Multi-AZ DB clusters
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#backup_retention_period CcDBCluster#backup_retention_period}
    */
    readonly backupRetentionPeriod?: number;
    /**
    * Specifies the scalability mode of the Aurora DB cluster. When set to ``limitless``, the cluster operates as an Aurora Limitless Database, allowing you to create a DB shard group for horizontal scaling (sharding) capabilities. When set to ``standard`` (the default), the cluster uses normal DB instance creation.
    *  *Important:* Automated backup retention isn't supported with Aurora Limitless Database clusters. If you set this property to ``limitless``, you cannot set ``DeleteAutomatedBackups`` to ``false``. To create a backup, use manual snapshots instead.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#cluster_scalability_type CcDBCluster#cluster_scalability_type}
    */
    readonly clusterScalabilityType?: string;
    /**
    * A value that indicates whether to copy all tags from the DB cluster to snapshots of the DB cluster. The default is not to copy them.
    *  Valid for: Aurora DB clusters and Multi-AZ DB clusters
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#copy_tags_to_snapshot CcDBCluster#copy_tags_to_snapshot}
    */
    readonly copyTagsToSnapshot?: boolean | cdktn.IResolvable;
    /**
    * The mode of Database Insights to enable for the DB cluster.
    *  If you set this value to ``advanced``, you must also set the ``PerformanceInsightsEnabled`` parameter to ``true`` and the ``PerformanceInsightsRetentionPeriod`` parameter to 465.
    *  Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#database_insights_mode CcDBCluster#database_insights_mode}
    */
    readonly databaseInsightsMode?: string;
    /**
    * The name of your database. If you don't provide a name, then Amazon RDS won't create a database in this DB cluster. For naming constraints, see [Naming Constraints](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_Limits.html#RDS_Limits.Constraints) in the *Amazon Aurora User Guide*. 
    *  Valid for: Aurora DB clusters and Multi-AZ DB clusters
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#database_name CcDBCluster#database_name}
    */
    readonly databaseName?: string;
    /**
    * The DB cluster identifier. This parameter is stored as a lowercase string.
    *  Constraints:
    *   +  Must contain from 1 to 63 letters, numbers, or hyphens.
    *   +  First character must be a letter.
    *   +  Can't end with a hyphen or contain two consecutive hyphens.
    *   
    *  Example: ``my-cluster1``
    *  Valid for: Aurora DB clusters and Multi-AZ DB clusters
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#db_cluster_identifier CcDBCluster#db_cluster_identifier}
    */
    readonly dbClusterIdentifier?: string;
    /**
    * The compute and memory capacity of each DB instance in the Multi-AZ DB cluster, for example ``db.m6gd.xlarge``. Not all DB instance classes are available in all AWS-Regions, or for all database engines.
    *  For the full list of DB instance classes and availability for your engine, see [DB instance class](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html) in the *Amazon RDS User Guide*.
    *  This setting is required to create a Multi-AZ DB cluster.
    *  Valid for Cluster Type: Multi-AZ DB clusters only
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#db_cluster_instance_class CcDBCluster#db_cluster_instance_class}
    */
    readonly dbClusterInstanceClass?: string;
    /**
    * The name of the DB cluster parameter group to associate with this DB cluster.
    *   If you apply a parameter group to an existing DB cluster, then its DB instances might need to reboot. This can result in an outage while the DB instances are rebooting.
    *  If you apply a change to parameter group associated with a stopped DB cluster, then the update stack waits until the DB cluster is started.
    *   To list all of the available DB cluster parameter group names, use the following command:
    *   ``aws rds describe-db-cluster-parameter-groups --query "DBClusterParameterGroups[].DBClusterParameterGroupName" --output text`` 
    *  Valid for: Aurora DB clusters and Multi-AZ DB clusters
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#db_cluster_parameter_group_name CcDBCluster#db_cluster_parameter_group_name}
    */
    readonly dbClusterParameterGroupName?: string;
    /**
    * The name of the DB parameter group to apply to all instances of the DB cluster.
    *   When you apply a parameter group using the ``DBInstanceParameterGroupName`` parameter, the DB cluster isn't rebooted automatically. Also, parameter changes are applied immediately rather than during the next maintenance window.
    *   Valid for Cluster Type: Aurora DB clusters only
    *  Default: The existing name setting
    *  Constraints:
    *   +  The DB parameter group must be in the same DB parameter group family as this DB cluster.
    *   +  The ``DBInstanceParameterGroupName`` parameter is valid in combination with the ``AllowMajorVersionUpgrade`` parameter for a major version upgrade only.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#db_instance_parameter_group_name CcDBCluster#db_instance_parameter_group_name}
    */
    readonly dbInstanceParameterGroupName?: string;
    /**
    * A DB subnet group that you want to associate with this DB cluster. 
    *  If you are restoring a DB cluster to a point in time with ``RestoreType`` set to ``copy-on-write``, and don't specify a DB subnet group name, then the DB cluster is restored with a default DB subnet group.
    *  Valid for: Aurora DB clusters and Multi-AZ DB clusters
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#db_subnet_group_name CcDBCluster#db_subnet_group_name}
    */
    readonly dbSubnetGroupName?: string;
    /**
    * Reserved for future use.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#db_system_id CcDBCluster#db_system_id}
    */
    readonly dbSystemId?: string;
    /**
    * Specifies whether to remove automated backups immediately after the DB cluster is deleted. This parameter isn't case-sensitive. The default is to remove automated backups immediately after the DB cluster is deleted, unless the AWS Backup policy specifies a point-in-time restore rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#delete_automated_backups CcDBCluster#delete_automated_backups}
    */
    readonly deleteAutomatedBackups?: boolean | cdktn.IResolvable;
    /**
    * A value that indicates whether the DB cluster has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled.
    *  Valid for: Aurora DB clusters and Multi-AZ DB clusters
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#deletion_protection CcDBCluster#deletion_protection}
    */
    readonly deletionProtection?: boolean | cdktn.IResolvable;
    /**
    * Indicates the directory ID of the Active Directory to create the DB cluster.
    *  For Amazon Aurora DB clusters, Amazon RDS can use Kerberos authentication to authenticate users that connect to the DB cluster.
    *  For more information, see [Kerberos authentication](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/kerberos-authentication.html) in the *Amazon Aurora User Guide*.
    *  Valid for: Aurora DB clusters only
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#domain CcDBCluster#domain}
    */
    readonly domain?: string;
    /**
    * Specifies the name of the IAM role to use when making API calls to the Directory Service.
    *  Valid for: Aurora DB clusters only
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#domain_iam_role_name CcDBCluster#domain_iam_role_name}
    */
    readonly domainIamRoleName?: string;
    /**
    * The list of log types that need to be enabled for exporting to CloudWatch Logs. The values in the list depend on the DB engine being used. For more information, see [Publishing Database Logs to Amazon CloudWatch Logs](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch) in the *Amazon Aurora User Guide*.
    *   *Aurora MySQL* 
    *  Valid values: ``audit``, ``error``, ``general``, ``slowquery``
    *   *Aurora PostgreSQL* 
    *  Valid values: ``postgresql``
    *  Valid for: Aurora DB clusters and Multi-AZ DB clusters
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#enable_cloudwatch_logs_exports CcDBCluster#enable_cloudwatch_logs_exports}
    */
    readonly enableCloudwatchLogsExports?: string[];
    /**
    * Specifies whether to enable this DB cluster to forward write operations to the primary cluster of a global cluster (Aurora global database). By default, write operations are not allowed on Aurora DB clusters that are secondary clusters in an Aurora global database.
    *  You can set this value only on Aurora DB clusters that are members of an Aurora global database. With this parameter enabled, a secondary cluster can forward writes to the current primary cluster, and the resulting changes are replicated back to this cluster. For the primary DB cluster of an Aurora global database, this value is used immediately if the primary is demoted by a global cluster API operation, but it does nothing until then.
    *  Valid for Cluster Type: Aurora DB clusters only
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#enable_global_write_forwarding CcDBCluster#enable_global_write_forwarding}
    */
    readonly enableGlobalWriteForwarding?: boolean | cdktn.IResolvable;
    /**
    * Specifies whether to enable the HTTP endpoint for the DB cluster. By default, the HTTP endpoint isn't enabled.
    *  When enabled, the HTTP endpoint provides a connectionless web service API (RDS Data API) for running SQL queries on the DB cluster. You can also query your database from inside the RDS console with the RDS query editor.
    *  For more information, see [Using RDS Data API](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/data-api.html) in the *Amazon Aurora User Guide*.
    *  Valid for Cluster Type: Aurora DB clusters only
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#enable_http_endpoint CcDBCluster#enable_http_endpoint}
    */
    readonly enableHttpEndpoint?: boolean | cdktn.IResolvable;
    /**
    * A value that indicates whether to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts. By default, mapping is disabled.
    *  For more information, see [IAM Database Authentication](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.IAMDBAuth.html) in the *Amazon Aurora User Guide.*
    *  Valid for: Aurora DB clusters only
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#enable_iam_database_authentication CcDBCluster#enable_iam_database_authentication}
    */
    readonly enableIamDatabaseAuthentication?: boolean | cdktn.IResolvable;
    /**
    * Specifies whether read replicas can forward write operations to the writer DB instance in the DB cluster. By default, write operations aren't allowed on reader DB instances.
    *  Valid for: Aurora DB clusters only
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#enable_local_write_forwarding CcDBCluster#enable_local_write_forwarding}
    */
    readonly enableLocalWriteForwarding?: boolean | cdktn.IResolvable;
    /**
    * The name of the database engine to be used for this DB cluster.
    *  Valid Values:
    *   +   ``aurora-mysql`` 
    *   +   ``aurora-postgresql`` 
    *   +   ``mysql`` 
    *   +   ``postgres`` 
    *   
    *  Valid for: Aurora DB clusters and Multi-AZ DB clusters
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#engine CcDBCluster#engine}
    */
    readonly engine?: string;
    /**
    * The lifecycle type for this DB cluster.
    *   By default, this value is set to ``open-source-rds-extended-support``, which enrolls your DB cluster into Amazon RDS Extended Support. At the end of standard support, you can avoid charges for Extended Support by setting the value to ``open-source-rds-extended-support-disabled``. In this case, creating the DB cluster will fail if the DB major version is past its end of standard support date.
    *   You can use this setting to enroll your DB cluster into Amazon RDS Extended Support. With RDS Extended Support, you can run the selected major engine version on your DB cluster past the end of standard support for that engine version. For more information, see the following sections:
    *   +  Amazon Aurora - [Amazon RDS Extended Support with Amazon Aurora](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/extended-support.html) in the *Amazon Aurora User Guide*
    *   +  Amazon RDS - [Amazon RDS Extended Support with Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/extended-support.html) in the *Amazon RDS User Guide*
    *   
    *  Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
    *  Valid Values: ``open-source-rds-extended-support | open-source-rds-extended-support-disabled``
    *  Default: ``open-source-rds-extended-support``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#engine_lifecycle_support CcDBCluster#engine_lifecycle_support}
    */
    readonly engineLifecycleSupport?: string;
    /**
    * The DB engine mode of the DB cluster, either ``provisioned`` or ``serverless``.
    *  The ``serverless`` engine mode only applies for Aurora Serverless v1 DB clusters. Aurora Serverless v2 DB clusters use the ``provisioned`` engine mode.
    *  For information about limitations and requirements for Serverless DB clusters, see the following sections in the *Amazon Aurora User Guide*:
    *   +   [Limitations of Aurora Serverless v1](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html#aurora-serverless.limitations) 
    *   +   [Requirements for Aurora Serverless v2](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2.requirements.html) 
    *   
    *  Valid for Cluster Type: Aurora DB clusters only
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#engine_mode CcDBCluster#engine_mode}
    */
    readonly engineMode?: string;
    /**
    * The version number of the database engine to use.
    *   Don't use this property if your DB cluster is a member of a global database cluster. Instead, specify the ``EngineVersion`` property on the [AWS::RDS::GlobalCluster](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-globalcluster.html) resource. Major version upgrades aren't supported for individual members of a global cluster. Use ``ModifyGlobalCluster`` to upgrade all members of the global cluster.
    *   To list all of the available engine versions for Aurora MySQL version 2 (5.7-compatible) and version 3 (8.0-compatible), use the following command:
    *   ``aws rds describe-db-engine-versions --engine aurora-mysql --query "DBEngineVersions[].EngineVersion"`` 
    *  You can supply either ``5.7`` or ``8.0`` to use the default engine version for Aurora MySQL version 2 or version 3, respectively.
    *  To list all of the available engine versions for Aurora PostgreSQL, use the following command:
    *   ``aws rds describe-db-engine-versions --engine aurora-postgresql --query "DBEngineVersions[].EngineVersion"`` 
    *  To list all of the available engine versions for RDS for MySQL, use the following command:
    *   ``aws rds describe-db-engine-versions --engine mysql --query "DBEngineVersions[].EngineVersion"`` 
    *  To list all of the available engine versions for RDS for PostgreSQL, use the following command:
    *   ``aws rds describe-db-engine-versions --engine postgres --query "DBEngineVersions[].EngineVersion"`` 
    *   *Aurora MySQL* 
    *  For information, see [Database engine updates for Amazon Aurora MySQL](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Updates.html) in the *Amazon Aurora User Guide*.
    *   *Aurora PostgreSQL* 
    *  For information, see [Amazon Aurora PostgreSQL releases and engine versions](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraPostgreSQL.Updates.20180305.html) in the *Amazon Aurora User Guide*.
    *   *MySQL* 
    *  For information, see [Amazon RDS for MySQL](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_MySQL.html#MySQL.Concepts.VersionMgmt) in the *Amazon RDS User Guide*.
    *   *PostgreSQL* 
    *  For information, see [Amazon RDS for PostgreSQL](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_PostgreSQL.html#PostgreSQL.Concepts) in the *Amazon RDS User Guide*.
    *  Valid for: Aurora DB clusters and Multi-AZ DB clusters
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#engine_version CcDBCluster#engine_version}
    */
    readonly engineVersion?: string;
    /**
    * If you are configuring an Aurora global database cluster and want your Aurora DB cluster to be a secondary member in the global database cluster, specify the global cluster ID of the global database cluster. To define the primary database cluster of the global cluster, use the [AWS::RDS::GlobalCluster](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-globalcluster.html) resource. 
    *   If you aren't configuring a global database cluster, don't specify this property. 
    *   To remove the DB cluster from a global database cluster, specify an empty value for the ``GlobalClusterIdentifier`` property.
    *   For information about Aurora global databases, see [Working with Amazon Aurora Global Databases](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database.html) in the *Amazon Aurora User Guide*.
    *  Valid for: Aurora DB clusters only
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#global_cluster_identifier CcDBCluster#global_cluster_identifier}
    */
    readonly globalClusterIdentifier?: string;
    /**
    * The amount of Provisioned IOPS (input/output operations per second) to be initially allocated for each DB instance in the Multi-AZ DB cluster.
    *  For information about valid IOPS values, see [Provisioned IOPS storage](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html#USER_PIOPS) in the *Amazon RDS User Guide*.
    *  This setting is required to create a Multi-AZ DB cluster.
    *  Valid for Cluster Type: Multi-AZ DB clusters only
    *  Constraints:
    *   +  Must be a multiple between .5 and 50 of the storage amount for the DB cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#iops CcDBCluster#iops}
    */
    readonly iops?: number;
    /**
    * The Amazon Resource Name (ARN) of the AWS KMS key that is used to encrypt the database instances in the DB cluster, such as ``arn:aws:kms:us-east-1:012345678910:key/abcd1234-a123-456a-a12b-a123b4cd56ef``. If you enable the ``StorageEncrypted`` property but don't specify this property, the default KMS key is used. If you specify this property, you must set the ``StorageEncrypted`` property to ``true``.
    *  If you specify the ``SnapshotIdentifier`` property, the ``StorageEncrypted`` property value is inherited from the snapshot, and if the DB cluster is encrypted, the specified ``KmsKeyId`` property is used.
    *  If you create a read replica of an encrypted DB cluster in another AWS Region, make sure to set ``KmsKeyId`` to a KMS key identifier that is valid in the destination AWS Region. This KMS key is used to encrypt the read replica in that AWS Region.
    *  Valid for: Aurora DB clusters and Multi-AZ DB clusters
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#kms_key_id CcDBCluster#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Specifies whether to manage the master user password with AWS Secrets Manager.
    *  For more information, see [Password management with Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html) in the *Amazon RDS User Guide* and [Password management with Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/rds-secrets-manager.html) in the *Amazon Aurora User Guide.*
    *  Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
    *  Constraints:
    *   +  Can't manage the master user password with AWS Secrets Manager if ``MasterUserPassword`` is specified.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#manage_master_user_password CcDBCluster#manage_master_user_password}
    */
    readonly manageMasterUserPassword?: boolean | cdktn.IResolvable;
    /**
    * Specifies the authentication type for the master user. With IAM master user authentication, you can configure the master DB user with IAM database authentication when you create a DB cluster.
    *  You can specify one of the following values:
    *   +  ``password`` - Use standard database authentication with a password.
    *   +  ``iam-db-auth`` - Use IAM database authentication for the master user.
    *   
    *  Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
    *  This option is only valid for RDS for MySQL, RDS for MariaDB, RDS for PostgreSQL, Aurora MySQL, and Aurora PostgreSQL engines.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#master_user_authentication_type CcDBCluster#master_user_authentication_type}
    */
    readonly masterUserAuthenticationType?: string;
    /**
    * The master password for the DB instance.
    *   If you specify the ``SourceDBClusterIdentifier``, ``SnapshotIdentifier``, or ``GlobalClusterIdentifier`` property, don't specify this property. The value is inherited from the source DB cluster, the snapshot, or the primary DB cluster for the global database cluster, respectively.
    *   Valid for: Aurora DB clusters and Multi-AZ DB clusters
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#master_user_password CcDBCluster#master_user_password}
    */
    readonly masterUserPassword?: string;
    /**
    * The secret managed by RDS in AWS Secrets Manager for the master user password.
    *   When you restore a DB cluster from a snapshot, Amazon RDS generates a new secret instead of reusing the secret specified in the ``SecretArn`` property. This ensures that the restored DB cluster is securely managed with a dedicated secret. To maintain consistent integration with your application, you might need to update resource configurations to reference the newly created secret.
    *   For more information, see [Password management with Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html) in the *Amazon RDS User Guide* and [Password management with Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/rds-secrets-manager.html) in the *Amazon Aurora User Guide.*
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#master_user_secret CcDBCluster#master_user_secret}
    */
    readonly masterUserSecret?: CcDBCluster.MasterUserSecretProperty;
    /**
    * The name of the master user for the DB cluster.
    *   If you specify the ``SourceDBClusterIdentifier``, ``SnapshotIdentifier``, or ``GlobalClusterIdentifier`` property, don't specify this property. The value is inherited from the source DB cluster, the snapshot, or the primary DB cluster for the global database cluster, respectively.
    *   Valid for: Aurora DB clusters and Multi-AZ DB clusters
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#master_username CcDBCluster#master_username}
    */
    readonly masterUsername?: string;
    /**
    * The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB cluster. To turn off collecting Enhanced Monitoring metrics, specify ``0``.
    *  If ``MonitoringRoleArn`` is specified, also set ``MonitoringInterval`` to a value other than ``0``.
    *  Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
    *  Valid Values: ``0 | 1 | 5 | 10 | 15 | 30 | 60``
    *  Default: ``0``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#monitoring_interval CcDBCluster#monitoring_interval}
    */
    readonly monitoringInterval?: number;
    /**
    * The Amazon Resource Name (ARN) for the IAM role that permits RDS to send Enhanced Monitoring metrics to Amazon CloudWatch Logs. An example is ``arn:aws:iam:123456789012:role/emaccess``. For information on creating a monitoring role, see [Setting up and enabling Enhanced Monitoring](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.OS.html#USER_Monitoring.OS.Enabling) in the *Amazon RDS User Guide*.
    *  If ``MonitoringInterval`` is set to a value other than ``0``, supply a ``MonitoringRoleArn`` value.
    *  Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#monitoring_role_arn CcDBCluster#monitoring_role_arn}
    */
    readonly monitoringRoleArn?: string;
    /**
    * The network type of the DB cluster.
    *  Valid values:
    *   +   ``IPV4`` 
    *   +   ``DUAL`` 
    *   
    *  The network type is determined by the ``DBSubnetGroup`` specified for the DB cluster. A ``DBSubnetGroup`` can support only the IPv4 protocol or the IPv4 and IPv6 protocols (``DUAL``).
    *  For more information, see [Working with a DB instance in a VPC](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_VPC.WorkingWithRDSInstanceinaVPC.html) in the *Amazon Aurora User Guide.*
    *  Valid for: Aurora DB clusters only
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#network_type CcDBCluster#network_type}
    */
    readonly networkType?: string;
    /**
    * Specifies whether to turn on Performance Insights for the DB cluster.
    *  For more information, see [Using Amazon Performance Insights](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html) in the *Amazon RDS User Guide*.
    *  Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#performance_insights_enabled CcDBCluster#performance_insights_enabled}
    */
    readonly performanceInsightsEnabled?: boolean | cdktn.IResolvable;
    /**
    * The AWS KMS key identifier for encryption of Performance Insights data.
    *  The AWS KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.
    *  If you don't specify a value for ``PerformanceInsightsKMSKeyId``, then Amazon RDS uses your default KMS key. There is a default KMS key for your AWS-account. Your AWS-account has a different default KMS key for each AWS-Region.
    *  Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#performance_insights_kms_key_id CcDBCluster#performance_insights_kms_key_id}
    */
    readonly performanceInsightsKmsKeyId?: string;
    /**
    * The number of days to retain Performance Insights data. When creating a DB cluster without enabling Performance Insights, you can't specify the parameter ``PerformanceInsightsRetentionPeriod``.
    *  Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
    *  Valid Values:
    *   +   ``7`` 
    *   +  *month* * 31, where *month* is a number of months from 1-23. Examples: ``93`` (3 months * 31), ``341`` (11 months * 31), ``589`` (19 months * 31)
    *   +   ``731`` 
    *   
    *  Default: ``7`` days
    *  If you specify a retention period that isn't valid, such as ``94``, Amazon RDS issues an error.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#performance_insights_retention_period CcDBCluster#performance_insights_retention_period}
    */
    readonly performanceInsightsRetentionPeriod?: number;
    /**
    * The port number on which the DB instances in the DB cluster accept connections.
    *  Default:
    *   +  RDS for MySQL and Aurora MySQL - ``3306``
    *   +  RDS for PostgreSQL and Aurora PostgreSQL - ``5432``
    *   
    *   The ``No interruption`` on update behavior only applies to DB clusters. If you are updating a DB instance, see [Port](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-database-instance.html#cfn-rds-dbinstance-port) for the AWS::RDS::DBInstance resource.
    *   Valid for: Aurora DB clusters and Multi-AZ DB clusters
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#port CcDBCluster#port}
    */
    readonly port?: number;
    /**
    * The daily time range during which automated backups are created. For more information, see [Backup Window](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Backups.html#Aurora.Managing.Backups.BackupWindow) in the *Amazon Aurora User Guide.*
    *  Constraints:
    *   +  Must be in the format ``hh24:mi-hh24:mi``.
    *   +  Must be in Universal Coordinated Time (UTC).
    *   +  Must not conflict with the preferred maintenance window.
    *   +  Must be at least 30 minutes.
    *   
    *  Valid for: Aurora DB clusters and Multi-AZ DB clusters
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#preferred_backup_window CcDBCluster#preferred_backup_window}
    */
    readonly preferredBackupWindow?: string;
    /**
    * The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).
    *  Format: ``ddd:hh24:mi-ddd:hh24:mi``
    *  The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region, occurring on a random day of the week. To see the time blocks available, see [Maintaining an Amazon Aurora DB cluster](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_UpgradeDBInstance.Maintenance.html#AdjustingTheMaintenanceWindow.Aurora) in the *Amazon Aurora User Guide.*
    *  Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.
    *  Constraints: Minimum 30-minute window.
    *  Valid for: Aurora DB clusters and Multi-AZ DB clusters
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#preferred_maintenance_window CcDBCluster#preferred_maintenance_window}
    */
    readonly preferredMaintenanceWindow?: string;
    /**
    * Specifies whether the DB cluster is publicly accessible.
    *  Valid for Cluster Type: Multi-AZ DB clusters only
    *  When the DB cluster is publicly accessible and you connect from outside of the DB cluster's virtual private cloud (VPC), its domain name system (DNS) endpoint resolves to the public IP address. When you connect from within the same VPC as the DB cluster, the endpoint resolves to the private IP address. Access to the DB cluster is controlled by its security group settings.
    *  When the DB cluster isn't publicly accessible, it is an internal DB cluster with a DNS name that resolves to a private IP address.
    *  The default behavior when ``PubliclyAccessible`` is not specified depends on whether a ``DBSubnetGroup`` is specified.
    *  If ``DBSubnetGroup`` isn't specified, ``PubliclyAccessible`` defaults to ``true``.
    *  If ``DBSubnetGroup`` is specified, ``PubliclyAccessible`` defaults to ``false`` unless the value of ``DBSubnetGroup`` is ``default``, in which case ``PubliclyAccessible`` defaults to ``true``.
    *  If ``PubliclyAccessible`` is true and the VPC that the ``DBSubnetGroup`` is in doesn't have an internet gateway attached to it, Amazon RDS returns an error.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#publicly_accessible CcDBCluster#publicly_accessible}
    */
    readonly publiclyAccessible?: boolean | cdktn.IResolvable;
    /**
    * The Amazon Resource Name (ARN) of the source DB instance or DB cluster if this DB cluster is created as a read replica.
    *  Valid for: Aurora DB clusters only
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#replication_source_identifier CcDBCluster#replication_source_identifier}
    */
    readonly replicationSourceIdentifier?: string;
    /**
    * The date and time to restore the DB cluster to.
    *  Valid Values: Value must be a time in Universal Coordinated Time (UTC) format
    *  Constraints:
    *   +  Must be before the latest restorable time for the DB instance
    *   +  Must be specified if ``UseLatestRestorableTime`` parameter isn't provided
    *   +  Can't be specified if the ``UseLatestRestorableTime`` parameter is enabled
    *   +  Can't be specified if the ``RestoreType`` parameter is ``copy-on-write``
    *   
    *  This property must be used with ``SourceDBClusterIdentifier`` property. The resulting cluster will have the identifier that matches the value of the ``DBclusterIdentifier`` property.
    *  Example: ``2015-03-07T23:45:00Z``
    *  Valid for: Aurora DB clusters and Multi-AZ DB clusters
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#restore_to_time CcDBCluster#restore_to_time}
    */
    readonly restoreToTime?: string;
    /**
    * The type of restore to be performed. You can specify one of the following values:
    *   +  ``full-copy`` - The new DB cluster is restored as a full copy of the source DB cluster.
    *   +  ``copy-on-write`` - The new DB cluster is restored as a clone of the source DB cluster.
    *   
    *  If you don't specify a ``RestoreType`` value, then the new DB cluster is restored as a full copy of the source DB cluster.
    *  Valid for: Aurora DB clusters and Multi-AZ DB clusters
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#restore_type CcDBCluster#restore_type}
    */
    readonly restoreType?: string;
    /**
    * The scaling configuration of an Aurora Serverless v1 DB cluster.
    *  This property is only supported for Aurora Serverless v1. For Aurora Serverless v2, Use the ``ServerlessV2ScalingConfiguration`` property.
    *  Valid for: Aurora Serverless v1 DB clusters only
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#scaling_configuration CcDBCluster#scaling_configuration}
    */
    readonly scalingConfiguration?: CcDBCluster.ScalingConfigurationProperty;
    /**
    * The scaling configuration of an Aurora Serverless V2 DB cluster. 
    *  This property is only supported for Aurora Serverless v2. For Aurora Serverless v1, Use the ``ScalingConfiguration`` property.
    *  Valid for: Aurora Serverless v2 DB clusters only
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#serverless_v2_scaling_configuration CcDBCluster#serverless_v2_scaling_configuration}
    */
    readonly serverlessV2ScalingConfiguration?: CcDBCluster.ServerlessV2ScalingConfigurationProperty;
    /**
    * The identifier for the DB snapshot or DB cluster snapshot to restore from.
    *  You can use either the name or the Amazon Resource Name (ARN) to specify a DB cluster snapshot. However, you can use only the ARN to specify a DB snapshot.
    *  After you restore a DB cluster with a ``SnapshotIdentifier`` property, you must specify the same ``SnapshotIdentifier`` property for any future updates to the DB cluster. When you specify this property for an update, the DB cluster is not restored from the snapshot again, and the data in the database is not changed. However, if you don't specify the ``SnapshotIdentifier`` property, an empty DB cluster is created, and the original DB cluster is deleted. If you specify a property that is different from the previous snapshot restore property, a new DB cluster is restored from the specified ``SnapshotIdentifier`` property, and the original DB cluster is deleted.
    *  If you specify the ``SnapshotIdentifier`` property to restore a DB cluster (as opposed to specifying it for DB cluster updates), then don't specify the following properties:
    *   +   ``GlobalClusterIdentifier`` 
    *   +   ``MasterUsername`` 
    *   +   ``MasterUserPassword`` 
    *   +   ``ReplicationSourceIdentifier`` 
    *   +   ``RestoreType`` 
    *   +   ``SourceDBClusterIdentifier`` 
    *   +   ``SourceRegion`` 
    *   +  ``StorageEncrypted`` (for an encrypted snapshot)
    *   +   ``UseLatestRestorableTime`` 
    *   
    *  Constraints:
    *   +  Must match the identifier of an existing Snapshot.
    *   
    *  Valid for: Aurora DB clusters and Multi-AZ DB clusters
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#snapshot_identifier CcDBCluster#snapshot_identifier}
    */
    readonly snapshotIdentifier?: string;
    /**
    * When restoring a DB cluster to a point in time, the identifier of the source DB cluster from which to restore.
    *  Constraints:
    *   +  Must match the identifier of an existing DBCluster.
    *   +  Cannot be specified if ``SourceDbClusterResourceId`` is specified. You must specify either ``SourceDBClusterIdentifier`` or ``SourceDbClusterResourceId``, but not both.
    *   
    *  Valid for: Aurora DB clusters and Multi-AZ DB clusters
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#source_db_cluster_identifier CcDBCluster#source_db_cluster_identifier}
    */
    readonly sourceDbClusterIdentifier?: string;
    /**
    * The resource ID of the source DB cluster from which to restore.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#source_db_cluster_resource_id CcDBCluster#source_db_cluster_resource_id}
    */
    readonly sourceDbClusterResourceId?: string;
    /**
    * The AWS Region which contains the source DB cluster when replicating a DB cluster. For example, ``us-east-1``. 
    *  Valid for: Aurora DB clusters only
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#source_region CcDBCluster#source_region}
    */
    readonly sourceRegion?: string;
    /**
    * Indicates whether the DB cluster is encrypted.
    *  If you specify the ``KmsKeyId`` property, then you must enable encryption.
    *  If you specify the ``SourceDBClusterIdentifier`` property, don't specify this property. The value is inherited from the source DB cluster, and if the DB cluster is encrypted, the specified ``KmsKeyId`` property is used.
    *  If you specify the ``SnapshotIdentifier`` and the specified snapshot is encrypted, don't specify this property. The value is inherited from the snapshot, and the specified ``KmsKeyId`` property is used.
    *  If you specify the ``SnapshotIdentifier`` and the specified snapshot isn't encrypted, you can use this property to specify that the restored DB cluster is encrypted. Specify the ``KmsKeyId`` property for the KMS key to use for encryption. If you don't want the restored DB cluster to be encrypted, then don't set this property or set it to ``false``.
    *   If you specify both the ``StorageEncrypted`` and ``SnapshotIdentifier`` properties without specifying the ``KmsKeyId`` property, then the restored DB cluster inherits the encryption settings from the DB snapshot that provide.
    *   Valid for: Aurora DB clusters and Multi-AZ DB clusters
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#storage_encrypted CcDBCluster#storage_encrypted}
    */
    readonly storageEncrypted?: boolean | cdktn.IResolvable;
    /**
    * The storage type to associate with the DB cluster.
    *  For information on storage types for Aurora DB clusters, see [Storage configurations for Amazon Aurora DB clusters](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Overview.StorageReliability.html#aurora-storage-type). For information on storage types for Multi-AZ DB clusters, see [Settings for creating Multi-AZ DB clusters](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/create-multi-az-db-cluster.html#create-multi-az-db-cluster-settings).
    *  This setting is required to create a Multi-AZ DB cluster.
    *  When specified for a Multi-AZ DB cluster, a value for the ``Iops`` parameter is required.
    *  Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
    *  Valid Values:
    *   +  Aurora DB clusters - ``aurora | aurora-iopt1``
    *   +  Multi-AZ DB clusters - ``io1 | io2 | gp3``
    *   
    *  Default:
    *   +  Aurora DB clusters - ``aurora``
    *   +  Multi-AZ DB clusters - ``io1``
    *   
    *   When you create an Aurora DB cluster with the storage type set to ``aurora-iopt1``, the storage type is returned in the response. The storage type isn't returned when you set it to ``aurora``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#storage_type CcDBCluster#storage_type}
    */
    readonly storageType?: string;
    /**
    * Tags to assign to the DB cluster.
    *  Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#tags CcDBCluster#tags}
    */
    readonly tags?: CcDBCluster.TagProperty[] | cdktn.IResolvable;
    /**
    * A value that indicates whether to restore the DB cluster to the latest restorable backup time. By default, the DB cluster is not restored to the latest restorable backup time. 
    *  Valid for: Aurora DB clusters and Multi-AZ DB clusters
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#use_latest_restorable_time CcDBCluster#use_latest_restorable_time}
    */
    readonly useLatestRestorableTime?: boolean | cdktn.IResolvable;
    /**
    * A list of EC2 VPC security groups to associate with this DB cluster.
    *  If you plan to update the resource, don't specify VPC security groups in a shared VPC.
    *  Valid for: Aurora DB clusters and Multi-AZ DB clusters
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#vpc_security_group_ids CcDBCluster#vpc_security_group_ids}
    */
    readonly vpcSecurityGroupIds?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster awscc_rds_db_cluster}
*/
export class CcDBCluster extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_rds_db_cluster";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcDBCluster resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcDBCluster to import
    * @param importFromId The id of the existing CcDBCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcDBCluster to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_rds_db_cluster", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster awscc_rds_db_cluster} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcDBClusterProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcDBClusterProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_rds_db_cluster',
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
        this._allocatedStorage = config.allocatedStorage;
        this._associatedRoles.internalValue = config.associatedRoles;
        this._autoMinorVersionUpgrade = config.autoMinorVersionUpgrade;
        this._availabilityZones = config.availabilityZones;
        this._backtrackWindow = config.backtrackWindow;
        this._backupRetentionPeriod = config.backupRetentionPeriod;
        this._clusterScalabilityType = config.clusterScalabilityType;
        this._copyTagsToSnapshot = config.copyTagsToSnapshot;
        this._databaseInsightsMode = config.databaseInsightsMode;
        this._databaseName = config.databaseName;
        this._dbClusterIdentifier = config.dbClusterIdentifier;
        this._dbClusterInstanceClass = config.dbClusterInstanceClass;
        this._dbClusterParameterGroupName = config.dbClusterParameterGroupName;
        this._dbInstanceParameterGroupName = config.dbInstanceParameterGroupName;
        this._dbSubnetGroupName = config.dbSubnetGroupName;
        this._dbSystemId = config.dbSystemId;
        this._deleteAutomatedBackups = config.deleteAutomatedBackups;
        this._deletionProtection = config.deletionProtection;
        this._domain = config.domain;
        this._domainIamRoleName = config.domainIamRoleName;
        this._enableCloudwatchLogsExports = config.enableCloudwatchLogsExports;
        this._enableGlobalWriteForwarding = config.enableGlobalWriteForwarding;
        this._enableHttpEndpoint = config.enableHttpEndpoint;
        this._enableIamDatabaseAuthentication = config.enableIamDatabaseAuthentication;
        this._enableLocalWriteForwarding = config.enableLocalWriteForwarding;
        this._engine = config.engine;
        this._engineLifecycleSupport = config.engineLifecycleSupport;
        this._engineMode = config.engineMode;
        this._engineVersion = config.engineVersion;
        this._globalClusterIdentifier = config.globalClusterIdentifier;
        this._iops = config.iops;
        this._kmsKeyId = config.kmsKeyId;
        this._manageMasterUserPassword = config.manageMasterUserPassword;
        this._masterUserAuthenticationType = config.masterUserAuthenticationType;
        this._masterUserPassword = config.masterUserPassword;
        this._masterUserSecret.internalValue = config.masterUserSecret;
        this._masterUsername = config.masterUsername;
        this._monitoringInterval = config.monitoringInterval;
        this._monitoringRoleArn = config.monitoringRoleArn;
        this._networkType = config.networkType;
        this._performanceInsightsEnabled = config.performanceInsightsEnabled;
        this._performanceInsightsKmsKeyId = config.performanceInsightsKmsKeyId;
        this._performanceInsightsRetentionPeriod = config.performanceInsightsRetentionPeriod;
        this._port = config.port;
        this._preferredBackupWindow = config.preferredBackupWindow;
        this._preferredMaintenanceWindow = config.preferredMaintenanceWindow;
        this._publiclyAccessible = config.publiclyAccessible;
        this._replicationSourceIdentifier = config.replicationSourceIdentifier;
        this._restoreToTime = config.restoreToTime;
        this._restoreType = config.restoreType;
        this._scalingConfiguration.internalValue = config.scalingConfiguration;
        this._serverlessV2ScalingConfiguration.internalValue = config.serverlessV2ScalingConfiguration;
        this._snapshotIdentifier = config.snapshotIdentifier;
        this._sourceDbClusterIdentifier = config.sourceDbClusterIdentifier;
        this._sourceDbClusterResourceId = config.sourceDbClusterResourceId;
        this._sourceRegion = config.sourceRegion;
        this._storageEncrypted = config.storageEncrypted;
        this._storageType = config.storageType;
        this._tags.internalValue = config.tags;
        this._useLatestRestorableTime = config.useLatestRestorableTime;
        this._vpcSecurityGroupIds = config.vpcSecurityGroupIds;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // allocated_storage - computed: true, optional: true, required: false
    private _allocatedStorage?: number; 
    public get allocatedStorage() {
        return this.getNumberAttribute('allocated_storage');
    }
    public set allocatedStorage(value: number) {
        this._allocatedStorage = value;
    }
    public resetAllocatedStorage() {
        this._allocatedStorage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allocatedStorageInput() {
        return this._allocatedStorage;
    }

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

    // backtrack_window - computed: true, optional: true, required: false
    private _backtrackWindow?: number; 
    public get backtrackWindow() {
        return this.getNumberAttribute('backtrack_window');
    }
    public set backtrackWindow(value: number) {
        this._backtrackWindow = value;
    }
    public resetBacktrackWindow() {
        this._backtrackWindow = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get backtrackWindowInput() {
        return this._backtrackWindow;
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

    // cluster_scalability_type - computed: true, optional: true, required: false
    private _clusterScalabilityType?: string; 
    public get clusterScalabilityType() {
        return this.getStringAttribute('cluster_scalability_type');
    }
    public set clusterScalabilityType(value: string) {
        this._clusterScalabilityType = value;
    }
    public resetClusterScalabilityType() {
        this._clusterScalabilityType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterScalabilityTypeInput() {
        return this._clusterScalabilityType;
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

    // database_insights_mode - computed: true, optional: true, required: false
    private _databaseInsightsMode?: string; 
    public get databaseInsightsMode() {
        return this.getStringAttribute('database_insights_mode');
    }
    public set databaseInsightsMode(value: string) {
        this._databaseInsightsMode = value;
    }
    public resetDatabaseInsightsMode() {
        this._databaseInsightsMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseInsightsModeInput() {
        return this._databaseInsightsMode;
    }

    // database_name - computed: true, optional: true, required: false
    private _databaseName?: string; 
    public get databaseName() {
        return this.getStringAttribute('database_name');
    }
    public set databaseName(value: string) {
        this._databaseName = value;
    }
    public resetDatabaseName() {
        this._databaseName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseNameInput() {
        return this._databaseName;
    }

    // db_cluster_arn - computed: true, optional: false, required: false
    public get dbClusterArn() {
        return this.getStringAttribute('db_cluster_arn');
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

    // db_cluster_instance_class - computed: true, optional: true, required: false
    private _dbClusterInstanceClass?: string; 
    public get dbClusterInstanceClass() {
        return this.getStringAttribute('db_cluster_instance_class');
    }
    public set dbClusterInstanceClass(value: string) {
        this._dbClusterInstanceClass = value;
    }
    public resetDbClusterInstanceClass() {
        this._dbClusterInstanceClass = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dbClusterInstanceClassInput() {
        return this._dbClusterInstanceClass;
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

    // db_cluster_resource_id - computed: true, optional: false, required: false
    public get dbClusterResourceId() {
        return this.getStringAttribute('db_cluster_resource_id');
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

    // db_system_id - computed: true, optional: true, required: false
    private _dbSystemId?: string; 
    public get dbSystemId() {
        return this.getStringAttribute('db_system_id');
    }
    public set dbSystemId(value: string) {
        this._dbSystemId = value;
    }
    public resetDbSystemId() {
        this._dbSystemId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dbSystemIdInput() {
        return this._dbSystemId;
    }

    // delete_automated_backups - computed: true, optional: true, required: false
    private _deleteAutomatedBackups?: boolean | cdktn.IResolvable; 
    public get deleteAutomatedBackups() {
        return this.getBooleanAttribute('delete_automated_backups');
    }
    public set deleteAutomatedBackups(value: boolean | cdktn.IResolvable) {
        this._deleteAutomatedBackups = value;
    }
    public resetDeleteAutomatedBackups() {
        this._deleteAutomatedBackups = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deleteAutomatedBackupsInput() {
        return this._deleteAutomatedBackups;
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

    // domain - computed: true, optional: true, required: false
    private _domain?: string; 
    public get domain() {
        return this.getStringAttribute('domain');
    }
    public set domain(value: string) {
        this._domain = value;
    }
    public resetDomain() {
        this._domain = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get domainInput() {
        return this._domain;
    }

    // domain_iam_role_name - computed: true, optional: true, required: false
    private _domainIamRoleName?: string; 
    public get domainIamRoleName() {
        return this.getStringAttribute('domain_iam_role_name');
    }
    public set domainIamRoleName(value: string) {
        this._domainIamRoleName = value;
    }
    public resetDomainIamRoleName() {
        this._domainIamRoleName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get domainIamRoleNameInput() {
        return this._domainIamRoleName;
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

    // enable_global_write_forwarding - computed: true, optional: true, required: false
    private _enableGlobalWriteForwarding?: boolean | cdktn.IResolvable; 
    public get enableGlobalWriteForwarding() {
        return this.getBooleanAttribute('enable_global_write_forwarding');
    }
    public set enableGlobalWriteForwarding(value: boolean | cdktn.IResolvable) {
        this._enableGlobalWriteForwarding = value;
    }
    public resetEnableGlobalWriteForwarding() {
        this._enableGlobalWriteForwarding = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableGlobalWriteForwardingInput() {
        return this._enableGlobalWriteForwarding;
    }

    // enable_http_endpoint - computed: true, optional: true, required: false
    private _enableHttpEndpoint?: boolean | cdktn.IResolvable; 
    public get enableHttpEndpoint() {
        return this.getBooleanAttribute('enable_http_endpoint');
    }
    public set enableHttpEndpoint(value: boolean | cdktn.IResolvable) {
        this._enableHttpEndpoint = value;
    }
    public resetEnableHttpEndpoint() {
        this._enableHttpEndpoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableHttpEndpointInput() {
        return this._enableHttpEndpoint;
    }

    // enable_iam_database_authentication - computed: true, optional: true, required: false
    private _enableIamDatabaseAuthentication?: boolean | cdktn.IResolvable; 
    public get enableIamDatabaseAuthentication() {
        return this.getBooleanAttribute('enable_iam_database_authentication');
    }
    public set enableIamDatabaseAuthentication(value: boolean | cdktn.IResolvable) {
        this._enableIamDatabaseAuthentication = value;
    }
    public resetEnableIamDatabaseAuthentication() {
        this._enableIamDatabaseAuthentication = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableIamDatabaseAuthenticationInput() {
        return this._enableIamDatabaseAuthentication;
    }

    // enable_local_write_forwarding - computed: true, optional: true, required: false
    private _enableLocalWriteForwarding?: boolean | cdktn.IResolvable; 
    public get enableLocalWriteForwarding() {
        return this.getBooleanAttribute('enable_local_write_forwarding');
    }
    public set enableLocalWriteForwarding(value: boolean | cdktn.IResolvable) {
        this._enableLocalWriteForwarding = value;
    }
    public resetEnableLocalWriteForwarding() {
        this._enableLocalWriteForwarding = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableLocalWriteForwardingInput() {
        return this._enableLocalWriteForwarding;
    }

    // endpoint - computed: true, optional: false, required: false
    private _endpoint = new CcDBCluster.EndpointPropertyOutputReference(this, "endpoint");
    public get endpoint() {
        return this._endpoint;
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

    // engine_lifecycle_support - computed: true, optional: true, required: false
    private _engineLifecycleSupport?: string; 
    public get engineLifecycleSupport() {
        return this.getStringAttribute('engine_lifecycle_support');
    }
    public set engineLifecycleSupport(value: string) {
        this._engineLifecycleSupport = value;
    }
    public resetEngineLifecycleSupport() {
        this._engineLifecycleSupport = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get engineLifecycleSupportInput() {
        return this._engineLifecycleSupport;
    }

    // engine_mode - computed: true, optional: true, required: false
    private _engineMode?: string; 
    public get engineMode() {
        return this.getStringAttribute('engine_mode');
    }
    public set engineMode(value: string) {
        this._engineMode = value;
    }
    public resetEngineMode() {
        this._engineMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get engineModeInput() {
        return this._engineMode;
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

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // iops - computed: true, optional: true, required: false
    private _iops?: number; 
    public get iops() {
        return this.getNumberAttribute('iops');
    }
    public set iops(value: number) {
        this._iops = value;
    }
    public resetIops() {
        this._iops = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iopsInput() {
        return this._iops;
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

    // manage_master_user_password - computed: true, optional: true, required: false
    private _manageMasterUserPassword?: boolean | cdktn.IResolvable; 
    public get manageMasterUserPassword() {
        return this.getBooleanAttribute('manage_master_user_password');
    }
    public set manageMasterUserPassword(value: boolean | cdktn.IResolvable) {
        this._manageMasterUserPassword = value;
    }
    public resetManageMasterUserPassword() {
        this._manageMasterUserPassword = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get manageMasterUserPasswordInput() {
        return this._manageMasterUserPassword;
    }

    // master_user_authentication_type - computed: true, optional: true, required: false
    private _masterUserAuthenticationType?: string; 
    public get masterUserAuthenticationType() {
        return this.getStringAttribute('master_user_authentication_type');
    }
    public set masterUserAuthenticationType(value: string) {
        this._masterUserAuthenticationType = value;
    }
    public resetMasterUserAuthenticationType() {
        this._masterUserAuthenticationType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get masterUserAuthenticationTypeInput() {
        return this._masterUserAuthenticationType;
    }

    // master_user_password - computed: true, optional: true, required: false
    private _masterUserPassword?: string; 
    public get masterUserPassword() {
        return this.getStringAttribute('master_user_password');
    }
    public set masterUserPassword(value: string) {
        this._masterUserPassword = value;
    }
    public resetMasterUserPassword() {
        this._masterUserPassword = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get masterUserPasswordInput() {
        return this._masterUserPassword;
    }

    // master_user_secret - computed: true, optional: true, required: false
    private _masterUserSecret = new CcDBCluster.MasterUserSecretPropertyOutputReference(this, "master_user_secret");
    public get masterUserSecret() {
        return this._masterUserSecret;
    }
    public putMasterUserSecret(value: CcDBCluster.MasterUserSecretProperty) {
        this._masterUserSecret.internalValue = value;
    }
    public resetMasterUserSecret() {
        this._masterUserSecret.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get masterUserSecretInput() {
        return this._masterUserSecret.internalValue;
    }

    // master_username - computed: true, optional: true, required: false
    private _masterUsername?: string; 
    public get masterUsername() {
        return this.getStringAttribute('master_username');
    }
    public set masterUsername(value: string) {
        this._masterUsername = value;
    }
    public resetMasterUsername() {
        this._masterUsername = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get masterUsernameInput() {
        return this._masterUsername;
    }

    // monitoring_interval - computed: true, optional: true, required: false
    private _monitoringInterval?: number; 
    public get monitoringInterval() {
        return this.getNumberAttribute('monitoring_interval');
    }
    public set monitoringInterval(value: number) {
        this._monitoringInterval = value;
    }
    public resetMonitoringInterval() {
        this._monitoringInterval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get monitoringIntervalInput() {
        return this._monitoringInterval;
    }

    // monitoring_role_arn - computed: true, optional: true, required: false
    private _monitoringRoleArn?: string; 
    public get monitoringRoleArn() {
        return this.getStringAttribute('monitoring_role_arn');
    }
    public set monitoringRoleArn(value: string) {
        this._monitoringRoleArn = value;
    }
    public resetMonitoringRoleArn() {
        this._monitoringRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get monitoringRoleArnInput() {
        return this._monitoringRoleArn;
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

    // performance_insights_enabled - computed: true, optional: true, required: false
    private _performanceInsightsEnabled?: boolean | cdktn.IResolvable; 
    public get performanceInsightsEnabled() {
        return this.getBooleanAttribute('performance_insights_enabled');
    }
    public set performanceInsightsEnabled(value: boolean | cdktn.IResolvable) {
        this._performanceInsightsEnabled = value;
    }
    public resetPerformanceInsightsEnabled() {
        this._performanceInsightsEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get performanceInsightsEnabledInput() {
        return this._performanceInsightsEnabled;
    }

    // performance_insights_kms_key_id - computed: true, optional: true, required: false
    private _performanceInsightsKmsKeyId?: string; 
    public get performanceInsightsKmsKeyId() {
        return this.getStringAttribute('performance_insights_kms_key_id');
    }
    public set performanceInsightsKmsKeyId(value: string) {
        this._performanceInsightsKmsKeyId = value;
    }
    public resetPerformanceInsightsKmsKeyId() {
        this._performanceInsightsKmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get performanceInsightsKmsKeyIdInput() {
        return this._performanceInsightsKmsKeyId;
    }

    // performance_insights_retention_period - computed: true, optional: true, required: false
    private _performanceInsightsRetentionPeriod?: number; 
    public get performanceInsightsRetentionPeriod() {
        return this.getNumberAttribute('performance_insights_retention_period');
    }
    public set performanceInsightsRetentionPeriod(value: number) {
        this._performanceInsightsRetentionPeriod = value;
    }
    public resetPerformanceInsightsRetentionPeriod() {
        this._performanceInsightsRetentionPeriod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get performanceInsightsRetentionPeriodInput() {
        return this._performanceInsightsRetentionPeriod;
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

    // publicly_accessible - computed: true, optional: true, required: false
    private _publiclyAccessible?: boolean | cdktn.IResolvable; 
    public get publiclyAccessible() {
        return this.getBooleanAttribute('publicly_accessible');
    }
    public set publiclyAccessible(value: boolean | cdktn.IResolvable) {
        this._publiclyAccessible = value;
    }
    public resetPubliclyAccessible() {
        this._publiclyAccessible = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get publiclyAccessibleInput() {
        return this._publiclyAccessible;
    }

    // read_endpoint - computed: true, optional: false, required: false
    private _readEndpoint = new CcDBCluster.ReadEndpointPropertyOutputReference(this, "read_endpoint");
    public get readEndpoint() {
        return this._readEndpoint;
    }

    // replication_source_identifier - computed: true, optional: true, required: false
    private _replicationSourceIdentifier?: string; 
    public get replicationSourceIdentifier() {
        return this.getStringAttribute('replication_source_identifier');
    }
    public set replicationSourceIdentifier(value: string) {
        this._replicationSourceIdentifier = value;
    }
    public resetReplicationSourceIdentifier() {
        this._replicationSourceIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get replicationSourceIdentifierInput() {
        return this._replicationSourceIdentifier;
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

    // scaling_configuration - computed: true, optional: true, required: false
    private _scalingConfiguration = new CcDBCluster.ScalingConfigurationPropertyOutputReference(this, "scaling_configuration");
    public get scalingConfiguration() {
        return this._scalingConfiguration;
    }
    public putScalingConfiguration(value: CcDBCluster.ScalingConfigurationProperty) {
        this._scalingConfiguration.internalValue = value;
    }
    public resetScalingConfiguration() {
        this._scalingConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scalingConfigurationInput() {
        return this._scalingConfiguration.internalValue;
    }

    // serverless_v2_scaling_configuration - computed: true, optional: true, required: false
    private _serverlessV2ScalingConfiguration = new CcDBCluster.ServerlessV2ScalingConfigurationPropertyOutputReference(this, "serverless_v2_scaling_configuration");
    public get serverlessV2ScalingConfiguration() {
        return this._serverlessV2ScalingConfiguration;
    }
    public putServerlessV2ScalingConfiguration(value: CcDBCluster.ServerlessV2ScalingConfigurationProperty) {
        this._serverlessV2ScalingConfiguration.internalValue = value;
    }
    public resetServerlessV2ScalingConfiguration() {
        this._serverlessV2ScalingConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serverlessV2ScalingConfigurationInput() {
        return this._serverlessV2ScalingConfiguration.internalValue;
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

    // source_db_cluster_resource_id - computed: true, optional: true, required: false
    private _sourceDbClusterResourceId?: string; 
    public get sourceDbClusterResourceId() {
        return this.getStringAttribute('source_db_cluster_resource_id');
    }
    public set sourceDbClusterResourceId(value: string) {
        this._sourceDbClusterResourceId = value;
    }
    public resetSourceDbClusterResourceId() {
        this._sourceDbClusterResourceId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceDbClusterResourceIdInput() {
        return this._sourceDbClusterResourceId;
    }

    // source_region - computed: true, optional: true, required: false
    private _sourceRegion?: string; 
    public get sourceRegion() {
        return this.getStringAttribute('source_region');
    }
    public set sourceRegion(value: string) {
        this._sourceRegion = value;
    }
    public resetSourceRegion() {
        this._sourceRegion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceRegionInput() {
        return this._sourceRegion;
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

    // storage_encryption_type - computed: true, optional: false, required: false
    public get storageEncryptionType() {
        return this.getStringAttribute('storage_encryption_type');
    }

    // storage_throughput - computed: true, optional: false, required: false
    public get storageThroughput() {
        return this.getNumberAttribute('storage_throughput');
    }

    // storage_type - computed: true, optional: true, required: false
    private _storageType?: string; 
    public get storageType() {
        return this.getStringAttribute('storage_type');
    }
    public set storageType(value: string) {
        this._storageType = value;
    }
    public resetStorageType() {
        this._storageType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get storageTypeInput() {
        return this._storageType;
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
            allocated_storage: cdktn.numberToTerraform(this._allocatedStorage),
            associated_roles: cdktn.listMapper(ccDBClusterDBClusterRolePropertyToTerraform, false)(this._associatedRoles.internalValue),
            auto_minor_version_upgrade: cdktn.booleanToTerraform(this._autoMinorVersionUpgrade),
            availability_zones: cdktn.listMapper(cdktn.stringToTerraform, false)(this._availabilityZones),
            backtrack_window: cdktn.numberToTerraform(this._backtrackWindow),
            backup_retention_period: cdktn.numberToTerraform(this._backupRetentionPeriod),
            cluster_scalability_type: cdktn.stringToTerraform(this._clusterScalabilityType),
            copy_tags_to_snapshot: cdktn.booleanToTerraform(this._copyTagsToSnapshot),
            database_insights_mode: cdktn.stringToTerraform(this._databaseInsightsMode),
            database_name: cdktn.stringToTerraform(this._databaseName),
            db_cluster_identifier: cdktn.stringToTerraform(this._dbClusterIdentifier),
            db_cluster_instance_class: cdktn.stringToTerraform(this._dbClusterInstanceClass),
            db_cluster_parameter_group_name: cdktn.stringToTerraform(this._dbClusterParameterGroupName),
            db_instance_parameter_group_name: cdktn.stringToTerraform(this._dbInstanceParameterGroupName),
            db_subnet_group_name: cdktn.stringToTerraform(this._dbSubnetGroupName),
            db_system_id: cdktn.stringToTerraform(this._dbSystemId),
            delete_automated_backups: cdktn.booleanToTerraform(this._deleteAutomatedBackups),
            deletion_protection: cdktn.booleanToTerraform(this._deletionProtection),
            domain: cdktn.stringToTerraform(this._domain),
            domain_iam_role_name: cdktn.stringToTerraform(this._domainIamRoleName),
            enable_cloudwatch_logs_exports: cdktn.listMapper(cdktn.stringToTerraform, false)(this._enableCloudwatchLogsExports),
            enable_global_write_forwarding: cdktn.booleanToTerraform(this._enableGlobalWriteForwarding),
            enable_http_endpoint: cdktn.booleanToTerraform(this._enableHttpEndpoint),
            enable_iam_database_authentication: cdktn.booleanToTerraform(this._enableIamDatabaseAuthentication),
            enable_local_write_forwarding: cdktn.booleanToTerraform(this._enableLocalWriteForwarding),
            engine: cdktn.stringToTerraform(this._engine),
            engine_lifecycle_support: cdktn.stringToTerraform(this._engineLifecycleSupport),
            engine_mode: cdktn.stringToTerraform(this._engineMode),
            engine_version: cdktn.stringToTerraform(this._engineVersion),
            global_cluster_identifier: cdktn.stringToTerraform(this._globalClusterIdentifier),
            iops: cdktn.numberToTerraform(this._iops),
            kms_key_id: cdktn.stringToTerraform(this._kmsKeyId),
            manage_master_user_password: cdktn.booleanToTerraform(this._manageMasterUserPassword),
            master_user_authentication_type: cdktn.stringToTerraform(this._masterUserAuthenticationType),
            master_user_password: cdktn.stringToTerraform(this._masterUserPassword),
            master_user_secret: ccDBClusterMasterUserSecretPropertyToTerraform(this._masterUserSecret.internalValue),
            master_username: cdktn.stringToTerraform(this._masterUsername),
            monitoring_interval: cdktn.numberToTerraform(this._monitoringInterval),
            monitoring_role_arn: cdktn.stringToTerraform(this._monitoringRoleArn),
            network_type: cdktn.stringToTerraform(this._networkType),
            performance_insights_enabled: cdktn.booleanToTerraform(this._performanceInsightsEnabled),
            performance_insights_kms_key_id: cdktn.stringToTerraform(this._performanceInsightsKmsKeyId),
            performance_insights_retention_period: cdktn.numberToTerraform(this._performanceInsightsRetentionPeriod),
            port: cdktn.numberToTerraform(this._port),
            preferred_backup_window: cdktn.stringToTerraform(this._preferredBackupWindow),
            preferred_maintenance_window: cdktn.stringToTerraform(this._preferredMaintenanceWindow),
            publicly_accessible: cdktn.booleanToTerraform(this._publiclyAccessible),
            replication_source_identifier: cdktn.stringToTerraform(this._replicationSourceIdentifier),
            restore_to_time: cdktn.stringToTerraform(this._restoreToTime),
            restore_type: cdktn.stringToTerraform(this._restoreType),
            scaling_configuration: ccDBClusterScalingConfigurationPropertyToTerraform(this._scalingConfiguration.internalValue),
            serverless_v2_scaling_configuration: ccDBClusterServerlessV2ScalingConfigurationPropertyToTerraform(this._serverlessV2ScalingConfiguration.internalValue),
            snapshot_identifier: cdktn.stringToTerraform(this._snapshotIdentifier),
            source_db_cluster_identifier: cdktn.stringToTerraform(this._sourceDbClusterIdentifier),
            source_db_cluster_resource_id: cdktn.stringToTerraform(this._sourceDbClusterResourceId),
            source_region: cdktn.stringToTerraform(this._sourceRegion),
            storage_encrypted: cdktn.booleanToTerraform(this._storageEncrypted),
            storage_type: cdktn.stringToTerraform(this._storageType),
            tags: cdktn.listMapper(ccDBClusterTagPropertyToTerraform, false)(this._tags.internalValue),
            use_latest_restorable_time: cdktn.booleanToTerraform(this._useLatestRestorableTime),
            vpc_security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._vpcSecurityGroupIds),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            allocated_storage: {
                value: cdktn.numberToHclTerraform(this._allocatedStorage),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            associated_roles: {
                value: cdktn.listMapperHcl(ccDBClusterDBClusterRolePropertyToHclTerraform, false)(this._associatedRoles.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcDBCluster.DBClusterRolePropertyList",
            },
            auto_minor_version_upgrade: {
                value: cdktn.booleanToHclTerraform(this._autoMinorVersionUpgrade),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            availability_zones: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._availabilityZones),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            backtrack_window: {
                value: cdktn.numberToHclTerraform(this._backtrackWindow),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            backup_retention_period: {
                value: cdktn.numberToHclTerraform(this._backupRetentionPeriod),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            cluster_scalability_type: {
                value: cdktn.stringToHclTerraform(this._clusterScalabilityType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            copy_tags_to_snapshot: {
                value: cdktn.booleanToHclTerraform(this._copyTagsToSnapshot),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            database_insights_mode: {
                value: cdktn.stringToHclTerraform(this._databaseInsightsMode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            database_name: {
                value: cdktn.stringToHclTerraform(this._databaseName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            db_cluster_identifier: {
                value: cdktn.stringToHclTerraform(this._dbClusterIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            db_cluster_instance_class: {
                value: cdktn.stringToHclTerraform(this._dbClusterInstanceClass),
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
            db_subnet_group_name: {
                value: cdktn.stringToHclTerraform(this._dbSubnetGroupName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            db_system_id: {
                value: cdktn.stringToHclTerraform(this._dbSystemId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            delete_automated_backups: {
                value: cdktn.booleanToHclTerraform(this._deleteAutomatedBackups),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            deletion_protection: {
                value: cdktn.booleanToHclTerraform(this._deletionProtection),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            domain: {
                value: cdktn.stringToHclTerraform(this._domain),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            domain_iam_role_name: {
                value: cdktn.stringToHclTerraform(this._domainIamRoleName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            enable_cloudwatch_logs_exports: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._enableCloudwatchLogsExports),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            enable_global_write_forwarding: {
                value: cdktn.booleanToHclTerraform(this._enableGlobalWriteForwarding),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            enable_http_endpoint: {
                value: cdktn.booleanToHclTerraform(this._enableHttpEndpoint),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            enable_iam_database_authentication: {
                value: cdktn.booleanToHclTerraform(this._enableIamDatabaseAuthentication),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            enable_local_write_forwarding: {
                value: cdktn.booleanToHclTerraform(this._enableLocalWriteForwarding),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            engine: {
                value: cdktn.stringToHclTerraform(this._engine),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            engine_lifecycle_support: {
                value: cdktn.stringToHclTerraform(this._engineLifecycleSupport),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            engine_mode: {
                value: cdktn.stringToHclTerraform(this._engineMode),
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
            global_cluster_identifier: {
                value: cdktn.stringToHclTerraform(this._globalClusterIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            iops: {
                value: cdktn.numberToHclTerraform(this._iops),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            kms_key_id: {
                value: cdktn.stringToHclTerraform(this._kmsKeyId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            manage_master_user_password: {
                value: cdktn.booleanToHclTerraform(this._manageMasterUserPassword),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            master_user_authentication_type: {
                value: cdktn.stringToHclTerraform(this._masterUserAuthenticationType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            master_user_password: {
                value: cdktn.stringToHclTerraform(this._masterUserPassword),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            master_user_secret: {
                value: ccDBClusterMasterUserSecretPropertyToHclTerraform(this._masterUserSecret.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDBCluster.MasterUserSecretProperty",
            },
            master_username: {
                value: cdktn.stringToHclTerraform(this._masterUsername),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            monitoring_interval: {
                value: cdktn.numberToHclTerraform(this._monitoringInterval),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            monitoring_role_arn: {
                value: cdktn.stringToHclTerraform(this._monitoringRoleArn),
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
            performance_insights_enabled: {
                value: cdktn.booleanToHclTerraform(this._performanceInsightsEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            performance_insights_kms_key_id: {
                value: cdktn.stringToHclTerraform(this._performanceInsightsKmsKeyId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            performance_insights_retention_period: {
                value: cdktn.numberToHclTerraform(this._performanceInsightsRetentionPeriod),
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
            publicly_accessible: {
                value: cdktn.booleanToHclTerraform(this._publiclyAccessible),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            replication_source_identifier: {
                value: cdktn.stringToHclTerraform(this._replicationSourceIdentifier),
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
            scaling_configuration: {
                value: ccDBClusterScalingConfigurationPropertyToHclTerraform(this._scalingConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDBCluster.ScalingConfigurationProperty",
            },
            serverless_v2_scaling_configuration: {
                value: ccDBClusterServerlessV2ScalingConfigurationPropertyToHclTerraform(this._serverlessV2ScalingConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDBCluster.ServerlessV2ScalingConfigurationProperty",
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
            source_db_cluster_resource_id: {
                value: cdktn.stringToHclTerraform(this._sourceDbClusterResourceId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            source_region: {
                value: cdktn.stringToHclTerraform(this._sourceRegion),
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
            storage_type: {
                value: cdktn.stringToHclTerraform(this._storageType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
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


export function ccDBClusterEndpointPropertyToTerraform(struct?: CcDBCluster.EndpointProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccDBClusterEndpointPropertyToHclTerraform(struct?: CcDBCluster.EndpointProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccDBClusterMasterUserSecretPropertyToTerraform(struct?: CcDBCluster.MasterUserSecretProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        kms_key_id: cdktn.stringToTerraform(struct!.kmsKeyId),
    }
}


export function ccDBClusterMasterUserSecretPropertyToHclTerraform(struct?: CcDBCluster.MasterUserSecretProperty | cdktn.IResolvable): any {
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDBClusterReadEndpointPropertyToTerraform(struct?: CcDBCluster.ReadEndpointProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccDBClusterReadEndpointPropertyToHclTerraform(struct?: CcDBCluster.ReadEndpointProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccDBClusterScalingConfigurationPropertyToTerraform(struct?: CcDBCluster.ScalingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        auto_pause: cdktn.booleanToTerraform(struct!.autoPause),
        max_capacity: cdktn.numberToTerraform(struct!.maxCapacity),
        min_capacity: cdktn.numberToTerraform(struct!.minCapacity),
        seconds_before_timeout: cdktn.numberToTerraform(struct!.secondsBeforeTimeout),
        seconds_until_auto_pause: cdktn.numberToTerraform(struct!.secondsUntilAutoPause),
        timeout_action: cdktn.stringToTerraform(struct!.timeoutAction),
    }
}


export function ccDBClusterScalingConfigurationPropertyToHclTerraform(struct?: CcDBCluster.ScalingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        auto_pause: {
            value: cdktn.booleanToHclTerraform(struct!.autoPause),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
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
        seconds_before_timeout: {
            value: cdktn.numberToHclTerraform(struct!.secondsBeforeTimeout),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        seconds_until_auto_pause: {
            value: cdktn.numberToHclTerraform(struct!.secondsUntilAutoPause),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        timeout_action: {
            value: cdktn.stringToHclTerraform(struct!.timeoutAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDBClusterServerlessV2ScalingConfigurationPropertyToTerraform(struct?: CcDBCluster.ServerlessV2ScalingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max_capacity: cdktn.numberToTerraform(struct!.maxCapacity),
        min_capacity: cdktn.numberToTerraform(struct!.minCapacity),
        seconds_until_auto_pause: cdktn.numberToTerraform(struct!.secondsUntilAutoPause),
    }
}


export function ccDBClusterServerlessV2ScalingConfigurationPropertyToHclTerraform(struct?: CcDBCluster.ServerlessV2ScalingConfigurationProperty | cdktn.IResolvable): any {
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
        seconds_until_auto_pause: {
            value: cdktn.numberToHclTerraform(struct!.secondsUntilAutoPause),
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
    * The name of the feature associated with the AWS Identity and Access Management (IAM) role. IAM roles that are associated with a DB cluster grant permission for the DB cluster to access other AWS services on your behalf. For the list of supported feature names, see the ``SupportedFeatureNames`` description in [DBEngineVersion](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DBEngineVersion.html) in the *Amazon RDS API Reference*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#feature_name CcDBCluster#feature_name}
    */
    readonly featureName?: string;
    /**
    * The Amazon Resource Name (ARN) of the IAM role that is associated with the DB cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#role_arn CcDBCluster#role_arn}
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
export interface EndpointProperty {
}
export class EndpointPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EndpointProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EndpointProperty | undefined) {
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
export interface MasterUserSecretProperty {
    /**
    * The AWS KMS key identifier that is used to encrypt the secret.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#kms_key_id CcDBCluster#kms_key_id}
    */
    readonly kmsKeyId?: string;
}
export class MasterUserSecretPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MasterUserSecretProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._kmsKeyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsKeyId = this._kmsKeyId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MasterUserSecretProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._kmsKeyId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._kmsKeyId = value.kmsKeyId;
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

    // secret_arn - computed: true, optional: false, required: false
    public get secretArn() {
        return this.getStringAttribute('secret_arn');
    }
}
export interface ReadEndpointProperty {
}
export class ReadEndpointPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ReadEndpointProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ReadEndpointProperty | undefined) {
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
}
export interface ScalingConfigurationProperty {
    /**
    * Indicates whether to allow or disallow automatic pause for an Aurora DB cluster in ``serverless`` DB engine mode. A DB cluster can be paused only when it's idle (it has no connections).
    *   If a DB cluster is paused for more than seven days, the DB cluster might be backed up with a snapshot. In this case, the DB cluster is restored when there is a request to connect to it.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#auto_pause CcDBCluster#auto_pause}
    */
    readonly autoPause?: boolean | cdktn.IResolvable;
    /**
    * The maximum capacity for an Aurora DB cluster in ``serverless`` DB engine mode.
    *  For Aurora MySQL, valid capacity values are ``1``, ``2``, ``4``, ``8``, ``16``, ``32``, ``64``, ``128``, and ``256``.
    *  For Aurora PostgreSQL, valid capacity values are ``2``, ``4``, ``8``, ``16``, ``32``, ``64``, ``192``, and ``384``.
    *  The maximum capacity must be greater than or equal to the minimum capacity.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#max_capacity CcDBCluster#max_capacity}
    */
    readonly maxCapacity?: number;
    /**
    * The minimum capacity for an Aurora DB cluster in ``serverless`` DB engine mode.
    *  For Aurora MySQL, valid capacity values are ``1``, ``2``, ``4``, ``8``, ``16``, ``32``, ``64``, ``128``, and ``256``.
    *  For Aurora PostgreSQL, valid capacity values are ``2``, ``4``, ``8``, ``16``, ``32``, ``64``, ``192``, and ``384``.
    *  The minimum capacity must be less than or equal to the maximum capacity.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#min_capacity CcDBCluster#min_capacity}
    */
    readonly minCapacity?: number;
    /**
    * The amount of time, in seconds, that Aurora Serverless v1 tries to find a scaling point to perform seamless scaling before enforcing the timeout action. The default is 300.
    *  Specify a value between 60 and 600 seconds.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#seconds_before_timeout CcDBCluster#seconds_before_timeout}
    */
    readonly secondsBeforeTimeout?: number;
    /**
    * The time, in seconds, before an Aurora DB cluster in ``serverless`` mode is paused.
    *  Specify a value between 300 and 86,400 seconds.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#seconds_until_auto_pause CcDBCluster#seconds_until_auto_pause}
    */
    readonly secondsUntilAutoPause?: number;
    /**
    * The action to take when the timeout is reached, either ``ForceApplyCapacityChange`` or ``RollbackCapacityChange``.
    *  ``ForceApplyCapacityChange`` sets the capacity to the specified value as soon as possible.
    *  ``RollbackCapacityChange``, the default, ignores the capacity change if a scaling point isn't found in the timeout period.
    *   If you specify ``ForceApplyCapacityChange``, connections that prevent Aurora Serverless v1 from finding a scaling point might be dropped.
    *   For more information, see [Autoscaling for Aurora Serverless v1](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.how-it-works.html#aurora-serverless.how-it-works.auto-scaling) in the *Amazon Aurora User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#timeout_action CcDBCluster#timeout_action}
    */
    readonly timeoutAction?: string;
}
export class ScalingConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ScalingConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._autoPause !== undefined) {
            hasAnyValues = true;
            internalValueResult.autoPause = this._autoPause;
        }
        if (this._maxCapacity !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxCapacity = this._maxCapacity;
        }
        if (this._minCapacity !== undefined) {
            hasAnyValues = true;
            internalValueResult.minCapacity = this._minCapacity;
        }
        if (this._secondsBeforeTimeout !== undefined) {
            hasAnyValues = true;
            internalValueResult.secondsBeforeTimeout = this._secondsBeforeTimeout;
        }
        if (this._secondsUntilAutoPause !== undefined) {
            hasAnyValues = true;
            internalValueResult.secondsUntilAutoPause = this._secondsUntilAutoPause;
        }
        if (this._timeoutAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.timeoutAction = this._timeoutAction;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ScalingConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._autoPause = undefined;
            this._maxCapacity = undefined;
            this._minCapacity = undefined;
            this._secondsBeforeTimeout = undefined;
            this._secondsUntilAutoPause = undefined;
            this._timeoutAction = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._autoPause = value.autoPause;
            this._maxCapacity = value.maxCapacity;
            this._minCapacity = value.minCapacity;
            this._secondsBeforeTimeout = value.secondsBeforeTimeout;
            this._secondsUntilAutoPause = value.secondsUntilAutoPause;
            this._timeoutAction = value.timeoutAction;
        }
    }

    // auto_pause - computed: true, optional: true, required: false
    private _autoPause?: boolean | cdktn.IResolvable; 
    public get autoPause() {
        return this.getBooleanAttribute('auto_pause');
    }
    public set autoPause(value: boolean | cdktn.IResolvable) {
        this._autoPause = value;
    }
    public resetAutoPause() {
        this._autoPause = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoPauseInput() {
        return this._autoPause;
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

    // seconds_before_timeout - computed: true, optional: true, required: false
    private _secondsBeforeTimeout?: number; 
    public get secondsBeforeTimeout() {
        return this.getNumberAttribute('seconds_before_timeout');
    }
    public set secondsBeforeTimeout(value: number) {
        this._secondsBeforeTimeout = value;
    }
    public resetSecondsBeforeTimeout() {
        this._secondsBeforeTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secondsBeforeTimeoutInput() {
        return this._secondsBeforeTimeout;
    }

    // seconds_until_auto_pause - computed: true, optional: true, required: false
    private _secondsUntilAutoPause?: number; 
    public get secondsUntilAutoPause() {
        return this.getNumberAttribute('seconds_until_auto_pause');
    }
    public set secondsUntilAutoPause(value: number) {
        this._secondsUntilAutoPause = value;
    }
    public resetSecondsUntilAutoPause() {
        this._secondsUntilAutoPause = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secondsUntilAutoPauseInput() {
        return this._secondsUntilAutoPause;
    }

    // timeout_action - computed: true, optional: true, required: false
    private _timeoutAction?: string; 
    public get timeoutAction() {
        return this.getStringAttribute('timeout_action');
    }
    public set timeoutAction(value: string) {
        this._timeoutAction = value;
    }
    public resetTimeoutAction() {
        this._timeoutAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutActionInput() {
        return this._timeoutAction;
    }
}
export interface ServerlessV2ScalingConfigurationProperty {
    /**
    * The maximum number of Aurora capacity units (ACUs) for a DB instance in an Aurora Serverless v2 cluster. You can specify ACU values in half-step increments, such as 40, 40.5, 41, and so on. The largest value that you can use is 128.
    *  The maximum capacity must be higher than 0.5 ACUs. For more information, see [Choosing the maximum Aurora Serverless v2 capacity setting for a cluster](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2.setting-capacity.html#aurora-serverless-v2.max_capacity_considerations) in the *Amazon Aurora User Guide*.
    *  Aurora automatically sets certain parameters for Aurora Serverless V2 DB instances to values that depend on the maximum ACU value in the capacity range. When you update the maximum capacity value, the ``ParameterApplyStatus`` value for the DB instance changes to ``pending-reboot``. You can update the parameter values by rebooting the DB instance after changing the capacity range.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#max_capacity CcDBCluster#max_capacity}
    */
    readonly maxCapacity?: number;
    /**
    * The minimum number of Aurora capacity units (ACUs) for a DB instance in an Aurora Serverless v2 cluster. You can specify ACU values in half-step increments, such as 8, 8.5, 9, and so on. For Aurora versions that support the Aurora Serverless v2 auto-pause feature, the smallest value that you can use is 0. For versions that don't support Aurora Serverless v2 auto-pause, the smallest value that you can use is 0.5.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#min_capacity CcDBCluster#min_capacity}
    */
    readonly minCapacity?: number;
    /**
    * Specifies the number of seconds an Aurora Serverless v2 DB instance must be idle before Aurora attempts to automatically pause it. 
    *  Specify a value between 300 seconds (five minutes) and 86,400 seconds (one day). The default is 300 seconds.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#seconds_until_auto_pause CcDBCluster#seconds_until_auto_pause}
    */
    readonly secondsUntilAutoPause?: number;
}
export class ServerlessV2ScalingConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ServerlessV2ScalingConfigurationProperty | cdktn.IResolvable | undefined {
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
        if (this._secondsUntilAutoPause !== undefined) {
            hasAnyValues = true;
            internalValueResult.secondsUntilAutoPause = this._secondsUntilAutoPause;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ServerlessV2ScalingConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maxCapacity = undefined;
            this._minCapacity = undefined;
            this._secondsUntilAutoPause = undefined;
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
            this._secondsUntilAutoPause = value.secondsUntilAutoPause;
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

    // seconds_until_auto_pause - computed: true, optional: true, required: false
    private _secondsUntilAutoPause?: number; 
    public get secondsUntilAutoPause() {
        return this.getNumberAttribute('seconds_until_auto_pause');
    }
    public set secondsUntilAutoPause(value: number) {
        this._secondsUntilAutoPause = value;
    }
    public resetSecondsUntilAutoPause() {
        this._secondsUntilAutoPause = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secondsUntilAutoPauseInput() {
        return this._secondsUntilAutoPause;
    }
}
export interface TagProperty {
    /**
    * A key is the required name of the tag. The string value can be from 1 to 128 Unicode characters in length and can't be prefixed with ``aws:`` or ``rds:``. The string can only contain only the set of Unicode letters, digits, white-space, '_', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-@]*)$").
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#key CcDBCluster#key}
    */
    readonly key?: string;
    /**
    * A value is the optional value of the tag. The string value can be from 1 to 256 Unicode characters in length and can't be prefixed with ``aws:`` or ``rds:``. The string can only contain only the set of Unicode letters, digits, white-space, '_', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-@]*)$").
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rds_db_cluster#value CcDBCluster#value}
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
