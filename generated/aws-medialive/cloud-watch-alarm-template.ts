// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/medialive_cloudwatch_alarm_template

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcCloudWatchAlarmTemplateProps extends cdktn.TerraformMetaArguments {
    /**
    * The comparison operator used to compare the specified statistic and the threshold.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/medialive_cloudwatch_alarm_template#comparison_operator CcCloudWatchAlarmTemplate#comparison_operator}
    */
    readonly comparisonOperator: string;
    /**
    * The number of datapoints within the evaluation period that must be breaching to trigger the alarm.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/medialive_cloudwatch_alarm_template#datapoints_to_alarm CcCloudWatchAlarmTemplate#datapoints_to_alarm}
    */
    readonly datapointsToAlarm?: number;
    /**
    * A resource's optional description.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/medialive_cloudwatch_alarm_template#description CcCloudWatchAlarmTemplate#description}
    */
    readonly description?: string;
    /**
    * The number of periods over which data is compared to the specified threshold.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/medialive_cloudwatch_alarm_template#evaluation_periods CcCloudWatchAlarmTemplate#evaluation_periods}
    */
    readonly evaluationPeriods?: number;
    /**
    * A cloudwatch alarm template group's identifier. Can be either be its id or current name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/medialive_cloudwatch_alarm_template#group_identifier CcCloudWatchAlarmTemplate#group_identifier}
    */
    readonly groupIdentifier?: string;
    /**
    * The name of the metric associated with the alarm. Must be compatible with targetResourceType.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/medialive_cloudwatch_alarm_template#metric_name CcCloudWatchAlarmTemplate#metric_name}
    */
    readonly metricName: string;
    /**
    * A resource's name. Names must be unique within the scope of a resource type in a specific region.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/medialive_cloudwatch_alarm_template#name CcCloudWatchAlarmTemplate#name}
    */
    readonly name: string;
    /**
    * The period, in seconds, over which the specified statistic is applied.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/medialive_cloudwatch_alarm_template#period CcCloudWatchAlarmTemplate#period}
    */
    readonly period?: number;
    /**
    * The statistic to apply to the alarm's metric data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/medialive_cloudwatch_alarm_template#statistic CcCloudWatchAlarmTemplate#statistic}
    */
    readonly statistic: string;
    /**
    * Represents the tags associated with a resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/medialive_cloudwatch_alarm_template#tags CcCloudWatchAlarmTemplate#tags}
    */
    readonly tags?: { [key: string]: string };
    /**
    * The resource type this template should dynamically generate cloudwatch metric alarms for.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/medialive_cloudwatch_alarm_template#target_resource_type CcCloudWatchAlarmTemplate#target_resource_type}
    */
    readonly targetResourceType: string;
    /**
    * The threshold value to compare with the specified statistic.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/medialive_cloudwatch_alarm_template#threshold CcCloudWatchAlarmTemplate#threshold}
    */
    readonly threshold?: number;
    /**
    * Specifies how missing data points are treated when evaluating the alarm's condition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/medialive_cloudwatch_alarm_template#treat_missing_data CcCloudWatchAlarmTemplate#treat_missing_data}
    */
    readonly treatMissingData: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/medialive_cloudwatch_alarm_template awscc_medialive_cloudwatch_alarm_template}
*/
export class CcCloudWatchAlarmTemplate extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_medialive_cloudwatch_alarm_template";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcCloudWatchAlarmTemplate resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcCloudWatchAlarmTemplate to import
    * @param importFromId The id of the existing CcCloudWatchAlarmTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/medialive_cloudwatch_alarm_template#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcCloudWatchAlarmTemplate to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_medialive_cloudwatch_alarm_template", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/medialive_cloudwatch_alarm_template awscc_medialive_cloudwatch_alarm_template} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcCloudWatchAlarmTemplateProps
    */
    public constructor(scope: Construct, id: string, config: CcCloudWatchAlarmTemplateProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_medialive_cloudwatch_alarm_template',
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
        this._comparisonOperator = config.comparisonOperator;
        this._datapointsToAlarm = config.datapointsToAlarm;
        this._description = config.description;
        this._evaluationPeriods = config.evaluationPeriods;
        this._groupIdentifier = config.groupIdentifier;
        this._metricName = config.metricName;
        this._name = config.name;
        this._period = config.period;
        this._statistic = config.statistic;
        this._tags = config.tags;
        this._targetResourceType = config.targetResourceType;
        this._threshold = config.threshold;
        this._treatMissingData = config.treatMissingData;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // cloudwatch_alarm_template_id - computed: true, optional: false, required: false
    public get cloudwatchAlarmTemplateId() {
        return this.getStringAttribute('cloudwatch_alarm_template_id');
    }

    // comparison_operator - computed: false, optional: false, required: true
    private _comparisonOperator?: string; 
    public get comparisonOperator() {
        return this.getStringAttribute('comparison_operator');
    }
    public set comparisonOperator(value: string) {
        this._comparisonOperator = value;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonOperatorInput() {
        return this._comparisonOperator;
    }

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
    }

    // datapoints_to_alarm - computed: true, optional: true, required: false
    private _datapointsToAlarm?: number; 
    public get datapointsToAlarm() {
        return this.getNumberAttribute('datapoints_to_alarm');
    }
    public set datapointsToAlarm(value: number) {
        this._datapointsToAlarm = value;
    }
    public resetDatapointsToAlarm() {
        this._datapointsToAlarm = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get datapointsToAlarmInput() {
        return this._datapointsToAlarm;
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

    // evaluation_periods - computed: true, optional: true, required: false
    private _evaluationPeriods?: number; 
    public get evaluationPeriods() {
        return this.getNumberAttribute('evaluation_periods');
    }
    public set evaluationPeriods(value: number) {
        this._evaluationPeriods = value;
    }
    public resetEvaluationPeriods() {
        this._evaluationPeriods = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get evaluationPeriodsInput() {
        return this._evaluationPeriods;
    }

    // group_id - computed: true, optional: false, required: false
    public get groupId() {
        return this.getStringAttribute('group_id');
    }

    // group_identifier - computed: true, optional: true, required: false
    private _groupIdentifier?: string; 
    public get groupIdentifier() {
        return this.getStringAttribute('group_identifier');
    }
    public set groupIdentifier(value: string) {
        this._groupIdentifier = value;
    }
    public resetGroupIdentifier() {
        this._groupIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get groupIdentifierInput() {
        return this._groupIdentifier;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // identifier - computed: true, optional: false, required: false
    public get identifier() {
        return this.getStringAttribute('identifier');
    }

    // metric_name - computed: false, optional: false, required: true
    private _metricName?: string; 
    public get metricName() {
        return this.getStringAttribute('metric_name');
    }
    public set metricName(value: string) {
        this._metricName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get metricNameInput() {
        return this._metricName;
    }

    // modified_at - computed: true, optional: false, required: false
    public get modifiedAt() {
        return this.getStringAttribute('modified_at');
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

    // period - computed: true, optional: true, required: false
    private _period?: number; 
    public get period() {
        return this.getNumberAttribute('period');
    }
    public set period(value: number) {
        this._period = value;
    }
    public resetPeriod() {
        this._period = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get periodInput() {
        return this._period;
    }

    // statistic - computed: false, optional: false, required: true
    private _statistic?: string; 
    public get statistic() {
        return this.getStringAttribute('statistic');
    }
    public set statistic(value: string) {
        this._statistic = value;
    }
    // Temporarily expose input value. Use with caution.
    public get statisticInput() {
        return this._statistic;
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

    // target_resource_type - computed: false, optional: false, required: true
    private _targetResourceType?: string; 
    public get targetResourceType() {
        return this.getStringAttribute('target_resource_type');
    }
    public set targetResourceType(value: string) {
        this._targetResourceType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get targetResourceTypeInput() {
        return this._targetResourceType;
    }

    // threshold - computed: true, optional: true, required: false
    private _threshold?: number; 
    public get threshold() {
        return this.getNumberAttribute('threshold');
    }
    public set threshold(value: number) {
        this._threshold = value;
    }
    public resetThreshold() {
        this._threshold = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get thresholdInput() {
        return this._threshold;
    }

    // treat_missing_data - computed: false, optional: false, required: true
    private _treatMissingData?: string; 
    public get treatMissingData() {
        return this.getStringAttribute('treat_missing_data');
    }
    public set treatMissingData(value: string) {
        this._treatMissingData = value;
    }
    // Temporarily expose input value. Use with caution.
    public get treatMissingDataInput() {
        return this._treatMissingData;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            comparison_operator: cdktn.stringToTerraform(this._comparisonOperator),
            datapoints_to_alarm: cdktn.numberToTerraform(this._datapointsToAlarm),
            description: cdktn.stringToTerraform(this._description),
            evaluation_periods: cdktn.numberToTerraform(this._evaluationPeriods),
            group_identifier: cdktn.stringToTerraform(this._groupIdentifier),
            metric_name: cdktn.stringToTerraform(this._metricName),
            name: cdktn.stringToTerraform(this._name),
            period: cdktn.numberToTerraform(this._period),
            statistic: cdktn.stringToTerraform(this._statistic),
            tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
            target_resource_type: cdktn.stringToTerraform(this._targetResourceType),
            threshold: cdktn.numberToTerraform(this._threshold),
            treat_missing_data: cdktn.stringToTerraform(this._treatMissingData),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            comparison_operator: {
                value: cdktn.stringToHclTerraform(this._comparisonOperator),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            datapoints_to_alarm: {
                value: cdktn.numberToHclTerraform(this._datapointsToAlarm),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            evaluation_periods: {
                value: cdktn.numberToHclTerraform(this._evaluationPeriods),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            group_identifier: {
                value: cdktn.stringToHclTerraform(this._groupIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            metric_name: {
                value: cdktn.stringToHclTerraform(this._metricName),
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
            period: {
                value: cdktn.numberToHclTerraform(this._period),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            statistic: {
                value: cdktn.stringToHclTerraform(this._statistic),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            target_resource_type: {
                value: cdktn.stringToHclTerraform(this._targetResourceType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            threshold: {
                value: cdktn.numberToHclTerraform(this._threshold),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            treat_missing_data: {
                value: cdktn.stringToHclTerraform(this._treatMissingData),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export namespace CcCloudWatchAlarmTemplate {
}
