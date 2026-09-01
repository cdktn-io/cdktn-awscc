// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcApplicationProps extends cdktn.TerraformMetaArguments {
    /**
    * If set to true, the managed policies for SSM and CW will be attached to the instance roles if they are missing
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#attach_missing_permission CcApplication#attach_missing_permission}
    */
    readonly attachMissingPermission?: boolean | cdktn.IResolvable;
    /**
    * If set to true, application will be configured with recommended monitoring configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#auto_configuration_enabled CcApplication#auto_configuration_enabled}
    */
    readonly autoConfigurationEnabled?: boolean | cdktn.IResolvable;
    /**
    * The monitoring settings of the components.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#component_monitoring_settings CcApplication#component_monitoring_settings}
    */
    readonly componentMonitoringSettings?: CcApplication.ComponentMonitoringSettingProperty[] | cdktn.IResolvable;
    /**
    * The custom grouped components.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#custom_components CcApplication#custom_components}
    */
    readonly customComponents?: CcApplication.CustomComponentProperty[] | cdktn.IResolvable;
    /**
    * Indicates whether Application Insights can listen to CloudWatch events for the application resources.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#cwe_monitor_enabled CcApplication#cwe_monitor_enabled}
    */
    readonly cweMonitorEnabled?: boolean | cdktn.IResolvable;
    /**
    * The grouping type of the application
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#grouping_type CcApplication#grouping_type}
    */
    readonly groupingType?: string;
    /**
    * The log pattern sets.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#log_pattern_sets CcApplication#log_pattern_sets}
    */
    readonly logPatternSets?: CcApplication.LogPatternSetProperty[] | cdktn.IResolvable;
    /**
    * When set to true, creates opsItems for any problems detected on an application.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#ops_center_enabled CcApplication#ops_center_enabled}
    */
    readonly opsCenterEnabled?: boolean | cdktn.IResolvable;
    /**
    * The SNS topic provided to Application Insights that is associated to the created opsItem.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#ops_item_sns_topic_arn CcApplication#ops_item_sns_topic_arn}
    */
    readonly opsItemSnsTopicArn?: string;
    /**
    * The name of the resource group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#resource_group_name CcApplication#resource_group_name}
    */
    readonly resourceGroupName: string;
    /**
    * Application Insights sends notifications to this SNS topic whenever there is a problem update in the associated application.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#sns_notification_arn CcApplication#sns_notification_arn}
    */
    readonly snsNotificationArn?: string;
    /**
    * The tags of Application Insights application.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#tags CcApplication#tags}
    */
    readonly tags?: CcApplication.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application awscc_applicationinsights_application}
*/
export class CcApplication extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_applicationinsights_application";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcApplication resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcApplication to import
    * @param importFromId The id of the existing CcApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcApplication to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_applicationinsights_application", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application awscc_applicationinsights_application} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcApplicationProps
    */
    public constructor(scope: Construct, id: string, config: CcApplicationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_applicationinsights_application',
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
        this._attachMissingPermission = config.attachMissingPermission;
        this._autoConfigurationEnabled = config.autoConfigurationEnabled;
        this._componentMonitoringSettings.internalValue = config.componentMonitoringSettings;
        this._customComponents.internalValue = config.customComponents;
        this._cweMonitorEnabled = config.cweMonitorEnabled;
        this._groupingType = config.groupingType;
        this._logPatternSets.internalValue = config.logPatternSets;
        this._opsCenterEnabled = config.opsCenterEnabled;
        this._opsItemSnsTopicArn = config.opsItemSnsTopicArn;
        this._resourceGroupName = config.resourceGroupName;
        this._snsNotificationArn = config.snsNotificationArn;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // application_arn - computed: true, optional: false, required: false
    public get applicationArn() {
        return this.getStringAttribute('application_arn');
    }

    // attach_missing_permission - computed: true, optional: true, required: false
    private _attachMissingPermission?: boolean | cdktn.IResolvable; 
    public get attachMissingPermission() {
        return this.getBooleanAttribute('attach_missing_permission');
    }
    public set attachMissingPermission(value: boolean | cdktn.IResolvable) {
        this._attachMissingPermission = value;
    }
    public resetAttachMissingPermission() {
        this._attachMissingPermission = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get attachMissingPermissionInput() {
        return this._attachMissingPermission;
    }

    // auto_configuration_enabled - computed: true, optional: true, required: false
    private _autoConfigurationEnabled?: boolean | cdktn.IResolvable; 
    public get autoConfigurationEnabled() {
        return this.getBooleanAttribute('auto_configuration_enabled');
    }
    public set autoConfigurationEnabled(value: boolean | cdktn.IResolvable) {
        this._autoConfigurationEnabled = value;
    }
    public resetAutoConfigurationEnabled() {
        this._autoConfigurationEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoConfigurationEnabledInput() {
        return this._autoConfigurationEnabled;
    }

    // component_monitoring_settings - computed: true, optional: true, required: false
    private _componentMonitoringSettings = new CcApplication.ComponentMonitoringSettingPropertyList(this, "component_monitoring_settings", false);
    public get componentMonitoringSettings() {
        return this._componentMonitoringSettings;
    }
    public putComponentMonitoringSettings(value: CcApplication.ComponentMonitoringSettingProperty[] | cdktn.IResolvable) {
        this._componentMonitoringSettings.internalValue = value;
    }
    public resetComponentMonitoringSettings() {
        this._componentMonitoringSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get componentMonitoringSettingsInput() {
        return this._componentMonitoringSettings.internalValue;
    }

    // custom_components - computed: true, optional: true, required: false
    private _customComponents = new CcApplication.CustomComponentPropertyList(this, "custom_components", false);
    public get customComponents() {
        return this._customComponents;
    }
    public putCustomComponents(value: CcApplication.CustomComponentProperty[] | cdktn.IResolvable) {
        this._customComponents.internalValue = value;
    }
    public resetCustomComponents() {
        this._customComponents.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customComponentsInput() {
        return this._customComponents.internalValue;
    }

    // cwe_monitor_enabled - computed: true, optional: true, required: false
    private _cweMonitorEnabled?: boolean | cdktn.IResolvable; 
    public get cweMonitorEnabled() {
        return this.getBooleanAttribute('cwe_monitor_enabled');
    }
    public set cweMonitorEnabled(value: boolean | cdktn.IResolvable) {
        this._cweMonitorEnabled = value;
    }
    public resetCweMonitorEnabled() {
        this._cweMonitorEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cweMonitorEnabledInput() {
        return this._cweMonitorEnabled;
    }

    // grouping_type - computed: true, optional: true, required: false
    private _groupingType?: string; 
    public get groupingType() {
        return this.getStringAttribute('grouping_type');
    }
    public set groupingType(value: string) {
        this._groupingType = value;
    }
    public resetGroupingType() {
        this._groupingType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get groupingTypeInput() {
        return this._groupingType;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // log_pattern_sets - computed: true, optional: true, required: false
    private _logPatternSets = new CcApplication.LogPatternSetPropertyList(this, "log_pattern_sets", false);
    public get logPatternSets() {
        return this._logPatternSets;
    }
    public putLogPatternSets(value: CcApplication.LogPatternSetProperty[] | cdktn.IResolvable) {
        this._logPatternSets.internalValue = value;
    }
    public resetLogPatternSets() {
        this._logPatternSets.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logPatternSetsInput() {
        return this._logPatternSets.internalValue;
    }

    // ops_center_enabled - computed: true, optional: true, required: false
    private _opsCenterEnabled?: boolean | cdktn.IResolvable; 
    public get opsCenterEnabled() {
        return this.getBooleanAttribute('ops_center_enabled');
    }
    public set opsCenterEnabled(value: boolean | cdktn.IResolvable) {
        this._opsCenterEnabled = value;
    }
    public resetOpsCenterEnabled() {
        this._opsCenterEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get opsCenterEnabledInput() {
        return this._opsCenterEnabled;
    }

    // ops_item_sns_topic_arn - computed: true, optional: true, required: false
    private _opsItemSnsTopicArn?: string; 
    public get opsItemSnsTopicArn() {
        return this.getStringAttribute('ops_item_sns_topic_arn');
    }
    public set opsItemSnsTopicArn(value: string) {
        this._opsItemSnsTopicArn = value;
    }
    public resetOpsItemSnsTopicArn() {
        this._opsItemSnsTopicArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get opsItemSnsTopicArnInput() {
        return this._opsItemSnsTopicArn;
    }

    // resource_group_name - computed: false, optional: false, required: true
    private _resourceGroupName?: string; 
    public get resourceGroupName() {
        return this.getStringAttribute('resource_group_name');
    }
    public set resourceGroupName(value: string) {
        this._resourceGroupName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceGroupNameInput() {
        return this._resourceGroupName;
    }

    // sns_notification_arn - computed: true, optional: true, required: false
    private _snsNotificationArn?: string; 
    public get snsNotificationArn() {
        return this.getStringAttribute('sns_notification_arn');
    }
    public set snsNotificationArn(value: string) {
        this._snsNotificationArn = value;
    }
    public resetSnsNotificationArn() {
        this._snsNotificationArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get snsNotificationArnInput() {
        return this._snsNotificationArn;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcApplication.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcApplication.TagProperty[] | cdktn.IResolvable) {
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
            attach_missing_permission: cdktn.booleanToTerraform(this._attachMissingPermission),
            auto_configuration_enabled: cdktn.booleanToTerraform(this._autoConfigurationEnabled),
            component_monitoring_settings: cdktn.listMapper(ccApplicationComponentMonitoringSettingPropertyToTerraform, false)(this._componentMonitoringSettings.internalValue),
            custom_components: cdktn.listMapper(ccApplicationCustomComponentPropertyToTerraform, false)(this._customComponents.internalValue),
            cwe_monitor_enabled: cdktn.booleanToTerraform(this._cweMonitorEnabled),
            grouping_type: cdktn.stringToTerraform(this._groupingType),
            log_pattern_sets: cdktn.listMapper(ccApplicationLogPatternSetPropertyToTerraform, false)(this._logPatternSets.internalValue),
            ops_center_enabled: cdktn.booleanToTerraform(this._opsCenterEnabled),
            ops_item_sns_topic_arn: cdktn.stringToTerraform(this._opsItemSnsTopicArn),
            resource_group_name: cdktn.stringToTerraform(this._resourceGroupName),
            sns_notification_arn: cdktn.stringToTerraform(this._snsNotificationArn),
            tags: cdktn.listMapper(ccApplicationTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            attach_missing_permission: {
                value: cdktn.booleanToHclTerraform(this._attachMissingPermission),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            auto_configuration_enabled: {
                value: cdktn.booleanToHclTerraform(this._autoConfigurationEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            component_monitoring_settings: {
                value: cdktn.listMapperHcl(ccApplicationComponentMonitoringSettingPropertyToHclTerraform, false)(this._componentMonitoringSettings.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcApplication.ComponentMonitoringSettingPropertyList",
            },
            custom_components: {
                value: cdktn.listMapperHcl(ccApplicationCustomComponentPropertyToHclTerraform, false)(this._customComponents.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcApplication.CustomComponentPropertyList",
            },
            cwe_monitor_enabled: {
                value: cdktn.booleanToHclTerraform(this._cweMonitorEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            grouping_type: {
                value: cdktn.stringToHclTerraform(this._groupingType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            log_pattern_sets: {
                value: cdktn.listMapperHcl(ccApplicationLogPatternSetPropertyToHclTerraform, false)(this._logPatternSets.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcApplication.LogPatternSetPropertyList",
            },
            ops_center_enabled: {
                value: cdktn.booleanToHclTerraform(this._opsCenterEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            ops_item_sns_topic_arn: {
                value: cdktn.stringToHclTerraform(this._opsItemSnsTopicArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            resource_group_name: {
                value: cdktn.stringToHclTerraform(this._resourceGroupName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            sns_notification_arn: {
                value: cdktn.stringToHclTerraform(this._snsNotificationArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccApplicationTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcApplication.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccApplicationAlarmMetricPropertyToTerraform(struct?: CcApplication.AlarmMetricProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        alarm_metric_name: cdktn.stringToTerraform(struct!.alarmMetricName),
    }
}


export function ccApplicationAlarmMetricPropertyToHclTerraform(struct?: CcApplication.AlarmMetricProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        alarm_metric_name: {
            value: cdktn.stringToHclTerraform(struct!.alarmMetricName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccApplicationAlarmPropertyToTerraform(struct?: CcApplication.AlarmProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        alarm_name: cdktn.stringToTerraform(struct!.alarmName),
        severity: cdktn.stringToTerraform(struct!.severity),
    }
}


export function ccApplicationAlarmPropertyToHclTerraform(struct?: CcApplication.AlarmProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        alarm_name: {
            value: cdktn.stringToHclTerraform(struct!.alarmName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        severity: {
            value: cdktn.stringToHclTerraform(struct!.severity),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccApplicationHAClusterPrometheusExporterPropertyToTerraform(struct?: CcApplication.HAClusterPrometheusExporterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        prometheus_port: cdktn.stringToTerraform(struct!.prometheusPort),
    }
}


export function ccApplicationHAClusterPrometheusExporterPropertyToHclTerraform(struct?: CcApplication.HAClusterPrometheusExporterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        prometheus_port: {
            value: cdktn.stringToHclTerraform(struct!.prometheusPort),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccApplicationHANAPrometheusExporterPropertyToTerraform(struct?: CcApplication.HANAPrometheusExporterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        agree_to_install_hanadb_client: cdktn.booleanToTerraform(struct!.agreeToInstallHanadbClient),
        hana_port: cdktn.stringToTerraform(struct!.hanaPort),
        hana_secret_name: cdktn.stringToTerraform(struct!.hanaSecretName),
        hanasid: cdktn.stringToTerraform(struct!.hanasid),
        prometheus_port: cdktn.stringToTerraform(struct!.prometheusPort),
    }
}


export function ccApplicationHANAPrometheusExporterPropertyToHclTerraform(struct?: CcApplication.HANAPrometheusExporterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        agree_to_install_hanadb_client: {
            value: cdktn.booleanToHclTerraform(struct!.agreeToInstallHanadbClient),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        hana_port: {
            value: cdktn.stringToHclTerraform(struct!.hanaPort),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        hana_secret_name: {
            value: cdktn.stringToHclTerraform(struct!.hanaSecretName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        hanasid: {
            value: cdktn.stringToHclTerraform(struct!.hanasid),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        prometheus_port: {
            value: cdktn.stringToHclTerraform(struct!.prometheusPort),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccApplicationJMXPrometheusExporterPropertyToTerraform(struct?: CcApplication.JMXPrometheusExporterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        host_port: cdktn.stringToTerraform(struct!.hostPort),
        jmxurl: cdktn.stringToTerraform(struct!.jmxurl),
        prometheus_port: cdktn.stringToTerraform(struct!.prometheusPort),
    }
}


export function ccApplicationJMXPrometheusExporterPropertyToHclTerraform(struct?: CcApplication.JMXPrometheusExporterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        host_port: {
            value: cdktn.stringToHclTerraform(struct!.hostPort),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        jmxurl: {
            value: cdktn.stringToHclTerraform(struct!.jmxurl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        prometheus_port: {
            value: cdktn.stringToHclTerraform(struct!.prometheusPort),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccApplicationLogPropertyToTerraform(struct?: CcApplication.LogProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        encoding: cdktn.stringToTerraform(struct!.encoding),
        log_group_name: cdktn.stringToTerraform(struct!.logGroupName),
        log_path: cdktn.stringToTerraform(struct!.logPath),
        log_type: cdktn.stringToTerraform(struct!.logType),
        pattern_set: cdktn.stringToTerraform(struct!.patternSet),
    }
}


export function ccApplicationLogPropertyToHclTerraform(struct?: CcApplication.LogProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        encoding: {
            value: cdktn.stringToHclTerraform(struct!.encoding),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        log_group_name: {
            value: cdktn.stringToHclTerraform(struct!.logGroupName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        log_path: {
            value: cdktn.stringToHclTerraform(struct!.logPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        log_type: {
            value: cdktn.stringToHclTerraform(struct!.logType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        pattern_set: {
            value: cdktn.stringToHclTerraform(struct!.patternSet),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccApplicationNetWeaverPrometheusExporterPropertyToTerraform(struct?: CcApplication.NetWeaverPrometheusExporterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        instance_numbers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.instanceNumbers),
        prometheus_port: cdktn.stringToTerraform(struct!.prometheusPort),
        sapsid: cdktn.stringToTerraform(struct!.sapsid),
    }
}


export function ccApplicationNetWeaverPrometheusExporterPropertyToHclTerraform(struct?: CcApplication.NetWeaverPrometheusExporterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        instance_numbers: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.instanceNumbers),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        prometheus_port: {
            value: cdktn.stringToHclTerraform(struct!.prometheusPort),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sapsid: {
            value: cdktn.stringToHclTerraform(struct!.sapsid),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsProcessesAlarmMetricsPropertyToTerraform(struct?: CcApplication.ComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsProcessesAlarmMetricsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        alarm_metric_name: cdktn.stringToTerraform(struct!.alarmMetricName),
    }
}


export function ccApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsProcessesAlarmMetricsPropertyToHclTerraform(struct?: CcApplication.ComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsProcessesAlarmMetricsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        alarm_metric_name: {
            value: cdktn.stringToHclTerraform(struct!.alarmMetricName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccApplicationProcessPropertyToTerraform(struct?: CcApplication.ProcessProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        alarm_metrics: cdktn.listMapper(ccApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsProcessesAlarmMetricsPropertyToTerraform, false)(struct!.alarmMetrics),
        process_name: cdktn.stringToTerraform(struct!.processName),
    }
}


export function ccApplicationProcessPropertyToHclTerraform(struct?: CcApplication.ProcessProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        alarm_metrics: {
            value: cdktn.listMapperHcl(ccApplicationComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsProcessesAlarmMetricsPropertyToHclTerraform, false)(struct!.alarmMetrics),
            isBlock: true,
            type: "list",
            storageClassType: "ComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsProcessesAlarmMetricsPropertyList",
        },
        process_name: {
            value: cdktn.stringToHclTerraform(struct!.processName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccApplicationSQLServerPrometheusExporterPropertyToTerraform(struct?: CcApplication.SQLServerPrometheusExporterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        prometheus_port: cdktn.stringToTerraform(struct!.prometheusPort),
        sql_secret_name: cdktn.stringToTerraform(struct!.sqlSecretName),
    }
}


export function ccApplicationSQLServerPrometheusExporterPropertyToHclTerraform(struct?: CcApplication.SQLServerPrometheusExporterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        prometheus_port: {
            value: cdktn.stringToHclTerraform(struct!.prometheusPort),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sql_secret_name: {
            value: cdktn.stringToHclTerraform(struct!.sqlSecretName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccApplicationWindowsEventPropertyToTerraform(struct?: CcApplication.WindowsEventProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        event_levels: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.eventLevels),
        event_name: cdktn.stringToTerraform(struct!.eventName),
        log_group_name: cdktn.stringToTerraform(struct!.logGroupName),
        pattern_set: cdktn.stringToTerraform(struct!.patternSet),
    }
}


export function ccApplicationWindowsEventPropertyToHclTerraform(struct?: CcApplication.WindowsEventProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        event_levels: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.eventLevels),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        event_name: {
            value: cdktn.stringToHclTerraform(struct!.eventName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        log_group_name: {
            value: cdktn.stringToHclTerraform(struct!.logGroupName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        pattern_set: {
            value: cdktn.stringToHclTerraform(struct!.patternSet),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccApplicationConfigurationDetailsPropertyToTerraform(struct?: CcApplication.ConfigurationDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        alarm_metrics: cdktn.listMapper(ccApplicationAlarmMetricPropertyToTerraform, false)(struct!.alarmMetrics),
        alarms: cdktn.listMapper(ccApplicationAlarmPropertyToTerraform, false)(struct!.alarms),
        ha_cluster_prometheus_exporter: ccApplicationHAClusterPrometheusExporterPropertyToTerraform(struct!.haClusterPrometheusExporter),
        hana_prometheus_exporter: ccApplicationHANAPrometheusExporterPropertyToTerraform(struct!.hanaPrometheusExporter),
        jmx_prometheus_exporter: ccApplicationJMXPrometheusExporterPropertyToTerraform(struct!.jmxPrometheusExporter),
        logs: cdktn.listMapper(ccApplicationLogPropertyToTerraform, false)(struct!.logs),
        net_weaver_prometheus_exporter: ccApplicationNetWeaverPrometheusExporterPropertyToTerraform(struct!.netWeaverPrometheusExporter),
        processes: cdktn.listMapper(ccApplicationProcessPropertyToTerraform, false)(struct!.processes),
        sql_server_prometheus_exporter: ccApplicationSQLServerPrometheusExporterPropertyToTerraform(struct!.sqlServerPrometheusExporter),
        windows_events: cdktn.listMapper(ccApplicationWindowsEventPropertyToTerraform, false)(struct!.windowsEvents),
    }
}


export function ccApplicationConfigurationDetailsPropertyToHclTerraform(struct?: CcApplication.ConfigurationDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        alarm_metrics: {
            value: cdktn.listMapperHcl(ccApplicationAlarmMetricPropertyToHclTerraform, false)(struct!.alarmMetrics),
            isBlock: true,
            type: "list",
            storageClassType: "AlarmMetricPropertyList",
        },
        alarms: {
            value: cdktn.listMapperHcl(ccApplicationAlarmPropertyToHclTerraform, false)(struct!.alarms),
            isBlock: true,
            type: "list",
            storageClassType: "AlarmPropertyList",
        },
        ha_cluster_prometheus_exporter: {
            value: ccApplicationHAClusterPrometheusExporterPropertyToHclTerraform(struct!.haClusterPrometheusExporter),
            isBlock: true,
            type: "struct",
            storageClassType: "HAClusterPrometheusExporterProperty",
        },
        hana_prometheus_exporter: {
            value: ccApplicationHANAPrometheusExporterPropertyToHclTerraform(struct!.hanaPrometheusExporter),
            isBlock: true,
            type: "struct",
            storageClassType: "HANAPrometheusExporterProperty",
        },
        jmx_prometheus_exporter: {
            value: ccApplicationJMXPrometheusExporterPropertyToHclTerraform(struct!.jmxPrometheusExporter),
            isBlock: true,
            type: "struct",
            storageClassType: "JMXPrometheusExporterProperty",
        },
        logs: {
            value: cdktn.listMapperHcl(ccApplicationLogPropertyToHclTerraform, false)(struct!.logs),
            isBlock: true,
            type: "list",
            storageClassType: "LogPropertyList",
        },
        net_weaver_prometheus_exporter: {
            value: ccApplicationNetWeaverPrometheusExporterPropertyToHclTerraform(struct!.netWeaverPrometheusExporter),
            isBlock: true,
            type: "struct",
            storageClassType: "NetWeaverPrometheusExporterProperty",
        },
        processes: {
            value: cdktn.listMapperHcl(ccApplicationProcessPropertyToHclTerraform, false)(struct!.processes),
            isBlock: true,
            type: "list",
            storageClassType: "ProcessPropertyList",
        },
        sql_server_prometheus_exporter: {
            value: ccApplicationSQLServerPrometheusExporterPropertyToHclTerraform(struct!.sqlServerPrometheusExporter),
            isBlock: true,
            type: "struct",
            storageClassType: "SQLServerPrometheusExporterProperty",
        },
        windows_events: {
            value: cdktn.listMapperHcl(ccApplicationWindowsEventPropertyToHclTerraform, false)(struct!.windowsEvents),
            isBlock: true,
            type: "list",
            storageClassType: "WindowsEventPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsPropertyToTerraform(struct?: CcApplication.ComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        alarm_metric_name: cdktn.stringToTerraform(struct!.alarmMetricName),
    }
}


export function ccApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsPropertyToHclTerraform(struct?: CcApplication.ComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        alarm_metric_name: {
            value: cdktn.stringToHclTerraform(struct!.alarmMetricName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsPropertyToTerraform(struct?: CcApplication.ComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        encoding: cdktn.stringToTerraform(struct!.encoding),
        log_group_name: cdktn.stringToTerraform(struct!.logGroupName),
        log_path: cdktn.stringToTerraform(struct!.logPath),
        log_type: cdktn.stringToTerraform(struct!.logType),
        pattern_set: cdktn.stringToTerraform(struct!.patternSet),
    }
}


export function ccApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsPropertyToHclTerraform(struct?: CcApplication.ComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        encoding: {
            value: cdktn.stringToHclTerraform(struct!.encoding),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        log_group_name: {
            value: cdktn.stringToHclTerraform(struct!.logGroupName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        log_path: {
            value: cdktn.stringToHclTerraform(struct!.logPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        log_type: {
            value: cdktn.stringToHclTerraform(struct!.logType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        pattern_set: {
            value: cdktn.stringToHclTerraform(struct!.patternSet),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetricsPropertyToTerraform(struct?: CcApplication.ComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetricsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        alarm_metric_name: cdktn.stringToTerraform(struct!.alarmMetricName),
    }
}


export function ccApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetricsPropertyToHclTerraform(struct?: CcApplication.ComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetricsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        alarm_metric_name: {
            value: cdktn.stringToHclTerraform(struct!.alarmMetricName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesPropertyToTerraform(struct?: CcApplication.ComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        alarm_metrics: cdktn.listMapper(ccApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetricsPropertyToTerraform, false)(struct!.alarmMetrics),
        process_name: cdktn.stringToTerraform(struct!.processName),
    }
}


export function ccApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesPropertyToHclTerraform(struct?: CcApplication.ComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        alarm_metrics: {
            value: cdktn.listMapperHcl(ccApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetricsPropertyToHclTerraform, false)(struct!.alarmMetrics),
            isBlock: true,
            type: "list",
            storageClassType: "ComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetricsPropertyList",
        },
        process_name: {
            value: cdktn.stringToHclTerraform(struct!.processName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsPropertyToTerraform(struct?: CcApplication.ComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        event_levels: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.eventLevels),
        event_name: cdktn.stringToTerraform(struct!.eventName),
        log_group_name: cdktn.stringToTerraform(struct!.logGroupName),
        pattern_set: cdktn.stringToTerraform(struct!.patternSet),
    }
}


export function ccApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsPropertyToHclTerraform(struct?: CcApplication.ComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        event_levels: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.eventLevels),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        event_name: {
            value: cdktn.stringToHclTerraform(struct!.eventName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        log_group_name: {
            value: cdktn.stringToHclTerraform(struct!.logGroupName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        pattern_set: {
            value: cdktn.stringToHclTerraform(struct!.patternSet),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccApplicationSubComponentConfigurationDetailsPropertyToTerraform(struct?: CcApplication.SubComponentConfigurationDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        alarm_metrics: cdktn.listMapper(ccApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsPropertyToTerraform, false)(struct!.alarmMetrics),
        logs: cdktn.listMapper(ccApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsPropertyToTerraform, false)(struct!.logs),
        processes: cdktn.listMapper(ccApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesPropertyToTerraform, false)(struct!.processes),
        windows_events: cdktn.listMapper(ccApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsPropertyToTerraform, false)(struct!.windowsEvents),
    }
}


export function ccApplicationSubComponentConfigurationDetailsPropertyToHclTerraform(struct?: CcApplication.SubComponentConfigurationDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        alarm_metrics: {
            value: cdktn.listMapperHcl(ccApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsPropertyToHclTerraform, false)(struct!.alarmMetrics),
            isBlock: true,
            type: "list",
            storageClassType: "ComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsPropertyList",
        },
        logs: {
            value: cdktn.listMapperHcl(ccApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsPropertyToHclTerraform, false)(struct!.logs),
            isBlock: true,
            type: "list",
            storageClassType: "ComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsPropertyList",
        },
        processes: {
            value: cdktn.listMapperHcl(ccApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesPropertyToHclTerraform, false)(struct!.processes),
            isBlock: true,
            type: "list",
            storageClassType: "ComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesPropertyList",
        },
        windows_events: {
            value: cdktn.listMapperHcl(ccApplicationComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsPropertyToHclTerraform, false)(struct!.windowsEvents),
            isBlock: true,
            type: "list",
            storageClassType: "ComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccApplicationSubComponentTypeConfigurationPropertyToTerraform(struct?: CcApplication.SubComponentTypeConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        sub_component_configuration_details: ccApplicationSubComponentConfigurationDetailsPropertyToTerraform(struct!.subComponentConfigurationDetails),
        sub_component_type: cdktn.stringToTerraform(struct!.subComponentType),
    }
}


export function ccApplicationSubComponentTypeConfigurationPropertyToHclTerraform(struct?: CcApplication.SubComponentTypeConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        sub_component_configuration_details: {
            value: ccApplicationSubComponentConfigurationDetailsPropertyToHclTerraform(struct!.subComponentConfigurationDetails),
            isBlock: true,
            type: "struct",
            storageClassType: "SubComponentConfigurationDetailsProperty",
        },
        sub_component_type: {
            value: cdktn.stringToHclTerraform(struct!.subComponentType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccApplicationComponentConfigurationPropertyToTerraform(struct?: CcApplication.ComponentConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        configuration_details: ccApplicationConfigurationDetailsPropertyToTerraform(struct!.configurationDetails),
        sub_component_type_configurations: cdktn.listMapper(ccApplicationSubComponentTypeConfigurationPropertyToTerraform, false)(struct!.subComponentTypeConfigurations),
    }
}


export function ccApplicationComponentConfigurationPropertyToHclTerraform(struct?: CcApplication.ComponentConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        configuration_details: {
            value: ccApplicationConfigurationDetailsPropertyToHclTerraform(struct!.configurationDetails),
            isBlock: true,
            type: "struct",
            storageClassType: "ConfigurationDetailsProperty",
        },
        sub_component_type_configurations: {
            value: cdktn.listMapperHcl(ccApplicationSubComponentTypeConfigurationPropertyToHclTerraform, false)(struct!.subComponentTypeConfigurations),
            isBlock: true,
            type: "list",
            storageClassType: "SubComponentTypeConfigurationPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmMetricsPropertyToTerraform(struct?: CcApplication.ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmMetricsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        alarm_metric_name: cdktn.stringToTerraform(struct!.alarmMetricName),
    }
}


export function ccApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmMetricsPropertyToHclTerraform(struct?: CcApplication.ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmMetricsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        alarm_metric_name: {
            value: cdktn.stringToHclTerraform(struct!.alarmMetricName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccApplicationAlarmsPropertyToTerraform(struct?: CcApplication.AlarmsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        alarm_name: cdktn.stringToTerraform(struct!.alarmName),
        severity: cdktn.stringToTerraform(struct!.severity),
    }
}


export function ccApplicationAlarmsPropertyToHclTerraform(struct?: CcApplication.AlarmsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        alarm_name: {
            value: cdktn.stringToHclTerraform(struct!.alarmName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        severity: {
            value: cdktn.stringToHclTerraform(struct!.severity),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsHaClusterPrometheusExporterPropertyToTerraform(struct?: CcApplication.ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsHaClusterPrometheusExporterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        prometheus_port: cdktn.stringToTerraform(struct!.prometheusPort),
    }
}


export function ccApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsHaClusterPrometheusExporterPropertyToHclTerraform(struct?: CcApplication.ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsHaClusterPrometheusExporterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        prometheus_port: {
            value: cdktn.stringToHclTerraform(struct!.prometheusPort),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsHanaPrometheusExporterPropertyToTerraform(struct?: CcApplication.ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsHanaPrometheusExporterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        agree_to_install_hanadb_client: cdktn.booleanToTerraform(struct!.agreeToInstallHanadbClient),
        hana_port: cdktn.stringToTerraform(struct!.hanaPort),
        hana_secret_name: cdktn.stringToTerraform(struct!.hanaSecretName),
        hanasid: cdktn.stringToTerraform(struct!.hanasid),
        prometheus_port: cdktn.stringToTerraform(struct!.prometheusPort),
    }
}


export function ccApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsHanaPrometheusExporterPropertyToHclTerraform(struct?: CcApplication.ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsHanaPrometheusExporterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        agree_to_install_hanadb_client: {
            value: cdktn.booleanToHclTerraform(struct!.agreeToInstallHanadbClient),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        hana_port: {
            value: cdktn.stringToHclTerraform(struct!.hanaPort),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        hana_secret_name: {
            value: cdktn.stringToHclTerraform(struct!.hanaSecretName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        hanasid: {
            value: cdktn.stringToHclTerraform(struct!.hanasid),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        prometheus_port: {
            value: cdktn.stringToHclTerraform(struct!.prometheusPort),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsJmxPrometheusExporterPropertyToTerraform(struct?: CcApplication.ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsJmxPrometheusExporterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        host_port: cdktn.stringToTerraform(struct!.hostPort),
        jmxurl: cdktn.stringToTerraform(struct!.jmxurl),
        prometheus_port: cdktn.stringToTerraform(struct!.prometheusPort),
    }
}


export function ccApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsJmxPrometheusExporterPropertyToHclTerraform(struct?: CcApplication.ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsJmxPrometheusExporterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        host_port: {
            value: cdktn.stringToHclTerraform(struct!.hostPort),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        jmxurl: {
            value: cdktn.stringToHclTerraform(struct!.jmxurl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        prometheus_port: {
            value: cdktn.stringToHclTerraform(struct!.prometheusPort),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsLogsPropertyToTerraform(struct?: CcApplication.ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsLogsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        encoding: cdktn.stringToTerraform(struct!.encoding),
        log_group_name: cdktn.stringToTerraform(struct!.logGroupName),
        log_path: cdktn.stringToTerraform(struct!.logPath),
        log_type: cdktn.stringToTerraform(struct!.logType),
        pattern_set: cdktn.stringToTerraform(struct!.patternSet),
    }
}


export function ccApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsLogsPropertyToHclTerraform(struct?: CcApplication.ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsLogsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        encoding: {
            value: cdktn.stringToHclTerraform(struct!.encoding),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        log_group_name: {
            value: cdktn.stringToHclTerraform(struct!.logGroupName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        log_path: {
            value: cdktn.stringToHclTerraform(struct!.logPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        log_type: {
            value: cdktn.stringToHclTerraform(struct!.logType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        pattern_set: {
            value: cdktn.stringToHclTerraform(struct!.patternSet),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsNetWeaverPrometheusExporterPropertyToTerraform(struct?: CcApplication.ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsNetWeaverPrometheusExporterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        instance_numbers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.instanceNumbers),
        prometheus_port: cdktn.stringToTerraform(struct!.prometheusPort),
        sapsid: cdktn.stringToTerraform(struct!.sapsid),
    }
}


export function ccApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsNetWeaverPrometheusExporterPropertyToHclTerraform(struct?: CcApplication.ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsNetWeaverPrometheusExporterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        instance_numbers: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.instanceNumbers),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        prometheus_port: {
            value: cdktn.stringToHclTerraform(struct!.prometheusPort),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sapsid: {
            value: cdktn.stringToHclTerraform(struct!.sapsid),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcessesAlarmMetricsPropertyToTerraform(struct?: CcApplication.ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcessesAlarmMetricsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        alarm_metric_name: cdktn.stringToTerraform(struct!.alarmMetricName),
    }
}


export function ccApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcessesAlarmMetricsPropertyToHclTerraform(struct?: CcApplication.ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcessesAlarmMetricsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        alarm_metric_name: {
            value: cdktn.stringToHclTerraform(struct!.alarmMetricName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcessesPropertyToTerraform(struct?: CcApplication.ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcessesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        alarm_metrics: cdktn.listMapper(ccApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcessesAlarmMetricsPropertyToTerraform, false)(struct!.alarmMetrics),
        process_name: cdktn.stringToTerraform(struct!.processName),
    }
}


export function ccApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcessesPropertyToHclTerraform(struct?: CcApplication.ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcessesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        alarm_metrics: {
            value: cdktn.listMapperHcl(ccApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcessesAlarmMetricsPropertyToHclTerraform, false)(struct!.alarmMetrics),
            isBlock: true,
            type: "list",
            storageClassType: "ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcessesAlarmMetricsPropertyList",
        },
        process_name: {
            value: cdktn.stringToHclTerraform(struct!.processName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsSqlServerPrometheusExporterPropertyToTerraform(struct?: CcApplication.ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsSqlServerPrometheusExporterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        prometheus_port: cdktn.stringToTerraform(struct!.prometheusPort),
        sql_secret_name: cdktn.stringToTerraform(struct!.sqlSecretName),
    }
}


export function ccApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsSqlServerPrometheusExporterPropertyToHclTerraform(struct?: CcApplication.ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsSqlServerPrometheusExporterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        prometheus_port: {
            value: cdktn.stringToHclTerraform(struct!.prometheusPort),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sql_secret_name: {
            value: cdktn.stringToHclTerraform(struct!.sqlSecretName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsWindowsEventsPropertyToTerraform(struct?: CcApplication.ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsWindowsEventsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        event_levels: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.eventLevels),
        event_name: cdktn.stringToTerraform(struct!.eventName),
        log_group_name: cdktn.stringToTerraform(struct!.logGroupName),
        pattern_set: cdktn.stringToTerraform(struct!.patternSet),
    }
}


export function ccApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsWindowsEventsPropertyToHclTerraform(struct?: CcApplication.ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsWindowsEventsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        event_levels: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.eventLevels),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        event_name: {
            value: cdktn.stringToHclTerraform(struct!.eventName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        log_group_name: {
            value: cdktn.stringToHclTerraform(struct!.logGroupName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        pattern_set: {
            value: cdktn.stringToHclTerraform(struct!.patternSet),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsPropertyToTerraform(struct?: CcApplication.ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        alarm_metrics: cdktn.listMapper(ccApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmMetricsPropertyToTerraform, false)(struct!.alarmMetrics),
        alarms: cdktn.listMapper(ccApplicationAlarmsPropertyToTerraform, false)(struct!.alarms),
        ha_cluster_prometheus_exporter: ccApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsHaClusterPrometheusExporterPropertyToTerraform(struct!.haClusterPrometheusExporter),
        hana_prometheus_exporter: ccApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsHanaPrometheusExporterPropertyToTerraform(struct!.hanaPrometheusExporter),
        jmx_prometheus_exporter: ccApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsJmxPrometheusExporterPropertyToTerraform(struct!.jmxPrometheusExporter),
        logs: cdktn.listMapper(ccApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsLogsPropertyToTerraform, false)(struct!.logs),
        net_weaver_prometheus_exporter: ccApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsNetWeaverPrometheusExporterPropertyToTerraform(struct!.netWeaverPrometheusExporter),
        processes: cdktn.listMapper(ccApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcessesPropertyToTerraform, false)(struct!.processes),
        sql_server_prometheus_exporter: ccApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsSqlServerPrometheusExporterPropertyToTerraform(struct!.sqlServerPrometheusExporter),
        windows_events: cdktn.listMapper(ccApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsWindowsEventsPropertyToTerraform, false)(struct!.windowsEvents),
    }
}


export function ccApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsPropertyToHclTerraform(struct?: CcApplication.ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        alarm_metrics: {
            value: cdktn.listMapperHcl(ccApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmMetricsPropertyToHclTerraform, false)(struct!.alarmMetrics),
            isBlock: true,
            type: "list",
            storageClassType: "ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmMetricsPropertyList",
        },
        alarms: {
            value: cdktn.listMapperHcl(ccApplicationAlarmsPropertyToHclTerraform, false)(struct!.alarms),
            isBlock: true,
            type: "list",
            storageClassType: "AlarmsPropertyList",
        },
        ha_cluster_prometheus_exporter: {
            value: ccApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsHaClusterPrometheusExporterPropertyToHclTerraform(struct!.haClusterPrometheusExporter),
            isBlock: true,
            type: "struct",
            storageClassType: "ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsHaClusterPrometheusExporterProperty",
        },
        hana_prometheus_exporter: {
            value: ccApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsHanaPrometheusExporterPropertyToHclTerraform(struct!.hanaPrometheusExporter),
            isBlock: true,
            type: "struct",
            storageClassType: "ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsHanaPrometheusExporterProperty",
        },
        jmx_prometheus_exporter: {
            value: ccApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsJmxPrometheusExporterPropertyToHclTerraform(struct!.jmxPrometheusExporter),
            isBlock: true,
            type: "struct",
            storageClassType: "ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsJmxPrometheusExporterProperty",
        },
        logs: {
            value: cdktn.listMapperHcl(ccApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsLogsPropertyToHclTerraform, false)(struct!.logs),
            isBlock: true,
            type: "list",
            storageClassType: "ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsLogsPropertyList",
        },
        net_weaver_prometheus_exporter: {
            value: ccApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsNetWeaverPrometheusExporterPropertyToHclTerraform(struct!.netWeaverPrometheusExporter),
            isBlock: true,
            type: "struct",
            storageClassType: "ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsNetWeaverPrometheusExporterProperty",
        },
        processes: {
            value: cdktn.listMapperHcl(ccApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcessesPropertyToHclTerraform, false)(struct!.processes),
            isBlock: true,
            type: "list",
            storageClassType: "ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcessesPropertyList",
        },
        sql_server_prometheus_exporter: {
            value: ccApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsSqlServerPrometheusExporterPropertyToHclTerraform(struct!.sqlServerPrometheusExporter),
            isBlock: true,
            type: "struct",
            storageClassType: "ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsSqlServerPrometheusExporterProperty",
        },
        windows_events: {
            value: cdktn.listMapperHcl(ccApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsWindowsEventsPropertyToHclTerraform, false)(struct!.windowsEvents),
            isBlock: true,
            type: "list",
            storageClassType: "ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsWindowsEventsPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsPropertyToTerraform(struct?: CcApplication.ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        alarm_metric_name: cdktn.stringToTerraform(struct!.alarmMetricName),
    }
}


export function ccApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsPropertyToHclTerraform(struct?: CcApplication.ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        alarm_metric_name: {
            value: cdktn.stringToHclTerraform(struct!.alarmMetricName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsPropertyToTerraform(struct?: CcApplication.ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        encoding: cdktn.stringToTerraform(struct!.encoding),
        log_group_name: cdktn.stringToTerraform(struct!.logGroupName),
        log_path: cdktn.stringToTerraform(struct!.logPath),
        log_type: cdktn.stringToTerraform(struct!.logType),
        pattern_set: cdktn.stringToTerraform(struct!.patternSet),
    }
}


export function ccApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsPropertyToHclTerraform(struct?: CcApplication.ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        encoding: {
            value: cdktn.stringToHclTerraform(struct!.encoding),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        log_group_name: {
            value: cdktn.stringToHclTerraform(struct!.logGroupName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        log_path: {
            value: cdktn.stringToHclTerraform(struct!.logPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        log_type: {
            value: cdktn.stringToHclTerraform(struct!.logType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        pattern_set: {
            value: cdktn.stringToHclTerraform(struct!.patternSet),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetricsPropertyToTerraform(struct?: CcApplication.ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetricsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        alarm_metric_name: cdktn.stringToTerraform(struct!.alarmMetricName),
    }
}


export function ccApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetricsPropertyToHclTerraform(struct?: CcApplication.ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetricsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        alarm_metric_name: {
            value: cdktn.stringToHclTerraform(struct!.alarmMetricName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesPropertyToTerraform(struct?: CcApplication.ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        alarm_metrics: cdktn.listMapper(ccApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetricsPropertyToTerraform, false)(struct!.alarmMetrics),
        process_name: cdktn.stringToTerraform(struct!.processName),
    }
}


export function ccApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesPropertyToHclTerraform(struct?: CcApplication.ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        alarm_metrics: {
            value: cdktn.listMapperHcl(ccApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetricsPropertyToHclTerraform, false)(struct!.alarmMetrics),
            isBlock: true,
            type: "list",
            storageClassType: "ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetricsPropertyList",
        },
        process_name: {
            value: cdktn.stringToHclTerraform(struct!.processName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsPropertyToTerraform(struct?: CcApplication.ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        event_levels: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.eventLevels),
        event_name: cdktn.stringToTerraform(struct!.eventName),
        log_group_name: cdktn.stringToTerraform(struct!.logGroupName),
        pattern_set: cdktn.stringToTerraform(struct!.patternSet),
    }
}


export function ccApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsPropertyToHclTerraform(struct?: CcApplication.ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        event_levels: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.eventLevels),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        event_name: {
            value: cdktn.stringToHclTerraform(struct!.eventName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        log_group_name: {
            value: cdktn.stringToHclTerraform(struct!.logGroupName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        pattern_set: {
            value: cdktn.stringToHclTerraform(struct!.patternSet),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsPropertyToTerraform(struct?: CcApplication.ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        alarm_metrics: cdktn.listMapper(ccApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsPropertyToTerraform, false)(struct!.alarmMetrics),
        logs: cdktn.listMapper(ccApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsPropertyToTerraform, false)(struct!.logs),
        processes: cdktn.listMapper(ccApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesPropertyToTerraform, false)(struct!.processes),
        windows_events: cdktn.listMapper(ccApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsPropertyToTerraform, false)(struct!.windowsEvents),
    }
}


export function ccApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsPropertyToHclTerraform(struct?: CcApplication.ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        alarm_metrics: {
            value: cdktn.listMapperHcl(ccApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsPropertyToHclTerraform, false)(struct!.alarmMetrics),
            isBlock: true,
            type: "list",
            storageClassType: "ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsPropertyList",
        },
        logs: {
            value: cdktn.listMapperHcl(ccApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsPropertyToHclTerraform, false)(struct!.logs),
            isBlock: true,
            type: "list",
            storageClassType: "ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsPropertyList",
        },
        processes: {
            value: cdktn.listMapperHcl(ccApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesPropertyToHclTerraform, false)(struct!.processes),
            isBlock: true,
            type: "list",
            storageClassType: "ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesPropertyList",
        },
        windows_events: {
            value: cdktn.listMapperHcl(ccApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsPropertyToHclTerraform, false)(struct!.windowsEvents),
            isBlock: true,
            type: "list",
            storageClassType: "ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccApplicationSubComponentTypeConfigurationsPropertyToTerraform(struct?: CcApplication.SubComponentTypeConfigurationsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        sub_component_configuration_details: ccApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsPropertyToTerraform(struct!.subComponentConfigurationDetails),
        sub_component_type: cdktn.stringToTerraform(struct!.subComponentType),
    }
}


export function ccApplicationSubComponentTypeConfigurationsPropertyToHclTerraform(struct?: CcApplication.SubComponentTypeConfigurationsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        sub_component_configuration_details: {
            value: ccApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsPropertyToHclTerraform(struct!.subComponentConfigurationDetails),
            isBlock: true,
            type: "struct",
            storageClassType: "ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProperty",
        },
        sub_component_type: {
            value: cdktn.stringToHclTerraform(struct!.subComponentType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccApplicationDefaultOverwriteComponentConfigurationPropertyToTerraform(struct?: CcApplication.DefaultOverwriteComponentConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        configuration_details: ccApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsPropertyToTerraform(struct!.configurationDetails),
        sub_component_type_configurations: cdktn.listMapper(ccApplicationSubComponentTypeConfigurationsPropertyToTerraform, false)(struct!.subComponentTypeConfigurations),
    }
}


export function ccApplicationDefaultOverwriteComponentConfigurationPropertyToHclTerraform(struct?: CcApplication.DefaultOverwriteComponentConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        configuration_details: {
            value: ccApplicationComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsPropertyToHclTerraform(struct!.configurationDetails),
            isBlock: true,
            type: "struct",
            storageClassType: "ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProperty",
        },
        sub_component_type_configurations: {
            value: cdktn.listMapperHcl(ccApplicationSubComponentTypeConfigurationsPropertyToHclTerraform, false)(struct!.subComponentTypeConfigurations),
            isBlock: true,
            type: "list",
            storageClassType: "SubComponentTypeConfigurationsPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccApplicationComponentMonitoringSettingPropertyToTerraform(struct?: CcApplication.ComponentMonitoringSettingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        component_arn: cdktn.stringToTerraform(struct!.componentArn),
        component_configuration_mode: cdktn.stringToTerraform(struct!.componentConfigurationMode),
        component_name: cdktn.stringToTerraform(struct!.componentName),
        custom_component_configuration: ccApplicationComponentConfigurationPropertyToTerraform(struct!.customComponentConfiguration),
        default_overwrite_component_configuration: ccApplicationDefaultOverwriteComponentConfigurationPropertyToTerraform(struct!.defaultOverwriteComponentConfiguration),
        tier: cdktn.stringToTerraform(struct!.tier),
    }
}


export function ccApplicationComponentMonitoringSettingPropertyToHclTerraform(struct?: CcApplication.ComponentMonitoringSettingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        component_arn: {
            value: cdktn.stringToHclTerraform(struct!.componentArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        component_configuration_mode: {
            value: cdktn.stringToHclTerraform(struct!.componentConfigurationMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        component_name: {
            value: cdktn.stringToHclTerraform(struct!.componentName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        custom_component_configuration: {
            value: ccApplicationComponentConfigurationPropertyToHclTerraform(struct!.customComponentConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "ComponentConfigurationProperty",
        },
        default_overwrite_component_configuration: {
            value: ccApplicationDefaultOverwriteComponentConfigurationPropertyToHclTerraform(struct!.defaultOverwriteComponentConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "DefaultOverwriteComponentConfigurationProperty",
        },
        tier: {
            value: cdktn.stringToHclTerraform(struct!.tier),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccApplicationCustomComponentPropertyToTerraform(struct?: CcApplication.CustomComponentProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        component_name: cdktn.stringToTerraform(struct!.componentName),
        resource_list: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resourceList),
    }
}


export function ccApplicationCustomComponentPropertyToHclTerraform(struct?: CcApplication.CustomComponentProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        component_name: {
            value: cdktn.stringToHclTerraform(struct!.componentName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        resource_list: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resourceList),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccApplicationLogPatternPropertyToTerraform(struct?: CcApplication.LogPatternProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        pattern: cdktn.stringToTerraform(struct!.pattern),
        pattern_name: cdktn.stringToTerraform(struct!.patternName),
        rank: cdktn.numberToTerraform(struct!.rank),
    }
}


export function ccApplicationLogPatternPropertyToHclTerraform(struct?: CcApplication.LogPatternProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        pattern: {
            value: cdktn.stringToHclTerraform(struct!.pattern),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        pattern_name: {
            value: cdktn.stringToHclTerraform(struct!.patternName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        rank: {
            value: cdktn.numberToHclTerraform(struct!.rank),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccApplicationLogPatternSetPropertyToTerraform(struct?: CcApplication.LogPatternSetProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        log_patterns: cdktn.listMapper(ccApplicationLogPatternPropertyToTerraform, false)(struct!.logPatterns),
        pattern_set_name: cdktn.stringToTerraform(struct!.patternSetName),
    }
}


export function ccApplicationLogPatternSetPropertyToHclTerraform(struct?: CcApplication.LogPatternSetProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        log_patterns: {
            value: cdktn.listMapperHcl(ccApplicationLogPatternPropertyToHclTerraform, false)(struct!.logPatterns),
            isBlock: true,
            type: "list",
            storageClassType: "LogPatternPropertyList",
        },
        pattern_set_name: {
            value: cdktn.stringToHclTerraform(struct!.patternSetName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccApplicationTagPropertyToTerraform(struct?: CcApplication.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccApplicationTagPropertyToHclTerraform(struct?: CcApplication.TagProperty | cdktn.IResolvable): any {
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


export namespace CcApplication {
export interface AlarmMetricProperty {
    /**
    * The name of the metric to be monitored for the component.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#alarm_metric_name CcApplication#alarm_metric_name}
    */
    readonly alarmMetricName?: string;
}
export class AlarmMetricPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AlarmMetricProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._alarmMetricName !== undefined) {
            hasAnyValues = true;
            internalValueResult.alarmMetricName = this._alarmMetricName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AlarmMetricProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._alarmMetricName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._alarmMetricName = value.alarmMetricName;
        }
    }

    // alarm_metric_name - computed: true, optional: true, required: false
    private _alarmMetricName?: string; 
    public get alarmMetricName() {
        return this.getStringAttribute('alarm_metric_name');
    }
    public set alarmMetricName(value: string) {
        this._alarmMetricName = value;
    }
    public resetAlarmMetricName() {
        this._alarmMetricName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get alarmMetricNameInput() {
        return this._alarmMetricName;
    }
}

export class AlarmMetricPropertyList extends cdktn.ComplexList {
    public internalValue? : AlarmMetricProperty[] | cdktn.IResolvable

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
    public get(index: number): AlarmMetricPropertyOutputReference {
        return new AlarmMetricPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface AlarmProperty {
    /**
    * The name of the CloudWatch alarm to be monitored for the component.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#alarm_name CcApplication#alarm_name}
    */
    readonly alarmName?: string;
    /**
    * Indicates the degree of outage when the alarm goes off.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#severity CcApplication#severity}
    */
    readonly severity?: string;
}
export class AlarmPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AlarmProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._alarmName !== undefined) {
            hasAnyValues = true;
            internalValueResult.alarmName = this._alarmName;
        }
        if (this._severity !== undefined) {
            hasAnyValues = true;
            internalValueResult.severity = this._severity;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AlarmProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._alarmName = undefined;
            this._severity = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._alarmName = value.alarmName;
            this._severity = value.severity;
        }
    }

    // alarm_name - computed: true, optional: true, required: false
    private _alarmName?: string; 
    public get alarmName() {
        return this.getStringAttribute('alarm_name');
    }
    public set alarmName(value: string) {
        this._alarmName = value;
    }
    public resetAlarmName() {
        this._alarmName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get alarmNameInput() {
        return this._alarmName;
    }

    // severity - computed: true, optional: true, required: false
    private _severity?: string; 
    public get severity() {
        return this.getStringAttribute('severity');
    }
    public set severity(value: string) {
        this._severity = value;
    }
    public resetSeverity() {
        this._severity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get severityInput() {
        return this._severity;
    }
}

export class AlarmPropertyList extends cdktn.ComplexList {
    public internalValue? : AlarmProperty[] | cdktn.IResolvable

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
    public get(index: number): AlarmPropertyOutputReference {
        return new AlarmPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface HAClusterPrometheusExporterProperty {
    /**
    * Prometheus exporter port.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#prometheus_port CcApplication#prometheus_port}
    */
    readonly prometheusPort?: string;
}
export class HAClusterPrometheusExporterPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HAClusterPrometheusExporterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._prometheusPort !== undefined) {
            hasAnyValues = true;
            internalValueResult.prometheusPort = this._prometheusPort;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HAClusterPrometheusExporterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._prometheusPort = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._prometheusPort = value.prometheusPort;
        }
    }

    // prometheus_port - computed: true, optional: true, required: false
    private _prometheusPort?: string; 
    public get prometheusPort() {
        return this.getStringAttribute('prometheus_port');
    }
    public set prometheusPort(value: string) {
        this._prometheusPort = value;
    }
    public resetPrometheusPort() {
        this._prometheusPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get prometheusPortInput() {
        return this._prometheusPort;
    }
}
export interface HANAPrometheusExporterProperty {
    /**
    * A flag which indicates agreeing to install SAP HANA DB client.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#agree_to_install_hanadb_client CcApplication#agree_to_install_hanadb_client}
    */
    readonly agreeToInstallHanadbClient?: boolean | cdktn.IResolvable;
    /**
    * The HANA DB port.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#hana_port CcApplication#hana_port}
    */
    readonly hanaPort?: string;
    /**
    * The secret name which manages the HANA DB credentials e.g. {
    *   "username": "<>",
    *   "password": "<>"
    * }.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#hana_secret_name CcApplication#hana_secret_name}
    */
    readonly hanaSecretName?: string;
    /**
    * HANA DB SID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#hanasid CcApplication#hanasid}
    */
    readonly hanasid?: string;
    /**
    * Prometheus exporter port.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#prometheus_port CcApplication#prometheus_port}
    */
    readonly prometheusPort?: string;
}
export class HANAPrometheusExporterPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HANAPrometheusExporterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._agreeToInstallHanadbClient !== undefined) {
            hasAnyValues = true;
            internalValueResult.agreeToInstallHanadbClient = this._agreeToInstallHanadbClient;
        }
        if (this._hanaPort !== undefined) {
            hasAnyValues = true;
            internalValueResult.hanaPort = this._hanaPort;
        }
        if (this._hanaSecretName !== undefined) {
            hasAnyValues = true;
            internalValueResult.hanaSecretName = this._hanaSecretName;
        }
        if (this._hanasid !== undefined) {
            hasAnyValues = true;
            internalValueResult.hanasid = this._hanasid;
        }
        if (this._prometheusPort !== undefined) {
            hasAnyValues = true;
            internalValueResult.prometheusPort = this._prometheusPort;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: HANAPrometheusExporterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._agreeToInstallHanadbClient = undefined;
            this._hanaPort = undefined;
            this._hanaSecretName = undefined;
            this._hanasid = undefined;
            this._prometheusPort = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._agreeToInstallHanadbClient = value.agreeToInstallHanadbClient;
            this._hanaPort = value.hanaPort;
            this._hanaSecretName = value.hanaSecretName;
            this._hanasid = value.hanasid;
            this._prometheusPort = value.prometheusPort;
        }
    }

    // agree_to_install_hanadb_client - computed: true, optional: true, required: false
    private _agreeToInstallHanadbClient?: boolean | cdktn.IResolvable; 
    public get agreeToInstallHanadbClient() {
        return this.getBooleanAttribute('agree_to_install_hanadb_client');
    }
    public set agreeToInstallHanadbClient(value: boolean | cdktn.IResolvable) {
        this._agreeToInstallHanadbClient = value;
    }
    public resetAgreeToInstallHanadbClient() {
        this._agreeToInstallHanadbClient = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get agreeToInstallHanadbClientInput() {
        return this._agreeToInstallHanadbClient;
    }

    // hana_port - computed: true, optional: true, required: false
    private _hanaPort?: string; 
    public get hanaPort() {
        return this.getStringAttribute('hana_port');
    }
    public set hanaPort(value: string) {
        this._hanaPort = value;
    }
    public resetHanaPort() {
        this._hanaPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hanaPortInput() {
        return this._hanaPort;
    }

    // hana_secret_name - computed: true, optional: true, required: false
    private _hanaSecretName?: string; 
    public get hanaSecretName() {
        return this.getStringAttribute('hana_secret_name');
    }
    public set hanaSecretName(value: string) {
        this._hanaSecretName = value;
    }
    public resetHanaSecretName() {
        this._hanaSecretName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hanaSecretNameInput() {
        return this._hanaSecretName;
    }

    // hanasid - computed: true, optional: true, required: false
    private _hanasid?: string; 
    public get hanasid() {
        return this.getStringAttribute('hanasid');
    }
    public set hanasid(value: string) {
        this._hanasid = value;
    }
    public resetHanasid() {
        this._hanasid = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hanasidInput() {
        return this._hanasid;
    }

    // prometheus_port - computed: true, optional: true, required: false
    private _prometheusPort?: string; 
    public get prometheusPort() {
        return this.getStringAttribute('prometheus_port');
    }
    public set prometheusPort(value: string) {
        this._prometheusPort = value;
    }
    public resetPrometheusPort() {
        this._prometheusPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get prometheusPortInput() {
        return this._prometheusPort;
    }
}
export interface JMXPrometheusExporterProperty {
    /**
    * Java agent host port
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#host_port CcApplication#host_port}
    */
    readonly hostPort?: string;
    /**
    * JMX service URL.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#jmxurl CcApplication#jmxurl}
    */
    readonly jmxurl?: string;
    /**
    * Prometheus exporter port.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#prometheus_port CcApplication#prometheus_port}
    */
    readonly prometheusPort?: string;
}
export class JMXPrometheusExporterPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): JMXPrometheusExporterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._hostPort !== undefined) {
            hasAnyValues = true;
            internalValueResult.hostPort = this._hostPort;
        }
        if (this._jmxurl !== undefined) {
            hasAnyValues = true;
            internalValueResult.jmxurl = this._jmxurl;
        }
        if (this._prometheusPort !== undefined) {
            hasAnyValues = true;
            internalValueResult.prometheusPort = this._prometheusPort;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: JMXPrometheusExporterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._hostPort = undefined;
            this._jmxurl = undefined;
            this._prometheusPort = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._hostPort = value.hostPort;
            this._jmxurl = value.jmxurl;
            this._prometheusPort = value.prometheusPort;
        }
    }

    // host_port - computed: true, optional: true, required: false
    private _hostPort?: string; 
    public get hostPort() {
        return this.getStringAttribute('host_port');
    }
    public set hostPort(value: string) {
        this._hostPort = value;
    }
    public resetHostPort() {
        this._hostPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostPortInput() {
        return this._hostPort;
    }

    // jmxurl - computed: true, optional: true, required: false
    private _jmxurl?: string; 
    public get jmxurl() {
        return this.getStringAttribute('jmxurl');
    }
    public set jmxurl(value: string) {
        this._jmxurl = value;
    }
    public resetJmxurl() {
        this._jmxurl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jmxurlInput() {
        return this._jmxurl;
    }

    // prometheus_port - computed: true, optional: true, required: false
    private _prometheusPort?: string; 
    public get prometheusPort() {
        return this.getStringAttribute('prometheus_port');
    }
    public set prometheusPort(value: string) {
        this._prometheusPort = value;
    }
    public resetPrometheusPort() {
        this._prometheusPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get prometheusPortInput() {
        return this._prometheusPort;
    }
}
export interface LogProperty {
    /**
    * The type of encoding of the logs to be monitored.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#encoding CcApplication#encoding}
    */
    readonly encoding?: string;
    /**
    * The CloudWatch log group name to be associated to the monitored log.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#log_group_name CcApplication#log_group_name}
    */
    readonly logGroupName?: string;
    /**
    * The path of the logs to be monitored.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#log_path CcApplication#log_path}
    */
    readonly logPath?: string;
    /**
    * The log type decides the log patterns against which Application Insights analyzes the log.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#log_type CcApplication#log_type}
    */
    readonly logType?: string;
    /**
    * The name of the log pattern set.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#pattern_set CcApplication#pattern_set}
    */
    readonly patternSet?: string;
}
export class LogPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): LogProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._encoding !== undefined) {
            hasAnyValues = true;
            internalValueResult.encoding = this._encoding;
        }
        if (this._logGroupName !== undefined) {
            hasAnyValues = true;
            internalValueResult.logGroupName = this._logGroupName;
        }
        if (this._logPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.logPath = this._logPath;
        }
        if (this._logType !== undefined) {
            hasAnyValues = true;
            internalValueResult.logType = this._logType;
        }
        if (this._patternSet !== undefined) {
            hasAnyValues = true;
            internalValueResult.patternSet = this._patternSet;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LogProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._encoding = undefined;
            this._logGroupName = undefined;
            this._logPath = undefined;
            this._logType = undefined;
            this._patternSet = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._encoding = value.encoding;
            this._logGroupName = value.logGroupName;
            this._logPath = value.logPath;
            this._logType = value.logType;
            this._patternSet = value.patternSet;
        }
    }

    // encoding - computed: true, optional: true, required: false
    private _encoding?: string; 
    public get encoding() {
        return this.getStringAttribute('encoding');
    }
    public set encoding(value: string) {
        this._encoding = value;
    }
    public resetEncoding() {
        this._encoding = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encodingInput() {
        return this._encoding;
    }

    // log_group_name - computed: true, optional: true, required: false
    private _logGroupName?: string; 
    public get logGroupName() {
        return this.getStringAttribute('log_group_name');
    }
    public set logGroupName(value: string) {
        this._logGroupName = value;
    }
    public resetLogGroupName() {
        this._logGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logGroupNameInput() {
        return this._logGroupName;
    }

    // log_path - computed: true, optional: true, required: false
    private _logPath?: string; 
    public get logPath() {
        return this.getStringAttribute('log_path');
    }
    public set logPath(value: string) {
        this._logPath = value;
    }
    public resetLogPath() {
        this._logPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logPathInput() {
        return this._logPath;
    }

    // log_type - computed: true, optional: true, required: false
    private _logType?: string; 
    public get logType() {
        return this.getStringAttribute('log_type');
    }
    public set logType(value: string) {
        this._logType = value;
    }
    public resetLogType() {
        this._logType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logTypeInput() {
        return this._logType;
    }

    // pattern_set - computed: true, optional: true, required: false
    private _patternSet?: string; 
    public get patternSet() {
        return this.getStringAttribute('pattern_set');
    }
    public set patternSet(value: string) {
        this._patternSet = value;
    }
    public resetPatternSet() {
        this._patternSet = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get patternSetInput() {
        return this._patternSet;
    }
}

export class LogPropertyList extends cdktn.ComplexList {
    public internalValue? : LogProperty[] | cdktn.IResolvable

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
    public get(index: number): LogPropertyOutputReference {
        return new LogPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface NetWeaverPrometheusExporterProperty {
    /**
    * SAP instance numbers for ASCS, ERS, and App Servers.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#instance_numbers CcApplication#instance_numbers}
    */
    readonly instanceNumbers?: string[];
    /**
    * Prometheus exporter port.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#prometheus_port CcApplication#prometheus_port}
    */
    readonly prometheusPort?: string;
    /**
    * SAP NetWeaver SID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#sapsid CcApplication#sapsid}
    */
    readonly sapsid?: string;
}
export class NetWeaverPrometheusExporterPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): NetWeaverPrometheusExporterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._instanceNumbers !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceNumbers = this._instanceNumbers;
        }
        if (this._prometheusPort !== undefined) {
            hasAnyValues = true;
            internalValueResult.prometheusPort = this._prometheusPort;
        }
        if (this._sapsid !== undefined) {
            hasAnyValues = true;
            internalValueResult.sapsid = this._sapsid;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NetWeaverPrometheusExporterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._instanceNumbers = undefined;
            this._prometheusPort = undefined;
            this._sapsid = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._instanceNumbers = value.instanceNumbers;
            this._prometheusPort = value.prometheusPort;
            this._sapsid = value.sapsid;
        }
    }

    // instance_numbers - computed: true, optional: true, required: false
    private _instanceNumbers?: string[]; 
    public get instanceNumbers() {
        return this.getListAttribute('instance_numbers');
    }
    public set instanceNumbers(value: string[]) {
        this._instanceNumbers = value;
    }
    public resetInstanceNumbers() {
        this._instanceNumbers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceNumbersInput() {
        return this._instanceNumbers;
    }

    // prometheus_port - computed: true, optional: true, required: false
    private _prometheusPort?: string; 
    public get prometheusPort() {
        return this.getStringAttribute('prometheus_port');
    }
    public set prometheusPort(value: string) {
        this._prometheusPort = value;
    }
    public resetPrometheusPort() {
        this._prometheusPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get prometheusPortInput() {
        return this._prometheusPort;
    }

    // sapsid - computed: true, optional: true, required: false
    private _sapsid?: string; 
    public get sapsid() {
        return this.getStringAttribute('sapsid');
    }
    public set sapsid(value: string) {
        this._sapsid = value;
    }
    public resetSapsid() {
        this._sapsid = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sapsidInput() {
        return this._sapsid;
    }
}
export interface ComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsProcessesAlarmMetricsProperty {
    /**
    * The name of the metric to be monitored for the component.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#alarm_metric_name CcApplication#alarm_metric_name}
    */
    readonly alarmMetricName?: string;
}
export class ComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsProcessesAlarmMetricsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsProcessesAlarmMetricsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._alarmMetricName !== undefined) {
            hasAnyValues = true;
            internalValueResult.alarmMetricName = this._alarmMetricName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsProcessesAlarmMetricsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._alarmMetricName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._alarmMetricName = value.alarmMetricName;
        }
    }

    // alarm_metric_name - computed: true, optional: true, required: false
    private _alarmMetricName?: string; 
    public get alarmMetricName() {
        return this.getStringAttribute('alarm_metric_name');
    }
    public set alarmMetricName(value: string) {
        this._alarmMetricName = value;
    }
    public resetAlarmMetricName() {
        this._alarmMetricName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get alarmMetricNameInput() {
        return this._alarmMetricName;
    }
}

export class ComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsProcessesAlarmMetricsPropertyList extends cdktn.ComplexList {
    public internalValue? : ComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsProcessesAlarmMetricsProperty[] | cdktn.IResolvable

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
    public get(index: number): ComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsProcessesAlarmMetricsPropertyOutputReference {
        return new ComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsProcessesAlarmMetricsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ProcessProperty {
    /**
    * A list of metrics to monitor for the component.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#alarm_metrics CcApplication#alarm_metrics}
    */
    readonly alarmMetrics?: ComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsProcessesAlarmMetricsProperty[] | cdktn.IResolvable;
    /**
    * The name of the process to be monitored for the component.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#process_name CcApplication#process_name}
    */
    readonly processName?: string;
}
export class ProcessPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ProcessProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._alarmMetrics?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.alarmMetrics = this._alarmMetrics?.internalValue;
        }
        if (this._processName !== undefined) {
            hasAnyValues = true;
            internalValueResult.processName = this._processName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ProcessProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._alarmMetrics.internalValue = undefined;
            this._processName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._alarmMetrics.internalValue = value.alarmMetrics;
            this._processName = value.processName;
        }
    }

    // alarm_metrics - computed: true, optional: true, required: false
    private _alarmMetrics = new ComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsProcessesAlarmMetricsPropertyList(this, "alarm_metrics", false);
    public get alarmMetrics() {
        return this._alarmMetrics;
    }
    public putAlarmMetrics(value: ComponentMonitoringSettingsCustomComponentConfigurationConfigurationDetailsProcessesAlarmMetricsProperty[] | cdktn.IResolvable) {
        this._alarmMetrics.internalValue = value;
    }
    public resetAlarmMetrics() {
        this._alarmMetrics.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get alarmMetricsInput() {
        return this._alarmMetrics.internalValue;
    }

    // process_name - computed: true, optional: true, required: false
    private _processName?: string; 
    public get processName() {
        return this.getStringAttribute('process_name');
    }
    public set processName(value: string) {
        this._processName = value;
    }
    public resetProcessName() {
        this._processName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get processNameInput() {
        return this._processName;
    }
}

export class ProcessPropertyList extends cdktn.ComplexList {
    public internalValue? : ProcessProperty[] | cdktn.IResolvable

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
    public get(index: number): ProcessPropertyOutputReference {
        return new ProcessPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface SQLServerPrometheusExporterProperty {
    /**
    * Prometheus exporter port.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#prometheus_port CcApplication#prometheus_port}
    */
    readonly prometheusPort?: string;
    /**
    * Secret name which managers SQL exporter connection. e.g. {"data_source_name": "sqlserver://<USERNAME>:<PASSWORD>@localhost:1433"}
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#sql_secret_name CcApplication#sql_secret_name}
    */
    readonly sqlSecretName?: string;
}
export class SQLServerPrometheusExporterPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SQLServerPrometheusExporterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._prometheusPort !== undefined) {
            hasAnyValues = true;
            internalValueResult.prometheusPort = this._prometheusPort;
        }
        if (this._sqlSecretName !== undefined) {
            hasAnyValues = true;
            internalValueResult.sqlSecretName = this._sqlSecretName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SQLServerPrometheusExporterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._prometheusPort = undefined;
            this._sqlSecretName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._prometheusPort = value.prometheusPort;
            this._sqlSecretName = value.sqlSecretName;
        }
    }

    // prometheus_port - computed: true, optional: true, required: false
    private _prometheusPort?: string; 
    public get prometheusPort() {
        return this.getStringAttribute('prometheus_port');
    }
    public set prometheusPort(value: string) {
        this._prometheusPort = value;
    }
    public resetPrometheusPort() {
        this._prometheusPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get prometheusPortInput() {
        return this._prometheusPort;
    }

    // sql_secret_name - computed: true, optional: true, required: false
    private _sqlSecretName?: string; 
    public get sqlSecretName() {
        return this.getStringAttribute('sql_secret_name');
    }
    public set sqlSecretName(value: string) {
        this._sqlSecretName = value;
    }
    public resetSqlSecretName() {
        this._sqlSecretName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sqlSecretNameInput() {
        return this._sqlSecretName;
    }
}
export interface WindowsEventProperty {
    /**
    * The levels of event to log. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#event_levels CcApplication#event_levels}
    */
    readonly eventLevels?: string[];
    /**
    * The type of Windows Events to log.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#event_name CcApplication#event_name}
    */
    readonly eventName?: string;
    /**
    * The CloudWatch log group name to be associated to the monitored log.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#log_group_name CcApplication#log_group_name}
    */
    readonly logGroupName?: string;
    /**
    * The name of the log pattern set.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#pattern_set CcApplication#pattern_set}
    */
    readonly patternSet?: string;
}
export class WindowsEventPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): WindowsEventProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._eventLevels !== undefined) {
            hasAnyValues = true;
            internalValueResult.eventLevels = this._eventLevels;
        }
        if (this._eventName !== undefined) {
            hasAnyValues = true;
            internalValueResult.eventName = this._eventName;
        }
        if (this._logGroupName !== undefined) {
            hasAnyValues = true;
            internalValueResult.logGroupName = this._logGroupName;
        }
        if (this._patternSet !== undefined) {
            hasAnyValues = true;
            internalValueResult.patternSet = this._patternSet;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WindowsEventProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._eventLevels = undefined;
            this._eventName = undefined;
            this._logGroupName = undefined;
            this._patternSet = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._eventLevels = value.eventLevels;
            this._eventName = value.eventName;
            this._logGroupName = value.logGroupName;
            this._patternSet = value.patternSet;
        }
    }

    // event_levels - computed: true, optional: true, required: false
    private _eventLevels?: string[]; 
    public get eventLevels() {
        return this.getListAttribute('event_levels');
    }
    public set eventLevels(value: string[]) {
        this._eventLevels = value;
    }
    public resetEventLevels() {
        this._eventLevels = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventLevelsInput() {
        return this._eventLevels;
    }

    // event_name - computed: true, optional: true, required: false
    private _eventName?: string; 
    public get eventName() {
        return this.getStringAttribute('event_name');
    }
    public set eventName(value: string) {
        this._eventName = value;
    }
    public resetEventName() {
        this._eventName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventNameInput() {
        return this._eventName;
    }

    // log_group_name - computed: true, optional: true, required: false
    private _logGroupName?: string; 
    public get logGroupName() {
        return this.getStringAttribute('log_group_name');
    }
    public set logGroupName(value: string) {
        this._logGroupName = value;
    }
    public resetLogGroupName() {
        this._logGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logGroupNameInput() {
        return this._logGroupName;
    }

    // pattern_set - computed: true, optional: true, required: false
    private _patternSet?: string; 
    public get patternSet() {
        return this.getStringAttribute('pattern_set');
    }
    public set patternSet(value: string) {
        this._patternSet = value;
    }
    public resetPatternSet() {
        this._patternSet = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get patternSetInput() {
        return this._patternSet;
    }
}

export class WindowsEventPropertyList extends cdktn.ComplexList {
    public internalValue? : WindowsEventProperty[] | cdktn.IResolvable

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
    public get(index: number): WindowsEventPropertyOutputReference {
        return new WindowsEventPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ConfigurationDetailsProperty {
    /**
    * A list of metrics to monitor for the component.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#alarm_metrics CcApplication#alarm_metrics}
    */
    readonly alarmMetrics?: AlarmMetricProperty[] | cdktn.IResolvable;
    /**
    * A list of alarms to monitor for the component.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#alarms CcApplication#alarms}
    */
    readonly alarms?: AlarmProperty[] | cdktn.IResolvable;
    /**
    * The HA cluster Prometheus Exporter settings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#ha_cluster_prometheus_exporter CcApplication#ha_cluster_prometheus_exporter}
    */
    readonly haClusterPrometheusExporter?: HAClusterPrometheusExporterProperty;
    /**
    * The HANA DB Prometheus Exporter settings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#hana_prometheus_exporter CcApplication#hana_prometheus_exporter}
    */
    readonly hanaPrometheusExporter?: HANAPrometheusExporterProperty;
    /**
    * The JMX Prometheus Exporter settings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#jmx_prometheus_exporter CcApplication#jmx_prometheus_exporter}
    */
    readonly jmxPrometheusExporter?: JMXPrometheusExporterProperty;
    /**
    * A list of logs to monitor for the component.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#logs CcApplication#logs}
    */
    readonly logs?: LogProperty[] | cdktn.IResolvable;
    /**
    * The NetWeaver Prometheus Exporter settings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#net_weaver_prometheus_exporter CcApplication#net_weaver_prometheus_exporter}
    */
    readonly netWeaverPrometheusExporter?: NetWeaverPrometheusExporterProperty;
    /**
    * A list of processes to monitor for the component. Only Windows EC2 instances can have a processes section.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#processes CcApplication#processes}
    */
    readonly processes?: ProcessProperty[] | cdktn.IResolvable;
    /**
    * The SQL Prometheus Exporter settings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#sql_server_prometheus_exporter CcApplication#sql_server_prometheus_exporter}
    */
    readonly sqlServerPrometheusExporter?: SQLServerPrometheusExporterProperty;
    /**
    * A list of Windows Events to log.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#windows_events CcApplication#windows_events}
    */
    readonly windowsEvents?: WindowsEventProperty[] | cdktn.IResolvable;
}
export class ConfigurationDetailsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConfigurationDetailsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._alarmMetrics?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.alarmMetrics = this._alarmMetrics?.internalValue;
        }
        if (this._alarms?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.alarms = this._alarms?.internalValue;
        }
        if (this._haClusterPrometheusExporter?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.haClusterPrometheusExporter = this._haClusterPrometheusExporter?.internalValue;
        }
        if (this._hanaPrometheusExporter?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.hanaPrometheusExporter = this._hanaPrometheusExporter?.internalValue;
        }
        if (this._jmxPrometheusExporter?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.jmxPrometheusExporter = this._jmxPrometheusExporter?.internalValue;
        }
        if (this._logs?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.logs = this._logs?.internalValue;
        }
        if (this._netWeaverPrometheusExporter?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.netWeaverPrometheusExporter = this._netWeaverPrometheusExporter?.internalValue;
        }
        if (this._processes?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.processes = this._processes?.internalValue;
        }
        if (this._sqlServerPrometheusExporter?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sqlServerPrometheusExporter = this._sqlServerPrometheusExporter?.internalValue;
        }
        if (this._windowsEvents?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.windowsEvents = this._windowsEvents?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConfigurationDetailsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._alarmMetrics.internalValue = undefined;
            this._alarms.internalValue = undefined;
            this._haClusterPrometheusExporter.internalValue = undefined;
            this._hanaPrometheusExporter.internalValue = undefined;
            this._jmxPrometheusExporter.internalValue = undefined;
            this._logs.internalValue = undefined;
            this._netWeaverPrometheusExporter.internalValue = undefined;
            this._processes.internalValue = undefined;
            this._sqlServerPrometheusExporter.internalValue = undefined;
            this._windowsEvents.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._alarmMetrics.internalValue = value.alarmMetrics;
            this._alarms.internalValue = value.alarms;
            this._haClusterPrometheusExporter.internalValue = value.haClusterPrometheusExporter;
            this._hanaPrometheusExporter.internalValue = value.hanaPrometheusExporter;
            this._jmxPrometheusExporter.internalValue = value.jmxPrometheusExporter;
            this._logs.internalValue = value.logs;
            this._netWeaverPrometheusExporter.internalValue = value.netWeaverPrometheusExporter;
            this._processes.internalValue = value.processes;
            this._sqlServerPrometheusExporter.internalValue = value.sqlServerPrometheusExporter;
            this._windowsEvents.internalValue = value.windowsEvents;
        }
    }

    // alarm_metrics - computed: true, optional: true, required: false
    private _alarmMetrics = new AlarmMetricPropertyList(this, "alarm_metrics", false);
    public get alarmMetrics() {
        return this._alarmMetrics;
    }
    public putAlarmMetrics(value: AlarmMetricProperty[] | cdktn.IResolvable) {
        this._alarmMetrics.internalValue = value;
    }
    public resetAlarmMetrics() {
        this._alarmMetrics.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get alarmMetricsInput() {
        return this._alarmMetrics.internalValue;
    }

    // alarms - computed: true, optional: true, required: false
    private _alarms = new AlarmPropertyList(this, "alarms", false);
    public get alarms() {
        return this._alarms;
    }
    public putAlarms(value: AlarmProperty[] | cdktn.IResolvable) {
        this._alarms.internalValue = value;
    }
    public resetAlarms() {
        this._alarms.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get alarmsInput() {
        return this._alarms.internalValue;
    }

    // ha_cluster_prometheus_exporter - computed: true, optional: true, required: false
    private _haClusterPrometheusExporter = new HAClusterPrometheusExporterPropertyOutputReference(this, "ha_cluster_prometheus_exporter");
    public get haClusterPrometheusExporter() {
        return this._haClusterPrometheusExporter;
    }
    public putHaClusterPrometheusExporter(value: HAClusterPrometheusExporterProperty) {
        this._haClusterPrometheusExporter.internalValue = value;
    }
    public resetHaClusterPrometheusExporter() {
        this._haClusterPrometheusExporter.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get haClusterPrometheusExporterInput() {
        return this._haClusterPrometheusExporter.internalValue;
    }

    // hana_prometheus_exporter - computed: true, optional: true, required: false
    private _hanaPrometheusExporter = new HANAPrometheusExporterPropertyOutputReference(this, "hana_prometheus_exporter");
    public get hanaPrometheusExporter() {
        return this._hanaPrometheusExporter;
    }
    public putHanaPrometheusExporter(value: HANAPrometheusExporterProperty) {
        this._hanaPrometheusExporter.internalValue = value;
    }
    public resetHanaPrometheusExporter() {
        this._hanaPrometheusExporter.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hanaPrometheusExporterInput() {
        return this._hanaPrometheusExporter.internalValue;
    }

    // jmx_prometheus_exporter - computed: true, optional: true, required: false
    private _jmxPrometheusExporter = new JMXPrometheusExporterPropertyOutputReference(this, "jmx_prometheus_exporter");
    public get jmxPrometheusExporter() {
        return this._jmxPrometheusExporter;
    }
    public putJmxPrometheusExporter(value: JMXPrometheusExporterProperty) {
        this._jmxPrometheusExporter.internalValue = value;
    }
    public resetJmxPrometheusExporter() {
        this._jmxPrometheusExporter.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jmxPrometheusExporterInput() {
        return this._jmxPrometheusExporter.internalValue;
    }

    // logs - computed: true, optional: true, required: false
    private _logs = new LogPropertyList(this, "logs", false);
    public get logs() {
        return this._logs;
    }
    public putLogs(value: LogProperty[] | cdktn.IResolvable) {
        this._logs.internalValue = value;
    }
    public resetLogs() {
        this._logs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logsInput() {
        return this._logs.internalValue;
    }

    // net_weaver_prometheus_exporter - computed: true, optional: true, required: false
    private _netWeaverPrometheusExporter = new NetWeaverPrometheusExporterPropertyOutputReference(this, "net_weaver_prometheus_exporter");
    public get netWeaverPrometheusExporter() {
        return this._netWeaverPrometheusExporter;
    }
    public putNetWeaverPrometheusExporter(value: NetWeaverPrometheusExporterProperty) {
        this._netWeaverPrometheusExporter.internalValue = value;
    }
    public resetNetWeaverPrometheusExporter() {
        this._netWeaverPrometheusExporter.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get netWeaverPrometheusExporterInput() {
        return this._netWeaverPrometheusExporter.internalValue;
    }

    // processes - computed: true, optional: true, required: false
    private _processes = new ProcessPropertyList(this, "processes", false);
    public get processes() {
        return this._processes;
    }
    public putProcesses(value: ProcessProperty[] | cdktn.IResolvable) {
        this._processes.internalValue = value;
    }
    public resetProcesses() {
        this._processes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get processesInput() {
        return this._processes.internalValue;
    }

    // sql_server_prometheus_exporter - computed: true, optional: true, required: false
    private _sqlServerPrometheusExporter = new SQLServerPrometheusExporterPropertyOutputReference(this, "sql_server_prometheus_exporter");
    public get sqlServerPrometheusExporter() {
        return this._sqlServerPrometheusExporter;
    }
    public putSqlServerPrometheusExporter(value: SQLServerPrometheusExporterProperty) {
        this._sqlServerPrometheusExporter.internalValue = value;
    }
    public resetSqlServerPrometheusExporter() {
        this._sqlServerPrometheusExporter.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sqlServerPrometheusExporterInput() {
        return this._sqlServerPrometheusExporter.internalValue;
    }

    // windows_events - computed: true, optional: true, required: false
    private _windowsEvents = new WindowsEventPropertyList(this, "windows_events", false);
    public get windowsEvents() {
        return this._windowsEvents;
    }
    public putWindowsEvents(value: WindowsEventProperty[] | cdktn.IResolvable) {
        this._windowsEvents.internalValue = value;
    }
    public resetWindowsEvents() {
        this._windowsEvents.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get windowsEventsInput() {
        return this._windowsEvents.internalValue;
    }
}
export interface ComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsProperty {
    /**
    * The name of the metric to be monitored for the component.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#alarm_metric_name CcApplication#alarm_metric_name}
    */
    readonly alarmMetricName?: string;
}
export class ComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._alarmMetricName !== undefined) {
            hasAnyValues = true;
            internalValueResult.alarmMetricName = this._alarmMetricName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._alarmMetricName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._alarmMetricName = value.alarmMetricName;
        }
    }

    // alarm_metric_name - computed: true, optional: true, required: false
    private _alarmMetricName?: string; 
    public get alarmMetricName() {
        return this.getStringAttribute('alarm_metric_name');
    }
    public set alarmMetricName(value: string) {
        this._alarmMetricName = value;
    }
    public resetAlarmMetricName() {
        this._alarmMetricName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get alarmMetricNameInput() {
        return this._alarmMetricName;
    }
}

export class ComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsPropertyList extends cdktn.ComplexList {
    public internalValue? : ComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsProperty[] | cdktn.IResolvable

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
    public get(index: number): ComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsPropertyOutputReference {
        return new ComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsProperty {
    /**
    * The type of encoding of the logs to be monitored.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#encoding CcApplication#encoding}
    */
    readonly encoding?: string;
    /**
    * The CloudWatch log group name to be associated to the monitored log.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#log_group_name CcApplication#log_group_name}
    */
    readonly logGroupName?: string;
    /**
    * The path of the logs to be monitored.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#log_path CcApplication#log_path}
    */
    readonly logPath?: string;
    /**
    * The log type decides the log patterns against which Application Insights analyzes the log.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#log_type CcApplication#log_type}
    */
    readonly logType?: string;
    /**
    * The name of the log pattern set.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#pattern_set CcApplication#pattern_set}
    */
    readonly patternSet?: string;
}
export class ComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._encoding !== undefined) {
            hasAnyValues = true;
            internalValueResult.encoding = this._encoding;
        }
        if (this._logGroupName !== undefined) {
            hasAnyValues = true;
            internalValueResult.logGroupName = this._logGroupName;
        }
        if (this._logPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.logPath = this._logPath;
        }
        if (this._logType !== undefined) {
            hasAnyValues = true;
            internalValueResult.logType = this._logType;
        }
        if (this._patternSet !== undefined) {
            hasAnyValues = true;
            internalValueResult.patternSet = this._patternSet;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._encoding = undefined;
            this._logGroupName = undefined;
            this._logPath = undefined;
            this._logType = undefined;
            this._patternSet = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._encoding = value.encoding;
            this._logGroupName = value.logGroupName;
            this._logPath = value.logPath;
            this._logType = value.logType;
            this._patternSet = value.patternSet;
        }
    }

    // encoding - computed: true, optional: true, required: false
    private _encoding?: string; 
    public get encoding() {
        return this.getStringAttribute('encoding');
    }
    public set encoding(value: string) {
        this._encoding = value;
    }
    public resetEncoding() {
        this._encoding = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encodingInput() {
        return this._encoding;
    }

    // log_group_name - computed: true, optional: true, required: false
    private _logGroupName?: string; 
    public get logGroupName() {
        return this.getStringAttribute('log_group_name');
    }
    public set logGroupName(value: string) {
        this._logGroupName = value;
    }
    public resetLogGroupName() {
        this._logGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logGroupNameInput() {
        return this._logGroupName;
    }

    // log_path - computed: true, optional: true, required: false
    private _logPath?: string; 
    public get logPath() {
        return this.getStringAttribute('log_path');
    }
    public set logPath(value: string) {
        this._logPath = value;
    }
    public resetLogPath() {
        this._logPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logPathInput() {
        return this._logPath;
    }

    // log_type - computed: true, optional: true, required: false
    private _logType?: string; 
    public get logType() {
        return this.getStringAttribute('log_type');
    }
    public set logType(value: string) {
        this._logType = value;
    }
    public resetLogType() {
        this._logType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logTypeInput() {
        return this._logType;
    }

    // pattern_set - computed: true, optional: true, required: false
    private _patternSet?: string; 
    public get patternSet() {
        return this.getStringAttribute('pattern_set');
    }
    public set patternSet(value: string) {
        this._patternSet = value;
    }
    public resetPatternSet() {
        this._patternSet = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get patternSetInput() {
        return this._patternSet;
    }
}

export class ComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsPropertyList extends cdktn.ComplexList {
    public internalValue? : ComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsProperty[] | cdktn.IResolvable

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
    public get(index: number): ComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsPropertyOutputReference {
        return new ComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetricsProperty {
    /**
    * The name of the metric to be monitored for the component.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#alarm_metric_name CcApplication#alarm_metric_name}
    */
    readonly alarmMetricName?: string;
}
export class ComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetricsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetricsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._alarmMetricName !== undefined) {
            hasAnyValues = true;
            internalValueResult.alarmMetricName = this._alarmMetricName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetricsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._alarmMetricName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._alarmMetricName = value.alarmMetricName;
        }
    }

    // alarm_metric_name - computed: true, optional: true, required: false
    private _alarmMetricName?: string; 
    public get alarmMetricName() {
        return this.getStringAttribute('alarm_metric_name');
    }
    public set alarmMetricName(value: string) {
        this._alarmMetricName = value;
    }
    public resetAlarmMetricName() {
        this._alarmMetricName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get alarmMetricNameInput() {
        return this._alarmMetricName;
    }
}

export class ComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetricsPropertyList extends cdktn.ComplexList {
    public internalValue? : ComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetricsProperty[] | cdktn.IResolvable

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
    public get(index: number): ComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetricsPropertyOutputReference {
        return new ComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetricsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesProperty {
    /**
    * A list of metrics to monitor for the component.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#alarm_metrics CcApplication#alarm_metrics}
    */
    readonly alarmMetrics?: ComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetricsProperty[] | cdktn.IResolvable;
    /**
    * The name of the process to be monitored for the component.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#process_name CcApplication#process_name}
    */
    readonly processName?: string;
}
export class ComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._alarmMetrics?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.alarmMetrics = this._alarmMetrics?.internalValue;
        }
        if (this._processName !== undefined) {
            hasAnyValues = true;
            internalValueResult.processName = this._processName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._alarmMetrics.internalValue = undefined;
            this._processName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._alarmMetrics.internalValue = value.alarmMetrics;
            this._processName = value.processName;
        }
    }

    // alarm_metrics - computed: true, optional: true, required: false
    private _alarmMetrics = new ComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetricsPropertyList(this, "alarm_metrics", false);
    public get alarmMetrics() {
        return this._alarmMetrics;
    }
    public putAlarmMetrics(value: ComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetricsProperty[] | cdktn.IResolvable) {
        this._alarmMetrics.internalValue = value;
    }
    public resetAlarmMetrics() {
        this._alarmMetrics.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get alarmMetricsInput() {
        return this._alarmMetrics.internalValue;
    }

    // process_name - computed: true, optional: true, required: false
    private _processName?: string; 
    public get processName() {
        return this.getStringAttribute('process_name');
    }
    public set processName(value: string) {
        this._processName = value;
    }
    public resetProcessName() {
        this._processName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get processNameInput() {
        return this._processName;
    }
}

export class ComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesPropertyList extends cdktn.ComplexList {
    public internalValue? : ComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesProperty[] | cdktn.IResolvable

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
    public get(index: number): ComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesPropertyOutputReference {
        return new ComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsProperty {
    /**
    * The levels of event to log. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#event_levels CcApplication#event_levels}
    */
    readonly eventLevels?: string[];
    /**
    * The type of Windows Events to log.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#event_name CcApplication#event_name}
    */
    readonly eventName?: string;
    /**
    * The CloudWatch log group name to be associated to the monitored log.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#log_group_name CcApplication#log_group_name}
    */
    readonly logGroupName?: string;
    /**
    * The name of the log pattern set.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#pattern_set CcApplication#pattern_set}
    */
    readonly patternSet?: string;
}
export class ComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._eventLevels !== undefined) {
            hasAnyValues = true;
            internalValueResult.eventLevels = this._eventLevels;
        }
        if (this._eventName !== undefined) {
            hasAnyValues = true;
            internalValueResult.eventName = this._eventName;
        }
        if (this._logGroupName !== undefined) {
            hasAnyValues = true;
            internalValueResult.logGroupName = this._logGroupName;
        }
        if (this._patternSet !== undefined) {
            hasAnyValues = true;
            internalValueResult.patternSet = this._patternSet;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._eventLevels = undefined;
            this._eventName = undefined;
            this._logGroupName = undefined;
            this._patternSet = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._eventLevels = value.eventLevels;
            this._eventName = value.eventName;
            this._logGroupName = value.logGroupName;
            this._patternSet = value.patternSet;
        }
    }

    // event_levels - computed: true, optional: true, required: false
    private _eventLevels?: string[]; 
    public get eventLevels() {
        return this.getListAttribute('event_levels');
    }
    public set eventLevels(value: string[]) {
        this._eventLevels = value;
    }
    public resetEventLevels() {
        this._eventLevels = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventLevelsInput() {
        return this._eventLevels;
    }

    // event_name - computed: true, optional: true, required: false
    private _eventName?: string; 
    public get eventName() {
        return this.getStringAttribute('event_name');
    }
    public set eventName(value: string) {
        this._eventName = value;
    }
    public resetEventName() {
        this._eventName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventNameInput() {
        return this._eventName;
    }

    // log_group_name - computed: true, optional: true, required: false
    private _logGroupName?: string; 
    public get logGroupName() {
        return this.getStringAttribute('log_group_name');
    }
    public set logGroupName(value: string) {
        this._logGroupName = value;
    }
    public resetLogGroupName() {
        this._logGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logGroupNameInput() {
        return this._logGroupName;
    }

    // pattern_set - computed: true, optional: true, required: false
    private _patternSet?: string; 
    public get patternSet() {
        return this.getStringAttribute('pattern_set');
    }
    public set patternSet(value: string) {
        this._patternSet = value;
    }
    public resetPatternSet() {
        this._patternSet = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get patternSetInput() {
        return this._patternSet;
    }
}

export class ComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsPropertyList extends cdktn.ComplexList {
    public internalValue? : ComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsProperty[] | cdktn.IResolvable

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
    public get(index: number): ComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsPropertyOutputReference {
        return new ComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface SubComponentConfigurationDetailsProperty {
    /**
    * A list of metrics to monitor for the component.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#alarm_metrics CcApplication#alarm_metrics}
    */
    readonly alarmMetrics?: ComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsProperty[] | cdktn.IResolvable;
    /**
    * A list of logs to monitor for the component.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#logs CcApplication#logs}
    */
    readonly logs?: ComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsProperty[] | cdktn.IResolvable;
    /**
    * A list of processes to monitor for the component. Only Windows EC2 instances can have a processes section.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#processes CcApplication#processes}
    */
    readonly processes?: ComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesProperty[] | cdktn.IResolvable;
    /**
    * A list of Windows Events to log.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#windows_events CcApplication#windows_events}
    */
    readonly windowsEvents?: ComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsProperty[] | cdktn.IResolvable;
}
export class SubComponentConfigurationDetailsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SubComponentConfigurationDetailsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._alarmMetrics?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.alarmMetrics = this._alarmMetrics?.internalValue;
        }
        if (this._logs?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.logs = this._logs?.internalValue;
        }
        if (this._processes?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.processes = this._processes?.internalValue;
        }
        if (this._windowsEvents?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.windowsEvents = this._windowsEvents?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SubComponentConfigurationDetailsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._alarmMetrics.internalValue = undefined;
            this._logs.internalValue = undefined;
            this._processes.internalValue = undefined;
            this._windowsEvents.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._alarmMetrics.internalValue = value.alarmMetrics;
            this._logs.internalValue = value.logs;
            this._processes.internalValue = value.processes;
            this._windowsEvents.internalValue = value.windowsEvents;
        }
    }

    // alarm_metrics - computed: true, optional: true, required: false
    private _alarmMetrics = new ComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsPropertyList(this, "alarm_metrics", false);
    public get alarmMetrics() {
        return this._alarmMetrics;
    }
    public putAlarmMetrics(value: ComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsProperty[] | cdktn.IResolvable) {
        this._alarmMetrics.internalValue = value;
    }
    public resetAlarmMetrics() {
        this._alarmMetrics.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get alarmMetricsInput() {
        return this._alarmMetrics.internalValue;
    }

    // logs - computed: true, optional: true, required: false
    private _logs = new ComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsPropertyList(this, "logs", false);
    public get logs() {
        return this._logs;
    }
    public putLogs(value: ComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsProperty[] | cdktn.IResolvable) {
        this._logs.internalValue = value;
    }
    public resetLogs() {
        this._logs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logsInput() {
        return this._logs.internalValue;
    }

    // processes - computed: true, optional: true, required: false
    private _processes = new ComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesPropertyList(this, "processes", false);
    public get processes() {
        return this._processes;
    }
    public putProcesses(value: ComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesProperty[] | cdktn.IResolvable) {
        this._processes.internalValue = value;
    }
    public resetProcesses() {
        this._processes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get processesInput() {
        return this._processes.internalValue;
    }

    // windows_events - computed: true, optional: true, required: false
    private _windowsEvents = new ComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsPropertyList(this, "windows_events", false);
    public get windowsEvents() {
        return this._windowsEvents;
    }
    public putWindowsEvents(value: ComponentMonitoringSettingsCustomComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsProperty[] | cdktn.IResolvable) {
        this._windowsEvents.internalValue = value;
    }
    public resetWindowsEvents() {
        this._windowsEvents.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get windowsEventsInput() {
        return this._windowsEvents.internalValue;
    }
}
export interface SubComponentTypeConfigurationProperty {
    /**
    * The configuration settings of sub components.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#sub_component_configuration_details CcApplication#sub_component_configuration_details}
    */
    readonly subComponentConfigurationDetails?: SubComponentConfigurationDetailsProperty;
    /**
    * The sub component type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#sub_component_type CcApplication#sub_component_type}
    */
    readonly subComponentType?: string;
}
export class SubComponentTypeConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): SubComponentTypeConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._subComponentConfigurationDetails?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.subComponentConfigurationDetails = this._subComponentConfigurationDetails?.internalValue;
        }
        if (this._subComponentType !== undefined) {
            hasAnyValues = true;
            internalValueResult.subComponentType = this._subComponentType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SubComponentTypeConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._subComponentConfigurationDetails.internalValue = undefined;
            this._subComponentType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._subComponentConfigurationDetails.internalValue = value.subComponentConfigurationDetails;
            this._subComponentType = value.subComponentType;
        }
    }

    // sub_component_configuration_details - computed: true, optional: true, required: false
    private _subComponentConfigurationDetails = new SubComponentConfigurationDetailsPropertyOutputReference(this, "sub_component_configuration_details");
    public get subComponentConfigurationDetails() {
        return this._subComponentConfigurationDetails;
    }
    public putSubComponentConfigurationDetails(value: SubComponentConfigurationDetailsProperty) {
        this._subComponentConfigurationDetails.internalValue = value;
    }
    public resetSubComponentConfigurationDetails() {
        this._subComponentConfigurationDetails.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subComponentConfigurationDetailsInput() {
        return this._subComponentConfigurationDetails.internalValue;
    }

    // sub_component_type - computed: true, optional: true, required: false
    private _subComponentType?: string; 
    public get subComponentType() {
        return this.getStringAttribute('sub_component_type');
    }
    public set subComponentType(value: string) {
        this._subComponentType = value;
    }
    public resetSubComponentType() {
        this._subComponentType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subComponentTypeInput() {
        return this._subComponentType;
    }
}

export class SubComponentTypeConfigurationPropertyList extends cdktn.ComplexList {
    public internalValue? : SubComponentTypeConfigurationProperty[] | cdktn.IResolvable

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
    public get(index: number): SubComponentTypeConfigurationPropertyOutputReference {
        return new SubComponentTypeConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ComponentConfigurationProperty {
    /**
    * The configuration settings
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#configuration_details CcApplication#configuration_details}
    */
    readonly configurationDetails?: ConfigurationDetailsProperty;
    /**
    * Sub component configurations of the component.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#sub_component_type_configurations CcApplication#sub_component_type_configurations}
    */
    readonly subComponentTypeConfigurations?: SubComponentTypeConfigurationProperty[] | cdktn.IResolvable;
}
export class ComponentConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ComponentConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._configurationDetails?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.configurationDetails = this._configurationDetails?.internalValue;
        }
        if (this._subComponentTypeConfigurations?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.subComponentTypeConfigurations = this._subComponentTypeConfigurations?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ComponentConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._configurationDetails.internalValue = undefined;
            this._subComponentTypeConfigurations.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._configurationDetails.internalValue = value.configurationDetails;
            this._subComponentTypeConfigurations.internalValue = value.subComponentTypeConfigurations;
        }
    }

    // configuration_details - computed: true, optional: true, required: false
    private _configurationDetails = new ConfigurationDetailsPropertyOutputReference(this, "configuration_details");
    public get configurationDetails() {
        return this._configurationDetails;
    }
    public putConfigurationDetails(value: ConfigurationDetailsProperty) {
        this._configurationDetails.internalValue = value;
    }
    public resetConfigurationDetails() {
        this._configurationDetails.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get configurationDetailsInput() {
        return this._configurationDetails.internalValue;
    }

    // sub_component_type_configurations - computed: true, optional: true, required: false
    private _subComponentTypeConfigurations = new SubComponentTypeConfigurationPropertyList(this, "sub_component_type_configurations", false);
    public get subComponentTypeConfigurations() {
        return this._subComponentTypeConfigurations;
    }
    public putSubComponentTypeConfigurations(value: SubComponentTypeConfigurationProperty[] | cdktn.IResolvable) {
        this._subComponentTypeConfigurations.internalValue = value;
    }
    public resetSubComponentTypeConfigurations() {
        this._subComponentTypeConfigurations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subComponentTypeConfigurationsInput() {
        return this._subComponentTypeConfigurations.internalValue;
    }
}
export interface ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmMetricsProperty {
    /**
    * The name of the metric to be monitored for the component.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#alarm_metric_name CcApplication#alarm_metric_name}
    */
    readonly alarmMetricName?: string;
}
export class ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmMetricsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmMetricsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._alarmMetricName !== undefined) {
            hasAnyValues = true;
            internalValueResult.alarmMetricName = this._alarmMetricName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmMetricsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._alarmMetricName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._alarmMetricName = value.alarmMetricName;
        }
    }

    // alarm_metric_name - computed: true, optional: true, required: false
    private _alarmMetricName?: string; 
    public get alarmMetricName() {
        return this.getStringAttribute('alarm_metric_name');
    }
    public set alarmMetricName(value: string) {
        this._alarmMetricName = value;
    }
    public resetAlarmMetricName() {
        this._alarmMetricName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get alarmMetricNameInput() {
        return this._alarmMetricName;
    }
}

export class ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmMetricsPropertyList extends cdktn.ComplexList {
    public internalValue? : ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmMetricsProperty[] | cdktn.IResolvable

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
    public get(index: number): ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmMetricsPropertyOutputReference {
        return new ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmMetricsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface AlarmsProperty {
    /**
    * The name of the CloudWatch alarm to be monitored for the component.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#alarm_name CcApplication#alarm_name}
    */
    readonly alarmName?: string;
    /**
    * Indicates the degree of outage when the alarm goes off.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#severity CcApplication#severity}
    */
    readonly severity?: string;
}
export class AlarmsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AlarmsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._alarmName !== undefined) {
            hasAnyValues = true;
            internalValueResult.alarmName = this._alarmName;
        }
        if (this._severity !== undefined) {
            hasAnyValues = true;
            internalValueResult.severity = this._severity;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AlarmsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._alarmName = undefined;
            this._severity = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._alarmName = value.alarmName;
            this._severity = value.severity;
        }
    }

    // alarm_name - computed: true, optional: true, required: false
    private _alarmName?: string; 
    public get alarmName() {
        return this.getStringAttribute('alarm_name');
    }
    public set alarmName(value: string) {
        this._alarmName = value;
    }
    public resetAlarmName() {
        this._alarmName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get alarmNameInput() {
        return this._alarmName;
    }

    // severity - computed: true, optional: true, required: false
    private _severity?: string; 
    public get severity() {
        return this.getStringAttribute('severity');
    }
    public set severity(value: string) {
        this._severity = value;
    }
    public resetSeverity() {
        this._severity = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get severityInput() {
        return this._severity;
    }
}

export class AlarmsPropertyList extends cdktn.ComplexList {
    public internalValue? : AlarmsProperty[] | cdktn.IResolvable

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
    public get(index: number): AlarmsPropertyOutputReference {
        return new AlarmsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsHaClusterPrometheusExporterProperty {
    /**
    * Prometheus exporter port.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#prometheus_port CcApplication#prometheus_port}
    */
    readonly prometheusPort?: string;
}
export class ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsHaClusterPrometheusExporterPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsHaClusterPrometheusExporterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._prometheusPort !== undefined) {
            hasAnyValues = true;
            internalValueResult.prometheusPort = this._prometheusPort;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsHaClusterPrometheusExporterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._prometheusPort = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._prometheusPort = value.prometheusPort;
        }
    }

    // prometheus_port - computed: true, optional: true, required: false
    private _prometheusPort?: string; 
    public get prometheusPort() {
        return this.getStringAttribute('prometheus_port');
    }
    public set prometheusPort(value: string) {
        this._prometheusPort = value;
    }
    public resetPrometheusPort() {
        this._prometheusPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get prometheusPortInput() {
        return this._prometheusPort;
    }
}
export interface ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsHanaPrometheusExporterProperty {
    /**
    * A flag which indicates agreeing to install SAP HANA DB client.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#agree_to_install_hanadb_client CcApplication#agree_to_install_hanadb_client}
    */
    readonly agreeToInstallHanadbClient?: boolean | cdktn.IResolvable;
    /**
    * The HANA DB port.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#hana_port CcApplication#hana_port}
    */
    readonly hanaPort?: string;
    /**
    * The secret name which manages the HANA DB credentials e.g. {
    *   "username": "<>",
    *   "password": "<>"
    * }.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#hana_secret_name CcApplication#hana_secret_name}
    */
    readonly hanaSecretName?: string;
    /**
    * HANA DB SID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#hanasid CcApplication#hanasid}
    */
    readonly hanasid?: string;
    /**
    * Prometheus exporter port.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#prometheus_port CcApplication#prometheus_port}
    */
    readonly prometheusPort?: string;
}
export class ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsHanaPrometheusExporterPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsHanaPrometheusExporterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._agreeToInstallHanadbClient !== undefined) {
            hasAnyValues = true;
            internalValueResult.agreeToInstallHanadbClient = this._agreeToInstallHanadbClient;
        }
        if (this._hanaPort !== undefined) {
            hasAnyValues = true;
            internalValueResult.hanaPort = this._hanaPort;
        }
        if (this._hanaSecretName !== undefined) {
            hasAnyValues = true;
            internalValueResult.hanaSecretName = this._hanaSecretName;
        }
        if (this._hanasid !== undefined) {
            hasAnyValues = true;
            internalValueResult.hanasid = this._hanasid;
        }
        if (this._prometheusPort !== undefined) {
            hasAnyValues = true;
            internalValueResult.prometheusPort = this._prometheusPort;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsHanaPrometheusExporterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._agreeToInstallHanadbClient = undefined;
            this._hanaPort = undefined;
            this._hanaSecretName = undefined;
            this._hanasid = undefined;
            this._prometheusPort = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._agreeToInstallHanadbClient = value.agreeToInstallHanadbClient;
            this._hanaPort = value.hanaPort;
            this._hanaSecretName = value.hanaSecretName;
            this._hanasid = value.hanasid;
            this._prometheusPort = value.prometheusPort;
        }
    }

    // agree_to_install_hanadb_client - computed: true, optional: true, required: false
    private _agreeToInstallHanadbClient?: boolean | cdktn.IResolvable; 
    public get agreeToInstallHanadbClient() {
        return this.getBooleanAttribute('agree_to_install_hanadb_client');
    }
    public set agreeToInstallHanadbClient(value: boolean | cdktn.IResolvable) {
        this._agreeToInstallHanadbClient = value;
    }
    public resetAgreeToInstallHanadbClient() {
        this._agreeToInstallHanadbClient = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get agreeToInstallHanadbClientInput() {
        return this._agreeToInstallHanadbClient;
    }

    // hana_port - computed: true, optional: true, required: false
    private _hanaPort?: string; 
    public get hanaPort() {
        return this.getStringAttribute('hana_port');
    }
    public set hanaPort(value: string) {
        this._hanaPort = value;
    }
    public resetHanaPort() {
        this._hanaPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hanaPortInput() {
        return this._hanaPort;
    }

    // hana_secret_name - computed: true, optional: true, required: false
    private _hanaSecretName?: string; 
    public get hanaSecretName() {
        return this.getStringAttribute('hana_secret_name');
    }
    public set hanaSecretName(value: string) {
        this._hanaSecretName = value;
    }
    public resetHanaSecretName() {
        this._hanaSecretName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hanaSecretNameInput() {
        return this._hanaSecretName;
    }

    // hanasid - computed: true, optional: true, required: false
    private _hanasid?: string; 
    public get hanasid() {
        return this.getStringAttribute('hanasid');
    }
    public set hanasid(value: string) {
        this._hanasid = value;
    }
    public resetHanasid() {
        this._hanasid = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hanasidInput() {
        return this._hanasid;
    }

    // prometheus_port - computed: true, optional: true, required: false
    private _prometheusPort?: string; 
    public get prometheusPort() {
        return this.getStringAttribute('prometheus_port');
    }
    public set prometheusPort(value: string) {
        this._prometheusPort = value;
    }
    public resetPrometheusPort() {
        this._prometheusPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get prometheusPortInput() {
        return this._prometheusPort;
    }
}
export interface ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsJmxPrometheusExporterProperty {
    /**
    * Java agent host port
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#host_port CcApplication#host_port}
    */
    readonly hostPort?: string;
    /**
    * JMX service URL.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#jmxurl CcApplication#jmxurl}
    */
    readonly jmxurl?: string;
    /**
    * Prometheus exporter port.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#prometheus_port CcApplication#prometheus_port}
    */
    readonly prometheusPort?: string;
}
export class ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsJmxPrometheusExporterPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsJmxPrometheusExporterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._hostPort !== undefined) {
            hasAnyValues = true;
            internalValueResult.hostPort = this._hostPort;
        }
        if (this._jmxurl !== undefined) {
            hasAnyValues = true;
            internalValueResult.jmxurl = this._jmxurl;
        }
        if (this._prometheusPort !== undefined) {
            hasAnyValues = true;
            internalValueResult.prometheusPort = this._prometheusPort;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsJmxPrometheusExporterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._hostPort = undefined;
            this._jmxurl = undefined;
            this._prometheusPort = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._hostPort = value.hostPort;
            this._jmxurl = value.jmxurl;
            this._prometheusPort = value.prometheusPort;
        }
    }

    // host_port - computed: true, optional: true, required: false
    private _hostPort?: string; 
    public get hostPort() {
        return this.getStringAttribute('host_port');
    }
    public set hostPort(value: string) {
        this._hostPort = value;
    }
    public resetHostPort() {
        this._hostPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostPortInput() {
        return this._hostPort;
    }

    // jmxurl - computed: true, optional: true, required: false
    private _jmxurl?: string; 
    public get jmxurl() {
        return this.getStringAttribute('jmxurl');
    }
    public set jmxurl(value: string) {
        this._jmxurl = value;
    }
    public resetJmxurl() {
        this._jmxurl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jmxurlInput() {
        return this._jmxurl;
    }

    // prometheus_port - computed: true, optional: true, required: false
    private _prometheusPort?: string; 
    public get prometheusPort() {
        return this.getStringAttribute('prometheus_port');
    }
    public set prometheusPort(value: string) {
        this._prometheusPort = value;
    }
    public resetPrometheusPort() {
        this._prometheusPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get prometheusPortInput() {
        return this._prometheusPort;
    }
}
export interface ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsLogsProperty {
    /**
    * The type of encoding of the logs to be monitored.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#encoding CcApplication#encoding}
    */
    readonly encoding?: string;
    /**
    * The CloudWatch log group name to be associated to the monitored log.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#log_group_name CcApplication#log_group_name}
    */
    readonly logGroupName?: string;
    /**
    * The path of the logs to be monitored.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#log_path CcApplication#log_path}
    */
    readonly logPath?: string;
    /**
    * The log type decides the log patterns against which Application Insights analyzes the log.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#log_type CcApplication#log_type}
    */
    readonly logType?: string;
    /**
    * The name of the log pattern set.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#pattern_set CcApplication#pattern_set}
    */
    readonly patternSet?: string;
}
export class ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsLogsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsLogsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._encoding !== undefined) {
            hasAnyValues = true;
            internalValueResult.encoding = this._encoding;
        }
        if (this._logGroupName !== undefined) {
            hasAnyValues = true;
            internalValueResult.logGroupName = this._logGroupName;
        }
        if (this._logPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.logPath = this._logPath;
        }
        if (this._logType !== undefined) {
            hasAnyValues = true;
            internalValueResult.logType = this._logType;
        }
        if (this._patternSet !== undefined) {
            hasAnyValues = true;
            internalValueResult.patternSet = this._patternSet;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsLogsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._encoding = undefined;
            this._logGroupName = undefined;
            this._logPath = undefined;
            this._logType = undefined;
            this._patternSet = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._encoding = value.encoding;
            this._logGroupName = value.logGroupName;
            this._logPath = value.logPath;
            this._logType = value.logType;
            this._patternSet = value.patternSet;
        }
    }

    // encoding - computed: true, optional: true, required: false
    private _encoding?: string; 
    public get encoding() {
        return this.getStringAttribute('encoding');
    }
    public set encoding(value: string) {
        this._encoding = value;
    }
    public resetEncoding() {
        this._encoding = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encodingInput() {
        return this._encoding;
    }

    // log_group_name - computed: true, optional: true, required: false
    private _logGroupName?: string; 
    public get logGroupName() {
        return this.getStringAttribute('log_group_name');
    }
    public set logGroupName(value: string) {
        this._logGroupName = value;
    }
    public resetLogGroupName() {
        this._logGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logGroupNameInput() {
        return this._logGroupName;
    }

    // log_path - computed: true, optional: true, required: false
    private _logPath?: string; 
    public get logPath() {
        return this.getStringAttribute('log_path');
    }
    public set logPath(value: string) {
        this._logPath = value;
    }
    public resetLogPath() {
        this._logPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logPathInput() {
        return this._logPath;
    }

    // log_type - computed: true, optional: true, required: false
    private _logType?: string; 
    public get logType() {
        return this.getStringAttribute('log_type');
    }
    public set logType(value: string) {
        this._logType = value;
    }
    public resetLogType() {
        this._logType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logTypeInput() {
        return this._logType;
    }

    // pattern_set - computed: true, optional: true, required: false
    private _patternSet?: string; 
    public get patternSet() {
        return this.getStringAttribute('pattern_set');
    }
    public set patternSet(value: string) {
        this._patternSet = value;
    }
    public resetPatternSet() {
        this._patternSet = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get patternSetInput() {
        return this._patternSet;
    }
}

export class ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsLogsPropertyList extends cdktn.ComplexList {
    public internalValue? : ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsLogsProperty[] | cdktn.IResolvable

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
    public get(index: number): ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsLogsPropertyOutputReference {
        return new ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsLogsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsNetWeaverPrometheusExporterProperty {
    /**
    * SAP instance numbers for ASCS, ERS, and App Servers.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#instance_numbers CcApplication#instance_numbers}
    */
    readonly instanceNumbers?: string[];
    /**
    * Prometheus exporter port.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#prometheus_port CcApplication#prometheus_port}
    */
    readonly prometheusPort?: string;
    /**
    * SAP NetWeaver SID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#sapsid CcApplication#sapsid}
    */
    readonly sapsid?: string;
}
export class ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsNetWeaverPrometheusExporterPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsNetWeaverPrometheusExporterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._instanceNumbers !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceNumbers = this._instanceNumbers;
        }
        if (this._prometheusPort !== undefined) {
            hasAnyValues = true;
            internalValueResult.prometheusPort = this._prometheusPort;
        }
        if (this._sapsid !== undefined) {
            hasAnyValues = true;
            internalValueResult.sapsid = this._sapsid;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsNetWeaverPrometheusExporterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._instanceNumbers = undefined;
            this._prometheusPort = undefined;
            this._sapsid = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._instanceNumbers = value.instanceNumbers;
            this._prometheusPort = value.prometheusPort;
            this._sapsid = value.sapsid;
        }
    }

    // instance_numbers - computed: true, optional: true, required: false
    private _instanceNumbers?: string[]; 
    public get instanceNumbers() {
        return this.getListAttribute('instance_numbers');
    }
    public set instanceNumbers(value: string[]) {
        this._instanceNumbers = value;
    }
    public resetInstanceNumbers() {
        this._instanceNumbers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceNumbersInput() {
        return this._instanceNumbers;
    }

    // prometheus_port - computed: true, optional: true, required: false
    private _prometheusPort?: string; 
    public get prometheusPort() {
        return this.getStringAttribute('prometheus_port');
    }
    public set prometheusPort(value: string) {
        this._prometheusPort = value;
    }
    public resetPrometheusPort() {
        this._prometheusPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get prometheusPortInput() {
        return this._prometheusPort;
    }

    // sapsid - computed: true, optional: true, required: false
    private _sapsid?: string; 
    public get sapsid() {
        return this.getStringAttribute('sapsid');
    }
    public set sapsid(value: string) {
        this._sapsid = value;
    }
    public resetSapsid() {
        this._sapsid = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sapsidInput() {
        return this._sapsid;
    }
}
export interface ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcessesAlarmMetricsProperty {
    /**
    * The name of the metric to be monitored for the component.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#alarm_metric_name CcApplication#alarm_metric_name}
    */
    readonly alarmMetricName?: string;
}
export class ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcessesAlarmMetricsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcessesAlarmMetricsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._alarmMetricName !== undefined) {
            hasAnyValues = true;
            internalValueResult.alarmMetricName = this._alarmMetricName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcessesAlarmMetricsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._alarmMetricName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._alarmMetricName = value.alarmMetricName;
        }
    }

    // alarm_metric_name - computed: true, optional: true, required: false
    private _alarmMetricName?: string; 
    public get alarmMetricName() {
        return this.getStringAttribute('alarm_metric_name');
    }
    public set alarmMetricName(value: string) {
        this._alarmMetricName = value;
    }
    public resetAlarmMetricName() {
        this._alarmMetricName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get alarmMetricNameInput() {
        return this._alarmMetricName;
    }
}

export class ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcessesAlarmMetricsPropertyList extends cdktn.ComplexList {
    public internalValue? : ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcessesAlarmMetricsProperty[] | cdktn.IResolvable

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
    public get(index: number): ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcessesAlarmMetricsPropertyOutputReference {
        return new ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcessesAlarmMetricsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcessesProperty {
    /**
    * A list of metrics to monitor for the component.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#alarm_metrics CcApplication#alarm_metrics}
    */
    readonly alarmMetrics?: ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcessesAlarmMetricsProperty[] | cdktn.IResolvable;
    /**
    * The name of the process to be monitored for the component.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#process_name CcApplication#process_name}
    */
    readonly processName?: string;
}
export class ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcessesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcessesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._alarmMetrics?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.alarmMetrics = this._alarmMetrics?.internalValue;
        }
        if (this._processName !== undefined) {
            hasAnyValues = true;
            internalValueResult.processName = this._processName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcessesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._alarmMetrics.internalValue = undefined;
            this._processName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._alarmMetrics.internalValue = value.alarmMetrics;
            this._processName = value.processName;
        }
    }

    // alarm_metrics - computed: true, optional: true, required: false
    private _alarmMetrics = new ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcessesAlarmMetricsPropertyList(this, "alarm_metrics", false);
    public get alarmMetrics() {
        return this._alarmMetrics;
    }
    public putAlarmMetrics(value: ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcessesAlarmMetricsProperty[] | cdktn.IResolvable) {
        this._alarmMetrics.internalValue = value;
    }
    public resetAlarmMetrics() {
        this._alarmMetrics.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get alarmMetricsInput() {
        return this._alarmMetrics.internalValue;
    }

    // process_name - computed: true, optional: true, required: false
    private _processName?: string; 
    public get processName() {
        return this.getStringAttribute('process_name');
    }
    public set processName(value: string) {
        this._processName = value;
    }
    public resetProcessName() {
        this._processName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get processNameInput() {
        return this._processName;
    }
}

export class ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcessesPropertyList extends cdktn.ComplexList {
    public internalValue? : ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcessesProperty[] | cdktn.IResolvable

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
    public get(index: number): ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcessesPropertyOutputReference {
        return new ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcessesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsSqlServerPrometheusExporterProperty {
    /**
    * Prometheus exporter port.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#prometheus_port CcApplication#prometheus_port}
    */
    readonly prometheusPort?: string;
    /**
    * Secret name which managers SQL exporter connection. e.g. {"data_source_name": "sqlserver://<USERNAME>:<PASSWORD>@localhost:1433"}
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#sql_secret_name CcApplication#sql_secret_name}
    */
    readonly sqlSecretName?: string;
}
export class ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsSqlServerPrometheusExporterPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsSqlServerPrometheusExporterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._prometheusPort !== undefined) {
            hasAnyValues = true;
            internalValueResult.prometheusPort = this._prometheusPort;
        }
        if (this._sqlSecretName !== undefined) {
            hasAnyValues = true;
            internalValueResult.sqlSecretName = this._sqlSecretName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsSqlServerPrometheusExporterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._prometheusPort = undefined;
            this._sqlSecretName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._prometheusPort = value.prometheusPort;
            this._sqlSecretName = value.sqlSecretName;
        }
    }

    // prometheus_port - computed: true, optional: true, required: false
    private _prometheusPort?: string; 
    public get prometheusPort() {
        return this.getStringAttribute('prometheus_port');
    }
    public set prometheusPort(value: string) {
        this._prometheusPort = value;
    }
    public resetPrometheusPort() {
        this._prometheusPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get prometheusPortInput() {
        return this._prometheusPort;
    }

    // sql_secret_name - computed: true, optional: true, required: false
    private _sqlSecretName?: string; 
    public get sqlSecretName() {
        return this.getStringAttribute('sql_secret_name');
    }
    public set sqlSecretName(value: string) {
        this._sqlSecretName = value;
    }
    public resetSqlSecretName() {
        this._sqlSecretName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sqlSecretNameInput() {
        return this._sqlSecretName;
    }
}
export interface ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsWindowsEventsProperty {
    /**
    * The levels of event to log. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#event_levels CcApplication#event_levels}
    */
    readonly eventLevels?: string[];
    /**
    * The type of Windows Events to log.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#event_name CcApplication#event_name}
    */
    readonly eventName?: string;
    /**
    * The CloudWatch log group name to be associated to the monitored log.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#log_group_name CcApplication#log_group_name}
    */
    readonly logGroupName?: string;
    /**
    * The name of the log pattern set.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#pattern_set CcApplication#pattern_set}
    */
    readonly patternSet?: string;
}
export class ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsWindowsEventsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsWindowsEventsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._eventLevels !== undefined) {
            hasAnyValues = true;
            internalValueResult.eventLevels = this._eventLevels;
        }
        if (this._eventName !== undefined) {
            hasAnyValues = true;
            internalValueResult.eventName = this._eventName;
        }
        if (this._logGroupName !== undefined) {
            hasAnyValues = true;
            internalValueResult.logGroupName = this._logGroupName;
        }
        if (this._patternSet !== undefined) {
            hasAnyValues = true;
            internalValueResult.patternSet = this._patternSet;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsWindowsEventsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._eventLevels = undefined;
            this._eventName = undefined;
            this._logGroupName = undefined;
            this._patternSet = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._eventLevels = value.eventLevels;
            this._eventName = value.eventName;
            this._logGroupName = value.logGroupName;
            this._patternSet = value.patternSet;
        }
    }

    // event_levels - computed: true, optional: true, required: false
    private _eventLevels?: string[]; 
    public get eventLevels() {
        return this.getListAttribute('event_levels');
    }
    public set eventLevels(value: string[]) {
        this._eventLevels = value;
    }
    public resetEventLevels() {
        this._eventLevels = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventLevelsInput() {
        return this._eventLevels;
    }

    // event_name - computed: true, optional: true, required: false
    private _eventName?: string; 
    public get eventName() {
        return this.getStringAttribute('event_name');
    }
    public set eventName(value: string) {
        this._eventName = value;
    }
    public resetEventName() {
        this._eventName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventNameInput() {
        return this._eventName;
    }

    // log_group_name - computed: true, optional: true, required: false
    private _logGroupName?: string; 
    public get logGroupName() {
        return this.getStringAttribute('log_group_name');
    }
    public set logGroupName(value: string) {
        this._logGroupName = value;
    }
    public resetLogGroupName() {
        this._logGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logGroupNameInput() {
        return this._logGroupName;
    }

    // pattern_set - computed: true, optional: true, required: false
    private _patternSet?: string; 
    public get patternSet() {
        return this.getStringAttribute('pattern_set');
    }
    public set patternSet(value: string) {
        this._patternSet = value;
    }
    public resetPatternSet() {
        this._patternSet = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get patternSetInput() {
        return this._patternSet;
    }
}

export class ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsWindowsEventsPropertyList extends cdktn.ComplexList {
    public internalValue? : ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsWindowsEventsProperty[] | cdktn.IResolvable

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
    public get(index: number): ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsWindowsEventsPropertyOutputReference {
        return new ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsWindowsEventsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProperty {
    /**
    * A list of metrics to monitor for the component.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#alarm_metrics CcApplication#alarm_metrics}
    */
    readonly alarmMetrics?: ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmMetricsProperty[] | cdktn.IResolvable;
    /**
    * A list of alarms to monitor for the component.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#alarms CcApplication#alarms}
    */
    readonly alarms?: AlarmsProperty[] | cdktn.IResolvable;
    /**
    * The HA cluster Prometheus Exporter settings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#ha_cluster_prometheus_exporter CcApplication#ha_cluster_prometheus_exporter}
    */
    readonly haClusterPrometheusExporter?: ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsHaClusterPrometheusExporterProperty;
    /**
    * The HANA DB Prometheus Exporter settings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#hana_prometheus_exporter CcApplication#hana_prometheus_exporter}
    */
    readonly hanaPrometheusExporter?: ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsHanaPrometheusExporterProperty;
    /**
    * The JMX Prometheus Exporter settings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#jmx_prometheus_exporter CcApplication#jmx_prometheus_exporter}
    */
    readonly jmxPrometheusExporter?: ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsJmxPrometheusExporterProperty;
    /**
    * A list of logs to monitor for the component.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#logs CcApplication#logs}
    */
    readonly logs?: ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsLogsProperty[] | cdktn.IResolvable;
    /**
    * The NetWeaver Prometheus Exporter settings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#net_weaver_prometheus_exporter CcApplication#net_weaver_prometheus_exporter}
    */
    readonly netWeaverPrometheusExporter?: ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsNetWeaverPrometheusExporterProperty;
    /**
    * A list of processes to monitor for the component. Only Windows EC2 instances can have a processes section.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#processes CcApplication#processes}
    */
    readonly processes?: ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcessesProperty[] | cdktn.IResolvable;
    /**
    * The SQL Prometheus Exporter settings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#sql_server_prometheus_exporter CcApplication#sql_server_prometheus_exporter}
    */
    readonly sqlServerPrometheusExporter?: ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsSqlServerPrometheusExporterProperty;
    /**
    * A list of Windows Events to log.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#windows_events CcApplication#windows_events}
    */
    readonly windowsEvents?: ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsWindowsEventsProperty[] | cdktn.IResolvable;
}
export class ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._alarmMetrics?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.alarmMetrics = this._alarmMetrics?.internalValue;
        }
        if (this._alarms?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.alarms = this._alarms?.internalValue;
        }
        if (this._haClusterPrometheusExporter?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.haClusterPrometheusExporter = this._haClusterPrometheusExporter?.internalValue;
        }
        if (this._hanaPrometheusExporter?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.hanaPrometheusExporter = this._hanaPrometheusExporter?.internalValue;
        }
        if (this._jmxPrometheusExporter?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.jmxPrometheusExporter = this._jmxPrometheusExporter?.internalValue;
        }
        if (this._logs?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.logs = this._logs?.internalValue;
        }
        if (this._netWeaverPrometheusExporter?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.netWeaverPrometheusExporter = this._netWeaverPrometheusExporter?.internalValue;
        }
        if (this._processes?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.processes = this._processes?.internalValue;
        }
        if (this._sqlServerPrometheusExporter?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sqlServerPrometheusExporter = this._sqlServerPrometheusExporter?.internalValue;
        }
        if (this._windowsEvents?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.windowsEvents = this._windowsEvents?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._alarmMetrics.internalValue = undefined;
            this._alarms.internalValue = undefined;
            this._haClusterPrometheusExporter.internalValue = undefined;
            this._hanaPrometheusExporter.internalValue = undefined;
            this._jmxPrometheusExporter.internalValue = undefined;
            this._logs.internalValue = undefined;
            this._netWeaverPrometheusExporter.internalValue = undefined;
            this._processes.internalValue = undefined;
            this._sqlServerPrometheusExporter.internalValue = undefined;
            this._windowsEvents.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._alarmMetrics.internalValue = value.alarmMetrics;
            this._alarms.internalValue = value.alarms;
            this._haClusterPrometheusExporter.internalValue = value.haClusterPrometheusExporter;
            this._hanaPrometheusExporter.internalValue = value.hanaPrometheusExporter;
            this._jmxPrometheusExporter.internalValue = value.jmxPrometheusExporter;
            this._logs.internalValue = value.logs;
            this._netWeaverPrometheusExporter.internalValue = value.netWeaverPrometheusExporter;
            this._processes.internalValue = value.processes;
            this._sqlServerPrometheusExporter.internalValue = value.sqlServerPrometheusExporter;
            this._windowsEvents.internalValue = value.windowsEvents;
        }
    }

    // alarm_metrics - computed: true, optional: true, required: false
    private _alarmMetrics = new ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmMetricsPropertyList(this, "alarm_metrics", false);
    public get alarmMetrics() {
        return this._alarmMetrics;
    }
    public putAlarmMetrics(value: ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsAlarmMetricsProperty[] | cdktn.IResolvable) {
        this._alarmMetrics.internalValue = value;
    }
    public resetAlarmMetrics() {
        this._alarmMetrics.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get alarmMetricsInput() {
        return this._alarmMetrics.internalValue;
    }

    // alarms - computed: true, optional: true, required: false
    private _alarms = new AlarmsPropertyList(this, "alarms", false);
    public get alarms() {
        return this._alarms;
    }
    public putAlarms(value: AlarmsProperty[] | cdktn.IResolvable) {
        this._alarms.internalValue = value;
    }
    public resetAlarms() {
        this._alarms.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get alarmsInput() {
        return this._alarms.internalValue;
    }

    // ha_cluster_prometheus_exporter - computed: true, optional: true, required: false
    private _haClusterPrometheusExporter = new ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsHaClusterPrometheusExporterPropertyOutputReference(this, "ha_cluster_prometheus_exporter");
    public get haClusterPrometheusExporter() {
        return this._haClusterPrometheusExporter;
    }
    public putHaClusterPrometheusExporter(value: ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsHaClusterPrometheusExporterProperty) {
        this._haClusterPrometheusExporter.internalValue = value;
    }
    public resetHaClusterPrometheusExporter() {
        this._haClusterPrometheusExporter.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get haClusterPrometheusExporterInput() {
        return this._haClusterPrometheusExporter.internalValue;
    }

    // hana_prometheus_exporter - computed: true, optional: true, required: false
    private _hanaPrometheusExporter = new ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsHanaPrometheusExporterPropertyOutputReference(this, "hana_prometheus_exporter");
    public get hanaPrometheusExporter() {
        return this._hanaPrometheusExporter;
    }
    public putHanaPrometheusExporter(value: ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsHanaPrometheusExporterProperty) {
        this._hanaPrometheusExporter.internalValue = value;
    }
    public resetHanaPrometheusExporter() {
        this._hanaPrometheusExporter.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hanaPrometheusExporterInput() {
        return this._hanaPrometheusExporter.internalValue;
    }

    // jmx_prometheus_exporter - computed: true, optional: true, required: false
    private _jmxPrometheusExporter = new ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsJmxPrometheusExporterPropertyOutputReference(this, "jmx_prometheus_exporter");
    public get jmxPrometheusExporter() {
        return this._jmxPrometheusExporter;
    }
    public putJmxPrometheusExporter(value: ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsJmxPrometheusExporterProperty) {
        this._jmxPrometheusExporter.internalValue = value;
    }
    public resetJmxPrometheusExporter() {
        this._jmxPrometheusExporter.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jmxPrometheusExporterInput() {
        return this._jmxPrometheusExporter.internalValue;
    }

    // logs - computed: true, optional: true, required: false
    private _logs = new ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsLogsPropertyList(this, "logs", false);
    public get logs() {
        return this._logs;
    }
    public putLogs(value: ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsLogsProperty[] | cdktn.IResolvable) {
        this._logs.internalValue = value;
    }
    public resetLogs() {
        this._logs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logsInput() {
        return this._logs.internalValue;
    }

    // net_weaver_prometheus_exporter - computed: true, optional: true, required: false
    private _netWeaverPrometheusExporter = new ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsNetWeaverPrometheusExporterPropertyOutputReference(this, "net_weaver_prometheus_exporter");
    public get netWeaverPrometheusExporter() {
        return this._netWeaverPrometheusExporter;
    }
    public putNetWeaverPrometheusExporter(value: ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsNetWeaverPrometheusExporterProperty) {
        this._netWeaverPrometheusExporter.internalValue = value;
    }
    public resetNetWeaverPrometheusExporter() {
        this._netWeaverPrometheusExporter.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get netWeaverPrometheusExporterInput() {
        return this._netWeaverPrometheusExporter.internalValue;
    }

    // processes - computed: true, optional: true, required: false
    private _processes = new ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcessesPropertyList(this, "processes", false);
    public get processes() {
        return this._processes;
    }
    public putProcesses(value: ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProcessesProperty[] | cdktn.IResolvable) {
        this._processes.internalValue = value;
    }
    public resetProcesses() {
        this._processes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get processesInput() {
        return this._processes.internalValue;
    }

    // sql_server_prometheus_exporter - computed: true, optional: true, required: false
    private _sqlServerPrometheusExporter = new ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsSqlServerPrometheusExporterPropertyOutputReference(this, "sql_server_prometheus_exporter");
    public get sqlServerPrometheusExporter() {
        return this._sqlServerPrometheusExporter;
    }
    public putSqlServerPrometheusExporter(value: ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsSqlServerPrometheusExporterProperty) {
        this._sqlServerPrometheusExporter.internalValue = value;
    }
    public resetSqlServerPrometheusExporter() {
        this._sqlServerPrometheusExporter.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sqlServerPrometheusExporterInput() {
        return this._sqlServerPrometheusExporter.internalValue;
    }

    // windows_events - computed: true, optional: true, required: false
    private _windowsEvents = new ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsWindowsEventsPropertyList(this, "windows_events", false);
    public get windowsEvents() {
        return this._windowsEvents;
    }
    public putWindowsEvents(value: ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsWindowsEventsProperty[] | cdktn.IResolvable) {
        this._windowsEvents.internalValue = value;
    }
    public resetWindowsEvents() {
        this._windowsEvents.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get windowsEventsInput() {
        return this._windowsEvents.internalValue;
    }
}
export interface ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsProperty {
    /**
    * The name of the metric to be monitored for the component.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#alarm_metric_name CcApplication#alarm_metric_name}
    */
    readonly alarmMetricName?: string;
}
export class ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._alarmMetricName !== undefined) {
            hasAnyValues = true;
            internalValueResult.alarmMetricName = this._alarmMetricName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._alarmMetricName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._alarmMetricName = value.alarmMetricName;
        }
    }

    // alarm_metric_name - computed: true, optional: true, required: false
    private _alarmMetricName?: string; 
    public get alarmMetricName() {
        return this.getStringAttribute('alarm_metric_name');
    }
    public set alarmMetricName(value: string) {
        this._alarmMetricName = value;
    }
    public resetAlarmMetricName() {
        this._alarmMetricName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get alarmMetricNameInput() {
        return this._alarmMetricName;
    }
}

export class ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsPropertyList extends cdktn.ComplexList {
    public internalValue? : ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsProperty[] | cdktn.IResolvable

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
    public get(index: number): ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsPropertyOutputReference {
        return new ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsProperty {
    /**
    * The type of encoding of the logs to be monitored.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#encoding CcApplication#encoding}
    */
    readonly encoding?: string;
    /**
    * The CloudWatch log group name to be associated to the monitored log.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#log_group_name CcApplication#log_group_name}
    */
    readonly logGroupName?: string;
    /**
    * The path of the logs to be monitored.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#log_path CcApplication#log_path}
    */
    readonly logPath?: string;
    /**
    * The log type decides the log patterns against which Application Insights analyzes the log.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#log_type CcApplication#log_type}
    */
    readonly logType?: string;
    /**
    * The name of the log pattern set.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#pattern_set CcApplication#pattern_set}
    */
    readonly patternSet?: string;
}
export class ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._encoding !== undefined) {
            hasAnyValues = true;
            internalValueResult.encoding = this._encoding;
        }
        if (this._logGroupName !== undefined) {
            hasAnyValues = true;
            internalValueResult.logGroupName = this._logGroupName;
        }
        if (this._logPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.logPath = this._logPath;
        }
        if (this._logType !== undefined) {
            hasAnyValues = true;
            internalValueResult.logType = this._logType;
        }
        if (this._patternSet !== undefined) {
            hasAnyValues = true;
            internalValueResult.patternSet = this._patternSet;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._encoding = undefined;
            this._logGroupName = undefined;
            this._logPath = undefined;
            this._logType = undefined;
            this._patternSet = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._encoding = value.encoding;
            this._logGroupName = value.logGroupName;
            this._logPath = value.logPath;
            this._logType = value.logType;
            this._patternSet = value.patternSet;
        }
    }

    // encoding - computed: true, optional: true, required: false
    private _encoding?: string; 
    public get encoding() {
        return this.getStringAttribute('encoding');
    }
    public set encoding(value: string) {
        this._encoding = value;
    }
    public resetEncoding() {
        this._encoding = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encodingInput() {
        return this._encoding;
    }

    // log_group_name - computed: true, optional: true, required: false
    private _logGroupName?: string; 
    public get logGroupName() {
        return this.getStringAttribute('log_group_name');
    }
    public set logGroupName(value: string) {
        this._logGroupName = value;
    }
    public resetLogGroupName() {
        this._logGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logGroupNameInput() {
        return this._logGroupName;
    }

    // log_path - computed: true, optional: true, required: false
    private _logPath?: string; 
    public get logPath() {
        return this.getStringAttribute('log_path');
    }
    public set logPath(value: string) {
        this._logPath = value;
    }
    public resetLogPath() {
        this._logPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logPathInput() {
        return this._logPath;
    }

    // log_type - computed: true, optional: true, required: false
    private _logType?: string; 
    public get logType() {
        return this.getStringAttribute('log_type');
    }
    public set logType(value: string) {
        this._logType = value;
    }
    public resetLogType() {
        this._logType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logTypeInput() {
        return this._logType;
    }

    // pattern_set - computed: true, optional: true, required: false
    private _patternSet?: string; 
    public get patternSet() {
        return this.getStringAttribute('pattern_set');
    }
    public set patternSet(value: string) {
        this._patternSet = value;
    }
    public resetPatternSet() {
        this._patternSet = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get patternSetInput() {
        return this._patternSet;
    }
}

export class ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsPropertyList extends cdktn.ComplexList {
    public internalValue? : ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsProperty[] | cdktn.IResolvable

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
    public get(index: number): ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsPropertyOutputReference {
        return new ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetricsProperty {
    /**
    * The name of the metric to be monitored for the component.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#alarm_metric_name CcApplication#alarm_metric_name}
    */
    readonly alarmMetricName?: string;
}
export class ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetricsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetricsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._alarmMetricName !== undefined) {
            hasAnyValues = true;
            internalValueResult.alarmMetricName = this._alarmMetricName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetricsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._alarmMetricName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._alarmMetricName = value.alarmMetricName;
        }
    }

    // alarm_metric_name - computed: true, optional: true, required: false
    private _alarmMetricName?: string; 
    public get alarmMetricName() {
        return this.getStringAttribute('alarm_metric_name');
    }
    public set alarmMetricName(value: string) {
        this._alarmMetricName = value;
    }
    public resetAlarmMetricName() {
        this._alarmMetricName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get alarmMetricNameInput() {
        return this._alarmMetricName;
    }
}

export class ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetricsPropertyList extends cdktn.ComplexList {
    public internalValue? : ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetricsProperty[] | cdktn.IResolvable

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
    public get(index: number): ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetricsPropertyOutputReference {
        return new ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetricsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesProperty {
    /**
    * A list of metrics to monitor for the component.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#alarm_metrics CcApplication#alarm_metrics}
    */
    readonly alarmMetrics?: ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetricsProperty[] | cdktn.IResolvable;
    /**
    * The name of the process to be monitored for the component.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#process_name CcApplication#process_name}
    */
    readonly processName?: string;
}
export class ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._alarmMetrics?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.alarmMetrics = this._alarmMetrics?.internalValue;
        }
        if (this._processName !== undefined) {
            hasAnyValues = true;
            internalValueResult.processName = this._processName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._alarmMetrics.internalValue = undefined;
            this._processName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._alarmMetrics.internalValue = value.alarmMetrics;
            this._processName = value.processName;
        }
    }

    // alarm_metrics - computed: true, optional: true, required: false
    private _alarmMetrics = new ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetricsPropertyList(this, "alarm_metrics", false);
    public get alarmMetrics() {
        return this._alarmMetrics;
    }
    public putAlarmMetrics(value: ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesAlarmMetricsProperty[] | cdktn.IResolvable) {
        this._alarmMetrics.internalValue = value;
    }
    public resetAlarmMetrics() {
        this._alarmMetrics.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get alarmMetricsInput() {
        return this._alarmMetrics.internalValue;
    }

    // process_name - computed: true, optional: true, required: false
    private _processName?: string; 
    public get processName() {
        return this.getStringAttribute('process_name');
    }
    public set processName(value: string) {
        this._processName = value;
    }
    public resetProcessName() {
        this._processName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get processNameInput() {
        return this._processName;
    }
}

export class ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesPropertyList extends cdktn.ComplexList {
    public internalValue? : ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesProperty[] | cdktn.IResolvable

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
    public get(index: number): ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesPropertyOutputReference {
        return new ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsProperty {
    /**
    * The levels of event to log. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#event_levels CcApplication#event_levels}
    */
    readonly eventLevels?: string[];
    /**
    * The type of Windows Events to log.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#event_name CcApplication#event_name}
    */
    readonly eventName?: string;
    /**
    * The CloudWatch log group name to be associated to the monitored log.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#log_group_name CcApplication#log_group_name}
    */
    readonly logGroupName?: string;
    /**
    * The name of the log pattern set.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#pattern_set CcApplication#pattern_set}
    */
    readonly patternSet?: string;
}
export class ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._eventLevels !== undefined) {
            hasAnyValues = true;
            internalValueResult.eventLevels = this._eventLevels;
        }
        if (this._eventName !== undefined) {
            hasAnyValues = true;
            internalValueResult.eventName = this._eventName;
        }
        if (this._logGroupName !== undefined) {
            hasAnyValues = true;
            internalValueResult.logGroupName = this._logGroupName;
        }
        if (this._patternSet !== undefined) {
            hasAnyValues = true;
            internalValueResult.patternSet = this._patternSet;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._eventLevels = undefined;
            this._eventName = undefined;
            this._logGroupName = undefined;
            this._patternSet = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._eventLevels = value.eventLevels;
            this._eventName = value.eventName;
            this._logGroupName = value.logGroupName;
            this._patternSet = value.patternSet;
        }
    }

    // event_levels - computed: true, optional: true, required: false
    private _eventLevels?: string[]; 
    public get eventLevels() {
        return this.getListAttribute('event_levels');
    }
    public set eventLevels(value: string[]) {
        this._eventLevels = value;
    }
    public resetEventLevels() {
        this._eventLevels = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventLevelsInput() {
        return this._eventLevels;
    }

    // event_name - computed: true, optional: true, required: false
    private _eventName?: string; 
    public get eventName() {
        return this.getStringAttribute('event_name');
    }
    public set eventName(value: string) {
        this._eventName = value;
    }
    public resetEventName() {
        this._eventName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventNameInput() {
        return this._eventName;
    }

    // log_group_name - computed: true, optional: true, required: false
    private _logGroupName?: string; 
    public get logGroupName() {
        return this.getStringAttribute('log_group_name');
    }
    public set logGroupName(value: string) {
        this._logGroupName = value;
    }
    public resetLogGroupName() {
        this._logGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logGroupNameInput() {
        return this._logGroupName;
    }

    // pattern_set - computed: true, optional: true, required: false
    private _patternSet?: string; 
    public get patternSet() {
        return this.getStringAttribute('pattern_set');
    }
    public set patternSet(value: string) {
        this._patternSet = value;
    }
    public resetPatternSet() {
        this._patternSet = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get patternSetInput() {
        return this._patternSet;
    }
}

export class ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsPropertyList extends cdktn.ComplexList {
    public internalValue? : ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsProperty[] | cdktn.IResolvable

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
    public get(index: number): ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsPropertyOutputReference {
        return new ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProperty {
    /**
    * A list of metrics to monitor for the component.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#alarm_metrics CcApplication#alarm_metrics}
    */
    readonly alarmMetrics?: ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsProperty[] | cdktn.IResolvable;
    /**
    * A list of logs to monitor for the component.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#logs CcApplication#logs}
    */
    readonly logs?: ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsProperty[] | cdktn.IResolvable;
    /**
    * A list of processes to monitor for the component. Only Windows EC2 instances can have a processes section.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#processes CcApplication#processes}
    */
    readonly processes?: ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesProperty[] | cdktn.IResolvable;
    /**
    * A list of Windows Events to log.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#windows_events CcApplication#windows_events}
    */
    readonly windowsEvents?: ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsProperty[] | cdktn.IResolvable;
}
export class ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._alarmMetrics?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.alarmMetrics = this._alarmMetrics?.internalValue;
        }
        if (this._logs?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.logs = this._logs?.internalValue;
        }
        if (this._processes?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.processes = this._processes?.internalValue;
        }
        if (this._windowsEvents?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.windowsEvents = this._windowsEvents?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._alarmMetrics.internalValue = undefined;
            this._logs.internalValue = undefined;
            this._processes.internalValue = undefined;
            this._windowsEvents.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._alarmMetrics.internalValue = value.alarmMetrics;
            this._logs.internalValue = value.logs;
            this._processes.internalValue = value.processes;
            this._windowsEvents.internalValue = value.windowsEvents;
        }
    }

    // alarm_metrics - computed: true, optional: true, required: false
    private _alarmMetrics = new ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsPropertyList(this, "alarm_metrics", false);
    public get alarmMetrics() {
        return this._alarmMetrics;
    }
    public putAlarmMetrics(value: ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsAlarmMetricsProperty[] | cdktn.IResolvable) {
        this._alarmMetrics.internalValue = value;
    }
    public resetAlarmMetrics() {
        this._alarmMetrics.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get alarmMetricsInput() {
        return this._alarmMetrics.internalValue;
    }

    // logs - computed: true, optional: true, required: false
    private _logs = new ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsPropertyList(this, "logs", false);
    public get logs() {
        return this._logs;
    }
    public putLogs(value: ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsLogsProperty[] | cdktn.IResolvable) {
        this._logs.internalValue = value;
    }
    public resetLogs() {
        this._logs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logsInput() {
        return this._logs.internalValue;
    }

    // processes - computed: true, optional: true, required: false
    private _processes = new ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesPropertyList(this, "processes", false);
    public get processes() {
        return this._processes;
    }
    public putProcesses(value: ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProcessesProperty[] | cdktn.IResolvable) {
        this._processes.internalValue = value;
    }
    public resetProcesses() {
        this._processes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get processesInput() {
        return this._processes.internalValue;
    }

    // windows_events - computed: true, optional: true, required: false
    private _windowsEvents = new ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsPropertyList(this, "windows_events", false);
    public get windowsEvents() {
        return this._windowsEvents;
    }
    public putWindowsEvents(value: ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsWindowsEventsProperty[] | cdktn.IResolvable) {
        this._windowsEvents.internalValue = value;
    }
    public resetWindowsEvents() {
        this._windowsEvents.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get windowsEventsInput() {
        return this._windowsEvents.internalValue;
    }
}
export interface SubComponentTypeConfigurationsProperty {
    /**
    * The configuration settings of sub components.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#sub_component_configuration_details CcApplication#sub_component_configuration_details}
    */
    readonly subComponentConfigurationDetails?: ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProperty;
    /**
    * The sub component type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#sub_component_type CcApplication#sub_component_type}
    */
    readonly subComponentType?: string;
}
export class SubComponentTypeConfigurationsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): SubComponentTypeConfigurationsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._subComponentConfigurationDetails?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.subComponentConfigurationDetails = this._subComponentConfigurationDetails?.internalValue;
        }
        if (this._subComponentType !== undefined) {
            hasAnyValues = true;
            internalValueResult.subComponentType = this._subComponentType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SubComponentTypeConfigurationsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._subComponentConfigurationDetails.internalValue = undefined;
            this._subComponentType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._subComponentConfigurationDetails.internalValue = value.subComponentConfigurationDetails;
            this._subComponentType = value.subComponentType;
        }
    }

    // sub_component_configuration_details - computed: true, optional: true, required: false
    private _subComponentConfigurationDetails = new ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsPropertyOutputReference(this, "sub_component_configuration_details");
    public get subComponentConfigurationDetails() {
        return this._subComponentConfigurationDetails;
    }
    public putSubComponentConfigurationDetails(value: ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationSubComponentTypeConfigurationsSubComponentConfigurationDetailsProperty) {
        this._subComponentConfigurationDetails.internalValue = value;
    }
    public resetSubComponentConfigurationDetails() {
        this._subComponentConfigurationDetails.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subComponentConfigurationDetailsInput() {
        return this._subComponentConfigurationDetails.internalValue;
    }

    // sub_component_type - computed: true, optional: true, required: false
    private _subComponentType?: string; 
    public get subComponentType() {
        return this.getStringAttribute('sub_component_type');
    }
    public set subComponentType(value: string) {
        this._subComponentType = value;
    }
    public resetSubComponentType() {
        this._subComponentType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subComponentTypeInput() {
        return this._subComponentType;
    }
}

export class SubComponentTypeConfigurationsPropertyList extends cdktn.ComplexList {
    public internalValue? : SubComponentTypeConfigurationsProperty[] | cdktn.IResolvable

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
    public get(index: number): SubComponentTypeConfigurationsPropertyOutputReference {
        return new SubComponentTypeConfigurationsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface DefaultOverwriteComponentConfigurationProperty {
    /**
    * The configuration settings
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#configuration_details CcApplication#configuration_details}
    */
    readonly configurationDetails?: ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProperty;
    /**
    * Sub component configurations of the component.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#sub_component_type_configurations CcApplication#sub_component_type_configurations}
    */
    readonly subComponentTypeConfigurations?: SubComponentTypeConfigurationsProperty[] | cdktn.IResolvable;
}
export class DefaultOverwriteComponentConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DefaultOverwriteComponentConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._configurationDetails?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.configurationDetails = this._configurationDetails?.internalValue;
        }
        if (this._subComponentTypeConfigurations?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.subComponentTypeConfigurations = this._subComponentTypeConfigurations?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DefaultOverwriteComponentConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._configurationDetails.internalValue = undefined;
            this._subComponentTypeConfigurations.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._configurationDetails.internalValue = value.configurationDetails;
            this._subComponentTypeConfigurations.internalValue = value.subComponentTypeConfigurations;
        }
    }

    // configuration_details - computed: true, optional: true, required: false
    private _configurationDetails = new ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsPropertyOutputReference(this, "configuration_details");
    public get configurationDetails() {
        return this._configurationDetails;
    }
    public putConfigurationDetails(value: ComponentMonitoringSettingsDefaultOverwriteComponentConfigurationConfigurationDetailsProperty) {
        this._configurationDetails.internalValue = value;
    }
    public resetConfigurationDetails() {
        this._configurationDetails.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get configurationDetailsInput() {
        return this._configurationDetails.internalValue;
    }

    // sub_component_type_configurations - computed: true, optional: true, required: false
    private _subComponentTypeConfigurations = new SubComponentTypeConfigurationsPropertyList(this, "sub_component_type_configurations", false);
    public get subComponentTypeConfigurations() {
        return this._subComponentTypeConfigurations;
    }
    public putSubComponentTypeConfigurations(value: SubComponentTypeConfigurationsProperty[] | cdktn.IResolvable) {
        this._subComponentTypeConfigurations.internalValue = value;
    }
    public resetSubComponentTypeConfigurations() {
        this._subComponentTypeConfigurations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subComponentTypeConfigurationsInput() {
        return this._subComponentTypeConfigurations.internalValue;
    }
}
export interface ComponentMonitoringSettingProperty {
    /**
    * The ARN of the compnonent.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#component_arn CcApplication#component_arn}
    */
    readonly componentArn?: string;
    /**
    * The component monitoring configuration mode.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#component_configuration_mode CcApplication#component_configuration_mode}
    */
    readonly componentConfigurationMode?: string;
    /**
    * The name of the component.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#component_name CcApplication#component_name}
    */
    readonly componentName?: string;
    /**
    * The monitoring configuration of the component.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#custom_component_configuration CcApplication#custom_component_configuration}
    */
    readonly customComponentConfiguration?: ComponentConfigurationProperty;
    /**
    * The overwritten settings on default component monitoring configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#default_overwrite_component_configuration CcApplication#default_overwrite_component_configuration}
    */
    readonly defaultOverwriteComponentConfiguration?: DefaultOverwriteComponentConfigurationProperty;
    /**
    * The tier of the application component.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#tier CcApplication#tier}
    */
    readonly tier?: string;
}
export class ComponentMonitoringSettingPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ComponentMonitoringSettingProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._componentArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.componentArn = this._componentArn;
        }
        if (this._componentConfigurationMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.componentConfigurationMode = this._componentConfigurationMode;
        }
        if (this._componentName !== undefined) {
            hasAnyValues = true;
            internalValueResult.componentName = this._componentName;
        }
        if (this._customComponentConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.customComponentConfiguration = this._customComponentConfiguration?.internalValue;
        }
        if (this._defaultOverwriteComponentConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultOverwriteComponentConfiguration = this._defaultOverwriteComponentConfiguration?.internalValue;
        }
        if (this._tier !== undefined) {
            hasAnyValues = true;
            internalValueResult.tier = this._tier;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ComponentMonitoringSettingProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._componentArn = undefined;
            this._componentConfigurationMode = undefined;
            this._componentName = undefined;
            this._customComponentConfiguration.internalValue = undefined;
            this._defaultOverwriteComponentConfiguration.internalValue = undefined;
            this._tier = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._componentArn = value.componentArn;
            this._componentConfigurationMode = value.componentConfigurationMode;
            this._componentName = value.componentName;
            this._customComponentConfiguration.internalValue = value.customComponentConfiguration;
            this._defaultOverwriteComponentConfiguration.internalValue = value.defaultOverwriteComponentConfiguration;
            this._tier = value.tier;
        }
    }

    // component_arn - computed: true, optional: true, required: false
    private _componentArn?: string; 
    public get componentArn() {
        return this.getStringAttribute('component_arn');
    }
    public set componentArn(value: string) {
        this._componentArn = value;
    }
    public resetComponentArn() {
        this._componentArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get componentArnInput() {
        return this._componentArn;
    }

    // component_configuration_mode - computed: true, optional: true, required: false
    private _componentConfigurationMode?: string; 
    public get componentConfigurationMode() {
        return this.getStringAttribute('component_configuration_mode');
    }
    public set componentConfigurationMode(value: string) {
        this._componentConfigurationMode = value;
    }
    public resetComponentConfigurationMode() {
        this._componentConfigurationMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get componentConfigurationModeInput() {
        return this._componentConfigurationMode;
    }

    // component_name - computed: true, optional: true, required: false
    private _componentName?: string; 
    public get componentName() {
        return this.getStringAttribute('component_name');
    }
    public set componentName(value: string) {
        this._componentName = value;
    }
    public resetComponentName() {
        this._componentName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get componentNameInput() {
        return this._componentName;
    }

    // custom_component_configuration - computed: true, optional: true, required: false
    private _customComponentConfiguration = new ComponentConfigurationPropertyOutputReference(this, "custom_component_configuration");
    public get customComponentConfiguration() {
        return this._customComponentConfiguration;
    }
    public putCustomComponentConfiguration(value: ComponentConfigurationProperty) {
        this._customComponentConfiguration.internalValue = value;
    }
    public resetCustomComponentConfiguration() {
        this._customComponentConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customComponentConfigurationInput() {
        return this._customComponentConfiguration.internalValue;
    }

    // default_overwrite_component_configuration - computed: true, optional: true, required: false
    private _defaultOverwriteComponentConfiguration = new DefaultOverwriteComponentConfigurationPropertyOutputReference(this, "default_overwrite_component_configuration");
    public get defaultOverwriteComponentConfiguration() {
        return this._defaultOverwriteComponentConfiguration;
    }
    public putDefaultOverwriteComponentConfiguration(value: DefaultOverwriteComponentConfigurationProperty) {
        this._defaultOverwriteComponentConfiguration.internalValue = value;
    }
    public resetDefaultOverwriteComponentConfiguration() {
        this._defaultOverwriteComponentConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultOverwriteComponentConfigurationInput() {
        return this._defaultOverwriteComponentConfiguration.internalValue;
    }

    // tier - computed: true, optional: true, required: false
    private _tier?: string; 
    public get tier() {
        return this.getStringAttribute('tier');
    }
    public set tier(value: string) {
        this._tier = value;
    }
    public resetTier() {
        this._tier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tierInput() {
        return this._tier;
    }
}

export class ComponentMonitoringSettingPropertyList extends cdktn.ComplexList {
    public internalValue? : ComponentMonitoringSettingProperty[] | cdktn.IResolvable

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
    public get(index: number): ComponentMonitoringSettingPropertyOutputReference {
        return new ComponentMonitoringSettingPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface CustomComponentProperty {
    /**
    * The name of the component.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#component_name CcApplication#component_name}
    */
    readonly componentName?: string;
    /**
    * The list of resource ARNs that belong to the component.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#resource_list CcApplication#resource_list}
    */
    readonly resourceList?: string[];
}
export class CustomComponentPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): CustomComponentProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._componentName !== undefined) {
            hasAnyValues = true;
            internalValueResult.componentName = this._componentName;
        }
        if (this._resourceList !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceList = this._resourceList;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CustomComponentProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._componentName = undefined;
            this._resourceList = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._componentName = value.componentName;
            this._resourceList = value.resourceList;
        }
    }

    // component_name - computed: true, optional: true, required: false
    private _componentName?: string; 
    public get componentName() {
        return this.getStringAttribute('component_name');
    }
    public set componentName(value: string) {
        this._componentName = value;
    }
    public resetComponentName() {
        this._componentName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get componentNameInput() {
        return this._componentName;
    }

    // resource_list - computed: true, optional: true, required: false
    private _resourceList?: string[]; 
    public get resourceList() {
        return this.getListAttribute('resource_list');
    }
    public set resourceList(value: string[]) {
        this._resourceList = value;
    }
    public resetResourceList() {
        this._resourceList = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceListInput() {
        return this._resourceList;
    }
}

export class CustomComponentPropertyList extends cdktn.ComplexList {
    public internalValue? : CustomComponentProperty[] | cdktn.IResolvable

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
    public get(index: number): CustomComponentPropertyOutputReference {
        return new CustomComponentPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface LogPatternProperty {
    /**
    * The log pattern.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#pattern CcApplication#pattern}
    */
    readonly pattern?: string;
    /**
    * The name of the log pattern.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#pattern_name CcApplication#pattern_name}
    */
    readonly patternName?: string;
    /**
    * Rank of the log pattern.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#rank CcApplication#rank}
    */
    readonly rank?: number;
}
export class LogPatternPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): LogPatternProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._pattern !== undefined) {
            hasAnyValues = true;
            internalValueResult.pattern = this._pattern;
        }
        if (this._patternName !== undefined) {
            hasAnyValues = true;
            internalValueResult.patternName = this._patternName;
        }
        if (this._rank !== undefined) {
            hasAnyValues = true;
            internalValueResult.rank = this._rank;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LogPatternProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._pattern = undefined;
            this._patternName = undefined;
            this._rank = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._pattern = value.pattern;
            this._patternName = value.patternName;
            this._rank = value.rank;
        }
    }

    // pattern - computed: true, optional: true, required: false
    private _pattern?: string; 
    public get pattern() {
        return this.getStringAttribute('pattern');
    }
    public set pattern(value: string) {
        this._pattern = value;
    }
    public resetPattern() {
        this._pattern = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get patternInput() {
        return this._pattern;
    }

    // pattern_name - computed: true, optional: true, required: false
    private _patternName?: string; 
    public get patternName() {
        return this.getStringAttribute('pattern_name');
    }
    public set patternName(value: string) {
        this._patternName = value;
    }
    public resetPatternName() {
        this._patternName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get patternNameInput() {
        return this._patternName;
    }

    // rank - computed: true, optional: true, required: false
    private _rank?: number; 
    public get rank() {
        return this.getNumberAttribute('rank');
    }
    public set rank(value: number) {
        this._rank = value;
    }
    public resetRank() {
        this._rank = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rankInput() {
        return this._rank;
    }
}

export class LogPatternPropertyList extends cdktn.ComplexList {
    public internalValue? : LogPatternProperty[] | cdktn.IResolvable

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
    public get(index: number): LogPatternPropertyOutputReference {
        return new LogPatternPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface LogPatternSetProperty {
    /**
    * The log patterns of a set.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#log_patterns CcApplication#log_patterns}
    */
    readonly logPatterns?: LogPatternProperty[] | cdktn.IResolvable;
    /**
    * The name of the log pattern set.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#pattern_set_name CcApplication#pattern_set_name}
    */
    readonly patternSetName?: string;
}
export class LogPatternSetPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): LogPatternSetProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._logPatterns?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.logPatterns = this._logPatterns?.internalValue;
        }
        if (this._patternSetName !== undefined) {
            hasAnyValues = true;
            internalValueResult.patternSetName = this._patternSetName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LogPatternSetProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._logPatterns.internalValue = undefined;
            this._patternSetName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._logPatterns.internalValue = value.logPatterns;
            this._patternSetName = value.patternSetName;
        }
    }

    // log_patterns - computed: true, optional: true, required: false
    private _logPatterns = new LogPatternPropertyList(this, "log_patterns", false);
    public get logPatterns() {
        return this._logPatterns;
    }
    public putLogPatterns(value: LogPatternProperty[] | cdktn.IResolvable) {
        this._logPatterns.internalValue = value;
    }
    public resetLogPatterns() {
        this._logPatterns.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logPatternsInput() {
        return this._logPatterns.internalValue;
    }

    // pattern_set_name - computed: true, optional: true, required: false
    private _patternSetName?: string; 
    public get patternSetName() {
        return this.getStringAttribute('pattern_set_name');
    }
    public set patternSetName(value: string) {
        this._patternSetName = value;
    }
    public resetPatternSetName() {
        this._patternSetName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get patternSetNameInput() {
        return this._patternSetName;
    }
}

export class LogPatternSetPropertyList extends cdktn.ComplexList {
    public internalValue? : LogPatternSetProperty[] | cdktn.IResolvable

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
    public get(index: number): LogPatternSetPropertyOutputReference {
        return new LogPatternSetPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#key CcApplication#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/applicationinsights_application#value CcApplication#value}
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
