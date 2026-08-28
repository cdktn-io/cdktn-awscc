// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcCustomPermissionsProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#aws_account_id CcCustomPermissions#aws_account_id}
    */
    readonly awsAccountId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#capabilities CcCustomPermissions#capabilities}
    */
    readonly capabilities?: CcCustomPermissions.CapabilitiesProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#custom_permissions_name CcCustomPermissions#custom_permissions_name}
    */
    readonly customPermissionsName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#tags CcCustomPermissions#tags}
    */
    readonly tags?: CcCustomPermissions.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions awscc_quicksight_custom_permissions}
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
    * @param importFromId The id of the existing CcCustomPermissions that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcCustomPermissions to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_quicksight_custom_permissions", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions awscc_quicksight_custom_permissions} Resource
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
        amazon_bedrock_ars_action: cdktn.stringToTerraform(struct!.amazonBedrockArsAction),
        amazon_bedrock_fs_action: cdktn.stringToTerraform(struct!.amazonBedrockFsAction),
        amazon_bedrock_krs_action: cdktn.stringToTerraform(struct!.amazonBedrockKrsAction),
        amazon_s_three_action: cdktn.stringToTerraform(struct!.amazonSThreeAction),
        analysis: cdktn.stringToTerraform(struct!.analysis),
        approve_flow_share_requests: cdktn.stringToTerraform(struct!.approveFlowShareRequests),
        apps: cdktn.stringToTerraform(struct!.apps),
        asana_action: cdktn.stringToTerraform(struct!.asanaAction),
        automate: cdktn.stringToTerraform(struct!.automate),
        bamboo_hr_action: cdktn.stringToTerraform(struct!.bambooHrAction),
        box_agent_action: cdktn.stringToTerraform(struct!.boxAgentAction),
        build_calculated_field_with_q: cdktn.stringToTerraform(struct!.buildCalculatedFieldWithQ),
        canva_agent_action: cdktn.stringToTerraform(struct!.canvaAgentAction),
        chat_agent: cdktn.stringToTerraform(struct!.chatAgent),
        comprehend_action: cdktn.stringToTerraform(struct!.comprehendAction),
        comprehend_medical_action: cdktn.stringToTerraform(struct!.comprehendMedicalAction),
        confluence_action: cdktn.stringToTerraform(struct!.confluenceAction),
        create_and_update_amazon_bedrock_ars_action: cdktn.stringToTerraform(struct!.createAndUpdateAmazonBedrockArsAction),
        create_and_update_amazon_bedrock_fs_action: cdktn.stringToTerraform(struct!.createAndUpdateAmazonBedrockFsAction),
        create_and_update_amazon_bedrock_krs_action: cdktn.stringToTerraform(struct!.createAndUpdateAmazonBedrockKrsAction),
        create_and_update_amazon_s_three_action: cdktn.stringToTerraform(struct!.createAndUpdateAmazonSThreeAction),
        create_and_update_apps: cdktn.stringToTerraform(struct!.createAndUpdateApps),
        create_and_update_asana_action: cdktn.stringToTerraform(struct!.createAndUpdateAsanaAction),
        create_and_update_bamboo_hr_action: cdktn.stringToTerraform(struct!.createAndUpdateBambooHrAction),
        create_and_update_box_agent_action: cdktn.stringToTerraform(struct!.createAndUpdateBoxAgentAction),
        create_and_update_canva_agent_action: cdktn.stringToTerraform(struct!.createAndUpdateCanvaAgentAction),
        create_and_update_comprehend_action: cdktn.stringToTerraform(struct!.createAndUpdateComprehendAction),
        create_and_update_comprehend_medical_action: cdktn.stringToTerraform(struct!.createAndUpdateComprehendMedicalAction),
        create_and_update_confluence_action: cdktn.stringToTerraform(struct!.createAndUpdateConfluenceAction),
        create_and_update_dashboard_email_reports: cdktn.stringToTerraform(struct!.createAndUpdateDashboardEmailReports),
        create_and_update_data_sources: cdktn.stringToTerraform(struct!.createAndUpdateDataSources),
        create_and_update_datasets: cdktn.stringToTerraform(struct!.createAndUpdateDatasets),
        create_and_update_fact_set_action: cdktn.stringToTerraform(struct!.createAndUpdateFactSetAction),
        create_and_update_generic_http_action: cdktn.stringToTerraform(struct!.createAndUpdateGenericHttpAction),
        create_and_update_github_action: cdktn.stringToTerraform(struct!.createAndUpdateGithubAction),
        create_and_update_google_calendar_action: cdktn.stringToTerraform(struct!.createAndUpdateGoogleCalendarAction),
        create_and_update_hubspot_action: cdktn.stringToTerraform(struct!.createAndUpdateHubspotAction),
        create_and_update_hugging_face_action: cdktn.stringToTerraform(struct!.createAndUpdateHuggingFaceAction),
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
        create_and_update_open_api_action: cdktn.stringToTerraform(struct!.createAndUpdateOpenApiAction),
        create_and_update_pager_duty_action: cdktn.stringToTerraform(struct!.createAndUpdatePagerDutyAction),
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
        create_and_update_slack_action: cdktn.stringToTerraform(struct!.createAndUpdateSlackAction),
        create_and_update_smartsheet_action: cdktn.stringToTerraform(struct!.createAndUpdateSmartsheetAction),
        create_and_update_textract_action: cdktn.stringToTerraform(struct!.createAndUpdateTextractAction),
        create_and_update_themes: cdktn.stringToTerraform(struct!.createAndUpdateThemes),
        create_and_update_threshold_alerts: cdktn.stringToTerraform(struct!.createAndUpdateThresholdAlerts),
        create_and_update_zendesk_action: cdktn.stringToTerraform(struct!.createAndUpdateZendeskAction),
        create_chat_agents: cdktn.stringToTerraform(struct!.createChatAgents),
        create_dashboard_executive_summary_with_q: cdktn.stringToTerraform(struct!.createDashboardExecutiveSummaryWithQ),
        create_shared_folders: cdktn.stringToTerraform(struct!.createSharedFolders),
        create_spaces: cdktn.stringToTerraform(struct!.createSpaces),
        create_spice_dataset: cdktn.stringToTerraform(struct!.createSpiceDataset),
        dashboard: cdktn.stringToTerraform(struct!.dashboard),
        edit_visual_with_q: cdktn.stringToTerraform(struct!.editVisualWithQ),
        export_to_csv: cdktn.stringToTerraform(struct!.exportToCsv),
        export_to_csv_in_scheduled_reports: cdktn.stringToTerraform(struct!.exportToCsvInScheduledReports),
        export_to_excel: cdktn.stringToTerraform(struct!.exportToExcel),
        export_to_excel_in_scheduled_reports: cdktn.stringToTerraform(struct!.exportToExcelInScheduledReports),
        export_to_pdf: cdktn.stringToTerraform(struct!.exportToPdf),
        export_to_pdf_in_scheduled_reports: cdktn.stringToTerraform(struct!.exportToPdfInScheduledReports),
        extension: cdktn.stringToTerraform(struct!.extension),
        fact_set_action: cdktn.stringToTerraform(struct!.factSetAction),
        flow: cdktn.stringToTerraform(struct!.flow),
        generic_http_action: cdktn.stringToTerraform(struct!.genericHttpAction),
        github_action: cdktn.stringToTerraform(struct!.githubAction),
        google_calendar_action: cdktn.stringToTerraform(struct!.googleCalendarAction),
        hubspot_action: cdktn.stringToTerraform(struct!.hubspotAction),
        hugging_face_action: cdktn.stringToTerraform(struct!.huggingFaceAction),
        include_content_in_scheduled_reports_email: cdktn.stringToTerraform(struct!.includeContentInScheduledReportsEmail),
        intercom_action: cdktn.stringToTerraform(struct!.intercomAction),
        invoke_apps_ai_inference: cdktn.stringToTerraform(struct!.invokeAppsAiInference),
        jira_action: cdktn.stringToTerraform(struct!.jiraAction),
        knowledge_base: cdktn.stringToTerraform(struct!.knowledgeBase),
        linear_action: cdktn.stringToTerraform(struct!.linearAction),
        manage_shared_folders: cdktn.stringToTerraform(struct!.manageSharedFolders),
        mcp_action: cdktn.stringToTerraform(struct!.mcpAction),
        monday_action: cdktn.stringToTerraform(struct!.mondayAction),
        ms_exchange_action: cdktn.stringToTerraform(struct!.msExchangeAction),
        ms_teams_action: cdktn.stringToTerraform(struct!.msTeamsAction),
        new_relic_action: cdktn.stringToTerraform(struct!.newRelicAction),
        notion_action: cdktn.stringToTerraform(struct!.notionAction),
        one_drive_action: cdktn.stringToTerraform(struct!.oneDriveAction),
        open_api_action: cdktn.stringToTerraform(struct!.openApiAction),
        pager_duty_action: cdktn.stringToTerraform(struct!.pagerDutyAction),
        perform_flow_ui_task: cdktn.stringToTerraform(struct!.performFlowUiTask),
        print_reports: cdktn.stringToTerraform(struct!.printReports),
        publish_without_approval: cdktn.stringToTerraform(struct!.publishWithoutApproval),
        rename_shared_folders: cdktn.stringToTerraform(struct!.renameSharedFolders),
        research: cdktn.stringToTerraform(struct!.research),
        salesforce_action: cdktn.stringToTerraform(struct!.salesforceAction),
        sand_p_global_energy_action: cdktn.stringToTerraform(struct!.sandPGlobalEnergyAction),
        sand_pgmi_action: cdktn.stringToTerraform(struct!.sandPgmiAction),
        sap_bill_of_material_action: cdktn.stringToTerraform(struct!.sapBillOfMaterialAction),
        sap_business_partner_action: cdktn.stringToTerraform(struct!.sapBusinessPartnerAction),
        sap_material_stock_action: cdktn.stringToTerraform(struct!.sapMaterialStockAction),
        sap_physical_inventory_action: cdktn.stringToTerraform(struct!.sapPhysicalInventoryAction),
        sap_product_master_data_action: cdktn.stringToTerraform(struct!.sapProductMasterDataAction),
        service_now_action: cdktn.stringToTerraform(struct!.serviceNowAction),
        share_amazon_bedrock_ars_action: cdktn.stringToTerraform(struct!.shareAmazonBedrockArsAction),
        share_amazon_bedrock_fs_action: cdktn.stringToTerraform(struct!.shareAmazonBedrockFsAction),
        share_amazon_bedrock_krs_action: cdktn.stringToTerraform(struct!.shareAmazonBedrockKrsAction),
        share_amazon_s_three_action: cdktn.stringToTerraform(struct!.shareAmazonSThreeAction),
        share_analyses: cdktn.stringToTerraform(struct!.shareAnalyses),
        share_apps: cdktn.stringToTerraform(struct!.shareApps),
        share_asana_action: cdktn.stringToTerraform(struct!.shareAsanaAction),
        share_bamboo_hr_action: cdktn.stringToTerraform(struct!.shareBambooHrAction),
        share_box_agent_action: cdktn.stringToTerraform(struct!.shareBoxAgentAction),
        share_canva_agent_action: cdktn.stringToTerraform(struct!.shareCanvaAgentAction),
        share_chat_agents: cdktn.stringToTerraform(struct!.shareChatAgents),
        share_comprehend_action: cdktn.stringToTerraform(struct!.shareComprehendAction),
        share_comprehend_medical_action: cdktn.stringToTerraform(struct!.shareComprehendMedicalAction),
        share_confluence_action: cdktn.stringToTerraform(struct!.shareConfluenceAction),
        share_dashboards: cdktn.stringToTerraform(struct!.shareDashboards),
        share_data_sources: cdktn.stringToTerraform(struct!.shareDataSources),
        share_datasets: cdktn.stringToTerraform(struct!.shareDatasets),
        share_fact_set_action: cdktn.stringToTerraform(struct!.shareFactSetAction),
        share_generic_http_action: cdktn.stringToTerraform(struct!.shareGenericHttpAction),
        share_github_action: cdktn.stringToTerraform(struct!.shareGithubAction),
        share_google_calendar_action: cdktn.stringToTerraform(struct!.shareGoogleCalendarAction),
        share_hubspot_action: cdktn.stringToTerraform(struct!.shareHubspotAction),
        share_hugging_face_action: cdktn.stringToTerraform(struct!.shareHuggingFaceAction),
        share_intercom_action: cdktn.stringToTerraform(struct!.shareIntercomAction),
        share_jira_action: cdktn.stringToTerraform(struct!.shareJiraAction),
        share_knowledge_bases: cdktn.stringToTerraform(struct!.shareKnowledgeBases),
        share_linear_action: cdktn.stringToTerraform(struct!.shareLinearAction),
        share_mcp_action: cdktn.stringToTerraform(struct!.shareMcpAction),
        share_monday_action: cdktn.stringToTerraform(struct!.shareMondayAction),
        share_ms_exchange_action: cdktn.stringToTerraform(struct!.shareMsExchangeAction),
        share_ms_teams_action: cdktn.stringToTerraform(struct!.shareMsTeamsAction),
        share_new_relic_action: cdktn.stringToTerraform(struct!.shareNewRelicAction),
        share_notion_action: cdktn.stringToTerraform(struct!.shareNotionAction),
        share_one_drive_action: cdktn.stringToTerraform(struct!.shareOneDriveAction),
        share_open_api_action: cdktn.stringToTerraform(struct!.shareOpenApiAction),
        share_pager_duty_action: cdktn.stringToTerraform(struct!.sharePagerDutyAction),
        share_point_action: cdktn.stringToTerraform(struct!.sharePointAction),
        share_salesforce_action: cdktn.stringToTerraform(struct!.shareSalesforceAction),
        share_sand_p_global_energy_action: cdktn.stringToTerraform(struct!.shareSandPGlobalEnergyAction),
        share_sand_pgmi_action: cdktn.stringToTerraform(struct!.shareSandPgmiAction),
        share_sap_bill_of_material_action: cdktn.stringToTerraform(struct!.shareSapBillOfMaterialAction),
        share_sap_business_partner_action: cdktn.stringToTerraform(struct!.shareSapBusinessPartnerAction),
        share_sap_material_stock_action: cdktn.stringToTerraform(struct!.shareSapMaterialStockAction),
        share_sap_physical_inventory_action: cdktn.stringToTerraform(struct!.shareSapPhysicalInventoryAction),
        share_sap_product_master_data_action: cdktn.stringToTerraform(struct!.shareSapProductMasterDataAction),
        share_service_now_action: cdktn.stringToTerraform(struct!.shareServiceNowAction),
        share_share_point_action: cdktn.stringToTerraform(struct!.shareSharePointAction),
        share_slack_action: cdktn.stringToTerraform(struct!.shareSlackAction),
        share_smartsheet_action: cdktn.stringToTerraform(struct!.shareSmartsheetAction),
        share_spaces: cdktn.stringToTerraform(struct!.shareSpaces),
        share_textract_action: cdktn.stringToTerraform(struct!.shareTextractAction),
        share_zendesk_action: cdktn.stringToTerraform(struct!.shareZendeskAction),
        slack_action: cdktn.stringToTerraform(struct!.slackAction),
        smartsheet_action: cdktn.stringToTerraform(struct!.smartsheetAction),
        space: cdktn.stringToTerraform(struct!.space),
        subscribe_dashboard_email_reports: cdktn.stringToTerraform(struct!.subscribeDashboardEmailReports),
        textract_action: cdktn.stringToTerraform(struct!.textractAction),
        topic: cdktn.stringToTerraform(struct!.topic),
        use_agent_web_search: cdktn.stringToTerraform(struct!.useAgentWebSearch),
        use_amazon_bedrock_ars_action: cdktn.stringToTerraform(struct!.useAmazonBedrockArsAction),
        use_amazon_bedrock_fs_action: cdktn.stringToTerraform(struct!.useAmazonBedrockFsAction),
        use_amazon_bedrock_krs_action: cdktn.stringToTerraform(struct!.useAmazonBedrockKrsAction),
        use_amazon_s_three_action: cdktn.stringToTerraform(struct!.useAmazonSThreeAction),
        use_asana_action: cdktn.stringToTerraform(struct!.useAsanaAction),
        use_bamboo_hr_action: cdktn.stringToTerraform(struct!.useBambooHrAction),
        use_bedrock_models: cdktn.stringToTerraform(struct!.useBedrockModels),
        use_box_agent_action: cdktn.stringToTerraform(struct!.useBoxAgentAction),
        use_canva_agent_action: cdktn.stringToTerraform(struct!.useCanvaAgentAction),
        use_comprehend_action: cdktn.stringToTerraform(struct!.useComprehendAction),
        use_comprehend_medical_action: cdktn.stringToTerraform(struct!.useComprehendMedicalAction),
        use_confluence_action: cdktn.stringToTerraform(struct!.useConfluenceAction),
        use_fact_set_action: cdktn.stringToTerraform(struct!.useFactSetAction),
        use_generic_http_action: cdktn.stringToTerraform(struct!.useGenericHttpAction),
        use_github_action: cdktn.stringToTerraform(struct!.useGithubAction),
        use_google_calendar_action: cdktn.stringToTerraform(struct!.useGoogleCalendarAction),
        use_hubspot_action: cdktn.stringToTerraform(struct!.useHubspotAction),
        use_hugging_face_action: cdktn.stringToTerraform(struct!.useHuggingFaceAction),
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
        use_open_api_action: cdktn.stringToTerraform(struct!.useOpenApiAction),
        use_pager_duty_action: cdktn.stringToTerraform(struct!.usePagerDutyAction),
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
        use_slack_action: cdktn.stringToTerraform(struct!.useSlackAction),
        use_smartsheet_action: cdktn.stringToTerraform(struct!.useSmartsheetAction),
        use_textract_action: cdktn.stringToTerraform(struct!.useTextractAction),
        use_zendesk_action: cdktn.stringToTerraform(struct!.useZendeskAction),
        view_account_spice_capacity: cdktn.stringToTerraform(struct!.viewAccountSpiceCapacity),
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
        box_agent_action: {
            value: cdktn.stringToHclTerraform(struct!.boxAgentAction),
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
        create_and_update_box_agent_action: {
            value: cdktn.stringToHclTerraform(struct!.createAndUpdateBoxAgentAction),
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
        create_and_update_zendesk_action: {
            value: cdktn.stringToHclTerraform(struct!.createAndUpdateZendeskAction),
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
        create_shared_folders: {
            value: cdktn.stringToHclTerraform(struct!.createSharedFolders),
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
        create_spice_dataset: {
            value: cdktn.stringToHclTerraform(struct!.createSpiceDataset),
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
        edit_visual_with_q: {
            value: cdktn.stringToHclTerraform(struct!.editVisualWithQ),
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
        github_action: {
            value: cdktn.stringToHclTerraform(struct!.githubAction),
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
        open_api_action: {
            value: cdktn.stringToHclTerraform(struct!.openApiAction),
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
        perform_flow_ui_task: {
            value: cdktn.stringToHclTerraform(struct!.performFlowUiTask),
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
        salesforce_action: {
            value: cdktn.stringToHclTerraform(struct!.salesforceAction),
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
        service_now_action: {
            value: cdktn.stringToHclTerraform(struct!.serviceNowAction),
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
        share_bamboo_hr_action: {
            value: cdktn.stringToHclTerraform(struct!.shareBambooHrAction),
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
        share_datasets: {
            value: cdktn.stringToHclTerraform(struct!.shareDatasets),
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
        share_generic_http_action: {
            value: cdktn.stringToHclTerraform(struct!.shareGenericHttpAction),
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
        share_google_calendar_action: {
            value: cdktn.stringToHclTerraform(struct!.shareGoogleCalendarAction),
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
        share_open_api_action: {
            value: cdktn.stringToHclTerraform(struct!.shareOpenApiAction),
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
        share_point_action: {
            value: cdktn.stringToHclTerraform(struct!.sharePointAction),
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
        share_share_point_action: {
            value: cdktn.stringToHclTerraform(struct!.shareSharePointAction),
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
        share_spaces: {
            value: cdktn.stringToHclTerraform(struct!.shareSpaces),
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
        space: {
            value: cdktn.stringToHclTerraform(struct!.space),
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
        textract_action: {
            value: cdktn.stringToHclTerraform(struct!.textractAction),
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
        use_open_api_action: {
            value: cdktn.stringToHclTerraform(struct!.useOpenApiAction),
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#access_apps_native_data_store CcCustomPermissions#access_apps_native_data_store}
    */
    readonly accessAppsNativeDataStore?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#action CcCustomPermissions#action}
    */
    readonly action?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#add_or_run_anomaly_detection_for_analyses CcCustomPermissions#add_or_run_anomaly_detection_for_analyses}
    */
    readonly addOrRunAnomalyDetectionForAnalyses?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#amazon_bedrock_ars_action CcCustomPermissions#amazon_bedrock_ars_action}
    */
    readonly amazonBedrockArsAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#amazon_bedrock_fs_action CcCustomPermissions#amazon_bedrock_fs_action}
    */
    readonly amazonBedrockFsAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#amazon_bedrock_krs_action CcCustomPermissions#amazon_bedrock_krs_action}
    */
    readonly amazonBedrockKrsAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#amazon_s_three_action CcCustomPermissions#amazon_s_three_action}
    */
    readonly amazonSThreeAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#analysis CcCustomPermissions#analysis}
    */
    readonly analysis?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#approve_flow_share_requests CcCustomPermissions#approve_flow_share_requests}
    */
    readonly approveFlowShareRequests?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#apps CcCustomPermissions#apps}
    */
    readonly apps?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#asana_action CcCustomPermissions#asana_action}
    */
    readonly asanaAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#automate CcCustomPermissions#automate}
    */
    readonly automate?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#bamboo_hr_action CcCustomPermissions#bamboo_hr_action}
    */
    readonly bambooHrAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#box_agent_action CcCustomPermissions#box_agent_action}
    */
    readonly boxAgentAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#build_calculated_field_with_q CcCustomPermissions#build_calculated_field_with_q}
    */
    readonly buildCalculatedFieldWithQ?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#canva_agent_action CcCustomPermissions#canva_agent_action}
    */
    readonly canvaAgentAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#chat_agent CcCustomPermissions#chat_agent}
    */
    readonly chatAgent?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#comprehend_action CcCustomPermissions#comprehend_action}
    */
    readonly comprehendAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#comprehend_medical_action CcCustomPermissions#comprehend_medical_action}
    */
    readonly comprehendMedicalAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#confluence_action CcCustomPermissions#confluence_action}
    */
    readonly confluenceAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_amazon_bedrock_ars_action CcCustomPermissions#create_and_update_amazon_bedrock_ars_action}
    */
    readonly createAndUpdateAmazonBedrockArsAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_amazon_bedrock_fs_action CcCustomPermissions#create_and_update_amazon_bedrock_fs_action}
    */
    readonly createAndUpdateAmazonBedrockFsAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_amazon_bedrock_krs_action CcCustomPermissions#create_and_update_amazon_bedrock_krs_action}
    */
    readonly createAndUpdateAmazonBedrockKrsAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_amazon_s_three_action CcCustomPermissions#create_and_update_amazon_s_three_action}
    */
    readonly createAndUpdateAmazonSThreeAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_apps CcCustomPermissions#create_and_update_apps}
    */
    readonly createAndUpdateApps?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_asana_action CcCustomPermissions#create_and_update_asana_action}
    */
    readonly createAndUpdateAsanaAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_bamboo_hr_action CcCustomPermissions#create_and_update_bamboo_hr_action}
    */
    readonly createAndUpdateBambooHrAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_box_agent_action CcCustomPermissions#create_and_update_box_agent_action}
    */
    readonly createAndUpdateBoxAgentAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_canva_agent_action CcCustomPermissions#create_and_update_canva_agent_action}
    */
    readonly createAndUpdateCanvaAgentAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_comprehend_action CcCustomPermissions#create_and_update_comprehend_action}
    */
    readonly createAndUpdateComprehendAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_comprehend_medical_action CcCustomPermissions#create_and_update_comprehend_medical_action}
    */
    readonly createAndUpdateComprehendMedicalAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_confluence_action CcCustomPermissions#create_and_update_confluence_action}
    */
    readonly createAndUpdateConfluenceAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_dashboard_email_reports CcCustomPermissions#create_and_update_dashboard_email_reports}
    */
    readonly createAndUpdateDashboardEmailReports?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_data_sources CcCustomPermissions#create_and_update_data_sources}
    */
    readonly createAndUpdateDataSources?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_datasets CcCustomPermissions#create_and_update_datasets}
    */
    readonly createAndUpdateDatasets?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_fact_set_action CcCustomPermissions#create_and_update_fact_set_action}
    */
    readonly createAndUpdateFactSetAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_generic_http_action CcCustomPermissions#create_and_update_generic_http_action}
    */
    readonly createAndUpdateGenericHttpAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_github_action CcCustomPermissions#create_and_update_github_action}
    */
    readonly createAndUpdateGithubAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_google_calendar_action CcCustomPermissions#create_and_update_google_calendar_action}
    */
    readonly createAndUpdateGoogleCalendarAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_hubspot_action CcCustomPermissions#create_and_update_hubspot_action}
    */
    readonly createAndUpdateHubspotAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_hugging_face_action CcCustomPermissions#create_and_update_hugging_face_action}
    */
    readonly createAndUpdateHuggingFaceAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_intercom_action CcCustomPermissions#create_and_update_intercom_action}
    */
    readonly createAndUpdateIntercomAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_jira_action CcCustomPermissions#create_and_update_jira_action}
    */
    readonly createAndUpdateJiraAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_knowledge_bases CcCustomPermissions#create_and_update_knowledge_bases}
    */
    readonly createAndUpdateKnowledgeBases?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_linear_action CcCustomPermissions#create_and_update_linear_action}
    */
    readonly createAndUpdateLinearAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_mcp_action CcCustomPermissions#create_and_update_mcp_action}
    */
    readonly createAndUpdateMcpAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_monday_action CcCustomPermissions#create_and_update_monday_action}
    */
    readonly createAndUpdateMondayAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_ms_exchange_action CcCustomPermissions#create_and_update_ms_exchange_action}
    */
    readonly createAndUpdateMsExchangeAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_ms_teams_action CcCustomPermissions#create_and_update_ms_teams_action}
    */
    readonly createAndUpdateMsTeamsAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_new_relic_action CcCustomPermissions#create_and_update_new_relic_action}
    */
    readonly createAndUpdateNewRelicAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_notion_action CcCustomPermissions#create_and_update_notion_action}
    */
    readonly createAndUpdateNotionAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_one_drive_action CcCustomPermissions#create_and_update_one_drive_action}
    */
    readonly createAndUpdateOneDriveAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_open_api_action CcCustomPermissions#create_and_update_open_api_action}
    */
    readonly createAndUpdateOpenApiAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_pager_duty_action CcCustomPermissions#create_and_update_pager_duty_action}
    */
    readonly createAndUpdatePagerDutyAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_salesforce_action CcCustomPermissions#create_and_update_salesforce_action}
    */
    readonly createAndUpdateSalesforceAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_sand_p_global_energy_action CcCustomPermissions#create_and_update_sand_p_global_energy_action}
    */
    readonly createAndUpdateSandPGlobalEnergyAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_sand_pgmi_action CcCustomPermissions#create_and_update_sand_pgmi_action}
    */
    readonly createAndUpdateSandPgmiAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_sap_bill_of_material_action CcCustomPermissions#create_and_update_sap_bill_of_material_action}
    */
    readonly createAndUpdateSapBillOfMaterialAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_sap_business_partner_action CcCustomPermissions#create_and_update_sap_business_partner_action}
    */
    readonly createAndUpdateSapBusinessPartnerAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_sap_material_stock_action CcCustomPermissions#create_and_update_sap_material_stock_action}
    */
    readonly createAndUpdateSapMaterialStockAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_sap_physical_inventory_action CcCustomPermissions#create_and_update_sap_physical_inventory_action}
    */
    readonly createAndUpdateSapPhysicalInventoryAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_sap_product_master_data_action CcCustomPermissions#create_and_update_sap_product_master_data_action}
    */
    readonly createAndUpdateSapProductMasterDataAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_service_now_action CcCustomPermissions#create_and_update_service_now_action}
    */
    readonly createAndUpdateServiceNowAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_share_point_action CcCustomPermissions#create_and_update_share_point_action}
    */
    readonly createAndUpdateSharePointAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_slack_action CcCustomPermissions#create_and_update_slack_action}
    */
    readonly createAndUpdateSlackAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_smartsheet_action CcCustomPermissions#create_and_update_smartsheet_action}
    */
    readonly createAndUpdateSmartsheetAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_textract_action CcCustomPermissions#create_and_update_textract_action}
    */
    readonly createAndUpdateTextractAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_themes CcCustomPermissions#create_and_update_themes}
    */
    readonly createAndUpdateThemes?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_threshold_alerts CcCustomPermissions#create_and_update_threshold_alerts}
    */
    readonly createAndUpdateThresholdAlerts?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_and_update_zendesk_action CcCustomPermissions#create_and_update_zendesk_action}
    */
    readonly createAndUpdateZendeskAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_chat_agents CcCustomPermissions#create_chat_agents}
    */
    readonly createChatAgents?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_dashboard_executive_summary_with_q CcCustomPermissions#create_dashboard_executive_summary_with_q}
    */
    readonly createDashboardExecutiveSummaryWithQ?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_shared_folders CcCustomPermissions#create_shared_folders}
    */
    readonly createSharedFolders?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_spaces CcCustomPermissions#create_spaces}
    */
    readonly createSpaces?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#create_spice_dataset CcCustomPermissions#create_spice_dataset}
    */
    readonly createSpiceDataset?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#dashboard CcCustomPermissions#dashboard}
    */
    readonly dashboard?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#edit_visual_with_q CcCustomPermissions#edit_visual_with_q}
    */
    readonly editVisualWithQ?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#export_to_csv CcCustomPermissions#export_to_csv}
    */
    readonly exportToCsv?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#export_to_csv_in_scheduled_reports CcCustomPermissions#export_to_csv_in_scheduled_reports}
    */
    readonly exportToCsvInScheduledReports?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#export_to_excel CcCustomPermissions#export_to_excel}
    */
    readonly exportToExcel?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#export_to_excel_in_scheduled_reports CcCustomPermissions#export_to_excel_in_scheduled_reports}
    */
    readonly exportToExcelInScheduledReports?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#export_to_pdf CcCustomPermissions#export_to_pdf}
    */
    readonly exportToPdf?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#export_to_pdf_in_scheduled_reports CcCustomPermissions#export_to_pdf_in_scheduled_reports}
    */
    readonly exportToPdfInScheduledReports?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#extension CcCustomPermissions#extension}
    */
    readonly extension?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#fact_set_action CcCustomPermissions#fact_set_action}
    */
    readonly factSetAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#flow CcCustomPermissions#flow}
    */
    readonly flow?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#generic_http_action CcCustomPermissions#generic_http_action}
    */
    readonly genericHttpAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#github_action CcCustomPermissions#github_action}
    */
    readonly githubAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#google_calendar_action CcCustomPermissions#google_calendar_action}
    */
    readonly googleCalendarAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#hubspot_action CcCustomPermissions#hubspot_action}
    */
    readonly hubspotAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#hugging_face_action CcCustomPermissions#hugging_face_action}
    */
    readonly huggingFaceAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#include_content_in_scheduled_reports_email CcCustomPermissions#include_content_in_scheduled_reports_email}
    */
    readonly includeContentInScheduledReportsEmail?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#intercom_action CcCustomPermissions#intercom_action}
    */
    readonly intercomAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#invoke_apps_ai_inference CcCustomPermissions#invoke_apps_ai_inference}
    */
    readonly invokeAppsAiInference?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#jira_action CcCustomPermissions#jira_action}
    */
    readonly jiraAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#knowledge_base CcCustomPermissions#knowledge_base}
    */
    readonly knowledgeBase?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#linear_action CcCustomPermissions#linear_action}
    */
    readonly linearAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#manage_shared_folders CcCustomPermissions#manage_shared_folders}
    */
    readonly manageSharedFolders?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#mcp_action CcCustomPermissions#mcp_action}
    */
    readonly mcpAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#monday_action CcCustomPermissions#monday_action}
    */
    readonly mondayAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#ms_exchange_action CcCustomPermissions#ms_exchange_action}
    */
    readonly msExchangeAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#ms_teams_action CcCustomPermissions#ms_teams_action}
    */
    readonly msTeamsAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#new_relic_action CcCustomPermissions#new_relic_action}
    */
    readonly newRelicAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#notion_action CcCustomPermissions#notion_action}
    */
    readonly notionAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#one_drive_action CcCustomPermissions#one_drive_action}
    */
    readonly oneDriveAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#open_api_action CcCustomPermissions#open_api_action}
    */
    readonly openApiAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#pager_duty_action CcCustomPermissions#pager_duty_action}
    */
    readonly pagerDutyAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#perform_flow_ui_task CcCustomPermissions#perform_flow_ui_task}
    */
    readonly performFlowUiTask?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#print_reports CcCustomPermissions#print_reports}
    */
    readonly printReports?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#publish_without_approval CcCustomPermissions#publish_without_approval}
    */
    readonly publishWithoutApproval?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#rename_shared_folders CcCustomPermissions#rename_shared_folders}
    */
    readonly renameSharedFolders?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#research CcCustomPermissions#research}
    */
    readonly research?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#salesforce_action CcCustomPermissions#salesforce_action}
    */
    readonly salesforceAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#sand_p_global_energy_action CcCustomPermissions#sand_p_global_energy_action}
    */
    readonly sandPGlobalEnergyAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#sand_pgmi_action CcCustomPermissions#sand_pgmi_action}
    */
    readonly sandPgmiAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#sap_bill_of_material_action CcCustomPermissions#sap_bill_of_material_action}
    */
    readonly sapBillOfMaterialAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#sap_business_partner_action CcCustomPermissions#sap_business_partner_action}
    */
    readonly sapBusinessPartnerAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#sap_material_stock_action CcCustomPermissions#sap_material_stock_action}
    */
    readonly sapMaterialStockAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#sap_physical_inventory_action CcCustomPermissions#sap_physical_inventory_action}
    */
    readonly sapPhysicalInventoryAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#sap_product_master_data_action CcCustomPermissions#sap_product_master_data_action}
    */
    readonly sapProductMasterDataAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#service_now_action CcCustomPermissions#service_now_action}
    */
    readonly serviceNowAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_amazon_bedrock_ars_action CcCustomPermissions#share_amazon_bedrock_ars_action}
    */
    readonly shareAmazonBedrockArsAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_amazon_bedrock_fs_action CcCustomPermissions#share_amazon_bedrock_fs_action}
    */
    readonly shareAmazonBedrockFsAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_amazon_bedrock_krs_action CcCustomPermissions#share_amazon_bedrock_krs_action}
    */
    readonly shareAmazonBedrockKrsAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_amazon_s_three_action CcCustomPermissions#share_amazon_s_three_action}
    */
    readonly shareAmazonSThreeAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_analyses CcCustomPermissions#share_analyses}
    */
    readonly shareAnalyses?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_apps CcCustomPermissions#share_apps}
    */
    readonly shareApps?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_asana_action CcCustomPermissions#share_asana_action}
    */
    readonly shareAsanaAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_bamboo_hr_action CcCustomPermissions#share_bamboo_hr_action}
    */
    readonly shareBambooHrAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_box_agent_action CcCustomPermissions#share_box_agent_action}
    */
    readonly shareBoxAgentAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_canva_agent_action CcCustomPermissions#share_canva_agent_action}
    */
    readonly shareCanvaAgentAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_chat_agents CcCustomPermissions#share_chat_agents}
    */
    readonly shareChatAgents?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_comprehend_action CcCustomPermissions#share_comprehend_action}
    */
    readonly shareComprehendAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_comprehend_medical_action CcCustomPermissions#share_comprehend_medical_action}
    */
    readonly shareComprehendMedicalAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_confluence_action CcCustomPermissions#share_confluence_action}
    */
    readonly shareConfluenceAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_dashboards CcCustomPermissions#share_dashboards}
    */
    readonly shareDashboards?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_data_sources CcCustomPermissions#share_data_sources}
    */
    readonly shareDataSources?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_datasets CcCustomPermissions#share_datasets}
    */
    readonly shareDatasets?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_fact_set_action CcCustomPermissions#share_fact_set_action}
    */
    readonly shareFactSetAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_generic_http_action CcCustomPermissions#share_generic_http_action}
    */
    readonly shareGenericHttpAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_github_action CcCustomPermissions#share_github_action}
    */
    readonly shareGithubAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_google_calendar_action CcCustomPermissions#share_google_calendar_action}
    */
    readonly shareGoogleCalendarAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_hubspot_action CcCustomPermissions#share_hubspot_action}
    */
    readonly shareHubspotAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_hugging_face_action CcCustomPermissions#share_hugging_face_action}
    */
    readonly shareHuggingFaceAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_intercom_action CcCustomPermissions#share_intercom_action}
    */
    readonly shareIntercomAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_jira_action CcCustomPermissions#share_jira_action}
    */
    readonly shareJiraAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_knowledge_bases CcCustomPermissions#share_knowledge_bases}
    */
    readonly shareKnowledgeBases?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_linear_action CcCustomPermissions#share_linear_action}
    */
    readonly shareLinearAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_mcp_action CcCustomPermissions#share_mcp_action}
    */
    readonly shareMcpAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_monday_action CcCustomPermissions#share_monday_action}
    */
    readonly shareMondayAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_ms_exchange_action CcCustomPermissions#share_ms_exchange_action}
    */
    readonly shareMsExchangeAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_ms_teams_action CcCustomPermissions#share_ms_teams_action}
    */
    readonly shareMsTeamsAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_new_relic_action CcCustomPermissions#share_new_relic_action}
    */
    readonly shareNewRelicAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_notion_action CcCustomPermissions#share_notion_action}
    */
    readonly shareNotionAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_one_drive_action CcCustomPermissions#share_one_drive_action}
    */
    readonly shareOneDriveAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_open_api_action CcCustomPermissions#share_open_api_action}
    */
    readonly shareOpenApiAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_pager_duty_action CcCustomPermissions#share_pager_duty_action}
    */
    readonly sharePagerDutyAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_point_action CcCustomPermissions#share_point_action}
    */
    readonly sharePointAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_salesforce_action CcCustomPermissions#share_salesforce_action}
    */
    readonly shareSalesforceAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_sand_p_global_energy_action CcCustomPermissions#share_sand_p_global_energy_action}
    */
    readonly shareSandPGlobalEnergyAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_sand_pgmi_action CcCustomPermissions#share_sand_pgmi_action}
    */
    readonly shareSandPgmiAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_sap_bill_of_material_action CcCustomPermissions#share_sap_bill_of_material_action}
    */
    readonly shareSapBillOfMaterialAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_sap_business_partner_action CcCustomPermissions#share_sap_business_partner_action}
    */
    readonly shareSapBusinessPartnerAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_sap_material_stock_action CcCustomPermissions#share_sap_material_stock_action}
    */
    readonly shareSapMaterialStockAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_sap_physical_inventory_action CcCustomPermissions#share_sap_physical_inventory_action}
    */
    readonly shareSapPhysicalInventoryAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_sap_product_master_data_action CcCustomPermissions#share_sap_product_master_data_action}
    */
    readonly shareSapProductMasterDataAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_service_now_action CcCustomPermissions#share_service_now_action}
    */
    readonly shareServiceNowAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_share_point_action CcCustomPermissions#share_share_point_action}
    */
    readonly shareSharePointAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_slack_action CcCustomPermissions#share_slack_action}
    */
    readonly shareSlackAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_smartsheet_action CcCustomPermissions#share_smartsheet_action}
    */
    readonly shareSmartsheetAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_spaces CcCustomPermissions#share_spaces}
    */
    readonly shareSpaces?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_textract_action CcCustomPermissions#share_textract_action}
    */
    readonly shareTextractAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#share_zendesk_action CcCustomPermissions#share_zendesk_action}
    */
    readonly shareZendeskAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#slack_action CcCustomPermissions#slack_action}
    */
    readonly slackAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#smartsheet_action CcCustomPermissions#smartsheet_action}
    */
    readonly smartsheetAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#space CcCustomPermissions#space}
    */
    readonly space?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#subscribe_dashboard_email_reports CcCustomPermissions#subscribe_dashboard_email_reports}
    */
    readonly subscribeDashboardEmailReports?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#textract_action CcCustomPermissions#textract_action}
    */
    readonly textractAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#topic CcCustomPermissions#topic}
    */
    readonly topic?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_agent_web_search CcCustomPermissions#use_agent_web_search}
    */
    readonly useAgentWebSearch?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_amazon_bedrock_ars_action CcCustomPermissions#use_amazon_bedrock_ars_action}
    */
    readonly useAmazonBedrockArsAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_amazon_bedrock_fs_action CcCustomPermissions#use_amazon_bedrock_fs_action}
    */
    readonly useAmazonBedrockFsAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_amazon_bedrock_krs_action CcCustomPermissions#use_amazon_bedrock_krs_action}
    */
    readonly useAmazonBedrockKrsAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_amazon_s_three_action CcCustomPermissions#use_amazon_s_three_action}
    */
    readonly useAmazonSThreeAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_asana_action CcCustomPermissions#use_asana_action}
    */
    readonly useAsanaAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_bamboo_hr_action CcCustomPermissions#use_bamboo_hr_action}
    */
    readonly useBambooHrAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_bedrock_models CcCustomPermissions#use_bedrock_models}
    */
    readonly useBedrockModels?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_box_agent_action CcCustomPermissions#use_box_agent_action}
    */
    readonly useBoxAgentAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_canva_agent_action CcCustomPermissions#use_canva_agent_action}
    */
    readonly useCanvaAgentAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_comprehend_action CcCustomPermissions#use_comprehend_action}
    */
    readonly useComprehendAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_comprehend_medical_action CcCustomPermissions#use_comprehend_medical_action}
    */
    readonly useComprehendMedicalAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_confluence_action CcCustomPermissions#use_confluence_action}
    */
    readonly useConfluenceAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_fact_set_action CcCustomPermissions#use_fact_set_action}
    */
    readonly useFactSetAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_generic_http_action CcCustomPermissions#use_generic_http_action}
    */
    readonly useGenericHttpAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_github_action CcCustomPermissions#use_github_action}
    */
    readonly useGithubAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_google_calendar_action CcCustomPermissions#use_google_calendar_action}
    */
    readonly useGoogleCalendarAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_hubspot_action CcCustomPermissions#use_hubspot_action}
    */
    readonly useHubspotAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_hugging_face_action CcCustomPermissions#use_hugging_face_action}
    */
    readonly useHuggingFaceAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_intercom_action CcCustomPermissions#use_intercom_action}
    */
    readonly useIntercomAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_jira_action CcCustomPermissions#use_jira_action}
    */
    readonly useJiraAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_linear_action CcCustomPermissions#use_linear_action}
    */
    readonly useLinearAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_mcp_action CcCustomPermissions#use_mcp_action}
    */
    readonly useMcpAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_monday_action CcCustomPermissions#use_monday_action}
    */
    readonly useMondayAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_ms_exchange_action CcCustomPermissions#use_ms_exchange_action}
    */
    readonly useMsExchangeAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_ms_teams_action CcCustomPermissions#use_ms_teams_action}
    */
    readonly useMsTeamsAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_new_relic_action CcCustomPermissions#use_new_relic_action}
    */
    readonly useNewRelicAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_notion_action CcCustomPermissions#use_notion_action}
    */
    readonly useNotionAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_one_drive_action CcCustomPermissions#use_one_drive_action}
    */
    readonly useOneDriveAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_open_api_action CcCustomPermissions#use_open_api_action}
    */
    readonly useOpenApiAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_pager_duty_action CcCustomPermissions#use_pager_duty_action}
    */
    readonly usePagerDutyAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_salesforce_action CcCustomPermissions#use_salesforce_action}
    */
    readonly useSalesforceAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_sand_p_global_energy_action CcCustomPermissions#use_sand_p_global_energy_action}
    */
    readonly useSandPGlobalEnergyAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_sand_pgmi_action CcCustomPermissions#use_sand_pgmi_action}
    */
    readonly useSandPgmiAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_sap_bill_of_material_action CcCustomPermissions#use_sap_bill_of_material_action}
    */
    readonly useSapBillOfMaterialAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_sap_business_partner_action CcCustomPermissions#use_sap_business_partner_action}
    */
    readonly useSapBusinessPartnerAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_sap_material_stock_action CcCustomPermissions#use_sap_material_stock_action}
    */
    readonly useSapMaterialStockAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_sap_physical_inventory_action CcCustomPermissions#use_sap_physical_inventory_action}
    */
    readonly useSapPhysicalInventoryAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_sap_product_master_data_action CcCustomPermissions#use_sap_product_master_data_action}
    */
    readonly useSapProductMasterDataAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_service_now_action CcCustomPermissions#use_service_now_action}
    */
    readonly useServiceNowAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_share_point_action CcCustomPermissions#use_share_point_action}
    */
    readonly useSharePointAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_slack_action CcCustomPermissions#use_slack_action}
    */
    readonly useSlackAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_smartsheet_action CcCustomPermissions#use_smartsheet_action}
    */
    readonly useSmartsheetAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_textract_action CcCustomPermissions#use_textract_action}
    */
    readonly useTextractAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#use_zendesk_action CcCustomPermissions#use_zendesk_action}
    */
    readonly useZendeskAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#view_account_spice_capacity CcCustomPermissions#view_account_spice_capacity}
    */
    readonly viewAccountSpiceCapacity?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#zendesk_action CcCustomPermissions#zendesk_action}
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
        if (this._automate !== undefined) {
            hasAnyValues = true;
            internalValueResult.automate = this._automate;
        }
        if (this._bambooHrAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.bambooHrAction = this._bambooHrAction;
        }
        if (this._boxAgentAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.boxAgentAction = this._boxAgentAction;
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
        if (this._createAndUpdateBoxAgentAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.createAndUpdateBoxAgentAction = this._createAndUpdateBoxAgentAction;
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
        if (this._createAndUpdateHubspotAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.createAndUpdateHubspotAction = this._createAndUpdateHubspotAction;
        }
        if (this._createAndUpdateHuggingFaceAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.createAndUpdateHuggingFaceAction = this._createAndUpdateHuggingFaceAction;
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
        if (this._createAndUpdateOpenApiAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.createAndUpdateOpenApiAction = this._createAndUpdateOpenApiAction;
        }
        if (this._createAndUpdatePagerDutyAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.createAndUpdatePagerDutyAction = this._createAndUpdatePagerDutyAction;
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
        if (this._createAndUpdateZendeskAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.createAndUpdateZendeskAction = this._createAndUpdateZendeskAction;
        }
        if (this._createChatAgents !== undefined) {
            hasAnyValues = true;
            internalValueResult.createChatAgents = this._createChatAgents;
        }
        if (this._createDashboardExecutiveSummaryWithQ !== undefined) {
            hasAnyValues = true;
            internalValueResult.createDashboardExecutiveSummaryWithQ = this._createDashboardExecutiveSummaryWithQ;
        }
        if (this._createSharedFolders !== undefined) {
            hasAnyValues = true;
            internalValueResult.createSharedFolders = this._createSharedFolders;
        }
        if (this._createSpaces !== undefined) {
            hasAnyValues = true;
            internalValueResult.createSpaces = this._createSpaces;
        }
        if (this._createSpiceDataset !== undefined) {
            hasAnyValues = true;
            internalValueResult.createSpiceDataset = this._createSpiceDataset;
        }
        if (this._dashboard !== undefined) {
            hasAnyValues = true;
            internalValueResult.dashboard = this._dashboard;
        }
        if (this._editVisualWithQ !== undefined) {
            hasAnyValues = true;
            internalValueResult.editVisualWithQ = this._editVisualWithQ;
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
        if (this._flow !== undefined) {
            hasAnyValues = true;
            internalValueResult.flow = this._flow;
        }
        if (this._genericHttpAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.genericHttpAction = this._genericHttpAction;
        }
        if (this._githubAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.githubAction = this._githubAction;
        }
        if (this._googleCalendarAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.googleCalendarAction = this._googleCalendarAction;
        }
        if (this._hubspotAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.hubspotAction = this._hubspotAction;
        }
        if (this._huggingFaceAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.huggingFaceAction = this._huggingFaceAction;
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
        if (this._mcpAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.mcpAction = this._mcpAction;
        }
        if (this._mondayAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.mondayAction = this._mondayAction;
        }
        if (this._msExchangeAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.msExchangeAction = this._msExchangeAction;
        }
        if (this._msTeamsAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.msTeamsAction = this._msTeamsAction;
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
        if (this._openApiAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.openApiAction = this._openApiAction;
        }
        if (this._pagerDutyAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.pagerDutyAction = this._pagerDutyAction;
        }
        if (this._performFlowUiTask !== undefined) {
            hasAnyValues = true;
            internalValueResult.performFlowUiTask = this._performFlowUiTask;
        }
        if (this._printReports !== undefined) {
            hasAnyValues = true;
            internalValueResult.printReports = this._printReports;
        }
        if (this._publishWithoutApproval !== undefined) {
            hasAnyValues = true;
            internalValueResult.publishWithoutApproval = this._publishWithoutApproval;
        }
        if (this._renameSharedFolders !== undefined) {
            hasAnyValues = true;
            internalValueResult.renameSharedFolders = this._renameSharedFolders;
        }
        if (this._research !== undefined) {
            hasAnyValues = true;
            internalValueResult.research = this._research;
        }
        if (this._salesforceAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.salesforceAction = this._salesforceAction;
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
        if (this._serviceNowAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.serviceNowAction = this._serviceNowAction;
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
        if (this._shareBambooHrAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareBambooHrAction = this._shareBambooHrAction;
        }
        if (this._shareBoxAgentAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareBoxAgentAction = this._shareBoxAgentAction;
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
        if (this._shareDashboards !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareDashboards = this._shareDashboards;
        }
        if (this._shareDataSources !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareDataSources = this._shareDataSources;
        }
        if (this._shareDatasets !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareDatasets = this._shareDatasets;
        }
        if (this._shareFactSetAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareFactSetAction = this._shareFactSetAction;
        }
        if (this._shareGenericHttpAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareGenericHttpAction = this._shareGenericHttpAction;
        }
        if (this._shareGithubAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareGithubAction = this._shareGithubAction;
        }
        if (this._shareGoogleCalendarAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareGoogleCalendarAction = this._shareGoogleCalendarAction;
        }
        if (this._shareHubspotAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareHubspotAction = this._shareHubspotAction;
        }
        if (this._shareHuggingFaceAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareHuggingFaceAction = this._shareHuggingFaceAction;
        }
        if (this._shareIntercomAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareIntercomAction = this._shareIntercomAction;
        }
        if (this._shareJiraAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareJiraAction = this._shareJiraAction;
        }
        if (this._shareKnowledgeBases !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareKnowledgeBases = this._shareKnowledgeBases;
        }
        if (this._shareLinearAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareLinearAction = this._shareLinearAction;
        }
        if (this._shareMcpAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareMcpAction = this._shareMcpAction;
        }
        if (this._shareMondayAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareMondayAction = this._shareMondayAction;
        }
        if (this._shareMsExchangeAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareMsExchangeAction = this._shareMsExchangeAction;
        }
        if (this._shareMsTeamsAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareMsTeamsAction = this._shareMsTeamsAction;
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
        if (this._shareOpenApiAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareOpenApiAction = this._shareOpenApiAction;
        }
        if (this._sharePagerDutyAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.sharePagerDutyAction = this._sharePagerDutyAction;
        }
        if (this._sharePointAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.sharePointAction = this._sharePointAction;
        }
        if (this._shareSalesforceAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareSalesforceAction = this._shareSalesforceAction;
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
        if (this._shareSharePointAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareSharePointAction = this._shareSharePointAction;
        }
        if (this._shareSlackAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareSlackAction = this._shareSlackAction;
        }
        if (this._shareSmartsheetAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareSmartsheetAction = this._shareSmartsheetAction;
        }
        if (this._shareSpaces !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareSpaces = this._shareSpaces;
        }
        if (this._shareTextractAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.shareTextractAction = this._shareTextractAction;
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
        if (this._space !== undefined) {
            hasAnyValues = true;
            internalValueResult.space = this._space;
        }
        if (this._subscribeDashboardEmailReports !== undefined) {
            hasAnyValues = true;
            internalValueResult.subscribeDashboardEmailReports = this._subscribeDashboardEmailReports;
        }
        if (this._textractAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.textractAction = this._textractAction;
        }
        if (this._topic !== undefined) {
            hasAnyValues = true;
            internalValueResult.topic = this._topic;
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
        if (this._useBedrockModels !== undefined) {
            hasAnyValues = true;
            internalValueResult.useBedrockModels = this._useBedrockModels;
        }
        if (this._useBoxAgentAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.useBoxAgentAction = this._useBoxAgentAction;
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
        if (this._useHubspotAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.useHubspotAction = this._useHubspotAction;
        }
        if (this._useHuggingFaceAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.useHuggingFaceAction = this._useHuggingFaceAction;
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
        if (this._useOpenApiAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.useOpenApiAction = this._useOpenApiAction;
        }
        if (this._usePagerDutyAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.usePagerDutyAction = this._usePagerDutyAction;
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
        if (this._useZendeskAction !== undefined) {
            hasAnyValues = true;
            internalValueResult.useZendeskAction = this._useZendeskAction;
        }
        if (this._viewAccountSpiceCapacity !== undefined) {
            hasAnyValues = true;
            internalValueResult.viewAccountSpiceCapacity = this._viewAccountSpiceCapacity;
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
            this._amazonBedrockArsAction = undefined;
            this._amazonBedrockFsAction = undefined;
            this._amazonBedrockKrsAction = undefined;
            this._amazonSThreeAction = undefined;
            this._analysis = undefined;
            this._approveFlowShareRequests = undefined;
            this._apps = undefined;
            this._asanaAction = undefined;
            this._automate = undefined;
            this._bambooHrAction = undefined;
            this._boxAgentAction = undefined;
            this._buildCalculatedFieldWithQ = undefined;
            this._canvaAgentAction = undefined;
            this._chatAgent = undefined;
            this._comprehendAction = undefined;
            this._comprehendMedicalAction = undefined;
            this._confluenceAction = undefined;
            this._createAndUpdateAmazonBedrockArsAction = undefined;
            this._createAndUpdateAmazonBedrockFsAction = undefined;
            this._createAndUpdateAmazonBedrockKrsAction = undefined;
            this._createAndUpdateAmazonSThreeAction = undefined;
            this._createAndUpdateApps = undefined;
            this._createAndUpdateAsanaAction = undefined;
            this._createAndUpdateBambooHrAction = undefined;
            this._createAndUpdateBoxAgentAction = undefined;
            this._createAndUpdateCanvaAgentAction = undefined;
            this._createAndUpdateComprehendAction = undefined;
            this._createAndUpdateComprehendMedicalAction = undefined;
            this._createAndUpdateConfluenceAction = undefined;
            this._createAndUpdateDashboardEmailReports = undefined;
            this._createAndUpdateDataSources = undefined;
            this._createAndUpdateDatasets = undefined;
            this._createAndUpdateFactSetAction = undefined;
            this._createAndUpdateGenericHttpAction = undefined;
            this._createAndUpdateGithubAction = undefined;
            this._createAndUpdateGoogleCalendarAction = undefined;
            this._createAndUpdateHubspotAction = undefined;
            this._createAndUpdateHuggingFaceAction = undefined;
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
            this._createAndUpdateOpenApiAction = undefined;
            this._createAndUpdatePagerDutyAction = undefined;
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
            this._createAndUpdateSlackAction = undefined;
            this._createAndUpdateSmartsheetAction = undefined;
            this._createAndUpdateTextractAction = undefined;
            this._createAndUpdateThemes = undefined;
            this._createAndUpdateThresholdAlerts = undefined;
            this._createAndUpdateZendeskAction = undefined;
            this._createChatAgents = undefined;
            this._createDashboardExecutiveSummaryWithQ = undefined;
            this._createSharedFolders = undefined;
            this._createSpaces = undefined;
            this._createSpiceDataset = undefined;
            this._dashboard = undefined;
            this._editVisualWithQ = undefined;
            this._exportToCsv = undefined;
            this._exportToCsvInScheduledReports = undefined;
            this._exportToExcel = undefined;
            this._exportToExcelInScheduledReports = undefined;
            this._exportToPdf = undefined;
            this._exportToPdfInScheduledReports = undefined;
            this._extension = undefined;
            this._factSetAction = undefined;
            this._flow = undefined;
            this._genericHttpAction = undefined;
            this._githubAction = undefined;
            this._googleCalendarAction = undefined;
            this._hubspotAction = undefined;
            this._huggingFaceAction = undefined;
            this._includeContentInScheduledReportsEmail = undefined;
            this._intercomAction = undefined;
            this._invokeAppsAiInference = undefined;
            this._jiraAction = undefined;
            this._knowledgeBase = undefined;
            this._linearAction = undefined;
            this._manageSharedFolders = undefined;
            this._mcpAction = undefined;
            this._mondayAction = undefined;
            this._msExchangeAction = undefined;
            this._msTeamsAction = undefined;
            this._newRelicAction = undefined;
            this._notionAction = undefined;
            this._oneDriveAction = undefined;
            this._openApiAction = undefined;
            this._pagerDutyAction = undefined;
            this._performFlowUiTask = undefined;
            this._printReports = undefined;
            this._publishWithoutApproval = undefined;
            this._renameSharedFolders = undefined;
            this._research = undefined;
            this._salesforceAction = undefined;
            this._sandPGlobalEnergyAction = undefined;
            this._sandPgmiAction = undefined;
            this._sapBillOfMaterialAction = undefined;
            this._sapBusinessPartnerAction = undefined;
            this._sapMaterialStockAction = undefined;
            this._sapPhysicalInventoryAction = undefined;
            this._sapProductMasterDataAction = undefined;
            this._serviceNowAction = undefined;
            this._shareAmazonBedrockArsAction = undefined;
            this._shareAmazonBedrockFsAction = undefined;
            this._shareAmazonBedrockKrsAction = undefined;
            this._shareAmazonSThreeAction = undefined;
            this._shareAnalyses = undefined;
            this._shareApps = undefined;
            this._shareAsanaAction = undefined;
            this._shareBambooHrAction = undefined;
            this._shareBoxAgentAction = undefined;
            this._shareCanvaAgentAction = undefined;
            this._shareChatAgents = undefined;
            this._shareComprehendAction = undefined;
            this._shareComprehendMedicalAction = undefined;
            this._shareConfluenceAction = undefined;
            this._shareDashboards = undefined;
            this._shareDataSources = undefined;
            this._shareDatasets = undefined;
            this._shareFactSetAction = undefined;
            this._shareGenericHttpAction = undefined;
            this._shareGithubAction = undefined;
            this._shareGoogleCalendarAction = undefined;
            this._shareHubspotAction = undefined;
            this._shareHuggingFaceAction = undefined;
            this._shareIntercomAction = undefined;
            this._shareJiraAction = undefined;
            this._shareKnowledgeBases = undefined;
            this._shareLinearAction = undefined;
            this._shareMcpAction = undefined;
            this._shareMondayAction = undefined;
            this._shareMsExchangeAction = undefined;
            this._shareMsTeamsAction = undefined;
            this._shareNewRelicAction = undefined;
            this._shareNotionAction = undefined;
            this._shareOneDriveAction = undefined;
            this._shareOpenApiAction = undefined;
            this._sharePagerDutyAction = undefined;
            this._sharePointAction = undefined;
            this._shareSalesforceAction = undefined;
            this._shareSandPGlobalEnergyAction = undefined;
            this._shareSandPgmiAction = undefined;
            this._shareSapBillOfMaterialAction = undefined;
            this._shareSapBusinessPartnerAction = undefined;
            this._shareSapMaterialStockAction = undefined;
            this._shareSapPhysicalInventoryAction = undefined;
            this._shareSapProductMasterDataAction = undefined;
            this._shareServiceNowAction = undefined;
            this._shareSharePointAction = undefined;
            this._shareSlackAction = undefined;
            this._shareSmartsheetAction = undefined;
            this._shareSpaces = undefined;
            this._shareTextractAction = undefined;
            this._shareZendeskAction = undefined;
            this._slackAction = undefined;
            this._smartsheetAction = undefined;
            this._space = undefined;
            this._subscribeDashboardEmailReports = undefined;
            this._textractAction = undefined;
            this._topic = undefined;
            this._useAgentWebSearch = undefined;
            this._useAmazonBedrockArsAction = undefined;
            this._useAmazonBedrockFsAction = undefined;
            this._useAmazonBedrockKrsAction = undefined;
            this._useAmazonSThreeAction = undefined;
            this._useAsanaAction = undefined;
            this._useBambooHrAction = undefined;
            this._useBedrockModels = undefined;
            this._useBoxAgentAction = undefined;
            this._useCanvaAgentAction = undefined;
            this._useComprehendAction = undefined;
            this._useComprehendMedicalAction = undefined;
            this._useConfluenceAction = undefined;
            this._useFactSetAction = undefined;
            this._useGenericHttpAction = undefined;
            this._useGithubAction = undefined;
            this._useGoogleCalendarAction = undefined;
            this._useHubspotAction = undefined;
            this._useHuggingFaceAction = undefined;
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
            this._useOpenApiAction = undefined;
            this._usePagerDutyAction = undefined;
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
            this._useSlackAction = undefined;
            this._useSmartsheetAction = undefined;
            this._useTextractAction = undefined;
            this._useZendeskAction = undefined;
            this._viewAccountSpiceCapacity = undefined;
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
            this._amazonBedrockArsAction = value.amazonBedrockArsAction;
            this._amazonBedrockFsAction = value.amazonBedrockFsAction;
            this._amazonBedrockKrsAction = value.amazonBedrockKrsAction;
            this._amazonSThreeAction = value.amazonSThreeAction;
            this._analysis = value.analysis;
            this._approveFlowShareRequests = value.approveFlowShareRequests;
            this._apps = value.apps;
            this._asanaAction = value.asanaAction;
            this._automate = value.automate;
            this._bambooHrAction = value.bambooHrAction;
            this._boxAgentAction = value.boxAgentAction;
            this._buildCalculatedFieldWithQ = value.buildCalculatedFieldWithQ;
            this._canvaAgentAction = value.canvaAgentAction;
            this._chatAgent = value.chatAgent;
            this._comprehendAction = value.comprehendAction;
            this._comprehendMedicalAction = value.comprehendMedicalAction;
            this._confluenceAction = value.confluenceAction;
            this._createAndUpdateAmazonBedrockArsAction = value.createAndUpdateAmazonBedrockArsAction;
            this._createAndUpdateAmazonBedrockFsAction = value.createAndUpdateAmazonBedrockFsAction;
            this._createAndUpdateAmazonBedrockKrsAction = value.createAndUpdateAmazonBedrockKrsAction;
            this._createAndUpdateAmazonSThreeAction = value.createAndUpdateAmazonSThreeAction;
            this._createAndUpdateApps = value.createAndUpdateApps;
            this._createAndUpdateAsanaAction = value.createAndUpdateAsanaAction;
            this._createAndUpdateBambooHrAction = value.createAndUpdateBambooHrAction;
            this._createAndUpdateBoxAgentAction = value.createAndUpdateBoxAgentAction;
            this._createAndUpdateCanvaAgentAction = value.createAndUpdateCanvaAgentAction;
            this._createAndUpdateComprehendAction = value.createAndUpdateComprehendAction;
            this._createAndUpdateComprehendMedicalAction = value.createAndUpdateComprehendMedicalAction;
            this._createAndUpdateConfluenceAction = value.createAndUpdateConfluenceAction;
            this._createAndUpdateDashboardEmailReports = value.createAndUpdateDashboardEmailReports;
            this._createAndUpdateDataSources = value.createAndUpdateDataSources;
            this._createAndUpdateDatasets = value.createAndUpdateDatasets;
            this._createAndUpdateFactSetAction = value.createAndUpdateFactSetAction;
            this._createAndUpdateGenericHttpAction = value.createAndUpdateGenericHttpAction;
            this._createAndUpdateGithubAction = value.createAndUpdateGithubAction;
            this._createAndUpdateGoogleCalendarAction = value.createAndUpdateGoogleCalendarAction;
            this._createAndUpdateHubspotAction = value.createAndUpdateHubspotAction;
            this._createAndUpdateHuggingFaceAction = value.createAndUpdateHuggingFaceAction;
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
            this._createAndUpdateOpenApiAction = value.createAndUpdateOpenApiAction;
            this._createAndUpdatePagerDutyAction = value.createAndUpdatePagerDutyAction;
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
            this._createAndUpdateSlackAction = value.createAndUpdateSlackAction;
            this._createAndUpdateSmartsheetAction = value.createAndUpdateSmartsheetAction;
            this._createAndUpdateTextractAction = value.createAndUpdateTextractAction;
            this._createAndUpdateThemes = value.createAndUpdateThemes;
            this._createAndUpdateThresholdAlerts = value.createAndUpdateThresholdAlerts;
            this._createAndUpdateZendeskAction = value.createAndUpdateZendeskAction;
            this._createChatAgents = value.createChatAgents;
            this._createDashboardExecutiveSummaryWithQ = value.createDashboardExecutiveSummaryWithQ;
            this._createSharedFolders = value.createSharedFolders;
            this._createSpaces = value.createSpaces;
            this._createSpiceDataset = value.createSpiceDataset;
            this._dashboard = value.dashboard;
            this._editVisualWithQ = value.editVisualWithQ;
            this._exportToCsv = value.exportToCsv;
            this._exportToCsvInScheduledReports = value.exportToCsvInScheduledReports;
            this._exportToExcel = value.exportToExcel;
            this._exportToExcelInScheduledReports = value.exportToExcelInScheduledReports;
            this._exportToPdf = value.exportToPdf;
            this._exportToPdfInScheduledReports = value.exportToPdfInScheduledReports;
            this._extension = value.extension;
            this._factSetAction = value.factSetAction;
            this._flow = value.flow;
            this._genericHttpAction = value.genericHttpAction;
            this._githubAction = value.githubAction;
            this._googleCalendarAction = value.googleCalendarAction;
            this._hubspotAction = value.hubspotAction;
            this._huggingFaceAction = value.huggingFaceAction;
            this._includeContentInScheduledReportsEmail = value.includeContentInScheduledReportsEmail;
            this._intercomAction = value.intercomAction;
            this._invokeAppsAiInference = value.invokeAppsAiInference;
            this._jiraAction = value.jiraAction;
            this._knowledgeBase = value.knowledgeBase;
            this._linearAction = value.linearAction;
            this._manageSharedFolders = value.manageSharedFolders;
            this._mcpAction = value.mcpAction;
            this._mondayAction = value.mondayAction;
            this._msExchangeAction = value.msExchangeAction;
            this._msTeamsAction = value.msTeamsAction;
            this._newRelicAction = value.newRelicAction;
            this._notionAction = value.notionAction;
            this._oneDriveAction = value.oneDriveAction;
            this._openApiAction = value.openApiAction;
            this._pagerDutyAction = value.pagerDutyAction;
            this._performFlowUiTask = value.performFlowUiTask;
            this._printReports = value.printReports;
            this._publishWithoutApproval = value.publishWithoutApproval;
            this._renameSharedFolders = value.renameSharedFolders;
            this._research = value.research;
            this._salesforceAction = value.salesforceAction;
            this._sandPGlobalEnergyAction = value.sandPGlobalEnergyAction;
            this._sandPgmiAction = value.sandPgmiAction;
            this._sapBillOfMaterialAction = value.sapBillOfMaterialAction;
            this._sapBusinessPartnerAction = value.sapBusinessPartnerAction;
            this._sapMaterialStockAction = value.sapMaterialStockAction;
            this._sapPhysicalInventoryAction = value.sapPhysicalInventoryAction;
            this._sapProductMasterDataAction = value.sapProductMasterDataAction;
            this._serviceNowAction = value.serviceNowAction;
            this._shareAmazonBedrockArsAction = value.shareAmazonBedrockArsAction;
            this._shareAmazonBedrockFsAction = value.shareAmazonBedrockFsAction;
            this._shareAmazonBedrockKrsAction = value.shareAmazonBedrockKrsAction;
            this._shareAmazonSThreeAction = value.shareAmazonSThreeAction;
            this._shareAnalyses = value.shareAnalyses;
            this._shareApps = value.shareApps;
            this._shareAsanaAction = value.shareAsanaAction;
            this._shareBambooHrAction = value.shareBambooHrAction;
            this._shareBoxAgentAction = value.shareBoxAgentAction;
            this._shareCanvaAgentAction = value.shareCanvaAgentAction;
            this._shareChatAgents = value.shareChatAgents;
            this._shareComprehendAction = value.shareComprehendAction;
            this._shareComprehendMedicalAction = value.shareComprehendMedicalAction;
            this._shareConfluenceAction = value.shareConfluenceAction;
            this._shareDashboards = value.shareDashboards;
            this._shareDataSources = value.shareDataSources;
            this._shareDatasets = value.shareDatasets;
            this._shareFactSetAction = value.shareFactSetAction;
            this._shareGenericHttpAction = value.shareGenericHttpAction;
            this._shareGithubAction = value.shareGithubAction;
            this._shareGoogleCalendarAction = value.shareGoogleCalendarAction;
            this._shareHubspotAction = value.shareHubspotAction;
            this._shareHuggingFaceAction = value.shareHuggingFaceAction;
            this._shareIntercomAction = value.shareIntercomAction;
            this._shareJiraAction = value.shareJiraAction;
            this._shareKnowledgeBases = value.shareKnowledgeBases;
            this._shareLinearAction = value.shareLinearAction;
            this._shareMcpAction = value.shareMcpAction;
            this._shareMondayAction = value.shareMondayAction;
            this._shareMsExchangeAction = value.shareMsExchangeAction;
            this._shareMsTeamsAction = value.shareMsTeamsAction;
            this._shareNewRelicAction = value.shareNewRelicAction;
            this._shareNotionAction = value.shareNotionAction;
            this._shareOneDriveAction = value.shareOneDriveAction;
            this._shareOpenApiAction = value.shareOpenApiAction;
            this._sharePagerDutyAction = value.sharePagerDutyAction;
            this._sharePointAction = value.sharePointAction;
            this._shareSalesforceAction = value.shareSalesforceAction;
            this._shareSandPGlobalEnergyAction = value.shareSandPGlobalEnergyAction;
            this._shareSandPgmiAction = value.shareSandPgmiAction;
            this._shareSapBillOfMaterialAction = value.shareSapBillOfMaterialAction;
            this._shareSapBusinessPartnerAction = value.shareSapBusinessPartnerAction;
            this._shareSapMaterialStockAction = value.shareSapMaterialStockAction;
            this._shareSapPhysicalInventoryAction = value.shareSapPhysicalInventoryAction;
            this._shareSapProductMasterDataAction = value.shareSapProductMasterDataAction;
            this._shareServiceNowAction = value.shareServiceNowAction;
            this._shareSharePointAction = value.shareSharePointAction;
            this._shareSlackAction = value.shareSlackAction;
            this._shareSmartsheetAction = value.shareSmartsheetAction;
            this._shareSpaces = value.shareSpaces;
            this._shareTextractAction = value.shareTextractAction;
            this._shareZendeskAction = value.shareZendeskAction;
            this._slackAction = value.slackAction;
            this._smartsheetAction = value.smartsheetAction;
            this._space = value.space;
            this._subscribeDashboardEmailReports = value.subscribeDashboardEmailReports;
            this._textractAction = value.textractAction;
            this._topic = value.topic;
            this._useAgentWebSearch = value.useAgentWebSearch;
            this._useAmazonBedrockArsAction = value.useAmazonBedrockArsAction;
            this._useAmazonBedrockFsAction = value.useAmazonBedrockFsAction;
            this._useAmazonBedrockKrsAction = value.useAmazonBedrockKrsAction;
            this._useAmazonSThreeAction = value.useAmazonSThreeAction;
            this._useAsanaAction = value.useAsanaAction;
            this._useBambooHrAction = value.useBambooHrAction;
            this._useBedrockModels = value.useBedrockModels;
            this._useBoxAgentAction = value.useBoxAgentAction;
            this._useCanvaAgentAction = value.useCanvaAgentAction;
            this._useComprehendAction = value.useComprehendAction;
            this._useComprehendMedicalAction = value.useComprehendMedicalAction;
            this._useConfluenceAction = value.useConfluenceAction;
            this._useFactSetAction = value.useFactSetAction;
            this._useGenericHttpAction = value.useGenericHttpAction;
            this._useGithubAction = value.useGithubAction;
            this._useGoogleCalendarAction = value.useGoogleCalendarAction;
            this._useHubspotAction = value.useHubspotAction;
            this._useHuggingFaceAction = value.useHuggingFaceAction;
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
            this._useOpenApiAction = value.useOpenApiAction;
            this._usePagerDutyAction = value.usePagerDutyAction;
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
            this._useSlackAction = value.useSlackAction;
            this._useSmartsheetAction = value.useSmartsheetAction;
            this._useTextractAction = value.useTextractAction;
            this._useZendeskAction = value.useZendeskAction;
            this._viewAccountSpiceCapacity = value.viewAccountSpiceCapacity;
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#key CcCustomPermissions#key}
    */
    readonly key?: string;
    /**
    * <p>Tag value.</p>
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/quicksight_custom_permissions#value CcCustomPermissions#value}
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
