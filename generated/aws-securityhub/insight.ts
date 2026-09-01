// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcInsightProps extends cdktn.TerraformMetaArguments {
    /**
    * One or more attributes used to filter the findings included in the insight
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#filters CcInsight#filters}
    */
    readonly filters: CcInsight.AwsSecurityFindingFiltersProperty;
    /**
    * The grouping attribute for the insight's findings
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#group_by_attribute CcInsight#group_by_attribute}
    */
    readonly groupByAttribute: string;
    /**
    * The name of a Security Hub insight
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#name CcInsight#name}
    */
    readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight awscc_securityhub_insight}
*/
export class CcInsight extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_securityhub_insight";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcInsight resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcInsight to import
    * @param importFromId The id of the existing CcInsight that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcInsight to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_securityhub_insight", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight awscc_securityhub_insight} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcInsightProps
    */
    public constructor(scope: Construct, id: string, config: CcInsightProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_securityhub_insight',
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
        this._filters.internalValue = config.filters;
        this._groupByAttribute = config.groupByAttribute;
        this._name = config.name;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // filters - computed: false, optional: false, required: true
    private _filters = new CcInsight.AwsSecurityFindingFiltersPropertyOutputReference(this, "filters");
    public get filters() {
        return this._filters;
    }
    public putFilters(value: CcInsight.AwsSecurityFindingFiltersProperty) {
        this._filters.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get filtersInput() {
        return this._filters.internalValue;
    }

    // group_by_attribute - computed: false, optional: false, required: true
    private _groupByAttribute?: string; 
    public get groupByAttribute() {
        return this.getStringAttribute('group_by_attribute');
    }
    public set groupByAttribute(value: string) {
        this._groupByAttribute = value;
    }
    // Temporarily expose input value. Use with caution.
    public get groupByAttributeInput() {
        return this._groupByAttribute;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // insight_arn - computed: true, optional: false, required: false
    public get insightArn() {
        return this.getStringAttribute('insight_arn');
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            filters: ccInsightAwsSecurityFindingFiltersPropertyToTerraform(this._filters.internalValue),
            group_by_attribute: cdktn.stringToTerraform(this._groupByAttribute),
            name: cdktn.stringToTerraform(this._name),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            filters: {
                value: ccInsightAwsSecurityFindingFiltersPropertyToHclTerraform(this._filters.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcInsight.AwsSecurityFindingFiltersProperty",
            },
            group_by_attribute: {
                value: cdktn.stringToHclTerraform(this._groupByAttribute),
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
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccInsightStringFilterPropertyToTerraform(struct?: CcInsight.StringFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInsightStringFilterPropertyToHclTerraform(struct?: CcInsight.StringFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccInsightAwsAccountNamePropertyToTerraform(struct?: CcInsight.AwsAccountNameProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInsightAwsAccountNamePropertyToHclTerraform(struct?: CcInsight.AwsAccountNameProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccInsightCompanyNamePropertyToTerraform(struct?: CcInsight.CompanyNameProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInsightCompanyNamePropertyToHclTerraform(struct?: CcInsight.CompanyNameProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccInsightComplianceAssociatedStandardsIdPropertyToTerraform(struct?: CcInsight.ComplianceAssociatedStandardsIdProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInsightComplianceAssociatedStandardsIdPropertyToHclTerraform(struct?: CcInsight.ComplianceAssociatedStandardsIdProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccInsightComplianceSecurityControlIdPropertyToTerraform(struct?: CcInsight.ComplianceSecurityControlIdProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInsightComplianceSecurityControlIdPropertyToHclTerraform(struct?: CcInsight.ComplianceSecurityControlIdProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccInsightComplianceSecurityControlParametersNamePropertyToTerraform(struct?: CcInsight.ComplianceSecurityControlParametersNameProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInsightComplianceSecurityControlParametersNamePropertyToHclTerraform(struct?: CcInsight.ComplianceSecurityControlParametersNameProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccInsightComplianceSecurityControlParametersValuePropertyToTerraform(struct?: CcInsight.ComplianceSecurityControlParametersValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInsightComplianceSecurityControlParametersValuePropertyToHclTerraform(struct?: CcInsight.ComplianceSecurityControlParametersValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccInsightComplianceStatusPropertyToTerraform(struct?: CcInsight.ComplianceStatusProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInsightComplianceStatusPropertyToHclTerraform(struct?: CcInsight.ComplianceStatusProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccInsightNumberFilterPropertyToTerraform(struct?: CcInsight.NumberFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        eq: cdktn.numberToTerraform(struct!.eq),
        gte: cdktn.numberToTerraform(struct!.gte),
        lte: cdktn.numberToTerraform(struct!.lte),
    }
}


export function ccInsightNumberFilterPropertyToHclTerraform(struct?: CcInsight.NumberFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        eq: {
            value: cdktn.numberToHclTerraform(struct!.eq),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        gte: {
            value: cdktn.numberToHclTerraform(struct!.gte),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        lte: {
            value: cdktn.numberToHclTerraform(struct!.lte),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInsightDateRangePropertyToTerraform(struct?: CcInsight.DateRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        unit: cdktn.stringToTerraform(struct!.unit),
        value: cdktn.numberToTerraform(struct!.value),
    }
}


export function ccInsightDateRangePropertyToHclTerraform(struct?: CcInsight.DateRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInsightDateFilterPropertyToTerraform(struct?: CcInsight.DateFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        date_range: ccInsightDateRangePropertyToTerraform(struct!.dateRange),
        end: cdktn.stringToTerraform(struct!.end),
        start: cdktn.stringToTerraform(struct!.start),
    }
}


export function ccInsightDateFilterPropertyToHclTerraform(struct?: CcInsight.DateFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        date_range: {
            value: ccInsightDateRangePropertyToHclTerraform(struct!.dateRange),
            isBlock: true,
            type: "struct",
            storageClassType: "DateRangeProperty",
        },
        end: {
            value: cdktn.stringToHclTerraform(struct!.end),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        start: {
            value: cdktn.stringToHclTerraform(struct!.start),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInsightCriticalityPropertyToTerraform(struct?: CcInsight.CriticalityProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        eq: cdktn.numberToTerraform(struct!.eq),
        gte: cdktn.numberToTerraform(struct!.gte),
        lte: cdktn.numberToTerraform(struct!.lte),
    }
}


export function ccInsightCriticalityPropertyToHclTerraform(struct?: CcInsight.CriticalityProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        eq: {
            value: cdktn.numberToHclTerraform(struct!.eq),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        gte: {
            value: cdktn.numberToHclTerraform(struct!.gte),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        lte: {
            value: cdktn.numberToHclTerraform(struct!.lte),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInsightDescriptionPropertyToTerraform(struct?: CcInsight.DescriptionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInsightDescriptionPropertyToHclTerraform(struct?: CcInsight.DescriptionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccInsightFindingProviderFieldsConfidencePropertyToTerraform(struct?: CcInsight.FindingProviderFieldsConfidenceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        eq: cdktn.numberToTerraform(struct!.eq),
        gte: cdktn.numberToTerraform(struct!.gte),
        lte: cdktn.numberToTerraform(struct!.lte),
    }
}


export function ccInsightFindingProviderFieldsConfidencePropertyToHclTerraform(struct?: CcInsight.FindingProviderFieldsConfidenceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        eq: {
            value: cdktn.numberToHclTerraform(struct!.eq),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        gte: {
            value: cdktn.numberToHclTerraform(struct!.gte),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        lte: {
            value: cdktn.numberToHclTerraform(struct!.lte),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInsightFindingProviderFieldsCriticalityPropertyToTerraform(struct?: CcInsight.FindingProviderFieldsCriticalityProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        eq: cdktn.numberToTerraform(struct!.eq),
        gte: cdktn.numberToTerraform(struct!.gte),
        lte: cdktn.numberToTerraform(struct!.lte),
    }
}


export function ccInsightFindingProviderFieldsCriticalityPropertyToHclTerraform(struct?: CcInsight.FindingProviderFieldsCriticalityProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        eq: {
            value: cdktn.numberToHclTerraform(struct!.eq),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        gte: {
            value: cdktn.numberToHclTerraform(struct!.gte),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        lte: {
            value: cdktn.numberToHclTerraform(struct!.lte),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInsightFindingProviderFieldsRelatedFindingsIdPropertyToTerraform(struct?: CcInsight.FindingProviderFieldsRelatedFindingsIdProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInsightFindingProviderFieldsRelatedFindingsIdPropertyToHclTerraform(struct?: CcInsight.FindingProviderFieldsRelatedFindingsIdProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccInsightFindingProviderFieldsRelatedFindingsProductArnPropertyToTerraform(struct?: CcInsight.FindingProviderFieldsRelatedFindingsProductArnProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInsightFindingProviderFieldsRelatedFindingsProductArnPropertyToHclTerraform(struct?: CcInsight.FindingProviderFieldsRelatedFindingsProductArnProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccInsightFindingProviderFieldsSeverityLabelPropertyToTerraform(struct?: CcInsight.FindingProviderFieldsSeverityLabelProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInsightFindingProviderFieldsSeverityLabelPropertyToHclTerraform(struct?: CcInsight.FindingProviderFieldsSeverityLabelProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccInsightFindingProviderFieldsSeverityOriginalPropertyToTerraform(struct?: CcInsight.FindingProviderFieldsSeverityOriginalProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInsightFindingProviderFieldsSeverityOriginalPropertyToHclTerraform(struct?: CcInsight.FindingProviderFieldsSeverityOriginalProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccInsightFindingProviderFieldsTypesPropertyToTerraform(struct?: CcInsight.FindingProviderFieldsTypesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInsightFindingProviderFieldsTypesPropertyToHclTerraform(struct?: CcInsight.FindingProviderFieldsTypesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccInsightFiltersFirstObservedAtDateRangePropertyToTerraform(struct?: CcInsight.FiltersFirstObservedAtDateRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        unit: cdktn.stringToTerraform(struct!.unit),
        value: cdktn.numberToTerraform(struct!.value),
    }
}


export function ccInsightFiltersFirstObservedAtDateRangePropertyToHclTerraform(struct?: CcInsight.FiltersFirstObservedAtDateRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInsightFirstObservedAtPropertyToTerraform(struct?: CcInsight.FirstObservedAtProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        date_range: ccInsightFiltersFirstObservedAtDateRangePropertyToTerraform(struct!.dateRange),
        end: cdktn.stringToTerraform(struct!.end),
        start: cdktn.stringToTerraform(struct!.start),
    }
}


export function ccInsightFirstObservedAtPropertyToHclTerraform(struct?: CcInsight.FirstObservedAtProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        date_range: {
            value: ccInsightFiltersFirstObservedAtDateRangePropertyToHclTerraform(struct!.dateRange),
            isBlock: true,
            type: "struct",
            storageClassType: "FiltersFirstObservedAtDateRangeProperty",
        },
        end: {
            value: cdktn.stringToHclTerraform(struct!.end),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        start: {
            value: cdktn.stringToHclTerraform(struct!.start),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInsightGeneratorIdPropertyToTerraform(struct?: CcInsight.GeneratorIdProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInsightGeneratorIdPropertyToHclTerraform(struct?: CcInsight.GeneratorIdProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccInsightIdPropertyToTerraform(struct?: CcInsight.IdProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInsightIdPropertyToHclTerraform(struct?: CcInsight.IdProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccInsightKeywordFilterPropertyToTerraform(struct?: CcInsight.KeywordFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInsightKeywordFilterPropertyToHclTerraform(struct?: CcInsight.KeywordFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
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


export function ccInsightFiltersLastObservedAtDateRangePropertyToTerraform(struct?: CcInsight.FiltersLastObservedAtDateRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        unit: cdktn.stringToTerraform(struct!.unit),
        value: cdktn.numberToTerraform(struct!.value),
    }
}


export function ccInsightFiltersLastObservedAtDateRangePropertyToHclTerraform(struct?: CcInsight.FiltersLastObservedAtDateRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInsightLastObservedAtPropertyToTerraform(struct?: CcInsight.LastObservedAtProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        date_range: ccInsightFiltersLastObservedAtDateRangePropertyToTerraform(struct!.dateRange),
        end: cdktn.stringToTerraform(struct!.end),
        start: cdktn.stringToTerraform(struct!.start),
    }
}


export function ccInsightLastObservedAtPropertyToHclTerraform(struct?: CcInsight.LastObservedAtProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        date_range: {
            value: ccInsightFiltersLastObservedAtDateRangePropertyToHclTerraform(struct!.dateRange),
            isBlock: true,
            type: "struct",
            storageClassType: "FiltersLastObservedAtDateRangeProperty",
        },
        end: {
            value: cdktn.stringToHclTerraform(struct!.end),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        start: {
            value: cdktn.stringToHclTerraform(struct!.start),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInsightMalwareNamePropertyToTerraform(struct?: CcInsight.MalwareNameProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInsightMalwareNamePropertyToHclTerraform(struct?: CcInsight.MalwareNameProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccInsightMalwarePathPropertyToTerraform(struct?: CcInsight.MalwarePathProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInsightMalwarePathPropertyToHclTerraform(struct?: CcInsight.MalwarePathProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccInsightMalwareStatePropertyToTerraform(struct?: CcInsight.MalwareStateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInsightMalwareStatePropertyToHclTerraform(struct?: CcInsight.MalwareStateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccInsightMalwareTypePropertyToTerraform(struct?: CcInsight.MalwareTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInsightMalwareTypePropertyToHclTerraform(struct?: CcInsight.MalwareTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccInsightNetworkDestinationDomainPropertyToTerraform(struct?: CcInsight.NetworkDestinationDomainProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInsightNetworkDestinationDomainPropertyToHclTerraform(struct?: CcInsight.NetworkDestinationDomainProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccInsightIpFilterPropertyToTerraform(struct?: CcInsight.IpFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cidr: cdktn.stringToTerraform(struct!.cidr),
    }
}


export function ccInsightIpFilterPropertyToHclTerraform(struct?: CcInsight.IpFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cidr: {
            value: cdktn.stringToHclTerraform(struct!.cidr),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInsightNetworkDestinationIpV6PropertyToTerraform(struct?: CcInsight.NetworkDestinationIpV6Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cidr: cdktn.stringToTerraform(struct!.cidr),
    }
}


export function ccInsightNetworkDestinationIpV6PropertyToHclTerraform(struct?: CcInsight.NetworkDestinationIpV6Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cidr: {
            value: cdktn.stringToHclTerraform(struct!.cidr),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInsightNetworkDestinationPortPropertyToTerraform(struct?: CcInsight.NetworkDestinationPortProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        eq: cdktn.numberToTerraform(struct!.eq),
        gte: cdktn.numberToTerraform(struct!.gte),
        lte: cdktn.numberToTerraform(struct!.lte),
    }
}


export function ccInsightNetworkDestinationPortPropertyToHclTerraform(struct?: CcInsight.NetworkDestinationPortProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        eq: {
            value: cdktn.numberToHclTerraform(struct!.eq),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        gte: {
            value: cdktn.numberToHclTerraform(struct!.gte),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        lte: {
            value: cdktn.numberToHclTerraform(struct!.lte),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInsightNetworkDirectionPropertyToTerraform(struct?: CcInsight.NetworkDirectionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInsightNetworkDirectionPropertyToHclTerraform(struct?: CcInsight.NetworkDirectionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccInsightNetworkProtocolPropertyToTerraform(struct?: CcInsight.NetworkProtocolProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInsightNetworkProtocolPropertyToHclTerraform(struct?: CcInsight.NetworkProtocolProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccInsightNetworkSourceDomainPropertyToTerraform(struct?: CcInsight.NetworkSourceDomainProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInsightNetworkSourceDomainPropertyToHclTerraform(struct?: CcInsight.NetworkSourceDomainProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccInsightNetworkSourceIpV4PropertyToTerraform(struct?: CcInsight.NetworkSourceIpV4Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cidr: cdktn.stringToTerraform(struct!.cidr),
    }
}


export function ccInsightNetworkSourceIpV4PropertyToHclTerraform(struct?: CcInsight.NetworkSourceIpV4Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cidr: {
            value: cdktn.stringToHclTerraform(struct!.cidr),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInsightNetworkSourceIpV6PropertyToTerraform(struct?: CcInsight.NetworkSourceIpV6Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cidr: cdktn.stringToTerraform(struct!.cidr),
    }
}


export function ccInsightNetworkSourceIpV6PropertyToHclTerraform(struct?: CcInsight.NetworkSourceIpV6Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cidr: {
            value: cdktn.stringToHclTerraform(struct!.cidr),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInsightNetworkSourceMacPropertyToTerraform(struct?: CcInsight.NetworkSourceMacProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInsightNetworkSourceMacPropertyToHclTerraform(struct?: CcInsight.NetworkSourceMacProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccInsightNetworkSourcePortPropertyToTerraform(struct?: CcInsight.NetworkSourcePortProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        eq: cdktn.numberToTerraform(struct!.eq),
        gte: cdktn.numberToTerraform(struct!.gte),
        lte: cdktn.numberToTerraform(struct!.lte),
    }
}


export function ccInsightNetworkSourcePortPropertyToHclTerraform(struct?: CcInsight.NetworkSourcePortProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        eq: {
            value: cdktn.numberToHclTerraform(struct!.eq),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        gte: {
            value: cdktn.numberToHclTerraform(struct!.gte),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        lte: {
            value: cdktn.numberToHclTerraform(struct!.lte),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInsightNoteTextPropertyToTerraform(struct?: CcInsight.NoteTextProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInsightNoteTextPropertyToHclTerraform(struct?: CcInsight.NoteTextProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccInsightFiltersNoteUpdatedAtDateRangePropertyToTerraform(struct?: CcInsight.FiltersNoteUpdatedAtDateRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        unit: cdktn.stringToTerraform(struct!.unit),
        value: cdktn.numberToTerraform(struct!.value),
    }
}


export function ccInsightFiltersNoteUpdatedAtDateRangePropertyToHclTerraform(struct?: CcInsight.FiltersNoteUpdatedAtDateRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInsightNoteUpdatedAtPropertyToTerraform(struct?: CcInsight.NoteUpdatedAtProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        date_range: ccInsightFiltersNoteUpdatedAtDateRangePropertyToTerraform(struct!.dateRange),
        end: cdktn.stringToTerraform(struct!.end),
        start: cdktn.stringToTerraform(struct!.start),
    }
}


export function ccInsightNoteUpdatedAtPropertyToHclTerraform(struct?: CcInsight.NoteUpdatedAtProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        date_range: {
            value: ccInsightFiltersNoteUpdatedAtDateRangePropertyToHclTerraform(struct!.dateRange),
            isBlock: true,
            type: "struct",
            storageClassType: "FiltersNoteUpdatedAtDateRangeProperty",
        },
        end: {
            value: cdktn.stringToHclTerraform(struct!.end),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        start: {
            value: cdktn.stringToHclTerraform(struct!.start),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInsightNoteUpdatedByPropertyToTerraform(struct?: CcInsight.NoteUpdatedByProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInsightNoteUpdatedByPropertyToHclTerraform(struct?: CcInsight.NoteUpdatedByProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccInsightFiltersProcessLaunchedAtDateRangePropertyToTerraform(struct?: CcInsight.FiltersProcessLaunchedAtDateRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        unit: cdktn.stringToTerraform(struct!.unit),
        value: cdktn.numberToTerraform(struct!.value),
    }
}


export function ccInsightFiltersProcessLaunchedAtDateRangePropertyToHclTerraform(struct?: CcInsight.FiltersProcessLaunchedAtDateRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInsightProcessLaunchedAtPropertyToTerraform(struct?: CcInsight.ProcessLaunchedAtProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        date_range: ccInsightFiltersProcessLaunchedAtDateRangePropertyToTerraform(struct!.dateRange),
        end: cdktn.stringToTerraform(struct!.end),
        start: cdktn.stringToTerraform(struct!.start),
    }
}


export function ccInsightProcessLaunchedAtPropertyToHclTerraform(struct?: CcInsight.ProcessLaunchedAtProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        date_range: {
            value: ccInsightFiltersProcessLaunchedAtDateRangePropertyToHclTerraform(struct!.dateRange),
            isBlock: true,
            type: "struct",
            storageClassType: "FiltersProcessLaunchedAtDateRangeProperty",
        },
        end: {
            value: cdktn.stringToHclTerraform(struct!.end),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        start: {
            value: cdktn.stringToHclTerraform(struct!.start),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInsightProcessNamePropertyToTerraform(struct?: CcInsight.ProcessNameProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInsightProcessNamePropertyToHclTerraform(struct?: CcInsight.ProcessNameProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccInsightProcessParentPidPropertyToTerraform(struct?: CcInsight.ProcessParentPidProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        eq: cdktn.numberToTerraform(struct!.eq),
        gte: cdktn.numberToTerraform(struct!.gte),
        lte: cdktn.numberToTerraform(struct!.lte),
    }
}


export function ccInsightProcessParentPidPropertyToHclTerraform(struct?: CcInsight.ProcessParentPidProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        eq: {
            value: cdktn.numberToHclTerraform(struct!.eq),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        gte: {
            value: cdktn.numberToHclTerraform(struct!.gte),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        lte: {
            value: cdktn.numberToHclTerraform(struct!.lte),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInsightProcessPathPropertyToTerraform(struct?: CcInsight.ProcessPathProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInsightProcessPathPropertyToHclTerraform(struct?: CcInsight.ProcessPathProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccInsightProcessPidPropertyToTerraform(struct?: CcInsight.ProcessPidProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        eq: cdktn.numberToTerraform(struct!.eq),
        gte: cdktn.numberToTerraform(struct!.gte),
        lte: cdktn.numberToTerraform(struct!.lte),
    }
}


export function ccInsightProcessPidPropertyToHclTerraform(struct?: CcInsight.ProcessPidProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        eq: {
            value: cdktn.numberToHclTerraform(struct!.eq),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        gte: {
            value: cdktn.numberToHclTerraform(struct!.gte),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        lte: {
            value: cdktn.numberToHclTerraform(struct!.lte),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInsightFiltersProcessTerminatedAtDateRangePropertyToTerraform(struct?: CcInsight.FiltersProcessTerminatedAtDateRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        unit: cdktn.stringToTerraform(struct!.unit),
        value: cdktn.numberToTerraform(struct!.value),
    }
}


export function ccInsightFiltersProcessTerminatedAtDateRangePropertyToHclTerraform(struct?: CcInsight.FiltersProcessTerminatedAtDateRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInsightProcessTerminatedAtPropertyToTerraform(struct?: CcInsight.ProcessTerminatedAtProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        date_range: ccInsightFiltersProcessTerminatedAtDateRangePropertyToTerraform(struct!.dateRange),
        end: cdktn.stringToTerraform(struct!.end),
        start: cdktn.stringToTerraform(struct!.start),
    }
}


export function ccInsightProcessTerminatedAtPropertyToHclTerraform(struct?: CcInsight.ProcessTerminatedAtProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        date_range: {
            value: ccInsightFiltersProcessTerminatedAtDateRangePropertyToHclTerraform(struct!.dateRange),
            isBlock: true,
            type: "struct",
            storageClassType: "FiltersProcessTerminatedAtDateRangeProperty",
        },
        end: {
            value: cdktn.stringToHclTerraform(struct!.end),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        start: {
            value: cdktn.stringToHclTerraform(struct!.start),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInsightProductArnPropertyToTerraform(struct?: CcInsight.ProductArnProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInsightProductArnPropertyToHclTerraform(struct?: CcInsight.ProductArnProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccInsightMapFilterPropertyToTerraform(struct?: CcInsight.MapFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInsightMapFilterPropertyToHclTerraform(struct?: CcInsight.MapFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
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


export function ccInsightProductNamePropertyToTerraform(struct?: CcInsight.ProductNameProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInsightProductNamePropertyToHclTerraform(struct?: CcInsight.ProductNameProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccInsightRecommendationTextPropertyToTerraform(struct?: CcInsight.RecommendationTextProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInsightRecommendationTextPropertyToHclTerraform(struct?: CcInsight.RecommendationTextProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccInsightRecordStatePropertyToTerraform(struct?: CcInsight.RecordStateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInsightRecordStatePropertyToHclTerraform(struct?: CcInsight.RecordStateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccInsightRegionPropertyToTerraform(struct?: CcInsight.RegionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInsightRegionPropertyToHclTerraform(struct?: CcInsight.RegionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccInsightRelatedFindingsIdPropertyToTerraform(struct?: CcInsight.RelatedFindingsIdProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInsightRelatedFindingsIdPropertyToHclTerraform(struct?: CcInsight.RelatedFindingsIdProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccInsightRelatedFindingsProductArnPropertyToTerraform(struct?: CcInsight.RelatedFindingsProductArnProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInsightRelatedFindingsProductArnPropertyToHclTerraform(struct?: CcInsight.RelatedFindingsProductArnProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccInsightResourceApplicationArnPropertyToTerraform(struct?: CcInsight.ResourceApplicationArnProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInsightResourceApplicationArnPropertyToHclTerraform(struct?: CcInsight.ResourceApplicationArnProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccInsightResourceApplicationNamePropertyToTerraform(struct?: CcInsight.ResourceApplicationNameProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInsightResourceApplicationNamePropertyToHclTerraform(struct?: CcInsight.ResourceApplicationNameProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccInsightResourceAwsEc2InstanceIamInstanceProfileArnPropertyToTerraform(struct?: CcInsight.ResourceAwsEc2InstanceIamInstanceProfileArnProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInsightResourceAwsEc2InstanceIamInstanceProfileArnPropertyToHclTerraform(struct?: CcInsight.ResourceAwsEc2InstanceIamInstanceProfileArnProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccInsightResourceAwsEc2InstanceImageIdPropertyToTerraform(struct?: CcInsight.ResourceAwsEc2InstanceImageIdProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInsightResourceAwsEc2InstanceImageIdPropertyToHclTerraform(struct?: CcInsight.ResourceAwsEc2InstanceImageIdProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccInsightResourceAwsEc2InstanceIpV4AddressesPropertyToTerraform(struct?: CcInsight.ResourceAwsEc2InstanceIpV4AddressesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cidr: cdktn.stringToTerraform(struct!.cidr),
    }
}


export function ccInsightResourceAwsEc2InstanceIpV4AddressesPropertyToHclTerraform(struct?: CcInsight.ResourceAwsEc2InstanceIpV4AddressesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cidr: {
            value: cdktn.stringToHclTerraform(struct!.cidr),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInsightResourceAwsEc2InstanceIpV6AddressesPropertyToTerraform(struct?: CcInsight.ResourceAwsEc2InstanceIpV6AddressesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        cidr: cdktn.stringToTerraform(struct!.cidr),
    }
}


export function ccInsightResourceAwsEc2InstanceIpV6AddressesPropertyToHclTerraform(struct?: CcInsight.ResourceAwsEc2InstanceIpV6AddressesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        cidr: {
            value: cdktn.stringToHclTerraform(struct!.cidr),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInsightResourceAwsEc2InstanceKeyNamePropertyToTerraform(struct?: CcInsight.ResourceAwsEc2InstanceKeyNameProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInsightResourceAwsEc2InstanceKeyNamePropertyToHclTerraform(struct?: CcInsight.ResourceAwsEc2InstanceKeyNameProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccInsightFiltersResourceAwsEc2InstanceLaunchedAtDateRangePropertyToTerraform(struct?: CcInsight.FiltersResourceAwsEc2InstanceLaunchedAtDateRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        unit: cdktn.stringToTerraform(struct!.unit),
        value: cdktn.numberToTerraform(struct!.value),
    }
}


export function ccInsightFiltersResourceAwsEc2InstanceLaunchedAtDateRangePropertyToHclTerraform(struct?: CcInsight.FiltersResourceAwsEc2InstanceLaunchedAtDateRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInsightResourceAwsEc2InstanceLaunchedAtPropertyToTerraform(struct?: CcInsight.ResourceAwsEc2InstanceLaunchedAtProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        date_range: ccInsightFiltersResourceAwsEc2InstanceLaunchedAtDateRangePropertyToTerraform(struct!.dateRange),
        end: cdktn.stringToTerraform(struct!.end),
        start: cdktn.stringToTerraform(struct!.start),
    }
}


export function ccInsightResourceAwsEc2InstanceLaunchedAtPropertyToHclTerraform(struct?: CcInsight.ResourceAwsEc2InstanceLaunchedAtProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        date_range: {
            value: ccInsightFiltersResourceAwsEc2InstanceLaunchedAtDateRangePropertyToHclTerraform(struct!.dateRange),
            isBlock: true,
            type: "struct",
            storageClassType: "FiltersResourceAwsEc2InstanceLaunchedAtDateRangeProperty",
        },
        end: {
            value: cdktn.stringToHclTerraform(struct!.end),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        start: {
            value: cdktn.stringToHclTerraform(struct!.start),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInsightResourceAwsEc2InstanceSubnetIdPropertyToTerraform(struct?: CcInsight.ResourceAwsEc2InstanceSubnetIdProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInsightResourceAwsEc2InstanceSubnetIdPropertyToHclTerraform(struct?: CcInsight.ResourceAwsEc2InstanceSubnetIdProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccInsightResourceAwsEc2InstanceTypePropertyToTerraform(struct?: CcInsight.ResourceAwsEc2InstanceTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInsightResourceAwsEc2InstanceTypePropertyToHclTerraform(struct?: CcInsight.ResourceAwsEc2InstanceTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccInsightResourceAwsEc2InstanceVpcIdPropertyToTerraform(struct?: CcInsight.ResourceAwsEc2InstanceVpcIdProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInsightResourceAwsEc2InstanceVpcIdPropertyToHclTerraform(struct?: CcInsight.ResourceAwsEc2InstanceVpcIdProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccInsightFiltersResourceAwsIamAccessKeyCreatedAtDateRangePropertyToTerraform(struct?: CcInsight.FiltersResourceAwsIamAccessKeyCreatedAtDateRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        unit: cdktn.stringToTerraform(struct!.unit),
        value: cdktn.numberToTerraform(struct!.value),
    }
}


export function ccInsightFiltersResourceAwsIamAccessKeyCreatedAtDateRangePropertyToHclTerraform(struct?: CcInsight.FiltersResourceAwsIamAccessKeyCreatedAtDateRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInsightResourceAwsIamAccessKeyCreatedAtPropertyToTerraform(struct?: CcInsight.ResourceAwsIamAccessKeyCreatedAtProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        date_range: ccInsightFiltersResourceAwsIamAccessKeyCreatedAtDateRangePropertyToTerraform(struct!.dateRange),
        end: cdktn.stringToTerraform(struct!.end),
        start: cdktn.stringToTerraform(struct!.start),
    }
}


export function ccInsightResourceAwsIamAccessKeyCreatedAtPropertyToHclTerraform(struct?: CcInsight.ResourceAwsIamAccessKeyCreatedAtProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        date_range: {
            value: ccInsightFiltersResourceAwsIamAccessKeyCreatedAtDateRangePropertyToHclTerraform(struct!.dateRange),
            isBlock: true,
            type: "struct",
            storageClassType: "FiltersResourceAwsIamAccessKeyCreatedAtDateRangeProperty",
        },
        end: {
            value: cdktn.stringToHclTerraform(struct!.end),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        start: {
            value: cdktn.stringToHclTerraform(struct!.start),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInsightResourceAwsIamAccessKeyPrincipalNamePropertyToTerraform(struct?: CcInsight.ResourceAwsIamAccessKeyPrincipalNameProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInsightResourceAwsIamAccessKeyPrincipalNamePropertyToHclTerraform(struct?: CcInsight.ResourceAwsIamAccessKeyPrincipalNameProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccInsightResourceAwsIamAccessKeyStatusPropertyToTerraform(struct?: CcInsight.ResourceAwsIamAccessKeyStatusProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInsightResourceAwsIamAccessKeyStatusPropertyToHclTerraform(struct?: CcInsight.ResourceAwsIamAccessKeyStatusProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccInsightResourceAwsIamAccessKeyUserNamePropertyToTerraform(struct?: CcInsight.ResourceAwsIamAccessKeyUserNameProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInsightResourceAwsIamAccessKeyUserNamePropertyToHclTerraform(struct?: CcInsight.ResourceAwsIamAccessKeyUserNameProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccInsightResourceAwsIamUserUserNamePropertyToTerraform(struct?: CcInsight.ResourceAwsIamUserUserNameProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInsightResourceAwsIamUserUserNamePropertyToHclTerraform(struct?: CcInsight.ResourceAwsIamUserUserNameProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccInsightResourceAwsS3BucketOwnerIdPropertyToTerraform(struct?: CcInsight.ResourceAwsS3BucketOwnerIdProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInsightResourceAwsS3BucketOwnerIdPropertyToHclTerraform(struct?: CcInsight.ResourceAwsS3BucketOwnerIdProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccInsightResourceAwsS3BucketOwnerNamePropertyToTerraform(struct?: CcInsight.ResourceAwsS3BucketOwnerNameProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInsightResourceAwsS3BucketOwnerNamePropertyToHclTerraform(struct?: CcInsight.ResourceAwsS3BucketOwnerNameProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccInsightResourceContainerImageIdPropertyToTerraform(struct?: CcInsight.ResourceContainerImageIdProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInsightResourceContainerImageIdPropertyToHclTerraform(struct?: CcInsight.ResourceContainerImageIdProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccInsightResourceContainerImageNamePropertyToTerraform(struct?: CcInsight.ResourceContainerImageNameProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInsightResourceContainerImageNamePropertyToHclTerraform(struct?: CcInsight.ResourceContainerImageNameProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccInsightFiltersResourceContainerLaunchedAtDateRangePropertyToTerraform(struct?: CcInsight.FiltersResourceContainerLaunchedAtDateRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        unit: cdktn.stringToTerraform(struct!.unit),
        value: cdktn.numberToTerraform(struct!.value),
    }
}


export function ccInsightFiltersResourceContainerLaunchedAtDateRangePropertyToHclTerraform(struct?: CcInsight.FiltersResourceContainerLaunchedAtDateRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInsightResourceContainerLaunchedAtPropertyToTerraform(struct?: CcInsight.ResourceContainerLaunchedAtProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        date_range: ccInsightFiltersResourceContainerLaunchedAtDateRangePropertyToTerraform(struct!.dateRange),
        end: cdktn.stringToTerraform(struct!.end),
        start: cdktn.stringToTerraform(struct!.start),
    }
}


export function ccInsightResourceContainerLaunchedAtPropertyToHclTerraform(struct?: CcInsight.ResourceContainerLaunchedAtProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        date_range: {
            value: ccInsightFiltersResourceContainerLaunchedAtDateRangePropertyToHclTerraform(struct!.dateRange),
            isBlock: true,
            type: "struct",
            storageClassType: "FiltersResourceContainerLaunchedAtDateRangeProperty",
        },
        end: {
            value: cdktn.stringToHclTerraform(struct!.end),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        start: {
            value: cdktn.stringToHclTerraform(struct!.start),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInsightResourceContainerNamePropertyToTerraform(struct?: CcInsight.ResourceContainerNameProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInsightResourceContainerNamePropertyToHclTerraform(struct?: CcInsight.ResourceContainerNameProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccInsightResourceDetailsOtherPropertyToTerraform(struct?: CcInsight.ResourceDetailsOtherProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInsightResourceDetailsOtherPropertyToHclTerraform(struct?: CcInsight.ResourceDetailsOtherProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
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


export function ccInsightResourceIdPropertyToTerraform(struct?: CcInsight.ResourceIdProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInsightResourceIdPropertyToHclTerraform(struct?: CcInsight.ResourceIdProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccInsightResourcePartitionPropertyToTerraform(struct?: CcInsight.ResourcePartitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInsightResourcePartitionPropertyToHclTerraform(struct?: CcInsight.ResourcePartitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccInsightResourceRegionPropertyToTerraform(struct?: CcInsight.ResourceRegionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInsightResourceRegionPropertyToHclTerraform(struct?: CcInsight.ResourceRegionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccInsightResourceTagsPropertyToTerraform(struct?: CcInsight.ResourceTagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInsightResourceTagsPropertyToHclTerraform(struct?: CcInsight.ResourceTagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
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


export function ccInsightResourceTypePropertyToTerraform(struct?: CcInsight.ResourceTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInsightResourceTypePropertyToHclTerraform(struct?: CcInsight.ResourceTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccInsightBooleanFilterPropertyToTerraform(struct?: CcInsight.BooleanFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        value: cdktn.booleanToTerraform(struct!.value),
    }
}


export function ccInsightBooleanFilterPropertyToHclTerraform(struct?: CcInsight.BooleanFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        value: {
            value: cdktn.booleanToHclTerraform(struct!.value),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInsightSeverityLabelPropertyToTerraform(struct?: CcInsight.SeverityLabelProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInsightSeverityLabelPropertyToHclTerraform(struct?: CcInsight.SeverityLabelProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccInsightSeverityNormalizedPropertyToTerraform(struct?: CcInsight.SeverityNormalizedProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        eq: cdktn.numberToTerraform(struct!.eq),
        gte: cdktn.numberToTerraform(struct!.gte),
        lte: cdktn.numberToTerraform(struct!.lte),
    }
}


export function ccInsightSeverityNormalizedPropertyToHclTerraform(struct?: CcInsight.SeverityNormalizedProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        eq: {
            value: cdktn.numberToHclTerraform(struct!.eq),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        gte: {
            value: cdktn.numberToHclTerraform(struct!.gte),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        lte: {
            value: cdktn.numberToHclTerraform(struct!.lte),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInsightSeverityProductPropertyToTerraform(struct?: CcInsight.SeverityProductProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        eq: cdktn.numberToTerraform(struct!.eq),
        gte: cdktn.numberToTerraform(struct!.gte),
        lte: cdktn.numberToTerraform(struct!.lte),
    }
}


export function ccInsightSeverityProductPropertyToHclTerraform(struct?: CcInsight.SeverityProductProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        eq: {
            value: cdktn.numberToHclTerraform(struct!.eq),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        gte: {
            value: cdktn.numberToHclTerraform(struct!.gte),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        lte: {
            value: cdktn.numberToHclTerraform(struct!.lte),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInsightSourceUrlPropertyToTerraform(struct?: CcInsight.SourceUrlProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInsightSourceUrlPropertyToHclTerraform(struct?: CcInsight.SourceUrlProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccInsightThreatIntelIndicatorCategoryPropertyToTerraform(struct?: CcInsight.ThreatIntelIndicatorCategoryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInsightThreatIntelIndicatorCategoryPropertyToHclTerraform(struct?: CcInsight.ThreatIntelIndicatorCategoryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccInsightFiltersThreatIntelIndicatorLastObservedAtDateRangePropertyToTerraform(struct?: CcInsight.FiltersThreatIntelIndicatorLastObservedAtDateRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        unit: cdktn.stringToTerraform(struct!.unit),
        value: cdktn.numberToTerraform(struct!.value),
    }
}


export function ccInsightFiltersThreatIntelIndicatorLastObservedAtDateRangePropertyToHclTerraform(struct?: CcInsight.FiltersThreatIntelIndicatorLastObservedAtDateRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInsightThreatIntelIndicatorLastObservedAtPropertyToTerraform(struct?: CcInsight.ThreatIntelIndicatorLastObservedAtProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        date_range: ccInsightFiltersThreatIntelIndicatorLastObservedAtDateRangePropertyToTerraform(struct!.dateRange),
        end: cdktn.stringToTerraform(struct!.end),
        start: cdktn.stringToTerraform(struct!.start),
    }
}


export function ccInsightThreatIntelIndicatorLastObservedAtPropertyToHclTerraform(struct?: CcInsight.ThreatIntelIndicatorLastObservedAtProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        date_range: {
            value: ccInsightFiltersThreatIntelIndicatorLastObservedAtDateRangePropertyToHclTerraform(struct!.dateRange),
            isBlock: true,
            type: "struct",
            storageClassType: "FiltersThreatIntelIndicatorLastObservedAtDateRangeProperty",
        },
        end: {
            value: cdktn.stringToHclTerraform(struct!.end),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        start: {
            value: cdktn.stringToHclTerraform(struct!.start),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInsightThreatIntelIndicatorSourcePropertyToTerraform(struct?: CcInsight.ThreatIntelIndicatorSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInsightThreatIntelIndicatorSourcePropertyToHclTerraform(struct?: CcInsight.ThreatIntelIndicatorSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccInsightThreatIntelIndicatorSourceUrlPropertyToTerraform(struct?: CcInsight.ThreatIntelIndicatorSourceUrlProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInsightThreatIntelIndicatorSourceUrlPropertyToHclTerraform(struct?: CcInsight.ThreatIntelIndicatorSourceUrlProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccInsightThreatIntelIndicatorTypePropertyToTerraform(struct?: CcInsight.ThreatIntelIndicatorTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInsightThreatIntelIndicatorTypePropertyToHclTerraform(struct?: CcInsight.ThreatIntelIndicatorTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccInsightThreatIntelIndicatorValuePropertyToTerraform(struct?: CcInsight.ThreatIntelIndicatorValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInsightThreatIntelIndicatorValuePropertyToHclTerraform(struct?: CcInsight.ThreatIntelIndicatorValueProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccInsightTitlePropertyToTerraform(struct?: CcInsight.TitleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInsightTitlePropertyToHclTerraform(struct?: CcInsight.TitleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccInsightTypePropertyToTerraform(struct?: CcInsight.TypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInsightTypePropertyToHclTerraform(struct?: CcInsight.TypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccInsightFiltersUpdatedAtDateRangePropertyToTerraform(struct?: CcInsight.FiltersUpdatedAtDateRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        unit: cdktn.stringToTerraform(struct!.unit),
        value: cdktn.numberToTerraform(struct!.value),
    }
}


export function ccInsightFiltersUpdatedAtDateRangePropertyToHclTerraform(struct?: CcInsight.FiltersUpdatedAtDateRangeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInsightUpdatedAtPropertyToTerraform(struct?: CcInsight.UpdatedAtProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        date_range: ccInsightFiltersUpdatedAtDateRangePropertyToTerraform(struct!.dateRange),
        end: cdktn.stringToTerraform(struct!.end),
        start: cdktn.stringToTerraform(struct!.start),
    }
}


export function ccInsightUpdatedAtPropertyToHclTerraform(struct?: CcInsight.UpdatedAtProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        date_range: {
            value: ccInsightFiltersUpdatedAtDateRangePropertyToHclTerraform(struct!.dateRange),
            isBlock: true,
            type: "struct",
            storageClassType: "FiltersUpdatedAtDateRangeProperty",
        },
        end: {
            value: cdktn.stringToHclTerraform(struct!.end),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        start: {
            value: cdktn.stringToHclTerraform(struct!.start),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInsightUserDefinedFieldsPropertyToTerraform(struct?: CcInsight.UserDefinedFieldsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInsightUserDefinedFieldsPropertyToHclTerraform(struct?: CcInsight.UserDefinedFieldsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
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


export function ccInsightVerificationStatePropertyToTerraform(struct?: CcInsight.VerificationStateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInsightVerificationStatePropertyToHclTerraform(struct?: CcInsight.VerificationStateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccInsightVulnerabilitiesExploitAvailablePropertyToTerraform(struct?: CcInsight.VulnerabilitiesExploitAvailableProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInsightVulnerabilitiesExploitAvailablePropertyToHclTerraform(struct?: CcInsight.VulnerabilitiesExploitAvailableProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccInsightVulnerabilitiesFixAvailablePropertyToTerraform(struct?: CcInsight.VulnerabilitiesFixAvailableProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInsightVulnerabilitiesFixAvailablePropertyToHclTerraform(struct?: CcInsight.VulnerabilitiesFixAvailableProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccInsightWorkflowStatePropertyToTerraform(struct?: CcInsight.WorkflowStateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInsightWorkflowStatePropertyToHclTerraform(struct?: CcInsight.WorkflowStateProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccInsightWorkflowStatusPropertyToTerraform(struct?: CcInsight.WorkflowStatusProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        comparison: cdktn.stringToTerraform(struct!.comparison),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccInsightWorkflowStatusPropertyToHclTerraform(struct?: CcInsight.WorkflowStatusProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        comparison: {
            value: cdktn.stringToHclTerraform(struct!.comparison),
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


export function ccInsightAwsSecurityFindingFiltersPropertyToTerraform(struct?: CcInsight.AwsSecurityFindingFiltersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        aws_account_id: cdktn.listMapper(ccInsightStringFilterPropertyToTerraform, false)(struct!.awsAccountId),
        aws_account_name: cdktn.listMapper(ccInsightAwsAccountNamePropertyToTerraform, false)(struct!.awsAccountName),
        company_name: cdktn.listMapper(ccInsightCompanyNamePropertyToTerraform, false)(struct!.companyName),
        compliance_associated_standards_id: cdktn.listMapper(ccInsightComplianceAssociatedStandardsIdPropertyToTerraform, false)(struct!.complianceAssociatedStandardsId),
        compliance_security_control_id: cdktn.listMapper(ccInsightComplianceSecurityControlIdPropertyToTerraform, false)(struct!.complianceSecurityControlId),
        compliance_security_control_parameters_name: cdktn.listMapper(ccInsightComplianceSecurityControlParametersNamePropertyToTerraform, false)(struct!.complianceSecurityControlParametersName),
        compliance_security_control_parameters_value: cdktn.listMapper(ccInsightComplianceSecurityControlParametersValuePropertyToTerraform, false)(struct!.complianceSecurityControlParametersValue),
        compliance_status: cdktn.listMapper(ccInsightComplianceStatusPropertyToTerraform, false)(struct!.complianceStatus),
        confidence: cdktn.listMapper(ccInsightNumberFilterPropertyToTerraform, false)(struct!.confidence),
        created_at: cdktn.listMapper(ccInsightDateFilterPropertyToTerraform, false)(struct!.createdAt),
        criticality: cdktn.listMapper(ccInsightCriticalityPropertyToTerraform, false)(struct!.criticality),
        description: cdktn.listMapper(ccInsightDescriptionPropertyToTerraform, false)(struct!.description),
        finding_provider_fields_confidence: cdktn.listMapper(ccInsightFindingProviderFieldsConfidencePropertyToTerraform, false)(struct!.findingProviderFieldsConfidence),
        finding_provider_fields_criticality: cdktn.listMapper(ccInsightFindingProviderFieldsCriticalityPropertyToTerraform, false)(struct!.findingProviderFieldsCriticality),
        finding_provider_fields_related_findings_id: cdktn.listMapper(ccInsightFindingProviderFieldsRelatedFindingsIdPropertyToTerraform, false)(struct!.findingProviderFieldsRelatedFindingsId),
        finding_provider_fields_related_findings_product_arn: cdktn.listMapper(ccInsightFindingProviderFieldsRelatedFindingsProductArnPropertyToTerraform, false)(struct!.findingProviderFieldsRelatedFindingsProductArn),
        finding_provider_fields_severity_label: cdktn.listMapper(ccInsightFindingProviderFieldsSeverityLabelPropertyToTerraform, false)(struct!.findingProviderFieldsSeverityLabel),
        finding_provider_fields_severity_original: cdktn.listMapper(ccInsightFindingProviderFieldsSeverityOriginalPropertyToTerraform, false)(struct!.findingProviderFieldsSeverityOriginal),
        finding_provider_fields_types: cdktn.listMapper(ccInsightFindingProviderFieldsTypesPropertyToTerraform, false)(struct!.findingProviderFieldsTypes),
        first_observed_at: cdktn.listMapper(ccInsightFirstObservedAtPropertyToTerraform, false)(struct!.firstObservedAt),
        generator_id: cdktn.listMapper(ccInsightGeneratorIdPropertyToTerraform, false)(struct!.generatorId),
        id: cdktn.listMapper(ccInsightIdPropertyToTerraform, false)(struct!.id),
        keyword: cdktn.listMapper(ccInsightKeywordFilterPropertyToTerraform, false)(struct!.keyword),
        last_observed_at: cdktn.listMapper(ccInsightLastObservedAtPropertyToTerraform, false)(struct!.lastObservedAt),
        malware_name: cdktn.listMapper(ccInsightMalwareNamePropertyToTerraform, false)(struct!.malwareName),
        malware_path: cdktn.listMapper(ccInsightMalwarePathPropertyToTerraform, false)(struct!.malwarePath),
        malware_state: cdktn.listMapper(ccInsightMalwareStatePropertyToTerraform, false)(struct!.malwareState),
        malware_type: cdktn.listMapper(ccInsightMalwareTypePropertyToTerraform, false)(struct!.malwareType),
        network_destination_domain: cdktn.listMapper(ccInsightNetworkDestinationDomainPropertyToTerraform, false)(struct!.networkDestinationDomain),
        network_destination_ip_v4: cdktn.listMapper(ccInsightIpFilterPropertyToTerraform, false)(struct!.networkDestinationIpV4),
        network_destination_ip_v6: cdktn.listMapper(ccInsightNetworkDestinationIpV6PropertyToTerraform, false)(struct!.networkDestinationIpV6),
        network_destination_port: cdktn.listMapper(ccInsightNetworkDestinationPortPropertyToTerraform, false)(struct!.networkDestinationPort),
        network_direction: cdktn.listMapper(ccInsightNetworkDirectionPropertyToTerraform, false)(struct!.networkDirection),
        network_protocol: cdktn.listMapper(ccInsightNetworkProtocolPropertyToTerraform, false)(struct!.networkProtocol),
        network_source_domain: cdktn.listMapper(ccInsightNetworkSourceDomainPropertyToTerraform, false)(struct!.networkSourceDomain),
        network_source_ip_v4: cdktn.listMapper(ccInsightNetworkSourceIpV4PropertyToTerraform, false)(struct!.networkSourceIpV4),
        network_source_ip_v6: cdktn.listMapper(ccInsightNetworkSourceIpV6PropertyToTerraform, false)(struct!.networkSourceIpV6),
        network_source_mac: cdktn.listMapper(ccInsightNetworkSourceMacPropertyToTerraform, false)(struct!.networkSourceMac),
        network_source_port: cdktn.listMapper(ccInsightNetworkSourcePortPropertyToTerraform, false)(struct!.networkSourcePort),
        note_text: cdktn.listMapper(ccInsightNoteTextPropertyToTerraform, false)(struct!.noteText),
        note_updated_at: cdktn.listMapper(ccInsightNoteUpdatedAtPropertyToTerraform, false)(struct!.noteUpdatedAt),
        note_updated_by: cdktn.listMapper(ccInsightNoteUpdatedByPropertyToTerraform, false)(struct!.noteUpdatedBy),
        process_launched_at: cdktn.listMapper(ccInsightProcessLaunchedAtPropertyToTerraform, false)(struct!.processLaunchedAt),
        process_name: cdktn.listMapper(ccInsightProcessNamePropertyToTerraform, false)(struct!.processName),
        process_parent_pid: cdktn.listMapper(ccInsightProcessParentPidPropertyToTerraform, false)(struct!.processParentPid),
        process_path: cdktn.listMapper(ccInsightProcessPathPropertyToTerraform, false)(struct!.processPath),
        process_pid: cdktn.listMapper(ccInsightProcessPidPropertyToTerraform, false)(struct!.processPid),
        process_terminated_at: cdktn.listMapper(ccInsightProcessTerminatedAtPropertyToTerraform, false)(struct!.processTerminatedAt),
        product_arn: cdktn.listMapper(ccInsightProductArnPropertyToTerraform, false)(struct!.productArn),
        product_fields: cdktn.listMapper(ccInsightMapFilterPropertyToTerraform, false)(struct!.productFields),
        product_name: cdktn.listMapper(ccInsightProductNamePropertyToTerraform, false)(struct!.productName),
        recommendation_text: cdktn.listMapper(ccInsightRecommendationTextPropertyToTerraform, false)(struct!.recommendationText),
        record_state: cdktn.listMapper(ccInsightRecordStatePropertyToTerraform, false)(struct!.recordState),
        region: cdktn.listMapper(ccInsightRegionPropertyToTerraform, false)(struct!.region),
        related_findings_id: cdktn.listMapper(ccInsightRelatedFindingsIdPropertyToTerraform, false)(struct!.relatedFindingsId),
        related_findings_product_arn: cdktn.listMapper(ccInsightRelatedFindingsProductArnPropertyToTerraform, false)(struct!.relatedFindingsProductArn),
        resource_application_arn: cdktn.listMapper(ccInsightResourceApplicationArnPropertyToTerraform, false)(struct!.resourceApplicationArn),
        resource_application_name: cdktn.listMapper(ccInsightResourceApplicationNamePropertyToTerraform, false)(struct!.resourceApplicationName),
        resource_aws_ec_2_instance_iam_instance_profile_arn: cdktn.listMapper(ccInsightResourceAwsEc2InstanceIamInstanceProfileArnPropertyToTerraform, false)(struct!.resourceAwsEc2InstanceIamInstanceProfileArn),
        resource_aws_ec_2_instance_image_id: cdktn.listMapper(ccInsightResourceAwsEc2InstanceImageIdPropertyToTerraform, false)(struct!.resourceAwsEc2InstanceImageId),
        resource_aws_ec_2_instance_ip_v4_addresses: cdktn.listMapper(ccInsightResourceAwsEc2InstanceIpV4AddressesPropertyToTerraform, false)(struct!.resourceAwsEc2InstanceIpV4Addresses),
        resource_aws_ec_2_instance_ip_v6_addresses: cdktn.listMapper(ccInsightResourceAwsEc2InstanceIpV6AddressesPropertyToTerraform, false)(struct!.resourceAwsEc2InstanceIpV6Addresses),
        resource_aws_ec_2_instance_key_name: cdktn.listMapper(ccInsightResourceAwsEc2InstanceKeyNamePropertyToTerraform, false)(struct!.resourceAwsEc2InstanceKeyName),
        resource_aws_ec_2_instance_launched_at: cdktn.listMapper(ccInsightResourceAwsEc2InstanceLaunchedAtPropertyToTerraform, false)(struct!.resourceAwsEc2InstanceLaunchedAt),
        resource_aws_ec_2_instance_subnet_id: cdktn.listMapper(ccInsightResourceAwsEc2InstanceSubnetIdPropertyToTerraform, false)(struct!.resourceAwsEc2InstanceSubnetId),
        resource_aws_ec_2_instance_type: cdktn.listMapper(ccInsightResourceAwsEc2InstanceTypePropertyToTerraform, false)(struct!.resourceAwsEc2InstanceType),
        resource_aws_ec_2_instance_vpc_id: cdktn.listMapper(ccInsightResourceAwsEc2InstanceVpcIdPropertyToTerraform, false)(struct!.resourceAwsEc2InstanceVpcId),
        resource_aws_iam_access_key_created_at: cdktn.listMapper(ccInsightResourceAwsIamAccessKeyCreatedAtPropertyToTerraform, false)(struct!.resourceAwsIamAccessKeyCreatedAt),
        resource_aws_iam_access_key_principal_name: cdktn.listMapper(ccInsightResourceAwsIamAccessKeyPrincipalNamePropertyToTerraform, false)(struct!.resourceAwsIamAccessKeyPrincipalName),
        resource_aws_iam_access_key_status: cdktn.listMapper(ccInsightResourceAwsIamAccessKeyStatusPropertyToTerraform, false)(struct!.resourceAwsIamAccessKeyStatus),
        resource_aws_iam_access_key_user_name: cdktn.listMapper(ccInsightResourceAwsIamAccessKeyUserNamePropertyToTerraform, false)(struct!.resourceAwsIamAccessKeyUserName),
        resource_aws_iam_user_user_name: cdktn.listMapper(ccInsightResourceAwsIamUserUserNamePropertyToTerraform, false)(struct!.resourceAwsIamUserUserName),
        resource_aws_s3_bucket_owner_id: cdktn.listMapper(ccInsightResourceAwsS3BucketOwnerIdPropertyToTerraform, false)(struct!.resourceAwsS3BucketOwnerId),
        resource_aws_s3_bucket_owner_name: cdktn.listMapper(ccInsightResourceAwsS3BucketOwnerNamePropertyToTerraform, false)(struct!.resourceAwsS3BucketOwnerName),
        resource_container_image_id: cdktn.listMapper(ccInsightResourceContainerImageIdPropertyToTerraform, false)(struct!.resourceContainerImageId),
        resource_container_image_name: cdktn.listMapper(ccInsightResourceContainerImageNamePropertyToTerraform, false)(struct!.resourceContainerImageName),
        resource_container_launched_at: cdktn.listMapper(ccInsightResourceContainerLaunchedAtPropertyToTerraform, false)(struct!.resourceContainerLaunchedAt),
        resource_container_name: cdktn.listMapper(ccInsightResourceContainerNamePropertyToTerraform, false)(struct!.resourceContainerName),
        resource_details_other: cdktn.listMapper(ccInsightResourceDetailsOtherPropertyToTerraform, false)(struct!.resourceDetailsOther),
        resource_id: cdktn.listMapper(ccInsightResourceIdPropertyToTerraform, false)(struct!.resourceId),
        resource_partition: cdktn.listMapper(ccInsightResourcePartitionPropertyToTerraform, false)(struct!.resourcePartition),
        resource_region: cdktn.listMapper(ccInsightResourceRegionPropertyToTerraform, false)(struct!.resourceRegion),
        resource_tags: cdktn.listMapper(ccInsightResourceTagsPropertyToTerraform, false)(struct!.resourceTags),
        resource_type: cdktn.listMapper(ccInsightResourceTypePropertyToTerraform, false)(struct!.resourceType),
        sample: cdktn.listMapper(ccInsightBooleanFilterPropertyToTerraform, false)(struct!.sample),
        severity_label: cdktn.listMapper(ccInsightSeverityLabelPropertyToTerraform, false)(struct!.severityLabel),
        severity_normalized: cdktn.listMapper(ccInsightSeverityNormalizedPropertyToTerraform, false)(struct!.severityNormalized),
        severity_product: cdktn.listMapper(ccInsightSeverityProductPropertyToTerraform, false)(struct!.severityProduct),
        source_url: cdktn.listMapper(ccInsightSourceUrlPropertyToTerraform, false)(struct!.sourceUrl),
        threat_intel_indicator_category: cdktn.listMapper(ccInsightThreatIntelIndicatorCategoryPropertyToTerraform, false)(struct!.threatIntelIndicatorCategory),
        threat_intel_indicator_last_observed_at: cdktn.listMapper(ccInsightThreatIntelIndicatorLastObservedAtPropertyToTerraform, false)(struct!.threatIntelIndicatorLastObservedAt),
        threat_intel_indicator_source: cdktn.listMapper(ccInsightThreatIntelIndicatorSourcePropertyToTerraform, false)(struct!.threatIntelIndicatorSource),
        threat_intel_indicator_source_url: cdktn.listMapper(ccInsightThreatIntelIndicatorSourceUrlPropertyToTerraform, false)(struct!.threatIntelIndicatorSourceUrl),
        threat_intel_indicator_type: cdktn.listMapper(ccInsightThreatIntelIndicatorTypePropertyToTerraform, false)(struct!.threatIntelIndicatorType),
        threat_intel_indicator_value: cdktn.listMapper(ccInsightThreatIntelIndicatorValuePropertyToTerraform, false)(struct!.threatIntelIndicatorValue),
        title: cdktn.listMapper(ccInsightTitlePropertyToTerraform, false)(struct!.title),
        type: cdktn.listMapper(ccInsightTypePropertyToTerraform, false)(struct!.type),
        updated_at: cdktn.listMapper(ccInsightUpdatedAtPropertyToTerraform, false)(struct!.updatedAt),
        user_defined_fields: cdktn.listMapper(ccInsightUserDefinedFieldsPropertyToTerraform, false)(struct!.userDefinedFields),
        verification_state: cdktn.listMapper(ccInsightVerificationStatePropertyToTerraform, false)(struct!.verificationState),
        vulnerabilities_exploit_available: cdktn.listMapper(ccInsightVulnerabilitiesExploitAvailablePropertyToTerraform, false)(struct!.vulnerabilitiesExploitAvailable),
        vulnerabilities_fix_available: cdktn.listMapper(ccInsightVulnerabilitiesFixAvailablePropertyToTerraform, false)(struct!.vulnerabilitiesFixAvailable),
        workflow_state: cdktn.listMapper(ccInsightWorkflowStatePropertyToTerraform, false)(struct!.workflowState),
        workflow_status: cdktn.listMapper(ccInsightWorkflowStatusPropertyToTerraform, false)(struct!.workflowStatus),
    }
}


export function ccInsightAwsSecurityFindingFiltersPropertyToHclTerraform(struct?: CcInsight.AwsSecurityFindingFiltersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        aws_account_id: {
            value: cdktn.listMapperHcl(ccInsightStringFilterPropertyToHclTerraform, false)(struct!.awsAccountId),
            isBlock: true,
            type: "list",
            storageClassType: "StringFilterPropertyList",
        },
        aws_account_name: {
            value: cdktn.listMapperHcl(ccInsightAwsAccountNamePropertyToHclTerraform, false)(struct!.awsAccountName),
            isBlock: true,
            type: "list",
            storageClassType: "AwsAccountNamePropertyList",
        },
        company_name: {
            value: cdktn.listMapperHcl(ccInsightCompanyNamePropertyToHclTerraform, false)(struct!.companyName),
            isBlock: true,
            type: "list",
            storageClassType: "CompanyNamePropertyList",
        },
        compliance_associated_standards_id: {
            value: cdktn.listMapperHcl(ccInsightComplianceAssociatedStandardsIdPropertyToHclTerraform, false)(struct!.complianceAssociatedStandardsId),
            isBlock: true,
            type: "list",
            storageClassType: "ComplianceAssociatedStandardsIdPropertyList",
        },
        compliance_security_control_id: {
            value: cdktn.listMapperHcl(ccInsightComplianceSecurityControlIdPropertyToHclTerraform, false)(struct!.complianceSecurityControlId),
            isBlock: true,
            type: "list",
            storageClassType: "ComplianceSecurityControlIdPropertyList",
        },
        compliance_security_control_parameters_name: {
            value: cdktn.listMapperHcl(ccInsightComplianceSecurityControlParametersNamePropertyToHclTerraform, false)(struct!.complianceSecurityControlParametersName),
            isBlock: true,
            type: "list",
            storageClassType: "ComplianceSecurityControlParametersNamePropertyList",
        },
        compliance_security_control_parameters_value: {
            value: cdktn.listMapperHcl(ccInsightComplianceSecurityControlParametersValuePropertyToHclTerraform, false)(struct!.complianceSecurityControlParametersValue),
            isBlock: true,
            type: "list",
            storageClassType: "ComplianceSecurityControlParametersValuePropertyList",
        },
        compliance_status: {
            value: cdktn.listMapperHcl(ccInsightComplianceStatusPropertyToHclTerraform, false)(struct!.complianceStatus),
            isBlock: true,
            type: "list",
            storageClassType: "ComplianceStatusPropertyList",
        },
        confidence: {
            value: cdktn.listMapperHcl(ccInsightNumberFilterPropertyToHclTerraform, false)(struct!.confidence),
            isBlock: true,
            type: "list",
            storageClassType: "NumberFilterPropertyList",
        },
        created_at: {
            value: cdktn.listMapperHcl(ccInsightDateFilterPropertyToHclTerraform, false)(struct!.createdAt),
            isBlock: true,
            type: "list",
            storageClassType: "DateFilterPropertyList",
        },
        criticality: {
            value: cdktn.listMapperHcl(ccInsightCriticalityPropertyToHclTerraform, false)(struct!.criticality),
            isBlock: true,
            type: "list",
            storageClassType: "CriticalityPropertyList",
        },
        description: {
            value: cdktn.listMapperHcl(ccInsightDescriptionPropertyToHclTerraform, false)(struct!.description),
            isBlock: true,
            type: "list",
            storageClassType: "DescriptionPropertyList",
        },
        finding_provider_fields_confidence: {
            value: cdktn.listMapperHcl(ccInsightFindingProviderFieldsConfidencePropertyToHclTerraform, false)(struct!.findingProviderFieldsConfidence),
            isBlock: true,
            type: "list",
            storageClassType: "FindingProviderFieldsConfidencePropertyList",
        },
        finding_provider_fields_criticality: {
            value: cdktn.listMapperHcl(ccInsightFindingProviderFieldsCriticalityPropertyToHclTerraform, false)(struct!.findingProviderFieldsCriticality),
            isBlock: true,
            type: "list",
            storageClassType: "FindingProviderFieldsCriticalityPropertyList",
        },
        finding_provider_fields_related_findings_id: {
            value: cdktn.listMapperHcl(ccInsightFindingProviderFieldsRelatedFindingsIdPropertyToHclTerraform, false)(struct!.findingProviderFieldsRelatedFindingsId),
            isBlock: true,
            type: "list",
            storageClassType: "FindingProviderFieldsRelatedFindingsIdPropertyList",
        },
        finding_provider_fields_related_findings_product_arn: {
            value: cdktn.listMapperHcl(ccInsightFindingProviderFieldsRelatedFindingsProductArnPropertyToHclTerraform, false)(struct!.findingProviderFieldsRelatedFindingsProductArn),
            isBlock: true,
            type: "list",
            storageClassType: "FindingProviderFieldsRelatedFindingsProductArnPropertyList",
        },
        finding_provider_fields_severity_label: {
            value: cdktn.listMapperHcl(ccInsightFindingProviderFieldsSeverityLabelPropertyToHclTerraform, false)(struct!.findingProviderFieldsSeverityLabel),
            isBlock: true,
            type: "list",
            storageClassType: "FindingProviderFieldsSeverityLabelPropertyList",
        },
        finding_provider_fields_severity_original: {
            value: cdktn.listMapperHcl(ccInsightFindingProviderFieldsSeverityOriginalPropertyToHclTerraform, false)(struct!.findingProviderFieldsSeverityOriginal),
            isBlock: true,
            type: "list",
            storageClassType: "FindingProviderFieldsSeverityOriginalPropertyList",
        },
        finding_provider_fields_types: {
            value: cdktn.listMapperHcl(ccInsightFindingProviderFieldsTypesPropertyToHclTerraform, false)(struct!.findingProviderFieldsTypes),
            isBlock: true,
            type: "list",
            storageClassType: "FindingProviderFieldsTypesPropertyList",
        },
        first_observed_at: {
            value: cdktn.listMapperHcl(ccInsightFirstObservedAtPropertyToHclTerraform, false)(struct!.firstObservedAt),
            isBlock: true,
            type: "list",
            storageClassType: "FirstObservedAtPropertyList",
        },
        generator_id: {
            value: cdktn.listMapperHcl(ccInsightGeneratorIdPropertyToHclTerraform, false)(struct!.generatorId),
            isBlock: true,
            type: "list",
            storageClassType: "GeneratorIdPropertyList",
        },
        id: {
            value: cdktn.listMapperHcl(ccInsightIdPropertyToHclTerraform, false)(struct!.id),
            isBlock: true,
            type: "list",
            storageClassType: "IdPropertyList",
        },
        keyword: {
            value: cdktn.listMapperHcl(ccInsightKeywordFilterPropertyToHclTerraform, false)(struct!.keyword),
            isBlock: true,
            type: "list",
            storageClassType: "KeywordFilterPropertyList",
        },
        last_observed_at: {
            value: cdktn.listMapperHcl(ccInsightLastObservedAtPropertyToHclTerraform, false)(struct!.lastObservedAt),
            isBlock: true,
            type: "list",
            storageClassType: "LastObservedAtPropertyList",
        },
        malware_name: {
            value: cdktn.listMapperHcl(ccInsightMalwareNamePropertyToHclTerraform, false)(struct!.malwareName),
            isBlock: true,
            type: "list",
            storageClassType: "MalwareNamePropertyList",
        },
        malware_path: {
            value: cdktn.listMapperHcl(ccInsightMalwarePathPropertyToHclTerraform, false)(struct!.malwarePath),
            isBlock: true,
            type: "list",
            storageClassType: "MalwarePathPropertyList",
        },
        malware_state: {
            value: cdktn.listMapperHcl(ccInsightMalwareStatePropertyToHclTerraform, false)(struct!.malwareState),
            isBlock: true,
            type: "list",
            storageClassType: "MalwareStatePropertyList",
        },
        malware_type: {
            value: cdktn.listMapperHcl(ccInsightMalwareTypePropertyToHclTerraform, false)(struct!.malwareType),
            isBlock: true,
            type: "list",
            storageClassType: "MalwareTypePropertyList",
        },
        network_destination_domain: {
            value: cdktn.listMapperHcl(ccInsightNetworkDestinationDomainPropertyToHclTerraform, false)(struct!.networkDestinationDomain),
            isBlock: true,
            type: "list",
            storageClassType: "NetworkDestinationDomainPropertyList",
        },
        network_destination_ip_v4: {
            value: cdktn.listMapperHcl(ccInsightIpFilterPropertyToHclTerraform, false)(struct!.networkDestinationIpV4),
            isBlock: true,
            type: "list",
            storageClassType: "IpFilterPropertyList",
        },
        network_destination_ip_v6: {
            value: cdktn.listMapperHcl(ccInsightNetworkDestinationIpV6PropertyToHclTerraform, false)(struct!.networkDestinationIpV6),
            isBlock: true,
            type: "list",
            storageClassType: "NetworkDestinationIpV6PropertyList",
        },
        network_destination_port: {
            value: cdktn.listMapperHcl(ccInsightNetworkDestinationPortPropertyToHclTerraform, false)(struct!.networkDestinationPort),
            isBlock: true,
            type: "list",
            storageClassType: "NetworkDestinationPortPropertyList",
        },
        network_direction: {
            value: cdktn.listMapperHcl(ccInsightNetworkDirectionPropertyToHclTerraform, false)(struct!.networkDirection),
            isBlock: true,
            type: "list",
            storageClassType: "NetworkDirectionPropertyList",
        },
        network_protocol: {
            value: cdktn.listMapperHcl(ccInsightNetworkProtocolPropertyToHclTerraform, false)(struct!.networkProtocol),
            isBlock: true,
            type: "list",
            storageClassType: "NetworkProtocolPropertyList",
        },
        network_source_domain: {
            value: cdktn.listMapperHcl(ccInsightNetworkSourceDomainPropertyToHclTerraform, false)(struct!.networkSourceDomain),
            isBlock: true,
            type: "list",
            storageClassType: "NetworkSourceDomainPropertyList",
        },
        network_source_ip_v4: {
            value: cdktn.listMapperHcl(ccInsightNetworkSourceIpV4PropertyToHclTerraform, false)(struct!.networkSourceIpV4),
            isBlock: true,
            type: "list",
            storageClassType: "NetworkSourceIpV4PropertyList",
        },
        network_source_ip_v6: {
            value: cdktn.listMapperHcl(ccInsightNetworkSourceIpV6PropertyToHclTerraform, false)(struct!.networkSourceIpV6),
            isBlock: true,
            type: "list",
            storageClassType: "NetworkSourceIpV6PropertyList",
        },
        network_source_mac: {
            value: cdktn.listMapperHcl(ccInsightNetworkSourceMacPropertyToHclTerraform, false)(struct!.networkSourceMac),
            isBlock: true,
            type: "list",
            storageClassType: "NetworkSourceMacPropertyList",
        },
        network_source_port: {
            value: cdktn.listMapperHcl(ccInsightNetworkSourcePortPropertyToHclTerraform, false)(struct!.networkSourcePort),
            isBlock: true,
            type: "list",
            storageClassType: "NetworkSourcePortPropertyList",
        },
        note_text: {
            value: cdktn.listMapperHcl(ccInsightNoteTextPropertyToHclTerraform, false)(struct!.noteText),
            isBlock: true,
            type: "list",
            storageClassType: "NoteTextPropertyList",
        },
        note_updated_at: {
            value: cdktn.listMapperHcl(ccInsightNoteUpdatedAtPropertyToHclTerraform, false)(struct!.noteUpdatedAt),
            isBlock: true,
            type: "list",
            storageClassType: "NoteUpdatedAtPropertyList",
        },
        note_updated_by: {
            value: cdktn.listMapperHcl(ccInsightNoteUpdatedByPropertyToHclTerraform, false)(struct!.noteUpdatedBy),
            isBlock: true,
            type: "list",
            storageClassType: "NoteUpdatedByPropertyList",
        },
        process_launched_at: {
            value: cdktn.listMapperHcl(ccInsightProcessLaunchedAtPropertyToHclTerraform, false)(struct!.processLaunchedAt),
            isBlock: true,
            type: "list",
            storageClassType: "ProcessLaunchedAtPropertyList",
        },
        process_name: {
            value: cdktn.listMapperHcl(ccInsightProcessNamePropertyToHclTerraform, false)(struct!.processName),
            isBlock: true,
            type: "list",
            storageClassType: "ProcessNamePropertyList",
        },
        process_parent_pid: {
            value: cdktn.listMapperHcl(ccInsightProcessParentPidPropertyToHclTerraform, false)(struct!.processParentPid),
            isBlock: true,
            type: "list",
            storageClassType: "ProcessParentPidPropertyList",
        },
        process_path: {
            value: cdktn.listMapperHcl(ccInsightProcessPathPropertyToHclTerraform, false)(struct!.processPath),
            isBlock: true,
            type: "list",
            storageClassType: "ProcessPathPropertyList",
        },
        process_pid: {
            value: cdktn.listMapperHcl(ccInsightProcessPidPropertyToHclTerraform, false)(struct!.processPid),
            isBlock: true,
            type: "list",
            storageClassType: "ProcessPidPropertyList",
        },
        process_terminated_at: {
            value: cdktn.listMapperHcl(ccInsightProcessTerminatedAtPropertyToHclTerraform, false)(struct!.processTerminatedAt),
            isBlock: true,
            type: "list",
            storageClassType: "ProcessTerminatedAtPropertyList",
        },
        product_arn: {
            value: cdktn.listMapperHcl(ccInsightProductArnPropertyToHclTerraform, false)(struct!.productArn),
            isBlock: true,
            type: "list",
            storageClassType: "ProductArnPropertyList",
        },
        product_fields: {
            value: cdktn.listMapperHcl(ccInsightMapFilterPropertyToHclTerraform, false)(struct!.productFields),
            isBlock: true,
            type: "list",
            storageClassType: "MapFilterPropertyList",
        },
        product_name: {
            value: cdktn.listMapperHcl(ccInsightProductNamePropertyToHclTerraform, false)(struct!.productName),
            isBlock: true,
            type: "list",
            storageClassType: "ProductNamePropertyList",
        },
        recommendation_text: {
            value: cdktn.listMapperHcl(ccInsightRecommendationTextPropertyToHclTerraform, false)(struct!.recommendationText),
            isBlock: true,
            type: "list",
            storageClassType: "RecommendationTextPropertyList",
        },
        record_state: {
            value: cdktn.listMapperHcl(ccInsightRecordStatePropertyToHclTerraform, false)(struct!.recordState),
            isBlock: true,
            type: "list",
            storageClassType: "RecordStatePropertyList",
        },
        region: {
            value: cdktn.listMapperHcl(ccInsightRegionPropertyToHclTerraform, false)(struct!.region),
            isBlock: true,
            type: "list",
            storageClassType: "RegionPropertyList",
        },
        related_findings_id: {
            value: cdktn.listMapperHcl(ccInsightRelatedFindingsIdPropertyToHclTerraform, false)(struct!.relatedFindingsId),
            isBlock: true,
            type: "list",
            storageClassType: "RelatedFindingsIdPropertyList",
        },
        related_findings_product_arn: {
            value: cdktn.listMapperHcl(ccInsightRelatedFindingsProductArnPropertyToHclTerraform, false)(struct!.relatedFindingsProductArn),
            isBlock: true,
            type: "list",
            storageClassType: "RelatedFindingsProductArnPropertyList",
        },
        resource_application_arn: {
            value: cdktn.listMapperHcl(ccInsightResourceApplicationArnPropertyToHclTerraform, false)(struct!.resourceApplicationArn),
            isBlock: true,
            type: "list",
            storageClassType: "ResourceApplicationArnPropertyList",
        },
        resource_application_name: {
            value: cdktn.listMapperHcl(ccInsightResourceApplicationNamePropertyToHclTerraform, false)(struct!.resourceApplicationName),
            isBlock: true,
            type: "list",
            storageClassType: "ResourceApplicationNamePropertyList",
        },
        resource_aws_ec_2_instance_iam_instance_profile_arn: {
            value: cdktn.listMapperHcl(ccInsightResourceAwsEc2InstanceIamInstanceProfileArnPropertyToHclTerraform, false)(struct!.resourceAwsEc2InstanceIamInstanceProfileArn),
            isBlock: true,
            type: "list",
            storageClassType: "ResourceAwsEc2InstanceIamInstanceProfileArnPropertyList",
        },
        resource_aws_ec_2_instance_image_id: {
            value: cdktn.listMapperHcl(ccInsightResourceAwsEc2InstanceImageIdPropertyToHclTerraform, false)(struct!.resourceAwsEc2InstanceImageId),
            isBlock: true,
            type: "list",
            storageClassType: "ResourceAwsEc2InstanceImageIdPropertyList",
        },
        resource_aws_ec_2_instance_ip_v4_addresses: {
            value: cdktn.listMapperHcl(ccInsightResourceAwsEc2InstanceIpV4AddressesPropertyToHclTerraform, false)(struct!.resourceAwsEc2InstanceIpV4Addresses),
            isBlock: true,
            type: "list",
            storageClassType: "ResourceAwsEc2InstanceIpV4AddressesPropertyList",
        },
        resource_aws_ec_2_instance_ip_v6_addresses: {
            value: cdktn.listMapperHcl(ccInsightResourceAwsEc2InstanceIpV6AddressesPropertyToHclTerraform, false)(struct!.resourceAwsEc2InstanceIpV6Addresses),
            isBlock: true,
            type: "list",
            storageClassType: "ResourceAwsEc2InstanceIpV6AddressesPropertyList",
        },
        resource_aws_ec_2_instance_key_name: {
            value: cdktn.listMapperHcl(ccInsightResourceAwsEc2InstanceKeyNamePropertyToHclTerraform, false)(struct!.resourceAwsEc2InstanceKeyName),
            isBlock: true,
            type: "list",
            storageClassType: "ResourceAwsEc2InstanceKeyNamePropertyList",
        },
        resource_aws_ec_2_instance_launched_at: {
            value: cdktn.listMapperHcl(ccInsightResourceAwsEc2InstanceLaunchedAtPropertyToHclTerraform, false)(struct!.resourceAwsEc2InstanceLaunchedAt),
            isBlock: true,
            type: "list",
            storageClassType: "ResourceAwsEc2InstanceLaunchedAtPropertyList",
        },
        resource_aws_ec_2_instance_subnet_id: {
            value: cdktn.listMapperHcl(ccInsightResourceAwsEc2InstanceSubnetIdPropertyToHclTerraform, false)(struct!.resourceAwsEc2InstanceSubnetId),
            isBlock: true,
            type: "list",
            storageClassType: "ResourceAwsEc2InstanceSubnetIdPropertyList",
        },
        resource_aws_ec_2_instance_type: {
            value: cdktn.listMapperHcl(ccInsightResourceAwsEc2InstanceTypePropertyToHclTerraform, false)(struct!.resourceAwsEc2InstanceType),
            isBlock: true,
            type: "list",
            storageClassType: "ResourceAwsEc2InstanceTypePropertyList",
        },
        resource_aws_ec_2_instance_vpc_id: {
            value: cdktn.listMapperHcl(ccInsightResourceAwsEc2InstanceVpcIdPropertyToHclTerraform, false)(struct!.resourceAwsEc2InstanceVpcId),
            isBlock: true,
            type: "list",
            storageClassType: "ResourceAwsEc2InstanceVpcIdPropertyList",
        },
        resource_aws_iam_access_key_created_at: {
            value: cdktn.listMapperHcl(ccInsightResourceAwsIamAccessKeyCreatedAtPropertyToHclTerraform, false)(struct!.resourceAwsIamAccessKeyCreatedAt),
            isBlock: true,
            type: "list",
            storageClassType: "ResourceAwsIamAccessKeyCreatedAtPropertyList",
        },
        resource_aws_iam_access_key_principal_name: {
            value: cdktn.listMapperHcl(ccInsightResourceAwsIamAccessKeyPrincipalNamePropertyToHclTerraform, false)(struct!.resourceAwsIamAccessKeyPrincipalName),
            isBlock: true,
            type: "list",
            storageClassType: "ResourceAwsIamAccessKeyPrincipalNamePropertyList",
        },
        resource_aws_iam_access_key_status: {
            value: cdktn.listMapperHcl(ccInsightResourceAwsIamAccessKeyStatusPropertyToHclTerraform, false)(struct!.resourceAwsIamAccessKeyStatus),
            isBlock: true,
            type: "list",
            storageClassType: "ResourceAwsIamAccessKeyStatusPropertyList",
        },
        resource_aws_iam_access_key_user_name: {
            value: cdktn.listMapperHcl(ccInsightResourceAwsIamAccessKeyUserNamePropertyToHclTerraform, false)(struct!.resourceAwsIamAccessKeyUserName),
            isBlock: true,
            type: "list",
            storageClassType: "ResourceAwsIamAccessKeyUserNamePropertyList",
        },
        resource_aws_iam_user_user_name: {
            value: cdktn.listMapperHcl(ccInsightResourceAwsIamUserUserNamePropertyToHclTerraform, false)(struct!.resourceAwsIamUserUserName),
            isBlock: true,
            type: "list",
            storageClassType: "ResourceAwsIamUserUserNamePropertyList",
        },
        resource_aws_s3_bucket_owner_id: {
            value: cdktn.listMapperHcl(ccInsightResourceAwsS3BucketOwnerIdPropertyToHclTerraform, false)(struct!.resourceAwsS3BucketOwnerId),
            isBlock: true,
            type: "list",
            storageClassType: "ResourceAwsS3BucketOwnerIdPropertyList",
        },
        resource_aws_s3_bucket_owner_name: {
            value: cdktn.listMapperHcl(ccInsightResourceAwsS3BucketOwnerNamePropertyToHclTerraform, false)(struct!.resourceAwsS3BucketOwnerName),
            isBlock: true,
            type: "list",
            storageClassType: "ResourceAwsS3BucketOwnerNamePropertyList",
        },
        resource_container_image_id: {
            value: cdktn.listMapperHcl(ccInsightResourceContainerImageIdPropertyToHclTerraform, false)(struct!.resourceContainerImageId),
            isBlock: true,
            type: "list",
            storageClassType: "ResourceContainerImageIdPropertyList",
        },
        resource_container_image_name: {
            value: cdktn.listMapperHcl(ccInsightResourceContainerImageNamePropertyToHclTerraform, false)(struct!.resourceContainerImageName),
            isBlock: true,
            type: "list",
            storageClassType: "ResourceContainerImageNamePropertyList",
        },
        resource_container_launched_at: {
            value: cdktn.listMapperHcl(ccInsightResourceContainerLaunchedAtPropertyToHclTerraform, false)(struct!.resourceContainerLaunchedAt),
            isBlock: true,
            type: "list",
            storageClassType: "ResourceContainerLaunchedAtPropertyList",
        },
        resource_container_name: {
            value: cdktn.listMapperHcl(ccInsightResourceContainerNamePropertyToHclTerraform, false)(struct!.resourceContainerName),
            isBlock: true,
            type: "list",
            storageClassType: "ResourceContainerNamePropertyList",
        },
        resource_details_other: {
            value: cdktn.listMapperHcl(ccInsightResourceDetailsOtherPropertyToHclTerraform, false)(struct!.resourceDetailsOther),
            isBlock: true,
            type: "list",
            storageClassType: "ResourceDetailsOtherPropertyList",
        },
        resource_id: {
            value: cdktn.listMapperHcl(ccInsightResourceIdPropertyToHclTerraform, false)(struct!.resourceId),
            isBlock: true,
            type: "list",
            storageClassType: "ResourceIdPropertyList",
        },
        resource_partition: {
            value: cdktn.listMapperHcl(ccInsightResourcePartitionPropertyToHclTerraform, false)(struct!.resourcePartition),
            isBlock: true,
            type: "list",
            storageClassType: "ResourcePartitionPropertyList",
        },
        resource_region: {
            value: cdktn.listMapperHcl(ccInsightResourceRegionPropertyToHclTerraform, false)(struct!.resourceRegion),
            isBlock: true,
            type: "list",
            storageClassType: "ResourceRegionPropertyList",
        },
        resource_tags: {
            value: cdktn.listMapperHcl(ccInsightResourceTagsPropertyToHclTerraform, false)(struct!.resourceTags),
            isBlock: true,
            type: "list",
            storageClassType: "ResourceTagsPropertyList",
        },
        resource_type: {
            value: cdktn.listMapperHcl(ccInsightResourceTypePropertyToHclTerraform, false)(struct!.resourceType),
            isBlock: true,
            type: "list",
            storageClassType: "ResourceTypePropertyList",
        },
        sample: {
            value: cdktn.listMapperHcl(ccInsightBooleanFilterPropertyToHclTerraform, false)(struct!.sample),
            isBlock: true,
            type: "list",
            storageClassType: "BooleanFilterPropertyList",
        },
        severity_label: {
            value: cdktn.listMapperHcl(ccInsightSeverityLabelPropertyToHclTerraform, false)(struct!.severityLabel),
            isBlock: true,
            type: "list",
            storageClassType: "SeverityLabelPropertyList",
        },
        severity_normalized: {
            value: cdktn.listMapperHcl(ccInsightSeverityNormalizedPropertyToHclTerraform, false)(struct!.severityNormalized),
            isBlock: true,
            type: "list",
            storageClassType: "SeverityNormalizedPropertyList",
        },
        severity_product: {
            value: cdktn.listMapperHcl(ccInsightSeverityProductPropertyToHclTerraform, false)(struct!.severityProduct),
            isBlock: true,
            type: "list",
            storageClassType: "SeverityProductPropertyList",
        },
        source_url: {
            value: cdktn.listMapperHcl(ccInsightSourceUrlPropertyToHclTerraform, false)(struct!.sourceUrl),
            isBlock: true,
            type: "list",
            storageClassType: "SourceUrlPropertyList",
        },
        threat_intel_indicator_category: {
            value: cdktn.listMapperHcl(ccInsightThreatIntelIndicatorCategoryPropertyToHclTerraform, false)(struct!.threatIntelIndicatorCategory),
            isBlock: true,
            type: "list",
            storageClassType: "ThreatIntelIndicatorCategoryPropertyList",
        },
        threat_intel_indicator_last_observed_at: {
            value: cdktn.listMapperHcl(ccInsightThreatIntelIndicatorLastObservedAtPropertyToHclTerraform, false)(struct!.threatIntelIndicatorLastObservedAt),
            isBlock: true,
            type: "list",
            storageClassType: "ThreatIntelIndicatorLastObservedAtPropertyList",
        },
        threat_intel_indicator_source: {
            value: cdktn.listMapperHcl(ccInsightThreatIntelIndicatorSourcePropertyToHclTerraform, false)(struct!.threatIntelIndicatorSource),
            isBlock: true,
            type: "list",
            storageClassType: "ThreatIntelIndicatorSourcePropertyList",
        },
        threat_intel_indicator_source_url: {
            value: cdktn.listMapperHcl(ccInsightThreatIntelIndicatorSourceUrlPropertyToHclTerraform, false)(struct!.threatIntelIndicatorSourceUrl),
            isBlock: true,
            type: "list",
            storageClassType: "ThreatIntelIndicatorSourceUrlPropertyList",
        },
        threat_intel_indicator_type: {
            value: cdktn.listMapperHcl(ccInsightThreatIntelIndicatorTypePropertyToHclTerraform, false)(struct!.threatIntelIndicatorType),
            isBlock: true,
            type: "list",
            storageClassType: "ThreatIntelIndicatorTypePropertyList",
        },
        threat_intel_indicator_value: {
            value: cdktn.listMapperHcl(ccInsightThreatIntelIndicatorValuePropertyToHclTerraform, false)(struct!.threatIntelIndicatorValue),
            isBlock: true,
            type: "list",
            storageClassType: "ThreatIntelIndicatorValuePropertyList",
        },
        title: {
            value: cdktn.listMapperHcl(ccInsightTitlePropertyToHclTerraform, false)(struct!.title),
            isBlock: true,
            type: "list",
            storageClassType: "TitlePropertyList",
        },
        type: {
            value: cdktn.listMapperHcl(ccInsightTypePropertyToHclTerraform, false)(struct!.type),
            isBlock: true,
            type: "list",
            storageClassType: "TypePropertyList",
        },
        updated_at: {
            value: cdktn.listMapperHcl(ccInsightUpdatedAtPropertyToHclTerraform, false)(struct!.updatedAt),
            isBlock: true,
            type: "list",
            storageClassType: "UpdatedAtPropertyList",
        },
        user_defined_fields: {
            value: cdktn.listMapperHcl(ccInsightUserDefinedFieldsPropertyToHclTerraform, false)(struct!.userDefinedFields),
            isBlock: true,
            type: "list",
            storageClassType: "UserDefinedFieldsPropertyList",
        },
        verification_state: {
            value: cdktn.listMapperHcl(ccInsightVerificationStatePropertyToHclTerraform, false)(struct!.verificationState),
            isBlock: true,
            type: "list",
            storageClassType: "VerificationStatePropertyList",
        },
        vulnerabilities_exploit_available: {
            value: cdktn.listMapperHcl(ccInsightVulnerabilitiesExploitAvailablePropertyToHclTerraform, false)(struct!.vulnerabilitiesExploitAvailable),
            isBlock: true,
            type: "list",
            storageClassType: "VulnerabilitiesExploitAvailablePropertyList",
        },
        vulnerabilities_fix_available: {
            value: cdktn.listMapperHcl(ccInsightVulnerabilitiesFixAvailablePropertyToHclTerraform, false)(struct!.vulnerabilitiesFixAvailable),
            isBlock: true,
            type: "list",
            storageClassType: "VulnerabilitiesFixAvailablePropertyList",
        },
        workflow_state: {
            value: cdktn.listMapperHcl(ccInsightWorkflowStatePropertyToHclTerraform, false)(struct!.workflowState),
            isBlock: true,
            type: "list",
            storageClassType: "WorkflowStatePropertyList",
        },
        workflow_status: {
            value: cdktn.listMapperHcl(ccInsightWorkflowStatusPropertyToHclTerraform, false)(struct!.workflowStatus),
            isBlock: true,
            type: "list",
            storageClassType: "WorkflowStatusPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcInsight {
export interface StringFilterProperty {
    /**
    * The condition to apply to a string value when filtering Security Hub findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#comparison CcInsight#comparison}
    */
    readonly comparison?: string;
    /**
    * Non-empty string definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: string;
}
export class StringFilterPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): StringFilterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: StringFilterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class StringFilterPropertyList extends cdktn.ComplexList {
    public internalValue? : StringFilterProperty[] | cdktn.IResolvable

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
    public get(index: number): StringFilterPropertyOutputReference {
        return new StringFilterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface AwsAccountNameProperty {
    /**
    * The condition to apply to a string value when filtering Security Hub findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#comparison CcInsight#comparison}
    */
    readonly comparison?: string;
    /**
    * Non-empty string definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: string;
}
export class AwsAccountNamePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AwsAccountNameProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AwsAccountNameProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class AwsAccountNamePropertyList extends cdktn.ComplexList {
    public internalValue? : AwsAccountNameProperty[] | cdktn.IResolvable

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
    public get(index: number): AwsAccountNamePropertyOutputReference {
        return new AwsAccountNamePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface CompanyNameProperty {
    /**
    * The condition to apply to a string value when filtering Security Hub findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#comparison CcInsight#comparison}
    */
    readonly comparison?: string;
    /**
    * Non-empty string definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: string;
}
export class CompanyNamePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): CompanyNameProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CompanyNameProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class CompanyNamePropertyList extends cdktn.ComplexList {
    public internalValue? : CompanyNameProperty[] | cdktn.IResolvable

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
    public get(index: number): CompanyNamePropertyOutputReference {
        return new CompanyNamePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ComplianceAssociatedStandardsIdProperty {
    /**
    * The condition to apply to a string value when filtering Security Hub findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#comparison CcInsight#comparison}
    */
    readonly comparison?: string;
    /**
    * Non-empty string definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: string;
}
export class ComplianceAssociatedStandardsIdPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ComplianceAssociatedStandardsIdProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ComplianceAssociatedStandardsIdProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class ComplianceAssociatedStandardsIdPropertyList extends cdktn.ComplexList {
    public internalValue? : ComplianceAssociatedStandardsIdProperty[] | cdktn.IResolvable

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
    public get(index: number): ComplianceAssociatedStandardsIdPropertyOutputReference {
        return new ComplianceAssociatedStandardsIdPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ComplianceSecurityControlIdProperty {
    /**
    * The condition to apply to a string value when filtering Security Hub findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#comparison CcInsight#comparison}
    */
    readonly comparison?: string;
    /**
    * Non-empty string definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: string;
}
export class ComplianceSecurityControlIdPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ComplianceSecurityControlIdProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ComplianceSecurityControlIdProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class ComplianceSecurityControlIdPropertyList extends cdktn.ComplexList {
    public internalValue? : ComplianceSecurityControlIdProperty[] | cdktn.IResolvable

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
    public get(index: number): ComplianceSecurityControlIdPropertyOutputReference {
        return new ComplianceSecurityControlIdPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ComplianceSecurityControlParametersNameProperty {
    /**
    * The condition to apply to a string value when filtering Security Hub findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#comparison CcInsight#comparison}
    */
    readonly comparison?: string;
    /**
    * Non-empty string definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: string;
}
export class ComplianceSecurityControlParametersNamePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ComplianceSecurityControlParametersNameProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ComplianceSecurityControlParametersNameProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class ComplianceSecurityControlParametersNamePropertyList extends cdktn.ComplexList {
    public internalValue? : ComplianceSecurityControlParametersNameProperty[] | cdktn.IResolvable

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
    public get(index: number): ComplianceSecurityControlParametersNamePropertyOutputReference {
        return new ComplianceSecurityControlParametersNamePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ComplianceSecurityControlParametersValueProperty {
    /**
    * The condition to apply to a string value when filtering Security Hub findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#comparison CcInsight#comparison}
    */
    readonly comparison?: string;
    /**
    * Non-empty string definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: string;
}
export class ComplianceSecurityControlParametersValuePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ComplianceSecurityControlParametersValueProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ComplianceSecurityControlParametersValueProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class ComplianceSecurityControlParametersValuePropertyList extends cdktn.ComplexList {
    public internalValue? : ComplianceSecurityControlParametersValueProperty[] | cdktn.IResolvable

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
    public get(index: number): ComplianceSecurityControlParametersValuePropertyOutputReference {
        return new ComplianceSecurityControlParametersValuePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ComplianceStatusProperty {
    /**
    * The condition to apply to a string value when filtering Security Hub findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#comparison CcInsight#comparison}
    */
    readonly comparison?: string;
    /**
    * Non-empty string definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: string;
}
export class ComplianceStatusPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ComplianceStatusProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ComplianceStatusProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class ComplianceStatusPropertyList extends cdktn.ComplexList {
    public internalValue? : ComplianceStatusProperty[] | cdktn.IResolvable

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
    public get(index: number): ComplianceStatusPropertyOutputReference {
        return new ComplianceStatusPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface NumberFilterProperty {
    /**
    * The equal-to condition to be applied to a single field when querying for findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#eq CcInsight#eq}
    */
    readonly eq?: number;
    /**
    * The greater-than-equal condition to be applied to a single field when querying for findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#gte CcInsight#gte}
    */
    readonly gte?: number;
    /**
    * The less-than-equal condition to be applied to a single field when querying for findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#lte CcInsight#lte}
    */
    readonly lte?: number;
}
export class NumberFilterPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): NumberFilterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._eq !== undefined) {
            hasAnyValues = true;
            internalValueResult.eq = this._eq;
        }
        if (this._gte !== undefined) {
            hasAnyValues = true;
            internalValueResult.gte = this._gte;
        }
        if (this._lte !== undefined) {
            hasAnyValues = true;
            internalValueResult.lte = this._lte;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NumberFilterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._eq = undefined;
            this._gte = undefined;
            this._lte = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._eq = value.eq;
            this._gte = value.gte;
            this._lte = value.lte;
        }
    }

    // eq - computed: true, optional: true, required: false
    private _eq?: number; 
    public get eq() {
        return this.getNumberAttribute('eq');
    }
    public set eq(value: number) {
        this._eq = value;
    }
    public resetEq() {
        this._eq = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eqInput() {
        return this._eq;
    }

    // gte - computed: true, optional: true, required: false
    private _gte?: number; 
    public get gte() {
        return this.getNumberAttribute('gte');
    }
    public set gte(value: number) {
        this._gte = value;
    }
    public resetGte() {
        this._gte = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get gteInput() {
        return this._gte;
    }

    // lte - computed: true, optional: true, required: false
    private _lte?: number; 
    public get lte() {
        return this.getNumberAttribute('lte');
    }
    public set lte(value: number) {
        this._lte = value;
    }
    public resetLte() {
        this._lte = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lteInput() {
        return this._lte;
    }
}

export class NumberFilterPropertyList extends cdktn.ComplexList {
    public internalValue? : NumberFilterProperty[] | cdktn.IResolvable

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
    public get(index: number): NumberFilterPropertyOutputReference {
        return new NumberFilterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface DateRangeProperty {
    /**
    * A date range unit for the date filter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#unit CcInsight#unit}
    */
    readonly unit?: string;
    /**
    * A date range value for the date filter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: number;
}
export class DateRangePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DateRangeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._unit !== undefined) {
            hasAnyValues = true;
            internalValueResult.unit = this._unit;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DateRangeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._unit = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._unit = value.unit;
            this._value = value.value;
        }
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
}
export interface DateFilterProperty {
    /**
    * A date range for the date filter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#date_range CcInsight#date_range}
    */
    readonly dateRange?: DateRangeProperty;
    /**
    * The date and time, in UTC and ISO 8601 format.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#end CcInsight#end}
    */
    readonly end?: string;
    /**
    * The date and time, in UTC and ISO 8601 format.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#start CcInsight#start}
    */
    readonly start?: string;
}
export class DateFilterPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): DateFilterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dateRange?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dateRange = this._dateRange?.internalValue;
        }
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

    public set internalValue(value: DateFilterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dateRange.internalValue = undefined;
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
            this._dateRange.internalValue = value.dateRange;
            this._end = value.end;
            this._start = value.start;
        }
    }

    // date_range - computed: true, optional: true, required: false
    private _dateRange = new DateRangePropertyOutputReference(this, "date_range");
    public get dateRange() {
        return this._dateRange;
    }
    public putDateRange(value: DateRangeProperty) {
        this._dateRange.internalValue = value;
    }
    public resetDateRange() {
        this._dateRange.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dateRangeInput() {
        return this._dateRange.internalValue;
    }

    // end - computed: true, optional: true, required: false
    private _end?: string; 
    public get end() {
        return this.getStringAttribute('end');
    }
    public set end(value: string) {
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
    private _start?: string; 
    public get start() {
        return this.getStringAttribute('start');
    }
    public set start(value: string) {
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

export class DateFilterPropertyList extends cdktn.ComplexList {
    public internalValue? : DateFilterProperty[] | cdktn.IResolvable

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
    public get(index: number): DateFilterPropertyOutputReference {
        return new DateFilterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface CriticalityProperty {
    /**
    * The equal-to condition to be applied to a single field when querying for findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#eq CcInsight#eq}
    */
    readonly eq?: number;
    /**
    * The greater-than-equal condition to be applied to a single field when querying for findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#gte CcInsight#gte}
    */
    readonly gte?: number;
    /**
    * The less-than-equal condition to be applied to a single field when querying for findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#lte CcInsight#lte}
    */
    readonly lte?: number;
}
export class CriticalityPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): CriticalityProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._eq !== undefined) {
            hasAnyValues = true;
            internalValueResult.eq = this._eq;
        }
        if (this._gte !== undefined) {
            hasAnyValues = true;
            internalValueResult.gte = this._gte;
        }
        if (this._lte !== undefined) {
            hasAnyValues = true;
            internalValueResult.lte = this._lte;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CriticalityProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._eq = undefined;
            this._gte = undefined;
            this._lte = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._eq = value.eq;
            this._gte = value.gte;
            this._lte = value.lte;
        }
    }

    // eq - computed: true, optional: true, required: false
    private _eq?: number; 
    public get eq() {
        return this.getNumberAttribute('eq');
    }
    public set eq(value: number) {
        this._eq = value;
    }
    public resetEq() {
        this._eq = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eqInput() {
        return this._eq;
    }

    // gte - computed: true, optional: true, required: false
    private _gte?: number; 
    public get gte() {
        return this.getNumberAttribute('gte');
    }
    public set gte(value: number) {
        this._gte = value;
    }
    public resetGte() {
        this._gte = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get gteInput() {
        return this._gte;
    }

    // lte - computed: true, optional: true, required: false
    private _lte?: number; 
    public get lte() {
        return this.getNumberAttribute('lte');
    }
    public set lte(value: number) {
        this._lte = value;
    }
    public resetLte() {
        this._lte = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lteInput() {
        return this._lte;
    }
}

export class CriticalityPropertyList extends cdktn.ComplexList {
    public internalValue? : CriticalityProperty[] | cdktn.IResolvable

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
    public get(index: number): CriticalityPropertyOutputReference {
        return new CriticalityPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface DescriptionProperty {
    /**
    * The condition to apply to a string value when filtering Security Hub findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#comparison CcInsight#comparison}
    */
    readonly comparison?: string;
    /**
    * Non-empty string definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: string;
}
export class DescriptionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): DescriptionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DescriptionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class DescriptionPropertyList extends cdktn.ComplexList {
    public internalValue? : DescriptionProperty[] | cdktn.IResolvable

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
    public get(index: number): DescriptionPropertyOutputReference {
        return new DescriptionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface FindingProviderFieldsConfidenceProperty {
    /**
    * The equal-to condition to be applied to a single field when querying for findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#eq CcInsight#eq}
    */
    readonly eq?: number;
    /**
    * The greater-than-equal condition to be applied to a single field when querying for findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#gte CcInsight#gte}
    */
    readonly gte?: number;
    /**
    * The less-than-equal condition to be applied to a single field when querying for findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#lte CcInsight#lte}
    */
    readonly lte?: number;
}
export class FindingProviderFieldsConfidencePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): FindingProviderFieldsConfidenceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._eq !== undefined) {
            hasAnyValues = true;
            internalValueResult.eq = this._eq;
        }
        if (this._gte !== undefined) {
            hasAnyValues = true;
            internalValueResult.gte = this._gte;
        }
        if (this._lte !== undefined) {
            hasAnyValues = true;
            internalValueResult.lte = this._lte;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FindingProviderFieldsConfidenceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._eq = undefined;
            this._gte = undefined;
            this._lte = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._eq = value.eq;
            this._gte = value.gte;
            this._lte = value.lte;
        }
    }

    // eq - computed: true, optional: true, required: false
    private _eq?: number; 
    public get eq() {
        return this.getNumberAttribute('eq');
    }
    public set eq(value: number) {
        this._eq = value;
    }
    public resetEq() {
        this._eq = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eqInput() {
        return this._eq;
    }

    // gte - computed: true, optional: true, required: false
    private _gte?: number; 
    public get gte() {
        return this.getNumberAttribute('gte');
    }
    public set gte(value: number) {
        this._gte = value;
    }
    public resetGte() {
        this._gte = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get gteInput() {
        return this._gte;
    }

    // lte - computed: true, optional: true, required: false
    private _lte?: number; 
    public get lte() {
        return this.getNumberAttribute('lte');
    }
    public set lte(value: number) {
        this._lte = value;
    }
    public resetLte() {
        this._lte = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lteInput() {
        return this._lte;
    }
}

export class FindingProviderFieldsConfidencePropertyList extends cdktn.ComplexList {
    public internalValue? : FindingProviderFieldsConfidenceProperty[] | cdktn.IResolvable

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
    public get(index: number): FindingProviderFieldsConfidencePropertyOutputReference {
        return new FindingProviderFieldsConfidencePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface FindingProviderFieldsCriticalityProperty {
    /**
    * The equal-to condition to be applied to a single field when querying for findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#eq CcInsight#eq}
    */
    readonly eq?: number;
    /**
    * The greater-than-equal condition to be applied to a single field when querying for findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#gte CcInsight#gte}
    */
    readonly gte?: number;
    /**
    * The less-than-equal condition to be applied to a single field when querying for findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#lte CcInsight#lte}
    */
    readonly lte?: number;
}
export class FindingProviderFieldsCriticalityPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): FindingProviderFieldsCriticalityProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._eq !== undefined) {
            hasAnyValues = true;
            internalValueResult.eq = this._eq;
        }
        if (this._gte !== undefined) {
            hasAnyValues = true;
            internalValueResult.gte = this._gte;
        }
        if (this._lte !== undefined) {
            hasAnyValues = true;
            internalValueResult.lte = this._lte;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FindingProviderFieldsCriticalityProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._eq = undefined;
            this._gte = undefined;
            this._lte = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._eq = value.eq;
            this._gte = value.gte;
            this._lte = value.lte;
        }
    }

    // eq - computed: true, optional: true, required: false
    private _eq?: number; 
    public get eq() {
        return this.getNumberAttribute('eq');
    }
    public set eq(value: number) {
        this._eq = value;
    }
    public resetEq() {
        this._eq = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eqInput() {
        return this._eq;
    }

    // gte - computed: true, optional: true, required: false
    private _gte?: number; 
    public get gte() {
        return this.getNumberAttribute('gte');
    }
    public set gte(value: number) {
        this._gte = value;
    }
    public resetGte() {
        this._gte = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get gteInput() {
        return this._gte;
    }

    // lte - computed: true, optional: true, required: false
    private _lte?: number; 
    public get lte() {
        return this.getNumberAttribute('lte');
    }
    public set lte(value: number) {
        this._lte = value;
    }
    public resetLte() {
        this._lte = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lteInput() {
        return this._lte;
    }
}

export class FindingProviderFieldsCriticalityPropertyList extends cdktn.ComplexList {
    public internalValue? : FindingProviderFieldsCriticalityProperty[] | cdktn.IResolvable

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
    public get(index: number): FindingProviderFieldsCriticalityPropertyOutputReference {
        return new FindingProviderFieldsCriticalityPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface FindingProviderFieldsRelatedFindingsIdProperty {
    /**
    * The condition to apply to a string value when filtering Security Hub findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#comparison CcInsight#comparison}
    */
    readonly comparison?: string;
    /**
    * Non-empty string definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: string;
}
export class FindingProviderFieldsRelatedFindingsIdPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): FindingProviderFieldsRelatedFindingsIdProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FindingProviderFieldsRelatedFindingsIdProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class FindingProviderFieldsRelatedFindingsIdPropertyList extends cdktn.ComplexList {
    public internalValue? : FindingProviderFieldsRelatedFindingsIdProperty[] | cdktn.IResolvable

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
    public get(index: number): FindingProviderFieldsRelatedFindingsIdPropertyOutputReference {
        return new FindingProviderFieldsRelatedFindingsIdPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface FindingProviderFieldsRelatedFindingsProductArnProperty {
    /**
    * The condition to apply to a string value when filtering Security Hub findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#comparison CcInsight#comparison}
    */
    readonly comparison?: string;
    /**
    * Non-empty string definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: string;
}
export class FindingProviderFieldsRelatedFindingsProductArnPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): FindingProviderFieldsRelatedFindingsProductArnProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FindingProviderFieldsRelatedFindingsProductArnProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class FindingProviderFieldsRelatedFindingsProductArnPropertyList extends cdktn.ComplexList {
    public internalValue? : FindingProviderFieldsRelatedFindingsProductArnProperty[] | cdktn.IResolvable

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
    public get(index: number): FindingProviderFieldsRelatedFindingsProductArnPropertyOutputReference {
        return new FindingProviderFieldsRelatedFindingsProductArnPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface FindingProviderFieldsSeverityLabelProperty {
    /**
    * The condition to apply to a string value when filtering Security Hub findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#comparison CcInsight#comparison}
    */
    readonly comparison?: string;
    /**
    * Non-empty string definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: string;
}
export class FindingProviderFieldsSeverityLabelPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): FindingProviderFieldsSeverityLabelProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FindingProviderFieldsSeverityLabelProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class FindingProviderFieldsSeverityLabelPropertyList extends cdktn.ComplexList {
    public internalValue? : FindingProviderFieldsSeverityLabelProperty[] | cdktn.IResolvable

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
    public get(index: number): FindingProviderFieldsSeverityLabelPropertyOutputReference {
        return new FindingProviderFieldsSeverityLabelPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface FindingProviderFieldsSeverityOriginalProperty {
    /**
    * The condition to apply to a string value when filtering Security Hub findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#comparison CcInsight#comparison}
    */
    readonly comparison?: string;
    /**
    * Non-empty string definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: string;
}
export class FindingProviderFieldsSeverityOriginalPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): FindingProviderFieldsSeverityOriginalProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FindingProviderFieldsSeverityOriginalProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class FindingProviderFieldsSeverityOriginalPropertyList extends cdktn.ComplexList {
    public internalValue? : FindingProviderFieldsSeverityOriginalProperty[] | cdktn.IResolvable

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
    public get(index: number): FindingProviderFieldsSeverityOriginalPropertyOutputReference {
        return new FindingProviderFieldsSeverityOriginalPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface FindingProviderFieldsTypesProperty {
    /**
    * The condition to apply to a string value when filtering Security Hub findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#comparison CcInsight#comparison}
    */
    readonly comparison?: string;
    /**
    * Non-empty string definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: string;
}
export class FindingProviderFieldsTypesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): FindingProviderFieldsTypesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FindingProviderFieldsTypesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class FindingProviderFieldsTypesPropertyList extends cdktn.ComplexList {
    public internalValue? : FindingProviderFieldsTypesProperty[] | cdktn.IResolvable

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
    public get(index: number): FindingProviderFieldsTypesPropertyOutputReference {
        return new FindingProviderFieldsTypesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface FiltersFirstObservedAtDateRangeProperty {
    /**
    * A date range unit for the date filter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#unit CcInsight#unit}
    */
    readonly unit?: string;
    /**
    * A date range value for the date filter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: number;
}
export class FiltersFirstObservedAtDateRangePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FiltersFirstObservedAtDateRangeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._unit !== undefined) {
            hasAnyValues = true;
            internalValueResult.unit = this._unit;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FiltersFirstObservedAtDateRangeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._unit = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._unit = value.unit;
            this._value = value.value;
        }
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
}
export interface FirstObservedAtProperty {
    /**
    * A date range for the date filter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#date_range CcInsight#date_range}
    */
    readonly dateRange?: FiltersFirstObservedAtDateRangeProperty;
    /**
    * The date and time, in UTC and ISO 8601 format.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#end CcInsight#end}
    */
    readonly end?: string;
    /**
    * The date and time, in UTC and ISO 8601 format.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#start CcInsight#start}
    */
    readonly start?: string;
}
export class FirstObservedAtPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): FirstObservedAtProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dateRange?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dateRange = this._dateRange?.internalValue;
        }
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

    public set internalValue(value: FirstObservedAtProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dateRange.internalValue = undefined;
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
            this._dateRange.internalValue = value.dateRange;
            this._end = value.end;
            this._start = value.start;
        }
    }

    // date_range - computed: true, optional: true, required: false
    private _dateRange = new FiltersFirstObservedAtDateRangePropertyOutputReference(this, "date_range");
    public get dateRange() {
        return this._dateRange;
    }
    public putDateRange(value: FiltersFirstObservedAtDateRangeProperty) {
        this._dateRange.internalValue = value;
    }
    public resetDateRange() {
        this._dateRange.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dateRangeInput() {
        return this._dateRange.internalValue;
    }

    // end - computed: true, optional: true, required: false
    private _end?: string; 
    public get end() {
        return this.getStringAttribute('end');
    }
    public set end(value: string) {
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
    private _start?: string; 
    public get start() {
        return this.getStringAttribute('start');
    }
    public set start(value: string) {
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

export class FirstObservedAtPropertyList extends cdktn.ComplexList {
    public internalValue? : FirstObservedAtProperty[] | cdktn.IResolvable

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
    public get(index: number): FirstObservedAtPropertyOutputReference {
        return new FirstObservedAtPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface GeneratorIdProperty {
    /**
    * The condition to apply to a string value when filtering Security Hub findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#comparison CcInsight#comparison}
    */
    readonly comparison?: string;
    /**
    * Non-empty string definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: string;
}
export class GeneratorIdPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): GeneratorIdProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: GeneratorIdProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class GeneratorIdPropertyList extends cdktn.ComplexList {
    public internalValue? : GeneratorIdProperty[] | cdktn.IResolvable

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
    public get(index: number): GeneratorIdPropertyOutputReference {
        return new GeneratorIdPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface IdProperty {
    /**
    * The condition to apply to a string value when filtering Security Hub findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#comparison CcInsight#comparison}
    */
    readonly comparison?: string;
    /**
    * Non-empty string definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: string;
}
export class IdPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): IdProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IdProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class IdPropertyList extends cdktn.ComplexList {
    public internalValue? : IdProperty[] | cdktn.IResolvable

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
    public get(index: number): IdPropertyOutputReference {
        return new IdPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface KeywordFilterProperty {
    /**
    * A value for the keyword.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: string;
}
export class KeywordFilterPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): KeywordFilterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: KeywordFilterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._value = value.value;
        }
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

export class KeywordFilterPropertyList extends cdktn.ComplexList {
    public internalValue? : KeywordFilterProperty[] | cdktn.IResolvable

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
    public get(index: number): KeywordFilterPropertyOutputReference {
        return new KeywordFilterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface FiltersLastObservedAtDateRangeProperty {
    /**
    * A date range unit for the date filter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#unit CcInsight#unit}
    */
    readonly unit?: string;
    /**
    * A date range value for the date filter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: number;
}
export class FiltersLastObservedAtDateRangePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FiltersLastObservedAtDateRangeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._unit !== undefined) {
            hasAnyValues = true;
            internalValueResult.unit = this._unit;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FiltersLastObservedAtDateRangeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._unit = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._unit = value.unit;
            this._value = value.value;
        }
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
}
export interface LastObservedAtProperty {
    /**
    * A date range for the date filter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#date_range CcInsight#date_range}
    */
    readonly dateRange?: FiltersLastObservedAtDateRangeProperty;
    /**
    * The date and time, in UTC and ISO 8601 format.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#end CcInsight#end}
    */
    readonly end?: string;
    /**
    * The date and time, in UTC and ISO 8601 format.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#start CcInsight#start}
    */
    readonly start?: string;
}
export class LastObservedAtPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): LastObservedAtProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dateRange?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dateRange = this._dateRange?.internalValue;
        }
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

    public set internalValue(value: LastObservedAtProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dateRange.internalValue = undefined;
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
            this._dateRange.internalValue = value.dateRange;
            this._end = value.end;
            this._start = value.start;
        }
    }

    // date_range - computed: true, optional: true, required: false
    private _dateRange = new FiltersLastObservedAtDateRangePropertyOutputReference(this, "date_range");
    public get dateRange() {
        return this._dateRange;
    }
    public putDateRange(value: FiltersLastObservedAtDateRangeProperty) {
        this._dateRange.internalValue = value;
    }
    public resetDateRange() {
        this._dateRange.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dateRangeInput() {
        return this._dateRange.internalValue;
    }

    // end - computed: true, optional: true, required: false
    private _end?: string; 
    public get end() {
        return this.getStringAttribute('end');
    }
    public set end(value: string) {
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
    private _start?: string; 
    public get start() {
        return this.getStringAttribute('start');
    }
    public set start(value: string) {
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

export class LastObservedAtPropertyList extends cdktn.ComplexList {
    public internalValue? : LastObservedAtProperty[] | cdktn.IResolvable

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
    public get(index: number): LastObservedAtPropertyOutputReference {
        return new LastObservedAtPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface MalwareNameProperty {
    /**
    * The condition to apply to a string value when filtering Security Hub findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#comparison CcInsight#comparison}
    */
    readonly comparison?: string;
    /**
    * Non-empty string definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: string;
}
export class MalwareNamePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): MalwareNameProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MalwareNameProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class MalwareNamePropertyList extends cdktn.ComplexList {
    public internalValue? : MalwareNameProperty[] | cdktn.IResolvable

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
    public get(index: number): MalwareNamePropertyOutputReference {
        return new MalwareNamePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface MalwarePathProperty {
    /**
    * The condition to apply to a string value when filtering Security Hub findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#comparison CcInsight#comparison}
    */
    readonly comparison?: string;
    /**
    * Non-empty string definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: string;
}
export class MalwarePathPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): MalwarePathProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MalwarePathProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class MalwarePathPropertyList extends cdktn.ComplexList {
    public internalValue? : MalwarePathProperty[] | cdktn.IResolvable

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
    public get(index: number): MalwarePathPropertyOutputReference {
        return new MalwarePathPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface MalwareStateProperty {
    /**
    * The condition to apply to a string value when filtering Security Hub findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#comparison CcInsight#comparison}
    */
    readonly comparison?: string;
    /**
    * Non-empty string definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: string;
}
export class MalwareStatePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): MalwareStateProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MalwareStateProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class MalwareStatePropertyList extends cdktn.ComplexList {
    public internalValue? : MalwareStateProperty[] | cdktn.IResolvable

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
    public get(index: number): MalwareStatePropertyOutputReference {
        return new MalwareStatePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface MalwareTypeProperty {
    /**
    * The condition to apply to a string value when filtering Security Hub findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#comparison CcInsight#comparison}
    */
    readonly comparison?: string;
    /**
    * Non-empty string definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: string;
}
export class MalwareTypePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): MalwareTypeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MalwareTypeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class MalwareTypePropertyList extends cdktn.ComplexList {
    public internalValue? : MalwareTypeProperty[] | cdktn.IResolvable

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
    public get(index: number): MalwareTypePropertyOutputReference {
        return new MalwareTypePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface NetworkDestinationDomainProperty {
    /**
    * The condition to apply to a string value when filtering Security Hub findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#comparison CcInsight#comparison}
    */
    readonly comparison?: string;
    /**
    * Non-empty string definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: string;
}
export class NetworkDestinationDomainPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): NetworkDestinationDomainProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NetworkDestinationDomainProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class NetworkDestinationDomainPropertyList extends cdktn.ComplexList {
    public internalValue? : NetworkDestinationDomainProperty[] | cdktn.IResolvable

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
    public get(index: number): NetworkDestinationDomainPropertyOutputReference {
        return new NetworkDestinationDomainPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface IpFilterProperty {
    /**
    * A finding's CIDR value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#cidr CcInsight#cidr}
    */
    readonly cidr?: string;
}
export class IpFilterPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): IpFilterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cidr !== undefined) {
            hasAnyValues = true;
            internalValueResult.cidr = this._cidr;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IpFilterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cidr = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cidr = value.cidr;
        }
    }

    // cidr - computed: true, optional: true, required: false
    private _cidr?: string; 
    public get cidr() {
        return this.getStringAttribute('cidr');
    }
    public set cidr(value: string) {
        this._cidr = value;
    }
    public resetCidr() {
        this._cidr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cidrInput() {
        return this._cidr;
    }
}

export class IpFilterPropertyList extends cdktn.ComplexList {
    public internalValue? : IpFilterProperty[] | cdktn.IResolvable

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
    public get(index: number): IpFilterPropertyOutputReference {
        return new IpFilterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface NetworkDestinationIpV6Property {
    /**
    * A finding's CIDR value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#cidr CcInsight#cidr}
    */
    readonly cidr?: string;
}
export class NetworkDestinationIpV6PropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): NetworkDestinationIpV6Property | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cidr !== undefined) {
            hasAnyValues = true;
            internalValueResult.cidr = this._cidr;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NetworkDestinationIpV6Property | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cidr = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cidr = value.cidr;
        }
    }

    // cidr - computed: true, optional: true, required: false
    private _cidr?: string; 
    public get cidr() {
        return this.getStringAttribute('cidr');
    }
    public set cidr(value: string) {
        this._cidr = value;
    }
    public resetCidr() {
        this._cidr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cidrInput() {
        return this._cidr;
    }
}

export class NetworkDestinationIpV6PropertyList extends cdktn.ComplexList {
    public internalValue? : NetworkDestinationIpV6Property[] | cdktn.IResolvable

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
    public get(index: number): NetworkDestinationIpV6PropertyOutputReference {
        return new NetworkDestinationIpV6PropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface NetworkDestinationPortProperty {
    /**
    * The equal-to condition to be applied to a single field when querying for findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#eq CcInsight#eq}
    */
    readonly eq?: number;
    /**
    * The greater-than-equal condition to be applied to a single field when querying for findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#gte CcInsight#gte}
    */
    readonly gte?: number;
    /**
    * The less-than-equal condition to be applied to a single field when querying for findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#lte CcInsight#lte}
    */
    readonly lte?: number;
}
export class NetworkDestinationPortPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): NetworkDestinationPortProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._eq !== undefined) {
            hasAnyValues = true;
            internalValueResult.eq = this._eq;
        }
        if (this._gte !== undefined) {
            hasAnyValues = true;
            internalValueResult.gte = this._gte;
        }
        if (this._lte !== undefined) {
            hasAnyValues = true;
            internalValueResult.lte = this._lte;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NetworkDestinationPortProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._eq = undefined;
            this._gte = undefined;
            this._lte = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._eq = value.eq;
            this._gte = value.gte;
            this._lte = value.lte;
        }
    }

    // eq - computed: true, optional: true, required: false
    private _eq?: number; 
    public get eq() {
        return this.getNumberAttribute('eq');
    }
    public set eq(value: number) {
        this._eq = value;
    }
    public resetEq() {
        this._eq = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eqInput() {
        return this._eq;
    }

    // gte - computed: true, optional: true, required: false
    private _gte?: number; 
    public get gte() {
        return this.getNumberAttribute('gte');
    }
    public set gte(value: number) {
        this._gte = value;
    }
    public resetGte() {
        this._gte = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get gteInput() {
        return this._gte;
    }

    // lte - computed: true, optional: true, required: false
    private _lte?: number; 
    public get lte() {
        return this.getNumberAttribute('lte');
    }
    public set lte(value: number) {
        this._lte = value;
    }
    public resetLte() {
        this._lte = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lteInput() {
        return this._lte;
    }
}

export class NetworkDestinationPortPropertyList extends cdktn.ComplexList {
    public internalValue? : NetworkDestinationPortProperty[] | cdktn.IResolvable

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
    public get(index: number): NetworkDestinationPortPropertyOutputReference {
        return new NetworkDestinationPortPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface NetworkDirectionProperty {
    /**
    * The condition to apply to a string value when filtering Security Hub findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#comparison CcInsight#comparison}
    */
    readonly comparison?: string;
    /**
    * Non-empty string definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: string;
}
export class NetworkDirectionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): NetworkDirectionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NetworkDirectionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class NetworkDirectionPropertyList extends cdktn.ComplexList {
    public internalValue? : NetworkDirectionProperty[] | cdktn.IResolvable

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
    public get(index: number): NetworkDirectionPropertyOutputReference {
        return new NetworkDirectionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface NetworkProtocolProperty {
    /**
    * The condition to apply to a string value when filtering Security Hub findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#comparison CcInsight#comparison}
    */
    readonly comparison?: string;
    /**
    * Non-empty string definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: string;
}
export class NetworkProtocolPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): NetworkProtocolProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NetworkProtocolProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class NetworkProtocolPropertyList extends cdktn.ComplexList {
    public internalValue? : NetworkProtocolProperty[] | cdktn.IResolvable

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
    public get(index: number): NetworkProtocolPropertyOutputReference {
        return new NetworkProtocolPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface NetworkSourceDomainProperty {
    /**
    * The condition to apply to a string value when filtering Security Hub findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#comparison CcInsight#comparison}
    */
    readonly comparison?: string;
    /**
    * Non-empty string definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: string;
}
export class NetworkSourceDomainPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): NetworkSourceDomainProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NetworkSourceDomainProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class NetworkSourceDomainPropertyList extends cdktn.ComplexList {
    public internalValue? : NetworkSourceDomainProperty[] | cdktn.IResolvable

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
    public get(index: number): NetworkSourceDomainPropertyOutputReference {
        return new NetworkSourceDomainPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface NetworkSourceIpV4Property {
    /**
    * A finding's CIDR value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#cidr CcInsight#cidr}
    */
    readonly cidr?: string;
}
export class NetworkSourceIpV4PropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): NetworkSourceIpV4Property | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cidr !== undefined) {
            hasAnyValues = true;
            internalValueResult.cidr = this._cidr;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NetworkSourceIpV4Property | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cidr = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cidr = value.cidr;
        }
    }

    // cidr - computed: true, optional: true, required: false
    private _cidr?: string; 
    public get cidr() {
        return this.getStringAttribute('cidr');
    }
    public set cidr(value: string) {
        this._cidr = value;
    }
    public resetCidr() {
        this._cidr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cidrInput() {
        return this._cidr;
    }
}

export class NetworkSourceIpV4PropertyList extends cdktn.ComplexList {
    public internalValue? : NetworkSourceIpV4Property[] | cdktn.IResolvable

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
    public get(index: number): NetworkSourceIpV4PropertyOutputReference {
        return new NetworkSourceIpV4PropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface NetworkSourceIpV6Property {
    /**
    * A finding's CIDR value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#cidr CcInsight#cidr}
    */
    readonly cidr?: string;
}
export class NetworkSourceIpV6PropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): NetworkSourceIpV6Property | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cidr !== undefined) {
            hasAnyValues = true;
            internalValueResult.cidr = this._cidr;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NetworkSourceIpV6Property | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cidr = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cidr = value.cidr;
        }
    }

    // cidr - computed: true, optional: true, required: false
    private _cidr?: string; 
    public get cidr() {
        return this.getStringAttribute('cidr');
    }
    public set cidr(value: string) {
        this._cidr = value;
    }
    public resetCidr() {
        this._cidr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cidrInput() {
        return this._cidr;
    }
}

export class NetworkSourceIpV6PropertyList extends cdktn.ComplexList {
    public internalValue? : NetworkSourceIpV6Property[] | cdktn.IResolvable

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
    public get(index: number): NetworkSourceIpV6PropertyOutputReference {
        return new NetworkSourceIpV6PropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface NetworkSourceMacProperty {
    /**
    * The condition to apply to a string value when filtering Security Hub findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#comparison CcInsight#comparison}
    */
    readonly comparison?: string;
    /**
    * Non-empty string definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: string;
}
export class NetworkSourceMacPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): NetworkSourceMacProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NetworkSourceMacProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class NetworkSourceMacPropertyList extends cdktn.ComplexList {
    public internalValue? : NetworkSourceMacProperty[] | cdktn.IResolvable

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
    public get(index: number): NetworkSourceMacPropertyOutputReference {
        return new NetworkSourceMacPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface NetworkSourcePortProperty {
    /**
    * The equal-to condition to be applied to a single field when querying for findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#eq CcInsight#eq}
    */
    readonly eq?: number;
    /**
    * The greater-than-equal condition to be applied to a single field when querying for findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#gte CcInsight#gte}
    */
    readonly gte?: number;
    /**
    * The less-than-equal condition to be applied to a single field when querying for findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#lte CcInsight#lte}
    */
    readonly lte?: number;
}
export class NetworkSourcePortPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): NetworkSourcePortProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._eq !== undefined) {
            hasAnyValues = true;
            internalValueResult.eq = this._eq;
        }
        if (this._gte !== undefined) {
            hasAnyValues = true;
            internalValueResult.gte = this._gte;
        }
        if (this._lte !== undefined) {
            hasAnyValues = true;
            internalValueResult.lte = this._lte;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NetworkSourcePortProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._eq = undefined;
            this._gte = undefined;
            this._lte = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._eq = value.eq;
            this._gte = value.gte;
            this._lte = value.lte;
        }
    }

    // eq - computed: true, optional: true, required: false
    private _eq?: number; 
    public get eq() {
        return this.getNumberAttribute('eq');
    }
    public set eq(value: number) {
        this._eq = value;
    }
    public resetEq() {
        this._eq = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eqInput() {
        return this._eq;
    }

    // gte - computed: true, optional: true, required: false
    private _gte?: number; 
    public get gte() {
        return this.getNumberAttribute('gte');
    }
    public set gte(value: number) {
        this._gte = value;
    }
    public resetGte() {
        this._gte = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get gteInput() {
        return this._gte;
    }

    // lte - computed: true, optional: true, required: false
    private _lte?: number; 
    public get lte() {
        return this.getNumberAttribute('lte');
    }
    public set lte(value: number) {
        this._lte = value;
    }
    public resetLte() {
        this._lte = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lteInput() {
        return this._lte;
    }
}

export class NetworkSourcePortPropertyList extends cdktn.ComplexList {
    public internalValue? : NetworkSourcePortProperty[] | cdktn.IResolvable

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
    public get(index: number): NetworkSourcePortPropertyOutputReference {
        return new NetworkSourcePortPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface NoteTextProperty {
    /**
    * The condition to apply to a string value when filtering Security Hub findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#comparison CcInsight#comparison}
    */
    readonly comparison?: string;
    /**
    * Non-empty string definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: string;
}
export class NoteTextPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): NoteTextProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NoteTextProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class NoteTextPropertyList extends cdktn.ComplexList {
    public internalValue? : NoteTextProperty[] | cdktn.IResolvable

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
    public get(index: number): NoteTextPropertyOutputReference {
        return new NoteTextPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface FiltersNoteUpdatedAtDateRangeProperty {
    /**
    * A date range unit for the date filter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#unit CcInsight#unit}
    */
    readonly unit?: string;
    /**
    * A date range value for the date filter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: number;
}
export class FiltersNoteUpdatedAtDateRangePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FiltersNoteUpdatedAtDateRangeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._unit !== undefined) {
            hasAnyValues = true;
            internalValueResult.unit = this._unit;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FiltersNoteUpdatedAtDateRangeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._unit = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._unit = value.unit;
            this._value = value.value;
        }
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
}
export interface NoteUpdatedAtProperty {
    /**
    * A date range for the date filter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#date_range CcInsight#date_range}
    */
    readonly dateRange?: FiltersNoteUpdatedAtDateRangeProperty;
    /**
    * The date and time, in UTC and ISO 8601 format.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#end CcInsight#end}
    */
    readonly end?: string;
    /**
    * The date and time, in UTC and ISO 8601 format.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#start CcInsight#start}
    */
    readonly start?: string;
}
export class NoteUpdatedAtPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): NoteUpdatedAtProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dateRange?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dateRange = this._dateRange?.internalValue;
        }
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

    public set internalValue(value: NoteUpdatedAtProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dateRange.internalValue = undefined;
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
            this._dateRange.internalValue = value.dateRange;
            this._end = value.end;
            this._start = value.start;
        }
    }

    // date_range - computed: true, optional: true, required: false
    private _dateRange = new FiltersNoteUpdatedAtDateRangePropertyOutputReference(this, "date_range");
    public get dateRange() {
        return this._dateRange;
    }
    public putDateRange(value: FiltersNoteUpdatedAtDateRangeProperty) {
        this._dateRange.internalValue = value;
    }
    public resetDateRange() {
        this._dateRange.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dateRangeInput() {
        return this._dateRange.internalValue;
    }

    // end - computed: true, optional: true, required: false
    private _end?: string; 
    public get end() {
        return this.getStringAttribute('end');
    }
    public set end(value: string) {
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
    private _start?: string; 
    public get start() {
        return this.getStringAttribute('start');
    }
    public set start(value: string) {
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

export class NoteUpdatedAtPropertyList extends cdktn.ComplexList {
    public internalValue? : NoteUpdatedAtProperty[] | cdktn.IResolvable

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
    public get(index: number): NoteUpdatedAtPropertyOutputReference {
        return new NoteUpdatedAtPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface NoteUpdatedByProperty {
    /**
    * The condition to apply to a string value when filtering Security Hub findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#comparison CcInsight#comparison}
    */
    readonly comparison?: string;
    /**
    * Non-empty string definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: string;
}
export class NoteUpdatedByPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): NoteUpdatedByProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NoteUpdatedByProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class NoteUpdatedByPropertyList extends cdktn.ComplexList {
    public internalValue? : NoteUpdatedByProperty[] | cdktn.IResolvable

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
    public get(index: number): NoteUpdatedByPropertyOutputReference {
        return new NoteUpdatedByPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface FiltersProcessLaunchedAtDateRangeProperty {
    /**
    * A date range unit for the date filter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#unit CcInsight#unit}
    */
    readonly unit?: string;
    /**
    * A date range value for the date filter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: number;
}
export class FiltersProcessLaunchedAtDateRangePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FiltersProcessLaunchedAtDateRangeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._unit !== undefined) {
            hasAnyValues = true;
            internalValueResult.unit = this._unit;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FiltersProcessLaunchedAtDateRangeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._unit = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._unit = value.unit;
            this._value = value.value;
        }
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
}
export interface ProcessLaunchedAtProperty {
    /**
    * A date range for the date filter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#date_range CcInsight#date_range}
    */
    readonly dateRange?: FiltersProcessLaunchedAtDateRangeProperty;
    /**
    * The date and time, in UTC and ISO 8601 format.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#end CcInsight#end}
    */
    readonly end?: string;
    /**
    * The date and time, in UTC and ISO 8601 format.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#start CcInsight#start}
    */
    readonly start?: string;
}
export class ProcessLaunchedAtPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ProcessLaunchedAtProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dateRange?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dateRange = this._dateRange?.internalValue;
        }
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

    public set internalValue(value: ProcessLaunchedAtProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dateRange.internalValue = undefined;
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
            this._dateRange.internalValue = value.dateRange;
            this._end = value.end;
            this._start = value.start;
        }
    }

    // date_range - computed: true, optional: true, required: false
    private _dateRange = new FiltersProcessLaunchedAtDateRangePropertyOutputReference(this, "date_range");
    public get dateRange() {
        return this._dateRange;
    }
    public putDateRange(value: FiltersProcessLaunchedAtDateRangeProperty) {
        this._dateRange.internalValue = value;
    }
    public resetDateRange() {
        this._dateRange.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dateRangeInput() {
        return this._dateRange.internalValue;
    }

    // end - computed: true, optional: true, required: false
    private _end?: string; 
    public get end() {
        return this.getStringAttribute('end');
    }
    public set end(value: string) {
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
    private _start?: string; 
    public get start() {
        return this.getStringAttribute('start');
    }
    public set start(value: string) {
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

export class ProcessLaunchedAtPropertyList extends cdktn.ComplexList {
    public internalValue? : ProcessLaunchedAtProperty[] | cdktn.IResolvable

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
    public get(index: number): ProcessLaunchedAtPropertyOutputReference {
        return new ProcessLaunchedAtPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ProcessNameProperty {
    /**
    * The condition to apply to a string value when filtering Security Hub findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#comparison CcInsight#comparison}
    */
    readonly comparison?: string;
    /**
    * Non-empty string definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: string;
}
export class ProcessNamePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ProcessNameProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ProcessNameProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class ProcessNamePropertyList extends cdktn.ComplexList {
    public internalValue? : ProcessNameProperty[] | cdktn.IResolvable

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
    public get(index: number): ProcessNamePropertyOutputReference {
        return new ProcessNamePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ProcessParentPidProperty {
    /**
    * The equal-to condition to be applied to a single field when querying for findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#eq CcInsight#eq}
    */
    readonly eq?: number;
    /**
    * The greater-than-equal condition to be applied to a single field when querying for findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#gte CcInsight#gte}
    */
    readonly gte?: number;
    /**
    * The less-than-equal condition to be applied to a single field when querying for findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#lte CcInsight#lte}
    */
    readonly lte?: number;
}
export class ProcessParentPidPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ProcessParentPidProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._eq !== undefined) {
            hasAnyValues = true;
            internalValueResult.eq = this._eq;
        }
        if (this._gte !== undefined) {
            hasAnyValues = true;
            internalValueResult.gte = this._gte;
        }
        if (this._lte !== undefined) {
            hasAnyValues = true;
            internalValueResult.lte = this._lte;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ProcessParentPidProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._eq = undefined;
            this._gte = undefined;
            this._lte = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._eq = value.eq;
            this._gte = value.gte;
            this._lte = value.lte;
        }
    }

    // eq - computed: true, optional: true, required: false
    private _eq?: number; 
    public get eq() {
        return this.getNumberAttribute('eq');
    }
    public set eq(value: number) {
        this._eq = value;
    }
    public resetEq() {
        this._eq = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eqInput() {
        return this._eq;
    }

    // gte - computed: true, optional: true, required: false
    private _gte?: number; 
    public get gte() {
        return this.getNumberAttribute('gte');
    }
    public set gte(value: number) {
        this._gte = value;
    }
    public resetGte() {
        this._gte = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get gteInput() {
        return this._gte;
    }

    // lte - computed: true, optional: true, required: false
    private _lte?: number; 
    public get lte() {
        return this.getNumberAttribute('lte');
    }
    public set lte(value: number) {
        this._lte = value;
    }
    public resetLte() {
        this._lte = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lteInput() {
        return this._lte;
    }
}

export class ProcessParentPidPropertyList extends cdktn.ComplexList {
    public internalValue? : ProcessParentPidProperty[] | cdktn.IResolvable

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
    public get(index: number): ProcessParentPidPropertyOutputReference {
        return new ProcessParentPidPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ProcessPathProperty {
    /**
    * The condition to apply to a string value when filtering Security Hub findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#comparison CcInsight#comparison}
    */
    readonly comparison?: string;
    /**
    * Non-empty string definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: string;
}
export class ProcessPathPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ProcessPathProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ProcessPathProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class ProcessPathPropertyList extends cdktn.ComplexList {
    public internalValue? : ProcessPathProperty[] | cdktn.IResolvable

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
    public get(index: number): ProcessPathPropertyOutputReference {
        return new ProcessPathPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ProcessPidProperty {
    /**
    * The equal-to condition to be applied to a single field when querying for findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#eq CcInsight#eq}
    */
    readonly eq?: number;
    /**
    * The greater-than-equal condition to be applied to a single field when querying for findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#gte CcInsight#gte}
    */
    readonly gte?: number;
    /**
    * The less-than-equal condition to be applied to a single field when querying for findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#lte CcInsight#lte}
    */
    readonly lte?: number;
}
export class ProcessPidPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ProcessPidProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._eq !== undefined) {
            hasAnyValues = true;
            internalValueResult.eq = this._eq;
        }
        if (this._gte !== undefined) {
            hasAnyValues = true;
            internalValueResult.gte = this._gte;
        }
        if (this._lte !== undefined) {
            hasAnyValues = true;
            internalValueResult.lte = this._lte;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ProcessPidProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._eq = undefined;
            this._gte = undefined;
            this._lte = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._eq = value.eq;
            this._gte = value.gte;
            this._lte = value.lte;
        }
    }

    // eq - computed: true, optional: true, required: false
    private _eq?: number; 
    public get eq() {
        return this.getNumberAttribute('eq');
    }
    public set eq(value: number) {
        this._eq = value;
    }
    public resetEq() {
        this._eq = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eqInput() {
        return this._eq;
    }

    // gte - computed: true, optional: true, required: false
    private _gte?: number; 
    public get gte() {
        return this.getNumberAttribute('gte');
    }
    public set gte(value: number) {
        this._gte = value;
    }
    public resetGte() {
        this._gte = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get gteInput() {
        return this._gte;
    }

    // lte - computed: true, optional: true, required: false
    private _lte?: number; 
    public get lte() {
        return this.getNumberAttribute('lte');
    }
    public set lte(value: number) {
        this._lte = value;
    }
    public resetLte() {
        this._lte = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lteInput() {
        return this._lte;
    }
}

export class ProcessPidPropertyList extends cdktn.ComplexList {
    public internalValue? : ProcessPidProperty[] | cdktn.IResolvable

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
    public get(index: number): ProcessPidPropertyOutputReference {
        return new ProcessPidPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface FiltersProcessTerminatedAtDateRangeProperty {
    /**
    * A date range unit for the date filter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#unit CcInsight#unit}
    */
    readonly unit?: string;
    /**
    * A date range value for the date filter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: number;
}
export class FiltersProcessTerminatedAtDateRangePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FiltersProcessTerminatedAtDateRangeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._unit !== undefined) {
            hasAnyValues = true;
            internalValueResult.unit = this._unit;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FiltersProcessTerminatedAtDateRangeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._unit = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._unit = value.unit;
            this._value = value.value;
        }
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
}
export interface ProcessTerminatedAtProperty {
    /**
    * A date range for the date filter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#date_range CcInsight#date_range}
    */
    readonly dateRange?: FiltersProcessTerminatedAtDateRangeProperty;
    /**
    * The date and time, in UTC and ISO 8601 format.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#end CcInsight#end}
    */
    readonly end?: string;
    /**
    * The date and time, in UTC and ISO 8601 format.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#start CcInsight#start}
    */
    readonly start?: string;
}
export class ProcessTerminatedAtPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ProcessTerminatedAtProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dateRange?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dateRange = this._dateRange?.internalValue;
        }
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

    public set internalValue(value: ProcessTerminatedAtProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dateRange.internalValue = undefined;
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
            this._dateRange.internalValue = value.dateRange;
            this._end = value.end;
            this._start = value.start;
        }
    }

    // date_range - computed: true, optional: true, required: false
    private _dateRange = new FiltersProcessTerminatedAtDateRangePropertyOutputReference(this, "date_range");
    public get dateRange() {
        return this._dateRange;
    }
    public putDateRange(value: FiltersProcessTerminatedAtDateRangeProperty) {
        this._dateRange.internalValue = value;
    }
    public resetDateRange() {
        this._dateRange.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dateRangeInput() {
        return this._dateRange.internalValue;
    }

    // end - computed: true, optional: true, required: false
    private _end?: string; 
    public get end() {
        return this.getStringAttribute('end');
    }
    public set end(value: string) {
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
    private _start?: string; 
    public get start() {
        return this.getStringAttribute('start');
    }
    public set start(value: string) {
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

export class ProcessTerminatedAtPropertyList extends cdktn.ComplexList {
    public internalValue? : ProcessTerminatedAtProperty[] | cdktn.IResolvable

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
    public get(index: number): ProcessTerminatedAtPropertyOutputReference {
        return new ProcessTerminatedAtPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ProductArnProperty {
    /**
    * The condition to apply to a string value when filtering Security Hub findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#comparison CcInsight#comparison}
    */
    readonly comparison?: string;
    /**
    * Non-empty string definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: string;
}
export class ProductArnPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ProductArnProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ProductArnProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class ProductArnPropertyList extends cdktn.ComplexList {
    public internalValue? : ProductArnProperty[] | cdktn.IResolvable

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
    public get(index: number): ProductArnPropertyOutputReference {
        return new ProductArnPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface MapFilterProperty {
    /**
    * The condition to apply to the key value when filtering Security Hub findings with a map filter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#comparison CcInsight#comparison}
    */
    readonly comparison?: string;
    /**
    * Non-empty string definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#key CcInsight#key}
    */
    readonly key?: string;
    /**
    * Non-empty string definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: string;
}
export class MapFilterPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): MapFilterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
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

    public set internalValue(value: MapFilterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
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
            this._comparison = value.comparison;
            this._key = value.key;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class MapFilterPropertyList extends cdktn.ComplexList {
    public internalValue? : MapFilterProperty[] | cdktn.IResolvable

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
    public get(index: number): MapFilterPropertyOutputReference {
        return new MapFilterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ProductNameProperty {
    /**
    * The condition to apply to a string value when filtering Security Hub findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#comparison CcInsight#comparison}
    */
    readonly comparison?: string;
    /**
    * Non-empty string definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: string;
}
export class ProductNamePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ProductNameProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ProductNameProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class ProductNamePropertyList extends cdktn.ComplexList {
    public internalValue? : ProductNameProperty[] | cdktn.IResolvable

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
    public get(index: number): ProductNamePropertyOutputReference {
        return new ProductNamePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface RecommendationTextProperty {
    /**
    * The condition to apply to a string value when filtering Security Hub findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#comparison CcInsight#comparison}
    */
    readonly comparison?: string;
    /**
    * Non-empty string definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: string;
}
export class RecommendationTextPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): RecommendationTextProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RecommendationTextProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class RecommendationTextPropertyList extends cdktn.ComplexList {
    public internalValue? : RecommendationTextProperty[] | cdktn.IResolvable

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
    public get(index: number): RecommendationTextPropertyOutputReference {
        return new RecommendationTextPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface RecordStateProperty {
    /**
    * The condition to apply to a string value when filtering Security Hub findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#comparison CcInsight#comparison}
    */
    readonly comparison?: string;
    /**
    * Non-empty string definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: string;
}
export class RecordStatePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): RecordStateProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RecordStateProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class RecordStatePropertyList extends cdktn.ComplexList {
    public internalValue? : RecordStateProperty[] | cdktn.IResolvable

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
    public get(index: number): RecordStatePropertyOutputReference {
        return new RecordStatePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface RegionProperty {
    /**
    * The condition to apply to a string value when filtering Security Hub findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#comparison CcInsight#comparison}
    */
    readonly comparison?: string;
    /**
    * Non-empty string definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: string;
}
export class RegionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): RegionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RegionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class RegionPropertyList extends cdktn.ComplexList {
    public internalValue? : RegionProperty[] | cdktn.IResolvable

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
    public get(index: number): RegionPropertyOutputReference {
        return new RegionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface RelatedFindingsIdProperty {
    /**
    * The condition to apply to a string value when filtering Security Hub findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#comparison CcInsight#comparison}
    */
    readonly comparison?: string;
    /**
    * Non-empty string definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: string;
}
export class RelatedFindingsIdPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): RelatedFindingsIdProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RelatedFindingsIdProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class RelatedFindingsIdPropertyList extends cdktn.ComplexList {
    public internalValue? : RelatedFindingsIdProperty[] | cdktn.IResolvable

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
    public get(index: number): RelatedFindingsIdPropertyOutputReference {
        return new RelatedFindingsIdPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface RelatedFindingsProductArnProperty {
    /**
    * The condition to apply to a string value when filtering Security Hub findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#comparison CcInsight#comparison}
    */
    readonly comparison?: string;
    /**
    * Non-empty string definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: string;
}
export class RelatedFindingsProductArnPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): RelatedFindingsProductArnProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RelatedFindingsProductArnProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class RelatedFindingsProductArnPropertyList extends cdktn.ComplexList {
    public internalValue? : RelatedFindingsProductArnProperty[] | cdktn.IResolvable

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
    public get(index: number): RelatedFindingsProductArnPropertyOutputReference {
        return new RelatedFindingsProductArnPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ResourceApplicationArnProperty {
    /**
    * The condition to apply to a string value when filtering Security Hub findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#comparison CcInsight#comparison}
    */
    readonly comparison?: string;
    /**
    * Non-empty string definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: string;
}
export class ResourceApplicationArnPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ResourceApplicationArnProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ResourceApplicationArnProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class ResourceApplicationArnPropertyList extends cdktn.ComplexList {
    public internalValue? : ResourceApplicationArnProperty[] | cdktn.IResolvable

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
    public get(index: number): ResourceApplicationArnPropertyOutputReference {
        return new ResourceApplicationArnPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ResourceApplicationNameProperty {
    /**
    * The condition to apply to a string value when filtering Security Hub findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#comparison CcInsight#comparison}
    */
    readonly comparison?: string;
    /**
    * Non-empty string definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: string;
}
export class ResourceApplicationNamePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ResourceApplicationNameProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ResourceApplicationNameProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class ResourceApplicationNamePropertyList extends cdktn.ComplexList {
    public internalValue? : ResourceApplicationNameProperty[] | cdktn.IResolvable

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
    public get(index: number): ResourceApplicationNamePropertyOutputReference {
        return new ResourceApplicationNamePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ResourceAwsEc2InstanceIamInstanceProfileArnProperty {
    /**
    * The condition to apply to a string value when filtering Security Hub findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#comparison CcInsight#comparison}
    */
    readonly comparison?: string;
    /**
    * Non-empty string definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: string;
}
export class ResourceAwsEc2InstanceIamInstanceProfileArnPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ResourceAwsEc2InstanceIamInstanceProfileArnProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ResourceAwsEc2InstanceIamInstanceProfileArnProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class ResourceAwsEc2InstanceIamInstanceProfileArnPropertyList extends cdktn.ComplexList {
    public internalValue? : ResourceAwsEc2InstanceIamInstanceProfileArnProperty[] | cdktn.IResolvable

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
    public get(index: number): ResourceAwsEc2InstanceIamInstanceProfileArnPropertyOutputReference {
        return new ResourceAwsEc2InstanceIamInstanceProfileArnPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ResourceAwsEc2InstanceImageIdProperty {
    /**
    * The condition to apply to a string value when filtering Security Hub findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#comparison CcInsight#comparison}
    */
    readonly comparison?: string;
    /**
    * Non-empty string definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: string;
}
export class ResourceAwsEc2InstanceImageIdPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ResourceAwsEc2InstanceImageIdProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ResourceAwsEc2InstanceImageIdProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class ResourceAwsEc2InstanceImageIdPropertyList extends cdktn.ComplexList {
    public internalValue? : ResourceAwsEc2InstanceImageIdProperty[] | cdktn.IResolvable

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
    public get(index: number): ResourceAwsEc2InstanceImageIdPropertyOutputReference {
        return new ResourceAwsEc2InstanceImageIdPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ResourceAwsEc2InstanceIpV4AddressesProperty {
    /**
    * A finding's CIDR value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#cidr CcInsight#cidr}
    */
    readonly cidr?: string;
}
export class ResourceAwsEc2InstanceIpV4AddressesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ResourceAwsEc2InstanceIpV4AddressesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cidr !== undefined) {
            hasAnyValues = true;
            internalValueResult.cidr = this._cidr;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ResourceAwsEc2InstanceIpV4AddressesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cidr = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cidr = value.cidr;
        }
    }

    // cidr - computed: true, optional: true, required: false
    private _cidr?: string; 
    public get cidr() {
        return this.getStringAttribute('cidr');
    }
    public set cidr(value: string) {
        this._cidr = value;
    }
    public resetCidr() {
        this._cidr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cidrInput() {
        return this._cidr;
    }
}

export class ResourceAwsEc2InstanceIpV4AddressesPropertyList extends cdktn.ComplexList {
    public internalValue? : ResourceAwsEc2InstanceIpV4AddressesProperty[] | cdktn.IResolvable

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
    public get(index: number): ResourceAwsEc2InstanceIpV4AddressesPropertyOutputReference {
        return new ResourceAwsEc2InstanceIpV4AddressesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ResourceAwsEc2InstanceIpV6AddressesProperty {
    /**
    * A finding's CIDR value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#cidr CcInsight#cidr}
    */
    readonly cidr?: string;
}
export class ResourceAwsEc2InstanceIpV6AddressesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ResourceAwsEc2InstanceIpV6AddressesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._cidr !== undefined) {
            hasAnyValues = true;
            internalValueResult.cidr = this._cidr;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ResourceAwsEc2InstanceIpV6AddressesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._cidr = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._cidr = value.cidr;
        }
    }

    // cidr - computed: true, optional: true, required: false
    private _cidr?: string; 
    public get cidr() {
        return this.getStringAttribute('cidr');
    }
    public set cidr(value: string) {
        this._cidr = value;
    }
    public resetCidr() {
        this._cidr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cidrInput() {
        return this._cidr;
    }
}

export class ResourceAwsEc2InstanceIpV6AddressesPropertyList extends cdktn.ComplexList {
    public internalValue? : ResourceAwsEc2InstanceIpV6AddressesProperty[] | cdktn.IResolvable

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
    public get(index: number): ResourceAwsEc2InstanceIpV6AddressesPropertyOutputReference {
        return new ResourceAwsEc2InstanceIpV6AddressesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ResourceAwsEc2InstanceKeyNameProperty {
    /**
    * The condition to apply to a string value when filtering Security Hub findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#comparison CcInsight#comparison}
    */
    readonly comparison?: string;
    /**
    * Non-empty string definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: string;
}
export class ResourceAwsEc2InstanceKeyNamePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ResourceAwsEc2InstanceKeyNameProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ResourceAwsEc2InstanceKeyNameProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class ResourceAwsEc2InstanceKeyNamePropertyList extends cdktn.ComplexList {
    public internalValue? : ResourceAwsEc2InstanceKeyNameProperty[] | cdktn.IResolvable

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
    public get(index: number): ResourceAwsEc2InstanceKeyNamePropertyOutputReference {
        return new ResourceAwsEc2InstanceKeyNamePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface FiltersResourceAwsEc2InstanceLaunchedAtDateRangeProperty {
    /**
    * A date range unit for the date filter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#unit CcInsight#unit}
    */
    readonly unit?: string;
    /**
    * A date range value for the date filter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: number;
}
export class FiltersResourceAwsEc2InstanceLaunchedAtDateRangePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FiltersResourceAwsEc2InstanceLaunchedAtDateRangeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._unit !== undefined) {
            hasAnyValues = true;
            internalValueResult.unit = this._unit;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FiltersResourceAwsEc2InstanceLaunchedAtDateRangeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._unit = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._unit = value.unit;
            this._value = value.value;
        }
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
}
export interface ResourceAwsEc2InstanceLaunchedAtProperty {
    /**
    * A date range for the date filter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#date_range CcInsight#date_range}
    */
    readonly dateRange?: FiltersResourceAwsEc2InstanceLaunchedAtDateRangeProperty;
    /**
    * The date and time, in UTC and ISO 8601 format.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#end CcInsight#end}
    */
    readonly end?: string;
    /**
    * The date and time, in UTC and ISO 8601 format.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#start CcInsight#start}
    */
    readonly start?: string;
}
export class ResourceAwsEc2InstanceLaunchedAtPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ResourceAwsEc2InstanceLaunchedAtProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dateRange?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dateRange = this._dateRange?.internalValue;
        }
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

    public set internalValue(value: ResourceAwsEc2InstanceLaunchedAtProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dateRange.internalValue = undefined;
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
            this._dateRange.internalValue = value.dateRange;
            this._end = value.end;
            this._start = value.start;
        }
    }

    // date_range - computed: true, optional: true, required: false
    private _dateRange = new FiltersResourceAwsEc2InstanceLaunchedAtDateRangePropertyOutputReference(this, "date_range");
    public get dateRange() {
        return this._dateRange;
    }
    public putDateRange(value: FiltersResourceAwsEc2InstanceLaunchedAtDateRangeProperty) {
        this._dateRange.internalValue = value;
    }
    public resetDateRange() {
        this._dateRange.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dateRangeInput() {
        return this._dateRange.internalValue;
    }

    // end - computed: true, optional: true, required: false
    private _end?: string; 
    public get end() {
        return this.getStringAttribute('end');
    }
    public set end(value: string) {
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
    private _start?: string; 
    public get start() {
        return this.getStringAttribute('start');
    }
    public set start(value: string) {
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

export class ResourceAwsEc2InstanceLaunchedAtPropertyList extends cdktn.ComplexList {
    public internalValue? : ResourceAwsEc2InstanceLaunchedAtProperty[] | cdktn.IResolvable

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
    public get(index: number): ResourceAwsEc2InstanceLaunchedAtPropertyOutputReference {
        return new ResourceAwsEc2InstanceLaunchedAtPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ResourceAwsEc2InstanceSubnetIdProperty {
    /**
    * The condition to apply to a string value when filtering Security Hub findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#comparison CcInsight#comparison}
    */
    readonly comparison?: string;
    /**
    * Non-empty string definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: string;
}
export class ResourceAwsEc2InstanceSubnetIdPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ResourceAwsEc2InstanceSubnetIdProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ResourceAwsEc2InstanceSubnetIdProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class ResourceAwsEc2InstanceSubnetIdPropertyList extends cdktn.ComplexList {
    public internalValue? : ResourceAwsEc2InstanceSubnetIdProperty[] | cdktn.IResolvable

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
    public get(index: number): ResourceAwsEc2InstanceSubnetIdPropertyOutputReference {
        return new ResourceAwsEc2InstanceSubnetIdPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ResourceAwsEc2InstanceTypeProperty {
    /**
    * The condition to apply to a string value when filtering Security Hub findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#comparison CcInsight#comparison}
    */
    readonly comparison?: string;
    /**
    * Non-empty string definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: string;
}
export class ResourceAwsEc2InstanceTypePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ResourceAwsEc2InstanceTypeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ResourceAwsEc2InstanceTypeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class ResourceAwsEc2InstanceTypePropertyList extends cdktn.ComplexList {
    public internalValue? : ResourceAwsEc2InstanceTypeProperty[] | cdktn.IResolvable

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
    public get(index: number): ResourceAwsEc2InstanceTypePropertyOutputReference {
        return new ResourceAwsEc2InstanceTypePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ResourceAwsEc2InstanceVpcIdProperty {
    /**
    * The condition to apply to a string value when filtering Security Hub findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#comparison CcInsight#comparison}
    */
    readonly comparison?: string;
    /**
    * Non-empty string definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: string;
}
export class ResourceAwsEc2InstanceVpcIdPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ResourceAwsEc2InstanceVpcIdProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ResourceAwsEc2InstanceVpcIdProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class ResourceAwsEc2InstanceVpcIdPropertyList extends cdktn.ComplexList {
    public internalValue? : ResourceAwsEc2InstanceVpcIdProperty[] | cdktn.IResolvable

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
    public get(index: number): ResourceAwsEc2InstanceVpcIdPropertyOutputReference {
        return new ResourceAwsEc2InstanceVpcIdPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface FiltersResourceAwsIamAccessKeyCreatedAtDateRangeProperty {
    /**
    * A date range unit for the date filter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#unit CcInsight#unit}
    */
    readonly unit?: string;
    /**
    * A date range value for the date filter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: number;
}
export class FiltersResourceAwsIamAccessKeyCreatedAtDateRangePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FiltersResourceAwsIamAccessKeyCreatedAtDateRangeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._unit !== undefined) {
            hasAnyValues = true;
            internalValueResult.unit = this._unit;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FiltersResourceAwsIamAccessKeyCreatedAtDateRangeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._unit = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._unit = value.unit;
            this._value = value.value;
        }
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
}
export interface ResourceAwsIamAccessKeyCreatedAtProperty {
    /**
    * A date range for the date filter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#date_range CcInsight#date_range}
    */
    readonly dateRange?: FiltersResourceAwsIamAccessKeyCreatedAtDateRangeProperty;
    /**
    * The date and time, in UTC and ISO 8601 format.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#end CcInsight#end}
    */
    readonly end?: string;
    /**
    * The date and time, in UTC and ISO 8601 format.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#start CcInsight#start}
    */
    readonly start?: string;
}
export class ResourceAwsIamAccessKeyCreatedAtPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ResourceAwsIamAccessKeyCreatedAtProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dateRange?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dateRange = this._dateRange?.internalValue;
        }
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

    public set internalValue(value: ResourceAwsIamAccessKeyCreatedAtProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dateRange.internalValue = undefined;
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
            this._dateRange.internalValue = value.dateRange;
            this._end = value.end;
            this._start = value.start;
        }
    }

    // date_range - computed: true, optional: true, required: false
    private _dateRange = new FiltersResourceAwsIamAccessKeyCreatedAtDateRangePropertyOutputReference(this, "date_range");
    public get dateRange() {
        return this._dateRange;
    }
    public putDateRange(value: FiltersResourceAwsIamAccessKeyCreatedAtDateRangeProperty) {
        this._dateRange.internalValue = value;
    }
    public resetDateRange() {
        this._dateRange.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dateRangeInput() {
        return this._dateRange.internalValue;
    }

    // end - computed: true, optional: true, required: false
    private _end?: string; 
    public get end() {
        return this.getStringAttribute('end');
    }
    public set end(value: string) {
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
    private _start?: string; 
    public get start() {
        return this.getStringAttribute('start');
    }
    public set start(value: string) {
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

export class ResourceAwsIamAccessKeyCreatedAtPropertyList extends cdktn.ComplexList {
    public internalValue? : ResourceAwsIamAccessKeyCreatedAtProperty[] | cdktn.IResolvable

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
    public get(index: number): ResourceAwsIamAccessKeyCreatedAtPropertyOutputReference {
        return new ResourceAwsIamAccessKeyCreatedAtPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ResourceAwsIamAccessKeyPrincipalNameProperty {
    /**
    * The condition to apply to a string value when filtering Security Hub findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#comparison CcInsight#comparison}
    */
    readonly comparison?: string;
    /**
    * Non-empty string definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: string;
}
export class ResourceAwsIamAccessKeyPrincipalNamePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ResourceAwsIamAccessKeyPrincipalNameProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ResourceAwsIamAccessKeyPrincipalNameProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class ResourceAwsIamAccessKeyPrincipalNamePropertyList extends cdktn.ComplexList {
    public internalValue? : ResourceAwsIamAccessKeyPrincipalNameProperty[] | cdktn.IResolvable

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
    public get(index: number): ResourceAwsIamAccessKeyPrincipalNamePropertyOutputReference {
        return new ResourceAwsIamAccessKeyPrincipalNamePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ResourceAwsIamAccessKeyStatusProperty {
    /**
    * The condition to apply to a string value when filtering Security Hub findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#comparison CcInsight#comparison}
    */
    readonly comparison?: string;
    /**
    * Non-empty string definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: string;
}
export class ResourceAwsIamAccessKeyStatusPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ResourceAwsIamAccessKeyStatusProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ResourceAwsIamAccessKeyStatusProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class ResourceAwsIamAccessKeyStatusPropertyList extends cdktn.ComplexList {
    public internalValue? : ResourceAwsIamAccessKeyStatusProperty[] | cdktn.IResolvable

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
    public get(index: number): ResourceAwsIamAccessKeyStatusPropertyOutputReference {
        return new ResourceAwsIamAccessKeyStatusPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ResourceAwsIamAccessKeyUserNameProperty {
    /**
    * The condition to apply to a string value when filtering Security Hub findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#comparison CcInsight#comparison}
    */
    readonly comparison?: string;
    /**
    * Non-empty string definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: string;
}
export class ResourceAwsIamAccessKeyUserNamePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ResourceAwsIamAccessKeyUserNameProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ResourceAwsIamAccessKeyUserNameProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class ResourceAwsIamAccessKeyUserNamePropertyList extends cdktn.ComplexList {
    public internalValue? : ResourceAwsIamAccessKeyUserNameProperty[] | cdktn.IResolvable

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
    public get(index: number): ResourceAwsIamAccessKeyUserNamePropertyOutputReference {
        return new ResourceAwsIamAccessKeyUserNamePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ResourceAwsIamUserUserNameProperty {
    /**
    * The condition to apply to a string value when filtering Security Hub findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#comparison CcInsight#comparison}
    */
    readonly comparison?: string;
    /**
    * Non-empty string definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: string;
}
export class ResourceAwsIamUserUserNamePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ResourceAwsIamUserUserNameProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ResourceAwsIamUserUserNameProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class ResourceAwsIamUserUserNamePropertyList extends cdktn.ComplexList {
    public internalValue? : ResourceAwsIamUserUserNameProperty[] | cdktn.IResolvable

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
    public get(index: number): ResourceAwsIamUserUserNamePropertyOutputReference {
        return new ResourceAwsIamUserUserNamePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ResourceAwsS3BucketOwnerIdProperty {
    /**
    * The condition to apply to a string value when filtering Security Hub findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#comparison CcInsight#comparison}
    */
    readonly comparison?: string;
    /**
    * Non-empty string definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: string;
}
export class ResourceAwsS3BucketOwnerIdPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ResourceAwsS3BucketOwnerIdProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ResourceAwsS3BucketOwnerIdProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class ResourceAwsS3BucketOwnerIdPropertyList extends cdktn.ComplexList {
    public internalValue? : ResourceAwsS3BucketOwnerIdProperty[] | cdktn.IResolvable

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
    public get(index: number): ResourceAwsS3BucketOwnerIdPropertyOutputReference {
        return new ResourceAwsS3BucketOwnerIdPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ResourceAwsS3BucketOwnerNameProperty {
    /**
    * The condition to apply to a string value when filtering Security Hub findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#comparison CcInsight#comparison}
    */
    readonly comparison?: string;
    /**
    * Non-empty string definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: string;
}
export class ResourceAwsS3BucketOwnerNamePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ResourceAwsS3BucketOwnerNameProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ResourceAwsS3BucketOwnerNameProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class ResourceAwsS3BucketOwnerNamePropertyList extends cdktn.ComplexList {
    public internalValue? : ResourceAwsS3BucketOwnerNameProperty[] | cdktn.IResolvable

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
    public get(index: number): ResourceAwsS3BucketOwnerNamePropertyOutputReference {
        return new ResourceAwsS3BucketOwnerNamePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ResourceContainerImageIdProperty {
    /**
    * The condition to apply to a string value when filtering Security Hub findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#comparison CcInsight#comparison}
    */
    readonly comparison?: string;
    /**
    * Non-empty string definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: string;
}
export class ResourceContainerImageIdPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ResourceContainerImageIdProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ResourceContainerImageIdProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class ResourceContainerImageIdPropertyList extends cdktn.ComplexList {
    public internalValue? : ResourceContainerImageIdProperty[] | cdktn.IResolvable

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
    public get(index: number): ResourceContainerImageIdPropertyOutputReference {
        return new ResourceContainerImageIdPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ResourceContainerImageNameProperty {
    /**
    * The condition to apply to a string value when filtering Security Hub findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#comparison CcInsight#comparison}
    */
    readonly comparison?: string;
    /**
    * Non-empty string definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: string;
}
export class ResourceContainerImageNamePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ResourceContainerImageNameProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ResourceContainerImageNameProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class ResourceContainerImageNamePropertyList extends cdktn.ComplexList {
    public internalValue? : ResourceContainerImageNameProperty[] | cdktn.IResolvable

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
    public get(index: number): ResourceContainerImageNamePropertyOutputReference {
        return new ResourceContainerImageNamePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface FiltersResourceContainerLaunchedAtDateRangeProperty {
    /**
    * A date range unit for the date filter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#unit CcInsight#unit}
    */
    readonly unit?: string;
    /**
    * A date range value for the date filter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: number;
}
export class FiltersResourceContainerLaunchedAtDateRangePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FiltersResourceContainerLaunchedAtDateRangeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._unit !== undefined) {
            hasAnyValues = true;
            internalValueResult.unit = this._unit;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FiltersResourceContainerLaunchedAtDateRangeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._unit = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._unit = value.unit;
            this._value = value.value;
        }
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
}
export interface ResourceContainerLaunchedAtProperty {
    /**
    * A date range for the date filter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#date_range CcInsight#date_range}
    */
    readonly dateRange?: FiltersResourceContainerLaunchedAtDateRangeProperty;
    /**
    * The date and time, in UTC and ISO 8601 format.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#end CcInsight#end}
    */
    readonly end?: string;
    /**
    * The date and time, in UTC and ISO 8601 format.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#start CcInsight#start}
    */
    readonly start?: string;
}
export class ResourceContainerLaunchedAtPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ResourceContainerLaunchedAtProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dateRange?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dateRange = this._dateRange?.internalValue;
        }
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

    public set internalValue(value: ResourceContainerLaunchedAtProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dateRange.internalValue = undefined;
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
            this._dateRange.internalValue = value.dateRange;
            this._end = value.end;
            this._start = value.start;
        }
    }

    // date_range - computed: true, optional: true, required: false
    private _dateRange = new FiltersResourceContainerLaunchedAtDateRangePropertyOutputReference(this, "date_range");
    public get dateRange() {
        return this._dateRange;
    }
    public putDateRange(value: FiltersResourceContainerLaunchedAtDateRangeProperty) {
        this._dateRange.internalValue = value;
    }
    public resetDateRange() {
        this._dateRange.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dateRangeInput() {
        return this._dateRange.internalValue;
    }

    // end - computed: true, optional: true, required: false
    private _end?: string; 
    public get end() {
        return this.getStringAttribute('end');
    }
    public set end(value: string) {
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
    private _start?: string; 
    public get start() {
        return this.getStringAttribute('start');
    }
    public set start(value: string) {
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

export class ResourceContainerLaunchedAtPropertyList extends cdktn.ComplexList {
    public internalValue? : ResourceContainerLaunchedAtProperty[] | cdktn.IResolvable

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
    public get(index: number): ResourceContainerLaunchedAtPropertyOutputReference {
        return new ResourceContainerLaunchedAtPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ResourceContainerNameProperty {
    /**
    * The condition to apply to a string value when filtering Security Hub findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#comparison CcInsight#comparison}
    */
    readonly comparison?: string;
    /**
    * Non-empty string definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: string;
}
export class ResourceContainerNamePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ResourceContainerNameProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ResourceContainerNameProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class ResourceContainerNamePropertyList extends cdktn.ComplexList {
    public internalValue? : ResourceContainerNameProperty[] | cdktn.IResolvable

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
    public get(index: number): ResourceContainerNamePropertyOutputReference {
        return new ResourceContainerNamePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ResourceDetailsOtherProperty {
    /**
    * The condition to apply to the key value when filtering Security Hub findings with a map filter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#comparison CcInsight#comparison}
    */
    readonly comparison?: string;
    /**
    * Non-empty string definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#key CcInsight#key}
    */
    readonly key?: string;
    /**
    * Non-empty string definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: string;
}
export class ResourceDetailsOtherPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ResourceDetailsOtherProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
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

    public set internalValue(value: ResourceDetailsOtherProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
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
            this._comparison = value.comparison;
            this._key = value.key;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class ResourceDetailsOtherPropertyList extends cdktn.ComplexList {
    public internalValue? : ResourceDetailsOtherProperty[] | cdktn.IResolvable

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
    public get(index: number): ResourceDetailsOtherPropertyOutputReference {
        return new ResourceDetailsOtherPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ResourceIdProperty {
    /**
    * The condition to apply to a string value when filtering Security Hub findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#comparison CcInsight#comparison}
    */
    readonly comparison?: string;
    /**
    * Non-empty string definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: string;
}
export class ResourceIdPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ResourceIdProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ResourceIdProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class ResourceIdPropertyList extends cdktn.ComplexList {
    public internalValue? : ResourceIdProperty[] | cdktn.IResolvable

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
    public get(index: number): ResourceIdPropertyOutputReference {
        return new ResourceIdPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ResourcePartitionProperty {
    /**
    * The condition to apply to a string value when filtering Security Hub findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#comparison CcInsight#comparison}
    */
    readonly comparison?: string;
    /**
    * Non-empty string definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: string;
}
export class ResourcePartitionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ResourcePartitionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ResourcePartitionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class ResourcePartitionPropertyList extends cdktn.ComplexList {
    public internalValue? : ResourcePartitionProperty[] | cdktn.IResolvable

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
    public get(index: number): ResourcePartitionPropertyOutputReference {
        return new ResourcePartitionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ResourceRegionProperty {
    /**
    * The condition to apply to a string value when filtering Security Hub findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#comparison CcInsight#comparison}
    */
    readonly comparison?: string;
    /**
    * Non-empty string definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: string;
}
export class ResourceRegionPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ResourceRegionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ResourceRegionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class ResourceRegionPropertyList extends cdktn.ComplexList {
    public internalValue? : ResourceRegionProperty[] | cdktn.IResolvable

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
    public get(index: number): ResourceRegionPropertyOutputReference {
        return new ResourceRegionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ResourceTagsProperty {
    /**
    * The condition to apply to the key value when filtering Security Hub findings with a map filter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#comparison CcInsight#comparison}
    */
    readonly comparison?: string;
    /**
    * Non-empty string definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#key CcInsight#key}
    */
    readonly key?: string;
    /**
    * Non-empty string definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: string;
}
export class ResourceTagsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ResourceTagsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
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

    public set internalValue(value: ResourceTagsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
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
            this._comparison = value.comparison;
            this._key = value.key;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class ResourceTagsPropertyList extends cdktn.ComplexList {
    public internalValue? : ResourceTagsProperty[] | cdktn.IResolvable

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
    public get(index: number): ResourceTagsPropertyOutputReference {
        return new ResourceTagsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ResourceTypeProperty {
    /**
    * The condition to apply to a string value when filtering Security Hub findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#comparison CcInsight#comparison}
    */
    readonly comparison?: string;
    /**
    * Non-empty string definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: string;
}
export class ResourceTypePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ResourceTypeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ResourceTypeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class ResourceTypePropertyList extends cdktn.ComplexList {
    public internalValue? : ResourceTypeProperty[] | cdktn.IResolvable

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
    public get(index: number): ResourceTypePropertyOutputReference {
        return new ResourceTypePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface BooleanFilterProperty {
    /**
    * The value of the boolean.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: boolean | cdktn.IResolvable;
}
export class BooleanFilterPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): BooleanFilterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BooleanFilterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._value = value.value;
        }
    }

    // value - computed: true, optional: true, required: false
    private _value?: boolean | cdktn.IResolvable; 
    public get value() {
        return this.getBooleanAttribute('value');
    }
    public set value(value: boolean | cdktn.IResolvable) {
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

export class BooleanFilterPropertyList extends cdktn.ComplexList {
    public internalValue? : BooleanFilterProperty[] | cdktn.IResolvable

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
    public get(index: number): BooleanFilterPropertyOutputReference {
        return new BooleanFilterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface SeverityLabelProperty {
    /**
    * The condition to apply to a string value when filtering Security Hub findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#comparison CcInsight#comparison}
    */
    readonly comparison?: string;
    /**
    * Non-empty string definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: string;
}
export class SeverityLabelPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): SeverityLabelProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SeverityLabelProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class SeverityLabelPropertyList extends cdktn.ComplexList {
    public internalValue? : SeverityLabelProperty[] | cdktn.IResolvable

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
    public get(index: number): SeverityLabelPropertyOutputReference {
        return new SeverityLabelPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface SeverityNormalizedProperty {
    /**
    * The equal-to condition to be applied to a single field when querying for findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#eq CcInsight#eq}
    */
    readonly eq?: number;
    /**
    * The greater-than-equal condition to be applied to a single field when querying for findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#gte CcInsight#gte}
    */
    readonly gte?: number;
    /**
    * The less-than-equal condition to be applied to a single field when querying for findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#lte CcInsight#lte}
    */
    readonly lte?: number;
}
export class SeverityNormalizedPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): SeverityNormalizedProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._eq !== undefined) {
            hasAnyValues = true;
            internalValueResult.eq = this._eq;
        }
        if (this._gte !== undefined) {
            hasAnyValues = true;
            internalValueResult.gte = this._gte;
        }
        if (this._lte !== undefined) {
            hasAnyValues = true;
            internalValueResult.lte = this._lte;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SeverityNormalizedProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._eq = undefined;
            this._gte = undefined;
            this._lte = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._eq = value.eq;
            this._gte = value.gte;
            this._lte = value.lte;
        }
    }

    // eq - computed: true, optional: true, required: false
    private _eq?: number; 
    public get eq() {
        return this.getNumberAttribute('eq');
    }
    public set eq(value: number) {
        this._eq = value;
    }
    public resetEq() {
        this._eq = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eqInput() {
        return this._eq;
    }

    // gte - computed: true, optional: true, required: false
    private _gte?: number; 
    public get gte() {
        return this.getNumberAttribute('gte');
    }
    public set gte(value: number) {
        this._gte = value;
    }
    public resetGte() {
        this._gte = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get gteInput() {
        return this._gte;
    }

    // lte - computed: true, optional: true, required: false
    private _lte?: number; 
    public get lte() {
        return this.getNumberAttribute('lte');
    }
    public set lte(value: number) {
        this._lte = value;
    }
    public resetLte() {
        this._lte = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lteInput() {
        return this._lte;
    }
}

export class SeverityNormalizedPropertyList extends cdktn.ComplexList {
    public internalValue? : SeverityNormalizedProperty[] | cdktn.IResolvable

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
    public get(index: number): SeverityNormalizedPropertyOutputReference {
        return new SeverityNormalizedPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface SeverityProductProperty {
    /**
    * The equal-to condition to be applied to a single field when querying for findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#eq CcInsight#eq}
    */
    readonly eq?: number;
    /**
    * The greater-than-equal condition to be applied to a single field when querying for findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#gte CcInsight#gte}
    */
    readonly gte?: number;
    /**
    * The less-than-equal condition to be applied to a single field when querying for findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#lte CcInsight#lte}
    */
    readonly lte?: number;
}
export class SeverityProductPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): SeverityProductProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._eq !== undefined) {
            hasAnyValues = true;
            internalValueResult.eq = this._eq;
        }
        if (this._gte !== undefined) {
            hasAnyValues = true;
            internalValueResult.gte = this._gte;
        }
        if (this._lte !== undefined) {
            hasAnyValues = true;
            internalValueResult.lte = this._lte;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SeverityProductProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._eq = undefined;
            this._gte = undefined;
            this._lte = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._eq = value.eq;
            this._gte = value.gte;
            this._lte = value.lte;
        }
    }

    // eq - computed: true, optional: true, required: false
    private _eq?: number; 
    public get eq() {
        return this.getNumberAttribute('eq');
    }
    public set eq(value: number) {
        this._eq = value;
    }
    public resetEq() {
        this._eq = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eqInput() {
        return this._eq;
    }

    // gte - computed: true, optional: true, required: false
    private _gte?: number; 
    public get gte() {
        return this.getNumberAttribute('gte');
    }
    public set gte(value: number) {
        this._gte = value;
    }
    public resetGte() {
        this._gte = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get gteInput() {
        return this._gte;
    }

    // lte - computed: true, optional: true, required: false
    private _lte?: number; 
    public get lte() {
        return this.getNumberAttribute('lte');
    }
    public set lte(value: number) {
        this._lte = value;
    }
    public resetLte() {
        this._lte = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lteInput() {
        return this._lte;
    }
}

export class SeverityProductPropertyList extends cdktn.ComplexList {
    public internalValue? : SeverityProductProperty[] | cdktn.IResolvable

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
    public get(index: number): SeverityProductPropertyOutputReference {
        return new SeverityProductPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface SourceUrlProperty {
    /**
    * The condition to apply to a string value when filtering Security Hub findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#comparison CcInsight#comparison}
    */
    readonly comparison?: string;
    /**
    * Non-empty string definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: string;
}
export class SourceUrlPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): SourceUrlProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SourceUrlProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class SourceUrlPropertyList extends cdktn.ComplexList {
    public internalValue? : SourceUrlProperty[] | cdktn.IResolvable

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
    public get(index: number): SourceUrlPropertyOutputReference {
        return new SourceUrlPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ThreatIntelIndicatorCategoryProperty {
    /**
    * The condition to apply to a string value when filtering Security Hub findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#comparison CcInsight#comparison}
    */
    readonly comparison?: string;
    /**
    * Non-empty string definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: string;
}
export class ThreatIntelIndicatorCategoryPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ThreatIntelIndicatorCategoryProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ThreatIntelIndicatorCategoryProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class ThreatIntelIndicatorCategoryPropertyList extends cdktn.ComplexList {
    public internalValue? : ThreatIntelIndicatorCategoryProperty[] | cdktn.IResolvable

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
    public get(index: number): ThreatIntelIndicatorCategoryPropertyOutputReference {
        return new ThreatIntelIndicatorCategoryPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface FiltersThreatIntelIndicatorLastObservedAtDateRangeProperty {
    /**
    * A date range unit for the date filter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#unit CcInsight#unit}
    */
    readonly unit?: string;
    /**
    * A date range value for the date filter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: number;
}
export class FiltersThreatIntelIndicatorLastObservedAtDateRangePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FiltersThreatIntelIndicatorLastObservedAtDateRangeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._unit !== undefined) {
            hasAnyValues = true;
            internalValueResult.unit = this._unit;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FiltersThreatIntelIndicatorLastObservedAtDateRangeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._unit = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._unit = value.unit;
            this._value = value.value;
        }
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
}
export interface ThreatIntelIndicatorLastObservedAtProperty {
    /**
    * A date range for the date filter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#date_range CcInsight#date_range}
    */
    readonly dateRange?: FiltersThreatIntelIndicatorLastObservedAtDateRangeProperty;
    /**
    * The date and time, in UTC and ISO 8601 format.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#end CcInsight#end}
    */
    readonly end?: string;
    /**
    * The date and time, in UTC and ISO 8601 format.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#start CcInsight#start}
    */
    readonly start?: string;
}
export class ThreatIntelIndicatorLastObservedAtPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ThreatIntelIndicatorLastObservedAtProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dateRange?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dateRange = this._dateRange?.internalValue;
        }
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

    public set internalValue(value: ThreatIntelIndicatorLastObservedAtProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dateRange.internalValue = undefined;
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
            this._dateRange.internalValue = value.dateRange;
            this._end = value.end;
            this._start = value.start;
        }
    }

    // date_range - computed: true, optional: true, required: false
    private _dateRange = new FiltersThreatIntelIndicatorLastObservedAtDateRangePropertyOutputReference(this, "date_range");
    public get dateRange() {
        return this._dateRange;
    }
    public putDateRange(value: FiltersThreatIntelIndicatorLastObservedAtDateRangeProperty) {
        this._dateRange.internalValue = value;
    }
    public resetDateRange() {
        this._dateRange.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dateRangeInput() {
        return this._dateRange.internalValue;
    }

    // end - computed: true, optional: true, required: false
    private _end?: string; 
    public get end() {
        return this.getStringAttribute('end');
    }
    public set end(value: string) {
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
    private _start?: string; 
    public get start() {
        return this.getStringAttribute('start');
    }
    public set start(value: string) {
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

export class ThreatIntelIndicatorLastObservedAtPropertyList extends cdktn.ComplexList {
    public internalValue? : ThreatIntelIndicatorLastObservedAtProperty[] | cdktn.IResolvable

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
    public get(index: number): ThreatIntelIndicatorLastObservedAtPropertyOutputReference {
        return new ThreatIntelIndicatorLastObservedAtPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ThreatIntelIndicatorSourceProperty {
    /**
    * The condition to apply to a string value when filtering Security Hub findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#comparison CcInsight#comparison}
    */
    readonly comparison?: string;
    /**
    * Non-empty string definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: string;
}
export class ThreatIntelIndicatorSourcePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ThreatIntelIndicatorSourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ThreatIntelIndicatorSourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class ThreatIntelIndicatorSourcePropertyList extends cdktn.ComplexList {
    public internalValue? : ThreatIntelIndicatorSourceProperty[] | cdktn.IResolvable

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
    public get(index: number): ThreatIntelIndicatorSourcePropertyOutputReference {
        return new ThreatIntelIndicatorSourcePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ThreatIntelIndicatorSourceUrlProperty {
    /**
    * The condition to apply to a string value when filtering Security Hub findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#comparison CcInsight#comparison}
    */
    readonly comparison?: string;
    /**
    * Non-empty string definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: string;
}
export class ThreatIntelIndicatorSourceUrlPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ThreatIntelIndicatorSourceUrlProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ThreatIntelIndicatorSourceUrlProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class ThreatIntelIndicatorSourceUrlPropertyList extends cdktn.ComplexList {
    public internalValue? : ThreatIntelIndicatorSourceUrlProperty[] | cdktn.IResolvable

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
    public get(index: number): ThreatIntelIndicatorSourceUrlPropertyOutputReference {
        return new ThreatIntelIndicatorSourceUrlPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ThreatIntelIndicatorTypeProperty {
    /**
    * The condition to apply to a string value when filtering Security Hub findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#comparison CcInsight#comparison}
    */
    readonly comparison?: string;
    /**
    * Non-empty string definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: string;
}
export class ThreatIntelIndicatorTypePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ThreatIntelIndicatorTypeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ThreatIntelIndicatorTypeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class ThreatIntelIndicatorTypePropertyList extends cdktn.ComplexList {
    public internalValue? : ThreatIntelIndicatorTypeProperty[] | cdktn.IResolvable

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
    public get(index: number): ThreatIntelIndicatorTypePropertyOutputReference {
        return new ThreatIntelIndicatorTypePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ThreatIntelIndicatorValueProperty {
    /**
    * The condition to apply to a string value when filtering Security Hub findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#comparison CcInsight#comparison}
    */
    readonly comparison?: string;
    /**
    * Non-empty string definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: string;
}
export class ThreatIntelIndicatorValuePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ThreatIntelIndicatorValueProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ThreatIntelIndicatorValueProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class ThreatIntelIndicatorValuePropertyList extends cdktn.ComplexList {
    public internalValue? : ThreatIntelIndicatorValueProperty[] | cdktn.IResolvable

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
    public get(index: number): ThreatIntelIndicatorValuePropertyOutputReference {
        return new ThreatIntelIndicatorValuePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TitleProperty {
    /**
    * The condition to apply to a string value when filtering Security Hub findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#comparison CcInsight#comparison}
    */
    readonly comparison?: string;
    /**
    * Non-empty string definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: string;
}
export class TitlePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TitleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TitleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class TitlePropertyList extends cdktn.ComplexList {
    public internalValue? : TitleProperty[] | cdktn.IResolvable

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
    public get(index: number): TitlePropertyOutputReference {
        return new TitlePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TypeProperty {
    /**
    * The condition to apply to a string value when filtering Security Hub findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#comparison CcInsight#comparison}
    */
    readonly comparison?: string;
    /**
    * Non-empty string definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: string;
}
export class TypePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TypeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TypeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class TypePropertyList extends cdktn.ComplexList {
    public internalValue? : TypeProperty[] | cdktn.IResolvable

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
    public get(index: number): TypePropertyOutputReference {
        return new TypePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface FiltersUpdatedAtDateRangeProperty {
    /**
    * A date range unit for the date filter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#unit CcInsight#unit}
    */
    readonly unit?: string;
    /**
    * A date range value for the date filter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: number;
}
export class FiltersUpdatedAtDateRangePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FiltersUpdatedAtDateRangeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._unit !== undefined) {
            hasAnyValues = true;
            internalValueResult.unit = this._unit;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FiltersUpdatedAtDateRangeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._unit = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._unit = value.unit;
            this._value = value.value;
        }
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
}
export interface UpdatedAtProperty {
    /**
    * A date range for the date filter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#date_range CcInsight#date_range}
    */
    readonly dateRange?: FiltersUpdatedAtDateRangeProperty;
    /**
    * The date and time, in UTC and ISO 8601 format.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#end CcInsight#end}
    */
    readonly end?: string;
    /**
    * The date and time, in UTC and ISO 8601 format.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#start CcInsight#start}
    */
    readonly start?: string;
}
export class UpdatedAtPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): UpdatedAtProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dateRange?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dateRange = this._dateRange?.internalValue;
        }
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

    public set internalValue(value: UpdatedAtProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dateRange.internalValue = undefined;
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
            this._dateRange.internalValue = value.dateRange;
            this._end = value.end;
            this._start = value.start;
        }
    }

    // date_range - computed: true, optional: true, required: false
    private _dateRange = new FiltersUpdatedAtDateRangePropertyOutputReference(this, "date_range");
    public get dateRange() {
        return this._dateRange;
    }
    public putDateRange(value: FiltersUpdatedAtDateRangeProperty) {
        this._dateRange.internalValue = value;
    }
    public resetDateRange() {
        this._dateRange.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dateRangeInput() {
        return this._dateRange.internalValue;
    }

    // end - computed: true, optional: true, required: false
    private _end?: string; 
    public get end() {
        return this.getStringAttribute('end');
    }
    public set end(value: string) {
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
    private _start?: string; 
    public get start() {
        return this.getStringAttribute('start');
    }
    public set start(value: string) {
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

export class UpdatedAtPropertyList extends cdktn.ComplexList {
    public internalValue? : UpdatedAtProperty[] | cdktn.IResolvable

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
    public get(index: number): UpdatedAtPropertyOutputReference {
        return new UpdatedAtPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface UserDefinedFieldsProperty {
    /**
    * The condition to apply to the key value when filtering Security Hub findings with a map filter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#comparison CcInsight#comparison}
    */
    readonly comparison?: string;
    /**
    * Non-empty string definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#key CcInsight#key}
    */
    readonly key?: string;
    /**
    * Non-empty string definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: string;
}
export class UserDefinedFieldsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): UserDefinedFieldsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
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

    public set internalValue(value: UserDefinedFieldsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
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
            this._comparison = value.comparison;
            this._key = value.key;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class UserDefinedFieldsPropertyList extends cdktn.ComplexList {
    public internalValue? : UserDefinedFieldsProperty[] | cdktn.IResolvable

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
    public get(index: number): UserDefinedFieldsPropertyOutputReference {
        return new UserDefinedFieldsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface VerificationStateProperty {
    /**
    * The condition to apply to a string value when filtering Security Hub findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#comparison CcInsight#comparison}
    */
    readonly comparison?: string;
    /**
    * Non-empty string definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: string;
}
export class VerificationStatePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): VerificationStateProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VerificationStateProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class VerificationStatePropertyList extends cdktn.ComplexList {
    public internalValue? : VerificationStateProperty[] | cdktn.IResolvable

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
    public get(index: number): VerificationStatePropertyOutputReference {
        return new VerificationStatePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface VulnerabilitiesExploitAvailableProperty {
    /**
    * The condition to apply to a string value when filtering Security Hub findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#comparison CcInsight#comparison}
    */
    readonly comparison?: string;
    /**
    * Non-empty string definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: string;
}
export class VulnerabilitiesExploitAvailablePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): VulnerabilitiesExploitAvailableProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VulnerabilitiesExploitAvailableProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class VulnerabilitiesExploitAvailablePropertyList extends cdktn.ComplexList {
    public internalValue? : VulnerabilitiesExploitAvailableProperty[] | cdktn.IResolvable

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
    public get(index: number): VulnerabilitiesExploitAvailablePropertyOutputReference {
        return new VulnerabilitiesExploitAvailablePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface VulnerabilitiesFixAvailableProperty {
    /**
    * The condition to apply to a string value when filtering Security Hub findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#comparison CcInsight#comparison}
    */
    readonly comparison?: string;
    /**
    * Non-empty string definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: string;
}
export class VulnerabilitiesFixAvailablePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): VulnerabilitiesFixAvailableProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: VulnerabilitiesFixAvailableProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class VulnerabilitiesFixAvailablePropertyList extends cdktn.ComplexList {
    public internalValue? : VulnerabilitiesFixAvailableProperty[] | cdktn.IResolvable

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
    public get(index: number): VulnerabilitiesFixAvailablePropertyOutputReference {
        return new VulnerabilitiesFixAvailablePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface WorkflowStateProperty {
    /**
    * The condition to apply to a string value when filtering Security Hub findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#comparison CcInsight#comparison}
    */
    readonly comparison?: string;
    /**
    * Non-empty string definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: string;
}
export class WorkflowStatePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): WorkflowStateProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WorkflowStateProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class WorkflowStatePropertyList extends cdktn.ComplexList {
    public internalValue? : WorkflowStateProperty[] | cdktn.IResolvable

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
    public get(index: number): WorkflowStatePropertyOutputReference {
        return new WorkflowStatePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface WorkflowStatusProperty {
    /**
    * The condition to apply to a string value when filtering Security Hub findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#comparison CcInsight#comparison}
    */
    readonly comparison?: string;
    /**
    * Non-empty string definition.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#value CcInsight#value}
    */
    readonly value?: string;
}
export class WorkflowStatusPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): WorkflowStatusProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._comparison !== undefined) {
            hasAnyValues = true;
            internalValueResult.comparison = this._comparison;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: WorkflowStatusProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._comparison = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._comparison = value.comparison;
            this._value = value.value;
        }
    }

    // comparison - computed: true, optional: true, required: false
    private _comparison?: string; 
    public get comparison() {
        return this.getStringAttribute('comparison');
    }
    public set comparison(value: string) {
        this._comparison = value;
    }
    public resetComparison() {
        this._comparison = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get comparisonInput() {
        return this._comparison;
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

export class WorkflowStatusPropertyList extends cdktn.ComplexList {
    public internalValue? : WorkflowStatusProperty[] | cdktn.IResolvable

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
    public get(index: number): WorkflowStatusPropertyOutputReference {
        return new WorkflowStatusPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface AwsSecurityFindingFiltersProperty {
    /**
    * The AWS account ID in which a finding is generated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#aws_account_id CcInsight#aws_account_id}
    */
    readonly awsAccountId?: StringFilterProperty[] | cdktn.IResolvable;
    /**
    * The name of the AWS account in which a finding is generated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#aws_account_name CcInsight#aws_account_name}
    */
    readonly awsAccountName?: AwsAccountNameProperty[] | cdktn.IResolvable;
    /**
    * The name of the findings provider (company) that owns the solution (product) that generates findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#company_name CcInsight#company_name}
    */
    readonly companyName?: CompanyNameProperty[] | cdktn.IResolvable;
    /**
    * The unique identifier of a standard in which a control is enabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#compliance_associated_standards_id CcInsight#compliance_associated_standards_id}
    */
    readonly complianceAssociatedStandardsId?: ComplianceAssociatedStandardsIdProperty[] | cdktn.IResolvable;
    /**
    * The unique identifier of a control across standards.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#compliance_security_control_id CcInsight#compliance_security_control_id}
    */
    readonly complianceSecurityControlId?: ComplianceSecurityControlIdProperty[] | cdktn.IResolvable;
    /**
    * The name of a security control parameter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#compliance_security_control_parameters_name CcInsight#compliance_security_control_parameters_name}
    */
    readonly complianceSecurityControlParametersName?: ComplianceSecurityControlParametersNameProperty[] | cdktn.IResolvable;
    /**
    * The current value of a security control parameter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#compliance_security_control_parameters_value CcInsight#compliance_security_control_parameters_value}
    */
    readonly complianceSecurityControlParametersValue?: ComplianceSecurityControlParametersValueProperty[] | cdktn.IResolvable;
    /**
    * Exclusive to findings that are generated as the result of a check run against a specific rule in a supported standard.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#compliance_status CcInsight#compliance_status}
    */
    readonly complianceStatus?: ComplianceStatusProperty[] | cdktn.IResolvable;
    /**
    * A finding's confidence.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#confidence CcInsight#confidence}
    */
    readonly confidence?: NumberFilterProperty[] | cdktn.IResolvable;
    /**
    * An ISO8601-formatted timestamp that indicates when the security findings provider captured the potential security issue that a finding captured.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#created_at CcInsight#created_at}
    */
    readonly createdAt?: DateFilterProperty[] | cdktn.IResolvable;
    /**
    * The level of importance assigned to the resources associated with the finding.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#criticality CcInsight#criticality}
    */
    readonly criticality?: CriticalityProperty[] | cdktn.IResolvable;
    /**
    * A finding's description.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#description CcInsight#description}
    */
    readonly description?: DescriptionProperty[] | cdktn.IResolvable;
    /**
    * The finding provider value for the finding confidence.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#finding_provider_fields_confidence CcInsight#finding_provider_fields_confidence}
    */
    readonly findingProviderFieldsConfidence?: FindingProviderFieldsConfidenceProperty[] | cdktn.IResolvable;
    /**
    * The finding provider value for the level of importance assigned to the resources associated with the findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#finding_provider_fields_criticality CcInsight#finding_provider_fields_criticality}
    */
    readonly findingProviderFieldsCriticality?: FindingProviderFieldsCriticalityProperty[] | cdktn.IResolvable;
    /**
    * The finding identifier of a related finding that is identified by the finding provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#finding_provider_fields_related_findings_id CcInsight#finding_provider_fields_related_findings_id}
    */
    readonly findingProviderFieldsRelatedFindingsId?: FindingProviderFieldsRelatedFindingsIdProperty[] | cdktn.IResolvable;
    /**
    * The ARN of the solution that generated a related finding that is identified by the finding provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#finding_provider_fields_related_findings_product_arn CcInsight#finding_provider_fields_related_findings_product_arn}
    */
    readonly findingProviderFieldsRelatedFindingsProductArn?: FindingProviderFieldsRelatedFindingsProductArnProperty[] | cdktn.IResolvable;
    /**
    * The finding provider value for the severity label.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#finding_provider_fields_severity_label CcInsight#finding_provider_fields_severity_label}
    */
    readonly findingProviderFieldsSeverityLabel?: FindingProviderFieldsSeverityLabelProperty[] | cdktn.IResolvable;
    /**
    * The finding provider's original value for the severity.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#finding_provider_fields_severity_original CcInsight#finding_provider_fields_severity_original}
    */
    readonly findingProviderFieldsSeverityOriginal?: FindingProviderFieldsSeverityOriginalProperty[] | cdktn.IResolvable;
    /**
    * One or more finding types that the finding provider assigned to the finding.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#finding_provider_fields_types CcInsight#finding_provider_fields_types}
    */
    readonly findingProviderFieldsTypes?: FindingProviderFieldsTypesProperty[] | cdktn.IResolvable;
    /**
    * An ISO8601-formatted timestamp that indicates when the security findings provider first observed the potential security issue that a finding captured.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#first_observed_at CcInsight#first_observed_at}
    */
    readonly firstObservedAt?: FirstObservedAtProperty[] | cdktn.IResolvable;
    /**
    * The identifier for the solution-specific component (a discrete unit of logic) that generated a finding.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#generator_id CcInsight#generator_id}
    */
    readonly generatorId?: GeneratorIdProperty[] | cdktn.IResolvable;
    /**
    * The security findings provider-specific identifier for a finding.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#id CcInsight#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: IdProperty[] | cdktn.IResolvable;
    /**
    * A keyword for a finding.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#keyword CcInsight#keyword}
    */
    readonly keyword?: KeywordFilterProperty[] | cdktn.IResolvable;
    /**
    * An ISO8601-formatted timestamp that indicates when the security findings provider most recently observed the potential security issue that a finding captured.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#last_observed_at CcInsight#last_observed_at}
    */
    readonly lastObservedAt?: LastObservedAtProperty[] | cdktn.IResolvable;
    /**
    * The name of the malware that was observed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#malware_name CcInsight#malware_name}
    */
    readonly malwareName?: MalwareNameProperty[] | cdktn.IResolvable;
    /**
    * The filesystem path of the malware that was observed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#malware_path CcInsight#malware_path}
    */
    readonly malwarePath?: MalwarePathProperty[] | cdktn.IResolvable;
    /**
    * The state of the malware that was observed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#malware_state CcInsight#malware_state}
    */
    readonly malwareState?: MalwareStateProperty[] | cdktn.IResolvable;
    /**
    * The type of the malware that was observed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#malware_type CcInsight#malware_type}
    */
    readonly malwareType?: MalwareTypeProperty[] | cdktn.IResolvable;
    /**
    * The destination domain of network-related information about a finding.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#network_destination_domain CcInsight#network_destination_domain}
    */
    readonly networkDestinationDomain?: NetworkDestinationDomainProperty[] | cdktn.IResolvable;
    /**
    * The destination IPv4 address of network-related information about a finding.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#network_destination_ip_v4 CcInsight#network_destination_ip_v4}
    */
    readonly networkDestinationIpV4?: IpFilterProperty[] | cdktn.IResolvable;
    /**
    * The destination IPv6 address of network-related information about a finding.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#network_destination_ip_v6 CcInsight#network_destination_ip_v6}
    */
    readonly networkDestinationIpV6?: NetworkDestinationIpV6Property[] | cdktn.IResolvable;
    /**
    * The destination port of network-related information about a finding.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#network_destination_port CcInsight#network_destination_port}
    */
    readonly networkDestinationPort?: NetworkDestinationPortProperty[] | cdktn.IResolvable;
    /**
    * Indicates the direction of network traffic associated with a finding.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#network_direction CcInsight#network_direction}
    */
    readonly networkDirection?: NetworkDirectionProperty[] | cdktn.IResolvable;
    /**
    * The protocol of network-related information about a finding.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#network_protocol CcInsight#network_protocol}
    */
    readonly networkProtocol?: NetworkProtocolProperty[] | cdktn.IResolvable;
    /**
    * The source domain of network-related information about a finding.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#network_source_domain CcInsight#network_source_domain}
    */
    readonly networkSourceDomain?: NetworkSourceDomainProperty[] | cdktn.IResolvable;
    /**
    * The source IPv4 address of network-related information about a finding.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#network_source_ip_v4 CcInsight#network_source_ip_v4}
    */
    readonly networkSourceIpV4?: NetworkSourceIpV4Property[] | cdktn.IResolvable;
    /**
    * The source IPv6 address of network-related information about a finding.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#network_source_ip_v6 CcInsight#network_source_ip_v6}
    */
    readonly networkSourceIpV6?: NetworkSourceIpV6Property[] | cdktn.IResolvable;
    /**
    * The source media access control (MAC) address of network-related information about a finding.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#network_source_mac CcInsight#network_source_mac}
    */
    readonly networkSourceMac?: NetworkSourceMacProperty[] | cdktn.IResolvable;
    /**
    * The source port of network-related information about a finding.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#network_source_port CcInsight#network_source_port}
    */
    readonly networkSourcePort?: NetworkSourcePortProperty[] | cdktn.IResolvable;
    /**
    * The text of a note.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#note_text CcInsight#note_text}
    */
    readonly noteText?: NoteTextProperty[] | cdktn.IResolvable;
    /**
    * The timestamp of when the note was updated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#note_updated_at CcInsight#note_updated_at}
    */
    readonly noteUpdatedAt?: NoteUpdatedAtProperty[] | cdktn.IResolvable;
    /**
    * The principal that created a note.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#note_updated_by CcInsight#note_updated_by}
    */
    readonly noteUpdatedBy?: NoteUpdatedByProperty[] | cdktn.IResolvable;
    /**
    * A timestamp that identifies when the process was launched.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#process_launched_at CcInsight#process_launched_at}
    */
    readonly processLaunchedAt?: ProcessLaunchedAtProperty[] | cdktn.IResolvable;
    /**
    * The name of the process.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#process_name CcInsight#process_name}
    */
    readonly processName?: ProcessNameProperty[] | cdktn.IResolvable;
    /**
    * The parent process ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#process_parent_pid CcInsight#process_parent_pid}
    */
    readonly processParentPid?: ProcessParentPidProperty[] | cdktn.IResolvable;
    /**
    * The path to the process executable.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#process_path CcInsight#process_path}
    */
    readonly processPath?: ProcessPathProperty[] | cdktn.IResolvable;
    /**
    * The process ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#process_pid CcInsight#process_pid}
    */
    readonly processPid?: ProcessPidProperty[] | cdktn.IResolvable;
    /**
    * A timestamp that identifies when the process was terminated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#process_terminated_at CcInsight#process_terminated_at}
    */
    readonly processTerminatedAt?: ProcessTerminatedAtProperty[] | cdktn.IResolvable;
    /**
    * The ARN generated by Security Hub that uniquely identifies a third-party company (security findings provider) after this provider's product (solution that generates findings) is registered with Security Hub.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#product_arn CcInsight#product_arn}
    */
    readonly productArn?: ProductArnProperty[] | cdktn.IResolvable;
    /**
    * A data type where security findings providers can include additional solution-specific details that aren't part of the defined AwsSecurityFinding format.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#product_fields CcInsight#product_fields}
    */
    readonly productFields?: MapFilterProperty[] | cdktn.IResolvable;
    /**
    * The name of the solution (product) that generates findings.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#product_name CcInsight#product_name}
    */
    readonly productName?: ProductNameProperty[] | cdktn.IResolvable;
    /**
    * The recommendation of what to do about the issue described in a finding.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#recommendation_text CcInsight#recommendation_text}
    */
    readonly recommendationText?: RecommendationTextProperty[] | cdktn.IResolvable;
    /**
    * The updated record state for the finding.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#record_state CcInsight#record_state}
    */
    readonly recordState?: RecordStateProperty[] | cdktn.IResolvable;
    /**
    * The Region from which the finding was generated.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#region CcInsight#region}
    */
    readonly region?: RegionProperty[] | cdktn.IResolvable;
    /**
    * The solution-generated identifier for a related finding.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#related_findings_id CcInsight#related_findings_id}
    */
    readonly relatedFindingsId?: RelatedFindingsIdProperty[] | cdktn.IResolvable;
    /**
    * The ARN of the solution that generated a related finding.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#related_findings_product_arn CcInsight#related_findings_product_arn}
    */
    readonly relatedFindingsProductArn?: RelatedFindingsProductArnProperty[] | cdktn.IResolvable;
    /**
    * The ARN of the application that is related to a finding.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#resource_application_arn CcInsight#resource_application_arn}
    */
    readonly resourceApplicationArn?: ResourceApplicationArnProperty[] | cdktn.IResolvable;
    /**
    * The name of the application that is related to a finding.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#resource_application_name CcInsight#resource_application_name}
    */
    readonly resourceApplicationName?: ResourceApplicationNameProperty[] | cdktn.IResolvable;
    /**
    * The IAM profile ARN of the instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#resource_aws_ec_2_instance_iam_instance_profile_arn CcInsight#resource_aws_ec_2_instance_iam_instance_profile_arn}
    */
    readonly resourceAwsEc2InstanceIamInstanceProfileArn?: ResourceAwsEc2InstanceIamInstanceProfileArnProperty[] | cdktn.IResolvable;
    /**
    * The Amazon Machine Image (AMI) ID of the instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#resource_aws_ec_2_instance_image_id CcInsight#resource_aws_ec_2_instance_image_id}
    */
    readonly resourceAwsEc2InstanceImageId?: ResourceAwsEc2InstanceImageIdProperty[] | cdktn.IResolvable;
    /**
    * The IPv4 addresses associated with the instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#resource_aws_ec_2_instance_ip_v4_addresses CcInsight#resource_aws_ec_2_instance_ip_v4_addresses}
    */
    readonly resourceAwsEc2InstanceIpV4Addresses?: ResourceAwsEc2InstanceIpV4AddressesProperty[] | cdktn.IResolvable;
    /**
    * The IPv6 addresses associated with the instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#resource_aws_ec_2_instance_ip_v6_addresses CcInsight#resource_aws_ec_2_instance_ip_v6_addresses}
    */
    readonly resourceAwsEc2InstanceIpV6Addresses?: ResourceAwsEc2InstanceIpV6AddressesProperty[] | cdktn.IResolvable;
    /**
    * The key name associated with the instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#resource_aws_ec_2_instance_key_name CcInsight#resource_aws_ec_2_instance_key_name}
    */
    readonly resourceAwsEc2InstanceKeyName?: ResourceAwsEc2InstanceKeyNameProperty[] | cdktn.IResolvable;
    /**
    * The date and time the instance was launched.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#resource_aws_ec_2_instance_launched_at CcInsight#resource_aws_ec_2_instance_launched_at}
    */
    readonly resourceAwsEc2InstanceLaunchedAt?: ResourceAwsEc2InstanceLaunchedAtProperty[] | cdktn.IResolvable;
    /**
    * The identifier of the subnet that the instance was launched in.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#resource_aws_ec_2_instance_subnet_id CcInsight#resource_aws_ec_2_instance_subnet_id}
    */
    readonly resourceAwsEc2InstanceSubnetId?: ResourceAwsEc2InstanceSubnetIdProperty[] | cdktn.IResolvable;
    /**
    * The instance type of the instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#resource_aws_ec_2_instance_type CcInsight#resource_aws_ec_2_instance_type}
    */
    readonly resourceAwsEc2InstanceType?: ResourceAwsEc2InstanceTypeProperty[] | cdktn.IResolvable;
    /**
    * The identifier of the VPC that the instance was launched in.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#resource_aws_ec_2_instance_vpc_id CcInsight#resource_aws_ec_2_instance_vpc_id}
    */
    readonly resourceAwsEc2InstanceVpcId?: ResourceAwsEc2InstanceVpcIdProperty[] | cdktn.IResolvable;
    /**
    * The creation date/time of the IAM access key related to a finding.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#resource_aws_iam_access_key_created_at CcInsight#resource_aws_iam_access_key_created_at}
    */
    readonly resourceAwsIamAccessKeyCreatedAt?: ResourceAwsIamAccessKeyCreatedAtProperty[] | cdktn.IResolvable;
    /**
    * The name of the principal that is associated with an IAM access key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#resource_aws_iam_access_key_principal_name CcInsight#resource_aws_iam_access_key_principal_name}
    */
    readonly resourceAwsIamAccessKeyPrincipalName?: ResourceAwsIamAccessKeyPrincipalNameProperty[] | cdktn.IResolvable;
    /**
    * The status of the IAM access key related to a finding.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#resource_aws_iam_access_key_status CcInsight#resource_aws_iam_access_key_status}
    */
    readonly resourceAwsIamAccessKeyStatus?: ResourceAwsIamAccessKeyStatusProperty[] | cdktn.IResolvable;
    /**
    * The user associated with the IAM access key related to a finding.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#resource_aws_iam_access_key_user_name CcInsight#resource_aws_iam_access_key_user_name}
    */
    readonly resourceAwsIamAccessKeyUserName?: ResourceAwsIamAccessKeyUserNameProperty[] | cdktn.IResolvable;
    /**
    * The name of an IAM user.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#resource_aws_iam_user_user_name CcInsight#resource_aws_iam_user_user_name}
    */
    readonly resourceAwsIamUserUserName?: ResourceAwsIamUserUserNameProperty[] | cdktn.IResolvable;
    /**
    * The canonical user ID of the owner of the S3 bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#resource_aws_s3_bucket_owner_id CcInsight#resource_aws_s3_bucket_owner_id}
    */
    readonly resourceAwsS3BucketOwnerId?: ResourceAwsS3BucketOwnerIdProperty[] | cdktn.IResolvable;
    /**
    * The display name of the owner of the S3 bucket.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#resource_aws_s3_bucket_owner_name CcInsight#resource_aws_s3_bucket_owner_name}
    */
    readonly resourceAwsS3BucketOwnerName?: ResourceAwsS3BucketOwnerNameProperty[] | cdktn.IResolvable;
    /**
    * The identifier of the image related to a finding.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#resource_container_image_id CcInsight#resource_container_image_id}
    */
    readonly resourceContainerImageId?: ResourceContainerImageIdProperty[] | cdktn.IResolvable;
    /**
    * The name of the image related to a finding.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#resource_container_image_name CcInsight#resource_container_image_name}
    */
    readonly resourceContainerImageName?: ResourceContainerImageNameProperty[] | cdktn.IResolvable;
    /**
    * A timestamp that identifies when the container was started.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#resource_container_launched_at CcInsight#resource_container_launched_at}
    */
    readonly resourceContainerLaunchedAt?: ResourceContainerLaunchedAtProperty[] | cdktn.IResolvable;
    /**
    * The name of the container related to a finding.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#resource_container_name CcInsight#resource_container_name}
    */
    readonly resourceContainerName?: ResourceContainerNameProperty[] | cdktn.IResolvable;
    /**
    * The details of a resource that doesn't have a specific subfield for the resource type defined.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#resource_details_other CcInsight#resource_details_other}
    */
    readonly resourceDetailsOther?: ResourceDetailsOtherProperty[] | cdktn.IResolvable;
    /**
    * The canonical identifier for the given resource type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#resource_id CcInsight#resource_id}
    */
    readonly resourceId?: ResourceIdProperty[] | cdktn.IResolvable;
    /**
    * The canonical AWS partition name that the Region is assigned to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#resource_partition CcInsight#resource_partition}
    */
    readonly resourcePartition?: ResourcePartitionProperty[] | cdktn.IResolvable;
    /**
    * The canonical AWS external Region name where this resource is located.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#resource_region CcInsight#resource_region}
    */
    readonly resourceRegion?: ResourceRegionProperty[] | cdktn.IResolvable;
    /**
    * A list of AWS tags associated with a resource at the time the finding was processed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#resource_tags CcInsight#resource_tags}
    */
    readonly resourceTags?: ResourceTagsProperty[] | cdktn.IResolvable;
    /**
    * Specifies the type of the resource that details are provided for.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#resource_type CcInsight#resource_type}
    */
    readonly resourceType?: ResourceTypeProperty[] | cdktn.IResolvable;
    /**
    * Indicates whether or not sample findings are included in the filter results.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#sample CcInsight#sample}
    */
    readonly sample?: BooleanFilterProperty[] | cdktn.IResolvable;
    /**
    * The label of a finding's severity.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#severity_label CcInsight#severity_label}
    */
    readonly severityLabel?: SeverityLabelProperty[] | cdktn.IResolvable;
    /**
    * The normalized severity of a finding.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#severity_normalized CcInsight#severity_normalized}
    */
    readonly severityNormalized?: SeverityNormalizedProperty[] | cdktn.IResolvable;
    /**
    * The native severity as defined by the security findings provider's solution that generated the finding.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#severity_product CcInsight#severity_product}
    */
    readonly severityProduct?: SeverityProductProperty[] | cdktn.IResolvable;
    /**
    * A URL that links to a page about the current finding in the security findings provider's solution.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#source_url CcInsight#source_url}
    */
    readonly sourceUrl?: SourceUrlProperty[] | cdktn.IResolvable;
    /**
    * The category of a threat intelligence indicator.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#threat_intel_indicator_category CcInsight#threat_intel_indicator_category}
    */
    readonly threatIntelIndicatorCategory?: ThreatIntelIndicatorCategoryProperty[] | cdktn.IResolvable;
    /**
    * A timestamp that identifies the last observation of a threat intelligence indicator.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#threat_intel_indicator_last_observed_at CcInsight#threat_intel_indicator_last_observed_at}
    */
    readonly threatIntelIndicatorLastObservedAt?: ThreatIntelIndicatorLastObservedAtProperty[] | cdktn.IResolvable;
    /**
    * The source of the threat intelligence.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#threat_intel_indicator_source CcInsight#threat_intel_indicator_source}
    */
    readonly threatIntelIndicatorSource?: ThreatIntelIndicatorSourceProperty[] | cdktn.IResolvable;
    /**
    * The URL for more details from the source of the threat intelligence.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#threat_intel_indicator_source_url CcInsight#threat_intel_indicator_source_url}
    */
    readonly threatIntelIndicatorSourceUrl?: ThreatIntelIndicatorSourceUrlProperty[] | cdktn.IResolvable;
    /**
    * The type of a threat intelligence indicator.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#threat_intel_indicator_type CcInsight#threat_intel_indicator_type}
    */
    readonly threatIntelIndicatorType?: ThreatIntelIndicatorTypeProperty[] | cdktn.IResolvable;
    /**
    * The value of a threat intelligence indicator.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#threat_intel_indicator_value CcInsight#threat_intel_indicator_value}
    */
    readonly threatIntelIndicatorValue?: ThreatIntelIndicatorValueProperty[] | cdktn.IResolvable;
    /**
    * A finding's title.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#title CcInsight#title}
    */
    readonly title?: TitleProperty[] | cdktn.IResolvable;
    /**
    * A finding type in the format of namespace/category/classifier that classifies a finding.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#type CcInsight#type}
    */
    readonly type?: TypeProperty[] | cdktn.IResolvable;
    /**
    * An ISO8601-formatted timestamp that indicates when the security findings provider last updated the finding record.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#updated_at CcInsight#updated_at}
    */
    readonly updatedAt?: UpdatedAtProperty[] | cdktn.IResolvable;
    /**
    * A list of name/value string pairs associated with the finding.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#user_defined_fields CcInsight#user_defined_fields}
    */
    readonly userDefinedFields?: UserDefinedFieldsProperty[] | cdktn.IResolvable;
    /**
    * The veracity of a finding.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#verification_state CcInsight#verification_state}
    */
    readonly verificationState?: VerificationStateProperty[] | cdktn.IResolvable;
    /**
    * Indicates whether a software vulnerability in your environment has a known exploit.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#vulnerabilities_exploit_available CcInsight#vulnerabilities_exploit_available}
    */
    readonly vulnerabilitiesExploitAvailable?: VulnerabilitiesExploitAvailableProperty[] | cdktn.IResolvable;
    /**
    * Indicates whether a vulnerability is fixed in a newer version of the affected software packages.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#vulnerabilities_fix_available CcInsight#vulnerabilities_fix_available}
    */
    readonly vulnerabilitiesFixAvailable?: VulnerabilitiesFixAvailableProperty[] | cdktn.IResolvable;
    /**
    * The workflow state of a finding.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#workflow_state CcInsight#workflow_state}
    */
    readonly workflowState?: WorkflowStateProperty[] | cdktn.IResolvable;
    /**
    * The status of the investigation into a finding.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_insight#workflow_status CcInsight#workflow_status}
    */
    readonly workflowStatus?: WorkflowStatusProperty[] | cdktn.IResolvable;
}
export class AwsSecurityFindingFiltersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AwsSecurityFindingFiltersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._awsAccountId?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.awsAccountId = this._awsAccountId?.internalValue;
        }
        if (this._awsAccountName?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.awsAccountName = this._awsAccountName?.internalValue;
        }
        if (this._companyName?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.companyName = this._companyName?.internalValue;
        }
        if (this._complianceAssociatedStandardsId?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.complianceAssociatedStandardsId = this._complianceAssociatedStandardsId?.internalValue;
        }
        if (this._complianceSecurityControlId?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.complianceSecurityControlId = this._complianceSecurityControlId?.internalValue;
        }
        if (this._complianceSecurityControlParametersName?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.complianceSecurityControlParametersName = this._complianceSecurityControlParametersName?.internalValue;
        }
        if (this._complianceSecurityControlParametersValue?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.complianceSecurityControlParametersValue = this._complianceSecurityControlParametersValue?.internalValue;
        }
        if (this._complianceStatus?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.complianceStatus = this._complianceStatus?.internalValue;
        }
        if (this._confidence?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.confidence = this._confidence?.internalValue;
        }
        if (this._createdAt?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.createdAt = this._createdAt?.internalValue;
        }
        if (this._criticality?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.criticality = this._criticality?.internalValue;
        }
        if (this._description?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description?.internalValue;
        }
        if (this._findingProviderFieldsConfidence?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.findingProviderFieldsConfidence = this._findingProviderFieldsConfidence?.internalValue;
        }
        if (this._findingProviderFieldsCriticality?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.findingProviderFieldsCriticality = this._findingProviderFieldsCriticality?.internalValue;
        }
        if (this._findingProviderFieldsRelatedFindingsId?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.findingProviderFieldsRelatedFindingsId = this._findingProviderFieldsRelatedFindingsId?.internalValue;
        }
        if (this._findingProviderFieldsRelatedFindingsProductArn?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.findingProviderFieldsRelatedFindingsProductArn = this._findingProviderFieldsRelatedFindingsProductArn?.internalValue;
        }
        if (this._findingProviderFieldsSeverityLabel?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.findingProviderFieldsSeverityLabel = this._findingProviderFieldsSeverityLabel?.internalValue;
        }
        if (this._findingProviderFieldsSeverityOriginal?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.findingProviderFieldsSeverityOriginal = this._findingProviderFieldsSeverityOriginal?.internalValue;
        }
        if (this._findingProviderFieldsTypes?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.findingProviderFieldsTypes = this._findingProviderFieldsTypes?.internalValue;
        }
        if (this._firstObservedAt?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.firstObservedAt = this._firstObservedAt?.internalValue;
        }
        if (this._generatorId?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.generatorId = this._generatorId?.internalValue;
        }
        if (this._id?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.id = this._id?.internalValue;
        }
        if (this._keyword?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.keyword = this._keyword?.internalValue;
        }
        if (this._lastObservedAt?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.lastObservedAt = this._lastObservedAt?.internalValue;
        }
        if (this._malwareName?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.malwareName = this._malwareName?.internalValue;
        }
        if (this._malwarePath?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.malwarePath = this._malwarePath?.internalValue;
        }
        if (this._malwareState?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.malwareState = this._malwareState?.internalValue;
        }
        if (this._malwareType?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.malwareType = this._malwareType?.internalValue;
        }
        if (this._networkDestinationDomain?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.networkDestinationDomain = this._networkDestinationDomain?.internalValue;
        }
        if (this._networkDestinationIpV4?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.networkDestinationIpV4 = this._networkDestinationIpV4?.internalValue;
        }
        if (this._networkDestinationIpV6?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.networkDestinationIpV6 = this._networkDestinationIpV6?.internalValue;
        }
        if (this._networkDestinationPort?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.networkDestinationPort = this._networkDestinationPort?.internalValue;
        }
        if (this._networkDirection?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.networkDirection = this._networkDirection?.internalValue;
        }
        if (this._networkProtocol?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.networkProtocol = this._networkProtocol?.internalValue;
        }
        if (this._networkSourceDomain?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.networkSourceDomain = this._networkSourceDomain?.internalValue;
        }
        if (this._networkSourceIpV4?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.networkSourceIpV4 = this._networkSourceIpV4?.internalValue;
        }
        if (this._networkSourceIpV6?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.networkSourceIpV6 = this._networkSourceIpV6?.internalValue;
        }
        if (this._networkSourceMac?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.networkSourceMac = this._networkSourceMac?.internalValue;
        }
        if (this._networkSourcePort?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.networkSourcePort = this._networkSourcePort?.internalValue;
        }
        if (this._noteText?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.noteText = this._noteText?.internalValue;
        }
        if (this._noteUpdatedAt?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.noteUpdatedAt = this._noteUpdatedAt?.internalValue;
        }
        if (this._noteUpdatedBy?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.noteUpdatedBy = this._noteUpdatedBy?.internalValue;
        }
        if (this._processLaunchedAt?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.processLaunchedAt = this._processLaunchedAt?.internalValue;
        }
        if (this._processName?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.processName = this._processName?.internalValue;
        }
        if (this._processParentPid?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.processParentPid = this._processParentPid?.internalValue;
        }
        if (this._processPath?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.processPath = this._processPath?.internalValue;
        }
        if (this._processPid?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.processPid = this._processPid?.internalValue;
        }
        if (this._processTerminatedAt?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.processTerminatedAt = this._processTerminatedAt?.internalValue;
        }
        if (this._productArn?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.productArn = this._productArn?.internalValue;
        }
        if (this._productFields?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.productFields = this._productFields?.internalValue;
        }
        if (this._productName?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.productName = this._productName?.internalValue;
        }
        if (this._recommendationText?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.recommendationText = this._recommendationText?.internalValue;
        }
        if (this._recordState?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.recordState = this._recordState?.internalValue;
        }
        if (this._region?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.region = this._region?.internalValue;
        }
        if (this._relatedFindingsId?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.relatedFindingsId = this._relatedFindingsId?.internalValue;
        }
        if (this._relatedFindingsProductArn?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.relatedFindingsProductArn = this._relatedFindingsProductArn?.internalValue;
        }
        if (this._resourceApplicationArn?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceApplicationArn = this._resourceApplicationArn?.internalValue;
        }
        if (this._resourceApplicationName?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceApplicationName = this._resourceApplicationName?.internalValue;
        }
        if (this._resourceAwsEc2InstanceIamInstanceProfileArn?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceAwsEc2InstanceIamInstanceProfileArn = this._resourceAwsEc2InstanceIamInstanceProfileArn?.internalValue;
        }
        if (this._resourceAwsEc2InstanceImageId?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceAwsEc2InstanceImageId = this._resourceAwsEc2InstanceImageId?.internalValue;
        }
        if (this._resourceAwsEc2InstanceIpV4Addresses?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceAwsEc2InstanceIpV4Addresses = this._resourceAwsEc2InstanceIpV4Addresses?.internalValue;
        }
        if (this._resourceAwsEc2InstanceIpV6Addresses?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceAwsEc2InstanceIpV6Addresses = this._resourceAwsEc2InstanceIpV6Addresses?.internalValue;
        }
        if (this._resourceAwsEc2InstanceKeyName?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceAwsEc2InstanceKeyName = this._resourceAwsEc2InstanceKeyName?.internalValue;
        }
        if (this._resourceAwsEc2InstanceLaunchedAt?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceAwsEc2InstanceLaunchedAt = this._resourceAwsEc2InstanceLaunchedAt?.internalValue;
        }
        if (this._resourceAwsEc2InstanceSubnetId?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceAwsEc2InstanceSubnetId = this._resourceAwsEc2InstanceSubnetId?.internalValue;
        }
        if (this._resourceAwsEc2InstanceType?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceAwsEc2InstanceType = this._resourceAwsEc2InstanceType?.internalValue;
        }
        if (this._resourceAwsEc2InstanceVpcId?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceAwsEc2InstanceVpcId = this._resourceAwsEc2InstanceVpcId?.internalValue;
        }
        if (this._resourceAwsIamAccessKeyCreatedAt?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceAwsIamAccessKeyCreatedAt = this._resourceAwsIamAccessKeyCreatedAt?.internalValue;
        }
        if (this._resourceAwsIamAccessKeyPrincipalName?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceAwsIamAccessKeyPrincipalName = this._resourceAwsIamAccessKeyPrincipalName?.internalValue;
        }
        if (this._resourceAwsIamAccessKeyStatus?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceAwsIamAccessKeyStatus = this._resourceAwsIamAccessKeyStatus?.internalValue;
        }
        if (this._resourceAwsIamAccessKeyUserName?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceAwsIamAccessKeyUserName = this._resourceAwsIamAccessKeyUserName?.internalValue;
        }
        if (this._resourceAwsIamUserUserName?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceAwsIamUserUserName = this._resourceAwsIamUserUserName?.internalValue;
        }
        if (this._resourceAwsS3BucketOwnerId?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceAwsS3BucketOwnerId = this._resourceAwsS3BucketOwnerId?.internalValue;
        }
        if (this._resourceAwsS3BucketOwnerName?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceAwsS3BucketOwnerName = this._resourceAwsS3BucketOwnerName?.internalValue;
        }
        if (this._resourceContainerImageId?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceContainerImageId = this._resourceContainerImageId?.internalValue;
        }
        if (this._resourceContainerImageName?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceContainerImageName = this._resourceContainerImageName?.internalValue;
        }
        if (this._resourceContainerLaunchedAt?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceContainerLaunchedAt = this._resourceContainerLaunchedAt?.internalValue;
        }
        if (this._resourceContainerName?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceContainerName = this._resourceContainerName?.internalValue;
        }
        if (this._resourceDetailsOther?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceDetailsOther = this._resourceDetailsOther?.internalValue;
        }
        if (this._resourceId?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceId = this._resourceId?.internalValue;
        }
        if (this._resourcePartition?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourcePartition = this._resourcePartition?.internalValue;
        }
        if (this._resourceRegion?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceRegion = this._resourceRegion?.internalValue;
        }
        if (this._resourceTags?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceTags = this._resourceTags?.internalValue;
        }
        if (this._resourceType?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceType = this._resourceType?.internalValue;
        }
        if (this._sample?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sample = this._sample?.internalValue;
        }
        if (this._severityLabel?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.severityLabel = this._severityLabel?.internalValue;
        }
        if (this._severityNormalized?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.severityNormalized = this._severityNormalized?.internalValue;
        }
        if (this._severityProduct?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.severityProduct = this._severityProduct?.internalValue;
        }
        if (this._sourceUrl?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceUrl = this._sourceUrl?.internalValue;
        }
        if (this._threatIntelIndicatorCategory?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.threatIntelIndicatorCategory = this._threatIntelIndicatorCategory?.internalValue;
        }
        if (this._threatIntelIndicatorLastObservedAt?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.threatIntelIndicatorLastObservedAt = this._threatIntelIndicatorLastObservedAt?.internalValue;
        }
        if (this._threatIntelIndicatorSource?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.threatIntelIndicatorSource = this._threatIntelIndicatorSource?.internalValue;
        }
        if (this._threatIntelIndicatorSourceUrl?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.threatIntelIndicatorSourceUrl = this._threatIntelIndicatorSourceUrl?.internalValue;
        }
        if (this._threatIntelIndicatorType?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.threatIntelIndicatorType = this._threatIntelIndicatorType?.internalValue;
        }
        if (this._threatIntelIndicatorValue?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.threatIntelIndicatorValue = this._threatIntelIndicatorValue?.internalValue;
        }
        if (this._title?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.title = this._title?.internalValue;
        }
        if (this._type?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type?.internalValue;
        }
        if (this._updatedAt?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.updatedAt = this._updatedAt?.internalValue;
        }
        if (this._userDefinedFields?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.userDefinedFields = this._userDefinedFields?.internalValue;
        }
        if (this._verificationState?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.verificationState = this._verificationState?.internalValue;
        }
        if (this._vulnerabilitiesExploitAvailable?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.vulnerabilitiesExploitAvailable = this._vulnerabilitiesExploitAvailable?.internalValue;
        }
        if (this._vulnerabilitiesFixAvailable?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.vulnerabilitiesFixAvailable = this._vulnerabilitiesFixAvailable?.internalValue;
        }
        if (this._workflowState?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.workflowState = this._workflowState?.internalValue;
        }
        if (this._workflowStatus?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.workflowStatus = this._workflowStatus?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AwsSecurityFindingFiltersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._awsAccountId.internalValue = undefined;
            this._awsAccountName.internalValue = undefined;
            this._companyName.internalValue = undefined;
            this._complianceAssociatedStandardsId.internalValue = undefined;
            this._complianceSecurityControlId.internalValue = undefined;
            this._complianceSecurityControlParametersName.internalValue = undefined;
            this._complianceSecurityControlParametersValue.internalValue = undefined;
            this._complianceStatus.internalValue = undefined;
            this._confidence.internalValue = undefined;
            this._createdAt.internalValue = undefined;
            this._criticality.internalValue = undefined;
            this._description.internalValue = undefined;
            this._findingProviderFieldsConfidence.internalValue = undefined;
            this._findingProviderFieldsCriticality.internalValue = undefined;
            this._findingProviderFieldsRelatedFindingsId.internalValue = undefined;
            this._findingProviderFieldsRelatedFindingsProductArn.internalValue = undefined;
            this._findingProviderFieldsSeverityLabel.internalValue = undefined;
            this._findingProviderFieldsSeverityOriginal.internalValue = undefined;
            this._findingProviderFieldsTypes.internalValue = undefined;
            this._firstObservedAt.internalValue = undefined;
            this._generatorId.internalValue = undefined;
            this._id.internalValue = undefined;
            this._keyword.internalValue = undefined;
            this._lastObservedAt.internalValue = undefined;
            this._malwareName.internalValue = undefined;
            this._malwarePath.internalValue = undefined;
            this._malwareState.internalValue = undefined;
            this._malwareType.internalValue = undefined;
            this._networkDestinationDomain.internalValue = undefined;
            this._networkDestinationIpV4.internalValue = undefined;
            this._networkDestinationIpV6.internalValue = undefined;
            this._networkDestinationPort.internalValue = undefined;
            this._networkDirection.internalValue = undefined;
            this._networkProtocol.internalValue = undefined;
            this._networkSourceDomain.internalValue = undefined;
            this._networkSourceIpV4.internalValue = undefined;
            this._networkSourceIpV6.internalValue = undefined;
            this._networkSourceMac.internalValue = undefined;
            this._networkSourcePort.internalValue = undefined;
            this._noteText.internalValue = undefined;
            this._noteUpdatedAt.internalValue = undefined;
            this._noteUpdatedBy.internalValue = undefined;
            this._processLaunchedAt.internalValue = undefined;
            this._processName.internalValue = undefined;
            this._processParentPid.internalValue = undefined;
            this._processPath.internalValue = undefined;
            this._processPid.internalValue = undefined;
            this._processTerminatedAt.internalValue = undefined;
            this._productArn.internalValue = undefined;
            this._productFields.internalValue = undefined;
            this._productName.internalValue = undefined;
            this._recommendationText.internalValue = undefined;
            this._recordState.internalValue = undefined;
            this._region.internalValue = undefined;
            this._relatedFindingsId.internalValue = undefined;
            this._relatedFindingsProductArn.internalValue = undefined;
            this._resourceApplicationArn.internalValue = undefined;
            this._resourceApplicationName.internalValue = undefined;
            this._resourceAwsEc2InstanceIamInstanceProfileArn.internalValue = undefined;
            this._resourceAwsEc2InstanceImageId.internalValue = undefined;
            this._resourceAwsEc2InstanceIpV4Addresses.internalValue = undefined;
            this._resourceAwsEc2InstanceIpV6Addresses.internalValue = undefined;
            this._resourceAwsEc2InstanceKeyName.internalValue = undefined;
            this._resourceAwsEc2InstanceLaunchedAt.internalValue = undefined;
            this._resourceAwsEc2InstanceSubnetId.internalValue = undefined;
            this._resourceAwsEc2InstanceType.internalValue = undefined;
            this._resourceAwsEc2InstanceVpcId.internalValue = undefined;
            this._resourceAwsIamAccessKeyCreatedAt.internalValue = undefined;
            this._resourceAwsIamAccessKeyPrincipalName.internalValue = undefined;
            this._resourceAwsIamAccessKeyStatus.internalValue = undefined;
            this._resourceAwsIamAccessKeyUserName.internalValue = undefined;
            this._resourceAwsIamUserUserName.internalValue = undefined;
            this._resourceAwsS3BucketOwnerId.internalValue = undefined;
            this._resourceAwsS3BucketOwnerName.internalValue = undefined;
            this._resourceContainerImageId.internalValue = undefined;
            this._resourceContainerImageName.internalValue = undefined;
            this._resourceContainerLaunchedAt.internalValue = undefined;
            this._resourceContainerName.internalValue = undefined;
            this._resourceDetailsOther.internalValue = undefined;
            this._resourceId.internalValue = undefined;
            this._resourcePartition.internalValue = undefined;
            this._resourceRegion.internalValue = undefined;
            this._resourceTags.internalValue = undefined;
            this._resourceType.internalValue = undefined;
            this._sample.internalValue = undefined;
            this._severityLabel.internalValue = undefined;
            this._severityNormalized.internalValue = undefined;
            this._severityProduct.internalValue = undefined;
            this._sourceUrl.internalValue = undefined;
            this._threatIntelIndicatorCategory.internalValue = undefined;
            this._threatIntelIndicatorLastObservedAt.internalValue = undefined;
            this._threatIntelIndicatorSource.internalValue = undefined;
            this._threatIntelIndicatorSourceUrl.internalValue = undefined;
            this._threatIntelIndicatorType.internalValue = undefined;
            this._threatIntelIndicatorValue.internalValue = undefined;
            this._title.internalValue = undefined;
            this._type.internalValue = undefined;
            this._updatedAt.internalValue = undefined;
            this._userDefinedFields.internalValue = undefined;
            this._verificationState.internalValue = undefined;
            this._vulnerabilitiesExploitAvailable.internalValue = undefined;
            this._vulnerabilitiesFixAvailable.internalValue = undefined;
            this._workflowState.internalValue = undefined;
            this._workflowStatus.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._awsAccountId.internalValue = value.awsAccountId;
            this._awsAccountName.internalValue = value.awsAccountName;
            this._companyName.internalValue = value.companyName;
            this._complianceAssociatedStandardsId.internalValue = value.complianceAssociatedStandardsId;
            this._complianceSecurityControlId.internalValue = value.complianceSecurityControlId;
            this._complianceSecurityControlParametersName.internalValue = value.complianceSecurityControlParametersName;
            this._complianceSecurityControlParametersValue.internalValue = value.complianceSecurityControlParametersValue;
            this._complianceStatus.internalValue = value.complianceStatus;
            this._confidence.internalValue = value.confidence;
            this._createdAt.internalValue = value.createdAt;
            this._criticality.internalValue = value.criticality;
            this._description.internalValue = value.description;
            this._findingProviderFieldsConfidence.internalValue = value.findingProviderFieldsConfidence;
            this._findingProviderFieldsCriticality.internalValue = value.findingProviderFieldsCriticality;
            this._findingProviderFieldsRelatedFindingsId.internalValue = value.findingProviderFieldsRelatedFindingsId;
            this._findingProviderFieldsRelatedFindingsProductArn.internalValue = value.findingProviderFieldsRelatedFindingsProductArn;
            this._findingProviderFieldsSeverityLabel.internalValue = value.findingProviderFieldsSeverityLabel;
            this._findingProviderFieldsSeverityOriginal.internalValue = value.findingProviderFieldsSeverityOriginal;
            this._findingProviderFieldsTypes.internalValue = value.findingProviderFieldsTypes;
            this._firstObservedAt.internalValue = value.firstObservedAt;
            this._generatorId.internalValue = value.generatorId;
            this._id.internalValue = value.id;
            this._keyword.internalValue = value.keyword;
            this._lastObservedAt.internalValue = value.lastObservedAt;
            this._malwareName.internalValue = value.malwareName;
            this._malwarePath.internalValue = value.malwarePath;
            this._malwareState.internalValue = value.malwareState;
            this._malwareType.internalValue = value.malwareType;
            this._networkDestinationDomain.internalValue = value.networkDestinationDomain;
            this._networkDestinationIpV4.internalValue = value.networkDestinationIpV4;
            this._networkDestinationIpV6.internalValue = value.networkDestinationIpV6;
            this._networkDestinationPort.internalValue = value.networkDestinationPort;
            this._networkDirection.internalValue = value.networkDirection;
            this._networkProtocol.internalValue = value.networkProtocol;
            this._networkSourceDomain.internalValue = value.networkSourceDomain;
            this._networkSourceIpV4.internalValue = value.networkSourceIpV4;
            this._networkSourceIpV6.internalValue = value.networkSourceIpV6;
            this._networkSourceMac.internalValue = value.networkSourceMac;
            this._networkSourcePort.internalValue = value.networkSourcePort;
            this._noteText.internalValue = value.noteText;
            this._noteUpdatedAt.internalValue = value.noteUpdatedAt;
            this._noteUpdatedBy.internalValue = value.noteUpdatedBy;
            this._processLaunchedAt.internalValue = value.processLaunchedAt;
            this._processName.internalValue = value.processName;
            this._processParentPid.internalValue = value.processParentPid;
            this._processPath.internalValue = value.processPath;
            this._processPid.internalValue = value.processPid;
            this._processTerminatedAt.internalValue = value.processTerminatedAt;
            this._productArn.internalValue = value.productArn;
            this._productFields.internalValue = value.productFields;
            this._productName.internalValue = value.productName;
            this._recommendationText.internalValue = value.recommendationText;
            this._recordState.internalValue = value.recordState;
            this._region.internalValue = value.region;
            this._relatedFindingsId.internalValue = value.relatedFindingsId;
            this._relatedFindingsProductArn.internalValue = value.relatedFindingsProductArn;
            this._resourceApplicationArn.internalValue = value.resourceApplicationArn;
            this._resourceApplicationName.internalValue = value.resourceApplicationName;
            this._resourceAwsEc2InstanceIamInstanceProfileArn.internalValue = value.resourceAwsEc2InstanceIamInstanceProfileArn;
            this._resourceAwsEc2InstanceImageId.internalValue = value.resourceAwsEc2InstanceImageId;
            this._resourceAwsEc2InstanceIpV4Addresses.internalValue = value.resourceAwsEc2InstanceIpV4Addresses;
            this._resourceAwsEc2InstanceIpV6Addresses.internalValue = value.resourceAwsEc2InstanceIpV6Addresses;
            this._resourceAwsEc2InstanceKeyName.internalValue = value.resourceAwsEc2InstanceKeyName;
            this._resourceAwsEc2InstanceLaunchedAt.internalValue = value.resourceAwsEc2InstanceLaunchedAt;
            this._resourceAwsEc2InstanceSubnetId.internalValue = value.resourceAwsEc2InstanceSubnetId;
            this._resourceAwsEc2InstanceType.internalValue = value.resourceAwsEc2InstanceType;
            this._resourceAwsEc2InstanceVpcId.internalValue = value.resourceAwsEc2InstanceVpcId;
            this._resourceAwsIamAccessKeyCreatedAt.internalValue = value.resourceAwsIamAccessKeyCreatedAt;
            this._resourceAwsIamAccessKeyPrincipalName.internalValue = value.resourceAwsIamAccessKeyPrincipalName;
            this._resourceAwsIamAccessKeyStatus.internalValue = value.resourceAwsIamAccessKeyStatus;
            this._resourceAwsIamAccessKeyUserName.internalValue = value.resourceAwsIamAccessKeyUserName;
            this._resourceAwsIamUserUserName.internalValue = value.resourceAwsIamUserUserName;
            this._resourceAwsS3BucketOwnerId.internalValue = value.resourceAwsS3BucketOwnerId;
            this._resourceAwsS3BucketOwnerName.internalValue = value.resourceAwsS3BucketOwnerName;
            this._resourceContainerImageId.internalValue = value.resourceContainerImageId;
            this._resourceContainerImageName.internalValue = value.resourceContainerImageName;
            this._resourceContainerLaunchedAt.internalValue = value.resourceContainerLaunchedAt;
            this._resourceContainerName.internalValue = value.resourceContainerName;
            this._resourceDetailsOther.internalValue = value.resourceDetailsOther;
            this._resourceId.internalValue = value.resourceId;
            this._resourcePartition.internalValue = value.resourcePartition;
            this._resourceRegion.internalValue = value.resourceRegion;
            this._resourceTags.internalValue = value.resourceTags;
            this._resourceType.internalValue = value.resourceType;
            this._sample.internalValue = value.sample;
            this._severityLabel.internalValue = value.severityLabel;
            this._severityNormalized.internalValue = value.severityNormalized;
            this._severityProduct.internalValue = value.severityProduct;
            this._sourceUrl.internalValue = value.sourceUrl;
            this._threatIntelIndicatorCategory.internalValue = value.threatIntelIndicatorCategory;
            this._threatIntelIndicatorLastObservedAt.internalValue = value.threatIntelIndicatorLastObservedAt;
            this._threatIntelIndicatorSource.internalValue = value.threatIntelIndicatorSource;
            this._threatIntelIndicatorSourceUrl.internalValue = value.threatIntelIndicatorSourceUrl;
            this._threatIntelIndicatorType.internalValue = value.threatIntelIndicatorType;
            this._threatIntelIndicatorValue.internalValue = value.threatIntelIndicatorValue;
            this._title.internalValue = value.title;
            this._type.internalValue = value.type;
            this._updatedAt.internalValue = value.updatedAt;
            this._userDefinedFields.internalValue = value.userDefinedFields;
            this._verificationState.internalValue = value.verificationState;
            this._vulnerabilitiesExploitAvailable.internalValue = value.vulnerabilitiesExploitAvailable;
            this._vulnerabilitiesFixAvailable.internalValue = value.vulnerabilitiesFixAvailable;
            this._workflowState.internalValue = value.workflowState;
            this._workflowStatus.internalValue = value.workflowStatus;
        }
    }

    // aws_account_id - computed: true, optional: true, required: false
    private _awsAccountId = new StringFilterPropertyList(this, "aws_account_id", false);
    public get awsAccountId() {
        return this._awsAccountId;
    }
    public putAwsAccountId(value: StringFilterProperty[] | cdktn.IResolvable) {
        this._awsAccountId.internalValue = value;
    }
    public resetAwsAccountId() {
        this._awsAccountId.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get awsAccountIdInput() {
        return this._awsAccountId.internalValue;
    }

    // aws_account_name - computed: true, optional: true, required: false
    private _awsAccountName = new AwsAccountNamePropertyList(this, "aws_account_name", false);
    public get awsAccountName() {
        return this._awsAccountName;
    }
    public putAwsAccountName(value: AwsAccountNameProperty[] | cdktn.IResolvable) {
        this._awsAccountName.internalValue = value;
    }
    public resetAwsAccountName() {
        this._awsAccountName.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get awsAccountNameInput() {
        return this._awsAccountName.internalValue;
    }

    // company_name - computed: true, optional: true, required: false
    private _companyName = new CompanyNamePropertyList(this, "company_name", false);
    public get companyName() {
        return this._companyName;
    }
    public putCompanyName(value: CompanyNameProperty[] | cdktn.IResolvable) {
        this._companyName.internalValue = value;
    }
    public resetCompanyName() {
        this._companyName.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get companyNameInput() {
        return this._companyName.internalValue;
    }

    // compliance_associated_standards_id - computed: true, optional: true, required: false
    private _complianceAssociatedStandardsId = new ComplianceAssociatedStandardsIdPropertyList(this, "compliance_associated_standards_id", false);
    public get complianceAssociatedStandardsId() {
        return this._complianceAssociatedStandardsId;
    }
    public putComplianceAssociatedStandardsId(value: ComplianceAssociatedStandardsIdProperty[] | cdktn.IResolvable) {
        this._complianceAssociatedStandardsId.internalValue = value;
    }
    public resetComplianceAssociatedStandardsId() {
        this._complianceAssociatedStandardsId.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get complianceAssociatedStandardsIdInput() {
        return this._complianceAssociatedStandardsId.internalValue;
    }

    // compliance_security_control_id - computed: true, optional: true, required: false
    private _complianceSecurityControlId = new ComplianceSecurityControlIdPropertyList(this, "compliance_security_control_id", false);
    public get complianceSecurityControlId() {
        return this._complianceSecurityControlId;
    }
    public putComplianceSecurityControlId(value: ComplianceSecurityControlIdProperty[] | cdktn.IResolvable) {
        this._complianceSecurityControlId.internalValue = value;
    }
    public resetComplianceSecurityControlId() {
        this._complianceSecurityControlId.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get complianceSecurityControlIdInput() {
        return this._complianceSecurityControlId.internalValue;
    }

    // compliance_security_control_parameters_name - computed: true, optional: true, required: false
    private _complianceSecurityControlParametersName = new ComplianceSecurityControlParametersNamePropertyList(this, "compliance_security_control_parameters_name", false);
    public get complianceSecurityControlParametersName() {
        return this._complianceSecurityControlParametersName;
    }
    public putComplianceSecurityControlParametersName(value: ComplianceSecurityControlParametersNameProperty[] | cdktn.IResolvable) {
        this._complianceSecurityControlParametersName.internalValue = value;
    }
    public resetComplianceSecurityControlParametersName() {
        this._complianceSecurityControlParametersName.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get complianceSecurityControlParametersNameInput() {
        return this._complianceSecurityControlParametersName.internalValue;
    }

    // compliance_security_control_parameters_value - computed: true, optional: true, required: false
    private _complianceSecurityControlParametersValue = new ComplianceSecurityControlParametersValuePropertyList(this, "compliance_security_control_parameters_value", false);
    public get complianceSecurityControlParametersValue() {
        return this._complianceSecurityControlParametersValue;
    }
    public putComplianceSecurityControlParametersValue(value: ComplianceSecurityControlParametersValueProperty[] | cdktn.IResolvable) {
        this._complianceSecurityControlParametersValue.internalValue = value;
    }
    public resetComplianceSecurityControlParametersValue() {
        this._complianceSecurityControlParametersValue.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get complianceSecurityControlParametersValueInput() {
        return this._complianceSecurityControlParametersValue.internalValue;
    }

    // compliance_status - computed: true, optional: true, required: false
    private _complianceStatus = new ComplianceStatusPropertyList(this, "compliance_status", false);
    public get complianceStatus() {
        return this._complianceStatus;
    }
    public putComplianceStatus(value: ComplianceStatusProperty[] | cdktn.IResolvable) {
        this._complianceStatus.internalValue = value;
    }
    public resetComplianceStatus() {
        this._complianceStatus.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get complianceStatusInput() {
        return this._complianceStatus.internalValue;
    }

    // confidence - computed: true, optional: true, required: false
    private _confidence = new NumberFilterPropertyList(this, "confidence", false);
    public get confidence() {
        return this._confidence;
    }
    public putConfidence(value: NumberFilterProperty[] | cdktn.IResolvable) {
        this._confidence.internalValue = value;
    }
    public resetConfidence() {
        this._confidence.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get confidenceInput() {
        return this._confidence.internalValue;
    }

    // created_at - computed: true, optional: true, required: false
    private _createdAt = new DateFilterPropertyList(this, "created_at", false);
    public get createdAt() {
        return this._createdAt;
    }
    public putCreatedAt(value: DateFilterProperty[] | cdktn.IResolvable) {
        this._createdAt.internalValue = value;
    }
    public resetCreatedAt() {
        this._createdAt.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createdAtInput() {
        return this._createdAt.internalValue;
    }

    // criticality - computed: true, optional: true, required: false
    private _criticality = new CriticalityPropertyList(this, "criticality", false);
    public get criticality() {
        return this._criticality;
    }
    public putCriticality(value: CriticalityProperty[] | cdktn.IResolvable) {
        this._criticality.internalValue = value;
    }
    public resetCriticality() {
        this._criticality.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get criticalityInput() {
        return this._criticality.internalValue;
    }

    // description - computed: true, optional: true, required: false
    private _description = new DescriptionPropertyList(this, "description", false);
    public get description() {
        return this._description;
    }
    public putDescription(value: DescriptionProperty[] | cdktn.IResolvable) {
        this._description.internalValue = value;
    }
    public resetDescription() {
        this._description.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
        return this._description.internalValue;
    }

    // finding_provider_fields_confidence - computed: true, optional: true, required: false
    private _findingProviderFieldsConfidence = new FindingProviderFieldsConfidencePropertyList(this, "finding_provider_fields_confidence", false);
    public get findingProviderFieldsConfidence() {
        return this._findingProviderFieldsConfidence;
    }
    public putFindingProviderFieldsConfidence(value: FindingProviderFieldsConfidenceProperty[] | cdktn.IResolvable) {
        this._findingProviderFieldsConfidence.internalValue = value;
    }
    public resetFindingProviderFieldsConfidence() {
        this._findingProviderFieldsConfidence.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get findingProviderFieldsConfidenceInput() {
        return this._findingProviderFieldsConfidence.internalValue;
    }

    // finding_provider_fields_criticality - computed: true, optional: true, required: false
    private _findingProviderFieldsCriticality = new FindingProviderFieldsCriticalityPropertyList(this, "finding_provider_fields_criticality", false);
    public get findingProviderFieldsCriticality() {
        return this._findingProviderFieldsCriticality;
    }
    public putFindingProviderFieldsCriticality(value: FindingProviderFieldsCriticalityProperty[] | cdktn.IResolvable) {
        this._findingProviderFieldsCriticality.internalValue = value;
    }
    public resetFindingProviderFieldsCriticality() {
        this._findingProviderFieldsCriticality.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get findingProviderFieldsCriticalityInput() {
        return this._findingProviderFieldsCriticality.internalValue;
    }

    // finding_provider_fields_related_findings_id - computed: true, optional: true, required: false
    private _findingProviderFieldsRelatedFindingsId = new FindingProviderFieldsRelatedFindingsIdPropertyList(this, "finding_provider_fields_related_findings_id", false);
    public get findingProviderFieldsRelatedFindingsId() {
        return this._findingProviderFieldsRelatedFindingsId;
    }
    public putFindingProviderFieldsRelatedFindingsId(value: FindingProviderFieldsRelatedFindingsIdProperty[] | cdktn.IResolvable) {
        this._findingProviderFieldsRelatedFindingsId.internalValue = value;
    }
    public resetFindingProviderFieldsRelatedFindingsId() {
        this._findingProviderFieldsRelatedFindingsId.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get findingProviderFieldsRelatedFindingsIdInput() {
        return this._findingProviderFieldsRelatedFindingsId.internalValue;
    }

    // finding_provider_fields_related_findings_product_arn - computed: true, optional: true, required: false
    private _findingProviderFieldsRelatedFindingsProductArn = new FindingProviderFieldsRelatedFindingsProductArnPropertyList(this, "finding_provider_fields_related_findings_product_arn", false);
    public get findingProviderFieldsRelatedFindingsProductArn() {
        return this._findingProviderFieldsRelatedFindingsProductArn;
    }
    public putFindingProviderFieldsRelatedFindingsProductArn(value: FindingProviderFieldsRelatedFindingsProductArnProperty[] | cdktn.IResolvable) {
        this._findingProviderFieldsRelatedFindingsProductArn.internalValue = value;
    }
    public resetFindingProviderFieldsRelatedFindingsProductArn() {
        this._findingProviderFieldsRelatedFindingsProductArn.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get findingProviderFieldsRelatedFindingsProductArnInput() {
        return this._findingProviderFieldsRelatedFindingsProductArn.internalValue;
    }

    // finding_provider_fields_severity_label - computed: true, optional: true, required: false
    private _findingProviderFieldsSeverityLabel = new FindingProviderFieldsSeverityLabelPropertyList(this, "finding_provider_fields_severity_label", false);
    public get findingProviderFieldsSeverityLabel() {
        return this._findingProviderFieldsSeverityLabel;
    }
    public putFindingProviderFieldsSeverityLabel(value: FindingProviderFieldsSeverityLabelProperty[] | cdktn.IResolvable) {
        this._findingProviderFieldsSeverityLabel.internalValue = value;
    }
    public resetFindingProviderFieldsSeverityLabel() {
        this._findingProviderFieldsSeverityLabel.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get findingProviderFieldsSeverityLabelInput() {
        return this._findingProviderFieldsSeverityLabel.internalValue;
    }

    // finding_provider_fields_severity_original - computed: true, optional: true, required: false
    private _findingProviderFieldsSeverityOriginal = new FindingProviderFieldsSeverityOriginalPropertyList(this, "finding_provider_fields_severity_original", false);
    public get findingProviderFieldsSeverityOriginal() {
        return this._findingProviderFieldsSeverityOriginal;
    }
    public putFindingProviderFieldsSeverityOriginal(value: FindingProviderFieldsSeverityOriginalProperty[] | cdktn.IResolvable) {
        this._findingProviderFieldsSeverityOriginal.internalValue = value;
    }
    public resetFindingProviderFieldsSeverityOriginal() {
        this._findingProviderFieldsSeverityOriginal.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get findingProviderFieldsSeverityOriginalInput() {
        return this._findingProviderFieldsSeverityOriginal.internalValue;
    }

    // finding_provider_fields_types - computed: true, optional: true, required: false
    private _findingProviderFieldsTypes = new FindingProviderFieldsTypesPropertyList(this, "finding_provider_fields_types", false);
    public get findingProviderFieldsTypes() {
        return this._findingProviderFieldsTypes;
    }
    public putFindingProviderFieldsTypes(value: FindingProviderFieldsTypesProperty[] | cdktn.IResolvable) {
        this._findingProviderFieldsTypes.internalValue = value;
    }
    public resetFindingProviderFieldsTypes() {
        this._findingProviderFieldsTypes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get findingProviderFieldsTypesInput() {
        return this._findingProviderFieldsTypes.internalValue;
    }

    // first_observed_at - computed: true, optional: true, required: false
    private _firstObservedAt = new FirstObservedAtPropertyList(this, "first_observed_at", false);
    public get firstObservedAt() {
        return this._firstObservedAt;
    }
    public putFirstObservedAt(value: FirstObservedAtProperty[] | cdktn.IResolvable) {
        this._firstObservedAt.internalValue = value;
    }
    public resetFirstObservedAt() {
        this._firstObservedAt.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get firstObservedAtInput() {
        return this._firstObservedAt.internalValue;
    }

    // generator_id - computed: true, optional: true, required: false
    private _generatorId = new GeneratorIdPropertyList(this, "generator_id", false);
    public get generatorId() {
        return this._generatorId;
    }
    public putGeneratorId(value: GeneratorIdProperty[] | cdktn.IResolvable) {
        this._generatorId.internalValue = value;
    }
    public resetGeneratorId() {
        this._generatorId.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get generatorIdInput() {
        return this._generatorId.internalValue;
    }

    // id - computed: true, optional: true, required: false
    private _id = new IdPropertyList(this, "id", false);
    public get id() {
        return this._id;
    }
    public putId(value: IdProperty[] | cdktn.IResolvable) {
        this._id.internalValue = value;
    }
    public resetId() {
        this._id.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idInput() {
        return this._id.internalValue;
    }

    // keyword - computed: true, optional: true, required: false
    private _keyword = new KeywordFilterPropertyList(this, "keyword", false);
    public get keyword() {
        return this._keyword;
    }
    public putKeyword(value: KeywordFilterProperty[] | cdktn.IResolvable) {
        this._keyword.internalValue = value;
    }
    public resetKeyword() {
        this._keyword.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keywordInput() {
        return this._keyword.internalValue;
    }

    // last_observed_at - computed: true, optional: true, required: false
    private _lastObservedAt = new LastObservedAtPropertyList(this, "last_observed_at", false);
    public get lastObservedAt() {
        return this._lastObservedAt;
    }
    public putLastObservedAt(value: LastObservedAtProperty[] | cdktn.IResolvable) {
        this._lastObservedAt.internalValue = value;
    }
    public resetLastObservedAt() {
        this._lastObservedAt.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lastObservedAtInput() {
        return this._lastObservedAt.internalValue;
    }

    // malware_name - computed: true, optional: true, required: false
    private _malwareName = new MalwareNamePropertyList(this, "malware_name", false);
    public get malwareName() {
        return this._malwareName;
    }
    public putMalwareName(value: MalwareNameProperty[] | cdktn.IResolvable) {
        this._malwareName.internalValue = value;
    }
    public resetMalwareName() {
        this._malwareName.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get malwareNameInput() {
        return this._malwareName.internalValue;
    }

    // malware_path - computed: true, optional: true, required: false
    private _malwarePath = new MalwarePathPropertyList(this, "malware_path", false);
    public get malwarePath() {
        return this._malwarePath;
    }
    public putMalwarePath(value: MalwarePathProperty[] | cdktn.IResolvable) {
        this._malwarePath.internalValue = value;
    }
    public resetMalwarePath() {
        this._malwarePath.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get malwarePathInput() {
        return this._malwarePath.internalValue;
    }

    // malware_state - computed: true, optional: true, required: false
    private _malwareState = new MalwareStatePropertyList(this, "malware_state", false);
    public get malwareState() {
        return this._malwareState;
    }
    public putMalwareState(value: MalwareStateProperty[] | cdktn.IResolvable) {
        this._malwareState.internalValue = value;
    }
    public resetMalwareState() {
        this._malwareState.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get malwareStateInput() {
        return this._malwareState.internalValue;
    }

    // malware_type - computed: true, optional: true, required: false
    private _malwareType = new MalwareTypePropertyList(this, "malware_type", false);
    public get malwareType() {
        return this._malwareType;
    }
    public putMalwareType(value: MalwareTypeProperty[] | cdktn.IResolvable) {
        this._malwareType.internalValue = value;
    }
    public resetMalwareType() {
        this._malwareType.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get malwareTypeInput() {
        return this._malwareType.internalValue;
    }

    // network_destination_domain - computed: true, optional: true, required: false
    private _networkDestinationDomain = new NetworkDestinationDomainPropertyList(this, "network_destination_domain", false);
    public get networkDestinationDomain() {
        return this._networkDestinationDomain;
    }
    public putNetworkDestinationDomain(value: NetworkDestinationDomainProperty[] | cdktn.IResolvable) {
        this._networkDestinationDomain.internalValue = value;
    }
    public resetNetworkDestinationDomain() {
        this._networkDestinationDomain.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkDestinationDomainInput() {
        return this._networkDestinationDomain.internalValue;
    }

    // network_destination_ip_v4 - computed: true, optional: true, required: false
    private _networkDestinationIpV4 = new IpFilterPropertyList(this, "network_destination_ip_v4", false);
    public get networkDestinationIpV4() {
        return this._networkDestinationIpV4;
    }
    public putNetworkDestinationIpV4(value: IpFilterProperty[] | cdktn.IResolvable) {
        this._networkDestinationIpV4.internalValue = value;
    }
    public resetNetworkDestinationIpV4() {
        this._networkDestinationIpV4.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkDestinationIpV4Input() {
        return this._networkDestinationIpV4.internalValue;
    }

    // network_destination_ip_v6 - computed: true, optional: true, required: false
    private _networkDestinationIpV6 = new NetworkDestinationIpV6PropertyList(this, "network_destination_ip_v6", false);
    public get networkDestinationIpV6() {
        return this._networkDestinationIpV6;
    }
    public putNetworkDestinationIpV6(value: NetworkDestinationIpV6Property[] | cdktn.IResolvable) {
        this._networkDestinationIpV6.internalValue = value;
    }
    public resetNetworkDestinationIpV6() {
        this._networkDestinationIpV6.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkDestinationIpV6Input() {
        return this._networkDestinationIpV6.internalValue;
    }

    // network_destination_port - computed: true, optional: true, required: false
    private _networkDestinationPort = new NetworkDestinationPortPropertyList(this, "network_destination_port", false);
    public get networkDestinationPort() {
        return this._networkDestinationPort;
    }
    public putNetworkDestinationPort(value: NetworkDestinationPortProperty[] | cdktn.IResolvable) {
        this._networkDestinationPort.internalValue = value;
    }
    public resetNetworkDestinationPort() {
        this._networkDestinationPort.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkDestinationPortInput() {
        return this._networkDestinationPort.internalValue;
    }

    // network_direction - computed: true, optional: true, required: false
    private _networkDirection = new NetworkDirectionPropertyList(this, "network_direction", false);
    public get networkDirection() {
        return this._networkDirection;
    }
    public putNetworkDirection(value: NetworkDirectionProperty[] | cdktn.IResolvable) {
        this._networkDirection.internalValue = value;
    }
    public resetNetworkDirection() {
        this._networkDirection.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkDirectionInput() {
        return this._networkDirection.internalValue;
    }

    // network_protocol - computed: true, optional: true, required: false
    private _networkProtocol = new NetworkProtocolPropertyList(this, "network_protocol", false);
    public get networkProtocol() {
        return this._networkProtocol;
    }
    public putNetworkProtocol(value: NetworkProtocolProperty[] | cdktn.IResolvable) {
        this._networkProtocol.internalValue = value;
    }
    public resetNetworkProtocol() {
        this._networkProtocol.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkProtocolInput() {
        return this._networkProtocol.internalValue;
    }

    // network_source_domain - computed: true, optional: true, required: false
    private _networkSourceDomain = new NetworkSourceDomainPropertyList(this, "network_source_domain", false);
    public get networkSourceDomain() {
        return this._networkSourceDomain;
    }
    public putNetworkSourceDomain(value: NetworkSourceDomainProperty[] | cdktn.IResolvable) {
        this._networkSourceDomain.internalValue = value;
    }
    public resetNetworkSourceDomain() {
        this._networkSourceDomain.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkSourceDomainInput() {
        return this._networkSourceDomain.internalValue;
    }

    // network_source_ip_v4 - computed: true, optional: true, required: false
    private _networkSourceIpV4 = new NetworkSourceIpV4PropertyList(this, "network_source_ip_v4", false);
    public get networkSourceIpV4() {
        return this._networkSourceIpV4;
    }
    public putNetworkSourceIpV4(value: NetworkSourceIpV4Property[] | cdktn.IResolvable) {
        this._networkSourceIpV4.internalValue = value;
    }
    public resetNetworkSourceIpV4() {
        this._networkSourceIpV4.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkSourceIpV4Input() {
        return this._networkSourceIpV4.internalValue;
    }

    // network_source_ip_v6 - computed: true, optional: true, required: false
    private _networkSourceIpV6 = new NetworkSourceIpV6PropertyList(this, "network_source_ip_v6", false);
    public get networkSourceIpV6() {
        return this._networkSourceIpV6;
    }
    public putNetworkSourceIpV6(value: NetworkSourceIpV6Property[] | cdktn.IResolvable) {
        this._networkSourceIpV6.internalValue = value;
    }
    public resetNetworkSourceIpV6() {
        this._networkSourceIpV6.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkSourceIpV6Input() {
        return this._networkSourceIpV6.internalValue;
    }

    // network_source_mac - computed: true, optional: true, required: false
    private _networkSourceMac = new NetworkSourceMacPropertyList(this, "network_source_mac", false);
    public get networkSourceMac() {
        return this._networkSourceMac;
    }
    public putNetworkSourceMac(value: NetworkSourceMacProperty[] | cdktn.IResolvable) {
        this._networkSourceMac.internalValue = value;
    }
    public resetNetworkSourceMac() {
        this._networkSourceMac.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkSourceMacInput() {
        return this._networkSourceMac.internalValue;
    }

    // network_source_port - computed: true, optional: true, required: false
    private _networkSourcePort = new NetworkSourcePortPropertyList(this, "network_source_port", false);
    public get networkSourcePort() {
        return this._networkSourcePort;
    }
    public putNetworkSourcePort(value: NetworkSourcePortProperty[] | cdktn.IResolvable) {
        this._networkSourcePort.internalValue = value;
    }
    public resetNetworkSourcePort() {
        this._networkSourcePort.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkSourcePortInput() {
        return this._networkSourcePort.internalValue;
    }

    // note_text - computed: true, optional: true, required: false
    private _noteText = new NoteTextPropertyList(this, "note_text", false);
    public get noteText() {
        return this._noteText;
    }
    public putNoteText(value: NoteTextProperty[] | cdktn.IResolvable) {
        this._noteText.internalValue = value;
    }
    public resetNoteText() {
        this._noteText.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get noteTextInput() {
        return this._noteText.internalValue;
    }

    // note_updated_at - computed: true, optional: true, required: false
    private _noteUpdatedAt = new NoteUpdatedAtPropertyList(this, "note_updated_at", false);
    public get noteUpdatedAt() {
        return this._noteUpdatedAt;
    }
    public putNoteUpdatedAt(value: NoteUpdatedAtProperty[] | cdktn.IResolvable) {
        this._noteUpdatedAt.internalValue = value;
    }
    public resetNoteUpdatedAt() {
        this._noteUpdatedAt.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get noteUpdatedAtInput() {
        return this._noteUpdatedAt.internalValue;
    }

    // note_updated_by - computed: true, optional: true, required: false
    private _noteUpdatedBy = new NoteUpdatedByPropertyList(this, "note_updated_by", false);
    public get noteUpdatedBy() {
        return this._noteUpdatedBy;
    }
    public putNoteUpdatedBy(value: NoteUpdatedByProperty[] | cdktn.IResolvable) {
        this._noteUpdatedBy.internalValue = value;
    }
    public resetNoteUpdatedBy() {
        this._noteUpdatedBy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get noteUpdatedByInput() {
        return this._noteUpdatedBy.internalValue;
    }

    // process_launched_at - computed: true, optional: true, required: false
    private _processLaunchedAt = new ProcessLaunchedAtPropertyList(this, "process_launched_at", false);
    public get processLaunchedAt() {
        return this._processLaunchedAt;
    }
    public putProcessLaunchedAt(value: ProcessLaunchedAtProperty[] | cdktn.IResolvable) {
        this._processLaunchedAt.internalValue = value;
    }
    public resetProcessLaunchedAt() {
        this._processLaunchedAt.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get processLaunchedAtInput() {
        return this._processLaunchedAt.internalValue;
    }

    // process_name - computed: true, optional: true, required: false
    private _processName = new ProcessNamePropertyList(this, "process_name", false);
    public get processName() {
        return this._processName;
    }
    public putProcessName(value: ProcessNameProperty[] | cdktn.IResolvable) {
        this._processName.internalValue = value;
    }
    public resetProcessName() {
        this._processName.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get processNameInput() {
        return this._processName.internalValue;
    }

    // process_parent_pid - computed: true, optional: true, required: false
    private _processParentPid = new ProcessParentPidPropertyList(this, "process_parent_pid", false);
    public get processParentPid() {
        return this._processParentPid;
    }
    public putProcessParentPid(value: ProcessParentPidProperty[] | cdktn.IResolvable) {
        this._processParentPid.internalValue = value;
    }
    public resetProcessParentPid() {
        this._processParentPid.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get processParentPidInput() {
        return this._processParentPid.internalValue;
    }

    // process_path - computed: true, optional: true, required: false
    private _processPath = new ProcessPathPropertyList(this, "process_path", false);
    public get processPath() {
        return this._processPath;
    }
    public putProcessPath(value: ProcessPathProperty[] | cdktn.IResolvable) {
        this._processPath.internalValue = value;
    }
    public resetProcessPath() {
        this._processPath.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get processPathInput() {
        return this._processPath.internalValue;
    }

    // process_pid - computed: true, optional: true, required: false
    private _processPid = new ProcessPidPropertyList(this, "process_pid", false);
    public get processPid() {
        return this._processPid;
    }
    public putProcessPid(value: ProcessPidProperty[] | cdktn.IResolvable) {
        this._processPid.internalValue = value;
    }
    public resetProcessPid() {
        this._processPid.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get processPidInput() {
        return this._processPid.internalValue;
    }

    // process_terminated_at - computed: true, optional: true, required: false
    private _processTerminatedAt = new ProcessTerminatedAtPropertyList(this, "process_terminated_at", false);
    public get processTerminatedAt() {
        return this._processTerminatedAt;
    }
    public putProcessTerminatedAt(value: ProcessTerminatedAtProperty[] | cdktn.IResolvable) {
        this._processTerminatedAt.internalValue = value;
    }
    public resetProcessTerminatedAt() {
        this._processTerminatedAt.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get processTerminatedAtInput() {
        return this._processTerminatedAt.internalValue;
    }

    // product_arn - computed: true, optional: true, required: false
    private _productArn = new ProductArnPropertyList(this, "product_arn", false);
    public get productArn() {
        return this._productArn;
    }
    public putProductArn(value: ProductArnProperty[] | cdktn.IResolvable) {
        this._productArn.internalValue = value;
    }
    public resetProductArn() {
        this._productArn.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get productArnInput() {
        return this._productArn.internalValue;
    }

    // product_fields - computed: true, optional: true, required: false
    private _productFields = new MapFilterPropertyList(this, "product_fields", false);
    public get productFields() {
        return this._productFields;
    }
    public putProductFields(value: MapFilterProperty[] | cdktn.IResolvable) {
        this._productFields.internalValue = value;
    }
    public resetProductFields() {
        this._productFields.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get productFieldsInput() {
        return this._productFields.internalValue;
    }

    // product_name - computed: true, optional: true, required: false
    private _productName = new ProductNamePropertyList(this, "product_name", false);
    public get productName() {
        return this._productName;
    }
    public putProductName(value: ProductNameProperty[] | cdktn.IResolvable) {
        this._productName.internalValue = value;
    }
    public resetProductName() {
        this._productName.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get productNameInput() {
        return this._productName.internalValue;
    }

    // recommendation_text - computed: true, optional: true, required: false
    private _recommendationText = new RecommendationTextPropertyList(this, "recommendation_text", false);
    public get recommendationText() {
        return this._recommendationText;
    }
    public putRecommendationText(value: RecommendationTextProperty[] | cdktn.IResolvable) {
        this._recommendationText.internalValue = value;
    }
    public resetRecommendationText() {
        this._recommendationText.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get recommendationTextInput() {
        return this._recommendationText.internalValue;
    }

    // record_state - computed: true, optional: true, required: false
    private _recordState = new RecordStatePropertyList(this, "record_state", false);
    public get recordState() {
        return this._recordState;
    }
    public putRecordState(value: RecordStateProperty[] | cdktn.IResolvable) {
        this._recordState.internalValue = value;
    }
    public resetRecordState() {
        this._recordState.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get recordStateInput() {
        return this._recordState.internalValue;
    }

    // region - computed: true, optional: true, required: false
    private _region = new RegionPropertyList(this, "region", false);
    public get region() {
        return this._region;
    }
    public putRegion(value: RegionProperty[] | cdktn.IResolvable) {
        this._region.internalValue = value;
    }
    public resetRegion() {
        this._region.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get regionInput() {
        return this._region.internalValue;
    }

    // related_findings_id - computed: true, optional: true, required: false
    private _relatedFindingsId = new RelatedFindingsIdPropertyList(this, "related_findings_id", false);
    public get relatedFindingsId() {
        return this._relatedFindingsId;
    }
    public putRelatedFindingsId(value: RelatedFindingsIdProperty[] | cdktn.IResolvable) {
        this._relatedFindingsId.internalValue = value;
    }
    public resetRelatedFindingsId() {
        this._relatedFindingsId.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get relatedFindingsIdInput() {
        return this._relatedFindingsId.internalValue;
    }

    // related_findings_product_arn - computed: true, optional: true, required: false
    private _relatedFindingsProductArn = new RelatedFindingsProductArnPropertyList(this, "related_findings_product_arn", false);
    public get relatedFindingsProductArn() {
        return this._relatedFindingsProductArn;
    }
    public putRelatedFindingsProductArn(value: RelatedFindingsProductArnProperty[] | cdktn.IResolvable) {
        this._relatedFindingsProductArn.internalValue = value;
    }
    public resetRelatedFindingsProductArn() {
        this._relatedFindingsProductArn.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get relatedFindingsProductArnInput() {
        return this._relatedFindingsProductArn.internalValue;
    }

    // resource_application_arn - computed: true, optional: true, required: false
    private _resourceApplicationArn = new ResourceApplicationArnPropertyList(this, "resource_application_arn", false);
    public get resourceApplicationArn() {
        return this._resourceApplicationArn;
    }
    public putResourceApplicationArn(value: ResourceApplicationArnProperty[] | cdktn.IResolvable) {
        this._resourceApplicationArn.internalValue = value;
    }
    public resetResourceApplicationArn() {
        this._resourceApplicationArn.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceApplicationArnInput() {
        return this._resourceApplicationArn.internalValue;
    }

    // resource_application_name - computed: true, optional: true, required: false
    private _resourceApplicationName = new ResourceApplicationNamePropertyList(this, "resource_application_name", false);
    public get resourceApplicationName() {
        return this._resourceApplicationName;
    }
    public putResourceApplicationName(value: ResourceApplicationNameProperty[] | cdktn.IResolvable) {
        this._resourceApplicationName.internalValue = value;
    }
    public resetResourceApplicationName() {
        this._resourceApplicationName.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceApplicationNameInput() {
        return this._resourceApplicationName.internalValue;
    }

    // resource_aws_ec_2_instance_iam_instance_profile_arn - computed: true, optional: true, required: false
    private _resourceAwsEc2InstanceIamInstanceProfileArn = new ResourceAwsEc2InstanceIamInstanceProfileArnPropertyList(this, "resource_aws_ec_2_instance_iam_instance_profile_arn", false);
    public get resourceAwsEc2InstanceIamInstanceProfileArn() {
        return this._resourceAwsEc2InstanceIamInstanceProfileArn;
    }
    public putResourceAwsEc2InstanceIamInstanceProfileArn(value: ResourceAwsEc2InstanceIamInstanceProfileArnProperty[] | cdktn.IResolvable) {
        this._resourceAwsEc2InstanceIamInstanceProfileArn.internalValue = value;
    }
    public resetResourceAwsEc2InstanceIamInstanceProfileArn() {
        this._resourceAwsEc2InstanceIamInstanceProfileArn.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceAwsEc2InstanceIamInstanceProfileArnInput() {
        return this._resourceAwsEc2InstanceIamInstanceProfileArn.internalValue;
    }

    // resource_aws_ec_2_instance_image_id - computed: true, optional: true, required: false
    private _resourceAwsEc2InstanceImageId = new ResourceAwsEc2InstanceImageIdPropertyList(this, "resource_aws_ec_2_instance_image_id", false);
    public get resourceAwsEc2InstanceImageId() {
        return this._resourceAwsEc2InstanceImageId;
    }
    public putResourceAwsEc2InstanceImageId(value: ResourceAwsEc2InstanceImageIdProperty[] | cdktn.IResolvable) {
        this._resourceAwsEc2InstanceImageId.internalValue = value;
    }
    public resetResourceAwsEc2InstanceImageId() {
        this._resourceAwsEc2InstanceImageId.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceAwsEc2InstanceImageIdInput() {
        return this._resourceAwsEc2InstanceImageId.internalValue;
    }

    // resource_aws_ec_2_instance_ip_v4_addresses - computed: true, optional: true, required: false
    private _resourceAwsEc2InstanceIpV4Addresses = new ResourceAwsEc2InstanceIpV4AddressesPropertyList(this, "resource_aws_ec_2_instance_ip_v4_addresses", false);
    public get resourceAwsEc2InstanceIpV4Addresses() {
        return this._resourceAwsEc2InstanceIpV4Addresses;
    }
    public putResourceAwsEc2InstanceIpV4Addresses(value: ResourceAwsEc2InstanceIpV4AddressesProperty[] | cdktn.IResolvable) {
        this._resourceAwsEc2InstanceIpV4Addresses.internalValue = value;
    }
    public resetResourceAwsEc2InstanceIpV4Addresses() {
        this._resourceAwsEc2InstanceIpV4Addresses.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceAwsEc2InstanceIpV4AddressesInput() {
        return this._resourceAwsEc2InstanceIpV4Addresses.internalValue;
    }

    // resource_aws_ec_2_instance_ip_v6_addresses - computed: true, optional: true, required: false
    private _resourceAwsEc2InstanceIpV6Addresses = new ResourceAwsEc2InstanceIpV6AddressesPropertyList(this, "resource_aws_ec_2_instance_ip_v6_addresses", false);
    public get resourceAwsEc2InstanceIpV6Addresses() {
        return this._resourceAwsEc2InstanceIpV6Addresses;
    }
    public putResourceAwsEc2InstanceIpV6Addresses(value: ResourceAwsEc2InstanceIpV6AddressesProperty[] | cdktn.IResolvable) {
        this._resourceAwsEc2InstanceIpV6Addresses.internalValue = value;
    }
    public resetResourceAwsEc2InstanceIpV6Addresses() {
        this._resourceAwsEc2InstanceIpV6Addresses.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceAwsEc2InstanceIpV6AddressesInput() {
        return this._resourceAwsEc2InstanceIpV6Addresses.internalValue;
    }

    // resource_aws_ec_2_instance_key_name - computed: true, optional: true, required: false
    private _resourceAwsEc2InstanceKeyName = new ResourceAwsEc2InstanceKeyNamePropertyList(this, "resource_aws_ec_2_instance_key_name", false);
    public get resourceAwsEc2InstanceKeyName() {
        return this._resourceAwsEc2InstanceKeyName;
    }
    public putResourceAwsEc2InstanceKeyName(value: ResourceAwsEc2InstanceKeyNameProperty[] | cdktn.IResolvable) {
        this._resourceAwsEc2InstanceKeyName.internalValue = value;
    }
    public resetResourceAwsEc2InstanceKeyName() {
        this._resourceAwsEc2InstanceKeyName.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceAwsEc2InstanceKeyNameInput() {
        return this._resourceAwsEc2InstanceKeyName.internalValue;
    }

    // resource_aws_ec_2_instance_launched_at - computed: true, optional: true, required: false
    private _resourceAwsEc2InstanceLaunchedAt = new ResourceAwsEc2InstanceLaunchedAtPropertyList(this, "resource_aws_ec_2_instance_launched_at", false);
    public get resourceAwsEc2InstanceLaunchedAt() {
        return this._resourceAwsEc2InstanceLaunchedAt;
    }
    public putResourceAwsEc2InstanceLaunchedAt(value: ResourceAwsEc2InstanceLaunchedAtProperty[] | cdktn.IResolvable) {
        this._resourceAwsEc2InstanceLaunchedAt.internalValue = value;
    }
    public resetResourceAwsEc2InstanceLaunchedAt() {
        this._resourceAwsEc2InstanceLaunchedAt.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceAwsEc2InstanceLaunchedAtInput() {
        return this._resourceAwsEc2InstanceLaunchedAt.internalValue;
    }

    // resource_aws_ec_2_instance_subnet_id - computed: true, optional: true, required: false
    private _resourceAwsEc2InstanceSubnetId = new ResourceAwsEc2InstanceSubnetIdPropertyList(this, "resource_aws_ec_2_instance_subnet_id", false);
    public get resourceAwsEc2InstanceSubnetId() {
        return this._resourceAwsEc2InstanceSubnetId;
    }
    public putResourceAwsEc2InstanceSubnetId(value: ResourceAwsEc2InstanceSubnetIdProperty[] | cdktn.IResolvable) {
        this._resourceAwsEc2InstanceSubnetId.internalValue = value;
    }
    public resetResourceAwsEc2InstanceSubnetId() {
        this._resourceAwsEc2InstanceSubnetId.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceAwsEc2InstanceSubnetIdInput() {
        return this._resourceAwsEc2InstanceSubnetId.internalValue;
    }

    // resource_aws_ec_2_instance_type - computed: true, optional: true, required: false
    private _resourceAwsEc2InstanceType = new ResourceAwsEc2InstanceTypePropertyList(this, "resource_aws_ec_2_instance_type", false);
    public get resourceAwsEc2InstanceType() {
        return this._resourceAwsEc2InstanceType;
    }
    public putResourceAwsEc2InstanceType(value: ResourceAwsEc2InstanceTypeProperty[] | cdktn.IResolvable) {
        this._resourceAwsEc2InstanceType.internalValue = value;
    }
    public resetResourceAwsEc2InstanceType() {
        this._resourceAwsEc2InstanceType.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceAwsEc2InstanceTypeInput() {
        return this._resourceAwsEc2InstanceType.internalValue;
    }

    // resource_aws_ec_2_instance_vpc_id - computed: true, optional: true, required: false
    private _resourceAwsEc2InstanceVpcId = new ResourceAwsEc2InstanceVpcIdPropertyList(this, "resource_aws_ec_2_instance_vpc_id", false);
    public get resourceAwsEc2InstanceVpcId() {
        return this._resourceAwsEc2InstanceVpcId;
    }
    public putResourceAwsEc2InstanceVpcId(value: ResourceAwsEc2InstanceVpcIdProperty[] | cdktn.IResolvable) {
        this._resourceAwsEc2InstanceVpcId.internalValue = value;
    }
    public resetResourceAwsEc2InstanceVpcId() {
        this._resourceAwsEc2InstanceVpcId.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceAwsEc2InstanceVpcIdInput() {
        return this._resourceAwsEc2InstanceVpcId.internalValue;
    }

    // resource_aws_iam_access_key_created_at - computed: true, optional: true, required: false
    private _resourceAwsIamAccessKeyCreatedAt = new ResourceAwsIamAccessKeyCreatedAtPropertyList(this, "resource_aws_iam_access_key_created_at", false);
    public get resourceAwsIamAccessKeyCreatedAt() {
        return this._resourceAwsIamAccessKeyCreatedAt;
    }
    public putResourceAwsIamAccessKeyCreatedAt(value: ResourceAwsIamAccessKeyCreatedAtProperty[] | cdktn.IResolvable) {
        this._resourceAwsIamAccessKeyCreatedAt.internalValue = value;
    }
    public resetResourceAwsIamAccessKeyCreatedAt() {
        this._resourceAwsIamAccessKeyCreatedAt.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceAwsIamAccessKeyCreatedAtInput() {
        return this._resourceAwsIamAccessKeyCreatedAt.internalValue;
    }

    // resource_aws_iam_access_key_principal_name - computed: true, optional: true, required: false
    private _resourceAwsIamAccessKeyPrincipalName = new ResourceAwsIamAccessKeyPrincipalNamePropertyList(this, "resource_aws_iam_access_key_principal_name", false);
    public get resourceAwsIamAccessKeyPrincipalName() {
        return this._resourceAwsIamAccessKeyPrincipalName;
    }
    public putResourceAwsIamAccessKeyPrincipalName(value: ResourceAwsIamAccessKeyPrincipalNameProperty[] | cdktn.IResolvable) {
        this._resourceAwsIamAccessKeyPrincipalName.internalValue = value;
    }
    public resetResourceAwsIamAccessKeyPrincipalName() {
        this._resourceAwsIamAccessKeyPrincipalName.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceAwsIamAccessKeyPrincipalNameInput() {
        return this._resourceAwsIamAccessKeyPrincipalName.internalValue;
    }

    // resource_aws_iam_access_key_status - computed: true, optional: true, required: false
    private _resourceAwsIamAccessKeyStatus = new ResourceAwsIamAccessKeyStatusPropertyList(this, "resource_aws_iam_access_key_status", false);
    public get resourceAwsIamAccessKeyStatus() {
        return this._resourceAwsIamAccessKeyStatus;
    }
    public putResourceAwsIamAccessKeyStatus(value: ResourceAwsIamAccessKeyStatusProperty[] | cdktn.IResolvable) {
        this._resourceAwsIamAccessKeyStatus.internalValue = value;
    }
    public resetResourceAwsIamAccessKeyStatus() {
        this._resourceAwsIamAccessKeyStatus.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceAwsIamAccessKeyStatusInput() {
        return this._resourceAwsIamAccessKeyStatus.internalValue;
    }

    // resource_aws_iam_access_key_user_name - computed: true, optional: true, required: false
    private _resourceAwsIamAccessKeyUserName = new ResourceAwsIamAccessKeyUserNamePropertyList(this, "resource_aws_iam_access_key_user_name", false);
    public get resourceAwsIamAccessKeyUserName() {
        return this._resourceAwsIamAccessKeyUserName;
    }
    public putResourceAwsIamAccessKeyUserName(value: ResourceAwsIamAccessKeyUserNameProperty[] | cdktn.IResolvable) {
        this._resourceAwsIamAccessKeyUserName.internalValue = value;
    }
    public resetResourceAwsIamAccessKeyUserName() {
        this._resourceAwsIamAccessKeyUserName.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceAwsIamAccessKeyUserNameInput() {
        return this._resourceAwsIamAccessKeyUserName.internalValue;
    }

    // resource_aws_iam_user_user_name - computed: true, optional: true, required: false
    private _resourceAwsIamUserUserName = new ResourceAwsIamUserUserNamePropertyList(this, "resource_aws_iam_user_user_name", false);
    public get resourceAwsIamUserUserName() {
        return this._resourceAwsIamUserUserName;
    }
    public putResourceAwsIamUserUserName(value: ResourceAwsIamUserUserNameProperty[] | cdktn.IResolvable) {
        this._resourceAwsIamUserUserName.internalValue = value;
    }
    public resetResourceAwsIamUserUserName() {
        this._resourceAwsIamUserUserName.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceAwsIamUserUserNameInput() {
        return this._resourceAwsIamUserUserName.internalValue;
    }

    // resource_aws_s3_bucket_owner_id - computed: true, optional: true, required: false
    private _resourceAwsS3BucketOwnerId = new ResourceAwsS3BucketOwnerIdPropertyList(this, "resource_aws_s3_bucket_owner_id", false);
    public get resourceAwsS3BucketOwnerId() {
        return this._resourceAwsS3BucketOwnerId;
    }
    public putResourceAwsS3BucketOwnerId(value: ResourceAwsS3BucketOwnerIdProperty[] | cdktn.IResolvable) {
        this._resourceAwsS3BucketOwnerId.internalValue = value;
    }
    public resetResourceAwsS3BucketOwnerId() {
        this._resourceAwsS3BucketOwnerId.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceAwsS3BucketOwnerIdInput() {
        return this._resourceAwsS3BucketOwnerId.internalValue;
    }

    // resource_aws_s3_bucket_owner_name - computed: true, optional: true, required: false
    private _resourceAwsS3BucketOwnerName = new ResourceAwsS3BucketOwnerNamePropertyList(this, "resource_aws_s3_bucket_owner_name", false);
    public get resourceAwsS3BucketOwnerName() {
        return this._resourceAwsS3BucketOwnerName;
    }
    public putResourceAwsS3BucketOwnerName(value: ResourceAwsS3BucketOwnerNameProperty[] | cdktn.IResolvable) {
        this._resourceAwsS3BucketOwnerName.internalValue = value;
    }
    public resetResourceAwsS3BucketOwnerName() {
        this._resourceAwsS3BucketOwnerName.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceAwsS3BucketOwnerNameInput() {
        return this._resourceAwsS3BucketOwnerName.internalValue;
    }

    // resource_container_image_id - computed: true, optional: true, required: false
    private _resourceContainerImageId = new ResourceContainerImageIdPropertyList(this, "resource_container_image_id", false);
    public get resourceContainerImageId() {
        return this._resourceContainerImageId;
    }
    public putResourceContainerImageId(value: ResourceContainerImageIdProperty[] | cdktn.IResolvable) {
        this._resourceContainerImageId.internalValue = value;
    }
    public resetResourceContainerImageId() {
        this._resourceContainerImageId.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceContainerImageIdInput() {
        return this._resourceContainerImageId.internalValue;
    }

    // resource_container_image_name - computed: true, optional: true, required: false
    private _resourceContainerImageName = new ResourceContainerImageNamePropertyList(this, "resource_container_image_name", false);
    public get resourceContainerImageName() {
        return this._resourceContainerImageName;
    }
    public putResourceContainerImageName(value: ResourceContainerImageNameProperty[] | cdktn.IResolvable) {
        this._resourceContainerImageName.internalValue = value;
    }
    public resetResourceContainerImageName() {
        this._resourceContainerImageName.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceContainerImageNameInput() {
        return this._resourceContainerImageName.internalValue;
    }

    // resource_container_launched_at - computed: true, optional: true, required: false
    private _resourceContainerLaunchedAt = new ResourceContainerLaunchedAtPropertyList(this, "resource_container_launched_at", false);
    public get resourceContainerLaunchedAt() {
        return this._resourceContainerLaunchedAt;
    }
    public putResourceContainerLaunchedAt(value: ResourceContainerLaunchedAtProperty[] | cdktn.IResolvable) {
        this._resourceContainerLaunchedAt.internalValue = value;
    }
    public resetResourceContainerLaunchedAt() {
        this._resourceContainerLaunchedAt.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceContainerLaunchedAtInput() {
        return this._resourceContainerLaunchedAt.internalValue;
    }

    // resource_container_name - computed: true, optional: true, required: false
    private _resourceContainerName = new ResourceContainerNamePropertyList(this, "resource_container_name", false);
    public get resourceContainerName() {
        return this._resourceContainerName;
    }
    public putResourceContainerName(value: ResourceContainerNameProperty[] | cdktn.IResolvable) {
        this._resourceContainerName.internalValue = value;
    }
    public resetResourceContainerName() {
        this._resourceContainerName.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceContainerNameInput() {
        return this._resourceContainerName.internalValue;
    }

    // resource_details_other - computed: true, optional: true, required: false
    private _resourceDetailsOther = new ResourceDetailsOtherPropertyList(this, "resource_details_other", false);
    public get resourceDetailsOther() {
        return this._resourceDetailsOther;
    }
    public putResourceDetailsOther(value: ResourceDetailsOtherProperty[] | cdktn.IResolvable) {
        this._resourceDetailsOther.internalValue = value;
    }
    public resetResourceDetailsOther() {
        this._resourceDetailsOther.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceDetailsOtherInput() {
        return this._resourceDetailsOther.internalValue;
    }

    // resource_id - computed: true, optional: true, required: false
    private _resourceId = new ResourceIdPropertyList(this, "resource_id", false);
    public get resourceId() {
        return this._resourceId;
    }
    public putResourceId(value: ResourceIdProperty[] | cdktn.IResolvable) {
        this._resourceId.internalValue = value;
    }
    public resetResourceId() {
        this._resourceId.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceIdInput() {
        return this._resourceId.internalValue;
    }

    // resource_partition - computed: true, optional: true, required: false
    private _resourcePartition = new ResourcePartitionPropertyList(this, "resource_partition", false);
    public get resourcePartition() {
        return this._resourcePartition;
    }
    public putResourcePartition(value: ResourcePartitionProperty[] | cdktn.IResolvable) {
        this._resourcePartition.internalValue = value;
    }
    public resetResourcePartition() {
        this._resourcePartition.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourcePartitionInput() {
        return this._resourcePartition.internalValue;
    }

    // resource_region - computed: true, optional: true, required: false
    private _resourceRegion = new ResourceRegionPropertyList(this, "resource_region", false);
    public get resourceRegion() {
        return this._resourceRegion;
    }
    public putResourceRegion(value: ResourceRegionProperty[] | cdktn.IResolvable) {
        this._resourceRegion.internalValue = value;
    }
    public resetResourceRegion() {
        this._resourceRegion.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceRegionInput() {
        return this._resourceRegion.internalValue;
    }

    // resource_tags - computed: true, optional: true, required: false
    private _resourceTags = new ResourceTagsPropertyList(this, "resource_tags", false);
    public get resourceTags() {
        return this._resourceTags;
    }
    public putResourceTags(value: ResourceTagsProperty[] | cdktn.IResolvable) {
        this._resourceTags.internalValue = value;
    }
    public resetResourceTags() {
        this._resourceTags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceTagsInput() {
        return this._resourceTags.internalValue;
    }

    // resource_type - computed: true, optional: true, required: false
    private _resourceType = new ResourceTypePropertyList(this, "resource_type", false);
    public get resourceType() {
        return this._resourceType;
    }
    public putResourceType(value: ResourceTypeProperty[] | cdktn.IResolvable) {
        this._resourceType.internalValue = value;
    }
    public resetResourceType() {
        this._resourceType.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceTypeInput() {
        return this._resourceType.internalValue;
    }

    // sample - computed: true, optional: true, required: false
    private _sample = new BooleanFilterPropertyList(this, "sample", false);
    public get sample() {
        return this._sample;
    }
    public putSample(value: BooleanFilterProperty[] | cdktn.IResolvable) {
        this._sample.internalValue = value;
    }
    public resetSample() {
        this._sample.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sampleInput() {
        return this._sample.internalValue;
    }

    // severity_label - computed: true, optional: true, required: false
    private _severityLabel = new SeverityLabelPropertyList(this, "severity_label", false);
    public get severityLabel() {
        return this._severityLabel;
    }
    public putSeverityLabel(value: SeverityLabelProperty[] | cdktn.IResolvable) {
        this._severityLabel.internalValue = value;
    }
    public resetSeverityLabel() {
        this._severityLabel.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get severityLabelInput() {
        return this._severityLabel.internalValue;
    }

    // severity_normalized - computed: true, optional: true, required: false
    private _severityNormalized = new SeverityNormalizedPropertyList(this, "severity_normalized", false);
    public get severityNormalized() {
        return this._severityNormalized;
    }
    public putSeverityNormalized(value: SeverityNormalizedProperty[] | cdktn.IResolvable) {
        this._severityNormalized.internalValue = value;
    }
    public resetSeverityNormalized() {
        this._severityNormalized.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get severityNormalizedInput() {
        return this._severityNormalized.internalValue;
    }

    // severity_product - computed: true, optional: true, required: false
    private _severityProduct = new SeverityProductPropertyList(this, "severity_product", false);
    public get severityProduct() {
        return this._severityProduct;
    }
    public putSeverityProduct(value: SeverityProductProperty[] | cdktn.IResolvable) {
        this._severityProduct.internalValue = value;
    }
    public resetSeverityProduct() {
        this._severityProduct.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get severityProductInput() {
        return this._severityProduct.internalValue;
    }

    // source_url - computed: true, optional: true, required: false
    private _sourceUrl = new SourceUrlPropertyList(this, "source_url", false);
    public get sourceUrl() {
        return this._sourceUrl;
    }
    public putSourceUrl(value: SourceUrlProperty[] | cdktn.IResolvable) {
        this._sourceUrl.internalValue = value;
    }
    public resetSourceUrl() {
        this._sourceUrl.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceUrlInput() {
        return this._sourceUrl.internalValue;
    }

    // threat_intel_indicator_category - computed: true, optional: true, required: false
    private _threatIntelIndicatorCategory = new ThreatIntelIndicatorCategoryPropertyList(this, "threat_intel_indicator_category", false);
    public get threatIntelIndicatorCategory() {
        return this._threatIntelIndicatorCategory;
    }
    public putThreatIntelIndicatorCategory(value: ThreatIntelIndicatorCategoryProperty[] | cdktn.IResolvable) {
        this._threatIntelIndicatorCategory.internalValue = value;
    }
    public resetThreatIntelIndicatorCategory() {
        this._threatIntelIndicatorCategory.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get threatIntelIndicatorCategoryInput() {
        return this._threatIntelIndicatorCategory.internalValue;
    }

    // threat_intel_indicator_last_observed_at - computed: true, optional: true, required: false
    private _threatIntelIndicatorLastObservedAt = new ThreatIntelIndicatorLastObservedAtPropertyList(this, "threat_intel_indicator_last_observed_at", false);
    public get threatIntelIndicatorLastObservedAt() {
        return this._threatIntelIndicatorLastObservedAt;
    }
    public putThreatIntelIndicatorLastObservedAt(value: ThreatIntelIndicatorLastObservedAtProperty[] | cdktn.IResolvable) {
        this._threatIntelIndicatorLastObservedAt.internalValue = value;
    }
    public resetThreatIntelIndicatorLastObservedAt() {
        this._threatIntelIndicatorLastObservedAt.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get threatIntelIndicatorLastObservedAtInput() {
        return this._threatIntelIndicatorLastObservedAt.internalValue;
    }

    // threat_intel_indicator_source - computed: true, optional: true, required: false
    private _threatIntelIndicatorSource = new ThreatIntelIndicatorSourcePropertyList(this, "threat_intel_indicator_source", false);
    public get threatIntelIndicatorSource() {
        return this._threatIntelIndicatorSource;
    }
    public putThreatIntelIndicatorSource(value: ThreatIntelIndicatorSourceProperty[] | cdktn.IResolvable) {
        this._threatIntelIndicatorSource.internalValue = value;
    }
    public resetThreatIntelIndicatorSource() {
        this._threatIntelIndicatorSource.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get threatIntelIndicatorSourceInput() {
        return this._threatIntelIndicatorSource.internalValue;
    }

    // threat_intel_indicator_source_url - computed: true, optional: true, required: false
    private _threatIntelIndicatorSourceUrl = new ThreatIntelIndicatorSourceUrlPropertyList(this, "threat_intel_indicator_source_url", false);
    public get threatIntelIndicatorSourceUrl() {
        return this._threatIntelIndicatorSourceUrl;
    }
    public putThreatIntelIndicatorSourceUrl(value: ThreatIntelIndicatorSourceUrlProperty[] | cdktn.IResolvable) {
        this._threatIntelIndicatorSourceUrl.internalValue = value;
    }
    public resetThreatIntelIndicatorSourceUrl() {
        this._threatIntelIndicatorSourceUrl.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get threatIntelIndicatorSourceUrlInput() {
        return this._threatIntelIndicatorSourceUrl.internalValue;
    }

    // threat_intel_indicator_type - computed: true, optional: true, required: false
    private _threatIntelIndicatorType = new ThreatIntelIndicatorTypePropertyList(this, "threat_intel_indicator_type", false);
    public get threatIntelIndicatorType() {
        return this._threatIntelIndicatorType;
    }
    public putThreatIntelIndicatorType(value: ThreatIntelIndicatorTypeProperty[] | cdktn.IResolvable) {
        this._threatIntelIndicatorType.internalValue = value;
    }
    public resetThreatIntelIndicatorType() {
        this._threatIntelIndicatorType.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get threatIntelIndicatorTypeInput() {
        return this._threatIntelIndicatorType.internalValue;
    }

    // threat_intel_indicator_value - computed: true, optional: true, required: false
    private _threatIntelIndicatorValue = new ThreatIntelIndicatorValuePropertyList(this, "threat_intel_indicator_value", false);
    public get threatIntelIndicatorValue() {
        return this._threatIntelIndicatorValue;
    }
    public putThreatIntelIndicatorValue(value: ThreatIntelIndicatorValueProperty[] | cdktn.IResolvable) {
        this._threatIntelIndicatorValue.internalValue = value;
    }
    public resetThreatIntelIndicatorValue() {
        this._threatIntelIndicatorValue.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get threatIntelIndicatorValueInput() {
        return this._threatIntelIndicatorValue.internalValue;
    }

    // title - computed: true, optional: true, required: false
    private _title = new TitlePropertyList(this, "title", false);
    public get title() {
        return this._title;
    }
    public putTitle(value: TitleProperty[] | cdktn.IResolvable) {
        this._title.internalValue = value;
    }
    public resetTitle() {
        this._title.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get titleInput() {
        return this._title.internalValue;
    }

    // type - computed: true, optional: true, required: false
    private _type = new TypePropertyList(this, "type", false);
    public get type() {
        return this._type;
    }
    public putType(value: TypeProperty[] | cdktn.IResolvable) {
        this._type.internalValue = value;
    }
    public resetType() {
        this._type.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type.internalValue;
    }

    // updated_at - computed: true, optional: true, required: false
    private _updatedAt = new UpdatedAtPropertyList(this, "updated_at", false);
    public get updatedAt() {
        return this._updatedAt;
    }
    public putUpdatedAt(value: UpdatedAtProperty[] | cdktn.IResolvable) {
        this._updatedAt.internalValue = value;
    }
    public resetUpdatedAt() {
        this._updatedAt.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updatedAtInput() {
        return this._updatedAt.internalValue;
    }

    // user_defined_fields - computed: true, optional: true, required: false
    private _userDefinedFields = new UserDefinedFieldsPropertyList(this, "user_defined_fields", false);
    public get userDefinedFields() {
        return this._userDefinedFields;
    }
    public putUserDefinedFields(value: UserDefinedFieldsProperty[] | cdktn.IResolvable) {
        this._userDefinedFields.internalValue = value;
    }
    public resetUserDefinedFields() {
        this._userDefinedFields.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userDefinedFieldsInput() {
        return this._userDefinedFields.internalValue;
    }

    // verification_state - computed: true, optional: true, required: false
    private _verificationState = new VerificationStatePropertyList(this, "verification_state", false);
    public get verificationState() {
        return this._verificationState;
    }
    public putVerificationState(value: VerificationStateProperty[] | cdktn.IResolvable) {
        this._verificationState.internalValue = value;
    }
    public resetVerificationState() {
        this._verificationState.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get verificationStateInput() {
        return this._verificationState.internalValue;
    }

    // vulnerabilities_exploit_available - computed: true, optional: true, required: false
    private _vulnerabilitiesExploitAvailable = new VulnerabilitiesExploitAvailablePropertyList(this, "vulnerabilities_exploit_available", false);
    public get vulnerabilitiesExploitAvailable() {
        return this._vulnerabilitiesExploitAvailable;
    }
    public putVulnerabilitiesExploitAvailable(value: VulnerabilitiesExploitAvailableProperty[] | cdktn.IResolvable) {
        this._vulnerabilitiesExploitAvailable.internalValue = value;
    }
    public resetVulnerabilitiesExploitAvailable() {
        this._vulnerabilitiesExploitAvailable.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vulnerabilitiesExploitAvailableInput() {
        return this._vulnerabilitiesExploitAvailable.internalValue;
    }

    // vulnerabilities_fix_available - computed: true, optional: true, required: false
    private _vulnerabilitiesFixAvailable = new VulnerabilitiesFixAvailablePropertyList(this, "vulnerabilities_fix_available", false);
    public get vulnerabilitiesFixAvailable() {
        return this._vulnerabilitiesFixAvailable;
    }
    public putVulnerabilitiesFixAvailable(value: VulnerabilitiesFixAvailableProperty[] | cdktn.IResolvable) {
        this._vulnerabilitiesFixAvailable.internalValue = value;
    }
    public resetVulnerabilitiesFixAvailable() {
        this._vulnerabilitiesFixAvailable.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vulnerabilitiesFixAvailableInput() {
        return this._vulnerabilitiesFixAvailable.internalValue;
    }

    // workflow_state - computed: true, optional: true, required: false
    private _workflowState = new WorkflowStatePropertyList(this, "workflow_state", false);
    public get workflowState() {
        return this._workflowState;
    }
    public putWorkflowState(value: WorkflowStateProperty[] | cdktn.IResolvable) {
        this._workflowState.internalValue = value;
    }
    public resetWorkflowState() {
        this._workflowState.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get workflowStateInput() {
        return this._workflowState.internalValue;
    }

    // workflow_status - computed: true, optional: true, required: false
    private _workflowStatus = new WorkflowStatusPropertyList(this, "workflow_status", false);
    public get workflowStatus() {
        return this._workflowStatus;
    }
    public putWorkflowStatus(value: WorkflowStatusProperty[] | cdktn.IResolvable) {
        this._workflowStatus.internalValue = value;
    }
    public resetWorkflowStatus() {
        this._workflowStatus.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get workflowStatusInput() {
        return this._workflowStatus.internalValue;
    }
}
}
