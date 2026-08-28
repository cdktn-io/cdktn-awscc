// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudwatch_metric_stream

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcMetricStreamProps extends cdktn.TerraformMetaArguments {
    /**
    * Define which metrics will be not streamed. Metrics matched by multiple instances of MetricStreamFilter are joined with an OR operation by default. If both IncludeFilters and ExcludeFilters are omitted, all metrics in the account will be streamed. IncludeFilters and ExcludeFilters are mutually exclusive. Default to null.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudwatch_metric_stream#exclude_filters CcMetricStream#exclude_filters}
    */
    readonly excludeFilters?: CcMetricStream.MetricStreamFilterProperty[] | cdktn.IResolvable;
    /**
    * The ARN of the Kinesis Firehose where to stream the data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudwatch_metric_stream#firehose_arn CcMetricStream#firehose_arn}
    */
    readonly firehoseArn?: string;
    /**
    * Define which metrics will be streamed. Metrics matched by multiple instances of MetricStreamFilter are joined with an OR operation by default. If both IncludeFilters and ExcludeFilters are omitted, all metrics in the account will be streamed. IncludeFilters and ExcludeFilters are mutually exclusive. Default to null.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudwatch_metric_stream#include_filters CcMetricStream#include_filters}
    */
    readonly includeFilters?: CcMetricStream.IncludeFiltersProperty[] | cdktn.IResolvable;
    /**
    * If you are creating a metric stream in a monitoring account, specify true to include metrics from source accounts that are linked to this monitoring account, in the metric stream. The default is false.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudwatch_metric_stream#include_linked_accounts_metrics CcMetricStream#include_linked_accounts_metrics}
    */
    readonly includeLinkedAccountsMetrics?: boolean | cdktn.IResolvable;
    /**
    * Name of the metric stream.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudwatch_metric_stream#name CcMetricStream#name}
    */
    readonly name?: string;
    /**
    * The output format of the data streamed to the Kinesis Firehose.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudwatch_metric_stream#output_format CcMetricStream#output_format}
    */
    readonly outputFormat?: string;
    /**
    * The ARN of the role that provides access to the Kinesis Firehose.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudwatch_metric_stream#role_arn CcMetricStream#role_arn}
    */
    readonly roleArn?: string;
    /**
    * By default, a metric stream always sends the MAX, MIN, SUM, and SAMPLECOUNT statistics for each metric that is streamed. You can use this parameter to have the metric stream also send additional statistics in the stream. This array can have up to 100 members.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudwatch_metric_stream#statistics_configurations CcMetricStream#statistics_configurations}
    */
    readonly statisticsConfigurations?: CcMetricStream.MetricStreamStatisticsConfigurationProperty[] | cdktn.IResolvable;
    /**
    * A set of tags to assign to the delivery stream.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudwatch_metric_stream#tags CcMetricStream#tags}
    */
    readonly tags?: CcMetricStream.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudwatch_metric_stream awscc_cloudwatch_metric_stream}
*/
export class CcMetricStream extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_cloudwatch_metric_stream";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcMetricStream resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcMetricStream to import
    * @param importFromId The id of the existing CcMetricStream that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudwatch_metric_stream#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcMetricStream to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cloudwatch_metric_stream", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudwatch_metric_stream awscc_cloudwatch_metric_stream} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcMetricStreamProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcMetricStreamProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_cloudwatch_metric_stream',
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
        this._excludeFilters.internalValue = config.excludeFilters;
        this._firehoseArn = config.firehoseArn;
        this._includeFilters.internalValue = config.includeFilters;
        this._includeLinkedAccountsMetrics = config.includeLinkedAccountsMetrics;
        this._name = config.name;
        this._outputFormat = config.outputFormat;
        this._roleArn = config.roleArn;
        this._statisticsConfigurations.internalValue = config.statisticsConfigurations;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // creation_date - computed: true, optional: false, required: false
    public get creationDate() {
        return this.getStringAttribute('creation_date');
    }

    // exclude_filters - computed: true, optional: true, required: false
    private _excludeFilters = new CcMetricStream.MetricStreamFilterPropertyList(this, "exclude_filters", false);
    public get excludeFilters() {
        return this._excludeFilters;
    }
    public putExcludeFilters(value: CcMetricStream.MetricStreamFilterProperty[] | cdktn.IResolvable) {
        this._excludeFilters.internalValue = value;
    }
    public resetExcludeFilters() {
        this._excludeFilters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get excludeFiltersInput() {
        return this._excludeFilters.internalValue;
    }

    // firehose_arn - computed: true, optional: true, required: false
    private _firehoseArn?: string; 
    public get firehoseArn() {
        return this.getStringAttribute('firehose_arn');
    }
    public set firehoseArn(value: string) {
        this._firehoseArn = value;
    }
    public resetFirehoseArn() {
        this._firehoseArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get firehoseArnInput() {
        return this._firehoseArn;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // include_filters - computed: true, optional: true, required: false
    private _includeFilters = new CcMetricStream.IncludeFiltersPropertyList(this, "include_filters", false);
    public get includeFilters() {
        return this._includeFilters;
    }
    public putIncludeFilters(value: CcMetricStream.IncludeFiltersProperty[] | cdktn.IResolvable) {
        this._includeFilters.internalValue = value;
    }
    public resetIncludeFilters() {
        this._includeFilters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get includeFiltersInput() {
        return this._includeFilters.internalValue;
    }

    // include_linked_accounts_metrics - computed: true, optional: true, required: false
    private _includeLinkedAccountsMetrics?: boolean | cdktn.IResolvable; 
    public get includeLinkedAccountsMetrics() {
        return this.getBooleanAttribute('include_linked_accounts_metrics');
    }
    public set includeLinkedAccountsMetrics(value: boolean | cdktn.IResolvable) {
        this._includeLinkedAccountsMetrics = value;
    }
    public resetIncludeLinkedAccountsMetrics() {
        this._includeLinkedAccountsMetrics = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get includeLinkedAccountsMetricsInput() {
        return this._includeLinkedAccountsMetrics;
    }

    // last_update_date - computed: true, optional: false, required: false
    public get lastUpdateDate() {
        return this.getStringAttribute('last_update_date');
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

    // output_format - computed: true, optional: true, required: false
    private _outputFormat?: string; 
    public get outputFormat() {
        return this.getStringAttribute('output_format');
    }
    public set outputFormat(value: string) {
        this._outputFormat = value;
    }
    public resetOutputFormat() {
        this._outputFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outputFormatInput() {
        return this._outputFormat;
    }

    // role_arn - computed: true, optional: true, required: false
    private _roleArn?: string; 
    public get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
        this._roleArn = value;
    }
    public resetRoleArn() {
        this._roleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
        return this._roleArn;
    }

    // state - computed: true, optional: false, required: false
    public get state() {
        return this.getStringAttribute('state');
    }

    // statistics_configurations - computed: true, optional: true, required: false
    private _statisticsConfigurations = new CcMetricStream.MetricStreamStatisticsConfigurationPropertyList(this, "statistics_configurations", false);
    public get statisticsConfigurations() {
        return this._statisticsConfigurations;
    }
    public putStatisticsConfigurations(value: CcMetricStream.MetricStreamStatisticsConfigurationProperty[] | cdktn.IResolvable) {
        this._statisticsConfigurations.internalValue = value;
    }
    public resetStatisticsConfigurations() {
        this._statisticsConfigurations.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statisticsConfigurationsInput() {
        return this._statisticsConfigurations.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcMetricStream.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcMetricStream.TagProperty[] | cdktn.IResolvable) {
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
            exclude_filters: cdktn.listMapper(ccMetricStreamMetricStreamFilterPropertyToTerraform, false)(this._excludeFilters.internalValue),
            firehose_arn: cdktn.stringToTerraform(this._firehoseArn),
            include_filters: cdktn.listMapper(ccMetricStreamIncludeFiltersPropertyToTerraform, false)(this._includeFilters.internalValue),
            include_linked_accounts_metrics: cdktn.booleanToTerraform(this._includeLinkedAccountsMetrics),
            name: cdktn.stringToTerraform(this._name),
            output_format: cdktn.stringToTerraform(this._outputFormat),
            role_arn: cdktn.stringToTerraform(this._roleArn),
            statistics_configurations: cdktn.listMapper(ccMetricStreamMetricStreamStatisticsConfigurationPropertyToTerraform, false)(this._statisticsConfigurations.internalValue),
            tags: cdktn.listMapper(ccMetricStreamTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            exclude_filters: {
                value: cdktn.listMapperHcl(ccMetricStreamMetricStreamFilterPropertyToHclTerraform, false)(this._excludeFilters.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcMetricStream.MetricStreamFilterPropertyList",
            },
            firehose_arn: {
                value: cdktn.stringToHclTerraform(this._firehoseArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            include_filters: {
                value: cdktn.listMapperHcl(ccMetricStreamIncludeFiltersPropertyToHclTerraform, false)(this._includeFilters.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcMetricStream.IncludeFiltersPropertyList",
            },
            include_linked_accounts_metrics: {
                value: cdktn.booleanToHclTerraform(this._includeLinkedAccountsMetrics),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            output_format: {
                value: cdktn.stringToHclTerraform(this._outputFormat),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            role_arn: {
                value: cdktn.stringToHclTerraform(this._roleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            statistics_configurations: {
                value: cdktn.listMapperHcl(ccMetricStreamMetricStreamStatisticsConfigurationPropertyToHclTerraform, false)(this._statisticsConfigurations.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcMetricStream.MetricStreamStatisticsConfigurationPropertyList",
            },
            tags: {
                value: cdktn.listMapperHcl(ccMetricStreamTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcMetricStream.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccMetricStreamMetricStreamFilterPropertyToTerraform(struct?: CcMetricStream.MetricStreamFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        metric_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.metricNames),
        namespace: cdktn.stringToTerraform(struct!.namespace),
    }
}


export function ccMetricStreamMetricStreamFilterPropertyToHclTerraform(struct?: CcMetricStream.MetricStreamFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        metric_names: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.metricNames),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        namespace: {
            value: cdktn.stringToHclTerraform(struct!.namespace),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMetricStreamIncludeFiltersPropertyToTerraform(struct?: CcMetricStream.IncludeFiltersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        metric_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.metricNames),
        namespace: cdktn.stringToTerraform(struct!.namespace),
    }
}


export function ccMetricStreamIncludeFiltersPropertyToHclTerraform(struct?: CcMetricStream.IncludeFiltersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        metric_names: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.metricNames),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        namespace: {
            value: cdktn.stringToHclTerraform(struct!.namespace),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMetricStreamMetricStreamStatisticsMetricPropertyToTerraform(struct?: CcMetricStream.MetricStreamStatisticsMetricProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        metric_name: cdktn.stringToTerraform(struct!.metricName),
        namespace: cdktn.stringToTerraform(struct!.namespace),
    }
}


export function ccMetricStreamMetricStreamStatisticsMetricPropertyToHclTerraform(struct?: CcMetricStream.MetricStreamStatisticsMetricProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        metric_name: {
            value: cdktn.stringToHclTerraform(struct!.metricName),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMetricStreamMetricStreamStatisticsConfigurationPropertyToTerraform(struct?: CcMetricStream.MetricStreamStatisticsConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        additional_statistics: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.additionalStatistics),
        include_metrics: cdktn.listMapper(ccMetricStreamMetricStreamStatisticsMetricPropertyToTerraform, false)(struct!.includeMetrics),
    }
}


export function ccMetricStreamMetricStreamStatisticsConfigurationPropertyToHclTerraform(struct?: CcMetricStream.MetricStreamStatisticsConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        additional_statistics: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.additionalStatistics),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        include_metrics: {
            value: cdktn.listMapperHcl(ccMetricStreamMetricStreamStatisticsMetricPropertyToHclTerraform, false)(struct!.includeMetrics),
            isBlock: true,
            type: "list",
            storageClassType: "MetricStreamStatisticsMetricPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccMetricStreamTagPropertyToTerraform(struct?: CcMetricStream.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccMetricStreamTagPropertyToHclTerraform(struct?: CcMetricStream.TagProperty | cdktn.IResolvable): any {
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


export namespace CcMetricStream {
export interface MetricStreamFilterProperty {
    /**
    * Only metrics with MetricNames matching these values will be streamed. Must be set together with Namespace.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudwatch_metric_stream#metric_names CcMetricStream#metric_names}
    */
    readonly metricNames?: string[];
    /**
    * Only metrics with Namespace matching this value will be streamed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudwatch_metric_stream#namespace CcMetricStream#namespace}
    */
    readonly namespace?: string;
}
export class MetricStreamFilterPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): MetricStreamFilterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._metricNames !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricNames = this._metricNames;
        }
        if (this._namespace !== undefined) {
            hasAnyValues = true;
            internalValueResult.namespace = this._namespace;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MetricStreamFilterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._metricNames = undefined;
            this._namespace = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._metricNames = value.metricNames;
            this._namespace = value.namespace;
        }
    }

    // metric_names - computed: true, optional: true, required: false
    private _metricNames?: string[]; 
    public get metricNames() {
        return this.getListAttribute('metric_names');
    }
    public set metricNames(value: string[]) {
        this._metricNames = value;
    }
    public resetMetricNames() {
        this._metricNames = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricNamesInput() {
        return this._metricNames;
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
}

export class MetricStreamFilterPropertyList extends cdktn.ComplexList {
    public internalValue? : MetricStreamFilterProperty[] | cdktn.IResolvable

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
    public get(index: number): MetricStreamFilterPropertyOutputReference {
        return new MetricStreamFilterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface IncludeFiltersProperty {
    /**
    * Only metrics with MetricNames matching these values will be streamed. Must be set together with Namespace.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudwatch_metric_stream#metric_names CcMetricStream#metric_names}
    */
    readonly metricNames?: string[];
    /**
    * Only metrics with Namespace matching this value will be streamed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudwatch_metric_stream#namespace CcMetricStream#namespace}
    */
    readonly namespace?: string;
}
export class IncludeFiltersPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): IncludeFiltersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._metricNames !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricNames = this._metricNames;
        }
        if (this._namespace !== undefined) {
            hasAnyValues = true;
            internalValueResult.namespace = this._namespace;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IncludeFiltersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._metricNames = undefined;
            this._namespace = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._metricNames = value.metricNames;
            this._namespace = value.namespace;
        }
    }

    // metric_names - computed: true, optional: true, required: false
    private _metricNames?: string[]; 
    public get metricNames() {
        return this.getListAttribute('metric_names');
    }
    public set metricNames(value: string[]) {
        this._metricNames = value;
    }
    public resetMetricNames() {
        this._metricNames = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricNamesInput() {
        return this._metricNames;
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
}

export class IncludeFiltersPropertyList extends cdktn.ComplexList {
    public internalValue? : IncludeFiltersProperty[] | cdktn.IResolvable

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
    public get(index: number): IncludeFiltersPropertyOutputReference {
        return new IncludeFiltersPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface MetricStreamStatisticsMetricProperty {
    /**
    * The name of the metric.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudwatch_metric_stream#metric_name CcMetricStream#metric_name}
    */
    readonly metricName?: string;
    /**
    * The namespace of the metric.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudwatch_metric_stream#namespace CcMetricStream#namespace}
    */
    readonly namespace?: string;
}
export class MetricStreamStatisticsMetricPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): MetricStreamStatisticsMetricProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._metricName !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricName = this._metricName;
        }
        if (this._namespace !== undefined) {
            hasAnyValues = true;
            internalValueResult.namespace = this._namespace;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MetricStreamStatisticsMetricProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._metricName = undefined;
            this._namespace = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._metricName = value.metricName;
            this._namespace = value.namespace;
        }
    }

    // metric_name - computed: true, optional: true, required: false
    private _metricName?: string; 
    public get metricName() {
        return this.getStringAttribute('metric_name');
    }
    public set metricName(value: string) {
        this._metricName = value;
    }
    public resetMetricName() {
        this._metricName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricNameInput() {
        return this._metricName;
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
}

export class MetricStreamStatisticsMetricPropertyList extends cdktn.ComplexList {
    public internalValue? : MetricStreamStatisticsMetricProperty[] | cdktn.IResolvable

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
    public get(index: number): MetricStreamStatisticsMetricPropertyOutputReference {
        return new MetricStreamStatisticsMetricPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface MetricStreamStatisticsConfigurationProperty {
    /**
    * The additional statistics to stream for the metrics listed in IncludeMetrics.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudwatch_metric_stream#additional_statistics CcMetricStream#additional_statistics}
    */
    readonly additionalStatistics?: string[];
    /**
    * An array that defines the metrics that are to have additional statistics streamed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudwatch_metric_stream#include_metrics CcMetricStream#include_metrics}
    */
    readonly includeMetrics?: MetricStreamStatisticsMetricProperty[] | cdktn.IResolvable;
}
export class MetricStreamStatisticsConfigurationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): MetricStreamStatisticsConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._additionalStatistics !== undefined) {
            hasAnyValues = true;
            internalValueResult.additionalStatistics = this._additionalStatistics;
        }
        if (this._includeMetrics?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.includeMetrics = this._includeMetrics?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MetricStreamStatisticsConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._additionalStatistics = undefined;
            this._includeMetrics.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._additionalStatistics = value.additionalStatistics;
            this._includeMetrics.internalValue = value.includeMetrics;
        }
    }

    // additional_statistics - computed: true, optional: true, required: false
    private _additionalStatistics?: string[]; 
    public get additionalStatistics() {
        return this.getListAttribute('additional_statistics');
    }
    public set additionalStatistics(value: string[]) {
        this._additionalStatistics = value;
    }
    public resetAdditionalStatistics() {
        this._additionalStatistics = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get additionalStatisticsInput() {
        return this._additionalStatistics;
    }

    // include_metrics - computed: true, optional: true, required: false
    private _includeMetrics = new MetricStreamStatisticsMetricPropertyList(this, "include_metrics", false);
    public get includeMetrics() {
        return this._includeMetrics;
    }
    public putIncludeMetrics(value: MetricStreamStatisticsMetricProperty[] | cdktn.IResolvable) {
        this._includeMetrics.internalValue = value;
    }
    public resetIncludeMetrics() {
        this._includeMetrics.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get includeMetricsInput() {
        return this._includeMetrics.internalValue;
    }
}

export class MetricStreamStatisticsConfigurationPropertyList extends cdktn.ComplexList {
    public internalValue? : MetricStreamStatisticsConfigurationProperty[] | cdktn.IResolvable

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
    public get(index: number): MetricStreamStatisticsConfigurationPropertyOutputReference {
        return new MetricStreamStatisticsConfigurationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * A unique identifier for the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudwatch_metric_stream#key CcMetricStream#key}
    */
    readonly key?: string;
    /**
    * String which you can use to describe or define the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cloudwatch_metric_stream#value CcMetricStream#value}
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
