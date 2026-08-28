// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/aps_workspace

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcWorkspaceProps extends cdktn.TerraformMetaArguments {
    /**
    * The AMP Workspace alert manager definition data
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/aps_workspace#alert_manager_definition CcWorkspace#alert_manager_definition}
    */
    readonly alertManagerDefinition?: string;
    /**
    * AMP Workspace alias.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/aps_workspace#alias CcWorkspace#alias}
    */
    readonly alias?: string;
    /**
    * KMS Key ARN used to encrypt and decrypt AMP workspace data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/aps_workspace#kms_key_arn CcWorkspace#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Logging configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/aps_workspace#logging_configuration CcWorkspace#logging_configuration}
    */
    readonly loggingConfiguration?: CcWorkspace.LoggingConfigurationProperty;
    /**
    * Query logging configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/aps_workspace#query_logging_configuration CcWorkspace#query_logging_configuration}
    */
    readonly queryLoggingConfiguration?: CcWorkspace.QueryLoggingConfigurationProperty;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/aps_workspace#tags CcWorkspace#tags}
    */
    readonly tags?: CcWorkspace.TagProperty[] | cdktn.IResolvable;
    /**
    * Workspace configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/aps_workspace#workspace_configuration CcWorkspace#workspace_configuration}
    */
    readonly workspaceConfiguration?: CcWorkspace.WorkspaceConfigurationProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/aps_workspace awscc_aps_workspace}
*/
export class CcWorkspace extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_aps_workspace";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcWorkspace resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcWorkspace to import
    * @param importFromId The id of the existing CcWorkspace that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/aps_workspace#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcWorkspace to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_aps_workspace", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/aps_workspace awscc_aps_workspace} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcWorkspaceProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcWorkspaceProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_aps_workspace',
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
        this._alertManagerDefinition = config.alertManagerDefinition;
        this._alias = config.alias;
        this._kmsKeyArn = config.kmsKeyArn;
        this._loggingConfiguration.internalValue = config.loggingConfiguration;
        this._queryLoggingConfiguration.internalValue = config.queryLoggingConfiguration;
        this._tags.internalValue = config.tags;
        this._workspaceConfiguration.internalValue = config.workspaceConfiguration;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // alert_manager_definition - computed: true, optional: true, required: false
    private _alertManagerDefinition?: string; 
    public get alertManagerDefinition() {
        return this.getStringAttribute('alert_manager_definition');
    }
    public set alertManagerDefinition(value: string) {
        this._alertManagerDefinition = value;
    }
    public resetAlertManagerDefinition() {
        this._alertManagerDefinition = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get alertManagerDefinitionInput() {
        return this._alertManagerDefinition;
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

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
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

    // logging_configuration - computed: true, optional: true, required: false
    private _loggingConfiguration = new CcWorkspace.LoggingConfigurationPropertyOutputReference(this, "logging_configuration");
    public get loggingConfiguration() {
        return this._loggingConfiguration;
    }
    public putLoggingConfiguration(value: CcWorkspace.LoggingConfigurationProperty) {
        this._loggingConfiguration.internalValue = value;
    }
    public resetLoggingConfiguration() {
        this._loggingConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get loggingConfigurationInput() {
        return this._loggingConfiguration.internalValue;
    }

    // prometheus_endpoint - computed: true, optional: false, required: false
    public get prometheusEndpoint() {
        return this.getStringAttribute('prometheus_endpoint');
    }

    // query_logging_configuration - computed: true, optional: true, required: false
    private _queryLoggingConfiguration = new CcWorkspace.QueryLoggingConfigurationPropertyOutputReference(this, "query_logging_configuration");
    public get queryLoggingConfiguration() {
        return this._queryLoggingConfiguration;
    }
    public putQueryLoggingConfiguration(value: CcWorkspace.QueryLoggingConfigurationProperty) {
        this._queryLoggingConfiguration.internalValue = value;
    }
    public resetQueryLoggingConfiguration() {
        this._queryLoggingConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get queryLoggingConfigurationInput() {
        return this._queryLoggingConfiguration.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcWorkspace.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcWorkspace.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // workspace_configuration - computed: true, optional: true, required: false
    private _workspaceConfiguration = new CcWorkspace.WorkspaceConfigurationPropertyOutputReference(this, "workspace_configuration");
    public get workspaceConfiguration() {
        return this._workspaceConfiguration;
    }
    public putWorkspaceConfiguration(value: CcWorkspace.WorkspaceConfigurationProperty) {
        this._workspaceConfiguration.internalValue = value;
    }
    public resetWorkspaceConfiguration() {
        this._workspaceConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get workspaceConfigurationInput() {
        return this._workspaceConfiguration.internalValue;
    }

    // workspace_id - computed: true, optional: false, required: false
    public get workspaceId() {
        return this.getStringAttribute('workspace_id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            alert_manager_definition: cdktn.stringToTerraform(this._alertManagerDefinition),
            alias: cdktn.stringToTerraform(this._alias),
            kms_key_arn: cdktn.stringToTerraform(this._kmsKeyArn),
            logging_configuration: ccWorkspaceLoggingConfigurationPropertyToTerraform(this._loggingConfiguration.internalValue),
            query_logging_configuration: ccWorkspaceQueryLoggingConfigurationPropertyToTerraform(this._queryLoggingConfiguration.internalValue),
            tags: cdktn.listMapper(ccWorkspaceTagPropertyToTerraform, false)(this._tags.internalValue),
            workspace_configuration: ccWorkspaceWorkspaceConfigurationPropertyToTerraform(this._workspaceConfiguration.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            alert_manager_definition: {
                value: cdktn.stringToHclTerraform(this._alertManagerDefinition),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            alias: {
                value: cdktn.stringToHclTerraform(this._alias),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            kms_key_arn: {
                value: cdktn.stringToHclTerraform(this._kmsKeyArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            logging_configuration: {
                value: ccWorkspaceLoggingConfigurationPropertyToHclTerraform(this._loggingConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcWorkspace.LoggingConfigurationProperty",
            },
            query_logging_configuration: {
                value: ccWorkspaceQueryLoggingConfigurationPropertyToHclTerraform(this._queryLoggingConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcWorkspace.QueryLoggingConfigurationProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccWorkspaceTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcWorkspace.TagPropertyList",
            },
            workspace_configuration: {
                value: ccWorkspaceWorkspaceConfigurationPropertyToHclTerraform(this._workspaceConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcWorkspace.WorkspaceConfigurationProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccWorkspaceLoggingConfigurationPropertyToTerraform(struct?: CcWorkspace.LoggingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        log_group_arn: cdktn.stringToTerraform(struct!.logGroupArn),
    }
}


export function ccWorkspaceLoggingConfigurationPropertyToHclTerraform(struct?: CcWorkspace.LoggingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        log_group_arn: {
            value: cdktn.stringToHclTerraform(struct!.logGroupArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkspaceCloudWatchLogDestinationPropertyToTerraform(struct?: CcWorkspace.CloudWatchLogDestinationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        log_group_arn: cdktn.stringToTerraform(struct!.logGroupArn),
    }
}


export function ccWorkspaceCloudWatchLogDestinationPropertyToHclTerraform(struct?: CcWorkspace.CloudWatchLogDestinationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        log_group_arn: {
            value: cdktn.stringToHclTerraform(struct!.logGroupArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkspaceLoggingFilterPropertyToTerraform(struct?: CcWorkspace.LoggingFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        qsp_threshold: cdktn.numberToTerraform(struct!.qspThreshold),
    }
}


export function ccWorkspaceLoggingFilterPropertyToHclTerraform(struct?: CcWorkspace.LoggingFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        qsp_threshold: {
            value: cdktn.numberToHclTerraform(struct!.qspThreshold),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkspaceLoggingDestinationPropertyToTerraform(struct?: CcWorkspace.LoggingDestinationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cloudwatch_logs: ccWorkspaceCloudWatchLogDestinationPropertyToTerraform(struct!.cloudwatchLogs),
        filters: ccWorkspaceLoggingFilterPropertyToTerraform(struct!.filters),
    }
}


export function ccWorkspaceLoggingDestinationPropertyToHclTerraform(struct?: CcWorkspace.LoggingDestinationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cloudwatch_logs: {
            value: ccWorkspaceCloudWatchLogDestinationPropertyToHclTerraform(struct!.cloudwatchLogs),
            isBlock: true,
            type: "struct",
            storageClassType: "CloudWatchLogDestinationProperty",
        },
        filters: {
            value: ccWorkspaceLoggingFilterPropertyToHclTerraform(struct!.filters),
            isBlock: true,
            type: "struct",
            storageClassType: "LoggingFilterProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkspaceQueryLoggingConfigurationPropertyToTerraform(struct?: CcWorkspace.QueryLoggingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        destinations: cdktn.listMapper(ccWorkspaceLoggingDestinationPropertyToTerraform, false)(struct!.destinations),
    }
}


export function ccWorkspaceQueryLoggingConfigurationPropertyToHclTerraform(struct?: CcWorkspace.QueryLoggingConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        destinations: {
            value: cdktn.listMapperHcl(ccWorkspaceLoggingDestinationPropertyToHclTerraform, false)(struct!.destinations),
            isBlock: true,
            type: "list",
            storageClassType: "LoggingDestinationPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkspaceTagPropertyToTerraform(struct?: CcWorkspace.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccWorkspaceTagPropertyToHclTerraform(struct?: CcWorkspace.TagProperty | cdktn.IResolvable): any {
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


export function ccWorkspaceLabelPropertyToTerraform(struct?: CcWorkspace.LabelProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccWorkspaceLabelPropertyToHclTerraform(struct?: CcWorkspace.LabelProperty | cdktn.IResolvable): any {
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


export function ccWorkspaceLimitsPerLabelSetEntryPropertyToTerraform(struct?: CcWorkspace.LimitsPerLabelSetEntryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        max_series: cdktn.numberToTerraform(struct!.maxSeries),
    }
}


export function ccWorkspaceLimitsPerLabelSetEntryPropertyToHclTerraform(struct?: CcWorkspace.LimitsPerLabelSetEntryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        max_series: {
            value: cdktn.numberToHclTerraform(struct!.maxSeries),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkspaceLimitsPerLabelSetPropertyToTerraform(struct?: CcWorkspace.LimitsPerLabelSetProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        label_set: cdktn.listMapper(ccWorkspaceLabelPropertyToTerraform, false)(struct!.labelSet),
        limits: ccWorkspaceLimitsPerLabelSetEntryPropertyToTerraform(struct!.limits),
    }
}


export function ccWorkspaceLimitsPerLabelSetPropertyToHclTerraform(struct?: CcWorkspace.LimitsPerLabelSetProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        label_set: {
            value: cdktn.listMapperHcl(ccWorkspaceLabelPropertyToHclTerraform, false)(struct!.labelSet),
            isBlock: true,
            type: "set",
            storageClassType: "LabelPropertyList",
        },
        limits: {
            value: ccWorkspaceLimitsPerLabelSetEntryPropertyToHclTerraform(struct!.limits),
            isBlock: true,
            type: "struct",
            storageClassType: "LimitsPerLabelSetEntryProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccWorkspaceWorkspaceConfigurationPropertyToTerraform(struct?: CcWorkspace.WorkspaceConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        limits_per_label_sets: cdktn.listMapper(ccWorkspaceLimitsPerLabelSetPropertyToTerraform, false)(struct!.limitsPerLabelSets),
        out_of_order_time_window_in_seconds: cdktn.numberToTerraform(struct!.outOfOrderTimeWindowInSeconds),
        retention_period_in_days: cdktn.numberToTerraform(struct!.retentionPeriodInDays),
        rule_query_offset_in_seconds: cdktn.numberToTerraform(struct!.ruleQueryOffsetInSeconds),
    }
}


export function ccWorkspaceWorkspaceConfigurationPropertyToHclTerraform(struct?: CcWorkspace.WorkspaceConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        limits_per_label_sets: {
            value: cdktn.listMapperHcl(ccWorkspaceLimitsPerLabelSetPropertyToHclTerraform, false)(struct!.limitsPerLabelSets),
            isBlock: true,
            type: "set",
            storageClassType: "LimitsPerLabelSetPropertyList",
        },
        out_of_order_time_window_in_seconds: {
            value: cdktn.numberToHclTerraform(struct!.outOfOrderTimeWindowInSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        retention_period_in_days: {
            value: cdktn.numberToHclTerraform(struct!.retentionPeriodInDays),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        rule_query_offset_in_seconds: {
            value: cdktn.numberToHclTerraform(struct!.ruleQueryOffsetInSeconds),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcWorkspace {
export interface LoggingConfigurationProperty {
    /**
    * CloudWatch log group ARN
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/aps_workspace#log_group_arn CcWorkspace#log_group_arn}
    */
    readonly logGroupArn?: string;
}
export class LoggingConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LoggingConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._logGroupArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.logGroupArn = this._logGroupArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LoggingConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._logGroupArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._logGroupArn = value.logGroupArn;
        }
    }

    // log_group_arn - computed: true, optional: true, required: false
    private _logGroupArn?: string; 
    public get logGroupArn() {
        return this.getStringAttribute('log_group_arn');
    }
    public set logGroupArn(value: string) {
        this._logGroupArn = value;
    }
    public resetLogGroupArn() {
        this._logGroupArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logGroupArnInput() {
        return this._logGroupArn;
    }
}
export interface CloudWatchLogDestinationProperty {
    /**
    * The ARN of the CloudWatch Logs log group
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/aps_workspace#log_group_arn CcWorkspace#log_group_arn}
    */
    readonly logGroupArn?: string;
}
export class CloudWatchLogDestinationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CloudWatchLogDestinationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._logGroupArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.logGroupArn = this._logGroupArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CloudWatchLogDestinationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._logGroupArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._logGroupArn = value.logGroupArn;
        }
    }

    // log_group_arn - computed: true, optional: true, required: false
    private _logGroupArn?: string; 
    public get logGroupArn() {
        return this.getStringAttribute('log_group_arn');
    }
    public set logGroupArn(value: string) {
        this._logGroupArn = value;
    }
    public resetLogGroupArn() {
        this._logGroupArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logGroupArnInput() {
        return this._logGroupArn;
    }
}
export interface LoggingFilterProperty {
    /**
    * Query logs with QSP above this limit are vended
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/aps_workspace#qsp_threshold CcWorkspace#qsp_threshold}
    */
    readonly qspThreshold?: number;
}
export class LoggingFilterPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LoggingFilterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._qspThreshold !== undefined) {
            hasAnyValues = true;
            internalValueResult.qspThreshold = this._qspThreshold;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LoggingFilterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._qspThreshold = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._qspThreshold = value.qspThreshold;
        }
    }

    // qsp_threshold - computed: true, optional: true, required: false
    private _qspThreshold?: number; 
    public get qspThreshold() {
        return this.getNumberAttribute('qsp_threshold');
    }
    public set qspThreshold(value: number) {
        this._qspThreshold = value;
    }
    public resetQspThreshold() {
        this._qspThreshold = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get qspThresholdInput() {
        return this._qspThreshold;
    }
}
export interface LoggingDestinationProperty {
    /**
    * Represents a cloudwatch logs destination for query logging
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/aps_workspace#cloudwatch_logs CcWorkspace#cloudwatch_logs}
    */
    readonly cloudwatchLogs?: CloudWatchLogDestinationProperty;
    /**
    * Filters for logging
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/aps_workspace#filters CcWorkspace#filters}
    */
    readonly filters?: LoggingFilterProperty;
}
export class LoggingDestinationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): LoggingDestinationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cloudwatchLogs?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.cloudwatchLogs = this._cloudwatchLogs?.internalValue;
        }
        if (this._filters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.filters = this._filters?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LoggingDestinationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cloudwatchLogs.internalValue = undefined;
            this._filters.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cloudwatchLogs.internalValue = value.cloudwatchLogs;
            this._filters.internalValue = value.filters;
        }
    }

    // cloudwatch_logs - computed: true, optional: true, required: false
    private _cloudwatchLogs = new CloudWatchLogDestinationPropertyOutputReference(this, "cloudwatch_logs");
    public get cloudwatchLogs() {
        return this._cloudwatchLogs;
    }
    public putCloudwatchLogs(value: CloudWatchLogDestinationProperty) {
        this._cloudwatchLogs.internalValue = value;
    }
    public resetCloudwatchLogs() {
        this._cloudwatchLogs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cloudwatchLogsInput() {
        return this._cloudwatchLogs.internalValue;
    }

    // filters - computed: true, optional: true, required: false
    private _filters = new LoggingFilterPropertyOutputReference(this, "filters");
    public get filters() {
        return this._filters;
    }
    public putFilters(value: LoggingFilterProperty) {
        this._filters.internalValue = value;
    }
    public resetFilters() {
        this._filters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filtersInput() {
        return this._filters.internalValue;
    }
}

export class LoggingDestinationPropertyList extends cdktn.ComplexList {
    public internalValue? : LoggingDestinationProperty[] | cdktn.IResolvable

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
    public get(index: number): LoggingDestinationPropertyOutputReference {
        return new LoggingDestinationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface QueryLoggingConfigurationProperty {
    /**
    * The destinations configuration for query logging
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/aps_workspace#destinations CcWorkspace#destinations}
    */
    readonly destinations?: LoggingDestinationProperty[] | cdktn.IResolvable;
}
export class QueryLoggingConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): QueryLoggingConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._destinations?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinations = this._destinations?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: QueryLoggingConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._destinations.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._destinations.internalValue = value.destinations;
        }
    }

    // destinations - computed: true, optional: true, required: false
    private _destinations = new LoggingDestinationPropertyList(this, "destinations", false);
    public get destinations() {
        return this._destinations;
    }
    public putDestinations(value: LoggingDestinationProperty[] | cdktn.IResolvable) {
        this._destinations.internalValue = value;
    }
    public resetDestinations() {
        this._destinations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationsInput() {
        return this._destinations.internalValue;
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/aps_workspace#key CcWorkspace#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/aps_workspace#value CcWorkspace#value}
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
export interface LabelProperty {
    /**
    * Name of the label
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/aps_workspace#name CcWorkspace#name}
    */
    readonly name?: string;
    /**
    * Value of the label
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/aps_workspace#value CcWorkspace#value}
    */
    readonly value?: string;
}
export class LabelPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): LabelProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LabelProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._value = value.value;
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

export class LabelPropertyList extends cdktn.ComplexList {
    public internalValue? : LabelProperty[] | cdktn.IResolvable

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
    public get(index: number): LabelPropertyOutputReference {
        return new LabelPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface LimitsPerLabelSetEntryProperty {
    /**
    * The maximum number of active series that can be ingested for this label set
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/aps_workspace#max_series CcWorkspace#max_series}
    */
    readonly maxSeries?: number;
}
export class LimitsPerLabelSetEntryPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LimitsPerLabelSetEntryProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._maxSeries !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxSeries = this._maxSeries;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LimitsPerLabelSetEntryProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._maxSeries = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._maxSeries = value.maxSeries;
        }
    }

    // max_series - computed: true, optional: true, required: false
    private _maxSeries?: number; 
    public get maxSeries() {
        return this.getNumberAttribute('max_series');
    }
    public set maxSeries(value: number) {
        this._maxSeries = value;
    }
    public resetMaxSeries() {
        this._maxSeries = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxSeriesInput() {
        return this._maxSeries;
    }
}
export interface LimitsPerLabelSetProperty {
    /**
    * An array of series labels
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/aps_workspace#label_set CcWorkspace#label_set}
    */
    readonly labelSet?: LabelProperty[] | cdktn.IResolvable;
    /**
    * Limits that can be applied to a label set
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/aps_workspace#limits CcWorkspace#limits}
    */
    readonly limits?: LimitsPerLabelSetEntryProperty;
}
export class LimitsPerLabelSetPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): LimitsPerLabelSetProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._labelSet?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.labelSet = this._labelSet?.internalValue;
        }
        if (this._limits?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.limits = this._limits?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LimitsPerLabelSetProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._labelSet.internalValue = undefined;
            this._limits.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._labelSet.internalValue = value.labelSet;
            this._limits.internalValue = value.limits;
        }
    }

    // label_set - computed: true, optional: true, required: false
    private _labelSet = new LabelPropertyList(this, "label_set", true);
    public get labelSet() {
        return this._labelSet;
    }
    public putLabelSet(value: LabelProperty[] | cdktn.IResolvable) {
        this._labelSet.internalValue = value;
    }
    public resetLabelSet() {
        this._labelSet.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get labelSetInput() {
        return this._labelSet.internalValue;
    }

    // limits - computed: true, optional: true, required: false
    private _limits = new LimitsPerLabelSetEntryPropertyOutputReference(this, "limits");
    public get limits() {
        return this._limits;
    }
    public putLimits(value: LimitsPerLabelSetEntryProperty) {
        this._limits.internalValue = value;
    }
    public resetLimits() {
        this._limits.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get limitsInput() {
        return this._limits.internalValue;
    }
}

export class LimitsPerLabelSetPropertyList extends cdktn.ComplexList {
    public internalValue? : LimitsPerLabelSetProperty[] | cdktn.IResolvable

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
    public get(index: number): LimitsPerLabelSetPropertyOutputReference {
        return new LimitsPerLabelSetPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface WorkspaceConfigurationProperty {
    /**
    * An array of label set and associated limits
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/aps_workspace#limits_per_label_sets CcWorkspace#limits_per_label_sets}
    */
    readonly limitsPerLabelSets?: LimitsPerLabelSetProperty[] | cdktn.IResolvable;
    /**
    * The time window in seconds for accepting out-of-order samples
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/aps_workspace#out_of_order_time_window_in_seconds CcWorkspace#out_of_order_time_window_in_seconds}
    */
    readonly outOfOrderTimeWindowInSeconds?: number;
    /**
    * How many days that metrics are retained in the workspace
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/aps_workspace#retention_period_in_days CcWorkspace#retention_period_in_days}
    */
    readonly retentionPeriodInDays?: number;
    /**
    * Duration in seconds to offset rule evaluation queries into the past
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/aps_workspace#rule_query_offset_in_seconds CcWorkspace#rule_query_offset_in_seconds}
    */
    readonly ruleQueryOffsetInSeconds?: number;
}
export class WorkspaceConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): WorkspaceConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._limitsPerLabelSets?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.limitsPerLabelSets = this._limitsPerLabelSets?.internalValue;
        }
        if (this._outOfOrderTimeWindowInSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.outOfOrderTimeWindowInSeconds = this._outOfOrderTimeWindowInSeconds;
        }
        if (this._retentionPeriodInDays !== undefined) {
            hasAnyValues = true;
            internalValueResult.retentionPeriodInDays = this._retentionPeriodInDays;
        }
        if (this._ruleQueryOffsetInSeconds !== undefined) {
            hasAnyValues = true;
            internalValueResult.ruleQueryOffsetInSeconds = this._ruleQueryOffsetInSeconds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WorkspaceConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._limitsPerLabelSets.internalValue = undefined;
            this._outOfOrderTimeWindowInSeconds = undefined;
            this._retentionPeriodInDays = undefined;
            this._ruleQueryOffsetInSeconds = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._limitsPerLabelSets.internalValue = value.limitsPerLabelSets;
            this._outOfOrderTimeWindowInSeconds = value.outOfOrderTimeWindowInSeconds;
            this._retentionPeriodInDays = value.retentionPeriodInDays;
            this._ruleQueryOffsetInSeconds = value.ruleQueryOffsetInSeconds;
        }
    }

    // limits_per_label_sets - computed: true, optional: true, required: false
    private _limitsPerLabelSets = new LimitsPerLabelSetPropertyList(this, "limits_per_label_sets", true);
    public get limitsPerLabelSets() {
        return this._limitsPerLabelSets;
    }
    public putLimitsPerLabelSets(value: LimitsPerLabelSetProperty[] | cdktn.IResolvable) {
        this._limitsPerLabelSets.internalValue = value;
    }
    public resetLimitsPerLabelSets() {
        this._limitsPerLabelSets.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get limitsPerLabelSetsInput() {
        return this._limitsPerLabelSets.internalValue;
    }

    // out_of_order_time_window_in_seconds - computed: true, optional: true, required: false
    private _outOfOrderTimeWindowInSeconds?: number; 
    public get outOfOrderTimeWindowInSeconds() {
        return this.getNumberAttribute('out_of_order_time_window_in_seconds');
    }
    public set outOfOrderTimeWindowInSeconds(value: number) {
        this._outOfOrderTimeWindowInSeconds = value;
    }
    public resetOutOfOrderTimeWindowInSeconds() {
        this._outOfOrderTimeWindowInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outOfOrderTimeWindowInSecondsInput() {
        return this._outOfOrderTimeWindowInSeconds;
    }

    // retention_period_in_days - computed: true, optional: true, required: false
    private _retentionPeriodInDays?: number; 
    public get retentionPeriodInDays() {
        return this.getNumberAttribute('retention_period_in_days');
    }
    public set retentionPeriodInDays(value: number) {
        this._retentionPeriodInDays = value;
    }
    public resetRetentionPeriodInDays() {
        this._retentionPeriodInDays = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get retentionPeriodInDaysInput() {
        return this._retentionPeriodInDays;
    }

    // rule_query_offset_in_seconds - computed: true, optional: true, required: false
    private _ruleQueryOffsetInSeconds?: number; 
    public get ruleQueryOffsetInSeconds() {
        return this.getNumberAttribute('rule_query_offset_in_seconds');
    }
    public set ruleQueryOffsetInSeconds(value: number) {
        this._ruleQueryOffsetInSeconds = value;
    }
    public resetRuleQueryOffsetInSeconds() {
        this._ruleQueryOffsetInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ruleQueryOffsetInSecondsInput() {
        return this._ruleQueryOffsetInSeconds;
    }
}
}
