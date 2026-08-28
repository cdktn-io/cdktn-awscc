// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_data_source

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcDataSourceProps extends cdktn.TerraformMetaArguments {
    /**
    * The metadata forms that are to be attached to the assets that this data source works with.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_data_source#asset_forms_input CcDataSource#asset_forms_input}
    */
    readonly assetFormsInput?: CcDataSource.FormInputProperty[] | cdktn.IResolvable;
    /**
    * Configuration of the data source. It can be set to either glueRunConfiguration or redshiftRunConfiguration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_data_source#configuration CcDataSource#configuration}
    */
    readonly configuration?: CcDataSource.DataSourceConfigurationInputProperty;
    /**
    * The unique identifier of a connection used to fetch relevant parameters from connection during Datasource run
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_data_source#connection_identifier CcDataSource#connection_identifier}
    */
    readonly connectionIdentifier?: string;
    /**
    * The description of the data source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_data_source#description CcDataSource#description}
    */
    readonly description?: string;
    /**
    * The ID of the Amazon DataZone domain where the data source is created.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_data_source#domain_identifier CcDataSource#domain_identifier}
    */
    readonly domainIdentifier: string;
    /**
    * Specifies whether the data source is enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_data_source#enable_setting CcDataSource#enable_setting}
    */
    readonly enableSetting?: string;
    /**
    * The unique identifier of the Amazon DataZone environment to which the data source publishes assets.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_data_source#environment_identifier CcDataSource#environment_identifier}
    */
    readonly environmentIdentifier?: string;
    /**
    * The name of the data source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_data_source#name CcDataSource#name}
    */
    readonly name: string;
    /**
    * The identifier of the Amazon DataZone project in which you want to add the data source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_data_source#project_identifier CcDataSource#project_identifier}
    */
    readonly projectIdentifier: string;
    /**
    * Specifies whether the assets that this data source creates in the inventory are to be also automatically published to the catalog.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_data_source#publish_on_import CcDataSource#publish_on_import}
    */
    readonly publishOnImport?: boolean | cdktn.IResolvable;
    /**
    * Specifies whether the business name generation is to be enabled for this data source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_data_source#recommendation CcDataSource#recommendation}
    */
    readonly recommendation?: CcDataSource.RecommendationConfigurationProperty;
    /**
    * The schedule of the data source runs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_data_source#schedule CcDataSource#schedule}
    */
    readonly schedule?: CcDataSource.ScheduleConfigurationProperty;
    /**
    * The type of the data source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_data_source#type CcDataSource#type}
    */
    readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_data_source awscc_datazone_data_source}
*/
export class CcDataSource extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_datazone_data_source";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcDataSource resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcDataSource to import
    * @param importFromId The id of the existing CcDataSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_data_source#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcDataSource to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_datazone_data_source", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_data_source awscc_datazone_data_source} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcDataSourceProps
    */
    public constructor(scope: Construct, id: string, config: CcDataSourceProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_datazone_data_source',
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
        this._assetFormsInput.internalValue = config.assetFormsInput;
        this._configuration.internalValue = config.configuration;
        this._connectionIdentifier = config.connectionIdentifier;
        this._description = config.description;
        this._domainIdentifier = config.domainIdentifier;
        this._enableSetting = config.enableSetting;
        this._environmentIdentifier = config.environmentIdentifier;
        this._name = config.name;
        this._projectIdentifier = config.projectIdentifier;
        this._publishOnImport = config.publishOnImport;
        this._recommendation.internalValue = config.recommendation;
        this._schedule.internalValue = config.schedule;
        this._type = config.type;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // asset_forms_input - computed: true, optional: true, required: false
    private _assetFormsInput = new CcDataSource.FormInputPropertyList(this, "asset_forms_input", false);
    public get assetFormsInput() {
        return this._assetFormsInput;
    }
    public putAssetFormsInput(value: CcDataSource.FormInputProperty[] | cdktn.IResolvable) {
        this._assetFormsInput.internalValue = value;
    }
    public resetAssetFormsInput() {
        this._assetFormsInput.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get assetFormsInputInput() {
        return this._assetFormsInput.internalValue;
    }

    // configuration - computed: true, optional: true, required: false
    private _configuration = new CcDataSource.DataSourceConfigurationInputPropertyOutputReference(this, "configuration");
    public get configuration() {
        return this._configuration;
    }
    public putConfiguration(value: CcDataSource.DataSourceConfigurationInputProperty) {
        this._configuration.internalValue = value;
    }
    public resetConfiguration() {
        this._configuration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get configurationInput() {
        return this._configuration.internalValue;
    }

    // connection_id - computed: true, optional: false, required: false
    public get connectionId() {
        return this.getStringAttribute('connection_id');
    }

    // connection_identifier - computed: true, optional: true, required: false
    private _connectionIdentifier?: string; 
    public get connectionIdentifier() {
        return this.getStringAttribute('connection_identifier');
    }
    public set connectionIdentifier(value: string) {
        this._connectionIdentifier = value;
    }
    public resetConnectionIdentifier() {
        this._connectionIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectionIdentifierInput() {
        return this._connectionIdentifier;
    }

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
    }

    // data_source_id - computed: true, optional: false, required: false
    public get dataSourceId() {
        return this.getStringAttribute('data_source_id');
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

    // domain_id - computed: true, optional: false, required: false
    public get domainId() {
        return this.getStringAttribute('domain_id');
    }

    // domain_identifier - computed: false, optional: false, required: true
    private _domainIdentifier?: string; 
    public get domainIdentifier() {
        return this.getStringAttribute('domain_identifier');
    }
    public set domainIdentifier(value: string) {
        this._domainIdentifier = value;
    }
    // Temporarily expose input value. Use with caution.
    public get domainIdentifierInput() {
        return this._domainIdentifier;
    }

    // enable_setting - computed: true, optional: true, required: false
    private _enableSetting?: string; 
    public get enableSetting() {
        return this.getStringAttribute('enable_setting');
    }
    public set enableSetting(value: string) {
        this._enableSetting = value;
    }
    public resetEnableSetting() {
        this._enableSetting = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableSettingInput() {
        return this._enableSetting;
    }

    // environment_id - computed: true, optional: false, required: false
    public get environmentId() {
        return this.getStringAttribute('environment_id');
    }

    // environment_identifier - computed: true, optional: true, required: false
    private _environmentIdentifier?: string; 
    public get environmentIdentifier() {
        return this.getStringAttribute('environment_identifier');
    }
    public set environmentIdentifier(value: string) {
        this._environmentIdentifier = value;
    }
    public resetEnvironmentIdentifier() {
        this._environmentIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get environmentIdentifierInput() {
        return this._environmentIdentifier;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // last_run_asset_count - computed: true, optional: false, required: false
    public get lastRunAssetCount() {
        return this.getNumberAttribute('last_run_asset_count');
    }

    // last_run_at - computed: true, optional: false, required: false
    public get lastRunAt() {
        return this.getStringAttribute('last_run_at');
    }

    // last_run_status - computed: true, optional: false, required: false
    public get lastRunStatus() {
        return this.getStringAttribute('last_run_status');
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
    }

    // project_id - computed: true, optional: false, required: false
    public get projectId() {
        return this.getStringAttribute('project_id');
    }

    // project_identifier - computed: false, optional: false, required: true
    private _projectIdentifier?: string; 
    public get projectIdentifier() {
        return this.getStringAttribute('project_identifier');
    }
    public set projectIdentifier(value: string) {
        this._projectIdentifier = value;
    }
    // Temporarily expose input value. Use with caution.
    public get projectIdentifierInput() {
        return this._projectIdentifier;
    }

    // publish_on_import - computed: true, optional: true, required: false
    private _publishOnImport?: boolean | cdktn.IResolvable; 
    public get publishOnImport() {
        return this.getBooleanAttribute('publish_on_import');
    }
    public set publishOnImport(value: boolean | cdktn.IResolvable) {
        this._publishOnImport = value;
    }
    public resetPublishOnImport() {
        this._publishOnImport = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get publishOnImportInput() {
        return this._publishOnImport;
    }

    // recommendation - computed: true, optional: true, required: false
    private _recommendation = new CcDataSource.RecommendationConfigurationPropertyOutputReference(this, "recommendation");
    public get recommendation() {
        return this._recommendation;
    }
    public putRecommendation(value: CcDataSource.RecommendationConfigurationProperty) {
        this._recommendation.internalValue = value;
    }
    public resetRecommendation() {
        this._recommendation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get recommendationInput() {
        return this._recommendation.internalValue;
    }

    // schedule - computed: true, optional: true, required: false
    private _schedule = new CcDataSource.ScheduleConfigurationPropertyOutputReference(this, "schedule");
    public get schedule() {
        return this._schedule;
    }
    public putSchedule(value: CcDataSource.ScheduleConfigurationProperty) {
        this._schedule.internalValue = value;
    }
    public resetSchedule() {
        this._schedule.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduleInput() {
        return this._schedule.internalValue;
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // type - computed: false, optional: false, required: true
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }

    // updated_at - computed: true, optional: false, required: false
    public get updatedAt() {
        return this.getStringAttribute('updated_at');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            asset_forms_input: cdktn.listMapper(ccDataSourceFormInputPropertyToTerraform, false)(this._assetFormsInput.internalValue),
            configuration: ccDataSourceDataSourceConfigurationInputPropertyToTerraform(this._configuration.internalValue),
            connection_identifier: cdktn.stringToTerraform(this._connectionIdentifier),
            description: cdktn.stringToTerraform(this._description),
            domain_identifier: cdktn.stringToTerraform(this._domainIdentifier),
            enable_setting: cdktn.stringToTerraform(this._enableSetting),
            environment_identifier: cdktn.stringToTerraform(this._environmentIdentifier),
            name: cdktn.stringToTerraform(this._name),
            project_identifier: cdktn.stringToTerraform(this._projectIdentifier),
            publish_on_import: cdktn.booleanToTerraform(this._publishOnImport),
            recommendation: ccDataSourceRecommendationConfigurationPropertyToTerraform(this._recommendation.internalValue),
            schedule: ccDataSourceScheduleConfigurationPropertyToTerraform(this._schedule.internalValue),
            type: cdktn.stringToTerraform(this._type),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            asset_forms_input: {
                value: cdktn.listMapperHcl(ccDataSourceFormInputPropertyToHclTerraform, false)(this._assetFormsInput.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcDataSource.FormInputPropertyList",
            },
            configuration: {
                value: ccDataSourceDataSourceConfigurationInputPropertyToHclTerraform(this._configuration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDataSource.DataSourceConfigurationInputProperty",
            },
            connection_identifier: {
                value: cdktn.stringToHclTerraform(this._connectionIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            domain_identifier: {
                value: cdktn.stringToHclTerraform(this._domainIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            enable_setting: {
                value: cdktn.stringToHclTerraform(this._enableSetting),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            environment_identifier: {
                value: cdktn.stringToHclTerraform(this._environmentIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            project_identifier: {
                value: cdktn.stringToHclTerraform(this._projectIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            publish_on_import: {
                value: cdktn.booleanToHclTerraform(this._publishOnImport),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            recommendation: {
                value: ccDataSourceRecommendationConfigurationPropertyToHclTerraform(this._recommendation.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDataSource.RecommendationConfigurationProperty",
            },
            schedule: {
                value: ccDataSourceScheduleConfigurationPropertyToHclTerraform(this._schedule.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDataSource.ScheduleConfigurationProperty",
            },
            type: {
                value: cdktn.stringToHclTerraform(this._type),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccDataSourceFormInputPropertyToTerraform(struct?: CcDataSource.FormInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content: cdktn.stringToTerraform(struct!.content),
        form_name: cdktn.stringToTerraform(struct!.formName),
        type_identifier: cdktn.stringToTerraform(struct!.typeIdentifier),
        type_revision: cdktn.stringToTerraform(struct!.typeRevision),
    }
}


export function ccDataSourceFormInputPropertyToHclTerraform(struct?: CcDataSource.FormInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content: {
            value: cdktn.stringToHclTerraform(struct!.content),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        form_name: {
            value: cdktn.stringToHclTerraform(struct!.formName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        type_identifier: {
            value: cdktn.stringToHclTerraform(struct!.typeIdentifier),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        type_revision: {
            value: cdktn.stringToHclTerraform(struct!.typeRevision),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceFilterExpressionPropertyToTerraform(struct?: CcDataSource.FilterExpressionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        expression: cdktn.stringToTerraform(struct!.expression),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccDataSourceFilterExpressionPropertyToHclTerraform(struct?: CcDataSource.FilterExpressionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        expression: {
            value: cdktn.stringToHclTerraform(struct!.expression),
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


export function ccDataSourceRelationalFilterConfigurationPropertyToTerraform(struct?: CcDataSource.RelationalFilterConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        database_name: cdktn.stringToTerraform(struct!.databaseName),
        filter_expressions: cdktn.listMapper(ccDataSourceFilterExpressionPropertyToTerraform, false)(struct!.filterExpressions),
        schema_name: cdktn.stringToTerraform(struct!.schemaName),
    }
}


export function ccDataSourceRelationalFilterConfigurationPropertyToHclTerraform(struct?: CcDataSource.RelationalFilterConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        database_name: {
            value: cdktn.stringToHclTerraform(struct!.databaseName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        filter_expressions: {
            value: cdktn.listMapperHcl(ccDataSourceFilterExpressionPropertyToHclTerraform, false)(struct!.filterExpressions),
            isBlock: true,
            type: "list",
            storageClassType: "FilterExpressionPropertyList",
        },
        schema_name: {
            value: cdktn.stringToHclTerraform(struct!.schemaName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceGlueRunConfigurationInputPropertyToTerraform(struct?: CcDataSource.GlueRunConfigurationInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        auto_import_data_quality_result: cdktn.booleanToTerraform(struct!.autoImportDataQualityResult),
        catalog_name: cdktn.stringToTerraform(struct!.catalogName),
        data_access_role: cdktn.stringToTerraform(struct!.dataAccessRole),
        relational_filter_configurations: cdktn.listMapper(ccDataSourceRelationalFilterConfigurationPropertyToTerraform, false)(struct!.relationalFilterConfigurations),
    }
}


export function ccDataSourceGlueRunConfigurationInputPropertyToHclTerraform(struct?: CcDataSource.GlueRunConfigurationInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        auto_import_data_quality_result: {
            value: cdktn.booleanToHclTerraform(struct!.autoImportDataQualityResult),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        catalog_name: {
            value: cdktn.stringToHclTerraform(struct!.catalogName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        data_access_role: {
            value: cdktn.stringToHclTerraform(struct!.dataAccessRole),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        relational_filter_configurations: {
            value: cdktn.listMapperHcl(ccDataSourceRelationalFilterConfigurationPropertyToHclTerraform, false)(struct!.relationalFilterConfigurations),
            isBlock: true,
            type: "list",
            storageClassType: "RelationalFilterConfigurationPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceRedshiftCredentialConfigurationPropertyToTerraform(struct?: CcDataSource.RedshiftCredentialConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        secret_manager_arn: cdktn.stringToTerraform(struct!.secretManagerArn),
    }
}


export function ccDataSourceRedshiftCredentialConfigurationPropertyToHclTerraform(struct?: CcDataSource.RedshiftCredentialConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        secret_manager_arn: {
            value: cdktn.stringToHclTerraform(struct!.secretManagerArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceRedshiftClusterStoragePropertyToTerraform(struct?: CcDataSource.RedshiftClusterStorageProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cluster_name: cdktn.stringToTerraform(struct!.clusterName),
    }
}


export function ccDataSourceRedshiftClusterStoragePropertyToHclTerraform(struct?: CcDataSource.RedshiftClusterStorageProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cluster_name: {
            value: cdktn.stringToHclTerraform(struct!.clusterName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceRedshiftServerlessStoragePropertyToTerraform(struct?: CcDataSource.RedshiftServerlessStorageProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        workgroup_name: cdktn.stringToTerraform(struct!.workgroupName),
    }
}


export function ccDataSourceRedshiftServerlessStoragePropertyToHclTerraform(struct?: CcDataSource.RedshiftServerlessStorageProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        workgroup_name: {
            value: cdktn.stringToHclTerraform(struct!.workgroupName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceRedshiftStoragePropertyToTerraform(struct?: CcDataSource.RedshiftStorageProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        redshift_cluster_source: ccDataSourceRedshiftClusterStoragePropertyToTerraform(struct!.redshiftClusterSource),
        redshift_serverless_source: ccDataSourceRedshiftServerlessStoragePropertyToTerraform(struct!.redshiftServerlessSource),
    }
}


export function ccDataSourceRedshiftStoragePropertyToHclTerraform(struct?: CcDataSource.RedshiftStorageProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        redshift_cluster_source: {
            value: ccDataSourceRedshiftClusterStoragePropertyToHclTerraform(struct!.redshiftClusterSource),
            isBlock: true,
            type: "struct",
            storageClassType: "RedshiftClusterStorageProperty",
        },
        redshift_serverless_source: {
            value: ccDataSourceRedshiftServerlessStoragePropertyToHclTerraform(struct!.redshiftServerlessSource),
            isBlock: true,
            type: "struct",
            storageClassType: "RedshiftServerlessStorageProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceFilterExpressionsPropertyToTerraform(struct?: CcDataSource.FilterExpressionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        expression: cdktn.stringToTerraform(struct!.expression),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccDataSourceFilterExpressionsPropertyToHclTerraform(struct?: CcDataSource.FilterExpressionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        expression: {
            value: cdktn.stringToHclTerraform(struct!.expression),
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


export function ccDataSourceRelationalFilterConfigurationsPropertyToTerraform(struct?: CcDataSource.RelationalFilterConfigurationsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        database_name: cdktn.stringToTerraform(struct!.databaseName),
        filter_expressions: cdktn.listMapper(ccDataSourceFilterExpressionsPropertyToTerraform, false)(struct!.filterExpressions),
        schema_name: cdktn.stringToTerraform(struct!.schemaName),
    }
}


export function ccDataSourceRelationalFilterConfigurationsPropertyToHclTerraform(struct?: CcDataSource.RelationalFilterConfigurationsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        database_name: {
            value: cdktn.stringToHclTerraform(struct!.databaseName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        filter_expressions: {
            value: cdktn.listMapperHcl(ccDataSourceFilterExpressionsPropertyToHclTerraform, false)(struct!.filterExpressions),
            isBlock: true,
            type: "list",
            storageClassType: "FilterExpressionsPropertyList",
        },
        schema_name: {
            value: cdktn.stringToHclTerraform(struct!.schemaName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceRedshiftRunConfigurationInputPropertyToTerraform(struct?: CcDataSource.RedshiftRunConfigurationInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        data_access_role: cdktn.stringToTerraform(struct!.dataAccessRole),
        redshift_credential_configuration: ccDataSourceRedshiftCredentialConfigurationPropertyToTerraform(struct!.redshiftCredentialConfiguration),
        redshift_storage: ccDataSourceRedshiftStoragePropertyToTerraform(struct!.redshiftStorage),
        relational_filter_configurations: cdktn.listMapper(ccDataSourceRelationalFilterConfigurationsPropertyToTerraform, false)(struct!.relationalFilterConfigurations),
    }
}


export function ccDataSourceRedshiftRunConfigurationInputPropertyToHclTerraform(struct?: CcDataSource.RedshiftRunConfigurationInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        data_access_role: {
            value: cdktn.stringToHclTerraform(struct!.dataAccessRole),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        redshift_credential_configuration: {
            value: ccDataSourceRedshiftCredentialConfigurationPropertyToHclTerraform(struct!.redshiftCredentialConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "RedshiftCredentialConfigurationProperty",
        },
        redshift_storage: {
            value: ccDataSourceRedshiftStoragePropertyToHclTerraform(struct!.redshiftStorage),
            isBlock: true,
            type: "struct",
            storageClassType: "RedshiftStorageProperty",
        },
        relational_filter_configurations: {
            value: cdktn.listMapperHcl(ccDataSourceRelationalFilterConfigurationsPropertyToHclTerraform, false)(struct!.relationalFilterConfigurations),
            isBlock: true,
            type: "list",
            storageClassType: "RelationalFilterConfigurationsPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceSageMakerRunConfigurationInputPropertyToTerraform(struct?: CcDataSource.SageMakerRunConfigurationInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        tracking_assets: cdktn.hashMapper(cdktn.listMapper(cdktn.stringToTerraform, false))(struct!.trackingAssets),
    }
}


export function ccDataSourceSageMakerRunConfigurationInputPropertyToHclTerraform(struct?: CcDataSource.SageMakerRunConfigurationInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        tracking_assets: {
            value: cdktn.hashMapperHcl(cdktn.listMapperHcl(cdktn.stringToHclTerraform, false))(struct!.trackingAssets),
            isBlock: false,
            type: "map",
            storageClassType: "stringListMap",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceDataSourceConfigurationInputPropertyToTerraform(struct?: CcDataSource.DataSourceConfigurationInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        glue_run_configuration: ccDataSourceGlueRunConfigurationInputPropertyToTerraform(struct!.glueRunConfiguration),
        redshift_run_configuration: ccDataSourceRedshiftRunConfigurationInputPropertyToTerraform(struct!.redshiftRunConfiguration),
        sage_maker_run_configuration: ccDataSourceSageMakerRunConfigurationInputPropertyToTerraform(struct!.sageMakerRunConfiguration),
    }
}


export function ccDataSourceDataSourceConfigurationInputPropertyToHclTerraform(struct?: CcDataSource.DataSourceConfigurationInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        glue_run_configuration: {
            value: ccDataSourceGlueRunConfigurationInputPropertyToHclTerraform(struct!.glueRunConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "GlueRunConfigurationInputProperty",
        },
        redshift_run_configuration: {
            value: ccDataSourceRedshiftRunConfigurationInputPropertyToHclTerraform(struct!.redshiftRunConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "RedshiftRunConfigurationInputProperty",
        },
        sage_maker_run_configuration: {
            value: ccDataSourceSageMakerRunConfigurationInputPropertyToHclTerraform(struct!.sageMakerRunConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "SageMakerRunConfigurationInputProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceRecommendationConfigurationPropertyToTerraform(struct?: CcDataSource.RecommendationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        enable_business_name_generation: cdktn.booleanToTerraform(struct!.enableBusinessNameGeneration),
    }
}


export function ccDataSourceRecommendationConfigurationPropertyToHclTerraform(struct?: CcDataSource.RecommendationConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        enable_business_name_generation: {
            value: cdktn.booleanToHclTerraform(struct!.enableBusinessNameGeneration),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataSourceScheduleConfigurationPropertyToTerraform(struct?: CcDataSource.ScheduleConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        schedule: cdktn.stringToTerraform(struct!.schedule),
        timezone: cdktn.stringToTerraform(struct!.timezone),
    }
}


export function ccDataSourceScheduleConfigurationPropertyToHclTerraform(struct?: CcDataSource.ScheduleConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        schedule: {
            value: cdktn.stringToHclTerraform(struct!.schedule),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        timezone: {
            value: cdktn.stringToHclTerraform(struct!.timezone),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcDataSource {
export interface FormInputProperty {
    /**
    * The content of the metadata form.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_data_source#content CcDataSource#content}
    */
    readonly content?: string;
    /**
    * The name of the metadata form.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_data_source#form_name CcDataSource#form_name}
    */
    readonly formName?: string;
    /**
    * The ID of the metadata form type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_data_source#type_identifier CcDataSource#type_identifier}
    */
    readonly typeIdentifier?: string;
    /**
    * The revision of the metadata form type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_data_source#type_revision CcDataSource#type_revision}
    */
    readonly typeRevision?: string;
}
export class FormInputPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): FormInputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._content !== undefined) {
            hasAnyValues = true;
            internalValueResult.content = this._content;
        }
        if (this._formName !== undefined) {
            hasAnyValues = true;
            internalValueResult.formName = this._formName;
        }
        if (this._typeIdentifier !== undefined) {
            hasAnyValues = true;
            internalValueResult.typeIdentifier = this._typeIdentifier;
        }
        if (this._typeRevision !== undefined) {
            hasAnyValues = true;
            internalValueResult.typeRevision = this._typeRevision;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FormInputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._content = undefined;
            this._formName = undefined;
            this._typeIdentifier = undefined;
            this._typeRevision = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._content = value.content;
            this._formName = value.formName;
            this._typeIdentifier = value.typeIdentifier;
            this._typeRevision = value.typeRevision;
        }
    }

    // content - computed: true, optional: true, required: false
    private _content?: string; 
    public get content() {
        return this.getStringAttribute('content');
    }
    public set content(value: string) {
        this._content = value;
    }
    public resetContent() {
        this._content = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentInput() {
        return this._content;
    }

    // form_name - computed: true, optional: true, required: false
    private _formName?: string; 
    public get formName() {
        return this.getStringAttribute('form_name');
    }
    public set formName(value: string) {
        this._formName = value;
    }
    public resetFormName() {
        this._formName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get formNameInput() {
        return this._formName;
    }

    // type_identifier - computed: true, optional: true, required: false
    private _typeIdentifier?: string; 
    public get typeIdentifier() {
        return this.getStringAttribute('type_identifier');
    }
    public set typeIdentifier(value: string) {
        this._typeIdentifier = value;
    }
    public resetTypeIdentifier() {
        this._typeIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeIdentifierInput() {
        return this._typeIdentifier;
    }

    // type_revision - computed: true, optional: true, required: false
    private _typeRevision?: string; 
    public get typeRevision() {
        return this.getStringAttribute('type_revision');
    }
    public set typeRevision(value: string) {
        this._typeRevision = value;
    }
    public resetTypeRevision() {
        this._typeRevision = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeRevisionInput() {
        return this._typeRevision;
    }
}

export class FormInputPropertyList extends cdktn.ComplexList {
    public internalValue? : FormInputProperty[] | cdktn.IResolvable

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
    public get(index: number): FormInputPropertyOutputReference {
        return new FormInputPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface FilterExpressionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_data_source#expression CcDataSource#expression}
    */
    readonly expression?: string;
    /**
    * The search filter expression type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_data_source#type CcDataSource#type}
    */
    readonly type?: string;
}
export class FilterExpressionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): FilterExpressionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._expression !== undefined) {
            hasAnyValues = true;
            internalValueResult.expression = this._expression;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FilterExpressionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._expression = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._expression = value.expression;
            this._type = value.type;
        }
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

export class FilterExpressionPropertyList extends cdktn.ComplexList {
    public internalValue? : FilterExpressionProperty[] | cdktn.IResolvable

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
    public get(index: number): FilterExpressionPropertyOutputReference {
        return new FilterExpressionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface RelationalFilterConfigurationProperty {
    /**
    * The database name specified in the relational filter configuration for the data source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_data_source#database_name CcDataSource#database_name}
    */
    readonly databaseName?: string;
    /**
    * The filter expressions specified in the relational filter configuration for the data source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_data_source#filter_expressions CcDataSource#filter_expressions}
    */
    readonly filterExpressions?: FilterExpressionProperty[] | cdktn.IResolvable;
    /**
    * The schema name specified in the relational filter configuration for the data source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_data_source#schema_name CcDataSource#schema_name}
    */
    readonly schemaName?: string;
}
export class RelationalFilterConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): RelationalFilterConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._databaseName !== undefined) {
            hasAnyValues = true;
            internalValueResult.databaseName = this._databaseName;
        }
        if (this._filterExpressions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.filterExpressions = this._filterExpressions?.internalValue;
        }
        if (this._schemaName !== undefined) {
            hasAnyValues = true;
            internalValueResult.schemaName = this._schemaName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RelationalFilterConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._databaseName = undefined;
            this._filterExpressions.internalValue = undefined;
            this._schemaName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._databaseName = value.databaseName;
            this._filterExpressions.internalValue = value.filterExpressions;
            this._schemaName = value.schemaName;
        }
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

    // filter_expressions - computed: true, optional: true, required: false
    private _filterExpressions = new FilterExpressionPropertyList(this, "filter_expressions", false);
    public get filterExpressions() {
        return this._filterExpressions;
    }
    public putFilterExpressions(value: FilterExpressionProperty[] | cdktn.IResolvable) {
        this._filterExpressions.internalValue = value;
    }
    public resetFilterExpressions() {
        this._filterExpressions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterExpressionsInput() {
        return this._filterExpressions.internalValue;
    }

    // schema_name - computed: true, optional: true, required: false
    private _schemaName?: string; 
    public get schemaName() {
        return this.getStringAttribute('schema_name');
    }
    public set schemaName(value: string) {
        this._schemaName = value;
    }
    public resetSchemaName() {
        this._schemaName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get schemaNameInput() {
        return this._schemaName;
    }
}

export class RelationalFilterConfigurationPropertyList extends cdktn.ComplexList {
    public internalValue? : RelationalFilterConfigurationProperty[] | cdktn.IResolvable

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
    public get(index: number): RelationalFilterConfigurationPropertyOutputReference {
        return new RelationalFilterConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface GlueRunConfigurationInputProperty {
    /**
    * Specifies whether to automatically import data quality metrics as part of the data source run.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_data_source#auto_import_data_quality_result CcDataSource#auto_import_data_quality_result}
    */
    readonly autoImportDataQualityResult?: boolean | cdktn.IResolvable;
    /**
    * The catalog name in the AWS Glue run configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_data_source#catalog_name CcDataSource#catalog_name}
    */
    readonly catalogName?: string;
    /**
    * The data access role included in the configuration details of the AWS Glue data source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_data_source#data_access_role CcDataSource#data_access_role}
    */
    readonly dataAccessRole?: string;
    /**
    * The relational filter configurations included in the configuration details of the AWS Glue data source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_data_source#relational_filter_configurations CcDataSource#relational_filter_configurations}
    */
    readonly relationalFilterConfigurations?: RelationalFilterConfigurationProperty[] | cdktn.IResolvable;
}
export class GlueRunConfigurationInputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): GlueRunConfigurationInputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._autoImportDataQualityResult !== undefined) {
            hasAnyValues = true;
            internalValueResult.autoImportDataQualityResult = this._autoImportDataQualityResult;
        }
        if (this._catalogName !== undefined) {
            hasAnyValues = true;
            internalValueResult.catalogName = this._catalogName;
        }
        if (this._dataAccessRole !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataAccessRole = this._dataAccessRole;
        }
        if (this._relationalFilterConfigurations?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.relationalFilterConfigurations = this._relationalFilterConfigurations?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: GlueRunConfigurationInputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._autoImportDataQualityResult = undefined;
            this._catalogName = undefined;
            this._dataAccessRole = undefined;
            this._relationalFilterConfigurations.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._autoImportDataQualityResult = value.autoImportDataQualityResult;
            this._catalogName = value.catalogName;
            this._dataAccessRole = value.dataAccessRole;
            this._relationalFilterConfigurations.internalValue = value.relationalFilterConfigurations;
        }
    }

    // auto_import_data_quality_result - computed: true, optional: true, required: false
    private _autoImportDataQualityResult?: boolean | cdktn.IResolvable; 
    public get autoImportDataQualityResult() {
        return this.getBooleanAttribute('auto_import_data_quality_result');
    }
    public set autoImportDataQualityResult(value: boolean | cdktn.IResolvable) {
        this._autoImportDataQualityResult = value;
    }
    public resetAutoImportDataQualityResult() {
        this._autoImportDataQualityResult = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoImportDataQualityResultInput() {
        return this._autoImportDataQualityResult;
    }

    // catalog_name - computed: true, optional: true, required: false
    private _catalogName?: string; 
    public get catalogName() {
        return this.getStringAttribute('catalog_name');
    }
    public set catalogName(value: string) {
        this._catalogName = value;
    }
    public resetCatalogName() {
        this._catalogName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get catalogNameInput() {
        return this._catalogName;
    }

    // data_access_role - computed: true, optional: true, required: false
    private _dataAccessRole?: string; 
    public get dataAccessRole() {
        return this.getStringAttribute('data_access_role');
    }
    public set dataAccessRole(value: string) {
        this._dataAccessRole = value;
    }
    public resetDataAccessRole() {
        this._dataAccessRole = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataAccessRoleInput() {
        return this._dataAccessRole;
    }

    // relational_filter_configurations - computed: true, optional: true, required: false
    private _relationalFilterConfigurations = new RelationalFilterConfigurationPropertyList(this, "relational_filter_configurations", false);
    public get relationalFilterConfigurations() {
        return this._relationalFilterConfigurations;
    }
    public putRelationalFilterConfigurations(value: RelationalFilterConfigurationProperty[] | cdktn.IResolvable) {
        this._relationalFilterConfigurations.internalValue = value;
    }
    public resetRelationalFilterConfigurations() {
        this._relationalFilterConfigurations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get relationalFilterConfigurationsInput() {
        return this._relationalFilterConfigurations.internalValue;
    }
}
export interface RedshiftCredentialConfigurationProperty {
    /**
    * The ARN of a secret manager for an Amazon Redshift cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_data_source#secret_manager_arn CcDataSource#secret_manager_arn}
    */
    readonly secretManagerArn?: string;
}
export class RedshiftCredentialConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RedshiftCredentialConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._secretManagerArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretManagerArn = this._secretManagerArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RedshiftCredentialConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._secretManagerArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._secretManagerArn = value.secretManagerArn;
        }
    }

    // secret_manager_arn - computed: true, optional: true, required: false
    private _secretManagerArn?: string; 
    public get secretManagerArn() {
        return this.getStringAttribute('secret_manager_arn');
    }
    public set secretManagerArn(value: string) {
        this._secretManagerArn = value;
    }
    public resetSecretManagerArn() {
        this._secretManagerArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretManagerArnInput() {
        return this._secretManagerArn;
    }
}
export interface RedshiftClusterStorageProperty {
    /**
    * The name of an Amazon Redshift cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_data_source#cluster_name CcDataSource#cluster_name}
    */
    readonly clusterName?: string;
}
export class RedshiftClusterStoragePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RedshiftClusterStorageProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._clusterName !== undefined) {
            hasAnyValues = true;
            internalValueResult.clusterName = this._clusterName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RedshiftClusterStorageProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._clusterName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._clusterName = value.clusterName;
        }
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
}
export interface RedshiftServerlessStorageProperty {
    /**
    * The name of the Amazon Redshift Serverless workgroup.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_data_source#workgroup_name CcDataSource#workgroup_name}
    */
    readonly workgroupName?: string;
}
export class RedshiftServerlessStoragePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RedshiftServerlessStorageProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._workgroupName !== undefined) {
            hasAnyValues = true;
            internalValueResult.workgroupName = this._workgroupName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RedshiftServerlessStorageProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._workgroupName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._workgroupName = value.workgroupName;
        }
    }

    // workgroup_name - computed: true, optional: true, required: false
    private _workgroupName?: string; 
    public get workgroupName() {
        return this.getStringAttribute('workgroup_name');
    }
    public set workgroupName(value: string) {
        this._workgroupName = value;
    }
    public resetWorkgroupName() {
        this._workgroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get workgroupNameInput() {
        return this._workgroupName;
    }
}
export interface RedshiftStorageProperty {
    /**
    * The name of an Amazon Redshift cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_data_source#redshift_cluster_source CcDataSource#redshift_cluster_source}
    */
    readonly redshiftClusterSource?: RedshiftClusterStorageProperty;
    /**
    * The details of the Amazon Redshift Serverless workgroup storage.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_data_source#redshift_serverless_source CcDataSource#redshift_serverless_source}
    */
    readonly redshiftServerlessSource?: RedshiftServerlessStorageProperty;
}
export class RedshiftStoragePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RedshiftStorageProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._redshiftClusterSource?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.redshiftClusterSource = this._redshiftClusterSource?.internalValue;
        }
        if (this._redshiftServerlessSource?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.redshiftServerlessSource = this._redshiftServerlessSource?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RedshiftStorageProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._redshiftClusterSource.internalValue = undefined;
            this._redshiftServerlessSource.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._redshiftClusterSource.internalValue = value.redshiftClusterSource;
            this._redshiftServerlessSource.internalValue = value.redshiftServerlessSource;
        }
    }

    // redshift_cluster_source - computed: true, optional: true, required: false
    private _redshiftClusterSource = new RedshiftClusterStoragePropertyOutputReference(this, "redshift_cluster_source");
    public get redshiftClusterSource() {
        return this._redshiftClusterSource;
    }
    public putRedshiftClusterSource(value: RedshiftClusterStorageProperty) {
        this._redshiftClusterSource.internalValue = value;
    }
    public resetRedshiftClusterSource() {
        this._redshiftClusterSource.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get redshiftClusterSourceInput() {
        return this._redshiftClusterSource.internalValue;
    }

    // redshift_serverless_source - computed: true, optional: true, required: false
    private _redshiftServerlessSource = new RedshiftServerlessStoragePropertyOutputReference(this, "redshift_serverless_source");
    public get redshiftServerlessSource() {
        return this._redshiftServerlessSource;
    }
    public putRedshiftServerlessSource(value: RedshiftServerlessStorageProperty) {
        this._redshiftServerlessSource.internalValue = value;
    }
    public resetRedshiftServerlessSource() {
        this._redshiftServerlessSource.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get redshiftServerlessSourceInput() {
        return this._redshiftServerlessSource.internalValue;
    }
}
export interface FilterExpressionsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_data_source#expression CcDataSource#expression}
    */
    readonly expression?: string;
    /**
    * The search filter expression type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_data_source#type CcDataSource#type}
    */
    readonly type?: string;
}
export class FilterExpressionsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): FilterExpressionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._expression !== undefined) {
            hasAnyValues = true;
            internalValueResult.expression = this._expression;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FilterExpressionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._expression = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._expression = value.expression;
            this._type = value.type;
        }
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

export class FilterExpressionsPropertyList extends cdktn.ComplexList {
    public internalValue? : FilterExpressionsProperty[] | cdktn.IResolvable

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
    public get(index: number): FilterExpressionsPropertyOutputReference {
        return new FilterExpressionsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface RelationalFilterConfigurationsProperty {
    /**
    * The database name specified in the relational filter configuration for the data source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_data_source#database_name CcDataSource#database_name}
    */
    readonly databaseName?: string;
    /**
    * The filter expressions specified in the relational filter configuration for the data source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_data_source#filter_expressions CcDataSource#filter_expressions}
    */
    readonly filterExpressions?: FilterExpressionsProperty[] | cdktn.IResolvable;
    /**
    * The schema name specified in the relational filter configuration for the data source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_data_source#schema_name CcDataSource#schema_name}
    */
    readonly schemaName?: string;
}
export class RelationalFilterConfigurationsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): RelationalFilterConfigurationsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._databaseName !== undefined) {
            hasAnyValues = true;
            internalValueResult.databaseName = this._databaseName;
        }
        if (this._filterExpressions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.filterExpressions = this._filterExpressions?.internalValue;
        }
        if (this._schemaName !== undefined) {
            hasAnyValues = true;
            internalValueResult.schemaName = this._schemaName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RelationalFilterConfigurationsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._databaseName = undefined;
            this._filterExpressions.internalValue = undefined;
            this._schemaName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._databaseName = value.databaseName;
            this._filterExpressions.internalValue = value.filterExpressions;
            this._schemaName = value.schemaName;
        }
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

    // filter_expressions - computed: true, optional: true, required: false
    private _filterExpressions = new FilterExpressionsPropertyList(this, "filter_expressions", false);
    public get filterExpressions() {
        return this._filterExpressions;
    }
    public putFilterExpressions(value: FilterExpressionsProperty[] | cdktn.IResolvable) {
        this._filterExpressions.internalValue = value;
    }
    public resetFilterExpressions() {
        this._filterExpressions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterExpressionsInput() {
        return this._filterExpressions.internalValue;
    }

    // schema_name - computed: true, optional: true, required: false
    private _schemaName?: string; 
    public get schemaName() {
        return this.getStringAttribute('schema_name');
    }
    public set schemaName(value: string) {
        this._schemaName = value;
    }
    public resetSchemaName() {
        this._schemaName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get schemaNameInput() {
        return this._schemaName;
    }
}

export class RelationalFilterConfigurationsPropertyList extends cdktn.ComplexList {
    public internalValue? : RelationalFilterConfigurationsProperty[] | cdktn.IResolvable

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
    public get(index: number): RelationalFilterConfigurationsPropertyOutputReference {
        return new RelationalFilterConfigurationsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface RedshiftRunConfigurationInputProperty {
    /**
    * The data access role included in the configuration details of the Amazon Redshift data source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_data_source#data_access_role CcDataSource#data_access_role}
    */
    readonly dataAccessRole?: string;
    /**
    * The details of the credentials required to access an Amazon Redshift cluster.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_data_source#redshift_credential_configuration CcDataSource#redshift_credential_configuration}
    */
    readonly redshiftCredentialConfiguration?: RedshiftCredentialConfigurationProperty;
    /**
    * The details of the Amazon Redshift storage as part of the configuration of an Amazon Redshift data source run.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_data_source#redshift_storage CcDataSource#redshift_storage}
    */
    readonly redshiftStorage?: RedshiftStorageProperty;
    /**
    * The relational filter configurations included in the configuration details of the Amazon Redshift data source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_data_source#relational_filter_configurations CcDataSource#relational_filter_configurations}
    */
    readonly relationalFilterConfigurations?: RelationalFilterConfigurationsProperty[] | cdktn.IResolvable;
}
export class RedshiftRunConfigurationInputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RedshiftRunConfigurationInputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dataAccessRole !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataAccessRole = this._dataAccessRole;
        }
        if (this._redshiftCredentialConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.redshiftCredentialConfiguration = this._redshiftCredentialConfiguration?.internalValue;
        }
        if (this._redshiftStorage?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.redshiftStorage = this._redshiftStorage?.internalValue;
        }
        if (this._relationalFilterConfigurations?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.relationalFilterConfigurations = this._relationalFilterConfigurations?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RedshiftRunConfigurationInputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dataAccessRole = undefined;
            this._redshiftCredentialConfiguration.internalValue = undefined;
            this._redshiftStorage.internalValue = undefined;
            this._relationalFilterConfigurations.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dataAccessRole = value.dataAccessRole;
            this._redshiftCredentialConfiguration.internalValue = value.redshiftCredentialConfiguration;
            this._redshiftStorage.internalValue = value.redshiftStorage;
            this._relationalFilterConfigurations.internalValue = value.relationalFilterConfigurations;
        }
    }

    // data_access_role - computed: true, optional: true, required: false
    private _dataAccessRole?: string; 
    public get dataAccessRole() {
        return this.getStringAttribute('data_access_role');
    }
    public set dataAccessRole(value: string) {
        this._dataAccessRole = value;
    }
    public resetDataAccessRole() {
        this._dataAccessRole = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataAccessRoleInput() {
        return this._dataAccessRole;
    }

    // redshift_credential_configuration - computed: true, optional: true, required: false
    private _redshiftCredentialConfiguration = new RedshiftCredentialConfigurationPropertyOutputReference(this, "redshift_credential_configuration");
    public get redshiftCredentialConfiguration() {
        return this._redshiftCredentialConfiguration;
    }
    public putRedshiftCredentialConfiguration(value: RedshiftCredentialConfigurationProperty) {
        this._redshiftCredentialConfiguration.internalValue = value;
    }
    public resetRedshiftCredentialConfiguration() {
        this._redshiftCredentialConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get redshiftCredentialConfigurationInput() {
        return this._redshiftCredentialConfiguration.internalValue;
    }

    // redshift_storage - computed: true, optional: true, required: false
    private _redshiftStorage = new RedshiftStoragePropertyOutputReference(this, "redshift_storage");
    public get redshiftStorage() {
        return this._redshiftStorage;
    }
    public putRedshiftStorage(value: RedshiftStorageProperty) {
        this._redshiftStorage.internalValue = value;
    }
    public resetRedshiftStorage() {
        this._redshiftStorage.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get redshiftStorageInput() {
        return this._redshiftStorage.internalValue;
    }

    // relational_filter_configurations - computed: true, optional: true, required: false
    private _relationalFilterConfigurations = new RelationalFilterConfigurationsPropertyList(this, "relational_filter_configurations", false);
    public get relationalFilterConfigurations() {
        return this._relationalFilterConfigurations;
    }
    public putRelationalFilterConfigurations(value: RelationalFilterConfigurationsProperty[] | cdktn.IResolvable) {
        this._relationalFilterConfigurations.internalValue = value;
    }
    public resetRelationalFilterConfigurations() {
        this._relationalFilterConfigurations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get relationalFilterConfigurationsInput() {
        return this._relationalFilterConfigurations.internalValue;
    }
}
export interface SageMakerRunConfigurationInputProperty {
    /**
    * The tracking assets of the Amazon SageMaker run.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_data_source#tracking_assets CcDataSource#tracking_assets}
    */
    readonly trackingAssets?: { [key: string]: string[] } | cdktn.IResolvable;
}
export class SageMakerRunConfigurationInputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SageMakerRunConfigurationInputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._trackingAssets !== undefined) {
            hasAnyValues = true;
            internalValueResult.trackingAssets = this._trackingAssets;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SageMakerRunConfigurationInputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._trackingAssets = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._trackingAssets = value.trackingAssets;
        }
    }

    // tracking_assets - computed: true, optional: true, required: false
    private _trackingAssets?: { [key: string]: string[] } | cdktn.IResolvable; 
    public get trackingAssets() {
        return this.interpolationForAttribute('tracking_assets');
    }
    public set trackingAssets(value: { [key: string]: string[] } | cdktn.IResolvable) {
        this._trackingAssets = value;
    }
    public resetTrackingAssets() {
        this._trackingAssets = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get trackingAssetsInput() {
        return this._trackingAssets;
    }
}
export interface DataSourceConfigurationInputProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_data_source#glue_run_configuration CcDataSource#glue_run_configuration}
    */
    readonly glueRunConfiguration?: GlueRunConfigurationInputProperty;
    /**
    * The configuration details of the Amazon Redshift data source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_data_source#redshift_run_configuration CcDataSource#redshift_run_configuration}
    */
    readonly redshiftRunConfiguration?: RedshiftRunConfigurationInputProperty;
    /**
    * The configuration details of the Amazon SageMaker data source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_data_source#sage_maker_run_configuration CcDataSource#sage_maker_run_configuration}
    */
    readonly sageMakerRunConfiguration?: SageMakerRunConfigurationInputProperty;
}
export class DataSourceConfigurationInputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DataSourceConfigurationInputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._glueRunConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.glueRunConfiguration = this._glueRunConfiguration?.internalValue;
        }
        if (this._redshiftRunConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.redshiftRunConfiguration = this._redshiftRunConfiguration?.internalValue;
        }
        if (this._sageMakerRunConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sageMakerRunConfiguration = this._sageMakerRunConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DataSourceConfigurationInputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._glueRunConfiguration.internalValue = undefined;
            this._redshiftRunConfiguration.internalValue = undefined;
            this._sageMakerRunConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._glueRunConfiguration.internalValue = value.glueRunConfiguration;
            this._redshiftRunConfiguration.internalValue = value.redshiftRunConfiguration;
            this._sageMakerRunConfiguration.internalValue = value.sageMakerRunConfiguration;
        }
    }

    // glue_run_configuration - computed: true, optional: true, required: false
    private _glueRunConfiguration = new GlueRunConfigurationInputPropertyOutputReference(this, "glue_run_configuration");
    public get glueRunConfiguration() {
        return this._glueRunConfiguration;
    }
    public putGlueRunConfiguration(value: GlueRunConfigurationInputProperty) {
        this._glueRunConfiguration.internalValue = value;
    }
    public resetGlueRunConfiguration() {
        this._glueRunConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get glueRunConfigurationInput() {
        return this._glueRunConfiguration.internalValue;
    }

    // redshift_run_configuration - computed: true, optional: true, required: false
    private _redshiftRunConfiguration = new RedshiftRunConfigurationInputPropertyOutputReference(this, "redshift_run_configuration");
    public get redshiftRunConfiguration() {
        return this._redshiftRunConfiguration;
    }
    public putRedshiftRunConfiguration(value: RedshiftRunConfigurationInputProperty) {
        this._redshiftRunConfiguration.internalValue = value;
    }
    public resetRedshiftRunConfiguration() {
        this._redshiftRunConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get redshiftRunConfigurationInput() {
        return this._redshiftRunConfiguration.internalValue;
    }

    // sage_maker_run_configuration - computed: true, optional: true, required: false
    private _sageMakerRunConfiguration = new SageMakerRunConfigurationInputPropertyOutputReference(this, "sage_maker_run_configuration");
    public get sageMakerRunConfiguration() {
        return this._sageMakerRunConfiguration;
    }
    public putSageMakerRunConfiguration(value: SageMakerRunConfigurationInputProperty) {
        this._sageMakerRunConfiguration.internalValue = value;
    }
    public resetSageMakerRunConfiguration() {
        this._sageMakerRunConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sageMakerRunConfigurationInput() {
        return this._sageMakerRunConfiguration.internalValue;
    }
}
export interface RecommendationConfigurationProperty {
    /**
    * Specifies whether automatic business name generation is to be enabled or not as part of the recommendation configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_data_source#enable_business_name_generation CcDataSource#enable_business_name_generation}
    */
    readonly enableBusinessNameGeneration?: boolean | cdktn.IResolvable;
}
export class RecommendationConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RecommendationConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._enableBusinessNameGeneration !== undefined) {
            hasAnyValues = true;
            internalValueResult.enableBusinessNameGeneration = this._enableBusinessNameGeneration;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RecommendationConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._enableBusinessNameGeneration = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._enableBusinessNameGeneration = value.enableBusinessNameGeneration;
        }
    }

    // enable_business_name_generation - computed: true, optional: true, required: false
    private _enableBusinessNameGeneration?: boolean | cdktn.IResolvable; 
    public get enableBusinessNameGeneration() {
        return this.getBooleanAttribute('enable_business_name_generation');
    }
    public set enableBusinessNameGeneration(value: boolean | cdktn.IResolvable) {
        this._enableBusinessNameGeneration = value;
    }
    public resetEnableBusinessNameGeneration() {
        this._enableBusinessNameGeneration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableBusinessNameGenerationInput() {
        return this._enableBusinessNameGeneration;
    }
}
export interface ScheduleConfigurationProperty {
    /**
    * The schedule of the data source runs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_data_source#schedule CcDataSource#schedule}
    */
    readonly schedule?: string;
    /**
    * The timezone of the data source run.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_data_source#timezone CcDataSource#timezone}
    */
    readonly timezone?: string;
}
export class ScheduleConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ScheduleConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._schedule !== undefined) {
            hasAnyValues = true;
            internalValueResult.schedule = this._schedule;
        }
        if (this._timezone !== undefined) {
            hasAnyValues = true;
            internalValueResult.timezone = this._timezone;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ScheduleConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._schedule = undefined;
            this._timezone = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._schedule = value.schedule;
            this._timezone = value.timezone;
        }
    }

    // schedule - computed: true, optional: true, required: false
    private _schedule?: string; 
    public get schedule() {
        return this.getStringAttribute('schedule');
    }
    public set schedule(value: string) {
        this._schedule = value;
    }
    public resetSchedule() {
        this._schedule = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduleInput() {
        return this._schedule;
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
}
}
