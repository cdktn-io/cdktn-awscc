// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcAnomalyDetectorProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#configuration CcAnomalyDetector#configuration}
    */
    readonly configuration?: CcAnomalyDetector.ConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#dimensions CcAnomalyDetector#dimensions}
    */
    readonly dimensions?: CcAnomalyDetector.DimensionProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#metric_characteristics CcAnomalyDetector#metric_characteristics}
    */
    readonly metricCharacteristics?: CcAnomalyDetector.MetricCharacteristicsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#metric_math_anomaly_detector CcAnomalyDetector#metric_math_anomaly_detector}
    */
    readonly metricMathAnomalyDetector?: CcAnomalyDetector.MetricMathAnomalyDetectorProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#metric_name CcAnomalyDetector#metric_name}
    */
    readonly metricName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#namespace CcAnomalyDetector#namespace}
    */
    readonly namespace?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#single_metric_anomaly_detector CcAnomalyDetector#single_metric_anomaly_detector}
    */
    readonly singleMetricAnomalyDetector?: CcAnomalyDetector.SingleMetricAnomalyDetectorProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#stat CcAnomalyDetector#stat}
    */
    readonly stat?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector awscc_cloudwatch_anomaly_detector}
*/
export class CcAnomalyDetector extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_cloudwatch_anomaly_detector";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcAnomalyDetector resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcAnomalyDetector to import
    * @param importFromId The id of the existing CcAnomalyDetector that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcAnomalyDetector to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cloudwatch_anomaly_detector", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector awscc_cloudwatch_anomaly_detector} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcAnomalyDetectorProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcAnomalyDetectorProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_cloudwatch_anomaly_detector',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.105.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._configuration.internalValue = config.configuration;
        this._dimensions.internalValue = config.dimensions;
        this._metricCharacteristics.internalValue = config.metricCharacteristics;
        this._metricMathAnomalyDetector.internalValue = config.metricMathAnomalyDetector;
        this._metricName = config.metricName;
        this._namespace = config.namespace;
        this._singleMetricAnomalyDetector.internalValue = config.singleMetricAnomalyDetector;
        this._stat = config.stat;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // anomaly_detector_id - computed: true, optional: false, required: false
    public get anomalyDetectorId() {
        return this.getStringAttribute('anomaly_detector_id');
    }

    // configuration - computed: true, optional: true, required: false
    private _configuration = new CcAnomalyDetector.ConfigurationPropertyOutputReference(this, "configuration");
    public get configuration() {
        return this._configuration;
    }
    public putConfiguration(value: CcAnomalyDetector.ConfigurationProperty) {
        this._configuration.internalValue = value;
    }
    public resetConfiguration() {
        this._configuration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get configurationInput() {
        return this._configuration.internalValue;
    }

    // dimensions - computed: true, optional: true, required: false
    private _dimensions = new CcAnomalyDetector.DimensionPropertyList(this, "dimensions", false);
    public get dimensions() {
        return this._dimensions;
    }
    public putDimensions(value: CcAnomalyDetector.DimensionProperty[] | cdktn.IResolvable) {
        this._dimensions.internalValue = value;
    }
    public resetDimensions() {
        this._dimensions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dimensionsInput() {
        return this._dimensions.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // metric_characteristics - computed: true, optional: true, required: false
    private _metricCharacteristics = new CcAnomalyDetector.MetricCharacteristicsPropertyOutputReference(this, "metric_characteristics");
    public get metricCharacteristics() {
        return this._metricCharacteristics;
    }
    public putMetricCharacteristics(value: CcAnomalyDetector.MetricCharacteristicsProperty) {
        this._metricCharacteristics.internalValue = value;
    }
    public resetMetricCharacteristics() {
        this._metricCharacteristics.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricCharacteristicsInput() {
        return this._metricCharacteristics.internalValue;
    }

    // metric_math_anomaly_detector - computed: true, optional: true, required: false
    private _metricMathAnomalyDetector = new CcAnomalyDetector.MetricMathAnomalyDetectorPropertyOutputReference(this, "metric_math_anomaly_detector");
    public get metricMathAnomalyDetector() {
        return this._metricMathAnomalyDetector;
    }
    public putMetricMathAnomalyDetector(value: CcAnomalyDetector.MetricMathAnomalyDetectorProperty) {
        this._metricMathAnomalyDetector.internalValue = value;
    }
    public resetMetricMathAnomalyDetector() {
        this._metricMathAnomalyDetector.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricMathAnomalyDetectorInput() {
        return this._metricMathAnomalyDetector.internalValue;
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

    // single_metric_anomaly_detector - computed: true, optional: true, required: false
    private _singleMetricAnomalyDetector = new CcAnomalyDetector.SingleMetricAnomalyDetectorPropertyOutputReference(this, "single_metric_anomaly_detector");
    public get singleMetricAnomalyDetector() {
        return this._singleMetricAnomalyDetector;
    }
    public putSingleMetricAnomalyDetector(value: CcAnomalyDetector.SingleMetricAnomalyDetectorProperty) {
        this._singleMetricAnomalyDetector.internalValue = value;
    }
    public resetSingleMetricAnomalyDetector() {
        this._singleMetricAnomalyDetector.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get singleMetricAnomalyDetectorInput() {
        return this._singleMetricAnomalyDetector.internalValue;
    }

    // stat - computed: true, optional: true, required: false
    private _stat?: string; 
    public get stat() {
        return this.getStringAttribute('stat');
    }
    public set stat(value: string) {
        this._stat = value;
    }
    public resetStat() {
        this._stat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statInput() {
        return this._stat;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            configuration: ccAnomalyDetectorConfigurationPropertyToTerraform(this._configuration.internalValue),
            dimensions: cdktn.listMapper(ccAnomalyDetectorDimensionPropertyToTerraform, false)(this._dimensions.internalValue),
            metric_characteristics: ccAnomalyDetectorMetricCharacteristicsPropertyToTerraform(this._metricCharacteristics.internalValue),
            metric_math_anomaly_detector: ccAnomalyDetectorMetricMathAnomalyDetectorPropertyToTerraform(this._metricMathAnomalyDetector.internalValue),
            metric_name: cdktn.stringToTerraform(this._metricName),
            namespace: cdktn.stringToTerraform(this._namespace),
            single_metric_anomaly_detector: ccAnomalyDetectorSingleMetricAnomalyDetectorPropertyToTerraform(this._singleMetricAnomalyDetector.internalValue),
            stat: cdktn.stringToTerraform(this._stat),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            configuration: {
                value: ccAnomalyDetectorConfigurationPropertyToHclTerraform(this._configuration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcAnomalyDetector.ConfigurationProperty",
            },
            dimensions: {
                value: cdktn.listMapperHcl(ccAnomalyDetectorDimensionPropertyToHclTerraform, false)(this._dimensions.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcAnomalyDetector.DimensionPropertyList",
            },
            metric_characteristics: {
                value: ccAnomalyDetectorMetricCharacteristicsPropertyToHclTerraform(this._metricCharacteristics.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcAnomalyDetector.MetricCharacteristicsProperty",
            },
            metric_math_anomaly_detector: {
                value: ccAnomalyDetectorMetricMathAnomalyDetectorPropertyToHclTerraform(this._metricMathAnomalyDetector.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcAnomalyDetector.MetricMathAnomalyDetectorProperty",
            },
            metric_name: {
                value: cdktn.stringToHclTerraform(this._metricName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            namespace: {
                value: cdktn.stringToHclTerraform(this._namespace),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            single_metric_anomaly_detector: {
                value: ccAnomalyDetectorSingleMetricAnomalyDetectorPropertyToHclTerraform(this._singleMetricAnomalyDetector.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcAnomalyDetector.SingleMetricAnomalyDetectorProperty",
            },
            stat: {
                value: cdktn.stringToHclTerraform(this._stat),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccAnomalyDetectorRangePropertyToTerraform(struct?: CcAnomalyDetector.RangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        end_time: cdktn.stringToTerraform(struct!.endTime),
        start_time: cdktn.stringToTerraform(struct!.startTime),
    }
}


export function ccAnomalyDetectorRangePropertyToHclTerraform(struct?: CcAnomalyDetector.RangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        end_time: {
            value: cdktn.stringToHclTerraform(struct!.endTime),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        start_time: {
            value: cdktn.stringToHclTerraform(struct!.startTime),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAnomalyDetectorConfigurationPropertyToTerraform(struct?: CcAnomalyDetector.ConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        excluded_time_ranges: cdktn.listMapper(ccAnomalyDetectorRangePropertyToTerraform, false)(struct!.excludedTimeRanges),
        metric_time_zone: cdktn.stringToTerraform(struct!.metricTimeZone),
    }
}


export function ccAnomalyDetectorConfigurationPropertyToHclTerraform(struct?: CcAnomalyDetector.ConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        excluded_time_ranges: {
            value: cdktn.listMapperHcl(ccAnomalyDetectorRangePropertyToHclTerraform, false)(struct!.excludedTimeRanges),
            isBlock: true,
            type: "list",
            storageClassType: "RangePropertyList",
        },
        metric_time_zone: {
            value: cdktn.stringToHclTerraform(struct!.metricTimeZone),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAnomalyDetectorDimensionPropertyToTerraform(struct?: CcAnomalyDetector.DimensionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccAnomalyDetectorDimensionPropertyToHclTerraform(struct?: CcAnomalyDetector.DimensionProperty | cdktn.IResolvable): any {
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


export function ccAnomalyDetectorMetricCharacteristicsPropertyToTerraform(struct?: CcAnomalyDetector.MetricCharacteristicsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        periodic_spikes: cdktn.booleanToTerraform(struct!.periodicSpikes),
    }
}


export function ccAnomalyDetectorMetricCharacteristicsPropertyToHclTerraform(struct?: CcAnomalyDetector.MetricCharacteristicsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        periodic_spikes: {
            value: cdktn.booleanToHclTerraform(struct!.periodicSpikes),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsPropertyToTerraform(struct?: CcAnomalyDetector.MetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsPropertyToHclTerraform(struct?: CcAnomalyDetector.MetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsProperty | cdktn.IResolvable): any {
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


export function ccAnomalyDetectorMetricPropertyToTerraform(struct?: CcAnomalyDetector.MetricProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dimensions: cdktn.listMapper(ccAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsPropertyToTerraform, false)(struct!.dimensions),
        metric_name: cdktn.stringToTerraform(struct!.metricName),
        namespace: cdktn.stringToTerraform(struct!.namespace),
    }
}


export function ccAnomalyDetectorMetricPropertyToHclTerraform(struct?: CcAnomalyDetector.MetricProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        dimensions: {
            value: cdktn.listMapperHcl(ccAnomalyDetectorMetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsPropertyToHclTerraform, false)(struct!.dimensions),
            isBlock: true,
            type: "list",
            storageClassType: "MetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsPropertyList",
        },
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


export function ccAnomalyDetectorMetricStatPropertyToTerraform(struct?: CcAnomalyDetector.MetricStatProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        metric: ccAnomalyDetectorMetricPropertyToTerraform(struct!.metric),
        period: cdktn.numberToTerraform(struct!.period),
        stat: cdktn.stringToTerraform(struct!.stat),
        unit: cdktn.stringToTerraform(struct!.unit),
    }
}


export function ccAnomalyDetectorMetricStatPropertyToHclTerraform(struct?: CcAnomalyDetector.MetricStatProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        metric: {
            value: ccAnomalyDetectorMetricPropertyToHclTerraform(struct!.metric),
            isBlock: true,
            type: "struct",
            storageClassType: "MetricProperty",
        },
        period: {
            value: cdktn.numberToHclTerraform(struct!.period),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        stat: {
            value: cdktn.stringToHclTerraform(struct!.stat),
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


export function ccAnomalyDetectorMetricDataQueryPropertyToTerraform(struct?: CcAnomalyDetector.MetricDataQueryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        account_id: cdktn.stringToTerraform(struct!.accountId),
        expression: cdktn.stringToTerraform(struct!.expression),
        id: cdktn.stringToTerraform(struct!.id),
        label: cdktn.stringToTerraform(struct!.label),
        metric_stat: ccAnomalyDetectorMetricStatPropertyToTerraform(struct!.metricStat),
        period: cdktn.numberToTerraform(struct!.period),
        return_data: cdktn.booleanToTerraform(struct!.returnData),
    }
}


export function ccAnomalyDetectorMetricDataQueryPropertyToHclTerraform(struct?: CcAnomalyDetector.MetricDataQueryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        account_id: {
            value: cdktn.stringToHclTerraform(struct!.accountId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        expression: {
            value: cdktn.stringToHclTerraform(struct!.expression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        id: {
            value: cdktn.stringToHclTerraform(struct!.id),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        label: {
            value: cdktn.stringToHclTerraform(struct!.label),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        metric_stat: {
            value: ccAnomalyDetectorMetricStatPropertyToHclTerraform(struct!.metricStat),
            isBlock: true,
            type: "struct",
            storageClassType: "MetricStatProperty",
        },
        period: {
            value: cdktn.numberToHclTerraform(struct!.period),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        return_data: {
            value: cdktn.booleanToHclTerraform(struct!.returnData),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAnomalyDetectorMetricMathAnomalyDetectorPropertyToTerraform(struct?: CcAnomalyDetector.MetricMathAnomalyDetectorProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        metric_data_queries: cdktn.listMapper(ccAnomalyDetectorMetricDataQueryPropertyToTerraform, false)(struct!.metricDataQueries),
    }
}


export function ccAnomalyDetectorMetricMathAnomalyDetectorPropertyToHclTerraform(struct?: CcAnomalyDetector.MetricMathAnomalyDetectorProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        metric_data_queries: {
            value: cdktn.listMapperHcl(ccAnomalyDetectorMetricDataQueryPropertyToHclTerraform, false)(struct!.metricDataQueries),
            isBlock: true,
            type: "list",
            storageClassType: "MetricDataQueryPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAnomalyDetectorSingleMetricAnomalyDetectorDimensionsPropertyToTerraform(struct?: CcAnomalyDetector.SingleMetricAnomalyDetectorDimensionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccAnomalyDetectorSingleMetricAnomalyDetectorDimensionsPropertyToHclTerraform(struct?: CcAnomalyDetector.SingleMetricAnomalyDetectorDimensionsProperty | cdktn.IResolvable): any {
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


export function ccAnomalyDetectorSingleMetricAnomalyDetectorPropertyToTerraform(struct?: CcAnomalyDetector.SingleMetricAnomalyDetectorProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        account_id: cdktn.stringToTerraform(struct!.accountId),
        dimensions: cdktn.listMapper(ccAnomalyDetectorSingleMetricAnomalyDetectorDimensionsPropertyToTerraform, false)(struct!.dimensions),
        metric_name: cdktn.stringToTerraform(struct!.metricName),
        namespace: cdktn.stringToTerraform(struct!.namespace),
        stat: cdktn.stringToTerraform(struct!.stat),
    }
}


export function ccAnomalyDetectorSingleMetricAnomalyDetectorPropertyToHclTerraform(struct?: CcAnomalyDetector.SingleMetricAnomalyDetectorProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        account_id: {
            value: cdktn.stringToHclTerraform(struct!.accountId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        dimensions: {
            value: cdktn.listMapperHcl(ccAnomalyDetectorSingleMetricAnomalyDetectorDimensionsPropertyToHclTerraform, false)(struct!.dimensions),
            isBlock: true,
            type: "list",
            storageClassType: "SingleMetricAnomalyDetectorDimensionsPropertyList",
        },
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
        stat: {
            value: cdktn.stringToHclTerraform(struct!.stat),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcAnomalyDetector {
export interface RangeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#end_time CcAnomalyDetector#end_time}
    */
    readonly endTime?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#start_time CcAnomalyDetector#start_time}
    */
    readonly startTime?: string;
}
export class RangePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): RangeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._endTime !== undefined) {
            hasAnyValues = true;
            internalValueResult.endTime = this._endTime;
        }
        if (this._startTime !== undefined) {
            hasAnyValues = true;
            internalValueResult.startTime = this._startTime;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RangeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._endTime = undefined;
            this._startTime = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._endTime = value.endTime;
            this._startTime = value.startTime;
        }
    }

    // end_time - computed: true, optional: true, required: false
    private _endTime?: string; 
    public get endTime() {
        return this.getStringAttribute('end_time');
    }
    public set endTime(value: string) {
        this._endTime = value;
    }
    public resetEndTime() {
        this._endTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endTimeInput() {
        return this._endTime;
    }

    // start_time - computed: true, optional: true, required: false
    private _startTime?: string; 
    public get startTime() {
        return this.getStringAttribute('start_time');
    }
    public set startTime(value: string) {
        this._startTime = value;
    }
    public resetStartTime() {
        this._startTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startTimeInput() {
        return this._startTime;
    }
}

export class RangePropertyList extends cdktn.ComplexList {
    public internalValue? : RangeProperty[] | cdktn.IResolvable

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
    public get(index: number): RangePropertyOutputReference {
        return new RangePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#excluded_time_ranges CcAnomalyDetector#excluded_time_ranges}
    */
    readonly excludedTimeRanges?: RangeProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#metric_time_zone CcAnomalyDetector#metric_time_zone}
    */
    readonly metricTimeZone?: string;
}
export class ConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._excludedTimeRanges?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.excludedTimeRanges = this._excludedTimeRanges?.internalValue;
        }
        if (this._metricTimeZone !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricTimeZone = this._metricTimeZone;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._excludedTimeRanges.internalValue = undefined;
            this._metricTimeZone = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._excludedTimeRanges.internalValue = value.excludedTimeRanges;
            this._metricTimeZone = value.metricTimeZone;
        }
    }

    // excluded_time_ranges - computed: true, optional: true, required: false
    private _excludedTimeRanges = new RangePropertyList(this, "excluded_time_ranges", false);
    public get excludedTimeRanges() {
        return this._excludedTimeRanges;
    }
    public putExcludedTimeRanges(value: RangeProperty[] | cdktn.IResolvable) {
        this._excludedTimeRanges.internalValue = value;
    }
    public resetExcludedTimeRanges() {
        this._excludedTimeRanges.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get excludedTimeRangesInput() {
        return this._excludedTimeRanges.internalValue;
    }

    // metric_time_zone - computed: true, optional: true, required: false
    private _metricTimeZone?: string; 
    public get metricTimeZone() {
        return this.getStringAttribute('metric_time_zone');
    }
    public set metricTimeZone(value: string) {
        this._metricTimeZone = value;
    }
    public resetMetricTimeZone() {
        this._metricTimeZone = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricTimeZoneInput() {
        return this._metricTimeZone;
    }
}
export interface DimensionProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#name CcAnomalyDetector#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#value CcAnomalyDetector#value}
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

    public set internalValue(value: DimensionProperty | cdktn.IResolvable | undefined) {
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
export interface MetricCharacteristicsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#periodic_spikes CcAnomalyDetector#periodic_spikes}
    */
    readonly periodicSpikes?: boolean | cdktn.IResolvable;
}
export class MetricCharacteristicsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MetricCharacteristicsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._periodicSpikes !== undefined) {
            hasAnyValues = true;
            internalValueResult.periodicSpikes = this._periodicSpikes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MetricCharacteristicsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._periodicSpikes = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._periodicSpikes = value.periodicSpikes;
        }
    }

    // periodic_spikes - computed: true, optional: true, required: false
    private _periodicSpikes?: boolean | cdktn.IResolvable; 
    public get periodicSpikes() {
        return this.getBooleanAttribute('periodic_spikes');
    }
    public set periodicSpikes(value: boolean | cdktn.IResolvable) {
        this._periodicSpikes = value;
    }
    public resetPeriodicSpikes() {
        this._periodicSpikes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get periodicSpikesInput() {
        return this._periodicSpikes;
    }
}
export interface MetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#name CcAnomalyDetector#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#value CcAnomalyDetector#value}
    */
    readonly value?: string;
}
export class MetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): MetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: MetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsProperty | cdktn.IResolvable | undefined) {
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

export class MetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsPropertyList extends cdktn.ComplexList {
    public internalValue? : MetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsProperty[] | cdktn.IResolvable

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
    public get(index: number): MetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsPropertyOutputReference {
        return new MetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface MetricProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#dimensions CcAnomalyDetector#dimensions}
    */
    readonly dimensions?: MetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#metric_name CcAnomalyDetector#metric_name}
    */
    readonly metricName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#namespace CcAnomalyDetector#namespace}
    */
    readonly namespace?: string;
}
export class MetricPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MetricProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dimensions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dimensions = this._dimensions?.internalValue;
        }
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

    public set internalValue(value: MetricProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dimensions.internalValue = undefined;
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
            this._dimensions.internalValue = value.dimensions;
            this._metricName = value.metricName;
            this._namespace = value.namespace;
        }
    }

    // dimensions - computed: true, optional: true, required: false
    private _dimensions = new MetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsPropertyList(this, "dimensions", false);
    public get dimensions() {
        return this._dimensions;
    }
    public putDimensions(value: MetricMathAnomalyDetectorMetricDataQueriesMetricStatMetricDimensionsProperty[] | cdktn.IResolvable) {
        this._dimensions.internalValue = value;
    }
    public resetDimensions() {
        this._dimensions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dimensionsInput() {
        return this._dimensions.internalValue;
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
export interface MetricStatProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#metric CcAnomalyDetector#metric}
    */
    readonly metric?: MetricProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#period CcAnomalyDetector#period}
    */
    readonly period?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#stat CcAnomalyDetector#stat}
    */
    readonly stat?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#unit CcAnomalyDetector#unit}
    */
    readonly unit?: string;
}
export class MetricStatPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MetricStatProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._metric?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.metric = this._metric?.internalValue;
        }
        if (this._period !== undefined) {
            hasAnyValues = true;
            internalValueResult.period = this._period;
        }
        if (this._stat !== undefined) {
            hasAnyValues = true;
            internalValueResult.stat = this._stat;
        }
        if (this._unit !== undefined) {
            hasAnyValues = true;
            internalValueResult.unit = this._unit;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MetricStatProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._metric.internalValue = undefined;
            this._period = undefined;
            this._stat = undefined;
            this._unit = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._metric.internalValue = value.metric;
            this._period = value.period;
            this._stat = value.stat;
            this._unit = value.unit;
        }
    }

    // metric - computed: true, optional: true, required: false
    private _metric = new MetricPropertyOutputReference(this, "metric");
    public get metric() {
        return this._metric;
    }
    public putMetric(value: MetricProperty) {
        this._metric.internalValue = value;
    }
    public resetMetric() {
        this._metric.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricInput() {
        return this._metric.internalValue;
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

    // stat - computed: true, optional: true, required: false
    private _stat?: string; 
    public get stat() {
        return this.getStringAttribute('stat');
    }
    public set stat(value: string) {
        this._stat = value;
    }
    public resetStat() {
        this._stat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statInput() {
        return this._stat;
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
export interface MetricDataQueryProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#account_id CcAnomalyDetector#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#expression CcAnomalyDetector#expression}
    */
    readonly expression?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#id CcAnomalyDetector#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#label CcAnomalyDetector#label}
    */
    readonly label?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#metric_stat CcAnomalyDetector#metric_stat}
    */
    readonly metricStat?: MetricStatProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#period CcAnomalyDetector#period}
    */
    readonly period?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#return_data CcAnomalyDetector#return_data}
    */
    readonly returnData?: boolean | cdktn.IResolvable;
}
export class MetricDataQueryPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): MetricDataQueryProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._accountId !== undefined) {
            hasAnyValues = true;
            internalValueResult.accountId = this._accountId;
        }
        if (this._expression !== undefined) {
            hasAnyValues = true;
            internalValueResult.expression = this._expression;
        }
        if (this._id !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        if (this._label !== undefined) {
            hasAnyValues = true;
            internalValueResult.label = this._label;
        }
        if (this._metricStat?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricStat = this._metricStat?.internalValue;
        }
        if (this._period !== undefined) {
            hasAnyValues = true;
            internalValueResult.period = this._period;
        }
        if (this._returnData !== undefined) {
            hasAnyValues = true;
            internalValueResult.returnData = this._returnData;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MetricDataQueryProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accountId = undefined;
            this._expression = undefined;
            this._id = undefined;
            this._label = undefined;
            this._metricStat.internalValue = undefined;
            this._period = undefined;
            this._returnData = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accountId = value.accountId;
            this._expression = value.expression;
            this._id = value.id;
            this._label = value.label;
            this._metricStat.internalValue = value.metricStat;
            this._period = value.period;
            this._returnData = value.returnData;
        }
    }

    // account_id - computed: true, optional: true, required: false
    private _accountId?: string; 
    public get accountId() {
        return this.getStringAttribute('account_id');
    }
    public set accountId(value: string) {
        this._accountId = value;
    }
    public resetAccountId() {
        this._accountId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accountIdInput() {
        return this._accountId;
    }

    // expression - computed: true, optional: true, required: false
    private _expression?: string; 
    public get expression() {
        return this.getStringAttribute('expression');
    }
    public set expression(value: string) {
        this._expression = value;
    }
    public resetExpression() {
        this._expression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get expressionInput() {
        return this._expression;
    }

    // id - computed: true, optional: true, required: false
    private _id?: string; 
    public get id() {
        return this.getStringAttribute('id');
    }
    public set id(value: string) {
        this._id = value;
    }
    public resetId() {
        this._id = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idInput() {
        return this._id;
    }

    // label - computed: true, optional: true, required: false
    private _label?: string; 
    public get label() {
        return this.getStringAttribute('label');
    }
    public set label(value: string) {
        this._label = value;
    }
    public resetLabel() {
        this._label = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get labelInput() {
        return this._label;
    }

    // metric_stat - computed: true, optional: true, required: false
    private _metricStat = new MetricStatPropertyOutputReference(this, "metric_stat");
    public get metricStat() {
        return this._metricStat;
    }
    public putMetricStat(value: MetricStatProperty) {
        this._metricStat.internalValue = value;
    }
    public resetMetricStat() {
        this._metricStat.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricStatInput() {
        return this._metricStat.internalValue;
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

    // return_data - computed: true, optional: true, required: false
    private _returnData?: boolean | cdktn.IResolvable; 
    public get returnData() {
        return this.getBooleanAttribute('return_data');
    }
    public set returnData(value: boolean | cdktn.IResolvable) {
        this._returnData = value;
    }
    public resetReturnData() {
        this._returnData = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get returnDataInput() {
        return this._returnData;
    }
}

export class MetricDataQueryPropertyList extends cdktn.ComplexList {
    public internalValue? : MetricDataQueryProperty[] | cdktn.IResolvable

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
    public get(index: number): MetricDataQueryPropertyOutputReference {
        return new MetricDataQueryPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface MetricMathAnomalyDetectorProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#metric_data_queries CcAnomalyDetector#metric_data_queries}
    */
    readonly metricDataQueries?: MetricDataQueryProperty[] | cdktn.IResolvable;
}
export class MetricMathAnomalyDetectorPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MetricMathAnomalyDetectorProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._metricDataQueries?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricDataQueries = this._metricDataQueries?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MetricMathAnomalyDetectorProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._metricDataQueries.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._metricDataQueries.internalValue = value.metricDataQueries;
        }
    }

    // metric_data_queries - computed: true, optional: true, required: false
    private _metricDataQueries = new MetricDataQueryPropertyList(this, "metric_data_queries", false);
    public get metricDataQueries() {
        return this._metricDataQueries;
    }
    public putMetricDataQueries(value: MetricDataQueryProperty[] | cdktn.IResolvable) {
        this._metricDataQueries.internalValue = value;
    }
    public resetMetricDataQueries() {
        this._metricDataQueries.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricDataQueriesInput() {
        return this._metricDataQueries.internalValue;
    }
}
export interface SingleMetricAnomalyDetectorDimensionsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#name CcAnomalyDetector#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#value CcAnomalyDetector#value}
    */
    readonly value?: string;
}
export class SingleMetricAnomalyDetectorDimensionsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): SingleMetricAnomalyDetectorDimensionsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: SingleMetricAnomalyDetectorDimensionsProperty | cdktn.IResolvable | undefined) {
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

export class SingleMetricAnomalyDetectorDimensionsPropertyList extends cdktn.ComplexList {
    public internalValue? : SingleMetricAnomalyDetectorDimensionsProperty[] | cdktn.IResolvable

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
    public get(index: number): SingleMetricAnomalyDetectorDimensionsPropertyOutputReference {
        return new SingleMetricAnomalyDetectorDimensionsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface SingleMetricAnomalyDetectorProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#account_id CcAnomalyDetector#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#dimensions CcAnomalyDetector#dimensions}
    */
    readonly dimensions?: SingleMetricAnomalyDetectorDimensionsProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#metric_name CcAnomalyDetector#metric_name}
    */
    readonly metricName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#namespace CcAnomalyDetector#namespace}
    */
    readonly namespace?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/cloudwatch_anomaly_detector#stat CcAnomalyDetector#stat}
    */
    readonly stat?: string;
}
export class SingleMetricAnomalyDetectorPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SingleMetricAnomalyDetectorProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._accountId !== undefined) {
            hasAnyValues = true;
            internalValueResult.accountId = this._accountId;
        }
        if (this._dimensions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dimensions = this._dimensions?.internalValue;
        }
        if (this._metricName !== undefined) {
            hasAnyValues = true;
            internalValueResult.metricName = this._metricName;
        }
        if (this._namespace !== undefined) {
            hasAnyValues = true;
            internalValueResult.namespace = this._namespace;
        }
        if (this._stat !== undefined) {
            hasAnyValues = true;
            internalValueResult.stat = this._stat;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SingleMetricAnomalyDetectorProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accountId = undefined;
            this._dimensions.internalValue = undefined;
            this._metricName = undefined;
            this._namespace = undefined;
            this._stat = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accountId = value.accountId;
            this._dimensions.internalValue = value.dimensions;
            this._metricName = value.metricName;
            this._namespace = value.namespace;
            this._stat = value.stat;
        }
    }

    // account_id - computed: true, optional: true, required: false
    private _accountId?: string; 
    public get accountId() {
        return this.getStringAttribute('account_id');
    }
    public set accountId(value: string) {
        this._accountId = value;
    }
    public resetAccountId() {
        this._accountId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accountIdInput() {
        return this._accountId;
    }

    // dimensions - computed: true, optional: true, required: false
    private _dimensions = new SingleMetricAnomalyDetectorDimensionsPropertyList(this, "dimensions", false);
    public get dimensions() {
        return this._dimensions;
    }
    public putDimensions(value: SingleMetricAnomalyDetectorDimensionsProperty[] | cdktn.IResolvable) {
        this._dimensions.internalValue = value;
    }
    public resetDimensions() {
        this._dimensions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dimensionsInput() {
        return this._dimensions.internalValue;
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

    // stat - computed: true, optional: true, required: false
    private _stat?: string; 
    public get stat() {
        return this.getStringAttribute('stat');
    }
    public set stat(value: string) {
        this._stat = value;
    }
    public resetStat() {
        this._stat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statInput() {
        return this._stat;
    }
}
}
