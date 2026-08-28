// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_metric_filter

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcMetricFilterProps extends cdktn.TerraformMetaArguments {
    /**
    * This parameter is valid only for log groups that have an active log transformer. For more information about log transformers, see [PutTransformer](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutTransformer.html).
    *  If this value is ``true``, the metric filter is applied on the transformed version of the log events instead of the original ingested log events.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_metric_filter#apply_on_transformed_logs CcMetricFilter#apply_on_transformed_logs}
    */
    readonly applyOnTransformedLogs?: boolean | cdktn.IResolvable;
    /**
    * The list of system fields that are emitted as additional dimensions in the generated metrics. Returns the ``emitSystemFieldDimensions`` value if it was specified when the metric filter was created.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_metric_filter#emit_system_field_dimensions CcMetricFilter#emit_system_field_dimensions}
    */
    readonly emitSystemFieldDimensions?: string[];
    /**
    * The filter expression that specifies which log events are processed by this metric filter based on system fields. Returns the ``fieldSelectionCriteria`` value if it was specified when the metric filter was created.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_metric_filter#field_selection_criteria CcMetricFilter#field_selection_criteria}
    */
    readonly fieldSelectionCriteria?: string;
    /**
    * The name of the metric filter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_metric_filter#filter_name CcMetricFilter#filter_name}
    */
    readonly filterName?: string;
    /**
    * A filter pattern for extracting metric data out of ingested log events. For more information, see [Filter and Pattern Syntax](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/FilterAndPatternSyntax.html).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_metric_filter#filter_pattern CcMetricFilter#filter_pattern}
    */
    readonly filterPattern: string;
    /**
    * The name of an existing log group that you want to associate with this metric filter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_metric_filter#log_group_name CcMetricFilter#log_group_name}
    */
    readonly logGroupName: string;
    /**
    * The metric transformations.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_metric_filter#metric_transformations CcMetricFilter#metric_transformations}
    */
    readonly metricTransformations: CcMetricFilter.MetricTransformationProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_metric_filter awscc_logs_metric_filter}
*/
export class CcMetricFilter extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_logs_metric_filter";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcMetricFilter resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcMetricFilter to import
    * @param importFromId The id of the existing CcMetricFilter that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_metric_filter#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcMetricFilter to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_logs_metric_filter", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_metric_filter awscc_logs_metric_filter} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcMetricFilterProps
    */
    public constructor(scope: Construct, id: string, config: CcMetricFilterProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_logs_metric_filter',
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
        this._applyOnTransformedLogs = config.applyOnTransformedLogs;
        this._emitSystemFieldDimensions = config.emitSystemFieldDimensions;
        this._fieldSelectionCriteria = config.fieldSelectionCriteria;
        this._filterName = config.filterName;
        this._filterPattern = config.filterPattern;
        this._logGroupName = config.logGroupName;
        this._metricTransformations.internalValue = config.metricTransformations;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // apply_on_transformed_logs - computed: true, optional: true, required: false
    private _applyOnTransformedLogs?: boolean | cdktn.IResolvable; 
    public get applyOnTransformedLogs() {
        return this.getBooleanAttribute('apply_on_transformed_logs');
    }
    public set applyOnTransformedLogs(value: boolean | cdktn.IResolvable) {
        this._applyOnTransformedLogs = value;
    }
    public resetApplyOnTransformedLogs() {
        this._applyOnTransformedLogs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get applyOnTransformedLogsInput() {
        return this._applyOnTransformedLogs;
    }

    // emit_system_field_dimensions - computed: true, optional: true, required: false
    private _emitSystemFieldDimensions?: string[]; 
    public get emitSystemFieldDimensions() {
        return this.getListAttribute('emit_system_field_dimensions');
    }
    public set emitSystemFieldDimensions(value: string[]) {
        this._emitSystemFieldDimensions = value;
    }
    public resetEmitSystemFieldDimensions() {
        this._emitSystemFieldDimensions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get emitSystemFieldDimensionsInput() {
        return this._emitSystemFieldDimensions;
    }

    // field_selection_criteria - computed: true, optional: true, required: false
    private _fieldSelectionCriteria?: string; 
    public get fieldSelectionCriteria() {
        return this.getStringAttribute('field_selection_criteria');
    }
    public set fieldSelectionCriteria(value: string) {
        this._fieldSelectionCriteria = value;
    }
    public resetFieldSelectionCriteria() {
        this._fieldSelectionCriteria = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get fieldSelectionCriteriaInput() {
        return this._fieldSelectionCriteria;
    }

    // filter_name - computed: true, optional: true, required: false
    private _filterName?: string; 
    public get filterName() {
        return this.getStringAttribute('filter_name');
    }
    public set filterName(value: string) {
        this._filterName = value;
    }
    public resetFilterName() {
        this._filterName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterNameInput() {
        return this._filterName;
    }

    // filter_pattern - computed: false, optional: false, required: true
    private _filterPattern?: string; 
    public get filterPattern() {
        return this.getStringAttribute('filter_pattern');
    }
    public set filterPattern(value: string) {
        this._filterPattern = value;
    }
    // Temporarily expose input value. Use with caution.
    public get filterPatternInput() {
        return this._filterPattern;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // log_group_name - computed: false, optional: false, required: true
    private _logGroupName?: string; 
    public get logGroupName() {
        return this.getStringAttribute('log_group_name');
    }
    public set logGroupName(value: string) {
        this._logGroupName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get logGroupNameInput() {
        return this._logGroupName;
    }

    // metric_transformations - computed: false, optional: false, required: true
    private _metricTransformations = new CcMetricFilter.MetricTransformationPropertyList(this, "metric_transformations", false);
    public get metricTransformations() {
        return this._metricTransformations;
    }
    public putMetricTransformations(value: CcMetricFilter.MetricTransformationProperty[] | cdktn.IResolvable) {
        this._metricTransformations.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get metricTransformationsInput() {
        return this._metricTransformations.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            apply_on_transformed_logs: cdktn.booleanToTerraform(this._applyOnTransformedLogs),
            emit_system_field_dimensions: cdktn.listMapper(cdktn.stringToTerraform, false)(this._emitSystemFieldDimensions),
            field_selection_criteria: cdktn.stringToTerraform(this._fieldSelectionCriteria),
            filter_name: cdktn.stringToTerraform(this._filterName),
            filter_pattern: cdktn.stringToTerraform(this._filterPattern),
            log_group_name: cdktn.stringToTerraform(this._logGroupName),
            metric_transformations: cdktn.listMapper(ccMetricFilterMetricTransformationPropertyToTerraform, false)(this._metricTransformations.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            apply_on_transformed_logs: {
                value: cdktn.booleanToHclTerraform(this._applyOnTransformedLogs),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            emit_system_field_dimensions: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._emitSystemFieldDimensions),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            field_selection_criteria: {
                value: cdktn.stringToHclTerraform(this._fieldSelectionCriteria),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            filter_name: {
                value: cdktn.stringToHclTerraform(this._filterName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            filter_pattern: {
                value: cdktn.stringToHclTerraform(this._filterPattern),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            log_group_name: {
                value: cdktn.stringToHclTerraform(this._logGroupName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            metric_transformations: {
                value: cdktn.listMapperHcl(ccMetricFilterMetricTransformationPropertyToHclTerraform, false)(this._metricTransformations.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcMetricFilter.MetricTransformationPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccMetricFilterDimensionPropertyToTerraform(struct?: CcMetricFilter.DimensionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccMetricFilterDimensionPropertyToHclTerraform(struct?: CcMetricFilter.DimensionProperty | cdktn.IResolvable): any {
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


export function ccMetricFilterMetricTransformationPropertyToTerraform(struct?: CcMetricFilter.MetricTransformationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        default_value: cdktn.numberToTerraform(struct!.defaultValue),
        dimensions: cdktn.listMapper(ccMetricFilterDimensionPropertyToTerraform, false)(struct!.dimensions),
        metric_name: cdktn.stringToTerraform(struct!.metricName),
        metric_namespace: cdktn.stringToTerraform(struct!.metricNamespace),
        metric_value: cdktn.stringToTerraform(struct!.metricValue),
        unit: cdktn.stringToTerraform(struct!.unit),
    }
}


export function ccMetricFilterMetricTransformationPropertyToHclTerraform(struct?: CcMetricFilter.MetricTransformationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        default_value: {
            value: cdktn.numberToHclTerraform(struct!.defaultValue),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        dimensions: {
            value: cdktn.listMapperHcl(ccMetricFilterDimensionPropertyToHclTerraform, false)(struct!.dimensions),
            isBlock: true,
            type: "set",
            storageClassType: "DimensionPropertyList",
        },
        metric_name: {
            value: cdktn.stringToHclTerraform(struct!.metricName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        metric_namespace: {
            value: cdktn.stringToHclTerraform(struct!.metricNamespace),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        metric_value: {
            value: cdktn.stringToHclTerraform(struct!.metricValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        unit: {
            value: cdktn.stringToHclTerraform(struct!.unit),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcMetricFilter {
export interface DimensionProperty {
    /**
    * The name for the CW metric dimension that the metric filter creates.
    *  Dimension names must contain only ASCII characters, must include at least one non-whitespace character, and cannot start with a colon (:).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_metric_filter#key CcMetricFilter#key}
    */
    readonly key?: string;
    /**
    * The log event field that will contain the value for this dimension. This dimension will only be published for a metric if the value is found in the log event. For example, ``$.eventType`` for JSON log events, or ``$server`` for space-delimited log events.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_metric_filter#value CcMetricFilter#value}
    */
    readonly value?: string;
}
export class DimensionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): DimensionProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: DimensionProperty | cdktn.IResolvable | undefined) {
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

export class DimensionPropertyList extends cdktn.ComplexList {
    public internalValue? : DimensionProperty[] | cdktn.IResolvable

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
    public get(index: number): DimensionPropertyOutputReference {
        return new DimensionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface MetricTransformationProperty {
    /**
    * (Optional) The value to emit when a filter pattern does not match a log event. This value can be null.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_metric_filter#default_value CcMetricFilter#default_value}
    */
    readonly defaultValue?: number;
    /**
    * The fields to use as dimensions for the metric. One metric filter can include as many as three dimensions.
    *   Metrics extracted from log events are charged as custom metrics. To prevent unexpected high charges, do not specify high-cardinality fields such as ``IPAddress`` or ``requestID`` as dimensions. Each different value found for a dimension is treated as a separate metric and accrues charges as a separate custom metric. 
    *  CloudWatch Logs disables a metric filter if it generates 1000 different name/value pairs for your specified dimensions within a certain amount of time. This helps to prevent accidental high charges.
    *  You can also set up a billing alarm to alert you if your charges are higher than expected. For more information, see [Creating a Billing Alarm to Monitor Your Estimated Charges](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/monitor_estimated_charges_with_cloudwatch.html).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_metric_filter#dimensions CcMetricFilter#dimensions}
    */
    readonly dimensions?: DimensionProperty[] | cdktn.IResolvable;
    /**
    * The name of the CloudWatch metric.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_metric_filter#metric_name CcMetricFilter#metric_name}
    */
    readonly metricName: string;
    /**
    * A custom namespace to contain your metric in CloudWatch. Use namespaces to group together metrics that are similar. For more information, see [Namespaces](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Namespace).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_metric_filter#metric_namespace CcMetricFilter#metric_namespace}
    */
    readonly metricNamespace: string;
    /**
    * The value that is published to the CloudWatch metric. For example, if you're counting the occurrences of a particular term like ``Error``, specify 1 for the metric value. If you're counting the number of bytes transferred, reference the value that is in the log event by using $. followed by the name of the field that you specified in the filter pattern, such as ``$.size``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_metric_filter#metric_value CcMetricFilter#metric_value}
    */
    readonly metricValue: string;
    /**
    * The unit to assign to the metric. If you omit this, the unit is set as ``None``.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_metric_filter#unit CcMetricFilter#unit}
    */
    readonly unit?: string;
}
export class MetricTransformationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): MetricTransformationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._defaultValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultValue = this._defaultValue;
        }
        if (this._dimensions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dimensions = this._dimensions?.internalValue;
        }
        if (this._metricName !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricName = this._metricName;
        }
        if (this._metricNamespace !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricNamespace = this._metricNamespace;
        }
        if (this._metricValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricValue = this._metricValue;
        }
        if (this._unit !== undefined) {
            hasAnyValues = true;
            internalValueResult.unit = this._unit;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MetricTransformationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._defaultValue = undefined;
            this._dimensions.internalValue = undefined;
            this._metricName = undefined;
            this._metricNamespace = undefined;
            this._metricValue = undefined;
            this._unit = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._defaultValue = value.defaultValue;
            this._dimensions.internalValue = value.dimensions;
            this._metricName = value.metricName;
            this._metricNamespace = value.metricNamespace;
            this._metricValue = value.metricValue;
            this._unit = value.unit;
        }
    }

    // default_value - computed: true, optional: true, required: false
    private _defaultValue?: number; 
    public get defaultValue() {
        return this.getNumberAttribute('default_value');
    }
    public set defaultValue(value: number) {
        this._defaultValue = value;
    }
    public resetDefaultValue() {
        this._defaultValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultValueInput() {
        return this._defaultValue;
    }

    // dimensions - computed: true, optional: true, required: false
    private _dimensions = new DimensionPropertyList(this, "dimensions", true);
    public get dimensions() {
        return this._dimensions;
    }
    public putDimensions(value: DimensionProperty[] | cdktn.IResolvable) {
        this._dimensions.internalValue = value;
    }
    public resetDimensions() {
        this._dimensions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dimensionsInput() {
        return this._dimensions.internalValue;
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

    // metric_namespace - computed: false, optional: false, required: true
    private _metricNamespace?: string; 
    public get metricNamespace() {
        return this.getStringAttribute('metric_namespace');
    }
    public set metricNamespace(value: string) {
        this._metricNamespace = value;
    }
    // Temporarily expose input value. Use with caution.
    public get metricNamespaceInput() {
        return this._metricNamespace;
    }

    // metric_value - computed: false, optional: false, required: true
    private _metricValue?: string; 
    public get metricValue() {
        return this.getStringAttribute('metric_value');
    }
    public set metricValue(value: string) {
        this._metricValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get metricValueInput() {
        return this._metricValue;
    }

    // unit - computed: true, optional: true, required: false
    private _unit?: string; 
    public get unit() {
        return this.getStringAttribute('unit');
    }
    public set unit(value: string) {
        this._unit = value;
    }
    public resetUnit() {
        this._unit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get unitInput() {
        return this._unit;
    }
}

export class MetricTransformationPropertyList extends cdktn.ComplexList {
    public internalValue? : MetricTransformationProperty[] | cdktn.IResolvable

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
    public get(index: number): MetricTransformationPropertyOutputReference {
        return new MetricTransformationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
