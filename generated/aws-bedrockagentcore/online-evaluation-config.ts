// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_online_evaluation_config

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcOnlineEvaluationConfigProps extends cdktn.TerraformMetaArguments {
    /**
    * The configuration for clustering analysis of evaluation results.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_online_evaluation_config#clustering_config CcOnlineEvaluationConfig#clustering_config}
    */
    readonly clusteringConfig?: CcOnlineEvaluationConfig.ClusteringConfigProperty;
    /**
    * The data source configuration that specifies CloudWatch log groups and service names to monitor.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_online_evaluation_config#data_source_config CcOnlineEvaluationConfig#data_source_config}
    */
    readonly dataSourceConfig: CcOnlineEvaluationConfig.DataSourceConfigProperty;
    /**
    * The description of the online evaluation configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_online_evaluation_config#description CcOnlineEvaluationConfig#description}
    */
    readonly description?: string;
    /**
    * The Amazon Resource Name (ARN) of the IAM role that grants permissions for evaluation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_online_evaluation_config#evaluation_execution_role_arn CcOnlineEvaluationConfig#evaluation_execution_role_arn}
    */
    readonly evaluationExecutionRoleArn: string;
    /**
    * The list of evaluators to apply during online evaluation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_online_evaluation_config#evaluators CcOnlineEvaluationConfig#evaluators}
    */
    readonly evaluators?: CcOnlineEvaluationConfig.EvaluatorReferenceProperty[] | cdktn.IResolvable;
    /**
    * The execution status indicating whether the online evaluation is currently running.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_online_evaluation_config#execution_status CcOnlineEvaluationConfig#execution_status}
    */
    readonly executionStatus?: string;
    /**
    * The list of insights to enable for failure analysis.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_online_evaluation_config#insights CcOnlineEvaluationConfig#insights}
    */
    readonly insights?: CcOnlineEvaluationConfig.InsightProperty[] | cdktn.IResolvable;
    /**
    * The name of the online evaluation configuration. Must be unique within your account.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_online_evaluation_config#online_evaluation_config_name CcOnlineEvaluationConfig#online_evaluation_config_name}
    */
    readonly onlineEvaluationConfigName: string;
    /**
    * The evaluation rule that defines sampling configuration, filters, and session detection settings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_online_evaluation_config#rule CcOnlineEvaluationConfig#rule}
    */
    readonly rule: CcOnlineEvaluationConfig.RuleProperty;
    /**
    * A list of tags to assign to the online evaluation configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_online_evaluation_config#tags CcOnlineEvaluationConfig#tags}
    */
    readonly tags?: CcOnlineEvaluationConfig.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_online_evaluation_config awscc_bedrockagentcore_online_evaluation_config}
*/
export class CcOnlineEvaluationConfig extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_bedrockagentcore_online_evaluation_config";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcOnlineEvaluationConfig resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcOnlineEvaluationConfig to import
    * @param importFromId The id of the existing CcOnlineEvaluationConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_online_evaluation_config#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcOnlineEvaluationConfig to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_bedrockagentcore_online_evaluation_config", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_online_evaluation_config awscc_bedrockagentcore_online_evaluation_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcOnlineEvaluationConfigProps
    */
    public constructor(scope: Construct, id: string, config: CcOnlineEvaluationConfigProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_bedrockagentcore_online_evaluation_config',
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
        this._clusteringConfig.internalValue = config.clusteringConfig;
        this._dataSourceConfig.internalValue = config.dataSourceConfig;
        this._description = config.description;
        this._evaluationExecutionRoleArn = config.evaluationExecutionRoleArn;
        this._evaluators.internalValue = config.evaluators;
        this._executionStatus = config.executionStatus;
        this._insights.internalValue = config.insights;
        this._onlineEvaluationConfigName = config.onlineEvaluationConfigName;
        this._rule.internalValue = config.rule;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // clustering_config - computed: true, optional: true, required: false
    private _clusteringConfig = new CcOnlineEvaluationConfig.ClusteringConfigPropertyOutputReference(this, "clustering_config");
    public get clusteringConfig() {
        return this._clusteringConfig;
    }
    public putClusteringConfig(value: CcOnlineEvaluationConfig.ClusteringConfigProperty) {
        this._clusteringConfig.internalValue = value;
    }
    public resetClusteringConfig() {
        this._clusteringConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clusteringConfigInput() {
        return this._clusteringConfig.internalValue;
    }

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
    }

    // data_source_config - computed: false, optional: false, required: true
    private _dataSourceConfig = new CcOnlineEvaluationConfig.DataSourceConfigPropertyOutputReference(this, "data_source_config");
    public get dataSourceConfig() {
        return this._dataSourceConfig;
    }
    public putDataSourceConfig(value: CcOnlineEvaluationConfig.DataSourceConfigProperty) {
        this._dataSourceConfig.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get dataSourceConfigInput() {
        return this._dataSourceConfig.internalValue;
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

    // evaluation_execution_role_arn - computed: false, optional: false, required: true
    private _evaluationExecutionRoleArn?: string; 
    public get evaluationExecutionRoleArn() {
        return this.getStringAttribute('evaluation_execution_role_arn');
    }
    public set evaluationExecutionRoleArn(value: string) {
        this._evaluationExecutionRoleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get evaluationExecutionRoleArnInput() {
        return this._evaluationExecutionRoleArn;
    }

    // evaluators - computed: true, optional: true, required: false
    private _evaluators = new CcOnlineEvaluationConfig.EvaluatorReferencePropertyList(this, "evaluators", false);
    public get evaluators() {
        return this._evaluators;
    }
    public putEvaluators(value: CcOnlineEvaluationConfig.EvaluatorReferenceProperty[] | cdktn.IResolvable) {
        this._evaluators.internalValue = value;
    }
    public resetEvaluators() {
        this._evaluators.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get evaluatorsInput() {
        return this._evaluators.internalValue;
    }

    // execution_status - computed: true, optional: true, required: false
    private _executionStatus?: string; 
    public get executionStatus() {
        return this.getStringAttribute('execution_status');
    }
    public set executionStatus(value: string) {
        this._executionStatus = value;
    }
    public resetExecutionStatus() {
        this._executionStatus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get executionStatusInput() {
        return this._executionStatus;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // insights - computed: true, optional: true, required: false
    private _insights = new CcOnlineEvaluationConfig.InsightPropertyList(this, "insights", false);
    public get insights() {
        return this._insights;
    }
    public putInsights(value: CcOnlineEvaluationConfig.InsightProperty[] | cdktn.IResolvable) {
        this._insights.internalValue = value;
    }
    public resetInsights() {
        this._insights.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get insightsInput() {
        return this._insights.internalValue;
    }

    // online_evaluation_config_arn - computed: true, optional: false, required: false
    public get onlineEvaluationConfigArn() {
        return this.getStringAttribute('online_evaluation_config_arn');
    }

    // online_evaluation_config_id - computed: true, optional: false, required: false
    public get onlineEvaluationConfigId() {
        return this.getStringAttribute('online_evaluation_config_id');
    }

    // online_evaluation_config_name - computed: false, optional: false, required: true
    private _onlineEvaluationConfigName?: string; 
    public get onlineEvaluationConfigName() {
        return this.getStringAttribute('online_evaluation_config_name');
    }
    public set onlineEvaluationConfigName(value: string) {
        this._onlineEvaluationConfigName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get onlineEvaluationConfigNameInput() {
        return this._onlineEvaluationConfigName;
    }

    // output_config - computed: true, optional: false, required: false
    private _outputConfig = new CcOnlineEvaluationConfig.OutputConfigPropertyOutputReference(this, "output_config");
    public get outputConfig() {
        return this._outputConfig;
    }

    // rule - computed: false, optional: false, required: true
    private _rule = new CcOnlineEvaluationConfig.RulePropertyOutputReference(this, "rule");
    public get rule() {
        return this._rule;
    }
    public putRule(value: CcOnlineEvaluationConfig.RuleProperty) {
        this._rule.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get ruleInput() {
        return this._rule.internalValue;
    }

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcOnlineEvaluationConfig.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcOnlineEvaluationConfig.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
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
            clustering_config: ccOnlineEvaluationConfigClusteringConfigPropertyToTerraform(this._clusteringConfig.internalValue),
            data_source_config: ccOnlineEvaluationConfigDataSourceConfigPropertyToTerraform(this._dataSourceConfig.internalValue),
            description: cdktn.stringToTerraform(this._description),
            evaluation_execution_role_arn: cdktn.stringToTerraform(this._evaluationExecutionRoleArn),
            evaluators: cdktn.listMapper(ccOnlineEvaluationConfigEvaluatorReferencePropertyToTerraform, false)(this._evaluators.internalValue),
            execution_status: cdktn.stringToTerraform(this._executionStatus),
            insights: cdktn.listMapper(ccOnlineEvaluationConfigInsightPropertyToTerraform, false)(this._insights.internalValue),
            online_evaluation_config_name: cdktn.stringToTerraform(this._onlineEvaluationConfigName),
            rule: ccOnlineEvaluationConfigRulePropertyToTerraform(this._rule.internalValue),
            tags: cdktn.listMapper(ccOnlineEvaluationConfigTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            clustering_config: {
                value: ccOnlineEvaluationConfigClusteringConfigPropertyToHclTerraform(this._clusteringConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcOnlineEvaluationConfig.ClusteringConfigProperty",
            },
            data_source_config: {
                value: ccOnlineEvaluationConfigDataSourceConfigPropertyToHclTerraform(this._dataSourceConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcOnlineEvaluationConfig.DataSourceConfigProperty",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            evaluation_execution_role_arn: {
                value: cdktn.stringToHclTerraform(this._evaluationExecutionRoleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            evaluators: {
                value: cdktn.listMapperHcl(ccOnlineEvaluationConfigEvaluatorReferencePropertyToHclTerraform, false)(this._evaluators.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcOnlineEvaluationConfig.EvaluatorReferencePropertyList",
            },
            execution_status: {
                value: cdktn.stringToHclTerraform(this._executionStatus),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            insights: {
                value: cdktn.listMapperHcl(ccOnlineEvaluationConfigInsightPropertyToHclTerraform, false)(this._insights.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcOnlineEvaluationConfig.InsightPropertyList",
            },
            online_evaluation_config_name: {
                value: cdktn.stringToHclTerraform(this._onlineEvaluationConfigName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            rule: {
                value: ccOnlineEvaluationConfigRulePropertyToHclTerraform(this._rule.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcOnlineEvaluationConfig.RuleProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccOnlineEvaluationConfigTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcOnlineEvaluationConfig.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccOnlineEvaluationConfigClusteringConfigPropertyToTerraform(struct?: CcOnlineEvaluationConfig.ClusteringConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        frequencies: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.frequencies),
    }
}


export function ccOnlineEvaluationConfigClusteringConfigPropertyToHclTerraform(struct?: CcOnlineEvaluationConfig.ClusteringConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        frequencies: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.frequencies),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOnlineEvaluationConfigCloudWatchLogsInputConfigPropertyToTerraform(struct?: CcOnlineEvaluationConfig.CloudWatchLogsInputConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        log_group_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.logGroupNames),
        service_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.serviceNames),
    }
}


export function ccOnlineEvaluationConfigCloudWatchLogsInputConfigPropertyToHclTerraform(struct?: CcOnlineEvaluationConfig.CloudWatchLogsInputConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        log_group_names: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.logGroupNames),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        service_names: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.serviceNames),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOnlineEvaluationConfigDataSourceConfigPropertyToTerraform(struct?: CcOnlineEvaluationConfig.DataSourceConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cloudwatch_logs: ccOnlineEvaluationConfigCloudWatchLogsInputConfigPropertyToTerraform(struct!.cloudwatchLogs),
    }
}


export function ccOnlineEvaluationConfigDataSourceConfigPropertyToHclTerraform(struct?: CcOnlineEvaluationConfig.DataSourceConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cloudwatch_logs: {
            value: ccOnlineEvaluationConfigCloudWatchLogsInputConfigPropertyToHclTerraform(struct!.cloudwatchLogs),
            isBlock: true,
            type: "struct",
            storageClassType: "CloudWatchLogsInputConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOnlineEvaluationConfigEvaluatorReferencePropertyToTerraform(struct?: CcOnlineEvaluationConfig.EvaluatorReferenceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        evaluator_id: cdktn.stringToTerraform(struct!.evaluatorId),
    }
}


export function ccOnlineEvaluationConfigEvaluatorReferencePropertyToHclTerraform(struct?: CcOnlineEvaluationConfig.EvaluatorReferenceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        evaluator_id: {
            value: cdktn.stringToHclTerraform(struct!.evaluatorId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOnlineEvaluationConfigInsightPropertyToTerraform(struct?: CcOnlineEvaluationConfig.InsightProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        insight_id: cdktn.stringToTerraform(struct!.insightId),
    }
}


export function ccOnlineEvaluationConfigInsightPropertyToHclTerraform(struct?: CcOnlineEvaluationConfig.InsightProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        insight_id: {
            value: cdktn.stringToHclTerraform(struct!.insightId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOnlineEvaluationConfigCloudwatchConfigPropertyToTerraform(struct?: CcOnlineEvaluationConfig.CloudwatchConfigProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccOnlineEvaluationConfigCloudwatchConfigPropertyToHclTerraform(struct?: CcOnlineEvaluationConfig.CloudwatchConfigProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccOnlineEvaluationConfigOutputConfigPropertyToTerraform(struct?: CcOnlineEvaluationConfig.OutputConfigProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccOnlineEvaluationConfigOutputConfigPropertyToHclTerraform(struct?: CcOnlineEvaluationConfig.OutputConfigProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccOnlineEvaluationConfigFilterValuePropertyToTerraform(struct?: CcOnlineEvaluationConfig.FilterValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        boolean_value: cdktn.booleanToTerraform(struct!.booleanValue),
        double_value: cdktn.numberToTerraform(struct!.doubleValue),
        string_value: cdktn.stringToTerraform(struct!.stringValue),
    }
}


export function ccOnlineEvaluationConfigFilterValuePropertyToHclTerraform(struct?: CcOnlineEvaluationConfig.FilterValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        boolean_value: {
            value: cdktn.booleanToHclTerraform(struct!.booleanValue),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
        double_value: {
            value: cdktn.numberToHclTerraform(struct!.doubleValue),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        string_value: {
            value: cdktn.stringToHclTerraform(struct!.stringValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOnlineEvaluationConfigFilterPropertyToTerraform(struct?: CcOnlineEvaluationConfig.FilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        operator: cdktn.stringToTerraform(struct!.operator),
        value: ccOnlineEvaluationConfigFilterValuePropertyToTerraform(struct!.value),
    }
}


export function ccOnlineEvaluationConfigFilterPropertyToHclTerraform(struct?: CcOnlineEvaluationConfig.FilterProperty | cdktn.IResolvable): any {
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
        operator: {
            value: cdktn.stringToHclTerraform(struct!.operator),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: ccOnlineEvaluationConfigFilterValuePropertyToHclTerraform(struct!.value),
            isBlock: true,
            type: "struct",
            storageClassType: "FilterValueProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOnlineEvaluationConfigSamplingConfigPropertyToTerraform(struct?: CcOnlineEvaluationConfig.SamplingConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        sampling_percentage: cdktn.numberToTerraform(struct!.samplingPercentage),
    }
}


export function ccOnlineEvaluationConfigSamplingConfigPropertyToHclTerraform(struct?: CcOnlineEvaluationConfig.SamplingConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        sampling_percentage: {
            value: cdktn.numberToHclTerraform(struct!.samplingPercentage),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOnlineEvaluationConfigSessionConfigPropertyToTerraform(struct?: CcOnlineEvaluationConfig.SessionConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        session_timeout_minutes: cdktn.numberToTerraform(struct!.sessionTimeoutMinutes),
    }
}


export function ccOnlineEvaluationConfigSessionConfigPropertyToHclTerraform(struct?: CcOnlineEvaluationConfig.SessionConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        session_timeout_minutes: {
            value: cdktn.numberToHclTerraform(struct!.sessionTimeoutMinutes),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOnlineEvaluationConfigRulePropertyToTerraform(struct?: CcOnlineEvaluationConfig.RuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        filters: cdktn.listMapper(ccOnlineEvaluationConfigFilterPropertyToTerraform, false)(struct!.filters),
        sampling_config: ccOnlineEvaluationConfigSamplingConfigPropertyToTerraform(struct!.samplingConfig),
        session_config: ccOnlineEvaluationConfigSessionConfigPropertyToTerraform(struct!.sessionConfig),
    }
}


export function ccOnlineEvaluationConfigRulePropertyToHclTerraform(struct?: CcOnlineEvaluationConfig.RuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        filters: {
            value: cdktn.listMapperHcl(ccOnlineEvaluationConfigFilterPropertyToHclTerraform, false)(struct!.filters),
            isBlock: true,
            type: "list",
            storageClassType: "FilterPropertyList",
        },
        sampling_config: {
            value: ccOnlineEvaluationConfigSamplingConfigPropertyToHclTerraform(struct!.samplingConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "SamplingConfigProperty",
        },
        session_config: {
            value: ccOnlineEvaluationConfigSessionConfigPropertyToHclTerraform(struct!.sessionConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "SessionConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccOnlineEvaluationConfigTagPropertyToTerraform(struct?: CcOnlineEvaluationConfig.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccOnlineEvaluationConfigTagPropertyToHclTerraform(struct?: CcOnlineEvaluationConfig.TagProperty | cdktn.IResolvable): any {
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


export namespace CcOnlineEvaluationConfig {
export interface ClusteringConfigProperty {
    /**
    * The list of frequencies at which clustering reports are generated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_online_evaluation_config#frequencies CcOnlineEvaluationConfig#frequencies}
    */
    readonly frequencies?: string[];
}
export class ClusteringConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ClusteringConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._frequencies !== undefined) {
            hasAnyValues = true;
            internalValueResult.frequencies = this._frequencies;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ClusteringConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._frequencies = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._frequencies = value.frequencies;
        }
    }

    // frequencies - computed: true, optional: true, required: false
    private _frequencies?: string[]; 
    public get frequencies() {
        return this.getListAttribute('frequencies');
    }
    public set frequencies(value: string[]) {
        this._frequencies = value;
    }
    public resetFrequencies() {
        this._frequencies = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get frequenciesInput() {
        return this._frequencies;
    }
}
export interface CloudWatchLogsInputConfigProperty {
    /**
    * The list of CloudWatch log group names to monitor for agent traces.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_online_evaluation_config#log_group_names CcOnlineEvaluationConfig#log_group_names}
    */
    readonly logGroupNames: string[];
    /**
    * The list of service names to filter traces within the specified log groups.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_online_evaluation_config#service_names CcOnlineEvaluationConfig#service_names}
    */
    readonly serviceNames: string[];
}
export class CloudWatchLogsInputConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CloudWatchLogsInputConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._logGroupNames !== undefined) {
            hasAnyValues = true;
            internalValueResult.logGroupNames = this._logGroupNames;
        }
        if (this._serviceNames !== undefined) {
            hasAnyValues = true;
            internalValueResult.serviceNames = this._serviceNames;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CloudWatchLogsInputConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._logGroupNames = undefined;
            this._serviceNames = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._logGroupNames = value.logGroupNames;
            this._serviceNames = value.serviceNames;
        }
    }

    // log_group_names - computed: false, optional: false, required: true
    private _logGroupNames?: string[]; 
    public get logGroupNames() {
        return this.getListAttribute('log_group_names');
    }
    public set logGroupNames(value: string[]) {
        this._logGroupNames = value;
    }
    // Temporarily expose input value. Use with caution.
    public get logGroupNamesInput() {
        return this._logGroupNames;
    }

    // service_names - computed: false, optional: false, required: true
    private _serviceNames?: string[]; 
    public get serviceNames() {
        return this.getListAttribute('service_names');
    }
    public set serviceNames(value: string[]) {
        this._serviceNames = value;
    }
    // Temporarily expose input value. Use with caution.
    public get serviceNamesInput() {
        return this._serviceNames;
    }
}
export interface DataSourceConfigProperty {
    /**
    * The configuration for reading agent traces from CloudWatch logs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_online_evaluation_config#cloudwatch_logs CcOnlineEvaluationConfig#cloudwatch_logs}
    */
    readonly cloudwatchLogs: CloudWatchLogsInputConfigProperty;
}
export class DataSourceConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DataSourceConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cloudwatchLogs?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.cloudwatchLogs = this._cloudwatchLogs?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DataSourceConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cloudwatchLogs.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cloudwatchLogs.internalValue = value.cloudwatchLogs;
        }
    }

    // cloudwatch_logs - computed: false, optional: false, required: true
    private _cloudwatchLogs = new CloudWatchLogsInputConfigPropertyOutputReference(this, "cloudwatch_logs");
    public get cloudwatchLogs() {
        return this._cloudwatchLogs;
    }
    public putCloudwatchLogs(value: CloudWatchLogsInputConfigProperty) {
        this._cloudwatchLogs.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get cloudwatchLogsInput() {
        return this._cloudwatchLogs.internalValue;
    }
}
export interface EvaluatorReferenceProperty {
    /**
    * The unique identifier of the evaluator.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_online_evaluation_config#evaluator_id CcOnlineEvaluationConfig#evaluator_id}
    */
    readonly evaluatorId?: string;
}
export class EvaluatorReferencePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): EvaluatorReferenceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._evaluatorId !== undefined) {
            hasAnyValues = true;
            internalValueResult.evaluatorId = this._evaluatorId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EvaluatorReferenceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._evaluatorId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._evaluatorId = value.evaluatorId;
        }
    }

    // evaluator_id - computed: true, optional: true, required: false
    private _evaluatorId?: string; 
    public get evaluatorId() {
        return this.getStringAttribute('evaluator_id');
    }
    public set evaluatorId(value: string) {
        this._evaluatorId = value;
    }
    public resetEvaluatorId() {
        this._evaluatorId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get evaluatorIdInput() {
        return this._evaluatorId;
    }
}

export class EvaluatorReferencePropertyList extends cdktn.ComplexList {
    public internalValue? : EvaluatorReferenceProperty[] | cdktn.IResolvable

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
    public get(index: number): EvaluatorReferencePropertyOutputReference {
        return new EvaluatorReferencePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface InsightProperty {
    /**
    * The unique identifier of the insight.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_online_evaluation_config#insight_id CcOnlineEvaluationConfig#insight_id}
    */
    readonly insightId?: string;
}
export class InsightPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): InsightProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._insightId !== undefined) {
            hasAnyValues = true;
            internalValueResult.insightId = this._insightId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InsightProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._insightId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._insightId = value.insightId;
        }
    }

    // insight_id - computed: true, optional: true, required: false
    private _insightId?: string; 
    public get insightId() {
        return this.getStringAttribute('insight_id');
    }
    public set insightId(value: string) {
        this._insightId = value;
    }
    public resetInsightId() {
        this._insightId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get insightIdInput() {
        return this._insightId;
    }
}

export class InsightPropertyList extends cdktn.ComplexList {
    public internalValue? : InsightProperty[] | cdktn.IResolvable

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
    public get(index: number): InsightPropertyOutputReference {
        return new InsightPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface CloudwatchConfigProperty {
}
export class CloudwatchConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CloudwatchConfigProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CloudwatchConfigProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // log_group_name - computed: true, optional: false, required: false
    public get logGroupName() {
        return this.getStringAttribute('log_group_name');
    }
}
export interface OutputConfigProperty {
}
export class OutputConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OutputConfigProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OutputConfigProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // cloudwatch_config - computed: true, optional: false, required: false
    private _cloudwatchConfig = new CloudwatchConfigPropertyOutputReference(this, "cloudwatch_config");
    public get cloudwatchConfig() {
        return this._cloudwatchConfig;
    }
}
export interface FilterValueProperty {
    /**
    * The boolean value for true/false filtering conditions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_online_evaluation_config#boolean_value CcOnlineEvaluationConfig#boolean_value}
    */
    readonly booleanValue?: boolean | cdktn.IResolvable;
    /**
    * The numeric value for numerical filtering.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_online_evaluation_config#double_value CcOnlineEvaluationConfig#double_value}
    */
    readonly doubleValue?: number;
    /**
    * The string value for text-based filtering.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_online_evaluation_config#string_value CcOnlineEvaluationConfig#string_value}
    */
    readonly stringValue?: string;
}
export class FilterValuePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FilterValueProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._booleanValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.booleanValue = this._booleanValue;
        }
        if (this._doubleValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.doubleValue = this._doubleValue;
        }
        if (this._stringValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.stringValue = this._stringValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FilterValueProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._booleanValue = undefined;
            this._doubleValue = undefined;
            this._stringValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._booleanValue = value.booleanValue;
            this._doubleValue = value.doubleValue;
            this._stringValue = value.stringValue;
        }
    }

    // boolean_value - computed: true, optional: true, required: false
    private _booleanValue?: boolean | cdktn.IResolvable; 
    public get booleanValue() {
        return this.getBooleanAttribute('boolean_value');
    }
    public set booleanValue(value: boolean | cdktn.IResolvable) {
        this._booleanValue = value;
    }
    public resetBooleanValue() {
        this._booleanValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get booleanValueInput() {
        return this._booleanValue;
    }

    // double_value - computed: true, optional: true, required: false
    private _doubleValue?: number; 
    public get doubleValue() {
        return this.getNumberAttribute('double_value');
    }
    public set doubleValue(value: number) {
        this._doubleValue = value;
    }
    public resetDoubleValue() {
        this._doubleValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get doubleValueInput() {
        return this._doubleValue;
    }

    // string_value - computed: true, optional: true, required: false
    private _stringValue?: string; 
    public get stringValue() {
        return this.getStringAttribute('string_value');
    }
    public set stringValue(value: string) {
        this._stringValue = value;
    }
    public resetStringValue() {
        this._stringValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stringValueInput() {
        return this._stringValue;
    }
}
export interface FilterProperty {
    /**
    * The key or field name to filter on within the agent trace data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_online_evaluation_config#key CcOnlineEvaluationConfig#key}
    */
    readonly key?: string;
    /**
    * The comparison operator to use for filtering.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_online_evaluation_config#operator CcOnlineEvaluationConfig#operator}
    */
    readonly operator?: string;
    /**
    * The value used in filter comparisons.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_online_evaluation_config#value CcOnlineEvaluationConfig#value}
    */
    readonly value?: FilterValueProperty;
}
export class FilterPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): FilterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._operator !== undefined) {
            hasAnyValues = true;
            internalValueResult.operator = this._operator;
        }
        if (this._value?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FilterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._key = undefined;
            this._operator = undefined;
            this._value.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._key = value.key;
            this._operator = value.operator;
            this._value.internalValue = value.value;
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

    // operator - computed: true, optional: true, required: false
    private _operator?: string; 
    public get operator() {
        return this.getStringAttribute('operator');
    }
    public set operator(value: string) {
        this._operator = value;
    }
    public resetOperator() {
        this._operator = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get operatorInput() {
        return this._operator;
    }

    // value - computed: true, optional: true, required: false
    private _value = new FilterValuePropertyOutputReference(this, "value");
    public get value() {
        return this._value;
    }
    public putValue(value: FilterValueProperty) {
        this._value.internalValue = value;
    }
    public resetValue() {
        this._value.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
        return this._value.internalValue;
    }
}

export class FilterPropertyList extends cdktn.ComplexList {
    public internalValue? : FilterProperty[] | cdktn.IResolvable

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
    public get(index: number): FilterPropertyOutputReference {
        return new FilterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface SamplingConfigProperty {
    /**
    * The percentage of agent traces to sample for evaluation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_online_evaluation_config#sampling_percentage CcOnlineEvaluationConfig#sampling_percentage}
    */
    readonly samplingPercentage: number;
}
export class SamplingConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SamplingConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._samplingPercentage !== undefined) {
            hasAnyValues = true;
            internalValueResult.samplingPercentage = this._samplingPercentage;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SamplingConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._samplingPercentage = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._samplingPercentage = value.samplingPercentage;
        }
    }

    // sampling_percentage - computed: false, optional: false, required: true
    private _samplingPercentage?: number; 
    public get samplingPercentage() {
        return this.getNumberAttribute('sampling_percentage');
    }
    public set samplingPercentage(value: number) {
        this._samplingPercentage = value;
    }
    // Temporarily expose input value. Use with caution.
    public get samplingPercentageInput() {
        return this._samplingPercentage;
    }
}
export interface SessionConfigProperty {
    /**
    * The number of minutes of inactivity after which an agent session is considered complete.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_online_evaluation_config#session_timeout_minutes CcOnlineEvaluationConfig#session_timeout_minutes}
    */
    readonly sessionTimeoutMinutes?: number;
}
export class SessionConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SessionConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._sessionTimeoutMinutes !== undefined) {
            hasAnyValues = true;
            internalValueResult.sessionTimeoutMinutes = this._sessionTimeoutMinutes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SessionConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._sessionTimeoutMinutes = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._sessionTimeoutMinutes = value.sessionTimeoutMinutes;
        }
    }

    // session_timeout_minutes - computed: true, optional: true, required: false
    private _sessionTimeoutMinutes?: number; 
    public get sessionTimeoutMinutes() {
        return this.getNumberAttribute('session_timeout_minutes');
    }
    public set sessionTimeoutMinutes(value: number) {
        this._sessionTimeoutMinutes = value;
    }
    public resetSessionTimeoutMinutes() {
        this._sessionTimeoutMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sessionTimeoutMinutesInput() {
        return this._sessionTimeoutMinutes;
    }
}
export interface RuleProperty {
    /**
    * The list of filters that determine which agent traces should be included in the evaluation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_online_evaluation_config#filters CcOnlineEvaluationConfig#filters}
    */
    readonly filters?: FilterProperty[] | cdktn.IResolvable;
    /**
    * The configuration that controls what percentage of agent traces are sampled for evaluation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_online_evaluation_config#sampling_config CcOnlineEvaluationConfig#sampling_config}
    */
    readonly samplingConfig: SamplingConfigProperty;
    /**
    * The configuration that defines how agent sessions are detected.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_online_evaluation_config#session_config CcOnlineEvaluationConfig#session_config}
    */
    readonly sessionConfig?: SessionConfigProperty;
}
export class RulePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RuleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._filters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.filters = this._filters?.internalValue;
        }
        if (this._samplingConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.samplingConfig = this._samplingConfig?.internalValue;
        }
        if (this._sessionConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sessionConfig = this._sessionConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RuleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._filters.internalValue = undefined;
            this._samplingConfig.internalValue = undefined;
            this._sessionConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._filters.internalValue = value.filters;
            this._samplingConfig.internalValue = value.samplingConfig;
            this._sessionConfig.internalValue = value.sessionConfig;
        }
    }

    // filters - computed: true, optional: true, required: false
    private _filters = new FilterPropertyList(this, "filters", false);
    public get filters() {
        return this._filters;
    }
    public putFilters(value: FilterProperty[] | cdktn.IResolvable) {
        this._filters.internalValue = value;
    }
    public resetFilters() {
        this._filters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filtersInput() {
        return this._filters.internalValue;
    }

    // sampling_config - computed: false, optional: false, required: true
    private _samplingConfig = new SamplingConfigPropertyOutputReference(this, "sampling_config");
    public get samplingConfig() {
        return this._samplingConfig;
    }
    public putSamplingConfig(value: SamplingConfigProperty) {
        this._samplingConfig.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get samplingConfigInput() {
        return this._samplingConfig.internalValue;
    }

    // session_config - computed: true, optional: true, required: false
    private _sessionConfig = new SessionConfigPropertyOutputReference(this, "session_config");
    public get sessionConfig() {
        return this._sessionConfig;
    }
    public putSessionConfig(value: SessionConfigProperty) {
        this._sessionConfig.internalValue = value;
    }
    public resetSessionConfig() {
        this._sessionConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sessionConfigInput() {
        return this._sessionConfig.internalValue;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_online_evaluation_config#key CcOnlineEvaluationConfig#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/bedrockagentcore_online_evaluation_config#value CcOnlineEvaluationConfig#value}
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
