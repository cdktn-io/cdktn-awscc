// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fis_experiment_template

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcExperimentTemplateProps extends cdktn.TerraformMetaArguments {
    /**
    * The actions for the experiment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fis_experiment_template#actions CcExperimentTemplate#actions}
    */
    readonly actions?: { [key: string]: CcExperimentTemplate.ExperimentTemplateActionProperty } | cdktn.IResolvable;
    /**
    * A description for the experiment template.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fis_experiment_template#description CcExperimentTemplate#description}
    */
    readonly description: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fis_experiment_template#experiment_options CcExperimentTemplate#experiment_options}
    */
    readonly experimentOptions?: CcExperimentTemplate.ExperimentTemplateExperimentOptionsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fis_experiment_template#experiment_report_configuration CcExperimentTemplate#experiment_report_configuration}
    */
    readonly experimentReportConfiguration?: CcExperimentTemplate.ExperimentTemplateExperimentReportConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fis_experiment_template#log_configuration CcExperimentTemplate#log_configuration}
    */
    readonly logConfiguration?: CcExperimentTemplate.ExperimentTemplateLogConfigurationProperty;
    /**
    * The Amazon Resource Name (ARN) of an IAM role that grants the AWS FIS service permission to perform service actions on your behalf.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fis_experiment_template#role_arn CcExperimentTemplate#role_arn}
    */
    readonly roleArn: string;
    /**
    * One or more stop conditions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fis_experiment_template#stop_conditions CcExperimentTemplate#stop_conditions}
    */
    readonly stopConditions: CcExperimentTemplate.ExperimentTemplateStopConditionProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fis_experiment_template#tags CcExperimentTemplate#tags}
    */
    readonly tags?: { [key: string]: string };
    /**
    * The targets for the experiment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fis_experiment_template#targets CcExperimentTemplate#targets}
    */
    readonly targets: { [key: string]: CcExperimentTemplate.ExperimentTemplateTargetProperty } | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fis_experiment_template awscc_fis_experiment_template}
*/
export class CcExperimentTemplate extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_fis_experiment_template";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcExperimentTemplate resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcExperimentTemplate to import
    * @param importFromId The id of the existing CcExperimentTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fis_experiment_template#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcExperimentTemplate to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_fis_experiment_template", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fis_experiment_template awscc_fis_experiment_template} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcExperimentTemplateProps
    */
    public constructor(scope: Construct, id: string, config: CcExperimentTemplateProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_fis_experiment_template',
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
        this._actions.internalValue = config.actions;
        this._description = config.description;
        this._experimentOptions.internalValue = config.experimentOptions;
        this._experimentReportConfiguration.internalValue = config.experimentReportConfiguration;
        this._logConfiguration.internalValue = config.logConfiguration;
        this._roleArn = config.roleArn;
        this._stopConditions.internalValue = config.stopConditions;
        this._tags = config.tags;
        this._targets.internalValue = config.targets;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // actions - computed: true, optional: true, required: false
    private _actions = new CcExperimentTemplate.ExperimentTemplateActionPropertyMap(this, "actions");
    public get actions() {
        return this._actions;
    }
    public putActions(value: { [key: string]: CcExperimentTemplate.ExperimentTemplateActionProperty } | cdktn.IResolvable) {
        this._actions.internalValue = value;
    }
    public resetActions() {
        this._actions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get actionsInput() {
        return this._actions.internalValue;
    }

    // description - computed: false, optional: false, required: true
    private _description?: string; 
    public get description() {
        return this.getStringAttribute('description');
    }
    public set description(value: string) {
        this._description = value;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
        return this._description;
    }

    // experiment_options - computed: true, optional: true, required: false
    private _experimentOptions = new CcExperimentTemplate.ExperimentTemplateExperimentOptionsPropertyOutputReference(this, "experiment_options");
    public get experimentOptions() {
        return this._experimentOptions;
    }
    public putExperimentOptions(value: CcExperimentTemplate.ExperimentTemplateExperimentOptionsProperty) {
        this._experimentOptions.internalValue = value;
    }
    public resetExperimentOptions() {
        this._experimentOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get experimentOptionsInput() {
        return this._experimentOptions.internalValue;
    }

    // experiment_report_configuration - computed: true, optional: true, required: false
    private _experimentReportConfiguration = new CcExperimentTemplate.ExperimentTemplateExperimentReportConfigurationPropertyOutputReference(this, "experiment_report_configuration");
    public get experimentReportConfiguration() {
        return this._experimentReportConfiguration;
    }
    public putExperimentReportConfiguration(value: CcExperimentTemplate.ExperimentTemplateExperimentReportConfigurationProperty) {
        this._experimentReportConfiguration.internalValue = value;
    }
    public resetExperimentReportConfiguration() {
        this._experimentReportConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get experimentReportConfigurationInput() {
        return this._experimentReportConfiguration.internalValue;
    }

    // experiment_template_id - computed: true, optional: false, required: false
    public get experimentTemplateId() {
        return this.getStringAttribute('experiment_template_id');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // log_configuration - computed: true, optional: true, required: false
    private _logConfiguration = new CcExperimentTemplate.ExperimentTemplateLogConfigurationPropertyOutputReference(this, "log_configuration");
    public get logConfiguration() {
        return this._logConfiguration;
    }
    public putLogConfiguration(value: CcExperimentTemplate.ExperimentTemplateLogConfigurationProperty) {
        this._logConfiguration.internalValue = value;
    }
    public resetLogConfiguration() {
        this._logConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logConfigurationInput() {
        return this._logConfiguration.internalValue;
    }

    // role_arn - computed: false, optional: false, required: true
    private _roleArn?: string; 
    public get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
        this._roleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
        return this._roleArn;
    }

    // stop_conditions - computed: false, optional: false, required: true
    private _stopConditions = new CcExperimentTemplate.ExperimentTemplateStopConditionPropertyList(this, "stop_conditions", false);
    public get stopConditions() {
        return this._stopConditions;
    }
    public putStopConditions(value: CcExperimentTemplate.ExperimentTemplateStopConditionProperty[] | cdktn.IResolvable) {
        this._stopConditions.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get stopConditionsInput() {
        return this._stopConditions.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string }; 
    public get tags() {
        return this.getStringMapAttribute('tags');
    }
    public set tags(value: { [key: string]: string }) {
        this._tags = value;
    }
    public resetTags() {
        this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags;
    }

    // targets - computed: false, optional: false, required: true
    private _targets = new CcExperimentTemplate.ExperimentTemplateTargetPropertyMap(this, "targets");
    public get targets() {
        return this._targets;
    }
    public putTargets(value: { [key: string]: CcExperimentTemplate.ExperimentTemplateTargetProperty } | cdktn.IResolvable) {
        this._targets.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get targetsInput() {
        return this._targets.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            actions: cdktn.hashMapper(ccExperimentTemplateExperimentTemplateActionPropertyToTerraform)(this._actions.internalValue),
            description: cdktn.stringToTerraform(this._description),
            experiment_options: ccExperimentTemplateExperimentTemplateExperimentOptionsPropertyToTerraform(this._experimentOptions.internalValue),
            experiment_report_configuration: ccExperimentTemplateExperimentTemplateExperimentReportConfigurationPropertyToTerraform(this._experimentReportConfiguration.internalValue),
            log_configuration: ccExperimentTemplateExperimentTemplateLogConfigurationPropertyToTerraform(this._logConfiguration.internalValue),
            role_arn: cdktn.stringToTerraform(this._roleArn),
            stop_conditions: cdktn.listMapper(ccExperimentTemplateExperimentTemplateStopConditionPropertyToTerraform, false)(this._stopConditions.internalValue),
            tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
            targets: cdktn.hashMapper(ccExperimentTemplateExperimentTemplateTargetPropertyToTerraform)(this._targets.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            actions: {
                value: cdktn.hashMapperHcl(ccExperimentTemplateExperimentTemplateActionPropertyToHclTerraform)(this._actions.internalValue),
                isBlock: true,
                type: "map",
                storageClassType: "CcExperimentTemplate.ExperimentTemplateActionPropertyMap",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            experiment_options: {
                value: ccExperimentTemplateExperimentTemplateExperimentOptionsPropertyToHclTerraform(this._experimentOptions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcExperimentTemplate.ExperimentTemplateExperimentOptionsProperty",
            },
            experiment_report_configuration: {
                value: ccExperimentTemplateExperimentTemplateExperimentReportConfigurationPropertyToHclTerraform(this._experimentReportConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcExperimentTemplate.ExperimentTemplateExperimentReportConfigurationProperty",
            },
            log_configuration: {
                value: ccExperimentTemplateExperimentTemplateLogConfigurationPropertyToHclTerraform(this._logConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcExperimentTemplate.ExperimentTemplateLogConfigurationProperty",
            },
            role_arn: {
                value: cdktn.stringToHclTerraform(this._roleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            stop_conditions: {
                value: cdktn.listMapperHcl(ccExperimentTemplateExperimentTemplateStopConditionPropertyToHclTerraform, false)(this._stopConditions.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcExperimentTemplate.ExperimentTemplateStopConditionPropertyList",
            },
            tags: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            targets: {
                value: cdktn.hashMapperHcl(ccExperimentTemplateExperimentTemplateTargetPropertyToHclTerraform)(this._targets.internalValue),
                isBlock: true,
                type: "map",
                storageClassType: "CcExperimentTemplate.ExperimentTemplateTargetPropertyMap",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccExperimentTemplateExperimentTemplateActionPropertyToTerraform(struct?: CcExperimentTemplate.ExperimentTemplateActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        action_id: cdktn.stringToTerraform(struct!.actionId),
        description: cdktn.stringToTerraform(struct!.description),
        parameters: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.parameters),
        start_after: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.startAfter),
        targets: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.targets),
    }
}


export function ccExperimentTemplateExperimentTemplateActionPropertyToHclTerraform(struct?: CcExperimentTemplate.ExperimentTemplateActionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        action_id: {
            value: cdktn.stringToHclTerraform(struct!.actionId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        description: {
            value: cdktn.stringToHclTerraform(struct!.description),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        parameters: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.parameters),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        start_after: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.startAfter),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        targets: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.targets),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccExperimentTemplateExperimentTemplateExperimentOptionsPropertyToTerraform(struct?: CcExperimentTemplate.ExperimentTemplateExperimentOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        account_targeting: cdktn.stringToTerraform(struct!.accountTargeting),
        empty_target_resolution_mode: cdktn.stringToTerraform(struct!.emptyTargetResolutionMode),
    }
}


export function ccExperimentTemplateExperimentTemplateExperimentOptionsPropertyToHclTerraform(struct?: CcExperimentTemplate.ExperimentTemplateExperimentOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        account_targeting: {
            value: cdktn.stringToHclTerraform(struct!.accountTargeting),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        empty_target_resolution_mode: {
            value: cdktn.stringToHclTerraform(struct!.emptyTargetResolutionMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccExperimentTemplateCloudWatchDashboardPropertyToTerraform(struct?: CcExperimentTemplate.CloudWatchDashboardProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dashboard_identifier: cdktn.stringToTerraform(struct!.dashboardIdentifier),
    }
}


export function ccExperimentTemplateCloudWatchDashboardPropertyToHclTerraform(struct?: CcExperimentTemplate.CloudWatchDashboardProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        dashboard_identifier: {
            value: cdktn.stringToHclTerraform(struct!.dashboardIdentifier),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccExperimentTemplateDataSourcesPropertyToTerraform(struct?: CcExperimentTemplate.DataSourcesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cloudwatch_dashboards: cdktn.listMapper(ccExperimentTemplateCloudWatchDashboardPropertyToTerraform, false)(struct!.cloudwatchDashboards),
    }
}


export function ccExperimentTemplateDataSourcesPropertyToHclTerraform(struct?: CcExperimentTemplate.DataSourcesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cloudwatch_dashboards: {
            value: cdktn.listMapperHcl(ccExperimentTemplateCloudWatchDashboardPropertyToHclTerraform, false)(struct!.cloudwatchDashboards),
            isBlock: true,
            type: "list",
            storageClassType: "CloudWatchDashboardPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccExperimentTemplateExperimentReportS3ConfigurationPropertyToTerraform(struct?: CcExperimentTemplate.ExperimentReportS3ConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bucket_name: cdktn.stringToTerraform(struct!.bucketName),
        prefix: cdktn.stringToTerraform(struct!.prefix),
    }
}


export function ccExperimentTemplateExperimentReportS3ConfigurationPropertyToHclTerraform(struct?: CcExperimentTemplate.ExperimentReportS3ConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bucket_name: {
            value: cdktn.stringToHclTerraform(struct!.bucketName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        prefix: {
            value: cdktn.stringToHclTerraform(struct!.prefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccExperimentTemplateOutputsPropertyToTerraform(struct?: CcExperimentTemplate.OutputsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        experiment_report_s3_configuration: ccExperimentTemplateExperimentReportS3ConfigurationPropertyToTerraform(struct!.experimentReportS3Configuration),
    }
}


export function ccExperimentTemplateOutputsPropertyToHclTerraform(struct?: CcExperimentTemplate.OutputsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        experiment_report_s3_configuration: {
            value: ccExperimentTemplateExperimentReportS3ConfigurationPropertyToHclTerraform(struct!.experimentReportS3Configuration),
            isBlock: true,
            type: "struct",
            storageClassType: "ExperimentReportS3ConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccExperimentTemplateExperimentTemplateExperimentReportConfigurationPropertyToTerraform(struct?: CcExperimentTemplate.ExperimentTemplateExperimentReportConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        data_sources: ccExperimentTemplateDataSourcesPropertyToTerraform(struct!.dataSources),
        outputs: ccExperimentTemplateOutputsPropertyToTerraform(struct!.outputs),
        post_experiment_duration: cdktn.stringToTerraform(struct!.postExperimentDuration),
        pre_experiment_duration: cdktn.stringToTerraform(struct!.preExperimentDuration),
    }
}


export function ccExperimentTemplateExperimentTemplateExperimentReportConfigurationPropertyToHclTerraform(struct?: CcExperimentTemplate.ExperimentTemplateExperimentReportConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        data_sources: {
            value: ccExperimentTemplateDataSourcesPropertyToHclTerraform(struct!.dataSources),
            isBlock: true,
            type: "struct",
            storageClassType: "DataSourcesProperty",
        },
        outputs: {
            value: ccExperimentTemplateOutputsPropertyToHclTerraform(struct!.outputs),
            isBlock: true,
            type: "struct",
            storageClassType: "OutputsProperty",
        },
        post_experiment_duration: {
            value: cdktn.stringToHclTerraform(struct!.postExperimentDuration),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        pre_experiment_duration: {
            value: cdktn.stringToHclTerraform(struct!.preExperimentDuration),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccExperimentTemplateCloudWatchLogsConfigurationPropertyToTerraform(struct?: CcExperimentTemplate.CloudWatchLogsConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        log_group_arn: cdktn.stringToTerraform(struct!.logGroupArn),
    }
}


export function ccExperimentTemplateCloudWatchLogsConfigurationPropertyToHclTerraform(struct?: CcExperimentTemplate.CloudWatchLogsConfigurationProperty | cdktn.IResolvable): any {
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


export function ccExperimentTemplateS3ConfigurationPropertyToTerraform(struct?: CcExperimentTemplate.S3ConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bucket_name: cdktn.stringToTerraform(struct!.bucketName),
        prefix: cdktn.stringToTerraform(struct!.prefix),
    }
}


export function ccExperimentTemplateS3ConfigurationPropertyToHclTerraform(struct?: CcExperimentTemplate.S3ConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bucket_name: {
            value: cdktn.stringToHclTerraform(struct!.bucketName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        prefix: {
            value: cdktn.stringToHclTerraform(struct!.prefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccExperimentTemplateExperimentTemplateLogConfigurationPropertyToTerraform(struct?: CcExperimentTemplate.ExperimentTemplateLogConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cloudwatch_logs_configuration: ccExperimentTemplateCloudWatchLogsConfigurationPropertyToTerraform(struct!.cloudwatchLogsConfiguration),
        log_schema_version: cdktn.numberToTerraform(struct!.logSchemaVersion),
        s3_configuration: ccExperimentTemplateS3ConfigurationPropertyToTerraform(struct!.s3Configuration),
    }
}


export function ccExperimentTemplateExperimentTemplateLogConfigurationPropertyToHclTerraform(struct?: CcExperimentTemplate.ExperimentTemplateLogConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cloudwatch_logs_configuration: {
            value: ccExperimentTemplateCloudWatchLogsConfigurationPropertyToHclTerraform(struct!.cloudwatchLogsConfiguration),
            isBlock: true,
            type: "struct",
            storageClassType: "CloudWatchLogsConfigurationProperty",
        },
        log_schema_version: {
            value: cdktn.numberToHclTerraform(struct!.logSchemaVersion),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        s3_configuration: {
            value: ccExperimentTemplateS3ConfigurationPropertyToHclTerraform(struct!.s3Configuration),
            isBlock: true,
            type: "struct",
            storageClassType: "S3ConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccExperimentTemplateExperimentTemplateStopConditionPropertyToTerraform(struct?: CcExperimentTemplate.ExperimentTemplateStopConditionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        source: cdktn.stringToTerraform(struct!.source),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccExperimentTemplateExperimentTemplateStopConditionPropertyToHclTerraform(struct?: CcExperimentTemplate.ExperimentTemplateStopConditionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        source: {
            value: cdktn.stringToHclTerraform(struct!.source),
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


export function ccExperimentTemplateExperimentTemplateTargetFilterPropertyToTerraform(struct?: CcExperimentTemplate.ExperimentTemplateTargetFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        path: cdktn.stringToTerraform(struct!.path),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccExperimentTemplateExperimentTemplateTargetFilterPropertyToHclTerraform(struct?: CcExperimentTemplate.ExperimentTemplateTargetFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        path: {
            value: cdktn.stringToHclTerraform(struct!.path),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        values: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccExperimentTemplateExperimentTemplateTargetPropertyToTerraform(struct?: CcExperimentTemplate.ExperimentTemplateTargetProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        filters: cdktn.listMapper(ccExperimentTemplateExperimentTemplateTargetFilterPropertyToTerraform, false)(struct!.filters),
        parameters: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.parameters),
        resource_arns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.resourceArns),
        resource_tags: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.resourceTags),
        resource_type: cdktn.stringToTerraform(struct!.resourceType),
        selection_mode: cdktn.stringToTerraform(struct!.selectionMode),
    }
}


export function ccExperimentTemplateExperimentTemplateTargetPropertyToHclTerraform(struct?: CcExperimentTemplate.ExperimentTemplateTargetProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        filters: {
            value: cdktn.listMapperHcl(ccExperimentTemplateExperimentTemplateTargetFilterPropertyToHclTerraform, false)(struct!.filters),
            isBlock: true,
            type: "list",
            storageClassType: "ExperimentTemplateTargetFilterPropertyList",
        },
        parameters: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.parameters),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        resource_arns: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.resourceArns),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        resource_tags: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.resourceTags),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        resource_type: {
            value: cdktn.stringToHclTerraform(struct!.resourceType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        selection_mode: {
            value: cdktn.stringToHclTerraform(struct!.selectionMode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcExperimentTemplate {
export interface ExperimentTemplateActionProperty {
    /**
    * The ID of the action.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fis_experiment_template#action_id CcExperimentTemplate#action_id}
    */
    readonly actionId?: string;
    /**
    * A description for the action.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fis_experiment_template#description CcExperimentTemplate#description}
    */
    readonly description?: string;
    /**
    * The parameters for the action, if applicable.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fis_experiment_template#parameters CcExperimentTemplate#parameters}
    */
    readonly parameters?: { [key: string]: string };
    /**
    * The names of the actions that must be completed before the current action starts.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fis_experiment_template#start_after CcExperimentTemplate#start_after}
    */
    readonly startAfter?: string[];
    /**
    * One or more targets for the action.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fis_experiment_template#targets CcExperimentTemplate#targets}
    */
    readonly targets?: { [key: string]: string };
}
export class ExperimentTemplateActionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ExperimentTemplateActionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._actionId !== undefined) {
            hasAnyValues = true;
            internalValueResult.actionId = this._actionId;
        }
        if (this._description !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._parameters !== undefined) {
            hasAnyValues = true;
            internalValueResult.parameters = this._parameters;
        }
        if (this._startAfter !== undefined) {
            hasAnyValues = true;
            internalValueResult.startAfter = this._startAfter;
        }
        if (this._targets !== undefined) {
            hasAnyValues = true;
            internalValueResult.targets = this._targets;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ExperimentTemplateActionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._actionId = undefined;
            this._description = undefined;
            this._parameters = undefined;
            this._startAfter = undefined;
            this._targets = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._actionId = value.actionId;
            this._description = value.description;
            this._parameters = value.parameters;
            this._startAfter = value.startAfter;
            this._targets = value.targets;
        }
    }

    // action_id - computed: true, optional: true, required: false
    private _actionId?: string; 
    public get actionId() {
        return this.getStringAttribute('action_id');
    }
    public set actionId(value: string) {
        this._actionId = value;
    }
    public resetActionId() {
        this._actionId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get actionIdInput() {
        return this._actionId;
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

    // parameters - computed: true, optional: true, required: false
    private _parameters?: { [key: string]: string }; 
    public get parameters() {
        return this.getStringMapAttribute('parameters');
    }
    public set parameters(value: { [key: string]: string }) {
        this._parameters = value;
    }
    public resetParameters() {
        this._parameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parametersInput() {
        return this._parameters;
    }

    // start_after - computed: true, optional: true, required: false
    private _startAfter?: string[]; 
    public get startAfter() {
        return this.getListAttribute('start_after');
    }
    public set startAfter(value: string[]) {
        this._startAfter = value;
    }
    public resetStartAfter() {
        this._startAfter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startAfterInput() {
        return this._startAfter;
    }

    // targets - computed: true, optional: true, required: false
    private _targets?: { [key: string]: string }; 
    public get targets() {
        return this.getStringMapAttribute('targets');
    }
    public set targets(value: { [key: string]: string }) {
        this._targets = value;
    }
    public resetTargets() {
        this._targets = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetsInput() {
        return this._targets;
    }
}

export class ExperimentTemplateActionPropertyMap extends cdktn.ComplexMap {
    public internalValue? : { [key: string]: ExperimentTemplateActionProperty } | cdktn.IResolvable

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
    public get(key: string): ExperimentTemplateActionPropertyOutputReference {
        return new ExperimentTemplateActionPropertyOutputReference(this.terraformResource, this.terraformAttribute, key);
    }
}
export interface ExperimentTemplateExperimentOptionsProperty {
    /**
    * The account targeting setting for the experiment template.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fis_experiment_template#account_targeting CcExperimentTemplate#account_targeting}
    */
    readonly accountTargeting?: string;
    /**
    * The target resolution failure mode for the experiment template.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fis_experiment_template#empty_target_resolution_mode CcExperimentTemplate#empty_target_resolution_mode}
    */
    readonly emptyTargetResolutionMode?: string;
}
export class ExperimentTemplateExperimentOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ExperimentTemplateExperimentOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._accountTargeting !== undefined) {
            hasAnyValues = true;
            internalValueResult.accountTargeting = this._accountTargeting;
        }
        if (this._emptyTargetResolutionMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.emptyTargetResolutionMode = this._emptyTargetResolutionMode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ExperimentTemplateExperimentOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accountTargeting = undefined;
            this._emptyTargetResolutionMode = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accountTargeting = value.accountTargeting;
            this._emptyTargetResolutionMode = value.emptyTargetResolutionMode;
        }
    }

    // account_targeting - computed: true, optional: true, required: false
    private _accountTargeting?: string; 
    public get accountTargeting() {
        return this.getStringAttribute('account_targeting');
    }
    public set accountTargeting(value: string) {
        this._accountTargeting = value;
    }
    public resetAccountTargeting() {
        this._accountTargeting = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accountTargetingInput() {
        return this._accountTargeting;
    }

    // empty_target_resolution_mode - computed: true, optional: true, required: false
    private _emptyTargetResolutionMode?: string; 
    public get emptyTargetResolutionMode() {
        return this.getStringAttribute('empty_target_resolution_mode');
    }
    public set emptyTargetResolutionMode(value: string) {
        this._emptyTargetResolutionMode = value;
    }
    public resetEmptyTargetResolutionMode() {
        this._emptyTargetResolutionMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get emptyTargetResolutionModeInput() {
        return this._emptyTargetResolutionMode;
    }
}
export interface CloudWatchDashboardProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fis_experiment_template#dashboard_identifier CcExperimentTemplate#dashboard_identifier}
    */
    readonly dashboardIdentifier?: string;
}
export class CloudWatchDashboardPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): CloudWatchDashboardProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dashboardIdentifier !== undefined) {
            hasAnyValues = true;
            internalValueResult.dashboardIdentifier = this._dashboardIdentifier;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CloudWatchDashboardProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dashboardIdentifier = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dashboardIdentifier = value.dashboardIdentifier;
        }
    }

    // dashboard_identifier - computed: true, optional: true, required: false
    private _dashboardIdentifier?: string; 
    public get dashboardIdentifier() {
        return this.getStringAttribute('dashboard_identifier');
    }
    public set dashboardIdentifier(value: string) {
        this._dashboardIdentifier = value;
    }
    public resetDashboardIdentifier() {
        this._dashboardIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dashboardIdentifierInput() {
        return this._dashboardIdentifier;
    }
}

export class CloudWatchDashboardPropertyList extends cdktn.ComplexList {
    public internalValue? : CloudWatchDashboardProperty[] | cdktn.IResolvable

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
    public get(index: number): CloudWatchDashboardPropertyOutputReference {
        return new CloudWatchDashboardPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface DataSourcesProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fis_experiment_template#cloudwatch_dashboards CcExperimentTemplate#cloudwatch_dashboards}
    */
    readonly cloudwatchDashboards?: CloudWatchDashboardProperty[] | cdktn.IResolvable;
}
export class DataSourcesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DataSourcesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cloudwatchDashboards?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.cloudwatchDashboards = this._cloudwatchDashboards?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DataSourcesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cloudwatchDashboards.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cloudwatchDashboards.internalValue = value.cloudwatchDashboards;
        }
    }

    // cloudwatch_dashboards - computed: true, optional: true, required: false
    private _cloudwatchDashboards = new CloudWatchDashboardPropertyList(this, "cloudwatch_dashboards", false);
    public get cloudwatchDashboards() {
        return this._cloudwatchDashboards;
    }
    public putCloudwatchDashboards(value: CloudWatchDashboardProperty[] | cdktn.IResolvable) {
        this._cloudwatchDashboards.internalValue = value;
    }
    public resetCloudwatchDashboards() {
        this._cloudwatchDashboards.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cloudwatchDashboardsInput() {
        return this._cloudwatchDashboards.internalValue;
    }
}
export interface ExperimentReportS3ConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fis_experiment_template#bucket_name CcExperimentTemplate#bucket_name}
    */
    readonly bucketName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fis_experiment_template#prefix CcExperimentTemplate#prefix}
    */
    readonly prefix?: string;
}
export class ExperimentReportS3ConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ExperimentReportS3ConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bucketName !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketName = this._bucketName;
        }
        if (this._prefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.prefix = this._prefix;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ExperimentReportS3ConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bucketName = undefined;
            this._prefix = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bucketName = value.bucketName;
            this._prefix = value.prefix;
        }
    }

    // bucket_name - computed: true, optional: true, required: false
    private _bucketName?: string; 
    public get bucketName() {
        return this.getStringAttribute('bucket_name');
    }
    public set bucketName(value: string) {
        this._bucketName = value;
    }
    public resetBucketName() {
        this._bucketName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketNameInput() {
        return this._bucketName;
    }

    // prefix - computed: true, optional: true, required: false
    private _prefix?: string; 
    public get prefix() {
        return this.getStringAttribute('prefix');
    }
    public set prefix(value: string) {
        this._prefix = value;
    }
    public resetPrefix() {
        this._prefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get prefixInput() {
        return this._prefix;
    }
}
export interface OutputsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fis_experiment_template#experiment_report_s3_configuration CcExperimentTemplate#experiment_report_s3_configuration}
    */
    readonly experimentReportS3Configuration?: ExperimentReportS3ConfigurationProperty;
}
export class OutputsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OutputsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._experimentReportS3Configuration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.experimentReportS3Configuration = this._experimentReportS3Configuration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OutputsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._experimentReportS3Configuration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._experimentReportS3Configuration.internalValue = value.experimentReportS3Configuration;
        }
    }

    // experiment_report_s3_configuration - computed: true, optional: true, required: false
    private _experimentReportS3Configuration = new ExperimentReportS3ConfigurationPropertyOutputReference(this, "experiment_report_s3_configuration");
    public get experimentReportS3Configuration() {
        return this._experimentReportS3Configuration;
    }
    public putExperimentReportS3Configuration(value: ExperimentReportS3ConfigurationProperty) {
        this._experimentReportS3Configuration.internalValue = value;
    }
    public resetExperimentReportS3Configuration() {
        this._experimentReportS3Configuration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get experimentReportS3ConfigurationInput() {
        return this._experimentReportS3Configuration.internalValue;
    }
}
export interface ExperimentTemplateExperimentReportConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fis_experiment_template#data_sources CcExperimentTemplate#data_sources}
    */
    readonly dataSources?: DataSourcesProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fis_experiment_template#outputs CcExperimentTemplate#outputs}
    */
    readonly outputs?: OutputsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fis_experiment_template#post_experiment_duration CcExperimentTemplate#post_experiment_duration}
    */
    readonly postExperimentDuration?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fis_experiment_template#pre_experiment_duration CcExperimentTemplate#pre_experiment_duration}
    */
    readonly preExperimentDuration?: string;
}
export class ExperimentTemplateExperimentReportConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ExperimentTemplateExperimentReportConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dataSources?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataSources = this._dataSources?.internalValue;
        }
        if (this._outputs?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.outputs = this._outputs?.internalValue;
        }
        if (this._postExperimentDuration !== undefined) {
            hasAnyValues = true;
            internalValueResult.postExperimentDuration = this._postExperimentDuration;
        }
        if (this._preExperimentDuration !== undefined) {
            hasAnyValues = true;
            internalValueResult.preExperimentDuration = this._preExperimentDuration;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ExperimentTemplateExperimentReportConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dataSources.internalValue = undefined;
            this._outputs.internalValue = undefined;
            this._postExperimentDuration = undefined;
            this._preExperimentDuration = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dataSources.internalValue = value.dataSources;
            this._outputs.internalValue = value.outputs;
            this._postExperimentDuration = value.postExperimentDuration;
            this._preExperimentDuration = value.preExperimentDuration;
        }
    }

    // data_sources - computed: true, optional: true, required: false
    private _dataSources = new DataSourcesPropertyOutputReference(this, "data_sources");
    public get dataSources() {
        return this._dataSources;
    }
    public putDataSources(value: DataSourcesProperty) {
        this._dataSources.internalValue = value;
    }
    public resetDataSources() {
        this._dataSources.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataSourcesInput() {
        return this._dataSources.internalValue;
    }

    // outputs - computed: true, optional: true, required: false
    private _outputs = new OutputsPropertyOutputReference(this, "outputs");
    public get outputs() {
        return this._outputs;
    }
    public putOutputs(value: OutputsProperty) {
        this._outputs.internalValue = value;
    }
    public resetOutputs() {
        this._outputs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outputsInput() {
        return this._outputs.internalValue;
    }

    // post_experiment_duration - computed: true, optional: true, required: false
    private _postExperimentDuration?: string; 
    public get postExperimentDuration() {
        return this.getStringAttribute('post_experiment_duration');
    }
    public set postExperimentDuration(value: string) {
        this._postExperimentDuration = value;
    }
    public resetPostExperimentDuration() {
        this._postExperimentDuration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get postExperimentDurationInput() {
        return this._postExperimentDuration;
    }

    // pre_experiment_duration - computed: true, optional: true, required: false
    private _preExperimentDuration?: string; 
    public get preExperimentDuration() {
        return this.getStringAttribute('pre_experiment_duration');
    }
    public set preExperimentDuration(value: string) {
        this._preExperimentDuration = value;
    }
    public resetPreExperimentDuration() {
        this._preExperimentDuration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get preExperimentDurationInput() {
        return this._preExperimentDuration;
    }
}
export interface CloudWatchLogsConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fis_experiment_template#log_group_arn CcExperimentTemplate#log_group_arn}
    */
    readonly logGroupArn?: string;
}
export class CloudWatchLogsConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CloudWatchLogsConfigurationProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: CloudWatchLogsConfigurationProperty | cdktn.IResolvable | undefined) {
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
export interface S3ConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fis_experiment_template#bucket_name CcExperimentTemplate#bucket_name}
    */
    readonly bucketName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fis_experiment_template#prefix CcExperimentTemplate#prefix}
    */
    readonly prefix?: string;
}
export class S3ConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3ConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bucketName !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucketName = this._bucketName;
        }
        if (this._prefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.prefix = this._prefix;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3ConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bucketName = undefined;
            this._prefix = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bucketName = value.bucketName;
            this._prefix = value.prefix;
        }
    }

    // bucket_name - computed: true, optional: true, required: false
    private _bucketName?: string; 
    public get bucketName() {
        return this.getStringAttribute('bucket_name');
    }
    public set bucketName(value: string) {
        this._bucketName = value;
    }
    public resetBucketName() {
        this._bucketName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketNameInput() {
        return this._bucketName;
    }

    // prefix - computed: true, optional: true, required: false
    private _prefix?: string; 
    public get prefix() {
        return this.getStringAttribute('prefix');
    }
    public set prefix(value: string) {
        this._prefix = value;
    }
    public resetPrefix() {
        this._prefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get prefixInput() {
        return this._prefix;
    }
}
export interface ExperimentTemplateLogConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fis_experiment_template#cloudwatch_logs_configuration CcExperimentTemplate#cloudwatch_logs_configuration}
    */
    readonly cloudwatchLogsConfiguration?: CloudWatchLogsConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fis_experiment_template#log_schema_version CcExperimentTemplate#log_schema_version}
    */
    readonly logSchemaVersion?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fis_experiment_template#s3_configuration CcExperimentTemplate#s3_configuration}
    */
    readonly s3Configuration?: S3ConfigurationProperty;
}
export class ExperimentTemplateLogConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ExperimentTemplateLogConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cloudwatchLogsConfiguration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.cloudwatchLogsConfiguration = this._cloudwatchLogsConfiguration?.internalValue;
        }
        if (this._logSchemaVersion !== undefined) {
            hasAnyValues = true;
            internalValueResult.logSchemaVersion = this._logSchemaVersion;
        }
        if (this._s3Configuration?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Configuration = this._s3Configuration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ExperimentTemplateLogConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cloudwatchLogsConfiguration.internalValue = undefined;
            this._logSchemaVersion = undefined;
            this._s3Configuration.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cloudwatchLogsConfiguration.internalValue = value.cloudwatchLogsConfiguration;
            this._logSchemaVersion = value.logSchemaVersion;
            this._s3Configuration.internalValue = value.s3Configuration;
        }
    }

    // cloudwatch_logs_configuration - computed: true, optional: true, required: false
    private _cloudwatchLogsConfiguration = new CloudWatchLogsConfigurationPropertyOutputReference(this, "cloudwatch_logs_configuration");
    public get cloudwatchLogsConfiguration() {
        return this._cloudwatchLogsConfiguration;
    }
    public putCloudwatchLogsConfiguration(value: CloudWatchLogsConfigurationProperty) {
        this._cloudwatchLogsConfiguration.internalValue = value;
    }
    public resetCloudwatchLogsConfiguration() {
        this._cloudwatchLogsConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cloudwatchLogsConfigurationInput() {
        return this._cloudwatchLogsConfiguration.internalValue;
    }

    // log_schema_version - computed: true, optional: true, required: false
    private _logSchemaVersion?: number; 
    public get logSchemaVersion() {
        return this.getNumberAttribute('log_schema_version');
    }
    public set logSchemaVersion(value: number) {
        this._logSchemaVersion = value;
    }
    public resetLogSchemaVersion() {
        this._logSchemaVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logSchemaVersionInput() {
        return this._logSchemaVersion;
    }

    // s3_configuration - computed: true, optional: true, required: false
    private _s3Configuration = new S3ConfigurationPropertyOutputReference(this, "s3_configuration");
    public get s3Configuration() {
        return this._s3Configuration;
    }
    public putS3Configuration(value: S3ConfigurationProperty) {
        this._s3Configuration.internalValue = value;
    }
    public resetS3Configuration() {
        this._s3Configuration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3ConfigurationInput() {
        return this._s3Configuration.internalValue;
    }
}
export interface ExperimentTemplateStopConditionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fis_experiment_template#source CcExperimentTemplate#source}
    */
    readonly source: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fis_experiment_template#value CcExperimentTemplate#value}
    */
    readonly value?: string;
}
export class ExperimentTemplateStopConditionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ExperimentTemplateStopConditionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._source !== undefined) {
            hasAnyValues = true;
            internalValueResult.source = this._source;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ExperimentTemplateStopConditionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._source = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._source = value.source;
            this._value = value.value;
        }
    }

    // source - computed: false, optional: false, required: true
    private _source?: string; 
    public get source() {
        return this.getStringAttribute('source');
    }
    public set source(value: string) {
        this._source = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceInput() {
        return this._source;
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

export class ExperimentTemplateStopConditionPropertyList extends cdktn.ComplexList {
    public internalValue? : ExperimentTemplateStopConditionProperty[] | cdktn.IResolvable

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
    public get(index: number): ExperimentTemplateStopConditionPropertyOutputReference {
        return new ExperimentTemplateStopConditionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ExperimentTemplateTargetFilterProperty {
    /**
    * The attribute path for the filter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fis_experiment_template#path CcExperimentTemplate#path}
    */
    readonly path?: string;
    /**
    * The attribute values for the filter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fis_experiment_template#values CcExperimentTemplate#values}
    */
    readonly values?: string[];
}
export class ExperimentTemplateTargetFilterPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ExperimentTemplateTargetFilterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._path !== undefined) {
            hasAnyValues = true;
            internalValueResult.path = this._path;
        }
        if (this._values !== undefined) {
            hasAnyValues = true;
            internalValueResult.values = this._values;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ExperimentTemplateTargetFilterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._path = undefined;
            this._values = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._path = value.path;
            this._values = value.values;
        }
    }

    // path - computed: true, optional: true, required: false
    private _path?: string; 
    public get path() {
        return this.getStringAttribute('path');
    }
    public set path(value: string) {
        this._path = value;
    }
    public resetPath() {
        this._path = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pathInput() {
        return this._path;
    }

    // values - computed: true, optional: true, required: false
    private _values?: string[]; 
    public get values() {
        return this.getListAttribute('values');
    }
    public set values(value: string[]) {
        this._values = value;
    }
    public resetValues() {
        this._values = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valuesInput() {
        return this._values;
    }
}

export class ExperimentTemplateTargetFilterPropertyList extends cdktn.ComplexList {
    public internalValue? : ExperimentTemplateTargetFilterProperty[] | cdktn.IResolvable

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
    public get(index: number): ExperimentTemplateTargetFilterPropertyOutputReference {
        return new ExperimentTemplateTargetFilterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ExperimentTemplateTargetProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fis_experiment_template#filters CcExperimentTemplate#filters}
    */
    readonly filters?: ExperimentTemplateTargetFilterProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fis_experiment_template#parameters CcExperimentTemplate#parameters}
    */
    readonly parameters?: { [key: string]: string };
    /**
    * The Amazon Resource Names (ARNs) of the target resources.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fis_experiment_template#resource_arns CcExperimentTemplate#resource_arns}
    */
    readonly resourceArns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fis_experiment_template#resource_tags CcExperimentTemplate#resource_tags}
    */
    readonly resourceTags?: { [key: string]: string };
    /**
    * The AWS resource type. The resource type must be supported for the specified action.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fis_experiment_template#resource_type CcExperimentTemplate#resource_type}
    */
    readonly resourceType?: string;
    /**
    * Scopes the identified resources to a specific number of the resources at random, or a percentage of the resources.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/fis_experiment_template#selection_mode CcExperimentTemplate#selection_mode}
    */
    readonly selectionMode?: string;
}
export class ExperimentTemplateTargetPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ExperimentTemplateTargetProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._filters?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.filters = this._filters?.internalValue;
        }
        if (this._parameters !== undefined) {
            hasAnyValues = true;
            internalValueResult.parameters = this._parameters;
        }
        if (this._resourceArns !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceArns = this._resourceArns;
        }
        if (this._resourceTags !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceTags = this._resourceTags;
        }
        if (this._resourceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceType = this._resourceType;
        }
        if (this._selectionMode !== undefined) {
            hasAnyValues = true;
            internalValueResult.selectionMode = this._selectionMode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ExperimentTemplateTargetProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._filters.internalValue = undefined;
            this._parameters = undefined;
            this._resourceArns = undefined;
            this._resourceTags = undefined;
            this._resourceType = undefined;
            this._selectionMode = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._filters.internalValue = value.filters;
            this._parameters = value.parameters;
            this._resourceArns = value.resourceArns;
            this._resourceTags = value.resourceTags;
            this._resourceType = value.resourceType;
            this._selectionMode = value.selectionMode;
        }
    }

    // filters - computed: true, optional: true, required: false
    private _filters = new ExperimentTemplateTargetFilterPropertyList(this, "filters", false);
    public get filters() {
        return this._filters;
    }
    public putFilters(value: ExperimentTemplateTargetFilterProperty[] | cdktn.IResolvable) {
        this._filters.internalValue = value;
    }
    public resetFilters() {
        this._filters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filtersInput() {
        return this._filters.internalValue;
    }

    // parameters - computed: true, optional: true, required: false
    private _parameters?: { [key: string]: string }; 
    public get parameters() {
        return this.getStringMapAttribute('parameters');
    }
    public set parameters(value: { [key: string]: string }) {
        this._parameters = value;
    }
    public resetParameters() {
        this._parameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parametersInput() {
        return this._parameters;
    }

    // resource_arns - computed: true, optional: true, required: false
    private _resourceArns?: string[]; 
    public get resourceArns() {
        return this.getListAttribute('resource_arns');
    }
    public set resourceArns(value: string[]) {
        this._resourceArns = value;
    }
    public resetResourceArns() {
        this._resourceArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceArnsInput() {
        return this._resourceArns;
    }

    // resource_tags - computed: true, optional: true, required: false
    private _resourceTags?: { [key: string]: string }; 
    public get resourceTags() {
        return this.getStringMapAttribute('resource_tags');
    }
    public set resourceTags(value: { [key: string]: string }) {
        this._resourceTags = value;
    }
    public resetResourceTags() {
        this._resourceTags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceTagsInput() {
        return this._resourceTags;
    }

    // resource_type - computed: true, optional: true, required: false
    private _resourceType?: string; 
    public get resourceType() {
        return this.getStringAttribute('resource_type');
    }
    public set resourceType(value: string) {
        this._resourceType = value;
    }
    public resetResourceType() {
        this._resourceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceTypeInput() {
        return this._resourceType;
    }

    // selection_mode - computed: true, optional: true, required: false
    private _selectionMode?: string; 
    public get selectionMode() {
        return this.getStringAttribute('selection_mode');
    }
    public set selectionMode(value: string) {
        this._selectionMode = value;
    }
    public resetSelectionMode() {
        this._selectionMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get selectionModeInput() {
        return this._selectionMode;
    }
}

export class ExperimentTemplateTargetPropertyMap extends cdktn.ComplexMap {
    public internalValue? : { [key: string]: ExperimentTemplateTargetProperty } | cdktn.IResolvable

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
    public get(key: string): ExperimentTemplateTargetPropertyOutputReference {
        return new ExperimentTemplateTargetPropertyOutputReference(this.terraformResource, this.terraformAttribute, key);
    }
}
}
