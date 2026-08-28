// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcSegmentDefinitionProps extends cdktn.TerraformMetaArguments {
    /**
    * The description of the segment definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#description CcSegmentDefinition#description}
    */
    readonly description?: string;
    /**
    * The display name of the segment definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#display_name CcSegmentDefinition#display_name}
    */
    readonly displayName: string;
    /**
    * The unique name of the domain.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#domain_name CcSegmentDefinition#domain_name}
    */
    readonly domainName: string;
    /**
    * The unique name of the segment definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#segment_definition_name CcSegmentDefinition#segment_definition_name}
    */
    readonly segmentDefinitionName: string;
    /**
    * An array that defines the set of segment criteria to evaluate when handling segment groups for the segment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#segment_groups CcSegmentDefinition#segment_groups}
    */
    readonly segmentGroups?: CcSegmentDefinition.SegmentGroupProperty;
    /**
    * The segment sort configuration for ordering segment results.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#segment_sort CcSegmentDefinition#segment_sort}
    */
    readonly segmentSort?: CcSegmentDefinition.SegmentSortProperty;
    /**
    * The SQL query that defines the segment criteria.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#segment_sql_query CcSegmentDefinition#segment_sql_query}
    */
    readonly segmentSqlQuery?: string;
    /**
    * The tags used to organize, track, or control access for this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#tags CcSegmentDefinition#tags}
    */
    readonly tags?: CcSegmentDefinition.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition awscc_customerprofiles_segment_definition}
*/
export class CcSegmentDefinition extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_customerprofiles_segment_definition";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcSegmentDefinition resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcSegmentDefinition to import
    * @param importFromId The id of the existing CcSegmentDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcSegmentDefinition to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_customerprofiles_segment_definition", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition awscc_customerprofiles_segment_definition} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcSegmentDefinitionProps
    */
    public constructor(scope: Construct, id: string, config: CcSegmentDefinitionProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_customerprofiles_segment_definition',
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
        this._description = config.description;
        this._displayName = config.displayName;
        this._domainName = config.domainName;
        this._segmentDefinitionName = config.segmentDefinitionName;
        this._segmentGroups.internalValue = config.segmentGroups;
        this._segmentSort.internalValue = config.segmentSort;
        this._segmentSqlQuery = config.segmentSqlQuery;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

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

    // display_name - computed: false, optional: false, required: true
    private _displayName?: string; 
    public get displayName() {
        return this.getStringAttribute('display_name');
    }
    public set displayName(value: string) {
        this._displayName = value;
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

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // segment_definition_arn - computed: true, optional: false, required: false
    public get segmentDefinitionArn() {
        return this.getStringAttribute('segment_definition_arn');
    }

    // segment_definition_name - computed: false, optional: false, required: true
    private _segmentDefinitionName?: string; 
    public get segmentDefinitionName() {
        return this.getStringAttribute('segment_definition_name');
    }
    public set segmentDefinitionName(value: string) {
        this._segmentDefinitionName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get segmentDefinitionNameInput() {
        return this._segmentDefinitionName;
    }

    // segment_groups - computed: true, optional: true, required: false
    private _segmentGroups = new CcSegmentDefinition.SegmentGroupPropertyOutputReference(this, "segment_groups");
    public get segmentGroups() {
        return this._segmentGroups;
    }
    public putSegmentGroups(value: CcSegmentDefinition.SegmentGroupProperty) {
        this._segmentGroups.internalValue = value;
    }
    public resetSegmentGroups() {
        this._segmentGroups.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get segmentGroupsInput() {
        return this._segmentGroups.internalValue;
    }

    // segment_sort - computed: true, optional: true, required: false
    private _segmentSort = new CcSegmentDefinition.SegmentSortPropertyOutputReference(this, "segment_sort");
    public get segmentSort() {
        return this._segmentSort;
    }
    public putSegmentSort(value: CcSegmentDefinition.SegmentSortProperty) {
        this._segmentSort.internalValue = value;
    }
    public resetSegmentSort() {
        this._segmentSort.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get segmentSortInput() {
        return this._segmentSort.internalValue;
    }

    // segment_sql_query - computed: true, optional: true, required: false
    private _segmentSqlQuery?: string; 
    public get segmentSqlQuery() {
        return this.getStringAttribute('segment_sql_query');
    }
    public set segmentSqlQuery(value: string) {
        this._segmentSqlQuery = value;
    }
    public resetSegmentSqlQuery() {
        this._segmentSqlQuery = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get segmentSqlQueryInput() {
        return this._segmentSqlQuery;
    }

    // segment_type - computed: true, optional: false, required: false
    public get segmentType() {
        return this.getStringAttribute('segment_type');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcSegmentDefinition.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcSegmentDefinition.TagProperty[] | cdktn.IResolvable) {
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
            description: cdktn.stringToTerraform(this._description),
            display_name: cdktn.stringToTerraform(this._displayName),
            domain_name: cdktn.stringToTerraform(this._domainName),
            segment_definition_name: cdktn.stringToTerraform(this._segmentDefinitionName),
            segment_groups: ccSegmentDefinitionSegmentGroupPropertyToTerraform(this._segmentGroups.internalValue),
            segment_sort: ccSegmentDefinitionSegmentSortPropertyToTerraform(this._segmentSort.internalValue),
            segment_sql_query: cdktn.stringToTerraform(this._segmentSqlQuery),
            tags: cdktn.listMapper(ccSegmentDefinitionTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
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
            segment_definition_name: {
                value: cdktn.stringToHclTerraform(this._segmentDefinitionName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            segment_groups: {
                value: ccSegmentDefinitionSegmentGroupPropertyToHclTerraform(this._segmentGroups.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcSegmentDefinition.SegmentGroupProperty",
            },
            segment_sort: {
                value: ccSegmentDefinitionSegmentSortPropertyToHclTerraform(this._segmentSort.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcSegmentDefinition.SegmentSortProperty",
            },
            segment_sql_query: {
                value: cdktn.stringToHclTerraform(this._segmentSqlQuery),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccSegmentDefinitionTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcSegmentDefinition.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccSegmentDefinitionRangeOverridePropertyToTerraform(struct?: CcSegmentDefinition.RangeOverrideProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        end: cdktn.numberToTerraform(struct!.end),
        start: cdktn.numberToTerraform(struct!.start),
        unit: cdktn.stringToTerraform(struct!.unit),
    }
}


export function ccSegmentDefinitionRangeOverridePropertyToHclTerraform(struct?: CcSegmentDefinition.RangeOverrideProperty | cdktn.IResolvable): any {
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


export function ccSegmentDefinitionConditionOverridesPropertyToTerraform(struct?: CcSegmentDefinition.ConditionOverridesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        range: ccSegmentDefinitionRangeOverridePropertyToTerraform(struct!.range),
    }
}


export function ccSegmentDefinitionConditionOverridesPropertyToHclTerraform(struct?: CcSegmentDefinition.ConditionOverridesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        range: {
            value: ccSegmentDefinitionRangeOverridePropertyToHclTerraform(struct!.range),
            isBlock: true,
            type: "struct",
            storageClassType: "RangeOverrideProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSegmentDefinitionCalculatedAttributeDimensionPropertyToTerraform(struct?: CcSegmentDefinition.CalculatedAttributeDimensionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        condition_overrides: ccSegmentDefinitionConditionOverridesPropertyToTerraform(struct!.conditionOverrides),
        dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccSegmentDefinitionCalculatedAttributeDimensionPropertyToHclTerraform(struct?: CcSegmentDefinition.CalculatedAttributeDimensionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        condition_overrides: {
            value: ccSegmentDefinitionConditionOverridesPropertyToHclTerraform(struct!.conditionOverrides),
            isBlock: true,
            type: "struct",
            storageClassType: "ConditionOverridesProperty",
        },
        dimension_type: {
            value: cdktn.stringToHclTerraform(struct!.dimensionType),
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


export function ccSegmentDefinitionProfileDimensionPropertyToTerraform(struct?: CcSegmentDefinition.ProfileDimensionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccSegmentDefinitionProfileDimensionPropertyToHclTerraform(struct?: CcSegmentDefinition.ProfileDimensionProperty | cdktn.IResolvable): any {
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
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSegmentDefinitionExtraLengthValueProfileDimensionPropertyToTerraform(struct?: CcSegmentDefinition.ExtraLengthValueProfileDimensionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccSegmentDefinitionExtraLengthValueProfileDimensionPropertyToHclTerraform(struct?: CcSegmentDefinition.ExtraLengthValueProfileDimensionProperty | cdktn.IResolvable): any {
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
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressCityPropertyToTerraform(struct?: CcSegmentDefinition.SegmentGroupsGroupsDimensionsProfileAttributesAddressCityProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressCityPropertyToHclTerraform(struct?: CcSegmentDefinition.SegmentGroupsGroupsDimensionsProfileAttributesAddressCityProperty | cdktn.IResolvable): any {
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
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressCountryPropertyToTerraform(struct?: CcSegmentDefinition.SegmentGroupsGroupsDimensionsProfileAttributesAddressCountryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressCountryPropertyToHclTerraform(struct?: CcSegmentDefinition.SegmentGroupsGroupsDimensionsProfileAttributesAddressCountryProperty | cdktn.IResolvable): any {
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
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressCountyPropertyToTerraform(struct?: CcSegmentDefinition.SegmentGroupsGroupsDimensionsProfileAttributesAddressCountyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressCountyPropertyToHclTerraform(struct?: CcSegmentDefinition.SegmentGroupsGroupsDimensionsProfileAttributesAddressCountyProperty | cdktn.IResolvable): any {
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
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressPostalCodePropertyToTerraform(struct?: CcSegmentDefinition.SegmentGroupsGroupsDimensionsProfileAttributesAddressPostalCodeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressPostalCodePropertyToHclTerraform(struct?: CcSegmentDefinition.SegmentGroupsGroupsDimensionsProfileAttributesAddressPostalCodeProperty | cdktn.IResolvable): any {
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
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressProvincePropertyToTerraform(struct?: CcSegmentDefinition.SegmentGroupsGroupsDimensionsProfileAttributesAddressProvinceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressProvincePropertyToHclTerraform(struct?: CcSegmentDefinition.SegmentGroupsGroupsDimensionsProfileAttributesAddressProvinceProperty | cdktn.IResolvable): any {
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
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressStatePropertyToTerraform(struct?: CcSegmentDefinition.SegmentGroupsGroupsDimensionsProfileAttributesAddressStateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressStatePropertyToHclTerraform(struct?: CcSegmentDefinition.SegmentGroupsGroupsDimensionsProfileAttributesAddressStateProperty | cdktn.IResolvable): any {
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
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSegmentDefinitionAddressDimensionPropertyToTerraform(struct?: CcSegmentDefinition.AddressDimensionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        city: ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressCityPropertyToTerraform(struct!.city),
        country: ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressCountryPropertyToTerraform(struct!.country),
        county: ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressCountyPropertyToTerraform(struct!.county),
        postal_code: ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressPostalCodePropertyToTerraform(struct!.postalCode),
        province: ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressProvincePropertyToTerraform(struct!.province),
        state: ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressStatePropertyToTerraform(struct!.state),
    }
}


export function ccSegmentDefinitionAddressDimensionPropertyToHclTerraform(struct?: CcSegmentDefinition.AddressDimensionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        city: {
            value: ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressCityPropertyToHclTerraform(struct!.city),
            isBlock: true,
            type: "struct",
            storageClassType: "SegmentGroupsGroupsDimensionsProfileAttributesAddressCityProperty",
        },
        country: {
            value: ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressCountryPropertyToHclTerraform(struct!.country),
            isBlock: true,
            type: "struct",
            storageClassType: "SegmentGroupsGroupsDimensionsProfileAttributesAddressCountryProperty",
        },
        county: {
            value: ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressCountyPropertyToHclTerraform(struct!.county),
            isBlock: true,
            type: "struct",
            storageClassType: "SegmentGroupsGroupsDimensionsProfileAttributesAddressCountyProperty",
        },
        postal_code: {
            value: ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressPostalCodePropertyToHclTerraform(struct!.postalCode),
            isBlock: true,
            type: "struct",
            storageClassType: "SegmentGroupsGroupsDimensionsProfileAttributesAddressPostalCodeProperty",
        },
        province: {
            value: ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressProvincePropertyToHclTerraform(struct!.province),
            isBlock: true,
            type: "struct",
            storageClassType: "SegmentGroupsGroupsDimensionsProfileAttributesAddressProvinceProperty",
        },
        state: {
            value: ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesAddressStatePropertyToHclTerraform(struct!.state),
            isBlock: true,
            type: "struct",
            storageClassType: "SegmentGroupsGroupsDimensionsProfileAttributesAddressStateProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSegmentDefinitionAttributeDimensionPropertyToTerraform(struct?: CcSegmentDefinition.AttributeDimensionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccSegmentDefinitionAttributeDimensionPropertyToHclTerraform(struct?: CcSegmentDefinition.AttributeDimensionProperty | cdktn.IResolvable): any {
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
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCityPropertyToTerraform(struct?: CcSegmentDefinition.SegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCityProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCityPropertyToHclTerraform(struct?: CcSegmentDefinition.SegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCityProperty | cdktn.IResolvable): any {
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
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCountryPropertyToTerraform(struct?: CcSegmentDefinition.SegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCountryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCountryPropertyToHclTerraform(struct?: CcSegmentDefinition.SegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCountryProperty | cdktn.IResolvable): any {
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
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCountyPropertyToTerraform(struct?: CcSegmentDefinition.SegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCountyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCountyPropertyToHclTerraform(struct?: CcSegmentDefinition.SegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCountyProperty | cdktn.IResolvable): any {
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
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressPostalCodePropertyToTerraform(struct?: CcSegmentDefinition.SegmentGroupsGroupsDimensionsProfileAttributesBillingAddressPostalCodeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressPostalCodePropertyToHclTerraform(struct?: CcSegmentDefinition.SegmentGroupsGroupsDimensionsProfileAttributesBillingAddressPostalCodeProperty | cdktn.IResolvable): any {
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
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressProvincePropertyToTerraform(struct?: CcSegmentDefinition.SegmentGroupsGroupsDimensionsProfileAttributesBillingAddressProvinceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressProvincePropertyToHclTerraform(struct?: CcSegmentDefinition.SegmentGroupsGroupsDimensionsProfileAttributesBillingAddressProvinceProperty | cdktn.IResolvable): any {
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
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressStatePropertyToTerraform(struct?: CcSegmentDefinition.SegmentGroupsGroupsDimensionsProfileAttributesBillingAddressStateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressStatePropertyToHclTerraform(struct?: CcSegmentDefinition.SegmentGroupsGroupsDimensionsProfileAttributesBillingAddressStateProperty | cdktn.IResolvable): any {
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
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSegmentDefinitionBillingAddressPropertyToTerraform(struct?: CcSegmentDefinition.BillingAddressProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        city: ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCityPropertyToTerraform(struct!.city),
        country: ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCountryPropertyToTerraform(struct!.country),
        county: ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCountyPropertyToTerraform(struct!.county),
        postal_code: ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressPostalCodePropertyToTerraform(struct!.postalCode),
        province: ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressProvincePropertyToTerraform(struct!.province),
        state: ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressStatePropertyToTerraform(struct!.state),
    }
}


export function ccSegmentDefinitionBillingAddressPropertyToHclTerraform(struct?: CcSegmentDefinition.BillingAddressProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        city: {
            value: ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCityPropertyToHclTerraform(struct!.city),
            isBlock: true,
            type: "struct",
            storageClassType: "SegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCityProperty",
        },
        country: {
            value: ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCountryPropertyToHclTerraform(struct!.country),
            isBlock: true,
            type: "struct",
            storageClassType: "SegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCountryProperty",
        },
        county: {
            value: ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCountyPropertyToHclTerraform(struct!.county),
            isBlock: true,
            type: "struct",
            storageClassType: "SegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCountyProperty",
        },
        postal_code: {
            value: ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressPostalCodePropertyToHclTerraform(struct!.postalCode),
            isBlock: true,
            type: "struct",
            storageClassType: "SegmentGroupsGroupsDimensionsProfileAttributesBillingAddressPostalCodeProperty",
        },
        province: {
            value: ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressProvincePropertyToHclTerraform(struct!.province),
            isBlock: true,
            type: "struct",
            storageClassType: "SegmentGroupsGroupsDimensionsProfileAttributesBillingAddressProvinceProperty",
        },
        state: {
            value: ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesBillingAddressStatePropertyToHclTerraform(struct!.state),
            isBlock: true,
            type: "struct",
            storageClassType: "SegmentGroupsGroupsDimensionsProfileAttributesBillingAddressStateProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSegmentDefinitionDateDimensionPropertyToTerraform(struct?: CcSegmentDefinition.DateDimensionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccSegmentDefinitionDateDimensionPropertyToHclTerraform(struct?: CcSegmentDefinition.DateDimensionProperty | cdktn.IResolvable): any {
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
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSegmentDefinitionBusinessEmailAddressPropertyToTerraform(struct?: CcSegmentDefinition.BusinessEmailAddressProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccSegmentDefinitionBusinessEmailAddressPropertyToHclTerraform(struct?: CcSegmentDefinition.BusinessEmailAddressProperty | cdktn.IResolvable): any {
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
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSegmentDefinitionBusinessNamePropertyToTerraform(struct?: CcSegmentDefinition.BusinessNameProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccSegmentDefinitionBusinessNamePropertyToHclTerraform(struct?: CcSegmentDefinition.BusinessNameProperty | cdktn.IResolvable): any {
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
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSegmentDefinitionBusinessPhoneNumberPropertyToTerraform(struct?: CcSegmentDefinition.BusinessPhoneNumberProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccSegmentDefinitionBusinessPhoneNumberPropertyToHclTerraform(struct?: CcSegmentDefinition.BusinessPhoneNumberProperty | cdktn.IResolvable): any {
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
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSegmentDefinitionEmailAddressPropertyToTerraform(struct?: CcSegmentDefinition.EmailAddressProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccSegmentDefinitionEmailAddressPropertyToHclTerraform(struct?: CcSegmentDefinition.EmailAddressProperty | cdktn.IResolvable): any {
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
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSegmentDefinitionFirstNamePropertyToTerraform(struct?: CcSegmentDefinition.FirstNameProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccSegmentDefinitionFirstNamePropertyToHclTerraform(struct?: CcSegmentDefinition.FirstNameProperty | cdktn.IResolvable): any {
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
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSegmentDefinitionGenderStringPropertyToTerraform(struct?: CcSegmentDefinition.GenderStringProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccSegmentDefinitionGenderStringPropertyToHclTerraform(struct?: CcSegmentDefinition.GenderStringProperty | cdktn.IResolvable): any {
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
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSegmentDefinitionHomePhoneNumberPropertyToTerraform(struct?: CcSegmentDefinition.HomePhoneNumberProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccSegmentDefinitionHomePhoneNumberPropertyToHclTerraform(struct?: CcSegmentDefinition.HomePhoneNumberProperty | cdktn.IResolvable): any {
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
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSegmentDefinitionLastNamePropertyToTerraform(struct?: CcSegmentDefinition.LastNameProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccSegmentDefinitionLastNamePropertyToHclTerraform(struct?: CcSegmentDefinition.LastNameProperty | cdktn.IResolvable): any {
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
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCityPropertyToTerraform(struct?: CcSegmentDefinition.SegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCityProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCityPropertyToHclTerraform(struct?: CcSegmentDefinition.SegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCityProperty | cdktn.IResolvable): any {
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
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCountryPropertyToTerraform(struct?: CcSegmentDefinition.SegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCountryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCountryPropertyToHclTerraform(struct?: CcSegmentDefinition.SegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCountryProperty | cdktn.IResolvable): any {
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
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCountyPropertyToTerraform(struct?: CcSegmentDefinition.SegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCountyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCountyPropertyToHclTerraform(struct?: CcSegmentDefinition.SegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCountyProperty | cdktn.IResolvable): any {
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
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressPostalCodePropertyToTerraform(struct?: CcSegmentDefinition.SegmentGroupsGroupsDimensionsProfileAttributesMailingAddressPostalCodeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressPostalCodePropertyToHclTerraform(struct?: CcSegmentDefinition.SegmentGroupsGroupsDimensionsProfileAttributesMailingAddressPostalCodeProperty | cdktn.IResolvable): any {
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
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressProvincePropertyToTerraform(struct?: CcSegmentDefinition.SegmentGroupsGroupsDimensionsProfileAttributesMailingAddressProvinceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressProvincePropertyToHclTerraform(struct?: CcSegmentDefinition.SegmentGroupsGroupsDimensionsProfileAttributesMailingAddressProvinceProperty | cdktn.IResolvable): any {
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
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressStatePropertyToTerraform(struct?: CcSegmentDefinition.SegmentGroupsGroupsDimensionsProfileAttributesMailingAddressStateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressStatePropertyToHclTerraform(struct?: CcSegmentDefinition.SegmentGroupsGroupsDimensionsProfileAttributesMailingAddressStateProperty | cdktn.IResolvable): any {
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
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSegmentDefinitionMailingAddressPropertyToTerraform(struct?: CcSegmentDefinition.MailingAddressProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        city: ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCityPropertyToTerraform(struct!.city),
        country: ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCountryPropertyToTerraform(struct!.country),
        county: ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCountyPropertyToTerraform(struct!.county),
        postal_code: ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressPostalCodePropertyToTerraform(struct!.postalCode),
        province: ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressProvincePropertyToTerraform(struct!.province),
        state: ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressStatePropertyToTerraform(struct!.state),
    }
}


export function ccSegmentDefinitionMailingAddressPropertyToHclTerraform(struct?: CcSegmentDefinition.MailingAddressProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        city: {
            value: ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCityPropertyToHclTerraform(struct!.city),
            isBlock: true,
            type: "struct",
            storageClassType: "SegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCityProperty",
        },
        country: {
            value: ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCountryPropertyToHclTerraform(struct!.country),
            isBlock: true,
            type: "struct",
            storageClassType: "SegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCountryProperty",
        },
        county: {
            value: ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCountyPropertyToHclTerraform(struct!.county),
            isBlock: true,
            type: "struct",
            storageClassType: "SegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCountyProperty",
        },
        postal_code: {
            value: ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressPostalCodePropertyToHclTerraform(struct!.postalCode),
            isBlock: true,
            type: "struct",
            storageClassType: "SegmentGroupsGroupsDimensionsProfileAttributesMailingAddressPostalCodeProperty",
        },
        province: {
            value: ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressProvincePropertyToHclTerraform(struct!.province),
            isBlock: true,
            type: "struct",
            storageClassType: "SegmentGroupsGroupsDimensionsProfileAttributesMailingAddressProvinceProperty",
        },
        state: {
            value: ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesMailingAddressStatePropertyToHclTerraform(struct!.state),
            isBlock: true,
            type: "struct",
            storageClassType: "SegmentGroupsGroupsDimensionsProfileAttributesMailingAddressStateProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSegmentDefinitionMiddleNamePropertyToTerraform(struct?: CcSegmentDefinition.MiddleNameProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccSegmentDefinitionMiddleNamePropertyToHclTerraform(struct?: CcSegmentDefinition.MiddleNameProperty | cdktn.IResolvable): any {
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
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSegmentDefinitionMobilePhoneNumberPropertyToTerraform(struct?: CcSegmentDefinition.MobilePhoneNumberProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccSegmentDefinitionMobilePhoneNumberPropertyToHclTerraform(struct?: CcSegmentDefinition.MobilePhoneNumberProperty | cdktn.IResolvable): any {
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
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSegmentDefinitionPartyTypeStringPropertyToTerraform(struct?: CcSegmentDefinition.PartyTypeStringProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccSegmentDefinitionPartyTypeStringPropertyToHclTerraform(struct?: CcSegmentDefinition.PartyTypeStringProperty | cdktn.IResolvable): any {
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
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSegmentDefinitionPersonalEmailAddressPropertyToTerraform(struct?: CcSegmentDefinition.PersonalEmailAddressProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccSegmentDefinitionPersonalEmailAddressPropertyToHclTerraform(struct?: CcSegmentDefinition.PersonalEmailAddressProperty | cdktn.IResolvable): any {
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
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSegmentDefinitionPhoneNumberPropertyToTerraform(struct?: CcSegmentDefinition.PhoneNumberProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccSegmentDefinitionPhoneNumberPropertyToHclTerraform(struct?: CcSegmentDefinition.PhoneNumberProperty | cdktn.IResolvable): any {
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
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSegmentDefinitionProfileTypeDimensionPropertyToTerraform(struct?: CcSegmentDefinition.ProfileTypeDimensionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccSegmentDefinitionProfileTypeDimensionPropertyToHclTerraform(struct?: CcSegmentDefinition.ProfileTypeDimensionProperty | cdktn.IResolvable): any {
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
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCityPropertyToTerraform(struct?: CcSegmentDefinition.SegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCityProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCityPropertyToHclTerraform(struct?: CcSegmentDefinition.SegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCityProperty | cdktn.IResolvable): any {
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
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCountryPropertyToTerraform(struct?: CcSegmentDefinition.SegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCountryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCountryPropertyToHclTerraform(struct?: CcSegmentDefinition.SegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCountryProperty | cdktn.IResolvable): any {
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
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCountyPropertyToTerraform(struct?: CcSegmentDefinition.SegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCountyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCountyPropertyToHclTerraform(struct?: CcSegmentDefinition.SegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCountyProperty | cdktn.IResolvable): any {
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
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressPostalCodePropertyToTerraform(struct?: CcSegmentDefinition.SegmentGroupsGroupsDimensionsProfileAttributesShippingAddressPostalCodeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressPostalCodePropertyToHclTerraform(struct?: CcSegmentDefinition.SegmentGroupsGroupsDimensionsProfileAttributesShippingAddressPostalCodeProperty | cdktn.IResolvable): any {
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
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressProvincePropertyToTerraform(struct?: CcSegmentDefinition.SegmentGroupsGroupsDimensionsProfileAttributesShippingAddressProvinceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressProvincePropertyToHclTerraform(struct?: CcSegmentDefinition.SegmentGroupsGroupsDimensionsProfileAttributesShippingAddressProvinceProperty | cdktn.IResolvable): any {
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
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressStatePropertyToTerraform(struct?: CcSegmentDefinition.SegmentGroupsGroupsDimensionsProfileAttributesShippingAddressStateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dimension_type: cdktn.stringToTerraform(struct!.dimensionType),
        values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.values),
    }
}


export function ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressStatePropertyToHclTerraform(struct?: CcSegmentDefinition.SegmentGroupsGroupsDimensionsProfileAttributesShippingAddressStateProperty | cdktn.IResolvable): any {
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
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSegmentDefinitionShippingAddressPropertyToTerraform(struct?: CcSegmentDefinition.ShippingAddressProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        city: ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCityPropertyToTerraform(struct!.city),
        country: ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCountryPropertyToTerraform(struct!.country),
        county: ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCountyPropertyToTerraform(struct!.county),
        postal_code: ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressPostalCodePropertyToTerraform(struct!.postalCode),
        province: ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressProvincePropertyToTerraform(struct!.province),
        state: ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressStatePropertyToTerraform(struct!.state),
    }
}


export function ccSegmentDefinitionShippingAddressPropertyToHclTerraform(struct?: CcSegmentDefinition.ShippingAddressProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        city: {
            value: ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCityPropertyToHclTerraform(struct!.city),
            isBlock: true,
            type: "struct",
            storageClassType: "SegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCityProperty",
        },
        country: {
            value: ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCountryPropertyToHclTerraform(struct!.country),
            isBlock: true,
            type: "struct",
            storageClassType: "SegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCountryProperty",
        },
        county: {
            value: ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCountyPropertyToHclTerraform(struct!.county),
            isBlock: true,
            type: "struct",
            storageClassType: "SegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCountyProperty",
        },
        postal_code: {
            value: ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressPostalCodePropertyToHclTerraform(struct!.postalCode),
            isBlock: true,
            type: "struct",
            storageClassType: "SegmentGroupsGroupsDimensionsProfileAttributesShippingAddressPostalCodeProperty",
        },
        province: {
            value: ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressProvincePropertyToHclTerraform(struct!.province),
            isBlock: true,
            type: "struct",
            storageClassType: "SegmentGroupsGroupsDimensionsProfileAttributesShippingAddressProvinceProperty",
        },
        state: {
            value: ccSegmentDefinitionSegmentGroupsGroupsDimensionsProfileAttributesShippingAddressStatePropertyToHclTerraform(struct!.state),
            isBlock: true,
            type: "struct",
            storageClassType: "SegmentGroupsGroupsDimensionsProfileAttributesShippingAddressStateProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSegmentDefinitionProfileAttributesPropertyToTerraform(struct?: CcSegmentDefinition.ProfileAttributesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        account_number: ccSegmentDefinitionProfileDimensionPropertyToTerraform(struct!.accountNumber),
        additional_information: ccSegmentDefinitionExtraLengthValueProfileDimensionPropertyToTerraform(struct!.additionalInformation),
        address: ccSegmentDefinitionAddressDimensionPropertyToTerraform(struct!.address),
        attributes: cdktn.hashMapper(ccSegmentDefinitionAttributeDimensionPropertyToTerraform)(struct!.attributes),
        billing_address: ccSegmentDefinitionBillingAddressPropertyToTerraform(struct!.billingAddress),
        birth_date: ccSegmentDefinitionDateDimensionPropertyToTerraform(struct!.birthDate),
        business_email_address: ccSegmentDefinitionBusinessEmailAddressPropertyToTerraform(struct!.businessEmailAddress),
        business_name: ccSegmentDefinitionBusinessNamePropertyToTerraform(struct!.businessName),
        business_phone_number: ccSegmentDefinitionBusinessPhoneNumberPropertyToTerraform(struct!.businessPhoneNumber),
        email_address: ccSegmentDefinitionEmailAddressPropertyToTerraform(struct!.emailAddress),
        first_name: ccSegmentDefinitionFirstNamePropertyToTerraform(struct!.firstName),
        gender_string: ccSegmentDefinitionGenderStringPropertyToTerraform(struct!.genderString),
        home_phone_number: ccSegmentDefinitionHomePhoneNumberPropertyToTerraform(struct!.homePhoneNumber),
        last_name: ccSegmentDefinitionLastNamePropertyToTerraform(struct!.lastName),
        mailing_address: ccSegmentDefinitionMailingAddressPropertyToTerraform(struct!.mailingAddress),
        middle_name: ccSegmentDefinitionMiddleNamePropertyToTerraform(struct!.middleName),
        mobile_phone_number: ccSegmentDefinitionMobilePhoneNumberPropertyToTerraform(struct!.mobilePhoneNumber),
        party_type_string: ccSegmentDefinitionPartyTypeStringPropertyToTerraform(struct!.partyTypeString),
        personal_email_address: ccSegmentDefinitionPersonalEmailAddressPropertyToTerraform(struct!.personalEmailAddress),
        phone_number: ccSegmentDefinitionPhoneNumberPropertyToTerraform(struct!.phoneNumber),
        profile_type: ccSegmentDefinitionProfileTypeDimensionPropertyToTerraform(struct!.profileType),
        shipping_address: ccSegmentDefinitionShippingAddressPropertyToTerraform(struct!.shippingAddress),
    }
}


export function ccSegmentDefinitionProfileAttributesPropertyToHclTerraform(struct?: CcSegmentDefinition.ProfileAttributesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        account_number: {
            value: ccSegmentDefinitionProfileDimensionPropertyToHclTerraform(struct!.accountNumber),
            isBlock: true,
            type: "struct",
            storageClassType: "ProfileDimensionProperty",
        },
        additional_information: {
            value: ccSegmentDefinitionExtraLengthValueProfileDimensionPropertyToHclTerraform(struct!.additionalInformation),
            isBlock: true,
            type: "struct",
            storageClassType: "ExtraLengthValueProfileDimensionProperty",
        },
        address: {
            value: ccSegmentDefinitionAddressDimensionPropertyToHclTerraform(struct!.address),
            isBlock: true,
            type: "struct",
            storageClassType: "AddressDimensionProperty",
        },
        attributes: {
            value: cdktn.hashMapperHcl(ccSegmentDefinitionAttributeDimensionPropertyToHclTerraform)(struct!.attributes),
            isBlock: true,
            type: "map",
            storageClassType: "AttributeDimensionPropertyMap",
        },
        billing_address: {
            value: ccSegmentDefinitionBillingAddressPropertyToHclTerraform(struct!.billingAddress),
            isBlock: true,
            type: "struct",
            storageClassType: "BillingAddressProperty",
        },
        birth_date: {
            value: ccSegmentDefinitionDateDimensionPropertyToHclTerraform(struct!.birthDate),
            isBlock: true,
            type: "struct",
            storageClassType: "DateDimensionProperty",
        },
        business_email_address: {
            value: ccSegmentDefinitionBusinessEmailAddressPropertyToHclTerraform(struct!.businessEmailAddress),
            isBlock: true,
            type: "struct",
            storageClassType: "BusinessEmailAddressProperty",
        },
        business_name: {
            value: ccSegmentDefinitionBusinessNamePropertyToHclTerraform(struct!.businessName),
            isBlock: true,
            type: "struct",
            storageClassType: "BusinessNameProperty",
        },
        business_phone_number: {
            value: ccSegmentDefinitionBusinessPhoneNumberPropertyToHclTerraform(struct!.businessPhoneNumber),
            isBlock: true,
            type: "struct",
            storageClassType: "BusinessPhoneNumberProperty",
        },
        email_address: {
            value: ccSegmentDefinitionEmailAddressPropertyToHclTerraform(struct!.emailAddress),
            isBlock: true,
            type: "struct",
            storageClassType: "EmailAddressProperty",
        },
        first_name: {
            value: ccSegmentDefinitionFirstNamePropertyToHclTerraform(struct!.firstName),
            isBlock: true,
            type: "struct",
            storageClassType: "FirstNameProperty",
        },
        gender_string: {
            value: ccSegmentDefinitionGenderStringPropertyToHclTerraform(struct!.genderString),
            isBlock: true,
            type: "struct",
            storageClassType: "GenderStringProperty",
        },
        home_phone_number: {
            value: ccSegmentDefinitionHomePhoneNumberPropertyToHclTerraform(struct!.homePhoneNumber),
            isBlock: true,
            type: "struct",
            storageClassType: "HomePhoneNumberProperty",
        },
        last_name: {
            value: ccSegmentDefinitionLastNamePropertyToHclTerraform(struct!.lastName),
            isBlock: true,
            type: "struct",
            storageClassType: "LastNameProperty",
        },
        mailing_address: {
            value: ccSegmentDefinitionMailingAddressPropertyToHclTerraform(struct!.mailingAddress),
            isBlock: true,
            type: "struct",
            storageClassType: "MailingAddressProperty",
        },
        middle_name: {
            value: ccSegmentDefinitionMiddleNamePropertyToHclTerraform(struct!.middleName),
            isBlock: true,
            type: "struct",
            storageClassType: "MiddleNameProperty",
        },
        mobile_phone_number: {
            value: ccSegmentDefinitionMobilePhoneNumberPropertyToHclTerraform(struct!.mobilePhoneNumber),
            isBlock: true,
            type: "struct",
            storageClassType: "MobilePhoneNumberProperty",
        },
        party_type_string: {
            value: ccSegmentDefinitionPartyTypeStringPropertyToHclTerraform(struct!.partyTypeString),
            isBlock: true,
            type: "struct",
            storageClassType: "PartyTypeStringProperty",
        },
        personal_email_address: {
            value: ccSegmentDefinitionPersonalEmailAddressPropertyToHclTerraform(struct!.personalEmailAddress),
            isBlock: true,
            type: "struct",
            storageClassType: "PersonalEmailAddressProperty",
        },
        phone_number: {
            value: ccSegmentDefinitionPhoneNumberPropertyToHclTerraform(struct!.phoneNumber),
            isBlock: true,
            type: "struct",
            storageClassType: "PhoneNumberProperty",
        },
        profile_type: {
            value: ccSegmentDefinitionProfileTypeDimensionPropertyToHclTerraform(struct!.profileType),
            isBlock: true,
            type: "struct",
            storageClassType: "ProfileTypeDimensionProperty",
        },
        shipping_address: {
            value: ccSegmentDefinitionShippingAddressPropertyToHclTerraform(struct!.shippingAddress),
            isBlock: true,
            type: "struct",
            storageClassType: "ShippingAddressProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSegmentDefinitionDimensionPropertyToTerraform(struct?: CcSegmentDefinition.DimensionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        calculated_attributes: cdktn.hashMapper(ccSegmentDefinitionCalculatedAttributeDimensionPropertyToTerraform)(struct!.calculatedAttributes),
        profile_attributes: ccSegmentDefinitionProfileAttributesPropertyToTerraform(struct!.profileAttributes),
    }
}


export function ccSegmentDefinitionDimensionPropertyToHclTerraform(struct?: CcSegmentDefinition.DimensionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        calculated_attributes: {
            value: cdktn.hashMapperHcl(ccSegmentDefinitionCalculatedAttributeDimensionPropertyToHclTerraform)(struct!.calculatedAttributes),
            isBlock: true,
            type: "map",
            storageClassType: "CalculatedAttributeDimensionPropertyMap",
        },
        profile_attributes: {
            value: ccSegmentDefinitionProfileAttributesPropertyToHclTerraform(struct!.profileAttributes),
            isBlock: true,
            type: "struct",
            storageClassType: "ProfileAttributesProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSegmentDefinitionSourceSegmentPropertyToTerraform(struct?: CcSegmentDefinition.SourceSegmentProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        segment_definition_name: cdktn.stringToTerraform(struct!.segmentDefinitionName),
    }
}


export function ccSegmentDefinitionSourceSegmentPropertyToHclTerraform(struct?: CcSegmentDefinition.SourceSegmentProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        segment_definition_name: {
            value: cdktn.stringToHclTerraform(struct!.segmentDefinitionName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSegmentDefinitionGroupPropertyToTerraform(struct?: CcSegmentDefinition.GroupProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        dimensions: cdktn.listMapper(ccSegmentDefinitionDimensionPropertyToTerraform, false)(struct!.dimensions),
        source_segments: cdktn.listMapper(ccSegmentDefinitionSourceSegmentPropertyToTerraform, false)(struct!.sourceSegments),
        source_type: cdktn.stringToTerraform(struct!.sourceType),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccSegmentDefinitionGroupPropertyToHclTerraform(struct?: CcSegmentDefinition.GroupProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        dimensions: {
            value: cdktn.listMapperHcl(ccSegmentDefinitionDimensionPropertyToHclTerraform, false)(struct!.dimensions),
            isBlock: true,
            type: "list",
            storageClassType: "DimensionPropertyList",
        },
        source_segments: {
            value: cdktn.listMapperHcl(ccSegmentDefinitionSourceSegmentPropertyToHclTerraform, false)(struct!.sourceSegments),
            isBlock: true,
            type: "list",
            storageClassType: "SourceSegmentPropertyList",
        },
        source_type: {
            value: cdktn.stringToHclTerraform(struct!.sourceType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
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


export function ccSegmentDefinitionSegmentGroupPropertyToTerraform(struct?: CcSegmentDefinition.SegmentGroupProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        groups: cdktn.listMapper(ccSegmentDefinitionGroupPropertyToTerraform, false)(struct!.groups),
        include: cdktn.stringToTerraform(struct!.include),
    }
}


export function ccSegmentDefinitionSegmentGroupPropertyToHclTerraform(struct?: CcSegmentDefinition.SegmentGroupProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        groups: {
            value: cdktn.listMapperHcl(ccSegmentDefinitionGroupPropertyToHclTerraform, false)(struct!.groups),
            isBlock: true,
            type: "list",
            storageClassType: "GroupPropertyList",
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


export function ccSegmentDefinitionSortAttributePropertyToTerraform(struct?: CcSegmentDefinition.SortAttributeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        data_type: cdktn.stringToTerraform(struct!.dataType),
        name: cdktn.stringToTerraform(struct!.name),
        order: cdktn.stringToTerraform(struct!.order),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccSegmentDefinitionSortAttributePropertyToHclTerraform(struct?: CcSegmentDefinition.SortAttributeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        data_type: {
            value: cdktn.stringToHclTerraform(struct!.dataType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        order: {
            value: cdktn.stringToHclTerraform(struct!.order),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
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


export function ccSegmentDefinitionSegmentSortPropertyToTerraform(struct?: CcSegmentDefinition.SegmentSortProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        attributes: cdktn.listMapper(ccSegmentDefinitionSortAttributePropertyToTerraform, false)(struct!.attributes),
    }
}


export function ccSegmentDefinitionSegmentSortPropertyToHclTerraform(struct?: CcSegmentDefinition.SegmentSortProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        attributes: {
            value: cdktn.listMapperHcl(ccSegmentDefinitionSortAttributePropertyToHclTerraform, false)(struct!.attributes),
            isBlock: true,
            type: "list",
            storageClassType: "SortAttributePropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccSegmentDefinitionTagPropertyToTerraform(struct?: CcSegmentDefinition.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccSegmentDefinitionTagPropertyToHclTerraform(struct?: CcSegmentDefinition.TagProperty | cdktn.IResolvable): any {
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


export namespace CcSegmentDefinition {
export interface RangeOverrideProperty {
    /**
    * The ending point for this overridden range. Positive numbers indicate how many days in the past data should be included, and negative numbers indicate how many days in the future.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#end CcSegmentDefinition#end}
    */
    readonly end?: number;
    /**
    * The starting point for this overridden range. Positive numbers indicate how many days in the past data should be included, and negative numbers indicate how many days in the future.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#start CcSegmentDefinition#start}
    */
    readonly start?: number;
    /**
    * The unit to be applied to the range.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#unit CcSegmentDefinition#unit}
    */
    readonly unit?: string;
}
export class RangeOverridePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RangeOverrideProperty | cdktn.IResolvable | undefined {
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
        if (this._unit !== undefined) {
            hasAnyValues = true;
            internalValueResult.unit = this._unit;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RangeOverrideProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._end = undefined;
            this._start = undefined;
            this._unit = undefined;
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
            this._unit = value.unit;
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
export interface ConditionOverridesProperty {
    /**
    * Defines the range to be applied to the calculated attribute definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#range CcSegmentDefinition#range}
    */
    readonly range?: RangeOverrideProperty;
}
export class ConditionOverridesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConditionOverridesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._range?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.range = this._range?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConditionOverridesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._range.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._range.internalValue = value.range;
        }
    }

    // range - computed: true, optional: true, required: false
    private _range = new RangeOverridePropertyOutputReference(this, "range");
    public get range() {
        return this._range;
    }
    public putRange(value: RangeOverrideProperty) {
        this._range.internalValue = value;
    }
    public resetRange() {
        this._range.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rangeInput() {
        return this._range.internalValue;
    }
}
export interface CalculatedAttributeDimensionProperty {
    /**
    * Overrides the condition block within the original calculated attribute definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#condition_overrides CcSegmentDefinition#condition_overrides}
    */
    readonly conditionOverrides?: ConditionOverridesProperty;
    /**
    * The type of segment dimension to use.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#dimension_type CcSegmentDefinition#dimension_type}
    */
    readonly dimensionType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#values CcSegmentDefinition#values}
    */
    readonly values?: string[];
}
export class CalculatedAttributeDimensionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): CalculatedAttributeDimensionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._conditionOverrides?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.conditionOverrides = this._conditionOverrides?.internalValue;
        }
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

    public set internalValue(value: CalculatedAttributeDimensionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._conditionOverrides.internalValue = undefined;
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
            this._conditionOverrides.internalValue = value.conditionOverrides;
            this._dimensionType = value.dimensionType;
            this._values = value.values;
        }
    }

    // condition_overrides - computed: true, optional: true, required: false
    private _conditionOverrides = new ConditionOverridesPropertyOutputReference(this, "condition_overrides");
    public get conditionOverrides() {
        return this._conditionOverrides;
    }
    public putConditionOverrides(value: ConditionOverridesProperty) {
        this._conditionOverrides.internalValue = value;
    }
    public resetConditionOverrides() {
        this._conditionOverrides.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get conditionOverridesInput() {
        return this._conditionOverrides.internalValue;
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

export class CalculatedAttributeDimensionPropertyMap extends cdktn.ComplexMap {
    public internalValue? : { [key: string]: CalculatedAttributeDimensionProperty } | cdktn.IResolvable

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
    public get(key: string): CalculatedAttributeDimensionPropertyOutputReference {
        return new CalculatedAttributeDimensionPropertyOutputReference(this.terraformResource, this.terraformAttribute, key);
    }
}
export interface ProfileDimensionProperty {
    /**
    * The type of segment dimension to use for a string dimension.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#dimension_type CcSegmentDefinition#dimension_type}
    */
    readonly dimensionType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#values CcSegmentDefinition#values}
    */
    readonly values?: string[];
}
export class ProfileDimensionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ProfileDimensionProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: ProfileDimensionProperty | cdktn.IResolvable | undefined) {
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
export interface ExtraLengthValueProfileDimensionProperty {
    /**
    * The type of segment dimension to use for a string dimension.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#dimension_type CcSegmentDefinition#dimension_type}
    */
    readonly dimensionType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#values CcSegmentDefinition#values}
    */
    readonly values?: string[];
}
export class ExtraLengthValueProfileDimensionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ExtraLengthValueProfileDimensionProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: ExtraLengthValueProfileDimensionProperty | cdktn.IResolvable | undefined) {
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
export interface SegmentGroupsGroupsDimensionsProfileAttributesAddressCityProperty {
    /**
    * The type of segment dimension to use for a string dimension.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#dimension_type CcSegmentDefinition#dimension_type}
    */
    readonly dimensionType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#values CcSegmentDefinition#values}
    */
    readonly values?: string[];
}
export class SegmentGroupsGroupsDimensionsProfileAttributesAddressCityPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SegmentGroupsGroupsDimensionsProfileAttributesAddressCityProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: SegmentGroupsGroupsDimensionsProfileAttributesAddressCityProperty | cdktn.IResolvable | undefined) {
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
export interface SegmentGroupsGroupsDimensionsProfileAttributesAddressCountryProperty {
    /**
    * The type of segment dimension to use for a string dimension.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#dimension_type CcSegmentDefinition#dimension_type}
    */
    readonly dimensionType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#values CcSegmentDefinition#values}
    */
    readonly values?: string[];
}
export class SegmentGroupsGroupsDimensionsProfileAttributesAddressCountryPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SegmentGroupsGroupsDimensionsProfileAttributesAddressCountryProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: SegmentGroupsGroupsDimensionsProfileAttributesAddressCountryProperty | cdktn.IResolvable | undefined) {
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
export interface SegmentGroupsGroupsDimensionsProfileAttributesAddressCountyProperty {
    /**
    * The type of segment dimension to use for a string dimension.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#dimension_type CcSegmentDefinition#dimension_type}
    */
    readonly dimensionType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#values CcSegmentDefinition#values}
    */
    readonly values?: string[];
}
export class SegmentGroupsGroupsDimensionsProfileAttributesAddressCountyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SegmentGroupsGroupsDimensionsProfileAttributesAddressCountyProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: SegmentGroupsGroupsDimensionsProfileAttributesAddressCountyProperty | cdktn.IResolvable | undefined) {
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
export interface SegmentGroupsGroupsDimensionsProfileAttributesAddressPostalCodeProperty {
    /**
    * The type of segment dimension to use for a string dimension.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#dimension_type CcSegmentDefinition#dimension_type}
    */
    readonly dimensionType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#values CcSegmentDefinition#values}
    */
    readonly values?: string[];
}
export class SegmentGroupsGroupsDimensionsProfileAttributesAddressPostalCodePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SegmentGroupsGroupsDimensionsProfileAttributesAddressPostalCodeProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: SegmentGroupsGroupsDimensionsProfileAttributesAddressPostalCodeProperty | cdktn.IResolvable | undefined) {
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
export interface SegmentGroupsGroupsDimensionsProfileAttributesAddressProvinceProperty {
    /**
    * The type of segment dimension to use for a string dimension.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#dimension_type CcSegmentDefinition#dimension_type}
    */
    readonly dimensionType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#values CcSegmentDefinition#values}
    */
    readonly values?: string[];
}
export class SegmentGroupsGroupsDimensionsProfileAttributesAddressProvincePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SegmentGroupsGroupsDimensionsProfileAttributesAddressProvinceProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: SegmentGroupsGroupsDimensionsProfileAttributesAddressProvinceProperty | cdktn.IResolvable | undefined) {
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
export interface SegmentGroupsGroupsDimensionsProfileAttributesAddressStateProperty {
    /**
    * The type of segment dimension to use for a string dimension.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#dimension_type CcSegmentDefinition#dimension_type}
    */
    readonly dimensionType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#values CcSegmentDefinition#values}
    */
    readonly values?: string[];
}
export class SegmentGroupsGroupsDimensionsProfileAttributesAddressStatePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SegmentGroupsGroupsDimensionsProfileAttributesAddressStateProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: SegmentGroupsGroupsDimensionsProfileAttributesAddressStateProperty | cdktn.IResolvable | undefined) {
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
export interface AddressDimensionProperty {
    /**
    * Specifies profile based criteria for a segment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#city CcSegmentDefinition#city}
    */
    readonly city?: SegmentGroupsGroupsDimensionsProfileAttributesAddressCityProperty;
    /**
    * Specifies profile based criteria for a segment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#country CcSegmentDefinition#country}
    */
    readonly country?: SegmentGroupsGroupsDimensionsProfileAttributesAddressCountryProperty;
    /**
    * Specifies profile based criteria for a segment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#county CcSegmentDefinition#county}
    */
    readonly county?: SegmentGroupsGroupsDimensionsProfileAttributesAddressCountyProperty;
    /**
    * Specifies profile based criteria for a segment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#postal_code CcSegmentDefinition#postal_code}
    */
    readonly postalCode?: SegmentGroupsGroupsDimensionsProfileAttributesAddressPostalCodeProperty;
    /**
    * Specifies profile based criteria for a segment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#province CcSegmentDefinition#province}
    */
    readonly province?: SegmentGroupsGroupsDimensionsProfileAttributesAddressProvinceProperty;
    /**
    * Specifies profile based criteria for a segment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#state CcSegmentDefinition#state}
    */
    readonly state?: SegmentGroupsGroupsDimensionsProfileAttributesAddressStateProperty;
}
export class AddressDimensionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AddressDimensionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._city?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.city = this._city?.internalValue;
        }
        if (this._country?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.country = this._country?.internalValue;
        }
        if (this._county?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.county = this._county?.internalValue;
        }
        if (this._postalCode?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.postalCode = this._postalCode?.internalValue;
        }
        if (this._province?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.province = this._province?.internalValue;
        }
        if (this._state?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.state = this._state?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AddressDimensionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._city.internalValue = undefined;
            this._country.internalValue = undefined;
            this._county.internalValue = undefined;
            this._postalCode.internalValue = undefined;
            this._province.internalValue = undefined;
            this._state.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._city.internalValue = value.city;
            this._country.internalValue = value.country;
            this._county.internalValue = value.county;
            this._postalCode.internalValue = value.postalCode;
            this._province.internalValue = value.province;
            this._state.internalValue = value.state;
        }
    }

    // city - computed: true, optional: true, required: false
    private _city = new SegmentGroupsGroupsDimensionsProfileAttributesAddressCityPropertyOutputReference(this, "city");
    public get city() {
        return this._city;
    }
    public putCity(value: SegmentGroupsGroupsDimensionsProfileAttributesAddressCityProperty) {
        this._city.internalValue = value;
    }
    public resetCity() {
        this._city.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cityInput() {
        return this._city.internalValue;
    }

    // country - computed: true, optional: true, required: false
    private _country = new SegmentGroupsGroupsDimensionsProfileAttributesAddressCountryPropertyOutputReference(this, "country");
    public get country() {
        return this._country;
    }
    public putCountry(value: SegmentGroupsGroupsDimensionsProfileAttributesAddressCountryProperty) {
        this._country.internalValue = value;
    }
    public resetCountry() {
        this._country.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get countryInput() {
        return this._country.internalValue;
    }

    // county - computed: true, optional: true, required: false
    private _county = new SegmentGroupsGroupsDimensionsProfileAttributesAddressCountyPropertyOutputReference(this, "county");
    public get county() {
        return this._county;
    }
    public putCounty(value: SegmentGroupsGroupsDimensionsProfileAttributesAddressCountyProperty) {
        this._county.internalValue = value;
    }
    public resetCounty() {
        this._county.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get countyInput() {
        return this._county.internalValue;
    }

    // postal_code - computed: true, optional: true, required: false
    private _postalCode = new SegmentGroupsGroupsDimensionsProfileAttributesAddressPostalCodePropertyOutputReference(this, "postal_code");
    public get postalCode() {
        return this._postalCode;
    }
    public putPostalCode(value: SegmentGroupsGroupsDimensionsProfileAttributesAddressPostalCodeProperty) {
        this._postalCode.internalValue = value;
    }
    public resetPostalCode() {
        this._postalCode.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get postalCodeInput() {
        return this._postalCode.internalValue;
    }

    // province - computed: true, optional: true, required: false
    private _province = new SegmentGroupsGroupsDimensionsProfileAttributesAddressProvincePropertyOutputReference(this, "province");
    public get province() {
        return this._province;
    }
    public putProvince(value: SegmentGroupsGroupsDimensionsProfileAttributesAddressProvinceProperty) {
        this._province.internalValue = value;
    }
    public resetProvince() {
        this._province.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get provinceInput() {
        return this._province.internalValue;
    }

    // state - computed: true, optional: true, required: false
    private _state = new SegmentGroupsGroupsDimensionsProfileAttributesAddressStatePropertyOutputReference(this, "state");
    public get state() {
        return this._state;
    }
    public putState(value: SegmentGroupsGroupsDimensionsProfileAttributesAddressStateProperty) {
        this._state.internalValue = value;
    }
    public resetState() {
        this._state.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stateInput() {
        return this._state.internalValue;
    }
}
export interface AttributeDimensionProperty {
    /**
    * The type of segment dimension to use.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#dimension_type CcSegmentDefinition#dimension_type}
    */
    readonly dimensionType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#values CcSegmentDefinition#values}
    */
    readonly values?: string[];
}
export class AttributeDimensionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AttributeDimensionProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: AttributeDimensionProperty | cdktn.IResolvable | undefined) {
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

export class AttributeDimensionPropertyMap extends cdktn.ComplexMap {
    public internalValue? : { [key: string]: AttributeDimensionProperty } | cdktn.IResolvable

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
    public get(key: string): AttributeDimensionPropertyOutputReference {
        return new AttributeDimensionPropertyOutputReference(this.terraformResource, this.terraformAttribute, key);
    }
}
export interface SegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCityProperty {
    /**
    * The type of segment dimension to use for a string dimension.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#dimension_type CcSegmentDefinition#dimension_type}
    */
    readonly dimensionType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#values CcSegmentDefinition#values}
    */
    readonly values?: string[];
}
export class SegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCityPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCityProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: SegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCityProperty | cdktn.IResolvable | undefined) {
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
export interface SegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCountryProperty {
    /**
    * The type of segment dimension to use for a string dimension.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#dimension_type CcSegmentDefinition#dimension_type}
    */
    readonly dimensionType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#values CcSegmentDefinition#values}
    */
    readonly values?: string[];
}
export class SegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCountryPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCountryProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: SegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCountryProperty | cdktn.IResolvable | undefined) {
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
export interface SegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCountyProperty {
    /**
    * The type of segment dimension to use for a string dimension.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#dimension_type CcSegmentDefinition#dimension_type}
    */
    readonly dimensionType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#values CcSegmentDefinition#values}
    */
    readonly values?: string[];
}
export class SegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCountyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCountyProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: SegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCountyProperty | cdktn.IResolvable | undefined) {
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
export interface SegmentGroupsGroupsDimensionsProfileAttributesBillingAddressPostalCodeProperty {
    /**
    * The type of segment dimension to use for a string dimension.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#dimension_type CcSegmentDefinition#dimension_type}
    */
    readonly dimensionType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#values CcSegmentDefinition#values}
    */
    readonly values?: string[];
}
export class SegmentGroupsGroupsDimensionsProfileAttributesBillingAddressPostalCodePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SegmentGroupsGroupsDimensionsProfileAttributesBillingAddressPostalCodeProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: SegmentGroupsGroupsDimensionsProfileAttributesBillingAddressPostalCodeProperty | cdktn.IResolvable | undefined) {
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
export interface SegmentGroupsGroupsDimensionsProfileAttributesBillingAddressProvinceProperty {
    /**
    * The type of segment dimension to use for a string dimension.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#dimension_type CcSegmentDefinition#dimension_type}
    */
    readonly dimensionType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#values CcSegmentDefinition#values}
    */
    readonly values?: string[];
}
export class SegmentGroupsGroupsDimensionsProfileAttributesBillingAddressProvincePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SegmentGroupsGroupsDimensionsProfileAttributesBillingAddressProvinceProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: SegmentGroupsGroupsDimensionsProfileAttributesBillingAddressProvinceProperty | cdktn.IResolvable | undefined) {
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
export interface SegmentGroupsGroupsDimensionsProfileAttributesBillingAddressStateProperty {
    /**
    * The type of segment dimension to use for a string dimension.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#dimension_type CcSegmentDefinition#dimension_type}
    */
    readonly dimensionType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#values CcSegmentDefinition#values}
    */
    readonly values?: string[];
}
export class SegmentGroupsGroupsDimensionsProfileAttributesBillingAddressStatePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SegmentGroupsGroupsDimensionsProfileAttributesBillingAddressStateProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: SegmentGroupsGroupsDimensionsProfileAttributesBillingAddressStateProperty | cdktn.IResolvable | undefined) {
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
export interface BillingAddressProperty {
    /**
    * Specifies profile based criteria for a segment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#city CcSegmentDefinition#city}
    */
    readonly city?: SegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCityProperty;
    /**
    * Specifies profile based criteria for a segment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#country CcSegmentDefinition#country}
    */
    readonly country?: SegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCountryProperty;
    /**
    * Specifies profile based criteria for a segment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#county CcSegmentDefinition#county}
    */
    readonly county?: SegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCountyProperty;
    /**
    * Specifies profile based criteria for a segment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#postal_code CcSegmentDefinition#postal_code}
    */
    readonly postalCode?: SegmentGroupsGroupsDimensionsProfileAttributesBillingAddressPostalCodeProperty;
    /**
    * Specifies profile based criteria for a segment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#province CcSegmentDefinition#province}
    */
    readonly province?: SegmentGroupsGroupsDimensionsProfileAttributesBillingAddressProvinceProperty;
    /**
    * Specifies profile based criteria for a segment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#state CcSegmentDefinition#state}
    */
    readonly state?: SegmentGroupsGroupsDimensionsProfileAttributesBillingAddressStateProperty;
}
export class BillingAddressPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): BillingAddressProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._city?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.city = this._city?.internalValue;
        }
        if (this._country?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.country = this._country?.internalValue;
        }
        if (this._county?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.county = this._county?.internalValue;
        }
        if (this._postalCode?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.postalCode = this._postalCode?.internalValue;
        }
        if (this._province?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.province = this._province?.internalValue;
        }
        if (this._state?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.state = this._state?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BillingAddressProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._city.internalValue = undefined;
            this._country.internalValue = undefined;
            this._county.internalValue = undefined;
            this._postalCode.internalValue = undefined;
            this._province.internalValue = undefined;
            this._state.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._city.internalValue = value.city;
            this._country.internalValue = value.country;
            this._county.internalValue = value.county;
            this._postalCode.internalValue = value.postalCode;
            this._province.internalValue = value.province;
            this._state.internalValue = value.state;
        }
    }

    // city - computed: true, optional: true, required: false
    private _city = new SegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCityPropertyOutputReference(this, "city");
    public get city() {
        return this._city;
    }
    public putCity(value: SegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCityProperty) {
        this._city.internalValue = value;
    }
    public resetCity() {
        this._city.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cityInput() {
        return this._city.internalValue;
    }

    // country - computed: true, optional: true, required: false
    private _country = new SegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCountryPropertyOutputReference(this, "country");
    public get country() {
        return this._country;
    }
    public putCountry(value: SegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCountryProperty) {
        this._country.internalValue = value;
    }
    public resetCountry() {
        this._country.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get countryInput() {
        return this._country.internalValue;
    }

    // county - computed: true, optional: true, required: false
    private _county = new SegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCountyPropertyOutputReference(this, "county");
    public get county() {
        return this._county;
    }
    public putCounty(value: SegmentGroupsGroupsDimensionsProfileAttributesBillingAddressCountyProperty) {
        this._county.internalValue = value;
    }
    public resetCounty() {
        this._county.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get countyInput() {
        return this._county.internalValue;
    }

    // postal_code - computed: true, optional: true, required: false
    private _postalCode = new SegmentGroupsGroupsDimensionsProfileAttributesBillingAddressPostalCodePropertyOutputReference(this, "postal_code");
    public get postalCode() {
        return this._postalCode;
    }
    public putPostalCode(value: SegmentGroupsGroupsDimensionsProfileAttributesBillingAddressPostalCodeProperty) {
        this._postalCode.internalValue = value;
    }
    public resetPostalCode() {
        this._postalCode.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get postalCodeInput() {
        return this._postalCode.internalValue;
    }

    // province - computed: true, optional: true, required: false
    private _province = new SegmentGroupsGroupsDimensionsProfileAttributesBillingAddressProvincePropertyOutputReference(this, "province");
    public get province() {
        return this._province;
    }
    public putProvince(value: SegmentGroupsGroupsDimensionsProfileAttributesBillingAddressProvinceProperty) {
        this._province.internalValue = value;
    }
    public resetProvince() {
        this._province.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get provinceInput() {
        return this._province.internalValue;
    }

    // state - computed: true, optional: true, required: false
    private _state = new SegmentGroupsGroupsDimensionsProfileAttributesBillingAddressStatePropertyOutputReference(this, "state");
    public get state() {
        return this._state;
    }
    public putState(value: SegmentGroupsGroupsDimensionsProfileAttributesBillingAddressStateProperty) {
        this._state.internalValue = value;
    }
    public resetState() {
        this._state.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stateInput() {
        return this._state.internalValue;
    }
}
export interface DateDimensionProperty {
    /**
    * The type of segment dimension to use for a date dimension.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#dimension_type CcSegmentDefinition#dimension_type}
    */
    readonly dimensionType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#values CcSegmentDefinition#values}
    */
    readonly values?: string[];
}
export class DateDimensionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DateDimensionProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: DateDimensionProperty | cdktn.IResolvable | undefined) {
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
export interface BusinessEmailAddressProperty {
    /**
    * The type of segment dimension to use for a string dimension.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#dimension_type CcSegmentDefinition#dimension_type}
    */
    readonly dimensionType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#values CcSegmentDefinition#values}
    */
    readonly values?: string[];
}
export class BusinessEmailAddressPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): BusinessEmailAddressProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: BusinessEmailAddressProperty | cdktn.IResolvable | undefined) {
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
export interface BusinessNameProperty {
    /**
    * The type of segment dimension to use for a string dimension.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#dimension_type CcSegmentDefinition#dimension_type}
    */
    readonly dimensionType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#values CcSegmentDefinition#values}
    */
    readonly values?: string[];
}
export class BusinessNamePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): BusinessNameProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: BusinessNameProperty | cdktn.IResolvable | undefined) {
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
export interface BusinessPhoneNumberProperty {
    /**
    * The type of segment dimension to use for a string dimension.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#dimension_type CcSegmentDefinition#dimension_type}
    */
    readonly dimensionType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#values CcSegmentDefinition#values}
    */
    readonly values?: string[];
}
export class BusinessPhoneNumberPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): BusinessPhoneNumberProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: BusinessPhoneNumberProperty | cdktn.IResolvable | undefined) {
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
export interface EmailAddressProperty {
    /**
    * The type of segment dimension to use for a string dimension.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#dimension_type CcSegmentDefinition#dimension_type}
    */
    readonly dimensionType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#values CcSegmentDefinition#values}
    */
    readonly values?: string[];
}
export class EmailAddressPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EmailAddressProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: EmailAddressProperty | cdktn.IResolvable | undefined) {
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
export interface FirstNameProperty {
    /**
    * The type of segment dimension to use for a string dimension.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#dimension_type CcSegmentDefinition#dimension_type}
    */
    readonly dimensionType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#values CcSegmentDefinition#values}
    */
    readonly values?: string[];
}
export class FirstNamePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FirstNameProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: FirstNameProperty | cdktn.IResolvable | undefined) {
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
export interface GenderStringProperty {
    /**
    * The type of segment dimension to use for a string dimension.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#dimension_type CcSegmentDefinition#dimension_type}
    */
    readonly dimensionType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#values CcSegmentDefinition#values}
    */
    readonly values?: string[];
}
export class GenderStringPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): GenderStringProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: GenderStringProperty | cdktn.IResolvable | undefined) {
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
export interface HomePhoneNumberProperty {
    /**
    * The type of segment dimension to use for a string dimension.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#dimension_type CcSegmentDefinition#dimension_type}
    */
    readonly dimensionType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#values CcSegmentDefinition#values}
    */
    readonly values?: string[];
}
export class HomePhoneNumberPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): HomePhoneNumberProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: HomePhoneNumberProperty | cdktn.IResolvable | undefined) {
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
export interface LastNameProperty {
    /**
    * The type of segment dimension to use for a string dimension.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#dimension_type CcSegmentDefinition#dimension_type}
    */
    readonly dimensionType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#values CcSegmentDefinition#values}
    */
    readonly values?: string[];
}
export class LastNamePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LastNameProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: LastNameProperty | cdktn.IResolvable | undefined) {
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
export interface SegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCityProperty {
    /**
    * The type of segment dimension to use for a string dimension.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#dimension_type CcSegmentDefinition#dimension_type}
    */
    readonly dimensionType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#values CcSegmentDefinition#values}
    */
    readonly values?: string[];
}
export class SegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCityPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCityProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: SegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCityProperty | cdktn.IResolvable | undefined) {
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
export interface SegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCountryProperty {
    /**
    * The type of segment dimension to use for a string dimension.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#dimension_type CcSegmentDefinition#dimension_type}
    */
    readonly dimensionType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#values CcSegmentDefinition#values}
    */
    readonly values?: string[];
}
export class SegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCountryPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCountryProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: SegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCountryProperty | cdktn.IResolvable | undefined) {
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
export interface SegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCountyProperty {
    /**
    * The type of segment dimension to use for a string dimension.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#dimension_type CcSegmentDefinition#dimension_type}
    */
    readonly dimensionType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#values CcSegmentDefinition#values}
    */
    readonly values?: string[];
}
export class SegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCountyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCountyProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: SegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCountyProperty | cdktn.IResolvable | undefined) {
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
export interface SegmentGroupsGroupsDimensionsProfileAttributesMailingAddressPostalCodeProperty {
    /**
    * The type of segment dimension to use for a string dimension.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#dimension_type CcSegmentDefinition#dimension_type}
    */
    readonly dimensionType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#values CcSegmentDefinition#values}
    */
    readonly values?: string[];
}
export class SegmentGroupsGroupsDimensionsProfileAttributesMailingAddressPostalCodePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SegmentGroupsGroupsDimensionsProfileAttributesMailingAddressPostalCodeProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: SegmentGroupsGroupsDimensionsProfileAttributesMailingAddressPostalCodeProperty | cdktn.IResolvable | undefined) {
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
export interface SegmentGroupsGroupsDimensionsProfileAttributesMailingAddressProvinceProperty {
    /**
    * The type of segment dimension to use for a string dimension.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#dimension_type CcSegmentDefinition#dimension_type}
    */
    readonly dimensionType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#values CcSegmentDefinition#values}
    */
    readonly values?: string[];
}
export class SegmentGroupsGroupsDimensionsProfileAttributesMailingAddressProvincePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SegmentGroupsGroupsDimensionsProfileAttributesMailingAddressProvinceProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: SegmentGroupsGroupsDimensionsProfileAttributesMailingAddressProvinceProperty | cdktn.IResolvable | undefined) {
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
export interface SegmentGroupsGroupsDimensionsProfileAttributesMailingAddressStateProperty {
    /**
    * The type of segment dimension to use for a string dimension.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#dimension_type CcSegmentDefinition#dimension_type}
    */
    readonly dimensionType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#values CcSegmentDefinition#values}
    */
    readonly values?: string[];
}
export class SegmentGroupsGroupsDimensionsProfileAttributesMailingAddressStatePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SegmentGroupsGroupsDimensionsProfileAttributesMailingAddressStateProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: SegmentGroupsGroupsDimensionsProfileAttributesMailingAddressStateProperty | cdktn.IResolvable | undefined) {
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
export interface MailingAddressProperty {
    /**
    * Specifies profile based criteria for a segment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#city CcSegmentDefinition#city}
    */
    readonly city?: SegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCityProperty;
    /**
    * Specifies profile based criteria for a segment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#country CcSegmentDefinition#country}
    */
    readonly country?: SegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCountryProperty;
    /**
    * Specifies profile based criteria for a segment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#county CcSegmentDefinition#county}
    */
    readonly county?: SegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCountyProperty;
    /**
    * Specifies profile based criteria for a segment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#postal_code CcSegmentDefinition#postal_code}
    */
    readonly postalCode?: SegmentGroupsGroupsDimensionsProfileAttributesMailingAddressPostalCodeProperty;
    /**
    * Specifies profile based criteria for a segment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#province CcSegmentDefinition#province}
    */
    readonly province?: SegmentGroupsGroupsDimensionsProfileAttributesMailingAddressProvinceProperty;
    /**
    * Specifies profile based criteria for a segment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#state CcSegmentDefinition#state}
    */
    readonly state?: SegmentGroupsGroupsDimensionsProfileAttributesMailingAddressStateProperty;
}
export class MailingAddressPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MailingAddressProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._city?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.city = this._city?.internalValue;
        }
        if (this._country?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.country = this._country?.internalValue;
        }
        if (this._county?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.county = this._county?.internalValue;
        }
        if (this._postalCode?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.postalCode = this._postalCode?.internalValue;
        }
        if (this._province?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.province = this._province?.internalValue;
        }
        if (this._state?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.state = this._state?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MailingAddressProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._city.internalValue = undefined;
            this._country.internalValue = undefined;
            this._county.internalValue = undefined;
            this._postalCode.internalValue = undefined;
            this._province.internalValue = undefined;
            this._state.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._city.internalValue = value.city;
            this._country.internalValue = value.country;
            this._county.internalValue = value.county;
            this._postalCode.internalValue = value.postalCode;
            this._province.internalValue = value.province;
            this._state.internalValue = value.state;
        }
    }

    // city - computed: true, optional: true, required: false
    private _city = new SegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCityPropertyOutputReference(this, "city");
    public get city() {
        return this._city;
    }
    public putCity(value: SegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCityProperty) {
        this._city.internalValue = value;
    }
    public resetCity() {
        this._city.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cityInput() {
        return this._city.internalValue;
    }

    // country - computed: true, optional: true, required: false
    private _country = new SegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCountryPropertyOutputReference(this, "country");
    public get country() {
        return this._country;
    }
    public putCountry(value: SegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCountryProperty) {
        this._country.internalValue = value;
    }
    public resetCountry() {
        this._country.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get countryInput() {
        return this._country.internalValue;
    }

    // county - computed: true, optional: true, required: false
    private _county = new SegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCountyPropertyOutputReference(this, "county");
    public get county() {
        return this._county;
    }
    public putCounty(value: SegmentGroupsGroupsDimensionsProfileAttributesMailingAddressCountyProperty) {
        this._county.internalValue = value;
    }
    public resetCounty() {
        this._county.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get countyInput() {
        return this._county.internalValue;
    }

    // postal_code - computed: true, optional: true, required: false
    private _postalCode = new SegmentGroupsGroupsDimensionsProfileAttributesMailingAddressPostalCodePropertyOutputReference(this, "postal_code");
    public get postalCode() {
        return this._postalCode;
    }
    public putPostalCode(value: SegmentGroupsGroupsDimensionsProfileAttributesMailingAddressPostalCodeProperty) {
        this._postalCode.internalValue = value;
    }
    public resetPostalCode() {
        this._postalCode.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get postalCodeInput() {
        return this._postalCode.internalValue;
    }

    // province - computed: true, optional: true, required: false
    private _province = new SegmentGroupsGroupsDimensionsProfileAttributesMailingAddressProvincePropertyOutputReference(this, "province");
    public get province() {
        return this._province;
    }
    public putProvince(value: SegmentGroupsGroupsDimensionsProfileAttributesMailingAddressProvinceProperty) {
        this._province.internalValue = value;
    }
    public resetProvince() {
        this._province.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get provinceInput() {
        return this._province.internalValue;
    }

    // state - computed: true, optional: true, required: false
    private _state = new SegmentGroupsGroupsDimensionsProfileAttributesMailingAddressStatePropertyOutputReference(this, "state");
    public get state() {
        return this._state;
    }
    public putState(value: SegmentGroupsGroupsDimensionsProfileAttributesMailingAddressStateProperty) {
        this._state.internalValue = value;
    }
    public resetState() {
        this._state.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stateInput() {
        return this._state.internalValue;
    }
}
export interface MiddleNameProperty {
    /**
    * The type of segment dimension to use for a string dimension.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#dimension_type CcSegmentDefinition#dimension_type}
    */
    readonly dimensionType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#values CcSegmentDefinition#values}
    */
    readonly values?: string[];
}
export class MiddleNamePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MiddleNameProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: MiddleNameProperty | cdktn.IResolvable | undefined) {
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
export interface MobilePhoneNumberProperty {
    /**
    * The type of segment dimension to use for a string dimension.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#dimension_type CcSegmentDefinition#dimension_type}
    */
    readonly dimensionType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#values CcSegmentDefinition#values}
    */
    readonly values?: string[];
}
export class MobilePhoneNumberPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MobilePhoneNumberProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: MobilePhoneNumberProperty | cdktn.IResolvable | undefined) {
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
export interface PartyTypeStringProperty {
    /**
    * The type of segment dimension to use for a string dimension.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#dimension_type CcSegmentDefinition#dimension_type}
    */
    readonly dimensionType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#values CcSegmentDefinition#values}
    */
    readonly values?: string[];
}
export class PartyTypeStringPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PartyTypeStringProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: PartyTypeStringProperty | cdktn.IResolvable | undefined) {
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
export interface PersonalEmailAddressProperty {
    /**
    * The type of segment dimension to use for a string dimension.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#dimension_type CcSegmentDefinition#dimension_type}
    */
    readonly dimensionType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#values CcSegmentDefinition#values}
    */
    readonly values?: string[];
}
export class PersonalEmailAddressPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PersonalEmailAddressProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: PersonalEmailAddressProperty | cdktn.IResolvable | undefined) {
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
export interface PhoneNumberProperty {
    /**
    * The type of segment dimension to use for a string dimension.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#dimension_type CcSegmentDefinition#dimension_type}
    */
    readonly dimensionType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#values CcSegmentDefinition#values}
    */
    readonly values?: string[];
}
export class PhoneNumberPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PhoneNumberProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: PhoneNumberProperty | cdktn.IResolvable | undefined) {
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
export interface ProfileTypeDimensionProperty {
    /**
    * The type of segment dimension to use for a profile type dimension.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#dimension_type CcSegmentDefinition#dimension_type}
    */
    readonly dimensionType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#values CcSegmentDefinition#values}
    */
    readonly values?: string[];
}
export class ProfileTypeDimensionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ProfileTypeDimensionProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: ProfileTypeDimensionProperty | cdktn.IResolvable | undefined) {
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
export interface SegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCityProperty {
    /**
    * The type of segment dimension to use for a string dimension.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#dimension_type CcSegmentDefinition#dimension_type}
    */
    readonly dimensionType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#values CcSegmentDefinition#values}
    */
    readonly values?: string[];
}
export class SegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCityPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCityProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: SegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCityProperty | cdktn.IResolvable | undefined) {
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
export interface SegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCountryProperty {
    /**
    * The type of segment dimension to use for a string dimension.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#dimension_type CcSegmentDefinition#dimension_type}
    */
    readonly dimensionType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#values CcSegmentDefinition#values}
    */
    readonly values?: string[];
}
export class SegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCountryPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCountryProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: SegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCountryProperty | cdktn.IResolvable | undefined) {
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
export interface SegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCountyProperty {
    /**
    * The type of segment dimension to use for a string dimension.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#dimension_type CcSegmentDefinition#dimension_type}
    */
    readonly dimensionType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#values CcSegmentDefinition#values}
    */
    readonly values?: string[];
}
export class SegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCountyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCountyProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: SegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCountyProperty | cdktn.IResolvable | undefined) {
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
export interface SegmentGroupsGroupsDimensionsProfileAttributesShippingAddressPostalCodeProperty {
    /**
    * The type of segment dimension to use for a string dimension.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#dimension_type CcSegmentDefinition#dimension_type}
    */
    readonly dimensionType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#values CcSegmentDefinition#values}
    */
    readonly values?: string[];
}
export class SegmentGroupsGroupsDimensionsProfileAttributesShippingAddressPostalCodePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SegmentGroupsGroupsDimensionsProfileAttributesShippingAddressPostalCodeProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: SegmentGroupsGroupsDimensionsProfileAttributesShippingAddressPostalCodeProperty | cdktn.IResolvable | undefined) {
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
export interface SegmentGroupsGroupsDimensionsProfileAttributesShippingAddressProvinceProperty {
    /**
    * The type of segment dimension to use for a string dimension.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#dimension_type CcSegmentDefinition#dimension_type}
    */
    readonly dimensionType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#values CcSegmentDefinition#values}
    */
    readonly values?: string[];
}
export class SegmentGroupsGroupsDimensionsProfileAttributesShippingAddressProvincePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SegmentGroupsGroupsDimensionsProfileAttributesShippingAddressProvinceProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: SegmentGroupsGroupsDimensionsProfileAttributesShippingAddressProvinceProperty | cdktn.IResolvable | undefined) {
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
export interface SegmentGroupsGroupsDimensionsProfileAttributesShippingAddressStateProperty {
    /**
    * The type of segment dimension to use for a string dimension.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#dimension_type CcSegmentDefinition#dimension_type}
    */
    readonly dimensionType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#values CcSegmentDefinition#values}
    */
    readonly values?: string[];
}
export class SegmentGroupsGroupsDimensionsProfileAttributesShippingAddressStatePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SegmentGroupsGroupsDimensionsProfileAttributesShippingAddressStateProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: SegmentGroupsGroupsDimensionsProfileAttributesShippingAddressStateProperty | cdktn.IResolvable | undefined) {
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
export interface ShippingAddressProperty {
    /**
    * Specifies profile based criteria for a segment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#city CcSegmentDefinition#city}
    */
    readonly city?: SegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCityProperty;
    /**
    * Specifies profile based criteria for a segment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#country CcSegmentDefinition#country}
    */
    readonly country?: SegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCountryProperty;
    /**
    * Specifies profile based criteria for a segment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#county CcSegmentDefinition#county}
    */
    readonly county?: SegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCountyProperty;
    /**
    * Specifies profile based criteria for a segment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#postal_code CcSegmentDefinition#postal_code}
    */
    readonly postalCode?: SegmentGroupsGroupsDimensionsProfileAttributesShippingAddressPostalCodeProperty;
    /**
    * Specifies profile based criteria for a segment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#province CcSegmentDefinition#province}
    */
    readonly province?: SegmentGroupsGroupsDimensionsProfileAttributesShippingAddressProvinceProperty;
    /**
    * Specifies profile based criteria for a segment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#state CcSegmentDefinition#state}
    */
    readonly state?: SegmentGroupsGroupsDimensionsProfileAttributesShippingAddressStateProperty;
}
export class ShippingAddressPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ShippingAddressProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._city?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.city = this._city?.internalValue;
        }
        if (this._country?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.country = this._country?.internalValue;
        }
        if (this._county?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.county = this._county?.internalValue;
        }
        if (this._postalCode?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.postalCode = this._postalCode?.internalValue;
        }
        if (this._province?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.province = this._province?.internalValue;
        }
        if (this._state?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.state = this._state?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ShippingAddressProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._city.internalValue = undefined;
            this._country.internalValue = undefined;
            this._county.internalValue = undefined;
            this._postalCode.internalValue = undefined;
            this._province.internalValue = undefined;
            this._state.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._city.internalValue = value.city;
            this._country.internalValue = value.country;
            this._county.internalValue = value.county;
            this._postalCode.internalValue = value.postalCode;
            this._province.internalValue = value.province;
            this._state.internalValue = value.state;
        }
    }

    // city - computed: true, optional: true, required: false
    private _city = new SegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCityPropertyOutputReference(this, "city");
    public get city() {
        return this._city;
    }
    public putCity(value: SegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCityProperty) {
        this._city.internalValue = value;
    }
    public resetCity() {
        this._city.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cityInput() {
        return this._city.internalValue;
    }

    // country - computed: true, optional: true, required: false
    private _country = new SegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCountryPropertyOutputReference(this, "country");
    public get country() {
        return this._country;
    }
    public putCountry(value: SegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCountryProperty) {
        this._country.internalValue = value;
    }
    public resetCountry() {
        this._country.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get countryInput() {
        return this._country.internalValue;
    }

    // county - computed: true, optional: true, required: false
    private _county = new SegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCountyPropertyOutputReference(this, "county");
    public get county() {
        return this._county;
    }
    public putCounty(value: SegmentGroupsGroupsDimensionsProfileAttributesShippingAddressCountyProperty) {
        this._county.internalValue = value;
    }
    public resetCounty() {
        this._county.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get countyInput() {
        return this._county.internalValue;
    }

    // postal_code - computed: true, optional: true, required: false
    private _postalCode = new SegmentGroupsGroupsDimensionsProfileAttributesShippingAddressPostalCodePropertyOutputReference(this, "postal_code");
    public get postalCode() {
        return this._postalCode;
    }
    public putPostalCode(value: SegmentGroupsGroupsDimensionsProfileAttributesShippingAddressPostalCodeProperty) {
        this._postalCode.internalValue = value;
    }
    public resetPostalCode() {
        this._postalCode.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get postalCodeInput() {
        return this._postalCode.internalValue;
    }

    // province - computed: true, optional: true, required: false
    private _province = new SegmentGroupsGroupsDimensionsProfileAttributesShippingAddressProvincePropertyOutputReference(this, "province");
    public get province() {
        return this._province;
    }
    public putProvince(value: SegmentGroupsGroupsDimensionsProfileAttributesShippingAddressProvinceProperty) {
        this._province.internalValue = value;
    }
    public resetProvince() {
        this._province.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get provinceInput() {
        return this._province.internalValue;
    }

    // state - computed: true, optional: true, required: false
    private _state = new SegmentGroupsGroupsDimensionsProfileAttributesShippingAddressStatePropertyOutputReference(this, "state");
    public get state() {
        return this._state;
    }
    public putState(value: SegmentGroupsGroupsDimensionsProfileAttributesShippingAddressStateProperty) {
        this._state.internalValue = value;
    }
    public resetState() {
        this._state.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stateInput() {
        return this._state.internalValue;
    }
}
export interface ProfileAttributesProperty {
    /**
    * Specifies profile based criteria for a segment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#account_number CcSegmentDefinition#account_number}
    */
    readonly accountNumber?: ProfileDimensionProperty;
    /**
    * Specifies criteria for a segment using extended-length string values.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#additional_information CcSegmentDefinition#additional_information}
    */
    readonly additionalInformation?: ExtraLengthValueProfileDimensionProperty;
    /**
    * The address based criteria for the segment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#address CcSegmentDefinition#address}
    */
    readonly address?: AddressDimensionProperty;
    /**
    * One or more custom attributes to use as criteria for the segment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#attributes CcSegmentDefinition#attributes}
    */
    readonly attributes?: { [key: string]: AttributeDimensionProperty } | cdktn.IResolvable;
    /**
    * The address based criteria for the segment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#billing_address CcSegmentDefinition#billing_address}
    */
    readonly billingAddress?: BillingAddressProperty;
    /**
    * Specifies date based criteria for a segment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#birth_date CcSegmentDefinition#birth_date}
    */
    readonly birthDate?: DateDimensionProperty;
    /**
    * Specifies profile based criteria for a segment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#business_email_address CcSegmentDefinition#business_email_address}
    */
    readonly businessEmailAddress?: BusinessEmailAddressProperty;
    /**
    * Specifies profile based criteria for a segment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#business_name CcSegmentDefinition#business_name}
    */
    readonly businessName?: BusinessNameProperty;
    /**
    * Specifies profile based criteria for a segment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#business_phone_number CcSegmentDefinition#business_phone_number}
    */
    readonly businessPhoneNumber?: BusinessPhoneNumberProperty;
    /**
    * Specifies profile based criteria for a segment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#email_address CcSegmentDefinition#email_address}
    */
    readonly emailAddress?: EmailAddressProperty;
    /**
    * Specifies profile based criteria for a segment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#first_name CcSegmentDefinition#first_name}
    */
    readonly firstName?: FirstNameProperty;
    /**
    * Specifies profile based criteria for a segment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#gender_string CcSegmentDefinition#gender_string}
    */
    readonly genderString?: GenderStringProperty;
    /**
    * Specifies profile based criteria for a segment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#home_phone_number CcSegmentDefinition#home_phone_number}
    */
    readonly homePhoneNumber?: HomePhoneNumberProperty;
    /**
    * Specifies profile based criteria for a segment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#last_name CcSegmentDefinition#last_name}
    */
    readonly lastName?: LastNameProperty;
    /**
    * The address based criteria for the segment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#mailing_address CcSegmentDefinition#mailing_address}
    */
    readonly mailingAddress?: MailingAddressProperty;
    /**
    * Specifies profile based criteria for a segment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#middle_name CcSegmentDefinition#middle_name}
    */
    readonly middleName?: MiddleNameProperty;
    /**
    * Specifies profile based criteria for a segment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#mobile_phone_number CcSegmentDefinition#mobile_phone_number}
    */
    readonly mobilePhoneNumber?: MobilePhoneNumberProperty;
    /**
    * Specifies profile based criteria for a segment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#party_type_string CcSegmentDefinition#party_type_string}
    */
    readonly partyTypeString?: PartyTypeStringProperty;
    /**
    * Specifies profile based criteria for a segment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#personal_email_address CcSegmentDefinition#personal_email_address}
    */
    readonly personalEmailAddress?: PersonalEmailAddressProperty;
    /**
    * Specifies profile based criteria for a segment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#phone_number CcSegmentDefinition#phone_number}
    */
    readonly phoneNumber?: PhoneNumberProperty;
    /**
    * Specifies profile type based criteria for a segment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#profile_type CcSegmentDefinition#profile_type}
    */
    readonly profileType?: ProfileTypeDimensionProperty;
    /**
    * The address based criteria for the segment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#shipping_address CcSegmentDefinition#shipping_address}
    */
    readonly shippingAddress?: ShippingAddressProperty;
}
export class ProfileAttributesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ProfileAttributesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._accountNumber?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.accountNumber = this._accountNumber?.internalValue;
        }
        if (this._additionalInformation?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.additionalInformation = this._additionalInformation?.internalValue;
        }
        if (this._address?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.address = this._address?.internalValue;
        }
        if (this._attributes?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.attributes = this._attributes?.internalValue;
        }
        if (this._billingAddress?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.billingAddress = this._billingAddress?.internalValue;
        }
        if (this._birthDate?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.birthDate = this._birthDate?.internalValue;
        }
        if (this._businessEmailAddress?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.businessEmailAddress = this._businessEmailAddress?.internalValue;
        }
        if (this._businessName?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.businessName = this._businessName?.internalValue;
        }
        if (this._businessPhoneNumber?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.businessPhoneNumber = this._businessPhoneNumber?.internalValue;
        }
        if (this._emailAddress?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.emailAddress = this._emailAddress?.internalValue;
        }
        if (this._firstName?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.firstName = this._firstName?.internalValue;
        }
        if (this._genderString?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.genderString = this._genderString?.internalValue;
        }
        if (this._homePhoneNumber?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.homePhoneNumber = this._homePhoneNumber?.internalValue;
        }
        if (this._lastName?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.lastName = this._lastName?.internalValue;
        }
        if (this._mailingAddress?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.mailingAddress = this._mailingAddress?.internalValue;
        }
        if (this._middleName?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.middleName = this._middleName?.internalValue;
        }
        if (this._mobilePhoneNumber?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.mobilePhoneNumber = this._mobilePhoneNumber?.internalValue;
        }
        if (this._partyTypeString?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.partyTypeString = this._partyTypeString?.internalValue;
        }
        if (this._personalEmailAddress?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.personalEmailAddress = this._personalEmailAddress?.internalValue;
        }
        if (this._phoneNumber?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.phoneNumber = this._phoneNumber?.internalValue;
        }
        if (this._profileType?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.profileType = this._profileType?.internalValue;
        }
        if (this._shippingAddress?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.shippingAddress = this._shippingAddress?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ProfileAttributesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accountNumber.internalValue = undefined;
            this._additionalInformation.internalValue = undefined;
            this._address.internalValue = undefined;
            this._attributes.internalValue = undefined;
            this._billingAddress.internalValue = undefined;
            this._birthDate.internalValue = undefined;
            this._businessEmailAddress.internalValue = undefined;
            this._businessName.internalValue = undefined;
            this._businessPhoneNumber.internalValue = undefined;
            this._emailAddress.internalValue = undefined;
            this._firstName.internalValue = undefined;
            this._genderString.internalValue = undefined;
            this._homePhoneNumber.internalValue = undefined;
            this._lastName.internalValue = undefined;
            this._mailingAddress.internalValue = undefined;
            this._middleName.internalValue = undefined;
            this._mobilePhoneNumber.internalValue = undefined;
            this._partyTypeString.internalValue = undefined;
            this._personalEmailAddress.internalValue = undefined;
            this._phoneNumber.internalValue = undefined;
            this._profileType.internalValue = undefined;
            this._shippingAddress.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accountNumber.internalValue = value.accountNumber;
            this._additionalInformation.internalValue = value.additionalInformation;
            this._address.internalValue = value.address;
            this._attributes.internalValue = value.attributes;
            this._billingAddress.internalValue = value.billingAddress;
            this._birthDate.internalValue = value.birthDate;
            this._businessEmailAddress.internalValue = value.businessEmailAddress;
            this._businessName.internalValue = value.businessName;
            this._businessPhoneNumber.internalValue = value.businessPhoneNumber;
            this._emailAddress.internalValue = value.emailAddress;
            this._firstName.internalValue = value.firstName;
            this._genderString.internalValue = value.genderString;
            this._homePhoneNumber.internalValue = value.homePhoneNumber;
            this._lastName.internalValue = value.lastName;
            this._mailingAddress.internalValue = value.mailingAddress;
            this._middleName.internalValue = value.middleName;
            this._mobilePhoneNumber.internalValue = value.mobilePhoneNumber;
            this._partyTypeString.internalValue = value.partyTypeString;
            this._personalEmailAddress.internalValue = value.personalEmailAddress;
            this._phoneNumber.internalValue = value.phoneNumber;
            this._profileType.internalValue = value.profileType;
            this._shippingAddress.internalValue = value.shippingAddress;
        }
    }

    // account_number - computed: true, optional: true, required: false
    private _accountNumber = new ProfileDimensionPropertyOutputReference(this, "account_number");
    public get accountNumber() {
        return this._accountNumber;
    }
    public putAccountNumber(value: ProfileDimensionProperty) {
        this._accountNumber.internalValue = value;
    }
    public resetAccountNumber() {
        this._accountNumber.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accountNumberInput() {
        return this._accountNumber.internalValue;
    }

    // additional_information - computed: true, optional: true, required: false
    private _additionalInformation = new ExtraLengthValueProfileDimensionPropertyOutputReference(this, "additional_information");
    public get additionalInformation() {
        return this._additionalInformation;
    }
    public putAdditionalInformation(value: ExtraLengthValueProfileDimensionProperty) {
        this._additionalInformation.internalValue = value;
    }
    public resetAdditionalInformation() {
        this._additionalInformation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get additionalInformationInput() {
        return this._additionalInformation.internalValue;
    }

    // address - computed: true, optional: true, required: false
    private _address = new AddressDimensionPropertyOutputReference(this, "address");
    public get address() {
        return this._address;
    }
    public putAddress(value: AddressDimensionProperty) {
        this._address.internalValue = value;
    }
    public resetAddress() {
        this._address.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get addressInput() {
        return this._address.internalValue;
    }

    // attributes - computed: true, optional: true, required: false
    private _attributes = new AttributeDimensionPropertyMap(this, "attributes");
    public get attributes() {
        return this._attributes;
    }
    public putAttributes(value: { [key: string]: AttributeDimensionProperty } | cdktn.IResolvable) {
        this._attributes.internalValue = value;
    }
    public resetAttributes() {
        this._attributes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get attributesInput() {
        return this._attributes.internalValue;
    }

    // billing_address - computed: true, optional: true, required: false
    private _billingAddress = new BillingAddressPropertyOutputReference(this, "billing_address");
    public get billingAddress() {
        return this._billingAddress;
    }
    public putBillingAddress(value: BillingAddressProperty) {
        this._billingAddress.internalValue = value;
    }
    public resetBillingAddress() {
        this._billingAddress.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get billingAddressInput() {
        return this._billingAddress.internalValue;
    }

    // birth_date - computed: true, optional: true, required: false
    private _birthDate = new DateDimensionPropertyOutputReference(this, "birth_date");
    public get birthDate() {
        return this._birthDate;
    }
    public putBirthDate(value: DateDimensionProperty) {
        this._birthDate.internalValue = value;
    }
    public resetBirthDate() {
        this._birthDate.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get birthDateInput() {
        return this._birthDate.internalValue;
    }

    // business_email_address - computed: true, optional: true, required: false
    private _businessEmailAddress = new BusinessEmailAddressPropertyOutputReference(this, "business_email_address");
    public get businessEmailAddress() {
        return this._businessEmailAddress;
    }
    public putBusinessEmailAddress(value: BusinessEmailAddressProperty) {
        this._businessEmailAddress.internalValue = value;
    }
    public resetBusinessEmailAddress() {
        this._businessEmailAddress.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get businessEmailAddressInput() {
        return this._businessEmailAddress.internalValue;
    }

    // business_name - computed: true, optional: true, required: false
    private _businessName = new BusinessNamePropertyOutputReference(this, "business_name");
    public get businessName() {
        return this._businessName;
    }
    public putBusinessName(value: BusinessNameProperty) {
        this._businessName.internalValue = value;
    }
    public resetBusinessName() {
        this._businessName.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get businessNameInput() {
        return this._businessName.internalValue;
    }

    // business_phone_number - computed: true, optional: true, required: false
    private _businessPhoneNumber = new BusinessPhoneNumberPropertyOutputReference(this, "business_phone_number");
    public get businessPhoneNumber() {
        return this._businessPhoneNumber;
    }
    public putBusinessPhoneNumber(value: BusinessPhoneNumberProperty) {
        this._businessPhoneNumber.internalValue = value;
    }
    public resetBusinessPhoneNumber() {
        this._businessPhoneNumber.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get businessPhoneNumberInput() {
        return this._businessPhoneNumber.internalValue;
    }

    // email_address - computed: true, optional: true, required: false
    private _emailAddress = new EmailAddressPropertyOutputReference(this, "email_address");
    public get emailAddress() {
        return this._emailAddress;
    }
    public putEmailAddress(value: EmailAddressProperty) {
        this._emailAddress.internalValue = value;
    }
    public resetEmailAddress() {
        this._emailAddress.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get emailAddressInput() {
        return this._emailAddress.internalValue;
    }

    // first_name - computed: true, optional: true, required: false
    private _firstName = new FirstNamePropertyOutputReference(this, "first_name");
    public get firstName() {
        return this._firstName;
    }
    public putFirstName(value: FirstNameProperty) {
        this._firstName.internalValue = value;
    }
    public resetFirstName() {
        this._firstName.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get firstNameInput() {
        return this._firstName.internalValue;
    }

    // gender_string - computed: true, optional: true, required: false
    private _genderString = new GenderStringPropertyOutputReference(this, "gender_string");
    public get genderString() {
        return this._genderString;
    }
    public putGenderString(value: GenderStringProperty) {
        this._genderString.internalValue = value;
    }
    public resetGenderString() {
        this._genderString.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get genderStringInput() {
        return this._genderString.internalValue;
    }

    // home_phone_number - computed: true, optional: true, required: false
    private _homePhoneNumber = new HomePhoneNumberPropertyOutputReference(this, "home_phone_number");
    public get homePhoneNumber() {
        return this._homePhoneNumber;
    }
    public putHomePhoneNumber(value: HomePhoneNumberProperty) {
        this._homePhoneNumber.internalValue = value;
    }
    public resetHomePhoneNumber() {
        this._homePhoneNumber.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get homePhoneNumberInput() {
        return this._homePhoneNumber.internalValue;
    }

    // last_name - computed: true, optional: true, required: false
    private _lastName = new LastNamePropertyOutputReference(this, "last_name");
    public get lastName() {
        return this._lastName;
    }
    public putLastName(value: LastNameProperty) {
        this._lastName.internalValue = value;
    }
    public resetLastName() {
        this._lastName.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lastNameInput() {
        return this._lastName.internalValue;
    }

    // mailing_address - computed: true, optional: true, required: false
    private _mailingAddress = new MailingAddressPropertyOutputReference(this, "mailing_address");
    public get mailingAddress() {
        return this._mailingAddress;
    }
    public putMailingAddress(value: MailingAddressProperty) {
        this._mailingAddress.internalValue = value;
    }
    public resetMailingAddress() {
        this._mailingAddress.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mailingAddressInput() {
        return this._mailingAddress.internalValue;
    }

    // middle_name - computed: true, optional: true, required: false
    private _middleName = new MiddleNamePropertyOutputReference(this, "middle_name");
    public get middleName() {
        return this._middleName;
    }
    public putMiddleName(value: MiddleNameProperty) {
        this._middleName.internalValue = value;
    }
    public resetMiddleName() {
        this._middleName.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get middleNameInput() {
        return this._middleName.internalValue;
    }

    // mobile_phone_number - computed: true, optional: true, required: false
    private _mobilePhoneNumber = new MobilePhoneNumberPropertyOutputReference(this, "mobile_phone_number");
    public get mobilePhoneNumber() {
        return this._mobilePhoneNumber;
    }
    public putMobilePhoneNumber(value: MobilePhoneNumberProperty) {
        this._mobilePhoneNumber.internalValue = value;
    }
    public resetMobilePhoneNumber() {
        this._mobilePhoneNumber.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mobilePhoneNumberInput() {
        return this._mobilePhoneNumber.internalValue;
    }

    // party_type_string - computed: true, optional: true, required: false
    private _partyTypeString = new PartyTypeStringPropertyOutputReference(this, "party_type_string");
    public get partyTypeString() {
        return this._partyTypeString;
    }
    public putPartyTypeString(value: PartyTypeStringProperty) {
        this._partyTypeString.internalValue = value;
    }
    public resetPartyTypeString() {
        this._partyTypeString.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get partyTypeStringInput() {
        return this._partyTypeString.internalValue;
    }

    // personal_email_address - computed: true, optional: true, required: false
    private _personalEmailAddress = new PersonalEmailAddressPropertyOutputReference(this, "personal_email_address");
    public get personalEmailAddress() {
        return this._personalEmailAddress;
    }
    public putPersonalEmailAddress(value: PersonalEmailAddressProperty) {
        this._personalEmailAddress.internalValue = value;
    }
    public resetPersonalEmailAddress() {
        this._personalEmailAddress.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get personalEmailAddressInput() {
        return this._personalEmailAddress.internalValue;
    }

    // phone_number - computed: true, optional: true, required: false
    private _phoneNumber = new PhoneNumberPropertyOutputReference(this, "phone_number");
    public get phoneNumber() {
        return this._phoneNumber;
    }
    public putPhoneNumber(value: PhoneNumberProperty) {
        this._phoneNumber.internalValue = value;
    }
    public resetPhoneNumber() {
        this._phoneNumber.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get phoneNumberInput() {
        return this._phoneNumber.internalValue;
    }

    // profile_type - computed: true, optional: true, required: false
    private _profileType = new ProfileTypeDimensionPropertyOutputReference(this, "profile_type");
    public get profileType() {
        return this._profileType;
    }
    public putProfileType(value: ProfileTypeDimensionProperty) {
        this._profileType.internalValue = value;
    }
    public resetProfileType() {
        this._profileType.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get profileTypeInput() {
        return this._profileType.internalValue;
    }

    // shipping_address - computed: true, optional: true, required: false
    private _shippingAddress = new ShippingAddressPropertyOutputReference(this, "shipping_address");
    public get shippingAddress() {
        return this._shippingAddress;
    }
    public putShippingAddress(value: ShippingAddressProperty) {
        this._shippingAddress.internalValue = value;
    }
    public resetShippingAddress() {
        this._shippingAddress.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get shippingAddressInput() {
        return this._shippingAddress.internalValue;
    }
}
export interface DimensionProperty {
    /**
    * One or more calculated attributes to use as criteria for the segment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#calculated_attributes CcSegmentDefinition#calculated_attributes}
    */
    readonly calculatedAttributes?: { [key: string]: CalculatedAttributeDimensionProperty } | cdktn.IResolvable;
    /**
    * Specifies the dimension settings within profile attributes for a segment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#profile_attributes CcSegmentDefinition#profile_attributes}
    */
    readonly profileAttributes?: ProfileAttributesProperty;
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
        if (this._calculatedAttributes?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.calculatedAttributes = this._calculatedAttributes?.internalValue;
        }
        if (this._profileAttributes?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.profileAttributes = this._profileAttributes?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DimensionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._calculatedAttributes.internalValue = undefined;
            this._profileAttributes.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._calculatedAttributes.internalValue = value.calculatedAttributes;
            this._profileAttributes.internalValue = value.profileAttributes;
        }
    }

    // calculated_attributes - computed: true, optional: true, required: false
    private _calculatedAttributes = new CalculatedAttributeDimensionPropertyMap(this, "calculated_attributes");
    public get calculatedAttributes() {
        return this._calculatedAttributes;
    }
    public putCalculatedAttributes(value: { [key: string]: CalculatedAttributeDimensionProperty } | cdktn.IResolvable) {
        this._calculatedAttributes.internalValue = value;
    }
    public resetCalculatedAttributes() {
        this._calculatedAttributes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get calculatedAttributesInput() {
        return this._calculatedAttributes.internalValue;
    }

    // profile_attributes - computed: true, optional: true, required: false
    private _profileAttributes = new ProfileAttributesPropertyOutputReference(this, "profile_attributes");
    public get profileAttributes() {
        return this._profileAttributes;
    }
    public putProfileAttributes(value: ProfileAttributesProperty) {
        this._profileAttributes.internalValue = value;
    }
    public resetProfileAttributes() {
        this._profileAttributes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get profileAttributesInput() {
        return this._profileAttributes.internalValue;
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
export interface SourceSegmentProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#segment_definition_name CcSegmentDefinition#segment_definition_name}
    */
    readonly segmentDefinitionName?: string;
}
export class SourceSegmentPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): SourceSegmentProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._segmentDefinitionName !== undefined) {
            hasAnyValues = true;
            internalValueResult.segmentDefinitionName = this._segmentDefinitionName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SourceSegmentProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._segmentDefinitionName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._segmentDefinitionName = value.segmentDefinitionName;
        }
    }

    // segment_definition_name - computed: true, optional: true, required: false
    private _segmentDefinitionName?: string; 
    public get segmentDefinitionName() {
        return this.getStringAttribute('segment_definition_name');
    }
    public set segmentDefinitionName(value: string) {
        this._segmentDefinitionName = value;
    }
    public resetSegmentDefinitionName() {
        this._segmentDefinitionName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get segmentDefinitionNameInput() {
        return this._segmentDefinitionName;
    }
}

export class SourceSegmentPropertyList extends cdktn.ComplexList {
    public internalValue? : SourceSegmentProperty[] | cdktn.IResolvable

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
    public get(index: number): SourceSegmentPropertyOutputReference {
        return new SourceSegmentPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface GroupProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#dimensions CcSegmentDefinition#dimensions}
    */
    readonly dimensions?: DimensionProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#source_segments CcSegmentDefinition#source_segments}
    */
    readonly sourceSegments?: SourceSegmentProperty[] | cdktn.IResolvable;
    /**
    * Specifies the operator on how to handle multiple groups within the same segment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#source_type CcSegmentDefinition#source_type}
    */
    readonly sourceType?: string;
    /**
    * Specifies the operator on how to handle multiple groups within the same segment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#type CcSegmentDefinition#type}
    */
    readonly type?: string;
}
export class GroupPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): GroupProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dimensions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dimensions = this._dimensions?.internalValue;
        }
        if (this._sourceSegments?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceSegments = this._sourceSegments?.internalValue;
        }
        if (this._sourceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceType = this._sourceType;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: GroupProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dimensions.internalValue = undefined;
            this._sourceSegments.internalValue = undefined;
            this._sourceType = undefined;
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
            this._sourceSegments.internalValue = value.sourceSegments;
            this._sourceType = value.sourceType;
            this._type = value.type;
        }
    }

    // dimensions - computed: true, optional: true, required: false
    private _dimensions = new DimensionPropertyList(this, "dimensions", false);
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

    // source_segments - computed: true, optional: true, required: false
    private _sourceSegments = new SourceSegmentPropertyList(this, "source_segments", false);
    public get sourceSegments() {
        return this._sourceSegments;
    }
    public putSourceSegments(value: SourceSegmentProperty[] | cdktn.IResolvable) {
        this._sourceSegments.internalValue = value;
    }
    public resetSourceSegments() {
        this._sourceSegments.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceSegmentsInput() {
        return this._sourceSegments.internalValue;
    }

    // source_type - computed: true, optional: true, required: false
    private _sourceType?: string; 
    public get sourceType() {
        return this.getStringAttribute('source_type');
    }
    public set sourceType(value: string) {
        this._sourceType = value;
    }
    public resetSourceType() {
        this._sourceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceTypeInput() {
        return this._sourceType;
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

export class GroupPropertyList extends cdktn.ComplexList {
    public internalValue? : GroupProperty[] | cdktn.IResolvable

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
    public get(index: number): GroupPropertyOutputReference {
        return new GroupPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface SegmentGroupProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#groups CcSegmentDefinition#groups}
    */
    readonly groups?: GroupProperty[] | cdktn.IResolvable;
    /**
    * Specifies the operator on how to handle multiple groups within the same segment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#include CcSegmentDefinition#include}
    */
    readonly include?: string;
}
export class SegmentGroupPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SegmentGroupProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: SegmentGroupProperty | cdktn.IResolvable | undefined) {
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
    private _groups = new GroupPropertyList(this, "groups", false);
    public get groups() {
        return this._groups;
    }
    public putGroups(value: GroupProperty[] | cdktn.IResolvable) {
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
export interface SortAttributeProperty {
    /**
    * The data type of the sort attribute (e.g., string, number, date).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#data_type CcSegmentDefinition#data_type}
    */
    readonly dataType?: string;
    /**
    * The name of the attribute to sort by.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#name CcSegmentDefinition#name}
    */
    readonly name?: string;
    /**
    * The sort order for the attribute (ascending or descending).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#order CcSegmentDefinition#order}
    */
    readonly order?: string;
    /**
    * The type of attribute (e.g., profile, calculated).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#type CcSegmentDefinition#type}
    */
    readonly type?: string;
}
export class SortAttributePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): SortAttributeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dataType !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataType = this._dataType;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._order !== undefined) {
            hasAnyValues = true;
            internalValueResult.order = this._order;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SortAttributeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dataType = undefined;
            this._name = undefined;
            this._order = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dataType = value.dataType;
            this._name = value.name;
            this._order = value.order;
            this._type = value.type;
        }
    }

    // data_type - computed: true, optional: true, required: false
    private _dataType?: string; 
    public get dataType() {
        return this.getStringAttribute('data_type');
    }
    public set dataType(value: string) {
        this._dataType = value;
    }
    public resetDataType() {
        this._dataType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataTypeInput() {
        return this._dataType;
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

    // order - computed: true, optional: true, required: false
    private _order?: string; 
    public get order() {
        return this.getStringAttribute('order');
    }
    public set order(value: string) {
        this._order = value;
    }
    public resetOrder() {
        this._order = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get orderInput() {
        return this._order;
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

export class SortAttributePropertyList extends cdktn.ComplexList {
    public internalValue? : SortAttributeProperty[] | cdktn.IResolvable

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
    public get(index: number): SortAttributePropertyOutputReference {
        return new SortAttributePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface SegmentSortProperty {
    /**
    * A list of attributes used to sort the segments and their ordering preferences.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#attributes CcSegmentDefinition#attributes}
    */
    readonly attributes?: SortAttributeProperty[] | cdktn.IResolvable;
}
export class SegmentSortPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SegmentSortProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: SegmentSortProperty | cdktn.IResolvable | undefined) {
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
    private _attributes = new SortAttributePropertyList(this, "attributes", false);
    public get attributes() {
        return this._attributes;
    }
    public putAttributes(value: SortAttributeProperty[] | cdktn.IResolvable) {
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
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#key CcSegmentDefinition#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_segment_definition#value CcSegmentDefinition#value}
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
