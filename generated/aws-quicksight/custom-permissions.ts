// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcCustomPermissionsProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#aws_account_id CcCustomPermissions#aws_account_id}
    */
    readonly awsAccountId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#capabilities CcCustomPermissions#capabilities}
    */
    readonly capabilities?: CcCustomPermissions.CapabilitiesProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#custom_permissions_name CcCustomPermissions#custom_permissions_name}
    */
    readonly customPermissionsName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#tags CcCustomPermissions#tags}
    */
    readonly tags?: CcCustomPermissions.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions awscc_quicksight_custom_permissions}
*/
export class CcCustomPermissions extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_quicksight_custom_permissions";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcCustomPermissions resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcCustomPermissions to import
    * @param importFromId The id of the existing CcCustomPermissions that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcCustomPermissions to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_quicksight_custom_permissions", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions awscc_quicksight_custom_permissions} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcCustomPermissionsProps
    */
    public constructor(scope: Construct, id: string, config: CcCustomPermissionsProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_quicksight_custom_permissions',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.110.0'
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
        this._capabilities.internalValue = config.capabilities;
        this._customPermissionsName = config.customPermissionsName;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // aws_account_id - computed: false, optional: false, required: true
    private _awsAccountId?: string; 
    public get awsAccountId() {
        return this.getStringAttribute('aws_account_id');
    }
    public set awsAccountId(value: string) {
        this._awsAccountId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get awsAccountIdInput() {
        return this._awsAccountId;
    }

    // capabilities - computed: true, optional: true, required: false
    private _capabilities = new CcCustomPermissions.CapabilitiesPropertyOutputReference(this, "capabilities");
    public get capabilities() {
        return this._capabilities;
    }
    public putCapabilities(value: CcCustomPermissions.CapabilitiesProperty) {
        this._capabilities.internalValue = value;
    }
    public resetCapabilities() {
        this._capabilities.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get capabilitiesInput() {
        return this._capabilities.internalValue;
    }

    // custom_permissions_name - computed: false, optional: false, required: true
    private _customPermissionsName?: string; 
    public get customPermissionsName() {
        return this.getStringAttribute('custom_permissions_name');
    }
    public set customPermissionsName(value: string) {
        this._customPermissionsName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get customPermissionsNameInput() {
        return this._customPermissionsName;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcCustomPermissions.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcCustomPermissions.TagProperty[] | cdktn.IResolvable) {
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
            capabilities: ccCustomPermissionsCapabilitiesPropertyToTerraform(this._capabilities.internalValue),
            custom_permissions_name: cdktn.stringToTerraform(this._customPermissionsName),
            tags: cdktn.listMapper(ccCustomPermissionsTagPropertyToTerraform, false)(this._tags.internalValue),
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
            capabilities: {
                value: ccCustomPermissionsCapabilitiesPropertyToHclTerraform(this._capabilities.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCustomPermissions.CapabilitiesProperty",
            },
            custom_permissions_name: {
                value: cdktn.stringToHclTerraform(this._customPermissionsName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccCustomPermissionsTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcCustomPermissions.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccCustomPermissionsCapabilitiesPropertyToTerraform(struct?: CcCustomPermissions.CapabilitiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        access_apps_native_data_store: cdktn.stringToTerraform(struct!.accessAppsNativeDataStore),
        action: cdktn.stringToTerraform(struct!.action),
        add_or_run_anomaly_detection_for_analyses: cdktn.stringToTerraform(struct!.addOrRunAnomalyDetectionForAnalyses),
        adobe_analytics_data_source: cdktn.stringToTerraform(struct!.adobeAnalyticsDataSource),
        amazon_bedrock_ars_action: cdktn.stringToTerraform(struct!.amazonBedrockArsAction),
        amazon_bedrock_fs_action: cdktn.stringToTerraform(struct!.amazonBedrockFsAction),
        amazon_bedrock_krs_action: cdktn.stringToTerraform(struct!.amazonBedrockKrsAction),
        amazon_s_three_action: cdktn.stringToTerraform(struct!.amazonSThreeAction),
        analysis: cdktn.stringToTerraform(struct!.analysis),
        approve_flow_share_requests: cdktn.stringToTerraform(struct!.approveFlowShareRequests),
        apps: cdktn.stringToTerraform(struct!.apps),
        asana_action: cdktn.stringToTerraform(struct!.asanaAction),
        athena_data_source: cdktn.stringToTerraform(struct!.athenaDataSource),
        aurora_data_source: cdktn.stringToTerraform(struct!.auroraDataSource),
        automate: cdktn.stringToTerraform(struct!.automate),
        bamboo_hr_action: cdktn.stringToTerraform(struct!.bambooHrAction),
        bedrock_managed_knowledge_base: cdktn.stringToTerraform(struct!.bedrockManagedKnowledgeBase),
        box_agent_action: cdktn.stringToTerraform(struct!.boxAgentAction),
        box_knowledge_base: cdktn.stringToTerraform(struct!.boxKnowledgeBase),
        build_calculated_field_with_q: cdktn.stringToTerraform(struct!.buildCalculatedFieldWithQ),
        canva_agent_action: cdktn.stringToTerraform(struct!.canvaAgentAction),
        chat_agent: cdktn.stringToTerraform(struct!.chatAgent),
        comprehend_action: cdktn.stringToTerraform(struct!.comprehendAction),
        comprehend_medical_action: cdktn.stringToTerraform(struct!.comprehendMedicalAction),
        confluence_action: cdktn.stringToTerraform(struct!.confluenceAction),
        confluence_knowledge_base: cdktn.stringToTerraform(struct!.confluenceKnowledgeBase),
        create_adobe_analytics_data_source: cdktn.stringToTerraform(struct!.createAdobeAnalyticsDataSource),
        create_and_update_amazon_bedrock_ars_action: cdktn.stringToTerraform(struct!.createAndUpdateAmazonBedrockArsAction),
        create_and_update_amazon_bedrock_fs_action: cdktn.stringToTerraform(struct!.createAndUpdateAmazonBedrockFsAction),
        create_and_update_amazon_bedrock_krs_action: cdktn.stringToTerraform(struct!.createAndUpdateAmazonBedrockKrsAction),
        create_and_update_amazon_s_three_action: cdktn.stringToTerraform(struct!.createAndUpdateAmazonSThreeAction),
        create_and_update_apps: cdktn.stringToTerraform(struct!.createAndUpdateApps),
        create_and_update_asana_action: cdktn.stringToTerraform(struct!.createAndUpdateAsanaAction),
        create_and_update_bamboo_hr_action: cdktn.stringToTerraform(struct!.createAndUpdateBambooHrAction),
        create_and_update_bedrock_managed_knowledge_base: cdktn.stringToTerraform(struct!.createAndUpdateBedrockManagedKnowledgeBase),
        create_and_update_box_agent_action: cdktn.stringToTerraform(struct!.createAndUpdateBoxAgentAction),
        create_and_update_box_knowledge_base: cdktn.stringToTerraform(struct!.createAndUpdateBoxKnowledgeBase),
        create_and_update_canva_agent_action: cdktn.stringToTerraform(struct!.createAndUpdateCanvaAgentAction),
        create_and_update_comprehend_action: cdktn.stringToTerraform(struct!.createAndUpdateComprehendAction),
        create_and_update_comprehend_medical_action: cdktn.stringToTerraform(struct!.createAndUpdateComprehendMedicalAction),
        create_and_update_confluence_action: cdktn.stringToTerraform(struct!.createAndUpdateConfluenceAction),
        create_and_update_confluence_knowledge_base: cdktn.stringToTerraform(struct!.createAndUpdateConfluenceKnowledgeBase),
        create_and_update_dashboard_email_reports: cdktn.stringToTerraform(struct!.createAndUpdateDashboardEmailReports),
        create_and_update_data_sources: cdktn.stringToTerraform(struct!.createAndUpdateDataSources),
        create_and_update_datasets: cdktn.stringToTerraform(struct!.createAndUpdateDatasets),
        create_and_update_fact_set_action: cdktn.stringToTerraform(struct!.createAndUpdateFactSetAction),
        create_and_update_generic_http_action: cdktn.stringToTerraform(struct!.createAndUpdateGenericHttpAction),
        create_and_update_github_action: cdktn.stringToTerraform(struct!.createAndUpdateGithubAction),
        create_and_update_google_calendar_action: cdktn.stringToTerraform(struct!.createAndUpdateGoogleCalendarAction),
        create_and_update_google_drive_knowledge_base: cdktn.stringToTerraform(struct!.createAndUpdateGoogleDriveKnowledgeBase),
        create_and_update_hubspot_action: cdktn.stringToTerraform(struct!.createAndUpdateHubspotAction),
        create_and_update_hugging_face_action: cdktn.stringToTerraform(struct!.createAndUpdateHuggingFaceAction),
        create_and_update_idc_knowledge_base: cdktn.stringToTerraform(struct!.createAndUpdateIdcKnowledgeBase),
        create_and_update_intercom_action: cdktn.stringToTerraform(struct!.createAndUpdateIntercomAction),
        create_and_update_jira_action: cdktn.stringToTerraform(struct!.createAndUpdateJiraAction),
        create_and_update_knowledge_bases: cdktn.stringToTerraform(struct!.createAndUpdateKnowledgeBases),
        create_and_update_linear_action: cdktn.stringToTerraform(struct!.createAndUpdateLinearAction),
        create_and_update_mcp_action: cdktn.stringToTerraform(struct!.createAndUpdateMcpAction),
        create_and_update_monday_action: cdktn.stringToTerraform(struct!.createAndUpdateMondayAction),
        create_and_update_ms_exchange_action: cdktn.stringToTerraform(struct!.createAndUpdateMsExchangeAction),
        create_and_update_ms_teams_action: cdktn.stringToTerraform(struct!.createAndUpdateMsTeamsAction),
        create_and_update_new_relic_action: cdktn.stringToTerraform(struct!.createAndUpdateNewRelicAction),
        create_and_update_notion_action: cdktn.stringToTerraform(struct!.createAndUpdateNotionAction),
        create_and_update_one_drive_action: cdktn.stringToTerraform(struct!.createAndUpdateOneDriveAction),
        create_and_update_one_drive_knowledge_base: cdktn.stringToTerraform(struct!.createAndUpdateOneDriveKnowledgeBase),
        create_and_update_open_api_action: cdktn.stringToTerraform(struct!.createAndUpdateOpenApiAction),
        create_and_update_pager_duty_action: cdktn.stringToTerraform(struct!.createAndUpdatePagerDutyAction),
        create_and_update_q_business_knowledge_base: cdktn.stringToTerraform(struct!.createAndUpdateQBusinessKnowledgeBase),
        create_and_update_s3_knowledge_base: cdktn.stringToTerraform(struct!.createAndUpdateS3KnowledgeBase),
        create_and_update_salesforce_action: cdktn.stringToTerraform(struct!.createAndUpdateSalesforceAction),
        create_and_update_sand_p_global_energy_action: cdktn.stringToTerraform(struct!.createAndUpdateSandPGlobalEnergyAction),
        create_and_update_sand_pgmi_action: cdktn.stringToTerraform(struct!.createAndUpdateSandPgmiAction),
        create_and_update_sap_bill_of_material_action: cdktn.stringToTerraform(struct!.createAndUpdateSapBillOfMaterialAction),
        create_and_update_sap_business_partner_action: cdktn.stringToTerraform(struct!.createAndUpdateSapBusinessPartnerAction),
        create_and_update_sap_material_stock_action: cdktn.stringToTerraform(struct!.createAndUpdateSapMaterialStockAction),
        create_and_update_sap_physical_inventory_action: cdktn.stringToTerraform(struct!.createAndUpdateSapPhysicalInventoryAction),
        create_and_update_sap_product_master_data_action: cdktn.stringToTerraform(struct!.createAndUpdateSapProductMasterDataAction),
        create_and_update_service_now_action: cdktn.stringToTerraform(struct!.createAndUpdateServiceNowAction),
        create_and_update_share_point_action: cdktn.stringToTerraform(struct!.createAndUpdateSharePointAction),
        create_and_update_share_point_knowledge_base: cdktn.stringToTerraform(struct!.createAndUpdateSharePointKnowledgeBase),
        create_and_update_slack_action: cdktn.stringToTerraform(struct!.createAndUpdateSlackAction),
        create_and_update_smartsheet_action: cdktn.stringToTerraform(struct!.createAndUpdateSmartsheetAction),
        create_and_update_textract_action: cdktn.stringToTerraform(struct!.createAndUpdateTextractAction),
        create_and_update_themes: cdktn.stringToTerraform(struct!.createAndUpdateThemes),
        create_and_update_threshold_alerts: cdktn.stringToTerraform(struct!.createAndUpdateThresholdAlerts),
        create_and_update_web_crawler_knowledge_base: cdktn.stringToTerraform(struct!.createAndUpdateWebCrawlerKnowledgeBase),
        create_and_update_zendesk_action: cdktn.stringToTerraform(struct!.createAndUpdateZendeskAction),
        create_athena_data_source: cdktn.stringToTerraform(struct!.createAthenaDataSource),
        create_aurora_data_source: cdktn.stringToTerraform(struct!.createAuroraDataSource),
        create_chat_agents: cdktn.stringToTerraform(struct!.createChatAgents),
        create_dashboard_executive_summary_with_q: cdktn.stringToTerraform(struct!.createDashboardExecutiveSummaryWithQ),
        create_databricks_data_source: cdktn.stringToTerraform(struct!.createDatabricksDataSource),
        create_db_2_data_source: cdktn.stringToTerraform(struct!.createDb2DataSource),
        create_denodo_data_source: cdktn.stringToTerraform(struct!.createDenodoDataSource),
        create_document_db_data_source: cdktn.stringToTerraform(struct!.createDocumentDbDataSource),
        create_dremio_data_source: cdktn.stringToTerraform(struct!.createDremioDataSource),
        create_dynamo_db_data_source: cdktn.stringToTerraform(struct!.createDynamoDbDataSource),
        create_exasol_data_source: cdktn.stringToTerraform(struct!.createExasolDataSource),
        create_file_data_source: cdktn.stringToTerraform(struct!.createFileDataSource),
        create_git_hub_data_source: cdktn.stringToTerraform(struct!.createGitHubDataSource),
        create_google_analytics_data_source: cdktn.stringToTerraform(struct!.createGoogleAnalyticsDataSource),
        create_google_big_query_data_source: cdktn.stringToTerraform(struct!.createGoogleBigQueryDataSource),
        create_google_sheets_data_source: cdktn.stringToTerraform(struct!.createGoogleSheetsDataSource),
        create_impala_data_source: cdktn.stringToTerraform(struct!.createImpalaDataSource),
        create_jira_data_source: cdktn.stringToTerraform(struct!.createJiraDataSource),
        create_maria_db_data_source: cdktn.stringToTerraform(struct!.createMariaDbDataSource),
        create_mongo_atlas_data_source: cdktn.stringToTerraform(struct!.createMongoAtlasDataSource),
        create_mongo_db_data_source: cdktn.stringToTerraform(struct!.createMongoDbDataSource),
        create_my_sql_data_source: cdktn.stringToTerraform(struct!.createMySqlDataSource),
        create_open_search_data_source: cdktn.stringToTerraform(struct!.createOpenSearchDataSource),
        create_oracle_data_source: cdktn.stringToTerraform(struct!.createOracleDataSource),
        create_pay_pal_data_source: cdktn.stringToTerraform(struct!.createPayPalDataSource),
        create_postgre_sql_data_source: cdktn.stringToTerraform(struct!.createPostgreSqlDataSource),
        create_presto_data_source: cdktn.stringToTerraform(struct!.createPrestoDataSource),
        create_radiant_data_source: cdktn.stringToTerraform(struct!.createRadiantDataSource),
        create_rds_data_source: cdktn.stringToTerraform(struct!.createRdsDataSource),
        create_redshift_auto_discovered_data_source: cdktn.stringToTerraform(struct!.createRedshiftAutoDiscoveredDataSource),
        create_redshift_manual_data_source: cdktn.stringToTerraform(struct!.createRedshiftManualDataSource),
        create_s3_analytics_data_source: cdktn.stringToTerraform(struct!.createS3AnalyticsDataSource),
        create_s3_data_source: cdktn.stringToTerraform(struct!.createS3DataSource),
        create_s3_tables_data_source: cdktn.stringToTerraform(struct!.createS3TablesDataSource),
        create_salesforce_data_source: cdktn.stringToTerraform(struct!.createSalesforceDataSource),
        create_sap_hana_data_source: cdktn.stringToTerraform(struct!.createSapHanaDataSource),
        create_service_now_data_source: cdktn.stringToTerraform(struct!.createServiceNowDataSource),
        create_shared_folders: cdktn.stringToTerraform(struct!.createSharedFolders),
        create_snowflake_data_source: cdktn.stringToTerraform(struct!.createSnowflakeDataSource),
        create_spaces: cdktn.stringToTerraform(struct!.createSpaces),
        create_spark_data_source: cdktn.stringToTerraform(struct!.createSparkDataSource),
        create_spice_dataset: cdktn.stringToTerraform(struct!.createSpiceDataset),
        create_sql_server_data_source: cdktn.stringToTerraform(struct!.createSqlServerDataSource),
        create_square_data_source: cdktn.stringToTerraform(struct!.createSquareDataSource),
        create_starburst_data_source: cdktn.stringToTerraform(struct!.createStarburstDataSource),
        create_teradata_data_source: cdktn.stringToTerraform(struct!.createTeradataDataSource),
        create_timestream_data_source: cdktn.stringToTerraform(struct!.createTimestreamDataSource),
        create_trino_data_source: cdktn.stringToTerraform(struct!.createTrinoDataSource),
        create_twitter_data_source: cdktn.stringToTerraform(struct!.createTwitterDataSource),
        dashboard: cdktn.stringToTerraform(struct!.dashboard),
        databricks_data_source: cdktn.stringToTerraform(struct!.databricksDataSource),
        db_2_data_source: cdktn.stringToTerraform(struct!.db2DataSource),
        denodo_data_source: cdktn.stringToTerraform(struct!.denodoDataSource),
        document_db_data_source: cdktn.stringToTerraform(struct!.documentDbDataSource),
        dremio_data_source: cdktn.stringToTerraform(struct!.dremioDataSource),
        dynamo_db_data_source: cdktn.stringToTerraform(struct!.dynamoDbDataSource),
        edit_visual_with_q: cdktn.stringToTerraform(struct!.editVisualWithQ),
        exasol_data_source: cdktn.stringToTerraform(struct!.exasolDataSource),
        export_to_csv: cdktn.stringToTerraform(struct!.exportToCsv),
        export_to_csv_in_scheduled_reports: cdktn.stringToTerraform(struct!.exportToCsvInScheduledReports),
        export_to_excel: cdktn.stringToTerraform(struct!.exportToExcel),
        export_to_excel_in_scheduled_reports: cdktn.stringToTerraform(struct!.exportToExcelInScheduledReports),
        export_to_pdf: cdktn.stringToTerraform(struct!.exportToPdf),
        export_to_pdf_in_scheduled_reports: cdktn.stringToTerraform(struct!.exportToPdfInScheduledReports),
        extension: cdktn.stringToTerraform(struct!.extension),
        fact_set_action: cdktn.stringToTerraform(struct!.factSetAction),
        file_data_source: cdktn.stringToTerraform(struct!.fileDataSource),
        flow: cdktn.stringToTerraform(struct!.flow),
        generic_http_action: cdktn.stringToTerraform(struct!.genericHttpAction),
        git_hub_data_source: cdktn.stringToTerraform(struct!.gitHubDataSource),
        github_action: cdktn.stringToTerraform(struct!.githubAction),
        google_analytics_data_source: cdktn.stringToTerraform(struct!.googleAnalyticsDataSource),
        google_big_query_data_source: cdktn.stringToTerraform(struct!.googleBigQueryDataSource),
        google_calendar_action: cdktn.stringToTerraform(struct!.googleCalendarAction),
        google_drive_knowledge_base: cdktn.stringToTerraform(struct!.googleDriveKnowledgeBase),
        google_sheets_data_source: cdktn.stringToTerraform(struct!.googleSheetsDataSource),
        hubspot_action: cdktn.stringToTerraform(struct!.hubspotAction),
        hugging_face_action: cdktn.stringToTerraform(struct!.huggingFaceAction),
        idc_knowledge_base: cdktn.stringToTerraform(struct!.idcKnowledgeBase),
        impala_data_source: cdktn.stringToTerraform(struct!.impalaDataSource),
        inbound_email_trigger: cdktn.stringToTerraform(struct!.inboundEmailTrigger),
        include_content_in_scheduled_reports_email: cdktn.stringToTerraform(struct!.includeContentInScheduledReportsEmail),
        intercom_action: cdktn.stringToTerraform(struct!.intercomAction),
        invoke_apps_ai_inference: cdktn.stringToTerraform(struct!.invokeAppsAiInference),
        jira_action: cdktn.stringToTerraform(struct!.jiraAction),
        jira_data_source: cdktn.stringToTerraform(struct!.jiraDataSource),
        knowledge_base: cdktn.stringToTerraform(struct!.knowledgeBase),
        linear_action: cdktn.stringToTerraform(struct!.linearAction),
        manage_shared_folders: cdktn.stringToTerraform(struct!.manageSharedFolders),
        maria_db_data_source: cdktn.stringToTerraform(struct!.mariaDbDataSource),
        mcp_action: cdktn.stringToTerraform(struct!.mcpAction),
        monday_action: cdktn.stringToTerraform(struct!.mondayAction),
        mongo_atlas_data_source: cdktn.stringToTerraform(struct!.mongoAtlasDataSource),
        mongo_db_data_source: cdktn.stringToTerraform(struct!.mongoDbDataSource),
        ms_exchange_action: cdktn.stringToTerraform(struct!.msExchangeAction),
        ms_teams_action: cdktn.stringToTerraform(struct!.msTeamsAction),
        my_sql_data_source: cdktn.stringToTerraform(struct!.mySqlDataSource),
        new_relic_action: cdktn.stringToTerraform(struct!.newRelicAction),
        notion_action: cdktn.stringToTerraform(struct!.notionAction),
        one_drive_action: cdktn.stringToTerraform(struct!.oneDriveAction),
        one_drive_knowledge_base: cdktn.stringToTerraform(struct!.oneDriveKnowledgeBase),
        open_api_action: cdktn.stringToTerraform(struct!.openApiAction),
        open_search_data_source: cdktn.stringToTerraform(struct!.openSearchDataSource),
        oracle_data_source: cdktn.stringToTerraform(struct!.oracleDataSource),
        pager_duty_action: cdktn.stringToTerraform(struct!.pagerDutyAction),
        pay_pal_data_source: cdktn.stringToTerraform(struct!.payPalDataSource),
        perform_flow_ui_task: cdktn.stringToTerraform(struct!.performFlowUiTask),
        postgre_sql_data_source: cdktn.stringToTerraform(struct!.postgreSqlDataSource),
        presto_data_source: cdktn.stringToTerraform(struct!.prestoDataSource),
        print_reports: cdktn.stringToTerraform(struct!.printReports),
        publish_without_approval: cdktn.stringToTerraform(struct!.publishWithoutApproval),
        q_business_knowledge_base: cdktn.stringToTerraform(struct!.qBusinessKnowledgeBase),
        quick_event_trigger: cdktn.stringToTerraform(struct!.quickEventTrigger),
        radiant_data_source: cdktn.stringToTerraform(struct!.radiantDataSource),
        rds_data_source: cdktn.stringToTerraform(struct!.rdsDataSource),
        redshift_auto_discovered_data_source: cdktn.stringToTerraform(struct!.redshiftAutoDiscoveredDataSource),
        redshift_manual_data_source: cdktn.stringToTerraform(struct!.redshiftManualDataSource),
        rename_shared_folders: cdktn.stringToTerraform(struct!.renameSharedFolders),
        research: cdktn.stringToTerraform(struct!.research),
        s3_analytics_data_source: cdktn.stringToTerraform(struct!.s3AnalyticsDataSource),
        s3_data_source: cdktn.stringToTerraform(struct!.s3DataSource),
        s3_knowledge_base: cdktn.stringToTerraform(struct!.s3KnowledgeBase),
        s3_tables_data_source: cdktn.stringToTerraform(struct!.s3TablesDataSource),
        salesforce_action: cdktn.stringToTerraform(struct!.salesforceAction),
        salesforce_data_source: cdktn.stringToTerraform(struct!.salesforceDataSource),
        sand_p_global_energy_action: cdktn.stringToTerraform(struct!.sandPGlobalEnergyAction),
        sand_pgmi_action: cdktn.stringToTerraform(struct!.sandPgmiAction),
        sap_bill_of_material_action: cdktn.stringToTerraform(struct!.sapBillOfMaterialAction),
        sap_business_partner_action: cdktn.stringToTerraform(struct!.sapBusinessPartnerAction),
        sap_hana_data_source: cdktn.stringToTerraform(struct!.sapHanaDataSource),
        sap_material_stock_action: cdktn.stringToTerraform(struct!.sapMaterialStockAction),
        sap_physical_inventory_action: cdktn.stringToTerraform(struct!.sapPhysicalInventoryAction),
        sap_product_master_data_action: cdktn.stringToTerraform(struct!.sapProductMasterDataAction),
        schedule_trigger: cdktn.stringToTerraform(struct!.scheduleTrigger),
        service_now_action: cdktn.stringToTerraform(struct!.serviceNowAction),
        service_now_data_source: cdktn.stringToTerraform(struct!.serviceNowDataSource),
        share_adobe_analytics_data_source: cdktn.stringToTerraform(struct!.shareAdobeAnalyticsDataSource),
        share_amazon_bedrock_ars_action: cdktn.stringToTerraform(struct!.shareAmazonBedrockArsAction),
        share_amazon_bedrock_fs_action: cdktn.stringToTerraform(struct!.shareAmazonBedrockFsAction),
        share_amazon_bedrock_krs_action: cdktn.stringToTerraform(struct!.shareAmazonBedrockKrsAction),
        share_amazon_s_three_action: cdktn.stringToTerraform(struct!.shareAmazonSThreeAction),
        share_analyses: cdktn.stringToTerraform(struct!.shareAnalyses),
        share_apps: cdktn.stringToTerraform(struct!.shareApps),
        share_asana_action: cdktn.stringToTerraform(struct!.shareAsanaAction),
        share_athena_data_source: cdktn.stringToTerraform(struct!.shareAthenaDataSource),
        share_aurora_data_source: cdktn.stringToTerraform(struct!.shareAuroraDataSource),
        share_bamboo_hr_action: cdktn.stringToTerraform(struct!.shareBambooHrAction),
        share_bedrock_managed_knowledge_base: cdktn.stringToTerraform(struct!.shareBedrockManagedKnowledgeBase),
        share_box_agent_action: cdktn.stringToTerraform(struct!.shareBoxAgentAction),
        share_box_knowledge_base: cdktn.stringToTerraform(struct!.shareBoxKnowledgeBase),
        share_canva_agent_action: cdktn.stringToTerraform(struct!.shareCanvaAgentAction),
        share_chat_agents: cdktn.stringToTerraform(struct!.shareChatAgents),
        share_comprehend_action: cdktn.stringToTerraform(struct!.shareComprehendAction),
        share_comprehend_medical_action: cdktn.stringToTerraform(struct!.shareComprehendMedicalAction),
        share_confluence_action: cdktn.stringToTerraform(struct!.shareConfluenceAction),
        share_confluence_knowledge_base: cdktn.stringToTerraform(struct!.shareConfluenceKnowledgeBase),
        share_dashboards: cdktn.stringToTerraform(struct!.shareDashboards),
        share_data_sources: cdktn.stringToTerraform(struct!.shareDataSources),
        share_databricks_data_source: cdktn.stringToTerraform(struct!.shareDatabricksDataSource),
        share_datasets: cdktn.stringToTerraform(struct!.shareDatasets),
        share_db_2_data_source: cdktn.stringToTerraform(struct!.shareDb2DataSource),
        share_denodo_data_source: cdktn.stringToTerraform(struct!.shareDenodoDataSource),
        share_document_db_data_source: cdktn.stringToTerraform(struct!.shareDocumentDbDataSource),
        share_dremio_data_source: cdktn.stringToTerraform(struct!.shareDremioDataSource),
        share_dynamo_db_data_source: cdktn.stringToTerraform(struct!.shareDynamoDbDataSource),
        share_exasol_data_source: cdktn.stringToTerraform(struct!.shareExasolDataSource),
        share_fact_set_action: cdktn.stringToTerraform(struct!.shareFactSetAction),
        share_file_data_source: cdktn.stringToTerraform(struct!.shareFileDataSource),
        share_generic_http_action: cdktn.stringToTerraform(struct!.shareGenericHttpAction),
        share_git_hub_data_source: cdktn.stringToTerraform(struct!.shareGitHubDataSource),
        share_github_action: cdktn.stringToTerraform(struct!.shareGithubAction),
        share_google_analytics_data_source: cdktn.stringToTerraform(struct!.shareGoogleAnalyticsDataSource),
        share_google_big_query_data_source: cdktn.stringToTerraform(struct!.shareGoogleBigQueryDataSource),
        share_google_calendar_action: cdktn.stringToTerraform(struct!.shareGoogleCalendarAction),
        share_google_drive_knowledge_base: cdktn.stringToTerraform(struct!.shareGoogleDriveKnowledgeBase),
        share_google_sheets_data_source: cdktn.stringToTerraform(struct!.shareGoogleSheetsDataSource),
        share_hubspot_action: cdktn.stringToTerraform(struct!.shareHubspotAction),
        share_hugging_face_action: cdktn.stringToTerraform(struct!.shareHuggingFaceAction),
        share_idc_knowledge_base: cdktn.stringToTerraform(struct!.shareIdcKnowledgeBase),
        share_impala_data_source: cdktn.stringToTerraform(struct!.shareImpalaDataSource),
        share_intercom_action: cdktn.stringToTerraform(struct!.shareIntercomAction),
        share_jira_action: cdktn.stringToTerraform(struct!.shareJiraAction),
        share_jira_data_source: cdktn.stringToTerraform(struct!.shareJiraDataSource),
        share_knowledge_bases: cdktn.stringToTerraform(struct!.shareKnowledgeBases),
        share_linear_action: cdktn.stringToTerraform(struct!.shareLinearAction),
        share_maria_db_data_source: cdktn.stringToTerraform(struct!.shareMariaDbDataSource),
        share_mcp_action: cdktn.stringToTerraform(struct!.shareMcpAction),
        share_monday_action: cdktn.stringToTerraform(struct!.shareMondayAction),
        share_mongo_atlas_data_source: cdktn.stringToTerraform(struct!.shareMongoAtlasDataSource),
        share_mongo_db_data_source: cdktn.stringToTerraform(struct!.shareMongoDbDataSource),
        share_ms_exchange_action: cdktn.stringToTerraform(struct!.shareMsExchangeAction),
        share_ms_teams_action: cdktn.stringToTerraform(struct!.shareMsTeamsAction),
        share_my_sql_data_source: cdktn.stringToTerraform(struct!.shareMySqlDataSource),
        share_new_relic_action: cdktn.stringToTerraform(struct!.shareNewRelicAction),
        share_notion_action: cdktn.stringToTerraform(struct!.shareNotionAction),
        share_one_drive_action: cdktn.stringToTerraform(struct!.shareOneDriveAction),
        share_one_drive_knowledge_base: cdktn.stringToTerraform(struct!.shareOneDriveKnowledgeBase),
        share_open_api_action: cdktn.stringToTerraform(struct!.shareOpenApiAction),
        share_open_search_data_source: cdktn.stringToTerraform(struct!.shareOpenSearchDataSource),
        share_oracle_data_source: cdktn.stringToTerraform(struct!.shareOracleDataSource),
        share_pager_duty_action: cdktn.stringToTerraform(struct!.sharePagerDutyAction),
        share_pay_pal_data_source: cdktn.stringToTerraform(struct!.sharePayPalDataSource),
        share_point_action: cdktn.stringToTerraform(struct!.sharePointAction),
        share_point_knowledge_base: cdktn.stringToTerraform(struct!.sharePointKnowledgeBase),
        share_postgre_sql_data_source: cdktn.stringToTerraform(struct!.sharePostgreSqlDataSource),
        share_presto_data_source: cdktn.stringToTerraform(struct!.sharePrestoDataSource),
        share_q_business_knowledge_base: cdktn.stringToTerraform(struct!.shareQBusinessKnowledgeBase),
        share_radiant_data_source: cdktn.stringToTerraform(struct!.shareRadiantDataSource),
        share_rds_data_source: cdktn.stringToTerraform(struct!.shareRdsDataSource),
        share_redshift_auto_discovered_data_source: cdktn.stringToTerraform(struct!.shareRedshiftAutoDiscoveredDataSource),
        share_redshift_manual_data_source: cdktn.stringToTerraform(struct!.shareRedshiftManualDataSource),
        share_s3_analytics_data_source: cdktn.stringToTerraform(struct!.shareS3AnalyticsDataSource),
        share_s3_data_source: cdktn.stringToTerraform(struct!.shareS3DataSource),
        share_s3_knowledge_base: cdktn.stringToTerraform(struct!.shareS3KnowledgeBase),
        share_s3_tables_data_source: cdktn.stringToTerraform(struct!.shareS3TablesDataSource),
        share_salesforce_action: cdktn.stringToTerraform(struct!.shareSalesforceAction),
        share_salesforce_data_source: cdktn.stringToTerraform(struct!.shareSalesforceDataSource),
        share_sand_p_global_energy_action: cdktn.stringToTerraform(struct!.shareSandPGlobalEnergyAction),
        share_sand_pgmi_action: cdktn.stringToTerraform(struct!.shareSandPgmiAction),
        share_sap_bill_of_material_action: cdktn.stringToTerraform(struct!.shareSapBillOfMaterialAction),
        share_sap_business_partner_action: cdktn.stringToTerraform(struct!.shareSapBusinessPartnerAction),
        share_sap_hana_data_source: cdktn.stringToTerraform(struct!.shareSapHanaDataSource),
        share_sap_material_stock_action: cdktn.stringToTerraform(struct!.shareSapMaterialStockAction),
        share_sap_physical_inventory_action: cdktn.stringToTerraform(struct!.shareSapPhysicalInventoryAction),
        share_sap_product_master_data_action: cdktn.stringToTerraform(struct!.shareSapProductMasterDataAction),
        share_service_now_action: cdktn.stringToTerraform(struct!.shareServiceNowAction),
        share_service_now_data_source: cdktn.stringToTerraform(struct!.shareServiceNowDataSource),
        share_share_point_action: cdktn.stringToTerraform(struct!.shareSharePointAction),
        share_share_point_knowledge_base: cdktn.stringToTerraform(struct!.shareSharePointKnowledgeBase),
        share_slack_action: cdktn.stringToTerraform(struct!.shareSlackAction),
        share_smartsheet_action: cdktn.stringToTerraform(struct!.shareSmartsheetAction),
        share_snowflake_data_source: cdktn.stringToTerraform(struct!.shareSnowflakeDataSource),
        share_spaces: cdktn.stringToTerraform(struct!.shareSpaces),
        share_spark_data_source: cdktn.stringToTerraform(struct!.shareSparkDataSource),
        share_sql_server_data_source: cdktn.stringToTerraform(struct!.shareSqlServerDataSource),
        share_square_data_source: cdktn.stringToTerraform(struct!.shareSquareDataSource),
        share_starburst_data_source: cdktn.stringToTerraform(struct!.shareStarburstDataSource),
        share_teradata_data_source: cdktn.stringToTerraform(struct!.shareTeradataDataSource),
        share_textract_action: cdktn.stringToTerraform(struct!.shareTextractAction),
        share_timestream_data_source: cdktn.stringToTerraform(struct!.shareTimestreamDataSource),
        share_trino_data_source: cdktn.stringToTerraform(struct!.shareTrinoDataSource),
        share_twitter_data_source: cdktn.stringToTerraform(struct!.shareTwitterDataSource),
        share_web_crawler_knowledge_base: cdktn.stringToTerraform(struct!.shareWebCrawlerKnowledgeBase),
        share_zendesk_action: cdktn.stringToTerraform(struct!.shareZendeskAction),
        slack_action: cdktn.stringToTerraform(struct!.slackAction),
        smartsheet_action: cdktn.stringToTerraform(struct!.smartsheetAction),
        snowflake_data_source: cdktn.stringToTerraform(struct!.snowflakeDataSource),
        space: cdktn.stringToTerraform(struct!.space),
        spark_data_source: cdktn.stringToTerraform(struct!.sparkDataSource),
        sql_server_data_source: cdktn.stringToTerraform(struct!.sqlServerDataSource),
        square_data_source: cdktn.stringToTerraform(struct!.squareDataSource),
        starburst_data_source: cdktn.stringToTerraform(struct!.starburstDataSource),
        subscribe_dashboard_email_reports: cdktn.stringToTerraform(struct!.subscribeDashboardEmailReports),
        teradata_data_source: cdktn.stringToTerraform(struct!.teradataDataSource),
        textract_action: cdktn.stringToTerraform(struct!.textractAction),
        timestream_data_source: cdktn.stringToTerraform(struct!.timestreamDataSource),
        topic: cdktn.stringToTerraform(struct!.topic),
        trigger: cdktn.stringToTerraform(struct!.trigger),
        trino_data_source: cdktn.stringToTerraform(struct!.trinoDataSource),
        twitter_data_source: cdktn.stringToTerraform(struct!.twitterDataSource),
        update_adobe_analytics_data_source: cdktn.stringToTerraform(struct!.updateAdobeAnalyticsDataSource),
        update_athena_data_source: cdktn.stringToTerraform(struct!.updateAthenaDataSource),
        update_aurora_data_source: cdktn.stringToTerraform(struct!.updateAuroraDataSource),
        update_databricks_data_source: cdktn.stringToTerraform(struct!.updateDatabricksDataSource),
        update_db_2_data_source: cdktn.stringToTerraform(struct!.updateDb2DataSource),
        update_denodo_data_source: cdktn.stringToTerraform(struct!.updateDenodoDataSource),
        update_document_db_data_source: cdktn.stringToTerraform(struct!.updateDocumentDbDataSource),
        update_dremio_data_source: cdktn.stringToTerraform(struct!.updateDremioDataSource),
        update_dynamo_db_data_source: cdktn.stringToTerraform(struct!.updateDynamoDbDataSource),
        update_exasol_data_source: cdktn.stringToTerraform(struct!.updateExasolDataSource),
        update_file_data_source: cdktn.stringToTerraform(struct!.updateFileDataSource),
        update_git_hub_data_source: cdktn.stringToTerraform(struct!.updateGitHubDataSource),
        update_google_analytics_data_source: cdktn.stringToTerraform(struct!.updateGoogleAnalyticsDataSource),
        update_google_big_query_data_source: cdktn.stringToTerraform(struct!.updateGoogleBigQueryDataSource),
        update_google_sheets_data_source: cdktn.stringToTerraform(struct!.updateGoogleSheetsDataSource),
        update_impala_data_source: cdktn.stringToTerraform(struct!.updateImpalaDataSource),
        update_jira_data_source: cdktn.stringToTerraform(struct!.updateJiraDataSource),
        update_maria_db_data_source: cdktn.stringToTerraform(struct!.updateMariaDbDataSource),
        update_mongo_atlas_data_source: cdktn.stringToTerraform(struct!.updateMongoAtlasDataSource),
        update_mongo_db_data_source: cdktn.stringToTerraform(struct!.updateMongoDbDataSource),
        update_my_sql_data_source: cdktn.stringToTerraform(struct!.updateMySqlDataSource),
        update_open_search_data_source: cdktn.stringToTerraform(struct!.updateOpenSearchDataSource),
        update_oracle_data_source: cdktn.stringToTerraform(struct!.updateOracleDataSource),
        update_pay_pal_data_source: cdktn.stringToTerraform(struct!.updatePayPalDataSource),
        update_postgre_sql_data_source: cdktn.stringToTerraform(struct!.updatePostgreSqlDataSource),
        update_presto_data_source: cdktn.stringToTerraform(struct!.updatePrestoDataSource),
        update_radiant_data_source: cdktn.stringToTerraform(struct!.updateRadiantDataSource),
        update_rds_data_source: cdktn.stringToTerraform(struct!.updateRdsDataSource),
        update_redshift_auto_discovered_data_source: cdktn.stringToTerraform(struct!.updateRedshiftAutoDiscoveredDataSource),
        update_redshift_manual_data_source: cdktn.stringToTerraform(struct!.updateRedshiftManualDataSource),
        update_s3_analytics_data_source: cdktn.stringToTerraform(struct!.updateS3AnalyticsDataSource),
        update_s3_data_source: cdktn.stringToTerraform(struct!.updateS3DataSource),
        update_s3_tables_data_source: cdktn.stringToTerraform(struct!.updateS3TablesDataSource),
        update_salesforce_data_source: cdktn.stringToTerraform(struct!.updateSalesforceDataSource),
        update_sap_hana_data_source: cdktn.stringToTerraform(struct!.updateSapHanaDataSource),
        update_service_now_data_source: cdktn.stringToTerraform(struct!.updateServiceNowDataSource),
        update_snowflake_data_source: cdktn.stringToTerraform(struct!.updateSnowflakeDataSource),
        update_spark_data_source: cdktn.stringToTerraform(struct!.updateSparkDataSource),
        update_sql_server_data_source: cdktn.stringToTerraform(struct!.updateSqlServerDataSource),
        update_square_data_source: cdktn.stringToTerraform(struct!.updateSquareDataSource),
        update_starburst_data_source: cdktn.stringToTerraform(struct!.updateStarburstDataSource),
        update_teradata_data_source: cdktn.stringToTerraform(struct!.updateTeradataDataSource),
        update_timestream_data_source: cdktn.stringToTerraform(struct!.updateTimestreamDataSource),
        update_trino_data_source: cdktn.stringToTerraform(struct!.updateTrinoDataSource),
        update_twitter_data_source: cdktn.stringToTerraform(struct!.updateTwitterDataSource),
        use_agent_web_search: cdktn.stringToTerraform(struct!.useAgentWebSearch),
        use_amazon_bedrock_ars_action: cdktn.stringToTerraform(struct!.useAmazonBedrockArsAction),
        use_amazon_bedrock_fs_action: cdktn.stringToTerraform(struct!.useAmazonBedrockFsAction),
        use_amazon_bedrock_krs_action: cdktn.stringToTerraform(struct!.useAmazonBedrockKrsAction),
        use_amazon_s_three_action: cdktn.stringToTerraform(struct!.useAmazonSThreeAction),
        use_asana_action: cdktn.stringToTerraform(struct!.useAsanaAction),
        use_bamboo_hr_action: cdktn.stringToTerraform(struct!.useBambooHrAction),
        use_bedrock_managed_knowledge_base: cdktn.stringToTerraform(struct!.useBedrockManagedKnowledgeBase),
        use_bedrock_models: cdktn.stringToTerraform(struct!.useBedrockModels),
        use_box_agent_action: cdktn.stringToTerraform(struct!.useBoxAgentAction),
        use_box_knowledge_base: cdktn.stringToTerraform(struct!.useBoxKnowledgeBase),
        use_browser_extension: cdktn.stringToTerraform(struct!.useBrowserExtension),
        use_canva_agent_action: cdktn.stringToTerraform(struct!.useCanvaAgentAction),
        use_comprehend_action: cdktn.stringToTerraform(struct!.useComprehendAction),
        use_comprehend_medical_action: cdktn.stringToTerraform(struct!.useComprehendMedicalAction),
        use_confluence_action: cdktn.stringToTerraform(struct!.useConfluenceAction),
        use_confluence_knowledge_base: cdktn.stringToTerraform(struct!.useConfluenceKnowledgeBase),
        use_excel_add_in_extension: cdktn.stringToTerraform(struct!.useExcelAddInExtension),
        use_fact_set_action: cdktn.stringToTerraform(struct!.useFactSetAction),
        use_generic_http_action: cdktn.stringToTerraform(struct!.useGenericHttpAction),
        use_github_action: cdktn.stringToTerraform(struct!.useGithubAction),
        use_google_calendar_action: cdktn.stringToTerraform(struct!.useGoogleCalendarAction),
        use_google_drive_knowledge_base: cdktn.stringToTerraform(struct!.useGoogleDriveKnowledgeBase),
        use_hubspot_action: cdktn.stringToTerraform(struct!.useHubspotAction),
        use_hugging_face_action: cdktn.stringToTerraform(struct!.useHuggingFaceAction),
        use_idc_knowledge_base: cdktn.stringToTerraform(struct!.useIdcKnowledgeBase),
        use_intercom_action: cdktn.stringToTerraform(struct!.useIntercomAction),
        use_jira_action: cdktn.stringToTerraform(struct!.useJiraAction),
        use_linear_action: cdktn.stringToTerraform(struct!.useLinearAction),
        use_mcp_action: cdktn.stringToTerraform(struct!.useMcpAction),
        use_monday_action: cdktn.stringToTerraform(struct!.useMondayAction),
        use_ms_exchange_action: cdktn.stringToTerraform(struct!.useMsExchangeAction),
        use_ms_teams_action: cdktn.stringToTerraform(struct!.useMsTeamsAction),
        use_new_relic_action: cdktn.stringToTerraform(struct!.useNewRelicAction),
        use_notion_action: cdktn.stringToTerraform(struct!.useNotionAction),
        use_one_drive_action: cdktn.stringToTerraform(struct!.useOneDriveAction),
        use_one_drive_knowledge_base: cdktn.stringToTerraform(struct!.useOneDriveKnowledgeBase),
        use_open_api_action: cdktn.stringToTerraform(struct!.useOpenApiAction),
        use_outlook_add_in_extension: cdktn.stringToTerraform(struct!.useOutlookAddInExtension),
        use_pager_duty_action: cdktn.stringToTerraform(struct!.usePagerDutyAction),
        use_powerpoint_add_in_extension: cdktn.stringToTerraform(struct!.usePowerpointAddInExtension),
        use_q_business_knowledge_base: cdktn.stringToTerraform(struct!.useQBusinessKnowledgeBase),
        use_s3_knowledge_base: cdktn.stringToTerraform(struct!.useS3KnowledgeBase),
        use_salesforce_action: cdktn.stringToTerraform(struct!.useSalesforceAction),
        use_sand_p_global_energy_action: cdktn.stringToTerraform(struct!.useSandPGlobalEnergyAction),
        use_sand_pgmi_action: cdktn.stringToTerraform(struct!.useSandPgmiAction),
        use_sap_bill_of_material_action: cdktn.stringToTerraform(struct!.useSapBillOfMaterialAction),
        use_sap_business_partner_action: cdktn.stringToTerraform(struct!.useSapBusinessPartnerAction),
        use_sap_material_stock_action: cdktn.stringToTerraform(struct!.useSapMaterialStockAction),
        use_sap_physical_inventory_action: cdktn.stringToTerraform(struct!.useSapPhysicalInventoryAction),
        use_sap_product_master_data_action: cdktn.stringToTerraform(struct!.useSapProductMasterDataAction),
        use_service_now_action: cdktn.stringToTerraform(struct!.useServiceNowAction),
        use_share_point_action: cdktn.stringToTerraform(struct!.useSharePointAction),
        use_share_point_knowledge_base: cdktn.stringToTerraform(struct!.useSharePointKnowledgeBase),
        use_slack_action: cdktn.stringToTerraform(struct!.useSlackAction),
        use_smartsheet_action: cdktn.stringToTerraform(struct!.useSmartsheetAction),
        use_textract_action: cdktn.stringToTerraform(struct!.useTextractAction),
        use_web_crawler_knowledge_base: cdktn.stringToTerraform(struct!.useWebCrawlerKnowledgeBase),
        use_word_add_in_extension: cdktn.stringToTerraform(struct!.useWordAddInExtension),
        use_zendesk_action: cdktn.stringToTerraform(struct!.useZendeskAction),
        view_account_spice_capacity: cdktn.stringToTerraform(struct!.viewAccountSpiceCapacity),
        web_crawler_knowledge_base: cdktn.stringToTerraform(struct!.webCrawlerKnowledgeBase),
        zendesk_action: cdktn.stringToTerraform(struct!.zendeskAction),
    }
}


export function ccCustomPermissionsCapabilitiesPropertyToHclTerraform(struct?: CcCustomPermissions.CapabilitiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        access_apps_native_data_store: {
            value: cdktn.stringToHclTerraform(struct!.accessAppsNativeDataStore),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        action: {
            value: cdktn.stringToHclTerraform(struct!.action),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        add_or_run_anomaly_detection_for_analyses: {
            value: cdktn.stringToHclTerraform(struct!.addOrRunAnomalyDetectionForAnalyses),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        adobe_analytics_data_source: {
            value: cdktn.stringToHclTerraform(struct!.adobeAnalyticsDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        amazon_bedrock_ars_action: {
            value: cdktn.stringToHclTerraform(struct!.amazonBedrockArsAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        amazon_bedrock_fs_action: {
            value: cdktn.stringToHclTerraform(struct!.amazonBedrockFsAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        amazon_bedrock_krs_action: {
            value: cdktn.stringToHclTerraform(struct!.amazonBedrockKrsAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        amazon_s_three_action: {
            value: cdktn.stringToHclTerraform(struct!.amazonSThreeAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        analysis: {
            value: cdktn.stringToHclTerraform(struct!.analysis),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        approve_flow_share_requests: {
            value: cdktn.stringToHclTerraform(struct!.approveFlowShareRequests),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        apps: {
            value: cdktn.stringToHclTerraform(struct!.apps),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        asana_action: {
            value: cdktn.stringToHclTerraform(struct!.asanaAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        athena_data_source: {
            value: cdktn.stringToHclTerraform(struct!.athenaDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        aurora_data_source: {
            value: cdktn.stringToHclTerraform(struct!.auroraDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        automate: {
            value: cdktn.stringToHclTerraform(struct!.automate),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        bamboo_hr_action: {
            value: cdktn.stringToHclTerraform(struct!.bambooHrAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        bedrock_managed_knowledge_base: {
            value: cdktn.stringToHclTerraform(struct!.bedrockManagedKnowledgeBase),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        box_agent_action: {
            value: cdktn.stringToHclTerraform(struct!.boxAgentAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        box_knowledge_base: {
            value: cdktn.stringToHclTerraform(struct!.boxKnowledgeBase),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        build_calculated_field_with_q: {
            value: cdktn.stringToHclTerraform(struct!.buildCalculatedFieldWithQ),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        canva_agent_action: {
            value: cdktn.stringToHclTerraform(struct!.canvaAgentAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        chat_agent: {
            value: cdktn.stringToHclTerraform(struct!.chatAgent),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        comprehend_action: {
            value: cdktn.stringToHclTerraform(struct!.comprehendAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        comprehend_medical_action: {
            value: cdktn.stringToHclTerraform(struct!.comprehendMedicalAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        confluence_action: {
            value: cdktn.stringToHclTerraform(struct!.confluenceAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        confluence_knowledge_base: {
            value: cdktn.stringToHclTerraform(struct!.confluenceKnowledgeBase),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_adobe_analytics_data_source: {
            value: cdktn.stringToHclTerraform(struct!.createAdobeAnalyticsDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_and_update_amazon_bedrock_ars_action: {
            value: cdktn.stringToHclTerraform(struct!.createAndUpdateAmazonBedrockArsAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_and_update_amazon_bedrock_fs_action: {
            value: cdktn.stringToHclTerraform(struct!.createAndUpdateAmazonBedrockFsAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_and_update_amazon_bedrock_krs_action: {
            value: cdktn.stringToHclTerraform(struct!.createAndUpdateAmazonBedrockKrsAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_and_update_amazon_s_three_action: {
            value: cdktn.stringToHclTerraform(struct!.createAndUpdateAmazonSThreeAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_and_update_apps: {
            value: cdktn.stringToHclTerraform(struct!.createAndUpdateApps),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_and_update_asana_action: {
            value: cdktn.stringToHclTerraform(struct!.createAndUpdateAsanaAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_and_update_bamboo_hr_action: {
            value: cdktn.stringToHclTerraform(struct!.createAndUpdateBambooHrAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_and_update_bedrock_managed_knowledge_base: {
            value: cdktn.stringToHclTerraform(struct!.createAndUpdateBedrockManagedKnowledgeBase),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_and_update_box_agent_action: {
            value: cdktn.stringToHclTerraform(struct!.createAndUpdateBoxAgentAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_and_update_box_knowledge_base: {
            value: cdktn.stringToHclTerraform(struct!.createAndUpdateBoxKnowledgeBase),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_and_update_canva_agent_action: {
            value: cdktn.stringToHclTerraform(struct!.createAndUpdateCanvaAgentAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_and_update_comprehend_action: {
            value: cdktn.stringToHclTerraform(struct!.createAndUpdateComprehendAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_and_update_comprehend_medical_action: {
            value: cdktn.stringToHclTerraform(struct!.createAndUpdateComprehendMedicalAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_and_update_confluence_action: {
            value: cdktn.stringToHclTerraform(struct!.createAndUpdateConfluenceAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_and_update_confluence_knowledge_base: {
            value: cdktn.stringToHclTerraform(struct!.createAndUpdateConfluenceKnowledgeBase),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_and_update_dashboard_email_reports: {
            value: cdktn.stringToHclTerraform(struct!.createAndUpdateDashboardEmailReports),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_and_update_data_sources: {
            value: cdktn.stringToHclTerraform(struct!.createAndUpdateDataSources),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_and_update_datasets: {
            value: cdktn.stringToHclTerraform(struct!.createAndUpdateDatasets),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_and_update_fact_set_action: {
            value: cdktn.stringToHclTerraform(struct!.createAndUpdateFactSetAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_and_update_generic_http_action: {
            value: cdktn.stringToHclTerraform(struct!.createAndUpdateGenericHttpAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_and_update_github_action: {
            value: cdktn.stringToHclTerraform(struct!.createAndUpdateGithubAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_and_update_google_calendar_action: {
            value: cdktn.stringToHclTerraform(struct!.createAndUpdateGoogleCalendarAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_and_update_google_drive_knowledge_base: {
            value: cdktn.stringToHclTerraform(struct!.createAndUpdateGoogleDriveKnowledgeBase),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_and_update_hubspot_action: {
            value: cdktn.stringToHclTerraform(struct!.createAndUpdateHubspotAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_and_update_hugging_face_action: {
            value: cdktn.stringToHclTerraform(struct!.createAndUpdateHuggingFaceAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_and_update_idc_knowledge_base: {
            value: cdktn.stringToHclTerraform(struct!.createAndUpdateIdcKnowledgeBase),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_and_update_intercom_action: {
            value: cdktn.stringToHclTerraform(struct!.createAndUpdateIntercomAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_and_update_jira_action: {
            value: cdktn.stringToHclTerraform(struct!.createAndUpdateJiraAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_and_update_knowledge_bases: {
            value: cdktn.stringToHclTerraform(struct!.createAndUpdateKnowledgeBases),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_and_update_linear_action: {
            value: cdktn.stringToHclTerraform(struct!.createAndUpdateLinearAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_and_update_mcp_action: {
            value: cdktn.stringToHclTerraform(struct!.createAndUpdateMcpAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_and_update_monday_action: {
            value: cdktn.stringToHclTerraform(struct!.createAndUpdateMondayAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_and_update_ms_exchange_action: {
            value: cdktn.stringToHclTerraform(struct!.createAndUpdateMsExchangeAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_and_update_ms_teams_action: {
            value: cdktn.stringToHclTerraform(struct!.createAndUpdateMsTeamsAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_and_update_new_relic_action: {
            value: cdktn.stringToHclTerraform(struct!.createAndUpdateNewRelicAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_and_update_notion_action: {
            value: cdktn.stringToHclTerraform(struct!.createAndUpdateNotionAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_and_update_one_drive_action: {
            value: cdktn.stringToHclTerraform(struct!.createAndUpdateOneDriveAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_and_update_one_drive_knowledge_base: {
            value: cdktn.stringToHclTerraform(struct!.createAndUpdateOneDriveKnowledgeBase),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_and_update_open_api_action: {
            value: cdktn.stringToHclTerraform(struct!.createAndUpdateOpenApiAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_and_update_pager_duty_action: {
            value: cdktn.stringToHclTerraform(struct!.createAndUpdatePagerDutyAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_and_update_q_business_knowledge_base: {
            value: cdktn.stringToHclTerraform(struct!.createAndUpdateQBusinessKnowledgeBase),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_and_update_s3_knowledge_base: {
            value: cdktn.stringToHclTerraform(struct!.createAndUpdateS3KnowledgeBase),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_and_update_salesforce_action: {
            value: cdktn.stringToHclTerraform(struct!.createAndUpdateSalesforceAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_and_update_sand_p_global_energy_action: {
            value: cdktn.stringToHclTerraform(struct!.createAndUpdateSandPGlobalEnergyAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_and_update_sand_pgmi_action: {
            value: cdktn.stringToHclTerraform(struct!.createAndUpdateSandPgmiAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_and_update_sap_bill_of_material_action: {
            value: cdktn.stringToHclTerraform(struct!.createAndUpdateSapBillOfMaterialAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_and_update_sap_business_partner_action: {
            value: cdktn.stringToHclTerraform(struct!.createAndUpdateSapBusinessPartnerAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_and_update_sap_material_stock_action: {
            value: cdktn.stringToHclTerraform(struct!.createAndUpdateSapMaterialStockAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_and_update_sap_physical_inventory_action: {
            value: cdktn.stringToHclTerraform(struct!.createAndUpdateSapPhysicalInventoryAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_and_update_sap_product_master_data_action: {
            value: cdktn.stringToHclTerraform(struct!.createAndUpdateSapProductMasterDataAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_and_update_service_now_action: {
            value: cdktn.stringToHclTerraform(struct!.createAndUpdateServiceNowAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_and_update_share_point_action: {
            value: cdktn.stringToHclTerraform(struct!.createAndUpdateSharePointAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_and_update_share_point_knowledge_base: {
            value: cdktn.stringToHclTerraform(struct!.createAndUpdateSharePointKnowledgeBase),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_and_update_slack_action: {
            value: cdktn.stringToHclTerraform(struct!.createAndUpdateSlackAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_and_update_smartsheet_action: {
            value: cdktn.stringToHclTerraform(struct!.createAndUpdateSmartsheetAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_and_update_textract_action: {
            value: cdktn.stringToHclTerraform(struct!.createAndUpdateTextractAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_and_update_themes: {
            value: cdktn.stringToHclTerraform(struct!.createAndUpdateThemes),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_and_update_threshold_alerts: {
            value: cdktn.stringToHclTerraform(struct!.createAndUpdateThresholdAlerts),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_and_update_web_crawler_knowledge_base: {
            value: cdktn.stringToHclTerraform(struct!.createAndUpdateWebCrawlerKnowledgeBase),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_and_update_zendesk_action: {
            value: cdktn.stringToHclTerraform(struct!.createAndUpdateZendeskAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_athena_data_source: {
            value: cdktn.stringToHclTerraform(struct!.createAthenaDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_aurora_data_source: {
            value: cdktn.stringToHclTerraform(struct!.createAuroraDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_chat_agents: {
            value: cdktn.stringToHclTerraform(struct!.createChatAgents),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_dashboard_executive_summary_with_q: {
            value: cdktn.stringToHclTerraform(struct!.createDashboardExecutiveSummaryWithQ),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_databricks_data_source: {
            value: cdktn.stringToHclTerraform(struct!.createDatabricksDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_db_2_data_source: {
            value: cdktn.stringToHclTerraform(struct!.createDb2DataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_denodo_data_source: {
            value: cdktn.stringToHclTerraform(struct!.createDenodoDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_document_db_data_source: {
            value: cdktn.stringToHclTerraform(struct!.createDocumentDbDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_dremio_data_source: {
            value: cdktn.stringToHclTerraform(struct!.createDremioDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_dynamo_db_data_source: {
            value: cdktn.stringToHclTerraform(struct!.createDynamoDbDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_exasol_data_source: {
            value: cdktn.stringToHclTerraform(struct!.createExasolDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_file_data_source: {
            value: cdktn.stringToHclTerraform(struct!.createFileDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_git_hub_data_source: {
            value: cdktn.stringToHclTerraform(struct!.createGitHubDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_google_analytics_data_source: {
            value: cdktn.stringToHclTerraform(struct!.createGoogleAnalyticsDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_google_big_query_data_source: {
            value: cdktn.stringToHclTerraform(struct!.createGoogleBigQueryDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_google_sheets_data_source: {
            value: cdktn.stringToHclTerraform(struct!.createGoogleSheetsDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_impala_data_source: {
            value: cdktn.stringToHclTerraform(struct!.createImpalaDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_jira_data_source: {
            value: cdktn.stringToHclTerraform(struct!.createJiraDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_maria_db_data_source: {
            value: cdktn.stringToHclTerraform(struct!.createMariaDbDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_mongo_atlas_data_source: {
            value: cdktn.stringToHclTerraform(struct!.createMongoAtlasDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_mongo_db_data_source: {
            value: cdktn.stringToHclTerraform(struct!.createMongoDbDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_my_sql_data_source: {
            value: cdktn.stringToHclTerraform(struct!.createMySqlDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_open_search_data_source: {
            value: cdktn.stringToHclTerraform(struct!.createOpenSearchDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_oracle_data_source: {
            value: cdktn.stringToHclTerraform(struct!.createOracleDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_pay_pal_data_source: {
            value: cdktn.stringToHclTerraform(struct!.createPayPalDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_postgre_sql_data_source: {
            value: cdktn.stringToHclTerraform(struct!.createPostgreSqlDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_presto_data_source: {
            value: cdktn.stringToHclTerraform(struct!.createPrestoDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_radiant_data_source: {
            value: cdktn.stringToHclTerraform(struct!.createRadiantDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_rds_data_source: {
            value: cdktn.stringToHclTerraform(struct!.createRdsDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_redshift_auto_discovered_data_source: {
            value: cdktn.stringToHclTerraform(struct!.createRedshiftAutoDiscoveredDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_redshift_manual_data_source: {
            value: cdktn.stringToHclTerraform(struct!.createRedshiftManualDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_s3_analytics_data_source: {
            value: cdktn.stringToHclTerraform(struct!.createS3AnalyticsDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_s3_data_source: {
            value: cdktn.stringToHclTerraform(struct!.createS3DataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_s3_tables_data_source: {
            value: cdktn.stringToHclTerraform(struct!.createS3TablesDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_salesforce_data_source: {
            value: cdktn.stringToHclTerraform(struct!.createSalesforceDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_sap_hana_data_source: {
            value: cdktn.stringToHclTerraform(struct!.createSapHanaDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_service_now_data_source: {
            value: cdktn.stringToHclTerraform(struct!.createServiceNowDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_shared_folders: {
            value: cdktn.stringToHclTerraform(struct!.createSharedFolders),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_snowflake_data_source: {
            value: cdktn.stringToHclTerraform(struct!.createSnowflakeDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_spaces: {
            value: cdktn.stringToHclTerraform(struct!.createSpaces),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_spark_data_source: {
            value: cdktn.stringToHclTerraform(struct!.createSparkDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_spice_dataset: {
            value: cdktn.stringToHclTerraform(struct!.createSpiceDataset),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_sql_server_data_source: {
            value: cdktn.stringToHclTerraform(struct!.createSqlServerDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_square_data_source: {
            value: cdktn.stringToHclTerraform(struct!.createSquareDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_starburst_data_source: {
            value: cdktn.stringToHclTerraform(struct!.createStarburstDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_teradata_data_source: {
            value: cdktn.stringToHclTerraform(struct!.createTeradataDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_timestream_data_source: {
            value: cdktn.stringToHclTerraform(struct!.createTimestreamDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_trino_data_source: {
            value: cdktn.stringToHclTerraform(struct!.createTrinoDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        create_twitter_data_source: {
            value: cdktn.stringToHclTerraform(struct!.createTwitterDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        dashboard: {
            value: cdktn.stringToHclTerraform(struct!.dashboard),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        databricks_data_source: {
            value: cdktn.stringToHclTerraform(struct!.databricksDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        db_2_data_source: {
            value: cdktn.stringToHclTerraform(struct!.db2DataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        denodo_data_source: {
            value: cdktn.stringToHclTerraform(struct!.denodoDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        document_db_data_source: {
            value: cdktn.stringToHclTerraform(struct!.documentDbDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        dremio_data_source: {
            value: cdktn.stringToHclTerraform(struct!.dremioDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        dynamo_db_data_source: {
            value: cdktn.stringToHclTerraform(struct!.dynamoDbDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        edit_visual_with_q: {
            value: cdktn.stringToHclTerraform(struct!.editVisualWithQ),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        exasol_data_source: {
            value: cdktn.stringToHclTerraform(struct!.exasolDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        export_to_csv: {
            value: cdktn.stringToHclTerraform(struct!.exportToCsv),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        export_to_csv_in_scheduled_reports: {
            value: cdktn.stringToHclTerraform(struct!.exportToCsvInScheduledReports),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        export_to_excel: {
            value: cdktn.stringToHclTerraform(struct!.exportToExcel),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        export_to_excel_in_scheduled_reports: {
            value: cdktn.stringToHclTerraform(struct!.exportToExcelInScheduledReports),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        export_to_pdf: {
            value: cdktn.stringToHclTerraform(struct!.exportToPdf),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        export_to_pdf_in_scheduled_reports: {
            value: cdktn.stringToHclTerraform(struct!.exportToPdfInScheduledReports),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        extension: {
            value: cdktn.stringToHclTerraform(struct!.extension),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        fact_set_action: {
            value: cdktn.stringToHclTerraform(struct!.factSetAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        file_data_source: {
            value: cdktn.stringToHclTerraform(struct!.fileDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        flow: {
            value: cdktn.stringToHclTerraform(struct!.flow),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        generic_http_action: {
            value: cdktn.stringToHclTerraform(struct!.genericHttpAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        git_hub_data_source: {
            value: cdktn.stringToHclTerraform(struct!.gitHubDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        github_action: {
            value: cdktn.stringToHclTerraform(struct!.githubAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        google_analytics_data_source: {
            value: cdktn.stringToHclTerraform(struct!.googleAnalyticsDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        google_big_query_data_source: {
            value: cdktn.stringToHclTerraform(struct!.googleBigQueryDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        google_calendar_action: {
            value: cdktn.stringToHclTerraform(struct!.googleCalendarAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        google_drive_knowledge_base: {
            value: cdktn.stringToHclTerraform(struct!.googleDriveKnowledgeBase),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        google_sheets_data_source: {
            value: cdktn.stringToHclTerraform(struct!.googleSheetsDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        hubspot_action: {
            value: cdktn.stringToHclTerraform(struct!.hubspotAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        hugging_face_action: {
            value: cdktn.stringToHclTerraform(struct!.huggingFaceAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        idc_knowledge_base: {
            value: cdktn.stringToHclTerraform(struct!.idcKnowledgeBase),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        impala_data_source: {
            value: cdktn.stringToHclTerraform(struct!.impalaDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        inbound_email_trigger: {
            value: cdktn.stringToHclTerraform(struct!.inboundEmailTrigger),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        include_content_in_scheduled_reports_email: {
            value: cdktn.stringToHclTerraform(struct!.includeContentInScheduledReportsEmail),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        intercom_action: {
            value: cdktn.stringToHclTerraform(struct!.intercomAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        invoke_apps_ai_inference: {
            value: cdktn.stringToHclTerraform(struct!.invokeAppsAiInference),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        jira_action: {
            value: cdktn.stringToHclTerraform(struct!.jiraAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        jira_data_source: {
            value: cdktn.stringToHclTerraform(struct!.jiraDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        knowledge_base: {
            value: cdktn.stringToHclTerraform(struct!.knowledgeBase),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        linear_action: {
            value: cdktn.stringToHclTerraform(struct!.linearAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        manage_shared_folders: {
            value: cdktn.stringToHclTerraform(struct!.manageSharedFolders),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        maria_db_data_source: {
            value: cdktn.stringToHclTerraform(struct!.mariaDbDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        mcp_action: {
            value: cdktn.stringToHclTerraform(struct!.mcpAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        monday_action: {
            value: cdktn.stringToHclTerraform(struct!.mondayAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        mongo_atlas_data_source: {
            value: cdktn.stringToHclTerraform(struct!.mongoAtlasDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        mongo_db_data_source: {
            value: cdktn.stringToHclTerraform(struct!.mongoDbDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ms_exchange_action: {
            value: cdktn.stringToHclTerraform(struct!.msExchangeAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ms_teams_action: {
            value: cdktn.stringToHclTerraform(struct!.msTeamsAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        my_sql_data_source: {
            value: cdktn.stringToHclTerraform(struct!.mySqlDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        new_relic_action: {
            value: cdktn.stringToHclTerraform(struct!.newRelicAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        notion_action: {
            value: cdktn.stringToHclTerraform(struct!.notionAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        one_drive_action: {
            value: cdktn.stringToHclTerraform(struct!.oneDriveAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        one_drive_knowledge_base: {
            value: cdktn.stringToHclTerraform(struct!.oneDriveKnowledgeBase),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        open_api_action: {
            value: cdktn.stringToHclTerraform(struct!.openApiAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        open_search_data_source: {
            value: cdktn.stringToHclTerraform(struct!.openSearchDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        oracle_data_source: {
            value: cdktn.stringToHclTerraform(struct!.oracleDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        pager_duty_action: {
            value: cdktn.stringToHclTerraform(struct!.pagerDutyAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        pay_pal_data_source: {
            value: cdktn.stringToHclTerraform(struct!.payPalDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        perform_flow_ui_task: {
            value: cdktn.stringToHclTerraform(struct!.performFlowUiTask),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        postgre_sql_data_source: {
            value: cdktn.stringToHclTerraform(struct!.postgreSqlDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        presto_data_source: {
            value: cdktn.stringToHclTerraform(struct!.prestoDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        print_reports: {
            value: cdktn.stringToHclTerraform(struct!.printReports),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        publish_without_approval: {
            value: cdktn.stringToHclTerraform(struct!.publishWithoutApproval),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        q_business_knowledge_base: {
            value: cdktn.stringToHclTerraform(struct!.qBusinessKnowledgeBase),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        quick_event_trigger: {
            value: cdktn.stringToHclTerraform(struct!.quickEventTrigger),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        radiant_data_source: {
            value: cdktn.stringToHclTerraform(struct!.radiantDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        rds_data_source: {
            value: cdktn.stringToHclTerraform(struct!.rdsDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        redshift_auto_discovered_data_source: {
            value: cdktn.stringToHclTerraform(struct!.redshiftAutoDiscoveredDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        redshift_manual_data_source: {
            value: cdktn.stringToHclTerraform(struct!.redshiftManualDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        rename_shared_folders: {
            value: cdktn.stringToHclTerraform(struct!.renameSharedFolders),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        research: {
            value: cdktn.stringToHclTerraform(struct!.research),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_analytics_data_source: {
            value: cdktn.stringToHclTerraform(struct!.s3AnalyticsDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_data_source: {
            value: cdktn.stringToHclTerraform(struct!.s3DataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_knowledge_base: {
            value: cdktn.stringToHclTerraform(struct!.s3KnowledgeBase),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_tables_data_source: {
            value: cdktn.stringToHclTerraform(struct!.s3TablesDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        salesforce_action: {
            value: cdktn.stringToHclTerraform(struct!.salesforceAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        salesforce_data_source: {
            value: cdktn.stringToHclTerraform(struct!.salesforceDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sand_p_global_energy_action: {
            value: cdktn.stringToHclTerraform(struct!.sandPGlobalEnergyAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sand_pgmi_action: {
            value: cdktn.stringToHclTerraform(struct!.sandPgmiAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sap_bill_of_material_action: {
            value: cdktn.stringToHclTerraform(struct!.sapBillOfMaterialAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sap_business_partner_action: {
            value: cdktn.stringToHclTerraform(struct!.sapBusinessPartnerAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sap_hana_data_source: {
            value: cdktn.stringToHclTerraform(struct!.sapHanaDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sap_material_stock_action: {
            value: cdktn.stringToHclTerraform(struct!.sapMaterialStockAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sap_physical_inventory_action: {
            value: cdktn.stringToHclTerraform(struct!.sapPhysicalInventoryAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sap_product_master_data_action: {
            value: cdktn.stringToHclTerraform(struct!.sapProductMasterDataAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        schedule_trigger: {
            value: cdktn.stringToHclTerraform(struct!.scheduleTrigger),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        service_now_action: {
            value: cdktn.stringToHclTerraform(struct!.serviceNowAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        service_now_data_source: {
            value: cdktn.stringToHclTerraform(struct!.serviceNowDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_adobe_analytics_data_source: {
            value: cdktn.stringToHclTerraform(struct!.shareAdobeAnalyticsDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_amazon_bedrock_ars_action: {
            value: cdktn.stringToHclTerraform(struct!.shareAmazonBedrockArsAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_amazon_bedrock_fs_action: {
            value: cdktn.stringToHclTerraform(struct!.shareAmazonBedrockFsAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_amazon_bedrock_krs_action: {
            value: cdktn.stringToHclTerraform(struct!.shareAmazonBedrockKrsAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_amazon_s_three_action: {
            value: cdktn.stringToHclTerraform(struct!.shareAmazonSThreeAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_analyses: {
            value: cdktn.stringToHclTerraform(struct!.shareAnalyses),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_apps: {
            value: cdktn.stringToHclTerraform(struct!.shareApps),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_asana_action: {
            value: cdktn.stringToHclTerraform(struct!.shareAsanaAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_athena_data_source: {
            value: cdktn.stringToHclTerraform(struct!.shareAthenaDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_aurora_data_source: {
            value: cdktn.stringToHclTerraform(struct!.shareAuroraDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_bamboo_hr_action: {
            value: cdktn.stringToHclTerraform(struct!.shareBambooHrAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_bedrock_managed_knowledge_base: {
            value: cdktn.stringToHclTerraform(struct!.shareBedrockManagedKnowledgeBase),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_box_agent_action: {
            value: cdktn.stringToHclTerraform(struct!.shareBoxAgentAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_box_knowledge_base: {
            value: cdktn.stringToHclTerraform(struct!.shareBoxKnowledgeBase),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_canva_agent_action: {
            value: cdktn.stringToHclTerraform(struct!.shareCanvaAgentAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_chat_agents: {
            value: cdktn.stringToHclTerraform(struct!.shareChatAgents),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_comprehend_action: {
            value: cdktn.stringToHclTerraform(struct!.shareComprehendAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_comprehend_medical_action: {
            value: cdktn.stringToHclTerraform(struct!.shareComprehendMedicalAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_confluence_action: {
            value: cdktn.stringToHclTerraform(struct!.shareConfluenceAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_confluence_knowledge_base: {
            value: cdktn.stringToHclTerraform(struct!.shareConfluenceKnowledgeBase),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_dashboards: {
            value: cdktn.stringToHclTerraform(struct!.shareDashboards),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_data_sources: {
            value: cdktn.stringToHclTerraform(struct!.shareDataSources),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_databricks_data_source: {
            value: cdktn.stringToHclTerraform(struct!.shareDatabricksDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_datasets: {
            value: cdktn.stringToHclTerraform(struct!.shareDatasets),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_db_2_data_source: {
            value: cdktn.stringToHclTerraform(struct!.shareDb2DataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_denodo_data_source: {
            value: cdktn.stringToHclTerraform(struct!.shareDenodoDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_document_db_data_source: {
            value: cdktn.stringToHclTerraform(struct!.shareDocumentDbDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_dremio_data_source: {
            value: cdktn.stringToHclTerraform(struct!.shareDremioDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_dynamo_db_data_source: {
            value: cdktn.stringToHclTerraform(struct!.shareDynamoDbDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_exasol_data_source: {
            value: cdktn.stringToHclTerraform(struct!.shareExasolDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_fact_set_action: {
            value: cdktn.stringToHclTerraform(struct!.shareFactSetAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_file_data_source: {
            value: cdktn.stringToHclTerraform(struct!.shareFileDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_generic_http_action: {
            value: cdktn.stringToHclTerraform(struct!.shareGenericHttpAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_git_hub_data_source: {
            value: cdktn.stringToHclTerraform(struct!.shareGitHubDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_github_action: {
            value: cdktn.stringToHclTerraform(struct!.shareGithubAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_google_analytics_data_source: {
            value: cdktn.stringToHclTerraform(struct!.shareGoogleAnalyticsDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_google_big_query_data_source: {
            value: cdktn.stringToHclTerraform(struct!.shareGoogleBigQueryDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_google_calendar_action: {
            value: cdktn.stringToHclTerraform(struct!.shareGoogleCalendarAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_google_drive_knowledge_base: {
            value: cdktn.stringToHclTerraform(struct!.shareGoogleDriveKnowledgeBase),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_google_sheets_data_source: {
            value: cdktn.stringToHclTerraform(struct!.shareGoogleSheetsDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_hubspot_action: {
            value: cdktn.stringToHclTerraform(struct!.shareHubspotAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_hugging_face_action: {
            value: cdktn.stringToHclTerraform(struct!.shareHuggingFaceAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_idc_knowledge_base: {
            value: cdktn.stringToHclTerraform(struct!.shareIdcKnowledgeBase),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_impala_data_source: {
            value: cdktn.stringToHclTerraform(struct!.shareImpalaDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_intercom_action: {
            value: cdktn.stringToHclTerraform(struct!.shareIntercomAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_jira_action: {
            value: cdktn.stringToHclTerraform(struct!.shareJiraAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_jira_data_source: {
            value: cdktn.stringToHclTerraform(struct!.shareJiraDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_knowledge_bases: {
            value: cdktn.stringToHclTerraform(struct!.shareKnowledgeBases),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_linear_action: {
            value: cdktn.stringToHclTerraform(struct!.shareLinearAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_maria_db_data_source: {
            value: cdktn.stringToHclTerraform(struct!.shareMariaDbDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_mcp_action: {
            value: cdktn.stringToHclTerraform(struct!.shareMcpAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_monday_action: {
            value: cdktn.stringToHclTerraform(struct!.shareMondayAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_mongo_atlas_data_source: {
            value: cdktn.stringToHclTerraform(struct!.shareMongoAtlasDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_mongo_db_data_source: {
            value: cdktn.stringToHclTerraform(struct!.shareMongoDbDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_ms_exchange_action: {
            value: cdktn.stringToHclTerraform(struct!.shareMsExchangeAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_ms_teams_action: {
            value: cdktn.stringToHclTerraform(struct!.shareMsTeamsAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_my_sql_data_source: {
            value: cdktn.stringToHclTerraform(struct!.shareMySqlDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_new_relic_action: {
            value: cdktn.stringToHclTerraform(struct!.shareNewRelicAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_notion_action: {
            value: cdktn.stringToHclTerraform(struct!.shareNotionAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_one_drive_action: {
            value: cdktn.stringToHclTerraform(struct!.shareOneDriveAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_one_drive_knowledge_base: {
            value: cdktn.stringToHclTerraform(struct!.shareOneDriveKnowledgeBase),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_open_api_action: {
            value: cdktn.stringToHclTerraform(struct!.shareOpenApiAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_open_search_data_source: {
            value: cdktn.stringToHclTerraform(struct!.shareOpenSearchDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_oracle_data_source: {
            value: cdktn.stringToHclTerraform(struct!.shareOracleDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_pager_duty_action: {
            value: cdktn.stringToHclTerraform(struct!.sharePagerDutyAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_pay_pal_data_source: {
            value: cdktn.stringToHclTerraform(struct!.sharePayPalDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_point_action: {
            value: cdktn.stringToHclTerraform(struct!.sharePointAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_point_knowledge_base: {
            value: cdktn.stringToHclTerraform(struct!.sharePointKnowledgeBase),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_postgre_sql_data_source: {
            value: cdktn.stringToHclTerraform(struct!.sharePostgreSqlDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_presto_data_source: {
            value: cdktn.stringToHclTerraform(struct!.sharePrestoDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_q_business_knowledge_base: {
            value: cdktn.stringToHclTerraform(struct!.shareQBusinessKnowledgeBase),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_radiant_data_source: {
            value: cdktn.stringToHclTerraform(struct!.shareRadiantDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_rds_data_source: {
            value: cdktn.stringToHclTerraform(struct!.shareRdsDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_redshift_auto_discovered_data_source: {
            value: cdktn.stringToHclTerraform(struct!.shareRedshiftAutoDiscoveredDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_redshift_manual_data_source: {
            value: cdktn.stringToHclTerraform(struct!.shareRedshiftManualDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_s3_analytics_data_source: {
            value: cdktn.stringToHclTerraform(struct!.shareS3AnalyticsDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_s3_data_source: {
            value: cdktn.stringToHclTerraform(struct!.shareS3DataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_s3_knowledge_base: {
            value: cdktn.stringToHclTerraform(struct!.shareS3KnowledgeBase),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_s3_tables_data_source: {
            value: cdktn.stringToHclTerraform(struct!.shareS3TablesDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_salesforce_action: {
            value: cdktn.stringToHclTerraform(struct!.shareSalesforceAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_salesforce_data_source: {
            value: cdktn.stringToHclTerraform(struct!.shareSalesforceDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_sand_p_global_energy_action: {
            value: cdktn.stringToHclTerraform(struct!.shareSandPGlobalEnergyAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_sand_pgmi_action: {
            value: cdktn.stringToHclTerraform(struct!.shareSandPgmiAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_sap_bill_of_material_action: {
            value: cdktn.stringToHclTerraform(struct!.shareSapBillOfMaterialAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_sap_business_partner_action: {
            value: cdktn.stringToHclTerraform(struct!.shareSapBusinessPartnerAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_sap_hana_data_source: {
            value: cdktn.stringToHclTerraform(struct!.shareSapHanaDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_sap_material_stock_action: {
            value: cdktn.stringToHclTerraform(struct!.shareSapMaterialStockAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_sap_physical_inventory_action: {
            value: cdktn.stringToHclTerraform(struct!.shareSapPhysicalInventoryAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_sap_product_master_data_action: {
            value: cdktn.stringToHclTerraform(struct!.shareSapProductMasterDataAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_service_now_action: {
            value: cdktn.stringToHclTerraform(struct!.shareServiceNowAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_service_now_data_source: {
            value: cdktn.stringToHclTerraform(struct!.shareServiceNowDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_share_point_action: {
            value: cdktn.stringToHclTerraform(struct!.shareSharePointAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_share_point_knowledge_base: {
            value: cdktn.stringToHclTerraform(struct!.shareSharePointKnowledgeBase),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_slack_action: {
            value: cdktn.stringToHclTerraform(struct!.shareSlackAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_smartsheet_action: {
            value: cdktn.stringToHclTerraform(struct!.shareSmartsheetAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_snowflake_data_source: {
            value: cdktn.stringToHclTerraform(struct!.shareSnowflakeDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_spaces: {
            value: cdktn.stringToHclTerraform(struct!.shareSpaces),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_spark_data_source: {
            value: cdktn.stringToHclTerraform(struct!.shareSparkDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_sql_server_data_source: {
            value: cdktn.stringToHclTerraform(struct!.shareSqlServerDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_square_data_source: {
            value: cdktn.stringToHclTerraform(struct!.shareSquareDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_starburst_data_source: {
            value: cdktn.stringToHclTerraform(struct!.shareStarburstDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_teradata_data_source: {
            value: cdktn.stringToHclTerraform(struct!.shareTeradataDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_textract_action: {
            value: cdktn.stringToHclTerraform(struct!.shareTextractAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_timestream_data_source: {
            value: cdktn.stringToHclTerraform(struct!.shareTimestreamDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_trino_data_source: {
            value: cdktn.stringToHclTerraform(struct!.shareTrinoDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_twitter_data_source: {
            value: cdktn.stringToHclTerraform(struct!.shareTwitterDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_web_crawler_knowledge_base: {
            value: cdktn.stringToHclTerraform(struct!.shareWebCrawlerKnowledgeBase),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        share_zendesk_action: {
            value: cdktn.stringToHclTerraform(struct!.shareZendeskAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        slack_action: {
            value: cdktn.stringToHclTerraform(struct!.slackAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        smartsheet_action: {
            value: cdktn.stringToHclTerraform(struct!.smartsheetAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        snowflake_data_source: {
            value: cdktn.stringToHclTerraform(struct!.snowflakeDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        space: {
            value: cdktn.stringToHclTerraform(struct!.space),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        spark_data_source: {
            value: cdktn.stringToHclTerraform(struct!.sparkDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sql_server_data_source: {
            value: cdktn.stringToHclTerraform(struct!.sqlServerDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        square_data_source: {
            value: cdktn.stringToHclTerraform(struct!.squareDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        starburst_data_source: {
            value: cdktn.stringToHclTerraform(struct!.starburstDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        subscribe_dashboard_email_reports: {
            value: cdktn.stringToHclTerraform(struct!.subscribeDashboardEmailReports),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        teradata_data_source: {
            value: cdktn.stringToHclTerraform(struct!.teradataDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        textract_action: {
            value: cdktn.stringToHclTerraform(struct!.textractAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        timestream_data_source: {
            value: cdktn.stringToHclTerraform(struct!.timestreamDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        topic: {
            value: cdktn.stringToHclTerraform(struct!.topic),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        trigger: {
            value: cdktn.stringToHclTerraform(struct!.trigger),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        trino_data_source: {
            value: cdktn.stringToHclTerraform(struct!.trinoDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        twitter_data_source: {
            value: cdktn.stringToHclTerraform(struct!.twitterDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        update_adobe_analytics_data_source: {
            value: cdktn.stringToHclTerraform(struct!.updateAdobeAnalyticsDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        update_athena_data_source: {
            value: cdktn.stringToHclTerraform(struct!.updateAthenaDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        update_aurora_data_source: {
            value: cdktn.stringToHclTerraform(struct!.updateAuroraDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        update_databricks_data_source: {
            value: cdktn.stringToHclTerraform(struct!.updateDatabricksDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        update_db_2_data_source: {
            value: cdktn.stringToHclTerraform(struct!.updateDb2DataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        update_denodo_data_source: {
            value: cdktn.stringToHclTerraform(struct!.updateDenodoDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        update_document_db_data_source: {
            value: cdktn.stringToHclTerraform(struct!.updateDocumentDbDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        update_dremio_data_source: {
            value: cdktn.stringToHclTerraform(struct!.updateDremioDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        update_dynamo_db_data_source: {
            value: cdktn.stringToHclTerraform(struct!.updateDynamoDbDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        update_exasol_data_source: {
            value: cdktn.stringToHclTerraform(struct!.updateExasolDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        update_file_data_source: {
            value: cdktn.stringToHclTerraform(struct!.updateFileDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        update_git_hub_data_source: {
            value: cdktn.stringToHclTerraform(struct!.updateGitHubDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        update_google_analytics_data_source: {
            value: cdktn.stringToHclTerraform(struct!.updateGoogleAnalyticsDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        update_google_big_query_data_source: {
            value: cdktn.stringToHclTerraform(struct!.updateGoogleBigQueryDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        update_google_sheets_data_source: {
            value: cdktn.stringToHclTerraform(struct!.updateGoogleSheetsDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        update_impala_data_source: {
            value: cdktn.stringToHclTerraform(struct!.updateImpalaDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        update_jira_data_source: {
            value: cdktn.stringToHclTerraform(struct!.updateJiraDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        update_maria_db_data_source: {
            value: cdktn.stringToHclTerraform(struct!.updateMariaDbDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        update_mongo_atlas_data_source: {
            value: cdktn.stringToHclTerraform(struct!.updateMongoAtlasDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        update_mongo_db_data_source: {
            value: cdktn.stringToHclTerraform(struct!.updateMongoDbDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        update_my_sql_data_source: {
            value: cdktn.stringToHclTerraform(struct!.updateMySqlDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        update_open_search_data_source: {
            value: cdktn.stringToHclTerraform(struct!.updateOpenSearchDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        update_oracle_data_source: {
            value: cdktn.stringToHclTerraform(struct!.updateOracleDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        update_pay_pal_data_source: {
            value: cdktn.stringToHclTerraform(struct!.updatePayPalDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        update_postgre_sql_data_source: {
            value: cdktn.stringToHclTerraform(struct!.updatePostgreSqlDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        update_presto_data_source: {
            value: cdktn.stringToHclTerraform(struct!.updatePrestoDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        update_radiant_data_source: {
            value: cdktn.stringToHclTerraform(struct!.updateRadiantDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        update_rds_data_source: {
            value: cdktn.stringToHclTerraform(struct!.updateRdsDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        update_redshift_auto_discovered_data_source: {
            value: cdktn.stringToHclTerraform(struct!.updateRedshiftAutoDiscoveredDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        update_redshift_manual_data_source: {
            value: cdktn.stringToHclTerraform(struct!.updateRedshiftManualDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        update_s3_analytics_data_source: {
            value: cdktn.stringToHclTerraform(struct!.updateS3AnalyticsDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        update_s3_data_source: {
            value: cdktn.stringToHclTerraform(struct!.updateS3DataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        update_s3_tables_data_source: {
            value: cdktn.stringToHclTerraform(struct!.updateS3TablesDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        update_salesforce_data_source: {
            value: cdktn.stringToHclTerraform(struct!.updateSalesforceDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        update_sap_hana_data_source: {
            value: cdktn.stringToHclTerraform(struct!.updateSapHanaDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        update_service_now_data_source: {
            value: cdktn.stringToHclTerraform(struct!.updateServiceNowDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        update_snowflake_data_source: {
            value: cdktn.stringToHclTerraform(struct!.updateSnowflakeDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        update_spark_data_source: {
            value: cdktn.stringToHclTerraform(struct!.updateSparkDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        update_sql_server_data_source: {
            value: cdktn.stringToHclTerraform(struct!.updateSqlServerDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        update_square_data_source: {
            value: cdktn.stringToHclTerraform(struct!.updateSquareDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        update_starburst_data_source: {
            value: cdktn.stringToHclTerraform(struct!.updateStarburstDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        update_teradata_data_source: {
            value: cdktn.stringToHclTerraform(struct!.updateTeradataDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        update_timestream_data_source: {
            value: cdktn.stringToHclTerraform(struct!.updateTimestreamDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        update_trino_data_source: {
            value: cdktn.stringToHclTerraform(struct!.updateTrinoDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        update_twitter_data_source: {
            value: cdktn.stringToHclTerraform(struct!.updateTwitterDataSource),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        use_agent_web_search: {
            value: cdktn.stringToHclTerraform(struct!.useAgentWebSearch),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        use_amazon_bedrock_ars_action: {
            value: cdktn.stringToHclTerraform(struct!.useAmazonBedrockArsAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        use_amazon_bedrock_fs_action: {
            value: cdktn.stringToHclTerraform(struct!.useAmazonBedrockFsAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        use_amazon_bedrock_krs_action: {
            value: cdktn.stringToHclTerraform(struct!.useAmazonBedrockKrsAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        use_amazon_s_three_action: {
            value: cdktn.stringToHclTerraform(struct!.useAmazonSThreeAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        use_asana_action: {
            value: cdktn.stringToHclTerraform(struct!.useAsanaAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        use_bamboo_hr_action: {
            value: cdktn.stringToHclTerraform(struct!.useBambooHrAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        use_bedrock_managed_knowledge_base: {
            value: cdktn.stringToHclTerraform(struct!.useBedrockManagedKnowledgeBase),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        use_bedrock_models: {
            value: cdktn.stringToHclTerraform(struct!.useBedrockModels),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        use_box_agent_action: {
            value: cdktn.stringToHclTerraform(struct!.useBoxAgentAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        use_box_knowledge_base: {
            value: cdktn.stringToHclTerraform(struct!.useBoxKnowledgeBase),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        use_browser_extension: {
            value: cdktn.stringToHclTerraform(struct!.useBrowserExtension),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        use_canva_agent_action: {
            value: cdktn.stringToHclTerraform(struct!.useCanvaAgentAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        use_comprehend_action: {
            value: cdktn.stringToHclTerraform(struct!.useComprehendAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        use_comprehend_medical_action: {
            value: cdktn.stringToHclTerraform(struct!.useComprehendMedicalAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        use_confluence_action: {
            value: cdktn.stringToHclTerraform(struct!.useConfluenceAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        use_confluence_knowledge_base: {
            value: cdktn.stringToHclTerraform(struct!.useConfluenceKnowledgeBase),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        use_excel_add_in_extension: {
            value: cdktn.stringToHclTerraform(struct!.useExcelAddInExtension),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        use_fact_set_action: {
            value: cdktn.stringToHclTerraform(struct!.useFactSetAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        use_generic_http_action: {
            value: cdktn.stringToHclTerraform(struct!.useGenericHttpAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        use_github_action: {
            value: cdktn.stringToHclTerraform(struct!.useGithubAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        use_google_calendar_action: {
            value: cdktn.stringToHclTerraform(struct!.useGoogleCalendarAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        use_google_drive_knowledge_base: {
            value: cdktn.stringToHclTerraform(struct!.useGoogleDriveKnowledgeBase),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        use_hubspot_action: {
            value: cdktn.stringToHclTerraform(struct!.useHubspotAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        use_hugging_face_action: {
            value: cdktn.stringToHclTerraform(struct!.useHuggingFaceAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        use_idc_knowledge_base: {
            value: cdktn.stringToHclTerraform(struct!.useIdcKnowledgeBase),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        use_intercom_action: {
            value: cdktn.stringToHclTerraform(struct!.useIntercomAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        use_jira_action: {
            value: cdktn.stringToHclTerraform(struct!.useJiraAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        use_linear_action: {
            value: cdktn.stringToHclTerraform(struct!.useLinearAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        use_mcp_action: {
            value: cdktn.stringToHclTerraform(struct!.useMcpAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        use_monday_action: {
            value: cdktn.stringToHclTerraform(struct!.useMondayAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        use_ms_exchange_action: {
            value: cdktn.stringToHclTerraform(struct!.useMsExchangeAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        use_ms_teams_action: {
            value: cdktn.stringToHclTerraform(struct!.useMsTeamsAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        use_new_relic_action: {
            value: cdktn.stringToHclTerraform(struct!.useNewRelicAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        use_notion_action: {
            value: cdktn.stringToHclTerraform(struct!.useNotionAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        use_one_drive_action: {
            value: cdktn.stringToHclTerraform(struct!.useOneDriveAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        use_one_drive_knowledge_base: {
            value: cdktn.stringToHclTerraform(struct!.useOneDriveKnowledgeBase),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        use_open_api_action: {
            value: cdktn.stringToHclTerraform(struct!.useOpenApiAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        use_outlook_add_in_extension: {
            value: cdktn.stringToHclTerraform(struct!.useOutlookAddInExtension),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        use_pager_duty_action: {
            value: cdktn.stringToHclTerraform(struct!.usePagerDutyAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        use_powerpoint_add_in_extension: {
            value: cdktn.stringToHclTerraform(struct!.usePowerpointAddInExtension),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        use_q_business_knowledge_base: {
            value: cdktn.stringToHclTerraform(struct!.useQBusinessKnowledgeBase),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        use_s3_knowledge_base: {
            value: cdktn.stringToHclTerraform(struct!.useS3KnowledgeBase),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        use_salesforce_action: {
            value: cdktn.stringToHclTerraform(struct!.useSalesforceAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        use_sand_p_global_energy_action: {
            value: cdktn.stringToHclTerraform(struct!.useSandPGlobalEnergyAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        use_sand_pgmi_action: {
            value: cdktn.stringToHclTerraform(struct!.useSandPgmiAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        use_sap_bill_of_material_action: {
            value: cdktn.stringToHclTerraform(struct!.useSapBillOfMaterialAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        use_sap_business_partner_action: {
            value: cdktn.stringToHclTerraform(struct!.useSapBusinessPartnerAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        use_sap_material_stock_action: {
            value: cdktn.stringToHclTerraform(struct!.useSapMaterialStockAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        use_sap_physical_inventory_action: {
            value: cdktn.stringToHclTerraform(struct!.useSapPhysicalInventoryAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        use_sap_product_master_data_action: {
            value: cdktn.stringToHclTerraform(struct!.useSapProductMasterDataAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        use_service_now_action: {
            value: cdktn.stringToHclTerraform(struct!.useServiceNowAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        use_share_point_action: {
            value: cdktn.stringToHclTerraform(struct!.useSharePointAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        use_share_point_knowledge_base: {
            value: cdktn.stringToHclTerraform(struct!.useSharePointKnowledgeBase),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        use_slack_action: {
            value: cdktn.stringToHclTerraform(struct!.useSlackAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        use_smartsheet_action: {
            value: cdktn.stringToHclTerraform(struct!.useSmartsheetAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        use_textract_action: {
            value: cdktn.stringToHclTerraform(struct!.useTextractAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        use_web_crawler_knowledge_base: {
            value: cdktn.stringToHclTerraform(struct!.useWebCrawlerKnowledgeBase),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        use_word_add_in_extension: {
            value: cdktn.stringToHclTerraform(struct!.useWordAddInExtension),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        use_zendesk_action: {
            value: cdktn.stringToHclTerraform(struct!.useZendeskAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        view_account_spice_capacity: {
            value: cdktn.stringToHclTerraform(struct!.viewAccountSpiceCapacity),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        web_crawler_knowledge_base: {
            value: cdktn.stringToHclTerraform(struct!.webCrawlerKnowledgeBase),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        zendesk_action: {
            value: cdktn.stringToHclTerraform(struct!.zendeskAction),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCustomPermissionsTagPropertyToTerraform(struct?: CcCustomPermissions.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccCustomPermissionsTagPropertyToHclTerraform(struct?: CcCustomPermissions.TagProperty | cdktn.IResolvable): any {
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


export namespace CcCustomPermissions {
export interface CapabilitiesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#access_apps_native_data_store CcCustomPermissions#access_apps_native_data_store}
    */
    readonly accessAppsNativeDataStore?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#action CcCustomPermissions#action}
    */
    readonly action?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#add_or_run_anomaly_detection_for_analyses CcCustomPermissions#add_or_run_anomaly_detection_for_analyses}
    */
    readonly addOrRunAnomalyDetectionForAnalyses?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#adobe_analytics_data_source CcCustomPermissions#adobe_analytics_data_source}
    */
    readonly adobeAnalyticsDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#amazon_bedrock_ars_action CcCustomPermissions#amazon_bedrock_ars_action}
    */
    readonly amazonBedrockArsAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#amazon_bedrock_fs_action CcCustomPermissions#amazon_bedrock_fs_action}
    */
    readonly amazonBedrockFsAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#amazon_bedrock_krs_action CcCustomPermissions#amazon_bedrock_krs_action}
    */
    readonly amazonBedrockKrsAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#amazon_s_three_action CcCustomPermissions#amazon_s_three_action}
    */
    readonly amazonSThreeAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#analysis CcCustomPermissions#analysis}
    */
    readonly analysis?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#approve_flow_share_requests CcCustomPermissions#approve_flow_share_requests}
    */
    readonly approveFlowShareRequests?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#apps CcCustomPermissions#apps}
    */
    readonly apps?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#asana_action CcCustomPermissions#asana_action}
    */
    readonly asanaAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#athena_data_source CcCustomPermissions#athena_data_source}
    */
    readonly athenaDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#aurora_data_source CcCustomPermissions#aurora_data_source}
    */
    readonly auroraDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#automate CcCustomPermissions#automate}
    */
    readonly automate?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#bamboo_hr_action CcCustomPermissions#bamboo_hr_action}
    */
    readonly bambooHrAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#bedrock_managed_knowledge_base CcCustomPermissions#bedrock_managed_knowledge_base}
    */
    readonly bedrockManagedKnowledgeBase?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#box_agent_action CcCustomPermissions#box_agent_action}
    */
    readonly boxAgentAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#box_knowledge_base CcCustomPermissions#box_knowledge_base}
    */
    readonly boxKnowledgeBase?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#build_calculated_field_with_q CcCustomPermissions#build_calculated_field_with_q}
    */
    readonly buildCalculatedFieldWithQ?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#canva_agent_action CcCustomPermissions#canva_agent_action}
    */
    readonly canvaAgentAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#chat_agent CcCustomPermissions#chat_agent}
    */
    readonly chatAgent?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#comprehend_action CcCustomPermissions#comprehend_action}
    */
    readonly comprehendAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#comprehend_medical_action CcCustomPermissions#comprehend_medical_action}
    */
    readonly comprehendMedicalAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#confluence_action CcCustomPermissions#confluence_action}
    */
    readonly confluenceAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#confluence_knowledge_base CcCustomPermissions#confluence_knowledge_base}
    */
    readonly confluenceKnowledgeBase?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_adobe_analytics_data_source CcCustomPermissions#create_adobe_analytics_data_source}
    */
    readonly createAdobeAnalyticsDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_and_update_amazon_bedrock_ars_action CcCustomPermissions#create_and_update_amazon_bedrock_ars_action}
    */
    readonly createAndUpdateAmazonBedrockArsAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_and_update_amazon_bedrock_fs_action CcCustomPermissions#create_and_update_amazon_bedrock_fs_action}
    */
    readonly createAndUpdateAmazonBedrockFsAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_and_update_amazon_bedrock_krs_action CcCustomPermissions#create_and_update_amazon_bedrock_krs_action}
    */
    readonly createAndUpdateAmazonBedrockKrsAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_and_update_amazon_s_three_action CcCustomPermissions#create_and_update_amazon_s_three_action}
    */
    readonly createAndUpdateAmazonSThreeAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_and_update_apps CcCustomPermissions#create_and_update_apps}
    */
    readonly createAndUpdateApps?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_and_update_asana_action CcCustomPermissions#create_and_update_asana_action}
    */
    readonly createAndUpdateAsanaAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_and_update_bamboo_hr_action CcCustomPermissions#create_and_update_bamboo_hr_action}
    */
    readonly createAndUpdateBambooHrAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_and_update_bedrock_managed_knowledge_base CcCustomPermissions#create_and_update_bedrock_managed_knowledge_base}
    */
    readonly createAndUpdateBedrockManagedKnowledgeBase?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_and_update_box_agent_action CcCustomPermissions#create_and_update_box_agent_action}
    */
    readonly createAndUpdateBoxAgentAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_and_update_box_knowledge_base CcCustomPermissions#create_and_update_box_knowledge_base}
    */
    readonly createAndUpdateBoxKnowledgeBase?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_and_update_canva_agent_action CcCustomPermissions#create_and_update_canva_agent_action}
    */
    readonly createAndUpdateCanvaAgentAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_and_update_comprehend_action CcCustomPermissions#create_and_update_comprehend_action}
    */
    readonly createAndUpdateComprehendAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_and_update_comprehend_medical_action CcCustomPermissions#create_and_update_comprehend_medical_action}
    */
    readonly createAndUpdateComprehendMedicalAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_and_update_confluence_action CcCustomPermissions#create_and_update_confluence_action}
    */
    readonly createAndUpdateConfluenceAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_and_update_confluence_knowledge_base CcCustomPermissions#create_and_update_confluence_knowledge_base}
    */
    readonly createAndUpdateConfluenceKnowledgeBase?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_and_update_dashboard_email_reports CcCustomPermissions#create_and_update_dashboard_email_reports}
    */
    readonly createAndUpdateDashboardEmailReports?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_and_update_data_sources CcCustomPermissions#create_and_update_data_sources}
    */
    readonly createAndUpdateDataSources?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_and_update_datasets CcCustomPermissions#create_and_update_datasets}
    */
    readonly createAndUpdateDatasets?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_and_update_fact_set_action CcCustomPermissions#create_and_update_fact_set_action}
    */
    readonly createAndUpdateFactSetAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_and_update_generic_http_action CcCustomPermissions#create_and_update_generic_http_action}
    */
    readonly createAndUpdateGenericHttpAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_and_update_github_action CcCustomPermissions#create_and_update_github_action}
    */
    readonly createAndUpdateGithubAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_and_update_google_calendar_action CcCustomPermissions#create_and_update_google_calendar_action}
    */
    readonly createAndUpdateGoogleCalendarAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_and_update_google_drive_knowledge_base CcCustomPermissions#create_and_update_google_drive_knowledge_base}
    */
    readonly createAndUpdateGoogleDriveKnowledgeBase?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_and_update_hubspot_action CcCustomPermissions#create_and_update_hubspot_action}
    */
    readonly createAndUpdateHubspotAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_and_update_hugging_face_action CcCustomPermissions#create_and_update_hugging_face_action}
    */
    readonly createAndUpdateHuggingFaceAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_and_update_idc_knowledge_base CcCustomPermissions#create_and_update_idc_knowledge_base}
    */
    readonly createAndUpdateIdcKnowledgeBase?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_and_update_intercom_action CcCustomPermissions#create_and_update_intercom_action}
    */
    readonly createAndUpdateIntercomAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_and_update_jira_action CcCustomPermissions#create_and_update_jira_action}
    */
    readonly createAndUpdateJiraAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_and_update_knowledge_bases CcCustomPermissions#create_and_update_knowledge_bases}
    */
    readonly createAndUpdateKnowledgeBases?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_and_update_linear_action CcCustomPermissions#create_and_update_linear_action}
    */
    readonly createAndUpdateLinearAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_and_update_mcp_action CcCustomPermissions#create_and_update_mcp_action}
    */
    readonly createAndUpdateMcpAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_and_update_monday_action CcCustomPermissions#create_and_update_monday_action}
    */
    readonly createAndUpdateMondayAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_and_update_ms_exchange_action CcCustomPermissions#create_and_update_ms_exchange_action}
    */
    readonly createAndUpdateMsExchangeAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_and_update_ms_teams_action CcCustomPermissions#create_and_update_ms_teams_action}
    */
    readonly createAndUpdateMsTeamsAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_and_update_new_relic_action CcCustomPermissions#create_and_update_new_relic_action}
    */
    readonly createAndUpdateNewRelicAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_and_update_notion_action CcCustomPermissions#create_and_update_notion_action}
    */
    readonly createAndUpdateNotionAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_and_update_one_drive_action CcCustomPermissions#create_and_update_one_drive_action}
    */
    readonly createAndUpdateOneDriveAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_and_update_one_drive_knowledge_base CcCustomPermissions#create_and_update_one_drive_knowledge_base}
    */
    readonly createAndUpdateOneDriveKnowledgeBase?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_and_update_open_api_action CcCustomPermissions#create_and_update_open_api_action}
    */
    readonly createAndUpdateOpenApiAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_and_update_pager_duty_action CcCustomPermissions#create_and_update_pager_duty_action}
    */
    readonly createAndUpdatePagerDutyAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_and_update_q_business_knowledge_base CcCustomPermissions#create_and_update_q_business_knowledge_base}
    */
    readonly createAndUpdateQBusinessKnowledgeBase?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_and_update_s3_knowledge_base CcCustomPermissions#create_and_update_s3_knowledge_base}
    */
    readonly createAndUpdateS3KnowledgeBase?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_and_update_salesforce_action CcCustomPermissions#create_and_update_salesforce_action}
    */
    readonly createAndUpdateSalesforceAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_and_update_sand_p_global_energy_action CcCustomPermissions#create_and_update_sand_p_global_energy_action}
    */
    readonly createAndUpdateSandPGlobalEnergyAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_and_update_sand_pgmi_action CcCustomPermissions#create_and_update_sand_pgmi_action}
    */
    readonly createAndUpdateSandPgmiAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_and_update_sap_bill_of_material_action CcCustomPermissions#create_and_update_sap_bill_of_material_action}
    */
    readonly createAndUpdateSapBillOfMaterialAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_and_update_sap_business_partner_action CcCustomPermissions#create_and_update_sap_business_partner_action}
    */
    readonly createAndUpdateSapBusinessPartnerAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_and_update_sap_material_stock_action CcCustomPermissions#create_and_update_sap_material_stock_action}
    */
    readonly createAndUpdateSapMaterialStockAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_and_update_sap_physical_inventory_action CcCustomPermissions#create_and_update_sap_physical_inventory_action}
    */
    readonly createAndUpdateSapPhysicalInventoryAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_and_update_sap_product_master_data_action CcCustomPermissions#create_and_update_sap_product_master_data_action}
    */
    readonly createAndUpdateSapProductMasterDataAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_and_update_service_now_action CcCustomPermissions#create_and_update_service_now_action}
    */
    readonly createAndUpdateServiceNowAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_and_update_share_point_action CcCustomPermissions#create_and_update_share_point_action}
    */
    readonly createAndUpdateSharePointAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_and_update_share_point_knowledge_base CcCustomPermissions#create_and_update_share_point_knowledge_base}
    */
    readonly createAndUpdateSharePointKnowledgeBase?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_and_update_slack_action CcCustomPermissions#create_and_update_slack_action}
    */
    readonly createAndUpdateSlackAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_and_update_smartsheet_action CcCustomPermissions#create_and_update_smartsheet_action}
    */
    readonly createAndUpdateSmartsheetAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_and_update_textract_action CcCustomPermissions#create_and_update_textract_action}
    */
    readonly createAndUpdateTextractAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_and_update_themes CcCustomPermissions#create_and_update_themes}
    */
    readonly createAndUpdateThemes?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_and_update_threshold_alerts CcCustomPermissions#create_and_update_threshold_alerts}
    */
    readonly createAndUpdateThresholdAlerts?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_and_update_web_crawler_knowledge_base CcCustomPermissions#create_and_update_web_crawler_knowledge_base}
    */
    readonly createAndUpdateWebCrawlerKnowledgeBase?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_and_update_zendesk_action CcCustomPermissions#create_and_update_zendesk_action}
    */
    readonly createAndUpdateZendeskAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_athena_data_source CcCustomPermissions#create_athena_data_source}
    */
    readonly createAthenaDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_aurora_data_source CcCustomPermissions#create_aurora_data_source}
    */
    readonly createAuroraDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_chat_agents CcCustomPermissions#create_chat_agents}
    */
    readonly createChatAgents?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_dashboard_executive_summary_with_q CcCustomPermissions#create_dashboard_executive_summary_with_q}
    */
    readonly createDashboardExecutiveSummaryWithQ?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_databricks_data_source CcCustomPermissions#create_databricks_data_source}
    */
    readonly createDatabricksDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_db_2_data_source CcCustomPermissions#create_db_2_data_source}
    */
    readonly createDb2DataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_denodo_data_source CcCustomPermissions#create_denodo_data_source}
    */
    readonly createDenodoDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_document_db_data_source CcCustomPermissions#create_document_db_data_source}
    */
    readonly createDocumentDbDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_dremio_data_source CcCustomPermissions#create_dremio_data_source}
    */
    readonly createDremioDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_dynamo_db_data_source CcCustomPermissions#create_dynamo_db_data_source}
    */
    readonly createDynamoDbDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_exasol_data_source CcCustomPermissions#create_exasol_data_source}
    */
    readonly createExasolDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_file_data_source CcCustomPermissions#create_file_data_source}
    */
    readonly createFileDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_git_hub_data_source CcCustomPermissions#create_git_hub_data_source}
    */
    readonly createGitHubDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_google_analytics_data_source CcCustomPermissions#create_google_analytics_data_source}
    */
    readonly createGoogleAnalyticsDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_google_big_query_data_source CcCustomPermissions#create_google_big_query_data_source}
    */
    readonly createGoogleBigQueryDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_google_sheets_data_source CcCustomPermissions#create_google_sheets_data_source}
    */
    readonly createGoogleSheetsDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_impala_data_source CcCustomPermissions#create_impala_data_source}
    */
    readonly createImpalaDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_jira_data_source CcCustomPermissions#create_jira_data_source}
    */
    readonly createJiraDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_maria_db_data_source CcCustomPermissions#create_maria_db_data_source}
    */
    readonly createMariaDbDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_mongo_atlas_data_source CcCustomPermissions#create_mongo_atlas_data_source}
    */
    readonly createMongoAtlasDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_mongo_db_data_source CcCustomPermissions#create_mongo_db_data_source}
    */
    readonly createMongoDbDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_my_sql_data_source CcCustomPermissions#create_my_sql_data_source}
    */
    readonly createMySqlDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_open_search_data_source CcCustomPermissions#create_open_search_data_source}
    */
    readonly createOpenSearchDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_oracle_data_source CcCustomPermissions#create_oracle_data_source}
    */
    readonly createOracleDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_pay_pal_data_source CcCustomPermissions#create_pay_pal_data_source}
    */
    readonly createPayPalDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_postgre_sql_data_source CcCustomPermissions#create_postgre_sql_data_source}
    */
    readonly createPostgreSqlDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_presto_data_source CcCustomPermissions#create_presto_data_source}
    */
    readonly createPrestoDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_radiant_data_source CcCustomPermissions#create_radiant_data_source}
    */
    readonly createRadiantDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_rds_data_source CcCustomPermissions#create_rds_data_source}
    */
    readonly createRdsDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_redshift_auto_discovered_data_source CcCustomPermissions#create_redshift_auto_discovered_data_source}
    */
    readonly createRedshiftAutoDiscoveredDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_redshift_manual_data_source CcCustomPermissions#create_redshift_manual_data_source}
    */
    readonly createRedshiftManualDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_s3_analytics_data_source CcCustomPermissions#create_s3_analytics_data_source}
    */
    readonly createS3AnalyticsDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_s3_data_source CcCustomPermissions#create_s3_data_source}
    */
    readonly createS3DataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_s3_tables_data_source CcCustomPermissions#create_s3_tables_data_source}
    */
    readonly createS3TablesDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_salesforce_data_source CcCustomPermissions#create_salesforce_data_source}
    */
    readonly createSalesforceDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_sap_hana_data_source CcCustomPermissions#create_sap_hana_data_source}
    */
    readonly createSapHanaDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_service_now_data_source CcCustomPermissions#create_service_now_data_source}
    */
    readonly createServiceNowDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_shared_folders CcCustomPermissions#create_shared_folders}
    */
    readonly createSharedFolders?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_snowflake_data_source CcCustomPermissions#create_snowflake_data_source}
    */
    readonly createSnowflakeDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_spaces CcCustomPermissions#create_spaces}
    */
    readonly createSpaces?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_spark_data_source CcCustomPermissions#create_spark_data_source}
    */
    readonly createSparkDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_spice_dataset CcCustomPermissions#create_spice_dataset}
    */
    readonly createSpiceDataset?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_sql_server_data_source CcCustomPermissions#create_sql_server_data_source}
    */
    readonly createSqlServerDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_square_data_source CcCustomPermissions#create_square_data_source}
    */
    readonly createSquareDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_starburst_data_source CcCustomPermissions#create_starburst_data_source}
    */
    readonly createStarburstDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_teradata_data_source CcCustomPermissions#create_teradata_data_source}
    */
    readonly createTeradataDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_timestream_data_source CcCustomPermissions#create_timestream_data_source}
    */
    readonly createTimestreamDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_trino_data_source CcCustomPermissions#create_trino_data_source}
    */
    readonly createTrinoDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#create_twitter_data_source CcCustomPermissions#create_twitter_data_source}
    */
    readonly createTwitterDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#dashboard CcCustomPermissions#dashboard}
    */
    readonly dashboard?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#databricks_data_source CcCustomPermissions#databricks_data_source}
    */
    readonly databricksDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#db_2_data_source CcCustomPermissions#db_2_data_source}
    */
    readonly db2DataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#denodo_data_source CcCustomPermissions#denodo_data_source}
    */
    readonly denodoDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#document_db_data_source CcCustomPermissions#document_db_data_source}
    */
    readonly documentDbDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#dremio_data_source CcCustomPermissions#dremio_data_source}
    */
    readonly dremioDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#dynamo_db_data_source CcCustomPermissions#dynamo_db_data_source}
    */
    readonly dynamoDbDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#edit_visual_with_q CcCustomPermissions#edit_visual_with_q}
    */
    readonly editVisualWithQ?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#exasol_data_source CcCustomPermissions#exasol_data_source}
    */
    readonly exasolDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#export_to_csv CcCustomPermissions#export_to_csv}
    */
    readonly exportToCsv?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#export_to_csv_in_scheduled_reports CcCustomPermissions#export_to_csv_in_scheduled_reports}
    */
    readonly exportToCsvInScheduledReports?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#export_to_excel CcCustomPermissions#export_to_excel}
    */
    readonly exportToExcel?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#export_to_excel_in_scheduled_reports CcCustomPermissions#export_to_excel_in_scheduled_reports}
    */
    readonly exportToExcelInScheduledReports?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#export_to_pdf CcCustomPermissions#export_to_pdf}
    */
    readonly exportToPdf?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#export_to_pdf_in_scheduled_reports CcCustomPermissions#export_to_pdf_in_scheduled_reports}
    */
    readonly exportToPdfInScheduledReports?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#extension CcCustomPermissions#extension}
    */
    readonly extension?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#fact_set_action CcCustomPermissions#fact_set_action}
    */
    readonly factSetAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#file_data_source CcCustomPermissions#file_data_source}
    */
    readonly fileDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#flow CcCustomPermissions#flow}
    */
    readonly flow?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#generic_http_action CcCustomPermissions#generic_http_action}
    */
    readonly genericHttpAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#git_hub_data_source CcCustomPermissions#git_hub_data_source}
    */
    readonly gitHubDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#github_action CcCustomPermissions#github_action}
    */
    readonly githubAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#google_analytics_data_source CcCustomPermissions#google_analytics_data_source}
    */
    readonly googleAnalyticsDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#google_big_query_data_source CcCustomPermissions#google_big_query_data_source}
    */
    readonly googleBigQueryDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#google_calendar_action CcCustomPermissions#google_calendar_action}
    */
    readonly googleCalendarAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#google_drive_knowledge_base CcCustomPermissions#google_drive_knowledge_base}
    */
    readonly googleDriveKnowledgeBase?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#google_sheets_data_source CcCustomPermissions#google_sheets_data_source}
    */
    readonly googleSheetsDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#hubspot_action CcCustomPermissions#hubspot_action}
    */
    readonly hubspotAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#hugging_face_action CcCustomPermissions#hugging_face_action}
    */
    readonly huggingFaceAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#idc_knowledge_base CcCustomPermissions#idc_knowledge_base}
    */
    readonly idcKnowledgeBase?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#impala_data_source CcCustomPermissions#impala_data_source}
    */
    readonly impalaDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#inbound_email_trigger CcCustomPermissions#inbound_email_trigger}
    */
    readonly inboundEmailTrigger?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#include_content_in_scheduled_reports_email CcCustomPermissions#include_content_in_scheduled_reports_email}
    */
    readonly includeContentInScheduledReportsEmail?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#intercom_action CcCustomPermissions#intercom_action}
    */
    readonly intercomAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#invoke_apps_ai_inference CcCustomPermissions#invoke_apps_ai_inference}
    */
    readonly invokeAppsAiInference?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#jira_action CcCustomPermissions#jira_action}
    */
    readonly jiraAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#jira_data_source CcCustomPermissions#jira_data_source}
    */
    readonly jiraDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#knowledge_base CcCustomPermissions#knowledge_base}
    */
    readonly knowledgeBase?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#linear_action CcCustomPermissions#linear_action}
    */
    readonly linearAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#manage_shared_folders CcCustomPermissions#manage_shared_folders}
    */
    readonly manageSharedFolders?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#maria_db_data_source CcCustomPermissions#maria_db_data_source}
    */
    readonly mariaDbDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#mcp_action CcCustomPermissions#mcp_action}
    */
    readonly mcpAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#monday_action CcCustomPermissions#monday_action}
    */
    readonly mondayAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#mongo_atlas_data_source CcCustomPermissions#mongo_atlas_data_source}
    */
    readonly mongoAtlasDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#mongo_db_data_source CcCustomPermissions#mongo_db_data_source}
    */
    readonly mongoDbDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#ms_exchange_action CcCustomPermissions#ms_exchange_action}
    */
    readonly msExchangeAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#ms_teams_action CcCustomPermissions#ms_teams_action}
    */
    readonly msTeamsAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#my_sql_data_source CcCustomPermissions#my_sql_data_source}
    */
    readonly mySqlDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#new_relic_action CcCustomPermissions#new_relic_action}
    */
    readonly newRelicAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#notion_action CcCustomPermissions#notion_action}
    */
    readonly notionAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#one_drive_action CcCustomPermissions#one_drive_action}
    */
    readonly oneDriveAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#one_drive_knowledge_base CcCustomPermissions#one_drive_knowledge_base}
    */
    readonly oneDriveKnowledgeBase?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#open_api_action CcCustomPermissions#open_api_action}
    */
    readonly openApiAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#open_search_data_source CcCustomPermissions#open_search_data_source}
    */
    readonly openSearchDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#oracle_data_source CcCustomPermissions#oracle_data_source}
    */
    readonly oracleDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#pager_duty_action CcCustomPermissions#pager_duty_action}
    */
    readonly pagerDutyAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#pay_pal_data_source CcCustomPermissions#pay_pal_data_source}
    */
    readonly payPalDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#perform_flow_ui_task CcCustomPermissions#perform_flow_ui_task}
    */
    readonly performFlowUiTask?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#postgre_sql_data_source CcCustomPermissions#postgre_sql_data_source}
    */
    readonly postgreSqlDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#presto_data_source CcCustomPermissions#presto_data_source}
    */
    readonly prestoDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#print_reports CcCustomPermissions#print_reports}
    */
    readonly printReports?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#publish_without_approval CcCustomPermissions#publish_without_approval}
    */
    readonly publishWithoutApproval?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#q_business_knowledge_base CcCustomPermissions#q_business_knowledge_base}
    */
    readonly qBusinessKnowledgeBase?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#quick_event_trigger CcCustomPermissions#quick_event_trigger}
    */
    readonly quickEventTrigger?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#radiant_data_source CcCustomPermissions#radiant_data_source}
    */
    readonly radiantDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#rds_data_source CcCustomPermissions#rds_data_source}
    */
    readonly rdsDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#redshift_auto_discovered_data_source CcCustomPermissions#redshift_auto_discovered_data_source}
    */
    readonly redshiftAutoDiscoveredDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#redshift_manual_data_source CcCustomPermissions#redshift_manual_data_source}
    */
    readonly redshiftManualDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#rename_shared_folders CcCustomPermissions#rename_shared_folders}
    */
    readonly renameSharedFolders?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#research CcCustomPermissions#research}
    */
    readonly research?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#s3_analytics_data_source CcCustomPermissions#s3_analytics_data_source}
    */
    readonly s3AnalyticsDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#s3_data_source CcCustomPermissions#s3_data_source}
    */
    readonly s3DataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#s3_knowledge_base CcCustomPermissions#s3_knowledge_base}
    */
    readonly s3KnowledgeBase?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#s3_tables_data_source CcCustomPermissions#s3_tables_data_source}
    */
    readonly s3TablesDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#salesforce_action CcCustomPermissions#salesforce_action}
    */
    readonly salesforceAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#salesforce_data_source CcCustomPermissions#salesforce_data_source}
    */
    readonly salesforceDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#sand_p_global_energy_action CcCustomPermissions#sand_p_global_energy_action}
    */
    readonly sandPGlobalEnergyAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#sand_pgmi_action CcCustomPermissions#sand_pgmi_action}
    */
    readonly sandPgmiAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#sap_bill_of_material_action CcCustomPermissions#sap_bill_of_material_action}
    */
    readonly sapBillOfMaterialAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#sap_business_partner_action CcCustomPermissions#sap_business_partner_action}
    */
    readonly sapBusinessPartnerAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#sap_hana_data_source CcCustomPermissions#sap_hana_data_source}
    */
    readonly sapHanaDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#sap_material_stock_action CcCustomPermissions#sap_material_stock_action}
    */
    readonly sapMaterialStockAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#sap_physical_inventory_action CcCustomPermissions#sap_physical_inventory_action}
    */
    readonly sapPhysicalInventoryAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#sap_product_master_data_action CcCustomPermissions#sap_product_master_data_action}
    */
    readonly sapProductMasterDataAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#schedule_trigger CcCustomPermissions#schedule_trigger}
    */
    readonly scheduleTrigger?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#service_now_action CcCustomPermissions#service_now_action}
    */
    readonly serviceNowAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#service_now_data_source CcCustomPermissions#service_now_data_source}
    */
    readonly serviceNowDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_adobe_analytics_data_source CcCustomPermissions#share_adobe_analytics_data_source}
    */
    readonly shareAdobeAnalyticsDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_amazon_bedrock_ars_action CcCustomPermissions#share_amazon_bedrock_ars_action}
    */
    readonly shareAmazonBedrockArsAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_amazon_bedrock_fs_action CcCustomPermissions#share_amazon_bedrock_fs_action}
    */
    readonly shareAmazonBedrockFsAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_amazon_bedrock_krs_action CcCustomPermissions#share_amazon_bedrock_krs_action}
    */
    readonly shareAmazonBedrockKrsAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_amazon_s_three_action CcCustomPermissions#share_amazon_s_three_action}
    */
    readonly shareAmazonSThreeAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_analyses CcCustomPermissions#share_analyses}
    */
    readonly shareAnalyses?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_apps CcCustomPermissions#share_apps}
    */
    readonly shareApps?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_asana_action CcCustomPermissions#share_asana_action}
    */
    readonly shareAsanaAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_athena_data_source CcCustomPermissions#share_athena_data_source}
    */
    readonly shareAthenaDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_aurora_data_source CcCustomPermissions#share_aurora_data_source}
    */
    readonly shareAuroraDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_bamboo_hr_action CcCustomPermissions#share_bamboo_hr_action}
    */
    readonly shareBambooHrAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_bedrock_managed_knowledge_base CcCustomPermissions#share_bedrock_managed_knowledge_base}
    */
    readonly shareBedrockManagedKnowledgeBase?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_box_agent_action CcCustomPermissions#share_box_agent_action}
    */
    readonly shareBoxAgentAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_box_knowledge_base CcCustomPermissions#share_box_knowledge_base}
    */
    readonly shareBoxKnowledgeBase?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_canva_agent_action CcCustomPermissions#share_canva_agent_action}
    */
    readonly shareCanvaAgentAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_chat_agents CcCustomPermissions#share_chat_agents}
    */
    readonly shareChatAgents?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_comprehend_action CcCustomPermissions#share_comprehend_action}
    */
    readonly shareComprehendAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_comprehend_medical_action CcCustomPermissions#share_comprehend_medical_action}
    */
    readonly shareComprehendMedicalAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_confluence_action CcCustomPermissions#share_confluence_action}
    */
    readonly shareConfluenceAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_confluence_knowledge_base CcCustomPermissions#share_confluence_knowledge_base}
    */
    readonly shareConfluenceKnowledgeBase?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_dashboards CcCustomPermissions#share_dashboards}
    */
    readonly shareDashboards?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_data_sources CcCustomPermissions#share_data_sources}
    */
    readonly shareDataSources?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_databricks_data_source CcCustomPermissions#share_databricks_data_source}
    */
    readonly shareDatabricksDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_datasets CcCustomPermissions#share_datasets}
    */
    readonly shareDatasets?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_db_2_data_source CcCustomPermissions#share_db_2_data_source}
    */
    readonly shareDb2DataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_denodo_data_source CcCustomPermissions#share_denodo_data_source}
    */
    readonly shareDenodoDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_document_db_data_source CcCustomPermissions#share_document_db_data_source}
    */
    readonly shareDocumentDbDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_dremio_data_source CcCustomPermissions#share_dremio_data_source}
    */
    readonly shareDremioDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_dynamo_db_data_source CcCustomPermissions#share_dynamo_db_data_source}
    */
    readonly shareDynamoDbDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_exasol_data_source CcCustomPermissions#share_exasol_data_source}
    */
    readonly shareExasolDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_fact_set_action CcCustomPermissions#share_fact_set_action}
    */
    readonly shareFactSetAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_file_data_source CcCustomPermissions#share_file_data_source}
    */
    readonly shareFileDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_generic_http_action CcCustomPermissions#share_generic_http_action}
    */
    readonly shareGenericHttpAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_git_hub_data_source CcCustomPermissions#share_git_hub_data_source}
    */
    readonly shareGitHubDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_github_action CcCustomPermissions#share_github_action}
    */
    readonly shareGithubAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_google_analytics_data_source CcCustomPermissions#share_google_analytics_data_source}
    */
    readonly shareGoogleAnalyticsDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_google_big_query_data_source CcCustomPermissions#share_google_big_query_data_source}
    */
    readonly shareGoogleBigQueryDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_google_calendar_action CcCustomPermissions#share_google_calendar_action}
    */
    readonly shareGoogleCalendarAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_google_drive_knowledge_base CcCustomPermissions#share_google_drive_knowledge_base}
    */
    readonly shareGoogleDriveKnowledgeBase?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_google_sheets_data_source CcCustomPermissions#share_google_sheets_data_source}
    */
    readonly shareGoogleSheetsDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_hubspot_action CcCustomPermissions#share_hubspot_action}
    */
    readonly shareHubspotAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_hugging_face_action CcCustomPermissions#share_hugging_face_action}
    */
    readonly shareHuggingFaceAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_idc_knowledge_base CcCustomPermissions#share_idc_knowledge_base}
    */
    readonly shareIdcKnowledgeBase?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_impala_data_source CcCustomPermissions#share_impala_data_source}
    */
    readonly shareImpalaDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_intercom_action CcCustomPermissions#share_intercom_action}
    */
    readonly shareIntercomAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_jira_action CcCustomPermissions#share_jira_action}
    */
    readonly shareJiraAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_jira_data_source CcCustomPermissions#share_jira_data_source}
    */
    readonly shareJiraDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_knowledge_bases CcCustomPermissions#share_knowledge_bases}
    */
    readonly shareKnowledgeBases?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_linear_action CcCustomPermissions#share_linear_action}
    */
    readonly shareLinearAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_maria_db_data_source CcCustomPermissions#share_maria_db_data_source}
    */
    readonly shareMariaDbDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_mcp_action CcCustomPermissions#share_mcp_action}
    */
    readonly shareMcpAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_monday_action CcCustomPermissions#share_monday_action}
    */
    readonly shareMondayAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_mongo_atlas_data_source CcCustomPermissions#share_mongo_atlas_data_source}
    */
    readonly shareMongoAtlasDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_mongo_db_data_source CcCustomPermissions#share_mongo_db_data_source}
    */
    readonly shareMongoDbDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_ms_exchange_action CcCustomPermissions#share_ms_exchange_action}
    */
    readonly shareMsExchangeAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_ms_teams_action CcCustomPermissions#share_ms_teams_action}
    */
    readonly shareMsTeamsAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_my_sql_data_source CcCustomPermissions#share_my_sql_data_source}
    */
    readonly shareMySqlDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_new_relic_action CcCustomPermissions#share_new_relic_action}
    */
    readonly shareNewRelicAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_notion_action CcCustomPermissions#share_notion_action}
    */
    readonly shareNotionAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_one_drive_action CcCustomPermissions#share_one_drive_action}
    */
    readonly shareOneDriveAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_one_drive_knowledge_base CcCustomPermissions#share_one_drive_knowledge_base}
    */
    readonly shareOneDriveKnowledgeBase?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_open_api_action CcCustomPermissions#share_open_api_action}
    */
    readonly shareOpenApiAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_open_search_data_source CcCustomPermissions#share_open_search_data_source}
    */
    readonly shareOpenSearchDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_oracle_data_source CcCustomPermissions#share_oracle_data_source}
    */
    readonly shareOracleDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_pager_duty_action CcCustomPermissions#share_pager_duty_action}
    */
    readonly sharePagerDutyAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_pay_pal_data_source CcCustomPermissions#share_pay_pal_data_source}
    */
    readonly sharePayPalDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_point_action CcCustomPermissions#share_point_action}
    */
    readonly sharePointAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_point_knowledge_base CcCustomPermissions#share_point_knowledge_base}
    */
    readonly sharePointKnowledgeBase?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_postgre_sql_data_source CcCustomPermissions#share_postgre_sql_data_source}
    */
    readonly sharePostgreSqlDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_presto_data_source CcCustomPermissions#share_presto_data_source}
    */
    readonly sharePrestoDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_q_business_knowledge_base CcCustomPermissions#share_q_business_knowledge_base}
    */
    readonly shareQBusinessKnowledgeBase?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_radiant_data_source CcCustomPermissions#share_radiant_data_source}
    */
    readonly shareRadiantDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_rds_data_source CcCustomPermissions#share_rds_data_source}
    */
    readonly shareRdsDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_redshift_auto_discovered_data_source CcCustomPermissions#share_redshift_auto_discovered_data_source}
    */
    readonly shareRedshiftAutoDiscoveredDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_redshift_manual_data_source CcCustomPermissions#share_redshift_manual_data_source}
    */
    readonly shareRedshiftManualDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_s3_analytics_data_source CcCustomPermissions#share_s3_analytics_data_source}
    */
    readonly shareS3AnalyticsDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_s3_data_source CcCustomPermissions#share_s3_data_source}
    */
    readonly shareS3DataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_s3_knowledge_base CcCustomPermissions#share_s3_knowledge_base}
    */
    readonly shareS3KnowledgeBase?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_s3_tables_data_source CcCustomPermissions#share_s3_tables_data_source}
    */
    readonly shareS3TablesDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_salesforce_action CcCustomPermissions#share_salesforce_action}
    */
    readonly shareSalesforceAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_salesforce_data_source CcCustomPermissions#share_salesforce_data_source}
    */
    readonly shareSalesforceDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_sand_p_global_energy_action CcCustomPermissions#share_sand_p_global_energy_action}
    */
    readonly shareSandPGlobalEnergyAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_sand_pgmi_action CcCustomPermissions#share_sand_pgmi_action}
    */
    readonly shareSandPgmiAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_sap_bill_of_material_action CcCustomPermissions#share_sap_bill_of_material_action}
    */
    readonly shareSapBillOfMaterialAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_sap_business_partner_action CcCustomPermissions#share_sap_business_partner_action}
    */
    readonly shareSapBusinessPartnerAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_sap_hana_data_source CcCustomPermissions#share_sap_hana_data_source}
    */
    readonly shareSapHanaDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_sap_material_stock_action CcCustomPermissions#share_sap_material_stock_action}
    */
    readonly shareSapMaterialStockAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_sap_physical_inventory_action CcCustomPermissions#share_sap_physical_inventory_action}
    */
    readonly shareSapPhysicalInventoryAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_sap_product_master_data_action CcCustomPermissions#share_sap_product_master_data_action}
    */
    readonly shareSapProductMasterDataAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_service_now_action CcCustomPermissions#share_service_now_action}
    */
    readonly shareServiceNowAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_service_now_data_source CcCustomPermissions#share_service_now_data_source}
    */
    readonly shareServiceNowDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_share_point_action CcCustomPermissions#share_share_point_action}
    */
    readonly shareSharePointAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_share_point_knowledge_base CcCustomPermissions#share_share_point_knowledge_base}
    */
    readonly shareSharePointKnowledgeBase?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_slack_action CcCustomPermissions#share_slack_action}
    */
    readonly shareSlackAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_smartsheet_action CcCustomPermissions#share_smartsheet_action}
    */
    readonly shareSmartsheetAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_snowflake_data_source CcCustomPermissions#share_snowflake_data_source}
    */
    readonly shareSnowflakeDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_spaces CcCustomPermissions#share_spaces}
    */
    readonly shareSpaces?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_spark_data_source CcCustomPermissions#share_spark_data_source}
    */
    readonly shareSparkDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_sql_server_data_source CcCustomPermissions#share_sql_server_data_source}
    */
    readonly shareSqlServerDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_square_data_source CcCustomPermissions#share_square_data_source}
    */
    readonly shareSquareDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_starburst_data_source CcCustomPermissions#share_starburst_data_source}
    */
    readonly shareStarburstDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_teradata_data_source CcCustomPermissions#share_teradata_data_source}
    */
    readonly shareTeradataDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_textract_action CcCustomPermissions#share_textract_action}
    */
    readonly shareTextractAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_timestream_data_source CcCustomPermissions#share_timestream_data_source}
    */
    readonly shareTimestreamDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_trino_data_source CcCustomPermissions#share_trino_data_source}
    */
    readonly shareTrinoDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_twitter_data_source CcCustomPermissions#share_twitter_data_source}
    */
    readonly shareTwitterDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_web_crawler_knowledge_base CcCustomPermissions#share_web_crawler_knowledge_base}
    */
    readonly shareWebCrawlerKnowledgeBase?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#share_zendesk_action CcCustomPermissions#share_zendesk_action}
    */
    readonly shareZendeskAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#slack_action CcCustomPermissions#slack_action}
    */
    readonly slackAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#smartsheet_action CcCustomPermissions#smartsheet_action}
    */
    readonly smartsheetAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#snowflake_data_source CcCustomPermissions#snowflake_data_source}
    */
    readonly snowflakeDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#space CcCustomPermissions#space}
    */
    readonly space?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#spark_data_source CcCustomPermissions#spark_data_source}
    */
    readonly sparkDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#sql_server_data_source CcCustomPermissions#sql_server_data_source}
    */
    readonly sqlServerDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#square_data_source CcCustomPermissions#square_data_source}
    */
    readonly squareDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#starburst_data_source CcCustomPermissions#starburst_data_source}
    */
    readonly starburstDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#subscribe_dashboard_email_reports CcCustomPermissions#subscribe_dashboard_email_reports}
    */
    readonly subscribeDashboardEmailReports?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#teradata_data_source CcCustomPermissions#teradata_data_source}
    */
    readonly teradataDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#textract_action CcCustomPermissions#textract_action}
    */
    readonly textractAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#timestream_data_source CcCustomPermissions#timestream_data_source}
    */
    readonly timestreamDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#topic CcCustomPermissions#topic}
    */
    readonly topic?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#trigger CcCustomPermissions#trigger}
    */
    readonly trigger?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#trino_data_source CcCustomPermissions#trino_data_source}
    */
    readonly trinoDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#twitter_data_source CcCustomPermissions#twitter_data_source}
    */
    readonly twitterDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#update_adobe_analytics_data_source CcCustomPermissions#update_adobe_analytics_data_source}
    */
    readonly updateAdobeAnalyticsDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#update_athena_data_source CcCustomPermissions#update_athena_data_source}
    */
    readonly updateAthenaDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#update_aurora_data_source CcCustomPermissions#update_aurora_data_source}
    */
    readonly updateAuroraDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#update_databricks_data_source CcCustomPermissions#update_databricks_data_source}
    */
    readonly updateDatabricksDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#update_db_2_data_source CcCustomPermissions#update_db_2_data_source}
    */
    readonly updateDb2DataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#update_denodo_data_source CcCustomPermissions#update_denodo_data_source}
    */
    readonly updateDenodoDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#update_document_db_data_source CcCustomPermissions#update_document_db_data_source}
    */
    readonly updateDocumentDbDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#update_dremio_data_source CcCustomPermissions#update_dremio_data_source}
    */
    readonly updateDremioDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#update_dynamo_db_data_source CcCustomPermissions#update_dynamo_db_data_source}
    */
    readonly updateDynamoDbDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#update_exasol_data_source CcCustomPermissions#update_exasol_data_source}
    */
    readonly updateExasolDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#update_file_data_source CcCustomPermissions#update_file_data_source}
    */
    readonly updateFileDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#update_git_hub_data_source CcCustomPermissions#update_git_hub_data_source}
    */
    readonly updateGitHubDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#update_google_analytics_data_source CcCustomPermissions#update_google_analytics_data_source}
    */
    readonly updateGoogleAnalyticsDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#update_google_big_query_data_source CcCustomPermissions#update_google_big_query_data_source}
    */
    readonly updateGoogleBigQueryDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#update_google_sheets_data_source CcCustomPermissions#update_google_sheets_data_source}
    */
    readonly updateGoogleSheetsDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#update_impala_data_source CcCustomPermissions#update_impala_data_source}
    */
    readonly updateImpalaDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#update_jira_data_source CcCustomPermissions#update_jira_data_source}
    */
    readonly updateJiraDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#update_maria_db_data_source CcCustomPermissions#update_maria_db_data_source}
    */
    readonly updateMariaDbDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#update_mongo_atlas_data_source CcCustomPermissions#update_mongo_atlas_data_source}
    */
    readonly updateMongoAtlasDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#update_mongo_db_data_source CcCustomPermissions#update_mongo_db_data_source}
    */
    readonly updateMongoDbDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#update_my_sql_data_source CcCustomPermissions#update_my_sql_data_source}
    */
    readonly updateMySqlDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#update_open_search_data_source CcCustomPermissions#update_open_search_data_source}
    */
    readonly updateOpenSearchDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#update_oracle_data_source CcCustomPermissions#update_oracle_data_source}
    */
    readonly updateOracleDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#update_pay_pal_data_source CcCustomPermissions#update_pay_pal_data_source}
    */
    readonly updatePayPalDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#update_postgre_sql_data_source CcCustomPermissions#update_postgre_sql_data_source}
    */
    readonly updatePostgreSqlDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#update_presto_data_source CcCustomPermissions#update_presto_data_source}
    */
    readonly updatePrestoDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#update_radiant_data_source CcCustomPermissions#update_radiant_data_source}
    */
    readonly updateRadiantDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#update_rds_data_source CcCustomPermissions#update_rds_data_source}
    */
    readonly updateRdsDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#update_redshift_auto_discovered_data_source CcCustomPermissions#update_redshift_auto_discovered_data_source}
    */
    readonly updateRedshiftAutoDiscoveredDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#update_redshift_manual_data_source CcCustomPermissions#update_redshift_manual_data_source}
    */
    readonly updateRedshiftManualDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#update_s3_analytics_data_source CcCustomPermissions#update_s3_analytics_data_source}
    */
    readonly updateS3AnalyticsDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#update_s3_data_source CcCustomPermissions#update_s3_data_source}
    */
    readonly updateS3DataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#update_s3_tables_data_source CcCustomPermissions#update_s3_tables_data_source}
    */
    readonly updateS3TablesDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#update_salesforce_data_source CcCustomPermissions#update_salesforce_data_source}
    */
    readonly updateSalesforceDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#update_sap_hana_data_source CcCustomPermissions#update_sap_hana_data_source}
    */
    readonly updateSapHanaDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#update_service_now_data_source CcCustomPermissions#update_service_now_data_source}
    */
    readonly updateServiceNowDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#update_snowflake_data_source CcCustomPermissions#update_snowflake_data_source}
    */
    readonly updateSnowflakeDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#update_spark_data_source CcCustomPermissions#update_spark_data_source}
    */
    readonly updateSparkDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#update_sql_server_data_source CcCustomPermissions#update_sql_server_data_source}
    */
    readonly updateSqlServerDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#update_square_data_source CcCustomPermissions#update_square_data_source}
    */
    readonly updateSquareDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#update_starburst_data_source CcCustomPermissions#update_starburst_data_source}
    */
    readonly updateStarburstDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#update_teradata_data_source CcCustomPermissions#update_teradata_data_source}
    */
    readonly updateTeradataDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#update_timestream_data_source CcCustomPermissions#update_timestream_data_source}
    */
    readonly updateTimestreamDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#update_trino_data_source CcCustomPermissions#update_trino_data_source}
    */
    readonly updateTrinoDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#update_twitter_data_source CcCustomPermissions#update_twitter_data_source}
    */
    readonly updateTwitterDataSource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#use_agent_web_search CcCustomPermissions#use_agent_web_search}
    */
    readonly useAgentWebSearch?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#use_amazon_bedrock_ars_action CcCustomPermissions#use_amazon_bedrock_ars_action}
    */
    readonly useAmazonBedrockArsAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#use_amazon_bedrock_fs_action CcCustomPermissions#use_amazon_bedrock_fs_action}
    */
    readonly useAmazonBedrockFsAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#use_amazon_bedrock_krs_action CcCustomPermissions#use_amazon_bedrock_krs_action}
    */
    readonly useAmazonBedrockKrsAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#use_amazon_s_three_action CcCustomPermissions#use_amazon_s_three_action}
    */
    readonly useAmazonSThreeAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#use_asana_action CcCustomPermissions#use_asana_action}
    */
    readonly useAsanaAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#use_bamboo_hr_action CcCustomPermissions#use_bamboo_hr_action}
    */
    readonly useBambooHrAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#use_bedrock_managed_knowledge_base CcCustomPermissions#use_bedrock_managed_knowledge_base}
    */
    readonly useBedrockManagedKnowledgeBase?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#use_bedrock_models CcCustomPermissions#use_bedrock_models}
    */
    readonly useBedrockModels?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#use_box_agent_action CcCustomPermissions#use_box_agent_action}
    */
    readonly useBoxAgentAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#use_box_knowledge_base CcCustomPermissions#use_box_knowledge_base}
    */
    readonly useBoxKnowledgeBase?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#use_browser_extension CcCustomPermissions#use_browser_extension}
    */
    readonly useBrowserExtension?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#use_canva_agent_action CcCustomPermissions#use_canva_agent_action}
    */
    readonly useCanvaAgentAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#use_comprehend_action CcCustomPermissions#use_comprehend_action}
    */
    readonly useComprehendAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#use_comprehend_medical_action CcCustomPermissions#use_comprehend_medical_action}
    */
    readonly useComprehendMedicalAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#use_confluence_action CcCustomPermissions#use_confluence_action}
    */
    readonly useConfluenceAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#use_confluence_knowledge_base CcCustomPermissions#use_confluence_knowledge_base}
    */
    readonly useConfluenceKnowledgeBase?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#use_excel_add_in_extension CcCustomPermissions#use_excel_add_in_extension}
    */
    readonly useExcelAddInExtension?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#use_fact_set_action CcCustomPermissions#use_fact_set_action}
    */
    readonly useFactSetAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#use_generic_http_action CcCustomPermissions#use_generic_http_action}
    */
    readonly useGenericHttpAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#use_github_action CcCustomPermissions#use_github_action}
    */
    readonly useGithubAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#use_google_calendar_action CcCustomPermissions#use_google_calendar_action}
    */
    readonly useGoogleCalendarAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#use_google_drive_knowledge_base CcCustomPermissions#use_google_drive_knowledge_base}
    */
    readonly useGoogleDriveKnowledgeBase?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#use_hubspot_action CcCustomPermissions#use_hubspot_action}
    */
    readonly useHubspotAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#use_hugging_face_action CcCustomPermissions#use_hugging_face_action}
    */
    readonly useHuggingFaceAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#use_idc_knowledge_base CcCustomPermissions#use_idc_knowledge_base}
    */
    readonly useIdcKnowledgeBase?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#use_intercom_action CcCustomPermissions#use_intercom_action}
    */
    readonly useIntercomAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#use_jira_action CcCustomPermissions#use_jira_action}
    */
    readonly useJiraAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#use_linear_action CcCustomPermissions#use_linear_action}
    */
    readonly useLinearAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#use_mcp_action CcCustomPermissions#use_mcp_action}
    */
    readonly useMcpAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#use_monday_action CcCustomPermissions#use_monday_action}
    */
    readonly useMondayAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#use_ms_exchange_action CcCustomPermissions#use_ms_exchange_action}
    */
    readonly useMsExchangeAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#use_ms_teams_action CcCustomPermissions#use_ms_teams_action}
    */
    readonly useMsTeamsAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#use_new_relic_action CcCustomPermissions#use_new_relic_action}
    */
    readonly useNewRelicAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#use_notion_action CcCustomPermissions#use_notion_action}
    */
    readonly useNotionAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#use_one_drive_action CcCustomPermissions#use_one_drive_action}
    */
    readonly useOneDriveAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#use_one_drive_knowledge_base CcCustomPermissions#use_one_drive_knowledge_base}
    */
    readonly useOneDriveKnowledgeBase?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#use_open_api_action CcCustomPermissions#use_open_api_action}
    */
    readonly useOpenApiAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#use_outlook_add_in_extension CcCustomPermissions#use_outlook_add_in_extension}
    */
    readonly useOutlookAddInExtension?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#use_pager_duty_action CcCustomPermissions#use_pager_duty_action}
    */
    readonly usePagerDutyAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#use_powerpoint_add_in_extension CcCustomPermissions#use_powerpoint_add_in_extension}
    */
    readonly usePowerpointAddInExtension?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#use_q_business_knowledge_base CcCustomPermissions#use_q_business_knowledge_base}
    */
    readonly useQBusinessKnowledgeBase?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#use_s3_knowledge_base CcCustomPermissions#use_s3_knowledge_base}
    */
    readonly useS3KnowledgeBase?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#use_salesforce_action CcCustomPermissions#use_salesforce_action}
    */
    readonly useSalesforceAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#use_sand_p_global_energy_action CcCustomPermissions#use_sand_p_global_energy_action}
    */
    readonly useSandPGlobalEnergyAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#use_sand_pgmi_action CcCustomPermissions#use_sand_pgmi_action}
    */
    readonly useSandPgmiAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#use_sap_bill_of_material_action CcCustomPermissions#use_sap_bill_of_material_action}
    */
    readonly useSapBillOfMaterialAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#use_sap_business_partner_action CcCustomPermissions#use_sap_business_partner_action}
    */
    readonly useSapBusinessPartnerAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#use_sap_material_stock_action CcCustomPermissions#use_sap_material_stock_action}
    */
    readonly useSapMaterialStockAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#use_sap_physical_inventory_action CcCustomPermissions#use_sap_physical_inventory_action}
    */
    readonly useSapPhysicalInventoryAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#use_sap_product_master_data_action CcCustomPermissions#use_sap_product_master_data_action}
    */
    readonly useSapProductMasterDataAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#use_service_now_action CcCustomPermissions#use_service_now_action}
    */
    readonly useServiceNowAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#use_share_point_action CcCustomPermissions#use_share_point_action}
    */
    readonly useSharePointAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#use_share_point_knowledge_base CcCustomPermissions#use_share_point_knowledge_base}
    */
    readonly useSharePointKnowledgeBase?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#use_slack_action CcCustomPermissions#use_slack_action}
    */
    readonly useSlackAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#use_smartsheet_action CcCustomPermissions#use_smartsheet_action}
    */
    readonly useSmartsheetAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#use_textract_action CcCustomPermissions#use_textract_action}
    */
    readonly useTextractAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#use_web_crawler_knowledge_base CcCustomPermissions#use_web_crawler_knowledge_base}
    */
    readonly useWebCrawlerKnowledgeBase?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#use_word_add_in_extension CcCustomPermissions#use_word_add_in_extension}
    */
    readonly useWordAddInExtension?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#use_zendesk_action CcCustomPermissions#use_zendesk_action}
    */
    readonly useZendeskAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#view_account_spice_capacity CcCustomPermissions#view_account_spice_capacity}
    */
    readonly viewAccountSpiceCapacity?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#web_crawler_knowledge_base CcCustomPermissions#web_crawler_knowledge_base}
    */
    readonly webCrawlerKnowledgeBase?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#zendesk_action CcCustomPermissions#zendesk_action}
    */
    readonly zendeskAction?: string;
}
export class CapabilitiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CapabilitiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._accessAppsNativeDataStore !== undefined) {
            hasAnyValues = true;
            internalValueResult.accessAppsNativeDataStore = this._accessAppsNativeDataStore;
        }
        if (this._action !== undefined) {
            hasAnyValues = true;
            internalValueResult.action = this._action;
        }
        if (this._addOrRunAnomalyDetectionForAnalyses !== undefined) {
            hasAnyValues = true;
            internalValueResult.addOrRunAnomalyDetectionForAnalyses = this._addOrRunAnomalyDetectionForAnalyses;
        }
        if (this._adobeAnalyticsDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.adobeAnalyticsDataSource = this._adobeAnalyticsDataSource;
        }
        if (this._amazonBedrockArsAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.amazonBedrockArsAction = this._amazonBedrockArsAction;
        }
        if (this._amazonBedrockFsAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.amazonBedrockFsAction = this._amazonBedrockFsAction;
        }
        if (this._amazonBedrockKrsAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.amazonBedrockKrsAction = this._amazonBedrockKrsAction;
        }
        if (this._amazonSThreeAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.amazonSThreeAction = this._amazonSThreeAction;
        }
        if (this._analysis !== undefined) {
            hasAnyValues = true;
            internalValueResult.analysis = this._analysis;
        }
        if (this._approveFlowShareRequests !== undefined) {
            hasAnyValues = true;
            internalValueResult.approveFlowShareRequests = this._approveFlowShareRequests;
        }
        if (this._apps !== undefined) {
            hasAnyValues = true;
            internalValueResult.apps = this._apps;
        }
        if (this._asanaAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.asanaAction = this._asanaAction;
        }
        if (this._athenaDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.athenaDataSource = this._athenaDataSource;
        }
        if (this._auroraDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.auroraDataSource = this._auroraDataSource;
        }
        if (this._automate !== undefined) {
            hasAnyValues = true;
            internalValueResult.automate = this._automate;
        }
        if (this._bambooHrAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.bambooHrAction = this._bambooHrAction;
        }
        if (this._bedrockManagedKnowledgeBase !== undefined) {
            hasAnyValues = true;
            internalValueResult.bedrockManagedKnowledgeBase = this._bedrockManagedKnowledgeBase;
        }
        if (this._boxAgentAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.boxAgentAction = this._boxAgentAction;
        }
        if (this._boxKnowledgeBase !== undefined) {
            hasAnyValues = true;
            internalValueResult.boxKnowledgeBase = this._boxKnowledgeBase;
        }
        if (this._buildCalculatedFieldWithQ !== undefined) {
            hasAnyValues = true;
            internalValueResult.buildCalculatedFieldWithQ = this._buildCalculatedFieldWithQ;
        }
        if (this._canvaAgentAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.canvaAgentAction = this._canvaAgentAction;
        }
        if (this._chatAgent !== undefined) {
            hasAnyValues = true;
            internalValueResult.chatAgent = this._chatAgent;
        }
        if (this._comprehendAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.comprehendAction = this._comprehendAction;
        }
        if (this._comprehendMedicalAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.comprehendMedicalAction = this._comprehendMedicalAction;
        }
        if (this._confluenceAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.confluenceAction = this._confluenceAction;
        }
        if (this._confluenceKnowledgeBase !== undefined) {
            hasAnyValues = true;
            internalValueResult.confluenceKnowledgeBase = this._confluenceKnowledgeBase;
        }
        if (this._createAdobeAnalyticsDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.createAdobeAnalyticsDataSource = this._createAdobeAnalyticsDataSource;
        }
        if (this._createAndUpdateAmazonBedrockArsAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.createAndUpdateAmazonBedrockArsAction = this._createAndUpdateAmazonBedrockArsAction;
        }
        if (this._createAndUpdateAmazonBedrockFsAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.createAndUpdateAmazonBedrockFsAction = this._createAndUpdateAmazonBedrockFsAction;
        }
        if (this._createAndUpdateAmazonBedrockKrsAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.createAndUpdateAmazonBedrockKrsAction = this._createAndUpdateAmazonBedrockKrsAction;
        }
        if (this._createAndUpdateAmazonSThreeAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.createAndUpdateAmazonSThreeAction = this._createAndUpdateAmazonSThreeAction;
        }
        if (this._createAndUpdateApps !== undefined) {
            hasAnyValues = true;
            internalValueResult.createAndUpdateApps = this._createAndUpdateApps;
        }
        if (this._createAndUpdateAsanaAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.createAndUpdateAsanaAction = this._createAndUpdateAsanaAction;
        }
        if (this._createAndUpdateBambooHrAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.createAndUpdateBambooHrAction = this._createAndUpdateBambooHrAction;
        }
        if (this._createAndUpdateBedrockManagedKnowledgeBase !== undefined) {
            hasAnyValues = true;
            internalValueResult.createAndUpdateBedrockManagedKnowledgeBase = this._createAndUpdateBedrockManagedKnowledgeBase;
        }
        if (this._createAndUpdateBoxAgentAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.createAndUpdateBoxAgentAction = this._createAndUpdateBoxAgentAction;
        }
        if (this._createAndUpdateBoxKnowledgeBase !== undefined) {
            hasAnyValues = true;
            internalValueResult.createAndUpdateBoxKnowledgeBase = this._createAndUpdateBoxKnowledgeBase;
        }
        if (this._createAndUpdateCanvaAgentAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.createAndUpdateCanvaAgentAction = this._createAndUpdateCanvaAgentAction;
        }
        if (this._createAndUpdateComprehendAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.createAndUpdateComprehendAction = this._createAndUpdateComprehendAction;
        }
        if (this._createAndUpdateComprehendMedicalAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.createAndUpdateComprehendMedicalAction = this._createAndUpdateComprehendMedicalAction;
        }
        if (this._createAndUpdateConfluenceAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.createAndUpdateConfluenceAction = this._createAndUpdateConfluenceAction;
        }
        if (this._createAndUpdateConfluenceKnowledgeBase !== undefined) {
            hasAnyValues = true;
            internalValueResult.createAndUpdateConfluenceKnowledgeBase = this._createAndUpdateConfluenceKnowledgeBase;
        }
        if (this._createAndUpdateDashboardEmailReports !== undefined) {
            hasAnyValues = true;
            internalValueResult.createAndUpdateDashboardEmailReports = this._createAndUpdateDashboardEmailReports;
        }
        if (this._createAndUpdateDataSources !== undefined) {
            hasAnyValues = true;
            internalValueResult.createAndUpdateDataSources = this._createAndUpdateDataSources;
        }
        if (this._createAndUpdateDatasets !== undefined) {
            hasAnyValues = true;
            internalValueResult.createAndUpdateDatasets = this._createAndUpdateDatasets;
        }
        if (this._createAndUpdateFactSetAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.createAndUpdateFactSetAction = this._createAndUpdateFactSetAction;
        }
        if (this._createAndUpdateGenericHttpAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.createAndUpdateGenericHttpAction = this._createAndUpdateGenericHttpAction;
        }
        if (this._createAndUpdateGithubAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.createAndUpdateGithubAction = this._createAndUpdateGithubAction;
        }
        if (this._createAndUpdateGoogleCalendarAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.createAndUpdateGoogleCalendarAction = this._createAndUpdateGoogleCalendarAction;
        }
        if (this._createAndUpdateGoogleDriveKnowledgeBase !== undefined) {
            hasAnyValues = true;
            internalValueResult.createAndUpdateGoogleDriveKnowledgeBase = this._createAndUpdateGoogleDriveKnowledgeBase;
        }
        if (this._createAndUpdateHubspotAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.createAndUpdateHubspotAction = this._createAndUpdateHubspotAction;
        }
        if (this._createAndUpdateHuggingFaceAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.createAndUpdateHuggingFaceAction = this._createAndUpdateHuggingFaceAction;
        }
        if (this._createAndUpdateIdcKnowledgeBase !== undefined) {
            hasAnyValues = true;
            internalValueResult.createAndUpdateIdcKnowledgeBase = this._createAndUpdateIdcKnowledgeBase;
        }
        if (this._createAndUpdateIntercomAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.createAndUpdateIntercomAction = this._createAndUpdateIntercomAction;
        }
        if (this._createAndUpdateJiraAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.createAndUpdateJiraAction = this._createAndUpdateJiraAction;
        }
        if (this._createAndUpdateKnowledgeBases !== undefined) {
            hasAnyValues = true;
            internalValueResult.createAndUpdateKnowledgeBases = this._createAndUpdateKnowledgeBases;
        }
        if (this._createAndUpdateLinearAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.createAndUpdateLinearAction = this._createAndUpdateLinearAction;
        }
        if (this._createAndUpdateMcpAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.createAndUpdateMcpAction = this._createAndUpdateMcpAction;
        }
        if (this._createAndUpdateMondayAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.createAndUpdateMondayAction = this._createAndUpdateMondayAction;
        }
        if (this._createAndUpdateMsExchangeAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.createAndUpdateMsExchangeAction = this._createAndUpdateMsExchangeAction;
        }
        if (this._createAndUpdateMsTeamsAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.createAndUpdateMsTeamsAction = this._createAndUpdateMsTeamsAction;
        }
        if (this._createAndUpdateNewRelicAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.createAndUpdateNewRelicAction = this._createAndUpdateNewRelicAction;
        }
        if (this._createAndUpdateNotionAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.createAndUpdateNotionAction = this._createAndUpdateNotionAction;
        }
        if (this._createAndUpdateOneDriveAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.createAndUpdateOneDriveAction = this._createAndUpdateOneDriveAction;
        }
        if (this._createAndUpdateOneDriveKnowledgeBase !== undefined) {
            hasAnyValues = true;
            internalValueResult.createAndUpdateOneDriveKnowledgeBase = this._createAndUpdateOneDriveKnowledgeBase;
        }
        if (this._createAndUpdateOpenApiAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.createAndUpdateOpenApiAction = this._createAndUpdateOpenApiAction;
        }
        if (this._createAndUpdatePagerDutyAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.createAndUpdatePagerDutyAction = this._createAndUpdatePagerDutyAction;
        }
        if (this._createAndUpdateQBusinessKnowledgeBase !== undefined) {
            hasAnyValues = true;
            internalValueResult.createAndUpdateQBusinessKnowledgeBase = this._createAndUpdateQBusinessKnowledgeBase;
        }
        if (this._createAndUpdateS3KnowledgeBase !== undefined) {
            hasAnyValues = true;
            internalValueResult.createAndUpdateS3KnowledgeBase = this._createAndUpdateS3KnowledgeBase;
        }
        if (this._createAndUpdateSalesforceAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.createAndUpdateSalesforceAction = this._createAndUpdateSalesforceAction;
        }
        if (this._createAndUpdateSandPGlobalEnergyAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.createAndUpdateSandPGlobalEnergyAction = this._createAndUpdateSandPGlobalEnergyAction;
        }
        if (this._createAndUpdateSandPgmiAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.createAndUpdateSandPgmiAction = this._createAndUpdateSandPgmiAction;
        }
        if (this._createAndUpdateSapBillOfMaterialAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.createAndUpdateSapBillOfMaterialAction = this._createAndUpdateSapBillOfMaterialAction;
        }
        if (this._createAndUpdateSapBusinessPartnerAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.createAndUpdateSapBusinessPartnerAction = this._createAndUpdateSapBusinessPartnerAction;
        }
        if (this._createAndUpdateSapMaterialStockAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.createAndUpdateSapMaterialStockAction = this._createAndUpdateSapMaterialStockAction;
        }
        if (this._createAndUpdateSapPhysicalInventoryAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.createAndUpdateSapPhysicalInventoryAction = this._createAndUpdateSapPhysicalInventoryAction;
        }
        if (this._createAndUpdateSapProductMasterDataAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.createAndUpdateSapProductMasterDataAction = this._createAndUpdateSapProductMasterDataAction;
        }
        if (this._createAndUpdateServiceNowAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.createAndUpdateServiceNowAction = this._createAndUpdateServiceNowAction;
        }
        if (this._createAndUpdateSharePointAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.createAndUpdateSharePointAction = this._createAndUpdateSharePointAction;
        }
        if (this._createAndUpdateSharePointKnowledgeBase !== undefined) {
            hasAnyValues = true;
            internalValueResult.createAndUpdateSharePointKnowledgeBase = this._createAndUpdateSharePointKnowledgeBase;
        }
        if (this._createAndUpdateSlackAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.createAndUpdateSlackAction = this._createAndUpdateSlackAction;
        }
        if (this._createAndUpdateSmartsheetAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.createAndUpdateSmartsheetAction = this._createAndUpdateSmartsheetAction;
        }
        if (this._createAndUpdateTextractAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.createAndUpdateTextractAction = this._createAndUpdateTextractAction;
        }
        if (this._createAndUpdateThemes !== undefined) {
            hasAnyValues = true;
            internalValueResult.createAndUpdateThemes = this._createAndUpdateThemes;
        }
        if (this._createAndUpdateThresholdAlerts !== undefined) {
            hasAnyValues = true;
            internalValueResult.createAndUpdateThresholdAlerts = this._createAndUpdateThresholdAlerts;
        }
        if (this._createAndUpdateWebCrawlerKnowledgeBase !== undefined) {
            hasAnyValues = true;
            internalValueResult.createAndUpdateWebCrawlerKnowledgeBase = this._createAndUpdateWebCrawlerKnowledgeBase;
        }
        if (this._createAndUpdateZendeskAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.createAndUpdateZendeskAction = this._createAndUpdateZendeskAction;
        }
        if (this._createAthenaDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.createAthenaDataSource = this._createAthenaDataSource;
        }
        if (this._createAuroraDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.createAuroraDataSource = this._createAuroraDataSource;
        }
        if (this._createChatAgents !== undefined) {
            hasAnyValues = true;
            internalValueResult.createChatAgents = this._createChatAgents;
        }
        if (this._createDashboardExecutiveSummaryWithQ !== undefined) {
            hasAnyValues = true;
            internalValueResult.createDashboardExecutiveSummaryWithQ = this._createDashboardExecutiveSummaryWithQ;
        }
        if (this._createDatabricksDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.createDatabricksDataSource = this._createDatabricksDataSource;
        }
        if (this._createDb2DataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.createDb2DataSource = this._createDb2DataSource;
        }
        if (this._createDenodoDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.createDenodoDataSource = this._createDenodoDataSource;
        }
        if (this._createDocumentDbDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.createDocumentDbDataSource = this._createDocumentDbDataSource;
        }
        if (this._createDremioDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.createDremioDataSource = this._createDremioDataSource;
        }
        if (this._createDynamoDbDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.createDynamoDbDataSource = this._createDynamoDbDataSource;
        }
        if (this._createExasolDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.createExasolDataSource = this._createExasolDataSource;
        }
        if (this._createFileDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.createFileDataSource = this._createFileDataSource;
        }
        if (this._createGitHubDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.createGitHubDataSource = this._createGitHubDataSource;
        }
        if (this._createGoogleAnalyticsDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.createGoogleAnalyticsDataSource = this._createGoogleAnalyticsDataSource;
        }
        if (this._createGoogleBigQueryDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.createGoogleBigQueryDataSource = this._createGoogleBigQueryDataSource;
        }
        if (this._createGoogleSheetsDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.createGoogleSheetsDataSource = this._createGoogleSheetsDataSource;
        }
        if (this._createImpalaDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.createImpalaDataSource = this._createImpalaDataSource;
        }
        if (this._createJiraDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.createJiraDataSource = this._createJiraDataSource;
        }
        if (this._createMariaDbDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.createMariaDbDataSource = this._createMariaDbDataSource;
        }
        if (this._createMongoAtlasDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.createMongoAtlasDataSource = this._createMongoAtlasDataSource;
        }
        if (this._createMongoDbDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.createMongoDbDataSource = this._createMongoDbDataSource;
        }
        if (this._createMySqlDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.createMySqlDataSource = this._createMySqlDataSource;
        }
        if (this._createOpenSearchDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.createOpenSearchDataSource = this._createOpenSearchDataSource;
        }
        if (this._createOracleDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.createOracleDataSource = this._createOracleDataSource;
        }
        if (this._createPayPalDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.createPayPalDataSource = this._createPayPalDataSource;
        }
        if (this._createPostgreSqlDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.createPostgreSqlDataSource = this._createPostgreSqlDataSource;
        }
        if (this._createPrestoDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.createPrestoDataSource = this._createPrestoDataSource;
        }
        if (this._createRadiantDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.createRadiantDataSource = this._createRadiantDataSource;
        }
        if (this._createRdsDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.createRdsDataSource = this._createRdsDataSource;
        }
        if (this._createRedshiftAutoDiscoveredDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.createRedshiftAutoDiscoveredDataSource = this._createRedshiftAutoDiscoveredDataSource;
        }
        if (this._createRedshiftManualDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.createRedshiftManualDataSource = this._createRedshiftManualDataSource;
        }
        if (this._createS3AnalyticsDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.createS3AnalyticsDataSource = this._createS3AnalyticsDataSource;
        }
        if (this._createS3DataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.createS3DataSource = this._createS3DataSource;
        }
        if (this._createS3TablesDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.createS3TablesDataSource = this._createS3TablesDataSource;
        }
        if (this._createSalesforceDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.createSalesforceDataSource = this._createSalesforceDataSource;
        }
        if (this._createSapHanaDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.createSapHanaDataSource = this._createSapHanaDataSource;
        }
        if (this._createServiceNowDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.createServiceNowDataSource = this._createServiceNowDataSource;
        }
        if (this._createSharedFolders !== undefined) {
            hasAnyValues = true;
            internalValueResult.createSharedFolders = this._createSharedFolders;
        }
        if (this._createSnowflakeDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.createSnowflakeDataSource = this._createSnowflakeDataSource;
        }
        if (this._createSpaces !== undefined) {
            hasAnyValues = true;
            internalValueResult.createSpaces = this._createSpaces;
        }
        if (this._createSparkDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.createSparkDataSource = this._createSparkDataSource;
        }
        if (this._createSpiceDataset !== undefined) {
            hasAnyValues = true;
            internalValueResult.createSpiceDataset = this._createSpiceDataset;
        }
        if (this._createSqlServerDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.createSqlServerDataSource = this._createSqlServerDataSource;
        }
        if (this._createSquareDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.createSquareDataSource = this._createSquareDataSource;
        }
        if (this._createStarburstDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.createStarburstDataSource = this._createStarburstDataSource;
        }
        if (this._createTeradataDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.createTeradataDataSource = this._createTeradataDataSource;
        }
        if (this._createTimestreamDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.createTimestreamDataSource = this._createTimestreamDataSource;
        }
        if (this._createTrinoDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.createTrinoDataSource = this._createTrinoDataSource;
        }
        if (this._createTwitterDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.createTwitterDataSource = this._createTwitterDataSource;
        }
        if (this._dashboard !== undefined) {
            hasAnyValues = true;
            internalValueResult.dashboard = this._dashboard;
        }
        if (this._databricksDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.databricksDataSource = this._databricksDataSource;
        }
        if (this._db2DataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.db2DataSource = this._db2DataSource;
        }
        if (this._denodoDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.denodoDataSource = this._denodoDataSource;
        }
        if (this._documentDbDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.documentDbDataSource = this._documentDbDataSource;
        }
        if (this._dremioDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.dremioDataSource = this._dremioDataSource;
        }
        if (this._dynamoDbDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.dynamoDbDataSource = this._dynamoDbDataSource;
        }
        if (this._editVisualWithQ !== undefined) {
            hasAnyValues = true;
            internalValueResult.editVisualWithQ = this._editVisualWithQ;
        }
        if (this._exasolDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.exasolDataSource = this._exasolDataSource;
        }
        if (this._exportToCsv !== undefined) {
            hasAnyValues = true;
            internalValueResult.exportToCsv = this._exportToCsv;
        }
        if (this._exportToCsvInScheduledReports !== undefined) {
            hasAnyValues = true;
            internalValueResult.exportToCsvInScheduledReports = this._exportToCsvInScheduledReports;
        }
        if (this._exportToExcel !== undefined) {
            hasAnyValues = true;
            internalValueResult.exportToExcel = this._exportToExcel;
        }
        if (this._exportToExcelInScheduledReports !== undefined) {
            hasAnyValues = true;
            internalValueResult.exportToExcelInScheduledReports = this._exportToExcelInScheduledReports;
        }
        if (this._exportToPdf !== undefined) {
            hasAnyValues = true;
            internalValueResult.exportToPdf = this._exportToPdf;
        }
        if (this._exportToPdfInScheduledReports !== undefined) {
            hasAnyValues = true;
            internalValueResult.exportToPdfInScheduledReports = this._exportToPdfInScheduledReports;
        }
        if (this._extension !== undefined) {
            hasAnyValues = true;
            internalValueResult.extension = this._extension;
        }
        if (this._factSetAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.factSetAction = this._factSetAction;
        }
        if (this._fileDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.fileDataSource = this._fileDataSource;
        }
        if (this._flow !== undefined) {
            hasAnyValues = true;
            internalValueResult.flow = this._flow;
        }
        if (this._genericHttpAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.genericHttpAction = this._genericHttpAction;
        }
        if (this._gitHubDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.gitHubDataSource = this._gitHubDataSource;
        }
        if (this._githubAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.githubAction = this._githubAction;
        }
        if (this._googleAnalyticsDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.googleAnalyticsDataSource = this._googleAnalyticsDataSource;
        }
        if (this._googleBigQueryDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.googleBigQueryDataSource = this._googleBigQueryDataSource;
        }
        if (this._googleCalendarAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.googleCalendarAction = this._googleCalendarAction;
        }
        if (this._googleDriveKnowledgeBase !== undefined) {
            hasAnyValues = true;
            internalValueResult.googleDriveKnowledgeBase = this._googleDriveKnowledgeBase;
        }
        if (this._googleSheetsDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.googleSheetsDataSource = this._googleSheetsDataSource;
        }
        if (this._hubspotAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.hubspotAction = this._hubspotAction;
        }
        if (this._huggingFaceAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.huggingFaceAction = this._huggingFaceAction;
        }
        if (this._idcKnowledgeBase !== undefined) {
            hasAnyValues = true;
            internalValueResult.idcKnowledgeBase = this._idcKnowledgeBase;
        }
        if (this._impalaDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.impalaDataSource = this._impalaDataSource;
        }
        if (this._inboundEmailTrigger !== undefined) {
            hasAnyValues = true;
            internalValueResult.inboundEmailTrigger = this._inboundEmailTrigger;
        }
        if (this._includeContentInScheduledReportsEmail !== undefined) {
            hasAnyValues = true;
            internalValueResult.includeContentInScheduledReportsEmail = this._includeContentInScheduledReportsEmail;
        }
        if (this._intercomAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.intercomAction = this._intercomAction;
        }
        if (this._invokeAppsAiInference !== undefined) {
            hasAnyValues = true;
            internalValueResult.invokeAppsAiInference = this._invokeAppsAiInference;
        }
        if (this._jiraAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.jiraAction = this._jiraAction;
        }
        if (this._jiraDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.jiraDataSource = this._jiraDataSource;
        }
        if (this._knowledgeBase !== undefined) {
            hasAnyValues = true;
            internalValueResult.knowledgeBase = this._knowledgeBase;
        }
        if (this._linearAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.linearAction = this._linearAction;
        }
        if (this._manageSharedFolders !== undefined) {
            hasAnyValues = true;
            internalValueResult.manageSharedFolders = this._manageSharedFolders;
        }
        if (this._mariaDbDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.mariaDbDataSource = this._mariaDbDataSource;
        }
        if (this._mcpAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.mcpAction = this._mcpAction;
        }
        if (this._mondayAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.mondayAction = this._mondayAction;
        }
        if (this._mongoAtlasDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.mongoAtlasDataSource = this._mongoAtlasDataSource;
        }
        if (this._mongoDbDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.mongoDbDataSource = this._mongoDbDataSource;
        }
        if (this._msExchangeAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.msExchangeAction = this._msExchangeAction;
        }
        if (this._msTeamsAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.msTeamsAction = this._msTeamsAction;
        }
        if (this._mySqlDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.mySqlDataSource = this._mySqlDataSource;
        }
        if (this._newRelicAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.newRelicAction = this._newRelicAction;
        }
        if (this._notionAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.notionAction = this._notionAction;
        }
        if (this._oneDriveAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.oneDriveAction = this._oneDriveAction;
        }
        if (this._oneDriveKnowledgeBase !== undefined) {
            hasAnyValues = true;
            internalValueResult.oneDriveKnowledgeBase = this._oneDriveKnowledgeBase;
        }
        if (this._openApiAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.openApiAction = this._openApiAction;
        }
        if (this._openSearchDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.openSearchDataSource = this._openSearchDataSource;
        }
        if (this._oracleDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.oracleDataSource = this._oracleDataSource;
        }
        if (this._pagerDutyAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.pagerDutyAction = this._pagerDutyAction;
        }
        if (this._payPalDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.payPalDataSource = this._payPalDataSource;
        }
        if (this._performFlowUiTask !== undefined) {
            hasAnyValues = true;
            internalValueResult.performFlowUiTask = this._performFlowUiTask;
        }
        if (this._postgreSqlDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.postgreSqlDataSource = this._postgreSqlDataSource;
        }
        if (this._prestoDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.prestoDataSource = this._prestoDataSource;
        }
        if (this._printReports !== undefined) {
            hasAnyValues = true;
            internalValueResult.printReports = this._printReports;
        }
        if (this._publishWithoutApproval !== undefined) {
            hasAnyValues = true;
            internalValueResult.publishWithoutApproval = this._publishWithoutApproval;
        }
        if (this._qBusinessKnowledgeBase !== undefined) {
            hasAnyValues = true;
            internalValueResult.qBusinessKnowledgeBase = this._qBusinessKnowledgeBase;
        }
        if (this._quickEventTrigger !== undefined) {
            hasAnyValues = true;
            internalValueResult.quickEventTrigger = this._quickEventTrigger;
        }
        if (this._radiantDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.radiantDataSource = this._radiantDataSource;
        }
        if (this._rdsDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.rdsDataSource = this._rdsDataSource;
        }
        if (this._redshiftAutoDiscoveredDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.redshiftAutoDiscoveredDataSource = this._redshiftAutoDiscoveredDataSource;
        }
        if (this._redshiftManualDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.redshiftManualDataSource = this._redshiftManualDataSource;
        }
        if (this._renameSharedFolders !== undefined) {
            hasAnyValues = true;
            internalValueResult.renameSharedFolders = this._renameSharedFolders;
        }
        if (this._research !== undefined) {
            hasAnyValues = true;
            internalValueResult.research = this._research;
        }
        if (this._s3AnalyticsDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3AnalyticsDataSource = this._s3AnalyticsDataSource;
        }
        if (this._s3DataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3DataSource = this._s3DataSource;
        }
        if (this._s3KnowledgeBase !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3KnowledgeBase = this._s3KnowledgeBase;
        }
        if (this._s3TablesDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3TablesDataSource = this._s3TablesDataSource;
        }
        if (this._salesforceAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.salesforceAction = this._salesforceAction;
        }
        if (this._salesforceDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.salesforceDataSource = this._salesforceDataSource;
        }
        if (this._sandPGlobalEnergyAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.sandPGlobalEnergyAction = this._sandPGlobalEnergyAction;
        }
        if (this._sandPgmiAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.sandPgmiAction = this._sandPgmiAction;
        }
        if (this._sapBillOfMaterialAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.sapBillOfMaterialAction = this._sapBillOfMaterialAction;
        }
        if (this._sapBusinessPartnerAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.sapBusinessPartnerAction = this._sapBusinessPartnerAction;
        }
        if (this._sapHanaDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.sapHanaDataSource = this._sapHanaDataSource;
        }
        if (this._sapMaterialStockAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.sapMaterialStockAction = this._sapMaterialStockAction;
        }
        if (this._sapPhysicalInventoryAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.sapPhysicalInventoryAction = this._sapPhysicalInventoryAction;
        }
        if (this._sapProductMasterDataAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.sapProductMasterDataAction = this._sapProductMasterDataAction;
        }
        if (this._scheduleTrigger !== undefined) {
            hasAnyValues = true;
            internalValueResult.scheduleTrigger = this._scheduleTrigger;
        }
        if (this._serviceNowAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.serviceNowAction = this._serviceNowAction;
        }
        if (this._serviceNowDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.serviceNowDataSource = this._serviceNowDataSource;
        }
        if (this._shareAdobeAnalyticsDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareAdobeAnalyticsDataSource = this._shareAdobeAnalyticsDataSource;
        }
        if (this._shareAmazonBedrockArsAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareAmazonBedrockArsAction = this._shareAmazonBedrockArsAction;
        }
        if (this._shareAmazonBedrockFsAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareAmazonBedrockFsAction = this._shareAmazonBedrockFsAction;
        }
        if (this._shareAmazonBedrockKrsAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareAmazonBedrockKrsAction = this._shareAmazonBedrockKrsAction;
        }
        if (this._shareAmazonSThreeAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareAmazonSThreeAction = this._shareAmazonSThreeAction;
        }
        if (this._shareAnalyses !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareAnalyses = this._shareAnalyses;
        }
        if (this._shareApps !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareApps = this._shareApps;
        }
        if (this._shareAsanaAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareAsanaAction = this._shareAsanaAction;
        }
        if (this._shareAthenaDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareAthenaDataSource = this._shareAthenaDataSource;
        }
        if (this._shareAuroraDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareAuroraDataSource = this._shareAuroraDataSource;
        }
        if (this._shareBambooHrAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareBambooHrAction = this._shareBambooHrAction;
        }
        if (this._shareBedrockManagedKnowledgeBase !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareBedrockManagedKnowledgeBase = this._shareBedrockManagedKnowledgeBase;
        }
        if (this._shareBoxAgentAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareBoxAgentAction = this._shareBoxAgentAction;
        }
        if (this._shareBoxKnowledgeBase !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareBoxKnowledgeBase = this._shareBoxKnowledgeBase;
        }
        if (this._shareCanvaAgentAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareCanvaAgentAction = this._shareCanvaAgentAction;
        }
        if (this._shareChatAgents !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareChatAgents = this._shareChatAgents;
        }
        if (this._shareComprehendAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareComprehendAction = this._shareComprehendAction;
        }
        if (this._shareComprehendMedicalAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareComprehendMedicalAction = this._shareComprehendMedicalAction;
        }
        if (this._shareConfluenceAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareConfluenceAction = this._shareConfluenceAction;
        }
        if (this._shareConfluenceKnowledgeBase !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareConfluenceKnowledgeBase = this._shareConfluenceKnowledgeBase;
        }
        if (this._shareDashboards !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareDashboards = this._shareDashboards;
        }
        if (this._shareDataSources !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareDataSources = this._shareDataSources;
        }
        if (this._shareDatabricksDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareDatabricksDataSource = this._shareDatabricksDataSource;
        }
        if (this._shareDatasets !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareDatasets = this._shareDatasets;
        }
        if (this._shareDb2DataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareDb2DataSource = this._shareDb2DataSource;
        }
        if (this._shareDenodoDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareDenodoDataSource = this._shareDenodoDataSource;
        }
        if (this._shareDocumentDbDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareDocumentDbDataSource = this._shareDocumentDbDataSource;
        }
        if (this._shareDremioDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareDremioDataSource = this._shareDremioDataSource;
        }
        if (this._shareDynamoDbDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareDynamoDbDataSource = this._shareDynamoDbDataSource;
        }
        if (this._shareExasolDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareExasolDataSource = this._shareExasolDataSource;
        }
        if (this._shareFactSetAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareFactSetAction = this._shareFactSetAction;
        }
        if (this._shareFileDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareFileDataSource = this._shareFileDataSource;
        }
        if (this._shareGenericHttpAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareGenericHttpAction = this._shareGenericHttpAction;
        }
        if (this._shareGitHubDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareGitHubDataSource = this._shareGitHubDataSource;
        }
        if (this._shareGithubAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareGithubAction = this._shareGithubAction;
        }
        if (this._shareGoogleAnalyticsDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareGoogleAnalyticsDataSource = this._shareGoogleAnalyticsDataSource;
        }
        if (this._shareGoogleBigQueryDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareGoogleBigQueryDataSource = this._shareGoogleBigQueryDataSource;
        }
        if (this._shareGoogleCalendarAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareGoogleCalendarAction = this._shareGoogleCalendarAction;
        }
        if (this._shareGoogleDriveKnowledgeBase !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareGoogleDriveKnowledgeBase = this._shareGoogleDriveKnowledgeBase;
        }
        if (this._shareGoogleSheetsDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareGoogleSheetsDataSource = this._shareGoogleSheetsDataSource;
        }
        if (this._shareHubspotAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareHubspotAction = this._shareHubspotAction;
        }
        if (this._shareHuggingFaceAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareHuggingFaceAction = this._shareHuggingFaceAction;
        }
        if (this._shareIdcKnowledgeBase !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareIdcKnowledgeBase = this._shareIdcKnowledgeBase;
        }
        if (this._shareImpalaDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareImpalaDataSource = this._shareImpalaDataSource;
        }
        if (this._shareIntercomAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareIntercomAction = this._shareIntercomAction;
        }
        if (this._shareJiraAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareJiraAction = this._shareJiraAction;
        }
        if (this._shareJiraDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareJiraDataSource = this._shareJiraDataSource;
        }
        if (this._shareKnowledgeBases !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareKnowledgeBases = this._shareKnowledgeBases;
        }
        if (this._shareLinearAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareLinearAction = this._shareLinearAction;
        }
        if (this._shareMariaDbDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareMariaDbDataSource = this._shareMariaDbDataSource;
        }
        if (this._shareMcpAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareMcpAction = this._shareMcpAction;
        }
        if (this._shareMondayAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareMondayAction = this._shareMondayAction;
        }
        if (this._shareMongoAtlasDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareMongoAtlasDataSource = this._shareMongoAtlasDataSource;
        }
        if (this._shareMongoDbDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareMongoDbDataSource = this._shareMongoDbDataSource;
        }
        if (this._shareMsExchangeAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareMsExchangeAction = this._shareMsExchangeAction;
        }
        if (this._shareMsTeamsAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareMsTeamsAction = this._shareMsTeamsAction;
        }
        if (this._shareMySqlDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareMySqlDataSource = this._shareMySqlDataSource;
        }
        if (this._shareNewRelicAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareNewRelicAction = this._shareNewRelicAction;
        }
        if (this._shareNotionAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareNotionAction = this._shareNotionAction;
        }
        if (this._shareOneDriveAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareOneDriveAction = this._shareOneDriveAction;
        }
        if (this._shareOneDriveKnowledgeBase !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareOneDriveKnowledgeBase = this._shareOneDriveKnowledgeBase;
        }
        if (this._shareOpenApiAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareOpenApiAction = this._shareOpenApiAction;
        }
        if (this._shareOpenSearchDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareOpenSearchDataSource = this._shareOpenSearchDataSource;
        }
        if (this._shareOracleDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareOracleDataSource = this._shareOracleDataSource;
        }
        if (this._sharePagerDutyAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.sharePagerDutyAction = this._sharePagerDutyAction;
        }
        if (this._sharePayPalDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.sharePayPalDataSource = this._sharePayPalDataSource;
        }
        if (this._sharePointAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.sharePointAction = this._sharePointAction;
        }
        if (this._sharePointKnowledgeBase !== undefined) {
            hasAnyValues = true;
            internalValueResult.sharePointKnowledgeBase = this._sharePointKnowledgeBase;
        }
        if (this._sharePostgreSqlDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.sharePostgreSqlDataSource = this._sharePostgreSqlDataSource;
        }
        if (this._sharePrestoDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.sharePrestoDataSource = this._sharePrestoDataSource;
        }
        if (this._shareQBusinessKnowledgeBase !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareQBusinessKnowledgeBase = this._shareQBusinessKnowledgeBase;
        }
        if (this._shareRadiantDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareRadiantDataSource = this._shareRadiantDataSource;
        }
        if (this._shareRdsDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareRdsDataSource = this._shareRdsDataSource;
        }
        if (this._shareRedshiftAutoDiscoveredDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareRedshiftAutoDiscoveredDataSource = this._shareRedshiftAutoDiscoveredDataSource;
        }
        if (this._shareRedshiftManualDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareRedshiftManualDataSource = this._shareRedshiftManualDataSource;
        }
        if (this._shareS3AnalyticsDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareS3AnalyticsDataSource = this._shareS3AnalyticsDataSource;
        }
        if (this._shareS3DataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareS3DataSource = this._shareS3DataSource;
        }
        if (this._shareS3KnowledgeBase !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareS3KnowledgeBase = this._shareS3KnowledgeBase;
        }
        if (this._shareS3TablesDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareS3TablesDataSource = this._shareS3TablesDataSource;
        }
        if (this._shareSalesforceAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareSalesforceAction = this._shareSalesforceAction;
        }
        if (this._shareSalesforceDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareSalesforceDataSource = this._shareSalesforceDataSource;
        }
        if (this._shareSandPGlobalEnergyAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareSandPGlobalEnergyAction = this._shareSandPGlobalEnergyAction;
        }
        if (this._shareSandPgmiAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareSandPgmiAction = this._shareSandPgmiAction;
        }
        if (this._shareSapBillOfMaterialAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareSapBillOfMaterialAction = this._shareSapBillOfMaterialAction;
        }
        if (this._shareSapBusinessPartnerAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareSapBusinessPartnerAction = this._shareSapBusinessPartnerAction;
        }
        if (this._shareSapHanaDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareSapHanaDataSource = this._shareSapHanaDataSource;
        }
        if (this._shareSapMaterialStockAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareSapMaterialStockAction = this._shareSapMaterialStockAction;
        }
        if (this._shareSapPhysicalInventoryAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareSapPhysicalInventoryAction = this._shareSapPhysicalInventoryAction;
        }
        if (this._shareSapProductMasterDataAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareSapProductMasterDataAction = this._shareSapProductMasterDataAction;
        }
        if (this._shareServiceNowAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareServiceNowAction = this._shareServiceNowAction;
        }
        if (this._shareServiceNowDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareServiceNowDataSource = this._shareServiceNowDataSource;
        }
        if (this._shareSharePointAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareSharePointAction = this._shareSharePointAction;
        }
        if (this._shareSharePointKnowledgeBase !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareSharePointKnowledgeBase = this._shareSharePointKnowledgeBase;
        }
        if (this._shareSlackAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareSlackAction = this._shareSlackAction;
        }
        if (this._shareSmartsheetAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareSmartsheetAction = this._shareSmartsheetAction;
        }
        if (this._shareSnowflakeDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareSnowflakeDataSource = this._shareSnowflakeDataSource;
        }
        if (this._shareSpaces !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareSpaces = this._shareSpaces;
        }
        if (this._shareSparkDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareSparkDataSource = this._shareSparkDataSource;
        }
        if (this._shareSqlServerDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareSqlServerDataSource = this._shareSqlServerDataSource;
        }
        if (this._shareSquareDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareSquareDataSource = this._shareSquareDataSource;
        }
        if (this._shareStarburstDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareStarburstDataSource = this._shareStarburstDataSource;
        }
        if (this._shareTeradataDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareTeradataDataSource = this._shareTeradataDataSource;
        }
        if (this._shareTextractAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareTextractAction = this._shareTextractAction;
        }
        if (this._shareTimestreamDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareTimestreamDataSource = this._shareTimestreamDataSource;
        }
        if (this._shareTrinoDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareTrinoDataSource = this._shareTrinoDataSource;
        }
        if (this._shareTwitterDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareTwitterDataSource = this._shareTwitterDataSource;
        }
        if (this._shareWebCrawlerKnowledgeBase !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareWebCrawlerKnowledgeBase = this._shareWebCrawlerKnowledgeBase;
        }
        if (this._shareZendeskAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareZendeskAction = this._shareZendeskAction;
        }
        if (this._slackAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.slackAction = this._slackAction;
        }
        if (this._smartsheetAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.smartsheetAction = this._smartsheetAction;
        }
        if (this._snowflakeDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.snowflakeDataSource = this._snowflakeDataSource;
        }
        if (this._space !== undefined) {
            hasAnyValues = true;
            internalValueResult.space = this._space;
        }
        if (this._sparkDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.sparkDataSource = this._sparkDataSource;
        }
        if (this._sqlServerDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.sqlServerDataSource = this._sqlServerDataSource;
        }
        if (this._squareDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.squareDataSource = this._squareDataSource;
        }
        if (this._starburstDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.starburstDataSource = this._starburstDataSource;
        }
        if (this._subscribeDashboardEmailReports !== undefined) {
            hasAnyValues = true;
            internalValueResult.subscribeDashboardEmailReports = this._subscribeDashboardEmailReports;
        }
        if (this._teradataDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.teradataDataSource = this._teradataDataSource;
        }
        if (this._textractAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.textractAction = this._textractAction;
        }
        if (this._timestreamDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.timestreamDataSource = this._timestreamDataSource;
        }
        if (this._topic !== undefined) {
            hasAnyValues = true;
            internalValueResult.topic = this._topic;
        }
        if (this._trigger !== undefined) {
            hasAnyValues = true;
            internalValueResult.trigger = this._trigger;
        }
        if (this._trinoDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.trinoDataSource = this._trinoDataSource;
        }
        if (this._twitterDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.twitterDataSource = this._twitterDataSource;
        }
        if (this._updateAdobeAnalyticsDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.updateAdobeAnalyticsDataSource = this._updateAdobeAnalyticsDataSource;
        }
        if (this._updateAthenaDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.updateAthenaDataSource = this._updateAthenaDataSource;
        }
        if (this._updateAuroraDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.updateAuroraDataSource = this._updateAuroraDataSource;
        }
        if (this._updateDatabricksDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.updateDatabricksDataSource = this._updateDatabricksDataSource;
        }
        if (this._updateDb2DataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.updateDb2DataSource = this._updateDb2DataSource;
        }
        if (this._updateDenodoDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.updateDenodoDataSource = this._updateDenodoDataSource;
        }
        if (this._updateDocumentDbDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.updateDocumentDbDataSource = this._updateDocumentDbDataSource;
        }
        if (this._updateDremioDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.updateDremioDataSource = this._updateDremioDataSource;
        }
        if (this._updateDynamoDbDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.updateDynamoDbDataSource = this._updateDynamoDbDataSource;
        }
        if (this._updateExasolDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.updateExasolDataSource = this._updateExasolDataSource;
        }
        if (this._updateFileDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.updateFileDataSource = this._updateFileDataSource;
        }
        if (this._updateGitHubDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.updateGitHubDataSource = this._updateGitHubDataSource;
        }
        if (this._updateGoogleAnalyticsDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.updateGoogleAnalyticsDataSource = this._updateGoogleAnalyticsDataSource;
        }
        if (this._updateGoogleBigQueryDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.updateGoogleBigQueryDataSource = this._updateGoogleBigQueryDataSource;
        }
        if (this._updateGoogleSheetsDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.updateGoogleSheetsDataSource = this._updateGoogleSheetsDataSource;
        }
        if (this._updateImpalaDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.updateImpalaDataSource = this._updateImpalaDataSource;
        }
        if (this._updateJiraDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.updateJiraDataSource = this._updateJiraDataSource;
        }
        if (this._updateMariaDbDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.updateMariaDbDataSource = this._updateMariaDbDataSource;
        }
        if (this._updateMongoAtlasDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.updateMongoAtlasDataSource = this._updateMongoAtlasDataSource;
        }
        if (this._updateMongoDbDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.updateMongoDbDataSource = this._updateMongoDbDataSource;
        }
        if (this._updateMySqlDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.updateMySqlDataSource = this._updateMySqlDataSource;
        }
        if (this._updateOpenSearchDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.updateOpenSearchDataSource = this._updateOpenSearchDataSource;
        }
        if (this._updateOracleDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.updateOracleDataSource = this._updateOracleDataSource;
        }
        if (this._updatePayPalDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.updatePayPalDataSource = this._updatePayPalDataSource;
        }
        if (this._updatePostgreSqlDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.updatePostgreSqlDataSource = this._updatePostgreSqlDataSource;
        }
        if (this._updatePrestoDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.updatePrestoDataSource = this._updatePrestoDataSource;
        }
        if (this._updateRadiantDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.updateRadiantDataSource = this._updateRadiantDataSource;
        }
        if (this._updateRdsDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.updateRdsDataSource = this._updateRdsDataSource;
        }
        if (this._updateRedshiftAutoDiscoveredDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.updateRedshiftAutoDiscoveredDataSource = this._updateRedshiftAutoDiscoveredDataSource;
        }
        if (this._updateRedshiftManualDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.updateRedshiftManualDataSource = this._updateRedshiftManualDataSource;
        }
        if (this._updateS3AnalyticsDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.updateS3AnalyticsDataSource = this._updateS3AnalyticsDataSource;
        }
        if (this._updateS3DataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.updateS3DataSource = this._updateS3DataSource;
        }
        if (this._updateS3TablesDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.updateS3TablesDataSource = this._updateS3TablesDataSource;
        }
        if (this._updateSalesforceDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.updateSalesforceDataSource = this._updateSalesforceDataSource;
        }
        if (this._updateSapHanaDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.updateSapHanaDataSource = this._updateSapHanaDataSource;
        }
        if (this._updateServiceNowDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.updateServiceNowDataSource = this._updateServiceNowDataSource;
        }
        if (this._updateSnowflakeDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.updateSnowflakeDataSource = this._updateSnowflakeDataSource;
        }
        if (this._updateSparkDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.updateSparkDataSource = this._updateSparkDataSource;
        }
        if (this._updateSqlServerDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.updateSqlServerDataSource = this._updateSqlServerDataSource;
        }
        if (this._updateSquareDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.updateSquareDataSource = this._updateSquareDataSource;
        }
        if (this._updateStarburstDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.updateStarburstDataSource = this._updateStarburstDataSource;
        }
        if (this._updateTeradataDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.updateTeradataDataSource = this._updateTeradataDataSource;
        }
        if (this._updateTimestreamDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.updateTimestreamDataSource = this._updateTimestreamDataSource;
        }
        if (this._updateTrinoDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.updateTrinoDataSource = this._updateTrinoDataSource;
        }
        if (this._updateTwitterDataSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.updateTwitterDataSource = this._updateTwitterDataSource;
        }
        if (this._useAgentWebSearch !== undefined) {
            hasAnyValues = true;
            internalValueResult.useAgentWebSearch = this._useAgentWebSearch;
        }
        if (this._useAmazonBedrockArsAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.useAmazonBedrockArsAction = this._useAmazonBedrockArsAction;
        }
        if (this._useAmazonBedrockFsAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.useAmazonBedrockFsAction = this._useAmazonBedrockFsAction;
        }
        if (this._useAmazonBedrockKrsAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.useAmazonBedrockKrsAction = this._useAmazonBedrockKrsAction;
        }
        if (this._useAmazonSThreeAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.useAmazonSThreeAction = this._useAmazonSThreeAction;
        }
        if (this._useAsanaAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.useAsanaAction = this._useAsanaAction;
        }
        if (this._useBambooHrAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.useBambooHrAction = this._useBambooHrAction;
        }
        if (this._useBedrockManagedKnowledgeBase !== undefined) {
            hasAnyValues = true;
            internalValueResult.useBedrockManagedKnowledgeBase = this._useBedrockManagedKnowledgeBase;
        }
        if (this._useBedrockModels !== undefined) {
            hasAnyValues = true;
            internalValueResult.useBedrockModels = this._useBedrockModels;
        }
        if (this._useBoxAgentAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.useBoxAgentAction = this._useBoxAgentAction;
        }
        if (this._useBoxKnowledgeBase !== undefined) {
            hasAnyValues = true;
            internalValueResult.useBoxKnowledgeBase = this._useBoxKnowledgeBase;
        }
        if (this._useBrowserExtension !== undefined) {
            hasAnyValues = true;
            internalValueResult.useBrowserExtension = this._useBrowserExtension;
        }
        if (this._useCanvaAgentAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.useCanvaAgentAction = this._useCanvaAgentAction;
        }
        if (this._useComprehendAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.useComprehendAction = this._useComprehendAction;
        }
        if (this._useComprehendMedicalAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.useComprehendMedicalAction = this._useComprehendMedicalAction;
        }
        if (this._useConfluenceAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.useConfluenceAction = this._useConfluenceAction;
        }
        if (this._useConfluenceKnowledgeBase !== undefined) {
            hasAnyValues = true;
            internalValueResult.useConfluenceKnowledgeBase = this._useConfluenceKnowledgeBase;
        }
        if (this._useExcelAddInExtension !== undefined) {
            hasAnyValues = true;
            internalValueResult.useExcelAddInExtension = this._useExcelAddInExtension;
        }
        if (this._useFactSetAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.useFactSetAction = this._useFactSetAction;
        }
        if (this._useGenericHttpAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.useGenericHttpAction = this._useGenericHttpAction;
        }
        if (this._useGithubAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.useGithubAction = this._useGithubAction;
        }
        if (this._useGoogleCalendarAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.useGoogleCalendarAction = this._useGoogleCalendarAction;
        }
        if (this._useGoogleDriveKnowledgeBase !== undefined) {
            hasAnyValues = true;
            internalValueResult.useGoogleDriveKnowledgeBase = this._useGoogleDriveKnowledgeBase;
        }
        if (this._useHubspotAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.useHubspotAction = this._useHubspotAction;
        }
        if (this._useHuggingFaceAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.useHuggingFaceAction = this._useHuggingFaceAction;
        }
        if (this._useIdcKnowledgeBase !== undefined) {
            hasAnyValues = true;
            internalValueResult.useIdcKnowledgeBase = this._useIdcKnowledgeBase;
        }
        if (this._useIntercomAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.useIntercomAction = this._useIntercomAction;
        }
        if (this._useJiraAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.useJiraAction = this._useJiraAction;
        }
        if (this._useLinearAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.useLinearAction = this._useLinearAction;
        }
        if (this._useMcpAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.useMcpAction = this._useMcpAction;
        }
        if (this._useMondayAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.useMondayAction = this._useMondayAction;
        }
        if (this._useMsExchangeAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.useMsExchangeAction = this._useMsExchangeAction;
        }
        if (this._useMsTeamsAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.useMsTeamsAction = this._useMsTeamsAction;
        }
        if (this._useNewRelicAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.useNewRelicAction = this._useNewRelicAction;
        }
        if (this._useNotionAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.useNotionAction = this._useNotionAction;
        }
        if (this._useOneDriveAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.useOneDriveAction = this._useOneDriveAction;
        }
        if (this._useOneDriveKnowledgeBase !== undefined) {
            hasAnyValues = true;
            internalValueResult.useOneDriveKnowledgeBase = this._useOneDriveKnowledgeBase;
        }
        if (this._useOpenApiAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.useOpenApiAction = this._useOpenApiAction;
        }
        if (this._useOutlookAddInExtension !== undefined) {
            hasAnyValues = true;
            internalValueResult.useOutlookAddInExtension = this._useOutlookAddInExtension;
        }
        if (this._usePagerDutyAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.usePagerDutyAction = this._usePagerDutyAction;
        }
        if (this._usePowerpointAddInExtension !== undefined) {
            hasAnyValues = true;
            internalValueResult.usePowerpointAddInExtension = this._usePowerpointAddInExtension;
        }
        if (this._useQBusinessKnowledgeBase !== undefined) {
            hasAnyValues = true;
            internalValueResult.useQBusinessKnowledgeBase = this._useQBusinessKnowledgeBase;
        }
        if (this._useS3KnowledgeBase !== undefined) {
            hasAnyValues = true;
            internalValueResult.useS3KnowledgeBase = this._useS3KnowledgeBase;
        }
        if (this._useSalesforceAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.useSalesforceAction = this._useSalesforceAction;
        }
        if (this._useSandPGlobalEnergyAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.useSandPGlobalEnergyAction = this._useSandPGlobalEnergyAction;
        }
        if (this._useSandPgmiAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.useSandPgmiAction = this._useSandPgmiAction;
        }
        if (this._useSapBillOfMaterialAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.useSapBillOfMaterialAction = this._useSapBillOfMaterialAction;
        }
        if (this._useSapBusinessPartnerAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.useSapBusinessPartnerAction = this._useSapBusinessPartnerAction;
        }
        if (this._useSapMaterialStockAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.useSapMaterialStockAction = this._useSapMaterialStockAction;
        }
        if (this._useSapPhysicalInventoryAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.useSapPhysicalInventoryAction = this._useSapPhysicalInventoryAction;
        }
        if (this._useSapProductMasterDataAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.useSapProductMasterDataAction = this._useSapProductMasterDataAction;
        }
        if (this._useServiceNowAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.useServiceNowAction = this._useServiceNowAction;
        }
        if (this._useSharePointAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.useSharePointAction = this._useSharePointAction;
        }
        if (this._useSharePointKnowledgeBase !== undefined) {
            hasAnyValues = true;
            internalValueResult.useSharePointKnowledgeBase = this._useSharePointKnowledgeBase;
        }
        if (this._useSlackAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.useSlackAction = this._useSlackAction;
        }
        if (this._useSmartsheetAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.useSmartsheetAction = this._useSmartsheetAction;
        }
        if (this._useTextractAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.useTextractAction = this._useTextractAction;
        }
        if (this._useWebCrawlerKnowledgeBase !== undefined) {
            hasAnyValues = true;
            internalValueResult.useWebCrawlerKnowledgeBase = this._useWebCrawlerKnowledgeBase;
        }
        if (this._useWordAddInExtension !== undefined) {
            hasAnyValues = true;
            internalValueResult.useWordAddInExtension = this._useWordAddInExtension;
        }
        if (this._useZendeskAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.useZendeskAction = this._useZendeskAction;
        }
        if (this._viewAccountSpiceCapacity !== undefined) {
            hasAnyValues = true;
            internalValueResult.viewAccountSpiceCapacity = this._viewAccountSpiceCapacity;
        }
        if (this._webCrawlerKnowledgeBase !== undefined) {
            hasAnyValues = true;
            internalValueResult.webCrawlerKnowledgeBase = this._webCrawlerKnowledgeBase;
        }
        if (this._zendeskAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.zendeskAction = this._zendeskAction;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CapabilitiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accessAppsNativeDataStore = undefined;
            this._action = undefined;
            this._addOrRunAnomalyDetectionForAnalyses = undefined;
            this._adobeAnalyticsDataSource = undefined;
            this._amazonBedrockArsAction = undefined;
            this._amazonBedrockFsAction = undefined;
            this._amazonBedrockKrsAction = undefined;
            this._amazonSThreeAction = undefined;
            this._analysis = undefined;
            this._approveFlowShareRequests = undefined;
            this._apps = undefined;
            this._asanaAction = undefined;
            this._athenaDataSource = undefined;
            this._auroraDataSource = undefined;
            this._automate = undefined;
            this._bambooHrAction = undefined;
            this._bedrockManagedKnowledgeBase = undefined;
            this._boxAgentAction = undefined;
            this._boxKnowledgeBase = undefined;
            this._buildCalculatedFieldWithQ = undefined;
            this._canvaAgentAction = undefined;
            this._chatAgent = undefined;
            this._comprehendAction = undefined;
            this._comprehendMedicalAction = undefined;
            this._confluenceAction = undefined;
            this._confluenceKnowledgeBase = undefined;
            this._createAdobeAnalyticsDataSource = undefined;
            this._createAndUpdateAmazonBedrockArsAction = undefined;
            this._createAndUpdateAmazonBedrockFsAction = undefined;
            this._createAndUpdateAmazonBedrockKrsAction = undefined;
            this._createAndUpdateAmazonSThreeAction = undefined;
            this._createAndUpdateApps = undefined;
            this._createAndUpdateAsanaAction = undefined;
            this._createAndUpdateBambooHrAction = undefined;
            this._createAndUpdateBedrockManagedKnowledgeBase = undefined;
            this._createAndUpdateBoxAgentAction = undefined;
            this._createAndUpdateBoxKnowledgeBase = undefined;
            this._createAndUpdateCanvaAgentAction = undefined;
            this._createAndUpdateComprehendAction = undefined;
            this._createAndUpdateComprehendMedicalAction = undefined;
            this._createAndUpdateConfluenceAction = undefined;
            this._createAndUpdateConfluenceKnowledgeBase = undefined;
            this._createAndUpdateDashboardEmailReports = undefined;
            this._createAndUpdateDataSources = undefined;
            this._createAndUpdateDatasets = undefined;
            this._createAndUpdateFactSetAction = undefined;
            this._createAndUpdateGenericHttpAction = undefined;
            this._createAndUpdateGithubAction = undefined;
            this._createAndUpdateGoogleCalendarAction = undefined;
            this._createAndUpdateGoogleDriveKnowledgeBase = undefined;
            this._createAndUpdateHubspotAction = undefined;
            this._createAndUpdateHuggingFaceAction = undefined;
            this._createAndUpdateIdcKnowledgeBase = undefined;
            this._createAndUpdateIntercomAction = undefined;
            this._createAndUpdateJiraAction = undefined;
            this._createAndUpdateKnowledgeBases = undefined;
            this._createAndUpdateLinearAction = undefined;
            this._createAndUpdateMcpAction = undefined;
            this._createAndUpdateMondayAction = undefined;
            this._createAndUpdateMsExchangeAction = undefined;
            this._createAndUpdateMsTeamsAction = undefined;
            this._createAndUpdateNewRelicAction = undefined;
            this._createAndUpdateNotionAction = undefined;
            this._createAndUpdateOneDriveAction = undefined;
            this._createAndUpdateOneDriveKnowledgeBase = undefined;
            this._createAndUpdateOpenApiAction = undefined;
            this._createAndUpdatePagerDutyAction = undefined;
            this._createAndUpdateQBusinessKnowledgeBase = undefined;
            this._createAndUpdateS3KnowledgeBase = undefined;
            this._createAndUpdateSalesforceAction = undefined;
            this._createAndUpdateSandPGlobalEnergyAction = undefined;
            this._createAndUpdateSandPgmiAction = undefined;
            this._createAndUpdateSapBillOfMaterialAction = undefined;
            this._createAndUpdateSapBusinessPartnerAction = undefined;
            this._createAndUpdateSapMaterialStockAction = undefined;
            this._createAndUpdateSapPhysicalInventoryAction = undefined;
            this._createAndUpdateSapProductMasterDataAction = undefined;
            this._createAndUpdateServiceNowAction = undefined;
            this._createAndUpdateSharePointAction = undefined;
            this._createAndUpdateSharePointKnowledgeBase = undefined;
            this._createAndUpdateSlackAction = undefined;
            this._createAndUpdateSmartsheetAction = undefined;
            this._createAndUpdateTextractAction = undefined;
            this._createAndUpdateThemes = undefined;
            this._createAndUpdateThresholdAlerts = undefined;
            this._createAndUpdateWebCrawlerKnowledgeBase = undefined;
            this._createAndUpdateZendeskAction = undefined;
            this._createAthenaDataSource = undefined;
            this._createAuroraDataSource = undefined;
            this._createChatAgents = undefined;
            this._createDashboardExecutiveSummaryWithQ = undefined;
            this._createDatabricksDataSource = undefined;
            this._createDb2DataSource = undefined;
            this._createDenodoDataSource = undefined;
            this._createDocumentDbDataSource = undefined;
            this._createDremioDataSource = undefined;
            this._createDynamoDbDataSource = undefined;
            this._createExasolDataSource = undefined;
            this._createFileDataSource = undefined;
            this._createGitHubDataSource = undefined;
            this._createGoogleAnalyticsDataSource = undefined;
            this._createGoogleBigQueryDataSource = undefined;
            this._createGoogleSheetsDataSource = undefined;
            this._createImpalaDataSource = undefined;
            this._createJiraDataSource = undefined;
            this._createMariaDbDataSource = undefined;
            this._createMongoAtlasDataSource = undefined;
            this._createMongoDbDataSource = undefined;
            this._createMySqlDataSource = undefined;
            this._createOpenSearchDataSource = undefined;
            this._createOracleDataSource = undefined;
            this._createPayPalDataSource = undefined;
            this._createPostgreSqlDataSource = undefined;
            this._createPrestoDataSource = undefined;
            this._createRadiantDataSource = undefined;
            this._createRdsDataSource = undefined;
            this._createRedshiftAutoDiscoveredDataSource = undefined;
            this._createRedshiftManualDataSource = undefined;
            this._createS3AnalyticsDataSource = undefined;
            this._createS3DataSource = undefined;
            this._createS3TablesDataSource = undefined;
            this._createSalesforceDataSource = undefined;
            this._createSapHanaDataSource = undefined;
            this._createServiceNowDataSource = undefined;
            this._createSharedFolders = undefined;
            this._createSnowflakeDataSource = undefined;
            this._createSpaces = undefined;
            this._createSparkDataSource = undefined;
            this._createSpiceDataset = undefined;
            this._createSqlServerDataSource = undefined;
            this._createSquareDataSource = undefined;
            this._createStarburstDataSource = undefined;
            this._createTeradataDataSource = undefined;
            this._createTimestreamDataSource = undefined;
            this._createTrinoDataSource = undefined;
            this._createTwitterDataSource = undefined;
            this._dashboard = undefined;
            this._databricksDataSource = undefined;
            this._db2DataSource = undefined;
            this._denodoDataSource = undefined;
            this._documentDbDataSource = undefined;
            this._dremioDataSource = undefined;
            this._dynamoDbDataSource = undefined;
            this._editVisualWithQ = undefined;
            this._exasolDataSource = undefined;
            this._exportToCsv = undefined;
            this._exportToCsvInScheduledReports = undefined;
            this._exportToExcel = undefined;
            this._exportToExcelInScheduledReports = undefined;
            this._exportToPdf = undefined;
            this._exportToPdfInScheduledReports = undefined;
            this._extension = undefined;
            this._factSetAction = undefined;
            this._fileDataSource = undefined;
            this._flow = undefined;
            this._genericHttpAction = undefined;
            this._gitHubDataSource = undefined;
            this._githubAction = undefined;
            this._googleAnalyticsDataSource = undefined;
            this._googleBigQueryDataSource = undefined;
            this._googleCalendarAction = undefined;
            this._googleDriveKnowledgeBase = undefined;
            this._googleSheetsDataSource = undefined;
            this._hubspotAction = undefined;
            this._huggingFaceAction = undefined;
            this._idcKnowledgeBase = undefined;
            this._impalaDataSource = undefined;
            this._inboundEmailTrigger = undefined;
            this._includeContentInScheduledReportsEmail = undefined;
            this._intercomAction = undefined;
            this._invokeAppsAiInference = undefined;
            this._jiraAction = undefined;
            this._jiraDataSource = undefined;
            this._knowledgeBase = undefined;
            this._linearAction = undefined;
            this._manageSharedFolders = undefined;
            this._mariaDbDataSource = undefined;
            this._mcpAction = undefined;
            this._mondayAction = undefined;
            this._mongoAtlasDataSource = undefined;
            this._mongoDbDataSource = undefined;
            this._msExchangeAction = undefined;
            this._msTeamsAction = undefined;
            this._mySqlDataSource = undefined;
            this._newRelicAction = undefined;
            this._notionAction = undefined;
            this._oneDriveAction = undefined;
            this._oneDriveKnowledgeBase = undefined;
            this._openApiAction = undefined;
            this._openSearchDataSource = undefined;
            this._oracleDataSource = undefined;
            this._pagerDutyAction = undefined;
            this._payPalDataSource = undefined;
            this._performFlowUiTask = undefined;
            this._postgreSqlDataSource = undefined;
            this._prestoDataSource = undefined;
            this._printReports = undefined;
            this._publishWithoutApproval = undefined;
            this._qBusinessKnowledgeBase = undefined;
            this._quickEventTrigger = undefined;
            this._radiantDataSource = undefined;
            this._rdsDataSource = undefined;
            this._redshiftAutoDiscoveredDataSource = undefined;
            this._redshiftManualDataSource = undefined;
            this._renameSharedFolders = undefined;
            this._research = undefined;
            this._s3AnalyticsDataSource = undefined;
            this._s3DataSource = undefined;
            this._s3KnowledgeBase = undefined;
            this._s3TablesDataSource = undefined;
            this._salesforceAction = undefined;
            this._salesforceDataSource = undefined;
            this._sandPGlobalEnergyAction = undefined;
            this._sandPgmiAction = undefined;
            this._sapBillOfMaterialAction = undefined;
            this._sapBusinessPartnerAction = undefined;
            this._sapHanaDataSource = undefined;
            this._sapMaterialStockAction = undefined;
            this._sapPhysicalInventoryAction = undefined;
            this._sapProductMasterDataAction = undefined;
            this._scheduleTrigger = undefined;
            this._serviceNowAction = undefined;
            this._serviceNowDataSource = undefined;
            this._shareAdobeAnalyticsDataSource = undefined;
            this._shareAmazonBedrockArsAction = undefined;
            this._shareAmazonBedrockFsAction = undefined;
            this._shareAmazonBedrockKrsAction = undefined;
            this._shareAmazonSThreeAction = undefined;
            this._shareAnalyses = undefined;
            this._shareApps = undefined;
            this._shareAsanaAction = undefined;
            this._shareAthenaDataSource = undefined;
            this._shareAuroraDataSource = undefined;
            this._shareBambooHrAction = undefined;
            this._shareBedrockManagedKnowledgeBase = undefined;
            this._shareBoxAgentAction = undefined;
            this._shareBoxKnowledgeBase = undefined;
            this._shareCanvaAgentAction = undefined;
            this._shareChatAgents = undefined;
            this._shareComprehendAction = undefined;
            this._shareComprehendMedicalAction = undefined;
            this._shareConfluenceAction = undefined;
            this._shareConfluenceKnowledgeBase = undefined;
            this._shareDashboards = undefined;
            this._shareDataSources = undefined;
            this._shareDatabricksDataSource = undefined;
            this._shareDatasets = undefined;
            this._shareDb2DataSource = undefined;
            this._shareDenodoDataSource = undefined;
            this._shareDocumentDbDataSource = undefined;
            this._shareDremioDataSource = undefined;
            this._shareDynamoDbDataSource = undefined;
            this._shareExasolDataSource = undefined;
            this._shareFactSetAction = undefined;
            this._shareFileDataSource = undefined;
            this._shareGenericHttpAction = undefined;
            this._shareGitHubDataSource = undefined;
            this._shareGithubAction = undefined;
            this._shareGoogleAnalyticsDataSource = undefined;
            this._shareGoogleBigQueryDataSource = undefined;
            this._shareGoogleCalendarAction = undefined;
            this._shareGoogleDriveKnowledgeBase = undefined;
            this._shareGoogleSheetsDataSource = undefined;
            this._shareHubspotAction = undefined;
            this._shareHuggingFaceAction = undefined;
            this._shareIdcKnowledgeBase = undefined;
            this._shareImpalaDataSource = undefined;
            this._shareIntercomAction = undefined;
            this._shareJiraAction = undefined;
            this._shareJiraDataSource = undefined;
            this._shareKnowledgeBases = undefined;
            this._shareLinearAction = undefined;
            this._shareMariaDbDataSource = undefined;
            this._shareMcpAction = undefined;
            this._shareMondayAction = undefined;
            this._shareMongoAtlasDataSource = undefined;
            this._shareMongoDbDataSource = undefined;
            this._shareMsExchangeAction = undefined;
            this._shareMsTeamsAction = undefined;
            this._shareMySqlDataSource = undefined;
            this._shareNewRelicAction = undefined;
            this._shareNotionAction = undefined;
            this._shareOneDriveAction = undefined;
            this._shareOneDriveKnowledgeBase = undefined;
            this._shareOpenApiAction = undefined;
            this._shareOpenSearchDataSource = undefined;
            this._shareOracleDataSource = undefined;
            this._sharePagerDutyAction = undefined;
            this._sharePayPalDataSource = undefined;
            this._sharePointAction = undefined;
            this._sharePointKnowledgeBase = undefined;
            this._sharePostgreSqlDataSource = undefined;
            this._sharePrestoDataSource = undefined;
            this._shareQBusinessKnowledgeBase = undefined;
            this._shareRadiantDataSource = undefined;
            this._shareRdsDataSource = undefined;
            this._shareRedshiftAutoDiscoveredDataSource = undefined;
            this._shareRedshiftManualDataSource = undefined;
            this._shareS3AnalyticsDataSource = undefined;
            this._shareS3DataSource = undefined;
            this._shareS3KnowledgeBase = undefined;
            this._shareS3TablesDataSource = undefined;
            this._shareSalesforceAction = undefined;
            this._shareSalesforceDataSource = undefined;
            this._shareSandPGlobalEnergyAction = undefined;
            this._shareSandPgmiAction = undefined;
            this._shareSapBillOfMaterialAction = undefined;
            this._shareSapBusinessPartnerAction = undefined;
            this._shareSapHanaDataSource = undefined;
            this._shareSapMaterialStockAction = undefined;
            this._shareSapPhysicalInventoryAction = undefined;
            this._shareSapProductMasterDataAction = undefined;
            this._shareServiceNowAction = undefined;
            this._shareServiceNowDataSource = undefined;
            this._shareSharePointAction = undefined;
            this._shareSharePointKnowledgeBase = undefined;
            this._shareSlackAction = undefined;
            this._shareSmartsheetAction = undefined;
            this._shareSnowflakeDataSource = undefined;
            this._shareSpaces = undefined;
            this._shareSparkDataSource = undefined;
            this._shareSqlServerDataSource = undefined;
            this._shareSquareDataSource = undefined;
            this._shareStarburstDataSource = undefined;
            this._shareTeradataDataSource = undefined;
            this._shareTextractAction = undefined;
            this._shareTimestreamDataSource = undefined;
            this._shareTrinoDataSource = undefined;
            this._shareTwitterDataSource = undefined;
            this._shareWebCrawlerKnowledgeBase = undefined;
            this._shareZendeskAction = undefined;
            this._slackAction = undefined;
            this._smartsheetAction = undefined;
            this._snowflakeDataSource = undefined;
            this._space = undefined;
            this._sparkDataSource = undefined;
            this._sqlServerDataSource = undefined;
            this._squareDataSource = undefined;
            this._starburstDataSource = undefined;
            this._subscribeDashboardEmailReports = undefined;
            this._teradataDataSource = undefined;
            this._textractAction = undefined;
            this._timestreamDataSource = undefined;
            this._topic = undefined;
            this._trigger = undefined;
            this._trinoDataSource = undefined;
            this._twitterDataSource = undefined;
            this._updateAdobeAnalyticsDataSource = undefined;
            this._updateAthenaDataSource = undefined;
            this._updateAuroraDataSource = undefined;
            this._updateDatabricksDataSource = undefined;
            this._updateDb2DataSource = undefined;
            this._updateDenodoDataSource = undefined;
            this._updateDocumentDbDataSource = undefined;
            this._updateDremioDataSource = undefined;
            this._updateDynamoDbDataSource = undefined;
            this._updateExasolDataSource = undefined;
            this._updateFileDataSource = undefined;
            this._updateGitHubDataSource = undefined;
            this._updateGoogleAnalyticsDataSource = undefined;
            this._updateGoogleBigQueryDataSource = undefined;
            this._updateGoogleSheetsDataSource = undefined;
            this._updateImpalaDataSource = undefined;
            this._updateJiraDataSource = undefined;
            this._updateMariaDbDataSource = undefined;
            this._updateMongoAtlasDataSource = undefined;
            this._updateMongoDbDataSource = undefined;
            this._updateMySqlDataSource = undefined;
            this._updateOpenSearchDataSource = undefined;
            this._updateOracleDataSource = undefined;
            this._updatePayPalDataSource = undefined;
            this._updatePostgreSqlDataSource = undefined;
            this._updatePrestoDataSource = undefined;
            this._updateRadiantDataSource = undefined;
            this._updateRdsDataSource = undefined;
            this._updateRedshiftAutoDiscoveredDataSource = undefined;
            this._updateRedshiftManualDataSource = undefined;
            this._updateS3AnalyticsDataSource = undefined;
            this._updateS3DataSource = undefined;
            this._updateS3TablesDataSource = undefined;
            this._updateSalesforceDataSource = undefined;
            this._updateSapHanaDataSource = undefined;
            this._updateServiceNowDataSource = undefined;
            this._updateSnowflakeDataSource = undefined;
            this._updateSparkDataSource = undefined;
            this._updateSqlServerDataSource = undefined;
            this._updateSquareDataSource = undefined;
            this._updateStarburstDataSource = undefined;
            this._updateTeradataDataSource = undefined;
            this._updateTimestreamDataSource = undefined;
            this._updateTrinoDataSource = undefined;
            this._updateTwitterDataSource = undefined;
            this._useAgentWebSearch = undefined;
            this._useAmazonBedrockArsAction = undefined;
            this._useAmazonBedrockFsAction = undefined;
            this._useAmazonBedrockKrsAction = undefined;
            this._useAmazonSThreeAction = undefined;
            this._useAsanaAction = undefined;
            this._useBambooHrAction = undefined;
            this._useBedrockManagedKnowledgeBase = undefined;
            this._useBedrockModels = undefined;
            this._useBoxAgentAction = undefined;
            this._useBoxKnowledgeBase = undefined;
            this._useBrowserExtension = undefined;
            this._useCanvaAgentAction = undefined;
            this._useComprehendAction = undefined;
            this._useComprehendMedicalAction = undefined;
            this._useConfluenceAction = undefined;
            this._useConfluenceKnowledgeBase = undefined;
            this._useExcelAddInExtension = undefined;
            this._useFactSetAction = undefined;
            this._useGenericHttpAction = undefined;
            this._useGithubAction = undefined;
            this._useGoogleCalendarAction = undefined;
            this._useGoogleDriveKnowledgeBase = undefined;
            this._useHubspotAction = undefined;
            this._useHuggingFaceAction = undefined;
            this._useIdcKnowledgeBase = undefined;
            this._useIntercomAction = undefined;
            this._useJiraAction = undefined;
            this._useLinearAction = undefined;
            this._useMcpAction = undefined;
            this._useMondayAction = undefined;
            this._useMsExchangeAction = undefined;
            this._useMsTeamsAction = undefined;
            this._useNewRelicAction = undefined;
            this._useNotionAction = undefined;
            this._useOneDriveAction = undefined;
            this._useOneDriveKnowledgeBase = undefined;
            this._useOpenApiAction = undefined;
            this._useOutlookAddInExtension = undefined;
            this._usePagerDutyAction = undefined;
            this._usePowerpointAddInExtension = undefined;
            this._useQBusinessKnowledgeBase = undefined;
            this._useS3KnowledgeBase = undefined;
            this._useSalesforceAction = undefined;
            this._useSandPGlobalEnergyAction = undefined;
            this._useSandPgmiAction = undefined;
            this._useSapBillOfMaterialAction = undefined;
            this._useSapBusinessPartnerAction = undefined;
            this._useSapMaterialStockAction = undefined;
            this._useSapPhysicalInventoryAction = undefined;
            this._useSapProductMasterDataAction = undefined;
            this._useServiceNowAction = undefined;
            this._useSharePointAction = undefined;
            this._useSharePointKnowledgeBase = undefined;
            this._useSlackAction = undefined;
            this._useSmartsheetAction = undefined;
            this._useTextractAction = undefined;
            this._useWebCrawlerKnowledgeBase = undefined;
            this._useWordAddInExtension = undefined;
            this._useZendeskAction = undefined;
            this._viewAccountSpiceCapacity = undefined;
            this._webCrawlerKnowledgeBase = undefined;
            this._zendeskAction = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accessAppsNativeDataStore = value.accessAppsNativeDataStore;
            this._action = value.action;
            this._addOrRunAnomalyDetectionForAnalyses = value.addOrRunAnomalyDetectionForAnalyses;
            this._adobeAnalyticsDataSource = value.adobeAnalyticsDataSource;
            this._amazonBedrockArsAction = value.amazonBedrockArsAction;
            this._amazonBedrockFsAction = value.amazonBedrockFsAction;
            this._amazonBedrockKrsAction = value.amazonBedrockKrsAction;
            this._amazonSThreeAction = value.amazonSThreeAction;
            this._analysis = value.analysis;
            this._approveFlowShareRequests = value.approveFlowShareRequests;
            this._apps = value.apps;
            this._asanaAction = value.asanaAction;
            this._athenaDataSource = value.athenaDataSource;
            this._auroraDataSource = value.auroraDataSource;
            this._automate = value.automate;
            this._bambooHrAction = value.bambooHrAction;
            this._bedrockManagedKnowledgeBase = value.bedrockManagedKnowledgeBase;
            this._boxAgentAction = value.boxAgentAction;
            this._boxKnowledgeBase = value.boxKnowledgeBase;
            this._buildCalculatedFieldWithQ = value.buildCalculatedFieldWithQ;
            this._canvaAgentAction = value.canvaAgentAction;
            this._chatAgent = value.chatAgent;
            this._comprehendAction = value.comprehendAction;
            this._comprehendMedicalAction = value.comprehendMedicalAction;
            this._confluenceAction = value.confluenceAction;
            this._confluenceKnowledgeBase = value.confluenceKnowledgeBase;
            this._createAdobeAnalyticsDataSource = value.createAdobeAnalyticsDataSource;
            this._createAndUpdateAmazonBedrockArsAction = value.createAndUpdateAmazonBedrockArsAction;
            this._createAndUpdateAmazonBedrockFsAction = value.createAndUpdateAmazonBedrockFsAction;
            this._createAndUpdateAmazonBedrockKrsAction = value.createAndUpdateAmazonBedrockKrsAction;
            this._createAndUpdateAmazonSThreeAction = value.createAndUpdateAmazonSThreeAction;
            this._createAndUpdateApps = value.createAndUpdateApps;
            this._createAndUpdateAsanaAction = value.createAndUpdateAsanaAction;
            this._createAndUpdateBambooHrAction = value.createAndUpdateBambooHrAction;
            this._createAndUpdateBedrockManagedKnowledgeBase = value.createAndUpdateBedrockManagedKnowledgeBase;
            this._createAndUpdateBoxAgentAction = value.createAndUpdateBoxAgentAction;
            this._createAndUpdateBoxKnowledgeBase = value.createAndUpdateBoxKnowledgeBase;
            this._createAndUpdateCanvaAgentAction = value.createAndUpdateCanvaAgentAction;
            this._createAndUpdateComprehendAction = value.createAndUpdateComprehendAction;
            this._createAndUpdateComprehendMedicalAction = value.createAndUpdateComprehendMedicalAction;
            this._createAndUpdateConfluenceAction = value.createAndUpdateConfluenceAction;
            this._createAndUpdateConfluenceKnowledgeBase = value.createAndUpdateConfluenceKnowledgeBase;
            this._createAndUpdateDashboardEmailReports = value.createAndUpdateDashboardEmailReports;
            this._createAndUpdateDataSources = value.createAndUpdateDataSources;
            this._createAndUpdateDatasets = value.createAndUpdateDatasets;
            this._createAndUpdateFactSetAction = value.createAndUpdateFactSetAction;
            this._createAndUpdateGenericHttpAction = value.createAndUpdateGenericHttpAction;
            this._createAndUpdateGithubAction = value.createAndUpdateGithubAction;
            this._createAndUpdateGoogleCalendarAction = value.createAndUpdateGoogleCalendarAction;
            this._createAndUpdateGoogleDriveKnowledgeBase = value.createAndUpdateGoogleDriveKnowledgeBase;
            this._createAndUpdateHubspotAction = value.createAndUpdateHubspotAction;
            this._createAndUpdateHuggingFaceAction = value.createAndUpdateHuggingFaceAction;
            this._createAndUpdateIdcKnowledgeBase = value.createAndUpdateIdcKnowledgeBase;
            this._createAndUpdateIntercomAction = value.createAndUpdateIntercomAction;
            this._createAndUpdateJiraAction = value.createAndUpdateJiraAction;
            this._createAndUpdateKnowledgeBases = value.createAndUpdateKnowledgeBases;
            this._createAndUpdateLinearAction = value.createAndUpdateLinearAction;
            this._createAndUpdateMcpAction = value.createAndUpdateMcpAction;
            this._createAndUpdateMondayAction = value.createAndUpdateMondayAction;
            this._createAndUpdateMsExchangeAction = value.createAndUpdateMsExchangeAction;
            this._createAndUpdateMsTeamsAction = value.createAndUpdateMsTeamsAction;
            this._createAndUpdateNewRelicAction = value.createAndUpdateNewRelicAction;
            this._createAndUpdateNotionAction = value.createAndUpdateNotionAction;
            this._createAndUpdateOneDriveAction = value.createAndUpdateOneDriveAction;
            this._createAndUpdateOneDriveKnowledgeBase = value.createAndUpdateOneDriveKnowledgeBase;
            this._createAndUpdateOpenApiAction = value.createAndUpdateOpenApiAction;
            this._createAndUpdatePagerDutyAction = value.createAndUpdatePagerDutyAction;
            this._createAndUpdateQBusinessKnowledgeBase = value.createAndUpdateQBusinessKnowledgeBase;
            this._createAndUpdateS3KnowledgeBase = value.createAndUpdateS3KnowledgeBase;
            this._createAndUpdateSalesforceAction = value.createAndUpdateSalesforceAction;
            this._createAndUpdateSandPGlobalEnergyAction = value.createAndUpdateSandPGlobalEnergyAction;
            this._createAndUpdateSandPgmiAction = value.createAndUpdateSandPgmiAction;
            this._createAndUpdateSapBillOfMaterialAction = value.createAndUpdateSapBillOfMaterialAction;
            this._createAndUpdateSapBusinessPartnerAction = value.createAndUpdateSapBusinessPartnerAction;
            this._createAndUpdateSapMaterialStockAction = value.createAndUpdateSapMaterialStockAction;
            this._createAndUpdateSapPhysicalInventoryAction = value.createAndUpdateSapPhysicalInventoryAction;
            this._createAndUpdateSapProductMasterDataAction = value.createAndUpdateSapProductMasterDataAction;
            this._createAndUpdateServiceNowAction = value.createAndUpdateServiceNowAction;
            this._createAndUpdateSharePointAction = value.createAndUpdateSharePointAction;
            this._createAndUpdateSharePointKnowledgeBase = value.createAndUpdateSharePointKnowledgeBase;
            this._createAndUpdateSlackAction = value.createAndUpdateSlackAction;
            this._createAndUpdateSmartsheetAction = value.createAndUpdateSmartsheetAction;
            this._createAndUpdateTextractAction = value.createAndUpdateTextractAction;
            this._createAndUpdateThemes = value.createAndUpdateThemes;
            this._createAndUpdateThresholdAlerts = value.createAndUpdateThresholdAlerts;
            this._createAndUpdateWebCrawlerKnowledgeBase = value.createAndUpdateWebCrawlerKnowledgeBase;
            this._createAndUpdateZendeskAction = value.createAndUpdateZendeskAction;
            this._createAthenaDataSource = value.createAthenaDataSource;
            this._createAuroraDataSource = value.createAuroraDataSource;
            this._createChatAgents = value.createChatAgents;
            this._createDashboardExecutiveSummaryWithQ = value.createDashboardExecutiveSummaryWithQ;
            this._createDatabricksDataSource = value.createDatabricksDataSource;
            this._createDb2DataSource = value.createDb2DataSource;
            this._createDenodoDataSource = value.createDenodoDataSource;
            this._createDocumentDbDataSource = value.createDocumentDbDataSource;
            this._createDremioDataSource = value.createDremioDataSource;
            this._createDynamoDbDataSource = value.createDynamoDbDataSource;
            this._createExasolDataSource = value.createExasolDataSource;
            this._createFileDataSource = value.createFileDataSource;
            this._createGitHubDataSource = value.createGitHubDataSource;
            this._createGoogleAnalyticsDataSource = value.createGoogleAnalyticsDataSource;
            this._createGoogleBigQueryDataSource = value.createGoogleBigQueryDataSource;
            this._createGoogleSheetsDataSource = value.createGoogleSheetsDataSource;
            this._createImpalaDataSource = value.createImpalaDataSource;
            this._createJiraDataSource = value.createJiraDataSource;
            this._createMariaDbDataSource = value.createMariaDbDataSource;
            this._createMongoAtlasDataSource = value.createMongoAtlasDataSource;
            this._createMongoDbDataSource = value.createMongoDbDataSource;
            this._createMySqlDataSource = value.createMySqlDataSource;
            this._createOpenSearchDataSource = value.createOpenSearchDataSource;
            this._createOracleDataSource = value.createOracleDataSource;
            this._createPayPalDataSource = value.createPayPalDataSource;
            this._createPostgreSqlDataSource = value.createPostgreSqlDataSource;
            this._createPrestoDataSource = value.createPrestoDataSource;
            this._createRadiantDataSource = value.createRadiantDataSource;
            this._createRdsDataSource = value.createRdsDataSource;
            this._createRedshiftAutoDiscoveredDataSource = value.createRedshiftAutoDiscoveredDataSource;
            this._createRedshiftManualDataSource = value.createRedshiftManualDataSource;
            this._createS3AnalyticsDataSource = value.createS3AnalyticsDataSource;
            this._createS3DataSource = value.createS3DataSource;
            this._createS3TablesDataSource = value.createS3TablesDataSource;
            this._createSalesforceDataSource = value.createSalesforceDataSource;
            this._createSapHanaDataSource = value.createSapHanaDataSource;
            this._createServiceNowDataSource = value.createServiceNowDataSource;
            this._createSharedFolders = value.createSharedFolders;
            this._createSnowflakeDataSource = value.createSnowflakeDataSource;
            this._createSpaces = value.createSpaces;
            this._createSparkDataSource = value.createSparkDataSource;
            this._createSpiceDataset = value.createSpiceDataset;
            this._createSqlServerDataSource = value.createSqlServerDataSource;
            this._createSquareDataSource = value.createSquareDataSource;
            this._createStarburstDataSource = value.createStarburstDataSource;
            this._createTeradataDataSource = value.createTeradataDataSource;
            this._createTimestreamDataSource = value.createTimestreamDataSource;
            this._createTrinoDataSource = value.createTrinoDataSource;
            this._createTwitterDataSource = value.createTwitterDataSource;
            this._dashboard = value.dashboard;
            this._databricksDataSource = value.databricksDataSource;
            this._db2DataSource = value.db2DataSource;
            this._denodoDataSource = value.denodoDataSource;
            this._documentDbDataSource = value.documentDbDataSource;
            this._dremioDataSource = value.dremioDataSource;
            this._dynamoDbDataSource = value.dynamoDbDataSource;
            this._editVisualWithQ = value.editVisualWithQ;
            this._exasolDataSource = value.exasolDataSource;
            this._exportToCsv = value.exportToCsv;
            this._exportToCsvInScheduledReports = value.exportToCsvInScheduledReports;
            this._exportToExcel = value.exportToExcel;
            this._exportToExcelInScheduledReports = value.exportToExcelInScheduledReports;
            this._exportToPdf = value.exportToPdf;
            this._exportToPdfInScheduledReports = value.exportToPdfInScheduledReports;
            this._extension = value.extension;
            this._factSetAction = value.factSetAction;
            this._fileDataSource = value.fileDataSource;
            this._flow = value.flow;
            this._genericHttpAction = value.genericHttpAction;
            this._gitHubDataSource = value.gitHubDataSource;
            this._githubAction = value.githubAction;
            this._googleAnalyticsDataSource = value.googleAnalyticsDataSource;
            this._googleBigQueryDataSource = value.googleBigQueryDataSource;
            this._googleCalendarAction = value.googleCalendarAction;
            this._googleDriveKnowledgeBase = value.googleDriveKnowledgeBase;
            this._googleSheetsDataSource = value.googleSheetsDataSource;
            this._hubspotAction = value.hubspotAction;
            this._huggingFaceAction = value.huggingFaceAction;
            this._idcKnowledgeBase = value.idcKnowledgeBase;
            this._impalaDataSource = value.impalaDataSource;
            this._inboundEmailTrigger = value.inboundEmailTrigger;
            this._includeContentInScheduledReportsEmail = value.includeContentInScheduledReportsEmail;
            this._intercomAction = value.intercomAction;
            this._invokeAppsAiInference = value.invokeAppsAiInference;
            this._jiraAction = value.jiraAction;
            this._jiraDataSource = value.jiraDataSource;
            this._knowledgeBase = value.knowledgeBase;
            this._linearAction = value.linearAction;
            this._manageSharedFolders = value.manageSharedFolders;
            this._mariaDbDataSource = value.mariaDbDataSource;
            this._mcpAction = value.mcpAction;
            this._mondayAction = value.mondayAction;
            this._mongoAtlasDataSource = value.mongoAtlasDataSource;
            this._mongoDbDataSource = value.mongoDbDataSource;
            this._msExchangeAction = value.msExchangeAction;
            this._msTeamsAction = value.msTeamsAction;
            this._mySqlDataSource = value.mySqlDataSource;
            this._newRelicAction = value.newRelicAction;
            this._notionAction = value.notionAction;
            this._oneDriveAction = value.oneDriveAction;
            this._oneDriveKnowledgeBase = value.oneDriveKnowledgeBase;
            this._openApiAction = value.openApiAction;
            this._openSearchDataSource = value.openSearchDataSource;
            this._oracleDataSource = value.oracleDataSource;
            this._pagerDutyAction = value.pagerDutyAction;
            this._payPalDataSource = value.payPalDataSource;
            this._performFlowUiTask = value.performFlowUiTask;
            this._postgreSqlDataSource = value.postgreSqlDataSource;
            this._prestoDataSource = value.prestoDataSource;
            this._printReports = value.printReports;
            this._publishWithoutApproval = value.publishWithoutApproval;
            this._qBusinessKnowledgeBase = value.qBusinessKnowledgeBase;
            this._quickEventTrigger = value.quickEventTrigger;
            this._radiantDataSource = value.radiantDataSource;
            this._rdsDataSource = value.rdsDataSource;
            this._redshiftAutoDiscoveredDataSource = value.redshiftAutoDiscoveredDataSource;
            this._redshiftManualDataSource = value.redshiftManualDataSource;
            this._renameSharedFolders = value.renameSharedFolders;
            this._research = value.research;
            this._s3AnalyticsDataSource = value.s3AnalyticsDataSource;
            this._s3DataSource = value.s3DataSource;
            this._s3KnowledgeBase = value.s3KnowledgeBase;
            this._s3TablesDataSource = value.s3TablesDataSource;
            this._salesforceAction = value.salesforceAction;
            this._salesforceDataSource = value.salesforceDataSource;
            this._sandPGlobalEnergyAction = value.sandPGlobalEnergyAction;
            this._sandPgmiAction = value.sandPgmiAction;
            this._sapBillOfMaterialAction = value.sapBillOfMaterialAction;
            this._sapBusinessPartnerAction = value.sapBusinessPartnerAction;
            this._sapHanaDataSource = value.sapHanaDataSource;
            this._sapMaterialStockAction = value.sapMaterialStockAction;
            this._sapPhysicalInventoryAction = value.sapPhysicalInventoryAction;
            this._sapProductMasterDataAction = value.sapProductMasterDataAction;
            this._scheduleTrigger = value.scheduleTrigger;
            this._serviceNowAction = value.serviceNowAction;
            this._serviceNowDataSource = value.serviceNowDataSource;
            this._shareAdobeAnalyticsDataSource = value.shareAdobeAnalyticsDataSource;
            this._shareAmazonBedrockArsAction = value.shareAmazonBedrockArsAction;
            this._shareAmazonBedrockFsAction = value.shareAmazonBedrockFsAction;
            this._shareAmazonBedrockKrsAction = value.shareAmazonBedrockKrsAction;
            this._shareAmazonSThreeAction = value.shareAmazonSThreeAction;
            this._shareAnalyses = value.shareAnalyses;
            this._shareApps = value.shareApps;
            this._shareAsanaAction = value.shareAsanaAction;
            this._shareAthenaDataSource = value.shareAthenaDataSource;
            this._shareAuroraDataSource = value.shareAuroraDataSource;
            this._shareBambooHrAction = value.shareBambooHrAction;
            this._shareBedrockManagedKnowledgeBase = value.shareBedrockManagedKnowledgeBase;
            this._shareBoxAgentAction = value.shareBoxAgentAction;
            this._shareBoxKnowledgeBase = value.shareBoxKnowledgeBase;
            this._shareCanvaAgentAction = value.shareCanvaAgentAction;
            this._shareChatAgents = value.shareChatAgents;
            this._shareComprehendAction = value.shareComprehendAction;
            this._shareComprehendMedicalAction = value.shareComprehendMedicalAction;
            this._shareConfluenceAction = value.shareConfluenceAction;
            this._shareConfluenceKnowledgeBase = value.shareConfluenceKnowledgeBase;
            this._shareDashboards = value.shareDashboards;
            this._shareDataSources = value.shareDataSources;
            this._shareDatabricksDataSource = value.shareDatabricksDataSource;
            this._shareDatasets = value.shareDatasets;
            this._shareDb2DataSource = value.shareDb2DataSource;
            this._shareDenodoDataSource = value.shareDenodoDataSource;
            this._shareDocumentDbDataSource = value.shareDocumentDbDataSource;
            this._shareDremioDataSource = value.shareDremioDataSource;
            this._shareDynamoDbDataSource = value.shareDynamoDbDataSource;
            this._shareExasolDataSource = value.shareExasolDataSource;
            this._shareFactSetAction = value.shareFactSetAction;
            this._shareFileDataSource = value.shareFileDataSource;
            this._shareGenericHttpAction = value.shareGenericHttpAction;
            this._shareGitHubDataSource = value.shareGitHubDataSource;
            this._shareGithubAction = value.shareGithubAction;
            this._shareGoogleAnalyticsDataSource = value.shareGoogleAnalyticsDataSource;
            this._shareGoogleBigQueryDataSource = value.shareGoogleBigQueryDataSource;
            this._shareGoogleCalendarAction = value.shareGoogleCalendarAction;
            this._shareGoogleDriveKnowledgeBase = value.shareGoogleDriveKnowledgeBase;
            this._shareGoogleSheetsDataSource = value.shareGoogleSheetsDataSource;
            this._shareHubspotAction = value.shareHubspotAction;
            this._shareHuggingFaceAction = value.shareHuggingFaceAction;
            this._shareIdcKnowledgeBase = value.shareIdcKnowledgeBase;
            this._shareImpalaDataSource = value.shareImpalaDataSource;
            this._shareIntercomAction = value.shareIntercomAction;
            this._shareJiraAction = value.shareJiraAction;
            this._shareJiraDataSource = value.shareJiraDataSource;
            this._shareKnowledgeBases = value.shareKnowledgeBases;
            this._shareLinearAction = value.shareLinearAction;
            this._shareMariaDbDataSource = value.shareMariaDbDataSource;
            this._shareMcpAction = value.shareMcpAction;
            this._shareMondayAction = value.shareMondayAction;
            this._shareMongoAtlasDataSource = value.shareMongoAtlasDataSource;
            this._shareMongoDbDataSource = value.shareMongoDbDataSource;
            this._shareMsExchangeAction = value.shareMsExchangeAction;
            this._shareMsTeamsAction = value.shareMsTeamsAction;
            this._shareMySqlDataSource = value.shareMySqlDataSource;
            this._shareNewRelicAction = value.shareNewRelicAction;
            this._shareNotionAction = value.shareNotionAction;
            this._shareOneDriveAction = value.shareOneDriveAction;
            this._shareOneDriveKnowledgeBase = value.shareOneDriveKnowledgeBase;
            this._shareOpenApiAction = value.shareOpenApiAction;
            this._shareOpenSearchDataSource = value.shareOpenSearchDataSource;
            this._shareOracleDataSource = value.shareOracleDataSource;
            this._sharePagerDutyAction = value.sharePagerDutyAction;
            this._sharePayPalDataSource = value.sharePayPalDataSource;
            this._sharePointAction = value.sharePointAction;
            this._sharePointKnowledgeBase = value.sharePointKnowledgeBase;
            this._sharePostgreSqlDataSource = value.sharePostgreSqlDataSource;
            this._sharePrestoDataSource = value.sharePrestoDataSource;
            this._shareQBusinessKnowledgeBase = value.shareQBusinessKnowledgeBase;
            this._shareRadiantDataSource = value.shareRadiantDataSource;
            this._shareRdsDataSource = value.shareRdsDataSource;
            this._shareRedshiftAutoDiscoveredDataSource = value.shareRedshiftAutoDiscoveredDataSource;
            this._shareRedshiftManualDataSource = value.shareRedshiftManualDataSource;
            this._shareS3AnalyticsDataSource = value.shareS3AnalyticsDataSource;
            this._shareS3DataSource = value.shareS3DataSource;
            this._shareS3KnowledgeBase = value.shareS3KnowledgeBase;
            this._shareS3TablesDataSource = value.shareS3TablesDataSource;
            this._shareSalesforceAction = value.shareSalesforceAction;
            this._shareSalesforceDataSource = value.shareSalesforceDataSource;
            this._shareSandPGlobalEnergyAction = value.shareSandPGlobalEnergyAction;
            this._shareSandPgmiAction = value.shareSandPgmiAction;
            this._shareSapBillOfMaterialAction = value.shareSapBillOfMaterialAction;
            this._shareSapBusinessPartnerAction = value.shareSapBusinessPartnerAction;
            this._shareSapHanaDataSource = value.shareSapHanaDataSource;
            this._shareSapMaterialStockAction = value.shareSapMaterialStockAction;
            this._shareSapPhysicalInventoryAction = value.shareSapPhysicalInventoryAction;
            this._shareSapProductMasterDataAction = value.shareSapProductMasterDataAction;
            this._shareServiceNowAction = value.shareServiceNowAction;
            this._shareServiceNowDataSource = value.shareServiceNowDataSource;
            this._shareSharePointAction = value.shareSharePointAction;
            this._shareSharePointKnowledgeBase = value.shareSharePointKnowledgeBase;
            this._shareSlackAction = value.shareSlackAction;
            this._shareSmartsheetAction = value.shareSmartsheetAction;
            this._shareSnowflakeDataSource = value.shareSnowflakeDataSource;
            this._shareSpaces = value.shareSpaces;
            this._shareSparkDataSource = value.shareSparkDataSource;
            this._shareSqlServerDataSource = value.shareSqlServerDataSource;
            this._shareSquareDataSource = value.shareSquareDataSource;
            this._shareStarburstDataSource = value.shareStarburstDataSource;
            this._shareTeradataDataSource = value.shareTeradataDataSource;
            this._shareTextractAction = value.shareTextractAction;
            this._shareTimestreamDataSource = value.shareTimestreamDataSource;
            this._shareTrinoDataSource = value.shareTrinoDataSource;
            this._shareTwitterDataSource = value.shareTwitterDataSource;
            this._shareWebCrawlerKnowledgeBase = value.shareWebCrawlerKnowledgeBase;
            this._shareZendeskAction = value.shareZendeskAction;
            this._slackAction = value.slackAction;
            this._smartsheetAction = value.smartsheetAction;
            this._snowflakeDataSource = value.snowflakeDataSource;
            this._space = value.space;
            this._sparkDataSource = value.sparkDataSource;
            this._sqlServerDataSource = value.sqlServerDataSource;
            this._squareDataSource = value.squareDataSource;
            this._starburstDataSource = value.starburstDataSource;
            this._subscribeDashboardEmailReports = value.subscribeDashboardEmailReports;
            this._teradataDataSource = value.teradataDataSource;
            this._textractAction = value.textractAction;
            this._timestreamDataSource = value.timestreamDataSource;
            this._topic = value.topic;
            this._trigger = value.trigger;
            this._trinoDataSource = value.trinoDataSource;
            this._twitterDataSource = value.twitterDataSource;
            this._updateAdobeAnalyticsDataSource = value.updateAdobeAnalyticsDataSource;
            this._updateAthenaDataSource = value.updateAthenaDataSource;
            this._updateAuroraDataSource = value.updateAuroraDataSource;
            this._updateDatabricksDataSource = value.updateDatabricksDataSource;
            this._updateDb2DataSource = value.updateDb2DataSource;
            this._updateDenodoDataSource = value.updateDenodoDataSource;
            this._updateDocumentDbDataSource = value.updateDocumentDbDataSource;
            this._updateDremioDataSource = value.updateDremioDataSource;
            this._updateDynamoDbDataSource = value.updateDynamoDbDataSource;
            this._updateExasolDataSource = value.updateExasolDataSource;
            this._updateFileDataSource = value.updateFileDataSource;
            this._updateGitHubDataSource = value.updateGitHubDataSource;
            this._updateGoogleAnalyticsDataSource = value.updateGoogleAnalyticsDataSource;
            this._updateGoogleBigQueryDataSource = value.updateGoogleBigQueryDataSource;
            this._updateGoogleSheetsDataSource = value.updateGoogleSheetsDataSource;
            this._updateImpalaDataSource = value.updateImpalaDataSource;
            this._updateJiraDataSource = value.updateJiraDataSource;
            this._updateMariaDbDataSource = value.updateMariaDbDataSource;
            this._updateMongoAtlasDataSource = value.updateMongoAtlasDataSource;
            this._updateMongoDbDataSource = value.updateMongoDbDataSource;
            this._updateMySqlDataSource = value.updateMySqlDataSource;
            this._updateOpenSearchDataSource = value.updateOpenSearchDataSource;
            this._updateOracleDataSource = value.updateOracleDataSource;
            this._updatePayPalDataSource = value.updatePayPalDataSource;
            this._updatePostgreSqlDataSource = value.updatePostgreSqlDataSource;
            this._updatePrestoDataSource = value.updatePrestoDataSource;
            this._updateRadiantDataSource = value.updateRadiantDataSource;
            this._updateRdsDataSource = value.updateRdsDataSource;
            this._updateRedshiftAutoDiscoveredDataSource = value.updateRedshiftAutoDiscoveredDataSource;
            this._updateRedshiftManualDataSource = value.updateRedshiftManualDataSource;
            this._updateS3AnalyticsDataSource = value.updateS3AnalyticsDataSource;
            this._updateS3DataSource = value.updateS3DataSource;
            this._updateS3TablesDataSource = value.updateS3TablesDataSource;
            this._updateSalesforceDataSource = value.updateSalesforceDataSource;
            this._updateSapHanaDataSource = value.updateSapHanaDataSource;
            this._updateServiceNowDataSource = value.updateServiceNowDataSource;
            this._updateSnowflakeDataSource = value.updateSnowflakeDataSource;
            this._updateSparkDataSource = value.updateSparkDataSource;
            this._updateSqlServerDataSource = value.updateSqlServerDataSource;
            this._updateSquareDataSource = value.updateSquareDataSource;
            this._updateStarburstDataSource = value.updateStarburstDataSource;
            this._updateTeradataDataSource = value.updateTeradataDataSource;
            this._updateTimestreamDataSource = value.updateTimestreamDataSource;
            this._updateTrinoDataSource = value.updateTrinoDataSource;
            this._updateTwitterDataSource = value.updateTwitterDataSource;
            this._useAgentWebSearch = value.useAgentWebSearch;
            this._useAmazonBedrockArsAction = value.useAmazonBedrockArsAction;
            this._useAmazonBedrockFsAction = value.useAmazonBedrockFsAction;
            this._useAmazonBedrockKrsAction = value.useAmazonBedrockKrsAction;
            this._useAmazonSThreeAction = value.useAmazonSThreeAction;
            this._useAsanaAction = value.useAsanaAction;
            this._useBambooHrAction = value.useBambooHrAction;
            this._useBedrockManagedKnowledgeBase = value.useBedrockManagedKnowledgeBase;
            this._useBedrockModels = value.useBedrockModels;
            this._useBoxAgentAction = value.useBoxAgentAction;
            this._useBoxKnowledgeBase = value.useBoxKnowledgeBase;
            this._useBrowserExtension = value.useBrowserExtension;
            this._useCanvaAgentAction = value.useCanvaAgentAction;
            this._useComprehendAction = value.useComprehendAction;
            this._useComprehendMedicalAction = value.useComprehendMedicalAction;
            this._useConfluenceAction = value.useConfluenceAction;
            this._useConfluenceKnowledgeBase = value.useConfluenceKnowledgeBase;
            this._useExcelAddInExtension = value.useExcelAddInExtension;
            this._useFactSetAction = value.useFactSetAction;
            this._useGenericHttpAction = value.useGenericHttpAction;
            this._useGithubAction = value.useGithubAction;
            this._useGoogleCalendarAction = value.useGoogleCalendarAction;
            this._useGoogleDriveKnowledgeBase = value.useGoogleDriveKnowledgeBase;
            this._useHubspotAction = value.useHubspotAction;
            this._useHuggingFaceAction = value.useHuggingFaceAction;
            this._useIdcKnowledgeBase = value.useIdcKnowledgeBase;
            this._useIntercomAction = value.useIntercomAction;
            this._useJiraAction = value.useJiraAction;
            this._useLinearAction = value.useLinearAction;
            this._useMcpAction = value.useMcpAction;
            this._useMondayAction = value.useMondayAction;
            this._useMsExchangeAction = value.useMsExchangeAction;
            this._useMsTeamsAction = value.useMsTeamsAction;
            this._useNewRelicAction = value.useNewRelicAction;
            this._useNotionAction = value.useNotionAction;
            this._useOneDriveAction = value.useOneDriveAction;
            this._useOneDriveKnowledgeBase = value.useOneDriveKnowledgeBase;
            this._useOpenApiAction = value.useOpenApiAction;
            this._useOutlookAddInExtension = value.useOutlookAddInExtension;
            this._usePagerDutyAction = value.usePagerDutyAction;
            this._usePowerpointAddInExtension = value.usePowerpointAddInExtension;
            this._useQBusinessKnowledgeBase = value.useQBusinessKnowledgeBase;
            this._useS3KnowledgeBase = value.useS3KnowledgeBase;
            this._useSalesforceAction = value.useSalesforceAction;
            this._useSandPGlobalEnergyAction = value.useSandPGlobalEnergyAction;
            this._useSandPgmiAction = value.useSandPgmiAction;
            this._useSapBillOfMaterialAction = value.useSapBillOfMaterialAction;
            this._useSapBusinessPartnerAction = value.useSapBusinessPartnerAction;
            this._useSapMaterialStockAction = value.useSapMaterialStockAction;
            this._useSapPhysicalInventoryAction = value.useSapPhysicalInventoryAction;
            this._useSapProductMasterDataAction = value.useSapProductMasterDataAction;
            this._useServiceNowAction = value.useServiceNowAction;
            this._useSharePointAction = value.useSharePointAction;
            this._useSharePointKnowledgeBase = value.useSharePointKnowledgeBase;
            this._useSlackAction = value.useSlackAction;
            this._useSmartsheetAction = value.useSmartsheetAction;
            this._useTextractAction = value.useTextractAction;
            this._useWebCrawlerKnowledgeBase = value.useWebCrawlerKnowledgeBase;
            this._useWordAddInExtension = value.useWordAddInExtension;
            this._useZendeskAction = value.useZendeskAction;
            this._viewAccountSpiceCapacity = value.viewAccountSpiceCapacity;
            this._webCrawlerKnowledgeBase = value.webCrawlerKnowledgeBase;
            this._zendeskAction = value.zendeskAction;
        }
    }

    // access_apps_native_data_store - computed: true, optional: true, required: false
    private _accessAppsNativeDataStore?: string; 
    public get accessAppsNativeDataStore() {
        return this.getStringAttribute('access_apps_native_data_store');
    }
    public set accessAppsNativeDataStore(value: string) {
        this._accessAppsNativeDataStore = value;
    }
    public resetAccessAppsNativeDataStore() {
        this._accessAppsNativeDataStore = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accessAppsNativeDataStoreInput() {
        return this._accessAppsNativeDataStore;
    }

    // action - computed: true, optional: true, required: false
    private _action?: string; 
    public get action() {
        return this.getStringAttribute('action');
    }
    public set action(value: string) {
        this._action = value;
    }
    public resetAction() {
        this._action = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get actionInput() {
        return this._action;
    }

    // add_or_run_anomaly_detection_for_analyses - computed: true, optional: true, required: false
    private _addOrRunAnomalyDetectionForAnalyses?: string; 
    public get addOrRunAnomalyDetectionForAnalyses() {
        return this.getStringAttribute('add_or_run_anomaly_detection_for_analyses');
    }
    public set addOrRunAnomalyDetectionForAnalyses(value: string) {
        this._addOrRunAnomalyDetectionForAnalyses = value;
    }
    public resetAddOrRunAnomalyDetectionForAnalyses() {
        this._addOrRunAnomalyDetectionForAnalyses = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get addOrRunAnomalyDetectionForAnalysesInput() {
        return this._addOrRunAnomalyDetectionForAnalyses;
    }

    // adobe_analytics_data_source - computed: true, optional: true, required: false
    private _adobeAnalyticsDataSource?: string; 
    public get adobeAnalyticsDataSource() {
        return this.getStringAttribute('adobe_analytics_data_source');
    }
    public set adobeAnalyticsDataSource(value: string) {
        this._adobeAnalyticsDataSource = value;
    }
    public resetAdobeAnalyticsDataSource() {
        this._adobeAnalyticsDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get adobeAnalyticsDataSourceInput() {
        return this._adobeAnalyticsDataSource;
    }

    // amazon_bedrock_ars_action - computed: true, optional: true, required: false
    private _amazonBedrockArsAction?: string; 
    public get amazonBedrockArsAction() {
        return this.getStringAttribute('amazon_bedrock_ars_action');
    }
    public set amazonBedrockArsAction(value: string) {
        this._amazonBedrockArsAction = value;
    }
    public resetAmazonBedrockArsAction() {
        this._amazonBedrockArsAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get amazonBedrockArsActionInput() {
        return this._amazonBedrockArsAction;
    }

    // amazon_bedrock_fs_action - computed: true, optional: true, required: false
    private _amazonBedrockFsAction?: string; 
    public get amazonBedrockFsAction() {
        return this.getStringAttribute('amazon_bedrock_fs_action');
    }
    public set amazonBedrockFsAction(value: string) {
        this._amazonBedrockFsAction = value;
    }
    public resetAmazonBedrockFsAction() {
        this._amazonBedrockFsAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get amazonBedrockFsActionInput() {
        return this._amazonBedrockFsAction;
    }

    // amazon_bedrock_krs_action - computed: true, optional: true, required: false
    private _amazonBedrockKrsAction?: string; 
    public get amazonBedrockKrsAction() {
        return this.getStringAttribute('amazon_bedrock_krs_action');
    }
    public set amazonBedrockKrsAction(value: string) {
        this._amazonBedrockKrsAction = value;
    }
    public resetAmazonBedrockKrsAction() {
        this._amazonBedrockKrsAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get amazonBedrockKrsActionInput() {
        return this._amazonBedrockKrsAction;
    }

    // amazon_s_three_action - computed: true, optional: true, required: false
    private _amazonSThreeAction?: string; 
    public get amazonSThreeAction() {
        return this.getStringAttribute('amazon_s_three_action');
    }
    public set amazonSThreeAction(value: string) {
        this._amazonSThreeAction = value;
    }
    public resetAmazonSThreeAction() {
        this._amazonSThreeAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get amazonSThreeActionInput() {
        return this._amazonSThreeAction;
    }

    // analysis - computed: true, optional: true, required: false
    private _analysis?: string; 
    public get analysis() {
        return this.getStringAttribute('analysis');
    }
    public set analysis(value: string) {
        this._analysis = value;
    }
    public resetAnalysis() {
        this._analysis = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get analysisInput() {
        return this._analysis;
    }

    // approve_flow_share_requests - computed: true, optional: true, required: false
    private _approveFlowShareRequests?: string; 
    public get approveFlowShareRequests() {
        return this.getStringAttribute('approve_flow_share_requests');
    }
    public set approveFlowShareRequests(value: string) {
        this._approveFlowShareRequests = value;
    }
    public resetApproveFlowShareRequests() {
        this._approveFlowShareRequests = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get approveFlowShareRequestsInput() {
        return this._approveFlowShareRequests;
    }

    // apps - computed: true, optional: true, required: false
    private _apps?: string; 
    public get apps() {
        return this.getStringAttribute('apps');
    }
    public set apps(value: string) {
        this._apps = value;
    }
    public resetApps() {
        this._apps = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get appsInput() {
        return this._apps;
    }

    // asana_action - computed: true, optional: true, required: false
    private _asanaAction?: string; 
    public get asanaAction() {
        return this.getStringAttribute('asana_action');
    }
    public set asanaAction(value: string) {
        this._asanaAction = value;
    }
    public resetAsanaAction() {
        this._asanaAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get asanaActionInput() {
        return this._asanaAction;
    }

    // athena_data_source - computed: true, optional: true, required: false
    private _athenaDataSource?: string; 
    public get athenaDataSource() {
        return this.getStringAttribute('athena_data_source');
    }
    public set athenaDataSource(value: string) {
        this._athenaDataSource = value;
    }
    public resetAthenaDataSource() {
        this._athenaDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get athenaDataSourceInput() {
        return this._athenaDataSource;
    }

    // aurora_data_source - computed: true, optional: true, required: false
    private _auroraDataSource?: string; 
    public get auroraDataSource() {
        return this.getStringAttribute('aurora_data_source');
    }
    public set auroraDataSource(value: string) {
        this._auroraDataSource = value;
    }
    public resetAuroraDataSource() {
        this._auroraDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get auroraDataSourceInput() {
        return this._auroraDataSource;
    }

    // automate - computed: true, optional: true, required: false
    private _automate?: string; 
    public get automate() {
        return this.getStringAttribute('automate');
    }
    public set automate(value: string) {
        this._automate = value;
    }
    public resetAutomate() {
        this._automate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get automateInput() {
        return this._automate;
    }

    // bamboo_hr_action - computed: true, optional: true, required: false
    private _bambooHrAction?: string; 
    public get bambooHrAction() {
        return this.getStringAttribute('bamboo_hr_action');
    }
    public set bambooHrAction(value: string) {
        this._bambooHrAction = value;
    }
    public resetBambooHrAction() {
        this._bambooHrAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bambooHrActionInput() {
        return this._bambooHrAction;
    }

    // bedrock_managed_knowledge_base - computed: true, optional: true, required: false
    private _bedrockManagedKnowledgeBase?: string; 
    public get bedrockManagedKnowledgeBase() {
        return this.getStringAttribute('bedrock_managed_knowledge_base');
    }
    public set bedrockManagedKnowledgeBase(value: string) {
        this._bedrockManagedKnowledgeBase = value;
    }
    public resetBedrockManagedKnowledgeBase() {
        this._bedrockManagedKnowledgeBase = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bedrockManagedKnowledgeBaseInput() {
        return this._bedrockManagedKnowledgeBase;
    }

    // box_agent_action - computed: true, optional: true, required: false
    private _boxAgentAction?: string; 
    public get boxAgentAction() {
        return this.getStringAttribute('box_agent_action');
    }
    public set boxAgentAction(value: string) {
        this._boxAgentAction = value;
    }
    public resetBoxAgentAction() {
        this._boxAgentAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get boxAgentActionInput() {
        return this._boxAgentAction;
    }

    // box_knowledge_base - computed: true, optional: true, required: false
    private _boxKnowledgeBase?: string; 
    public get boxKnowledgeBase() {
        return this.getStringAttribute('box_knowledge_base');
    }
    public set boxKnowledgeBase(value: string) {
        this._boxKnowledgeBase = value;
    }
    public resetBoxKnowledgeBase() {
        this._boxKnowledgeBase = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get boxKnowledgeBaseInput() {
        return this._boxKnowledgeBase;
    }

    // build_calculated_field_with_q - computed: true, optional: true, required: false
    private _buildCalculatedFieldWithQ?: string; 
    public get buildCalculatedFieldWithQ() {
        return this.getStringAttribute('build_calculated_field_with_q');
    }
    public set buildCalculatedFieldWithQ(value: string) {
        this._buildCalculatedFieldWithQ = value;
    }
    public resetBuildCalculatedFieldWithQ() {
        this._buildCalculatedFieldWithQ = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get buildCalculatedFieldWithQInput() {
        return this._buildCalculatedFieldWithQ;
    }

    // canva_agent_action - computed: true, optional: true, required: false
    private _canvaAgentAction?: string; 
    public get canvaAgentAction() {
        return this.getStringAttribute('canva_agent_action');
    }
    public set canvaAgentAction(value: string) {
        this._canvaAgentAction = value;
    }
    public resetCanvaAgentAction() {
        this._canvaAgentAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get canvaAgentActionInput() {
        return this._canvaAgentAction;
    }

    // chat_agent - computed: true, optional: true, required: false
    private _chatAgent?: string; 
    public get chatAgent() {
        return this.getStringAttribute('chat_agent');
    }
    public set chatAgent(value: string) {
        this._chatAgent = value;
    }
    public resetChatAgent() {
        this._chatAgent = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get chatAgentInput() {
        return this._chatAgent;
    }

    // comprehend_action - computed: true, optional: true, required: false
    private _comprehendAction?: string; 
    public get comprehendAction() {
        return this.getStringAttribute('comprehend_action');
    }
    public set comprehendAction(value: string) {
        this._comprehendAction = value;
    }
    public resetComprehendAction() {
        this._comprehendAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comprehendActionInput() {
        return this._comprehendAction;
    }

    // comprehend_medical_action - computed: true, optional: true, required: false
    private _comprehendMedicalAction?: string; 
    public get comprehendMedicalAction() {
        return this.getStringAttribute('comprehend_medical_action');
    }
    public set comprehendMedicalAction(value: string) {
        this._comprehendMedicalAction = value;
    }
    public resetComprehendMedicalAction() {
        this._comprehendMedicalAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comprehendMedicalActionInput() {
        return this._comprehendMedicalAction;
    }

    // confluence_action - computed: true, optional: true, required: false
    private _confluenceAction?: string; 
    public get confluenceAction() {
        return this.getStringAttribute('confluence_action');
    }
    public set confluenceAction(value: string) {
        this._confluenceAction = value;
    }
    public resetConfluenceAction() {
        this._confluenceAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get confluenceActionInput() {
        return this._confluenceAction;
    }

    // confluence_knowledge_base - computed: true, optional: true, required: false
    private _confluenceKnowledgeBase?: string; 
    public get confluenceKnowledgeBase() {
        return this.getStringAttribute('confluence_knowledge_base');
    }
    public set confluenceKnowledgeBase(value: string) {
        this._confluenceKnowledgeBase = value;
    }
    public resetConfluenceKnowledgeBase() {
        this._confluenceKnowledgeBase = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get confluenceKnowledgeBaseInput() {
        return this._confluenceKnowledgeBase;
    }

    // create_adobe_analytics_data_source - computed: true, optional: true, required: false
    private _createAdobeAnalyticsDataSource?: string; 
    public get createAdobeAnalyticsDataSource() {
        return this.getStringAttribute('create_adobe_analytics_data_source');
    }
    public set createAdobeAnalyticsDataSource(value: string) {
        this._createAdobeAnalyticsDataSource = value;
    }
    public resetCreateAdobeAnalyticsDataSource() {
        this._createAdobeAnalyticsDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createAdobeAnalyticsDataSourceInput() {
        return this._createAdobeAnalyticsDataSource;
    }

    // create_and_update_amazon_bedrock_ars_action - computed: true, optional: true, required: false
    private _createAndUpdateAmazonBedrockArsAction?: string; 
    public get createAndUpdateAmazonBedrockArsAction() {
        return this.getStringAttribute('create_and_update_amazon_bedrock_ars_action');
    }
    public set createAndUpdateAmazonBedrockArsAction(value: string) {
        this._createAndUpdateAmazonBedrockArsAction = value;
    }
    public resetCreateAndUpdateAmazonBedrockArsAction() {
        this._createAndUpdateAmazonBedrockArsAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createAndUpdateAmazonBedrockArsActionInput() {
        return this._createAndUpdateAmazonBedrockArsAction;
    }

    // create_and_update_amazon_bedrock_fs_action - computed: true, optional: true, required: false
    private _createAndUpdateAmazonBedrockFsAction?: string; 
    public get createAndUpdateAmazonBedrockFsAction() {
        return this.getStringAttribute('create_and_update_amazon_bedrock_fs_action');
    }
    public set createAndUpdateAmazonBedrockFsAction(value: string) {
        this._createAndUpdateAmazonBedrockFsAction = value;
    }
    public resetCreateAndUpdateAmazonBedrockFsAction() {
        this._createAndUpdateAmazonBedrockFsAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createAndUpdateAmazonBedrockFsActionInput() {
        return this._createAndUpdateAmazonBedrockFsAction;
    }

    // create_and_update_amazon_bedrock_krs_action - computed: true, optional: true, required: false
    private _createAndUpdateAmazonBedrockKrsAction?: string; 
    public get createAndUpdateAmazonBedrockKrsAction() {
        return this.getStringAttribute('create_and_update_amazon_bedrock_krs_action');
    }
    public set createAndUpdateAmazonBedrockKrsAction(value: string) {
        this._createAndUpdateAmazonBedrockKrsAction = value;
    }
    public resetCreateAndUpdateAmazonBedrockKrsAction() {
        this._createAndUpdateAmazonBedrockKrsAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createAndUpdateAmazonBedrockKrsActionInput() {
        return this._createAndUpdateAmazonBedrockKrsAction;
    }

    // create_and_update_amazon_s_three_action - computed: true, optional: true, required: false
    private _createAndUpdateAmazonSThreeAction?: string; 
    public get createAndUpdateAmazonSThreeAction() {
        return this.getStringAttribute('create_and_update_amazon_s_three_action');
    }
    public set createAndUpdateAmazonSThreeAction(value: string) {
        this._createAndUpdateAmazonSThreeAction = value;
    }
    public resetCreateAndUpdateAmazonSThreeAction() {
        this._createAndUpdateAmazonSThreeAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createAndUpdateAmazonSThreeActionInput() {
        return this._createAndUpdateAmazonSThreeAction;
    }

    // create_and_update_apps - computed: true, optional: true, required: false
    private _createAndUpdateApps?: string; 
    public get createAndUpdateApps() {
        return this.getStringAttribute('create_and_update_apps');
    }
    public set createAndUpdateApps(value: string) {
        this._createAndUpdateApps = value;
    }
    public resetCreateAndUpdateApps() {
        this._createAndUpdateApps = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createAndUpdateAppsInput() {
        return this._createAndUpdateApps;
    }

    // create_and_update_asana_action - computed: true, optional: true, required: false
    private _createAndUpdateAsanaAction?: string; 
    public get createAndUpdateAsanaAction() {
        return this.getStringAttribute('create_and_update_asana_action');
    }
    public set createAndUpdateAsanaAction(value: string) {
        this._createAndUpdateAsanaAction = value;
    }
    public resetCreateAndUpdateAsanaAction() {
        this._createAndUpdateAsanaAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createAndUpdateAsanaActionInput() {
        return this._createAndUpdateAsanaAction;
    }

    // create_and_update_bamboo_hr_action - computed: true, optional: true, required: false
    private _createAndUpdateBambooHrAction?: string; 
    public get createAndUpdateBambooHrAction() {
        return this.getStringAttribute('create_and_update_bamboo_hr_action');
    }
    public set createAndUpdateBambooHrAction(value: string) {
        this._createAndUpdateBambooHrAction = value;
    }
    public resetCreateAndUpdateBambooHrAction() {
        this._createAndUpdateBambooHrAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createAndUpdateBambooHrActionInput() {
        return this._createAndUpdateBambooHrAction;
    }

    // create_and_update_bedrock_managed_knowledge_base - computed: true, optional: true, required: false
    private _createAndUpdateBedrockManagedKnowledgeBase?: string; 
    public get createAndUpdateBedrockManagedKnowledgeBase() {
        return this.getStringAttribute('create_and_update_bedrock_managed_knowledge_base');
    }
    public set createAndUpdateBedrockManagedKnowledgeBase(value: string) {
        this._createAndUpdateBedrockManagedKnowledgeBase = value;
    }
    public resetCreateAndUpdateBedrockManagedKnowledgeBase() {
        this._createAndUpdateBedrockManagedKnowledgeBase = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createAndUpdateBedrockManagedKnowledgeBaseInput() {
        return this._createAndUpdateBedrockManagedKnowledgeBase;
    }

    // create_and_update_box_agent_action - computed: true, optional: true, required: false
    private _createAndUpdateBoxAgentAction?: string; 
    public get createAndUpdateBoxAgentAction() {
        return this.getStringAttribute('create_and_update_box_agent_action');
    }
    public set createAndUpdateBoxAgentAction(value: string) {
        this._createAndUpdateBoxAgentAction = value;
    }
    public resetCreateAndUpdateBoxAgentAction() {
        this._createAndUpdateBoxAgentAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createAndUpdateBoxAgentActionInput() {
        return this._createAndUpdateBoxAgentAction;
    }

    // create_and_update_box_knowledge_base - computed: true, optional: true, required: false
    private _createAndUpdateBoxKnowledgeBase?: string; 
    public get createAndUpdateBoxKnowledgeBase() {
        return this.getStringAttribute('create_and_update_box_knowledge_base');
    }
    public set createAndUpdateBoxKnowledgeBase(value: string) {
        this._createAndUpdateBoxKnowledgeBase = value;
    }
    public resetCreateAndUpdateBoxKnowledgeBase() {
        this._createAndUpdateBoxKnowledgeBase = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createAndUpdateBoxKnowledgeBaseInput() {
        return this._createAndUpdateBoxKnowledgeBase;
    }

    // create_and_update_canva_agent_action - computed: true, optional: true, required: false
    private _createAndUpdateCanvaAgentAction?: string; 
    public get createAndUpdateCanvaAgentAction() {
        return this.getStringAttribute('create_and_update_canva_agent_action');
    }
    public set createAndUpdateCanvaAgentAction(value: string) {
        this._createAndUpdateCanvaAgentAction = value;
    }
    public resetCreateAndUpdateCanvaAgentAction() {
        this._createAndUpdateCanvaAgentAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createAndUpdateCanvaAgentActionInput() {
        return this._createAndUpdateCanvaAgentAction;
    }

    // create_and_update_comprehend_action - computed: true, optional: true, required: false
    private _createAndUpdateComprehendAction?: string; 
    public get createAndUpdateComprehendAction() {
        return this.getStringAttribute('create_and_update_comprehend_action');
    }
    public set createAndUpdateComprehendAction(value: string) {
        this._createAndUpdateComprehendAction = value;
    }
    public resetCreateAndUpdateComprehendAction() {
        this._createAndUpdateComprehendAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createAndUpdateComprehendActionInput() {
        return this._createAndUpdateComprehendAction;
    }

    // create_and_update_comprehend_medical_action - computed: true, optional: true, required: false
    private _createAndUpdateComprehendMedicalAction?: string; 
    public get createAndUpdateComprehendMedicalAction() {
        return this.getStringAttribute('create_and_update_comprehend_medical_action');
    }
    public set createAndUpdateComprehendMedicalAction(value: string) {
        this._createAndUpdateComprehendMedicalAction = value;
    }
    public resetCreateAndUpdateComprehendMedicalAction() {
        this._createAndUpdateComprehendMedicalAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createAndUpdateComprehendMedicalActionInput() {
        return this._createAndUpdateComprehendMedicalAction;
    }

    // create_and_update_confluence_action - computed: true, optional: true, required: false
    private _createAndUpdateConfluenceAction?: string; 
    public get createAndUpdateConfluenceAction() {
        return this.getStringAttribute('create_and_update_confluence_action');
    }
    public set createAndUpdateConfluenceAction(value: string) {
        this._createAndUpdateConfluenceAction = value;
    }
    public resetCreateAndUpdateConfluenceAction() {
        this._createAndUpdateConfluenceAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createAndUpdateConfluenceActionInput() {
        return this._createAndUpdateConfluenceAction;
    }

    // create_and_update_confluence_knowledge_base - computed: true, optional: true, required: false
    private _createAndUpdateConfluenceKnowledgeBase?: string; 
    public get createAndUpdateConfluenceKnowledgeBase() {
        return this.getStringAttribute('create_and_update_confluence_knowledge_base');
    }
    public set createAndUpdateConfluenceKnowledgeBase(value: string) {
        this._createAndUpdateConfluenceKnowledgeBase = value;
    }
    public resetCreateAndUpdateConfluenceKnowledgeBase() {
        this._createAndUpdateConfluenceKnowledgeBase = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createAndUpdateConfluenceKnowledgeBaseInput() {
        return this._createAndUpdateConfluenceKnowledgeBase;
    }

    // create_and_update_dashboard_email_reports - computed: true, optional: true, required: false
    private _createAndUpdateDashboardEmailReports?: string; 
    public get createAndUpdateDashboardEmailReports() {
        return this.getStringAttribute('create_and_update_dashboard_email_reports');
    }
    public set createAndUpdateDashboardEmailReports(value: string) {
        this._createAndUpdateDashboardEmailReports = value;
    }
    public resetCreateAndUpdateDashboardEmailReports() {
        this._createAndUpdateDashboardEmailReports = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createAndUpdateDashboardEmailReportsInput() {
        return this._createAndUpdateDashboardEmailReports;
    }

    // create_and_update_data_sources - computed: true, optional: true, required: false
    private _createAndUpdateDataSources?: string; 
    public get createAndUpdateDataSources() {
        return this.getStringAttribute('create_and_update_data_sources');
    }
    public set createAndUpdateDataSources(value: string) {
        this._createAndUpdateDataSources = value;
    }
    public resetCreateAndUpdateDataSources() {
        this._createAndUpdateDataSources = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createAndUpdateDataSourcesInput() {
        return this._createAndUpdateDataSources;
    }

    // create_and_update_datasets - computed: true, optional: true, required: false
    private _createAndUpdateDatasets?: string; 
    public get createAndUpdateDatasets() {
        return this.getStringAttribute('create_and_update_datasets');
    }
    public set createAndUpdateDatasets(value: string) {
        this._createAndUpdateDatasets = value;
    }
    public resetCreateAndUpdateDatasets() {
        this._createAndUpdateDatasets = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createAndUpdateDatasetsInput() {
        return this._createAndUpdateDatasets;
    }

    // create_and_update_fact_set_action - computed: true, optional: true, required: false
    private _createAndUpdateFactSetAction?: string; 
    public get createAndUpdateFactSetAction() {
        return this.getStringAttribute('create_and_update_fact_set_action');
    }
    public set createAndUpdateFactSetAction(value: string) {
        this._createAndUpdateFactSetAction = value;
    }
    public resetCreateAndUpdateFactSetAction() {
        this._createAndUpdateFactSetAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createAndUpdateFactSetActionInput() {
        return this._createAndUpdateFactSetAction;
    }

    // create_and_update_generic_http_action - computed: true, optional: true, required: false
    private _createAndUpdateGenericHttpAction?: string; 
    public get createAndUpdateGenericHttpAction() {
        return this.getStringAttribute('create_and_update_generic_http_action');
    }
    public set createAndUpdateGenericHttpAction(value: string) {
        this._createAndUpdateGenericHttpAction = value;
    }
    public resetCreateAndUpdateGenericHttpAction() {
        this._createAndUpdateGenericHttpAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createAndUpdateGenericHttpActionInput() {
        return this._createAndUpdateGenericHttpAction;
    }

    // create_and_update_github_action - computed: true, optional: true, required: false
    private _createAndUpdateGithubAction?: string; 
    public get createAndUpdateGithubAction() {
        return this.getStringAttribute('create_and_update_github_action');
    }
    public set createAndUpdateGithubAction(value: string) {
        this._createAndUpdateGithubAction = value;
    }
    public resetCreateAndUpdateGithubAction() {
        this._createAndUpdateGithubAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createAndUpdateGithubActionInput() {
        return this._createAndUpdateGithubAction;
    }

    // create_and_update_google_calendar_action - computed: true, optional: true, required: false
    private _createAndUpdateGoogleCalendarAction?: string; 
    public get createAndUpdateGoogleCalendarAction() {
        return this.getStringAttribute('create_and_update_google_calendar_action');
    }
    public set createAndUpdateGoogleCalendarAction(value: string) {
        this._createAndUpdateGoogleCalendarAction = value;
    }
    public resetCreateAndUpdateGoogleCalendarAction() {
        this._createAndUpdateGoogleCalendarAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createAndUpdateGoogleCalendarActionInput() {
        return this._createAndUpdateGoogleCalendarAction;
    }

    // create_and_update_google_drive_knowledge_base - computed: true, optional: true, required: false
    private _createAndUpdateGoogleDriveKnowledgeBase?: string; 
    public get createAndUpdateGoogleDriveKnowledgeBase() {
        return this.getStringAttribute('create_and_update_google_drive_knowledge_base');
    }
    public set createAndUpdateGoogleDriveKnowledgeBase(value: string) {
        this._createAndUpdateGoogleDriveKnowledgeBase = value;
    }
    public resetCreateAndUpdateGoogleDriveKnowledgeBase() {
        this._createAndUpdateGoogleDriveKnowledgeBase = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createAndUpdateGoogleDriveKnowledgeBaseInput() {
        return this._createAndUpdateGoogleDriveKnowledgeBase;
    }

    // create_and_update_hubspot_action - computed: true, optional: true, required: false
    private _createAndUpdateHubspotAction?: string; 
    public get createAndUpdateHubspotAction() {
        return this.getStringAttribute('create_and_update_hubspot_action');
    }
    public set createAndUpdateHubspotAction(value: string) {
        this._createAndUpdateHubspotAction = value;
    }
    public resetCreateAndUpdateHubspotAction() {
        this._createAndUpdateHubspotAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createAndUpdateHubspotActionInput() {
        return this._createAndUpdateHubspotAction;
    }

    // create_and_update_hugging_face_action - computed: true, optional: true, required: false
    private _createAndUpdateHuggingFaceAction?: string; 
    public get createAndUpdateHuggingFaceAction() {
        return this.getStringAttribute('create_and_update_hugging_face_action');
    }
    public set createAndUpdateHuggingFaceAction(value: string) {
        this._createAndUpdateHuggingFaceAction = value;
    }
    public resetCreateAndUpdateHuggingFaceAction() {
        this._createAndUpdateHuggingFaceAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createAndUpdateHuggingFaceActionInput() {
        return this._createAndUpdateHuggingFaceAction;
    }

    // create_and_update_idc_knowledge_base - computed: true, optional: true, required: false
    private _createAndUpdateIdcKnowledgeBase?: string; 
    public get createAndUpdateIdcKnowledgeBase() {
        return this.getStringAttribute('create_and_update_idc_knowledge_base');
    }
    public set createAndUpdateIdcKnowledgeBase(value: string) {
        this._createAndUpdateIdcKnowledgeBase = value;
    }
    public resetCreateAndUpdateIdcKnowledgeBase() {
        this._createAndUpdateIdcKnowledgeBase = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createAndUpdateIdcKnowledgeBaseInput() {
        return this._createAndUpdateIdcKnowledgeBase;
    }

    // create_and_update_intercom_action - computed: true, optional: true, required: false
    private _createAndUpdateIntercomAction?: string; 
    public get createAndUpdateIntercomAction() {
        return this.getStringAttribute('create_and_update_intercom_action');
    }
    public set createAndUpdateIntercomAction(value: string) {
        this._createAndUpdateIntercomAction = value;
    }
    public resetCreateAndUpdateIntercomAction() {
        this._createAndUpdateIntercomAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createAndUpdateIntercomActionInput() {
        return this._createAndUpdateIntercomAction;
    }

    // create_and_update_jira_action - computed: true, optional: true, required: false
    private _createAndUpdateJiraAction?: string; 
    public get createAndUpdateJiraAction() {
        return this.getStringAttribute('create_and_update_jira_action');
    }
    public set createAndUpdateJiraAction(value: string) {
        this._createAndUpdateJiraAction = value;
    }
    public resetCreateAndUpdateJiraAction() {
        this._createAndUpdateJiraAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createAndUpdateJiraActionInput() {
        return this._createAndUpdateJiraAction;
    }

    // create_and_update_knowledge_bases - computed: true, optional: true, required: false
    private _createAndUpdateKnowledgeBases?: string; 
    public get createAndUpdateKnowledgeBases() {
        return this.getStringAttribute('create_and_update_knowledge_bases');
    }
    public set createAndUpdateKnowledgeBases(value: string) {
        this._createAndUpdateKnowledgeBases = value;
    }
    public resetCreateAndUpdateKnowledgeBases() {
        this._createAndUpdateKnowledgeBases = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createAndUpdateKnowledgeBasesInput() {
        return this._createAndUpdateKnowledgeBases;
    }

    // create_and_update_linear_action - computed: true, optional: true, required: false
    private _createAndUpdateLinearAction?: string; 
    public get createAndUpdateLinearAction() {
        return this.getStringAttribute('create_and_update_linear_action');
    }
    public set createAndUpdateLinearAction(value: string) {
        this._createAndUpdateLinearAction = value;
    }
    public resetCreateAndUpdateLinearAction() {
        this._createAndUpdateLinearAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createAndUpdateLinearActionInput() {
        return this._createAndUpdateLinearAction;
    }

    // create_and_update_mcp_action - computed: true, optional: true, required: false
    private _createAndUpdateMcpAction?: string; 
    public get createAndUpdateMcpAction() {
        return this.getStringAttribute('create_and_update_mcp_action');
    }
    public set createAndUpdateMcpAction(value: string) {
        this._createAndUpdateMcpAction = value;
    }
    public resetCreateAndUpdateMcpAction() {
        this._createAndUpdateMcpAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createAndUpdateMcpActionInput() {
        return this._createAndUpdateMcpAction;
    }

    // create_and_update_monday_action - computed: true, optional: true, required: false
    private _createAndUpdateMondayAction?: string; 
    public get createAndUpdateMondayAction() {
        return this.getStringAttribute('create_and_update_monday_action');
    }
    public set createAndUpdateMondayAction(value: string) {
        this._createAndUpdateMondayAction = value;
    }
    public resetCreateAndUpdateMondayAction() {
        this._createAndUpdateMondayAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createAndUpdateMondayActionInput() {
        return this._createAndUpdateMondayAction;
    }

    // create_and_update_ms_exchange_action - computed: true, optional: true, required: false
    private _createAndUpdateMsExchangeAction?: string; 
    public get createAndUpdateMsExchangeAction() {
        return this.getStringAttribute('create_and_update_ms_exchange_action');
    }
    public set createAndUpdateMsExchangeAction(value: string) {
        this._createAndUpdateMsExchangeAction = value;
    }
    public resetCreateAndUpdateMsExchangeAction() {
        this._createAndUpdateMsExchangeAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createAndUpdateMsExchangeActionInput() {
        return this._createAndUpdateMsExchangeAction;
    }

    // create_and_update_ms_teams_action - computed: true, optional: true, required: false
    private _createAndUpdateMsTeamsAction?: string; 
    public get createAndUpdateMsTeamsAction() {
        return this.getStringAttribute('create_and_update_ms_teams_action');
    }
    public set createAndUpdateMsTeamsAction(value: string) {
        this._createAndUpdateMsTeamsAction = value;
    }
    public resetCreateAndUpdateMsTeamsAction() {
        this._createAndUpdateMsTeamsAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createAndUpdateMsTeamsActionInput() {
        return this._createAndUpdateMsTeamsAction;
    }

    // create_and_update_new_relic_action - computed: true, optional: true, required: false
    private _createAndUpdateNewRelicAction?: string; 
    public get createAndUpdateNewRelicAction() {
        return this.getStringAttribute('create_and_update_new_relic_action');
    }
    public set createAndUpdateNewRelicAction(value: string) {
        this._createAndUpdateNewRelicAction = value;
    }
    public resetCreateAndUpdateNewRelicAction() {
        this._createAndUpdateNewRelicAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createAndUpdateNewRelicActionInput() {
        return this._createAndUpdateNewRelicAction;
    }

    // create_and_update_notion_action - computed: true, optional: true, required: false
    private _createAndUpdateNotionAction?: string; 
    public get createAndUpdateNotionAction() {
        return this.getStringAttribute('create_and_update_notion_action');
    }
    public set createAndUpdateNotionAction(value: string) {
        this._createAndUpdateNotionAction = value;
    }
    public resetCreateAndUpdateNotionAction() {
        this._createAndUpdateNotionAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createAndUpdateNotionActionInput() {
        return this._createAndUpdateNotionAction;
    }

    // create_and_update_one_drive_action - computed: true, optional: true, required: false
    private _createAndUpdateOneDriveAction?: string; 
    public get createAndUpdateOneDriveAction() {
        return this.getStringAttribute('create_and_update_one_drive_action');
    }
    public set createAndUpdateOneDriveAction(value: string) {
        this._createAndUpdateOneDriveAction = value;
    }
    public resetCreateAndUpdateOneDriveAction() {
        this._createAndUpdateOneDriveAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createAndUpdateOneDriveActionInput() {
        return this._createAndUpdateOneDriveAction;
    }

    // create_and_update_one_drive_knowledge_base - computed: true, optional: true, required: false
    private _createAndUpdateOneDriveKnowledgeBase?: string; 
    public get createAndUpdateOneDriveKnowledgeBase() {
        return this.getStringAttribute('create_and_update_one_drive_knowledge_base');
    }
    public set createAndUpdateOneDriveKnowledgeBase(value: string) {
        this._createAndUpdateOneDriveKnowledgeBase = value;
    }
    public resetCreateAndUpdateOneDriveKnowledgeBase() {
        this._createAndUpdateOneDriveKnowledgeBase = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createAndUpdateOneDriveKnowledgeBaseInput() {
        return this._createAndUpdateOneDriveKnowledgeBase;
    }

    // create_and_update_open_api_action - computed: true, optional: true, required: false
    private _createAndUpdateOpenApiAction?: string; 
    public get createAndUpdateOpenApiAction() {
        return this.getStringAttribute('create_and_update_open_api_action');
    }
    public set createAndUpdateOpenApiAction(value: string) {
        this._createAndUpdateOpenApiAction = value;
    }
    public resetCreateAndUpdateOpenApiAction() {
        this._createAndUpdateOpenApiAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createAndUpdateOpenApiActionInput() {
        return this._createAndUpdateOpenApiAction;
    }

    // create_and_update_pager_duty_action - computed: true, optional: true, required: false
    private _createAndUpdatePagerDutyAction?: string; 
    public get createAndUpdatePagerDutyAction() {
        return this.getStringAttribute('create_and_update_pager_duty_action');
    }
    public set createAndUpdatePagerDutyAction(value: string) {
        this._createAndUpdatePagerDutyAction = value;
    }
    public resetCreateAndUpdatePagerDutyAction() {
        this._createAndUpdatePagerDutyAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createAndUpdatePagerDutyActionInput() {
        return this._createAndUpdatePagerDutyAction;
    }

    // create_and_update_q_business_knowledge_base - computed: true, optional: true, required: false
    private _createAndUpdateQBusinessKnowledgeBase?: string; 
    public get createAndUpdateQBusinessKnowledgeBase() {
        return this.getStringAttribute('create_and_update_q_business_knowledge_base');
    }
    public set createAndUpdateQBusinessKnowledgeBase(value: string) {
        this._createAndUpdateQBusinessKnowledgeBase = value;
    }
    public resetCreateAndUpdateQBusinessKnowledgeBase() {
        this._createAndUpdateQBusinessKnowledgeBase = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createAndUpdateQBusinessKnowledgeBaseInput() {
        return this._createAndUpdateQBusinessKnowledgeBase;
    }

    // create_and_update_s3_knowledge_base - computed: true, optional: true, required: false
    private _createAndUpdateS3KnowledgeBase?: string; 
    public get createAndUpdateS3KnowledgeBase() {
        return this.getStringAttribute('create_and_update_s3_knowledge_base');
    }
    public set createAndUpdateS3KnowledgeBase(value: string) {
        this._createAndUpdateS3KnowledgeBase = value;
    }
    public resetCreateAndUpdateS3KnowledgeBase() {
        this._createAndUpdateS3KnowledgeBase = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createAndUpdateS3KnowledgeBaseInput() {
        return this._createAndUpdateS3KnowledgeBase;
    }

    // create_and_update_salesforce_action - computed: true, optional: true, required: false
    private _createAndUpdateSalesforceAction?: string; 
    public get createAndUpdateSalesforceAction() {
        return this.getStringAttribute('create_and_update_salesforce_action');
    }
    public set createAndUpdateSalesforceAction(value: string) {
        this._createAndUpdateSalesforceAction = value;
    }
    public resetCreateAndUpdateSalesforceAction() {
        this._createAndUpdateSalesforceAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createAndUpdateSalesforceActionInput() {
        return this._createAndUpdateSalesforceAction;
    }

    // create_and_update_sand_p_global_energy_action - computed: true, optional: true, required: false
    private _createAndUpdateSandPGlobalEnergyAction?: string; 
    public get createAndUpdateSandPGlobalEnergyAction() {
        return this.getStringAttribute('create_and_update_sand_p_global_energy_action');
    }
    public set createAndUpdateSandPGlobalEnergyAction(value: string) {
        this._createAndUpdateSandPGlobalEnergyAction = value;
    }
    public resetCreateAndUpdateSandPGlobalEnergyAction() {
        this._createAndUpdateSandPGlobalEnergyAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createAndUpdateSandPGlobalEnergyActionInput() {
        return this._createAndUpdateSandPGlobalEnergyAction;
    }

    // create_and_update_sand_pgmi_action - computed: true, optional: true, required: false
    private _createAndUpdateSandPgmiAction?: string; 
    public get createAndUpdateSandPgmiAction() {
        return this.getStringAttribute('create_and_update_sand_pgmi_action');
    }
    public set createAndUpdateSandPgmiAction(value: string) {
        this._createAndUpdateSandPgmiAction = value;
    }
    public resetCreateAndUpdateSandPgmiAction() {
        this._createAndUpdateSandPgmiAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createAndUpdateSandPgmiActionInput() {
        return this._createAndUpdateSandPgmiAction;
    }

    // create_and_update_sap_bill_of_material_action - computed: true, optional: true, required: false
    private _createAndUpdateSapBillOfMaterialAction?: string; 
    public get createAndUpdateSapBillOfMaterialAction() {
        return this.getStringAttribute('create_and_update_sap_bill_of_material_action');
    }
    public set createAndUpdateSapBillOfMaterialAction(value: string) {
        this._createAndUpdateSapBillOfMaterialAction = value;
    }
    public resetCreateAndUpdateSapBillOfMaterialAction() {
        this._createAndUpdateSapBillOfMaterialAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createAndUpdateSapBillOfMaterialActionInput() {
        return this._createAndUpdateSapBillOfMaterialAction;
    }

    // create_and_update_sap_business_partner_action - computed: true, optional: true, required: false
    private _createAndUpdateSapBusinessPartnerAction?: string; 
    public get createAndUpdateSapBusinessPartnerAction() {
        return this.getStringAttribute('create_and_update_sap_business_partner_action');
    }
    public set createAndUpdateSapBusinessPartnerAction(value: string) {
        this._createAndUpdateSapBusinessPartnerAction = value;
    }
    public resetCreateAndUpdateSapBusinessPartnerAction() {
        this._createAndUpdateSapBusinessPartnerAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createAndUpdateSapBusinessPartnerActionInput() {
        return this._createAndUpdateSapBusinessPartnerAction;
    }

    // create_and_update_sap_material_stock_action - computed: true, optional: true, required: false
    private _createAndUpdateSapMaterialStockAction?: string; 
    public get createAndUpdateSapMaterialStockAction() {
        return this.getStringAttribute('create_and_update_sap_material_stock_action');
    }
    public set createAndUpdateSapMaterialStockAction(value: string) {
        this._createAndUpdateSapMaterialStockAction = value;
    }
    public resetCreateAndUpdateSapMaterialStockAction() {
        this._createAndUpdateSapMaterialStockAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createAndUpdateSapMaterialStockActionInput() {
        return this._createAndUpdateSapMaterialStockAction;
    }

    // create_and_update_sap_physical_inventory_action - computed: true, optional: true, required: false
    private _createAndUpdateSapPhysicalInventoryAction?: string; 
    public get createAndUpdateSapPhysicalInventoryAction() {
        return this.getStringAttribute('create_and_update_sap_physical_inventory_action');
    }
    public set createAndUpdateSapPhysicalInventoryAction(value: string) {
        this._createAndUpdateSapPhysicalInventoryAction = value;
    }
    public resetCreateAndUpdateSapPhysicalInventoryAction() {
        this._createAndUpdateSapPhysicalInventoryAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createAndUpdateSapPhysicalInventoryActionInput() {
        return this._createAndUpdateSapPhysicalInventoryAction;
    }

    // create_and_update_sap_product_master_data_action - computed: true, optional: true, required: false
    private _createAndUpdateSapProductMasterDataAction?: string; 
    public get createAndUpdateSapProductMasterDataAction() {
        return this.getStringAttribute('create_and_update_sap_product_master_data_action');
    }
    public set createAndUpdateSapProductMasterDataAction(value: string) {
        this._createAndUpdateSapProductMasterDataAction = value;
    }
    public resetCreateAndUpdateSapProductMasterDataAction() {
        this._createAndUpdateSapProductMasterDataAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createAndUpdateSapProductMasterDataActionInput() {
        return this._createAndUpdateSapProductMasterDataAction;
    }

    // create_and_update_service_now_action - computed: true, optional: true, required: false
    private _createAndUpdateServiceNowAction?: string; 
    public get createAndUpdateServiceNowAction() {
        return this.getStringAttribute('create_and_update_service_now_action');
    }
    public set createAndUpdateServiceNowAction(value: string) {
        this._createAndUpdateServiceNowAction = value;
    }
    public resetCreateAndUpdateServiceNowAction() {
        this._createAndUpdateServiceNowAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createAndUpdateServiceNowActionInput() {
        return this._createAndUpdateServiceNowAction;
    }

    // create_and_update_share_point_action - computed: true, optional: true, required: false
    private _createAndUpdateSharePointAction?: string; 
    public get createAndUpdateSharePointAction() {
        return this.getStringAttribute('create_and_update_share_point_action');
    }
    public set createAndUpdateSharePointAction(value: string) {
        this._createAndUpdateSharePointAction = value;
    }
    public resetCreateAndUpdateSharePointAction() {
        this._createAndUpdateSharePointAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createAndUpdateSharePointActionInput() {
        return this._createAndUpdateSharePointAction;
    }

    // create_and_update_share_point_knowledge_base - computed: true, optional: true, required: false
    private _createAndUpdateSharePointKnowledgeBase?: string; 
    public get createAndUpdateSharePointKnowledgeBase() {
        return this.getStringAttribute('create_and_update_share_point_knowledge_base');
    }
    public set createAndUpdateSharePointKnowledgeBase(value: string) {
        this._createAndUpdateSharePointKnowledgeBase = value;
    }
    public resetCreateAndUpdateSharePointKnowledgeBase() {
        this._createAndUpdateSharePointKnowledgeBase = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createAndUpdateSharePointKnowledgeBaseInput() {
        return this._createAndUpdateSharePointKnowledgeBase;
    }

    // create_and_update_slack_action - computed: true, optional: true, required: false
    private _createAndUpdateSlackAction?: string; 
    public get createAndUpdateSlackAction() {
        return this.getStringAttribute('create_and_update_slack_action');
    }
    public set createAndUpdateSlackAction(value: string) {
        this._createAndUpdateSlackAction = value;
    }
    public resetCreateAndUpdateSlackAction() {
        this._createAndUpdateSlackAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createAndUpdateSlackActionInput() {
        return this._createAndUpdateSlackAction;
    }

    // create_and_update_smartsheet_action - computed: true, optional: true, required: false
    private _createAndUpdateSmartsheetAction?: string; 
    public get createAndUpdateSmartsheetAction() {
        return this.getStringAttribute('create_and_update_smartsheet_action');
    }
    public set createAndUpdateSmartsheetAction(value: string) {
        this._createAndUpdateSmartsheetAction = value;
    }
    public resetCreateAndUpdateSmartsheetAction() {
        this._createAndUpdateSmartsheetAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createAndUpdateSmartsheetActionInput() {
        return this._createAndUpdateSmartsheetAction;
    }

    // create_and_update_textract_action - computed: true, optional: true, required: false
    private _createAndUpdateTextractAction?: string; 
    public get createAndUpdateTextractAction() {
        return this.getStringAttribute('create_and_update_textract_action');
    }
    public set createAndUpdateTextractAction(value: string) {
        this._createAndUpdateTextractAction = value;
    }
    public resetCreateAndUpdateTextractAction() {
        this._createAndUpdateTextractAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createAndUpdateTextractActionInput() {
        return this._createAndUpdateTextractAction;
    }

    // create_and_update_themes - computed: true, optional: true, required: false
    private _createAndUpdateThemes?: string; 
    public get createAndUpdateThemes() {
        return this.getStringAttribute('create_and_update_themes');
    }
    public set createAndUpdateThemes(value: string) {
        this._createAndUpdateThemes = value;
    }
    public resetCreateAndUpdateThemes() {
        this._createAndUpdateThemes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createAndUpdateThemesInput() {
        return this._createAndUpdateThemes;
    }

    // create_and_update_threshold_alerts - computed: true, optional: true, required: false
    private _createAndUpdateThresholdAlerts?: string; 
    public get createAndUpdateThresholdAlerts() {
        return this.getStringAttribute('create_and_update_threshold_alerts');
    }
    public set createAndUpdateThresholdAlerts(value: string) {
        this._createAndUpdateThresholdAlerts = value;
    }
    public resetCreateAndUpdateThresholdAlerts() {
        this._createAndUpdateThresholdAlerts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createAndUpdateThresholdAlertsInput() {
        return this._createAndUpdateThresholdAlerts;
    }

    // create_and_update_web_crawler_knowledge_base - computed: true, optional: true, required: false
    private _createAndUpdateWebCrawlerKnowledgeBase?: string; 
    public get createAndUpdateWebCrawlerKnowledgeBase() {
        return this.getStringAttribute('create_and_update_web_crawler_knowledge_base');
    }
    public set createAndUpdateWebCrawlerKnowledgeBase(value: string) {
        this._createAndUpdateWebCrawlerKnowledgeBase = value;
    }
    public resetCreateAndUpdateWebCrawlerKnowledgeBase() {
        this._createAndUpdateWebCrawlerKnowledgeBase = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createAndUpdateWebCrawlerKnowledgeBaseInput() {
        return this._createAndUpdateWebCrawlerKnowledgeBase;
    }

    // create_and_update_zendesk_action - computed: true, optional: true, required: false
    private _createAndUpdateZendeskAction?: string; 
    public get createAndUpdateZendeskAction() {
        return this.getStringAttribute('create_and_update_zendesk_action');
    }
    public set createAndUpdateZendeskAction(value: string) {
        this._createAndUpdateZendeskAction = value;
    }
    public resetCreateAndUpdateZendeskAction() {
        this._createAndUpdateZendeskAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createAndUpdateZendeskActionInput() {
        return this._createAndUpdateZendeskAction;
    }

    // create_athena_data_source - computed: true, optional: true, required: false
    private _createAthenaDataSource?: string; 
    public get createAthenaDataSource() {
        return this.getStringAttribute('create_athena_data_source');
    }
    public set createAthenaDataSource(value: string) {
        this._createAthenaDataSource = value;
    }
    public resetCreateAthenaDataSource() {
        this._createAthenaDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createAthenaDataSourceInput() {
        return this._createAthenaDataSource;
    }

    // create_aurora_data_source - computed: true, optional: true, required: false
    private _createAuroraDataSource?: string; 
    public get createAuroraDataSource() {
        return this.getStringAttribute('create_aurora_data_source');
    }
    public set createAuroraDataSource(value: string) {
        this._createAuroraDataSource = value;
    }
    public resetCreateAuroraDataSource() {
        this._createAuroraDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createAuroraDataSourceInput() {
        return this._createAuroraDataSource;
    }

    // create_chat_agents - computed: true, optional: true, required: false
    private _createChatAgents?: string; 
    public get createChatAgents() {
        return this.getStringAttribute('create_chat_agents');
    }
    public set createChatAgents(value: string) {
        this._createChatAgents = value;
    }
    public resetCreateChatAgents() {
        this._createChatAgents = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createChatAgentsInput() {
        return this._createChatAgents;
    }

    // create_dashboard_executive_summary_with_q - computed: true, optional: true, required: false
    private _createDashboardExecutiveSummaryWithQ?: string; 
    public get createDashboardExecutiveSummaryWithQ() {
        return this.getStringAttribute('create_dashboard_executive_summary_with_q');
    }
    public set createDashboardExecutiveSummaryWithQ(value: string) {
        this._createDashboardExecutiveSummaryWithQ = value;
    }
    public resetCreateDashboardExecutiveSummaryWithQ() {
        this._createDashboardExecutiveSummaryWithQ = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createDashboardExecutiveSummaryWithQInput() {
        return this._createDashboardExecutiveSummaryWithQ;
    }

    // create_databricks_data_source - computed: true, optional: true, required: false
    private _createDatabricksDataSource?: string; 
    public get createDatabricksDataSource() {
        return this.getStringAttribute('create_databricks_data_source');
    }
    public set createDatabricksDataSource(value: string) {
        this._createDatabricksDataSource = value;
    }
    public resetCreateDatabricksDataSource() {
        this._createDatabricksDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createDatabricksDataSourceInput() {
        return this._createDatabricksDataSource;
    }

    // create_db_2_data_source - computed: true, optional: true, required: false
    private _createDb2DataSource?: string; 
    public get createDb2DataSource() {
        return this.getStringAttribute('create_db_2_data_source');
    }
    public set createDb2DataSource(value: string) {
        this._createDb2DataSource = value;
    }
    public resetCreateDb2DataSource() {
        this._createDb2DataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createDb2DataSourceInput() {
        return this._createDb2DataSource;
    }

    // create_denodo_data_source - computed: true, optional: true, required: false
    private _createDenodoDataSource?: string; 
    public get createDenodoDataSource() {
        return this.getStringAttribute('create_denodo_data_source');
    }
    public set createDenodoDataSource(value: string) {
        this._createDenodoDataSource = value;
    }
    public resetCreateDenodoDataSource() {
        this._createDenodoDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createDenodoDataSourceInput() {
        return this._createDenodoDataSource;
    }

    // create_document_db_data_source - computed: true, optional: true, required: false
    private _createDocumentDbDataSource?: string; 
    public get createDocumentDbDataSource() {
        return this.getStringAttribute('create_document_db_data_source');
    }
    public set createDocumentDbDataSource(value: string) {
        this._createDocumentDbDataSource = value;
    }
    public resetCreateDocumentDbDataSource() {
        this._createDocumentDbDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createDocumentDbDataSourceInput() {
        return this._createDocumentDbDataSource;
    }

    // create_dremio_data_source - computed: true, optional: true, required: false
    private _createDremioDataSource?: string; 
    public get createDremioDataSource() {
        return this.getStringAttribute('create_dremio_data_source');
    }
    public set createDremioDataSource(value: string) {
        this._createDremioDataSource = value;
    }
    public resetCreateDremioDataSource() {
        this._createDremioDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createDremioDataSourceInput() {
        return this._createDremioDataSource;
    }

    // create_dynamo_db_data_source - computed: true, optional: true, required: false
    private _createDynamoDbDataSource?: string; 
    public get createDynamoDbDataSource() {
        return this.getStringAttribute('create_dynamo_db_data_source');
    }
    public set createDynamoDbDataSource(value: string) {
        this._createDynamoDbDataSource = value;
    }
    public resetCreateDynamoDbDataSource() {
        this._createDynamoDbDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createDynamoDbDataSourceInput() {
        return this._createDynamoDbDataSource;
    }

    // create_exasol_data_source - computed: true, optional: true, required: false
    private _createExasolDataSource?: string; 
    public get createExasolDataSource() {
        return this.getStringAttribute('create_exasol_data_source');
    }
    public set createExasolDataSource(value: string) {
        this._createExasolDataSource = value;
    }
    public resetCreateExasolDataSource() {
        this._createExasolDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createExasolDataSourceInput() {
        return this._createExasolDataSource;
    }

    // create_file_data_source - computed: true, optional: true, required: false
    private _createFileDataSource?: string; 
    public get createFileDataSource() {
        return this.getStringAttribute('create_file_data_source');
    }
    public set createFileDataSource(value: string) {
        this._createFileDataSource = value;
    }
    public resetCreateFileDataSource() {
        this._createFileDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createFileDataSourceInput() {
        return this._createFileDataSource;
    }

    // create_git_hub_data_source - computed: true, optional: true, required: false
    private _createGitHubDataSource?: string; 
    public get createGitHubDataSource() {
        return this.getStringAttribute('create_git_hub_data_source');
    }
    public set createGitHubDataSource(value: string) {
        this._createGitHubDataSource = value;
    }
    public resetCreateGitHubDataSource() {
        this._createGitHubDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createGitHubDataSourceInput() {
        return this._createGitHubDataSource;
    }

    // create_google_analytics_data_source - computed: true, optional: true, required: false
    private _createGoogleAnalyticsDataSource?: string; 
    public get createGoogleAnalyticsDataSource() {
        return this.getStringAttribute('create_google_analytics_data_source');
    }
    public set createGoogleAnalyticsDataSource(value: string) {
        this._createGoogleAnalyticsDataSource = value;
    }
    public resetCreateGoogleAnalyticsDataSource() {
        this._createGoogleAnalyticsDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createGoogleAnalyticsDataSourceInput() {
        return this._createGoogleAnalyticsDataSource;
    }

    // create_google_big_query_data_source - computed: true, optional: true, required: false
    private _createGoogleBigQueryDataSource?: string; 
    public get createGoogleBigQueryDataSource() {
        return this.getStringAttribute('create_google_big_query_data_source');
    }
    public set createGoogleBigQueryDataSource(value: string) {
        this._createGoogleBigQueryDataSource = value;
    }
    public resetCreateGoogleBigQueryDataSource() {
        this._createGoogleBigQueryDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createGoogleBigQueryDataSourceInput() {
        return this._createGoogleBigQueryDataSource;
    }

    // create_google_sheets_data_source - computed: true, optional: true, required: false
    private _createGoogleSheetsDataSource?: string; 
    public get createGoogleSheetsDataSource() {
        return this.getStringAttribute('create_google_sheets_data_source');
    }
    public set createGoogleSheetsDataSource(value: string) {
        this._createGoogleSheetsDataSource = value;
    }
    public resetCreateGoogleSheetsDataSource() {
        this._createGoogleSheetsDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createGoogleSheetsDataSourceInput() {
        return this._createGoogleSheetsDataSource;
    }

    // create_impala_data_source - computed: true, optional: true, required: false
    private _createImpalaDataSource?: string; 
    public get createImpalaDataSource() {
        return this.getStringAttribute('create_impala_data_source');
    }
    public set createImpalaDataSource(value: string) {
        this._createImpalaDataSource = value;
    }
    public resetCreateImpalaDataSource() {
        this._createImpalaDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createImpalaDataSourceInput() {
        return this._createImpalaDataSource;
    }

    // create_jira_data_source - computed: true, optional: true, required: false
    private _createJiraDataSource?: string; 
    public get createJiraDataSource() {
        return this.getStringAttribute('create_jira_data_source');
    }
    public set createJiraDataSource(value: string) {
        this._createJiraDataSource = value;
    }
    public resetCreateJiraDataSource() {
        this._createJiraDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createJiraDataSourceInput() {
        return this._createJiraDataSource;
    }

    // create_maria_db_data_source - computed: true, optional: true, required: false
    private _createMariaDbDataSource?: string; 
    public get createMariaDbDataSource() {
        return this.getStringAttribute('create_maria_db_data_source');
    }
    public set createMariaDbDataSource(value: string) {
        this._createMariaDbDataSource = value;
    }
    public resetCreateMariaDbDataSource() {
        this._createMariaDbDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createMariaDbDataSourceInput() {
        return this._createMariaDbDataSource;
    }

    // create_mongo_atlas_data_source - computed: true, optional: true, required: false
    private _createMongoAtlasDataSource?: string; 
    public get createMongoAtlasDataSource() {
        return this.getStringAttribute('create_mongo_atlas_data_source');
    }
    public set createMongoAtlasDataSource(value: string) {
        this._createMongoAtlasDataSource = value;
    }
    public resetCreateMongoAtlasDataSource() {
        this._createMongoAtlasDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createMongoAtlasDataSourceInput() {
        return this._createMongoAtlasDataSource;
    }

    // create_mongo_db_data_source - computed: true, optional: true, required: false
    private _createMongoDbDataSource?: string; 
    public get createMongoDbDataSource() {
        return this.getStringAttribute('create_mongo_db_data_source');
    }
    public set createMongoDbDataSource(value: string) {
        this._createMongoDbDataSource = value;
    }
    public resetCreateMongoDbDataSource() {
        this._createMongoDbDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createMongoDbDataSourceInput() {
        return this._createMongoDbDataSource;
    }

    // create_my_sql_data_source - computed: true, optional: true, required: false
    private _createMySqlDataSource?: string; 
    public get createMySqlDataSource() {
        return this.getStringAttribute('create_my_sql_data_source');
    }
    public set createMySqlDataSource(value: string) {
        this._createMySqlDataSource = value;
    }
    public resetCreateMySqlDataSource() {
        this._createMySqlDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createMySqlDataSourceInput() {
        return this._createMySqlDataSource;
    }

    // create_open_search_data_source - computed: true, optional: true, required: false
    private _createOpenSearchDataSource?: string; 
    public get createOpenSearchDataSource() {
        return this.getStringAttribute('create_open_search_data_source');
    }
    public set createOpenSearchDataSource(value: string) {
        this._createOpenSearchDataSource = value;
    }
    public resetCreateOpenSearchDataSource() {
        this._createOpenSearchDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createOpenSearchDataSourceInput() {
        return this._createOpenSearchDataSource;
    }

    // create_oracle_data_source - computed: true, optional: true, required: false
    private _createOracleDataSource?: string; 
    public get createOracleDataSource() {
        return this.getStringAttribute('create_oracle_data_source');
    }
    public set createOracleDataSource(value: string) {
        this._createOracleDataSource = value;
    }
    public resetCreateOracleDataSource() {
        this._createOracleDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createOracleDataSourceInput() {
        return this._createOracleDataSource;
    }

    // create_pay_pal_data_source - computed: true, optional: true, required: false
    private _createPayPalDataSource?: string; 
    public get createPayPalDataSource() {
        return this.getStringAttribute('create_pay_pal_data_source');
    }
    public set createPayPalDataSource(value: string) {
        this._createPayPalDataSource = value;
    }
    public resetCreatePayPalDataSource() {
        this._createPayPalDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createPayPalDataSourceInput() {
        return this._createPayPalDataSource;
    }

    // create_postgre_sql_data_source - computed: true, optional: true, required: false
    private _createPostgreSqlDataSource?: string; 
    public get createPostgreSqlDataSource() {
        return this.getStringAttribute('create_postgre_sql_data_source');
    }
    public set createPostgreSqlDataSource(value: string) {
        this._createPostgreSqlDataSource = value;
    }
    public resetCreatePostgreSqlDataSource() {
        this._createPostgreSqlDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createPostgreSqlDataSourceInput() {
        return this._createPostgreSqlDataSource;
    }

    // create_presto_data_source - computed: true, optional: true, required: false
    private _createPrestoDataSource?: string; 
    public get createPrestoDataSource() {
        return this.getStringAttribute('create_presto_data_source');
    }
    public set createPrestoDataSource(value: string) {
        this._createPrestoDataSource = value;
    }
    public resetCreatePrestoDataSource() {
        this._createPrestoDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createPrestoDataSourceInput() {
        return this._createPrestoDataSource;
    }

    // create_radiant_data_source - computed: true, optional: true, required: false
    private _createRadiantDataSource?: string; 
    public get createRadiantDataSource() {
        return this.getStringAttribute('create_radiant_data_source');
    }
    public set createRadiantDataSource(value: string) {
        this._createRadiantDataSource = value;
    }
    public resetCreateRadiantDataSource() {
        this._createRadiantDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createRadiantDataSourceInput() {
        return this._createRadiantDataSource;
    }

    // create_rds_data_source - computed: true, optional: true, required: false
    private _createRdsDataSource?: string; 
    public get createRdsDataSource() {
        return this.getStringAttribute('create_rds_data_source');
    }
    public set createRdsDataSource(value: string) {
        this._createRdsDataSource = value;
    }
    public resetCreateRdsDataSource() {
        this._createRdsDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createRdsDataSourceInput() {
        return this._createRdsDataSource;
    }

    // create_redshift_auto_discovered_data_source - computed: true, optional: true, required: false
    private _createRedshiftAutoDiscoveredDataSource?: string; 
    public get createRedshiftAutoDiscoveredDataSource() {
        return this.getStringAttribute('create_redshift_auto_discovered_data_source');
    }
    public set createRedshiftAutoDiscoveredDataSource(value: string) {
        this._createRedshiftAutoDiscoveredDataSource = value;
    }
    public resetCreateRedshiftAutoDiscoveredDataSource() {
        this._createRedshiftAutoDiscoveredDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createRedshiftAutoDiscoveredDataSourceInput() {
        return this._createRedshiftAutoDiscoveredDataSource;
    }

    // create_redshift_manual_data_source - computed: true, optional: true, required: false
    private _createRedshiftManualDataSource?: string; 
    public get createRedshiftManualDataSource() {
        return this.getStringAttribute('create_redshift_manual_data_source');
    }
    public set createRedshiftManualDataSource(value: string) {
        this._createRedshiftManualDataSource = value;
    }
    public resetCreateRedshiftManualDataSource() {
        this._createRedshiftManualDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createRedshiftManualDataSourceInput() {
        return this._createRedshiftManualDataSource;
    }

    // create_s3_analytics_data_source - computed: true, optional: true, required: false
    private _createS3AnalyticsDataSource?: string; 
    public get createS3AnalyticsDataSource() {
        return this.getStringAttribute('create_s3_analytics_data_source');
    }
    public set createS3AnalyticsDataSource(value: string) {
        this._createS3AnalyticsDataSource = value;
    }
    public resetCreateS3AnalyticsDataSource() {
        this._createS3AnalyticsDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createS3AnalyticsDataSourceInput() {
        return this._createS3AnalyticsDataSource;
    }

    // create_s3_data_source - computed: true, optional: true, required: false
    private _createS3DataSource?: string; 
    public get createS3DataSource() {
        return this.getStringAttribute('create_s3_data_source');
    }
    public set createS3DataSource(value: string) {
        this._createS3DataSource = value;
    }
    public resetCreateS3DataSource() {
        this._createS3DataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createS3DataSourceInput() {
        return this._createS3DataSource;
    }

    // create_s3_tables_data_source - computed: true, optional: true, required: false
    private _createS3TablesDataSource?: string; 
    public get createS3TablesDataSource() {
        return this.getStringAttribute('create_s3_tables_data_source');
    }
    public set createS3TablesDataSource(value: string) {
        this._createS3TablesDataSource = value;
    }
    public resetCreateS3TablesDataSource() {
        this._createS3TablesDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createS3TablesDataSourceInput() {
        return this._createS3TablesDataSource;
    }

    // create_salesforce_data_source - computed: true, optional: true, required: false
    private _createSalesforceDataSource?: string; 
    public get createSalesforceDataSource() {
        return this.getStringAttribute('create_salesforce_data_source');
    }
    public set createSalesforceDataSource(value: string) {
        this._createSalesforceDataSource = value;
    }
    public resetCreateSalesforceDataSource() {
        this._createSalesforceDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createSalesforceDataSourceInput() {
        return this._createSalesforceDataSource;
    }

    // create_sap_hana_data_source - computed: true, optional: true, required: false
    private _createSapHanaDataSource?: string; 
    public get createSapHanaDataSource() {
        return this.getStringAttribute('create_sap_hana_data_source');
    }
    public set createSapHanaDataSource(value: string) {
        this._createSapHanaDataSource = value;
    }
    public resetCreateSapHanaDataSource() {
        this._createSapHanaDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createSapHanaDataSourceInput() {
        return this._createSapHanaDataSource;
    }

    // create_service_now_data_source - computed: true, optional: true, required: false
    private _createServiceNowDataSource?: string; 
    public get createServiceNowDataSource() {
        return this.getStringAttribute('create_service_now_data_source');
    }
    public set createServiceNowDataSource(value: string) {
        this._createServiceNowDataSource = value;
    }
    public resetCreateServiceNowDataSource() {
        this._createServiceNowDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createServiceNowDataSourceInput() {
        return this._createServiceNowDataSource;
    }

    // create_shared_folders - computed: true, optional: true, required: false
    private _createSharedFolders?: string; 
    public get createSharedFolders() {
        return this.getStringAttribute('create_shared_folders');
    }
    public set createSharedFolders(value: string) {
        this._createSharedFolders = value;
    }
    public resetCreateSharedFolders() {
        this._createSharedFolders = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createSharedFoldersInput() {
        return this._createSharedFolders;
    }

    // create_snowflake_data_source - computed: true, optional: true, required: false
    private _createSnowflakeDataSource?: string; 
    public get createSnowflakeDataSource() {
        return this.getStringAttribute('create_snowflake_data_source');
    }
    public set createSnowflakeDataSource(value: string) {
        this._createSnowflakeDataSource = value;
    }
    public resetCreateSnowflakeDataSource() {
        this._createSnowflakeDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createSnowflakeDataSourceInput() {
        return this._createSnowflakeDataSource;
    }

    // create_spaces - computed: true, optional: true, required: false
    private _createSpaces?: string; 
    public get createSpaces() {
        return this.getStringAttribute('create_spaces');
    }
    public set createSpaces(value: string) {
        this._createSpaces = value;
    }
    public resetCreateSpaces() {
        this._createSpaces = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createSpacesInput() {
        return this._createSpaces;
    }

    // create_spark_data_source - computed: true, optional: true, required: false
    private _createSparkDataSource?: string; 
    public get createSparkDataSource() {
        return this.getStringAttribute('create_spark_data_source');
    }
    public set createSparkDataSource(value: string) {
        this._createSparkDataSource = value;
    }
    public resetCreateSparkDataSource() {
        this._createSparkDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createSparkDataSourceInput() {
        return this._createSparkDataSource;
    }

    // create_spice_dataset - computed: true, optional: true, required: false
    private _createSpiceDataset?: string; 
    public get createSpiceDataset() {
        return this.getStringAttribute('create_spice_dataset');
    }
    public set createSpiceDataset(value: string) {
        this._createSpiceDataset = value;
    }
    public resetCreateSpiceDataset() {
        this._createSpiceDataset = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createSpiceDatasetInput() {
        return this._createSpiceDataset;
    }

    // create_sql_server_data_source - computed: true, optional: true, required: false
    private _createSqlServerDataSource?: string; 
    public get createSqlServerDataSource() {
        return this.getStringAttribute('create_sql_server_data_source');
    }
    public set createSqlServerDataSource(value: string) {
        this._createSqlServerDataSource = value;
    }
    public resetCreateSqlServerDataSource() {
        this._createSqlServerDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createSqlServerDataSourceInput() {
        return this._createSqlServerDataSource;
    }

    // create_square_data_source - computed: true, optional: true, required: false
    private _createSquareDataSource?: string; 
    public get createSquareDataSource() {
        return this.getStringAttribute('create_square_data_source');
    }
    public set createSquareDataSource(value: string) {
        this._createSquareDataSource = value;
    }
    public resetCreateSquareDataSource() {
        this._createSquareDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createSquareDataSourceInput() {
        return this._createSquareDataSource;
    }

    // create_starburst_data_source - computed: true, optional: true, required: false
    private _createStarburstDataSource?: string; 
    public get createStarburstDataSource() {
        return this.getStringAttribute('create_starburst_data_source');
    }
    public set createStarburstDataSource(value: string) {
        this._createStarburstDataSource = value;
    }
    public resetCreateStarburstDataSource() {
        this._createStarburstDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createStarburstDataSourceInput() {
        return this._createStarburstDataSource;
    }

    // create_teradata_data_source - computed: true, optional: true, required: false
    private _createTeradataDataSource?: string; 
    public get createTeradataDataSource() {
        return this.getStringAttribute('create_teradata_data_source');
    }
    public set createTeradataDataSource(value: string) {
        this._createTeradataDataSource = value;
    }
    public resetCreateTeradataDataSource() {
        this._createTeradataDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createTeradataDataSourceInput() {
        return this._createTeradataDataSource;
    }

    // create_timestream_data_source - computed: true, optional: true, required: false
    private _createTimestreamDataSource?: string; 
    public get createTimestreamDataSource() {
        return this.getStringAttribute('create_timestream_data_source');
    }
    public set createTimestreamDataSource(value: string) {
        this._createTimestreamDataSource = value;
    }
    public resetCreateTimestreamDataSource() {
        this._createTimestreamDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createTimestreamDataSourceInput() {
        return this._createTimestreamDataSource;
    }

    // create_trino_data_source - computed: true, optional: true, required: false
    private _createTrinoDataSource?: string; 
    public get createTrinoDataSource() {
        return this.getStringAttribute('create_trino_data_source');
    }
    public set createTrinoDataSource(value: string) {
        this._createTrinoDataSource = value;
    }
    public resetCreateTrinoDataSource() {
        this._createTrinoDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createTrinoDataSourceInput() {
        return this._createTrinoDataSource;
    }

    // create_twitter_data_source - computed: true, optional: true, required: false
    private _createTwitterDataSource?: string; 
    public get createTwitterDataSource() {
        return this.getStringAttribute('create_twitter_data_source');
    }
    public set createTwitterDataSource(value: string) {
        this._createTwitterDataSource = value;
    }
    public resetCreateTwitterDataSource() {
        this._createTwitterDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createTwitterDataSourceInput() {
        return this._createTwitterDataSource;
    }

    // dashboard - computed: true, optional: true, required: false
    private _dashboard?: string; 
    public get dashboard() {
        return this.getStringAttribute('dashboard');
    }
    public set dashboard(value: string) {
        this._dashboard = value;
    }
    public resetDashboard() {
        this._dashboard = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dashboardInput() {
        return this._dashboard;
    }

    // databricks_data_source - computed: true, optional: true, required: false
    private _databricksDataSource?: string; 
    public get databricksDataSource() {
        return this.getStringAttribute('databricks_data_source');
    }
    public set databricksDataSource(value: string) {
        this._databricksDataSource = value;
    }
    public resetDatabricksDataSource() {
        this._databricksDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databricksDataSourceInput() {
        return this._databricksDataSource;
    }

    // db_2_data_source - computed: true, optional: true, required: false
    private _db2DataSource?: string; 
    public get db2DataSource() {
        return this.getStringAttribute('db_2_data_source');
    }
    public set db2DataSource(value: string) {
        this._db2DataSource = value;
    }
    public resetDb2DataSource() {
        this._db2DataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get db2DataSourceInput() {
        return this._db2DataSource;
    }

    // denodo_data_source - computed: true, optional: true, required: false
    private _denodoDataSource?: string; 
    public get denodoDataSource() {
        return this.getStringAttribute('denodo_data_source');
    }
    public set denodoDataSource(value: string) {
        this._denodoDataSource = value;
    }
    public resetDenodoDataSource() {
        this._denodoDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get denodoDataSourceInput() {
        return this._denodoDataSource;
    }

    // document_db_data_source - computed: true, optional: true, required: false
    private _documentDbDataSource?: string; 
    public get documentDbDataSource() {
        return this.getStringAttribute('document_db_data_source');
    }
    public set documentDbDataSource(value: string) {
        this._documentDbDataSource = value;
    }
    public resetDocumentDbDataSource() {
        this._documentDbDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get documentDbDataSourceInput() {
        return this._documentDbDataSource;
    }

    // dremio_data_source - computed: true, optional: true, required: false
    private _dremioDataSource?: string; 
    public get dremioDataSource() {
        return this.getStringAttribute('dremio_data_source');
    }
    public set dremioDataSource(value: string) {
        this._dremioDataSource = value;
    }
    public resetDremioDataSource() {
        this._dremioDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dremioDataSourceInput() {
        return this._dremioDataSource;
    }

    // dynamo_db_data_source - computed: true, optional: true, required: false
    private _dynamoDbDataSource?: string; 
    public get dynamoDbDataSource() {
        return this.getStringAttribute('dynamo_db_data_source');
    }
    public set dynamoDbDataSource(value: string) {
        this._dynamoDbDataSource = value;
    }
    public resetDynamoDbDataSource() {
        this._dynamoDbDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dynamoDbDataSourceInput() {
        return this._dynamoDbDataSource;
    }

    // edit_visual_with_q - computed: true, optional: true, required: false
    private _editVisualWithQ?: string; 
    public get editVisualWithQ() {
        return this.getStringAttribute('edit_visual_with_q');
    }
    public set editVisualWithQ(value: string) {
        this._editVisualWithQ = value;
    }
    public resetEditVisualWithQ() {
        this._editVisualWithQ = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get editVisualWithQInput() {
        return this._editVisualWithQ;
    }

    // exasol_data_source - computed: true, optional: true, required: false
    private _exasolDataSource?: string; 
    public get exasolDataSource() {
        return this.getStringAttribute('exasol_data_source');
    }
    public set exasolDataSource(value: string) {
        this._exasolDataSource = value;
    }
    public resetExasolDataSource() {
        this._exasolDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get exasolDataSourceInput() {
        return this._exasolDataSource;
    }

    // export_to_csv - computed: true, optional: true, required: false
    private _exportToCsv?: string; 
    public get exportToCsv() {
        return this.getStringAttribute('export_to_csv');
    }
    public set exportToCsv(value: string) {
        this._exportToCsv = value;
    }
    public resetExportToCsv() {
        this._exportToCsv = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get exportToCsvInput() {
        return this._exportToCsv;
    }

    // export_to_csv_in_scheduled_reports - computed: true, optional: true, required: false
    private _exportToCsvInScheduledReports?: string; 
    public get exportToCsvInScheduledReports() {
        return this.getStringAttribute('export_to_csv_in_scheduled_reports');
    }
    public set exportToCsvInScheduledReports(value: string) {
        this._exportToCsvInScheduledReports = value;
    }
    public resetExportToCsvInScheduledReports() {
        this._exportToCsvInScheduledReports = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get exportToCsvInScheduledReportsInput() {
        return this._exportToCsvInScheduledReports;
    }

    // export_to_excel - computed: true, optional: true, required: false
    private _exportToExcel?: string; 
    public get exportToExcel() {
        return this.getStringAttribute('export_to_excel');
    }
    public set exportToExcel(value: string) {
        this._exportToExcel = value;
    }
    public resetExportToExcel() {
        this._exportToExcel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get exportToExcelInput() {
        return this._exportToExcel;
    }

    // export_to_excel_in_scheduled_reports - computed: true, optional: true, required: false
    private _exportToExcelInScheduledReports?: string; 
    public get exportToExcelInScheduledReports() {
        return this.getStringAttribute('export_to_excel_in_scheduled_reports');
    }
    public set exportToExcelInScheduledReports(value: string) {
        this._exportToExcelInScheduledReports = value;
    }
    public resetExportToExcelInScheduledReports() {
        this._exportToExcelInScheduledReports = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get exportToExcelInScheduledReportsInput() {
        return this._exportToExcelInScheduledReports;
    }

    // export_to_pdf - computed: true, optional: true, required: false
    private _exportToPdf?: string; 
    public get exportToPdf() {
        return this.getStringAttribute('export_to_pdf');
    }
    public set exportToPdf(value: string) {
        this._exportToPdf = value;
    }
    public resetExportToPdf() {
        this._exportToPdf = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get exportToPdfInput() {
        return this._exportToPdf;
    }

    // export_to_pdf_in_scheduled_reports - computed: true, optional: true, required: false
    private _exportToPdfInScheduledReports?: string; 
    public get exportToPdfInScheduledReports() {
        return this.getStringAttribute('export_to_pdf_in_scheduled_reports');
    }
    public set exportToPdfInScheduledReports(value: string) {
        this._exportToPdfInScheduledReports = value;
    }
    public resetExportToPdfInScheduledReports() {
        this._exportToPdfInScheduledReports = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get exportToPdfInScheduledReportsInput() {
        return this._exportToPdfInScheduledReports;
    }

    // extension - computed: true, optional: true, required: false
    private _extension?: string; 
    public get extension() {
        return this.getStringAttribute('extension');
    }
    public set extension(value: string) {
        this._extension = value;
    }
    public resetExtension() {
        this._extension = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get extensionInput() {
        return this._extension;
    }

    // fact_set_action - computed: true, optional: true, required: false
    private _factSetAction?: string; 
    public get factSetAction() {
        return this.getStringAttribute('fact_set_action');
    }
    public set factSetAction(value: string) {
        this._factSetAction = value;
    }
    public resetFactSetAction() {
        this._factSetAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get factSetActionInput() {
        return this._factSetAction;
    }

    // file_data_source - computed: true, optional: true, required: false
    private _fileDataSource?: string; 
    public get fileDataSource() {
        return this.getStringAttribute('file_data_source');
    }
    public set fileDataSource(value: string) {
        this._fileDataSource = value;
    }
    public resetFileDataSource() {
        this._fileDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fileDataSourceInput() {
        return this._fileDataSource;
    }

    // flow - computed: true, optional: true, required: false
    private _flow?: string; 
    public get flow() {
        return this.getStringAttribute('flow');
    }
    public set flow(value: string) {
        this._flow = value;
    }
    public resetFlow() {
        this._flow = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get flowInput() {
        return this._flow;
    }

    // generic_http_action - computed: true, optional: true, required: false
    private _genericHttpAction?: string; 
    public get genericHttpAction() {
        return this.getStringAttribute('generic_http_action');
    }
    public set genericHttpAction(value: string) {
        this._genericHttpAction = value;
    }
    public resetGenericHttpAction() {
        this._genericHttpAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get genericHttpActionInput() {
        return this._genericHttpAction;
    }

    // git_hub_data_source - computed: true, optional: true, required: false
    private _gitHubDataSource?: string; 
    public get gitHubDataSource() {
        return this.getStringAttribute('git_hub_data_source');
    }
    public set gitHubDataSource(value: string) {
        this._gitHubDataSource = value;
    }
    public resetGitHubDataSource() {
        this._gitHubDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get gitHubDataSourceInput() {
        return this._gitHubDataSource;
    }

    // github_action - computed: true, optional: true, required: false
    private _githubAction?: string; 
    public get githubAction() {
        return this.getStringAttribute('github_action');
    }
    public set githubAction(value: string) {
        this._githubAction = value;
    }
    public resetGithubAction() {
        this._githubAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get githubActionInput() {
        return this._githubAction;
    }

    // google_analytics_data_source - computed: true, optional: true, required: false
    private _googleAnalyticsDataSource?: string; 
    public get googleAnalyticsDataSource() {
        return this.getStringAttribute('google_analytics_data_source');
    }
    public set googleAnalyticsDataSource(value: string) {
        this._googleAnalyticsDataSource = value;
    }
    public resetGoogleAnalyticsDataSource() {
        this._googleAnalyticsDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get googleAnalyticsDataSourceInput() {
        return this._googleAnalyticsDataSource;
    }

    // google_big_query_data_source - computed: true, optional: true, required: false
    private _googleBigQueryDataSource?: string; 
    public get googleBigQueryDataSource() {
        return this.getStringAttribute('google_big_query_data_source');
    }
    public set googleBigQueryDataSource(value: string) {
        this._googleBigQueryDataSource = value;
    }
    public resetGoogleBigQueryDataSource() {
        this._googleBigQueryDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get googleBigQueryDataSourceInput() {
        return this._googleBigQueryDataSource;
    }

    // google_calendar_action - computed: true, optional: true, required: false
    private _googleCalendarAction?: string; 
    public get googleCalendarAction() {
        return this.getStringAttribute('google_calendar_action');
    }
    public set googleCalendarAction(value: string) {
        this._googleCalendarAction = value;
    }
    public resetGoogleCalendarAction() {
        this._googleCalendarAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get googleCalendarActionInput() {
        return this._googleCalendarAction;
    }

    // google_drive_knowledge_base - computed: true, optional: true, required: false
    private _googleDriveKnowledgeBase?: string; 
    public get googleDriveKnowledgeBase() {
        return this.getStringAttribute('google_drive_knowledge_base');
    }
    public set googleDriveKnowledgeBase(value: string) {
        this._googleDriveKnowledgeBase = value;
    }
    public resetGoogleDriveKnowledgeBase() {
        this._googleDriveKnowledgeBase = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get googleDriveKnowledgeBaseInput() {
        return this._googleDriveKnowledgeBase;
    }

    // google_sheets_data_source - computed: true, optional: true, required: false
    private _googleSheetsDataSource?: string; 
    public get googleSheetsDataSource() {
        return this.getStringAttribute('google_sheets_data_source');
    }
    public set googleSheetsDataSource(value: string) {
        this._googleSheetsDataSource = value;
    }
    public resetGoogleSheetsDataSource() {
        this._googleSheetsDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get googleSheetsDataSourceInput() {
        return this._googleSheetsDataSource;
    }

    // hubspot_action - computed: true, optional: true, required: false
    private _hubspotAction?: string; 
    public get hubspotAction() {
        return this.getStringAttribute('hubspot_action');
    }
    public set hubspotAction(value: string) {
        this._hubspotAction = value;
    }
    public resetHubspotAction() {
        this._hubspotAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hubspotActionInput() {
        return this._hubspotAction;
    }

    // hugging_face_action - computed: true, optional: true, required: false
    private _huggingFaceAction?: string; 
    public get huggingFaceAction() {
        return this.getStringAttribute('hugging_face_action');
    }
    public set huggingFaceAction(value: string) {
        this._huggingFaceAction = value;
    }
    public resetHuggingFaceAction() {
        this._huggingFaceAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get huggingFaceActionInput() {
        return this._huggingFaceAction;
    }

    // idc_knowledge_base - computed: true, optional: true, required: false
    private _idcKnowledgeBase?: string; 
    public get idcKnowledgeBase() {
        return this.getStringAttribute('idc_knowledge_base');
    }
    public set idcKnowledgeBase(value: string) {
        this._idcKnowledgeBase = value;
    }
    public resetIdcKnowledgeBase() {
        this._idcKnowledgeBase = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idcKnowledgeBaseInput() {
        return this._idcKnowledgeBase;
    }

    // impala_data_source - computed: true, optional: true, required: false
    private _impalaDataSource?: string; 
    public get impalaDataSource() {
        return this.getStringAttribute('impala_data_source');
    }
    public set impalaDataSource(value: string) {
        this._impalaDataSource = value;
    }
    public resetImpalaDataSource() {
        this._impalaDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get impalaDataSourceInput() {
        return this._impalaDataSource;
    }

    // inbound_email_trigger - computed: true, optional: true, required: false
    private _inboundEmailTrigger?: string; 
    public get inboundEmailTrigger() {
        return this.getStringAttribute('inbound_email_trigger');
    }
    public set inboundEmailTrigger(value: string) {
        this._inboundEmailTrigger = value;
    }
    public resetInboundEmailTrigger() {
        this._inboundEmailTrigger = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inboundEmailTriggerInput() {
        return this._inboundEmailTrigger;
    }

    // include_content_in_scheduled_reports_email - computed: true, optional: true, required: false
    private _includeContentInScheduledReportsEmail?: string; 
    public get includeContentInScheduledReportsEmail() {
        return this.getStringAttribute('include_content_in_scheduled_reports_email');
    }
    public set includeContentInScheduledReportsEmail(value: string) {
        this._includeContentInScheduledReportsEmail = value;
    }
    public resetIncludeContentInScheduledReportsEmail() {
        this._includeContentInScheduledReportsEmail = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get includeContentInScheduledReportsEmailInput() {
        return this._includeContentInScheduledReportsEmail;
    }

    // intercom_action - computed: true, optional: true, required: false
    private _intercomAction?: string; 
    public get intercomAction() {
        return this.getStringAttribute('intercom_action');
    }
    public set intercomAction(value: string) {
        this._intercomAction = value;
    }
    public resetIntercomAction() {
        this._intercomAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get intercomActionInput() {
        return this._intercomAction;
    }

    // invoke_apps_ai_inference - computed: true, optional: true, required: false
    private _invokeAppsAiInference?: string; 
    public get invokeAppsAiInference() {
        return this.getStringAttribute('invoke_apps_ai_inference');
    }
    public set invokeAppsAiInference(value: string) {
        this._invokeAppsAiInference = value;
    }
    public resetInvokeAppsAiInference() {
        this._invokeAppsAiInference = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get invokeAppsAiInferenceInput() {
        return this._invokeAppsAiInference;
    }

    // jira_action - computed: true, optional: true, required: false
    private _jiraAction?: string; 
    public get jiraAction() {
        return this.getStringAttribute('jira_action');
    }
    public set jiraAction(value: string) {
        this._jiraAction = value;
    }
    public resetJiraAction() {
        this._jiraAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jiraActionInput() {
        return this._jiraAction;
    }

    // jira_data_source - computed: true, optional: true, required: false
    private _jiraDataSource?: string; 
    public get jiraDataSource() {
        return this.getStringAttribute('jira_data_source');
    }
    public set jiraDataSource(value: string) {
        this._jiraDataSource = value;
    }
    public resetJiraDataSource() {
        this._jiraDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jiraDataSourceInput() {
        return this._jiraDataSource;
    }

    // knowledge_base - computed: true, optional: true, required: false
    private _knowledgeBase?: string; 
    public get knowledgeBase() {
        return this.getStringAttribute('knowledge_base');
    }
    public set knowledgeBase(value: string) {
        this._knowledgeBase = value;
    }
    public resetKnowledgeBase() {
        this._knowledgeBase = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get knowledgeBaseInput() {
        return this._knowledgeBase;
    }

    // linear_action - computed: true, optional: true, required: false
    private _linearAction?: string; 
    public get linearAction() {
        return this.getStringAttribute('linear_action');
    }
    public set linearAction(value: string) {
        this._linearAction = value;
    }
    public resetLinearAction() {
        this._linearAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get linearActionInput() {
        return this._linearAction;
    }

    // manage_shared_folders - computed: true, optional: true, required: false
    private _manageSharedFolders?: string; 
    public get manageSharedFolders() {
        return this.getStringAttribute('manage_shared_folders');
    }
    public set manageSharedFolders(value: string) {
        this._manageSharedFolders = value;
    }
    public resetManageSharedFolders() {
        this._manageSharedFolders = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get manageSharedFoldersInput() {
        return this._manageSharedFolders;
    }

    // maria_db_data_source - computed: true, optional: true, required: false
    private _mariaDbDataSource?: string; 
    public get mariaDbDataSource() {
        return this.getStringAttribute('maria_db_data_source');
    }
    public set mariaDbDataSource(value: string) {
        this._mariaDbDataSource = value;
    }
    public resetMariaDbDataSource() {
        this._mariaDbDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mariaDbDataSourceInput() {
        return this._mariaDbDataSource;
    }

    // mcp_action - computed: true, optional: true, required: false
    private _mcpAction?: string; 
    public get mcpAction() {
        return this.getStringAttribute('mcp_action');
    }
    public set mcpAction(value: string) {
        this._mcpAction = value;
    }
    public resetMcpAction() {
        this._mcpAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mcpActionInput() {
        return this._mcpAction;
    }

    // monday_action - computed: true, optional: true, required: false
    private _mondayAction?: string; 
    public get mondayAction() {
        return this.getStringAttribute('monday_action');
    }
    public set mondayAction(value: string) {
        this._mondayAction = value;
    }
    public resetMondayAction() {
        this._mondayAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mondayActionInput() {
        return this._mondayAction;
    }

    // mongo_atlas_data_source - computed: true, optional: true, required: false
    private _mongoAtlasDataSource?: string; 
    public get mongoAtlasDataSource() {
        return this.getStringAttribute('mongo_atlas_data_source');
    }
    public set mongoAtlasDataSource(value: string) {
        this._mongoAtlasDataSource = value;
    }
    public resetMongoAtlasDataSource() {
        this._mongoAtlasDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mongoAtlasDataSourceInput() {
        return this._mongoAtlasDataSource;
    }

    // mongo_db_data_source - computed: true, optional: true, required: false
    private _mongoDbDataSource?: string; 
    public get mongoDbDataSource() {
        return this.getStringAttribute('mongo_db_data_source');
    }
    public set mongoDbDataSource(value: string) {
        this._mongoDbDataSource = value;
    }
    public resetMongoDbDataSource() {
        this._mongoDbDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mongoDbDataSourceInput() {
        return this._mongoDbDataSource;
    }

    // ms_exchange_action - computed: true, optional: true, required: false
    private _msExchangeAction?: string; 
    public get msExchangeAction() {
        return this.getStringAttribute('ms_exchange_action');
    }
    public set msExchangeAction(value: string) {
        this._msExchangeAction = value;
    }
    public resetMsExchangeAction() {
        this._msExchangeAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get msExchangeActionInput() {
        return this._msExchangeAction;
    }

    // ms_teams_action - computed: true, optional: true, required: false
    private _msTeamsAction?: string; 
    public get msTeamsAction() {
        return this.getStringAttribute('ms_teams_action');
    }
    public set msTeamsAction(value: string) {
        this._msTeamsAction = value;
    }
    public resetMsTeamsAction() {
        this._msTeamsAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get msTeamsActionInput() {
        return this._msTeamsAction;
    }

    // my_sql_data_source - computed: true, optional: true, required: false
    private _mySqlDataSource?: string; 
    public get mySqlDataSource() {
        return this.getStringAttribute('my_sql_data_source');
    }
    public set mySqlDataSource(value: string) {
        this._mySqlDataSource = value;
    }
    public resetMySqlDataSource() {
        this._mySqlDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mySqlDataSourceInput() {
        return this._mySqlDataSource;
    }

    // new_relic_action - computed: true, optional: true, required: false
    private _newRelicAction?: string; 
    public get newRelicAction() {
        return this.getStringAttribute('new_relic_action');
    }
    public set newRelicAction(value: string) {
        this._newRelicAction = value;
    }
    public resetNewRelicAction() {
        this._newRelicAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get newRelicActionInput() {
        return this._newRelicAction;
    }

    // notion_action - computed: true, optional: true, required: false
    private _notionAction?: string; 
    public get notionAction() {
        return this.getStringAttribute('notion_action');
    }
    public set notionAction(value: string) {
        this._notionAction = value;
    }
    public resetNotionAction() {
        this._notionAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get notionActionInput() {
        return this._notionAction;
    }

    // one_drive_action - computed: true, optional: true, required: false
    private _oneDriveAction?: string; 
    public get oneDriveAction() {
        return this.getStringAttribute('one_drive_action');
    }
    public set oneDriveAction(value: string) {
        this._oneDriveAction = value;
    }
    public resetOneDriveAction() {
        this._oneDriveAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get oneDriveActionInput() {
        return this._oneDriveAction;
    }

    // one_drive_knowledge_base - computed: true, optional: true, required: false
    private _oneDriveKnowledgeBase?: string; 
    public get oneDriveKnowledgeBase() {
        return this.getStringAttribute('one_drive_knowledge_base');
    }
    public set oneDriveKnowledgeBase(value: string) {
        this._oneDriveKnowledgeBase = value;
    }
    public resetOneDriveKnowledgeBase() {
        this._oneDriveKnowledgeBase = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get oneDriveKnowledgeBaseInput() {
        return this._oneDriveKnowledgeBase;
    }

    // open_api_action - computed: true, optional: true, required: false
    private _openApiAction?: string; 
    public get openApiAction() {
        return this.getStringAttribute('open_api_action');
    }
    public set openApiAction(value: string) {
        this._openApiAction = value;
    }
    public resetOpenApiAction() {
        this._openApiAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get openApiActionInput() {
        return this._openApiAction;
    }

    // open_search_data_source - computed: true, optional: true, required: false
    private _openSearchDataSource?: string; 
    public get openSearchDataSource() {
        return this.getStringAttribute('open_search_data_source');
    }
    public set openSearchDataSource(value: string) {
        this._openSearchDataSource = value;
    }
    public resetOpenSearchDataSource() {
        this._openSearchDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get openSearchDataSourceInput() {
        return this._openSearchDataSource;
    }

    // oracle_data_source - computed: true, optional: true, required: false
    private _oracleDataSource?: string; 
    public get oracleDataSource() {
        return this.getStringAttribute('oracle_data_source');
    }
    public set oracleDataSource(value: string) {
        this._oracleDataSource = value;
    }
    public resetOracleDataSource() {
        this._oracleDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get oracleDataSourceInput() {
        return this._oracleDataSource;
    }

    // pager_duty_action - computed: true, optional: true, required: false
    private _pagerDutyAction?: string; 
    public get pagerDutyAction() {
        return this.getStringAttribute('pager_duty_action');
    }
    public set pagerDutyAction(value: string) {
        this._pagerDutyAction = value;
    }
    public resetPagerDutyAction() {
        this._pagerDutyAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pagerDutyActionInput() {
        return this._pagerDutyAction;
    }

    // pay_pal_data_source - computed: true, optional: true, required: false
    private _payPalDataSource?: string; 
    public get payPalDataSource() {
        return this.getStringAttribute('pay_pal_data_source');
    }
    public set payPalDataSource(value: string) {
        this._payPalDataSource = value;
    }
    public resetPayPalDataSource() {
        this._payPalDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get payPalDataSourceInput() {
        return this._payPalDataSource;
    }

    // perform_flow_ui_task - computed: true, optional: true, required: false
    private _performFlowUiTask?: string; 
    public get performFlowUiTask() {
        return this.getStringAttribute('perform_flow_ui_task');
    }
    public set performFlowUiTask(value: string) {
        this._performFlowUiTask = value;
    }
    public resetPerformFlowUiTask() {
        this._performFlowUiTask = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get performFlowUiTaskInput() {
        return this._performFlowUiTask;
    }

    // postgre_sql_data_source - computed: true, optional: true, required: false
    private _postgreSqlDataSource?: string; 
    public get postgreSqlDataSource() {
        return this.getStringAttribute('postgre_sql_data_source');
    }
    public set postgreSqlDataSource(value: string) {
        this._postgreSqlDataSource = value;
    }
    public resetPostgreSqlDataSource() {
        this._postgreSqlDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get postgreSqlDataSourceInput() {
        return this._postgreSqlDataSource;
    }

    // presto_data_source - computed: true, optional: true, required: false
    private _prestoDataSource?: string; 
    public get prestoDataSource() {
        return this.getStringAttribute('presto_data_source');
    }
    public set prestoDataSource(value: string) {
        this._prestoDataSource = value;
    }
    public resetPrestoDataSource() {
        this._prestoDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get prestoDataSourceInput() {
        return this._prestoDataSource;
    }

    // print_reports - computed: true, optional: true, required: false
    private _printReports?: string; 
    public get printReports() {
        return this.getStringAttribute('print_reports');
    }
    public set printReports(value: string) {
        this._printReports = value;
    }
    public resetPrintReports() {
        this._printReports = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get printReportsInput() {
        return this._printReports;
    }

    // publish_without_approval - computed: true, optional: true, required: false
    private _publishWithoutApproval?: string; 
    public get publishWithoutApproval() {
        return this.getStringAttribute('publish_without_approval');
    }
    public set publishWithoutApproval(value: string) {
        this._publishWithoutApproval = value;
    }
    public resetPublishWithoutApproval() {
        this._publishWithoutApproval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get publishWithoutApprovalInput() {
        return this._publishWithoutApproval;
    }

    // q_business_knowledge_base - computed: true, optional: true, required: false
    private _qBusinessKnowledgeBase?: string; 
    public get qBusinessKnowledgeBase() {
        return this.getStringAttribute('q_business_knowledge_base');
    }
    public set qBusinessKnowledgeBase(value: string) {
        this._qBusinessKnowledgeBase = value;
    }
    public resetQBusinessKnowledgeBase() {
        this._qBusinessKnowledgeBase = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get qBusinessKnowledgeBaseInput() {
        return this._qBusinessKnowledgeBase;
    }

    // quick_event_trigger - computed: true, optional: true, required: false
    private _quickEventTrigger?: string; 
    public get quickEventTrigger() {
        return this.getStringAttribute('quick_event_trigger');
    }
    public set quickEventTrigger(value: string) {
        this._quickEventTrigger = value;
    }
    public resetQuickEventTrigger() {
        this._quickEventTrigger = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get quickEventTriggerInput() {
        return this._quickEventTrigger;
    }

    // radiant_data_source - computed: true, optional: true, required: false
    private _radiantDataSource?: string; 
    public get radiantDataSource() {
        return this.getStringAttribute('radiant_data_source');
    }
    public set radiantDataSource(value: string) {
        this._radiantDataSource = value;
    }
    public resetRadiantDataSource() {
        this._radiantDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get radiantDataSourceInput() {
        return this._radiantDataSource;
    }

    // rds_data_source - computed: true, optional: true, required: false
    private _rdsDataSource?: string; 
    public get rdsDataSource() {
        return this.getStringAttribute('rds_data_source');
    }
    public set rdsDataSource(value: string) {
        this._rdsDataSource = value;
    }
    public resetRdsDataSource() {
        this._rdsDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rdsDataSourceInput() {
        return this._rdsDataSource;
    }

    // redshift_auto_discovered_data_source - computed: true, optional: true, required: false
    private _redshiftAutoDiscoveredDataSource?: string; 
    public get redshiftAutoDiscoveredDataSource() {
        return this.getStringAttribute('redshift_auto_discovered_data_source');
    }
    public set redshiftAutoDiscoveredDataSource(value: string) {
        this._redshiftAutoDiscoveredDataSource = value;
    }
    public resetRedshiftAutoDiscoveredDataSource() {
        this._redshiftAutoDiscoveredDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get redshiftAutoDiscoveredDataSourceInput() {
        return this._redshiftAutoDiscoveredDataSource;
    }

    // redshift_manual_data_source - computed: true, optional: true, required: false
    private _redshiftManualDataSource?: string; 
    public get redshiftManualDataSource() {
        return this.getStringAttribute('redshift_manual_data_source');
    }
    public set redshiftManualDataSource(value: string) {
        this._redshiftManualDataSource = value;
    }
    public resetRedshiftManualDataSource() {
        this._redshiftManualDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get redshiftManualDataSourceInput() {
        return this._redshiftManualDataSource;
    }

    // rename_shared_folders - computed: true, optional: true, required: false
    private _renameSharedFolders?: string; 
    public get renameSharedFolders() {
        return this.getStringAttribute('rename_shared_folders');
    }
    public set renameSharedFolders(value: string) {
        this._renameSharedFolders = value;
    }
    public resetRenameSharedFolders() {
        this._renameSharedFolders = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get renameSharedFoldersInput() {
        return this._renameSharedFolders;
    }

    // research - computed: true, optional: true, required: false
    private _research?: string; 
    public get research() {
        return this.getStringAttribute('research');
    }
    public set research(value: string) {
        this._research = value;
    }
    public resetResearch() {
        this._research = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get researchInput() {
        return this._research;
    }

    // s3_analytics_data_source - computed: true, optional: true, required: false
    private _s3AnalyticsDataSource?: string; 
    public get s3AnalyticsDataSource() {
        return this.getStringAttribute('s3_analytics_data_source');
    }
    public set s3AnalyticsDataSource(value: string) {
        this._s3AnalyticsDataSource = value;
    }
    public resetS3AnalyticsDataSource() {
        this._s3AnalyticsDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3AnalyticsDataSourceInput() {
        return this._s3AnalyticsDataSource;
    }

    // s3_data_source - computed: true, optional: true, required: false
    private _s3DataSource?: string; 
    public get s3DataSource() {
        return this.getStringAttribute('s3_data_source');
    }
    public set s3DataSource(value: string) {
        this._s3DataSource = value;
    }
    public resetS3DataSource() {
        this._s3DataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3DataSourceInput() {
        return this._s3DataSource;
    }

    // s3_knowledge_base - computed: true, optional: true, required: false
    private _s3KnowledgeBase?: string; 
    public get s3KnowledgeBase() {
        return this.getStringAttribute('s3_knowledge_base');
    }
    public set s3KnowledgeBase(value: string) {
        this._s3KnowledgeBase = value;
    }
    public resetS3KnowledgeBase() {
        this._s3KnowledgeBase = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3KnowledgeBaseInput() {
        return this._s3KnowledgeBase;
    }

    // s3_tables_data_source - computed: true, optional: true, required: false
    private _s3TablesDataSource?: string; 
    public get s3TablesDataSource() {
        return this.getStringAttribute('s3_tables_data_source');
    }
    public set s3TablesDataSource(value: string) {
        this._s3TablesDataSource = value;
    }
    public resetS3TablesDataSource() {
        this._s3TablesDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3TablesDataSourceInput() {
        return this._s3TablesDataSource;
    }

    // salesforce_action - computed: true, optional: true, required: false
    private _salesforceAction?: string; 
    public get salesforceAction() {
        return this.getStringAttribute('salesforce_action');
    }
    public set salesforceAction(value: string) {
        this._salesforceAction = value;
    }
    public resetSalesforceAction() {
        this._salesforceAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get salesforceActionInput() {
        return this._salesforceAction;
    }

    // salesforce_data_source - computed: true, optional: true, required: false
    private _salesforceDataSource?: string; 
    public get salesforceDataSource() {
        return this.getStringAttribute('salesforce_data_source');
    }
    public set salesforceDataSource(value: string) {
        this._salesforceDataSource = value;
    }
    public resetSalesforceDataSource() {
        this._salesforceDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get salesforceDataSourceInput() {
        return this._salesforceDataSource;
    }

    // sand_p_global_energy_action - computed: true, optional: true, required: false
    private _sandPGlobalEnergyAction?: string; 
    public get sandPGlobalEnergyAction() {
        return this.getStringAttribute('sand_p_global_energy_action');
    }
    public set sandPGlobalEnergyAction(value: string) {
        this._sandPGlobalEnergyAction = value;
    }
    public resetSandPGlobalEnergyAction() {
        this._sandPGlobalEnergyAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sandPGlobalEnergyActionInput() {
        return this._sandPGlobalEnergyAction;
    }

    // sand_pgmi_action - computed: true, optional: true, required: false
    private _sandPgmiAction?: string; 
    public get sandPgmiAction() {
        return this.getStringAttribute('sand_pgmi_action');
    }
    public set sandPgmiAction(value: string) {
        this._sandPgmiAction = value;
    }
    public resetSandPgmiAction() {
        this._sandPgmiAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sandPgmiActionInput() {
        return this._sandPgmiAction;
    }

    // sap_bill_of_material_action - computed: true, optional: true, required: false
    private _sapBillOfMaterialAction?: string; 
    public get sapBillOfMaterialAction() {
        return this.getStringAttribute('sap_bill_of_material_action');
    }
    public set sapBillOfMaterialAction(value: string) {
        this._sapBillOfMaterialAction = value;
    }
    public resetSapBillOfMaterialAction() {
        this._sapBillOfMaterialAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sapBillOfMaterialActionInput() {
        return this._sapBillOfMaterialAction;
    }

    // sap_business_partner_action - computed: true, optional: true, required: false
    private _sapBusinessPartnerAction?: string; 
    public get sapBusinessPartnerAction() {
        return this.getStringAttribute('sap_business_partner_action');
    }
    public set sapBusinessPartnerAction(value: string) {
        this._sapBusinessPartnerAction = value;
    }
    public resetSapBusinessPartnerAction() {
        this._sapBusinessPartnerAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sapBusinessPartnerActionInput() {
        return this._sapBusinessPartnerAction;
    }

    // sap_hana_data_source - computed: true, optional: true, required: false
    private _sapHanaDataSource?: string; 
    public get sapHanaDataSource() {
        return this.getStringAttribute('sap_hana_data_source');
    }
    public set sapHanaDataSource(value: string) {
        this._sapHanaDataSource = value;
    }
    public resetSapHanaDataSource() {
        this._sapHanaDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sapHanaDataSourceInput() {
        return this._sapHanaDataSource;
    }

    // sap_material_stock_action - computed: true, optional: true, required: false
    private _sapMaterialStockAction?: string; 
    public get sapMaterialStockAction() {
        return this.getStringAttribute('sap_material_stock_action');
    }
    public set sapMaterialStockAction(value: string) {
        this._sapMaterialStockAction = value;
    }
    public resetSapMaterialStockAction() {
        this._sapMaterialStockAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sapMaterialStockActionInput() {
        return this._sapMaterialStockAction;
    }

    // sap_physical_inventory_action - computed: true, optional: true, required: false
    private _sapPhysicalInventoryAction?: string; 
    public get sapPhysicalInventoryAction() {
        return this.getStringAttribute('sap_physical_inventory_action');
    }
    public set sapPhysicalInventoryAction(value: string) {
        this._sapPhysicalInventoryAction = value;
    }
    public resetSapPhysicalInventoryAction() {
        this._sapPhysicalInventoryAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sapPhysicalInventoryActionInput() {
        return this._sapPhysicalInventoryAction;
    }

    // sap_product_master_data_action - computed: true, optional: true, required: false
    private _sapProductMasterDataAction?: string; 
    public get sapProductMasterDataAction() {
        return this.getStringAttribute('sap_product_master_data_action');
    }
    public set sapProductMasterDataAction(value: string) {
        this._sapProductMasterDataAction = value;
    }
    public resetSapProductMasterDataAction() {
        this._sapProductMasterDataAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sapProductMasterDataActionInput() {
        return this._sapProductMasterDataAction;
    }

    // schedule_trigger - computed: true, optional: true, required: false
    private _scheduleTrigger?: string; 
    public get scheduleTrigger() {
        return this.getStringAttribute('schedule_trigger');
    }
    public set scheduleTrigger(value: string) {
        this._scheduleTrigger = value;
    }
    public resetScheduleTrigger() {
        this._scheduleTrigger = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduleTriggerInput() {
        return this._scheduleTrigger;
    }

    // service_now_action - computed: true, optional: true, required: false
    private _serviceNowAction?: string; 
    public get serviceNowAction() {
        return this.getStringAttribute('service_now_action');
    }
    public set serviceNowAction(value: string) {
        this._serviceNowAction = value;
    }
    public resetServiceNowAction() {
        this._serviceNowAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceNowActionInput() {
        return this._serviceNowAction;
    }

    // service_now_data_source - computed: true, optional: true, required: false
    private _serviceNowDataSource?: string; 
    public get serviceNowDataSource() {
        return this.getStringAttribute('service_now_data_source');
    }
    public set serviceNowDataSource(value: string) {
        this._serviceNowDataSource = value;
    }
    public resetServiceNowDataSource() {
        this._serviceNowDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceNowDataSourceInput() {
        return this._serviceNowDataSource;
    }

    // share_adobe_analytics_data_source - computed: true, optional: true, required: false
    private _shareAdobeAnalyticsDataSource?: string; 
    public get shareAdobeAnalyticsDataSource() {
        return this.getStringAttribute('share_adobe_analytics_data_source');
    }
    public set shareAdobeAnalyticsDataSource(value: string) {
        this._shareAdobeAnalyticsDataSource = value;
    }
    public resetShareAdobeAnalyticsDataSource() {
        this._shareAdobeAnalyticsDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareAdobeAnalyticsDataSourceInput() {
        return this._shareAdobeAnalyticsDataSource;
    }

    // share_amazon_bedrock_ars_action - computed: true, optional: true, required: false
    private _shareAmazonBedrockArsAction?: string; 
    public get shareAmazonBedrockArsAction() {
        return this.getStringAttribute('share_amazon_bedrock_ars_action');
    }
    public set shareAmazonBedrockArsAction(value: string) {
        this._shareAmazonBedrockArsAction = value;
    }
    public resetShareAmazonBedrockArsAction() {
        this._shareAmazonBedrockArsAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareAmazonBedrockArsActionInput() {
        return this._shareAmazonBedrockArsAction;
    }

    // share_amazon_bedrock_fs_action - computed: true, optional: true, required: false
    private _shareAmazonBedrockFsAction?: string; 
    public get shareAmazonBedrockFsAction() {
        return this.getStringAttribute('share_amazon_bedrock_fs_action');
    }
    public set shareAmazonBedrockFsAction(value: string) {
        this._shareAmazonBedrockFsAction = value;
    }
    public resetShareAmazonBedrockFsAction() {
        this._shareAmazonBedrockFsAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareAmazonBedrockFsActionInput() {
        return this._shareAmazonBedrockFsAction;
    }

    // share_amazon_bedrock_krs_action - computed: true, optional: true, required: false
    private _shareAmazonBedrockKrsAction?: string; 
    public get shareAmazonBedrockKrsAction() {
        return this.getStringAttribute('share_amazon_bedrock_krs_action');
    }
    public set shareAmazonBedrockKrsAction(value: string) {
        this._shareAmazonBedrockKrsAction = value;
    }
    public resetShareAmazonBedrockKrsAction() {
        this._shareAmazonBedrockKrsAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareAmazonBedrockKrsActionInput() {
        return this._shareAmazonBedrockKrsAction;
    }

    // share_amazon_s_three_action - computed: true, optional: true, required: false
    private _shareAmazonSThreeAction?: string; 
    public get shareAmazonSThreeAction() {
        return this.getStringAttribute('share_amazon_s_three_action');
    }
    public set shareAmazonSThreeAction(value: string) {
        this._shareAmazonSThreeAction = value;
    }
    public resetShareAmazonSThreeAction() {
        this._shareAmazonSThreeAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareAmazonSThreeActionInput() {
        return this._shareAmazonSThreeAction;
    }

    // share_analyses - computed: true, optional: true, required: false
    private _shareAnalyses?: string; 
    public get shareAnalyses() {
        return this.getStringAttribute('share_analyses');
    }
    public set shareAnalyses(value: string) {
        this._shareAnalyses = value;
    }
    public resetShareAnalyses() {
        this._shareAnalyses = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareAnalysesInput() {
        return this._shareAnalyses;
    }

    // share_apps - computed: true, optional: true, required: false
    private _shareApps?: string; 
    public get shareApps() {
        return this.getStringAttribute('share_apps');
    }
    public set shareApps(value: string) {
        this._shareApps = value;
    }
    public resetShareApps() {
        this._shareApps = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareAppsInput() {
        return this._shareApps;
    }

    // share_asana_action - computed: true, optional: true, required: false
    private _shareAsanaAction?: string; 
    public get shareAsanaAction() {
        return this.getStringAttribute('share_asana_action');
    }
    public set shareAsanaAction(value: string) {
        this._shareAsanaAction = value;
    }
    public resetShareAsanaAction() {
        this._shareAsanaAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareAsanaActionInput() {
        return this._shareAsanaAction;
    }

    // share_athena_data_source - computed: true, optional: true, required: false
    private _shareAthenaDataSource?: string; 
    public get shareAthenaDataSource() {
        return this.getStringAttribute('share_athena_data_source');
    }
    public set shareAthenaDataSource(value: string) {
        this._shareAthenaDataSource = value;
    }
    public resetShareAthenaDataSource() {
        this._shareAthenaDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareAthenaDataSourceInput() {
        return this._shareAthenaDataSource;
    }

    // share_aurora_data_source - computed: true, optional: true, required: false
    private _shareAuroraDataSource?: string; 
    public get shareAuroraDataSource() {
        return this.getStringAttribute('share_aurora_data_source');
    }
    public set shareAuroraDataSource(value: string) {
        this._shareAuroraDataSource = value;
    }
    public resetShareAuroraDataSource() {
        this._shareAuroraDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareAuroraDataSourceInput() {
        return this._shareAuroraDataSource;
    }

    // share_bamboo_hr_action - computed: true, optional: true, required: false
    private _shareBambooHrAction?: string; 
    public get shareBambooHrAction() {
        return this.getStringAttribute('share_bamboo_hr_action');
    }
    public set shareBambooHrAction(value: string) {
        this._shareBambooHrAction = value;
    }
    public resetShareBambooHrAction() {
        this._shareBambooHrAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareBambooHrActionInput() {
        return this._shareBambooHrAction;
    }

    // share_bedrock_managed_knowledge_base - computed: true, optional: true, required: false
    private _shareBedrockManagedKnowledgeBase?: string; 
    public get shareBedrockManagedKnowledgeBase() {
        return this.getStringAttribute('share_bedrock_managed_knowledge_base');
    }
    public set shareBedrockManagedKnowledgeBase(value: string) {
        this._shareBedrockManagedKnowledgeBase = value;
    }
    public resetShareBedrockManagedKnowledgeBase() {
        this._shareBedrockManagedKnowledgeBase = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareBedrockManagedKnowledgeBaseInput() {
        return this._shareBedrockManagedKnowledgeBase;
    }

    // share_box_agent_action - computed: true, optional: true, required: false
    private _shareBoxAgentAction?: string; 
    public get shareBoxAgentAction() {
        return this.getStringAttribute('share_box_agent_action');
    }
    public set shareBoxAgentAction(value: string) {
        this._shareBoxAgentAction = value;
    }
    public resetShareBoxAgentAction() {
        this._shareBoxAgentAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareBoxAgentActionInput() {
        return this._shareBoxAgentAction;
    }

    // share_box_knowledge_base - computed: true, optional: true, required: false
    private _shareBoxKnowledgeBase?: string; 
    public get shareBoxKnowledgeBase() {
        return this.getStringAttribute('share_box_knowledge_base');
    }
    public set shareBoxKnowledgeBase(value: string) {
        this._shareBoxKnowledgeBase = value;
    }
    public resetShareBoxKnowledgeBase() {
        this._shareBoxKnowledgeBase = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareBoxKnowledgeBaseInput() {
        return this._shareBoxKnowledgeBase;
    }

    // share_canva_agent_action - computed: true, optional: true, required: false
    private _shareCanvaAgentAction?: string; 
    public get shareCanvaAgentAction() {
        return this.getStringAttribute('share_canva_agent_action');
    }
    public set shareCanvaAgentAction(value: string) {
        this._shareCanvaAgentAction = value;
    }
    public resetShareCanvaAgentAction() {
        this._shareCanvaAgentAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareCanvaAgentActionInput() {
        return this._shareCanvaAgentAction;
    }

    // share_chat_agents - computed: true, optional: true, required: false
    private _shareChatAgents?: string; 
    public get shareChatAgents() {
        return this.getStringAttribute('share_chat_agents');
    }
    public set shareChatAgents(value: string) {
        this._shareChatAgents = value;
    }
    public resetShareChatAgents() {
        this._shareChatAgents = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareChatAgentsInput() {
        return this._shareChatAgents;
    }

    // share_comprehend_action - computed: true, optional: true, required: false
    private _shareComprehendAction?: string; 
    public get shareComprehendAction() {
        return this.getStringAttribute('share_comprehend_action');
    }
    public set shareComprehendAction(value: string) {
        this._shareComprehendAction = value;
    }
    public resetShareComprehendAction() {
        this._shareComprehendAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareComprehendActionInput() {
        return this._shareComprehendAction;
    }

    // share_comprehend_medical_action - computed: true, optional: true, required: false
    private _shareComprehendMedicalAction?: string; 
    public get shareComprehendMedicalAction() {
        return this.getStringAttribute('share_comprehend_medical_action');
    }
    public set shareComprehendMedicalAction(value: string) {
        this._shareComprehendMedicalAction = value;
    }
    public resetShareComprehendMedicalAction() {
        this._shareComprehendMedicalAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareComprehendMedicalActionInput() {
        return this._shareComprehendMedicalAction;
    }

    // share_confluence_action - computed: true, optional: true, required: false
    private _shareConfluenceAction?: string; 
    public get shareConfluenceAction() {
        return this.getStringAttribute('share_confluence_action');
    }
    public set shareConfluenceAction(value: string) {
        this._shareConfluenceAction = value;
    }
    public resetShareConfluenceAction() {
        this._shareConfluenceAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareConfluenceActionInput() {
        return this._shareConfluenceAction;
    }

    // share_confluence_knowledge_base - computed: true, optional: true, required: false
    private _shareConfluenceKnowledgeBase?: string; 
    public get shareConfluenceKnowledgeBase() {
        return this.getStringAttribute('share_confluence_knowledge_base');
    }
    public set shareConfluenceKnowledgeBase(value: string) {
        this._shareConfluenceKnowledgeBase = value;
    }
    public resetShareConfluenceKnowledgeBase() {
        this._shareConfluenceKnowledgeBase = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareConfluenceKnowledgeBaseInput() {
        return this._shareConfluenceKnowledgeBase;
    }

    // share_dashboards - computed: true, optional: true, required: false
    private _shareDashboards?: string; 
    public get shareDashboards() {
        return this.getStringAttribute('share_dashboards');
    }
    public set shareDashboards(value: string) {
        this._shareDashboards = value;
    }
    public resetShareDashboards() {
        this._shareDashboards = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareDashboardsInput() {
        return this._shareDashboards;
    }

    // share_data_sources - computed: true, optional: true, required: false
    private _shareDataSources?: string; 
    public get shareDataSources() {
        return this.getStringAttribute('share_data_sources');
    }
    public set shareDataSources(value: string) {
        this._shareDataSources = value;
    }
    public resetShareDataSources() {
        this._shareDataSources = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareDataSourcesInput() {
        return this._shareDataSources;
    }

    // share_databricks_data_source - computed: true, optional: true, required: false
    private _shareDatabricksDataSource?: string; 
    public get shareDatabricksDataSource() {
        return this.getStringAttribute('share_databricks_data_source');
    }
    public set shareDatabricksDataSource(value: string) {
        this._shareDatabricksDataSource = value;
    }
    public resetShareDatabricksDataSource() {
        this._shareDatabricksDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareDatabricksDataSourceInput() {
        return this._shareDatabricksDataSource;
    }

    // share_datasets - computed: true, optional: true, required: false
    private _shareDatasets?: string; 
    public get shareDatasets() {
        return this.getStringAttribute('share_datasets');
    }
    public set shareDatasets(value: string) {
        this._shareDatasets = value;
    }
    public resetShareDatasets() {
        this._shareDatasets = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareDatasetsInput() {
        return this._shareDatasets;
    }

    // share_db_2_data_source - computed: true, optional: true, required: false
    private _shareDb2DataSource?: string; 
    public get shareDb2DataSource() {
        return this.getStringAttribute('share_db_2_data_source');
    }
    public set shareDb2DataSource(value: string) {
        this._shareDb2DataSource = value;
    }
    public resetShareDb2DataSource() {
        this._shareDb2DataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareDb2DataSourceInput() {
        return this._shareDb2DataSource;
    }

    // share_denodo_data_source - computed: true, optional: true, required: false
    private _shareDenodoDataSource?: string; 
    public get shareDenodoDataSource() {
        return this.getStringAttribute('share_denodo_data_source');
    }
    public set shareDenodoDataSource(value: string) {
        this._shareDenodoDataSource = value;
    }
    public resetShareDenodoDataSource() {
        this._shareDenodoDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareDenodoDataSourceInput() {
        return this._shareDenodoDataSource;
    }

    // share_document_db_data_source - computed: true, optional: true, required: false
    private _shareDocumentDbDataSource?: string; 
    public get shareDocumentDbDataSource() {
        return this.getStringAttribute('share_document_db_data_source');
    }
    public set shareDocumentDbDataSource(value: string) {
        this._shareDocumentDbDataSource = value;
    }
    public resetShareDocumentDbDataSource() {
        this._shareDocumentDbDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareDocumentDbDataSourceInput() {
        return this._shareDocumentDbDataSource;
    }

    // share_dremio_data_source - computed: true, optional: true, required: false
    private _shareDremioDataSource?: string; 
    public get shareDremioDataSource() {
        return this.getStringAttribute('share_dremio_data_source');
    }
    public set shareDremioDataSource(value: string) {
        this._shareDremioDataSource = value;
    }
    public resetShareDremioDataSource() {
        this._shareDremioDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareDremioDataSourceInput() {
        return this._shareDremioDataSource;
    }

    // share_dynamo_db_data_source - computed: true, optional: true, required: false
    private _shareDynamoDbDataSource?: string; 
    public get shareDynamoDbDataSource() {
        return this.getStringAttribute('share_dynamo_db_data_source');
    }
    public set shareDynamoDbDataSource(value: string) {
        this._shareDynamoDbDataSource = value;
    }
    public resetShareDynamoDbDataSource() {
        this._shareDynamoDbDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareDynamoDbDataSourceInput() {
        return this._shareDynamoDbDataSource;
    }

    // share_exasol_data_source - computed: true, optional: true, required: false
    private _shareExasolDataSource?: string; 
    public get shareExasolDataSource() {
        return this.getStringAttribute('share_exasol_data_source');
    }
    public set shareExasolDataSource(value: string) {
        this._shareExasolDataSource = value;
    }
    public resetShareExasolDataSource() {
        this._shareExasolDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareExasolDataSourceInput() {
        return this._shareExasolDataSource;
    }

    // share_fact_set_action - computed: true, optional: true, required: false
    private _shareFactSetAction?: string; 
    public get shareFactSetAction() {
        return this.getStringAttribute('share_fact_set_action');
    }
    public set shareFactSetAction(value: string) {
        this._shareFactSetAction = value;
    }
    public resetShareFactSetAction() {
        this._shareFactSetAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareFactSetActionInput() {
        return this._shareFactSetAction;
    }

    // share_file_data_source - computed: true, optional: true, required: false
    private _shareFileDataSource?: string; 
    public get shareFileDataSource() {
        return this.getStringAttribute('share_file_data_source');
    }
    public set shareFileDataSource(value: string) {
        this._shareFileDataSource = value;
    }
    public resetShareFileDataSource() {
        this._shareFileDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareFileDataSourceInput() {
        return this._shareFileDataSource;
    }

    // share_generic_http_action - computed: true, optional: true, required: false
    private _shareGenericHttpAction?: string; 
    public get shareGenericHttpAction() {
        return this.getStringAttribute('share_generic_http_action');
    }
    public set shareGenericHttpAction(value: string) {
        this._shareGenericHttpAction = value;
    }
    public resetShareGenericHttpAction() {
        this._shareGenericHttpAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareGenericHttpActionInput() {
        return this._shareGenericHttpAction;
    }

    // share_git_hub_data_source - computed: true, optional: true, required: false
    private _shareGitHubDataSource?: string; 
    public get shareGitHubDataSource() {
        return this.getStringAttribute('share_git_hub_data_source');
    }
    public set shareGitHubDataSource(value: string) {
        this._shareGitHubDataSource = value;
    }
    public resetShareGitHubDataSource() {
        this._shareGitHubDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareGitHubDataSourceInput() {
        return this._shareGitHubDataSource;
    }

    // share_github_action - computed: true, optional: true, required: false
    private _shareGithubAction?: string; 
    public get shareGithubAction() {
        return this.getStringAttribute('share_github_action');
    }
    public set shareGithubAction(value: string) {
        this._shareGithubAction = value;
    }
    public resetShareGithubAction() {
        this._shareGithubAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareGithubActionInput() {
        return this._shareGithubAction;
    }

    // share_google_analytics_data_source - computed: true, optional: true, required: false
    private _shareGoogleAnalyticsDataSource?: string; 
    public get shareGoogleAnalyticsDataSource() {
        return this.getStringAttribute('share_google_analytics_data_source');
    }
    public set shareGoogleAnalyticsDataSource(value: string) {
        this._shareGoogleAnalyticsDataSource = value;
    }
    public resetShareGoogleAnalyticsDataSource() {
        this._shareGoogleAnalyticsDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareGoogleAnalyticsDataSourceInput() {
        return this._shareGoogleAnalyticsDataSource;
    }

    // share_google_big_query_data_source - computed: true, optional: true, required: false
    private _shareGoogleBigQueryDataSource?: string; 
    public get shareGoogleBigQueryDataSource() {
        return this.getStringAttribute('share_google_big_query_data_source');
    }
    public set shareGoogleBigQueryDataSource(value: string) {
        this._shareGoogleBigQueryDataSource = value;
    }
    public resetShareGoogleBigQueryDataSource() {
        this._shareGoogleBigQueryDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareGoogleBigQueryDataSourceInput() {
        return this._shareGoogleBigQueryDataSource;
    }

    // share_google_calendar_action - computed: true, optional: true, required: false
    private _shareGoogleCalendarAction?: string; 
    public get shareGoogleCalendarAction() {
        return this.getStringAttribute('share_google_calendar_action');
    }
    public set shareGoogleCalendarAction(value: string) {
        this._shareGoogleCalendarAction = value;
    }
    public resetShareGoogleCalendarAction() {
        this._shareGoogleCalendarAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareGoogleCalendarActionInput() {
        return this._shareGoogleCalendarAction;
    }

    // share_google_drive_knowledge_base - computed: true, optional: true, required: false
    private _shareGoogleDriveKnowledgeBase?: string; 
    public get shareGoogleDriveKnowledgeBase() {
        return this.getStringAttribute('share_google_drive_knowledge_base');
    }
    public set shareGoogleDriveKnowledgeBase(value: string) {
        this._shareGoogleDriveKnowledgeBase = value;
    }
    public resetShareGoogleDriveKnowledgeBase() {
        this._shareGoogleDriveKnowledgeBase = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareGoogleDriveKnowledgeBaseInput() {
        return this._shareGoogleDriveKnowledgeBase;
    }

    // share_google_sheets_data_source - computed: true, optional: true, required: false
    private _shareGoogleSheetsDataSource?: string; 
    public get shareGoogleSheetsDataSource() {
        return this.getStringAttribute('share_google_sheets_data_source');
    }
    public set shareGoogleSheetsDataSource(value: string) {
        this._shareGoogleSheetsDataSource = value;
    }
    public resetShareGoogleSheetsDataSource() {
        this._shareGoogleSheetsDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareGoogleSheetsDataSourceInput() {
        return this._shareGoogleSheetsDataSource;
    }

    // share_hubspot_action - computed: true, optional: true, required: false
    private _shareHubspotAction?: string; 
    public get shareHubspotAction() {
        return this.getStringAttribute('share_hubspot_action');
    }
    public set shareHubspotAction(value: string) {
        this._shareHubspotAction = value;
    }
    public resetShareHubspotAction() {
        this._shareHubspotAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareHubspotActionInput() {
        return this._shareHubspotAction;
    }

    // share_hugging_face_action - computed: true, optional: true, required: false
    private _shareHuggingFaceAction?: string; 
    public get shareHuggingFaceAction() {
        return this.getStringAttribute('share_hugging_face_action');
    }
    public set shareHuggingFaceAction(value: string) {
        this._shareHuggingFaceAction = value;
    }
    public resetShareHuggingFaceAction() {
        this._shareHuggingFaceAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareHuggingFaceActionInput() {
        return this._shareHuggingFaceAction;
    }

    // share_idc_knowledge_base - computed: true, optional: true, required: false
    private _shareIdcKnowledgeBase?: string; 
    public get shareIdcKnowledgeBase() {
        return this.getStringAttribute('share_idc_knowledge_base');
    }
    public set shareIdcKnowledgeBase(value: string) {
        this._shareIdcKnowledgeBase = value;
    }
    public resetShareIdcKnowledgeBase() {
        this._shareIdcKnowledgeBase = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareIdcKnowledgeBaseInput() {
        return this._shareIdcKnowledgeBase;
    }

    // share_impala_data_source - computed: true, optional: true, required: false
    private _shareImpalaDataSource?: string; 
    public get shareImpalaDataSource() {
        return this.getStringAttribute('share_impala_data_source');
    }
    public set shareImpalaDataSource(value: string) {
        this._shareImpalaDataSource = value;
    }
    public resetShareImpalaDataSource() {
        this._shareImpalaDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareImpalaDataSourceInput() {
        return this._shareImpalaDataSource;
    }

    // share_intercom_action - computed: true, optional: true, required: false
    private _shareIntercomAction?: string; 
    public get shareIntercomAction() {
        return this.getStringAttribute('share_intercom_action');
    }
    public set shareIntercomAction(value: string) {
        this._shareIntercomAction = value;
    }
    public resetShareIntercomAction() {
        this._shareIntercomAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareIntercomActionInput() {
        return this._shareIntercomAction;
    }

    // share_jira_action - computed: true, optional: true, required: false
    private _shareJiraAction?: string; 
    public get shareJiraAction() {
        return this.getStringAttribute('share_jira_action');
    }
    public set shareJiraAction(value: string) {
        this._shareJiraAction = value;
    }
    public resetShareJiraAction() {
        this._shareJiraAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareJiraActionInput() {
        return this._shareJiraAction;
    }

    // share_jira_data_source - computed: true, optional: true, required: false
    private _shareJiraDataSource?: string; 
    public get shareJiraDataSource() {
        return this.getStringAttribute('share_jira_data_source');
    }
    public set shareJiraDataSource(value: string) {
        this._shareJiraDataSource = value;
    }
    public resetShareJiraDataSource() {
        this._shareJiraDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareJiraDataSourceInput() {
        return this._shareJiraDataSource;
    }

    // share_knowledge_bases - computed: true, optional: true, required: false
    private _shareKnowledgeBases?: string; 
    public get shareKnowledgeBases() {
        return this.getStringAttribute('share_knowledge_bases');
    }
    public set shareKnowledgeBases(value: string) {
        this._shareKnowledgeBases = value;
    }
    public resetShareKnowledgeBases() {
        this._shareKnowledgeBases = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareKnowledgeBasesInput() {
        return this._shareKnowledgeBases;
    }

    // share_linear_action - computed: true, optional: true, required: false
    private _shareLinearAction?: string; 
    public get shareLinearAction() {
        return this.getStringAttribute('share_linear_action');
    }
    public set shareLinearAction(value: string) {
        this._shareLinearAction = value;
    }
    public resetShareLinearAction() {
        this._shareLinearAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareLinearActionInput() {
        return this._shareLinearAction;
    }

    // share_maria_db_data_source - computed: true, optional: true, required: false
    private _shareMariaDbDataSource?: string; 
    public get shareMariaDbDataSource() {
        return this.getStringAttribute('share_maria_db_data_source');
    }
    public set shareMariaDbDataSource(value: string) {
        this._shareMariaDbDataSource = value;
    }
    public resetShareMariaDbDataSource() {
        this._shareMariaDbDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareMariaDbDataSourceInput() {
        return this._shareMariaDbDataSource;
    }

    // share_mcp_action - computed: true, optional: true, required: false
    private _shareMcpAction?: string; 
    public get shareMcpAction() {
        return this.getStringAttribute('share_mcp_action');
    }
    public set shareMcpAction(value: string) {
        this._shareMcpAction = value;
    }
    public resetShareMcpAction() {
        this._shareMcpAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareMcpActionInput() {
        return this._shareMcpAction;
    }

    // share_monday_action - computed: true, optional: true, required: false
    private _shareMondayAction?: string; 
    public get shareMondayAction() {
        return this.getStringAttribute('share_monday_action');
    }
    public set shareMondayAction(value: string) {
        this._shareMondayAction = value;
    }
    public resetShareMondayAction() {
        this._shareMondayAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareMondayActionInput() {
        return this._shareMondayAction;
    }

    // share_mongo_atlas_data_source - computed: true, optional: true, required: false
    private _shareMongoAtlasDataSource?: string; 
    public get shareMongoAtlasDataSource() {
        return this.getStringAttribute('share_mongo_atlas_data_source');
    }
    public set shareMongoAtlasDataSource(value: string) {
        this._shareMongoAtlasDataSource = value;
    }
    public resetShareMongoAtlasDataSource() {
        this._shareMongoAtlasDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareMongoAtlasDataSourceInput() {
        return this._shareMongoAtlasDataSource;
    }

    // share_mongo_db_data_source - computed: true, optional: true, required: false
    private _shareMongoDbDataSource?: string; 
    public get shareMongoDbDataSource() {
        return this.getStringAttribute('share_mongo_db_data_source');
    }
    public set shareMongoDbDataSource(value: string) {
        this._shareMongoDbDataSource = value;
    }
    public resetShareMongoDbDataSource() {
        this._shareMongoDbDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareMongoDbDataSourceInput() {
        return this._shareMongoDbDataSource;
    }

    // share_ms_exchange_action - computed: true, optional: true, required: false
    private _shareMsExchangeAction?: string; 
    public get shareMsExchangeAction() {
        return this.getStringAttribute('share_ms_exchange_action');
    }
    public set shareMsExchangeAction(value: string) {
        this._shareMsExchangeAction = value;
    }
    public resetShareMsExchangeAction() {
        this._shareMsExchangeAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareMsExchangeActionInput() {
        return this._shareMsExchangeAction;
    }

    // share_ms_teams_action - computed: true, optional: true, required: false
    private _shareMsTeamsAction?: string; 
    public get shareMsTeamsAction() {
        return this.getStringAttribute('share_ms_teams_action');
    }
    public set shareMsTeamsAction(value: string) {
        this._shareMsTeamsAction = value;
    }
    public resetShareMsTeamsAction() {
        this._shareMsTeamsAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareMsTeamsActionInput() {
        return this._shareMsTeamsAction;
    }

    // share_my_sql_data_source - computed: true, optional: true, required: false
    private _shareMySqlDataSource?: string; 
    public get shareMySqlDataSource() {
        return this.getStringAttribute('share_my_sql_data_source');
    }
    public set shareMySqlDataSource(value: string) {
        this._shareMySqlDataSource = value;
    }
    public resetShareMySqlDataSource() {
        this._shareMySqlDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareMySqlDataSourceInput() {
        return this._shareMySqlDataSource;
    }

    // share_new_relic_action - computed: true, optional: true, required: false
    private _shareNewRelicAction?: string; 
    public get shareNewRelicAction() {
        return this.getStringAttribute('share_new_relic_action');
    }
    public set shareNewRelicAction(value: string) {
        this._shareNewRelicAction = value;
    }
    public resetShareNewRelicAction() {
        this._shareNewRelicAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareNewRelicActionInput() {
        return this._shareNewRelicAction;
    }

    // share_notion_action - computed: true, optional: true, required: false
    private _shareNotionAction?: string; 
    public get shareNotionAction() {
        return this.getStringAttribute('share_notion_action');
    }
    public set shareNotionAction(value: string) {
        this._shareNotionAction = value;
    }
    public resetShareNotionAction() {
        this._shareNotionAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareNotionActionInput() {
        return this._shareNotionAction;
    }

    // share_one_drive_action - computed: true, optional: true, required: false
    private _shareOneDriveAction?: string; 
    public get shareOneDriveAction() {
        return this.getStringAttribute('share_one_drive_action');
    }
    public set shareOneDriveAction(value: string) {
        this._shareOneDriveAction = value;
    }
    public resetShareOneDriveAction() {
        this._shareOneDriveAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareOneDriveActionInput() {
        return this._shareOneDriveAction;
    }

    // share_one_drive_knowledge_base - computed: true, optional: true, required: false
    private _shareOneDriveKnowledgeBase?: string; 
    public get shareOneDriveKnowledgeBase() {
        return this.getStringAttribute('share_one_drive_knowledge_base');
    }
    public set shareOneDriveKnowledgeBase(value: string) {
        this._shareOneDriveKnowledgeBase = value;
    }
    public resetShareOneDriveKnowledgeBase() {
        this._shareOneDriveKnowledgeBase = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareOneDriveKnowledgeBaseInput() {
        return this._shareOneDriveKnowledgeBase;
    }

    // share_open_api_action - computed: true, optional: true, required: false
    private _shareOpenApiAction?: string; 
    public get shareOpenApiAction() {
        return this.getStringAttribute('share_open_api_action');
    }
    public set shareOpenApiAction(value: string) {
        this._shareOpenApiAction = value;
    }
    public resetShareOpenApiAction() {
        this._shareOpenApiAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareOpenApiActionInput() {
        return this._shareOpenApiAction;
    }

    // share_open_search_data_source - computed: true, optional: true, required: false
    private _shareOpenSearchDataSource?: string; 
    public get shareOpenSearchDataSource() {
        return this.getStringAttribute('share_open_search_data_source');
    }
    public set shareOpenSearchDataSource(value: string) {
        this._shareOpenSearchDataSource = value;
    }
    public resetShareOpenSearchDataSource() {
        this._shareOpenSearchDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareOpenSearchDataSourceInput() {
        return this._shareOpenSearchDataSource;
    }

    // share_oracle_data_source - computed: true, optional: true, required: false
    private _shareOracleDataSource?: string; 
    public get shareOracleDataSource() {
        return this.getStringAttribute('share_oracle_data_source');
    }
    public set shareOracleDataSource(value: string) {
        this._shareOracleDataSource = value;
    }
    public resetShareOracleDataSource() {
        this._shareOracleDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareOracleDataSourceInput() {
        return this._shareOracleDataSource;
    }

    // share_pager_duty_action - computed: true, optional: true, required: false
    private _sharePagerDutyAction?: string; 
    public get sharePagerDutyAction() {
        return this.getStringAttribute('share_pager_duty_action');
    }
    public set sharePagerDutyAction(value: string) {
        this._sharePagerDutyAction = value;
    }
    public resetSharePagerDutyAction() {
        this._sharePagerDutyAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sharePagerDutyActionInput() {
        return this._sharePagerDutyAction;
    }

    // share_pay_pal_data_source - computed: true, optional: true, required: false
    private _sharePayPalDataSource?: string; 
    public get sharePayPalDataSource() {
        return this.getStringAttribute('share_pay_pal_data_source');
    }
    public set sharePayPalDataSource(value: string) {
        this._sharePayPalDataSource = value;
    }
    public resetSharePayPalDataSource() {
        this._sharePayPalDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sharePayPalDataSourceInput() {
        return this._sharePayPalDataSource;
    }

    // share_point_action - computed: true, optional: true, required: false
    private _sharePointAction?: string; 
    public get sharePointAction() {
        return this.getStringAttribute('share_point_action');
    }
    public set sharePointAction(value: string) {
        this._sharePointAction = value;
    }
    public resetSharePointAction() {
        this._sharePointAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sharePointActionInput() {
        return this._sharePointAction;
    }

    // share_point_knowledge_base - computed: true, optional: true, required: false
    private _sharePointKnowledgeBase?: string; 
    public get sharePointKnowledgeBase() {
        return this.getStringAttribute('share_point_knowledge_base');
    }
    public set sharePointKnowledgeBase(value: string) {
        this._sharePointKnowledgeBase = value;
    }
    public resetSharePointKnowledgeBase() {
        this._sharePointKnowledgeBase = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sharePointKnowledgeBaseInput() {
        return this._sharePointKnowledgeBase;
    }

    // share_postgre_sql_data_source - computed: true, optional: true, required: false
    private _sharePostgreSqlDataSource?: string; 
    public get sharePostgreSqlDataSource() {
        return this.getStringAttribute('share_postgre_sql_data_source');
    }
    public set sharePostgreSqlDataSource(value: string) {
        this._sharePostgreSqlDataSource = value;
    }
    public resetSharePostgreSqlDataSource() {
        this._sharePostgreSqlDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sharePostgreSqlDataSourceInput() {
        return this._sharePostgreSqlDataSource;
    }

    // share_presto_data_source - computed: true, optional: true, required: false
    private _sharePrestoDataSource?: string; 
    public get sharePrestoDataSource() {
        return this.getStringAttribute('share_presto_data_source');
    }
    public set sharePrestoDataSource(value: string) {
        this._sharePrestoDataSource = value;
    }
    public resetSharePrestoDataSource() {
        this._sharePrestoDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sharePrestoDataSourceInput() {
        return this._sharePrestoDataSource;
    }

    // share_q_business_knowledge_base - computed: true, optional: true, required: false
    private _shareQBusinessKnowledgeBase?: string; 
    public get shareQBusinessKnowledgeBase() {
        return this.getStringAttribute('share_q_business_knowledge_base');
    }
    public set shareQBusinessKnowledgeBase(value: string) {
        this._shareQBusinessKnowledgeBase = value;
    }
    public resetShareQBusinessKnowledgeBase() {
        this._shareQBusinessKnowledgeBase = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareQBusinessKnowledgeBaseInput() {
        return this._shareQBusinessKnowledgeBase;
    }

    // share_radiant_data_source - computed: true, optional: true, required: false
    private _shareRadiantDataSource?: string; 
    public get shareRadiantDataSource() {
        return this.getStringAttribute('share_radiant_data_source');
    }
    public set shareRadiantDataSource(value: string) {
        this._shareRadiantDataSource = value;
    }
    public resetShareRadiantDataSource() {
        this._shareRadiantDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareRadiantDataSourceInput() {
        return this._shareRadiantDataSource;
    }

    // share_rds_data_source - computed: true, optional: true, required: false
    private _shareRdsDataSource?: string; 
    public get shareRdsDataSource() {
        return this.getStringAttribute('share_rds_data_source');
    }
    public set shareRdsDataSource(value: string) {
        this._shareRdsDataSource = value;
    }
    public resetShareRdsDataSource() {
        this._shareRdsDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareRdsDataSourceInput() {
        return this._shareRdsDataSource;
    }

    // share_redshift_auto_discovered_data_source - computed: true, optional: true, required: false
    private _shareRedshiftAutoDiscoveredDataSource?: string; 
    public get shareRedshiftAutoDiscoveredDataSource() {
        return this.getStringAttribute('share_redshift_auto_discovered_data_source');
    }
    public set shareRedshiftAutoDiscoveredDataSource(value: string) {
        this._shareRedshiftAutoDiscoveredDataSource = value;
    }
    public resetShareRedshiftAutoDiscoveredDataSource() {
        this._shareRedshiftAutoDiscoveredDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareRedshiftAutoDiscoveredDataSourceInput() {
        return this._shareRedshiftAutoDiscoveredDataSource;
    }

    // share_redshift_manual_data_source - computed: true, optional: true, required: false
    private _shareRedshiftManualDataSource?: string; 
    public get shareRedshiftManualDataSource() {
        return this.getStringAttribute('share_redshift_manual_data_source');
    }
    public set shareRedshiftManualDataSource(value: string) {
        this._shareRedshiftManualDataSource = value;
    }
    public resetShareRedshiftManualDataSource() {
        this._shareRedshiftManualDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareRedshiftManualDataSourceInput() {
        return this._shareRedshiftManualDataSource;
    }

    // share_s3_analytics_data_source - computed: true, optional: true, required: false
    private _shareS3AnalyticsDataSource?: string; 
    public get shareS3AnalyticsDataSource() {
        return this.getStringAttribute('share_s3_analytics_data_source');
    }
    public set shareS3AnalyticsDataSource(value: string) {
        this._shareS3AnalyticsDataSource = value;
    }
    public resetShareS3AnalyticsDataSource() {
        this._shareS3AnalyticsDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareS3AnalyticsDataSourceInput() {
        return this._shareS3AnalyticsDataSource;
    }

    // share_s3_data_source - computed: true, optional: true, required: false
    private _shareS3DataSource?: string; 
    public get shareS3DataSource() {
        return this.getStringAttribute('share_s3_data_source');
    }
    public set shareS3DataSource(value: string) {
        this._shareS3DataSource = value;
    }
    public resetShareS3DataSource() {
        this._shareS3DataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareS3DataSourceInput() {
        return this._shareS3DataSource;
    }

    // share_s3_knowledge_base - computed: true, optional: true, required: false
    private _shareS3KnowledgeBase?: string; 
    public get shareS3KnowledgeBase() {
        return this.getStringAttribute('share_s3_knowledge_base');
    }
    public set shareS3KnowledgeBase(value: string) {
        this._shareS3KnowledgeBase = value;
    }
    public resetShareS3KnowledgeBase() {
        this._shareS3KnowledgeBase = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareS3KnowledgeBaseInput() {
        return this._shareS3KnowledgeBase;
    }

    // share_s3_tables_data_source - computed: true, optional: true, required: false
    private _shareS3TablesDataSource?: string; 
    public get shareS3TablesDataSource() {
        return this.getStringAttribute('share_s3_tables_data_source');
    }
    public set shareS3TablesDataSource(value: string) {
        this._shareS3TablesDataSource = value;
    }
    public resetShareS3TablesDataSource() {
        this._shareS3TablesDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareS3TablesDataSourceInput() {
        return this._shareS3TablesDataSource;
    }

    // share_salesforce_action - computed: true, optional: true, required: false
    private _shareSalesforceAction?: string; 
    public get shareSalesforceAction() {
        return this.getStringAttribute('share_salesforce_action');
    }
    public set shareSalesforceAction(value: string) {
        this._shareSalesforceAction = value;
    }
    public resetShareSalesforceAction() {
        this._shareSalesforceAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareSalesforceActionInput() {
        return this._shareSalesforceAction;
    }

    // share_salesforce_data_source - computed: true, optional: true, required: false
    private _shareSalesforceDataSource?: string; 
    public get shareSalesforceDataSource() {
        return this.getStringAttribute('share_salesforce_data_source');
    }
    public set shareSalesforceDataSource(value: string) {
        this._shareSalesforceDataSource = value;
    }
    public resetShareSalesforceDataSource() {
        this._shareSalesforceDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareSalesforceDataSourceInput() {
        return this._shareSalesforceDataSource;
    }

    // share_sand_p_global_energy_action - computed: true, optional: true, required: false
    private _shareSandPGlobalEnergyAction?: string; 
    public get shareSandPGlobalEnergyAction() {
        return this.getStringAttribute('share_sand_p_global_energy_action');
    }
    public set shareSandPGlobalEnergyAction(value: string) {
        this._shareSandPGlobalEnergyAction = value;
    }
    public resetShareSandPGlobalEnergyAction() {
        this._shareSandPGlobalEnergyAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareSandPGlobalEnergyActionInput() {
        return this._shareSandPGlobalEnergyAction;
    }

    // share_sand_pgmi_action - computed: true, optional: true, required: false
    private _shareSandPgmiAction?: string; 
    public get shareSandPgmiAction() {
        return this.getStringAttribute('share_sand_pgmi_action');
    }
    public set shareSandPgmiAction(value: string) {
        this._shareSandPgmiAction = value;
    }
    public resetShareSandPgmiAction() {
        this._shareSandPgmiAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareSandPgmiActionInput() {
        return this._shareSandPgmiAction;
    }

    // share_sap_bill_of_material_action - computed: true, optional: true, required: false
    private _shareSapBillOfMaterialAction?: string; 
    public get shareSapBillOfMaterialAction() {
        return this.getStringAttribute('share_sap_bill_of_material_action');
    }
    public set shareSapBillOfMaterialAction(value: string) {
        this._shareSapBillOfMaterialAction = value;
    }
    public resetShareSapBillOfMaterialAction() {
        this._shareSapBillOfMaterialAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareSapBillOfMaterialActionInput() {
        return this._shareSapBillOfMaterialAction;
    }

    // share_sap_business_partner_action - computed: true, optional: true, required: false
    private _shareSapBusinessPartnerAction?: string; 
    public get shareSapBusinessPartnerAction() {
        return this.getStringAttribute('share_sap_business_partner_action');
    }
    public set shareSapBusinessPartnerAction(value: string) {
        this._shareSapBusinessPartnerAction = value;
    }
    public resetShareSapBusinessPartnerAction() {
        this._shareSapBusinessPartnerAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareSapBusinessPartnerActionInput() {
        return this._shareSapBusinessPartnerAction;
    }

    // share_sap_hana_data_source - computed: true, optional: true, required: false
    private _shareSapHanaDataSource?: string; 
    public get shareSapHanaDataSource() {
        return this.getStringAttribute('share_sap_hana_data_source');
    }
    public set shareSapHanaDataSource(value: string) {
        this._shareSapHanaDataSource = value;
    }
    public resetShareSapHanaDataSource() {
        this._shareSapHanaDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareSapHanaDataSourceInput() {
        return this._shareSapHanaDataSource;
    }

    // share_sap_material_stock_action - computed: true, optional: true, required: false
    private _shareSapMaterialStockAction?: string; 
    public get shareSapMaterialStockAction() {
        return this.getStringAttribute('share_sap_material_stock_action');
    }
    public set shareSapMaterialStockAction(value: string) {
        this._shareSapMaterialStockAction = value;
    }
    public resetShareSapMaterialStockAction() {
        this._shareSapMaterialStockAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareSapMaterialStockActionInput() {
        return this._shareSapMaterialStockAction;
    }

    // share_sap_physical_inventory_action - computed: true, optional: true, required: false
    private _shareSapPhysicalInventoryAction?: string; 
    public get shareSapPhysicalInventoryAction() {
        return this.getStringAttribute('share_sap_physical_inventory_action');
    }
    public set shareSapPhysicalInventoryAction(value: string) {
        this._shareSapPhysicalInventoryAction = value;
    }
    public resetShareSapPhysicalInventoryAction() {
        this._shareSapPhysicalInventoryAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareSapPhysicalInventoryActionInput() {
        return this._shareSapPhysicalInventoryAction;
    }

    // share_sap_product_master_data_action - computed: true, optional: true, required: false
    private _shareSapProductMasterDataAction?: string; 
    public get shareSapProductMasterDataAction() {
        return this.getStringAttribute('share_sap_product_master_data_action');
    }
    public set shareSapProductMasterDataAction(value: string) {
        this._shareSapProductMasterDataAction = value;
    }
    public resetShareSapProductMasterDataAction() {
        this._shareSapProductMasterDataAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareSapProductMasterDataActionInput() {
        return this._shareSapProductMasterDataAction;
    }

    // share_service_now_action - computed: true, optional: true, required: false
    private _shareServiceNowAction?: string; 
    public get shareServiceNowAction() {
        return this.getStringAttribute('share_service_now_action');
    }
    public set shareServiceNowAction(value: string) {
        this._shareServiceNowAction = value;
    }
    public resetShareServiceNowAction() {
        this._shareServiceNowAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareServiceNowActionInput() {
        return this._shareServiceNowAction;
    }

    // share_service_now_data_source - computed: true, optional: true, required: false
    private _shareServiceNowDataSource?: string; 
    public get shareServiceNowDataSource() {
        return this.getStringAttribute('share_service_now_data_source');
    }
    public set shareServiceNowDataSource(value: string) {
        this._shareServiceNowDataSource = value;
    }
    public resetShareServiceNowDataSource() {
        this._shareServiceNowDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareServiceNowDataSourceInput() {
        return this._shareServiceNowDataSource;
    }

    // share_share_point_action - computed: true, optional: true, required: false
    private _shareSharePointAction?: string; 
    public get shareSharePointAction() {
        return this.getStringAttribute('share_share_point_action');
    }
    public set shareSharePointAction(value: string) {
        this._shareSharePointAction = value;
    }
    public resetShareSharePointAction() {
        this._shareSharePointAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareSharePointActionInput() {
        return this._shareSharePointAction;
    }

    // share_share_point_knowledge_base - computed: true, optional: true, required: false
    private _shareSharePointKnowledgeBase?: string; 
    public get shareSharePointKnowledgeBase() {
        return this.getStringAttribute('share_share_point_knowledge_base');
    }
    public set shareSharePointKnowledgeBase(value: string) {
        this._shareSharePointKnowledgeBase = value;
    }
    public resetShareSharePointKnowledgeBase() {
        this._shareSharePointKnowledgeBase = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareSharePointKnowledgeBaseInput() {
        return this._shareSharePointKnowledgeBase;
    }

    // share_slack_action - computed: true, optional: true, required: false
    private _shareSlackAction?: string; 
    public get shareSlackAction() {
        return this.getStringAttribute('share_slack_action');
    }
    public set shareSlackAction(value: string) {
        this._shareSlackAction = value;
    }
    public resetShareSlackAction() {
        this._shareSlackAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareSlackActionInput() {
        return this._shareSlackAction;
    }

    // share_smartsheet_action - computed: true, optional: true, required: false
    private _shareSmartsheetAction?: string; 
    public get shareSmartsheetAction() {
        return this.getStringAttribute('share_smartsheet_action');
    }
    public set shareSmartsheetAction(value: string) {
        this._shareSmartsheetAction = value;
    }
    public resetShareSmartsheetAction() {
        this._shareSmartsheetAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareSmartsheetActionInput() {
        return this._shareSmartsheetAction;
    }

    // share_snowflake_data_source - computed: true, optional: true, required: false
    private _shareSnowflakeDataSource?: string; 
    public get shareSnowflakeDataSource() {
        return this.getStringAttribute('share_snowflake_data_source');
    }
    public set shareSnowflakeDataSource(value: string) {
        this._shareSnowflakeDataSource = value;
    }
    public resetShareSnowflakeDataSource() {
        this._shareSnowflakeDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareSnowflakeDataSourceInput() {
        return this._shareSnowflakeDataSource;
    }

    // share_spaces - computed: true, optional: true, required: false
    private _shareSpaces?: string; 
    public get shareSpaces() {
        return this.getStringAttribute('share_spaces');
    }
    public set shareSpaces(value: string) {
        this._shareSpaces = value;
    }
    public resetShareSpaces() {
        this._shareSpaces = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareSpacesInput() {
        return this._shareSpaces;
    }

    // share_spark_data_source - computed: true, optional: true, required: false
    private _shareSparkDataSource?: string; 
    public get shareSparkDataSource() {
        return this.getStringAttribute('share_spark_data_source');
    }
    public set shareSparkDataSource(value: string) {
        this._shareSparkDataSource = value;
    }
    public resetShareSparkDataSource() {
        this._shareSparkDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareSparkDataSourceInput() {
        return this._shareSparkDataSource;
    }

    // share_sql_server_data_source - computed: true, optional: true, required: false
    private _shareSqlServerDataSource?: string; 
    public get shareSqlServerDataSource() {
        return this.getStringAttribute('share_sql_server_data_source');
    }
    public set shareSqlServerDataSource(value: string) {
        this._shareSqlServerDataSource = value;
    }
    public resetShareSqlServerDataSource() {
        this._shareSqlServerDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareSqlServerDataSourceInput() {
        return this._shareSqlServerDataSource;
    }

    // share_square_data_source - computed: true, optional: true, required: false
    private _shareSquareDataSource?: string; 
    public get shareSquareDataSource() {
        return this.getStringAttribute('share_square_data_source');
    }
    public set shareSquareDataSource(value: string) {
        this._shareSquareDataSource = value;
    }
    public resetShareSquareDataSource() {
        this._shareSquareDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareSquareDataSourceInput() {
        return this._shareSquareDataSource;
    }

    // share_starburst_data_source - computed: true, optional: true, required: false
    private _shareStarburstDataSource?: string; 
    public get shareStarburstDataSource() {
        return this.getStringAttribute('share_starburst_data_source');
    }
    public set shareStarburstDataSource(value: string) {
        this._shareStarburstDataSource = value;
    }
    public resetShareStarburstDataSource() {
        this._shareStarburstDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareStarburstDataSourceInput() {
        return this._shareStarburstDataSource;
    }

    // share_teradata_data_source - computed: true, optional: true, required: false
    private _shareTeradataDataSource?: string; 
    public get shareTeradataDataSource() {
        return this.getStringAttribute('share_teradata_data_source');
    }
    public set shareTeradataDataSource(value: string) {
        this._shareTeradataDataSource = value;
    }
    public resetShareTeradataDataSource() {
        this._shareTeradataDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareTeradataDataSourceInput() {
        return this._shareTeradataDataSource;
    }

    // share_textract_action - computed: true, optional: true, required: false
    private _shareTextractAction?: string; 
    public get shareTextractAction() {
        return this.getStringAttribute('share_textract_action');
    }
    public set shareTextractAction(value: string) {
        this._shareTextractAction = value;
    }
    public resetShareTextractAction() {
        this._shareTextractAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareTextractActionInput() {
        return this._shareTextractAction;
    }

    // share_timestream_data_source - computed: true, optional: true, required: false
    private _shareTimestreamDataSource?: string; 
    public get shareTimestreamDataSource() {
        return this.getStringAttribute('share_timestream_data_source');
    }
    public set shareTimestreamDataSource(value: string) {
        this._shareTimestreamDataSource = value;
    }
    public resetShareTimestreamDataSource() {
        this._shareTimestreamDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareTimestreamDataSourceInput() {
        return this._shareTimestreamDataSource;
    }

    // share_trino_data_source - computed: true, optional: true, required: false
    private _shareTrinoDataSource?: string; 
    public get shareTrinoDataSource() {
        return this.getStringAttribute('share_trino_data_source');
    }
    public set shareTrinoDataSource(value: string) {
        this._shareTrinoDataSource = value;
    }
    public resetShareTrinoDataSource() {
        this._shareTrinoDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareTrinoDataSourceInput() {
        return this._shareTrinoDataSource;
    }

    // share_twitter_data_source - computed: true, optional: true, required: false
    private _shareTwitterDataSource?: string; 
    public get shareTwitterDataSource() {
        return this.getStringAttribute('share_twitter_data_source');
    }
    public set shareTwitterDataSource(value: string) {
        this._shareTwitterDataSource = value;
    }
    public resetShareTwitterDataSource() {
        this._shareTwitterDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareTwitterDataSourceInput() {
        return this._shareTwitterDataSource;
    }

    // share_web_crawler_knowledge_base - computed: true, optional: true, required: false
    private _shareWebCrawlerKnowledgeBase?: string; 
    public get shareWebCrawlerKnowledgeBase() {
        return this.getStringAttribute('share_web_crawler_knowledge_base');
    }
    public set shareWebCrawlerKnowledgeBase(value: string) {
        this._shareWebCrawlerKnowledgeBase = value;
    }
    public resetShareWebCrawlerKnowledgeBase() {
        this._shareWebCrawlerKnowledgeBase = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareWebCrawlerKnowledgeBaseInput() {
        return this._shareWebCrawlerKnowledgeBase;
    }

    // share_zendesk_action - computed: true, optional: true, required: false
    private _shareZendeskAction?: string; 
    public get shareZendeskAction() {
        return this.getStringAttribute('share_zendesk_action');
    }
    public set shareZendeskAction(value: string) {
        this._shareZendeskAction = value;
    }
    public resetShareZendeskAction() {
        this._shareZendeskAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shareZendeskActionInput() {
        return this._shareZendeskAction;
    }

    // slack_action - computed: true, optional: true, required: false
    private _slackAction?: string; 
    public get slackAction() {
        return this.getStringAttribute('slack_action');
    }
    public set slackAction(value: string) {
        this._slackAction = value;
    }
    public resetSlackAction() {
        this._slackAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get slackActionInput() {
        return this._slackAction;
    }

    // smartsheet_action - computed: true, optional: true, required: false
    private _smartsheetAction?: string; 
    public get smartsheetAction() {
        return this.getStringAttribute('smartsheet_action');
    }
    public set smartsheetAction(value: string) {
        this._smartsheetAction = value;
    }
    public resetSmartsheetAction() {
        this._smartsheetAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get smartsheetActionInput() {
        return this._smartsheetAction;
    }

    // snowflake_data_source - computed: true, optional: true, required: false
    private _snowflakeDataSource?: string; 
    public get snowflakeDataSource() {
        return this.getStringAttribute('snowflake_data_source');
    }
    public set snowflakeDataSource(value: string) {
        this._snowflakeDataSource = value;
    }
    public resetSnowflakeDataSource() {
        this._snowflakeDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get snowflakeDataSourceInput() {
        return this._snowflakeDataSource;
    }

    // space - computed: true, optional: true, required: false
    private _space?: string; 
    public get space() {
        return this.getStringAttribute('space');
    }
    public set space(value: string) {
        this._space = value;
    }
    public resetSpace() {
        this._space = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get spaceInput() {
        return this._space;
    }

    // spark_data_source - computed: true, optional: true, required: false
    private _sparkDataSource?: string; 
    public get sparkDataSource() {
        return this.getStringAttribute('spark_data_source');
    }
    public set sparkDataSource(value: string) {
        this._sparkDataSource = value;
    }
    public resetSparkDataSource() {
        this._sparkDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sparkDataSourceInput() {
        return this._sparkDataSource;
    }

    // sql_server_data_source - computed: true, optional: true, required: false
    private _sqlServerDataSource?: string; 
    public get sqlServerDataSource() {
        return this.getStringAttribute('sql_server_data_source');
    }
    public set sqlServerDataSource(value: string) {
        this._sqlServerDataSource = value;
    }
    public resetSqlServerDataSource() {
        this._sqlServerDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sqlServerDataSourceInput() {
        return this._sqlServerDataSource;
    }

    // square_data_source - computed: true, optional: true, required: false
    private _squareDataSource?: string; 
    public get squareDataSource() {
        return this.getStringAttribute('square_data_source');
    }
    public set squareDataSource(value: string) {
        this._squareDataSource = value;
    }
    public resetSquareDataSource() {
        this._squareDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get squareDataSourceInput() {
        return this._squareDataSource;
    }

    // starburst_data_source - computed: true, optional: true, required: false
    private _starburstDataSource?: string; 
    public get starburstDataSource() {
        return this.getStringAttribute('starburst_data_source');
    }
    public set starburstDataSource(value: string) {
        this._starburstDataSource = value;
    }
    public resetStarburstDataSource() {
        this._starburstDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get starburstDataSourceInput() {
        return this._starburstDataSource;
    }

    // subscribe_dashboard_email_reports - computed: true, optional: true, required: false
    private _subscribeDashboardEmailReports?: string; 
    public get subscribeDashboardEmailReports() {
        return this.getStringAttribute('subscribe_dashboard_email_reports');
    }
    public set subscribeDashboardEmailReports(value: string) {
        this._subscribeDashboardEmailReports = value;
    }
    public resetSubscribeDashboardEmailReports() {
        this._subscribeDashboardEmailReports = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subscribeDashboardEmailReportsInput() {
        return this._subscribeDashboardEmailReports;
    }

    // teradata_data_source - computed: true, optional: true, required: false
    private _teradataDataSource?: string; 
    public get teradataDataSource() {
        return this.getStringAttribute('teradata_data_source');
    }
    public set teradataDataSource(value: string) {
        this._teradataDataSource = value;
    }
    public resetTeradataDataSource() {
        this._teradataDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get teradataDataSourceInput() {
        return this._teradataDataSource;
    }

    // textract_action - computed: true, optional: true, required: false
    private _textractAction?: string; 
    public get textractAction() {
        return this.getStringAttribute('textract_action');
    }
    public set textractAction(value: string) {
        this._textractAction = value;
    }
    public resetTextractAction() {
        this._textractAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get textractActionInput() {
        return this._textractAction;
    }

    // timestream_data_source - computed: true, optional: true, required: false
    private _timestreamDataSource?: string; 
    public get timestreamDataSource() {
        return this.getStringAttribute('timestream_data_source');
    }
    public set timestreamDataSource(value: string) {
        this._timestreamDataSource = value;
    }
    public resetTimestreamDataSource() {
        this._timestreamDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timestreamDataSourceInput() {
        return this._timestreamDataSource;
    }

    // topic - computed: true, optional: true, required: false
    private _topic?: string; 
    public get topic() {
        return this.getStringAttribute('topic');
    }
    public set topic(value: string) {
        this._topic = value;
    }
    public resetTopic() {
        this._topic = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get topicInput() {
        return this._topic;
    }

    // trigger - computed: true, optional: true, required: false
    private _trigger?: string; 
    public get trigger() {
        return this.getStringAttribute('trigger');
    }
    public set trigger(value: string) {
        this._trigger = value;
    }
    public resetTrigger() {
        this._trigger = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get triggerInput() {
        return this._trigger;
    }

    // trino_data_source - computed: true, optional: true, required: false
    private _trinoDataSource?: string; 
    public get trinoDataSource() {
        return this.getStringAttribute('trino_data_source');
    }
    public set trinoDataSource(value: string) {
        this._trinoDataSource = value;
    }
    public resetTrinoDataSource() {
        this._trinoDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get trinoDataSourceInput() {
        return this._trinoDataSource;
    }

    // twitter_data_source - computed: true, optional: true, required: false
    private _twitterDataSource?: string; 
    public get twitterDataSource() {
        return this.getStringAttribute('twitter_data_source');
    }
    public set twitterDataSource(value: string) {
        this._twitterDataSource = value;
    }
    public resetTwitterDataSource() {
        this._twitterDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get twitterDataSourceInput() {
        return this._twitterDataSource;
    }

    // update_adobe_analytics_data_source - computed: true, optional: true, required: false
    private _updateAdobeAnalyticsDataSource?: string; 
    public get updateAdobeAnalyticsDataSource() {
        return this.getStringAttribute('update_adobe_analytics_data_source');
    }
    public set updateAdobeAnalyticsDataSource(value: string) {
        this._updateAdobeAnalyticsDataSource = value;
    }
    public resetUpdateAdobeAnalyticsDataSource() {
        this._updateAdobeAnalyticsDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateAdobeAnalyticsDataSourceInput() {
        return this._updateAdobeAnalyticsDataSource;
    }

    // update_athena_data_source - computed: true, optional: true, required: false
    private _updateAthenaDataSource?: string; 
    public get updateAthenaDataSource() {
        return this.getStringAttribute('update_athena_data_source');
    }
    public set updateAthenaDataSource(value: string) {
        this._updateAthenaDataSource = value;
    }
    public resetUpdateAthenaDataSource() {
        this._updateAthenaDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateAthenaDataSourceInput() {
        return this._updateAthenaDataSource;
    }

    // update_aurora_data_source - computed: true, optional: true, required: false
    private _updateAuroraDataSource?: string; 
    public get updateAuroraDataSource() {
        return this.getStringAttribute('update_aurora_data_source');
    }
    public set updateAuroraDataSource(value: string) {
        this._updateAuroraDataSource = value;
    }
    public resetUpdateAuroraDataSource() {
        this._updateAuroraDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateAuroraDataSourceInput() {
        return this._updateAuroraDataSource;
    }

    // update_databricks_data_source - computed: true, optional: true, required: false
    private _updateDatabricksDataSource?: string; 
    public get updateDatabricksDataSource() {
        return this.getStringAttribute('update_databricks_data_source');
    }
    public set updateDatabricksDataSource(value: string) {
        this._updateDatabricksDataSource = value;
    }
    public resetUpdateDatabricksDataSource() {
        this._updateDatabricksDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateDatabricksDataSourceInput() {
        return this._updateDatabricksDataSource;
    }

    // update_db_2_data_source - computed: true, optional: true, required: false
    private _updateDb2DataSource?: string; 
    public get updateDb2DataSource() {
        return this.getStringAttribute('update_db_2_data_source');
    }
    public set updateDb2DataSource(value: string) {
        this._updateDb2DataSource = value;
    }
    public resetUpdateDb2DataSource() {
        this._updateDb2DataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateDb2DataSourceInput() {
        return this._updateDb2DataSource;
    }

    // update_denodo_data_source - computed: true, optional: true, required: false
    private _updateDenodoDataSource?: string; 
    public get updateDenodoDataSource() {
        return this.getStringAttribute('update_denodo_data_source');
    }
    public set updateDenodoDataSource(value: string) {
        this._updateDenodoDataSource = value;
    }
    public resetUpdateDenodoDataSource() {
        this._updateDenodoDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateDenodoDataSourceInput() {
        return this._updateDenodoDataSource;
    }

    // update_document_db_data_source - computed: true, optional: true, required: false
    private _updateDocumentDbDataSource?: string; 
    public get updateDocumentDbDataSource() {
        return this.getStringAttribute('update_document_db_data_source');
    }
    public set updateDocumentDbDataSource(value: string) {
        this._updateDocumentDbDataSource = value;
    }
    public resetUpdateDocumentDbDataSource() {
        this._updateDocumentDbDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateDocumentDbDataSourceInput() {
        return this._updateDocumentDbDataSource;
    }

    // update_dremio_data_source - computed: true, optional: true, required: false
    private _updateDremioDataSource?: string; 
    public get updateDremioDataSource() {
        return this.getStringAttribute('update_dremio_data_source');
    }
    public set updateDremioDataSource(value: string) {
        this._updateDremioDataSource = value;
    }
    public resetUpdateDremioDataSource() {
        this._updateDremioDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateDremioDataSourceInput() {
        return this._updateDremioDataSource;
    }

    // update_dynamo_db_data_source - computed: true, optional: true, required: false
    private _updateDynamoDbDataSource?: string; 
    public get updateDynamoDbDataSource() {
        return this.getStringAttribute('update_dynamo_db_data_source');
    }
    public set updateDynamoDbDataSource(value: string) {
        this._updateDynamoDbDataSource = value;
    }
    public resetUpdateDynamoDbDataSource() {
        this._updateDynamoDbDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateDynamoDbDataSourceInput() {
        return this._updateDynamoDbDataSource;
    }

    // update_exasol_data_source - computed: true, optional: true, required: false
    private _updateExasolDataSource?: string; 
    public get updateExasolDataSource() {
        return this.getStringAttribute('update_exasol_data_source');
    }
    public set updateExasolDataSource(value: string) {
        this._updateExasolDataSource = value;
    }
    public resetUpdateExasolDataSource() {
        this._updateExasolDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateExasolDataSourceInput() {
        return this._updateExasolDataSource;
    }

    // update_file_data_source - computed: true, optional: true, required: false
    private _updateFileDataSource?: string; 
    public get updateFileDataSource() {
        return this.getStringAttribute('update_file_data_source');
    }
    public set updateFileDataSource(value: string) {
        this._updateFileDataSource = value;
    }
    public resetUpdateFileDataSource() {
        this._updateFileDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateFileDataSourceInput() {
        return this._updateFileDataSource;
    }

    // update_git_hub_data_source - computed: true, optional: true, required: false
    private _updateGitHubDataSource?: string; 
    public get updateGitHubDataSource() {
        return this.getStringAttribute('update_git_hub_data_source');
    }
    public set updateGitHubDataSource(value: string) {
        this._updateGitHubDataSource = value;
    }
    public resetUpdateGitHubDataSource() {
        this._updateGitHubDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateGitHubDataSourceInput() {
        return this._updateGitHubDataSource;
    }

    // update_google_analytics_data_source - computed: true, optional: true, required: false
    private _updateGoogleAnalyticsDataSource?: string; 
    public get updateGoogleAnalyticsDataSource() {
        return this.getStringAttribute('update_google_analytics_data_source');
    }
    public set updateGoogleAnalyticsDataSource(value: string) {
        this._updateGoogleAnalyticsDataSource = value;
    }
    public resetUpdateGoogleAnalyticsDataSource() {
        this._updateGoogleAnalyticsDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateGoogleAnalyticsDataSourceInput() {
        return this._updateGoogleAnalyticsDataSource;
    }

    // update_google_big_query_data_source - computed: true, optional: true, required: false
    private _updateGoogleBigQueryDataSource?: string; 
    public get updateGoogleBigQueryDataSource() {
        return this.getStringAttribute('update_google_big_query_data_source');
    }
    public set updateGoogleBigQueryDataSource(value: string) {
        this._updateGoogleBigQueryDataSource = value;
    }
    public resetUpdateGoogleBigQueryDataSource() {
        this._updateGoogleBigQueryDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateGoogleBigQueryDataSourceInput() {
        return this._updateGoogleBigQueryDataSource;
    }

    // update_google_sheets_data_source - computed: true, optional: true, required: false
    private _updateGoogleSheetsDataSource?: string; 
    public get updateGoogleSheetsDataSource() {
        return this.getStringAttribute('update_google_sheets_data_source');
    }
    public set updateGoogleSheetsDataSource(value: string) {
        this._updateGoogleSheetsDataSource = value;
    }
    public resetUpdateGoogleSheetsDataSource() {
        this._updateGoogleSheetsDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateGoogleSheetsDataSourceInput() {
        return this._updateGoogleSheetsDataSource;
    }

    // update_impala_data_source - computed: true, optional: true, required: false
    private _updateImpalaDataSource?: string; 
    public get updateImpalaDataSource() {
        return this.getStringAttribute('update_impala_data_source');
    }
    public set updateImpalaDataSource(value: string) {
        this._updateImpalaDataSource = value;
    }
    public resetUpdateImpalaDataSource() {
        this._updateImpalaDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateImpalaDataSourceInput() {
        return this._updateImpalaDataSource;
    }

    // update_jira_data_source - computed: true, optional: true, required: false
    private _updateJiraDataSource?: string; 
    public get updateJiraDataSource() {
        return this.getStringAttribute('update_jira_data_source');
    }
    public set updateJiraDataSource(value: string) {
        this._updateJiraDataSource = value;
    }
    public resetUpdateJiraDataSource() {
        this._updateJiraDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateJiraDataSourceInput() {
        return this._updateJiraDataSource;
    }

    // update_maria_db_data_source - computed: true, optional: true, required: false
    private _updateMariaDbDataSource?: string; 
    public get updateMariaDbDataSource() {
        return this.getStringAttribute('update_maria_db_data_source');
    }
    public set updateMariaDbDataSource(value: string) {
        this._updateMariaDbDataSource = value;
    }
    public resetUpdateMariaDbDataSource() {
        this._updateMariaDbDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateMariaDbDataSourceInput() {
        return this._updateMariaDbDataSource;
    }

    // update_mongo_atlas_data_source - computed: true, optional: true, required: false
    private _updateMongoAtlasDataSource?: string; 
    public get updateMongoAtlasDataSource() {
        return this.getStringAttribute('update_mongo_atlas_data_source');
    }
    public set updateMongoAtlasDataSource(value: string) {
        this._updateMongoAtlasDataSource = value;
    }
    public resetUpdateMongoAtlasDataSource() {
        this._updateMongoAtlasDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateMongoAtlasDataSourceInput() {
        return this._updateMongoAtlasDataSource;
    }

    // update_mongo_db_data_source - computed: true, optional: true, required: false
    private _updateMongoDbDataSource?: string; 
    public get updateMongoDbDataSource() {
        return this.getStringAttribute('update_mongo_db_data_source');
    }
    public set updateMongoDbDataSource(value: string) {
        this._updateMongoDbDataSource = value;
    }
    public resetUpdateMongoDbDataSource() {
        this._updateMongoDbDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateMongoDbDataSourceInput() {
        return this._updateMongoDbDataSource;
    }

    // update_my_sql_data_source - computed: true, optional: true, required: false
    private _updateMySqlDataSource?: string; 
    public get updateMySqlDataSource() {
        return this.getStringAttribute('update_my_sql_data_source');
    }
    public set updateMySqlDataSource(value: string) {
        this._updateMySqlDataSource = value;
    }
    public resetUpdateMySqlDataSource() {
        this._updateMySqlDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateMySqlDataSourceInput() {
        return this._updateMySqlDataSource;
    }

    // update_open_search_data_source - computed: true, optional: true, required: false
    private _updateOpenSearchDataSource?: string; 
    public get updateOpenSearchDataSource() {
        return this.getStringAttribute('update_open_search_data_source');
    }
    public set updateOpenSearchDataSource(value: string) {
        this._updateOpenSearchDataSource = value;
    }
    public resetUpdateOpenSearchDataSource() {
        this._updateOpenSearchDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateOpenSearchDataSourceInput() {
        return this._updateOpenSearchDataSource;
    }

    // update_oracle_data_source - computed: true, optional: true, required: false
    private _updateOracleDataSource?: string; 
    public get updateOracleDataSource() {
        return this.getStringAttribute('update_oracle_data_source');
    }
    public set updateOracleDataSource(value: string) {
        this._updateOracleDataSource = value;
    }
    public resetUpdateOracleDataSource() {
        this._updateOracleDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateOracleDataSourceInput() {
        return this._updateOracleDataSource;
    }

    // update_pay_pal_data_source - computed: true, optional: true, required: false
    private _updatePayPalDataSource?: string; 
    public get updatePayPalDataSource() {
        return this.getStringAttribute('update_pay_pal_data_source');
    }
    public set updatePayPalDataSource(value: string) {
        this._updatePayPalDataSource = value;
    }
    public resetUpdatePayPalDataSource() {
        this._updatePayPalDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updatePayPalDataSourceInput() {
        return this._updatePayPalDataSource;
    }

    // update_postgre_sql_data_source - computed: true, optional: true, required: false
    private _updatePostgreSqlDataSource?: string; 
    public get updatePostgreSqlDataSource() {
        return this.getStringAttribute('update_postgre_sql_data_source');
    }
    public set updatePostgreSqlDataSource(value: string) {
        this._updatePostgreSqlDataSource = value;
    }
    public resetUpdatePostgreSqlDataSource() {
        this._updatePostgreSqlDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updatePostgreSqlDataSourceInput() {
        return this._updatePostgreSqlDataSource;
    }

    // update_presto_data_source - computed: true, optional: true, required: false
    private _updatePrestoDataSource?: string; 
    public get updatePrestoDataSource() {
        return this.getStringAttribute('update_presto_data_source');
    }
    public set updatePrestoDataSource(value: string) {
        this._updatePrestoDataSource = value;
    }
    public resetUpdatePrestoDataSource() {
        this._updatePrestoDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updatePrestoDataSourceInput() {
        return this._updatePrestoDataSource;
    }

    // update_radiant_data_source - computed: true, optional: true, required: false
    private _updateRadiantDataSource?: string; 
    public get updateRadiantDataSource() {
        return this.getStringAttribute('update_radiant_data_source');
    }
    public set updateRadiantDataSource(value: string) {
        this._updateRadiantDataSource = value;
    }
    public resetUpdateRadiantDataSource() {
        this._updateRadiantDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateRadiantDataSourceInput() {
        return this._updateRadiantDataSource;
    }

    // update_rds_data_source - computed: true, optional: true, required: false
    private _updateRdsDataSource?: string; 
    public get updateRdsDataSource() {
        return this.getStringAttribute('update_rds_data_source');
    }
    public set updateRdsDataSource(value: string) {
        this._updateRdsDataSource = value;
    }
    public resetUpdateRdsDataSource() {
        this._updateRdsDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateRdsDataSourceInput() {
        return this._updateRdsDataSource;
    }

    // update_redshift_auto_discovered_data_source - computed: true, optional: true, required: false
    private _updateRedshiftAutoDiscoveredDataSource?: string; 
    public get updateRedshiftAutoDiscoveredDataSource() {
        return this.getStringAttribute('update_redshift_auto_discovered_data_source');
    }
    public set updateRedshiftAutoDiscoveredDataSource(value: string) {
        this._updateRedshiftAutoDiscoveredDataSource = value;
    }
    public resetUpdateRedshiftAutoDiscoveredDataSource() {
        this._updateRedshiftAutoDiscoveredDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateRedshiftAutoDiscoveredDataSourceInput() {
        return this._updateRedshiftAutoDiscoveredDataSource;
    }

    // update_redshift_manual_data_source - computed: true, optional: true, required: false
    private _updateRedshiftManualDataSource?: string; 
    public get updateRedshiftManualDataSource() {
        return this.getStringAttribute('update_redshift_manual_data_source');
    }
    public set updateRedshiftManualDataSource(value: string) {
        this._updateRedshiftManualDataSource = value;
    }
    public resetUpdateRedshiftManualDataSource() {
        this._updateRedshiftManualDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateRedshiftManualDataSourceInput() {
        return this._updateRedshiftManualDataSource;
    }

    // update_s3_analytics_data_source - computed: true, optional: true, required: false
    private _updateS3AnalyticsDataSource?: string; 
    public get updateS3AnalyticsDataSource() {
        return this.getStringAttribute('update_s3_analytics_data_source');
    }
    public set updateS3AnalyticsDataSource(value: string) {
        this._updateS3AnalyticsDataSource = value;
    }
    public resetUpdateS3AnalyticsDataSource() {
        this._updateS3AnalyticsDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateS3AnalyticsDataSourceInput() {
        return this._updateS3AnalyticsDataSource;
    }

    // update_s3_data_source - computed: true, optional: true, required: false
    private _updateS3DataSource?: string; 
    public get updateS3DataSource() {
        return this.getStringAttribute('update_s3_data_source');
    }
    public set updateS3DataSource(value: string) {
        this._updateS3DataSource = value;
    }
    public resetUpdateS3DataSource() {
        this._updateS3DataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateS3DataSourceInput() {
        return this._updateS3DataSource;
    }

    // update_s3_tables_data_source - computed: true, optional: true, required: false
    private _updateS3TablesDataSource?: string; 
    public get updateS3TablesDataSource() {
        return this.getStringAttribute('update_s3_tables_data_source');
    }
    public set updateS3TablesDataSource(value: string) {
        this._updateS3TablesDataSource = value;
    }
    public resetUpdateS3TablesDataSource() {
        this._updateS3TablesDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateS3TablesDataSourceInput() {
        return this._updateS3TablesDataSource;
    }

    // update_salesforce_data_source - computed: true, optional: true, required: false
    private _updateSalesforceDataSource?: string; 
    public get updateSalesforceDataSource() {
        return this.getStringAttribute('update_salesforce_data_source');
    }
    public set updateSalesforceDataSource(value: string) {
        this._updateSalesforceDataSource = value;
    }
    public resetUpdateSalesforceDataSource() {
        this._updateSalesforceDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateSalesforceDataSourceInput() {
        return this._updateSalesforceDataSource;
    }

    // update_sap_hana_data_source - computed: true, optional: true, required: false
    private _updateSapHanaDataSource?: string; 
    public get updateSapHanaDataSource() {
        return this.getStringAttribute('update_sap_hana_data_source');
    }
    public set updateSapHanaDataSource(value: string) {
        this._updateSapHanaDataSource = value;
    }
    public resetUpdateSapHanaDataSource() {
        this._updateSapHanaDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateSapHanaDataSourceInput() {
        return this._updateSapHanaDataSource;
    }

    // update_service_now_data_source - computed: true, optional: true, required: false
    private _updateServiceNowDataSource?: string; 
    public get updateServiceNowDataSource() {
        return this.getStringAttribute('update_service_now_data_source');
    }
    public set updateServiceNowDataSource(value: string) {
        this._updateServiceNowDataSource = value;
    }
    public resetUpdateServiceNowDataSource() {
        this._updateServiceNowDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateServiceNowDataSourceInput() {
        return this._updateServiceNowDataSource;
    }

    // update_snowflake_data_source - computed: true, optional: true, required: false
    private _updateSnowflakeDataSource?: string; 
    public get updateSnowflakeDataSource() {
        return this.getStringAttribute('update_snowflake_data_source');
    }
    public set updateSnowflakeDataSource(value: string) {
        this._updateSnowflakeDataSource = value;
    }
    public resetUpdateSnowflakeDataSource() {
        this._updateSnowflakeDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateSnowflakeDataSourceInput() {
        return this._updateSnowflakeDataSource;
    }

    // update_spark_data_source - computed: true, optional: true, required: false
    private _updateSparkDataSource?: string; 
    public get updateSparkDataSource() {
        return this.getStringAttribute('update_spark_data_source');
    }
    public set updateSparkDataSource(value: string) {
        this._updateSparkDataSource = value;
    }
    public resetUpdateSparkDataSource() {
        this._updateSparkDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateSparkDataSourceInput() {
        return this._updateSparkDataSource;
    }

    // update_sql_server_data_source - computed: true, optional: true, required: false
    private _updateSqlServerDataSource?: string; 
    public get updateSqlServerDataSource() {
        return this.getStringAttribute('update_sql_server_data_source');
    }
    public set updateSqlServerDataSource(value: string) {
        this._updateSqlServerDataSource = value;
    }
    public resetUpdateSqlServerDataSource() {
        this._updateSqlServerDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateSqlServerDataSourceInput() {
        return this._updateSqlServerDataSource;
    }

    // update_square_data_source - computed: true, optional: true, required: false
    private _updateSquareDataSource?: string; 
    public get updateSquareDataSource() {
        return this.getStringAttribute('update_square_data_source');
    }
    public set updateSquareDataSource(value: string) {
        this._updateSquareDataSource = value;
    }
    public resetUpdateSquareDataSource() {
        this._updateSquareDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateSquareDataSourceInput() {
        return this._updateSquareDataSource;
    }

    // update_starburst_data_source - computed: true, optional: true, required: false
    private _updateStarburstDataSource?: string; 
    public get updateStarburstDataSource() {
        return this.getStringAttribute('update_starburst_data_source');
    }
    public set updateStarburstDataSource(value: string) {
        this._updateStarburstDataSource = value;
    }
    public resetUpdateStarburstDataSource() {
        this._updateStarburstDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateStarburstDataSourceInput() {
        return this._updateStarburstDataSource;
    }

    // update_teradata_data_source - computed: true, optional: true, required: false
    private _updateTeradataDataSource?: string; 
    public get updateTeradataDataSource() {
        return this.getStringAttribute('update_teradata_data_source');
    }
    public set updateTeradataDataSource(value: string) {
        this._updateTeradataDataSource = value;
    }
    public resetUpdateTeradataDataSource() {
        this._updateTeradataDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateTeradataDataSourceInput() {
        return this._updateTeradataDataSource;
    }

    // update_timestream_data_source - computed: true, optional: true, required: false
    private _updateTimestreamDataSource?: string; 
    public get updateTimestreamDataSource() {
        return this.getStringAttribute('update_timestream_data_source');
    }
    public set updateTimestreamDataSource(value: string) {
        this._updateTimestreamDataSource = value;
    }
    public resetUpdateTimestreamDataSource() {
        this._updateTimestreamDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateTimestreamDataSourceInput() {
        return this._updateTimestreamDataSource;
    }

    // update_trino_data_source - computed: true, optional: true, required: false
    private _updateTrinoDataSource?: string; 
    public get updateTrinoDataSource() {
        return this.getStringAttribute('update_trino_data_source');
    }
    public set updateTrinoDataSource(value: string) {
        this._updateTrinoDataSource = value;
    }
    public resetUpdateTrinoDataSource() {
        this._updateTrinoDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateTrinoDataSourceInput() {
        return this._updateTrinoDataSource;
    }

    // update_twitter_data_source - computed: true, optional: true, required: false
    private _updateTwitterDataSource?: string; 
    public get updateTwitterDataSource() {
        return this.getStringAttribute('update_twitter_data_source');
    }
    public set updateTwitterDataSource(value: string) {
        this._updateTwitterDataSource = value;
    }
    public resetUpdateTwitterDataSource() {
        this._updateTwitterDataSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateTwitterDataSourceInput() {
        return this._updateTwitterDataSource;
    }

    // use_agent_web_search - computed: true, optional: true, required: false
    private _useAgentWebSearch?: string; 
    public get useAgentWebSearch() {
        return this.getStringAttribute('use_agent_web_search');
    }
    public set useAgentWebSearch(value: string) {
        this._useAgentWebSearch = value;
    }
    public resetUseAgentWebSearch() {
        this._useAgentWebSearch = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useAgentWebSearchInput() {
        return this._useAgentWebSearch;
    }

    // use_amazon_bedrock_ars_action - computed: true, optional: true, required: false
    private _useAmazonBedrockArsAction?: string; 
    public get useAmazonBedrockArsAction() {
        return this.getStringAttribute('use_amazon_bedrock_ars_action');
    }
    public set useAmazonBedrockArsAction(value: string) {
        this._useAmazonBedrockArsAction = value;
    }
    public resetUseAmazonBedrockArsAction() {
        this._useAmazonBedrockArsAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useAmazonBedrockArsActionInput() {
        return this._useAmazonBedrockArsAction;
    }

    // use_amazon_bedrock_fs_action - computed: true, optional: true, required: false
    private _useAmazonBedrockFsAction?: string; 
    public get useAmazonBedrockFsAction() {
        return this.getStringAttribute('use_amazon_bedrock_fs_action');
    }
    public set useAmazonBedrockFsAction(value: string) {
        this._useAmazonBedrockFsAction = value;
    }
    public resetUseAmazonBedrockFsAction() {
        this._useAmazonBedrockFsAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useAmazonBedrockFsActionInput() {
        return this._useAmazonBedrockFsAction;
    }

    // use_amazon_bedrock_krs_action - computed: true, optional: true, required: false
    private _useAmazonBedrockKrsAction?: string; 
    public get useAmazonBedrockKrsAction() {
        return this.getStringAttribute('use_amazon_bedrock_krs_action');
    }
    public set useAmazonBedrockKrsAction(value: string) {
        this._useAmazonBedrockKrsAction = value;
    }
    public resetUseAmazonBedrockKrsAction() {
        this._useAmazonBedrockKrsAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useAmazonBedrockKrsActionInput() {
        return this._useAmazonBedrockKrsAction;
    }

    // use_amazon_s_three_action - computed: true, optional: true, required: false
    private _useAmazonSThreeAction?: string; 
    public get useAmazonSThreeAction() {
        return this.getStringAttribute('use_amazon_s_three_action');
    }
    public set useAmazonSThreeAction(value: string) {
        this._useAmazonSThreeAction = value;
    }
    public resetUseAmazonSThreeAction() {
        this._useAmazonSThreeAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useAmazonSThreeActionInput() {
        return this._useAmazonSThreeAction;
    }

    // use_asana_action - computed: true, optional: true, required: false
    private _useAsanaAction?: string; 
    public get useAsanaAction() {
        return this.getStringAttribute('use_asana_action');
    }
    public set useAsanaAction(value: string) {
        this._useAsanaAction = value;
    }
    public resetUseAsanaAction() {
        this._useAsanaAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useAsanaActionInput() {
        return this._useAsanaAction;
    }

    // use_bamboo_hr_action - computed: true, optional: true, required: false
    private _useBambooHrAction?: string; 
    public get useBambooHrAction() {
        return this.getStringAttribute('use_bamboo_hr_action');
    }
    public set useBambooHrAction(value: string) {
        this._useBambooHrAction = value;
    }
    public resetUseBambooHrAction() {
        this._useBambooHrAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useBambooHrActionInput() {
        return this._useBambooHrAction;
    }

    // use_bedrock_managed_knowledge_base - computed: true, optional: true, required: false
    private _useBedrockManagedKnowledgeBase?: string; 
    public get useBedrockManagedKnowledgeBase() {
        return this.getStringAttribute('use_bedrock_managed_knowledge_base');
    }
    public set useBedrockManagedKnowledgeBase(value: string) {
        this._useBedrockManagedKnowledgeBase = value;
    }
    public resetUseBedrockManagedKnowledgeBase() {
        this._useBedrockManagedKnowledgeBase = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useBedrockManagedKnowledgeBaseInput() {
        return this._useBedrockManagedKnowledgeBase;
    }

    // use_bedrock_models - computed: true, optional: true, required: false
    private _useBedrockModels?: string; 
    public get useBedrockModels() {
        return this.getStringAttribute('use_bedrock_models');
    }
    public set useBedrockModels(value: string) {
        this._useBedrockModels = value;
    }
    public resetUseBedrockModels() {
        this._useBedrockModels = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useBedrockModelsInput() {
        return this._useBedrockModels;
    }

    // use_box_agent_action - computed: true, optional: true, required: false
    private _useBoxAgentAction?: string; 
    public get useBoxAgentAction() {
        return this.getStringAttribute('use_box_agent_action');
    }
    public set useBoxAgentAction(value: string) {
        this._useBoxAgentAction = value;
    }
    public resetUseBoxAgentAction() {
        this._useBoxAgentAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useBoxAgentActionInput() {
        return this._useBoxAgentAction;
    }

    // use_box_knowledge_base - computed: true, optional: true, required: false
    private _useBoxKnowledgeBase?: string; 
    public get useBoxKnowledgeBase() {
        return this.getStringAttribute('use_box_knowledge_base');
    }
    public set useBoxKnowledgeBase(value: string) {
        this._useBoxKnowledgeBase = value;
    }
    public resetUseBoxKnowledgeBase() {
        this._useBoxKnowledgeBase = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useBoxKnowledgeBaseInput() {
        return this._useBoxKnowledgeBase;
    }

    // use_browser_extension - computed: true, optional: true, required: false
    private _useBrowserExtension?: string; 
    public get useBrowserExtension() {
        return this.getStringAttribute('use_browser_extension');
    }
    public set useBrowserExtension(value: string) {
        this._useBrowserExtension = value;
    }
    public resetUseBrowserExtension() {
        this._useBrowserExtension = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useBrowserExtensionInput() {
        return this._useBrowserExtension;
    }

    // use_canva_agent_action - computed: true, optional: true, required: false
    private _useCanvaAgentAction?: string; 
    public get useCanvaAgentAction() {
        return this.getStringAttribute('use_canva_agent_action');
    }
    public set useCanvaAgentAction(value: string) {
        this._useCanvaAgentAction = value;
    }
    public resetUseCanvaAgentAction() {
        this._useCanvaAgentAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useCanvaAgentActionInput() {
        return this._useCanvaAgentAction;
    }

    // use_comprehend_action - computed: true, optional: true, required: false
    private _useComprehendAction?: string; 
    public get useComprehendAction() {
        return this.getStringAttribute('use_comprehend_action');
    }
    public set useComprehendAction(value: string) {
        this._useComprehendAction = value;
    }
    public resetUseComprehendAction() {
        this._useComprehendAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useComprehendActionInput() {
        return this._useComprehendAction;
    }

    // use_comprehend_medical_action - computed: true, optional: true, required: false
    private _useComprehendMedicalAction?: string; 
    public get useComprehendMedicalAction() {
        return this.getStringAttribute('use_comprehend_medical_action');
    }
    public set useComprehendMedicalAction(value: string) {
        this._useComprehendMedicalAction = value;
    }
    public resetUseComprehendMedicalAction() {
        this._useComprehendMedicalAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useComprehendMedicalActionInput() {
        return this._useComprehendMedicalAction;
    }

    // use_confluence_action - computed: true, optional: true, required: false
    private _useConfluenceAction?: string; 
    public get useConfluenceAction() {
        return this.getStringAttribute('use_confluence_action');
    }
    public set useConfluenceAction(value: string) {
        this._useConfluenceAction = value;
    }
    public resetUseConfluenceAction() {
        this._useConfluenceAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useConfluenceActionInput() {
        return this._useConfluenceAction;
    }

    // use_confluence_knowledge_base - computed: true, optional: true, required: false
    private _useConfluenceKnowledgeBase?: string; 
    public get useConfluenceKnowledgeBase() {
        return this.getStringAttribute('use_confluence_knowledge_base');
    }
    public set useConfluenceKnowledgeBase(value: string) {
        this._useConfluenceKnowledgeBase = value;
    }
    public resetUseConfluenceKnowledgeBase() {
        this._useConfluenceKnowledgeBase = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useConfluenceKnowledgeBaseInput() {
        return this._useConfluenceKnowledgeBase;
    }

    // use_excel_add_in_extension - computed: true, optional: true, required: false
    private _useExcelAddInExtension?: string; 
    public get useExcelAddInExtension() {
        return this.getStringAttribute('use_excel_add_in_extension');
    }
    public set useExcelAddInExtension(value: string) {
        this._useExcelAddInExtension = value;
    }
    public resetUseExcelAddInExtension() {
        this._useExcelAddInExtension = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useExcelAddInExtensionInput() {
        return this._useExcelAddInExtension;
    }

    // use_fact_set_action - computed: true, optional: true, required: false
    private _useFactSetAction?: string; 
    public get useFactSetAction() {
        return this.getStringAttribute('use_fact_set_action');
    }
    public set useFactSetAction(value: string) {
        this._useFactSetAction = value;
    }
    public resetUseFactSetAction() {
        this._useFactSetAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useFactSetActionInput() {
        return this._useFactSetAction;
    }

    // use_generic_http_action - computed: true, optional: true, required: false
    private _useGenericHttpAction?: string; 
    public get useGenericHttpAction() {
        return this.getStringAttribute('use_generic_http_action');
    }
    public set useGenericHttpAction(value: string) {
        this._useGenericHttpAction = value;
    }
    public resetUseGenericHttpAction() {
        this._useGenericHttpAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useGenericHttpActionInput() {
        return this._useGenericHttpAction;
    }

    // use_github_action - computed: true, optional: true, required: false
    private _useGithubAction?: string; 
    public get useGithubAction() {
        return this.getStringAttribute('use_github_action');
    }
    public set useGithubAction(value: string) {
        this._useGithubAction = value;
    }
    public resetUseGithubAction() {
        this._useGithubAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useGithubActionInput() {
        return this._useGithubAction;
    }

    // use_google_calendar_action - computed: true, optional: true, required: false
    private _useGoogleCalendarAction?: string; 
    public get useGoogleCalendarAction() {
        return this.getStringAttribute('use_google_calendar_action');
    }
    public set useGoogleCalendarAction(value: string) {
        this._useGoogleCalendarAction = value;
    }
    public resetUseGoogleCalendarAction() {
        this._useGoogleCalendarAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useGoogleCalendarActionInput() {
        return this._useGoogleCalendarAction;
    }

    // use_google_drive_knowledge_base - computed: true, optional: true, required: false
    private _useGoogleDriveKnowledgeBase?: string; 
    public get useGoogleDriveKnowledgeBase() {
        return this.getStringAttribute('use_google_drive_knowledge_base');
    }
    public set useGoogleDriveKnowledgeBase(value: string) {
        this._useGoogleDriveKnowledgeBase = value;
    }
    public resetUseGoogleDriveKnowledgeBase() {
        this._useGoogleDriveKnowledgeBase = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useGoogleDriveKnowledgeBaseInput() {
        return this._useGoogleDriveKnowledgeBase;
    }

    // use_hubspot_action - computed: true, optional: true, required: false
    private _useHubspotAction?: string; 
    public get useHubspotAction() {
        return this.getStringAttribute('use_hubspot_action');
    }
    public set useHubspotAction(value: string) {
        this._useHubspotAction = value;
    }
    public resetUseHubspotAction() {
        this._useHubspotAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useHubspotActionInput() {
        return this._useHubspotAction;
    }

    // use_hugging_face_action - computed: true, optional: true, required: false
    private _useHuggingFaceAction?: string; 
    public get useHuggingFaceAction() {
        return this.getStringAttribute('use_hugging_face_action');
    }
    public set useHuggingFaceAction(value: string) {
        this._useHuggingFaceAction = value;
    }
    public resetUseHuggingFaceAction() {
        this._useHuggingFaceAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useHuggingFaceActionInput() {
        return this._useHuggingFaceAction;
    }

    // use_idc_knowledge_base - computed: true, optional: true, required: false
    private _useIdcKnowledgeBase?: string; 
    public get useIdcKnowledgeBase() {
        return this.getStringAttribute('use_idc_knowledge_base');
    }
    public set useIdcKnowledgeBase(value: string) {
        this._useIdcKnowledgeBase = value;
    }
    public resetUseIdcKnowledgeBase() {
        this._useIdcKnowledgeBase = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useIdcKnowledgeBaseInput() {
        return this._useIdcKnowledgeBase;
    }

    // use_intercom_action - computed: true, optional: true, required: false
    private _useIntercomAction?: string; 
    public get useIntercomAction() {
        return this.getStringAttribute('use_intercom_action');
    }
    public set useIntercomAction(value: string) {
        this._useIntercomAction = value;
    }
    public resetUseIntercomAction() {
        this._useIntercomAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useIntercomActionInput() {
        return this._useIntercomAction;
    }

    // use_jira_action - computed: true, optional: true, required: false
    private _useJiraAction?: string; 
    public get useJiraAction() {
        return this.getStringAttribute('use_jira_action');
    }
    public set useJiraAction(value: string) {
        this._useJiraAction = value;
    }
    public resetUseJiraAction() {
        this._useJiraAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useJiraActionInput() {
        return this._useJiraAction;
    }

    // use_linear_action - computed: true, optional: true, required: false
    private _useLinearAction?: string; 
    public get useLinearAction() {
        return this.getStringAttribute('use_linear_action');
    }
    public set useLinearAction(value: string) {
        this._useLinearAction = value;
    }
    public resetUseLinearAction() {
        this._useLinearAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useLinearActionInput() {
        return this._useLinearAction;
    }

    // use_mcp_action - computed: true, optional: true, required: false
    private _useMcpAction?: string; 
    public get useMcpAction() {
        return this.getStringAttribute('use_mcp_action');
    }
    public set useMcpAction(value: string) {
        this._useMcpAction = value;
    }
    public resetUseMcpAction() {
        this._useMcpAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useMcpActionInput() {
        return this._useMcpAction;
    }

    // use_monday_action - computed: true, optional: true, required: false
    private _useMondayAction?: string; 
    public get useMondayAction() {
        return this.getStringAttribute('use_monday_action');
    }
    public set useMondayAction(value: string) {
        this._useMondayAction = value;
    }
    public resetUseMondayAction() {
        this._useMondayAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useMondayActionInput() {
        return this._useMondayAction;
    }

    // use_ms_exchange_action - computed: true, optional: true, required: false
    private _useMsExchangeAction?: string; 
    public get useMsExchangeAction() {
        return this.getStringAttribute('use_ms_exchange_action');
    }
    public set useMsExchangeAction(value: string) {
        this._useMsExchangeAction = value;
    }
    public resetUseMsExchangeAction() {
        this._useMsExchangeAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useMsExchangeActionInput() {
        return this._useMsExchangeAction;
    }

    // use_ms_teams_action - computed: true, optional: true, required: false
    private _useMsTeamsAction?: string; 
    public get useMsTeamsAction() {
        return this.getStringAttribute('use_ms_teams_action');
    }
    public set useMsTeamsAction(value: string) {
        this._useMsTeamsAction = value;
    }
    public resetUseMsTeamsAction() {
        this._useMsTeamsAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useMsTeamsActionInput() {
        return this._useMsTeamsAction;
    }

    // use_new_relic_action - computed: true, optional: true, required: false
    private _useNewRelicAction?: string; 
    public get useNewRelicAction() {
        return this.getStringAttribute('use_new_relic_action');
    }
    public set useNewRelicAction(value: string) {
        this._useNewRelicAction = value;
    }
    public resetUseNewRelicAction() {
        this._useNewRelicAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useNewRelicActionInput() {
        return this._useNewRelicAction;
    }

    // use_notion_action - computed: true, optional: true, required: false
    private _useNotionAction?: string; 
    public get useNotionAction() {
        return this.getStringAttribute('use_notion_action');
    }
    public set useNotionAction(value: string) {
        this._useNotionAction = value;
    }
    public resetUseNotionAction() {
        this._useNotionAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useNotionActionInput() {
        return this._useNotionAction;
    }

    // use_one_drive_action - computed: true, optional: true, required: false
    private _useOneDriveAction?: string; 
    public get useOneDriveAction() {
        return this.getStringAttribute('use_one_drive_action');
    }
    public set useOneDriveAction(value: string) {
        this._useOneDriveAction = value;
    }
    public resetUseOneDriveAction() {
        this._useOneDriveAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useOneDriveActionInput() {
        return this._useOneDriveAction;
    }

    // use_one_drive_knowledge_base - computed: true, optional: true, required: false
    private _useOneDriveKnowledgeBase?: string; 
    public get useOneDriveKnowledgeBase() {
        return this.getStringAttribute('use_one_drive_knowledge_base');
    }
    public set useOneDriveKnowledgeBase(value: string) {
        this._useOneDriveKnowledgeBase = value;
    }
    public resetUseOneDriveKnowledgeBase() {
        this._useOneDriveKnowledgeBase = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useOneDriveKnowledgeBaseInput() {
        return this._useOneDriveKnowledgeBase;
    }

    // use_open_api_action - computed: true, optional: true, required: false
    private _useOpenApiAction?: string; 
    public get useOpenApiAction() {
        return this.getStringAttribute('use_open_api_action');
    }
    public set useOpenApiAction(value: string) {
        this._useOpenApiAction = value;
    }
    public resetUseOpenApiAction() {
        this._useOpenApiAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useOpenApiActionInput() {
        return this._useOpenApiAction;
    }

    // use_outlook_add_in_extension - computed: true, optional: true, required: false
    private _useOutlookAddInExtension?: string; 
    public get useOutlookAddInExtension() {
        return this.getStringAttribute('use_outlook_add_in_extension');
    }
    public set useOutlookAddInExtension(value: string) {
        this._useOutlookAddInExtension = value;
    }
    public resetUseOutlookAddInExtension() {
        this._useOutlookAddInExtension = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useOutlookAddInExtensionInput() {
        return this._useOutlookAddInExtension;
    }

    // use_pager_duty_action - computed: true, optional: true, required: false
    private _usePagerDutyAction?: string; 
    public get usePagerDutyAction() {
        return this.getStringAttribute('use_pager_duty_action');
    }
    public set usePagerDutyAction(value: string) {
        this._usePagerDutyAction = value;
    }
    public resetUsePagerDutyAction() {
        this._usePagerDutyAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get usePagerDutyActionInput() {
        return this._usePagerDutyAction;
    }

    // use_powerpoint_add_in_extension - computed: true, optional: true, required: false
    private _usePowerpointAddInExtension?: string; 
    public get usePowerpointAddInExtension() {
        return this.getStringAttribute('use_powerpoint_add_in_extension');
    }
    public set usePowerpointAddInExtension(value: string) {
        this._usePowerpointAddInExtension = value;
    }
    public resetUsePowerpointAddInExtension() {
        this._usePowerpointAddInExtension = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get usePowerpointAddInExtensionInput() {
        return this._usePowerpointAddInExtension;
    }

    // use_q_business_knowledge_base - computed: true, optional: true, required: false
    private _useQBusinessKnowledgeBase?: string; 
    public get useQBusinessKnowledgeBase() {
        return this.getStringAttribute('use_q_business_knowledge_base');
    }
    public set useQBusinessKnowledgeBase(value: string) {
        this._useQBusinessKnowledgeBase = value;
    }
    public resetUseQBusinessKnowledgeBase() {
        this._useQBusinessKnowledgeBase = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useQBusinessKnowledgeBaseInput() {
        return this._useQBusinessKnowledgeBase;
    }

    // use_s3_knowledge_base - computed: true, optional: true, required: false
    private _useS3KnowledgeBase?: string; 
    public get useS3KnowledgeBase() {
        return this.getStringAttribute('use_s3_knowledge_base');
    }
    public set useS3KnowledgeBase(value: string) {
        this._useS3KnowledgeBase = value;
    }
    public resetUseS3KnowledgeBase() {
        this._useS3KnowledgeBase = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useS3KnowledgeBaseInput() {
        return this._useS3KnowledgeBase;
    }

    // use_salesforce_action - computed: true, optional: true, required: false
    private _useSalesforceAction?: string; 
    public get useSalesforceAction() {
        return this.getStringAttribute('use_salesforce_action');
    }
    public set useSalesforceAction(value: string) {
        this._useSalesforceAction = value;
    }
    public resetUseSalesforceAction() {
        this._useSalesforceAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useSalesforceActionInput() {
        return this._useSalesforceAction;
    }

    // use_sand_p_global_energy_action - computed: true, optional: true, required: false
    private _useSandPGlobalEnergyAction?: string; 
    public get useSandPGlobalEnergyAction() {
        return this.getStringAttribute('use_sand_p_global_energy_action');
    }
    public set useSandPGlobalEnergyAction(value: string) {
        this._useSandPGlobalEnergyAction = value;
    }
    public resetUseSandPGlobalEnergyAction() {
        this._useSandPGlobalEnergyAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useSandPGlobalEnergyActionInput() {
        return this._useSandPGlobalEnergyAction;
    }

    // use_sand_pgmi_action - computed: true, optional: true, required: false
    private _useSandPgmiAction?: string; 
    public get useSandPgmiAction() {
        return this.getStringAttribute('use_sand_pgmi_action');
    }
    public set useSandPgmiAction(value: string) {
        this._useSandPgmiAction = value;
    }
    public resetUseSandPgmiAction() {
        this._useSandPgmiAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useSandPgmiActionInput() {
        return this._useSandPgmiAction;
    }

    // use_sap_bill_of_material_action - computed: true, optional: true, required: false
    private _useSapBillOfMaterialAction?: string; 
    public get useSapBillOfMaterialAction() {
        return this.getStringAttribute('use_sap_bill_of_material_action');
    }
    public set useSapBillOfMaterialAction(value: string) {
        this._useSapBillOfMaterialAction = value;
    }
    public resetUseSapBillOfMaterialAction() {
        this._useSapBillOfMaterialAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useSapBillOfMaterialActionInput() {
        return this._useSapBillOfMaterialAction;
    }

    // use_sap_business_partner_action - computed: true, optional: true, required: false
    private _useSapBusinessPartnerAction?: string; 
    public get useSapBusinessPartnerAction() {
        return this.getStringAttribute('use_sap_business_partner_action');
    }
    public set useSapBusinessPartnerAction(value: string) {
        this._useSapBusinessPartnerAction = value;
    }
    public resetUseSapBusinessPartnerAction() {
        this._useSapBusinessPartnerAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useSapBusinessPartnerActionInput() {
        return this._useSapBusinessPartnerAction;
    }

    // use_sap_material_stock_action - computed: true, optional: true, required: false
    private _useSapMaterialStockAction?: string; 
    public get useSapMaterialStockAction() {
        return this.getStringAttribute('use_sap_material_stock_action');
    }
    public set useSapMaterialStockAction(value: string) {
        this._useSapMaterialStockAction = value;
    }
    public resetUseSapMaterialStockAction() {
        this._useSapMaterialStockAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useSapMaterialStockActionInput() {
        return this._useSapMaterialStockAction;
    }

    // use_sap_physical_inventory_action - computed: true, optional: true, required: false
    private _useSapPhysicalInventoryAction?: string; 
    public get useSapPhysicalInventoryAction() {
        return this.getStringAttribute('use_sap_physical_inventory_action');
    }
    public set useSapPhysicalInventoryAction(value: string) {
        this._useSapPhysicalInventoryAction = value;
    }
    public resetUseSapPhysicalInventoryAction() {
        this._useSapPhysicalInventoryAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useSapPhysicalInventoryActionInput() {
        return this._useSapPhysicalInventoryAction;
    }

    // use_sap_product_master_data_action - computed: true, optional: true, required: false
    private _useSapProductMasterDataAction?: string; 
    public get useSapProductMasterDataAction() {
        return this.getStringAttribute('use_sap_product_master_data_action');
    }
    public set useSapProductMasterDataAction(value: string) {
        this._useSapProductMasterDataAction = value;
    }
    public resetUseSapProductMasterDataAction() {
        this._useSapProductMasterDataAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useSapProductMasterDataActionInput() {
        return this._useSapProductMasterDataAction;
    }

    // use_service_now_action - computed: true, optional: true, required: false
    private _useServiceNowAction?: string; 
    public get useServiceNowAction() {
        return this.getStringAttribute('use_service_now_action');
    }
    public set useServiceNowAction(value: string) {
        this._useServiceNowAction = value;
    }
    public resetUseServiceNowAction() {
        this._useServiceNowAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useServiceNowActionInput() {
        return this._useServiceNowAction;
    }

    // use_share_point_action - computed: true, optional: true, required: false
    private _useSharePointAction?: string; 
    public get useSharePointAction() {
        return this.getStringAttribute('use_share_point_action');
    }
    public set useSharePointAction(value: string) {
        this._useSharePointAction = value;
    }
    public resetUseSharePointAction() {
        this._useSharePointAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useSharePointActionInput() {
        return this._useSharePointAction;
    }

    // use_share_point_knowledge_base - computed: true, optional: true, required: false
    private _useSharePointKnowledgeBase?: string; 
    public get useSharePointKnowledgeBase() {
        return this.getStringAttribute('use_share_point_knowledge_base');
    }
    public set useSharePointKnowledgeBase(value: string) {
        this._useSharePointKnowledgeBase = value;
    }
    public resetUseSharePointKnowledgeBase() {
        this._useSharePointKnowledgeBase = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useSharePointKnowledgeBaseInput() {
        return this._useSharePointKnowledgeBase;
    }

    // use_slack_action - computed: true, optional: true, required: false
    private _useSlackAction?: string; 
    public get useSlackAction() {
        return this.getStringAttribute('use_slack_action');
    }
    public set useSlackAction(value: string) {
        this._useSlackAction = value;
    }
    public resetUseSlackAction() {
        this._useSlackAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useSlackActionInput() {
        return this._useSlackAction;
    }

    // use_smartsheet_action - computed: true, optional: true, required: false
    private _useSmartsheetAction?: string; 
    public get useSmartsheetAction() {
        return this.getStringAttribute('use_smartsheet_action');
    }
    public set useSmartsheetAction(value: string) {
        this._useSmartsheetAction = value;
    }
    public resetUseSmartsheetAction() {
        this._useSmartsheetAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useSmartsheetActionInput() {
        return this._useSmartsheetAction;
    }

    // use_textract_action - computed: true, optional: true, required: false
    private _useTextractAction?: string; 
    public get useTextractAction() {
        return this.getStringAttribute('use_textract_action');
    }
    public set useTextractAction(value: string) {
        this._useTextractAction = value;
    }
    public resetUseTextractAction() {
        this._useTextractAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useTextractActionInput() {
        return this._useTextractAction;
    }

    // use_web_crawler_knowledge_base - computed: true, optional: true, required: false
    private _useWebCrawlerKnowledgeBase?: string; 
    public get useWebCrawlerKnowledgeBase() {
        return this.getStringAttribute('use_web_crawler_knowledge_base');
    }
    public set useWebCrawlerKnowledgeBase(value: string) {
        this._useWebCrawlerKnowledgeBase = value;
    }
    public resetUseWebCrawlerKnowledgeBase() {
        this._useWebCrawlerKnowledgeBase = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useWebCrawlerKnowledgeBaseInput() {
        return this._useWebCrawlerKnowledgeBase;
    }

    // use_word_add_in_extension - computed: true, optional: true, required: false
    private _useWordAddInExtension?: string; 
    public get useWordAddInExtension() {
        return this.getStringAttribute('use_word_add_in_extension');
    }
    public set useWordAddInExtension(value: string) {
        this._useWordAddInExtension = value;
    }
    public resetUseWordAddInExtension() {
        this._useWordAddInExtension = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useWordAddInExtensionInput() {
        return this._useWordAddInExtension;
    }

    // use_zendesk_action - computed: true, optional: true, required: false
    private _useZendeskAction?: string; 
    public get useZendeskAction() {
        return this.getStringAttribute('use_zendesk_action');
    }
    public set useZendeskAction(value: string) {
        this._useZendeskAction = value;
    }
    public resetUseZendeskAction() {
        this._useZendeskAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useZendeskActionInput() {
        return this._useZendeskAction;
    }

    // view_account_spice_capacity - computed: true, optional: true, required: false
    private _viewAccountSpiceCapacity?: string; 
    public get viewAccountSpiceCapacity() {
        return this.getStringAttribute('view_account_spice_capacity');
    }
    public set viewAccountSpiceCapacity(value: string) {
        this._viewAccountSpiceCapacity = value;
    }
    public resetViewAccountSpiceCapacity() {
        this._viewAccountSpiceCapacity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get viewAccountSpiceCapacityInput() {
        return this._viewAccountSpiceCapacity;
    }

    // web_crawler_knowledge_base - computed: true, optional: true, required: false
    private _webCrawlerKnowledgeBase?: string; 
    public get webCrawlerKnowledgeBase() {
        return this.getStringAttribute('web_crawler_knowledge_base');
    }
    public set webCrawlerKnowledgeBase(value: string) {
        this._webCrawlerKnowledgeBase = value;
    }
    public resetWebCrawlerKnowledgeBase() {
        this._webCrawlerKnowledgeBase = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get webCrawlerKnowledgeBaseInput() {
        return this._webCrawlerKnowledgeBase;
    }

    // zendesk_action - computed: true, optional: true, required: false
    private _zendeskAction?: string; 
    public get zendeskAction() {
        return this.getStringAttribute('zendesk_action');
    }
    public set zendeskAction(value: string) {
        this._zendeskAction = value;
    }
    public resetZendeskAction() {
        this._zendeskAction = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get zendeskActionInput() {
        return this._zendeskAction;
    }
}
export interface TagProperty {
    /**
    * <p>Tag key.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#key CcCustomPermissions#key}
    */
    readonly key?: string;
    /**
    * <p>Tag value.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/quicksight_custom_permissions#value CcCustomPermissions#value}
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
