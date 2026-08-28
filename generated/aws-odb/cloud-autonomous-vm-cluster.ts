// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_autonomous_vm_cluster

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcCloudAutonomousVmClusterProps extends cdktn.TerraformMetaArguments {
    /**
    * The data storage size allocated for Autonomous Databases in the Autonomous VM cluster, in TB.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_autonomous_vm_cluster#autonomous_data_storage_size_in_t_bs CcCloudAutonomousVmCluster#autonomous_data_storage_size_in_t_bs}
    */
    readonly autonomousDataStorageSizeInTBs?: number;
    /**
    * The unique identifier of the Cloud Exadata Infrastructure containing this Autonomous VM cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_autonomous_vm_cluster#cloud_exadata_infrastructure_id CcCloudAutonomousVmCluster#cloud_exadata_infrastructure_id}
    */
    readonly cloudExadataInfrastructureId?: string;
    /**
    * The number of CPU cores enabled per node in the Autonomous VM cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_autonomous_vm_cluster#cpu_core_count_per_node CcCloudAutonomousVmCluster#cpu_core_count_per_node}
    */
    readonly cpuCoreCountPerNode?: number;
    /**
    * The list of database servers associated with the Autonomous VM cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_autonomous_vm_cluster#db_servers CcCloudAutonomousVmCluster#db_servers}
    */
    readonly dbServers?: string[];
    /**
    * The user-provided description of the Autonomous VM cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_autonomous_vm_cluster#description CcCloudAutonomousVmCluster#description}
    */
    readonly description?: string;
    /**
    * The display name of the Autonomous VM cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_autonomous_vm_cluster#display_name CcCloudAutonomousVmCluster#display_name}
    */
    readonly displayName?: string;
    /**
    * The AWS Identity and Access Management (IAM) service roles associated with the Autonomous VM cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_autonomous_vm_cluster#iam_roles CcCloudAutonomousVmCluster#iam_roles}
    */
    readonly iamRoles?: CcCloudAutonomousVmCluster.IamRoleProperty[] | cdktn.IResolvable;
    /**
    * Indicates whether mutual TLS (mTLS) authentication is enabled for the Autonomous VM cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_autonomous_vm_cluster#is_mtls_enabled_vm_cluster CcCloudAutonomousVmCluster#is_mtls_enabled_vm_cluster}
    */
    readonly isMtlsEnabledVmCluster?: boolean | cdktn.IResolvable;
    /**
    * The Oracle license model that applies to the Autonomous VM cluster. Valid values are LICENSE_INCLUDED or BRING_YOUR_OWN_LICENSE.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_autonomous_vm_cluster#license_model CcCloudAutonomousVmCluster#license_model}
    */
    readonly licenseModel?: string;
    /**
    * The scheduling details for the maintenance window. Patching and system updates take place during the maintenance window.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_autonomous_vm_cluster#maintenance_window CcCloudAutonomousVmCluster#maintenance_window}
    */
    readonly maintenanceWindow?: CcCloudAutonomousVmCluster.MaintenanceWindowProperty;
    /**
    * The amount of memory allocated per Oracle Compute Unit, in GB.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_autonomous_vm_cluster#memory_per_oracle_compute_unit_in_g_bs CcCloudAutonomousVmCluster#memory_per_oracle_compute_unit_in_g_bs}
    */
    readonly memoryPerOracleComputeUnitInGBs?: number;
    /**
    * The unique identifier of the ODB network associated with this Autonomous VM cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_autonomous_vm_cluster#odb_network_id CcCloudAutonomousVmCluster#odb_network_id}
    */
    readonly odbNetworkId?: string;
    /**
    * The SCAN listener port for non-TLS (TCP) protocol. The default is 1521.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_autonomous_vm_cluster#scan_listener_port_non_tls CcCloudAutonomousVmCluster#scan_listener_port_non_tls}
    */
    readonly scanListenerPortNonTls?: number;
    /**
    * The SCAN listener port for TLS (TCP) protocol. The default is 2484.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_autonomous_vm_cluster#scan_listener_port_tls CcCloudAutonomousVmCluster#scan_listener_port_tls}
    */
    readonly scanListenerPortTls?: number;
    /**
    * The tags associated with the Autonomous VM cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_autonomous_vm_cluster#tags CcCloudAutonomousVmCluster#tags}
    */
    readonly tags?: CcCloudAutonomousVmCluster.TagProperty[] | cdktn.IResolvable;
    /**
    * The time zone of the Autonomous VM cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_autonomous_vm_cluster#time_zone CcCloudAutonomousVmCluster#time_zone}
    */
    readonly timeZone?: string;
    /**
    * The total number of Autonomous Container Databases that can be created with the allocated local storage.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_autonomous_vm_cluster#total_container_databases CcCloudAutonomousVmCluster#total_container_databases}
    */
    readonly totalContainerDatabases?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_autonomous_vm_cluster awscc_odb_cloud_autonomous_vm_cluster}
*/
export class CcCloudAutonomousVmCluster extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_odb_cloud_autonomous_vm_cluster";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcCloudAutonomousVmCluster resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcCloudAutonomousVmCluster to import
    * @param importFromId The id of the existing CcCloudAutonomousVmCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_autonomous_vm_cluster#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcCloudAutonomousVmCluster to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_odb_cloud_autonomous_vm_cluster", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_autonomous_vm_cluster awscc_odb_cloud_autonomous_vm_cluster} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcCloudAutonomousVmClusterProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcCloudAutonomousVmClusterProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_odb_cloud_autonomous_vm_cluster',
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
        this._autonomousDataStorageSizeInTBs = config.autonomousDataStorageSizeInTBs;
        this._cloudExadataInfrastructureId = config.cloudExadataInfrastructureId;
        this._cpuCoreCountPerNode = config.cpuCoreCountPerNode;
        this._dbServers = config.dbServers;
        this._description = config.description;
        this._displayName = config.displayName;
        this._iamRoles.internalValue = config.iamRoles;
        this._isMtlsEnabledVmCluster = config.isMtlsEnabledVmCluster;
        this._licenseModel = config.licenseModel;
        this._maintenanceWindow.internalValue = config.maintenanceWindow;
        this._memoryPerOracleComputeUnitInGBs = config.memoryPerOracleComputeUnitInGBs;
        this._odbNetworkId = config.odbNetworkId;
        this._scanListenerPortNonTls = config.scanListenerPortNonTls;
        this._scanListenerPortTls = config.scanListenerPortTls;
        this._tags.internalValue = config.tags;
        this._timeZone = config.timeZone;
        this._totalContainerDatabases = config.totalContainerDatabases;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // autonomous_data_storage_percentage - computed: true, optional: false, required: false
    public get autonomousDataStoragePercentage() {
        return this.getNumberAttribute('autonomous_data_storage_percentage');
    }

    // autonomous_data_storage_size_in_t_bs - computed: true, optional: true, required: false
    private _autonomousDataStorageSizeInTBs?: number; 
    public get autonomousDataStorageSizeInTBs() {
        return this.getNumberAttribute('autonomous_data_storage_size_in_t_bs');
    }
    public set autonomousDataStorageSizeInTBs(value: number) {
        this._autonomousDataStorageSizeInTBs = value;
    }
    public resetAutonomousDataStorageSizeInTBs() {
        this._autonomousDataStorageSizeInTBs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autonomousDataStorageSizeInTBsInput() {
        return this._autonomousDataStorageSizeInTBs;
    }

    // available_autonomous_data_storage_size_in_t_bs - computed: true, optional: false, required: false
    public get availableAutonomousDataStorageSizeInTBs() {
        return this.getNumberAttribute('available_autonomous_data_storage_size_in_t_bs');
    }

    // available_container_databases - computed: true, optional: false, required: false
    public get availableContainerDatabases() {
        return this.getNumberAttribute('available_container_databases');
    }

    // available_cpus - computed: true, optional: false, required: false
    public get availableCpus() {
        return this.getNumberAttribute('available_cpus');
    }

    // cloud_autonomous_vm_cluster_arn - computed: true, optional: false, required: false
    public get cloudAutonomousVmClusterArn() {
        return this.getStringAttribute('cloud_autonomous_vm_cluster_arn');
    }

    // cloud_autonomous_vm_cluster_id - computed: true, optional: false, required: false
    public get cloudAutonomousVmClusterId() {
        return this.getStringAttribute('cloud_autonomous_vm_cluster_id');
    }

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

    // compute_model - computed: true, optional: false, required: false
    public get computeModel() {
        return this.getStringAttribute('compute_model');
    }

    // cpu_core_count - computed: true, optional: false, required: false
    public get cpuCoreCount() {
        return this.getNumberAttribute('cpu_core_count');
    }

    // cpu_core_count_per_node - computed: true, optional: true, required: false
    private _cpuCoreCountPerNode?: number; 
    public get cpuCoreCountPerNode() {
        return this.getNumberAttribute('cpu_core_count_per_node');
    }
    public set cpuCoreCountPerNode(value: number) {
        this._cpuCoreCountPerNode = value;
    }
    public resetCpuCoreCountPerNode() {
        this._cpuCoreCountPerNode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cpuCoreCountPerNodeInput() {
        return this._cpuCoreCountPerNode;
    }

    // cpu_percentage - computed: true, optional: false, required: false
    public get cpuPercentage() {
        return this.getNumberAttribute('cpu_percentage');
    }

    // data_storage_size_in_g_bs - computed: true, optional: false, required: false
    public get dataStorageSizeInGBs() {
        return this.getNumberAttribute('data_storage_size_in_g_bs');
    }

    // data_storage_size_in_t_bs - computed: true, optional: false, required: false
    public get dataStorageSizeInTBs() {
        return this.getNumberAttribute('data_storage_size_in_t_bs');
    }

    // db_node_storage_size_in_g_bs - computed: true, optional: false, required: false
    public get dbNodeStorageSizeInGBs() {
        return this.getNumberAttribute('db_node_storage_size_in_g_bs');
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

    // description - computed: true, optional: true, required: false
    private _description?: string; 
    public get description() {
        return this.getStringAttribute('description');
    }
    public set description(value: string) {
        this._description = value;
    }
    public resetDescription() {
        this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
        return this._description;
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

    // exadata_storage_in_t_bs_lowest_scaled_value - computed: true, optional: false, required: false
    public get exadataStorageInTBsLowestScaledValue() {
        return this.getNumberAttribute('exadata_storage_in_t_bs_lowest_scaled_value');
    }

    // hostname - computed: true, optional: false, required: false
    public get hostname() {
        return this.getStringAttribute('hostname');
    }

    // iam_roles - computed: true, optional: true, required: false
    private _iamRoles = new CcCloudAutonomousVmCluster.IamRolePropertyList(this, "iam_roles", true);
    public get iamRoles() {
        return this._iamRoles;
    }
    public putIamRoles(value: CcCloudAutonomousVmCluster.IamRoleProperty[] | cdktn.IResolvable) {
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

    // is_mtls_enabled_vm_cluster - computed: true, optional: true, required: false
    private _isMtlsEnabledVmCluster?: boolean | cdktn.IResolvable; 
    public get isMtlsEnabledVmCluster() {
        return this.getBooleanAttribute('is_mtls_enabled_vm_cluster');
    }
    public set isMtlsEnabledVmCluster(value: boolean | cdktn.IResolvable) {
        this._isMtlsEnabledVmCluster = value;
    }
    public resetIsMtlsEnabledVmCluster() {
        this._isMtlsEnabledVmCluster = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get isMtlsEnabledVmClusterInput() {
        return this._isMtlsEnabledVmCluster;
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

    // maintenance_window - computed: true, optional: true, required: false
    private _maintenanceWindow = new CcCloudAutonomousVmCluster.MaintenanceWindowPropertyOutputReference(this, "maintenance_window");
    public get maintenanceWindow() {
        return this._maintenanceWindow;
    }
    public putMaintenanceWindow(value: CcCloudAutonomousVmCluster.MaintenanceWindowProperty) {
        this._maintenanceWindow.internalValue = value;
    }
    public resetMaintenanceWindow() {
        this._maintenanceWindow.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maintenanceWindowInput() {
        return this._maintenanceWindow.internalValue;
    }

    // max_acds_lowest_scaled_value - computed: true, optional: false, required: false
    public get maxAcdsLowestScaledValue() {
        return this.getNumberAttribute('max_acds_lowest_scaled_value');
    }

    // memory_per_oracle_compute_unit_in_g_bs - computed: true, optional: true, required: false
    private _memoryPerOracleComputeUnitInGBs?: number; 
    public get memoryPerOracleComputeUnitInGBs() {
        return this.getNumberAttribute('memory_per_oracle_compute_unit_in_g_bs');
    }
    public set memoryPerOracleComputeUnitInGBs(value: number) {
        this._memoryPerOracleComputeUnitInGBs = value;
    }
    public resetMemoryPerOracleComputeUnitInGBs() {
        this._memoryPerOracleComputeUnitInGBs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get memoryPerOracleComputeUnitInGBsInput() {
        return this._memoryPerOracleComputeUnitInGBs;
    }

    // memory_size_in_g_bs - computed: true, optional: false, required: false
    public get memorySizeInGBs() {
        return this.getNumberAttribute('memory_size_in_g_bs');
    }

    // node_count - computed: true, optional: false, required: false
    public get nodeCount() {
        return this.getNumberAttribute('node_count');
    }

    // non_provisionable_autonomous_container_databases - computed: true, optional: false, required: false
    public get nonProvisionableAutonomousContainerDatabases() {
        return this.getNumberAttribute('non_provisionable_autonomous_container_databases');
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

    // provisionable_autonomous_container_databases - computed: true, optional: false, required: false
    public get provisionableAutonomousContainerDatabases() {
        return this.getNumberAttribute('provisionable_autonomous_container_databases');
    }

    // provisioned_autonomous_container_databases - computed: true, optional: false, required: false
    public get provisionedAutonomousContainerDatabases() {
        return this.getNumberAttribute('provisioned_autonomous_container_databases');
    }

    // provisioned_cpus - computed: true, optional: false, required: false
    public get provisionedCpus() {
        return this.getNumberAttribute('provisioned_cpus');
    }

    // reclaimable_cpus - computed: true, optional: false, required: false
    public get reclaimableCpus() {
        return this.getNumberAttribute('reclaimable_cpus');
    }

    // reserved_cpus - computed: true, optional: false, required: false
    public get reservedCpus() {
        return this.getNumberAttribute('reserved_cpus');
    }

    // scan_listener_port_non_tls - computed: true, optional: true, required: false
    private _scanListenerPortNonTls?: number; 
    public get scanListenerPortNonTls() {
        return this.getNumberAttribute('scan_listener_port_non_tls');
    }
    public set scanListenerPortNonTls(value: number) {
        this._scanListenerPortNonTls = value;
    }
    public resetScanListenerPortNonTls() {
        this._scanListenerPortNonTls = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scanListenerPortNonTlsInput() {
        return this._scanListenerPortNonTls;
    }

    // scan_listener_port_tls - computed: true, optional: true, required: false
    private _scanListenerPortTls?: number; 
    public get scanListenerPortTls() {
        return this.getNumberAttribute('scan_listener_port_tls');
    }
    public set scanListenerPortTls(value: number) {
        this._scanListenerPortTls = value;
    }
    public resetScanListenerPortTls() {
        this._scanListenerPortTls = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scanListenerPortTlsInput() {
        return this._scanListenerPortTls;
    }

    // shape - computed: true, optional: false, required: false
    public get shape() {
        return this.getStringAttribute('shape');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcCloudAutonomousVmCluster.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcCloudAutonomousVmCluster.TagProperty[] | cdktn.IResolvable) {
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

    // total_container_databases - computed: true, optional: true, required: false
    private _totalContainerDatabases?: number; 
    public get totalContainerDatabases() {
        return this.getNumberAttribute('total_container_databases');
    }
    public set totalContainerDatabases(value: number) {
        this._totalContainerDatabases = value;
    }
    public resetTotalContainerDatabases() {
        this._totalContainerDatabases = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get totalContainerDatabasesInput() {
        return this._totalContainerDatabases;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            autonomous_data_storage_size_in_t_bs: cdktn.numberToTerraform(this._autonomousDataStorageSizeInTBs),
            cloud_exadata_infrastructure_id: cdktn.stringToTerraform(this._cloudExadataInfrastructureId),
            cpu_core_count_per_node: cdktn.numberToTerraform(this._cpuCoreCountPerNode),
            db_servers: cdktn.listMapper(cdktn.stringToTerraform, false)(this._dbServers),
            description: cdktn.stringToTerraform(this._description),
            display_name: cdktn.stringToTerraform(this._displayName),
            iam_roles: cdktn.listMapper(ccCloudAutonomousVmClusterIamRolePropertyToTerraform, false)(this._iamRoles.internalValue),
            is_mtls_enabled_vm_cluster: cdktn.booleanToTerraform(this._isMtlsEnabledVmCluster),
            license_model: cdktn.stringToTerraform(this._licenseModel),
            maintenance_window: ccCloudAutonomousVmClusterMaintenanceWindowPropertyToTerraform(this._maintenanceWindow.internalValue),
            memory_per_oracle_compute_unit_in_g_bs: cdktn.numberToTerraform(this._memoryPerOracleComputeUnitInGBs),
            odb_network_id: cdktn.stringToTerraform(this._odbNetworkId),
            scan_listener_port_non_tls: cdktn.numberToTerraform(this._scanListenerPortNonTls),
            scan_listener_port_tls: cdktn.numberToTerraform(this._scanListenerPortTls),
            tags: cdktn.listMapper(ccCloudAutonomousVmClusterTagPropertyToTerraform, false)(this._tags.internalValue),
            time_zone: cdktn.stringToTerraform(this._timeZone),
            total_container_databases: cdktn.numberToTerraform(this._totalContainerDatabases),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            autonomous_data_storage_size_in_t_bs: {
                value: cdktn.numberToHclTerraform(this._autonomousDataStorageSizeInTBs),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            cloud_exadata_infrastructure_id: {
                value: cdktn.stringToHclTerraform(this._cloudExadataInfrastructureId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            cpu_core_count_per_node: {
                value: cdktn.numberToHclTerraform(this._cpuCoreCountPerNode),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            db_servers: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._dbServers),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            display_name: {
                value: cdktn.stringToHclTerraform(this._displayName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            iam_roles: {
                value: cdktn.listMapperHcl(ccCloudAutonomousVmClusterIamRolePropertyToHclTerraform, false)(this._iamRoles.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcCloudAutonomousVmCluster.IamRolePropertyList",
            },
            is_mtls_enabled_vm_cluster: {
                value: cdktn.booleanToHclTerraform(this._isMtlsEnabledVmCluster),
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
            maintenance_window: {
                value: ccCloudAutonomousVmClusterMaintenanceWindowPropertyToHclTerraform(this._maintenanceWindow.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCloudAutonomousVmCluster.MaintenanceWindowProperty",
            },
            memory_per_oracle_compute_unit_in_g_bs: {
                value: cdktn.numberToHclTerraform(this._memoryPerOracleComputeUnitInGBs),
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
            scan_listener_port_non_tls: {
                value: cdktn.numberToHclTerraform(this._scanListenerPortNonTls),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            scan_listener_port_tls: {
                value: cdktn.numberToHclTerraform(this._scanListenerPortTls),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            tags: {
                value: cdktn.listMapperHcl(ccCloudAutonomousVmClusterTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcCloudAutonomousVmCluster.TagPropertyList",
            },
            time_zone: {
                value: cdktn.stringToHclTerraform(this._timeZone),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            total_container_databases: {
                value: cdktn.numberToHclTerraform(this._totalContainerDatabases),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccCloudAutonomousVmClusterIamRolePropertyToTerraform(struct?: CcCloudAutonomousVmCluster.IamRoleProperty | cdktn.IResolvable): any {
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


export function ccCloudAutonomousVmClusterIamRolePropertyToHclTerraform(struct?: CcCloudAutonomousVmCluster.IamRoleProperty | cdktn.IResolvable): any {
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


export function ccCloudAutonomousVmClusterMaintenanceWindowPropertyToTerraform(struct?: CcCloudAutonomousVmCluster.MaintenanceWindowProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        days_of_week: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.daysOfWeek),
        hours_of_day: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.hoursOfDay),
        lead_time_in_weeks: cdktn.numberToTerraform(struct!.leadTimeInWeeks),
        months: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.months),
        preference: cdktn.stringToTerraform(struct!.preference),
        weeks_of_month: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.weeksOfMonth),
    }
}


export function ccCloudAutonomousVmClusterMaintenanceWindowPropertyToHclTerraform(struct?: CcCloudAutonomousVmCluster.MaintenanceWindowProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        days_of_week: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.daysOfWeek),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        hours_of_day: {
            value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.hoursOfDay),
            isBlock: false,
            type: "list",
            storageClassType: "numberList",
        },
        lead_time_in_weeks: {
            value: cdktn.numberToHclTerraform(struct!.leadTimeInWeeks),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        months: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.months),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        preference: {
            value: cdktn.stringToHclTerraform(struct!.preference),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        weeks_of_month: {
            value: cdktn.listMapperHcl(cdktn.numberToHclTerraform, false)(struct!.weeksOfMonth),
            isBlock: false,
            type: "list",
            storageClassType: "numberList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCloudAutonomousVmClusterTagPropertyToTerraform(struct?: CcCloudAutonomousVmCluster.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccCloudAutonomousVmClusterTagPropertyToHclTerraform(struct?: CcCloudAutonomousVmCluster.TagProperty | cdktn.IResolvable): any {
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


export namespace CcCloudAutonomousVmCluster {
export interface IamRoleProperty {
    /**
    * The AWS integration configuration settings for the AWS Identity and Access Management (IAM) service role.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_autonomous_vm_cluster#aws_integration CcCloudAutonomousVmCluster#aws_integration}
    */
    readonly awsIntegration?: string;
    /**
    * The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) service role.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_autonomous_vm_cluster#iam_role_arn CcCloudAutonomousVmCluster#iam_role_arn}
    */
    readonly iamRoleArn?: string;
    /**
    * The current status of the AWS Identity and Access Management (IAM) service role.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_autonomous_vm_cluster#status CcCloudAutonomousVmCluster#status}
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
export interface MaintenanceWindowProperty {
    /**
    * The days of the week when maintenance can be performed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_autonomous_vm_cluster#days_of_week CcCloudAutonomousVmCluster#days_of_week}
    */
    readonly daysOfWeek?: string[];
    /**
    * The hours of the day when maintenance can be performed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_autonomous_vm_cluster#hours_of_day CcCloudAutonomousVmCluster#hours_of_day}
    */
    readonly hoursOfDay?: number[];
    /**
    * The lead time in weeks before the maintenance window.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_autonomous_vm_cluster#lead_time_in_weeks CcCloudAutonomousVmCluster#lead_time_in_weeks}
    */
    readonly leadTimeInWeeks?: number;
    /**
    * The months when maintenance can be performed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_autonomous_vm_cluster#months CcCloudAutonomousVmCluster#months}
    */
    readonly months?: string[];
    /**
    * The preference for the maintenance window scheduling.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_autonomous_vm_cluster#preference CcCloudAutonomousVmCluster#preference}
    */
    readonly preference?: string;
    /**
    * The weeks of the month when maintenance can be performed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_autonomous_vm_cluster#weeks_of_month CcCloudAutonomousVmCluster#weeks_of_month}
    */
    readonly weeksOfMonth?: number[];
}
export class MaintenanceWindowPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MaintenanceWindowProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._daysOfWeek !== undefined) {
            hasAnyValues = true;
            internalValueResult.daysOfWeek = this._daysOfWeek;
        }
        if (this._hoursOfDay !== undefined) {
            hasAnyValues = true;
            internalValueResult.hoursOfDay = this._hoursOfDay;
        }
        if (this._leadTimeInWeeks !== undefined) {
            hasAnyValues = true;
            internalValueResult.leadTimeInWeeks = this._leadTimeInWeeks;
        }
        if (this._months !== undefined) {
            hasAnyValues = true;
            internalValueResult.months = this._months;
        }
        if (this._preference !== undefined) {
            hasAnyValues = true;
            internalValueResult.preference = this._preference;
        }
        if (this._weeksOfMonth !== undefined) {
            hasAnyValues = true;
            internalValueResult.weeksOfMonth = this._weeksOfMonth;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MaintenanceWindowProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._daysOfWeek = undefined;
            this._hoursOfDay = undefined;
            this._leadTimeInWeeks = undefined;
            this._months = undefined;
            this._preference = undefined;
            this._weeksOfMonth = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._daysOfWeek = value.daysOfWeek;
            this._hoursOfDay = value.hoursOfDay;
            this._leadTimeInWeeks = value.leadTimeInWeeks;
            this._months = value.months;
            this._preference = value.preference;
            this._weeksOfMonth = value.weeksOfMonth;
        }
    }

    // days_of_week - computed: true, optional: true, required: false
    private _daysOfWeek?: string[]; 
    public get daysOfWeek() {
        return this.getListAttribute('days_of_week');
    }
    public set daysOfWeek(value: string[]) {
        this._daysOfWeek = value;
    }
    public resetDaysOfWeek() {
        this._daysOfWeek = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get daysOfWeekInput() {
        return this._daysOfWeek;
    }

    // hours_of_day - computed: true, optional: true, required: false
    private _hoursOfDay?: number[]; 
    public get hoursOfDay() {
        return this.getNumberListAttribute('hours_of_day');
    }
    public set hoursOfDay(value: number[]) {
        this._hoursOfDay = value;
    }
    public resetHoursOfDay() {
        this._hoursOfDay = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hoursOfDayInput() {
        return this._hoursOfDay;
    }

    // lead_time_in_weeks - computed: true, optional: true, required: false
    private _leadTimeInWeeks?: number; 
    public get leadTimeInWeeks() {
        return this.getNumberAttribute('lead_time_in_weeks');
    }
    public set leadTimeInWeeks(value: number) {
        this._leadTimeInWeeks = value;
    }
    public resetLeadTimeInWeeks() {
        this._leadTimeInWeeks = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get leadTimeInWeeksInput() {
        return this._leadTimeInWeeks;
    }

    // months - computed: true, optional: true, required: false
    private _months?: string[]; 
    public get months() {
        return this.getListAttribute('months');
    }
    public set months(value: string[]) {
        this._months = value;
    }
    public resetMonths() {
        this._months = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get monthsInput() {
        return this._months;
    }

    // preference - computed: true, optional: true, required: false
    private _preference?: string; 
    public get preference() {
        return this.getStringAttribute('preference');
    }
    public set preference(value: string) {
        this._preference = value;
    }
    public resetPreference() {
        this._preference = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get preferenceInput() {
        return this._preference;
    }

    // weeks_of_month - computed: true, optional: true, required: false
    private _weeksOfMonth?: number[]; 
    public get weeksOfMonth() {
        return this.getNumberListAttribute('weeks_of_month');
    }
    public set weeksOfMonth(value: number[]) {
        this._weeksOfMonth = value;
    }
    public resetWeeksOfMonth() {
        this._weeksOfMonth = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get weeksOfMonthInput() {
        return this._weeksOfMonth;
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that's 1 to 128 Unicode characters in length and can't be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., :, /, =, +, @, -, and ".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_autonomous_vm_cluster#key CcCloudAutonomousVmCluster#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that's 1 to 256 characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/odb_cloud_autonomous_vm_cluster#value CcCloudAutonomousVmCluster#value}
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
