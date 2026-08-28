// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/odb_cloud_exadata_infrastructure

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcCloudExadataInfrastructureProps extends cdktn.TerraformMetaArguments {
    /**
    * The name of the Availability Zone (AZ) where the Exadata infrastructure is located.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/odb_cloud_exadata_infrastructure#availability_zone CcCloudExadataInfrastructure#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * The AZ ID of the AZ where the Exadata infrastructure is located.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/odb_cloud_exadata_infrastructure#availability_zone_id CcCloudExadataInfrastructure#availability_zone_id}
    */
    readonly availabilityZoneId?: string;
    /**
    * The number of database servers for the Exadata infrastructure.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/odb_cloud_exadata_infrastructure#compute_count CcCloudExadataInfrastructure#compute_count}
    */
    readonly computeCount?: number;
    /**
    * The email addresses of contacts to receive notification from Oracle about maintenance updates for the Exadata infrastructure.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/odb_cloud_exadata_infrastructure#customer_contacts_to_send_to_oci CcCloudExadataInfrastructure#customer_contacts_to_send_to_oci}
    */
    readonly customerContactsToSendToOci?: CcCloudExadataInfrastructure.CustomerContactProperty[] | cdktn.IResolvable;
    /**
    * The database server model type of the Exadata infrastructure. For the list of valid model names, use the ListDbSystemShapes operation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/odb_cloud_exadata_infrastructure#database_server_type CcCloudExadataInfrastructure#database_server_type}
    */
    readonly databaseServerType?: string;
    /**
    * The user-friendly name for the Exadata infrastructure.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/odb_cloud_exadata_infrastructure#display_name CcCloudExadataInfrastructure#display_name}
    */
    readonly displayName?: string;
    /**
    * The scheduling details for the maintenance window. Patching and system updates take place during the maintenance window.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/odb_cloud_exadata_infrastructure#maintenance_window CcCloudExadataInfrastructure#maintenance_window}
    */
    readonly maintenanceWindow?: CcCloudExadataInfrastructure.MaintenanceWindowProperty;
    /**
    * The model name of the Exadata infrastructure.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/odb_cloud_exadata_infrastructure#shape CcCloudExadataInfrastructure#shape}
    */
    readonly shape?: string;
    /**
    * The number of storage servers that are activated for the Exadata infrastructure.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/odb_cloud_exadata_infrastructure#storage_count CcCloudExadataInfrastructure#storage_count}
    */
    readonly storageCount?: number;
    /**
    * The storage server model type of the Exadata infrastructure. For the list of valid model names, use the ListDbSystemShapes operation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/odb_cloud_exadata_infrastructure#storage_server_type CcCloudExadataInfrastructure#storage_server_type}
    */
    readonly storageServerType?: string;
    /**
    * Tags to assign to the Exadata Infrastructure.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/odb_cloud_exadata_infrastructure#tags CcCloudExadataInfrastructure#tags}
    */
    readonly tags?: CcCloudExadataInfrastructure.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/odb_cloud_exadata_infrastructure awscc_odb_cloud_exadata_infrastructure}
*/
export class CcCloudExadataInfrastructure extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_odb_cloud_exadata_infrastructure";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcCloudExadataInfrastructure resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcCloudExadataInfrastructure to import
    * @param importFromId The id of the existing CcCloudExadataInfrastructure that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/odb_cloud_exadata_infrastructure#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcCloudExadataInfrastructure to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_odb_cloud_exadata_infrastructure", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/odb_cloud_exadata_infrastructure awscc_odb_cloud_exadata_infrastructure} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcCloudExadataInfrastructureProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcCloudExadataInfrastructureProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_odb_cloud_exadata_infrastructure',
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
        this._availabilityZone = config.availabilityZone;
        this._availabilityZoneId = config.availabilityZoneId;
        this._computeCount = config.computeCount;
        this._customerContactsToSendToOci.internalValue = config.customerContactsToSendToOci;
        this._databaseServerType = config.databaseServerType;
        this._displayName = config.displayName;
        this._maintenanceWindow.internalValue = config.maintenanceWindow;
        this._shape = config.shape;
        this._storageCount = config.storageCount;
        this._storageServerType = config.storageServerType;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // activated_storage_count - computed: true, optional: false, required: false
    public get activatedStorageCount() {
        return this.getNumberAttribute('activated_storage_count');
    }

    // additional_storage_count - computed: true, optional: false, required: false
    public get additionalStorageCount() {
        return this.getNumberAttribute('additional_storage_count');
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

    // availability_zone_id - computed: true, optional: true, required: false
    private _availabilityZoneId?: string; 
    public get availabilityZoneId() {
        return this.getStringAttribute('availability_zone_id');
    }
    public set availabilityZoneId(value: string) {
        this._availabilityZoneId = value;
    }
    public resetAvailabilityZoneId() {
        this._availabilityZoneId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get availabilityZoneIdInput() {
        return this._availabilityZoneId;
    }

    // available_storage_size_in_g_bs - computed: true, optional: false, required: false
    public get availableStorageSizeInGBs() {
        return this.getNumberAttribute('available_storage_size_in_g_bs');
    }

    // cloud_exadata_infrastructure_arn - computed: true, optional: false, required: false
    public get cloudExadataInfrastructureArn() {
        return this.getStringAttribute('cloud_exadata_infrastructure_arn');
    }

    // cloud_exadata_infrastructure_id - computed: true, optional: false, required: false
    public get cloudExadataInfrastructureId() {
        return this.getStringAttribute('cloud_exadata_infrastructure_id');
    }

    // compute_count - computed: true, optional: true, required: false
    private _computeCount?: number; 
    public get computeCount() {
        return this.getNumberAttribute('compute_count');
    }
    public set computeCount(value: number) {
        this._computeCount = value;
    }
    public resetComputeCount() {
        this._computeCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get computeCountInput() {
        return this._computeCount;
    }

    // compute_model - computed: true, optional: false, required: false
    public get computeModel() {
        return this.getStringAttribute('compute_model');
    }

    // cpu_count - computed: true, optional: false, required: false
    public get cpuCount() {
        return this.getNumberAttribute('cpu_count');
    }

    // customer_contacts_to_send_to_oci - computed: true, optional: true, required: false
    private _customerContactsToSendToOci = new CcCloudExadataInfrastructure.CustomerContactPropertyList(this, "customer_contacts_to_send_to_oci", false);
    public get customerContactsToSendToOci() {
        return this._customerContactsToSendToOci;
    }
    public putCustomerContactsToSendToOci(value: CcCloudExadataInfrastructure.CustomerContactProperty[] | cdktn.IResolvable) {
        this._customerContactsToSendToOci.internalValue = value;
    }
    public resetCustomerContactsToSendToOci() {
        this._customerContactsToSendToOci.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customerContactsToSendToOciInput() {
        return this._customerContactsToSendToOci.internalValue;
    }

    // data_storage_size_in_t_bs - computed: true, optional: false, required: false
    public get dataStorageSizeInTBs() {
        return this.getNumberAttribute('data_storage_size_in_t_bs');
    }

    // database_server_type - computed: true, optional: true, required: false
    private _databaseServerType?: string; 
    public get databaseServerType() {
        return this.getStringAttribute('database_server_type');
    }
    public set databaseServerType(value: string) {
        this._databaseServerType = value;
    }
    public resetDatabaseServerType() {
        this._databaseServerType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseServerTypeInput() {
        return this._databaseServerType;
    }

    // db_node_storage_size_in_g_bs - computed: true, optional: false, required: false
    public get dbNodeStorageSizeInGBs() {
        return this.getNumberAttribute('db_node_storage_size_in_g_bs');
    }

    // db_server_ids - computed: true, optional: false, required: false
    public get dbServerIds() {
        return this.getListAttribute('db_server_ids');
    }

    // db_server_version - computed: true, optional: false, required: false
    public get dbServerVersion() {
        return this.getStringAttribute('db_server_version');
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

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // maintenance_window - computed: true, optional: true, required: false
    private _maintenanceWindow = new CcCloudExadataInfrastructure.MaintenanceWindowPropertyOutputReference(this, "maintenance_window");
    public get maintenanceWindow() {
        return this._maintenanceWindow;
    }
    public putMaintenanceWindow(value: CcCloudExadataInfrastructure.MaintenanceWindowProperty) {
        this._maintenanceWindow.internalValue = value;
    }
    public resetMaintenanceWindow() {
        this._maintenanceWindow.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maintenanceWindowInput() {
        return this._maintenanceWindow.internalValue;
    }

    // max_cpu_count - computed: true, optional: false, required: false
    public get maxCpuCount() {
        return this.getNumberAttribute('max_cpu_count');
    }

    // max_data_storage_in_t_bs - computed: true, optional: false, required: false
    public get maxDataStorageInTBs() {
        return this.getNumberAttribute('max_data_storage_in_t_bs');
    }

    // max_db_node_storage_size_in_g_bs - computed: true, optional: false, required: false
    public get maxDbNodeStorageSizeInGBs() {
        return this.getNumberAttribute('max_db_node_storage_size_in_g_bs');
    }

    // max_memory_in_g_bs - computed: true, optional: false, required: false
    public get maxMemoryInGBs() {
        return this.getNumberAttribute('max_memory_in_g_bs');
    }

    // memory_size_in_g_bs - computed: true, optional: false, required: false
    public get memorySizeInGBs() {
        return this.getNumberAttribute('memory_size_in_g_bs');
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

    // shape - computed: true, optional: true, required: false
    private _shape?: string; 
    public get shape() {
        return this.getStringAttribute('shape');
    }
    public set shape(value: string) {
        this._shape = value;
    }
    public resetShape() {
        this._shape = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shapeInput() {
        return this._shape;
    }

    // storage_count - computed: true, optional: true, required: false
    private _storageCount?: number; 
    public get storageCount() {
        return this.getNumberAttribute('storage_count');
    }
    public set storageCount(value: number) {
        this._storageCount = value;
    }
    public resetStorageCount() {
        this._storageCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get storageCountInput() {
        return this._storageCount;
    }

    // storage_server_type - computed: true, optional: true, required: false
    private _storageServerType?: string; 
    public get storageServerType() {
        return this.getStringAttribute('storage_server_type');
    }
    public set storageServerType(value: string) {
        this._storageServerType = value;
    }
    public resetStorageServerType() {
        this._storageServerType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get storageServerTypeInput() {
        return this._storageServerType;
    }

    // storage_server_version - computed: true, optional: false, required: false
    public get storageServerVersion() {
        return this.getStringAttribute('storage_server_version');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcCloudExadataInfrastructure.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcCloudExadataInfrastructure.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // total_storage_size_in_g_bs - computed: true, optional: false, required: false
    public get totalStorageSizeInGBs() {
        return this.getNumberAttribute('total_storage_size_in_g_bs');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            availability_zone: cdktn.stringToTerraform(this._availabilityZone),
            availability_zone_id: cdktn.stringToTerraform(this._availabilityZoneId),
            compute_count: cdktn.numberToTerraform(this._computeCount),
            customer_contacts_to_send_to_oci: cdktn.listMapper(ccCloudExadataInfrastructureCustomerContactPropertyToTerraform, false)(this._customerContactsToSendToOci.internalValue),
            database_server_type: cdktn.stringToTerraform(this._databaseServerType),
            display_name: cdktn.stringToTerraform(this._displayName),
            maintenance_window: ccCloudExadataInfrastructureMaintenanceWindowPropertyToTerraform(this._maintenanceWindow.internalValue),
            shape: cdktn.stringToTerraform(this._shape),
            storage_count: cdktn.numberToTerraform(this._storageCount),
            storage_server_type: cdktn.stringToTerraform(this._storageServerType),
            tags: cdktn.listMapper(ccCloudExadataInfrastructureTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            availability_zone: {
                value: cdktn.stringToHclTerraform(this._availabilityZone),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            availability_zone_id: {
                value: cdktn.stringToHclTerraform(this._availabilityZoneId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            compute_count: {
                value: cdktn.numberToHclTerraform(this._computeCount),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            customer_contacts_to_send_to_oci: {
                value: cdktn.listMapperHcl(ccCloudExadataInfrastructureCustomerContactPropertyToHclTerraform, false)(this._customerContactsToSendToOci.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcCloudExadataInfrastructure.CustomerContactPropertyList",
            },
            database_server_type: {
                value: cdktn.stringToHclTerraform(this._databaseServerType),
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
            maintenance_window: {
                value: ccCloudExadataInfrastructureMaintenanceWindowPropertyToHclTerraform(this._maintenanceWindow.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCloudExadataInfrastructure.MaintenanceWindowProperty",
            },
            shape: {
                value: cdktn.stringToHclTerraform(this._shape),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            storage_count: {
                value: cdktn.numberToHclTerraform(this._storageCount),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            storage_server_type: {
                value: cdktn.stringToHclTerraform(this._storageServerType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccCloudExadataInfrastructureTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcCloudExadataInfrastructure.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccCloudExadataInfrastructureCustomerContactPropertyToTerraform(struct?: CcCloudExadataInfrastructure.CustomerContactProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        email: cdktn.stringToTerraform(struct!.email),
    }
}


export function ccCloudExadataInfrastructureCustomerContactPropertyToHclTerraform(struct?: CcCloudExadataInfrastructure.CustomerContactProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        email: {
            value: cdktn.stringToHclTerraform(struct!.email),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCloudExadataInfrastructureMaintenanceWindowPropertyToTerraform(struct?: CcCloudExadataInfrastructure.MaintenanceWindowProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        custom_action_timeout_in_mins: cdktn.numberToTerraform(struct!.customActionTimeoutInMins),
        days_of_week: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.daysOfWeek),
        hours_of_day: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.hoursOfDay),
        is_custom_action_timeout_enabled: cdktn.booleanToTerraform(struct!.isCustomActionTimeoutEnabled),
        lead_time_in_weeks: cdktn.numberToTerraform(struct!.leadTimeInWeeks),
        months: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.months),
        patching_mode: cdktn.stringToTerraform(struct!.patchingMode),
        preference: cdktn.stringToTerraform(struct!.preference),
        weeks_of_month: cdktn.listMapper(cdktn.numberToTerraform, false)(struct!.weeksOfMonth),
    }
}


export function ccCloudExadataInfrastructureMaintenanceWindowPropertyToHclTerraform(struct?: CcCloudExadataInfrastructure.MaintenanceWindowProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        custom_action_timeout_in_mins: {
            value: cdktn.numberToHclTerraform(struct!.customActionTimeoutInMins),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
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
        is_custom_action_timeout_enabled: {
            value: cdktn.booleanToHclTerraform(struct!.isCustomActionTimeoutEnabled),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
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
        patching_mode: {
            value: cdktn.stringToHclTerraform(struct!.patchingMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
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


export function ccCloudExadataInfrastructureTagPropertyToTerraform(struct?: CcCloudExadataInfrastructure.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccCloudExadataInfrastructureTagPropertyToHclTerraform(struct?: CcCloudExadataInfrastructure.TagProperty | cdktn.IResolvable): any {
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


export namespace CcCloudExadataInfrastructure {
export interface CustomerContactProperty {
    /**
    * The email address of the contact.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/odb_cloud_exadata_infrastructure#email CcCloudExadataInfrastructure#email}
    */
    readonly email?: string;
}
export class CustomerContactPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): CustomerContactProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._email !== undefined) {
            hasAnyValues = true;
            internalValueResult.email = this._email;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CustomerContactProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._email = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._email = value.email;
        }
    }

    // email - computed: true, optional: true, required: false
    private _email?: string; 
    public get email() {
        return this.getStringAttribute('email');
    }
    public set email(value: string) {
        this._email = value;
    }
    public resetEmail() {
        this._email = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get emailInput() {
        return this._email;
    }
}

export class CustomerContactPropertyList extends cdktn.ComplexList {
    public internalValue? : CustomerContactProperty[] | cdktn.IResolvable

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
    public get(index: number): CustomerContactPropertyOutputReference {
        return new CustomerContactPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface MaintenanceWindowProperty {
    /**
    * The timeout duration for custom actions in minutes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/odb_cloud_exadata_infrastructure#custom_action_timeout_in_mins CcCloudExadataInfrastructure#custom_action_timeout_in_mins}
    */
    readonly customActionTimeoutInMins?: number;
    /**
    * The days of the week when maintenance can be performed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/odb_cloud_exadata_infrastructure#days_of_week CcCloudExadataInfrastructure#days_of_week}
    */
    readonly daysOfWeek?: string[];
    /**
    * The hours of the day when maintenance can be performed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/odb_cloud_exadata_infrastructure#hours_of_day CcCloudExadataInfrastructure#hours_of_day}
    */
    readonly hoursOfDay?: number[];
    /**
    * Indicates whether custom action timeout is enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/odb_cloud_exadata_infrastructure#is_custom_action_timeout_enabled CcCloudExadataInfrastructure#is_custom_action_timeout_enabled}
    */
    readonly isCustomActionTimeoutEnabled?: boolean | cdktn.IResolvable;
    /**
    * The lead time in weeks before the maintenance window.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/odb_cloud_exadata_infrastructure#lead_time_in_weeks CcCloudExadataInfrastructure#lead_time_in_weeks}
    */
    readonly leadTimeInWeeks?: number;
    /**
    * The months when maintenance can be performed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/odb_cloud_exadata_infrastructure#months CcCloudExadataInfrastructure#months}
    */
    readonly months?: string[];
    /**
    * The patching mode for the maintenance window.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/odb_cloud_exadata_infrastructure#patching_mode CcCloudExadataInfrastructure#patching_mode}
    */
    readonly patchingMode?: string;
    /**
    * The preference for the maintenance window scheduling.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/odb_cloud_exadata_infrastructure#preference CcCloudExadataInfrastructure#preference}
    */
    readonly preference?: string;
    /**
    * The weeks of the month when maintenance can be performed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/odb_cloud_exadata_infrastructure#weeks_of_month CcCloudExadataInfrastructure#weeks_of_month}
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
        if (this._customActionTimeoutInMins !== undefined) {
            hasAnyValues = true;
            internalValueResult.customActionTimeoutInMins = this._customActionTimeoutInMins;
        }
        if (this._daysOfWeek !== undefined) {
            hasAnyValues = true;
            internalValueResult.daysOfWeek = this._daysOfWeek;
        }
        if (this._hoursOfDay !== undefined) {
            hasAnyValues = true;
            internalValueResult.hoursOfDay = this._hoursOfDay;
        }
        if (this._isCustomActionTimeoutEnabled !== undefined) {
            hasAnyValues = true;
            internalValueResult.isCustomActionTimeoutEnabled = this._isCustomActionTimeoutEnabled;
        }
        if (this._leadTimeInWeeks !== undefined) {
            hasAnyValues = true;
            internalValueResult.leadTimeInWeeks = this._leadTimeInWeeks;
        }
        if (this._months !== undefined) {
            hasAnyValues = true;
            internalValueResult.months = this._months;
        }
        if (this._patchingMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.patchingMode = this._patchingMode;
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
            this._customActionTimeoutInMins = undefined;
            this._daysOfWeek = undefined;
            this._hoursOfDay = undefined;
            this._isCustomActionTimeoutEnabled = undefined;
            this._leadTimeInWeeks = undefined;
            this._months = undefined;
            this._patchingMode = undefined;
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
            this._customActionTimeoutInMins = value.customActionTimeoutInMins;
            this._daysOfWeek = value.daysOfWeek;
            this._hoursOfDay = value.hoursOfDay;
            this._isCustomActionTimeoutEnabled = value.isCustomActionTimeoutEnabled;
            this._leadTimeInWeeks = value.leadTimeInWeeks;
            this._months = value.months;
            this._patchingMode = value.patchingMode;
            this._preference = value.preference;
            this._weeksOfMonth = value.weeksOfMonth;
        }
    }

    // custom_action_timeout_in_mins - computed: true, optional: true, required: false
    private _customActionTimeoutInMins?: number; 
    public get customActionTimeoutInMins() {
        return this.getNumberAttribute('custom_action_timeout_in_mins');
    }
    public set customActionTimeoutInMins(value: number) {
        this._customActionTimeoutInMins = value;
    }
    public resetCustomActionTimeoutInMins() {
        this._customActionTimeoutInMins = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customActionTimeoutInMinsInput() {
        return this._customActionTimeoutInMins;
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

    // is_custom_action_timeout_enabled - computed: true, optional: true, required: false
    private _isCustomActionTimeoutEnabled?: boolean | cdktn.IResolvable; 
    public get isCustomActionTimeoutEnabled() {
        return this.getBooleanAttribute('is_custom_action_timeout_enabled');
    }
    public set isCustomActionTimeoutEnabled(value: boolean | cdktn.IResolvable) {
        this._isCustomActionTimeoutEnabled = value;
    }
    public resetIsCustomActionTimeoutEnabled() {
        this._isCustomActionTimeoutEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get isCustomActionTimeoutEnabledInput() {
        return this._isCustomActionTimeoutEnabled;
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

    // patching_mode - computed: true, optional: true, required: false
    private _patchingMode?: string; 
    public get patchingMode() {
        return this.getStringAttribute('patching_mode');
    }
    public set patchingMode(value: string) {
        this._patchingMode = value;
    }
    public resetPatchingMode() {
        this._patchingMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get patchingModeInput() {
        return this._patchingMode;
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/odb_cloud_exadata_infrastructure#key CcCloudExadataInfrastructure#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that's 1 to 256 characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/odb_cloud_exadata_infrastructure#value CcCloudExadataInfrastructure#value}
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
