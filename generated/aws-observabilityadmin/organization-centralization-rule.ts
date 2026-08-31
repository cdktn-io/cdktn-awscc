// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/observabilityadmin_organization_centralization_rule

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcOrganizationCentralizationRuleProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/observabilityadmin_organization_centralization_rule#rule CcOrganizationCentralizationRule#rule}
    */
    readonly rule: CcOrganizationCentralizationRule.CentralizationRuleProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/observabilityadmin_organization_centralization_rule#rule_name CcOrganizationCentralizationRule#rule_name}
    */
    readonly ruleName: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/observabilityadmin_organization_centralization_rule#tags CcOrganizationCentralizationRule#tags}
    */
    readonly tags?: CcOrganizationCentralizationRule.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/observabilityadmin_organization_centralization_rule awscc_observabilityadmin_organization_centralization_rule}
*/
export class CcOrganizationCentralizationRule extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_observabilityadmin_organization_centralization_rule";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcOrganizationCentralizationRule resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcOrganizationCentralizationRule to import
    * @param importFromId The id of the existing CcOrganizationCentralizationRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/observabilityadmin_organization_centralization_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcOrganizationCentralizationRule to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_observabilityadmin_organization_centralization_rule", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/observabilityadmin_organization_centralization_rule awscc_observabilityadmin_organization_centralization_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcOrganizationCentralizationRuleProps
    */
    public constructor(scope: Construct, id: string, config: CcOrganizationCentralizationRuleProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_observabilityadmin_organization_centralization_rule',
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
        this._rule.internalValue = config.rule;
        this._ruleName = config.ruleName;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // rule - computed: false, optional: false, required: true
    private _rule = new CcOrganizationCentralizationRule.CentralizationRulePropertyOutputReference(this, "rule");
    public get rule() {
        return this._rule;
    }
    public putRule(value: CcOrganizationCentralizationRule.CentralizationRuleProperty) {
        this._rule.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get ruleInput() {
        return this._rule.internalValue;
    }

    // rule_arn - computed: true, optional: false, required: false
    public get ruleArn() {
        return this.getStringAttribute('rule_arn');
    }

    // rule_name - computed: false, optional: false, required: true
    private _ruleName?: string; 
    public get ruleName() {
        return this.getStringAttribute('rule_name');
    }
    public set ruleName(value: string) {
        this._ruleName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get ruleNameInput() {
        return this._ruleName;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcOrganizationCentralizationRule.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcOrganizationCentralizationRule.TagProperty[] | cdktn.IResolvable) {
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
            rule: ccOrganizationCentralizationRuleCentralizationRulePropertyToTerraform(this._rule.internalValue),
            rule_name: cdktn.stringToTerraform(this._ruleName),
            tags: cdktn.listMapper(ccOrganizationCentralizationRuleTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            rule: {
                value: ccOrganizationCentralizationRuleCentralizationRulePropertyToHclTerraform(this._rule.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcOrganizationCentralizationRule.CentralizationRuleProperty",
            },
            rule_name: {
                value: cdktn.stringToHclTerraform(this._ruleName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccOrganizationCentralizationRuleTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcOrganizationCentralizationRule.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccOrganizationCentralizationRuleLogsBackupConfigurationPropertyToTerraform(struct?: CcOrganizationCentralizationRule.LogsBackupConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        kms_key_arn: cdktn.stringToTerraform(struct!.kmsKeyArn),
        region: cdktn.stringToTerraform(struct!.region),
    }
}


export function ccOrganizationCentralizationRuleLogsBackupConfigurationPropertyToHclTerraform(struct?: CcOrganizationCentralizationRule.LogsBackupConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        kms_key_arn: {
            value: cdktn.stringToHclTerraform(struct!.kmsKeyArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        region: {
            value: cdktn.stringToHclTerraform(struct!.region),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOrganizationCentralizationRuleLogGroupNameConfigurationPropertyToTerraform(struct?: CcOrganizationCentralizationRule.LogGroupNameConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        log_group_name_pattern: cdktn.stringToTerraform(struct!.logGroupNamePattern),
    }
}


export function ccOrganizationCentralizationRuleLogGroupNameConfigurationPropertyToHclTerraform(struct?: CcOrganizationCentralizationRule.LogGroupNameConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        log_group_name_pattern: {
            value: cdktn.stringToHclTerraform(struct!.logGroupNamePattern),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOrganizationCentralizationRuleLogsEncryptionConfigurationPropertyToTerraform(struct?: CcOrganizationCentralizationRule.LogsEncryptionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        encryption_conflict_resolution_strategy: cdktn.stringToTerraform(struct!.encryptionConflictResolutionStrategy),
        encryption_strategy: cdktn.stringToTerraform(struct!.encryptionStrategy),
        kms_key_arn: cdktn.stringToTerraform(struct!.kmsKeyArn),
    }
}


export function ccOrganizationCentralizationRuleLogsEncryptionConfigurationPropertyToHclTerraform(struct?: CcOrganizationCentralizationRule.LogsEncryptionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        encryption_conflict_resolution_strategy: {
            value: cdktn.stringToHclTerraform(struct!.encryptionConflictResolutionStrategy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        encryption_strategy: {
            value: cdktn.stringToHclTerraform(struct!.encryptionStrategy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        kms_key_arn: {
            value: cdktn.stringToHclTerraform(struct!.kmsKeyArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOrganizationCentralizationRuleDestinationLogsConfigurationPropertyToTerraform(struct?: CcOrganizationCentralizationRule.DestinationLogsConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        backup_configuration: ccOrganizationCentralizationRuleLogsBackupConfigurationPropertyToTerraform(struct!.backupConfiguration),
        log_group_name_configuration: ccOrganizationCentralizationRuleLogGroupNameConfigurationPropertyToTerraform(struct!.logGroupNameConfiguration),
        logs_encryption_configuration: ccOrganizationCentralizationRuleLogsEncryptionConfigurationPropertyToTerraform(struct!.logsEncryptionConfiguration),
    }
}


export function ccOrganizationCentralizationRuleDestinationLogsConfigurationPropertyToHclTerraform(struct?: CcOrganizationCentralizationRule.DestinationLogsConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        backup_configuration: {
            value: ccOrganizationCentralizationRuleLogsBackupConfigurationPropertyToHclTerraform(struct!.backupConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "LogsBackupConfigurationProperty",
        },
        log_group_name_configuration: {
            value: ccOrganizationCentralizationRuleLogGroupNameConfigurationPropertyToHclTerraform(struct!.logGroupNameConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "LogGroupNameConfigurationProperty",
        },
        logs_encryption_configuration: {
            value: ccOrganizationCentralizationRuleLogsEncryptionConfigurationPropertyToHclTerraform(struct!.logsEncryptionConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "LogsEncryptionConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOrganizationCentralizationRuleMetricsBackupConfigurationPropertyToTerraform(struct?: CcOrganizationCentralizationRule.MetricsBackupConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        region: cdktn.stringToTerraform(struct!.region),
    }
}


export function ccOrganizationCentralizationRuleMetricsBackupConfigurationPropertyToHclTerraform(struct?: CcOrganizationCentralizationRule.MetricsBackupConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        region: {
            value: cdktn.stringToHclTerraform(struct!.region),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOrganizationCentralizationRuleDestinationMetricsConfigurationPropertyToTerraform(struct?: CcOrganizationCentralizationRule.DestinationMetricsConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        backup_configuration: ccOrganizationCentralizationRuleMetricsBackupConfigurationPropertyToTerraform(struct!.backupConfiguration),
    }
}


export function ccOrganizationCentralizationRuleDestinationMetricsConfigurationPropertyToHclTerraform(struct?: CcOrganizationCentralizationRule.DestinationMetricsConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        backup_configuration: {
            value: ccOrganizationCentralizationRuleMetricsBackupConfigurationPropertyToHclTerraform(struct!.backupConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "MetricsBackupConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOrganizationCentralizationRuleCentralizationRuleDestinationPropertyToTerraform(struct?: CcOrganizationCentralizationRule.CentralizationRuleDestinationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        account: cdktn.stringToTerraform(struct!.account),
        destination_logs_configuration: ccOrganizationCentralizationRuleDestinationLogsConfigurationPropertyToTerraform(struct!.destinationLogsConfiguration),
        destination_metrics_configuration: ccOrganizationCentralizationRuleDestinationMetricsConfigurationPropertyToTerraform(struct!.destinationMetricsConfiguration),
        region: cdktn.stringToTerraform(struct!.region),
    }
}


export function ccOrganizationCentralizationRuleCentralizationRuleDestinationPropertyToHclTerraform(struct?: CcOrganizationCentralizationRule.CentralizationRuleDestinationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        account: {
            value: cdktn.stringToHclTerraform(struct!.account),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        destination_logs_configuration: {
            value: ccOrganizationCentralizationRuleDestinationLogsConfigurationPropertyToHclTerraform(struct!.destinationLogsConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "DestinationLogsConfigurationProperty",
        },
        destination_metrics_configuration: {
            value: ccOrganizationCentralizationRuleDestinationMetricsConfigurationPropertyToHclTerraform(struct!.destinationMetricsConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "DestinationMetricsConfigurationProperty",
        },
        region: {
            value: cdktn.stringToHclTerraform(struct!.region),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOrganizationCentralizationRuleSourceLogsConfigurationPropertyToTerraform(struct?: CcOrganizationCentralizationRule.SourceLogsConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        data_source_selection_criteria: cdktn.stringToTerraform(struct!.dataSourceSelectionCriteria),
        encrypted_log_group_strategy: cdktn.stringToTerraform(struct!.encryptedLogGroupStrategy),
        log_group_selection_criteria: cdktn.stringToTerraform(struct!.logGroupSelectionCriteria),
    }
}


export function ccOrganizationCentralizationRuleSourceLogsConfigurationPropertyToHclTerraform(struct?: CcOrganizationCentralizationRule.SourceLogsConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        data_source_selection_criteria: {
            value: cdktn.stringToHclTerraform(struct!.dataSourceSelectionCriteria),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        encrypted_log_group_strategy: {
            value: cdktn.stringToHclTerraform(struct!.encryptedLogGroupStrategy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        log_group_selection_criteria: {
            value: cdktn.stringToHclTerraform(struct!.logGroupSelectionCriteria),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOrganizationCentralizationRuleSourceMetricsConfigurationPropertyToTerraform(struct?: CcOrganizationCentralizationRule.SourceMetricsConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        metrics_selection_criteria: cdktn.stringToTerraform(struct!.metricsSelectionCriteria),
    }
}


export function ccOrganizationCentralizationRuleSourceMetricsConfigurationPropertyToHclTerraform(struct?: CcOrganizationCentralizationRule.SourceMetricsConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        metrics_selection_criteria: {
            value: cdktn.stringToHclTerraform(struct!.metricsSelectionCriteria),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOrganizationCentralizationRuleCentralizationRuleSourcePropertyToTerraform(struct?: CcOrganizationCentralizationRule.CentralizationRuleSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        regions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.regions),
        scope: cdktn.stringToTerraform(struct!.scope),
        source_logs_configuration: ccOrganizationCentralizationRuleSourceLogsConfigurationPropertyToTerraform(struct!.sourceLogsConfiguration),
        source_metrics_configuration: ccOrganizationCentralizationRuleSourceMetricsConfigurationPropertyToTerraform(struct!.sourceMetricsConfiguration),
    }
}


export function ccOrganizationCentralizationRuleCentralizationRuleSourcePropertyToHclTerraform(struct?: CcOrganizationCentralizationRule.CentralizationRuleSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        regions: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.regions),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        scope: {
            value: cdktn.stringToHclTerraform(struct!.scope),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        source_logs_configuration: {
            value: ccOrganizationCentralizationRuleSourceLogsConfigurationPropertyToHclTerraform(struct!.sourceLogsConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "SourceLogsConfigurationProperty",
        },
        source_metrics_configuration: {
            value: ccOrganizationCentralizationRuleSourceMetricsConfigurationPropertyToHclTerraform(struct!.sourceMetricsConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "SourceMetricsConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOrganizationCentralizationRuleCentralizationRulePropertyToTerraform(struct?: CcOrganizationCentralizationRule.CentralizationRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        destination: ccOrganizationCentralizationRuleCentralizationRuleDestinationPropertyToTerraform(struct!.destination),
        source: ccOrganizationCentralizationRuleCentralizationRuleSourcePropertyToTerraform(struct!.source),
    }
}


export function ccOrganizationCentralizationRuleCentralizationRulePropertyToHclTerraform(struct?: CcOrganizationCentralizationRule.CentralizationRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        destination: {
            value: ccOrganizationCentralizationRuleCentralizationRuleDestinationPropertyToHclTerraform(struct!.destination),
            isBlock: true,
            type: "struct",
            storageClassType: "CentralizationRuleDestinationProperty",
        },
        source: {
            value: ccOrganizationCentralizationRuleCentralizationRuleSourcePropertyToHclTerraform(struct!.source),
            isBlock: true,
            type: "struct",
            storageClassType: "CentralizationRuleSourceProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOrganizationCentralizationRuleTagPropertyToTerraform(struct?: CcOrganizationCentralizationRule.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccOrganizationCentralizationRuleTagPropertyToHclTerraform(struct?: CcOrganizationCentralizationRule.TagProperty | cdktn.IResolvable): any {
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


export namespace CcOrganizationCentralizationRule {
export interface LogsBackupConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/observabilityadmin_organization_centralization_rule#kms_key_arn CcOrganizationCentralizationRule#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/observabilityadmin_organization_centralization_rule#region CcOrganizationCentralizationRule#region}
    */
    readonly region?: string;
}
export class LogsBackupConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LogsBackupConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._kmsKeyArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsKeyArn = this._kmsKeyArn;
        }
        if (this._region !== undefined) {
            hasAnyValues = true;
            internalValueResult.region = this._region;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LogsBackupConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._kmsKeyArn = undefined;
            this._region = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._kmsKeyArn = value.kmsKeyArn;
            this._region = value.region;
        }
    }

    // kms_key_arn - computed: true, optional: true, required: false
    private _kmsKeyArn?: string; 
    public get kmsKeyArn() {
        return this.getStringAttribute('kms_key_arn');
    }
    public set kmsKeyArn(value: string) {
        this._kmsKeyArn = value;
    }
    public resetKmsKeyArn() {
        this._kmsKeyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyArnInput() {
        return this._kmsKeyArn;
    }

    // region - computed: true, optional: true, required: false
    private _region?: string; 
    public get region() {
        return this.getStringAttribute('region');
    }
    public set region(value: string) {
        this._region = value;
    }
    public resetRegion() {
        this._region = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get regionInput() {
        return this._region;
    }
}
export interface LogGroupNameConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/observabilityadmin_organization_centralization_rule#log_group_name_pattern CcOrganizationCentralizationRule#log_group_name_pattern}
    */
    readonly logGroupNamePattern?: string;
}
export class LogGroupNameConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LogGroupNameConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._logGroupNamePattern !== undefined) {
            hasAnyValues = true;
            internalValueResult.logGroupNamePattern = this._logGroupNamePattern;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LogGroupNameConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._logGroupNamePattern = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._logGroupNamePattern = value.logGroupNamePattern;
        }
    }

    // log_group_name_pattern - computed: true, optional: true, required: false
    private _logGroupNamePattern?: string; 
    public get logGroupNamePattern() {
        return this.getStringAttribute('log_group_name_pattern');
    }
    public set logGroupNamePattern(value: string) {
        this._logGroupNamePattern = value;
    }
    public resetLogGroupNamePattern() {
        this._logGroupNamePattern = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logGroupNamePatternInput() {
        return this._logGroupNamePattern;
    }
}
export interface LogsEncryptionConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/observabilityadmin_organization_centralization_rule#encryption_conflict_resolution_strategy CcOrganizationCentralizationRule#encryption_conflict_resolution_strategy}
    */
    readonly encryptionConflictResolutionStrategy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/observabilityadmin_organization_centralization_rule#encryption_strategy CcOrganizationCentralizationRule#encryption_strategy}
    */
    readonly encryptionStrategy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/observabilityadmin_organization_centralization_rule#kms_key_arn CcOrganizationCentralizationRule#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
}
export class LogsEncryptionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LogsEncryptionConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._encryptionConflictResolutionStrategy !== undefined) {
            hasAnyValues = true;
            internalValueResult.encryptionConflictResolutionStrategy = this._encryptionConflictResolutionStrategy;
        }
        if (this._encryptionStrategy !== undefined) {
            hasAnyValues = true;
            internalValueResult.encryptionStrategy = this._encryptionStrategy;
        }
        if (this._kmsKeyArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsKeyArn = this._kmsKeyArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LogsEncryptionConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._encryptionConflictResolutionStrategy = undefined;
            this._encryptionStrategy = undefined;
            this._kmsKeyArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._encryptionConflictResolutionStrategy = value.encryptionConflictResolutionStrategy;
            this._encryptionStrategy = value.encryptionStrategy;
            this._kmsKeyArn = value.kmsKeyArn;
        }
    }

    // encryption_conflict_resolution_strategy - computed: true, optional: true, required: false
    private _encryptionConflictResolutionStrategy?: string; 
    public get encryptionConflictResolutionStrategy() {
        return this.getStringAttribute('encryption_conflict_resolution_strategy');
    }
    public set encryptionConflictResolutionStrategy(value: string) {
        this._encryptionConflictResolutionStrategy = value;
    }
    public resetEncryptionConflictResolutionStrategy() {
        this._encryptionConflictResolutionStrategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionConflictResolutionStrategyInput() {
        return this._encryptionConflictResolutionStrategy;
    }

    // encryption_strategy - computed: true, optional: true, required: false
    private _encryptionStrategy?: string; 
    public get encryptionStrategy() {
        return this.getStringAttribute('encryption_strategy');
    }
    public set encryptionStrategy(value: string) {
        this._encryptionStrategy = value;
    }
    public resetEncryptionStrategy() {
        this._encryptionStrategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionStrategyInput() {
        return this._encryptionStrategy;
    }

    // kms_key_arn - computed: true, optional: true, required: false
    private _kmsKeyArn?: string; 
    public get kmsKeyArn() {
        return this.getStringAttribute('kms_key_arn');
    }
    public set kmsKeyArn(value: string) {
        this._kmsKeyArn = value;
    }
    public resetKmsKeyArn() {
        this._kmsKeyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyArnInput() {
        return this._kmsKeyArn;
    }
}
export interface DestinationLogsConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/observabilityadmin_organization_centralization_rule#backup_configuration CcOrganizationCentralizationRule#backup_configuration}
    */
    readonly backupConfiguration?: LogsBackupConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/observabilityadmin_organization_centralization_rule#log_group_name_configuration CcOrganizationCentralizationRule#log_group_name_configuration}
    */
    readonly logGroupNameConfiguration?: LogGroupNameConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/observabilityadmin_organization_centralization_rule#logs_encryption_configuration CcOrganizationCentralizationRule#logs_encryption_configuration}
    */
    readonly logsEncryptionConfiguration?: LogsEncryptionConfigurationProperty;
}
export class DestinationLogsConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DestinationLogsConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._backupConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.backupConfiguration = this._backupConfiguration?.internalValue;
        }
        if (this._logGroupNameConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.logGroupNameConfiguration = this._logGroupNameConfiguration?.internalValue;
        }
        if (this._logsEncryptionConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.logsEncryptionConfiguration = this._logsEncryptionConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DestinationLogsConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._backupConfiguration.internalValue = undefined;
            this._logGroupNameConfiguration.internalValue = undefined;
            this._logsEncryptionConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._backupConfiguration.internalValue = value.backupConfiguration;
            this._logGroupNameConfiguration.internalValue = value.logGroupNameConfiguration;
            this._logsEncryptionConfiguration.internalValue = value.logsEncryptionConfiguration;
        }
    }

    // backup_configuration - computed: true, optional: true, required: false
    private _backupConfiguration = new LogsBackupConfigurationPropertyOutputReference(this, "backup_configuration");
    public get backupConfiguration() {
        return this._backupConfiguration;
    }
    public putBackupConfiguration(value: LogsBackupConfigurationProperty) {
        this._backupConfiguration.internalValue = value;
    }
    public resetBackupConfiguration() {
        this._backupConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get backupConfigurationInput() {
        return this._backupConfiguration.internalValue;
    }

    // log_group_name_configuration - computed: true, optional: true, required: false
    private _logGroupNameConfiguration = new LogGroupNameConfigurationPropertyOutputReference(this, "log_group_name_configuration");
    public get logGroupNameConfiguration() {
        return this._logGroupNameConfiguration;
    }
    public putLogGroupNameConfiguration(value: LogGroupNameConfigurationProperty) {
        this._logGroupNameConfiguration.internalValue = value;
    }
    public resetLogGroupNameConfiguration() {
        this._logGroupNameConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logGroupNameConfigurationInput() {
        return this._logGroupNameConfiguration.internalValue;
    }

    // logs_encryption_configuration - computed: true, optional: true, required: false
    private _logsEncryptionConfiguration = new LogsEncryptionConfigurationPropertyOutputReference(this, "logs_encryption_configuration");
    public get logsEncryptionConfiguration() {
        return this._logsEncryptionConfiguration;
    }
    public putLogsEncryptionConfiguration(value: LogsEncryptionConfigurationProperty) {
        this._logsEncryptionConfiguration.internalValue = value;
    }
    public resetLogsEncryptionConfiguration() {
        this._logsEncryptionConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logsEncryptionConfigurationInput() {
        return this._logsEncryptionConfiguration.internalValue;
    }
}
export interface MetricsBackupConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/observabilityadmin_organization_centralization_rule#region CcOrganizationCentralizationRule#region}
    */
    readonly region?: string;
}
export class MetricsBackupConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MetricsBackupConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._region !== undefined) {
            hasAnyValues = true;
            internalValueResult.region = this._region;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MetricsBackupConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._region = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._region = value.region;
        }
    }

    // region - computed: true, optional: true, required: false
    private _region?: string; 
    public get region() {
        return this.getStringAttribute('region');
    }
    public set region(value: string) {
        this._region = value;
    }
    public resetRegion() {
        this._region = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get regionInput() {
        return this._region;
    }
}
export interface DestinationMetricsConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/observabilityadmin_organization_centralization_rule#backup_configuration CcOrganizationCentralizationRule#backup_configuration}
    */
    readonly backupConfiguration?: MetricsBackupConfigurationProperty;
}
export class DestinationMetricsConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DestinationMetricsConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._backupConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.backupConfiguration = this._backupConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DestinationMetricsConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._backupConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._backupConfiguration.internalValue = value.backupConfiguration;
        }
    }

    // backup_configuration - computed: true, optional: true, required: false
    private _backupConfiguration = new MetricsBackupConfigurationPropertyOutputReference(this, "backup_configuration");
    public get backupConfiguration() {
        return this._backupConfiguration;
    }
    public putBackupConfiguration(value: MetricsBackupConfigurationProperty) {
        this._backupConfiguration.internalValue = value;
    }
    public resetBackupConfiguration() {
        this._backupConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get backupConfigurationInput() {
        return this._backupConfiguration.internalValue;
    }
}
export interface CentralizationRuleDestinationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/observabilityadmin_organization_centralization_rule#account CcOrganizationCentralizationRule#account}
    */
    readonly account?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/observabilityadmin_organization_centralization_rule#destination_logs_configuration CcOrganizationCentralizationRule#destination_logs_configuration}
    */
    readonly destinationLogsConfiguration?: DestinationLogsConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/observabilityadmin_organization_centralization_rule#destination_metrics_configuration CcOrganizationCentralizationRule#destination_metrics_configuration}
    */
    readonly destinationMetricsConfiguration?: DestinationMetricsConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/observabilityadmin_organization_centralization_rule#region CcOrganizationCentralizationRule#region}
    */
    readonly region: string;
}
export class CentralizationRuleDestinationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CentralizationRuleDestinationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._account !== undefined) {
            hasAnyValues = true;
            internalValueResult.account = this._account;
        }
        if (this._destinationLogsConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinationLogsConfiguration = this._destinationLogsConfiguration?.internalValue;
        }
        if (this._destinationMetricsConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinationMetricsConfiguration = this._destinationMetricsConfiguration?.internalValue;
        }
        if (this._region !== undefined) {
            hasAnyValues = true;
            internalValueResult.region = this._region;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CentralizationRuleDestinationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._account = undefined;
            this._destinationLogsConfiguration.internalValue = undefined;
            this._destinationMetricsConfiguration.internalValue = undefined;
            this._region = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._account = value.account;
            this._destinationLogsConfiguration.internalValue = value.destinationLogsConfiguration;
            this._destinationMetricsConfiguration.internalValue = value.destinationMetricsConfiguration;
            this._region = value.region;
        }
    }

    // account - computed: true, optional: true, required: false
    private _account?: string; 
    public get account() {
        return this.getStringAttribute('account');
    }
    public set account(value: string) {
        this._account = value;
    }
    public resetAccount() {
        this._account = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accountInput() {
        return this._account;
    }

    // destination_logs_configuration - computed: true, optional: true, required: false
    private _destinationLogsConfiguration = new DestinationLogsConfigurationPropertyOutputReference(this, "destination_logs_configuration");
    public get destinationLogsConfiguration() {
        return this._destinationLogsConfiguration;
    }
    public putDestinationLogsConfiguration(value: DestinationLogsConfigurationProperty) {
        this._destinationLogsConfiguration.internalValue = value;
    }
    public resetDestinationLogsConfiguration() {
        this._destinationLogsConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationLogsConfigurationInput() {
        return this._destinationLogsConfiguration.internalValue;
    }

    // destination_metrics_configuration - computed: true, optional: true, required: false
    private _destinationMetricsConfiguration = new DestinationMetricsConfigurationPropertyOutputReference(this, "destination_metrics_configuration");
    public get destinationMetricsConfiguration() {
        return this._destinationMetricsConfiguration;
    }
    public putDestinationMetricsConfiguration(value: DestinationMetricsConfigurationProperty) {
        this._destinationMetricsConfiguration.internalValue = value;
    }
    public resetDestinationMetricsConfiguration() {
        this._destinationMetricsConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationMetricsConfigurationInput() {
        return this._destinationMetricsConfiguration.internalValue;
    }

    // region - computed: false, optional: false, required: true
    private _region?: string; 
    public get region() {
        return this.getStringAttribute('region');
    }
    public set region(value: string) {
        this._region = value;
    }
    // Temporarily expose input value. Use with caution.
    public get regionInput() {
        return this._region;
    }
}
export interface SourceLogsConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/observabilityadmin_organization_centralization_rule#data_source_selection_criteria CcOrganizationCentralizationRule#data_source_selection_criteria}
    */
    readonly dataSourceSelectionCriteria?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/observabilityadmin_organization_centralization_rule#encrypted_log_group_strategy CcOrganizationCentralizationRule#encrypted_log_group_strategy}
    */
    readonly encryptedLogGroupStrategy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/observabilityadmin_organization_centralization_rule#log_group_selection_criteria CcOrganizationCentralizationRule#log_group_selection_criteria}
    */
    readonly logGroupSelectionCriteria?: string;
}
export class SourceLogsConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SourceLogsConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dataSourceSelectionCriteria !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataSourceSelectionCriteria = this._dataSourceSelectionCriteria;
        }
        if (this._encryptedLogGroupStrategy !== undefined) {
            hasAnyValues = true;
            internalValueResult.encryptedLogGroupStrategy = this._encryptedLogGroupStrategy;
        }
        if (this._logGroupSelectionCriteria !== undefined) {
            hasAnyValues = true;
            internalValueResult.logGroupSelectionCriteria = this._logGroupSelectionCriteria;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SourceLogsConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dataSourceSelectionCriteria = undefined;
            this._encryptedLogGroupStrategy = undefined;
            this._logGroupSelectionCriteria = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dataSourceSelectionCriteria = value.dataSourceSelectionCriteria;
            this._encryptedLogGroupStrategy = value.encryptedLogGroupStrategy;
            this._logGroupSelectionCriteria = value.logGroupSelectionCriteria;
        }
    }

    // data_source_selection_criteria - computed: true, optional: true, required: false
    private _dataSourceSelectionCriteria?: string; 
    public get dataSourceSelectionCriteria() {
        return this.getStringAttribute('data_source_selection_criteria');
    }
    public set dataSourceSelectionCriteria(value: string) {
        this._dataSourceSelectionCriteria = value;
    }
    public resetDataSourceSelectionCriteria() {
        this._dataSourceSelectionCriteria = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataSourceSelectionCriteriaInput() {
        return this._dataSourceSelectionCriteria;
    }

    // encrypted_log_group_strategy - computed: true, optional: true, required: false
    private _encryptedLogGroupStrategy?: string; 
    public get encryptedLogGroupStrategy() {
        return this.getStringAttribute('encrypted_log_group_strategy');
    }
    public set encryptedLogGroupStrategy(value: string) {
        this._encryptedLogGroupStrategy = value;
    }
    public resetEncryptedLogGroupStrategy() {
        this._encryptedLogGroupStrategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptedLogGroupStrategyInput() {
        return this._encryptedLogGroupStrategy;
    }

    // log_group_selection_criteria - computed: true, optional: true, required: false
    private _logGroupSelectionCriteria?: string; 
    public get logGroupSelectionCriteria() {
        return this.getStringAttribute('log_group_selection_criteria');
    }
    public set logGroupSelectionCriteria(value: string) {
        this._logGroupSelectionCriteria = value;
    }
    public resetLogGroupSelectionCriteria() {
        this._logGroupSelectionCriteria = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logGroupSelectionCriteriaInput() {
        return this._logGroupSelectionCriteria;
    }
}
export interface SourceMetricsConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/observabilityadmin_organization_centralization_rule#metrics_selection_criteria CcOrganizationCentralizationRule#metrics_selection_criteria}
    */
    readonly metricsSelectionCriteria?: string;
}
export class SourceMetricsConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SourceMetricsConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._metricsSelectionCriteria !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricsSelectionCriteria = this._metricsSelectionCriteria;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SourceMetricsConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._metricsSelectionCriteria = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._metricsSelectionCriteria = value.metricsSelectionCriteria;
        }
    }

    // metrics_selection_criteria - computed: true, optional: true, required: false
    private _metricsSelectionCriteria?: string; 
    public get metricsSelectionCriteria() {
        return this.getStringAttribute('metrics_selection_criteria');
    }
    public set metricsSelectionCriteria(value: string) {
        this._metricsSelectionCriteria = value;
    }
    public resetMetricsSelectionCriteria() {
        this._metricsSelectionCriteria = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricsSelectionCriteriaInput() {
        return this._metricsSelectionCriteria;
    }
}
export interface CentralizationRuleSourceProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/observabilityadmin_organization_centralization_rule#regions CcOrganizationCentralizationRule#regions}
    */
    readonly regions: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/observabilityadmin_organization_centralization_rule#scope CcOrganizationCentralizationRule#scope}
    */
    readonly scope?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/observabilityadmin_organization_centralization_rule#source_logs_configuration CcOrganizationCentralizationRule#source_logs_configuration}
    */
    readonly sourceLogsConfiguration?: SourceLogsConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/observabilityadmin_organization_centralization_rule#source_metrics_configuration CcOrganizationCentralizationRule#source_metrics_configuration}
    */
    readonly sourceMetricsConfiguration?: SourceMetricsConfigurationProperty;
}
export class CentralizationRuleSourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CentralizationRuleSourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._regions !== undefined) {
            hasAnyValues = true;
            internalValueResult.regions = this._regions;
        }
        if (this._scope !== undefined) {
            hasAnyValues = true;
            internalValueResult.scope = this._scope;
        }
        if (this._sourceLogsConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceLogsConfiguration = this._sourceLogsConfiguration?.internalValue;
        }
        if (this._sourceMetricsConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceMetricsConfiguration = this._sourceMetricsConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CentralizationRuleSourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._regions = undefined;
            this._scope = undefined;
            this._sourceLogsConfiguration.internalValue = undefined;
            this._sourceMetricsConfiguration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._regions = value.regions;
            this._scope = value.scope;
            this._sourceLogsConfiguration.internalValue = value.sourceLogsConfiguration;
            this._sourceMetricsConfiguration.internalValue = value.sourceMetricsConfiguration;
        }
    }

    // regions - computed: false, optional: false, required: true
    private _regions?: string[]; 
    public get regions() {
        return cdktn.Fn.tolist(this.getListAttribute('regions'));
    }
    public set regions(value: string[]) {
        this._regions = value;
    }
    // Temporarily expose input value. Use with caution.
    public get regionsInput() {
        return this._regions;
    }

    // scope - computed: true, optional: true, required: false
    private _scope?: string; 
    public get scope() {
        return this.getStringAttribute('scope');
    }
    public set scope(value: string) {
        this._scope = value;
    }
    public resetScope() {
        this._scope = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scopeInput() {
        return this._scope;
    }

    // source_logs_configuration - computed: true, optional: true, required: false
    private _sourceLogsConfiguration = new SourceLogsConfigurationPropertyOutputReference(this, "source_logs_configuration");
    public get sourceLogsConfiguration() {
        return this._sourceLogsConfiguration;
    }
    public putSourceLogsConfiguration(value: SourceLogsConfigurationProperty) {
        this._sourceLogsConfiguration.internalValue = value;
    }
    public resetSourceLogsConfiguration() {
        this._sourceLogsConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceLogsConfigurationInput() {
        return this._sourceLogsConfiguration.internalValue;
    }

    // source_metrics_configuration - computed: true, optional: true, required: false
    private _sourceMetricsConfiguration = new SourceMetricsConfigurationPropertyOutputReference(this, "source_metrics_configuration");
    public get sourceMetricsConfiguration() {
        return this._sourceMetricsConfiguration;
    }
    public putSourceMetricsConfiguration(value: SourceMetricsConfigurationProperty) {
        this._sourceMetricsConfiguration.internalValue = value;
    }
    public resetSourceMetricsConfiguration() {
        this._sourceMetricsConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceMetricsConfigurationInput() {
        return this._sourceMetricsConfiguration.internalValue;
    }
}
export interface CentralizationRuleProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/observabilityadmin_organization_centralization_rule#destination CcOrganizationCentralizationRule#destination}
    */
    readonly destination: CentralizationRuleDestinationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/observabilityadmin_organization_centralization_rule#source CcOrganizationCentralizationRule#source}
    */
    readonly source: CentralizationRuleSourceProperty;
}
export class CentralizationRulePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CentralizationRuleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._destination?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.destination = this._destination?.internalValue;
        }
        if (this._source?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.source = this._source?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CentralizationRuleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._destination.internalValue = undefined;
            this._source.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._destination.internalValue = value.destination;
            this._source.internalValue = value.source;
        }
    }

    // destination - computed: false, optional: false, required: true
    private _destination = new CentralizationRuleDestinationPropertyOutputReference(this, "destination");
    public get destination() {
        return this._destination;
    }
    public putDestination(value: CentralizationRuleDestinationProperty) {
        this._destination.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationInput() {
        return this._destination.internalValue;
    }

    // source - computed: false, optional: false, required: true
    private _source = new CentralizationRuleSourcePropertyOutputReference(this, "source");
    public get source() {
        return this._source;
    }
    public putSource(value: CentralizationRuleSourceProperty) {
        this._source.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceInput() {
        return this._source.internalValue;
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/observabilityadmin_organization_centralization_rule#key CcOrganizationCentralizationRule#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/observabilityadmin_organization_centralization_rule#value CcOrganizationCentralizationRule#value}
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
