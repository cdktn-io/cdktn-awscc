// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcDataSetProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#aws_account_id CcDataSet#aws_account_id}
    */
    readonly awsAccountId?: string;
    /**
    * <p>Groupings of columns that work together in certain QuickSight features. Currently, only geospatial hierarchy is supported.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#column_groups CcDataSet#column_groups}
    */
    readonly columnGroups?: CcDataSet.ColumnGroupProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#column_level_permission_rules CcDataSet#column_level_permission_rules}
    */
    readonly columnLevelPermissionRules?: CcDataSet.ColumnLevelPermissionRuleProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#data_set_id CcDataSet#data_set_id}
    */
    readonly dataSetId?: string;
    /**
    * <p>The dataset usage configuration for the dataset.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#data_set_usage_configuration CcDataSet#data_set_usage_configuration}
    */
    readonly dataSetUsageConfiguration?: CcDataSet.DataSetUsageConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#field_folders CcDataSet#field_folders}
    */
    readonly fieldFolders?: { [key: string]: CcDataSet.FieldFolderProperty } | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#import_mode CcDataSet#import_mode}
    */
    readonly importMode?: string;
    /**
    * <p>Wait policy to use when creating/updating dataset. Default is to wait for SPICE ingestion to finish with timeout of 36 hours.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#ingestion_wait_policy CcDataSet#ingestion_wait_policy}
    */
    readonly ingestionWaitPolicy?: CcDataSet.IngestionWaitPolicyProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#logical_table_map CcDataSet#logical_table_map}
    */
    readonly logicalTableMap?: { [key: string]: CcDataSet.LogicalTableProperty } | cdktn.IResolvable;
    /**
    * <p>The display name for the dataset.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#name CcDataSet#name}
    */
    readonly name?: string;
    /**
    * <p>A list of resource permissions on the dataset.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#permissions CcDataSet#permissions}
    */
    readonly permissions?: CcDataSet.ResourcePermissionProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#physical_table_map CcDataSet#physical_table_map}
    */
    readonly physicalTableMap?: { [key: string]: CcDataSet.PhysicalTableProperty } | cdktn.IResolvable;
    /**
    * <p>The row-level security configuration for the dataset.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#row_level_permission_data_set CcDataSet#row_level_permission_data_set}
    */
    readonly rowLevelPermissionDataSet?: CcDataSet.RowLevelPermissionDataSetProperty;
    /**
    * <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the dataset.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#tags CcDataSet#tags}
    */
    readonly tags?: CcDataSet.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set awscc_quicksight_data_set}
*/
export class CcDataSet extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_quicksight_data_set";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcDataSet resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcDataSet to import
    * @param importFromId The id of the existing CcDataSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcDataSet to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_quicksight_data_set", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set awscc_quicksight_data_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcDataSetProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcDataSetProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_quicksight_data_set',
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
        this._awsAccountId = config.awsAccountId;
        this._columnGroups.internalValue = config.columnGroups;
        this._columnLevelPermissionRules.internalValue = config.columnLevelPermissionRules;
        this._dataSetId = config.dataSetId;
        this._dataSetUsageConfiguration.internalValue = config.dataSetUsageConfiguration;
        this._fieldFolders.internalValue = config.fieldFolders;
        this._importMode = config.importMode;
        this._ingestionWaitPolicy.internalValue = config.ingestionWaitPolicy;
        this._logicalTableMap.internalValue = config.logicalTableMap;
        this._name = config.name;
        this._permissions.internalValue = config.permissions;
        this._physicalTableMap.internalValue = config.physicalTableMap;
        this._rowLevelPermissionDataSet.internalValue = config.rowLevelPermissionDataSet;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // aws_account_id - computed: true, optional: true, required: false
    private _awsAccountId?: string; 
    public get awsAccountId() {
        return this.getStringAttribute('aws_account_id');
    }
    public set awsAccountId(value: string) {
        this._awsAccountId = value;
    }
    public resetAwsAccountId() {
        this._awsAccountId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get awsAccountIdInput() {
        return this._awsAccountId;
    }

    // column_groups - computed: true, optional: true, required: false
    private _columnGroups = new CcDataSet.ColumnGroupPropertyList(this, "column_groups", false);
    public get columnGroups() {
        return this._columnGroups;
    }
    public putColumnGroups(value: CcDataSet.ColumnGroupProperty[] | cdktn.IResolvable) {
        this._columnGroups.internalValue = value;
    }
    public resetColumnGroups() {
        this._columnGroups.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get columnGroupsInput() {
        return this._columnGroups.internalValue;
    }

    // column_level_permission_rules - computed: true, optional: true, required: false
    private _columnLevelPermissionRules = new CcDataSet.ColumnLevelPermissionRulePropertyList(this, "column_level_permission_rules", false);
    public get columnLevelPermissionRules() {
        return this._columnLevelPermissionRules;
    }
    public putColumnLevelPermissionRules(value: CcDataSet.ColumnLevelPermissionRuleProperty[] | cdktn.IResolvable) {
        this._columnLevelPermissionRules.internalValue = value;
    }
    public resetColumnLevelPermissionRules() {
        this._columnLevelPermissionRules.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get columnLevelPermissionRulesInput() {
        return this._columnLevelPermissionRules.internalValue;
    }

    // consumed_spice_capacity_in_bytes - computed: true, optional: false, required: false
    public get consumedSpiceCapacityInBytes() {
        return this.getNumberAttribute('consumed_spice_capacity_in_bytes');
    }

    // created_time - computed: true, optional: false, required: false
    public get createdTime() {
        return this.getStringAttribute('created_time');
    }

    // data_set_id - computed: true, optional: true, required: false
    private _dataSetId?: string; 
    public get dataSetId() {
        return this.getStringAttribute('data_set_id');
    }
    public set dataSetId(value: string) {
        this._dataSetId = value;
    }
    public resetDataSetId() {
        this._dataSetId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataSetIdInput() {
        return this._dataSetId;
    }

    // data_set_usage_configuration - computed: true, optional: true, required: false
    private _dataSetUsageConfiguration = new CcDataSet.DataSetUsageConfigurationPropertyOutputReference(this, "data_set_usage_configuration");
    public get dataSetUsageConfiguration() {
        return this._dataSetUsageConfiguration;
    }
    public putDataSetUsageConfiguration(value: CcDataSet.DataSetUsageConfigurationProperty) {
        this._dataSetUsageConfiguration.internalValue = value;
    }
    public resetDataSetUsageConfiguration() {
        this._dataSetUsageConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataSetUsageConfigurationInput() {
        return this._dataSetUsageConfiguration.internalValue;
    }

    // field_folders - computed: true, optional: true, required: false
    private _fieldFolders = new CcDataSet.FieldFolderPropertyMap(this, "field_folders");
    public get fieldFolders() {
        return this._fieldFolders;
    }
    public putFieldFolders(value: { [key: string]: CcDataSet.FieldFolderProperty } | cdktn.IResolvable) {
        this._fieldFolders.internalValue = value;
    }
    public resetFieldFolders() {
        this._fieldFolders.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fieldFoldersInput() {
        return this._fieldFolders.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // import_mode - computed: true, optional: true, required: false
    private _importMode?: string; 
    public get importMode() {
        return this.getStringAttribute('import_mode');
    }
    public set importMode(value: string) {
        this._importMode = value;
    }
    public resetImportMode() {
        this._importMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get importModeInput() {
        return this._importMode;
    }

    // ingestion_wait_policy - computed: true, optional: true, required: false
    private _ingestionWaitPolicy = new CcDataSet.IngestionWaitPolicyPropertyOutputReference(this, "ingestion_wait_policy");
    public get ingestionWaitPolicy() {
        return this._ingestionWaitPolicy;
    }
    public putIngestionWaitPolicy(value: CcDataSet.IngestionWaitPolicyProperty) {
        this._ingestionWaitPolicy.internalValue = value;
    }
    public resetIngestionWaitPolicy() {
        this._ingestionWaitPolicy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ingestionWaitPolicyInput() {
        return this._ingestionWaitPolicy.internalValue;
    }

    // last_updated_time - computed: true, optional: false, required: false
    public get lastUpdatedTime() {
        return this.getStringAttribute('last_updated_time');
    }

    // logical_table_map - computed: true, optional: true, required: false
    private _logicalTableMap = new CcDataSet.LogicalTablePropertyMap(this, "logical_table_map");
    public get logicalTableMap() {
        return this._logicalTableMap;
    }
    public putLogicalTableMap(value: { [key: string]: CcDataSet.LogicalTableProperty } | cdktn.IResolvable) {
        this._logicalTableMap.internalValue = value;
    }
    public resetLogicalTableMap() {
        this._logicalTableMap.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logicalTableMapInput() {
        return this._logicalTableMap.internalValue;
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

    // output_columns - computed: true, optional: false, required: false
    private _outputColumns = new CcDataSet.OutputColumnsPropertyList(this, "output_columns", false);
    public get outputColumns() {
        return this._outputColumns;
    }

    // permissions - computed: true, optional: true, required: false
    private _permissions = new CcDataSet.ResourcePermissionPropertyList(this, "permissions", false);
    public get permissions() {
        return this._permissions;
    }
    public putPermissions(value: CcDataSet.ResourcePermissionProperty[] | cdktn.IResolvable) {
        this._permissions.internalValue = value;
    }
    public resetPermissions() {
        this._permissions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get permissionsInput() {
        return this._permissions.internalValue;
    }

    // physical_table_map - computed: true, optional: true, required: false
    private _physicalTableMap = new CcDataSet.PhysicalTablePropertyMap(this, "physical_table_map");
    public get physicalTableMap() {
        return this._physicalTableMap;
    }
    public putPhysicalTableMap(value: { [key: string]: CcDataSet.PhysicalTableProperty } | cdktn.IResolvable) {
        this._physicalTableMap.internalValue = value;
    }
    public resetPhysicalTableMap() {
        this._physicalTableMap.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get physicalTableMapInput() {
        return this._physicalTableMap.internalValue;
    }

    // row_level_permission_data_set - computed: true, optional: true, required: false
    private _rowLevelPermissionDataSet = new CcDataSet.RowLevelPermissionDataSetPropertyOutputReference(this, "row_level_permission_data_set");
    public get rowLevelPermissionDataSet() {
        return this._rowLevelPermissionDataSet;
    }
    public putRowLevelPermissionDataSet(value: CcDataSet.RowLevelPermissionDataSetProperty) {
        this._rowLevelPermissionDataSet.internalValue = value;
    }
    public resetRowLevelPermissionDataSet() {
        this._rowLevelPermissionDataSet.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rowLevelPermissionDataSetInput() {
        return this._rowLevelPermissionDataSet.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcDataSet.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcDataSet.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            aws_account_id: cdktn.stringToTerraform(this._awsAccountId),
            column_groups: cdktn.listMapper(ccDataSetColumnGroupPropertyToTerraform, false)(this._columnGroups.internalValue),
            column_level_permission_rules: cdktn.listMapper(ccDataSetColumnLevelPermissionRulePropertyToTerraform, false)(this._columnLevelPermissionRules.internalValue),
            data_set_id: cdktn.stringToTerraform(this._dataSetId),
            data_set_usage_configuration: ccDataSetDataSetUsageConfigurationPropertyToTerraform(this._dataSetUsageConfiguration.internalValue),
            field_folders: cdktn.hashMapper(ccDataSetFieldFolderPropertyToTerraform)(this._fieldFolders.internalValue),
            import_mode: cdktn.stringToTerraform(this._importMode),
            ingestion_wait_policy: ccDataSetIngestionWaitPolicyPropertyToTerraform(this._ingestionWaitPolicy.internalValue),
            logical_table_map: cdktn.hashMapper(ccDataSetLogicalTablePropertyToTerraform)(this._logicalTableMap.internalValue),
            name: cdktn.stringToTerraform(this._name),
            permissions: cdktn.listMapper(ccDataSetResourcePermissionPropertyToTerraform, false)(this._permissions.internalValue),
            physical_table_map: cdktn.hashMapper(ccDataSetPhysicalTablePropertyToTerraform)(this._physicalTableMap.internalValue),
            row_level_permission_data_set: ccDataSetRowLevelPermissionDataSetPropertyToTerraform(this._rowLevelPermissionDataSet.internalValue),
            tags: cdktn.listMapper(ccDataSetTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            aws_account_id: {
                value: cdktn.stringToHclTerraform(this._awsAccountId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            column_groups: {
                value: cdktn.listMapperHcl(ccDataSetColumnGroupPropertyToHclTerraform, false)(this._columnGroups.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcDataSet.ColumnGroupPropertyList",
            },
            column_level_permission_rules: {
                value: cdktn.listMapperHcl(ccDataSetColumnLevelPermissionRulePropertyToHclTerraform, false)(this._columnLevelPermissionRules.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcDataSet.ColumnLevelPermissionRulePropertyList",
            },
            data_set_id: {
                value: cdktn.stringToHclTerraform(this._dataSetId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            data_set_usage_configuration: {
                value: ccDataSetDataSetUsageConfigurationPropertyToHclTerraform(this._dataSetUsageConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDataSet.DataSetUsageConfigurationProperty",
            },
            field_folders: {
                value: cdktn.hashMapperHcl(ccDataSetFieldFolderPropertyToHclTerraform)(this._fieldFolders.internalValue),
                isBlock: true,
                type: "map",
                storageClassType: "CcDataSet.FieldFolderPropertyMap",
            },
            import_mode: {
                value: cdktn.stringToHclTerraform(this._importMode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            ingestion_wait_policy: {
                value: ccDataSetIngestionWaitPolicyPropertyToHclTerraform(this._ingestionWaitPolicy.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDataSet.IngestionWaitPolicyProperty",
            },
            logical_table_map: {
                value: cdktn.hashMapperHcl(ccDataSetLogicalTablePropertyToHclTerraform)(this._logicalTableMap.internalValue),
                isBlock: true,
                type: "map",
                storageClassType: "CcDataSet.LogicalTablePropertyMap",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            permissions: {
                value: cdktn.listMapperHcl(ccDataSetResourcePermissionPropertyToHclTerraform, false)(this._permissions.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcDataSet.ResourcePermissionPropertyList",
            },
            physical_table_map: {
                value: cdktn.hashMapperHcl(ccDataSetPhysicalTablePropertyToHclTerraform)(this._physicalTableMap.internalValue),
                isBlock: true,
                type: "map",
                storageClassType: "CcDataSet.PhysicalTablePropertyMap",
            },
            row_level_permission_data_set: {
                value: ccDataSetRowLevelPermissionDataSetPropertyToHclTerraform(this._rowLevelPermissionDataSet.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDataSet.RowLevelPermissionDataSetProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccDataSetTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcDataSet.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccDataSetGeoSpatialColumnGroupPropertyToTerraform(struct?: CcDataSet.GeoSpatialColumnGroupProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        columns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.columns),
        country_code: cdktn.stringToTerraform(struct!.countryCode),
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccDataSetGeoSpatialColumnGroupPropertyToHclTerraform(struct?: CcDataSet.GeoSpatialColumnGroupProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        columns: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.columns),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        country_code: {
            value: cdktn.stringToHclTerraform(struct!.countryCode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSetColumnGroupPropertyToTerraform(struct?: CcDataSet.ColumnGroupProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        geo_spatial_column_group: ccDataSetGeoSpatialColumnGroupPropertyToTerraform(struct!.geoSpatialColumnGroup),
    }
}


export function ccDataSetColumnGroupPropertyToHclTerraform(struct?: CcDataSet.ColumnGroupProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        geo_spatial_column_group: {
            value: ccDataSetGeoSpatialColumnGroupPropertyToHclTerraform(struct!.geoSpatialColumnGroup),
            isBlock: true,
            type: "struct",
            storageClassType: "GeoSpatialColumnGroupProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSetColumnLevelPermissionRulePropertyToTerraform(struct?: CcDataSet.ColumnLevelPermissionRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        column_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.columnNames),
        principals: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.principals),
    }
}


export function ccDataSetColumnLevelPermissionRulePropertyToHclTerraform(struct?: CcDataSet.ColumnLevelPermissionRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        column_names: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.columnNames),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        principals: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.principals),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSetDataSetUsageConfigurationPropertyToTerraform(struct?: CcDataSet.DataSetUsageConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        disable_use_as_direct_query_source: cdktn.booleanToTerraform(struct!.disableUseAsDirectQuerySource),
        disable_use_as_imported_source: cdktn.booleanToTerraform(struct!.disableUseAsImportedSource),
    }
}


export function ccDataSetDataSetUsageConfigurationPropertyToHclTerraform(struct?: CcDataSet.DataSetUsageConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        disable_use_as_direct_query_source: {
            value: cdktn.booleanToHclTerraform(struct!.disableUseAsDirectQuerySource),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        disable_use_as_imported_source: {
            value: cdktn.booleanToHclTerraform(struct!.disableUseAsImportedSource),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSetFieldFolderPropertyToTerraform(struct?: CcDataSet.FieldFolderProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        columns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.columns),
        description: cdktn.stringToTerraform(struct!.description),
    }
}


export function ccDataSetFieldFolderPropertyToHclTerraform(struct?: CcDataSet.FieldFolderProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        columns: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.columns),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        description: {
            value: cdktn.stringToHclTerraform(struct!.description),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSetIngestionWaitPolicyPropertyToTerraform(struct?: CcDataSet.IngestionWaitPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        ingestion_wait_time_in_hours: cdktn.numberToTerraform(struct!.ingestionWaitTimeInHours),
        wait_for_spice_ingestion: cdktn.booleanToTerraform(struct!.waitForSpiceIngestion),
    }
}


export function ccDataSetIngestionWaitPolicyPropertyToHclTerraform(struct?: CcDataSet.IngestionWaitPolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        ingestion_wait_time_in_hours: {
            value: cdktn.numberToHclTerraform(struct!.ingestionWaitTimeInHours),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        wait_for_spice_ingestion: {
            value: cdktn.booleanToHclTerraform(struct!.waitForSpiceIngestion),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSetCastColumnTypeOperationPropertyToTerraform(struct?: CcDataSet.CastColumnTypeOperationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        column_name: cdktn.stringToTerraform(struct!.columnName),
        format: cdktn.stringToTerraform(struct!.format),
        new_column_type: cdktn.stringToTerraform(struct!.newColumnType),
    }
}


export function ccDataSetCastColumnTypeOperationPropertyToHclTerraform(struct?: CcDataSet.CastColumnTypeOperationProperty | cdktn.IResolvable): any {
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
        format: {
            value: cdktn.stringToHclTerraform(struct!.format),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        new_column_type: {
            value: cdktn.stringToHclTerraform(struct!.newColumnType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSetCalculatedColumnPropertyToTerraform(struct?: CcDataSet.CalculatedColumnProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        column_id: cdktn.stringToTerraform(struct!.columnId),
        column_name: cdktn.stringToTerraform(struct!.columnName),
        expression: cdktn.stringToTerraform(struct!.expression),
    }
}


export function ccDataSetCalculatedColumnPropertyToHclTerraform(struct?: CcDataSet.CalculatedColumnProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        column_id: {
            value: cdktn.stringToHclTerraform(struct!.columnId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        column_name: {
            value: cdktn.stringToHclTerraform(struct!.columnName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        expression: {
            value: cdktn.stringToHclTerraform(struct!.expression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSetCreateColumnsOperationPropertyToTerraform(struct?: CcDataSet.CreateColumnsOperationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        columns: cdktn.listMapper(ccDataSetCalculatedColumnPropertyToTerraform, false)(struct!.columns),
    }
}


export function ccDataSetCreateColumnsOperationPropertyToHclTerraform(struct?: CcDataSet.CreateColumnsOperationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        columns: {
            value: cdktn.listMapperHcl(ccDataSetCalculatedColumnPropertyToHclTerraform, false)(struct!.columns),
            isBlock: true,
            type: "list",
            storageClassType: "CalculatedColumnPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSetFilterOperationPropertyToTerraform(struct?: CcDataSet.FilterOperationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        condition_expression: cdktn.stringToTerraform(struct!.conditionExpression),
    }
}


export function ccDataSetFilterOperationPropertyToHclTerraform(struct?: CcDataSet.FilterOperationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        condition_expression: {
            value: cdktn.stringToHclTerraform(struct!.conditionExpression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSetProjectOperationPropertyToTerraform(struct?: CcDataSet.ProjectOperationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        projected_columns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.projectedColumns),
    }
}


export function ccDataSetProjectOperationPropertyToHclTerraform(struct?: CcDataSet.ProjectOperationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        projected_columns: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.projectedColumns),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSetRenameColumnOperationPropertyToTerraform(struct?: CcDataSet.RenameColumnOperationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        column_name: cdktn.stringToTerraform(struct!.columnName),
        new_column_name: cdktn.stringToTerraform(struct!.newColumnName),
    }
}


export function ccDataSetRenameColumnOperationPropertyToHclTerraform(struct?: CcDataSet.RenameColumnOperationProperty | cdktn.IResolvable): any {
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
        new_column_name: {
            value: cdktn.stringToHclTerraform(struct!.newColumnName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSetColumnDescriptionPropertyToTerraform(struct?: CcDataSet.ColumnDescriptionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        text: cdktn.stringToTerraform(struct!.text),
    }
}


export function ccDataSetColumnDescriptionPropertyToHclTerraform(struct?: CcDataSet.ColumnDescriptionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        text: {
            value: cdktn.stringToHclTerraform(struct!.text),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSetColumnTagPropertyToTerraform(struct?: CcDataSet.ColumnTagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        column_description: ccDataSetColumnDescriptionPropertyToTerraform(struct!.columnDescription),
        column_geographic_role: cdktn.stringToTerraform(struct!.columnGeographicRole),
    }
}


export function ccDataSetColumnTagPropertyToHclTerraform(struct?: CcDataSet.ColumnTagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        column_description: {
            value: ccDataSetColumnDescriptionPropertyToHclTerraform(struct!.columnDescription),
            isBlock: true,
            type: "struct",
            storageClassType: "ColumnDescriptionProperty",
        },
        column_geographic_role: {
            value: cdktn.stringToHclTerraform(struct!.columnGeographicRole),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSetTagColumnOperationPropertyToTerraform(struct?: CcDataSet.TagColumnOperationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        column_name: cdktn.stringToTerraform(struct!.columnName),
        tags: cdktn.listMapper(ccDataSetColumnTagPropertyToTerraform, false)(struct!.tags),
    }
}


export function ccDataSetTagColumnOperationPropertyToHclTerraform(struct?: CcDataSet.TagColumnOperationProperty | cdktn.IResolvable): any {
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
        tags: {
            value: cdktn.listMapperHcl(ccDataSetColumnTagPropertyToHclTerraform, false)(struct!.tags),
            isBlock: true,
            type: "list",
            storageClassType: "ColumnTagPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSetTransformOperationPropertyToTerraform(struct?: CcDataSet.TransformOperationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cast_column_type_operation: ccDataSetCastColumnTypeOperationPropertyToTerraform(struct!.castColumnTypeOperation),
        create_columns_operation: ccDataSetCreateColumnsOperationPropertyToTerraform(struct!.createColumnsOperation),
        filter_operation: ccDataSetFilterOperationPropertyToTerraform(struct!.filterOperation),
        project_operation: ccDataSetProjectOperationPropertyToTerraform(struct!.projectOperation),
        rename_column_operation: ccDataSetRenameColumnOperationPropertyToTerraform(struct!.renameColumnOperation),
        tag_column_operation: ccDataSetTagColumnOperationPropertyToTerraform(struct!.tagColumnOperation),
    }
}


export function ccDataSetTransformOperationPropertyToHclTerraform(struct?: CcDataSet.TransformOperationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cast_column_type_operation: {
            value: ccDataSetCastColumnTypeOperationPropertyToHclTerraform(struct!.castColumnTypeOperation),
            isBlock: true,
            type: "struct",
            storageClassType: "CastColumnTypeOperationProperty",
        },
        create_columns_operation: {
            value: ccDataSetCreateColumnsOperationPropertyToHclTerraform(struct!.createColumnsOperation),
            isBlock: true,
            type: "struct",
            storageClassType: "CreateColumnsOperationProperty",
        },
        filter_operation: {
            value: ccDataSetFilterOperationPropertyToHclTerraform(struct!.filterOperation),
            isBlock: true,
            type: "struct",
            storageClassType: "FilterOperationProperty",
        },
        project_operation: {
            value: ccDataSetProjectOperationPropertyToHclTerraform(struct!.projectOperation),
            isBlock: true,
            type: "struct",
            storageClassType: "ProjectOperationProperty",
        },
        rename_column_operation: {
            value: ccDataSetRenameColumnOperationPropertyToHclTerraform(struct!.renameColumnOperation),
            isBlock: true,
            type: "struct",
            storageClassType: "RenameColumnOperationProperty",
        },
        tag_column_operation: {
            value: ccDataSetTagColumnOperationPropertyToHclTerraform(struct!.tagColumnOperation),
            isBlock: true,
            type: "struct",
            storageClassType: "TagColumnOperationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSetJoinKeyPropertiesPropertyToTerraform(struct?: CcDataSet.JoinKeyPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        unique_key: cdktn.booleanToTerraform(struct!.uniqueKey),
    }
}


export function ccDataSetJoinKeyPropertiesPropertyToHclTerraform(struct?: CcDataSet.JoinKeyPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        unique_key: {
            value: cdktn.booleanToHclTerraform(struct!.uniqueKey),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSetRightJoinKeyPropertiesPropertyToTerraform(struct?: CcDataSet.RightJoinKeyPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        unique_key: cdktn.booleanToTerraform(struct!.uniqueKey),
    }
}


export function ccDataSetRightJoinKeyPropertiesPropertyToHclTerraform(struct?: CcDataSet.RightJoinKeyPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        unique_key: {
            value: cdktn.booleanToHclTerraform(struct!.uniqueKey),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSetJoinInstructionPropertyToTerraform(struct?: CcDataSet.JoinInstructionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        left_join_key_properties: ccDataSetJoinKeyPropertiesPropertyToTerraform(struct!.leftJoinKeyProperties),
        left_operand: cdktn.stringToTerraform(struct!.leftOperand),
        on_clause: cdktn.stringToTerraform(struct!.onClause),
        right_join_key_properties: ccDataSetRightJoinKeyPropertiesPropertyToTerraform(struct!.rightJoinKeyProperties),
        right_operand: cdktn.stringToTerraform(struct!.rightOperand),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccDataSetJoinInstructionPropertyToHclTerraform(struct?: CcDataSet.JoinInstructionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        left_join_key_properties: {
            value: ccDataSetJoinKeyPropertiesPropertyToHclTerraform(struct!.leftJoinKeyProperties),
            isBlock: true,
            type: "struct",
            storageClassType: "JoinKeyPropertiesProperty",
        },
        left_operand: {
            value: cdktn.stringToHclTerraform(struct!.leftOperand),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        on_clause: {
            value: cdktn.stringToHclTerraform(struct!.onClause),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        right_join_key_properties: {
            value: ccDataSetRightJoinKeyPropertiesPropertyToHclTerraform(struct!.rightJoinKeyProperties),
            isBlock: true,
            type: "struct",
            storageClassType: "RightJoinKeyPropertiesProperty",
        },
        right_operand: {
            value: cdktn.stringToHclTerraform(struct!.rightOperand),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSetLogicalTableSourcePropertyToTerraform(struct?: CcDataSet.LogicalTableSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        data_set_arn: cdktn.stringToTerraform(struct!.dataSetArn),
        join_instruction: ccDataSetJoinInstructionPropertyToTerraform(struct!.joinInstruction),
        physical_table_id: cdktn.stringToTerraform(struct!.physicalTableId),
    }
}


export function ccDataSetLogicalTableSourcePropertyToHclTerraform(struct?: CcDataSet.LogicalTableSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        data_set_arn: {
            value: cdktn.stringToHclTerraform(struct!.dataSetArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        join_instruction: {
            value: ccDataSetJoinInstructionPropertyToHclTerraform(struct!.joinInstruction),
            isBlock: true,
            type: "struct",
            storageClassType: "JoinInstructionProperty",
        },
        physical_table_id: {
            value: cdktn.stringToHclTerraform(struct!.physicalTableId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSetLogicalTablePropertyToTerraform(struct?: CcDataSet.LogicalTableProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        alias: cdktn.stringToTerraform(struct!.alias),
        data_transforms: cdktn.listMapper(ccDataSetTransformOperationPropertyToTerraform, false)(struct!.dataTransforms),
        source: ccDataSetLogicalTableSourcePropertyToTerraform(struct!.source),
    }
}


export function ccDataSetLogicalTablePropertyToHclTerraform(struct?: CcDataSet.LogicalTableProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        alias: {
            value: cdktn.stringToHclTerraform(struct!.alias),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        data_transforms: {
            value: cdktn.listMapperHcl(ccDataSetTransformOperationPropertyToHclTerraform, false)(struct!.dataTransforms),
            isBlock: true,
            type: "list",
            storageClassType: "TransformOperationPropertyList",
        },
        source: {
            value: ccDataSetLogicalTableSourcePropertyToHclTerraform(struct!.source),
            isBlock: true,
            type: "struct",
            storageClassType: "LogicalTableSourceProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSetOutputColumnsPropertyToTerraform(struct?: CcDataSet.OutputColumnsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccDataSetOutputColumnsPropertyToHclTerraform(struct?: CcDataSet.OutputColumnsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccDataSetResourcePermissionPropertyToTerraform(struct?: CcDataSet.ResourcePermissionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        actions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.actions),
        principal: cdktn.stringToTerraform(struct!.principal),
    }
}


export function ccDataSetResourcePermissionPropertyToHclTerraform(struct?: CcDataSet.ResourcePermissionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        actions: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.actions),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        principal: {
            value: cdktn.stringToHclTerraform(struct!.principal),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSetInputColumnPropertyToTerraform(struct?: CcDataSet.InputColumnProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccDataSetInputColumnPropertyToHclTerraform(struct?: CcDataSet.InputColumnProperty | cdktn.IResolvable): any {
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
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSetCustomSqlPropertyToTerraform(struct?: CcDataSet.CustomSqlProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        columns: cdktn.listMapper(ccDataSetInputColumnPropertyToTerraform, false)(struct!.columns),
        data_source_arn: cdktn.stringToTerraform(struct!.dataSourceArn),
        name: cdktn.stringToTerraform(struct!.name),
        sql_query: cdktn.stringToTerraform(struct!.sqlQuery),
    }
}


export function ccDataSetCustomSqlPropertyToHclTerraform(struct?: CcDataSet.CustomSqlProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        columns: {
            value: cdktn.listMapperHcl(ccDataSetInputColumnPropertyToHclTerraform, false)(struct!.columns),
            isBlock: true,
            type: "list",
            storageClassType: "InputColumnPropertyList",
        },
        data_source_arn: {
            value: cdktn.stringToHclTerraform(struct!.dataSourceArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sql_query: {
            value: cdktn.stringToHclTerraform(struct!.sqlQuery),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSetPhysicalTableMapRelationalTableInputColumnsPropertyToTerraform(struct?: CcDataSet.PhysicalTableMapRelationalTableInputColumnsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccDataSetPhysicalTableMapRelationalTableInputColumnsPropertyToHclTerraform(struct?: CcDataSet.PhysicalTableMapRelationalTableInputColumnsProperty | cdktn.IResolvable): any {
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
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSetRelationalTablePropertyToTerraform(struct?: CcDataSet.RelationalTableProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        catalog: cdktn.stringToTerraform(struct!.catalog),
        data_source_arn: cdktn.stringToTerraform(struct!.dataSourceArn),
        input_columns: cdktn.listMapper(ccDataSetPhysicalTableMapRelationalTableInputColumnsPropertyToTerraform, false)(struct!.inputColumns),
        name: cdktn.stringToTerraform(struct!.name),
        schema: cdktn.stringToTerraform(struct!.schema),
    }
}


export function ccDataSetRelationalTablePropertyToHclTerraform(struct?: CcDataSet.RelationalTableProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        catalog: {
            value: cdktn.stringToHclTerraform(struct!.catalog),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        data_source_arn: {
            value: cdktn.stringToHclTerraform(struct!.dataSourceArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        input_columns: {
            value: cdktn.listMapperHcl(ccDataSetPhysicalTableMapRelationalTableInputColumnsPropertyToHclTerraform, false)(struct!.inputColumns),
            isBlock: true,
            type: "list",
            storageClassType: "PhysicalTableMapRelationalTableInputColumnsPropertyList",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        schema: {
            value: cdktn.stringToHclTerraform(struct!.schema),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSetPhysicalTableMapS3SourceInputColumnsPropertyToTerraform(struct?: CcDataSet.PhysicalTableMapS3SourceInputColumnsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccDataSetPhysicalTableMapS3SourceInputColumnsPropertyToHclTerraform(struct?: CcDataSet.PhysicalTableMapS3SourceInputColumnsProperty | cdktn.IResolvable): any {
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
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSetUploadSettingsPropertyToTerraform(struct?: CcDataSet.UploadSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        contains_header: cdktn.booleanToTerraform(struct!.containsHeader),
        delimiter: cdktn.stringToTerraform(struct!.delimiter),
        format: cdktn.stringToTerraform(struct!.format),
        start_from_row: cdktn.numberToTerraform(struct!.startFromRow),
        text_qualifier: cdktn.stringToTerraform(struct!.textQualifier),
    }
}


export function ccDataSetUploadSettingsPropertyToHclTerraform(struct?: CcDataSet.UploadSettingsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        contains_header: {
            value: cdktn.booleanToHclTerraform(struct!.containsHeader),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        delimiter: {
            value: cdktn.stringToHclTerraform(struct!.delimiter),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        format: {
            value: cdktn.stringToHclTerraform(struct!.format),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        start_from_row: {
            value: cdktn.numberToHclTerraform(struct!.startFromRow),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        text_qualifier: {
            value: cdktn.stringToHclTerraform(struct!.textQualifier),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSetS3SourcePropertyToTerraform(struct?: CcDataSet.S3SourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        data_source_arn: cdktn.stringToTerraform(struct!.dataSourceArn),
        input_columns: cdktn.listMapper(ccDataSetPhysicalTableMapS3SourceInputColumnsPropertyToTerraform, false)(struct!.inputColumns),
        upload_settings: ccDataSetUploadSettingsPropertyToTerraform(struct!.uploadSettings),
    }
}


export function ccDataSetS3SourcePropertyToHclTerraform(struct?: CcDataSet.S3SourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        data_source_arn: {
            value: cdktn.stringToHclTerraform(struct!.dataSourceArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        input_columns: {
            value: cdktn.listMapperHcl(ccDataSetPhysicalTableMapS3SourceInputColumnsPropertyToHclTerraform, false)(struct!.inputColumns),
            isBlock: true,
            type: "list",
            storageClassType: "PhysicalTableMapS3SourceInputColumnsPropertyList",
        },
        upload_settings: {
            value: ccDataSetUploadSettingsPropertyToHclTerraform(struct!.uploadSettings),
            isBlock: true,
            type: "struct",
            storageClassType: "UploadSettingsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSetPhysicalTablePropertyToTerraform(struct?: CcDataSet.PhysicalTableProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        custom_sql: ccDataSetCustomSqlPropertyToTerraform(struct!.customSql),
        relational_table: ccDataSetRelationalTablePropertyToTerraform(struct!.relationalTable),
        s3_source: ccDataSetS3SourcePropertyToTerraform(struct!.s3Source),
    }
}


export function ccDataSetPhysicalTablePropertyToHclTerraform(struct?: CcDataSet.PhysicalTableProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        custom_sql: {
            value: ccDataSetCustomSqlPropertyToHclTerraform(struct!.customSql),
            isBlock: true,
            type: "struct",
            storageClassType: "CustomSqlProperty",
        },
        relational_table: {
            value: ccDataSetRelationalTablePropertyToHclTerraform(struct!.relationalTable),
            isBlock: true,
            type: "struct",
            storageClassType: "RelationalTableProperty",
        },
        s3_source: {
            value: ccDataSetS3SourcePropertyToHclTerraform(struct!.s3Source),
            isBlock: true,
            type: "struct",
            storageClassType: "S3SourceProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSetRowLevelPermissionDataSetPropertyToTerraform(struct?: CcDataSet.RowLevelPermissionDataSetProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        arn: cdktn.stringToTerraform(struct!.arn),
        format_version: cdktn.stringToTerraform(struct!.formatVersion),
        namespace: cdktn.stringToTerraform(struct!.namespace),
        permission_policy: cdktn.stringToTerraform(struct!.permissionPolicy),
    }
}


export function ccDataSetRowLevelPermissionDataSetPropertyToHclTerraform(struct?: CcDataSet.RowLevelPermissionDataSetProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        arn: {
            value: cdktn.stringToHclTerraform(struct!.arn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        format_version: {
            value: cdktn.stringToHclTerraform(struct!.formatVersion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        namespace: {
            value: cdktn.stringToHclTerraform(struct!.namespace),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        permission_policy: {
            value: cdktn.stringToHclTerraform(struct!.permissionPolicy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSetTagPropertyToTerraform(struct?: CcDataSet.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccDataSetTagPropertyToHclTerraform(struct?: CcDataSet.TagProperty | cdktn.IResolvable): any {
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


export namespace CcDataSet {
export interface GeoSpatialColumnGroupProperty {
    /**
    * <p>Columns in this hierarchy.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#columns CcDataSet#columns}
    */
    readonly columns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#country_code CcDataSet#country_code}
    */
    readonly countryCode?: string;
    /**
    * <p>A display name for the hierarchy.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#name CcDataSet#name}
    */
    readonly name?: string;
}
export class GeoSpatialColumnGroupPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): GeoSpatialColumnGroupProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._columns !== undefined) {
            hasAnyValues = true;
            internalValueResult.columns = this._columns;
        }
        if (this._countryCode !== undefined) {
            hasAnyValues = true;
            internalValueResult.countryCode = this._countryCode;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: GeoSpatialColumnGroupProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._columns = undefined;
            this._countryCode = undefined;
            this._name = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._columns = value.columns;
            this._countryCode = value.countryCode;
            this._name = value.name;
        }
    }

    // columns - computed: true, optional: true, required: false
    private _columns?: string[]; 
    public get columns() {
        return this.getListAttribute('columns');
    }
    public set columns(value: string[]) {
        this._columns = value;
    }
    public resetColumns() {
        this._columns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get columnsInput() {
        return this._columns;
    }

    // country_code - computed: true, optional: true, required: false
    private _countryCode?: string; 
    public get countryCode() {
        return this.getStringAttribute('country_code');
    }
    public set countryCode(value: string) {
        this._countryCode = value;
    }
    public resetCountryCode() {
        this._countryCode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get countryCodeInput() {
        return this._countryCode;
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
}
export interface ColumnGroupProperty {
    /**
    * <p>Geospatial column group that denotes a hierarchy.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#geo_spatial_column_group CcDataSet#geo_spatial_column_group}
    */
    readonly geoSpatialColumnGroup?: GeoSpatialColumnGroupProperty;
}
export class ColumnGroupPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ColumnGroupProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._geoSpatialColumnGroup?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.geoSpatialColumnGroup = this._geoSpatialColumnGroup?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ColumnGroupProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._geoSpatialColumnGroup.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._geoSpatialColumnGroup.internalValue = value.geoSpatialColumnGroup;
        }
    }

    // geo_spatial_column_group - computed: true, optional: true, required: false
    private _geoSpatialColumnGroup = new GeoSpatialColumnGroupPropertyOutputReference(this, "geo_spatial_column_group");
    public get geoSpatialColumnGroup() {
        return this._geoSpatialColumnGroup;
    }
    public putGeoSpatialColumnGroup(value: GeoSpatialColumnGroupProperty) {
        this._geoSpatialColumnGroup.internalValue = value;
    }
    public resetGeoSpatialColumnGroup() {
        this._geoSpatialColumnGroup.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get geoSpatialColumnGroupInput() {
        return this._geoSpatialColumnGroup.internalValue;
    }
}

export class ColumnGroupPropertyList extends cdktn.ComplexList {
    public internalValue? : ColumnGroupProperty[] | cdktn.IResolvable

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
    public get(index: number): ColumnGroupPropertyOutputReference {
        return new ColumnGroupPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ColumnLevelPermissionRuleProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#column_names CcDataSet#column_names}
    */
    readonly columnNames?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#principals CcDataSet#principals}
    */
    readonly principals?: string[];
}
export class ColumnLevelPermissionRulePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ColumnLevelPermissionRuleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._columnNames !== undefined) {
            hasAnyValues = true;
            internalValueResult.columnNames = this._columnNames;
        }
        if (this._principals !== undefined) {
            hasAnyValues = true;
            internalValueResult.principals = this._principals;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ColumnLevelPermissionRuleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._columnNames = undefined;
            this._principals = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._columnNames = value.columnNames;
            this._principals = value.principals;
        }
    }

    // column_names - computed: true, optional: true, required: false
    private _columnNames?: string[]; 
    public get columnNames() {
        return this.getListAttribute('column_names');
    }
    public set columnNames(value: string[]) {
        this._columnNames = value;
    }
    public resetColumnNames() {
        this._columnNames = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get columnNamesInput() {
        return this._columnNames;
    }

    // principals - computed: true, optional: true, required: false
    private _principals?: string[]; 
    public get principals() {
        return this.getListAttribute('principals');
    }
    public set principals(value: string[]) {
        this._principals = value;
    }
    public resetPrincipals() {
        this._principals = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get principalsInput() {
        return this._principals;
    }
}

export class ColumnLevelPermissionRulePropertyList extends cdktn.ComplexList {
    public internalValue? : ColumnLevelPermissionRuleProperty[] | cdktn.IResolvable

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
    public get(index: number): ColumnLevelPermissionRulePropertyOutputReference {
        return new ColumnLevelPermissionRulePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface DataSetUsageConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#disable_use_as_direct_query_source CcDataSet#disable_use_as_direct_query_source}
    */
    readonly disableUseAsDirectQuerySource?: boolean | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#disable_use_as_imported_source CcDataSet#disable_use_as_imported_source}
    */
    readonly disableUseAsImportedSource?: boolean | cdktn.IResolvable;
}
export class DataSetUsageConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DataSetUsageConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._disableUseAsDirectQuerySource !== undefined) {
            hasAnyValues = true;
            internalValueResult.disableUseAsDirectQuerySource = this._disableUseAsDirectQuerySource;
        }
        if (this._disableUseAsImportedSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.disableUseAsImportedSource = this._disableUseAsImportedSource;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DataSetUsageConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._disableUseAsDirectQuerySource = undefined;
            this._disableUseAsImportedSource = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._disableUseAsDirectQuerySource = value.disableUseAsDirectQuerySource;
            this._disableUseAsImportedSource = value.disableUseAsImportedSource;
        }
    }

    // disable_use_as_direct_query_source - computed: true, optional: true, required: false
    private _disableUseAsDirectQuerySource?: boolean | cdktn.IResolvable; 
    public get disableUseAsDirectQuerySource() {
        return this.getBooleanAttribute('disable_use_as_direct_query_source');
    }
    public set disableUseAsDirectQuerySource(value: boolean | cdktn.IResolvable) {
        this._disableUseAsDirectQuerySource = value;
    }
    public resetDisableUseAsDirectQuerySource() {
        this._disableUseAsDirectQuerySource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get disableUseAsDirectQuerySourceInput() {
        return this._disableUseAsDirectQuerySource;
    }

    // disable_use_as_imported_source - computed: true, optional: true, required: false
    private _disableUseAsImportedSource?: boolean | cdktn.IResolvable; 
    public get disableUseAsImportedSource() {
        return this.getBooleanAttribute('disable_use_as_imported_source');
    }
    public set disableUseAsImportedSource(value: boolean | cdktn.IResolvable) {
        this._disableUseAsImportedSource = value;
    }
    public resetDisableUseAsImportedSource() {
        this._disableUseAsImportedSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get disableUseAsImportedSourceInput() {
        return this._disableUseAsImportedSource;
    }
}
export interface FieldFolderProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#columns CcDataSet#columns}
    */
    readonly columns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#description CcDataSet#description}
    */
    readonly description?: string;
}
export class FieldFolderPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
        super(terraformResource, terraformAttribute, false, complexObjectKey);
    }

    public get internalValue(): FieldFolderProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._columns !== undefined) {
            hasAnyValues = true;
            internalValueResult.columns = this._columns;
        }
        if (this._description !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FieldFolderProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._columns = undefined;
            this._description = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._columns = value.columns;
            this._description = value.description;
        }
    }

    // columns - computed: true, optional: true, required: false
    private _columns?: string[]; 
    public get columns() {
        return this.getListAttribute('columns');
    }
    public set columns(value: string[]) {
        this._columns = value;
    }
    public resetColumns() {
        this._columns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get columnsInput() {
        return this._columns;
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
}

export class FieldFolderPropertyMap extends cdktn.ComplexMap {
    public internalValue? : { [key: string]: FieldFolderProperty } | cdktn.IResolvable

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute);
    }

    /**
    * @param key the key of the item to return
    */
    public get(key: string): FieldFolderPropertyOutputReference {
        return new FieldFolderPropertyOutputReference(this.terraformResource, this.terraformAttribute, key);
    }
}
export interface IngestionWaitPolicyProperty {
    /**
    * <p>The maximum time (in hours) to wait for Ingestion to complete. Default timeout is 36 hours.
    *  Applicable only when DataSetImportMode mode is set to SPICE and WaitForSpiceIngestion is set to true.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#ingestion_wait_time_in_hours CcDataSet#ingestion_wait_time_in_hours}
    */
    readonly ingestionWaitTimeInHours?: number;
    /**
    * <p>Wait for SPICE ingestion to finish to mark dataset creation/update successful. Default (true).
    *   Applicable only when DataSetImportMode mode is set to SPICE.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#wait_for_spice_ingestion CcDataSet#wait_for_spice_ingestion}
    */
    readonly waitForSpiceIngestion?: boolean | cdktn.IResolvable;
}
export class IngestionWaitPolicyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IngestionWaitPolicyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._ingestionWaitTimeInHours !== undefined) {
            hasAnyValues = true;
            internalValueResult.ingestionWaitTimeInHours = this._ingestionWaitTimeInHours;
        }
        if (this._waitForSpiceIngestion !== undefined) {
            hasAnyValues = true;
            internalValueResult.waitForSpiceIngestion = this._waitForSpiceIngestion;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IngestionWaitPolicyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._ingestionWaitTimeInHours = undefined;
            this._waitForSpiceIngestion = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._ingestionWaitTimeInHours = value.ingestionWaitTimeInHours;
            this._waitForSpiceIngestion = value.waitForSpiceIngestion;
        }
    }

    // ingestion_wait_time_in_hours - computed: true, optional: true, required: false
    private _ingestionWaitTimeInHours?: number; 
    public get ingestionWaitTimeInHours() {
        return this.getNumberAttribute('ingestion_wait_time_in_hours');
    }
    public set ingestionWaitTimeInHours(value: number) {
        this._ingestionWaitTimeInHours = value;
    }
    public resetIngestionWaitTimeInHours() {
        this._ingestionWaitTimeInHours = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ingestionWaitTimeInHoursInput() {
        return this._ingestionWaitTimeInHours;
    }

    // wait_for_spice_ingestion - computed: true, optional: true, required: false
    private _waitForSpiceIngestion?: boolean | cdktn.IResolvable; 
    public get waitForSpiceIngestion() {
        return this.getBooleanAttribute('wait_for_spice_ingestion');
    }
    public set waitForSpiceIngestion(value: boolean | cdktn.IResolvable) {
        this._waitForSpiceIngestion = value;
    }
    public resetWaitForSpiceIngestion() {
        this._waitForSpiceIngestion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get waitForSpiceIngestionInput() {
        return this._waitForSpiceIngestion;
    }
}
export interface CastColumnTypeOperationProperty {
    /**
    * <p>Column name.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#column_name CcDataSet#column_name}
    */
    readonly columnName?: string;
    /**
    * <p>When casting a column from string to datetime type, you can supply a string in a
    *             format supported by Amazon QuickSight to denote the source data format.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#format CcDataSet#format}
    */
    readonly format?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#new_column_type CcDataSet#new_column_type}
    */
    readonly newColumnType?: string;
}
export class CastColumnTypeOperationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CastColumnTypeOperationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._columnName !== undefined) {
            hasAnyValues = true;
            internalValueResult.columnName = this._columnName;
        }
        if (this._format !== undefined) {
            hasAnyValues = true;
            internalValueResult.format = this._format;
        }
        if (this._newColumnType !== undefined) {
            hasAnyValues = true;
            internalValueResult.newColumnType = this._newColumnType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CastColumnTypeOperationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._columnName = undefined;
            this._format = undefined;
            this._newColumnType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._columnName = value.columnName;
            this._format = value.format;
            this._newColumnType = value.newColumnType;
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

    // format - computed: true, optional: true, required: false
    private _format?: string; 
    public get format() {
        return this.getStringAttribute('format');
    }
    public set format(value: string) {
        this._format = value;
    }
    public resetFormat() {
        this._format = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get formatInput() {
        return this._format;
    }

    // new_column_type - computed: true, optional: true, required: false
    private _newColumnType?: string; 
    public get newColumnType() {
        return this.getStringAttribute('new_column_type');
    }
    public set newColumnType(value: string) {
        this._newColumnType = value;
    }
    public resetNewColumnType() {
        this._newColumnType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get newColumnTypeInput() {
        return this._newColumnType;
    }
}
export interface CalculatedColumnProperty {
    /**
    * <p>A unique ID to identify a calculated column. During a dataset update, if the column ID
    *             of a calculated column matches that of an existing calculated column, Amazon QuickSight
    *             preserves the existing calculated column.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#column_id CcDataSet#column_id}
    */
    readonly columnId?: string;
    /**
    * <p>Column name.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#column_name CcDataSet#column_name}
    */
    readonly columnName?: string;
    /**
    * <p>An expression that defines the calculated column.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#expression CcDataSet#expression}
    */
    readonly expression?: string;
}
export class CalculatedColumnPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): CalculatedColumnProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._columnId !== undefined) {
            hasAnyValues = true;
            internalValueResult.columnId = this._columnId;
        }
        if (this._columnName !== undefined) {
            hasAnyValues = true;
            internalValueResult.columnName = this._columnName;
        }
        if (this._expression !== undefined) {
            hasAnyValues = true;
            internalValueResult.expression = this._expression;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CalculatedColumnProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._columnId = undefined;
            this._columnName = undefined;
            this._expression = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._columnId = value.columnId;
            this._columnName = value.columnName;
            this._expression = value.expression;
        }
    }

    // column_id - computed: true, optional: true, required: false
    private _columnId?: string; 
    public get columnId() {
        return this.getStringAttribute('column_id');
    }
    public set columnId(value: string) {
        this._columnId = value;
    }
    public resetColumnId() {
        this._columnId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get columnIdInput() {
        return this._columnId;
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

    // expression - computed: true, optional: true, required: false
    private _expression?: string; 
    public get expression() {
        return this.getStringAttribute('expression');
    }
    public set expression(value: string) {
        this._expression = value;
    }
    public resetExpression() {
        this._expression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get expressionInput() {
        return this._expression;
    }
}

export class CalculatedColumnPropertyList extends cdktn.ComplexList {
    public internalValue? : CalculatedColumnProperty[] | cdktn.IResolvable

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
    public get(index: number): CalculatedColumnPropertyOutputReference {
        return new CalculatedColumnPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface CreateColumnsOperationProperty {
    /**
    * <p>Calculated columns to create.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#columns CcDataSet#columns}
    */
    readonly columns?: CalculatedColumnProperty[] | cdktn.IResolvable;
}
export class CreateColumnsOperationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CreateColumnsOperationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._columns?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.columns = this._columns?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CreateColumnsOperationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._columns.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._columns.internalValue = value.columns;
        }
    }

    // columns - computed: true, optional: true, required: false
    private _columns = new CalculatedColumnPropertyList(this, "columns", false);
    public get columns() {
        return this._columns;
    }
    public putColumns(value: CalculatedColumnProperty[] | cdktn.IResolvable) {
        this._columns.internalValue = value;
    }
    public resetColumns() {
        this._columns.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get columnsInput() {
        return this._columns.internalValue;
    }
}
export interface FilterOperationProperty {
    /**
    * <p>An expression that must evaluate to a Boolean value. Rows for which the expression
    *             evaluates to true are kept in the dataset.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#condition_expression CcDataSet#condition_expression}
    */
    readonly conditionExpression?: string;
}
export class FilterOperationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FilterOperationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._conditionExpression !== undefined) {
            hasAnyValues = true;
            internalValueResult.conditionExpression = this._conditionExpression;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FilterOperationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._conditionExpression = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._conditionExpression = value.conditionExpression;
        }
    }

    // condition_expression - computed: true, optional: true, required: false
    private _conditionExpression?: string; 
    public get conditionExpression() {
        return this.getStringAttribute('condition_expression');
    }
    public set conditionExpression(value: string) {
        this._conditionExpression = value;
    }
    public resetConditionExpression() {
        this._conditionExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get conditionExpressionInput() {
        return this._conditionExpression;
    }
}
export interface ProjectOperationProperty {
    /**
    * <p>Projected columns.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#projected_columns CcDataSet#projected_columns}
    */
    readonly projectedColumns?: string[];
}
export class ProjectOperationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ProjectOperationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._projectedColumns !== undefined) {
            hasAnyValues = true;
            internalValueResult.projectedColumns = this._projectedColumns;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ProjectOperationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._projectedColumns = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._projectedColumns = value.projectedColumns;
        }
    }

    // projected_columns - computed: true, optional: true, required: false
    private _projectedColumns?: string[]; 
    public get projectedColumns() {
        return this.getListAttribute('projected_columns');
    }
    public set projectedColumns(value: string[]) {
        this._projectedColumns = value;
    }
    public resetProjectedColumns() {
        this._projectedColumns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get projectedColumnsInput() {
        return this._projectedColumns;
    }
}
export interface RenameColumnOperationProperty {
    /**
    * <p>The name of the column to be renamed.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#column_name CcDataSet#column_name}
    */
    readonly columnName?: string;
    /**
    * <p>The new name for the column.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#new_column_name CcDataSet#new_column_name}
    */
    readonly newColumnName?: string;
}
export class RenameColumnOperationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RenameColumnOperationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._columnName !== undefined) {
            hasAnyValues = true;
            internalValueResult.columnName = this._columnName;
        }
        if (this._newColumnName !== undefined) {
            hasAnyValues = true;
            internalValueResult.newColumnName = this._newColumnName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RenameColumnOperationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._columnName = undefined;
            this._newColumnName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._columnName = value.columnName;
            this._newColumnName = value.newColumnName;
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

    // new_column_name - computed: true, optional: true, required: false
    private _newColumnName?: string; 
    public get newColumnName() {
        return this.getStringAttribute('new_column_name');
    }
    public set newColumnName(value: string) {
        this._newColumnName = value;
    }
    public resetNewColumnName() {
        this._newColumnName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get newColumnNameInput() {
        return this._newColumnName;
    }
}
export interface ColumnDescriptionProperty {
    /**
    * <p>The text of a description for a column.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#text CcDataSet#text}
    */
    readonly text?: string;
}
export class ColumnDescriptionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ColumnDescriptionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._text !== undefined) {
            hasAnyValues = true;
            internalValueResult.text = this._text;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ColumnDescriptionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._text = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._text = value.text;
        }
    }

    // text - computed: true, optional: true, required: false
    private _text?: string; 
    public get text() {
        return this.getStringAttribute('text');
    }
    public set text(value: string) {
        this._text = value;
    }
    public resetText() {
        this._text = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get textInput() {
        return this._text;
    }
}
export interface ColumnTagProperty {
    /**
    * <p>Metadata that contains a description for a column.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#column_description CcDataSet#column_description}
    */
    readonly columnDescription?: ColumnDescriptionProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#column_geographic_role CcDataSet#column_geographic_role}
    */
    readonly columnGeographicRole?: string;
}
export class ColumnTagPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ColumnTagProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._columnDescription?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.columnDescription = this._columnDescription?.internalValue;
        }
        if (this._columnGeographicRole !== undefined) {
            hasAnyValues = true;
            internalValueResult.columnGeographicRole = this._columnGeographicRole;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ColumnTagProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._columnDescription.internalValue = undefined;
            this._columnGeographicRole = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._columnDescription.internalValue = value.columnDescription;
            this._columnGeographicRole = value.columnGeographicRole;
        }
    }

    // column_description - computed: true, optional: true, required: false
    private _columnDescription = new ColumnDescriptionPropertyOutputReference(this, "column_description");
    public get columnDescription() {
        return this._columnDescription;
    }
    public putColumnDescription(value: ColumnDescriptionProperty) {
        this._columnDescription.internalValue = value;
    }
    public resetColumnDescription() {
        this._columnDescription.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get columnDescriptionInput() {
        return this._columnDescription.internalValue;
    }

    // column_geographic_role - computed: true, optional: true, required: false
    private _columnGeographicRole?: string; 
    public get columnGeographicRole() {
        return this.getStringAttribute('column_geographic_role');
    }
    public set columnGeographicRole(value: string) {
        this._columnGeographicRole = value;
    }
    public resetColumnGeographicRole() {
        this._columnGeographicRole = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get columnGeographicRoleInput() {
        return this._columnGeographicRole;
    }
}

export class ColumnTagPropertyList extends cdktn.ComplexList {
    public internalValue? : ColumnTagProperty[] | cdktn.IResolvable

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
    public get(index: number): ColumnTagPropertyOutputReference {
        return new ColumnTagPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagColumnOperationProperty {
    /**
    * <p>The column that this operation acts on.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#column_name CcDataSet#column_name}
    */
    readonly columnName?: string;
    /**
    * <p>The dataset column tag, currently only used for geospatial type tagging. .</p>
    *         <note>
    *             <p>This is not tags for the AWS tagging feature. .</p>
    *         </note>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#tags CcDataSet#tags}
    */
    readonly tags?: ColumnTagProperty[] | cdktn.IResolvable;
}
export class TagColumnOperationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TagColumnOperationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._columnName !== undefined) {
            hasAnyValues = true;
            internalValueResult.columnName = this._columnName;
        }
        if (this._tags?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tags = this._tags?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TagColumnOperationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._columnName = undefined;
            this._tags.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._columnName = value.columnName;
            this._tags.internalValue = value.tags;
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

    // tags - computed: true, optional: true, required: false
    private _tags = new ColumnTagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: ColumnTagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }
}
export interface TransformOperationProperty {
    /**
    * <p>A transform operation that casts a column to a different type.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#cast_column_type_operation CcDataSet#cast_column_type_operation}
    */
    readonly castColumnTypeOperation?: CastColumnTypeOperationProperty;
    /**
    * <p>A transform operation that creates calculated columns. Columns created in one such
    *             operation form a lexical closure.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#create_columns_operation CcDataSet#create_columns_operation}
    */
    readonly createColumnsOperation?: CreateColumnsOperationProperty;
    /**
    * <p>A transform operation that filters rows based on a condition.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#filter_operation CcDataSet#filter_operation}
    */
    readonly filterOperation?: FilterOperationProperty;
    /**
    * <p>A transform operation that projects columns. Operations that come after a projection
    *             can only refer to projected columns.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#project_operation CcDataSet#project_operation}
    */
    readonly projectOperation?: ProjectOperationProperty;
    /**
    * <p>A transform operation that renames a column.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#rename_column_operation CcDataSet#rename_column_operation}
    */
    readonly renameColumnOperation?: RenameColumnOperationProperty;
    /**
    * <p>A transform operation that tags a column with additional information.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#tag_column_operation CcDataSet#tag_column_operation}
    */
    readonly tagColumnOperation?: TagColumnOperationProperty;
}
export class TransformOperationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TransformOperationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._castColumnTypeOperation?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.castColumnTypeOperation = this._castColumnTypeOperation?.internalValue;
        }
        if (this._createColumnsOperation?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.createColumnsOperation = this._createColumnsOperation?.internalValue;
        }
        if (this._filterOperation?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.filterOperation = this._filterOperation?.internalValue;
        }
        if (this._projectOperation?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.projectOperation = this._projectOperation?.internalValue;
        }
        if (this._renameColumnOperation?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.renameColumnOperation = this._renameColumnOperation?.internalValue;
        }
        if (this._tagColumnOperation?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tagColumnOperation = this._tagColumnOperation?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TransformOperationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._castColumnTypeOperation.internalValue = undefined;
            this._createColumnsOperation.internalValue = undefined;
            this._filterOperation.internalValue = undefined;
            this._projectOperation.internalValue = undefined;
            this._renameColumnOperation.internalValue = undefined;
            this._tagColumnOperation.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._castColumnTypeOperation.internalValue = value.castColumnTypeOperation;
            this._createColumnsOperation.internalValue = value.createColumnsOperation;
            this._filterOperation.internalValue = value.filterOperation;
            this._projectOperation.internalValue = value.projectOperation;
            this._renameColumnOperation.internalValue = value.renameColumnOperation;
            this._tagColumnOperation.internalValue = value.tagColumnOperation;
        }
    }

    // cast_column_type_operation - computed: true, optional: true, required: false
    private _castColumnTypeOperation = new CastColumnTypeOperationPropertyOutputReference(this, "cast_column_type_operation");
    public get castColumnTypeOperation() {
        return this._castColumnTypeOperation;
    }
    public putCastColumnTypeOperation(value: CastColumnTypeOperationProperty) {
        this._castColumnTypeOperation.internalValue = value;
    }
    public resetCastColumnTypeOperation() {
        this._castColumnTypeOperation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get castColumnTypeOperationInput() {
        return this._castColumnTypeOperation.internalValue;
    }

    // create_columns_operation - computed: true, optional: true, required: false
    private _createColumnsOperation = new CreateColumnsOperationPropertyOutputReference(this, "create_columns_operation");
    public get createColumnsOperation() {
        return this._createColumnsOperation;
    }
    public putCreateColumnsOperation(value: CreateColumnsOperationProperty) {
        this._createColumnsOperation.internalValue = value;
    }
    public resetCreateColumnsOperation() {
        this._createColumnsOperation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createColumnsOperationInput() {
        return this._createColumnsOperation.internalValue;
    }

    // filter_operation - computed: true, optional: true, required: false
    private _filterOperation = new FilterOperationPropertyOutputReference(this, "filter_operation");
    public get filterOperation() {
        return this._filterOperation;
    }
    public putFilterOperation(value: FilterOperationProperty) {
        this._filterOperation.internalValue = value;
    }
    public resetFilterOperation() {
        this._filterOperation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterOperationInput() {
        return this._filterOperation.internalValue;
    }

    // project_operation - computed: true, optional: true, required: false
    private _projectOperation = new ProjectOperationPropertyOutputReference(this, "project_operation");
    public get projectOperation() {
        return this._projectOperation;
    }
    public putProjectOperation(value: ProjectOperationProperty) {
        this._projectOperation.internalValue = value;
    }
    public resetProjectOperation() {
        this._projectOperation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get projectOperationInput() {
        return this._projectOperation.internalValue;
    }

    // rename_column_operation - computed: true, optional: true, required: false
    private _renameColumnOperation = new RenameColumnOperationPropertyOutputReference(this, "rename_column_operation");
    public get renameColumnOperation() {
        return this._renameColumnOperation;
    }
    public putRenameColumnOperation(value: RenameColumnOperationProperty) {
        this._renameColumnOperation.internalValue = value;
    }
    public resetRenameColumnOperation() {
        this._renameColumnOperation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get renameColumnOperationInput() {
        return this._renameColumnOperation.internalValue;
    }

    // tag_column_operation - computed: true, optional: true, required: false
    private _tagColumnOperation = new TagColumnOperationPropertyOutputReference(this, "tag_column_operation");
    public get tagColumnOperation() {
        return this._tagColumnOperation;
    }
    public putTagColumnOperation(value: TagColumnOperationProperty) {
        this._tagColumnOperation.internalValue = value;
    }
    public resetTagColumnOperation() {
        this._tagColumnOperation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagColumnOperationInput() {
        return this._tagColumnOperation.internalValue;
    }
}

export class TransformOperationPropertyList extends cdktn.ComplexList {
    public internalValue? : TransformOperationProperty[] | cdktn.IResolvable

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
    public get(index: number): TransformOperationPropertyOutputReference {
        return new TransformOperationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface JoinKeyPropertiesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#unique_key CcDataSet#unique_key}
    */
    readonly uniqueKey?: boolean | cdktn.IResolvable;
}
export class JoinKeyPropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): JoinKeyPropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._uniqueKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.uniqueKey = this._uniqueKey;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: JoinKeyPropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._uniqueKey = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._uniqueKey = value.uniqueKey;
        }
    }

    // unique_key - computed: true, optional: true, required: false
    private _uniqueKey?: boolean | cdktn.IResolvable; 
    public get uniqueKey() {
        return this.getBooleanAttribute('unique_key');
    }
    public set uniqueKey(value: boolean | cdktn.IResolvable) {
        this._uniqueKey = value;
    }
    public resetUniqueKey() {
        this._uniqueKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get uniqueKeyInput() {
        return this._uniqueKey;
    }
}
export interface RightJoinKeyPropertiesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#unique_key CcDataSet#unique_key}
    */
    readonly uniqueKey?: boolean | cdktn.IResolvable;
}
export class RightJoinKeyPropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RightJoinKeyPropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._uniqueKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.uniqueKey = this._uniqueKey;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RightJoinKeyPropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._uniqueKey = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._uniqueKey = value.uniqueKey;
        }
    }

    // unique_key - computed: true, optional: true, required: false
    private _uniqueKey?: boolean | cdktn.IResolvable; 
    public get uniqueKey() {
        return this.getBooleanAttribute('unique_key');
    }
    public set uniqueKey(value: boolean | cdktn.IResolvable) {
        this._uniqueKey = value;
    }
    public resetUniqueKey() {
        this._uniqueKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get uniqueKeyInput() {
        return this._uniqueKey;
    }
}
export interface JoinInstructionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#left_join_key_properties CcDataSet#left_join_key_properties}
    */
    readonly leftJoinKeyProperties?: JoinKeyPropertiesProperty;
    /**
    * <p>Left operand.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#left_operand CcDataSet#left_operand}
    */
    readonly leftOperand?: string;
    /**
    * <p>On Clause.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#on_clause CcDataSet#on_clause}
    */
    readonly onClause?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#right_join_key_properties CcDataSet#right_join_key_properties}
    */
    readonly rightJoinKeyProperties?: RightJoinKeyPropertiesProperty;
    /**
    * <p>Right operand.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#right_operand CcDataSet#right_operand}
    */
    readonly rightOperand?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#type CcDataSet#type}
    */
    readonly type?: string;
}
export class JoinInstructionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): JoinInstructionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._leftJoinKeyProperties?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.leftJoinKeyProperties = this._leftJoinKeyProperties?.internalValue;
        }
        if (this._leftOperand !== undefined) {
            hasAnyValues = true;
            internalValueResult.leftOperand = this._leftOperand;
        }
        if (this._onClause !== undefined) {
            hasAnyValues = true;
            internalValueResult.onClause = this._onClause;
        }
        if (this._rightJoinKeyProperties?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.rightJoinKeyProperties = this._rightJoinKeyProperties?.internalValue;
        }
        if (this._rightOperand !== undefined) {
            hasAnyValues = true;
            internalValueResult.rightOperand = this._rightOperand;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: JoinInstructionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._leftJoinKeyProperties.internalValue = undefined;
            this._leftOperand = undefined;
            this._onClause = undefined;
            this._rightJoinKeyProperties.internalValue = undefined;
            this._rightOperand = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._leftJoinKeyProperties.internalValue = value.leftJoinKeyProperties;
            this._leftOperand = value.leftOperand;
            this._onClause = value.onClause;
            this._rightJoinKeyProperties.internalValue = value.rightJoinKeyProperties;
            this._rightOperand = value.rightOperand;
            this._type = value.type;
        }
    }

    // left_join_key_properties - computed: true, optional: true, required: false
    private _leftJoinKeyProperties = new JoinKeyPropertiesPropertyOutputReference(this, "left_join_key_properties");
    public get leftJoinKeyProperties() {
        return this._leftJoinKeyProperties;
    }
    public putLeftJoinKeyProperties(value: JoinKeyPropertiesProperty) {
        this._leftJoinKeyProperties.internalValue = value;
    }
    public resetLeftJoinKeyProperties() {
        this._leftJoinKeyProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get leftJoinKeyPropertiesInput() {
        return this._leftJoinKeyProperties.internalValue;
    }

    // left_operand - computed: true, optional: true, required: false
    private _leftOperand?: string; 
    public get leftOperand() {
        return this.getStringAttribute('left_operand');
    }
    public set leftOperand(value: string) {
        this._leftOperand = value;
    }
    public resetLeftOperand() {
        this._leftOperand = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get leftOperandInput() {
        return this._leftOperand;
    }

    // on_clause - computed: true, optional: true, required: false
    private _onClause?: string; 
    public get onClause() {
        return this.getStringAttribute('on_clause');
    }
    public set onClause(value: string) {
        this._onClause = value;
    }
    public resetOnClause() {
        this._onClause = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get onClauseInput() {
        return this._onClause;
    }

    // right_join_key_properties - computed: true, optional: true, required: false
    private _rightJoinKeyProperties = new RightJoinKeyPropertiesPropertyOutputReference(this, "right_join_key_properties");
    public get rightJoinKeyProperties() {
        return this._rightJoinKeyProperties;
    }
    public putRightJoinKeyProperties(value: RightJoinKeyPropertiesProperty) {
        this._rightJoinKeyProperties.internalValue = value;
    }
    public resetRightJoinKeyProperties() {
        this._rightJoinKeyProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rightJoinKeyPropertiesInput() {
        return this._rightJoinKeyProperties.internalValue;
    }

    // right_operand - computed: true, optional: true, required: false
    private _rightOperand?: string; 
    public get rightOperand() {
        return this.getStringAttribute('right_operand');
    }
    public set rightOperand(value: string) {
        this._rightOperand = value;
    }
    public resetRightOperand() {
        this._rightOperand = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rightOperandInput() {
        return this._rightOperand;
    }

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }
}
export interface LogicalTableSourceProperty {
    /**
    * <p>The Amazon Resource Name (ARN) for the dataset.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#data_set_arn CcDataSet#data_set_arn}
    */
    readonly dataSetArn?: string;
    /**
    * <p>Join instruction.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#join_instruction CcDataSet#join_instruction}
    */
    readonly joinInstruction?: JoinInstructionProperty;
    /**
    * <p>Physical table ID.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#physical_table_id CcDataSet#physical_table_id}
    */
    readonly physicalTableId?: string;
}
export class LogicalTableSourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LogicalTableSourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dataSetArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataSetArn = this._dataSetArn;
        }
        if (this._joinInstruction?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.joinInstruction = this._joinInstruction?.internalValue;
        }
        if (this._physicalTableId !== undefined) {
            hasAnyValues = true;
            internalValueResult.physicalTableId = this._physicalTableId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LogicalTableSourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dataSetArn = undefined;
            this._joinInstruction.internalValue = undefined;
            this._physicalTableId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dataSetArn = value.dataSetArn;
            this._joinInstruction.internalValue = value.joinInstruction;
            this._physicalTableId = value.physicalTableId;
        }
    }

    // data_set_arn - computed: true, optional: true, required: false
    private _dataSetArn?: string; 
    public get dataSetArn() {
        return this.getStringAttribute('data_set_arn');
    }
    public set dataSetArn(value: string) {
        this._dataSetArn = value;
    }
    public resetDataSetArn() {
        this._dataSetArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataSetArnInput() {
        return this._dataSetArn;
    }

    // join_instruction - computed: true, optional: true, required: false
    private _joinInstruction = new JoinInstructionPropertyOutputReference(this, "join_instruction");
    public get joinInstruction() {
        return this._joinInstruction;
    }
    public putJoinInstruction(value: JoinInstructionProperty) {
        this._joinInstruction.internalValue = value;
    }
    public resetJoinInstruction() {
        this._joinInstruction.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get joinInstructionInput() {
        return this._joinInstruction.internalValue;
    }

    // physical_table_id - computed: true, optional: true, required: false
    private _physicalTableId?: string; 
    public get physicalTableId() {
        return this.getStringAttribute('physical_table_id');
    }
    public set physicalTableId(value: string) {
        this._physicalTableId = value;
    }
    public resetPhysicalTableId() {
        this._physicalTableId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get physicalTableIdInput() {
        return this._physicalTableId;
    }
}
export interface LogicalTableProperty {
    /**
    * <p>A display name for the logical table.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#alias CcDataSet#alias}
    */
    readonly alias?: string;
    /**
    * <p>Transform operations that act on this logical table.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#data_transforms CcDataSet#data_transforms}
    */
    readonly dataTransforms?: TransformOperationProperty[] | cdktn.IResolvable;
    /**
    * <p>Information about the source of a logical table. This is a variant type structure. For
    *             this structure to be valid, only one of the attributes can be non-null.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#source CcDataSet#source}
    */
    readonly source?: LogicalTableSourceProperty;
}
export class LogicalTablePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
        super(terraformResource, terraformAttribute, false, complexObjectKey);
    }

    public get internalValue(): LogicalTableProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._alias !== undefined) {
            hasAnyValues = true;
            internalValueResult.alias = this._alias;
        }
        if (this._dataTransforms?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataTransforms = this._dataTransforms?.internalValue;
        }
        if (this._source?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.source = this._source?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LogicalTableProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._alias = undefined;
            this._dataTransforms.internalValue = undefined;
            this._source.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._alias = value.alias;
            this._dataTransforms.internalValue = value.dataTransforms;
            this._source.internalValue = value.source;
        }
    }

    // alias - computed: true, optional: true, required: false
    private _alias?: string; 
    public get alias() {
        return this.getStringAttribute('alias');
    }
    public set alias(value: string) {
        this._alias = value;
    }
    public resetAlias() {
        this._alias = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get aliasInput() {
        return this._alias;
    }

    // data_transforms - computed: true, optional: true, required: false
    private _dataTransforms = new TransformOperationPropertyList(this, "data_transforms", false);
    public get dataTransforms() {
        return this._dataTransforms;
    }
    public putDataTransforms(value: TransformOperationProperty[] | cdktn.IResolvable) {
        this._dataTransforms.internalValue = value;
    }
    public resetDataTransforms() {
        this._dataTransforms.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataTransformsInput() {
        return this._dataTransforms.internalValue;
    }

    // source - computed: true, optional: true, required: false
    private _source = new LogicalTableSourcePropertyOutputReference(this, "source");
    public get source() {
        return this._source;
    }
    public putSource(value: LogicalTableSourceProperty) {
        this._source.internalValue = value;
    }
    public resetSource() {
        this._source.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceInput() {
        return this._source.internalValue;
    }
}

export class LogicalTablePropertyMap extends cdktn.ComplexMap {
    public internalValue? : { [key: string]: LogicalTableProperty } | cdktn.IResolvable

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute);
    }

    /**
    * @param key the key of the item to return
    */
    public get(key: string): LogicalTablePropertyOutputReference {
        return new LogicalTablePropertyOutputReference(this.terraformResource, this.terraformAttribute, key);
    }
}
export interface OutputColumnsProperty {
}
export class OutputColumnsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): OutputColumnsProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OutputColumnsProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // description - computed: true, optional: false, required: false
    public get description() {
        return this.getStringAttribute('description');
    }

    // name - computed: true, optional: false, required: false
    public get name() {
        return this.getStringAttribute('name');
    }

    // type - computed: true, optional: false, required: false
    public get type() {
        return this.getStringAttribute('type');
    }
}

export class OutputColumnsPropertyList extends cdktn.ComplexList {

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
    public get(index: number): OutputColumnsPropertyOutputReference {
        return new OutputColumnsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ResourcePermissionProperty {
    /**
    * <p>The IAM action to grant or revoke permissions on.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#actions CcDataSet#actions}
    */
    readonly actions?: string[];
    /**
    * <p>The Amazon Resource Name (ARN) of the principal. This can be one of the
    *             following:</p>
    *         <ul>
    *             <li>
    *                 <p>The ARN of an Amazon QuickSight user or group associated with a data source or dataset. (This is common.)</p>
    *             </li>
    *             <li>
    *                 <p>The ARN of an Amazon QuickSight user, group, or namespace associated with an analysis, dashboard, template, or theme. (This is common.)</p>
    *             </li>
    *             <li>
    *                 <p>The ARN of an AWS account root: This is an IAM ARN rather than a QuickSight
    *                     ARN. Use this option only to share resources (templates) across AWS accounts.
    *                     (This is less common.) </p>
    *             </li>
    *          </ul>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#principal CcDataSet#principal}
    */
    readonly principal?: string;
}
export class ResourcePermissionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ResourcePermissionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._actions !== undefined) {
            hasAnyValues = true;
            internalValueResult.actions = this._actions;
        }
        if (this._principal !== undefined) {
            hasAnyValues = true;
            internalValueResult.principal = this._principal;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ResourcePermissionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._actions = undefined;
            this._principal = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._actions = value.actions;
            this._principal = value.principal;
        }
    }

    // actions - computed: true, optional: true, required: false
    private _actions?: string[]; 
    public get actions() {
        return this.getListAttribute('actions');
    }
    public set actions(value: string[]) {
        this._actions = value;
    }
    public resetActions() {
        this._actions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get actionsInput() {
        return this._actions;
    }

    // principal - computed: true, optional: true, required: false
    private _principal?: string; 
    public get principal() {
        return this.getStringAttribute('principal');
    }
    public set principal(value: string) {
        this._principal = value;
    }
    public resetPrincipal() {
        this._principal = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get principalInput() {
        return this._principal;
    }
}

export class ResourcePermissionPropertyList extends cdktn.ComplexList {
    public internalValue? : ResourcePermissionProperty[] | cdktn.IResolvable

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
    public get(index: number): ResourcePermissionPropertyOutputReference {
        return new ResourcePermissionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface InputColumnProperty {
    /**
    * <p>The name of this column in the underlying data source.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#name CcDataSet#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#type CcDataSet#type}
    */
    readonly type?: string;
}
export class InputColumnPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): InputColumnProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InputColumnProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._type = value.type;
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

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }
}

export class InputColumnPropertyList extends cdktn.ComplexList {
    public internalValue? : InputColumnProperty[] | cdktn.IResolvable

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
    public get(index: number): InputColumnPropertyOutputReference {
        return new InputColumnPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface CustomSqlProperty {
    /**
    * <p>The column schema from the SQL query result set.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#columns CcDataSet#columns}
    */
    readonly columns?: InputColumnProperty[] | cdktn.IResolvable;
    /**
    * <p>The Amazon Resource Name (ARN) of the data source.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#data_source_arn CcDataSet#data_source_arn}
    */
    readonly dataSourceArn?: string;
    /**
    * <p>A display name for the SQL query result.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#name CcDataSet#name}
    */
    readonly name?: string;
    /**
    * <p>The SQL query.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#sql_query CcDataSet#sql_query}
    */
    readonly sqlQuery?: string;
}
export class CustomSqlPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CustomSqlProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._columns?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.columns = this._columns?.internalValue;
        }
        if (this._dataSourceArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataSourceArn = this._dataSourceArn;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._sqlQuery !== undefined) {
            hasAnyValues = true;
            internalValueResult.sqlQuery = this._sqlQuery;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CustomSqlProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._columns.internalValue = undefined;
            this._dataSourceArn = undefined;
            this._name = undefined;
            this._sqlQuery = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._columns.internalValue = value.columns;
            this._dataSourceArn = value.dataSourceArn;
            this._name = value.name;
            this._sqlQuery = value.sqlQuery;
        }
    }

    // columns - computed: true, optional: true, required: false
    private _columns = new InputColumnPropertyList(this, "columns", false);
    public get columns() {
        return this._columns;
    }
    public putColumns(value: InputColumnProperty[] | cdktn.IResolvable) {
        this._columns.internalValue = value;
    }
    public resetColumns() {
        this._columns.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get columnsInput() {
        return this._columns.internalValue;
    }

    // data_source_arn - computed: true, optional: true, required: false
    private _dataSourceArn?: string; 
    public get dataSourceArn() {
        return this.getStringAttribute('data_source_arn');
    }
    public set dataSourceArn(value: string) {
        this._dataSourceArn = value;
    }
    public resetDataSourceArn() {
        this._dataSourceArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataSourceArnInput() {
        return this._dataSourceArn;
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

    // sql_query - computed: true, optional: true, required: false
    private _sqlQuery?: string; 
    public get sqlQuery() {
        return this.getStringAttribute('sql_query');
    }
    public set sqlQuery(value: string) {
        this._sqlQuery = value;
    }
    public resetSqlQuery() {
        this._sqlQuery = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sqlQueryInput() {
        return this._sqlQuery;
    }
}
export interface PhysicalTableMapRelationalTableInputColumnsProperty {
    /**
    * <p>The name of this column in the underlying data source.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#name CcDataSet#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#type CcDataSet#type}
    */
    readonly type?: string;
}
export class PhysicalTableMapRelationalTableInputColumnsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): PhysicalTableMapRelationalTableInputColumnsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PhysicalTableMapRelationalTableInputColumnsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._type = value.type;
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

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }
}

export class PhysicalTableMapRelationalTableInputColumnsPropertyList extends cdktn.ComplexList {
    public internalValue? : PhysicalTableMapRelationalTableInputColumnsProperty[] | cdktn.IResolvable

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
    public get(index: number): PhysicalTableMapRelationalTableInputColumnsPropertyOutputReference {
        return new PhysicalTableMapRelationalTableInputColumnsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface RelationalTableProperty {
    /**
    * <p>The catalog associated with a table.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#catalog CcDataSet#catalog}
    */
    readonly catalog?: string;
    /**
    * <p>The Amazon Resource Name (ARN) for the data source.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#data_source_arn CcDataSet#data_source_arn}
    */
    readonly dataSourceArn?: string;
    /**
    * <p>The column schema of the table.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#input_columns CcDataSet#input_columns}
    */
    readonly inputColumns?: PhysicalTableMapRelationalTableInputColumnsProperty[] | cdktn.IResolvable;
    /**
    * <p>The name of the relational table.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#name CcDataSet#name}
    */
    readonly name?: string;
    /**
    * <p>The schema name. This name applies to certain relational database engines.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#schema CcDataSet#schema}
    */
    readonly schema?: string;
}
export class RelationalTablePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RelationalTableProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._catalog !== undefined) {
            hasAnyValues = true;
            internalValueResult.catalog = this._catalog;
        }
        if (this._dataSourceArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataSourceArn = this._dataSourceArn;
        }
        if (this._inputColumns?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.inputColumns = this._inputColumns?.internalValue;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._schema !== undefined) {
            hasAnyValues = true;
            internalValueResult.schema = this._schema;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RelationalTableProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._catalog = undefined;
            this._dataSourceArn = undefined;
            this._inputColumns.internalValue = undefined;
            this._name = undefined;
            this._schema = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._catalog = value.catalog;
            this._dataSourceArn = value.dataSourceArn;
            this._inputColumns.internalValue = value.inputColumns;
            this._name = value.name;
            this._schema = value.schema;
        }
    }

    // catalog - computed: true, optional: true, required: false
    private _catalog?: string; 
    public get catalog() {
        return this.getStringAttribute('catalog');
    }
    public set catalog(value: string) {
        this._catalog = value;
    }
    public resetCatalog() {
        this._catalog = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get catalogInput() {
        return this._catalog;
    }

    // data_source_arn - computed: true, optional: true, required: false
    private _dataSourceArn?: string; 
    public get dataSourceArn() {
        return this.getStringAttribute('data_source_arn');
    }
    public set dataSourceArn(value: string) {
        this._dataSourceArn = value;
    }
    public resetDataSourceArn() {
        this._dataSourceArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataSourceArnInput() {
        return this._dataSourceArn;
    }

    // input_columns - computed: true, optional: true, required: false
    private _inputColumns = new PhysicalTableMapRelationalTableInputColumnsPropertyList(this, "input_columns", false);
    public get inputColumns() {
        return this._inputColumns;
    }
    public putInputColumns(value: PhysicalTableMapRelationalTableInputColumnsProperty[] | cdktn.IResolvable) {
        this._inputColumns.internalValue = value;
    }
    public resetInputColumns() {
        this._inputColumns.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputColumnsInput() {
        return this._inputColumns.internalValue;
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

    // schema - computed: true, optional: true, required: false
    private _schema?: string; 
    public get schema() {
        return this.getStringAttribute('schema');
    }
    public set schema(value: string) {
        this._schema = value;
    }
    public resetSchema() {
        this._schema = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get schemaInput() {
        return this._schema;
    }
}
export interface PhysicalTableMapS3SourceInputColumnsProperty {
    /**
    * <p>The name of this column in the underlying data source.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#name CcDataSet#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#type CcDataSet#type}
    */
    readonly type?: string;
}
export class PhysicalTableMapS3SourceInputColumnsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): PhysicalTableMapS3SourceInputColumnsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PhysicalTableMapS3SourceInputColumnsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._type = value.type;
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

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }
}

export class PhysicalTableMapS3SourceInputColumnsPropertyList extends cdktn.ComplexList {
    public internalValue? : PhysicalTableMapS3SourceInputColumnsProperty[] | cdktn.IResolvable

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
    public get(index: number): PhysicalTableMapS3SourceInputColumnsPropertyOutputReference {
        return new PhysicalTableMapS3SourceInputColumnsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface UploadSettingsProperty {
    /**
    * <p>Whether the file has a header row, or the files each have a header row.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#contains_header CcDataSet#contains_header}
    */
    readonly containsHeader?: boolean | cdktn.IResolvable;
    /**
    * <p>The delimiter between values in the file.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#delimiter CcDataSet#delimiter}
    */
    readonly delimiter?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#format CcDataSet#format}
    */
    readonly format?: string;
    /**
    * <p>A row number to start reading data from.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#start_from_row CcDataSet#start_from_row}
    */
    readonly startFromRow?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#text_qualifier CcDataSet#text_qualifier}
    */
    readonly textQualifier?: string;
}
export class UploadSettingsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): UploadSettingsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._containsHeader !== undefined) {
            hasAnyValues = true;
            internalValueResult.containsHeader = this._containsHeader;
        }
        if (this._delimiter !== undefined) {
            hasAnyValues = true;
            internalValueResult.delimiter = this._delimiter;
        }
        if (this._format !== undefined) {
            hasAnyValues = true;
            internalValueResult.format = this._format;
        }
        if (this._startFromRow !== undefined) {
            hasAnyValues = true;
            internalValueResult.startFromRow = this._startFromRow;
        }
        if (this._textQualifier !== undefined) {
            hasAnyValues = true;
            internalValueResult.textQualifier = this._textQualifier;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: UploadSettingsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._containsHeader = undefined;
            this._delimiter = undefined;
            this._format = undefined;
            this._startFromRow = undefined;
            this._textQualifier = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._containsHeader = value.containsHeader;
            this._delimiter = value.delimiter;
            this._format = value.format;
            this._startFromRow = value.startFromRow;
            this._textQualifier = value.textQualifier;
        }
    }

    // contains_header - computed: true, optional: true, required: false
    private _containsHeader?: boolean | cdktn.IResolvable; 
    public get containsHeader() {
        return this.getBooleanAttribute('contains_header');
    }
    public set containsHeader(value: boolean | cdktn.IResolvable) {
        this._containsHeader = value;
    }
    public resetContainsHeader() {
        this._containsHeader = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get containsHeaderInput() {
        return this._containsHeader;
    }

    // delimiter - computed: true, optional: true, required: false
    private _delimiter?: string; 
    public get delimiter() {
        return this.getStringAttribute('delimiter');
    }
    public set delimiter(value: string) {
        this._delimiter = value;
    }
    public resetDelimiter() {
        this._delimiter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get delimiterInput() {
        return this._delimiter;
    }

    // format - computed: true, optional: true, required: false
    private _format?: string; 
    public get format() {
        return this.getStringAttribute('format');
    }
    public set format(value: string) {
        this._format = value;
    }
    public resetFormat() {
        this._format = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get formatInput() {
        return this._format;
    }

    // start_from_row - computed: true, optional: true, required: false
    private _startFromRow?: number; 
    public get startFromRow() {
        return this.getNumberAttribute('start_from_row');
    }
    public set startFromRow(value: number) {
        this._startFromRow = value;
    }
    public resetStartFromRow() {
        this._startFromRow = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startFromRowInput() {
        return this._startFromRow;
    }

    // text_qualifier - computed: true, optional: true, required: false
    private _textQualifier?: string; 
    public get textQualifier() {
        return this.getStringAttribute('text_qualifier');
    }
    public set textQualifier(value: string) {
        this._textQualifier = value;
    }
    public resetTextQualifier() {
        this._textQualifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get textQualifierInput() {
        return this._textQualifier;
    }
}
export interface S3SourceProperty {
    /**
    * <p>The amazon Resource Name (ARN) for the data source.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#data_source_arn CcDataSet#data_source_arn}
    */
    readonly dataSourceArn?: string;
    /**
    * <p>A physical table type for as S3 data source.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#input_columns CcDataSet#input_columns}
    */
    readonly inputColumns?: PhysicalTableMapS3SourceInputColumnsProperty[] | cdktn.IResolvable;
    /**
    * <p>Information about the format for a source file or files.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#upload_settings CcDataSet#upload_settings}
    */
    readonly uploadSettings?: UploadSettingsProperty;
}
export class S3SourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3SourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dataSourceArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataSourceArn = this._dataSourceArn;
        }
        if (this._inputColumns?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.inputColumns = this._inputColumns?.internalValue;
        }
        if (this._uploadSettings?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.uploadSettings = this._uploadSettings?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3SourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dataSourceArn = undefined;
            this._inputColumns.internalValue = undefined;
            this._uploadSettings.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dataSourceArn = value.dataSourceArn;
            this._inputColumns.internalValue = value.inputColumns;
            this._uploadSettings.internalValue = value.uploadSettings;
        }
    }

    // data_source_arn - computed: true, optional: true, required: false
    private _dataSourceArn?: string; 
    public get dataSourceArn() {
        return this.getStringAttribute('data_source_arn');
    }
    public set dataSourceArn(value: string) {
        this._dataSourceArn = value;
    }
    public resetDataSourceArn() {
        this._dataSourceArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataSourceArnInput() {
        return this._dataSourceArn;
    }

    // input_columns - computed: true, optional: true, required: false
    private _inputColumns = new PhysicalTableMapS3SourceInputColumnsPropertyList(this, "input_columns", false);
    public get inputColumns() {
        return this._inputColumns;
    }
    public putInputColumns(value: PhysicalTableMapS3SourceInputColumnsProperty[] | cdktn.IResolvable) {
        this._inputColumns.internalValue = value;
    }
    public resetInputColumns() {
        this._inputColumns.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputColumnsInput() {
        return this._inputColumns.internalValue;
    }

    // upload_settings - computed: true, optional: true, required: false
    private _uploadSettings = new UploadSettingsPropertyOutputReference(this, "upload_settings");
    public get uploadSettings() {
        return this._uploadSettings;
    }
    public putUploadSettings(value: UploadSettingsProperty) {
        this._uploadSettings.internalValue = value;
    }
    public resetUploadSettings() {
        this._uploadSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get uploadSettingsInput() {
        return this._uploadSettings.internalValue;
    }
}
export interface PhysicalTableProperty {
    /**
    * <p>A physical table type built from the results of the custom SQL query.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#custom_sql CcDataSet#custom_sql}
    */
    readonly customSql?: CustomSqlProperty;
    /**
    * <p>A physical table type for relational data sources.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#relational_table CcDataSet#relational_table}
    */
    readonly relationalTable?: RelationalTableProperty;
    /**
    * <p>A physical table type for as S3 data source.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#s3_source CcDataSet#s3_source}
    */
    readonly s3Source?: S3SourceProperty;
}
export class PhysicalTablePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
        super(terraformResource, terraformAttribute, false, complexObjectKey);
    }

    public get internalValue(): PhysicalTableProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._customSql?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.customSql = this._customSql?.internalValue;
        }
        if (this._relationalTable?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.relationalTable = this._relationalTable?.internalValue;
        }
        if (this._s3Source?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Source = this._s3Source?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PhysicalTableProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._customSql.internalValue = undefined;
            this._relationalTable.internalValue = undefined;
            this._s3Source.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._customSql.internalValue = value.customSql;
            this._relationalTable.internalValue = value.relationalTable;
            this._s3Source.internalValue = value.s3Source;
        }
    }

    // custom_sql - computed: true, optional: true, required: false
    private _customSql = new CustomSqlPropertyOutputReference(this, "custom_sql");
    public get customSql() {
        return this._customSql;
    }
    public putCustomSql(value: CustomSqlProperty) {
        this._customSql.internalValue = value;
    }
    public resetCustomSql() {
        this._customSql.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customSqlInput() {
        return this._customSql.internalValue;
    }

    // relational_table - computed: true, optional: true, required: false
    private _relationalTable = new RelationalTablePropertyOutputReference(this, "relational_table");
    public get relationalTable() {
        return this._relationalTable;
    }
    public putRelationalTable(value: RelationalTableProperty) {
        this._relationalTable.internalValue = value;
    }
    public resetRelationalTable() {
        this._relationalTable.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get relationalTableInput() {
        return this._relationalTable.internalValue;
    }

    // s3_source - computed: true, optional: true, required: false
    private _s3Source = new S3SourcePropertyOutputReference(this, "s3_source");
    public get s3Source() {
        return this._s3Source;
    }
    public putS3Source(value: S3SourceProperty) {
        this._s3Source.internalValue = value;
    }
    public resetS3Source() {
        this._s3Source.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3SourceInput() {
        return this._s3Source.internalValue;
    }
}

export class PhysicalTablePropertyMap extends cdktn.ComplexMap {
    public internalValue? : { [key: string]: PhysicalTableProperty } | cdktn.IResolvable

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute);
    }

    /**
    * @param key the key of the item to return
    */
    public get(key: string): PhysicalTablePropertyOutputReference {
        return new PhysicalTablePropertyOutputReference(this.terraformResource, this.terraformAttribute, key);
    }
}
export interface RowLevelPermissionDataSetProperty {
    /**
    * <p>The Amazon Resource Name (ARN) of the permission dataset.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#arn CcDataSet#arn}
    */
    readonly arn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#format_version CcDataSet#format_version}
    */
    readonly formatVersion?: string;
    /**
    * <p>The namespace associated with the row-level permissions dataset.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#namespace CcDataSet#namespace}
    */
    readonly namespace?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#permission_policy CcDataSet#permission_policy}
    */
    readonly permissionPolicy?: string;
}
export class RowLevelPermissionDataSetPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RowLevelPermissionDataSetProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._arn !== undefined) {
            hasAnyValues = true;
            internalValueResult.arn = this._arn;
        }
        if (this._formatVersion !== undefined) {
            hasAnyValues = true;
            internalValueResult.formatVersion = this._formatVersion;
        }
        if (this._namespace !== undefined) {
            hasAnyValues = true;
            internalValueResult.namespace = this._namespace;
        }
        if (this._permissionPolicy !== undefined) {
            hasAnyValues = true;
            internalValueResult.permissionPolicy = this._permissionPolicy;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RowLevelPermissionDataSetProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._arn = undefined;
            this._formatVersion = undefined;
            this._namespace = undefined;
            this._permissionPolicy = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._arn = value.arn;
            this._formatVersion = value.formatVersion;
            this._namespace = value.namespace;
            this._permissionPolicy = value.permissionPolicy;
        }
    }

    // arn - computed: true, optional: true, required: false
    private _arn?: string; 
    public get arn() {
        return this.getStringAttribute('arn');
    }
    public set arn(value: string) {
        this._arn = value;
    }
    public resetArn() {
        this._arn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get arnInput() {
        return this._arn;
    }

    // format_version - computed: true, optional: true, required: false
    private _formatVersion?: string; 
    public get formatVersion() {
        return this.getStringAttribute('format_version');
    }
    public set formatVersion(value: string) {
        this._formatVersion = value;
    }
    public resetFormatVersion() {
        this._formatVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get formatVersionInput() {
        return this._formatVersion;
    }

    // namespace - computed: true, optional: true, required: false
    private _namespace?: string; 
    public get namespace() {
        return this.getStringAttribute('namespace');
    }
    public set namespace(value: string) {
        this._namespace = value;
    }
    public resetNamespace() {
        this._namespace = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get namespaceInput() {
        return this._namespace;
    }

    // permission_policy - computed: true, optional: true, required: false
    private _permissionPolicy?: string; 
    public get permissionPolicy() {
        return this.getStringAttribute('permission_policy');
    }
    public set permissionPolicy(value: string) {
        this._permissionPolicy = value;
    }
    public resetPermissionPolicy() {
        this._permissionPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get permissionPolicyInput() {
        return this._permissionPolicy;
    }
}
export interface TagProperty {
    /**
    * <p>Tag key.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#key CcDataSet#key}
    */
    readonly key?: string;
    /**
    * <p>Tag value.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/quicksight_data_set#value CcDataSet#value}
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
