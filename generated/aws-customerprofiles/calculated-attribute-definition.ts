// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/customerprofiles_calculated_attribute_definition

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcCalculatedAttributeDefinitionProps extends cdktn.TerraformMetaArguments {
    /**
    * Mathematical expression and a list of attribute items specified in that expression.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/customerprofiles_calculated_attribute_definition#attribute_details CcCalculatedAttributeDefinition#attribute_details}
    */
    readonly attributeDetails: CcCalculatedAttributeDefinition.AttributeDetailsProperty;
    /**
    * The unique name of the calculated attribute.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/customerprofiles_calculated_attribute_definition#calculated_attribute_name CcCalculatedAttributeDefinition#calculated_attribute_name}
    */
    readonly calculatedAttributeName: string;
    /**
    * The conditions including range, object count, and threshold for the calculated attribute.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/customerprofiles_calculated_attribute_definition#conditions CcCalculatedAttributeDefinition#conditions}
    */
    readonly conditions?: CcCalculatedAttributeDefinition.ConditionsProperty;
    /**
    * The description of the calculated attribute.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/customerprofiles_calculated_attribute_definition#description CcCalculatedAttributeDefinition#description}
    */
    readonly description?: string;
    /**
    * The display name of the calculated attribute.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/customerprofiles_calculated_attribute_definition#display_name CcCalculatedAttributeDefinition#display_name}
    */
    readonly displayName?: string;
    /**
    * The unique name of the domain.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/customerprofiles_calculated_attribute_definition#domain_name CcCalculatedAttributeDefinition#domain_name}
    */
    readonly domainName: string;
    /**
    * Defines how to filter the objects coming in for calculated attributes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/customerprofiles_calculated_attribute_definition#filter CcCalculatedAttributeDefinition#filter}
    */
    readonly filter?: CcCalculatedAttributeDefinition.FilterProperty;
    /**
    * The aggregation operation to perform for the calculated attribute.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/customerprofiles_calculated_attribute_definition#statistic CcCalculatedAttributeDefinition#statistic}
    */
    readonly statistic: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/customerprofiles_calculated_attribute_definition#tags CcCalculatedAttributeDefinition#tags}
    */
    readonly tags?: CcCalculatedAttributeDefinition.TagProperty[] | cdktn.IResolvable;
    /**
    * Whether to use historical data for the calculated attribute.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/customerprofiles_calculated_attribute_definition#use_historical_data CcCalculatedAttributeDefinition#use_historical_data}
    */
    readonly useHistoricalData?: boolean | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/customerprofiles_calculated_attribute_definition awscc_customerprofiles_calculated_attribute_definition}
*/
export class CcCalculatedAttributeDefinition extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_customerprofiles_calculated_attribute_definition";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcCalculatedAttributeDefinition resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcCalculatedAttributeDefinition to import
    * @param importFromId The id of the existing CcCalculatedAttributeDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/customerprofiles_calculated_attribute_definition#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcCalculatedAttributeDefinition to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_customerprofiles_calculated_attribute_definition", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/customerprofiles_calculated_attribute_definition awscc_customerprofiles_calculated_attribute_definition} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcCalculatedAttributeDefinitionProps
    */
    public constructor(scope: Construct, id: string, config: CcCalculatedAttributeDefinitionProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_customerprofiles_calculated_attribute_definition',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.110.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._attributeDetails.internalValue = config.attributeDetails;
        this._calculatedAttributeName = config.calculatedAttributeName;
        this._conditions.internalValue = config.conditions;
        this._description = config.description;
        this._displayName = config.displayName;
        this._domainName = config.domainName;
        this._filter.internalValue = config.filter;
        this._statistic = config.statistic;
        this._tags.internalValue = config.tags;
        this._useHistoricalData = config.useHistoricalData;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // attribute_details - computed: false, optional: false, required: true
    private _attributeDetails = new CcCalculatedAttributeDefinition.AttributeDetailsPropertyOutputReference(this, "attribute_details");
    public get attributeDetails() {
        return this._attributeDetails;
    }
    public putAttributeDetails(value: CcCalculatedAttributeDefinition.AttributeDetailsProperty) {
        this._attributeDetails.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get attributeDetailsInput() {
        return this._attributeDetails.internalValue;
    }

    // calculated_attribute_name - computed: false, optional: false, required: true
    private _calculatedAttributeName?: string; 
    public get calculatedAttributeName() {
        return this.getStringAttribute('calculated_attribute_name');
    }
    public set calculatedAttributeName(value: string) {
        this._calculatedAttributeName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get calculatedAttributeNameInput() {
        return this._calculatedAttributeName;
    }

    // conditions - computed: true, optional: true, required: false
    private _conditions = new CcCalculatedAttributeDefinition.ConditionsPropertyOutputReference(this, "conditions");
    public get conditions() {
        return this._conditions;
    }
    public putConditions(value: CcCalculatedAttributeDefinition.ConditionsProperty) {
        this._conditions.internalValue = value;
    }
    public resetConditions() {
        this._conditions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get conditionsInput() {
        return this._conditions.internalValue;
    }

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
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

    // display_name - computed: true, optional: true, required: false
    private _displayName?: string; 
    public get displayName() {
        return this.getStringAttribute('display_name');
    }
    public set displayName(value: string) {
        this._displayName = value;
    }
    public resetDisplayName() {
        this._displayName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get displayNameInput() {
        return this._displayName;
    }

    // domain_name - computed: false, optional: false, required: true
    private _domainName?: string; 
    public get domainName() {
        return this.getStringAttribute('domain_name');
    }
    public set domainName(value: string) {
        this._domainName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get domainNameInput() {
        return this._domainName;
    }

    // filter - computed: true, optional: true, required: false
    private _filter = new CcCalculatedAttributeDefinition.FilterPropertyOutputReference(this, "filter");
    public get filter() {
        return this._filter;
    }
    public putFilter(value: CcCalculatedAttributeDefinition.FilterProperty) {
        this._filter.internalValue = value;
    }
    public resetFilter() {
        this._filter.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterInput() {
        return this._filter.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // last_updated_at - computed: true, optional: false, required: false
    public get lastUpdatedAt() {
        return this.getStringAttribute('last_updated_at');
    }

    // readiness - computed: true, optional: false, required: false
    private _readiness = new CcCalculatedAttributeDefinition.ReadinessPropertyOutputReference(this, "readiness");
    public get readiness() {
        return this._readiness;
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

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcCalculatedAttributeDefinition.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcCalculatedAttributeDefinition.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // use_historical_data - computed: true, optional: true, required: false
    private _useHistoricalData?: boolean | cdktn.IResolvable; 
    public get useHistoricalData() {
        return this.getBooleanAttribute('use_historical_data');
    }
    public set useHistoricalData(value: boolean | cdktn.IResolvable) {
        this._useHistoricalData = value;
    }
    public resetUseHistoricalData() {
        this._useHistoricalData = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get useHistoricalDataInput() {
        return this._useHistoricalData;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            attribute_details: ccCalculatedAttributeDefinitionAttributeDetailsPropertyToTerraform(this._attributeDetails.internalValue),
            calculated_attribute_name: cdktn.stringToTerraform(this._calculatedAttributeName),
            conditions: ccCalculatedAttributeDefinitionConditionsPropertyToTerraform(this._conditions.internalValue),
            description: cdktn.stringToTerraform(this._description),
            display_name: cdktn.stringToTerraform(this._displayName),
            domain_name: cdktn.stringToTerraform(this._domainName),
            filter: ccCalculatedAttributeDefinitionFilterPropertyToTerraform(this._filter.internalValue),
            statistic: cdktn.stringToTerraform(this._statistic),
            tags: cdktn.listMapper(ccCalculatedAttributeDefinitionTagPropertyToTerraform, false)(this._tags.internalValue),
            use_historical_data: cdktn.booleanToTerraform(this._useHistoricalData),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            attribute_details: {
                value: ccCalculatedAttributeDefinitionAttributeDetailsPropertyToHclTerraform(this._attributeDetails.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCalculatedAttributeDefinition.AttributeDetailsProperty",
            },
            calculated_attribute_name: {
                value: cdktn.stringToHclTerraform(this._calculatedAttributeName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            conditions: {
                value: ccCalculatedAttributeDefinitionConditionsPropertyToHclTerraform(this._conditions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCalculatedAttributeDefinition.ConditionsProperty",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            display_name: {
                value: cdktn.stringToHclTerraform(this._displayName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            domain_name: {
                value: cdktn.stringToHclTerraform(this._domainName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            filter: {
                value: ccCalculatedAttributeDefinitionFilterPropertyToHclTerraform(this._filter.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCalculatedAttributeDefinition.FilterProperty",
            },
            statistic: {
                value: cdktn.stringToHclTerraform(this._statistic),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccCalculatedAttributeDefinitionTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcCalculatedAttributeDefinition.TagPropertyList",
            },
            use_historical_data: {
                value: cdktn.booleanToHclTerraform(this._useHistoricalData),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccCalculatedAttributeDefinitionAttributeItemPropertyToTerraform(struct?: CcCalculatedAttributeDefinition.AttributeItemProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccCalculatedAttributeDefinitionAttributeItemPropertyToHclTerraform(struct?: CcCalculatedAttributeDefinition.AttributeItemProperty | cdktn.IResolvable): any {
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCalculatedAttributeDefinitionAttributeDetailsPropertyToTerraform(struct?: CcCalculatedAttributeDefinition.AttributeDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        attributes: cdktn.listMapper(ccCalculatedAttributeDefinitionAttributeItemPropertyToTerraform, false)(struct!.attributes),
        expression: cdktn.stringToTerraform(struct!.expression),
    }
}


export function ccCalculatedAttributeDefinitionAttributeDetailsPropertyToHclTerraform(struct?: CcCalculatedAttributeDefinition.AttributeDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        attributes: {
            value: cdktn.listMapperHcl(ccCalculatedAttributeDefinitionAttributeItemPropertyToHclTerraform, false)(struct!.attributes),
            isBlock: true,
            type: "set",
            storageClassType: "AttributeItemPropertyList",
        },
        expression: {
            value: cdktn.stringToHclTerraform(struct!.expression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCalculatedAttributeDefinitionValueRangePropertyToTerraform(struct?: CcCalculatedAttributeDefinition.ValueRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        end: cdktn.numberToTerraform(struct!.end),
        start: cdktn.numberToTerraform(struct!.start),
    }
}


export function ccCalculatedAttributeDefinitionValueRangePropertyToHclTerraform(struct?: CcCalculatedAttributeDefinition.ValueRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        end: {
            value: cdktn.numberToHclTerraform(struct!.end),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        start: {
            value: cdktn.numberToHclTerraform(struct!.start),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCalculatedAttributeDefinitionRangePropertyToTerraform(struct?: CcCalculatedAttributeDefinition.RangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        timestamp_format: cdktn.stringToTerraform(struct!.timestampFormat),
        timestamp_source: cdktn.stringToTerraform(struct!.timestampSource),
        unit: cdktn.stringToTerraform(struct!.unit),
        value: cdktn.numberToTerraform(struct!.value),
        value_range: ccCalculatedAttributeDefinitionValueRangePropertyToTerraform(struct!.valueRange),
    }
}


export function ccCalculatedAttributeDefinitionRangePropertyToHclTerraform(struct?: CcCalculatedAttributeDefinition.RangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        timestamp_format: {
            value: cdktn.stringToHclTerraform(struct!.timestampFormat),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        timestamp_source: {
            value: cdktn.stringToHclTerraform(struct!.timestampSource),
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
        value: {
            value: cdktn.numberToHclTerraform(struct!.value),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        value_range: {
            value: ccCalculatedAttributeDefinitionValueRangePropertyToHclTerraform(struct!.valueRange),
            isBlock: true,
            type: "struct",
            storageClassType: "ValueRangeProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCalculatedAttributeDefinitionThresholdPropertyToTerraform(struct?: CcCalculatedAttributeDefinition.ThresholdProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        operator: cdktn.stringToTerraform(struct!.operator),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccCalculatedAttributeDefinitionThresholdPropertyToHclTerraform(struct?: CcCalculatedAttributeDefinition.ThresholdProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        operator: {
            value: cdktn.stringToHclTerraform(struct!.operator),
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


export function ccCalculatedAttributeDefinitionConditionsPropertyToTerraform(struct?: CcCalculatedAttributeDefinition.ConditionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        object_count: cdktn.numberToTerraform(struct!.objectCount),
        range: ccCalculatedAttributeDefinitionRangePropertyToTerraform(struct!.range),
        threshold: ccCalculatedAttributeDefinitionThresholdPropertyToTerraform(struct!.threshold),
    }
}


export function ccCalculatedAttributeDefinitionConditionsPropertyToHclTerraform(struct?: CcCalculatedAttributeDefinition.ConditionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        object_count: {
            value: cdktn.numberToHclTerraform(struct!.objectCount),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        range: {
            value: ccCalculatedAttributeDefinitionRangePropertyToHclTerraform(struct!.range),
            isBlock: true,
            type: "struct",
            storageClassType: "RangeProperty",
        },
        threshold: {
            value: ccCalculatedAttributeDefinitionThresholdPropertyToHclTerraform(struct!.threshold),
            isBlock: true,
            type: "struct",
            storageClassType: "ThresholdProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCalculatedAttributeDefinitionAttributesPropertyToTerraform(struct?: CcCalculatedAttributeDefinition.AttributesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccCalculatedAttributeDefinitionAttributesPropertyToHclTerraform(struct?: CcCalculatedAttributeDefinition.AttributesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        dimension_type: {
            value: cdktn.stringToHclTerraform(struct!.dimensionType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        values: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.values),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCalculatedAttributeDefinitionDimensionsPropertyToTerraform(struct?: CcCalculatedAttributeDefinition.DimensionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        attributes: cdktn.hashMapper(ccCalculatedAttributeDefinitionAttributesPropertyToTerraform)(struct!.attributes),
    }
}


export function ccCalculatedAttributeDefinitionDimensionsPropertyToHclTerraform(struct?: CcCalculatedAttributeDefinition.DimensionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        attributes: {
            value: cdktn.hashMapperHcl(ccCalculatedAttributeDefinitionAttributesPropertyToHclTerraform)(struct!.attributes),
            isBlock: true,
            type: "map",
            storageClassType: "AttributesPropertyMap",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCalculatedAttributeDefinitionGroupsPropertyToTerraform(struct?: CcCalculatedAttributeDefinition.GroupsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dimensions: cdktn.listMapper(ccCalculatedAttributeDefinitionDimensionsPropertyToTerraform, false)(struct!.dimensions),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccCalculatedAttributeDefinitionGroupsPropertyToHclTerraform(struct?: CcCalculatedAttributeDefinition.GroupsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        dimensions: {
            value: cdktn.listMapperHcl(ccCalculatedAttributeDefinitionDimensionsPropertyToHclTerraform, false)(struct!.dimensions),
            isBlock: true,
            type: "set",
            storageClassType: "DimensionsPropertyList",
        },
        type: {
            value: cdktn.stringToHclTerraform(struct!.type),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCalculatedAttributeDefinitionFilterPropertyToTerraform(struct?: CcCalculatedAttributeDefinition.FilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        groups: cdktn.listMapper(ccCalculatedAttributeDefinitionGroupsPropertyToTerraform, false)(struct!.groups),
        include: cdktn.stringToTerraform(struct!.include),
    }
}


export function ccCalculatedAttributeDefinitionFilterPropertyToHclTerraform(struct?: CcCalculatedAttributeDefinition.FilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        groups: {
            value: cdktn.listMapperHcl(ccCalculatedAttributeDefinitionGroupsPropertyToHclTerraform, false)(struct!.groups),
            isBlock: true,
            type: "set",
            storageClassType: "GroupsPropertyList",
        },
        include: {
            value: cdktn.stringToHclTerraform(struct!.include),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCalculatedAttributeDefinitionReadinessPropertyToTerraform(struct?: CcCalculatedAttributeDefinition.ReadinessProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccCalculatedAttributeDefinitionReadinessPropertyToHclTerraform(struct?: CcCalculatedAttributeDefinition.ReadinessProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccCalculatedAttributeDefinitionTagPropertyToTerraform(struct?: CcCalculatedAttributeDefinition.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccCalculatedAttributeDefinitionTagPropertyToHclTerraform(struct?: CcCalculatedAttributeDefinition.TagProperty | cdktn.IResolvable): any {
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


export namespace CcCalculatedAttributeDefinition {
export interface AttributeItemProperty {
    /**
    * The name of an attribute defined in a profile object type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/customerprofiles_calculated_attribute_definition#name CcCalculatedAttributeDefinition#name}
    */
    readonly name: string;
}
export class AttributeItemPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AttributeItemProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AttributeItemProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._name = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._name = value.name;
        }
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
}

export class AttributeItemPropertyList extends cdktn.ComplexList {
    public internalValue? : AttributeItemProperty[] | cdktn.IResolvable

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
    public get(index: number): AttributeItemPropertyOutputReference {
        return new AttributeItemPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface AttributeDetailsProperty {
    /**
    * A list of attribute items specified in the mathematical expression.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/customerprofiles_calculated_attribute_definition#attributes CcCalculatedAttributeDefinition#attributes}
    */
    readonly attributes: AttributeItemProperty[] | cdktn.IResolvable;
    /**
    * Mathematical expression that is performed on attribute items provided in the attribute list. Each element in the expression should follow the structure of "{ObjectTypeName.AttributeName}".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/customerprofiles_calculated_attribute_definition#expression CcCalculatedAttributeDefinition#expression}
    */
    readonly expression: string;
}
export class AttributeDetailsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AttributeDetailsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._attributes?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.attributes = this._attributes?.internalValue;
        }
        if (this._expression !== undefined) {
            hasAnyValues = true;
            internalValueResult.expression = this._expression;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AttributeDetailsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._attributes.internalValue = undefined;
            this._expression = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._attributes.internalValue = value.attributes;
            this._expression = value.expression;
        }
    }

    // attributes - computed: false, optional: false, required: true
    private _attributes = new AttributeItemPropertyList(this, "attributes", true);
    public get attributes() {
        return this._attributes;
    }
    public putAttributes(value: AttributeItemProperty[] | cdktn.IResolvable) {
        this._attributes.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get attributesInput() {
        return this._attributes.internalValue;
    }

    // expression - computed: false, optional: false, required: true
    private _expression?: string; 
    public get expression() {
        return this.getStringAttribute('expression');
    }
    public set expression(value: string) {
        this._expression = value;
    }
    // Temporarily expose input value. Use with caution.
    public get expressionInput() {
        return this._expression;
    }
}
export interface ValueRangeProperty {
    /**
    * The ending point for this range. Positive numbers indicate how many days in the past data should be included, and negative numbers indicate how many days in the future.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/customerprofiles_calculated_attribute_definition#end CcCalculatedAttributeDefinition#end}
    */
    readonly end?: number;
    /**
    * The starting point for this range. Positive numbers indicate how many days in the past data should be included, and negative numbers indicate how many days in the future.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/customerprofiles_calculated_attribute_definition#start CcCalculatedAttributeDefinition#start}
    */
    readonly start?: number;
}
export class ValueRangePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ValueRangeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._end !== undefined) {
            hasAnyValues = true;
            internalValueResult.end = this._end;
        }
        if (this._start !== undefined) {
            hasAnyValues = true;
            internalValueResult.start = this._start;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ValueRangeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._end = undefined;
            this._start = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._end = value.end;
            this._start = value.start;
        }
    }

    // end - computed: true, optional: true, required: false
    private _end?: number; 
    public get end() {
        return this.getNumberAttribute('end');
    }
    public set end(value: number) {
        this._end = value;
    }
    public resetEnd() {
        this._end = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endInput() {
        return this._end;
    }

    // start - computed: true, optional: true, required: false
    private _start?: number; 
    public get start() {
        return this.getNumberAttribute('start');
    }
    public set start(value: number) {
        this._start = value;
    }
    public resetStart() {
        this._start = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get startInput() {
        return this._start;
    }
}
export interface RangeProperty {
    /**
    * The format the timestamp field in your JSON object is specified. This value should be one of EPOCHMILLI or ISO_8601. E.g. if your object type is MyType and source JSON is {"generatedAt": {"timestamp": "2001-07-04T12:08:56.235Z"}}, then TimestampFormat should be "ISO_8601".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/customerprofiles_calculated_attribute_definition#timestamp_format CcCalculatedAttributeDefinition#timestamp_format}
    */
    readonly timestampFormat?: string;
    /**
    * An expression specifying the field in your JSON object from which the date should be parsed. The expression should follow the structure of \"{ObjectTypeName.<Location of timestamp field in JSON pointer format>}\". E.g. if your object type is MyType and source JSON is {"generatedAt": {"timestamp": "1737587945945"}}, then TimestampSource should be "{MyType.generatedAt.timestamp}".
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/customerprofiles_calculated_attribute_definition#timestamp_source CcCalculatedAttributeDefinition#timestamp_source}
    */
    readonly timestampSource?: string;
    /**
    * The unit of time.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/customerprofiles_calculated_attribute_definition#unit CcCalculatedAttributeDefinition#unit}
    */
    readonly unit?: string;
    /**
    * The amount of time of the specified unit.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/customerprofiles_calculated_attribute_definition#value CcCalculatedAttributeDefinition#value}
    */
    readonly value?: number;
    /**
    * A structure specifying the endpoints of the relative time period over which data is included in the aggregation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/customerprofiles_calculated_attribute_definition#value_range CcCalculatedAttributeDefinition#value_range}
    */
    readonly valueRange?: ValueRangeProperty;
}
export class RangePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RangeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._timestampFormat !== undefined) {
            hasAnyValues = true;
            internalValueResult.timestampFormat = this._timestampFormat;
        }
        if (this._timestampSource !== undefined) {
            hasAnyValues = true;
            internalValueResult.timestampSource = this._timestampSource;
        }
        if (this._unit !== undefined) {
            hasAnyValues = true;
            internalValueResult.unit = this._unit;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        if (this._valueRange?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.valueRange = this._valueRange?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RangeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._timestampFormat = undefined;
            this._timestampSource = undefined;
            this._unit = undefined;
            this._value = undefined;
            this._valueRange.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._timestampFormat = value.timestampFormat;
            this._timestampSource = value.timestampSource;
            this._unit = value.unit;
            this._value = value.value;
            this._valueRange.internalValue = value.valueRange;
        }
    }

    // timestamp_format - computed: true, optional: true, required: false
    private _timestampFormat?: string; 
    public get timestampFormat() {
        return this.getStringAttribute('timestamp_format');
    }
    public set timestampFormat(value: string) {
        this._timestampFormat = value;
    }
    public resetTimestampFormat() {
        this._timestampFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timestampFormatInput() {
        return this._timestampFormat;
    }

    // timestamp_source - computed: true, optional: true, required: false
    private _timestampSource?: string; 
    public get timestampSource() {
        return this.getStringAttribute('timestamp_source');
    }
    public set timestampSource(value: string) {
        this._timestampSource = value;
    }
    public resetTimestampSource() {
        this._timestampSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timestampSourceInput() {
        return this._timestampSource;
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

    // value - computed: true, optional: true, required: false
    private _value?: number; 
    public get value() {
        return this.getNumberAttribute('value');
    }
    public set value(value: number) {
        this._value = value;
    }
    public resetValue() {
        this._value = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
        return this._value;
    }

    // value_range - computed: true, optional: true, required: false
    private _valueRange = new ValueRangePropertyOutputReference(this, "value_range");
    public get valueRange() {
        return this._valueRange;
    }
    public putValueRange(value: ValueRangeProperty) {
        this._valueRange.internalValue = value;
    }
    public resetValueRange() {
        this._valueRange.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valueRangeInput() {
        return this._valueRange.internalValue;
    }
}
export interface ThresholdProperty {
    /**
    * The operator of the threshold.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/customerprofiles_calculated_attribute_definition#operator CcCalculatedAttributeDefinition#operator}
    */
    readonly operator?: string;
    /**
    * The value of the threshold.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/customerprofiles_calculated_attribute_definition#value CcCalculatedAttributeDefinition#value}
    */
    readonly value?: string;
}
export class ThresholdPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ThresholdProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._operator !== undefined) {
            hasAnyValues = true;
            internalValueResult.operator = this._operator;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ThresholdProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._operator = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._operator = value.operator;
            this._value = value.value;
        }
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
export interface ConditionsProperty {
    /**
    * The number of profile objects used for the calculated attribute.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/customerprofiles_calculated_attribute_definition#object_count CcCalculatedAttributeDefinition#object_count}
    */
    readonly objectCount?: number;
    /**
    * The relative time period over which data is included in the aggregation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/customerprofiles_calculated_attribute_definition#range CcCalculatedAttributeDefinition#range}
    */
    readonly range?: RangeProperty;
    /**
    * The threshold for the calculated attribute.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/customerprofiles_calculated_attribute_definition#threshold CcCalculatedAttributeDefinition#threshold}
    */
    readonly threshold?: ThresholdProperty;
}
export class ConditionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConditionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._objectCount !== undefined) {
            hasAnyValues = true;
            internalValueResult.objectCount = this._objectCount;
        }
        if (this._range?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.range = this._range?.internalValue;
        }
        if (this._threshold?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.threshold = this._threshold?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConditionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._objectCount = undefined;
            this._range.internalValue = undefined;
            this._threshold.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._objectCount = value.objectCount;
            this._range.internalValue = value.range;
            this._threshold.internalValue = value.threshold;
        }
    }

    // object_count - computed: true, optional: true, required: false
    private _objectCount?: number; 
    public get objectCount() {
        return this.getNumberAttribute('object_count');
    }
    public set objectCount(value: number) {
        this._objectCount = value;
    }
    public resetObjectCount() {
        this._objectCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get objectCountInput() {
        return this._objectCount;
    }

    // range - computed: true, optional: true, required: false
    private _range = new RangePropertyOutputReference(this, "range");
    public get range() {
        return this._range;
    }
    public putRange(value: RangeProperty) {
        this._range.internalValue = value;
    }
    public resetRange() {
        this._range.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rangeInput() {
        return this._range.internalValue;
    }

    // threshold - computed: true, optional: true, required: false
    private _threshold = new ThresholdPropertyOutputReference(this, "threshold");
    public get threshold() {
        return this._threshold;
    }
    public putThreshold(value: ThresholdProperty) {
        this._threshold.internalValue = value;
    }
    public resetThreshold() {
        this._threshold.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get thresholdInput() {
        return this._threshold.internalValue;
    }
}
export interface AttributesProperty {
    /**
    * The action to filter with.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/customerprofiles_calculated_attribute_definition#dimension_type CcCalculatedAttributeDefinition#dimension_type}
    */
    readonly dimensionType?: string;
    /**
    * The values to apply the DimensionType on.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/customerprofiles_calculated_attribute_definition#values CcCalculatedAttributeDefinition#values}
    */
    readonly values?: string[];
}
export class AttributesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AttributesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dimensionType !== undefined) {
            hasAnyValues = true;
            internalValueResult.dimensionType = this._dimensionType;
        }
        if (this._values !== undefined) {
            hasAnyValues = true;
            internalValueResult.values = this._values;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AttributesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dimensionType = undefined;
            this._values = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dimensionType = value.dimensionType;
            this._values = value.values;
        }
    }

    // dimension_type - computed: true, optional: true, required: false
    private _dimensionType?: string; 
    public get dimensionType() {
        return this.getStringAttribute('dimension_type');
    }
    public set dimensionType(value: string) {
        this._dimensionType = value;
    }
    public resetDimensionType() {
        this._dimensionType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dimensionTypeInput() {
        return this._dimensionType;
    }

    // values - computed: true, optional: true, required: false
    private _values?: string[]; 
    public get values() {
        return cdktn.Fn.tolist(this.getListAttribute('values'));
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

export class AttributesPropertyMap extends cdktn.ComplexMap {
    public internalValue? : { [key: string]: AttributesProperty } | cdktn.IResolvable

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
    public get(key: string): AttributesPropertyOutputReference {
        return new AttributesPropertyOutputReference(this.terraformResource, this.terraformAttribute, key);
    }
}
export interface DimensionsProperty {
    /**
    * Is the attribute within the FilterDimension map
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/customerprofiles_calculated_attribute_definition#attributes CcCalculatedAttributeDefinition#attributes}
    */
    readonly attributes?: { [key: string]: AttributesProperty } | cdktn.IResolvable;
}
export class DimensionsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): DimensionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._attributes?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.attributes = this._attributes?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DimensionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._attributes.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._attributes.internalValue = value.attributes;
        }
    }

    // attributes - computed: true, optional: true, required: false
    private _attributes = new AttributesPropertyMap(this, "attributes");
    public get attributes() {
        return this._attributes;
    }
    public putAttributes(value: { [key: string]: AttributesProperty } | cdktn.IResolvable) {
        this._attributes.internalValue = value;
    }
    public resetAttributes() {
        this._attributes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get attributesInput() {
        return this._attributes.internalValue;
    }
}

export class DimensionsPropertyList extends cdktn.ComplexList {
    public internalValue? : DimensionsProperty[] | cdktn.IResolvable

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
    public get(index: number): DimensionsPropertyOutputReference {
        return new DimensionsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface GroupsProperty {
    /**
    * Object that holds the attributes to filter on.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/customerprofiles_calculated_attribute_definition#dimensions CcCalculatedAttributeDefinition#dimensions}
    */
    readonly dimensions?: DimensionsProperty[] | cdktn.IResolvable;
    /**
    * The type of logical relationship between the dimensions of the Filter group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/customerprofiles_calculated_attribute_definition#type CcCalculatedAttributeDefinition#type}
    */
    readonly type?: string;
}
export class GroupsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): GroupsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dimensions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dimensions = this._dimensions?.internalValue;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: GroupsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dimensions.internalValue = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dimensions.internalValue = value.dimensions;
            this._type = value.type;
        }
    }

    // dimensions - computed: true, optional: true, required: false
    private _dimensions = new DimensionsPropertyList(this, "dimensions", true);
    public get dimensions() {
        return this._dimensions;
    }
    public putDimensions(value: DimensionsProperty[] | cdktn.IResolvable) {
        this._dimensions.internalValue = value;
    }
    public resetDimensions() {
        this._dimensions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dimensionsInput() {
        return this._dimensions.internalValue;
    }

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }
}

export class GroupsPropertyList extends cdktn.ComplexList {
    public internalValue? : GroupsProperty[] | cdktn.IResolvable

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
    public get(index: number): GroupsPropertyOutputReference {
        return new GroupsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface FilterProperty {
    /**
    * Holds the list of Filter groups within the Filter definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/customerprofiles_calculated_attribute_definition#groups CcCalculatedAttributeDefinition#groups}
    */
    readonly groups?: GroupsProperty[] | cdktn.IResolvable;
    /**
    * Define whether to include or exclude objects for Calculated Attributed calculation that fit the filter groups criteria.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/customerprofiles_calculated_attribute_definition#include CcCalculatedAttributeDefinition#include}
    */
    readonly include?: string;
}
export class FilterPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FilterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._groups?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.groups = this._groups?.internalValue;
        }
        if (this._include !== undefined) {
            hasAnyValues = true;
            internalValueResult.include = this._include;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FilterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._groups.internalValue = undefined;
            this._include = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._groups.internalValue = value.groups;
            this._include = value.include;
        }
    }

    // groups - computed: true, optional: true, required: false
    private _groups = new GroupsPropertyList(this, "groups", true);
    public get groups() {
        return this._groups;
    }
    public putGroups(value: GroupsProperty[] | cdktn.IResolvable) {
        this._groups.internalValue = value;
    }
    public resetGroups() {
        this._groups.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get groupsInput() {
        return this._groups.internalValue;
    }

    // include - computed: true, optional: true, required: false
    private _include?: string; 
    public get include() {
        return this.getStringAttribute('include');
    }
    public set include(value: string) {
        this._include = value;
    }
    public resetInclude() {
        this._include = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get includeInput() {
        return this._include;
    }
}
export interface ReadinessProperty {
}
export class ReadinessPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ReadinessProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ReadinessProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // message - computed: true, optional: false, required: false
    public get message() {
        return this.getStringAttribute('message');
    }

    // progress_percentage - computed: true, optional: false, required: false
    public get progressPercentage() {
        return this.getNumberAttribute('progress_percentage');
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/customerprofiles_calculated_attribute_definition#key CcCalculatedAttributeDefinition#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/customerprofiles_calculated_attribute_definition#value CcCalculatedAttributeDefinition#value}
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
