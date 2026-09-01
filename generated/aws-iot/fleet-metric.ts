// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_fleet_metric

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcFleetMetricProps extends cdktn.TerraformMetaArguments {
    /**
    * The aggregation field to perform aggregation and metric emission
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_fleet_metric#aggregation_field CcFleetMetric#aggregation_field}
    */
    readonly aggregationField?: string;
    /**
    * Aggregation types supported by Fleet Indexing
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_fleet_metric#aggregation_type CcFleetMetric#aggregation_type}
    */
    readonly aggregationType?: CcFleetMetric.AggregationTypeProperty;
    /**
    * The description of a fleet metric
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_fleet_metric#description CcFleetMetric#description}
    */
    readonly description?: string;
    /**
    * The index name of a fleet metric
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_fleet_metric#index_name CcFleetMetric#index_name}
    */
    readonly indexName?: string;
    /**
    * The name of the fleet metric
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_fleet_metric#metric_name CcFleetMetric#metric_name}
    */
    readonly metricName: string;
    /**
    * The period of metric emission in seconds
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_fleet_metric#period CcFleetMetric#period}
    */
    readonly period?: number;
    /**
    * The Fleet Indexing query used by a fleet metric
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_fleet_metric#query_string CcFleetMetric#query_string}
    */
    readonly queryString?: string;
    /**
    * The version of a Fleet Indexing query used by a fleet metric
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_fleet_metric#query_version CcFleetMetric#query_version}
    */
    readonly queryVersion?: string;
    /**
    * An array of key-value pairs to apply to this resource
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_fleet_metric#tags CcFleetMetric#tags}
    */
    readonly tags?: CcFleetMetric.TagProperty[] | cdktn.IResolvable;
    /**
    * The unit of data points emitted by a fleet metric
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_fleet_metric#unit CcFleetMetric#unit}
    */
    readonly unit?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_fleet_metric awscc_iot_fleet_metric}
*/
export class CcFleetMetric extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_iot_fleet_metric";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcFleetMetric resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcFleetMetric to import
    * @param importFromId The id of the existing CcFleetMetric that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_fleet_metric#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcFleetMetric to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iot_fleet_metric", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_fleet_metric awscc_iot_fleet_metric} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcFleetMetricProps
    */
    public constructor(scope: Construct, id: string, config: CcFleetMetricProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_iot_fleet_metric',
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
        this._aggregationField = config.aggregationField;
        this._aggregationType.internalValue = config.aggregationType;
        this._description = config.description;
        this._indexName = config.indexName;
        this._metricName = config.metricName;
        this._period = config.period;
        this._queryString = config.queryString;
        this._queryVersion = config.queryVersion;
        this._tags.internalValue = config.tags;
        this._unit = config.unit;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // aggregation_field - computed: true, optional: true, required: false
    private _aggregationField?: string; 
    public get aggregationField() {
        return this.getStringAttribute('aggregation_field');
    }
    public set aggregationField(value: string) {
        this._aggregationField = value;
    }
    public resetAggregationField() {
        this._aggregationField = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get aggregationFieldInput() {
        return this._aggregationField;
    }

    // aggregation_type - computed: true, optional: true, required: false
    private _aggregationType = new CcFleetMetric.AggregationTypePropertyOutputReference(this, "aggregation_type");
    public get aggregationType() {
        return this._aggregationType;
    }
    public putAggregationType(value: CcFleetMetric.AggregationTypeProperty) {
        this._aggregationType.internalValue = value;
    }
    public resetAggregationType() {
        this._aggregationType.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get aggregationTypeInput() {
        return this._aggregationType.internalValue;
    }

    // creation_date - computed: true, optional: false, required: false
    public get creationDate() {
        return this.getStringAttribute('creation_date');
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

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // index_name - computed: true, optional: true, required: false
    private _indexName?: string; 
    public get indexName() {
        return this.getStringAttribute('index_name');
    }
    public set indexName(value: string) {
        this._indexName = value;
    }
    public resetIndexName() {
        this._indexName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get indexNameInput() {
        return this._indexName;
    }

    // last_modified_date - computed: true, optional: false, required: false
    public get lastModifiedDate() {
        return this.getStringAttribute('last_modified_date');
    }

    // metric_arn - computed: true, optional: false, required: false
    public get metricArn() {
        return this.getStringAttribute('metric_arn');
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

    // query_string - computed: true, optional: true, required: false
    private _queryString?: string; 
    public get queryString() {
        return this.getStringAttribute('query_string');
    }
    public set queryString(value: string) {
        this._queryString = value;
    }
    public resetQueryString() {
        this._queryString = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get queryStringInput() {
        return this._queryString;
    }

    // query_version - computed: true, optional: true, required: false
    private _queryVersion?: string; 
    public get queryVersion() {
        return this.getStringAttribute('query_version');
    }
    public set queryVersion(value: string) {
        this._queryVersion = value;
    }
    public resetQueryVersion() {
        this._queryVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get queryVersionInput() {
        return this._queryVersion;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcFleetMetric.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcFleetMetric.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
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

    // version - computed: true, optional: false, required: false
    public get version() {
        return this.getNumberAttribute('version');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            aggregation_field: cdktn.stringToTerraform(this._aggregationField),
            aggregation_type: ccFleetMetricAggregationTypePropertyToTerraform(this._aggregationType.internalValue),
            description: cdktn.stringToTerraform(this._description),
            index_name: cdktn.stringToTerraform(this._indexName),
            metric_name: cdktn.stringToTerraform(this._metricName),
            period: cdktn.numberToTerraform(this._period),
            query_string: cdktn.stringToTerraform(this._queryString),
            query_version: cdktn.stringToTerraform(this._queryVersion),
            tags: cdktn.listMapper(ccFleetMetricTagPropertyToTerraform, false)(this._tags.internalValue),
            unit: cdktn.stringToTerraform(this._unit),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            aggregation_field: {
                value: cdktn.stringToHclTerraform(this._aggregationField),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            aggregation_type: {
                value: ccFleetMetricAggregationTypePropertyToHclTerraform(this._aggregationType.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcFleetMetric.AggregationTypeProperty",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            index_name: {
                value: cdktn.stringToHclTerraform(this._indexName),
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
            period: {
                value: cdktn.numberToHclTerraform(this._period),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            query_string: {
                value: cdktn.stringToHclTerraform(this._queryString),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            query_version: {
                value: cdktn.stringToHclTerraform(this._queryVersion),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccFleetMetricTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcFleetMetric.TagPropertyList",
            },
            unit: {
                value: cdktn.stringToHclTerraform(this._unit),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccFleetMetricAggregationTypePropertyToTerraform(struct?: CcFleetMetric.AggregationTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccFleetMetricAggregationTypePropertyToHclTerraform(struct?: CcFleetMetric.AggregationTypeProperty | cdktn.IResolvable): any {
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


export function ccFleetMetricTagPropertyToTerraform(struct?: CcFleetMetric.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccFleetMetricTagPropertyToHclTerraform(struct?: CcFleetMetric.TagProperty | cdktn.IResolvable): any {
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


export namespace CcFleetMetric {
export interface AggregationTypeProperty {
    /**
    * Fleet Indexing aggregation type names such as Statistics, Percentiles and Cardinality
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_fleet_metric#name CcFleetMetric#name}
    */
    readonly name?: string;
    /**
    * Fleet Indexing aggregation type values
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_fleet_metric#values CcFleetMetric#values}
    */
    readonly values?: string[];
}
export class AggregationTypePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AggregationTypeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._values !== undefined) {
            hasAnyValues = true;
            internalValueResult.values = this._values;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AggregationTypeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
            this._values = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
            this._values = value.values;
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
export interface TagProperty {
    /**
    * The tag's key
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_fleet_metric#key CcFleetMetric#key}
    */
    readonly key?: string;
    /**
    * The tag's value
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iot_fleet_metric#value CcFleetMetric#value}
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
