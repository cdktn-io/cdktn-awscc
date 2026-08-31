// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcCloudVmClusterProps extends cdktn.TerraformMetaArguments {
    /**
    * The unique identifier of the Exadata infrastructure that this VM cluster belongs to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#cloud_exadata_infrastructure_id CcCloudVmCluster#cloud_exadata_infrastructure_id}
    */
    readonly cloudExadataInfrastructureId?: string;
    /**
    * The name of the Grid Infrastructure (GI) cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#cluster_name CcCloudVmCluster#cluster_name}
    */
    readonly clusterName?: string;
    /**
    * The number of CPU cores enabled on the VM cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#cpu_core_count CcCloudVmCluster#cpu_core_count}
    */
    readonly cpuCoreCount?: number;
    /**
    * The set of diagnostic collection options enabled for the VM cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#data_collection_options CcCloudVmCluster#data_collection_options}
    */
    readonly dataCollectionOptions?: CcCloudVmCluster.DataCollectionOptionsProperty;
    /**
    * The size of the data disk group, in terabytes (TB), that's allocated for the VM cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#data_storage_size_in_t_bs CcCloudVmCluster#data_storage_size_in_t_bs}
    */
    readonly dataStorageSizeInTBs?: number;
    /**
    * The amount of local node storage, in gigabytes (GB), that's allocated for the VM cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#db_node_storage_size_in_g_bs CcCloudVmCluster#db_node_storage_size_in_g_bs}
    */
    readonly dbNodeStorageSizeInGBs?: number;
    /**
    * The DB nodes that are implicitly created and managed as part of this VM Cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#db_nodes CcCloudVmCluster#db_nodes}
    */
    readonly dbNodes?: CcCloudVmCluster.DbNodeProperty[] | cdktn.IResolvable;
    /**
    * The list of database servers for the VM cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#db_servers CcCloudVmCluster#db_servers}
    */
    readonly dbServers?: string[];
    /**
    * The user-friendly name for the VM cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#display_name CcCloudVmCluster#display_name}
    */
    readonly displayName?: string;
    /**
    * The software version of the Oracle Grid Infrastructure (GI) for the VM cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#gi_version CcCloudVmCluster#gi_version}
    */
    readonly giVersion?: string;
    /**
    * The host name for the VM cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#hostname CcCloudVmCluster#hostname}
    */
    readonly hostname?: string;
    /**
    * The AWS Identity and Access Management (IAM) service roles associated with the VM cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#iam_roles CcCloudVmCluster#iam_roles}
    */
    readonly iamRoles?: CcCloudVmCluster.IamRoleProperty[] | cdktn.IResolvable;
    /**
    * Indicates whether database backups to local Exadata storage is enabled for the VM cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#is_local_backup_enabled CcCloudVmCluster#is_local_backup_enabled}
    */
    readonly isLocalBackupEnabled?: boolean | cdktn.IResolvable;
    /**
    * Indicates whether the VM cluster is configured with a sparse disk group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#is_sparse_diskgroup_enabled CcCloudVmCluster#is_sparse_diskgroup_enabled}
    */
    readonly isSparseDiskgroupEnabled?: boolean | cdktn.IResolvable;
    /**
    * The Oracle license model applied to the VM cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#license_model CcCloudVmCluster#license_model}
    */
    readonly licenseModel?: string;
    /**
    * The amount of memory, in gigabytes (GB), that's allocated for the VM cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#memory_size_in_g_bs CcCloudVmCluster#memory_size_in_g_bs}
    */
    readonly memorySizeInGBs?: number;
    /**
    * The unique identifier of the ODB network for the VM cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#odb_network_id CcCloudVmCluster#odb_network_id}
    */
    readonly odbNetworkId?: string;
    /**
    * Property description not available.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#scan_listener_port_tcp CcCloudVmCluster#scan_listener_port_tcp}
    */
    readonly scanListenerPortTcp?: number;
    /**
    * The public key portion of one or more key pairs used for SSH access to the VM cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#ssh_public_keys CcCloudVmCluster#ssh_public_keys}
    */
    readonly sshPublicKeys?: string[];
    /**
    * The operating system version of the image chosen for the VM cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#system_version CcCloudVmCluster#system_version}
    */
    readonly systemVersion?: string;
    /**
    * Tags to assign to the Vm Cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#tags CcCloudVmCluster#tags}
    */
    readonly tags?: CcCloudVmCluster.TagsProperty[] | cdktn.IResolvable;
    /**
    * The time zone of the VM cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#time_zone CcCloudVmCluster#time_zone}
    */
    readonly timeZone?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster awscc_odb_cloud_vm_cluster}
*/
export class CcCloudVmCluster extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_odb_cloud_vm_cluster";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcCloudVmCluster resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcCloudVmCluster to import
    * @param importFromId The id of the existing CcCloudVmCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcCloudVmCluster to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_odb_cloud_vm_cluster", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster awscc_odb_cloud_vm_cluster} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcCloudVmClusterProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcCloudVmClusterProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_odb_cloud_vm_cluster',
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
        this._cloudExadataInfrastructureId = config.cloudExadataInfrastructureId;
        this._clusterName = config.clusterName;
        this._cpuCoreCount = config.cpuCoreCount;
        this._dataCollectionOptions.internalValue = config.dataCollectionOptions;
        this._dataStorageSizeInTBs = config.dataStorageSizeInTBs;
        this._dbNodeStorageSizeInGBs = config.dbNodeStorageSizeInGBs;
        this._dbNodes.internalValue = config.dbNodes;
        this._dbServers = config.dbServers;
        this._displayName = config.displayName;
        this._giVersion = config.giVersion;
        this._hostname = config.hostname;
        this._iamRoles.internalValue = config.iamRoles;
        this._isLocalBackupEnabled = config.isLocalBackupEnabled;
        this._isSparseDiskgroupEnabled = config.isSparseDiskgroupEnabled;
        this._licenseModel = config.licenseModel;
        this._memorySizeInGBs = config.memorySizeInGBs;
        this._odbNetworkId = config.odbNetworkId;
        this._scanListenerPortTcp = config.scanListenerPortTcp;
        this._sshPublicKeys = config.sshPublicKeys;
        this._systemVersion = config.systemVersion;
        this._tags.internalValue = config.tags;
        this._timeZone = config.timeZone;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // cloud_exadata_infrastructure_id - computed: true, optional: true, required: false
    private _cloudExadataInfrastructureId?: string; 
    public get cloudExadataInfrastructureId() {
        return this.getStringAttribute('cloud_exadata_infrastructure_id');
    }
    public set cloudExadataInfrastructureId(value: string) {
        this._cloudExadataInfrastructureId = value;
    }
    public resetCloudExadataInfrastructureId() {
        this._cloudExadataInfrastructureId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cloudExadataInfrastructureIdInput() {
        return this._cloudExadataInfrastructureId;
    }

    // cloud_vm_cluster_arn - computed: true, optional: false, required: false
    public get cloudVmClusterArn() {
        return this.getStringAttribute('cloud_vm_cluster_arn');
    }

    // cloud_vm_cluster_id - computed: true, optional: false, required: false
    public get cloudVmClusterId() {
        return this.getStringAttribute('cloud_vm_cluster_id');
    }

    // cluster_name - computed: true, optional: true, required: false
    private _clusterName?: string; 
    public get clusterName() {
        return this.getStringAttribute('cluster_name');
    }
    public set clusterName(value: string) {
        this._clusterName = value;
    }
    public resetClusterName() {
        this._clusterName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clusterNameInput() {
        return this._clusterName;
    }

    // compute_model - computed: true, optional: false, required: false
    public get computeModel() {
        return this.getStringAttribute('compute_model');
    }

    // cpu_core_count - computed: true, optional: true, required: false
    private _cpuCoreCount?: number; 
    public get cpuCoreCount() {
        return this.getNumberAttribute('cpu_core_count');
    }
    public set cpuCoreCount(value: number) {
        this._cpuCoreCount = value;
    }
    public resetCpuCoreCount() {
        this._cpuCoreCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cpuCoreCountInput() {
        return this._cpuCoreCount;
    }

    // data_collection_options - computed: true, optional: true, required: false
    private _dataCollectionOptions = new CcCloudVmCluster.DataCollectionOptionsPropertyOutputReference(this, "data_collection_options");
    public get dataCollectionOptions() {
        return this._dataCollectionOptions;
    }
    public putDataCollectionOptions(value: CcCloudVmCluster.DataCollectionOptionsProperty) {
        this._dataCollectionOptions.internalValue = value;
    }
    public resetDataCollectionOptions() {
        this._dataCollectionOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataCollectionOptionsInput() {
        return this._dataCollectionOptions.internalValue;
    }

    // data_storage_size_in_t_bs - computed: true, optional: true, required: false
    private _dataStorageSizeInTBs?: number; 
    public get dataStorageSizeInTBs() {
        return this.getNumberAttribute('data_storage_size_in_t_bs');
    }
    public set dataStorageSizeInTBs(value: number) {
        this._dataStorageSizeInTBs = value;
    }
    public resetDataStorageSizeInTBs() {
        this._dataStorageSizeInTBs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataStorageSizeInTBsInput() {
        return this._dataStorageSizeInTBs;
    }

    // db_node_storage_size_in_g_bs - computed: true, optional: true, required: false
    private _dbNodeStorageSizeInGBs?: number; 
    public get dbNodeStorageSizeInGBs() {
        return this.getNumberAttribute('db_node_storage_size_in_g_bs');
    }
    public set dbNodeStorageSizeInGBs(value: number) {
        this._dbNodeStorageSizeInGBs = value;
    }
    public resetDbNodeStorageSizeInGBs() {
        this._dbNodeStorageSizeInGBs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dbNodeStorageSizeInGBsInput() {
        return this._dbNodeStorageSizeInGBs;
    }

    // db_nodes - computed: true, optional: true, required: false
    private _dbNodes = new CcCloudVmCluster.DbNodePropertyList(this, "db_nodes", false);
    public get dbNodes() {
        return this._dbNodes;
    }
    public putDbNodes(value: CcCloudVmCluster.DbNodeProperty[] | cdktn.IResolvable) {
        this._dbNodes.internalValue = value;
    }
    public resetDbNodes() {
        this._dbNodes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dbNodesInput() {
        return this._dbNodes.internalValue;
    }

    // db_servers - computed: true, optional: true, required: false
    private _dbServers?: string[]; 
    public get dbServers() {
        return this.getListAttribute('db_servers');
    }
    public set dbServers(value: string[]) {
        this._dbServers = value;
    }
    public resetDbServers() {
        this._dbServers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dbServersInput() {
        return this._dbServers;
    }

    // disk_redundancy - computed: true, optional: false, required: false
    public get diskRedundancy() {
        return this.getStringAttribute('disk_redundancy');
    }

    // display_name - computed: true, optional: true, required: false
    private _displayName?: string; 
    public get displayName() {
        return this.getStringAttribute('display_name');
    }
    public set displayName(value: string) {
        this._displayName = value;
    }
    public resetDisplayName() {
        this._displayName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get displayNameInput() {
        return this._displayName;
    }

    // domain - computed: true, optional: false, required: false
    public get domain() {
        return this.getStringAttribute('domain');
    }

    // gi_version - computed: true, optional: true, required: false
    private _giVersion?: string; 
    public get giVersion() {
        return this.getStringAttribute('gi_version');
    }
    public set giVersion(value: string) {
        this._giVersion = value;
    }
    public resetGiVersion() {
        this._giVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get giVersionInput() {
        return this._giVersion;
    }

    // hostname - computed: true, optional: true, required: false
    private _hostname?: string; 
    public get hostname() {
        return this.getStringAttribute('hostname');
    }
    public set hostname(value: string) {
        this._hostname = value;
    }
    public resetHostname() {
        this._hostname = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostnameInput() {
        return this._hostname;
    }

    // iam_roles - computed: true, optional: true, required: false
    private _iamRoles = new CcCloudVmCluster.IamRolePropertyList(this, "iam_roles", true);
    public get iamRoles() {
        return this._iamRoles;
    }
    public putIamRoles(value: CcCloudVmCluster.IamRoleProperty[] | cdktn.IResolvable) {
        this._iamRoles.internalValue = value;
    }
    public resetIamRoles() {
        this._iamRoles.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iamRolesInput() {
        return this._iamRoles.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // is_local_backup_enabled - computed: true, optional: true, required: false
    private _isLocalBackupEnabled?: boolean | cdktn.IResolvable; 
    public get isLocalBackupEnabled() {
        return this.getBooleanAttribute('is_local_backup_enabled');
    }
    public set isLocalBackupEnabled(value: boolean | cdktn.IResolvable) {
        this._isLocalBackupEnabled = value;
    }
    public resetIsLocalBackupEnabled() {
        this._isLocalBackupEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get isLocalBackupEnabledInput() {
        return this._isLocalBackupEnabled;
    }

    // is_sparse_diskgroup_enabled - computed: true, optional: true, required: false
    private _isSparseDiskgroupEnabled?: boolean | cdktn.IResolvable; 
    public get isSparseDiskgroupEnabled() {
        return this.getBooleanAttribute('is_sparse_diskgroup_enabled');
    }
    public set isSparseDiskgroupEnabled(value: boolean | cdktn.IResolvable) {
        this._isSparseDiskgroupEnabled = value;
    }
    public resetIsSparseDiskgroupEnabled() {
        this._isSparseDiskgroupEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get isSparseDiskgroupEnabledInput() {
        return this._isSparseDiskgroupEnabled;
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

    // listener_port - computed: true, optional: false, required: false
    public get listenerPort() {
        return this.getNumberAttribute('listener_port');
    }

    // memory_size_in_g_bs - computed: true, optional: true, required: false
    private _memorySizeInGBs?: number; 
    public get memorySizeInGBs() {
        return this.getNumberAttribute('memory_size_in_g_bs');
    }
    public set memorySizeInGBs(value: number) {
        this._memorySizeInGBs = value;
    }
    public resetMemorySizeInGBs() {
        this._memorySizeInGBs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get memorySizeInGBsInput() {
        return this._memorySizeInGBs;
    }

    // node_count - computed: true, optional: false, required: false
    public get nodeCount() {
        return this.getNumberAttribute('node_count');
    }

    // oci_resource_anchor_name - computed: true, optional: false, required: false
    public get ociResourceAnchorName() {
        return this.getStringAttribute('oci_resource_anchor_name');
    }

    // oci_url - computed: true, optional: false, required: false
    public get ociUrl() {
        return this.getStringAttribute('oci_url');
    }

    // ocid - computed: true, optional: false, required: false
    public get ocid() {
        return this.getStringAttribute('ocid');
    }

    // odb_network_id - computed: true, optional: true, required: false
    private _odbNetworkId?: string; 
    public get odbNetworkId() {
        return this.getStringAttribute('odb_network_id');
    }
    public set odbNetworkId(value: string) {
        this._odbNetworkId = value;
    }
    public resetOdbNetworkId() {
        this._odbNetworkId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get odbNetworkIdInput() {
        return this._odbNetworkId;
    }

    // scan_dns_name - computed: true, optional: false, required: false
    public get scanDnsName() {
        return this.getStringAttribute('scan_dns_name');
    }

    // scan_ip_ids - computed: true, optional: false, required: false
    public get scanIpIds() {
        return this.getListAttribute('scan_ip_ids');
    }

    // scan_listener_port_tcp - computed: true, optional: true, required: false
    private _scanListenerPortTcp?: number; 
    public get scanListenerPortTcp() {
        return this.getNumberAttribute('scan_listener_port_tcp');
    }
    public set scanListenerPortTcp(value: number) {
        this._scanListenerPortTcp = value;
    }
    public resetScanListenerPortTcp() {
        this._scanListenerPortTcp = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scanListenerPortTcpInput() {
        return this._scanListenerPortTcp;
    }

    // shape - computed: true, optional: false, required: false
    public get shape() {
        return this.getStringAttribute('shape');
    }

    // ssh_public_keys - computed: true, optional: true, required: false
    private _sshPublicKeys?: string[]; 
    public get sshPublicKeys() {
        return this.getListAttribute('ssh_public_keys');
    }
    public set sshPublicKeys(value: string[]) {
        this._sshPublicKeys = value;
    }
    public resetSshPublicKeys() {
        this._sshPublicKeys = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sshPublicKeysInput() {
        return this._sshPublicKeys;
    }

    // storage_size_in_g_bs - computed: true, optional: false, required: false
    public get storageSizeInGBs() {
        return this.getNumberAttribute('storage_size_in_g_bs');
    }

    // system_version - computed: true, optional: true, required: false
    private _systemVersion?: string; 
    public get systemVersion() {
        return this.getStringAttribute('system_version');
    }
    public set systemVersion(value: string) {
        this._systemVersion = value;
    }
    public resetSystemVersion() {
        this._systemVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get systemVersionInput() {
        return this._systemVersion;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcCloudVmCluster.TagsPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcCloudVmCluster.TagsProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // time_zone - computed: true, optional: true, required: false
    private _timeZone?: string; 
    public get timeZone() {
        return this.getStringAttribute('time_zone');
    }
    public set timeZone(value: string) {
        this._timeZone = value;
    }
    public resetTimeZone() {
        this._timeZone = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeZoneInput() {
        return this._timeZone;
    }

    // vip_ids - computed: true, optional: false, required: false
    public get vipIds() {
        return this.getListAttribute('vip_ids');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            cloud_exadata_infrastructure_id: cdktn.stringToTerraform(this._cloudExadataInfrastructureId),
            cluster_name: cdktn.stringToTerraform(this._clusterName),
            cpu_core_count: cdktn.numberToTerraform(this._cpuCoreCount),
            data_collection_options: ccCloudVmClusterDataCollectionOptionsPropertyToTerraform(this._dataCollectionOptions.internalValue),
            data_storage_size_in_t_bs: cdktn.numberToTerraform(this._dataStorageSizeInTBs),
            db_node_storage_size_in_g_bs: cdktn.numberToTerraform(this._dbNodeStorageSizeInGBs),
            db_nodes: cdktn.listMapper(ccCloudVmClusterDbNodePropertyToTerraform, false)(this._dbNodes.internalValue),
            db_servers: cdktn.listMapper(cdktn.stringToTerraform, false)(this._dbServers),
            display_name: cdktn.stringToTerraform(this._displayName),
            gi_version: cdktn.stringToTerraform(this._giVersion),
            hostname: cdktn.stringToTerraform(this._hostname),
            iam_roles: cdktn.listMapper(ccCloudVmClusterIamRolePropertyToTerraform, false)(this._iamRoles.internalValue),
            is_local_backup_enabled: cdktn.booleanToTerraform(this._isLocalBackupEnabled),
            is_sparse_diskgroup_enabled: cdktn.booleanToTerraform(this._isSparseDiskgroupEnabled),
            license_model: cdktn.stringToTerraform(this._licenseModel),
            memory_size_in_g_bs: cdktn.numberToTerraform(this._memorySizeInGBs),
            odb_network_id: cdktn.stringToTerraform(this._odbNetworkId),
            scan_listener_port_tcp: cdktn.numberToTerraform(this._scanListenerPortTcp),
            ssh_public_keys: cdktn.listMapper(cdktn.stringToTerraform, false)(this._sshPublicKeys),
            system_version: cdktn.stringToTerraform(this._systemVersion),
            tags: cdktn.listMapper(ccCloudVmClusterTagsPropertyToTerraform, false)(this._tags.internalValue),
            time_zone: cdktn.stringToTerraform(this._timeZone),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            cloud_exadata_infrastructure_id: {
                value: cdktn.stringToHclTerraform(this._cloudExadataInfrastructureId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            cluster_name: {
                value: cdktn.stringToHclTerraform(this._clusterName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            cpu_core_count: {
                value: cdktn.numberToHclTerraform(this._cpuCoreCount),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            data_collection_options: {
                value: ccCloudVmClusterDataCollectionOptionsPropertyToHclTerraform(this._dataCollectionOptions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCloudVmCluster.DataCollectionOptionsProperty",
            },
            data_storage_size_in_t_bs: {
                value: cdktn.numberToHclTerraform(this._dataStorageSizeInTBs),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            db_node_storage_size_in_g_bs: {
                value: cdktn.numberToHclTerraform(this._dbNodeStorageSizeInGBs),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            db_nodes: {
                value: cdktn.listMapperHcl(ccCloudVmClusterDbNodePropertyToHclTerraform, false)(this._dbNodes.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcCloudVmCluster.DbNodePropertyList",
            },
            db_servers: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._dbServers),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            display_name: {
                value: cdktn.stringToHclTerraform(this._displayName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            gi_version: {
                value: cdktn.stringToHclTerraform(this._giVersion),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            hostname: {
                value: cdktn.stringToHclTerraform(this._hostname),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            iam_roles: {
                value: cdktn.listMapperHcl(ccCloudVmClusterIamRolePropertyToHclTerraform, false)(this._iamRoles.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcCloudVmCluster.IamRolePropertyList",
            },
            is_local_backup_enabled: {
                value: cdktn.booleanToHclTerraform(this._isLocalBackupEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            is_sparse_diskgroup_enabled: {
                value: cdktn.booleanToHclTerraform(this._isSparseDiskgroupEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            license_model: {
                value: cdktn.stringToHclTerraform(this._licenseModel),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            memory_size_in_g_bs: {
                value: cdktn.numberToHclTerraform(this._memorySizeInGBs),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            odb_network_id: {
                value: cdktn.stringToHclTerraform(this._odbNetworkId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            scan_listener_port_tcp: {
                value: cdktn.numberToHclTerraform(this._scanListenerPortTcp),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            ssh_public_keys: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._sshPublicKeys),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            system_version: {
                value: cdktn.stringToHclTerraform(this._systemVersion),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccCloudVmClusterTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcCloudVmCluster.TagsPropertyList",
            },
            time_zone: {
                value: cdktn.stringToHclTerraform(this._timeZone),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccCloudVmClusterDataCollectionOptionsPropertyToTerraform(struct?: CcCloudVmCluster.DataCollectionOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        is_diagnostics_events_enabled: cdktn.booleanToTerraform(struct!.isDiagnosticsEventsEnabled),
        is_health_monitoring_enabled: cdktn.booleanToTerraform(struct!.isHealthMonitoringEnabled),
        is_incident_logs_enabled: cdktn.booleanToTerraform(struct!.isIncidentLogsEnabled),
    }
}


export function ccCloudVmClusterDataCollectionOptionsPropertyToHclTerraform(struct?: CcCloudVmCluster.DataCollectionOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        is_diagnostics_events_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.isDiagnosticsEventsEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        is_health_monitoring_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.isHealthMonitoringEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        is_incident_logs_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.isIncidentLogsEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCloudVmClusterTagPropertyToTerraform(struct?: CcCloudVmCluster.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccCloudVmClusterTagPropertyToHclTerraform(struct?: CcCloudVmCluster.TagProperty | cdktn.IResolvable): any {
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


export function ccCloudVmClusterDbNodePropertyToTerraform(struct?: CcCloudVmCluster.DbNodeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        backup_ip_id: cdktn.stringToTerraform(struct!.backupIpId),
        backup_vnic_2_id: cdktn.stringToTerraform(struct!.backupVnic2Id),
        cpu_core_count: cdktn.numberToTerraform(struct!.cpuCoreCount),
        db_node_arn: cdktn.stringToTerraform(struct!.dbNodeArn),
        db_node_id: cdktn.stringToTerraform(struct!.dbNodeId),
        db_node_storage_size_in_g_bs: cdktn.numberToTerraform(struct!.dbNodeStorageSizeInGBs),
        db_server_id: cdktn.stringToTerraform(struct!.dbServerId),
        db_system_id: cdktn.stringToTerraform(struct!.dbSystemId),
        host_ip_id: cdktn.stringToTerraform(struct!.hostIpId),
        hostname: cdktn.stringToTerraform(struct!.hostname),
        memory_size_in_g_bs: cdktn.numberToTerraform(struct!.memorySizeInGBs),
        ocid: cdktn.stringToTerraform(struct!.ocid),
        status: cdktn.stringToTerraform(struct!.status),
        tags: cdktn.listMapper(ccCloudVmClusterTagPropertyToTerraform, false)(struct!.tags),
        vnic_2_id: cdktn.stringToTerraform(struct!.vnic2Id),
        vnic_id: cdktn.stringToTerraform(struct!.vnicId),
    }
}


export function ccCloudVmClusterDbNodePropertyToHclTerraform(struct?: CcCloudVmCluster.DbNodeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        backup_ip_id: {
            value: cdktn.stringToHclTerraform(struct!.backupIpId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        backup_vnic_2_id: {
            value: cdktn.stringToHclTerraform(struct!.backupVnic2Id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        cpu_core_count: {
            value: cdktn.numberToHclTerraform(struct!.cpuCoreCount),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        db_node_arn: {
            value: cdktn.stringToHclTerraform(struct!.dbNodeArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        db_node_id: {
            value: cdktn.stringToHclTerraform(struct!.dbNodeId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        db_node_storage_size_in_g_bs: {
            value: cdktn.numberToHclTerraform(struct!.dbNodeStorageSizeInGBs),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        db_server_id: {
            value: cdktn.stringToHclTerraform(struct!.dbServerId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        db_system_id: {
            value: cdktn.stringToHclTerraform(struct!.dbSystemId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        host_ip_id: {
            value: cdktn.stringToHclTerraform(struct!.hostIpId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        hostname: {
            value: cdktn.stringToHclTerraform(struct!.hostname),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        memory_size_in_g_bs: {
            value: cdktn.numberToHclTerraform(struct!.memorySizeInGBs),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        ocid: {
            value: cdktn.stringToHclTerraform(struct!.ocid),
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
        tags: {
            value: cdktn.listMapperHcl(ccCloudVmClusterTagPropertyToHclTerraform, false)(struct!.tags),
            isBlock: true,
            type: "list",
            storageClassType: "TagPropertyList",
        },
        vnic_2_id: {
            value: cdktn.stringToHclTerraform(struct!.vnic2Id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        vnic_id: {
            value: cdktn.stringToHclTerraform(struct!.vnicId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCloudVmClusterIamRolePropertyToTerraform(struct?: CcCloudVmCluster.IamRoleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        aws_integration: cdktn.stringToTerraform(struct!.awsIntegration),
        iam_role_arn: cdktn.stringToTerraform(struct!.iamRoleArn),
        status: cdktn.stringToTerraform(struct!.status),
    }
}


export function ccCloudVmClusterIamRolePropertyToHclTerraform(struct?: CcCloudVmCluster.IamRoleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        aws_integration: {
            value: cdktn.stringToHclTerraform(struct!.awsIntegration),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        iam_role_arn: {
            value: cdktn.stringToHclTerraform(struct!.iamRoleArn),
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


export function ccCloudVmClusterTagsPropertyToTerraform(struct?: CcCloudVmCluster.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccCloudVmClusterTagsPropertyToHclTerraform(struct?: CcCloudVmCluster.TagsProperty | cdktn.IResolvable): any {
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


export namespace CcCloudVmCluster {
export interface DataCollectionOptionsProperty {
    /**
    * Indicates whether diagnostic collection is enabled for the VM cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#is_diagnostics_events_enabled CcCloudVmCluster#is_diagnostics_events_enabled}
    */
    readonly isDiagnosticsEventsEnabled?: boolean | cdktn.IResolvable;
    /**
    * Indicates whether health monitoring is enabled for the VM cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#is_health_monitoring_enabled CcCloudVmCluster#is_health_monitoring_enabled}
    */
    readonly isHealthMonitoringEnabled?: boolean | cdktn.IResolvable;
    /**
    * Indicates whether incident logs are enabled for the cloud VM cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#is_incident_logs_enabled CcCloudVmCluster#is_incident_logs_enabled}
    */
    readonly isIncidentLogsEnabled?: boolean | cdktn.IResolvable;
}
export class DataCollectionOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DataCollectionOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._isDiagnosticsEventsEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.isDiagnosticsEventsEnabled = this._isDiagnosticsEventsEnabled;
        }
        if (this._isHealthMonitoringEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.isHealthMonitoringEnabled = this._isHealthMonitoringEnabled;
        }
        if (this._isIncidentLogsEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.isIncidentLogsEnabled = this._isIncidentLogsEnabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DataCollectionOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._isDiagnosticsEventsEnabled = undefined;
            this._isHealthMonitoringEnabled = undefined;
            this._isIncidentLogsEnabled = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._isDiagnosticsEventsEnabled = value.isDiagnosticsEventsEnabled;
            this._isHealthMonitoringEnabled = value.isHealthMonitoringEnabled;
            this._isIncidentLogsEnabled = value.isIncidentLogsEnabled;
        }
    }

    // is_diagnostics_events_enabled - computed: true, optional: true, required: false
    private _isDiagnosticsEventsEnabled?: boolean | cdktn.IResolvable; 
    public get isDiagnosticsEventsEnabled() {
        return this.getBooleanAttribute('is_diagnostics_events_enabled');
    }
    public set isDiagnosticsEventsEnabled(value: boolean | cdktn.IResolvable) {
        this._isDiagnosticsEventsEnabled = value;
    }
    public resetIsDiagnosticsEventsEnabled() {
        this._isDiagnosticsEventsEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get isDiagnosticsEventsEnabledInput() {
        return this._isDiagnosticsEventsEnabled;
    }

    // is_health_monitoring_enabled - computed: true, optional: true, required: false
    private _isHealthMonitoringEnabled?: boolean | cdktn.IResolvable; 
    public get isHealthMonitoringEnabled() {
        return this.getBooleanAttribute('is_health_monitoring_enabled');
    }
    public set isHealthMonitoringEnabled(value: boolean | cdktn.IResolvable) {
        this._isHealthMonitoringEnabled = value;
    }
    public resetIsHealthMonitoringEnabled() {
        this._isHealthMonitoringEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get isHealthMonitoringEnabledInput() {
        return this._isHealthMonitoringEnabled;
    }

    // is_incident_logs_enabled - computed: true, optional: true, required: false
    private _isIncidentLogsEnabled?: boolean | cdktn.IResolvable; 
    public get isIncidentLogsEnabled() {
        return this.getBooleanAttribute('is_incident_logs_enabled');
    }
    public set isIncidentLogsEnabled(value: boolean | cdktn.IResolvable) {
        this._isIncidentLogsEnabled = value;
    }
    public resetIsIncidentLogsEnabled() {
        this._isIncidentLogsEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get isIncidentLogsEnabledInput() {
        return this._isIncidentLogsEnabled;
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that's 1 to 128 Unicode characters in length and can't be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., :, /, =, +, @, -, and ".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#key CcCloudVmCluster#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that's 1 to 256 characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#value CcCloudVmCluster#value}
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
export interface DbNodeProperty {
    /**
    * The Oracle Cloud ID (OCID) of the backup IP address that's associated with the DB node.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#backup_ip_id CcCloudVmCluster#backup_ip_id}
    */
    readonly backupIpId?: string;
    /**
    * The OCID of the second backup virtual network interface card (VNIC) for the DB node.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#backup_vnic_2_id CcCloudVmCluster#backup_vnic_2_id}
    */
    readonly backupVnic2Id?: string;
    /**
    * The number of CPU cores enabled on the DB node.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#cpu_core_count CcCloudVmCluster#cpu_core_count}
    */
    readonly cpuCoreCount?: number;
    /**
    * The Amazon Resource Name (ARN) of the DB node.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#db_node_arn CcCloudVmCluster#db_node_arn}
    */
    readonly dbNodeArn?: string;
    /**
    * The unique identifier of the DB node.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#db_node_id CcCloudVmCluster#db_node_id}
    */
    readonly dbNodeId?: string;
    /**
    * The amount of local node storage, in gigabytes (GB), that's allocated on the DB node.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#db_node_storage_size_in_g_bs CcCloudVmCluster#db_node_storage_size_in_g_bs}
    */
    readonly dbNodeStorageSizeInGBs?: number;
    /**
    * The unique identifier of the database server that's associated with the DB node.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#db_server_id CcCloudVmCluster#db_server_id}
    */
    readonly dbServerId?: string;
    /**
    * The OCID of the DB system.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#db_system_id CcCloudVmCluster#db_system_id}
    */
    readonly dbSystemId?: string;
    /**
    * The OCID of the host IP address that's associated with the DB node.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#host_ip_id CcCloudVmCluster#host_ip_id}
    */
    readonly hostIpId?: string;
    /**
    * The host name for the DB node.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#hostname CcCloudVmCluster#hostname}
    */
    readonly hostname?: string;
    /**
    * The amount of memory, in gigabytes (GB), that allocated on the DB node.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#memory_size_in_g_bs CcCloudVmCluster#memory_size_in_g_bs}
    */
    readonly memorySizeInGBs?: number;
    /**
    * The OCID of the DB node.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#ocid CcCloudVmCluster#ocid}
    */
    readonly ocid?: string;
    /**
    * The current status of the DB node.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#status CcCloudVmCluster#status}
    */
    readonly status?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#tags CcCloudVmCluster#tags}
    */
    readonly tags?: TagProperty[] | cdktn.IResolvable;
    /**
    * The OCID of the second VNIC.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#vnic_2_id CcCloudVmCluster#vnic_2_id}
    */
    readonly vnic2Id?: string;
    /**
    * The OCID of the VNIC.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#vnic_id CcCloudVmCluster#vnic_id}
    */
    readonly vnicId?: string;
}
export class DbNodePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): DbNodeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._backupIpId !== undefined) {
            hasAnyValues = true;
            internalValueResult.backupIpId = this._backupIpId;
        }
        if (this._backupVnic2Id !== undefined) {
            hasAnyValues = true;
            internalValueResult.backupVnic2Id = this._backupVnic2Id;
        }
        if (this._cpuCoreCount !== undefined) {
            hasAnyValues = true;
            internalValueResult.cpuCoreCount = this._cpuCoreCount;
        }
        if (this._dbNodeArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.dbNodeArn = this._dbNodeArn;
        }
        if (this._dbNodeId !== undefined) {
            hasAnyValues = true;
            internalValueResult.dbNodeId = this._dbNodeId;
        }
        if (this._dbNodeStorageSizeInGBs !== undefined) {
            hasAnyValues = true;
            internalValueResult.dbNodeStorageSizeInGBs = this._dbNodeStorageSizeInGBs;
        }
        if (this._dbServerId !== undefined) {
            hasAnyValues = true;
            internalValueResult.dbServerId = this._dbServerId;
        }
        if (this._dbSystemId !== undefined) {
            hasAnyValues = true;
            internalValueResult.dbSystemId = this._dbSystemId;
        }
        if (this._hostIpId !== undefined) {
            hasAnyValues = true;
            internalValueResult.hostIpId = this._hostIpId;
        }
        if (this._hostname !== undefined) {
            hasAnyValues = true;
            internalValueResult.hostname = this._hostname;
        }
        if (this._memorySizeInGBs !== undefined) {
            hasAnyValues = true;
            internalValueResult.memorySizeInGBs = this._memorySizeInGBs;
        }
        if (this._ocid !== undefined) {
            hasAnyValues = true;
            internalValueResult.ocid = this._ocid;
        }
        if (this._status !== undefined) {
            hasAnyValues = true;
            internalValueResult.status = this._status;
        }
        if (this._tags?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tags = this._tags?.internalValue;
        }
        if (this._vnic2Id !== undefined) {
            hasAnyValues = true;
            internalValueResult.vnic2Id = this._vnic2Id;
        }
        if (this._vnicId !== undefined) {
            hasAnyValues = true;
            internalValueResult.vnicId = this._vnicId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DbNodeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._backupIpId = undefined;
            this._backupVnic2Id = undefined;
            this._cpuCoreCount = undefined;
            this._dbNodeArn = undefined;
            this._dbNodeId = undefined;
            this._dbNodeStorageSizeInGBs = undefined;
            this._dbServerId = undefined;
            this._dbSystemId = undefined;
            this._hostIpId = undefined;
            this._hostname = undefined;
            this._memorySizeInGBs = undefined;
            this._ocid = undefined;
            this._status = undefined;
            this._tags.internalValue = undefined;
            this._vnic2Id = undefined;
            this._vnicId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._backupIpId = value.backupIpId;
            this._backupVnic2Id = value.backupVnic2Id;
            this._cpuCoreCount = value.cpuCoreCount;
            this._dbNodeArn = value.dbNodeArn;
            this._dbNodeId = value.dbNodeId;
            this._dbNodeStorageSizeInGBs = value.dbNodeStorageSizeInGBs;
            this._dbServerId = value.dbServerId;
            this._dbSystemId = value.dbSystemId;
            this._hostIpId = value.hostIpId;
            this._hostname = value.hostname;
            this._memorySizeInGBs = value.memorySizeInGBs;
            this._ocid = value.ocid;
            this._status = value.status;
            this._tags.internalValue = value.tags;
            this._vnic2Id = value.vnic2Id;
            this._vnicId = value.vnicId;
        }
    }

    // backup_ip_id - computed: true, optional: true, required: false
    private _backupIpId?: string; 
    public get backupIpId() {
        return this.getStringAttribute('backup_ip_id');
    }
    public set backupIpId(value: string) {
        this._backupIpId = value;
    }
    public resetBackupIpId() {
        this._backupIpId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get backupIpIdInput() {
        return this._backupIpId;
    }

    // backup_vnic_2_id - computed: true, optional: true, required: false
    private _backupVnic2Id?: string; 
    public get backupVnic2Id() {
        return this.getStringAttribute('backup_vnic_2_id');
    }
    public set backupVnic2Id(value: string) {
        this._backupVnic2Id = value;
    }
    public resetBackupVnic2Id() {
        this._backupVnic2Id = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get backupVnic2IdInput() {
        return this._backupVnic2Id;
    }

    // cpu_core_count - computed: true, optional: true, required: false
    private _cpuCoreCount?: number; 
    public get cpuCoreCount() {
        return this.getNumberAttribute('cpu_core_count');
    }
    public set cpuCoreCount(value: number) {
        this._cpuCoreCount = value;
    }
    public resetCpuCoreCount() {
        this._cpuCoreCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cpuCoreCountInput() {
        return this._cpuCoreCount;
    }

    // db_node_arn - computed: true, optional: true, required: false
    private _dbNodeArn?: string; 
    public get dbNodeArn() {
        return this.getStringAttribute('db_node_arn');
    }
    public set dbNodeArn(value: string) {
        this._dbNodeArn = value;
    }
    public resetDbNodeArn() {
        this._dbNodeArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dbNodeArnInput() {
        return this._dbNodeArn;
    }

    // db_node_id - computed: true, optional: true, required: false
    private _dbNodeId?: string; 
    public get dbNodeId() {
        return this.getStringAttribute('db_node_id');
    }
    public set dbNodeId(value: string) {
        this._dbNodeId = value;
    }
    public resetDbNodeId() {
        this._dbNodeId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dbNodeIdInput() {
        return this._dbNodeId;
    }

    // db_node_storage_size_in_g_bs - computed: true, optional: true, required: false
    private _dbNodeStorageSizeInGBs?: number; 
    public get dbNodeStorageSizeInGBs() {
        return this.getNumberAttribute('db_node_storage_size_in_g_bs');
    }
    public set dbNodeStorageSizeInGBs(value: number) {
        this._dbNodeStorageSizeInGBs = value;
    }
    public resetDbNodeStorageSizeInGBs() {
        this._dbNodeStorageSizeInGBs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dbNodeStorageSizeInGBsInput() {
        return this._dbNodeStorageSizeInGBs;
    }

    // db_server_id - computed: true, optional: true, required: false
    private _dbServerId?: string; 
    public get dbServerId() {
        return this.getStringAttribute('db_server_id');
    }
    public set dbServerId(value: string) {
        this._dbServerId = value;
    }
    public resetDbServerId() {
        this._dbServerId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dbServerIdInput() {
        return this._dbServerId;
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

    // host_ip_id - computed: true, optional: true, required: false
    private _hostIpId?: string; 
    public get hostIpId() {
        return this.getStringAttribute('host_ip_id');
    }
    public set hostIpId(value: string) {
        this._hostIpId = value;
    }
    public resetHostIpId() {
        this._hostIpId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostIpIdInput() {
        return this._hostIpId;
    }

    // hostname - computed: true, optional: true, required: false
    private _hostname?: string; 
    public get hostname() {
        return this.getStringAttribute('hostname');
    }
    public set hostname(value: string) {
        this._hostname = value;
    }
    public resetHostname() {
        this._hostname = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostnameInput() {
        return this._hostname;
    }

    // memory_size_in_g_bs - computed: true, optional: true, required: false
    private _memorySizeInGBs?: number; 
    public get memorySizeInGBs() {
        return this.getNumberAttribute('memory_size_in_g_bs');
    }
    public set memorySizeInGBs(value: number) {
        this._memorySizeInGBs = value;
    }
    public resetMemorySizeInGBs() {
        this._memorySizeInGBs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get memorySizeInGBsInput() {
        return this._memorySizeInGBs;
    }

    // ocid - computed: true, optional: true, required: false
    private _ocid?: string; 
    public get ocid() {
        return this.getStringAttribute('ocid');
    }
    public set ocid(value: string) {
        this._ocid = value;
    }
    public resetOcid() {
        this._ocid = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ocidInput() {
        return this._ocid;
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

    // vnic_2_id - computed: true, optional: true, required: false
    private _vnic2Id?: string; 
    public get vnic2Id() {
        return this.getStringAttribute('vnic_2_id');
    }
    public set vnic2Id(value: string) {
        this._vnic2Id = value;
    }
    public resetVnic2Id() {
        this._vnic2Id = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vnic2IdInput() {
        return this._vnic2Id;
    }

    // vnic_id - computed: true, optional: true, required: false
    private _vnicId?: string; 
    public get vnicId() {
        return this.getStringAttribute('vnic_id');
    }
    public set vnicId(value: string) {
        this._vnicId = value;
    }
    public resetVnicId() {
        this._vnicId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vnicIdInput() {
        return this._vnicId;
    }
}

export class DbNodePropertyList extends cdktn.ComplexList {
    public internalValue? : DbNodeProperty[] | cdktn.IResolvable

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
    public get(index: number): DbNodePropertyOutputReference {
        return new DbNodePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface IamRoleProperty {
    /**
    * The AWS integration configuration settings for the AWS Identity and Access Management (IAM) service role.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#aws_integration CcCloudVmCluster#aws_integration}
    */
    readonly awsIntegration?: string;
    /**
    * The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) service role.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#iam_role_arn CcCloudVmCluster#iam_role_arn}
    */
    readonly iamRoleArn?: string;
    /**
    * The current status of the AWS Identity and Access Management (IAM) service role.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#status CcCloudVmCluster#status}
    */
    readonly status?: string;
}
export class IamRolePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): IamRoleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._awsIntegration !== undefined) {
            hasAnyValues = true;
            internalValueResult.awsIntegration = this._awsIntegration;
        }
        if (this._iamRoleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.iamRoleArn = this._iamRoleArn;
        }
        if (this._status !== undefined) {
            hasAnyValues = true;
            internalValueResult.status = this._status;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IamRoleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._awsIntegration = undefined;
            this._iamRoleArn = undefined;
            this._status = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._awsIntegration = value.awsIntegration;
            this._iamRoleArn = value.iamRoleArn;
            this._status = value.status;
        }
    }

    // aws_integration - computed: true, optional: true, required: false
    private _awsIntegration?: string; 
    public get awsIntegration() {
        return this.getStringAttribute('aws_integration');
    }
    public set awsIntegration(value: string) {
        this._awsIntegration = value;
    }
    public resetAwsIntegration() {
        this._awsIntegration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get awsIntegrationInput() {
        return this._awsIntegration;
    }

    // iam_role_arn - computed: true, optional: true, required: false
    private _iamRoleArn?: string; 
    public get iamRoleArn() {
        return this.getStringAttribute('iam_role_arn');
    }
    public set iamRoleArn(value: string) {
        this._iamRoleArn = value;
    }
    public resetIamRoleArn() {
        this._iamRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iamRoleArnInput() {
        return this._iamRoleArn;
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

export class IamRolePropertyList extends cdktn.ComplexList {
    public internalValue? : IamRoleProperty[] | cdktn.IResolvable

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
    public get(index: number): IamRolePropertyOutputReference {
        return new IamRolePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagsProperty {
    /**
    * The key name of the tag. You can specify a value that's 1 to 128 Unicode characters in length and can't be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., :, /, =, +, @, -, and ".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#key CcCloudVmCluster#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that's 1 to 256 characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_vm_cluster#value CcCloudVmCluster#value}
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
}
