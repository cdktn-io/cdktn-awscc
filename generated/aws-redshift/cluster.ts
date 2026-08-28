// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_cluster

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcClusterProps extends cdktn.TerraformMetaArguments {
    /**
    * Major version upgrades can be applied during the maintenance window to the Amazon Redshift engine that is running on the cluster. Default value is True
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_cluster#allow_version_upgrade CcCluster#allow_version_upgrade}
    */
    readonly allowVersionUpgrade?: boolean | cdktn.IResolvable;
    /**
    * The value represents how the cluster is configured to use AQUA (Advanced Query Accelerator) after the cluster is restored. Possible values include the following.
    * 
    * enabled - Use AQUA if it is available for the current Region and Amazon Redshift node type.
    * disabled - Don't use AQUA.
    * auto - Amazon Redshift determines whether to use AQUA.
    * 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_cluster#aqua_configuration_status CcCluster#aqua_configuration_status}
    */
    readonly aquaConfigurationStatus?: string;
    /**
    * The number of days that automated snapshots are retained. If the value is 0, automated snapshots are disabled. Default value is 1
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_cluster#automated_snapshot_retention_period CcCluster#automated_snapshot_retention_period}
    */
    readonly automatedSnapshotRetentionPeriod?: number;
    /**
    * The EC2 Availability Zone (AZ) in which you want Amazon Redshift to provision the cluster. Default: A random, system-chosen Availability Zone in the region that is specified by the endpoint
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_cluster#availability_zone CcCluster#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * The option to enable relocation for an Amazon Redshift cluster between Availability Zones after the cluster modification is complete.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_cluster#availability_zone_relocation CcCluster#availability_zone_relocation}
    */
    readonly availabilityZoneRelocation?: boolean | cdktn.IResolvable;
    /**
    * The availability zone relocation status of the cluster
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_cluster#availability_zone_relocation_status CcCluster#availability_zone_relocation_status}
    */
    readonly availabilityZoneRelocationStatus?: string;
    /**
    * A boolean value indicating whether the resize operation is using the classic resize process. If you don't provide this parameter or set the value to false , the resize type is elastic.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_cluster#classic CcCluster#classic}
    */
    readonly classic?: boolean | cdktn.IResolvable;
    /**
    * A unique identifier for the cluster. You use this identifier to refer to the cluster for any subsequent cluster operations such as deleting or modifying. All alphabetical characters must be lower case, no hypens at the end, no two consecutive hyphens. Cluster name should be unique for all clusters within an AWS account
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_cluster#cluster_identifier CcCluster#cluster_identifier}
    */
    readonly clusterIdentifier?: string;
    /**
    * The name of the parameter group to be associated with this cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_cluster#cluster_parameter_group_name CcCluster#cluster_parameter_group_name}
    */
    readonly clusterParameterGroupName?: string;
    /**
    * A list of security groups to be associated with this cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_cluster#cluster_security_groups CcCluster#cluster_security_groups}
    */
    readonly clusterSecurityGroups?: string[];
    /**
    * The name of a cluster subnet group to be associated with this cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_cluster#cluster_subnet_group_name CcCluster#cluster_subnet_group_name}
    */
    readonly clusterSubnetGroupName?: string;
    /**
    * The type of the cluster. When cluster type is specified as single-node, the NumberOfNodes parameter is not required and if multi-node, the NumberOfNodes parameter is required
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_cluster#cluster_type CcCluster#cluster_type}
    */
    readonly clusterType: string;
    /**
    * The version of the Amazon Redshift engine software that you want to deploy on the cluster.The version selected runs on all the nodes in the cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_cluster#cluster_version CcCluster#cluster_version}
    */
    readonly clusterVersion?: string;
    /**
    * The name of the first database to be created when the cluster is created. To create additional databases after the cluster is created, connect to the cluster with a SQL client and use SQL commands to create a database.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_cluster#db_name CcCluster#db_name}
    */
    readonly dbName: string;
    /**
    * A boolean indicating whether to enable the deferred maintenance window.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_cluster#defer_maintenance CcCluster#defer_maintenance}
    */
    readonly deferMaintenance?: boolean | cdktn.IResolvable;
    /**
    * An integer indicating the duration of the maintenance window in days. If you specify a duration, you can't specify an end time. The duration must be 60 days or less.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_cluster#defer_maintenance_duration CcCluster#defer_maintenance_duration}
    */
    readonly deferMaintenanceDuration?: number;
    /**
    * A timestamp indicating end time for the deferred maintenance window. If you specify an end time, you can't specify a duration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_cluster#defer_maintenance_end_time CcCluster#defer_maintenance_end_time}
    */
    readonly deferMaintenanceEndTime?: string;
    /**
    * A timestamp indicating the start time for the deferred maintenance window.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_cluster#defer_maintenance_start_time CcCluster#defer_maintenance_start_time}
    */
    readonly deferMaintenanceStartTime?: string;
    /**
    * The destination AWS Region that you want to copy snapshots to. Constraints: Must be the name of a valid AWS Region. For more information, see Regions and Endpoints in the Amazon Web Services [https://docs.aws.amazon.com/general/latest/gr/rande.html#redshift_region] General Reference
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_cluster#destination_region CcCluster#destination_region}
    */
    readonly destinationRegion?: string;
    /**
    * The Elastic IP (EIP) address for the cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_cluster#elastic_ip CcCluster#elastic_ip}
    */
    readonly elasticIp?: string;
    /**
    * If true, the data in the cluster is encrypted at rest.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_cluster#encrypted CcCluster#encrypted}
    */
    readonly encrypted?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_cluster#endpoint CcCluster#endpoint}
    */
    readonly endpoint?: CcCluster.EndpointProperty;
    /**
    * An option that specifies whether to create the cluster with enhanced VPC routing enabled. To create a cluster that uses enhanced VPC routing, the cluster must be in a VPC. For more information, see Enhanced VPC Routing in the Amazon Redshift Cluster Management Guide.
    * 
    * If this option is true , enhanced VPC routing is enabled.
    * 
    * Default: false
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_cluster#enhanced_vpc_routing CcCluster#enhanced_vpc_routing}
    */
    readonly enhancedVpcRouting?: boolean | cdktn.IResolvable;
    /**
    * Specifies the name of the HSM client certificate the Amazon Redshift cluster uses to retrieve the data encryption keys stored in an HSM
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_cluster#hsm_client_certificate_identifier CcCluster#hsm_client_certificate_identifier}
    */
    readonly hsmClientCertificateIdentifier?: string;
    /**
    * Specifies the name of the HSM configuration that contains the information the Amazon Redshift cluster can use to retrieve and store keys in an HSM.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_cluster#hsm_configuration_identifier CcCluster#hsm_configuration_identifier}
    */
    readonly hsmConfigurationIdentifier?: string;
    /**
    * A list of AWS Identity and Access Management (IAM) roles that can be used by the cluster to access other AWS services. You must supply the IAM roles in their Amazon Resource Name (ARN) format. You can supply up to 50 IAM roles in a single request
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_cluster#iam_roles CcCluster#iam_roles}
    */
    readonly iamRoles?: string[];
    /**
    * The AWS Key Management Service (KMS) key ID of the encryption key that you want to use to encrypt data in the cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_cluster#kms_key_id CcCluster#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_cluster#logging_properties CcCluster#logging_properties}
    */
    readonly loggingProperties?: CcCluster.LoggingPropertiesProperty;
    /**
    * The name for the maintenance track that you want to assign for the cluster. This name change is asynchronous. The new track name stays in the PendingModifiedValues for the cluster until the next maintenance window. When the maintenance track changes, the cluster is switched to the latest cluster release available for the maintenance track. At this point, the maintenance track name is applied.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_cluster#maintenance_track_name CcCluster#maintenance_track_name}
    */
    readonly maintenanceTrackName?: string;
    /**
    * A boolean indicating if the redshift cluster's admin user credentials is managed by Redshift or not. You can't use MasterUserPassword if ManageMasterPassword is true. If ManageMasterPassword is false or not set, Amazon Redshift uses MasterUserPassword for the admin user account's password.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_cluster#manage_master_password CcCluster#manage_master_password}
    */
    readonly manageMasterPassword?: boolean | cdktn.IResolvable;
    /**
    * The number of days to retain newly copied snapshots in the destination AWS Region after they are copied from the source AWS Region. If the value is -1, the manual snapshot is retained indefinitely.
    * 
    * The value must be either -1 or an integer between 1 and 3,653.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_cluster#manual_snapshot_retention_period CcCluster#manual_snapshot_retention_period}
    */
    readonly manualSnapshotRetentionPeriod?: number;
    /**
    * The ID of the Key Management Service (KMS) key used to encrypt and store the cluster's admin user credentials secret.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_cluster#master_password_secret_kms_key_id CcCluster#master_password_secret_kms_key_id}
    */
    readonly masterPasswordSecretKmsKeyId?: string;
    /**
    * The password associated with the master user account for the cluster that is being created. You can't use MasterUserPassword if ManageMasterPassword is true. Password must be between 8 and 64 characters in length, should have at least one uppercase letter.Must contain at least one lowercase letter.Must contain one number.Can be any printable ASCII character.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_cluster#master_user_password CcCluster#master_user_password}
    */
    readonly masterUserPassword?: string;
    /**
    * The user name associated with the master user account for the cluster that is being created. The user name can't be PUBLIC and first character must be a letter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_cluster#master_username CcCluster#master_username}
    */
    readonly masterUsername: string;
    /**
    * A boolean indicating if the redshift cluster is multi-az or not. If you don't provide this parameter or set the value to false, the redshift cluster will be single-az.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_cluster#multi_az CcCluster#multi_az}
    */
    readonly multiAz?: boolean | cdktn.IResolvable;
    /**
    * The namespace resource policy document that will be attached to a Redshift cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_cluster#namespace_resource_policy CcCluster#namespace_resource_policy}
    */
    readonly namespaceResourcePolicy?: string;
    /**
    * The node type to be provisioned for the cluster.Valid Values: ds2.xlarge | ds2.8xlarge | dc1.large | dc1.8xlarge | dc2.large | dc2.8xlarge | ra3.large | ra3.4xlarge | ra3.16xlarge | rg.large | rg.xlarge | rg.4xlarge | rg.12xlarge
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_cluster#node_type CcCluster#node_type}
    */
    readonly nodeType: string;
    /**
    * The number of compute nodes in the cluster. This parameter is required when the ClusterType parameter is specified as multi-node.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_cluster#number_of_nodes CcCluster#number_of_nodes}
    */
    readonly numberOfNodes?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_cluster#owner_account CcCluster#owner_account}
    */
    readonly ownerAccount?: string;
    /**
    * The port number on which the cluster accepts incoming connections. The cluster is accessible only via the JDBC and ODBC connection strings
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_cluster#port CcCluster#port}
    */
    readonly port?: number;
    /**
    * The weekly time range (in UTC) during which automated cluster maintenance can occur.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_cluster#preferred_maintenance_window CcCluster#preferred_maintenance_window}
    */
    readonly preferredMaintenanceWindow?: string;
    /**
    * If true, the cluster can be accessed from a public network.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_cluster#publicly_accessible CcCluster#publicly_accessible}
    */
    readonly publiclyAccessible?: boolean | cdktn.IResolvable;
    /**
    * The Redshift operation to be performed. Resource Action supports pause-cluster, resume-cluster, failover-primary-compute APIs
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_cluster#resource_action CcCluster#resource_action}
    */
    readonly resourceAction?: string;
    /**
    * The identifier of the database revision. You can retrieve this value from the response to the DescribeClusterDbRevisions request.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_cluster#revision_target CcCluster#revision_target}
    */
    readonly revisionTarget?: string;
    /**
    * A boolean indicating if we want to rotate Encryption Keys.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_cluster#rotate_encryption_key CcCluster#rotate_encryption_key}
    */
    readonly rotateEncryptionKey?: boolean | cdktn.IResolvable;
    /**
    * The name of the cluster the source snapshot was created from. This parameter is required if your IAM user has a policy containing a snapshot resource element that specifies anything other than * for the cluster name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_cluster#snapshot_cluster_identifier CcCluster#snapshot_cluster_identifier}
    */
    readonly snapshotClusterIdentifier?: string;
    /**
    * The name of the snapshot copy grant to use when snapshots of an AWS KMS-encrypted cluster are copied to the destination region.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_cluster#snapshot_copy_grant_name CcCluster#snapshot_copy_grant_name}
    */
    readonly snapshotCopyGrantName?: string;
    /**
    * Indicates whether to apply the snapshot retention period to newly copied manual snapshots instead of automated snapshots.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_cluster#snapshot_copy_manual CcCluster#snapshot_copy_manual}
    */
    readonly snapshotCopyManual?: boolean | cdktn.IResolvable;
    /**
    * The number of days to retain automated snapshots in the destination region after they are copied from the source region. 
    * 
    *  Default is 7. 
    * 
    *  Constraints: Must be at least 1 and no more than 35.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_cluster#snapshot_copy_retention_period CcCluster#snapshot_copy_retention_period}
    */
    readonly snapshotCopyRetentionPeriod?: number;
    /**
    * The name of the snapshot from which to create the new cluster. This parameter isn't case sensitive.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_cluster#snapshot_identifier CcCluster#snapshot_identifier}
    */
    readonly snapshotIdentifier?: string;
    /**
    * The list of tags for the cluster parameter group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_cluster#tags CcCluster#tags}
    */
    readonly tags?: CcCluster.TagProperty[] | cdktn.IResolvable;
    /**
    * A list of Virtual Private Cloud (VPC) security groups to be associated with the cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_cluster#vpc_security_group_ids CcCluster#vpc_security_group_ids}
    */
    readonly vpcSecurityGroupIds?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_cluster awscc_redshift_cluster}
*/
export class CcCluster extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_redshift_cluster";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcCluster resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcCluster to import
    * @param importFromId The id of the existing CcCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_cluster#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcCluster to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_redshift_cluster", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_cluster awscc_redshift_cluster} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcClusterProps
    */
    public constructor(scope: Construct, id: string, config: CcClusterProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_redshift_cluster',
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
        this._allowVersionUpgrade = config.allowVersionUpgrade;
        this._aquaConfigurationStatus = config.aquaConfigurationStatus;
        this._automatedSnapshotRetentionPeriod = config.automatedSnapshotRetentionPeriod;
        this._availabilityZone = config.availabilityZone;
        this._availabilityZoneRelocation = config.availabilityZoneRelocation;
        this._availabilityZoneRelocationStatus = config.availabilityZoneRelocationStatus;
        this._classic = config.classic;
        this._clusterIdentifier = config.clusterIdentifier;
        this._clusterParameterGroupName = config.clusterParameterGroupName;
        this._clusterSecurityGroups = config.clusterSecurityGroups;
        this._clusterSubnetGroupName = config.clusterSubnetGroupName;
        this._clusterType = config.clusterType;
        this._clusterVersion = config.clusterVersion;
        this._dbName = config.dbName;
        this._deferMaintenance = config.deferMaintenance;
        this._deferMaintenanceDuration = config.deferMaintenanceDuration;
        this._deferMaintenanceEndTime = config.deferMaintenanceEndTime;
        this._deferMaintenanceStartTime = config.deferMaintenanceStartTime;
        this._destinationRegion = config.destinationRegion;
        this._elasticIp = config.elasticIp;
        this._encrypted = config.encrypted;
        this._endpoint.internalValue = config.endpoint;
        this._enhancedVpcRouting = config.enhancedVpcRouting;
        this._hsmClientCertificateIdentifier = config.hsmClientCertificateIdentifier;
        this._hsmConfigurationIdentifier = config.hsmConfigurationIdentifier;
        this._iamRoles = config.iamRoles;
        this._kmsKeyId = config.kmsKeyId;
        this._loggingProperties.internalValue = config.loggingProperties;
        this._maintenanceTrackName = config.maintenanceTrackName;
        this._manageMasterPassword = config.manageMasterPassword;
        this._manualSnapshotRetentionPeriod = config.manualSnapshotRetentionPeriod;
        this._masterPasswordSecretKmsKeyId = config.masterPasswordSecretKmsKeyId;
        this._masterUserPassword = config.masterUserPassword;
        this._masterUsername = config.masterUsername;
        this._multiAz = config.multiAz;
        this._namespaceResourcePolicy = config.namespaceResourcePolicy;
        this._nodeType = config.nodeType;
        this._numberOfNodes = config.numberOfNodes;
        this._ownerAccount = config.ownerAccount;
        this._port = config.port;
        this._preferredMaintenanceWindow = config.preferredMaintenanceWindow;
        this._publiclyAccessible = config.publiclyAccessible;
        this._resourceAction = config.resourceAction;
        this._revisionTarget = config.revisionTarget;
        this._rotateEncryptionKey = config.rotateEncryptionKey;
        this._snapshotClusterIdentifier = config.snapshotClusterIdentifier;
        this._snapshotCopyGrantName = config.snapshotCopyGrantName;
        this._snapshotCopyManual = config.snapshotCopyManual;
        this._snapshotCopyRetentionPeriod = config.snapshotCopyRetentionPeriod;
        this._snapshotIdentifier = config.snapshotIdentifier;
        this._tags.internalValue = config.tags;
        this._vpcSecurityGroupIds = config.vpcSecurityGroupIds;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // allow_version_upgrade - computed: true, optional: true, required: false
    private _allowVersionUpgrade?: boolean | cdktn.IResolvable; 
    public get allowVersionUpgrade() {
        return this.getBooleanAttribute('allow_version_upgrade');
    }
    public set allowVersionUpgrade(value: boolean | cdktn.IResolvable) {
        this._allowVersionUpgrade = value;
    }
    public resetAllowVersionUpgrade() {
        this._allowVersionUpgrade = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowVersionUpgradeInput() {
        return this._allowVersionUpgrade;
    }

    // aqua_configuration_status - computed: true, optional: true, required: false
    private _aquaConfigurationStatus?: string; 
    public get aquaConfigurationStatus() {
        return this.getStringAttribute('aqua_configuration_status');
    }
    public set aquaConfigurationStatus(value: string) {
        this._aquaConfigurationStatus = value;
    }
    public resetAquaConfigurationStatus() {
        this._aquaConfigurationStatus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get aquaConfigurationStatusInput() {
        return this._aquaConfigurationStatus;
    }

    // automated_snapshot_retention_period - computed: true, optional: true, required: false
    private _automatedSnapshotRetentionPeriod?: number; 
    public get automatedSnapshotRetentionPeriod() {
        return this.getNumberAttribute('automated_snapshot_retention_period');
    }
    public set automatedSnapshotRetentionPeriod(value: number) {
        this._automatedSnapshotRetentionPeriod = value;
    }
    public resetAutomatedSnapshotRetentionPeriod() {
        this._automatedSnapshotRetentionPeriod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get automatedSnapshotRetentionPeriodInput() {
        return this._automatedSnapshotRetentionPeriod;
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

    // availability_zone_relocation - computed: true, optional: true, required: false
    private _availabilityZoneRelocation?: boolean | cdktn.IResolvable; 
    public get availabilityZoneRelocation() {
        return this.getBooleanAttribute('availability_zone_relocation');
    }
    public set availabilityZoneRelocation(value: boolean | cdktn.IResolvable) {
        this._availabilityZoneRelocation = value;
    }
    public resetAvailabilityZoneRelocation() {
        this._availabilityZoneRelocation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get availabilityZoneRelocationInput() {
        return this._availabilityZoneRelocation;
    }

    // availability_zone_relocation_status - computed: true, optional: true, required: false
    private _availabilityZoneRelocationStatus?: string; 
    public get availabilityZoneRelocationStatus() {
        return this.getStringAttribute('availability_zone_relocation_status');
    }
    public set availabilityZoneRelocationStatus(value: string) {
        this._availabilityZoneRelocationStatus = value;
    }
    public resetAvailabilityZoneRelocationStatus() {
        this._availabilityZoneRelocationStatus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get availabilityZoneRelocationStatusInput() {
        return this._availabilityZoneRelocationStatus;
    }

    // classic - computed: true, optional: true, required: false
    private _classic?: boolean | cdktn.IResolvable; 
    public get classic() {
        return this.getBooleanAttribute('classic');
    }
    public set classic(value: boolean | cdktn.IResolvable) {
        this._classic = value;
    }
    public resetClassic() {
        this._classic = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get classicInput() {
        return this._classic;
    }

    // cluster_identifier - computed: true, optional: true, required: false
    private _clusterIdentifier?: string; 
    public get clusterIdentifier() {
        return this.getStringAttribute('cluster_identifier');
    }
    public set clusterIdentifier(value: string) {
        this._clusterIdentifier = value;
    }
    public resetClusterIdentifier() {
        this._clusterIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterIdentifierInput() {
        return this._clusterIdentifier;
    }

    // cluster_namespace_arn - computed: true, optional: false, required: false
    public get clusterNamespaceArn() {
        return this.getStringAttribute('cluster_namespace_arn');
    }

    // cluster_parameter_group_name - computed: true, optional: true, required: false
    private _clusterParameterGroupName?: string; 
    public get clusterParameterGroupName() {
        return this.getStringAttribute('cluster_parameter_group_name');
    }
    public set clusterParameterGroupName(value: string) {
        this._clusterParameterGroupName = value;
    }
    public resetClusterParameterGroupName() {
        this._clusterParameterGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterParameterGroupNameInput() {
        return this._clusterParameterGroupName;
    }

    // cluster_security_groups - computed: true, optional: true, required: false
    private _clusterSecurityGroups?: string[]; 
    public get clusterSecurityGroups() {
        return this.getListAttribute('cluster_security_groups');
    }
    public set clusterSecurityGroups(value: string[]) {
        this._clusterSecurityGroups = value;
    }
    public resetClusterSecurityGroups() {
        this._clusterSecurityGroups = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterSecurityGroupsInput() {
        return this._clusterSecurityGroups;
    }

    // cluster_subnet_group_name - computed: true, optional: true, required: false
    private _clusterSubnetGroupName?: string; 
    public get clusterSubnetGroupName() {
        return this.getStringAttribute('cluster_subnet_group_name');
    }
    public set clusterSubnetGroupName(value: string) {
        this._clusterSubnetGroupName = value;
    }
    public resetClusterSubnetGroupName() {
        this._clusterSubnetGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterSubnetGroupNameInput() {
        return this._clusterSubnetGroupName;
    }

    // cluster_type - computed: false, optional: false, required: true
    private _clusterType?: string; 
    public get clusterType() {
        return this.getStringAttribute('cluster_type');
    }
    public set clusterType(value: string) {
        this._clusterType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterTypeInput() {
        return this._clusterType;
    }

    // cluster_version - computed: true, optional: true, required: false
    private _clusterVersion?: string; 
    public get clusterVersion() {
        return this.getStringAttribute('cluster_version');
    }
    public set clusterVersion(value: string) {
        this._clusterVersion = value;
    }
    public resetClusterVersion() {
        this._clusterVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterVersionInput() {
        return this._clusterVersion;
    }

    // db_name - computed: false, optional: false, required: true
    private _dbName?: string; 
    public get dbName() {
        return this.getStringAttribute('db_name');
    }
    public set dbName(value: string) {
        this._dbName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get dbNameInput() {
        return this._dbName;
    }

    // defer_maintenance - computed: true, optional: true, required: false
    private _deferMaintenance?: boolean | cdktn.IResolvable; 
    public get deferMaintenance() {
        return this.getBooleanAttribute('defer_maintenance');
    }
    public set deferMaintenance(value: boolean | cdktn.IResolvable) {
        this._deferMaintenance = value;
    }
    public resetDeferMaintenance() {
        this._deferMaintenance = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deferMaintenanceInput() {
        return this._deferMaintenance;
    }

    // defer_maintenance_duration - computed: true, optional: true, required: false
    private _deferMaintenanceDuration?: number; 
    public get deferMaintenanceDuration() {
        return this.getNumberAttribute('defer_maintenance_duration');
    }
    public set deferMaintenanceDuration(value: number) {
        this._deferMaintenanceDuration = value;
    }
    public resetDeferMaintenanceDuration() {
        this._deferMaintenanceDuration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deferMaintenanceDurationInput() {
        return this._deferMaintenanceDuration;
    }

    // defer_maintenance_end_time - computed: true, optional: true, required: false
    private _deferMaintenanceEndTime?: string; 
    public get deferMaintenanceEndTime() {
        return this.getStringAttribute('defer_maintenance_end_time');
    }
    public set deferMaintenanceEndTime(value: string) {
        this._deferMaintenanceEndTime = value;
    }
    public resetDeferMaintenanceEndTime() {
        this._deferMaintenanceEndTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deferMaintenanceEndTimeInput() {
        return this._deferMaintenanceEndTime;
    }

    // defer_maintenance_identifier - computed: true, optional: false, required: false
    public get deferMaintenanceIdentifier() {
        return this.getStringAttribute('defer_maintenance_identifier');
    }

    // defer_maintenance_start_time - computed: true, optional: true, required: false
    private _deferMaintenanceStartTime?: string; 
    public get deferMaintenanceStartTime() {
        return this.getStringAttribute('defer_maintenance_start_time');
    }
    public set deferMaintenanceStartTime(value: string) {
        this._deferMaintenanceStartTime = value;
    }
    public resetDeferMaintenanceStartTime() {
        this._deferMaintenanceStartTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deferMaintenanceStartTimeInput() {
        return this._deferMaintenanceStartTime;
    }

    // destination_region - computed: true, optional: true, required: false
    private _destinationRegion?: string; 
    public get destinationRegion() {
        return this.getStringAttribute('destination_region');
    }
    public set destinationRegion(value: string) {
        this._destinationRegion = value;
    }
    public resetDestinationRegion() {
        this._destinationRegion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationRegionInput() {
        return this._destinationRegion;
    }

    // elastic_ip - computed: true, optional: true, required: false
    private _elasticIp?: string; 
    public get elasticIp() {
        return this.getStringAttribute('elastic_ip');
    }
    public set elasticIp(value: string) {
        this._elasticIp = value;
    }
    public resetElasticIp() {
        this._elasticIp = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get elasticIpInput() {
        return this._elasticIp;
    }

    // encrypted - computed: true, optional: true, required: false
    private _encrypted?: boolean | cdktn.IResolvable; 
    public get encrypted() {
        return this.getBooleanAttribute('encrypted');
    }
    public set encrypted(value: boolean | cdktn.IResolvable) {
        this._encrypted = value;
    }
    public resetEncrypted() {
        this._encrypted = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptedInput() {
        return this._encrypted;
    }

    // endpoint - computed: true, optional: true, required: false
    private _endpoint = new CcCluster.EndpointPropertyOutputReference(this, "endpoint");
    public get endpoint() {
        return this._endpoint;
    }
    public putEndpoint(value: CcCluster.EndpointProperty) {
        this._endpoint.internalValue = value;
    }
    public resetEndpoint() {
        this._endpoint.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointInput() {
        return this._endpoint.internalValue;
    }

    // enhanced_vpc_routing - computed: true, optional: true, required: false
    private _enhancedVpcRouting?: boolean | cdktn.IResolvable; 
    public get enhancedVpcRouting() {
        return this.getBooleanAttribute('enhanced_vpc_routing');
    }
    public set enhancedVpcRouting(value: boolean | cdktn.IResolvable) {
        this._enhancedVpcRouting = value;
    }
    public resetEnhancedVpcRouting() {
        this._enhancedVpcRouting = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enhancedVpcRoutingInput() {
        return this._enhancedVpcRouting;
    }

    // hsm_client_certificate_identifier - computed: true, optional: true, required: false
    private _hsmClientCertificateIdentifier?: string; 
    public get hsmClientCertificateIdentifier() {
        return this.getStringAttribute('hsm_client_certificate_identifier');
    }
    public set hsmClientCertificateIdentifier(value: string) {
        this._hsmClientCertificateIdentifier = value;
    }
    public resetHsmClientCertificateIdentifier() {
        this._hsmClientCertificateIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hsmClientCertificateIdentifierInput() {
        return this._hsmClientCertificateIdentifier;
    }

    // hsm_configuration_identifier - computed: true, optional: true, required: false
    private _hsmConfigurationIdentifier?: string; 
    public get hsmConfigurationIdentifier() {
        return this.getStringAttribute('hsm_configuration_identifier');
    }
    public set hsmConfigurationIdentifier(value: string) {
        this._hsmConfigurationIdentifier = value;
    }
    public resetHsmConfigurationIdentifier() {
        this._hsmConfigurationIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hsmConfigurationIdentifierInput() {
        return this._hsmConfigurationIdentifier;
    }

    // iam_roles - computed: true, optional: true, required: false
    private _iamRoles?: string[]; 
    public get iamRoles() {
        return this.getListAttribute('iam_roles');
    }
    public set iamRoles(value: string[]) {
        this._iamRoles = value;
    }
    public resetIamRoles() {
        this._iamRoles = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iamRolesInput() {
        return this._iamRoles;
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

    // logging_properties - computed: true, optional: true, required: false
    private _loggingProperties = new CcCluster.LoggingPropertiesPropertyOutputReference(this, "logging_properties");
    public get loggingProperties() {
        return this._loggingProperties;
    }
    public putLoggingProperties(value: CcCluster.LoggingPropertiesProperty) {
        this._loggingProperties.internalValue = value;
    }
    public resetLoggingProperties() {
        this._loggingProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get loggingPropertiesInput() {
        return this._loggingProperties.internalValue;
    }

    // maintenance_track_name - computed: true, optional: true, required: false
    private _maintenanceTrackName?: string; 
    public get maintenanceTrackName() {
        return this.getStringAttribute('maintenance_track_name');
    }
    public set maintenanceTrackName(value: string) {
        this._maintenanceTrackName = value;
    }
    public resetMaintenanceTrackName() {
        this._maintenanceTrackName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maintenanceTrackNameInput() {
        return this._maintenanceTrackName;
    }

    // manage_master_password - computed: true, optional: true, required: false
    private _manageMasterPassword?: boolean | cdktn.IResolvable; 
    public get manageMasterPassword() {
        return this.getBooleanAttribute('manage_master_password');
    }
    public set manageMasterPassword(value: boolean | cdktn.IResolvable) {
        this._manageMasterPassword = value;
    }
    public resetManageMasterPassword() {
        this._manageMasterPassword = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get manageMasterPasswordInput() {
        return this._manageMasterPassword;
    }

    // manual_snapshot_retention_period - computed: true, optional: true, required: false
    private _manualSnapshotRetentionPeriod?: number; 
    public get manualSnapshotRetentionPeriod() {
        return this.getNumberAttribute('manual_snapshot_retention_period');
    }
    public set manualSnapshotRetentionPeriod(value: number) {
        this._manualSnapshotRetentionPeriod = value;
    }
    public resetManualSnapshotRetentionPeriod() {
        this._manualSnapshotRetentionPeriod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get manualSnapshotRetentionPeriodInput() {
        return this._manualSnapshotRetentionPeriod;
    }

    // master_password_secret_arn - computed: true, optional: false, required: false
    public get masterPasswordSecretArn() {
        return this.getStringAttribute('master_password_secret_arn');
    }

    // master_password_secret_kms_key_id - computed: true, optional: true, required: false
    private _masterPasswordSecretKmsKeyId?: string; 
    public get masterPasswordSecretKmsKeyId() {
        return this.getStringAttribute('master_password_secret_kms_key_id');
    }
    public set masterPasswordSecretKmsKeyId(value: string) {
        this._masterPasswordSecretKmsKeyId = value;
    }
    public resetMasterPasswordSecretKmsKeyId() {
        this._masterPasswordSecretKmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get masterPasswordSecretKmsKeyIdInput() {
        return this._masterPasswordSecretKmsKeyId;
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

    // master_username - computed: false, optional: false, required: true
    private _masterUsername?: string; 
    public get masterUsername() {
        return this.getStringAttribute('master_username');
    }
    public set masterUsername(value: string) {
        this._masterUsername = value;
    }
    // Temporarily expose input value. Use with caution.
    public get masterUsernameInput() {
        return this._masterUsername;
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

    // namespace_resource_policy - computed: true, optional: true, required: false
    private _namespaceResourcePolicy?: string; 
    public get namespaceResourcePolicy() {
        return this.getStringAttribute('namespace_resource_policy');
    }
    public set namespaceResourcePolicy(value: string) {
        this._namespaceResourcePolicy = value;
    }
    public resetNamespaceResourcePolicy() {
        this._namespaceResourcePolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get namespaceResourcePolicyInput() {
        return this._namespaceResourcePolicy;
    }

    // node_type - computed: false, optional: false, required: true
    private _nodeType?: string; 
    public get nodeType() {
        return this.getStringAttribute('node_type');
    }
    public set nodeType(value: string) {
        this._nodeType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nodeTypeInput() {
        return this._nodeType;
    }

    // number_of_nodes - computed: true, optional: true, required: false
    private _numberOfNodes?: number; 
    public get numberOfNodes() {
        return this.getNumberAttribute('number_of_nodes');
    }
    public set numberOfNodes(value: number) {
        this._numberOfNodes = value;
    }
    public resetNumberOfNodes() {
        this._numberOfNodes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get numberOfNodesInput() {
        return this._numberOfNodes;
    }

    // owner_account - computed: true, optional: true, required: false
    private _ownerAccount?: string; 
    public get ownerAccount() {
        return this.getStringAttribute('owner_account');
    }
    public set ownerAccount(value: string) {
        this._ownerAccount = value;
    }
    public resetOwnerAccount() {
        this._ownerAccount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ownerAccountInput() {
        return this._ownerAccount;
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

    // resource_action - computed: true, optional: true, required: false
    private _resourceAction?: string; 
    public get resourceAction() {
        return this.getStringAttribute('resource_action');
    }
    public set resourceAction(value: string) {
        this._resourceAction = value;
    }
    public resetResourceAction() {
        this._resourceAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceActionInput() {
        return this._resourceAction;
    }

    // revision_target - computed: true, optional: true, required: false
    private _revisionTarget?: string; 
    public get revisionTarget() {
        return this.getStringAttribute('revision_target');
    }
    public set revisionTarget(value: string) {
        this._revisionTarget = value;
    }
    public resetRevisionTarget() {
        this._revisionTarget = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get revisionTargetInput() {
        return this._revisionTarget;
    }

    // rotate_encryption_key - computed: true, optional: true, required: false
    private _rotateEncryptionKey?: boolean | cdktn.IResolvable; 
    public get rotateEncryptionKey() {
        return this.getBooleanAttribute('rotate_encryption_key');
    }
    public set rotateEncryptionKey(value: boolean | cdktn.IResolvable) {
        this._rotateEncryptionKey = value;
    }
    public resetRotateEncryptionKey() {
        this._rotateEncryptionKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rotateEncryptionKeyInput() {
        return this._rotateEncryptionKey;
    }

    // snapshot_cluster_identifier - computed: true, optional: true, required: false
    private _snapshotClusterIdentifier?: string; 
    public get snapshotClusterIdentifier() {
        return this.getStringAttribute('snapshot_cluster_identifier');
    }
    public set snapshotClusterIdentifier(value: string) {
        this._snapshotClusterIdentifier = value;
    }
    public resetSnapshotClusterIdentifier() {
        this._snapshotClusterIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get snapshotClusterIdentifierInput() {
        return this._snapshotClusterIdentifier;
    }

    // snapshot_copy_grant_name - computed: true, optional: true, required: false
    private _snapshotCopyGrantName?: string; 
    public get snapshotCopyGrantName() {
        return this.getStringAttribute('snapshot_copy_grant_name');
    }
    public set snapshotCopyGrantName(value: string) {
        this._snapshotCopyGrantName = value;
    }
    public resetSnapshotCopyGrantName() {
        this._snapshotCopyGrantName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get snapshotCopyGrantNameInput() {
        return this._snapshotCopyGrantName;
    }

    // snapshot_copy_manual - computed: true, optional: true, required: false
    private _snapshotCopyManual?: boolean | cdktn.IResolvable; 
    public get snapshotCopyManual() {
        return this.getBooleanAttribute('snapshot_copy_manual');
    }
    public set snapshotCopyManual(value: boolean | cdktn.IResolvable) {
        this._snapshotCopyManual = value;
    }
    public resetSnapshotCopyManual() {
        this._snapshotCopyManual = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get snapshotCopyManualInput() {
        return this._snapshotCopyManual;
    }

    // snapshot_copy_retention_period - computed: true, optional: true, required: false
    private _snapshotCopyRetentionPeriod?: number; 
    public get snapshotCopyRetentionPeriod() {
        return this.getNumberAttribute('snapshot_copy_retention_period');
    }
    public set snapshotCopyRetentionPeriod(value: number) {
        this._snapshotCopyRetentionPeriod = value;
    }
    public resetSnapshotCopyRetentionPeriod() {
        this._snapshotCopyRetentionPeriod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get snapshotCopyRetentionPeriodInput() {
        return this._snapshotCopyRetentionPeriod;
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

    // tags - computed: true, optional: true, required: false
    private _tags = new CcCluster.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcCluster.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
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
            allow_version_upgrade: cdktn.booleanToTerraform(this._allowVersionUpgrade),
            aqua_configuration_status: cdktn.stringToTerraform(this._aquaConfigurationStatus),
            automated_snapshot_retention_period: cdktn.numberToTerraform(this._automatedSnapshotRetentionPeriod),
            availability_zone: cdktn.stringToTerraform(this._availabilityZone),
            availability_zone_relocation: cdktn.booleanToTerraform(this._availabilityZoneRelocation),
            availability_zone_relocation_status: cdktn.stringToTerraform(this._availabilityZoneRelocationStatus),
            classic: cdktn.booleanToTerraform(this._classic),
            cluster_identifier: cdktn.stringToTerraform(this._clusterIdentifier),
            cluster_parameter_group_name: cdktn.stringToTerraform(this._clusterParameterGroupName),
            cluster_security_groups: cdktn.listMapper(cdktn.stringToTerraform, false)(this._clusterSecurityGroups),
            cluster_subnet_group_name: cdktn.stringToTerraform(this._clusterSubnetGroupName),
            cluster_type: cdktn.stringToTerraform(this._clusterType),
            cluster_version: cdktn.stringToTerraform(this._clusterVersion),
            db_name: cdktn.stringToTerraform(this._dbName),
            defer_maintenance: cdktn.booleanToTerraform(this._deferMaintenance),
            defer_maintenance_duration: cdktn.numberToTerraform(this._deferMaintenanceDuration),
            defer_maintenance_end_time: cdktn.stringToTerraform(this._deferMaintenanceEndTime),
            defer_maintenance_start_time: cdktn.stringToTerraform(this._deferMaintenanceStartTime),
            destination_region: cdktn.stringToTerraform(this._destinationRegion),
            elastic_ip: cdktn.stringToTerraform(this._elasticIp),
            encrypted: cdktn.booleanToTerraform(this._encrypted),
            endpoint: ccClusterEndpointPropertyToTerraform(this._endpoint.internalValue),
            enhanced_vpc_routing: cdktn.booleanToTerraform(this._enhancedVpcRouting),
            hsm_client_certificate_identifier: cdktn.stringToTerraform(this._hsmClientCertificateIdentifier),
            hsm_configuration_identifier: cdktn.stringToTerraform(this._hsmConfigurationIdentifier),
            iam_roles: cdktn.listMapper(cdktn.stringToTerraform, false)(this._iamRoles),
            kms_key_id: cdktn.stringToTerraform(this._kmsKeyId),
            logging_properties: ccClusterLoggingPropertiesPropertyToTerraform(this._loggingProperties.internalValue),
            maintenance_track_name: cdktn.stringToTerraform(this._maintenanceTrackName),
            manage_master_password: cdktn.booleanToTerraform(this._manageMasterPassword),
            manual_snapshot_retention_period: cdktn.numberToTerraform(this._manualSnapshotRetentionPeriod),
            master_password_secret_kms_key_id: cdktn.stringToTerraform(this._masterPasswordSecretKmsKeyId),
            master_user_password: cdktn.stringToTerraform(this._masterUserPassword),
            master_username: cdktn.stringToTerraform(this._masterUsername),
            multi_az: cdktn.booleanToTerraform(this._multiAz),
            namespace_resource_policy: cdktn.stringToTerraform(this._namespaceResourcePolicy),
            node_type: cdktn.stringToTerraform(this._nodeType),
            number_of_nodes: cdktn.numberToTerraform(this._numberOfNodes),
            owner_account: cdktn.stringToTerraform(this._ownerAccount),
            port: cdktn.numberToTerraform(this._port),
            preferred_maintenance_window: cdktn.stringToTerraform(this._preferredMaintenanceWindow),
            publicly_accessible: cdktn.booleanToTerraform(this._publiclyAccessible),
            resource_action: cdktn.stringToTerraform(this._resourceAction),
            revision_target: cdktn.stringToTerraform(this._revisionTarget),
            rotate_encryption_key: cdktn.booleanToTerraform(this._rotateEncryptionKey),
            snapshot_cluster_identifier: cdktn.stringToTerraform(this._snapshotClusterIdentifier),
            snapshot_copy_grant_name: cdktn.stringToTerraform(this._snapshotCopyGrantName),
            snapshot_copy_manual: cdktn.booleanToTerraform(this._snapshotCopyManual),
            snapshot_copy_retention_period: cdktn.numberToTerraform(this._snapshotCopyRetentionPeriod),
            snapshot_identifier: cdktn.stringToTerraform(this._snapshotIdentifier),
            tags: cdktn.listMapper(ccClusterTagPropertyToTerraform, false)(this._tags.internalValue),
            vpc_security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._vpcSecurityGroupIds),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            allow_version_upgrade: {
                value: cdktn.booleanToHclTerraform(this._allowVersionUpgrade),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            aqua_configuration_status: {
                value: cdktn.stringToHclTerraform(this._aquaConfigurationStatus),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            automated_snapshot_retention_period: {
                value: cdktn.numberToHclTerraform(this._automatedSnapshotRetentionPeriod),
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
            availability_zone_relocation: {
                value: cdktn.booleanToHclTerraform(this._availabilityZoneRelocation),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            availability_zone_relocation_status: {
                value: cdktn.stringToHclTerraform(this._availabilityZoneRelocationStatus),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            classic: {
                value: cdktn.booleanToHclTerraform(this._classic),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            cluster_identifier: {
                value: cdktn.stringToHclTerraform(this._clusterIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            cluster_parameter_group_name: {
                value: cdktn.stringToHclTerraform(this._clusterParameterGroupName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            cluster_security_groups: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._clusterSecurityGroups),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            cluster_subnet_group_name: {
                value: cdktn.stringToHclTerraform(this._clusterSubnetGroupName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            cluster_type: {
                value: cdktn.stringToHclTerraform(this._clusterType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            cluster_version: {
                value: cdktn.stringToHclTerraform(this._clusterVersion),
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
            defer_maintenance: {
                value: cdktn.booleanToHclTerraform(this._deferMaintenance),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            defer_maintenance_duration: {
                value: cdktn.numberToHclTerraform(this._deferMaintenanceDuration),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            defer_maintenance_end_time: {
                value: cdktn.stringToHclTerraform(this._deferMaintenanceEndTime),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            defer_maintenance_start_time: {
                value: cdktn.stringToHclTerraform(this._deferMaintenanceStartTime),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            destination_region: {
                value: cdktn.stringToHclTerraform(this._destinationRegion),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            elastic_ip: {
                value: cdktn.stringToHclTerraform(this._elasticIp),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            encrypted: {
                value: cdktn.booleanToHclTerraform(this._encrypted),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            endpoint: {
                value: ccClusterEndpointPropertyToHclTerraform(this._endpoint.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCluster.EndpointProperty",
            },
            enhanced_vpc_routing: {
                value: cdktn.booleanToHclTerraform(this._enhancedVpcRouting),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            hsm_client_certificate_identifier: {
                value: cdktn.stringToHclTerraform(this._hsmClientCertificateIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            hsm_configuration_identifier: {
                value: cdktn.stringToHclTerraform(this._hsmConfigurationIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            iam_roles: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._iamRoles),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            kms_key_id: {
                value: cdktn.stringToHclTerraform(this._kmsKeyId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            logging_properties: {
                value: ccClusterLoggingPropertiesPropertyToHclTerraform(this._loggingProperties.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCluster.LoggingPropertiesProperty",
            },
            maintenance_track_name: {
                value: cdktn.stringToHclTerraform(this._maintenanceTrackName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            manage_master_password: {
                value: cdktn.booleanToHclTerraform(this._manageMasterPassword),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            manual_snapshot_retention_period: {
                value: cdktn.numberToHclTerraform(this._manualSnapshotRetentionPeriod),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            master_password_secret_kms_key_id: {
                value: cdktn.stringToHclTerraform(this._masterPasswordSecretKmsKeyId),
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
            master_username: {
                value: cdktn.stringToHclTerraform(this._masterUsername),
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
            namespace_resource_policy: {
                value: cdktn.stringToHclTerraform(this._namespaceResourcePolicy),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            node_type: {
                value: cdktn.stringToHclTerraform(this._nodeType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            number_of_nodes: {
                value: cdktn.numberToHclTerraform(this._numberOfNodes),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            owner_account: {
                value: cdktn.stringToHclTerraform(this._ownerAccount),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            port: {
                value: cdktn.numberToHclTerraform(this._port),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
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
            resource_action: {
                value: cdktn.stringToHclTerraform(this._resourceAction),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            revision_target: {
                value: cdktn.stringToHclTerraform(this._revisionTarget),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            rotate_encryption_key: {
                value: cdktn.booleanToHclTerraform(this._rotateEncryptionKey),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            snapshot_cluster_identifier: {
                value: cdktn.stringToHclTerraform(this._snapshotClusterIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            snapshot_copy_grant_name: {
                value: cdktn.stringToHclTerraform(this._snapshotCopyGrantName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            snapshot_copy_manual: {
                value: cdktn.booleanToHclTerraform(this._snapshotCopyManual),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            snapshot_copy_retention_period: {
                value: cdktn.numberToHclTerraform(this._snapshotCopyRetentionPeriod),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            snapshot_identifier: {
                value: cdktn.stringToHclTerraform(this._snapshotIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccClusterTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcCluster.TagPropertyList",
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

export function ccClusterEndpointPropertyToTerraform(struct?: CcCluster.EndpointProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccClusterEndpointPropertyToHclTerraform(struct?: CcCluster.EndpointProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccClusterLoggingPropertiesPropertyToTerraform(struct?: CcCluster.LoggingPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bucket_name: cdktn.stringToTerraform(struct!.bucketName),
        log_destination_type: cdktn.stringToTerraform(struct!.logDestinationType),
        log_exports: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.logExports),
        s3_key_prefix: cdktn.stringToTerraform(struct!.s3KeyPrefix),
    }
}


export function ccClusterLoggingPropertiesPropertyToHclTerraform(struct?: CcCluster.LoggingPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bucket_name: {
            value: cdktn.stringToHclTerraform(struct!.bucketName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        log_destination_type: {
            value: cdktn.stringToHclTerraform(struct!.logDestinationType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        log_exports: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.logExports),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        s3_key_prefix: {
            value: cdktn.stringToHclTerraform(struct!.s3KeyPrefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccClusterTagPropertyToTerraform(struct?: CcCluster.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccClusterTagPropertyToHclTerraform(struct?: CcCluster.TagProperty | cdktn.IResolvable): any {
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


export namespace CcCluster {
export interface EndpointProperty {
}
export class EndpointPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EndpointProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EndpointProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
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
export interface LoggingPropertiesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_cluster#bucket_name CcCluster#bucket_name}
    */
    readonly bucketName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_cluster#log_destination_type CcCluster#log_destination_type}
    */
    readonly logDestinationType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_cluster#log_exports CcCluster#log_exports}
    */
    readonly logExports?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_cluster#s3_key_prefix CcCluster#s3_key_prefix}
    */
    readonly s3KeyPrefix?: string;
}
export class LoggingPropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LoggingPropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bucketName !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketName = this._bucketName;
        }
        if (this._logDestinationType !== undefined) {
            hasAnyValues = true;
            internalValueResult.logDestinationType = this._logDestinationType;
        }
        if (this._logExports !== undefined) {
            hasAnyValues = true;
            internalValueResult.logExports = this._logExports;
        }
        if (this._s3KeyPrefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3KeyPrefix = this._s3KeyPrefix;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LoggingPropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bucketName = undefined;
            this._logDestinationType = undefined;
            this._logExports = undefined;
            this._s3KeyPrefix = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bucketName = value.bucketName;
            this._logDestinationType = value.logDestinationType;
            this._logExports = value.logExports;
            this._s3KeyPrefix = value.s3KeyPrefix;
        }
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

    // log_destination_type - computed: true, optional: true, required: false
    private _logDestinationType?: string; 
    public get logDestinationType() {
        return this.getStringAttribute('log_destination_type');
    }
    public set logDestinationType(value: string) {
        this._logDestinationType = value;
    }
    public resetLogDestinationType() {
        this._logDestinationType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logDestinationTypeInput() {
        return this._logDestinationType;
    }

    // log_exports - computed: true, optional: true, required: false
    private _logExports?: string[]; 
    public get logExports() {
        return this.getListAttribute('log_exports');
    }
    public set logExports(value: string[]) {
        this._logExports = value;
    }
    public resetLogExports() {
        this._logExports = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logExportsInput() {
        return this._logExports;
    }

    // s3_key_prefix - computed: true, optional: true, required: false
    private _s3KeyPrefix?: string; 
    public get s3KeyPrefix() {
        return this.getStringAttribute('s3_key_prefix');
    }
    public set s3KeyPrefix(value: string) {
        this._s3KeyPrefix = value;
    }
    public resetS3KeyPrefix() {
        this._s3KeyPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3KeyPrefixInput() {
        return this._s3KeyPrefix;
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_cluster#key CcCluster#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/redshift_cluster#value CcCluster#value}
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
