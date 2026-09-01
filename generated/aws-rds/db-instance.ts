// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcDBInstanceProps extends cdktn.TerraformMetaArguments {
    /**
    * The additional storage volumes associated with the DB instance. RDS supports additional storage volumes for RDS for Oracle and RDS for SQL Server.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#additional_storage_volumes CcDBInstance#additional_storage_volumes}
    */
    readonly additionalStorageVolumes?: CcDBInstance.AdditionalStorageVolumeProperty[] | cdktn.IResolvable;
    /**
    * The amount of storage in gibibytes (GiB) to be initially allocated for the database instance.
    *   If any value is set in the ``Iops`` parameter, ``AllocatedStorage`` must be at least 100 GiB, which corresponds to the minimum Iops value of 1,000. If you increase the ``Iops`` value (in 1,000 IOPS increments), then you must also increase the ``AllocatedStorage`` value (in 100-GiB increments). 
    *    *Amazon Aurora* 
    *  Not applicable. Aurora cluster volumes automatically grow as the amount of data in your database increases, though you are only charged for the space that you use in an Aurora cluster volume.
    *   *Db2* 
    *  Constraints to the amount of storage for each storage type are the following:
    *   +  General Purpose (SSD) storage (gp3): Must be an integer from 20 to 64000.
    *   +  Provisioned IOPS storage (io1): Must be an integer from 100 to 64000.
    *   
    *   *MySQL* 
    *  Constraints to the amount of storage for each storage type are the following: 
    *   +  General Purpose (SSD) storage (gp2): Must be an integer from 20 to 65536.
    *   +  Provisioned IOPS storage (io1): Must be an integer from 100 to 65536.
    *   +  Magnetic storage (standard): Must be an integer from 5 to 3072.
    *   
    *   *MariaDB* 
    *  Constraints to the amount of storage for each storage type are the following: 
    *   +  General Purpose (SSD) storage (gp2): Must be an integer from 20 to 65536.
    *   +  Provisioned IOPS storage (io1): Must be an integer from 100 to 65536.
    *   +  Magnetic storage (standard): Must be an integer from 5 to 3072.
    *   
    *   *PostgreSQL* 
    *  Constraints to the amount of storage for each storage type are the following: 
    *   +  General Purpose (SSD) storage (gp2): Must be an integer from 20 to 65536.
    *   +  Provisioned IOPS storage (io1): Must be an integer from 100 to 65536.
    *   +  Magnetic storage (standard): Must be an integer from 5 to 3072.
    *   
    *   *Oracle* 
    *  Constraints to the amount of storage for each storage type are the following: 
    *   +  General Purpose (SSD) storage (gp2): Must be an integer from 20 to 65536.
    *   +  Provisioned IOPS storage (io1): Must be an integer from 100 to 65536.
    *   +  Magnetic storage (standard): Must be an integer from 10 to 3072.
    *   
    *   *SQL Server* 
    *  Constraints to the amount of storage for each storage type are the following: 
    *   +  General Purpose (SSD) storage (gp2):
    *   +  Enterprise and Standard editions: Must be an integer from 20 to 16384.
    *   +  Web and Express editions: Must be an integer from 20 to 16384.
    *   
    *   +  Provisioned IOPS storage (io1):
    *   +  Enterprise and Standard editions: Must be an integer from 20 to 16384.
    *   +  Web and Express editions: Must be an integer from 20 to 16384.
    *   
    *   +  Magnetic storage (standard):
    *   +  Enterprise and Standard editions: Must be an integer from 20 to 1024.
    *   +  Web and Express editions: Must be an integer from 20 to 1024.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#allocated_storage CcDBInstance#allocated_storage}
    */
    readonly allocatedStorage?: string;
    /**
    * A value that indicates whether major version upgrades are allowed. Changing this parameter doesn't result in an outage and the change is asynchronously applied as soon as possible.
    *  Constraints: Major version upgrades must be allowed when specifying a value for the ``EngineVersion`` parameter that is a different major version than the DB instance's current version.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#allow_major_version_upgrade CcDBInstance#allow_major_version_upgrade}
    */
    readonly allowMajorVersionUpgrade?: boolean | cdktn.IResolvable;
    /**
    * Specifies whether changes to the DB instance and any pending modifications are applied immediately, regardless of the ``PreferredMaintenanceWindow`` setting. If set to ``false``, changes are applied during the next maintenance window. Until RDS applies the changes, the DB instance remains in a drift state. As a result, the configuration doesn't fully reflect the requested modifications and temporarily diverges from the intended state.
    *  In addition to the settings described in [Modifying a DB instance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.DBInstance.Modifying.html), this property also determines whether the DB instance reboots when a static parameter is modified in the associated DB parameter group.
    *  Default: ``true``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#apply_immediately CcDBInstance#apply_immediately}
    */
    readonly applyImmediately?: boolean | cdktn.IResolvable;
    /**
    * The IAMlong (IAM) roles associated with the DB instance. 
    *   *Amazon Aurora* 
    *  Not applicable. The associated roles are managed by the DB cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#associated_roles CcDBInstance#associated_roles}
    */
    readonly associatedRoles?: CcDBInstance.DBInstanceRoleProperty[] | cdktn.IResolvable;
    /**
    * A value that indicates whether minor engine upgrades are applied automatically to the DB instance during the maintenance window. By default, minor engine upgrades are applied automatically.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#auto_minor_version_upgrade CcDBInstance#auto_minor_version_upgrade}
    */
    readonly autoMinorVersionUpgrade?: boolean | cdktn.IResolvable;
    /**
    * The AWS KMS key identifier for encryption of the replicated automated backups. The KMS key ID is the Amazon Resource Name (ARN) for the KMS encryption key in the destination AWS-Region, for example, ``arn:aws:kms:us-east-1:123456789012:key/AKIAIOSFODNN7EXAMPLE``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#automatic_backup_replication_kms_key_id CcDBInstance#automatic_backup_replication_kms_key_id}
    */
    readonly automaticBackupReplicationKmsKeyId?: string;
    /**
    * The AWS-Region associated with the automated backup.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#automatic_backup_replication_region CcDBInstance#automatic_backup_replication_region}
    */
    readonly automaticBackupReplicationRegion?: string;
    /**
    * The retention period for automated backups in a different AWS Region. Use this parameter to set a unique retention period that only applies to cross-Region automated backups. To enable automated backups in a different Region, specify a positive value for the ``AutomaticBackupReplicationRegion`` parameter. 
    *  If not specified, this parameter defaults to the value of the ``BackupRetentionPeriod`` parameter. The maximum allowed value is 35.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#automatic_backup_replication_retention_period CcDBInstance#automatic_backup_replication_retention_period}
    */
    readonly automaticBackupReplicationRetentionPeriod?: number;
    /**
    * The Availability Zone (AZ) where the database will be created. For information on AWS-Regions and Availability Zones, see [Regions and Availability Zones](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html).
    *  For Amazon Aurora, each Aurora DB cluster hosts copies of its storage in three separate Availability Zones. Specify one of these Availability Zones. Aurora automatically chooses an appropriate Availability Zone if you don't specify one.
    *  Default: A random, system-chosen Availability Zone in the endpoint's AWS-Region.
    *  Constraints:
    *   +  The ``AvailabilityZone`` parameter can't be specified if the DB instance is a Multi-AZ deployment.
    *   +  The specified Availability Zone must be in the same AWS-Region as the current endpoint.
    *   
    *  Example: ``us-east-1d``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#availability_zone CcDBInstance#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * The number of days for which automated backups are retained. Setting this parameter to a positive number enables backups. Setting this parameter to 0 disables automated backups.
    *   *Amazon Aurora* 
    *  Not applicable. The retention period for automated backups is managed by the DB cluster.
    *  Default: 1
    *  Constraints:
    *   +  Must be a value from 0 to 35
    *   +  Can't be set to 0 if the DB instance is a source to read replicas
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#backup_retention_period CcDBInstance#backup_retention_period}
    */
    readonly backupRetentionPeriod?: number;
    /**
    * The location for storing automated backups and manual snapshots.
    *  Valid Values:
    *   +  ``local`` (Dedicated Local Zone)
    *   +  ``outposts`` (AWS Outposts)
    *   +  ``region`` (AWS-Region)
    *   
    *  Default: ``region``
    *  For more information, see [Working with Amazon RDS on Outposts](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-on-outposts.html) in the *Amazon RDS User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#backup_target CcDBInstance#backup_target}
    */
    readonly backupTarget?: string;
    /**
    * The identifier of the CA certificate for this DB instance.
    *  For more information, see [Using SSL/TLS to encrypt a connection to a DB instance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL.html) in the *Amazon RDS User Guide* and [Using SSL/TLS to encrypt a connection to a DB cluster](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL.html) in the *Amazon Aurora User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#ca_certificate_identifier CcDBInstance#ca_certificate_identifier}
    */
    readonly caCertificateIdentifier?: string;
    /**
    * Specifies whether the DB instance is restarted when you rotate your SSL/TLS certificate.
    *  By default, the DB instance is restarted when you rotate your SSL/TLS certificate. The certificate is not updated until the DB instance is restarted.
    *   Set this parameter only if you are *not* using SSL/TLS to connect to the DB instance.
    *   If you are using SSL/TLS to connect to the DB instance, follow the appropriate instructions for your DB engine to rotate your SSL/TLS certificate:
    *   +  For more information about rotating your SSL/TLS certificate for RDS DB engines, see [Rotating Your SSL/TLS Certificate.](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL-certificate-rotation.html) in the *Amazon RDS User Guide.*
    *   +  For more information about rotating your SSL/TLS certificate for Aurora DB engines, see [Rotating Your SSL/TLS Certificate](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL-certificate-rotation.html) in the *Amazon Aurora User Guide*.
    *   
    *  This setting doesn't apply to RDS Custom DB instances.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#certificate_rotation_restart CcDBInstance#certificate_rotation_restart}
    */
    readonly certificateRotationRestart?: boolean | cdktn.IResolvable;
    /**
    * For supported engines, indicates that the DB instance should be associated with the specified character set.
    *   *Amazon Aurora* 
    *  Not applicable. The character set is managed by the DB cluster. For more information, see [AWS::RDS::DBCluster](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#character_set_name CcDBInstance#character_set_name}
    */
    readonly characterSetName?: string;
    /**
    * Specifies whether to copy tags from the DB instance to snapshots of the DB instance. By default, tags are not copied.
    *  This setting doesn't apply to Amazon Aurora DB instances. Copying tags to snapshots is managed by the DB cluster. Setting this value for an Aurora DB instance has no effect on the DB cluster setting.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#copy_tags_to_snapshot CcDBInstance#copy_tags_to_snapshot}
    */
    readonly copyTagsToSnapshot?: boolean | cdktn.IResolvable;
    /**
    * The instance profile associated with the underlying Amazon EC2 instance of an RDS Custom DB instance.
    *  This setting is required for RDS Custom.
    *  Constraints:
    *   +  The profile must exist in your account.
    *   +  The profile must have an IAM role that Amazon EC2 has permissions to assume.
    *   +  The instance profile name and the associated IAM role name must start with the prefix ``AWSRDSCustom``.
    *   
    *  For the list of permissions required for the IAM role, see [Configure IAM and your VPC](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-setup-orcl.html#custom-setup-orcl.iam-vpc) in the *Amazon RDS User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#custom_iam_instance_profile CcDBInstance#custom_iam_instance_profile}
    */
    readonly customIamInstanceProfile?: string;
    /**
    * The mode of Database Insights to enable for the DB instance.
    *   Aurora DB instances inherit this value from the DB cluster, so you can't change this value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#database_insights_mode CcDBInstance#database_insights_mode}
    */
    readonly databaseInsightsMode?: string;
    /**
    * The identifier of the DB cluster that this DB instance will belong to.
    *  This setting doesn't apply to RDS Custom DB instances.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#db_cluster_identifier CcDBInstance#db_cluster_identifier}
    */
    readonly dbClusterIdentifier?: string;
    /**
    * The identifier for the Multi-AZ DB cluster snapshot to restore from.
    *  For more information on Multi-AZ DB clusters, see [Multi-AZ DB cluster deployments](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html) in the *Amazon RDS User Guide*.
    *  Constraints:
    *   +  Must match the identifier of an existing Multi-AZ DB cluster snapshot.
    *   +  Can't be specified when ``DBSnapshotIdentifier`` is specified.
    *   +  Must be specified when ``DBSnapshotIdentifier`` isn't specified.
    *   +  If you are restoring from a shared manual Multi-AZ DB cluster snapshot, the ``DBClusterSnapshotIdentifier`` must be the ARN of the shared snapshot.
    *   +  Can't be the identifier of an Aurora DB cluster snapshot.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#db_cluster_snapshot_identifier CcDBInstance#db_cluster_snapshot_identifier}
    */
    readonly dbClusterSnapshotIdentifier?: string;
    /**
    * The compute and memory capacity of the DB instance, for example ``db.m5.large``. Not all DB instance classes are available in all AWS-Regions, or for all database engines. For the full list of DB instance classes, and availability for your engine, see [DB instance classes](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html) in the *Amazon RDS User Guide* or [Aurora DB instance classes](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.DBInstanceClass.html) in the *Amazon Aurora User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#db_instance_class CcDBInstance#db_instance_class}
    */
    readonly dbInstanceClass?: string;
    /**
    * A name for the DB instance. If you specify a name, AWS CloudFormation converts it to lowercase. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the DB instance. For more information, see [Name Type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).
    *  For information about constraints that apply to DB instance identifiers, see [Naming constraints in Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Limits.html#RDS_Limits.Constraints) in the *Amazon RDS User Guide*.
    *   If you specify a name, you can't perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#db_instance_identifier CcDBInstance#db_instance_identifier}
    */
    readonly dbInstanceIdentifier?: string;
    /**
    * The meaning of this parameter differs according to the database engine you use.
    *   If you specify the ``DBSnapshotIdentifier`` property, this property only applies to RDS for Oracle.
    *    *Amazon Aurora* 
    *  Not applicable. The database name is managed by the DB cluster.
    *   *Db2* 
    *  The name of the database to create when the DB instance is created. If this parameter isn't specified, no database is created in the DB instance.
    *  Constraints:
    *   +  Must contain 1 to 64 letters or numbers.
    *   +  Must begin with a letter. Subsequent characters can be letters, underscores, or digits (0-9).
    *   +  Can't be a word reserved by the specified database engine.
    *   
    *   *MySQL* 
    *  The name of the database to create when the DB instance is created. If this parameter is not specified, no database is created in the DB instance.
    *  Constraints:
    *   +  Must contain 1 to 64 letters or numbers.
    *   +  Can't be a word reserved by the specified database engine
    *   
    *   *MariaDB* 
    *  The name of the database to create when the DB instance is created. If this parameter is not specified, no database is created in the DB instance.
    *  Constraints:
    *   +  Must contain 1 to 64 letters or numbers.
    *   +  Can't be a word reserved by the specified database engine
    *   
    *   *PostgreSQL* 
    *  The name of the database to create when the DB instance is created. If this parameter is not specified, the default ``postgres`` database is created in the DB instance.
    *  Constraints:
    *   +  Must begin with a letter. Subsequent characters can be letters, underscores, or digits (0-9).
    *   +  Must contain 1 to 63 characters.
    *   +  Can't be a word reserved by the specified database engine
    *   
    *   *Oracle* 
    *  The Oracle System ID (SID) of the created DB instance. If you specify ``null``, the default value ``ORCL`` is used. You can't specify the string NULL, or any other reserved word, for ``DBName``. 
    *  Default: ``ORCL``
    *  Constraints:
    *   +  Can't be longer than 8 characters
    *   
    *   *SQL Server* 
    *  Not applicable. Must be null.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#db_name CcDBInstance#db_name}
    */
    readonly dbName?: string;
    /**
    * The name of an existing DB parameter group or a reference to an [AWS::RDS::DBParameterGroup](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbparametergroup.html) resource created in the template.
    *  To list all of the available DB parameter group names, use the following command:
    *   ``aws rds describe-db-parameter-groups --query "DBParameterGroups[].DBParameterGroupName" --output text`` 
    *   If any of the data members of the referenced parameter group are changed during an update, the DB instance might need to be restarted, which causes some interruption. If the parameter group contains static parameters, whether they were changed or not, an update triggers a reboot.
    *   If you don't specify a value for ``DBParameterGroupName`` property, the default DB parameter group for the specified engine and engine version is used.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#db_parameter_group_name CcDBInstance#db_parameter_group_name}
    */
    readonly dbParameterGroupName?: string;
    /**
    * A list of the DB security groups to assign to the DB instance. The list can include both the name of existing DB security groups or references to AWS::RDS::DBSecurityGroup resources created in the template.
    *   If you set DBSecurityGroups, you must not set VPCSecurityGroups, and vice versa. Also, note that the DBSecurityGroups property exists only for backwards compatibility with older regions and is no longer recommended for providing security information to an RDS DB instance. Instead, use VPCSecurityGroups.
    *   If you specify this property, AWS CloudFormation sends only the following properties (if specified) to Amazon RDS during create operations:
    *   +   ``AllocatedStorage`` 
    *   +   ``AutoMinorVersionUpgrade`` 
    *   +   ``AvailabilityZone`` 
    *   +   ``BackupRetentionPeriod`` 
    *   +   ``CharacterSetName`` 
    *   +   ``DBInstanceClass`` 
    *   +   ``DBName`` 
    *   +   ``DBParameterGroupName`` 
    *   +   ``DBSecurityGroups`` 
    *   +   ``DBSubnetGroupName`` 
    *   +   ``Engine`` 
    *   +   ``EngineVersion`` 
    *   +   ``Iops`` 
    *   +   ``LicenseModel`` 
    *   +   ``MasterUsername`` 
    *   +   ``MasterUserPassword`` 
    *   +   ``MultiAZ`` 
    *   +   ``OptionGroupName`` 
    *   +   ``PreferredBackupWindow`` 
    *   +   ``PreferredMaintenanceWindow`` 
    *   
    *  All other properties are ignored. Specify a virtual private cloud (VPC) security group if you want to submit other properties, such as ``StorageType``, ``StorageEncrypted``, or ``KmsKeyId``. If you're already using the ``DBSecurityGroups`` property, you can't use these other properties by updating your DB instance to use a VPC security group. You must recreate the DB instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#db_security_groups CcDBInstance#db_security_groups}
    */
    readonly dbSecurityGroups?: string[];
    /**
    * The name or Amazon Resource Name (ARN) of the DB snapshot that's used to restore the DB instance. If you're restoring from a shared manual DB snapshot, you must specify the ARN of the snapshot.
    *  By specifying this property, you can create a DB instance from the specified DB snapshot. If the ``DBSnapshotIdentifier`` property is an empty string or the ``AWS::RDS::DBInstance`` declaration has no ``DBSnapshotIdentifier`` property, AWS CloudFormation creates a new database. If the property contains a value (other than an empty string), AWS CloudFormation creates a database from the specified snapshot. If a snapshot with the specified name doesn't exist, AWS CloudFormation can't create the database and it rolls back the stack.
    *  Some DB instance properties aren't valid when you restore from a snapshot, such as the ``MasterUsername`` and ``MasterUserPassword`` properties, and the point-in-time recovery properties ``RestoreTime`` and ``UseLatestRestorableTime``. For information about the properties that you can specify, see the [RestoreDBInstanceFromDBSnapshot](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RestoreDBInstanceFromDBSnapshot.html) action in the *Amazon RDS API Reference*.
    *  When you specify the same ``DBSnapshotIdentifier`` property value for an update, the DB instance is not restored from the DB snapshot again, and the data in the database is not changed. If you specify a different ``DBSnapshotIdentifier`` value, a new DB instance is restored from the specified snapshot, and the original DB instance is deleted.
    *  If you specify the ``DBSnapshotIdentifier`` property to restore a DB instance (as opposed to specifying it for DB instance updates), then don't specify the following properties:
    *   +   ``CharacterSetName`` 
    *   +   ``DBClusterIdentifier`` 
    *   +   ``DBName`` 
    *   +   ``KmsKeyId`` 
    *   +   ``MasterUsername`` 
    *   +   ``MasterUserPassword`` 
    *   +   ``PromotionTier`` 
    *   +   ``SourceDBInstanceIdentifier`` 
    *   +   ``SourceRegion`` 
    *   +  ``StorageEncrypted`` (for an unencrypted snapshot)
    *   +   ``Timezone`` 
    *   
    *   *Amazon Aurora* 
    *  Not applicable. Snapshot restore is managed by the DB cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#db_snapshot_identifier CcDBInstance#db_snapshot_identifier}
    */
    readonly dbSnapshotIdentifier?: string;
    /**
    * A DB subnet group to associate with the DB instance. If you update this value, the new subnet group must be a subnet group in a new VPC. 
    *  If you don't specify a DB subnet group, RDS uses the default DB subnet group if one exists. If a default DB subnet group does not exist, and you don't specify a ``DBSubnetGroupName``, the DB instance fails to launch. 
    *  For more information about using Amazon RDS in a VPC, see [Amazon VPC and Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.html) in the *Amazon RDS User Guide*. 
    *  This setting doesn't apply to Amazon Aurora DB instances. The DB subnet group is managed by the DB cluster. If specified, the setting must match the DB cluster setting.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#db_subnet_group_name CcDBInstance#db_subnet_group_name}
    */
    readonly dbSubnetGroupName?: string;
    /**
    * The Oracle system identifier (SID), which is the name of the Oracle database instance that manages your database files. In this context, the term "Oracle database instance" refers exclusively to the system global area (SGA) and Oracle background processes. If you don't specify a SID, the value defaults to ``RDSCDB``. The Oracle SID is also the name of your CDB.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#db_system_id CcDBInstance#db_system_id}
    */
    readonly dbSystemId?: string;
    /**
    * Indicates whether the DB instance has a dedicated log volume (DLV) enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#dedicated_log_volume CcDBInstance#dedicated_log_volume}
    */
    readonly dedicatedLogVolume?: boolean | cdktn.IResolvable;
    /**
    * A value that indicates whether to remove automated backups immediately after the DB instance is deleted. This parameter isn't case-sensitive. The default is to remove automated backups immediately after the DB instance is deleted.
    *   *Amazon Aurora* 
    *  Not applicable. When you delete a DB cluster, all automated backups for that DB cluster are deleted and can't be recovered. Manual DB cluster snapshots of the DB cluster are not deleted.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#delete_automated_backups CcDBInstance#delete_automated_backups}
    */
    readonly deleteAutomatedBackups?: boolean | cdktn.IResolvable;
    /**
    * Specifies whether the DB instance has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection isn't enabled. For more information, see [Deleting a DB Instance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_DeleteInstance.html).
    *  This setting doesn't apply to Amazon Aurora DB instances. You can enable or disable deletion protection for the DB cluster. For more information, see ``CreateDBCluster``. DB instances in a DB cluster can be deleted even when deletion protection is enabled for the DB cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#deletion_protection CcDBInstance#deletion_protection}
    */
    readonly deletionProtection?: boolean | cdktn.IResolvable;
    /**
    * The Active Directory directory ID to create the DB instance in. Currently, only Db2, MySQL, Microsoft SQL Server, Oracle, and PostgreSQL DB instances can be created in an Active Directory Domain.
    *  For more information, see [Kerberos Authentication](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/kerberos-authentication.html) in the *Amazon RDS User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#domain CcDBInstance#domain}
    */
    readonly domain?: string;
    /**
    * The ARN for the Secrets Manager secret with the credentials for the user joining the domain.
    *  Example: ``arn:aws:secretsmanager:region:account-number:secret:myselfmanagedADtestsecret-123456``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#domain_auth_secret_arn CcDBInstance#domain_auth_secret_arn}
    */
    readonly domainAuthSecretArn?: string;
    /**
    * The IPv4 DNS IP addresses of your primary and secondary Active Directory domain controllers.
    *  Constraints:
    *   +  Two IP addresses must be provided. If there isn't a secondary domain controller, use the IP address of the primary domain controller for both entries in the list.
    *   
    *  Example: ``123.124.125.126,234.235.236.237``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#domain_dns_ips CcDBInstance#domain_dns_ips}
    */
    readonly domainDnsIps?: string[];
    /**
    * The fully qualified domain name (FQDN) of an Active Directory domain.
    *  Constraints:
    *   +  Can't be longer than 64 characters.
    *   
    *  Example: ``mymanagedADtest.mymanagedAD.mydomain``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#domain_fqdn CcDBInstance#domain_fqdn}
    */
    readonly domainFqdn?: string;
    /**
    * The name of the IAM role to use when making API calls to the Directory Service.
    *  This setting doesn't apply to the following DB instances:
    *   +  Amazon Aurora (The domain is managed by the DB cluster.)
    *   +  RDS Custom
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#domain_iam_role_name CcDBInstance#domain_iam_role_name}
    */
    readonly domainIamRoleName?: string;
    /**
    * The Active Directory organizational unit for your DB instance to join.
    *  Constraints:
    *   +  Must be in the distinguished name format.
    *   +  Can't be longer than 64 characters.
    *   
    *  Example: ``OU=mymanagedADtestOU,DC=mymanagedADtest,DC=mymanagedAD,DC=mydomain``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#domain_ou CcDBInstance#domain_ou}
    */
    readonly domainOu?: string;
    /**
    * The list of log types that need to be enabled for exporting to CloudWatch Logs. The values in the list depend on the DB engine being used. For more information, see [Publishing Database Logs to Amazon CloudWatch Logs](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch) in the *Amazon Relational Database Service User Guide*.
    *   *Amazon Aurora* 
    *  Not applicable. CloudWatch Logs exports are managed by the DB cluster. 
    *   *Db2* 
    *  Valid values: ``diag.log``, ``notify.log``
    *   *MariaDB* 
    *  Valid values: ``audit``, ``error``, ``general``, ``slowquery``
    *   *Microsoft SQL Server* 
    *  Valid values: ``agent``, ``error``
    *   *MySQL* 
    *  Valid values: ``audit``, ``error``, ``general``, ``slowquery``
    *   *Oracle* 
    *  Valid values: ``alert``, ``audit``, ``listener``, ``trace``, ``oemagent``
    *   *PostgreSQL* 
    *  Valid values: ``postgresql``, ``upgrade``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#enable_cloudwatch_logs_exports CcDBInstance#enable_cloudwatch_logs_exports}
    */
    readonly enableCloudwatchLogsExports?: string[];
    /**
    * A value that indicates whether to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts. By default, mapping is disabled.
    *  This property is supported for RDS for MariaDB, RDS for MySQL, and RDS for PostgreSQL. For more information, see [IAM Database Authentication for MariaDB, MySQL, and PostgreSQL](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html) in the *Amazon RDS User Guide.*
    *   *Amazon Aurora* 
    *  Not applicable. Mapping AWS IAM accounts to database accounts is managed by the DB cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#enable_iam_database_authentication CcDBInstance#enable_iam_database_authentication}
    */
    readonly enableIamDatabaseAuthentication?: boolean | cdktn.IResolvable;
    /**
    * Specifies whether to enable Performance Insights for the DB instance. For more information, see [Using Amazon Performance Insights](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html) in the *Amazon RDS User Guide*.
    *  This setting doesn't apply to RDS Custom DB instances.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#enable_performance_insights CcDBInstance#enable_performance_insights}
    */
    readonly enablePerformanceInsights?: boolean | cdktn.IResolvable;
    /**
    * The name of the database engine to use for this DB instance. Not every database engine is available in every AWS Region.
    *  This property is required when creating a DB instance.
    *   You can convert an Oracle database from the non-CDB architecture to the container database (CDB) architecture by updating the ``Engine`` value in your templates from ``oracle-ee`` to ``oracle-ee-cdb`` or from ``oracle-se2`` to ``oracle-se2-cdb``. Converting to the CDB architecture requires an interruption.
    *   Valid Values:
    *   +  ``aurora-mysql`` (for Aurora MySQL DB instances)
    *   +  ``aurora-postgresql`` (for Aurora PostgreSQL DB instances)
    *   +  ``custom-oracle-ee`` (for RDS Custom for Oracle DB instances)
    *   +  ``custom-oracle-ee-cdb`` (for RDS Custom for Oracle DB instances)
    *   +  ``custom-sqlserver-ee`` (for RDS Custom for SQL Server DB instances)
    *   +  ``custom-sqlserver-se`` (for RDS Custom for SQL Server DB instances)
    *   +  ``custom-sqlserver-web`` (for RDS Custom for SQL Server DB instances)
    *   +   ``db2-ae`` 
    *   +   ``db2-se`` 
    *   +   ``mariadb`` 
    *   +   ``mysql`` 
    *   +   ``oracle-ee`` 
    *   +   ``oracle-ee-cdb`` 
    *   +   ``oracle-se2`` 
    *   +   ``oracle-se2-cdb`` 
    *   +   ``postgres`` 
    *   +   ``sqlserver-ee`` 
    *   +   ``sqlserver-se`` 
    *   +   ``sqlserver-ex`` 
    *   +   ``sqlserver-web``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#engine CcDBInstance#engine}
    */
    readonly engine?: string;
    /**
    * The lifecycle type for this DB instance.
    *   By default, this value is set to ``open-source-rds-extended-support``, which enrolls your DB instance into Amazon RDS Extended Support. At the end of standard support, you can avoid charges for Extended Support by setting the value to ``open-source-rds-extended-support-disabled``. In this case, creating the DB instance will fail if the DB major version is past its end of standard support date.
    *   This setting applies only to RDS for MySQL and RDS for PostgreSQL. For Amazon Aurora DB instances, the engine lifecycle support is managed by the DB cluster.
    *  You can use this setting to enroll your DB instance into Amazon RDS Extended Support. With RDS Extended Support, you can run the selected major engine version on your DB instance past the end of standard support for that engine version. For more information, see [Amazon RDS Extended Support with Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/extended-support.html) in the *Amazon RDS User Guide*.
    *  Valid Values: ``open-source-rds-extended-support | open-source-rds-extended-support-disabled``
    *  Default: ``open-source-rds-extended-support``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#engine_lifecycle_support CcDBInstance#engine_lifecycle_support}
    */
    readonly engineLifecycleSupport?: string;
    /**
    * The version number of the database engine to use.
    *  For a list of valid engine versions, use the ``DescribeDBEngineVersions`` action.
    *  The following are the database engines and links to information about the major and minor versions that are available with Amazon RDS. Not every database engine is available for every AWS Region.
    *   *Amazon Aurora* 
    *  Not applicable. The version number of the database engine to be used by the DB instance is managed by the DB cluster.
    *   *Db2* 
    *  See [Amazon RDS for Db2](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Db2.html#Db2.Concepts.VersionMgmt) in the *Amazon RDS User Guide.*
    *   *MariaDB* 
    *  See [MariaDB on Amazon RDS Versions](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_MariaDB.html#MariaDB.Concepts.VersionMgmt) in the *Amazon RDS User Guide.*
    *   *Microsoft SQL Server* 
    *  See [Microsoft SQL Server Versions on Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_SQLServer.html#SQLServer.Concepts.General.VersionSupport) in the *Amazon RDS User Guide.*
    *   *MySQL* 
    *  See [MySQL on Amazon RDS Versions](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_MySQL.html#MySQL.Concepts.VersionMgmt) in the *Amazon RDS User Guide.*
    *   *Oracle* 
    *  See [Oracle Database Engine Release Notes](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Appendix.Oracle.PatchComposition.html) in the *Amazon RDS User Guide.*
    *   *PostgreSQL* 
    *  See [Supported PostgreSQL Database Versions](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_PostgreSQL.html#PostgreSQL.Concepts.General.DBVersions) in the *Amazon RDS User Guide.*
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#engine_version CcDBInstance#engine_version}
    */
    readonly engineVersion?: string;
    /**
    * The number of I/O operations per second (IOPS) that the database provisions. The value must be equal to or greater than 1000. 
    *  If you specify this property, you must follow the range of allowed ratios of your requested IOPS rate to the amount of storage that you allocate (IOPS to allocated storage). For example, you can provision an Oracle database instance with 1000 IOPS and 200 GiB of storage (a ratio of 5:1), or specify 2000 IOPS with 200 GiB of storage (a ratio of 10:1). For more information, see [Amazon RDS Provisioned IOPS Storage to Improve Performance](https://docs.aws.amazon.com/AmazonRDS/latest/DeveloperGuide/CHAP_Storage.html#USER_PIOPS) in the *Amazon RDS User Guide*.
    *   If you specify ``io1`` for the ``StorageType`` property, then you must also specify the ``Iops`` property.
    *   Constraints:
    *   +  For RDS for Db2, MariaDB, MySQL, Oracle, and PostgreSQL - Must be a multiple between .5 and 50 of the storage amount for the DB instance.
    *   +  For RDS for SQL Server - Must be a multiple between 1 and 50 of the storage amount for the DB instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#iops CcDBInstance#iops}
    */
    readonly iops?: number;
    /**
    * The ARN of the AWS KMS key that's used to encrypt the DB instance, such as ``arn:aws:kms:us-east-1:012345678910:key/abcd1234-a123-456a-a12b-a123b4cd56ef``. If you enable the StorageEncrypted property but don't specify this property, AWS CloudFormation uses the default KMS key. If you specify this property, you must set the StorageEncrypted property to true. 
    *  If you specify the ``SourceDBInstanceIdentifier`` or ``SourceDbiResourceId`` property, don't specify this property. The value is inherited from the source DB instance, and if the DB instance is encrypted, the specified ``KmsKeyId`` property is used. However, if the source DB instance is in a different AWS Region, you must specify a KMS key ID.
    *  If you specify the ``SourceDBInstanceAutomatedBackupsArn`` property, don't specify this property. The value is inherited from the source DB instance automated backup, and if the automated backup is encrypted, the specified ``KmsKeyId`` property is used.
    *  If you create an encrypted read replica in a different AWS Region, then you must specify a KMS key for the destination AWS Region. KMS encryption keys are specific to the region that they're created in, and you can't use encryption keys from one region in another region.
    *  If you specify the ``DBSnapshotIdentifier`` property, don't specify this property. The ``StorageEncrypted`` property value is inherited from the snapshot. If the DB instance is encrypted, the specified ``KmsKeyId`` property is also inherited from the snapshot.
    *  If you specify ``DBSecurityGroups``, AWS CloudFormation ignores this property. To specify both a security group and this property, you must use a VPC security group. For more information about Amazon RDS and VPC, see [Using Amazon RDS with Amazon VPC](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.html) in the *Amazon RDS User Guide*.
    *   *Amazon Aurora* 
    *  Not applicable. The KMS key identifier is managed by the DB cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#kms_key_id CcDBInstance#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * License model information for this DB instance.
    *   Valid Values:
    *   +  Aurora MySQL - ``general-public-license``
    *   +  Aurora PostgreSQL - ``postgresql-license``
    *   +  RDS for Db2 - ``bring-your-own-license``. For more information about RDS for Db2 licensing, see [](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/db2-licensing.html) in the *Amazon RDS User Guide.*
    *   +  RDS for MariaDB - ``general-public-license``
    *   +  RDS for Microsoft SQL Server - ``license-included`` or ``bring-your-own-media``
    *   +  RDS for MySQL - ``general-public-license``
    *   +  RDS for Oracle - ``bring-your-own-license`` or ``license-included``
    *   +  RDS for PostgreSQL - ``postgresql-license``
    *   
    *   If you've specified ``DBSecurityGroups`` and then you update the license model, AWS CloudFormation replaces the underlying DB instance. This will incur some interruptions to database availability.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#license_model CcDBInstance#license_model}
    */
    readonly licenseModel?: string;
    /**
    * Specifies whether to manage the master user password with AWS Secrets Manager.
    *  For more information, see [Password management with Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html) in the *Amazon RDS User Guide.*
    *  Constraints:
    *   +  Can't manage the master user password with AWS Secrets Manager if ``MasterUserPassword`` is specified.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#manage_master_user_password CcDBInstance#manage_master_user_password}
    */
    readonly manageMasterUserPassword?: boolean | cdktn.IResolvable;
    /**
    * Specifies the authentication type for the master user. With IAM master user authentication, you can configure the master DB user with IAM database authentication when you create a DB instance.
    *  You can specify one of the following values:
    *   +  ``password`` - Use standard database authentication with a password.
    *   +  ``iam-db-auth`` - Use IAM database authentication for the master user.
    *   
    *  This option is only valid for RDS for MySQL, RDS for MariaDB, RDS for PostgreSQL, Aurora MySQL, and Aurora PostgreSQL engines.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#master_user_authentication_type CcDBInstance#master_user_authentication_type}
    */
    readonly masterUserAuthenticationType?: string;
    /**
    * The password for the master user. The password can include any printable ASCII character except "/", """, or "@".
    *   *Amazon Aurora* 
    *  Not applicable. The password for the master user is managed by the DB cluster.
    *   *RDS for Db2* 
    *  Must contain from 8 to 255 characters.
    *   *RDS for MariaDB* 
    *  Constraints: Must contain from 8 to 41 characters.
    *   *RDS for Microsoft SQL Server* 
    *  Constraints: Must contain from 8 to 128 characters.
    *   *RDS for MySQL* 
    *  Constraints: Must contain from 8 to 41 characters.
    *   *RDS for Oracle* 
    *  Constraints: Must contain from 8 to 30 characters.
    *   *RDS for PostgreSQL* 
    *  Constraints: Must contain from 8 to 128 characters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#master_user_password CcDBInstance#master_user_password}
    */
    readonly masterUserPassword?: string;
    /**
    * The secret managed by RDS in AWS Secrets Manager for the master user password.
    *  For more information, see [Password management with Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html) in the *Amazon RDS User Guide.*
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#master_user_secret CcDBInstance#master_user_secret}
    */
    readonly masterUserSecret?: CcDBInstance.MasterUserSecretProperty;
    /**
    * The master user name for the DB instance.
    *   If you specify the ``SourceDBInstanceIdentifier`` or ``DBSnapshotIdentifier`` property, don't specify this property. The value is inherited from the source DB instance or snapshot.
    *  When migrating a self-managed Db2 database, we recommend that you use the same master username as your self-managed Db2 instance name.
    *    *Amazon Aurora* 
    *  Not applicable. The name for the master user is managed by the DB cluster. 
    *   *RDS for Db2* 
    *  Constraints:
    *   +  Must be 1 to 16 letters or numbers.
    *   +  First character must be a letter.
    *   +  Can't be a reserved word for the chosen database engine.
    *   
    *   *RDS for MariaDB* 
    *  Constraints:
    *   +  Must be 1 to 16 letters or numbers.
    *   +  Can't be a reserved word for the chosen database engine.
    *   
    *   *RDS for Microsoft SQL Server* 
    *  Constraints:
    *   +  Must be 1 to 128 letters or numbers.
    *   +  First character must be a letter.
    *   +  Can't be a reserved word for the chosen database engine.
    *   
    *   *RDS for MySQL* 
    *  Constraints:
    *   +  Must be 1 to 16 letters or numbers.
    *   +  First character must be a letter.
    *   +  Can't be a reserved word for the chosen database engine.
    *   
    *   *RDS for Oracle* 
    *  Constraints:
    *   +  Must be 1 to 30 letters or numbers.
    *   +  First character must be a letter.
    *   +  Can't be a reserved word for the chosen database engine.
    *   
    *   *RDS for PostgreSQL* 
    *  Constraints:
    *   +  Must be 1 to 63 letters or numbers.
    *   +  First character must be a letter.
    *   +  Can't be a reserved word for the chosen database engine.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#master_username CcDBInstance#master_username}
    */
    readonly masterUsername?: string;
    /**
    * The upper limit in gibibytes (GiB) to which Amazon RDS can automatically scale the storage of the DB instance.
    *  For more information about this setting, including limitations that apply to it, see [Managing capacity automatically with Amazon RDS storage autoscaling](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIOPS.StorageTypes.html#USER_PIOPS.Autoscaling) in the *Amazon RDS User Guide*.
    *  This setting doesn't apply to the following DB instances:
    *   +  Amazon Aurora (Storage is managed by the DB cluster.)
    *   +  RDS Custom
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#max_allocated_storage CcDBInstance#max_allocated_storage}
    */
    readonly maxAllocatedStorage?: number;
    /**
    * The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance. To disable collection of Enhanced Monitoring metrics, specify ``0``.
    *  If ``MonitoringRoleArn`` is specified, then you must set ``MonitoringInterval`` to a value other than ``0``.
    *  This setting doesn't apply to RDS Custom DB instances.
    *  Valid Values: ``0 | 1 | 5 | 10 | 15 | 30 | 60``
    *  Default: ``0``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#monitoring_interval CcDBInstance#monitoring_interval}
    */
    readonly monitoringInterval?: number;
    /**
    * The ARN for the IAM role that permits RDS to send enhanced monitoring metrics to Amazon CloudWatch Logs. For example, ``arn:aws:iam:123456789012:role/emaccess``. For information on creating a monitoring role, see [Setting Up and Enabling Enhanced Monitoring](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.OS.html#USER_Monitoring.OS.Enabling) in the *Amazon RDS User Guide*.
    *  If ``MonitoringInterval`` is set to a value other than ``0``, then you must supply a ``MonitoringRoleArn`` value.
    *  This setting doesn't apply to RDS Custom DB instances.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#monitoring_role_arn CcDBInstance#monitoring_role_arn}
    */
    readonly monitoringRoleArn?: string;
    /**
    * Specifies whether the DB instance is a Multi-AZ deployment. You can't set the ``AvailabilityZone`` parameter if the DB instance is a Multi-AZ deployment.
    *  This setting doesn't apply to Amazon Aurora because the DB instance Availability Zones (AZs) are managed by the DB cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#multi_az CcDBInstance#multi_az}
    */
    readonly multiAz?: boolean | cdktn.IResolvable;
    /**
    * The name of the NCHAR character set for the Oracle DB instance.
    *  This setting doesn't apply to RDS Custom DB instances.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#nchar_character_set_name CcDBInstance#nchar_character_set_name}
    */
    readonly ncharCharacterSetName?: string;
    /**
    * The network type of the DB instance.
    *  Valid values:
    *   +   ``IPV4`` 
    *   +   ``DUAL`` 
    *   
    *  The network type is determined by the ``DBSubnetGroup`` specified for the DB instance. A ``DBSubnetGroup`` can support only the IPv4 protocol or the IPv4 and IPv6 protocols (``DUAL``).
    *  For more information, see [Working with a DB instance in a VPC](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.WorkingWithRDSInstanceinaVPC.html) in the *Amazon RDS User Guide.*
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#network_type CcDBInstance#network_type}
    */
    readonly networkType?: string;
    /**
    * Indicates that the DB instance should be associated with the specified option group.
    *  Permanent options, such as the TDE option for Oracle Advanced Security TDE, can't be removed from an option group. Also, that option group can't be removed from a DB instance once it is associated with a DB instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#option_group_name CcDBInstance#option_group_name}
    */
    readonly optionGroupName?: string;
    /**
    * The AWS KMS key identifier for encryption of Performance Insights data.
    *  The KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.
    *  If you do not specify a value for ``PerformanceInsightsKMSKeyId``, then Amazon RDS uses your default KMS key. There is a default KMS key for your AWS account. Your AWS account has a different default KMS key for each AWS Region.
    *   *Update behavior:* Once Performance Insights is enabled with a KMS key, you cannot change to a different physical KMS key without replacing the DB instance. However, the following updates do not require replacement:
    *   +  Enabling or disabling Performance Insights using the ``EnablePerformanceInsights`` property
    *   +  Changing between different identifier formats (key ARN, key ID, alias ARN, alias name) of the same physical KMS key
    *   +  Removing the ``PerformanceInsightsKMSKeyId`` property from your template
    *   
    *    *Drift behavior:* If you specify ``PerformanceInsightsKMSKeyId`` while ``EnablePerformanceInsights`` is set to ``false``, CloudFormation will report drift. This occurs because the RDS API does not allow setting a KMS key when Performance Insights is disabled. CloudFormation ignores the ``PerformanceInsightsKMSKeyId`` value during instance creation to avoid API errors, resulting in a mismatch between your template and the actual instance configuration.
    *  To avoid drift, omit both ``EnablePerformanceInsights`` and ``PerformanceInsightsKMSKeyId`` during initial instance creation, then set both properties together when you're ready to enable Performance Insights.
    *   For information about enabling Performance Insights, see [EnablePerformanceInsights](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-database-instance.html#cfn-rds-dbinstance-enableperformanceinsights).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#performance_insights_kms_key_id CcDBInstance#performance_insights_kms_key_id}
    */
    readonly performanceInsightsKmsKeyId?: string;
    /**
    * The number of days to retain Performance Insights data. When creating a DB instance without enabling Performance Insights, you can't specify the parameter ``PerformanceInsightsRetentionPeriod``.
    *  This setting doesn't apply to RDS Custom DB instances.
    *  Valid Values:
    *   +   ``7`` 
    *   +  *month* * 31, where *month* is a number of months from 1-23. Examples: ``93`` (3 months * 31), ``341`` (11 months * 31), ``589`` (19 months * 31)
    *   +   ``731`` 
    *   
    *  Default: ``7`` days
    *  If you specify a retention period that isn't valid, such as ``94``, Amazon RDS returns an error.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#performance_insights_retention_period CcDBInstance#performance_insights_retention_period}
    */
    readonly performanceInsightsRetentionPeriod?: number;
    /**
    * The port number on which the database accepts connections.
    *  This setting doesn't apply to Aurora DB instances. The port number is managed by the cluster.
    *  Valid Values: ``1150-65535``
    *  Default:
    *   +  RDS for Db2 - ``50000``
    *   +  RDS for MariaDB - ``3306``
    *   +  RDS for Microsoft SQL Server - ``1433``
    *   +  RDS for MySQL - ``3306``
    *   +  RDS for Oracle - ``1521``
    *   +  RDS for PostgreSQL - ``5432``
    *   
    *  Constraints:
    *   +  For RDS for Microsoft SQL Server, the value can't be ``1234``, ``1434``, ``3260``, ``3343``, ``3389``, ``47001``, or ``49152-49156``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#port CcDBInstance#port}
    */
    readonly port?: string;
    /**
    * The daily time range during which automated backups are created if automated backups are enabled, using the ``BackupRetentionPeriod`` parameter. For more information, see [Backup Window](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.html#USER_WorkingWithAutomatedBackups.BackupWindow) in the *Amazon RDS User Guide.*
    *  Constraints:
    *   +  Must be in the format ``hh24:mi-hh24:mi``.
    *   +  Must be in Universal Coordinated Time (UTC).
    *   +  Must not conflict with the preferred maintenance window.
    *   +  Must be at least 30 minutes.
    *   
    *   *Amazon Aurora* 
    *  Not applicable. The daily time range for creating automated backups is managed by the DB cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#preferred_backup_window CcDBInstance#preferred_backup_window}
    */
    readonly preferredBackupWindow?: string;
    /**
    * The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).
    *  Format: ``ddd:hh24:mi-ddd:hh24:mi``
    *  The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region, occurring on a random day of the week. To see the time blocks available, see [Maintaining a DB instance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Maintenance.html#AdjustingTheMaintenanceWindow) in the *Amazon RDS User Guide.*
    *   This property applies when AWS CloudFormation initially creates the DB instance. If you use AWS CloudFormation to update the DB instance, those updates are applied immediately.
    *   Constraints: Minimum 30-minute window.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#preferred_maintenance_window CcDBInstance#preferred_maintenance_window}
    */
    readonly preferredMaintenanceWindow?: string;
    /**
    * The number of CPU cores and the number of threads per core for the DB instance class of the DB instance.
    *  This setting doesn't apply to Amazon Aurora or RDS Custom DB instances.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#processor_features CcDBInstance#processor_features}
    */
    readonly processorFeatures?: CcDBInstance.ProcessorFeatureProperty[] | cdktn.IResolvable;
    /**
    * The order of priority in which an Aurora Replica is promoted to the primary instance after a failure of the existing primary instance. For more information, see [Fault Tolerance for an Aurora DB Cluster](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.AuroraHighAvailability.html#Aurora.Managing.FaultTolerance) in the *Amazon Aurora User Guide*.
    *  This setting doesn't apply to RDS Custom DB instances.
    *  Default: ``1``
    *  Valid Values: ``0 - 15``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#promotion_tier CcDBInstance#promotion_tier}
    */
    readonly promotionTier?: number;
    /**
    * Indicates whether the DB instance is an internet-facing instance. If you specify true, AWS CloudFormation creates an instance with a publicly resolvable DNS name, which resolves to a public IP address. If you specify false, AWS CloudFormation creates an internal instance with a DNS name that resolves to a private IP address. 
    *  The default behavior value depends on your VPC setup and the database subnet group. For more information, see the ``PubliclyAccessible`` parameter in the [CreateDBInstance](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBInstance.html) in the *Amazon RDS API Reference*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#publicly_accessible CcDBInstance#publicly_accessible}
    */
    readonly publiclyAccessible?: boolean | cdktn.IResolvable;
    /**
    * The open mode of an Oracle read replica. For more information, see [Working with Oracle Read Replicas for Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/oracle-read-replicas.html) in the *Amazon RDS User Guide*.
    *  This setting is only supported in RDS for Oracle.
    *  Default: ``open-read-only``
    *  Valid Values: ``open-read-only`` or ``mounted``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#replica_mode CcDBInstance#replica_mode}
    */
    readonly replicaMode?: string;
    /**
    * The date and time to restore from. This parameter applies to point-in-time recovery. For more information, see [Restoring a DB instance to a specified time](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIT.html) in the in the *Amazon RDS User Guide*.
    *  Constraints:
    *   +  Must be a time in Universal Coordinated Time (UTC) format.
    *   +  Must be before the latest restorable time for the DB instance.
    *   +  Can't be specified if the ``UseLatestRestorableTime`` parameter is enabled.
    *   
    *  Example: ``2009-09-07T23:45:00Z``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#restore_time CcDBInstance#restore_time}
    */
    readonly restoreTime?: string;
    /**
    * The identifier of the Multi-AZ DB cluster that will act as the source for the read replica. Each DB cluster can have up to 15 read replicas.
    *  Constraints:
    *   +  Must be the identifier of an existing Multi-AZ DB cluster.
    *   +  Can't be specified if the ``SourceDBInstanceIdentifier`` parameter is also specified.
    *   +  The specified DB cluster must have automatic backups enabled, that is, its backup retention period must be greater than 0.
    *   +  The source DB cluster must be in the same AWS-Region as the read replica. Cross-Region replication isn't supported.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#source_db_cluster_identifier CcDBInstance#source_db_cluster_identifier}
    */
    readonly sourceDbClusterIdentifier?: string;
    /**
    * The Amazon Resource Name (ARN) of the replicated automated backups from which to restore, for example, ``arn:aws:rds:us-east-1:123456789012:auto-backup:ab-L2IJCEXJP7XQ7HOJ4SIEXAMPLE``.
    *  This setting doesn't apply to RDS Custom.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#source_db_instance_automated_backups_arn CcDBInstance#source_db_instance_automated_backups_arn}
    */
    readonly sourceDbInstanceAutomatedBackupsArn?: string;
    /**
    * If you want to create a read replica DB instance, specify the ID of the source DB instance. Each DB instance can have a limited number of read replicas. For more information, see [Working with Read Replicas](https://docs.aws.amazon.com/AmazonRDS/latest/DeveloperGuide/USER_ReadRepl.html) in the *Amazon RDS User Guide*.
    *  For information about constraints that apply to DB instance identifiers, see [Naming constraints in Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Limits.html#RDS_Limits.Constraints) in the *Amazon RDS User Guide*.
    *  The ``SourceDBInstanceIdentifier`` property determines whether a DB instance is a read replica. If you remove the ``SourceDBInstanceIdentifier`` property from your template and then update your stack, AWS CloudFormation promotes the read replica to a standalone DB instance.
    *  If you specify the ``UseLatestRestorableTime`` or ``RestoreTime`` properties in conjunction with the ``SourceDBInstanceIdentifier`` property, RDS restores the DB instance to the requested point in time, thereby creating a new DB instance.
    *    +  If you specify a source DB instance that uses VPC security groups, we recommend that you specify the ``VPCSecurityGroups`` property. If you don't specify the property, the read replica inherits the value of the ``VPCSecurityGroups`` property from the source DB when you create the replica. However, if you update the stack, AWS CloudFormation reverts the replica's ``VPCSecurityGroups`` property to the default value because it's not defined in the stack's template. This change might cause unexpected issues.
    *   +  Read replicas don't support deletion policies. AWS CloudFormation ignores any deletion policy that's associated with a read replica.
    *   +  If you specify ``SourceDBInstanceIdentifier``, don't specify the ``DBSnapshotIdentifier`` property. You can't create a read replica from a snapshot.
    *   +  Don't set the ``BackupRetentionPeriod``, ``DBName``, ``MasterUsername``, ``MasterUserPassword``, and ``PreferredBackupWindow`` properties. The database attributes are inherited from the source DB instance, and backups are disabled for read replicas.
    *   +  If the source DB instance is in a different region than the read replica, specify the source region in ``SourceRegion``, and specify an ARN for a valid DB instance in ``SourceDBInstanceIdentifier``. For more information, see [Constructing a Amazon RDS Amazon Resource Name (ARN)](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html#USER_Tagging.ARN) in the *Amazon RDS User Guide*.
    *   +  For DB instances in Amazon Aurora clusters, don't specify this property. Amazon RDS automatically assigns writer and reader DB instances.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#source_db_instance_identifier CcDBInstance#source_db_instance_identifier}
    */
    readonly sourceDbInstanceIdentifier?: string;
    /**
    * The resource ID of the source DB instance from which to restore.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#source_dbi_resource_id CcDBInstance#source_dbi_resource_id}
    */
    readonly sourceDbiResourceId?: string;
    /**
    * The ID of the region that contains the source DB instance for the read replica.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#source_region CcDBInstance#source_region}
    */
    readonly sourceRegion?: string;
    /**
    * A value that indicates whether the DB instance is encrypted. By default, it isn't encrypted.
    *  If you specify the ``KmsKeyId`` property, then you must enable encryption.
    *  If you specify the ``SourceDBInstanceIdentifier`` or ``SourceDbiResourceId`` property, don't specify this property. The value is inherited from the source DB instance, and if the DB instance is encrypted, the specified ``KmsKeyId`` property is used.
    *  If you specify the ``SourceDBInstanceAutomatedBackupsArn`` property, don't specify this property. The value is inherited from the source DB instance automated backup. 
    *  If you specify ``DBSnapshotIdentifier`` property, don't specify this property. The value is inherited from the snapshot.
    *   *Amazon Aurora* 
    *  Not applicable. The encryption for DB instances is managed by the DB cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#storage_encrypted CcDBInstance#storage_encrypted}
    */
    readonly storageEncrypted?: boolean | cdktn.IResolvable;
    /**
    * Specifies the storage throughput value, in mebibyte per second (MiBps), for the DB instance. This setting applies only to the ``gp3`` storage type. 
    *  This setting doesn't apply to RDS Custom or Amazon Aurora.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#storage_throughput CcDBInstance#storage_throughput}
    */
    readonly storageThroughput?: number;
    /**
    * The storage type to associate with the DB instance.
    *  If you specify ``io1``, ``io2``, or ``gp3``, you must also include a value for the ``Iops`` parameter.
    *  This setting doesn't apply to Amazon Aurora DB instances. Storage is managed by the DB cluster.
    *  Valid Values: ``gp2 | gp3 | io1 | io2 | standard``
    *  Default: ``io1``, if the ``Iops`` parameter is specified. Otherwise, ``gp3``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#storage_type CcDBInstance#storage_type}
    */
    readonly storageType?: string;
    /**
    * Tags to assign to the DB instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#tags CcDBInstance#tags}
    */
    readonly tags?: CcDBInstance.TagProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#tde_credential_arn CcDBInstance#tde_credential_arn}
    */
    readonly tdeCredentialArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#tde_credential_password CcDBInstance#tde_credential_password}
    */
    readonly tdeCredentialPassword?: string;
    /**
    * The time zone of the DB instance. The time zone parameter is currently supported only by [RDS for Db2](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/db2-time-zone) and [RDS for SQL Server](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_SQLServer.html#SQLServer.Concepts.General.TimeZone).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#timezone CcDBInstance#timezone}
    */
    readonly timezone?: string;
    /**
    * Specifies whether the DB instance class of the DB instance uses its default processor features.
    *  This setting doesn't apply to RDS Custom DB instances.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#use_default_processor_features CcDBInstance#use_default_processor_features}
    */
    readonly useDefaultProcessorFeatures?: boolean | cdktn.IResolvable;
    /**
    * Specifies whether the DB instance is restored from the latest backup time. By default, the DB instance isn't restored from the latest backup time. This parameter applies to point-in-time recovery. For more information, see [Restoring a DB instance to a specified time](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIT.html) in the in the *Amazon RDS User Guide*.
    *  Constraints:
    *   +  Can't be specified if the ``RestoreTime`` parameter is provided.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#use_latest_restorable_time CcDBInstance#use_latest_restorable_time}
    */
    readonly useLatestRestorableTime?: boolean | cdktn.IResolvable;
    /**
    * A list of the VPC security group IDs to assign to the DB instance. The list can include both the physical IDs of existing VPC security groups and references to [AWS::EC2::SecurityGroup](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-security-group.html) resources created in the template.
    *  If you plan to update the resource, don't specify VPC security groups in a shared VPC.
    *   If you set ``VPCSecurityGroups``, you must not set [DBSecurityGroups](https://docs.aws.amazon.com//AWSCloudFormation/latest/UserGuide/aws-properties-rds-database-instance.html#cfn-rds-dbinstance-dbsecuritygroups), and vice versa.
    *   You can migrate a DB instance in your stack from an RDS DB security group to a VPC security group, but keep the following in mind:
    *   +  You can't revert to using an RDS security group after you establish a VPC security group membership.
    *   +  When you migrate your DB instance to VPC security groups, if your stack update rolls back because the DB instance update fails or because an update fails in another AWS CloudFormation resource, the rollback fails because it can't revert to an RDS security group.
    *   +  To use the properties that are available when you use a VPC security group, you must recreate the DB instance. If you don't, AWS CloudFormation submits only the property values that are listed in the [DBSecurityGroups](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-database-instance.html#cfn-rds-dbinstance-dbsecuritygroups) property.
    *   
    *   To avoid this situation, migrate your DB instance to using VPC security groups only when that is the only change in your stack template. 
    *   *Amazon Aurora* 
    *  Not applicable. The associated list of EC2 VPC security groups is managed by the DB cluster. If specified, the setting must match the DB cluster setting.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#vpc_security_groups CcDBInstance#vpc_security_groups}
    */
    readonly vpcSecurityGroups?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance awscc_rds_db_instance}
*/
export class CcDBInstance extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_rds_db_instance";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcDBInstance resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcDBInstance to import
    * @param importFromId The id of the existing CcDBInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcDBInstance to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_rds_db_instance", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance awscc_rds_db_instance} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcDBInstanceProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcDBInstanceProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_rds_db_instance',
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
        this._additionalStorageVolumes.internalValue = config.additionalStorageVolumes;
        this._allocatedStorage = config.allocatedStorage;
        this._allowMajorVersionUpgrade = config.allowMajorVersionUpgrade;
        this._applyImmediately = config.applyImmediately;
        this._associatedRoles.internalValue = config.associatedRoles;
        this._autoMinorVersionUpgrade = config.autoMinorVersionUpgrade;
        this._automaticBackupReplicationKmsKeyId = config.automaticBackupReplicationKmsKeyId;
        this._automaticBackupReplicationRegion = config.automaticBackupReplicationRegion;
        this._automaticBackupReplicationRetentionPeriod = config.automaticBackupReplicationRetentionPeriod;
        this._availabilityZone = config.availabilityZone;
        this._backupRetentionPeriod = config.backupRetentionPeriod;
        this._backupTarget = config.backupTarget;
        this._caCertificateIdentifier = config.caCertificateIdentifier;
        this._certificateRotationRestart = config.certificateRotationRestart;
        this._characterSetName = config.characterSetName;
        this._copyTagsToSnapshot = config.copyTagsToSnapshot;
        this._customIamInstanceProfile = config.customIamInstanceProfile;
        this._databaseInsightsMode = config.databaseInsightsMode;
        this._dbClusterIdentifier = config.dbClusterIdentifier;
        this._dbClusterSnapshotIdentifier = config.dbClusterSnapshotIdentifier;
        this._dbInstanceClass = config.dbInstanceClass;
        this._dbInstanceIdentifier = config.dbInstanceIdentifier;
        this._dbName = config.dbName;
        this._dbParameterGroupName = config.dbParameterGroupName;
        this._dbSecurityGroups = config.dbSecurityGroups;
        this._dbSnapshotIdentifier = config.dbSnapshotIdentifier;
        this._dbSubnetGroupName = config.dbSubnetGroupName;
        this._dbSystemId = config.dbSystemId;
        this._dedicatedLogVolume = config.dedicatedLogVolume;
        this._deleteAutomatedBackups = config.deleteAutomatedBackups;
        this._deletionProtection = config.deletionProtection;
        this._domain = config.domain;
        this._domainAuthSecretArn = config.domainAuthSecretArn;
        this._domainDnsIps = config.domainDnsIps;
        this._domainFqdn = config.domainFqdn;
        this._domainIamRoleName = config.domainIamRoleName;
        this._domainOu = config.domainOu;
        this._enableCloudwatchLogsExports = config.enableCloudwatchLogsExports;
        this._enableIamDatabaseAuthentication = config.enableIamDatabaseAuthentication;
        this._enablePerformanceInsights = config.enablePerformanceInsights;
        this._engine = config.engine;
        this._engineLifecycleSupport = config.engineLifecycleSupport;
        this._engineVersion = config.engineVersion;
        this._iops = config.iops;
        this._kmsKeyId = config.kmsKeyId;
        this._licenseModel = config.licenseModel;
        this._manageMasterUserPassword = config.manageMasterUserPassword;
        this._masterUserAuthenticationType = config.masterUserAuthenticationType;
        this._masterUserPassword = config.masterUserPassword;
        this._masterUserSecret.internalValue = config.masterUserSecret;
        this._masterUsername = config.masterUsername;
        this._maxAllocatedStorage = config.maxAllocatedStorage;
        this._monitoringInterval = config.monitoringInterval;
        this._monitoringRoleArn = config.monitoringRoleArn;
        this._multiAz = config.multiAz;
        this._ncharCharacterSetName = config.ncharCharacterSetName;
        this._networkType = config.networkType;
        this._optionGroupName = config.optionGroupName;
        this._performanceInsightsKmsKeyId = config.performanceInsightsKmsKeyId;
        this._performanceInsightsRetentionPeriod = config.performanceInsightsRetentionPeriod;
        this._port = config.port;
        this._preferredBackupWindow = config.preferredBackupWindow;
        this._preferredMaintenanceWindow = config.preferredMaintenanceWindow;
        this._processorFeatures.internalValue = config.processorFeatures;
        this._promotionTier = config.promotionTier;
        this._publiclyAccessible = config.publiclyAccessible;
        this._replicaMode = config.replicaMode;
        this._restoreTime = config.restoreTime;
        this._sourceDbClusterIdentifier = config.sourceDbClusterIdentifier;
        this._sourceDbInstanceAutomatedBackupsArn = config.sourceDbInstanceAutomatedBackupsArn;
        this._sourceDbInstanceIdentifier = config.sourceDbInstanceIdentifier;
        this._sourceDbiResourceId = config.sourceDbiResourceId;
        this._sourceRegion = config.sourceRegion;
        this._storageEncrypted = config.storageEncrypted;
        this._storageThroughput = config.storageThroughput;
        this._storageType = config.storageType;
        this._tags.internalValue = config.tags;
        this._tdeCredentialArn = config.tdeCredentialArn;
        this._tdeCredentialPassword = config.tdeCredentialPassword;
        this._timezone = config.timezone;
        this._useDefaultProcessorFeatures = config.useDefaultProcessorFeatures;
        this._useLatestRestorableTime = config.useLatestRestorableTime;
        this._vpcSecurityGroups = config.vpcSecurityGroups;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // additional_storage_volumes - computed: true, optional: true, required: false
    private _additionalStorageVolumes = new CcDBInstance.AdditionalStorageVolumePropertyList(this, "additional_storage_volumes", false);
    public get additionalStorageVolumes() {
        return this._additionalStorageVolumes;
    }
    public putAdditionalStorageVolumes(value: CcDBInstance.AdditionalStorageVolumeProperty[] | cdktn.IResolvable) {
        this._additionalStorageVolumes.internalValue = value;
    }
    public resetAdditionalStorageVolumes() {
        this._additionalStorageVolumes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get additionalStorageVolumesInput() {
        return this._additionalStorageVolumes.internalValue;
    }

    // allocated_storage - computed: true, optional: true, required: false
    private _allocatedStorage?: string; 
    public get allocatedStorage() {
        return this.getStringAttribute('allocated_storage');
    }
    public set allocatedStorage(value: string) {
        this._allocatedStorage = value;
    }
    public resetAllocatedStorage() {
        this._allocatedStorage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allocatedStorageInput() {
        return this._allocatedStorage;
    }

    // allow_major_version_upgrade - computed: true, optional: true, required: false
    private _allowMajorVersionUpgrade?: boolean | cdktn.IResolvable; 
    public get allowMajorVersionUpgrade() {
        return this.getBooleanAttribute('allow_major_version_upgrade');
    }
    public set allowMajorVersionUpgrade(value: boolean | cdktn.IResolvable) {
        this._allowMajorVersionUpgrade = value;
    }
    public resetAllowMajorVersionUpgrade() {
        this._allowMajorVersionUpgrade = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowMajorVersionUpgradeInput() {
        return this._allowMajorVersionUpgrade;
    }

    // apply_immediately - computed: true, optional: true, required: false
    private _applyImmediately?: boolean | cdktn.IResolvable; 
    public get applyImmediately() {
        return this.getBooleanAttribute('apply_immediately');
    }
    public set applyImmediately(value: boolean | cdktn.IResolvable) {
        this._applyImmediately = value;
    }
    public resetApplyImmediately() {
        this._applyImmediately = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get applyImmediatelyInput() {
        return this._applyImmediately;
    }

    // associated_roles - computed: true, optional: true, required: false
    private _associatedRoles = new CcDBInstance.DBInstanceRolePropertyList(this, "associated_roles", false);
    public get associatedRoles() {
        return this._associatedRoles;
    }
    public putAssociatedRoles(value: CcDBInstance.DBInstanceRoleProperty[] | cdktn.IResolvable) {
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

    // automatic_backup_replication_kms_key_id - computed: true, optional: true, required: false
    private _automaticBackupReplicationKmsKeyId?: string; 
    public get automaticBackupReplicationKmsKeyId() {
        return this.getStringAttribute('automatic_backup_replication_kms_key_id');
    }
    public set automaticBackupReplicationKmsKeyId(value: string) {
        this._automaticBackupReplicationKmsKeyId = value;
    }
    public resetAutomaticBackupReplicationKmsKeyId() {
        this._automaticBackupReplicationKmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get automaticBackupReplicationKmsKeyIdInput() {
        return this._automaticBackupReplicationKmsKeyId;
    }

    // automatic_backup_replication_region - computed: true, optional: true, required: false
    private _automaticBackupReplicationRegion?: string; 
    public get automaticBackupReplicationRegion() {
        return this.getStringAttribute('automatic_backup_replication_region');
    }
    public set automaticBackupReplicationRegion(value: string) {
        this._automaticBackupReplicationRegion = value;
    }
    public resetAutomaticBackupReplicationRegion() {
        this._automaticBackupReplicationRegion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get automaticBackupReplicationRegionInput() {
        return this._automaticBackupReplicationRegion;
    }

    // automatic_backup_replication_retention_period - computed: true, optional: true, required: false
    private _automaticBackupReplicationRetentionPeriod?: number; 
    public get automaticBackupReplicationRetentionPeriod() {
        return this.getNumberAttribute('automatic_backup_replication_retention_period');
    }
    public set automaticBackupReplicationRetentionPeriod(value: number) {
        this._automaticBackupReplicationRetentionPeriod = value;
    }
    public resetAutomaticBackupReplicationRetentionPeriod() {
        this._automaticBackupReplicationRetentionPeriod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get automaticBackupReplicationRetentionPeriodInput() {
        return this._automaticBackupReplicationRetentionPeriod;
    }

    // automatic_restart_time - computed: true, optional: false, required: false
    public get automaticRestartTime() {
        return this.getStringAttribute('automatic_restart_time');
    }

    // availability_zone - computed: true, optional: true, required: false
    private _availabilityZone?: string; 
    public get availabilityZone() {
        return this.getStringAttribute('availability_zone');
    }
    public set availabilityZone(value: string) {
        this._availabilityZone = value;
    }
    public resetAvailabilityZone() {
        this._availabilityZone = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get availabilityZoneInput() {
        return this._availabilityZone;
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

    // backup_target - computed: true, optional: true, required: false
    private _backupTarget?: string; 
    public get backupTarget() {
        return this.getStringAttribute('backup_target');
    }
    public set backupTarget(value: string) {
        this._backupTarget = value;
    }
    public resetBackupTarget() {
        this._backupTarget = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get backupTargetInput() {
        return this._backupTarget;
    }

    // ca_certificate_identifier - computed: true, optional: true, required: false
    private _caCertificateIdentifier?: string; 
    public get caCertificateIdentifier() {
        return this.getStringAttribute('ca_certificate_identifier');
    }
    public set caCertificateIdentifier(value: string) {
        this._caCertificateIdentifier = value;
    }
    public resetCaCertificateIdentifier() {
        this._caCertificateIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get caCertificateIdentifierInput() {
        return this._caCertificateIdentifier;
    }

    // certificate_details - computed: true, optional: false, required: false
    private _certificateDetails = new CcDBInstance.CertificateDetailsPropertyOutputReference(this, "certificate_details");
    public get certificateDetails() {
        return this._certificateDetails;
    }

    // certificate_rotation_restart - computed: true, optional: true, required: false
    private _certificateRotationRestart?: boolean | cdktn.IResolvable; 
    public get certificateRotationRestart() {
        return this.getBooleanAttribute('certificate_rotation_restart');
    }
    public set certificateRotationRestart(value: boolean | cdktn.IResolvable) {
        this._certificateRotationRestart = value;
    }
    public resetCertificateRotationRestart() {
        this._certificateRotationRestart = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateRotationRestartInput() {
        return this._certificateRotationRestart;
    }

    // character_set_name - computed: true, optional: true, required: false
    private _characterSetName?: string; 
    public get characterSetName() {
        return this.getStringAttribute('character_set_name');
    }
    public set characterSetName(value: string) {
        this._characterSetName = value;
    }
    public resetCharacterSetName() {
        this._characterSetName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get characterSetNameInput() {
        return this._characterSetName;
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

    // custom_iam_instance_profile - computed: true, optional: true, required: false
    private _customIamInstanceProfile?: string; 
    public get customIamInstanceProfile() {
        return this.getStringAttribute('custom_iam_instance_profile');
    }
    public set customIamInstanceProfile(value: string) {
        this._customIamInstanceProfile = value;
    }
    public resetCustomIamInstanceProfile() {
        this._customIamInstanceProfile = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customIamInstanceProfileInput() {
        return this._customIamInstanceProfile;
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

    // db_cluster_snapshot_identifier - computed: true, optional: true, required: false
    private _dbClusterSnapshotIdentifier?: string; 
    public get dbClusterSnapshotIdentifier() {
        return this.getStringAttribute('db_cluster_snapshot_identifier');
    }
    public set dbClusterSnapshotIdentifier(value: string) {
        this._dbClusterSnapshotIdentifier = value;
    }
    public resetDbClusterSnapshotIdentifier() {
        this._dbClusterSnapshotIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dbClusterSnapshotIdentifierInput() {
        return this._dbClusterSnapshotIdentifier;
    }

    // db_instance_arn - computed: true, optional: false, required: false
    public get dbInstanceArn() {
        return this.getStringAttribute('db_instance_arn');
    }

    // db_instance_class - computed: true, optional: true, required: false
    private _dbInstanceClass?: string; 
    public get dbInstanceClass() {
        return this.getStringAttribute('db_instance_class');
    }
    public set dbInstanceClass(value: string) {
        this._dbInstanceClass = value;
    }
    public resetDbInstanceClass() {
        this._dbInstanceClass = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dbInstanceClassInput() {
        return this._dbInstanceClass;
    }

    // db_instance_identifier - computed: true, optional: true, required: false
    private _dbInstanceIdentifier?: string; 
    public get dbInstanceIdentifier() {
        return this.getStringAttribute('db_instance_identifier');
    }
    public set dbInstanceIdentifier(value: string) {
        this._dbInstanceIdentifier = value;
    }
    public resetDbInstanceIdentifier() {
        this._dbInstanceIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dbInstanceIdentifierInput() {
        return this._dbInstanceIdentifier;
    }

    // db_instance_status - computed: true, optional: false, required: false
    public get dbInstanceStatus() {
        return this.getStringAttribute('db_instance_status');
    }

    // db_name - computed: true, optional: true, required: false
    private _dbName?: string; 
    public get dbName() {
        return this.getStringAttribute('db_name');
    }
    public set dbName(value: string) {
        this._dbName = value;
    }
    public resetDbName() {
        this._dbName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dbNameInput() {
        return this._dbName;
    }

    // db_parameter_group_name - computed: true, optional: true, required: false
    private _dbParameterGroupName?: string; 
    public get dbParameterGroupName() {
        return this.getStringAttribute('db_parameter_group_name');
    }
    public set dbParameterGroupName(value: string) {
        this._dbParameterGroupName = value;
    }
    public resetDbParameterGroupName() {
        this._dbParameterGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dbParameterGroupNameInput() {
        return this._dbParameterGroupName;
    }

    // db_security_groups - computed: true, optional: true, required: false
    private _dbSecurityGroups?: string[]; 
    public get dbSecurityGroups() {
        return this.getListAttribute('db_security_groups');
    }
    public set dbSecurityGroups(value: string[]) {
        this._dbSecurityGroups = value;
    }
    public resetDbSecurityGroups() {
        this._dbSecurityGroups = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dbSecurityGroupsInput() {
        return this._dbSecurityGroups;
    }

    // db_snapshot_identifier - computed: true, optional: true, required: false
    private _dbSnapshotIdentifier?: string; 
    public get dbSnapshotIdentifier() {
        return this.getStringAttribute('db_snapshot_identifier');
    }
    public set dbSnapshotIdentifier(value: string) {
        this._dbSnapshotIdentifier = value;
    }
    public resetDbSnapshotIdentifier() {
        this._dbSnapshotIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dbSnapshotIdentifierInput() {
        return this._dbSnapshotIdentifier;
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

    // dbi_resource_id - computed: true, optional: false, required: false
    public get dbiResourceId() {
        return this.getStringAttribute('dbi_resource_id');
    }

    // dedicated_log_volume - computed: true, optional: true, required: false
    private _dedicatedLogVolume?: boolean | cdktn.IResolvable; 
    public get dedicatedLogVolume() {
        return this.getBooleanAttribute('dedicated_log_volume');
    }
    public set dedicatedLogVolume(value: boolean | cdktn.IResolvable) {
        this._dedicatedLogVolume = value;
    }
    public resetDedicatedLogVolume() {
        this._dedicatedLogVolume = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dedicatedLogVolumeInput() {
        return this._dedicatedLogVolume;
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

    // domain_auth_secret_arn - computed: true, optional: true, required: false
    private _domainAuthSecretArn?: string; 
    public get domainAuthSecretArn() {
        return this.getStringAttribute('domain_auth_secret_arn');
    }
    public set domainAuthSecretArn(value: string) {
        this._domainAuthSecretArn = value;
    }
    public resetDomainAuthSecretArn() {
        this._domainAuthSecretArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get domainAuthSecretArnInput() {
        return this._domainAuthSecretArn;
    }

    // domain_dns_ips - computed: true, optional: true, required: false
    private _domainDnsIps?: string[]; 
    public get domainDnsIps() {
        return this.getListAttribute('domain_dns_ips');
    }
    public set domainDnsIps(value: string[]) {
        this._domainDnsIps = value;
    }
    public resetDomainDnsIps() {
        this._domainDnsIps = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get domainDnsIpsInput() {
        return this._domainDnsIps;
    }

    // domain_fqdn - computed: true, optional: true, required: false
    private _domainFqdn?: string; 
    public get domainFqdn() {
        return this.getStringAttribute('domain_fqdn');
    }
    public set domainFqdn(value: string) {
        this._domainFqdn = value;
    }
    public resetDomainFqdn() {
        this._domainFqdn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get domainFqdnInput() {
        return this._domainFqdn;
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

    // domain_ou - computed: true, optional: true, required: false
    private _domainOu?: string; 
    public get domainOu() {
        return this.getStringAttribute('domain_ou');
    }
    public set domainOu(value: string) {
        this._domainOu = value;
    }
    public resetDomainOu() {
        this._domainOu = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get domainOuInput() {
        return this._domainOu;
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

    // enable_performance_insights - computed: true, optional: true, required: false
    private _enablePerformanceInsights?: boolean | cdktn.IResolvable; 
    public get enablePerformanceInsights() {
        return this.getBooleanAttribute('enable_performance_insights');
    }
    public set enablePerformanceInsights(value: boolean | cdktn.IResolvable) {
        this._enablePerformanceInsights = value;
    }
    public resetEnablePerformanceInsights() {
        this._enablePerformanceInsights = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enablePerformanceInsightsInput() {
        return this._enablePerformanceInsights;
    }

    // endpoint - computed: true, optional: false, required: false
    private _endpoint = new CcDBInstance.EndpointPropertyOutputReference(this, "endpoint");
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

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // instance_create_time - computed: true, optional: false, required: false
    public get instanceCreateTime() {
        return this.getStringAttribute('instance_create_time');
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

    // is_storage_config_upgrade_available - computed: true, optional: false, required: false
    public get isStorageConfigUpgradeAvailable() {
        return this.getBooleanAttribute('is_storage_config_upgrade_available');
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

    // latest_restorable_time - computed: true, optional: false, required: false
    public get latestRestorableTime() {
        return this.getStringAttribute('latest_restorable_time');
    }

    // license_model - computed: true, optional: true, required: false
    private _licenseModel?: string; 
    public get licenseModel() {
        return this.getStringAttribute('license_model');
    }
    public set licenseModel(value: string) {
        this._licenseModel = value;
    }
    public resetLicenseModel() {
        this._licenseModel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get licenseModelInput() {
        return this._licenseModel;
    }

    // listener_endpoint - computed: true, optional: false, required: false
    private _listenerEndpoint = new CcDBInstance.ListenerEndpointPropertyOutputReference(this, "listener_endpoint");
    public get listenerEndpoint() {
        return this._listenerEndpoint;
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
    private _masterUserSecret = new CcDBInstance.MasterUserSecretPropertyOutputReference(this, "master_user_secret");
    public get masterUserSecret() {
        return this._masterUserSecret;
    }
    public putMasterUserSecret(value: CcDBInstance.MasterUserSecretProperty) {
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

    // max_allocated_storage - computed: true, optional: true, required: false
    private _maxAllocatedStorage?: number; 
    public get maxAllocatedStorage() {
        return this.getNumberAttribute('max_allocated_storage');
    }
    public set maxAllocatedStorage(value: number) {
        this._maxAllocatedStorage = value;
    }
    public resetMaxAllocatedStorage() {
        this._maxAllocatedStorage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxAllocatedStorageInput() {
        return this._maxAllocatedStorage;
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

    // multi_az - computed: true, optional: true, required: false
    private _multiAz?: boolean | cdktn.IResolvable; 
    public get multiAz() {
        return this.getBooleanAttribute('multi_az');
    }
    public set multiAz(value: boolean | cdktn.IResolvable) {
        this._multiAz = value;
    }
    public resetMultiAz() {
        this._multiAz = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get multiAzInput() {
        return this._multiAz;
    }

    // nchar_character_set_name - computed: true, optional: true, required: false
    private _ncharCharacterSetName?: string; 
    public get ncharCharacterSetName() {
        return this.getStringAttribute('nchar_character_set_name');
    }
    public set ncharCharacterSetName(value: string) {
        this._ncharCharacterSetName = value;
    }
    public resetNcharCharacterSetName() {
        this._ncharCharacterSetName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ncharCharacterSetNameInput() {
        return this._ncharCharacterSetName;
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

    // option_group_name - computed: true, optional: true, required: false
    private _optionGroupName?: string; 
    public get optionGroupName() {
        return this.getStringAttribute('option_group_name');
    }
    public set optionGroupName(value: string) {
        this._optionGroupName = value;
    }
    public resetOptionGroupName() {
        this._optionGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get optionGroupNameInput() {
        return this._optionGroupName;
    }

    // percent_progress - computed: true, optional: false, required: false
    public get percentProgress() {
        return this.getStringAttribute('percent_progress');
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
    private _port?: string; 
    public get port() {
        return this.getStringAttribute('port');
    }
    public set port(value: string) {
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

    // processor_features - computed: true, optional: true, required: false
    private _processorFeatures = new CcDBInstance.ProcessorFeaturePropertyList(this, "processor_features", false);
    public get processorFeatures() {
        return this._processorFeatures;
    }
    public putProcessorFeatures(value: CcDBInstance.ProcessorFeatureProperty[] | cdktn.IResolvable) {
        this._processorFeatures.internalValue = value;
    }
    public resetProcessorFeatures() {
        this._processorFeatures.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get processorFeaturesInput() {
        return this._processorFeatures.internalValue;
    }

    // promotion_tier - computed: true, optional: true, required: false
    private _promotionTier?: number; 
    public get promotionTier() {
        return this.getNumberAttribute('promotion_tier');
    }
    public set promotionTier(value: number) {
        this._promotionTier = value;
    }
    public resetPromotionTier() {
        this._promotionTier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get promotionTierInput() {
        return this._promotionTier;
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

    // read_replica_db_cluster_identifiers - computed: true, optional: false, required: false
    public get readReplicaDbClusterIdentifiers() {
        return this.getListAttribute('read_replica_db_cluster_identifiers');
    }

    // read_replica_db_instance_identifiers - computed: true, optional: false, required: false
    public get readReplicaDbInstanceIdentifiers() {
        return this.getListAttribute('read_replica_db_instance_identifiers');
    }

    // replica_mode - computed: true, optional: true, required: false
    private _replicaMode?: string; 
    public get replicaMode() {
        return this.getStringAttribute('replica_mode');
    }
    public set replicaMode(value: string) {
        this._replicaMode = value;
    }
    public resetReplicaMode() {
        this._replicaMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get replicaModeInput() {
        return this._replicaMode;
    }

    // restore_time - computed: true, optional: true, required: false
    private _restoreTime?: string; 
    public get restoreTime() {
        return this.getStringAttribute('restore_time');
    }
    public set restoreTime(value: string) {
        this._restoreTime = value;
    }
    public resetRestoreTime() {
        this._restoreTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get restoreTimeInput() {
        return this._restoreTime;
    }

    // resume_full_automation_mode_time - computed: true, optional: false, required: false
    public get resumeFullAutomationModeTime() {
        return this.getStringAttribute('resume_full_automation_mode_time');
    }

    // secondary_availability_zone - computed: true, optional: false, required: false
    public get secondaryAvailabilityZone() {
        return this.getStringAttribute('secondary_availability_zone');
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

    // source_db_instance_automated_backups_arn - computed: true, optional: true, required: false
    private _sourceDbInstanceAutomatedBackupsArn?: string; 
    public get sourceDbInstanceAutomatedBackupsArn() {
        return this.getStringAttribute('source_db_instance_automated_backups_arn');
    }
    public set sourceDbInstanceAutomatedBackupsArn(value: string) {
        this._sourceDbInstanceAutomatedBackupsArn = value;
    }
    public resetSourceDbInstanceAutomatedBackupsArn() {
        this._sourceDbInstanceAutomatedBackupsArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceDbInstanceAutomatedBackupsArnInput() {
        return this._sourceDbInstanceAutomatedBackupsArn;
    }

    // source_db_instance_identifier - computed: true, optional: true, required: false
    private _sourceDbInstanceIdentifier?: string; 
    public get sourceDbInstanceIdentifier() {
        return this.getStringAttribute('source_db_instance_identifier');
    }
    public set sourceDbInstanceIdentifier(value: string) {
        this._sourceDbInstanceIdentifier = value;
    }
    public resetSourceDbInstanceIdentifier() {
        this._sourceDbInstanceIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceDbInstanceIdentifierInput() {
        return this._sourceDbInstanceIdentifier;
    }

    // source_dbi_resource_id - computed: true, optional: true, required: false
    private _sourceDbiResourceId?: string; 
    public get sourceDbiResourceId() {
        return this.getStringAttribute('source_dbi_resource_id');
    }
    public set sourceDbiResourceId(value: string) {
        this._sourceDbiResourceId = value;
    }
    public resetSourceDbiResourceId() {
        this._sourceDbiResourceId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceDbiResourceIdInput() {
        return this._sourceDbiResourceId;
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

    // status_infos - computed: true, optional: false, required: false
    private _statusInfos = new CcDBInstance.StatusInfosPropertyList(this, "status_infos", false);
    public get statusInfos() {
        return this._statusInfos;
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

    // storage_throughput - computed: true, optional: true, required: false
    private _storageThroughput?: number; 
    public get storageThroughput() {
        return this.getNumberAttribute('storage_throughput');
    }
    public set storageThroughput(value: number) {
        this._storageThroughput = value;
    }
    public resetStorageThroughput() {
        this._storageThroughput = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get storageThroughputInput() {
        return this._storageThroughput;
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
    private _tags = new CcDBInstance.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcDBInstance.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // tde_credential_arn - computed: true, optional: true, required: false
    private _tdeCredentialArn?: string; 
    public get tdeCredentialArn() {
        return this.getStringAttribute('tde_credential_arn');
    }
    public set tdeCredentialArn(value: string) {
        this._tdeCredentialArn = value;
    }
    public resetTdeCredentialArn() {
        this._tdeCredentialArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tdeCredentialArnInput() {
        return this._tdeCredentialArn;
    }

    // tde_credential_password - computed: true, optional: true, required: false
    private _tdeCredentialPassword?: string; 
    public get tdeCredentialPassword() {
        return this.getStringAttribute('tde_credential_password');
    }
    public set tdeCredentialPassword(value: string) {
        this._tdeCredentialPassword = value;
    }
    public resetTdeCredentialPassword() {
        this._tdeCredentialPassword = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tdeCredentialPasswordInput() {
        return this._tdeCredentialPassword;
    }

    // timezone - computed: true, optional: true, required: false
    private _timezone?: string; 
    public get timezone() {
        return this.getStringAttribute('timezone');
    }
    public set timezone(value: string) {
        this._timezone = value;
    }
    public resetTimezone() {
        this._timezone = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timezoneInput() {
        return this._timezone;
    }

    // use_default_processor_features - computed: true, optional: true, required: false
    private _useDefaultProcessorFeatures?: boolean | cdktn.IResolvable; 
    public get useDefaultProcessorFeatures() {
        return this.getBooleanAttribute('use_default_processor_features');
    }
    public set useDefaultProcessorFeatures(value: boolean | cdktn.IResolvable) {
        this._useDefaultProcessorFeatures = value;
    }
    public resetUseDefaultProcessorFeatures() {
        this._useDefaultProcessorFeatures = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useDefaultProcessorFeaturesInput() {
        return this._useDefaultProcessorFeatures;
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

    // vpc_security_groups - computed: true, optional: true, required: false
    private _vpcSecurityGroups?: string[]; 
    public get vpcSecurityGroups() {
        return this.getListAttribute('vpc_security_groups');
    }
    public set vpcSecurityGroups(value: string[]) {
        this._vpcSecurityGroups = value;
    }
    public resetVpcSecurityGroups() {
        this._vpcSecurityGroups = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcSecurityGroupsInput() {
        return this._vpcSecurityGroups;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            additional_storage_volumes: cdktn.listMapper(ccDBInstanceAdditionalStorageVolumePropertyToTerraform, false)(this._additionalStorageVolumes.internalValue),
            allocated_storage: cdktn.stringToTerraform(this._allocatedStorage),
            allow_major_version_upgrade: cdktn.booleanToTerraform(this._allowMajorVersionUpgrade),
            apply_immediately: cdktn.booleanToTerraform(this._applyImmediately),
            associated_roles: cdktn.listMapper(ccDBInstanceDBInstanceRolePropertyToTerraform, false)(this._associatedRoles.internalValue),
            auto_minor_version_upgrade: cdktn.booleanToTerraform(this._autoMinorVersionUpgrade),
            automatic_backup_replication_kms_key_id: cdktn.stringToTerraform(this._automaticBackupReplicationKmsKeyId),
            automatic_backup_replication_region: cdktn.stringToTerraform(this._automaticBackupReplicationRegion),
            automatic_backup_replication_retention_period: cdktn.numberToTerraform(this._automaticBackupReplicationRetentionPeriod),
            availability_zone: cdktn.stringToTerraform(this._availabilityZone),
            backup_retention_period: cdktn.numberToTerraform(this._backupRetentionPeriod),
            backup_target: cdktn.stringToTerraform(this._backupTarget),
            ca_certificate_identifier: cdktn.stringToTerraform(this._caCertificateIdentifier),
            certificate_rotation_restart: cdktn.booleanToTerraform(this._certificateRotationRestart),
            character_set_name: cdktn.stringToTerraform(this._characterSetName),
            copy_tags_to_snapshot: cdktn.booleanToTerraform(this._copyTagsToSnapshot),
            custom_iam_instance_profile: cdktn.stringToTerraform(this._customIamInstanceProfile),
            database_insights_mode: cdktn.stringToTerraform(this._databaseInsightsMode),
            db_cluster_identifier: cdktn.stringToTerraform(this._dbClusterIdentifier),
            db_cluster_snapshot_identifier: cdktn.stringToTerraform(this._dbClusterSnapshotIdentifier),
            db_instance_class: cdktn.stringToTerraform(this._dbInstanceClass),
            db_instance_identifier: cdktn.stringToTerraform(this._dbInstanceIdentifier),
            db_name: cdktn.stringToTerraform(this._dbName),
            db_parameter_group_name: cdktn.stringToTerraform(this._dbParameterGroupName),
            db_security_groups: cdktn.listMapper(cdktn.stringToTerraform, false)(this._dbSecurityGroups),
            db_snapshot_identifier: cdktn.stringToTerraform(this._dbSnapshotIdentifier),
            db_subnet_group_name: cdktn.stringToTerraform(this._dbSubnetGroupName),
            db_system_id: cdktn.stringToTerraform(this._dbSystemId),
            dedicated_log_volume: cdktn.booleanToTerraform(this._dedicatedLogVolume),
            delete_automated_backups: cdktn.booleanToTerraform(this._deleteAutomatedBackups),
            deletion_protection: cdktn.booleanToTerraform(this._deletionProtection),
            domain: cdktn.stringToTerraform(this._domain),
            domain_auth_secret_arn: cdktn.stringToTerraform(this._domainAuthSecretArn),
            domain_dns_ips: cdktn.listMapper(cdktn.stringToTerraform, false)(this._domainDnsIps),
            domain_fqdn: cdktn.stringToTerraform(this._domainFqdn),
            domain_iam_role_name: cdktn.stringToTerraform(this._domainIamRoleName),
            domain_ou: cdktn.stringToTerraform(this._domainOu),
            enable_cloudwatch_logs_exports: cdktn.listMapper(cdktn.stringToTerraform, false)(this._enableCloudwatchLogsExports),
            enable_iam_database_authentication: cdktn.booleanToTerraform(this._enableIamDatabaseAuthentication),
            enable_performance_insights: cdktn.booleanToTerraform(this._enablePerformanceInsights),
            engine: cdktn.stringToTerraform(this._engine),
            engine_lifecycle_support: cdktn.stringToTerraform(this._engineLifecycleSupport),
            engine_version: cdktn.stringToTerraform(this._engineVersion),
            iops: cdktn.numberToTerraform(this._iops),
            kms_key_id: cdktn.stringToTerraform(this._kmsKeyId),
            license_model: cdktn.stringToTerraform(this._licenseModel),
            manage_master_user_password: cdktn.booleanToTerraform(this._manageMasterUserPassword),
            master_user_authentication_type: cdktn.stringToTerraform(this._masterUserAuthenticationType),
            master_user_password: cdktn.stringToTerraform(this._masterUserPassword),
            master_user_secret: ccDBInstanceMasterUserSecretPropertyToTerraform(this._masterUserSecret.internalValue),
            master_username: cdktn.stringToTerraform(this._masterUsername),
            max_allocated_storage: cdktn.numberToTerraform(this._maxAllocatedStorage),
            monitoring_interval: cdktn.numberToTerraform(this._monitoringInterval),
            monitoring_role_arn: cdktn.stringToTerraform(this._monitoringRoleArn),
            multi_az: cdktn.booleanToTerraform(this._multiAz),
            nchar_character_set_name: cdktn.stringToTerraform(this._ncharCharacterSetName),
            network_type: cdktn.stringToTerraform(this._networkType),
            option_group_name: cdktn.stringToTerraform(this._optionGroupName),
            performance_insights_kms_key_id: cdktn.stringToTerraform(this._performanceInsightsKmsKeyId),
            performance_insights_retention_period: cdktn.numberToTerraform(this._performanceInsightsRetentionPeriod),
            port: cdktn.stringToTerraform(this._port),
            preferred_backup_window: cdktn.stringToTerraform(this._preferredBackupWindow),
            preferred_maintenance_window: cdktn.stringToTerraform(this._preferredMaintenanceWindow),
            processor_features: cdktn.listMapper(ccDBInstanceProcessorFeaturePropertyToTerraform, false)(this._processorFeatures.internalValue),
            promotion_tier: cdktn.numberToTerraform(this._promotionTier),
            publicly_accessible: cdktn.booleanToTerraform(this._publiclyAccessible),
            replica_mode: cdktn.stringToTerraform(this._replicaMode),
            restore_time: cdktn.stringToTerraform(this._restoreTime),
            source_db_cluster_identifier: cdktn.stringToTerraform(this._sourceDbClusterIdentifier),
            source_db_instance_automated_backups_arn: cdktn.stringToTerraform(this._sourceDbInstanceAutomatedBackupsArn),
            source_db_instance_identifier: cdktn.stringToTerraform(this._sourceDbInstanceIdentifier),
            source_dbi_resource_id: cdktn.stringToTerraform(this._sourceDbiResourceId),
            source_region: cdktn.stringToTerraform(this._sourceRegion),
            storage_encrypted: cdktn.booleanToTerraform(this._storageEncrypted),
            storage_throughput: cdktn.numberToTerraform(this._storageThroughput),
            storage_type: cdktn.stringToTerraform(this._storageType),
            tags: cdktn.listMapper(ccDBInstanceTagPropertyToTerraform, false)(this._tags.internalValue),
            tde_credential_arn: cdktn.stringToTerraform(this._tdeCredentialArn),
            tde_credential_password: cdktn.stringToTerraform(this._tdeCredentialPassword),
            timezone: cdktn.stringToTerraform(this._timezone),
            use_default_processor_features: cdktn.booleanToTerraform(this._useDefaultProcessorFeatures),
            use_latest_restorable_time: cdktn.booleanToTerraform(this._useLatestRestorableTime),
            vpc_security_groups: cdktn.listMapper(cdktn.stringToTerraform, false)(this._vpcSecurityGroups),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            additional_storage_volumes: {
                value: cdktn.listMapperHcl(ccDBInstanceAdditionalStorageVolumePropertyToHclTerraform, false)(this._additionalStorageVolumes.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcDBInstance.AdditionalStorageVolumePropertyList",
            },
            allocated_storage: {
                value: cdktn.stringToHclTerraform(this._allocatedStorage),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            allow_major_version_upgrade: {
                value: cdktn.booleanToHclTerraform(this._allowMajorVersionUpgrade),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            apply_immediately: {
                value: cdktn.booleanToHclTerraform(this._applyImmediately),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            associated_roles: {
                value: cdktn.listMapperHcl(ccDBInstanceDBInstanceRolePropertyToHclTerraform, false)(this._associatedRoles.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcDBInstance.DBInstanceRolePropertyList",
            },
            auto_minor_version_upgrade: {
                value: cdktn.booleanToHclTerraform(this._autoMinorVersionUpgrade),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            automatic_backup_replication_kms_key_id: {
                value: cdktn.stringToHclTerraform(this._automaticBackupReplicationKmsKeyId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            automatic_backup_replication_region: {
                value: cdktn.stringToHclTerraform(this._automaticBackupReplicationRegion),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            automatic_backup_replication_retention_period: {
                value: cdktn.numberToHclTerraform(this._automaticBackupReplicationRetentionPeriod),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            availability_zone: {
                value: cdktn.stringToHclTerraform(this._availabilityZone),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            backup_retention_period: {
                value: cdktn.numberToHclTerraform(this._backupRetentionPeriod),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            backup_target: {
                value: cdktn.stringToHclTerraform(this._backupTarget),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ca_certificate_identifier: {
                value: cdktn.stringToHclTerraform(this._caCertificateIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            certificate_rotation_restart: {
                value: cdktn.booleanToHclTerraform(this._certificateRotationRestart),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            character_set_name: {
                value: cdktn.stringToHclTerraform(this._characterSetName),
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
            custom_iam_instance_profile: {
                value: cdktn.stringToHclTerraform(this._customIamInstanceProfile),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            database_insights_mode: {
                value: cdktn.stringToHclTerraform(this._databaseInsightsMode),
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
            db_cluster_snapshot_identifier: {
                value: cdktn.stringToHclTerraform(this._dbClusterSnapshotIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            db_instance_class: {
                value: cdktn.stringToHclTerraform(this._dbInstanceClass),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            db_instance_identifier: {
                value: cdktn.stringToHclTerraform(this._dbInstanceIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            db_name: {
                value: cdktn.stringToHclTerraform(this._dbName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            db_parameter_group_name: {
                value: cdktn.stringToHclTerraform(this._dbParameterGroupName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            db_security_groups: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._dbSecurityGroups),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            db_snapshot_identifier: {
                value: cdktn.stringToHclTerraform(this._dbSnapshotIdentifier),
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
            dedicated_log_volume: {
                value: cdktn.booleanToHclTerraform(this._dedicatedLogVolume),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
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
            domain_auth_secret_arn: {
                value: cdktn.stringToHclTerraform(this._domainAuthSecretArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            domain_dns_ips: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._domainDnsIps),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            domain_fqdn: {
                value: cdktn.stringToHclTerraform(this._domainFqdn),
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
            domain_ou: {
                value: cdktn.stringToHclTerraform(this._domainOu),
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
            enable_iam_database_authentication: {
                value: cdktn.booleanToHclTerraform(this._enableIamDatabaseAuthentication),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            enable_performance_insights: {
                value: cdktn.booleanToHclTerraform(this._enablePerformanceInsights),
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
            engine_version: {
                value: cdktn.stringToHclTerraform(this._engineVersion),
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
            license_model: {
                value: cdktn.stringToHclTerraform(this._licenseModel),
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
                value: ccDBInstanceMasterUserSecretPropertyToHclTerraform(this._masterUserSecret.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDBInstance.MasterUserSecretProperty",
            },
            master_username: {
                value: cdktn.stringToHclTerraform(this._masterUsername),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            max_allocated_storage: {
                value: cdktn.numberToHclTerraform(this._maxAllocatedStorage),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
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
            multi_az: {
                value: cdktn.booleanToHclTerraform(this._multiAz),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            nchar_character_set_name: {
                value: cdktn.stringToHclTerraform(this._ncharCharacterSetName),
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
            option_group_name: {
                value: cdktn.stringToHclTerraform(this._optionGroupName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
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
                value: cdktn.stringToHclTerraform(this._port),
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
            processor_features: {
                value: cdktn.listMapperHcl(ccDBInstanceProcessorFeaturePropertyToHclTerraform, false)(this._processorFeatures.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcDBInstance.ProcessorFeaturePropertyList",
            },
            promotion_tier: {
                value: cdktn.numberToHclTerraform(this._promotionTier),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            publicly_accessible: {
                value: cdktn.booleanToHclTerraform(this._publiclyAccessible),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            replica_mode: {
                value: cdktn.stringToHclTerraform(this._replicaMode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            restore_time: {
                value: cdktn.stringToHclTerraform(this._restoreTime),
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
            source_db_instance_automated_backups_arn: {
                value: cdktn.stringToHclTerraform(this._sourceDbInstanceAutomatedBackupsArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            source_db_instance_identifier: {
                value: cdktn.stringToHclTerraform(this._sourceDbInstanceIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            source_dbi_resource_id: {
                value: cdktn.stringToHclTerraform(this._sourceDbiResourceId),
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
            storage_throughput: {
                value: cdktn.numberToHclTerraform(this._storageThroughput),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            storage_type: {
                value: cdktn.stringToHclTerraform(this._storageType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccDBInstanceTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcDBInstance.TagPropertyList",
            },
            tde_credential_arn: {
                value: cdktn.stringToHclTerraform(this._tdeCredentialArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tde_credential_password: {
                value: cdktn.stringToHclTerraform(this._tdeCredentialPassword),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            timezone: {
                value: cdktn.stringToHclTerraform(this._timezone),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            use_default_processor_features: {
                value: cdktn.booleanToHclTerraform(this._useDefaultProcessorFeatures),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            use_latest_restorable_time: {
                value: cdktn.booleanToHclTerraform(this._useLatestRestorableTime),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            vpc_security_groups: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._vpcSecurityGroups),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccDBInstanceAdditionalStorageVolumePropertyToTerraform(struct?: CcDBInstance.AdditionalStorageVolumeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        allocated_storage: cdktn.stringToTerraform(struct!.allocatedStorage),
        iops: cdktn.numberToTerraform(struct!.iops),
        max_allocated_storage: cdktn.numberToTerraform(struct!.maxAllocatedStorage),
        storage_throughput: cdktn.numberToTerraform(struct!.storageThroughput),
        storage_type: cdktn.stringToTerraform(struct!.storageType),
        volume_name: cdktn.stringToTerraform(struct!.volumeName),
    }
}


export function ccDBInstanceAdditionalStorageVolumePropertyToHclTerraform(struct?: CcDBInstance.AdditionalStorageVolumeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        allocated_storage: {
            value: cdktn.stringToHclTerraform(struct!.allocatedStorage),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        iops: {
            value: cdktn.numberToHclTerraform(struct!.iops),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        max_allocated_storage: {
            value: cdktn.numberToHclTerraform(struct!.maxAllocatedStorage),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        storage_throughput: {
            value: cdktn.numberToHclTerraform(struct!.storageThroughput),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        storage_type: {
            value: cdktn.stringToHclTerraform(struct!.storageType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        volume_name: {
            value: cdktn.stringToHclTerraform(struct!.volumeName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDBInstanceDBInstanceRolePropertyToTerraform(struct?: CcDBInstance.DBInstanceRoleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        feature_name: cdktn.stringToTerraform(struct!.featureName),
        role_arn: cdktn.stringToTerraform(struct!.roleArn),
    }
}


export function ccDBInstanceDBInstanceRolePropertyToHclTerraform(struct?: CcDBInstance.DBInstanceRoleProperty | cdktn.IResolvable): any {
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


export function ccDBInstanceCertificateDetailsPropertyToTerraform(struct?: CcDBInstance.CertificateDetailsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccDBInstanceCertificateDetailsPropertyToHclTerraform(struct?: CcDBInstance.CertificateDetailsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccDBInstanceEndpointPropertyToTerraform(struct?: CcDBInstance.EndpointProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccDBInstanceEndpointPropertyToHclTerraform(struct?: CcDBInstance.EndpointProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccDBInstanceListenerEndpointPropertyToTerraform(struct?: CcDBInstance.ListenerEndpointProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccDBInstanceListenerEndpointPropertyToHclTerraform(struct?: CcDBInstance.ListenerEndpointProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccDBInstanceMasterUserSecretPropertyToTerraform(struct?: CcDBInstance.MasterUserSecretProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        kms_key_id: cdktn.stringToTerraform(struct!.kmsKeyId),
    }
}


export function ccDBInstanceMasterUserSecretPropertyToHclTerraform(struct?: CcDBInstance.MasterUserSecretProperty | cdktn.IResolvable): any {
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


export function ccDBInstanceProcessorFeaturePropertyToTerraform(struct?: CcDBInstance.ProcessorFeatureProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccDBInstanceProcessorFeaturePropertyToHclTerraform(struct?: CcDBInstance.ProcessorFeatureProperty | cdktn.IResolvable): any {
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


export function ccDBInstanceStatusInfosPropertyToTerraform(struct?: CcDBInstance.StatusInfosProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccDBInstanceStatusInfosPropertyToHclTerraform(struct?: CcDBInstance.StatusInfosProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccDBInstanceTagPropertyToTerraform(struct?: CcDBInstance.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccDBInstanceTagPropertyToHclTerraform(struct?: CcDBInstance.TagProperty | cdktn.IResolvable): any {
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


export namespace CcDBInstance {
export interface AdditionalStorageVolumeProperty {
    /**
    * The amount of storage allocated for the additional storage volume, in gibibytes (GiB). The minimum is 20 GiB. The maximum is 65,536 GiB (64 TiB).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#allocated_storage CcDBInstance#allocated_storage}
    */
    readonly allocatedStorage?: string;
    /**
    * The number of I/O operations per second (IOPS) provisioned for the additional storage volume.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#iops CcDBInstance#iops}
    */
    readonly iops?: number;
    /**
    * The upper limit in gibibytes (GiB) to which RDS can automatically scale the storage of the additional storage volume.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#max_allocated_storage CcDBInstance#max_allocated_storage}
    */
    readonly maxAllocatedStorage?: number;
    /**
    * The storage throughput value for the additional storage volume, in mebibytes per second (MiBps). This setting applies only to the General Purpose SSD (``gp3``) storage type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#storage_throughput CcDBInstance#storage_throughput}
    */
    readonly storageThroughput?: number;
    /**
    * The storage type for the additional storage volume.
    *  Valid Values: ``GP3 | IO2``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#storage_type CcDBInstance#storage_type}
    */
    readonly storageType?: string;
    /**
    * The name of the additional storage volume.
    *  Valid Values: ``RDSDBDATA2 | RDSDBDATA3 | RDSDBDATA4``
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#volume_name CcDBInstance#volume_name}
    */
    readonly volumeName?: string;
}
export class AdditionalStorageVolumePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AdditionalStorageVolumeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._allocatedStorage !== undefined) {
            hasAnyValues = true;
            internalValueResult.allocatedStorage = this._allocatedStorage;
        }
        if (this._iops !== undefined) {
            hasAnyValues = true;
            internalValueResult.iops = this._iops;
        }
        if (this._maxAllocatedStorage !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxAllocatedStorage = this._maxAllocatedStorage;
        }
        if (this._storageThroughput !== undefined) {
            hasAnyValues = true;
            internalValueResult.storageThroughput = this._storageThroughput;
        }
        if (this._storageType !== undefined) {
            hasAnyValues = true;
            internalValueResult.storageType = this._storageType;
        }
        if (this._volumeName !== undefined) {
            hasAnyValues = true;
            internalValueResult.volumeName = this._volumeName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AdditionalStorageVolumeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allocatedStorage = undefined;
            this._iops = undefined;
            this._maxAllocatedStorage = undefined;
            this._storageThroughput = undefined;
            this._storageType = undefined;
            this._volumeName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allocatedStorage = value.allocatedStorage;
            this._iops = value.iops;
            this._maxAllocatedStorage = value.maxAllocatedStorage;
            this._storageThroughput = value.storageThroughput;
            this._storageType = value.storageType;
            this._volumeName = value.volumeName;
        }
    }

    // allocated_storage - computed: true, optional: true, required: false
    private _allocatedStorage?: string; 
    public get allocatedStorage() {
        return this.getStringAttribute('allocated_storage');
    }
    public set allocatedStorage(value: string) {
        this._allocatedStorage = value;
    }
    public resetAllocatedStorage() {
        this._allocatedStorage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allocatedStorageInput() {
        return this._allocatedStorage;
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

    // max_allocated_storage - computed: true, optional: true, required: false
    private _maxAllocatedStorage?: number; 
    public get maxAllocatedStorage() {
        return this.getNumberAttribute('max_allocated_storage');
    }
    public set maxAllocatedStorage(value: number) {
        this._maxAllocatedStorage = value;
    }
    public resetMaxAllocatedStorage() {
        this._maxAllocatedStorage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxAllocatedStorageInput() {
        return this._maxAllocatedStorage;
    }

    // storage_throughput - computed: true, optional: true, required: false
    private _storageThroughput?: number; 
    public get storageThroughput() {
        return this.getNumberAttribute('storage_throughput');
    }
    public set storageThroughput(value: number) {
        this._storageThroughput = value;
    }
    public resetStorageThroughput() {
        this._storageThroughput = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get storageThroughputInput() {
        return this._storageThroughput;
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

    // volume_name - computed: true, optional: true, required: false
    private _volumeName?: string; 
    public get volumeName() {
        return this.getStringAttribute('volume_name');
    }
    public set volumeName(value: string) {
        this._volumeName = value;
    }
    public resetVolumeName() {
        this._volumeName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get volumeNameInput() {
        return this._volumeName;
    }
}

export class AdditionalStorageVolumePropertyList extends cdktn.ComplexList {
    public internalValue? : AdditionalStorageVolumeProperty[] | cdktn.IResolvable

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
    public get(index: number): AdditionalStorageVolumePropertyOutputReference {
        return new AdditionalStorageVolumePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface DBInstanceRoleProperty {
    /**
    * The name of the feature associated with the AWS Identity and Access Management (IAM) role. IAM roles that are associated with a DB instance grant permission for the DB instance to access other AWS services on your behalf. For the list of supported feature names, see the ``SupportedFeatureNames`` description in [DBEngineVersion](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DBEngineVersion.html) in the *Amazon RDS API Reference*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#feature_name CcDBInstance#feature_name}
    */
    readonly featureName?: string;
    /**
    * The Amazon Resource Name (ARN) of the IAM role that is associated with the DB instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#role_arn CcDBInstance#role_arn}
    */
    readonly roleArn?: string;
}
export class DBInstanceRolePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): DBInstanceRoleProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: DBInstanceRoleProperty | cdktn.IResolvable | undefined) {
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

export class DBInstanceRolePropertyList extends cdktn.ComplexList {
    public internalValue? : DBInstanceRoleProperty[] | cdktn.IResolvable

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
    public get(index: number): DBInstanceRolePropertyOutputReference {
        return new DBInstanceRolePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface CertificateDetailsProperty {
}
export class CertificateDetailsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CertificateDetailsProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CertificateDetailsProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // ca_identifier - computed: true, optional: false, required: false
    public get caIdentifier() {
        return this.getStringAttribute('ca_identifier');
    }

    // valid_till - computed: true, optional: false, required: false
    public get validTill() {
        return this.getStringAttribute('valid_till');
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

    // hosted_zone_id - computed: true, optional: false, required: false
    public get hostedZoneId() {
        return this.getStringAttribute('hosted_zone_id');
    }

    // port - computed: true, optional: false, required: false
    public get port() {
        return this.getStringAttribute('port');
    }
}
export interface ListenerEndpointProperty {
}
export class ListenerEndpointPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ListenerEndpointProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ListenerEndpointProperty | undefined) {
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

    // hosted_zone_id - computed: true, optional: false, required: false
    public get hostedZoneId() {
        return this.getStringAttribute('hosted_zone_id');
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#kms_key_id CcDBInstance#kms_key_id}
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
export interface ProcessorFeatureProperty {
    /**
    * The name of the processor feature. Valid names are ``coreCount`` and ``threadsPerCore``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#name CcDBInstance#name}
    */
    readonly name?: string;
    /**
    * The value of a processor feature.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#value CcDBInstance#value}
    */
    readonly value?: string;
}
export class ProcessorFeaturePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ProcessorFeatureProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: ProcessorFeatureProperty | cdktn.IResolvable | undefined) {
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

export class ProcessorFeaturePropertyList extends cdktn.ComplexList {
    public internalValue? : ProcessorFeatureProperty[] | cdktn.IResolvable

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
    public get(index: number): ProcessorFeaturePropertyOutputReference {
        return new ProcessorFeaturePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface StatusInfosProperty {
}
export class StatusInfosPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): StatusInfosProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StatusInfosProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // message - computed: true, optional: false, required: false
    public get message() {
        return this.getStringAttribute('message');
    }

    // normal - computed: true, optional: false, required: false
    public get normal() {
        return this.getBooleanAttribute('normal');
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // status_type - computed: true, optional: false, required: false
    public get statusType() {
        return this.getStringAttribute('status_type');
    }
}

export class StatusInfosPropertyList extends cdktn.ComplexList {

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
    public get(index: number): StatusInfosPropertyOutputReference {
        return new StatusInfosPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * A key is the required name of the tag. The string value can be from 1 to 128 Unicode characters in length and can't be prefixed with ``aws:`` or ``rds:``. The string can only contain only the set of Unicode letters, digits, white-space, '_', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-@]*)$").
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#key CcDBInstance#key}
    */
    readonly key?: string;
    /**
    * A value is the optional value of the tag. The string value can be from 1 to 256 Unicode characters in length and can't be prefixed with ``aws:`` or ``rds:``. The string can only contain only the set of Unicode letters, digits, white-space, '_', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-@]*)$").
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/rds_db_instance#value CcDBInstance#value}
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
