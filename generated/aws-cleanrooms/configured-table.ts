// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcConfiguredTableProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table#allowed_columns CcConfiguredTable#allowed_columns}
    */
    readonly allowedColumns: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table#analysis_method CcConfiguredTable#analysis_method}
    */
    readonly analysisMethod: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table#analysis_rules CcConfiguredTable#analysis_rules}
    */
    readonly analysisRules?: CcConfiguredTable.AnalysisRuleProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table#description CcConfiguredTable#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table#name CcConfiguredTable#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table#selected_analysis_methods CcConfiguredTable#selected_analysis_methods}
    */
    readonly selectedAnalysisMethods?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table#table_reference CcConfiguredTable#table_reference}
    */
    readonly tableReference: CcConfiguredTable.TableReferenceProperty;
    /**
    * An arbitrary set of tags (key-value pairs) for this cleanrooms collaboration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table#tags CcConfiguredTable#tags}
    */
    readonly tags?: CcConfiguredTable.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table awscc_cleanrooms_configured_table}
*/
export class CcConfiguredTable extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_cleanrooms_configured_table";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcConfiguredTable resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcConfiguredTable to import
    * @param importFromId The id of the existing CcConfiguredTable that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcConfiguredTable to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cleanrooms_configured_table", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table awscc_cleanrooms_configured_table} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcConfiguredTableProps
    */
    public constructor(scope: Construct, id: string, config: CcConfiguredTableProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_cleanrooms_configured_table',
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
        this._allowedColumns = config.allowedColumns;
        this._analysisMethod = config.analysisMethod;
        this._analysisRules.internalValue = config.analysisRules;
        this._description = config.description;
        this._name = config.name;
        this._selectedAnalysisMethods = config.selectedAnalysisMethods;
        this._tableReference.internalValue = config.tableReference;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // allowed_columns - computed: false, optional: false, required: true
    private _allowedColumns?: string[]; 
    public get allowedColumns() {
        return this.getListAttribute('allowed_columns');
    }
    public set allowedColumns(value: string[]) {
        this._allowedColumns = value;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedColumnsInput() {
        return this._allowedColumns;
    }

    // analysis_method - computed: false, optional: false, required: true
    private _analysisMethod?: string; 
    public get analysisMethod() {
        return this.getStringAttribute('analysis_method');
    }
    public set analysisMethod(value: string) {
        this._analysisMethod = value;
    }
    // Temporarily expose input value. Use with caution.
    public get analysisMethodInput() {
        return this._analysisMethod;
    }

    // analysis_rules - computed: true, optional: true, required: false
    private _analysisRules = new CcConfiguredTable.AnalysisRulePropertyList(this, "analysis_rules", false);
    public get analysisRules() {
        return this._analysisRules;
    }
    public putAnalysisRules(value: CcConfiguredTable.AnalysisRuleProperty[] | cdktn.IResolvable) {
        this._analysisRules.internalValue = value;
    }
    public resetAnalysisRules() {
        this._analysisRules.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get analysisRulesInput() {
        return this._analysisRules.internalValue;
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // configured_table_identifier - computed: true, optional: false, required: false
    public get configuredTableIdentifier() {
        return this.getStringAttribute('configured_table_identifier');
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

    // selected_analysis_methods - computed: true, optional: true, required: false
    private _selectedAnalysisMethods?: string[]; 
    public get selectedAnalysisMethods() {
        return this.getListAttribute('selected_analysis_methods');
    }
    public set selectedAnalysisMethods(value: string[]) {
        this._selectedAnalysisMethods = value;
    }
    public resetSelectedAnalysisMethods() {
        this._selectedAnalysisMethods = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get selectedAnalysisMethodsInput() {
        return this._selectedAnalysisMethods;
    }

    // table_reference - computed: false, optional: false, required: true
    private _tableReference = new CcConfiguredTable.TableReferencePropertyOutputReference(this, "table_reference");
    public get tableReference() {
        return this._tableReference;
    }
    public putTableReference(value: CcConfiguredTable.TableReferenceProperty) {
        this._tableReference.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get tableReferenceInput() {
        return this._tableReference.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcConfiguredTable.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcConfiguredTable.TagProperty[] | cdktn.IResolvable) {
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
            allowed_columns: cdktn.listMapper(cdktn.stringToTerraform, false)(this._allowedColumns),
            analysis_method: cdktn.stringToTerraform(this._analysisMethod),
            analysis_rules: cdktn.listMapper(ccConfiguredTableAnalysisRulePropertyToTerraform, false)(this._analysisRules.internalValue),
            description: cdktn.stringToTerraform(this._description),
            name: cdktn.stringToTerraform(this._name),
            selected_analysis_methods: cdktn.listMapper(cdktn.stringToTerraform, false)(this._selectedAnalysisMethods),
            table_reference: ccConfiguredTableTableReferencePropertyToTerraform(this._tableReference.internalValue),
            tags: cdktn.listMapper(ccConfiguredTableTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            allowed_columns: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._allowedColumns),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            analysis_method: {
                value: cdktn.stringToHclTerraform(this._analysisMethod),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            analysis_rules: {
                value: cdktn.listMapperHcl(ccConfiguredTableAnalysisRulePropertyToHclTerraform, false)(this._analysisRules.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcConfiguredTable.AnalysisRulePropertyList",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
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
            selected_analysis_methods: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._selectedAnalysisMethods),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            table_reference: {
                value: ccConfiguredTableTableReferencePropertyToHclTerraform(this._tableReference.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcConfiguredTable.TableReferenceProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccConfiguredTableTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcConfiguredTable.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccConfiguredTableAggregateColumnPropertyToTerraform(struct?: CcConfiguredTable.AggregateColumnProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        column_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.columnNames),
        function: cdktn.stringToTerraform(struct!.function),
    }
}


export function ccConfiguredTableAggregateColumnPropertyToHclTerraform(struct?: CcConfiguredTable.AggregateColumnProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        column_names: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.columnNames),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        function: {
            value: cdktn.stringToHclTerraform(struct!.function),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConfiguredTableAggregationConstraintPropertyToTerraform(struct?: CcConfiguredTable.AggregationConstraintProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        column_name: cdktn.stringToTerraform(struct!.columnName),
        minimum: cdktn.numberToTerraform(struct!.minimum),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccConfiguredTableAggregationConstraintPropertyToHclTerraform(struct?: CcConfiguredTable.AggregationConstraintProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        column_name: {
            value: cdktn.stringToHclTerraform(struct!.columnName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        minimum: {
            value: cdktn.numberToHclTerraform(struct!.minimum),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
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


export function ccConfiguredTableAnalysisRuleAggregationPropertyToTerraform(struct?: CcConfiguredTable.AnalysisRuleAggregationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        additional_analyses: cdktn.stringToTerraform(struct!.additionalAnalyses),
        aggregate_columns: cdktn.listMapper(ccConfiguredTableAggregateColumnPropertyToTerraform, false)(struct!.aggregateColumns),
        allowed_join_operators: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedJoinOperators),
        dimension_columns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.dimensionColumns),
        join_columns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.joinColumns),
        join_required: cdktn.stringToTerraform(struct!.joinRequired),
        output_constraints: cdktn.listMapper(ccConfiguredTableAggregationConstraintPropertyToTerraform, false)(struct!.outputConstraints),
        scalar_functions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.scalarFunctions),
    }
}


export function ccConfiguredTableAnalysisRuleAggregationPropertyToHclTerraform(struct?: CcConfiguredTable.AnalysisRuleAggregationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        additional_analyses: {
            value: cdktn.stringToHclTerraform(struct!.additionalAnalyses),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        aggregate_columns: {
            value: cdktn.listMapperHcl(ccConfiguredTableAggregateColumnPropertyToHclTerraform, false)(struct!.aggregateColumns),
            isBlock: true,
            type: "list",
            storageClassType: "AggregateColumnPropertyList",
        },
        allowed_join_operators: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedJoinOperators),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        dimension_columns: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.dimensionColumns),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        join_columns: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.joinColumns),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        join_required: {
            value: cdktn.stringToHclTerraform(struct!.joinRequired),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        output_constraints: {
            value: cdktn.listMapperHcl(ccConfiguredTableAggregationConstraintPropertyToHclTerraform, false)(struct!.outputConstraints),
            isBlock: true,
            type: "list",
            storageClassType: "AggregationConstraintPropertyList",
        },
        scalar_functions: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.scalarFunctions),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConfiguredTableDifferentialPrivacyColumnPropertyToTerraform(struct?: CcConfiguredTable.DifferentialPrivacyColumnProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccConfiguredTableDifferentialPrivacyColumnPropertyToHclTerraform(struct?: CcConfiguredTable.DifferentialPrivacyColumnProperty | cdktn.IResolvable): any {
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


export function ccConfiguredTableDifferentialPrivacyPropertyToTerraform(struct?: CcConfiguredTable.DifferentialPrivacyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        columns: cdktn.listMapper(ccConfiguredTableDifferentialPrivacyColumnPropertyToTerraform, false)(struct!.columns),
    }
}


export function ccConfiguredTableDifferentialPrivacyPropertyToHclTerraform(struct?: CcConfiguredTable.DifferentialPrivacyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        columns: {
            value: cdktn.listMapperHcl(ccConfiguredTableDifferentialPrivacyColumnPropertyToHclTerraform, false)(struct!.columns),
            isBlock: true,
            type: "list",
            storageClassType: "DifferentialPrivacyColumnPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConfiguredTableAnalysisRuleCustomPropertyToTerraform(struct?: CcConfiguredTable.AnalysisRuleCustomProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        additional_analyses: cdktn.stringToTerraform(struct!.additionalAnalyses),
        allowed_analyses: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedAnalyses),
        allowed_analysis_providers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedAnalysisProviders),
        differential_privacy: ccConfiguredTableDifferentialPrivacyPropertyToTerraform(struct!.differentialPrivacy),
        disallowed_output_columns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.disallowedOutputColumns),
    }
}


export function ccConfiguredTableAnalysisRuleCustomPropertyToHclTerraform(struct?: CcConfiguredTable.AnalysisRuleCustomProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        additional_analyses: {
            value: cdktn.stringToHclTerraform(struct!.additionalAnalyses),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        allowed_analyses: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedAnalyses),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        allowed_analysis_providers: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedAnalysisProviders),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        differential_privacy: {
            value: ccConfiguredTableDifferentialPrivacyPropertyToHclTerraform(struct!.differentialPrivacy),
            isBlock: true,
            type: "struct",
            storageClassType: "DifferentialPrivacyProperty",
        },
        disallowed_output_columns: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.disallowedOutputColumns),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConfiguredTableAnalysisRuleListPropertyToTerraform(struct?: CcConfiguredTable.AnalysisRuleListProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        additional_analyses: cdktn.stringToTerraform(struct!.additionalAnalyses),
        allowed_join_operators: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedJoinOperators),
        join_columns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.joinColumns),
        list_columns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.listColumns),
    }
}


export function ccConfiguredTableAnalysisRuleListPropertyToHclTerraform(struct?: CcConfiguredTable.AnalysisRuleListProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        additional_analyses: {
            value: cdktn.stringToHclTerraform(struct!.additionalAnalyses),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        allowed_join_operators: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedJoinOperators),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        join_columns: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.joinColumns),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        list_columns: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.listColumns),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConfiguredTableConfiguredTableAnalysisRulePolicyV1PropertyToTerraform(struct?: CcConfiguredTable.ConfiguredTableAnalysisRulePolicyV1Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        aggregation: ccConfiguredTableAnalysisRuleAggregationPropertyToTerraform(struct!.aggregation),
        custom: ccConfiguredTableAnalysisRuleCustomPropertyToTerraform(struct!.custom),
        list: ccConfiguredTableAnalysisRuleListPropertyToTerraform(struct!.list),
    }
}


export function ccConfiguredTableConfiguredTableAnalysisRulePolicyV1PropertyToHclTerraform(struct?: CcConfiguredTable.ConfiguredTableAnalysisRulePolicyV1Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        aggregation: {
            value: ccConfiguredTableAnalysisRuleAggregationPropertyToHclTerraform(struct!.aggregation),
            isBlock: true,
            type: "struct",
            storageClassType: "AnalysisRuleAggregationProperty",
        },
        custom: {
            value: ccConfiguredTableAnalysisRuleCustomPropertyToHclTerraform(struct!.custom),
            isBlock: true,
            type: "struct",
            storageClassType: "AnalysisRuleCustomProperty",
        },
        list: {
            value: ccConfiguredTableAnalysisRuleListPropertyToHclTerraform(struct!.list),
            isBlock: true,
            type: "struct",
            storageClassType: "AnalysisRuleListProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConfiguredTableConfiguredTableAnalysisRulePolicyPropertyToTerraform(struct?: CcConfiguredTable.ConfiguredTableAnalysisRulePolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        v1: ccConfiguredTableConfiguredTableAnalysisRulePolicyV1PropertyToTerraform(struct!.v1),
    }
}


export function ccConfiguredTableConfiguredTableAnalysisRulePolicyPropertyToHclTerraform(struct?: CcConfiguredTable.ConfiguredTableAnalysisRulePolicyProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        v1: {
            value: ccConfiguredTableConfiguredTableAnalysisRulePolicyV1PropertyToHclTerraform(struct!.v1),
            isBlock: true,
            type: "struct",
            storageClassType: "ConfiguredTableAnalysisRulePolicyV1Property",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConfiguredTableAnalysisRulePropertyToTerraform(struct?: CcConfiguredTable.AnalysisRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        policy: ccConfiguredTableConfiguredTableAnalysisRulePolicyPropertyToTerraform(struct!.policy),
        type: cdktn.stringToTerraform(struct!.type),
    }
}


export function ccConfiguredTableAnalysisRulePropertyToHclTerraform(struct?: CcConfiguredTable.AnalysisRuleProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        policy: {
            value: ccConfiguredTableConfiguredTableAnalysisRulePolicyPropertyToHclTerraform(struct!.policy),
            isBlock: true,
            type: "struct",
            storageClassType: "ConfiguredTableAnalysisRulePolicyProperty",
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


export function ccConfiguredTableAthenaTableReferencePropertyToTerraform(struct?: CcConfiguredTable.AthenaTableReferenceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        catalog_name: cdktn.stringToTerraform(struct!.catalogName),
        database_name: cdktn.stringToTerraform(struct!.databaseName),
        output_location: cdktn.stringToTerraform(struct!.outputLocation),
        region: cdktn.stringToTerraform(struct!.region),
        table_name: cdktn.stringToTerraform(struct!.tableName),
        work_group: cdktn.stringToTerraform(struct!.workGroup),
    }
}


export function ccConfiguredTableAthenaTableReferencePropertyToHclTerraform(struct?: CcConfiguredTable.AthenaTableReferenceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        catalog_name: {
            value: cdktn.stringToHclTerraform(struct!.catalogName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        database_name: {
            value: cdktn.stringToHclTerraform(struct!.databaseName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        output_location: {
            value: cdktn.stringToHclTerraform(struct!.outputLocation),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        region: {
            value: cdktn.stringToHclTerraform(struct!.region),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        table_name: {
            value: cdktn.stringToHclTerraform(struct!.tableName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        work_group: {
            value: cdktn.stringToHclTerraform(struct!.workGroup),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConfiguredTableGlueTableReferencePropertyToTerraform(struct?: CcConfiguredTable.GlueTableReferenceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        database_name: cdktn.stringToTerraform(struct!.databaseName),
        region: cdktn.stringToTerraform(struct!.region),
        table_name: cdktn.stringToTerraform(struct!.tableName),
    }
}


export function ccConfiguredTableGlueTableReferencePropertyToHclTerraform(struct?: CcConfiguredTable.GlueTableReferenceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        database_name: {
            value: cdktn.stringToHclTerraform(struct!.databaseName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        region: {
            value: cdktn.stringToHclTerraform(struct!.region),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        table_name: {
            value: cdktn.stringToHclTerraform(struct!.tableName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConfiguredTableSnowflakeTableSchemaV1PropertyToTerraform(struct?: CcConfiguredTable.SnowflakeTableSchemaV1Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        column_name: cdktn.stringToTerraform(struct!.columnName),
        column_type: cdktn.stringToTerraform(struct!.columnType),
    }
}


export function ccConfiguredTableSnowflakeTableSchemaV1PropertyToHclTerraform(struct?: CcConfiguredTable.SnowflakeTableSchemaV1Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        column_name: {
            value: cdktn.stringToHclTerraform(struct!.columnName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        column_type: {
            value: cdktn.stringToHclTerraform(struct!.columnType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConfiguredTableSnowflakeTableSchemaPropertyToTerraform(struct?: CcConfiguredTable.SnowflakeTableSchemaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        v1: cdktn.listMapper(ccConfiguredTableSnowflakeTableSchemaV1PropertyToTerraform, false)(struct!.v1),
    }
}


export function ccConfiguredTableSnowflakeTableSchemaPropertyToHclTerraform(struct?: CcConfiguredTable.SnowflakeTableSchemaProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        v1: {
            value: cdktn.listMapperHcl(ccConfiguredTableSnowflakeTableSchemaV1PropertyToHclTerraform, false)(struct!.v1),
            isBlock: true,
            type: "list",
            storageClassType: "SnowflakeTableSchemaV1PropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConfiguredTableSnowflakeTableReferencePropertyToTerraform(struct?: CcConfiguredTable.SnowflakeTableReferenceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        account_identifier: cdktn.stringToTerraform(struct!.accountIdentifier),
        database_name: cdktn.stringToTerraform(struct!.databaseName),
        schema_name: cdktn.stringToTerraform(struct!.schemaName),
        secret_arn: cdktn.stringToTerraform(struct!.secretArn),
        table_name: cdktn.stringToTerraform(struct!.tableName),
        table_schema: ccConfiguredTableSnowflakeTableSchemaPropertyToTerraform(struct!.tableSchema),
    }
}


export function ccConfiguredTableSnowflakeTableReferencePropertyToHclTerraform(struct?: CcConfiguredTable.SnowflakeTableReferenceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        account_identifier: {
            value: cdktn.stringToHclTerraform(struct!.accountIdentifier),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        database_name: {
            value: cdktn.stringToHclTerraform(struct!.databaseName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        schema_name: {
            value: cdktn.stringToHclTerraform(struct!.schemaName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secret_arn: {
            value: cdktn.stringToHclTerraform(struct!.secretArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        table_name: {
            value: cdktn.stringToHclTerraform(struct!.tableName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        table_schema: {
            value: ccConfiguredTableSnowflakeTableSchemaPropertyToHclTerraform(struct!.tableSchema),
            isBlock: true,
            type: "struct",
            storageClassType: "SnowflakeTableSchemaProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConfiguredTableTableReferencePropertyToTerraform(struct?: CcConfiguredTable.TableReferenceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        athena: ccConfiguredTableAthenaTableReferencePropertyToTerraform(struct!.athena),
        glue: ccConfiguredTableGlueTableReferencePropertyToTerraform(struct!.glue),
        snowflake: ccConfiguredTableSnowflakeTableReferencePropertyToTerraform(struct!.snowflake),
    }
}


export function ccConfiguredTableTableReferencePropertyToHclTerraform(struct?: CcConfiguredTable.TableReferenceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        athena: {
            value: ccConfiguredTableAthenaTableReferencePropertyToHclTerraform(struct!.athena),
            isBlock: true,
            type: "struct",
            storageClassType: "AthenaTableReferenceProperty",
        },
        glue: {
            value: ccConfiguredTableGlueTableReferencePropertyToHclTerraform(struct!.glue),
            isBlock: true,
            type: "struct",
            storageClassType: "GlueTableReferenceProperty",
        },
        snowflake: {
            value: ccConfiguredTableSnowflakeTableReferencePropertyToHclTerraform(struct!.snowflake),
            isBlock: true,
            type: "struct",
            storageClassType: "SnowflakeTableReferenceProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccConfiguredTableTagPropertyToTerraform(struct?: CcConfiguredTable.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccConfiguredTableTagPropertyToHclTerraform(struct?: CcConfiguredTable.TagProperty | cdktn.IResolvable): any {
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


export namespace CcConfiguredTable {
export interface AggregateColumnProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table#column_names CcConfiguredTable#column_names}
    */
    readonly columnNames?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table#function CcConfiguredTable#function}
    */
    readonly function?: string;
}
export class AggregateColumnPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AggregateColumnProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._columnNames !== undefined) {
            hasAnyValues = true;
            internalValueResult.columnNames = this._columnNames;
        }
        if (this._function !== undefined) {
            hasAnyValues = true;
            internalValueResult.function = this._function;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AggregateColumnProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._columnNames = undefined;
            this._function = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._columnNames = value.columnNames;
            this._function = value.function;
        }
    }

    // column_names - computed: true, optional: true, required: false
    private _columnNames?: string[]; 
    public get columnNames() {
        return this.getListAttribute('column_names');
    }
    public set columnNames(value: string[]) {
        this._columnNames = value;
    }
    public resetColumnNames() {
        this._columnNames = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get columnNamesInput() {
        return this._columnNames;
    }

    // function - computed: true, optional: true, required: false
    private _function?: string; 
    public get function() {
        return this.getStringAttribute('function');
    }
    public set function(value: string) {
        this._function = value;
    }
    public resetFunction() {
        this._function = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get functionInput() {
        return this._function;
    }
}

export class AggregateColumnPropertyList extends cdktn.ComplexList {
    public internalValue? : AggregateColumnProperty[] | cdktn.IResolvable

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
    public get(index: number): AggregateColumnPropertyOutputReference {
        return new AggregateColumnPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface AggregationConstraintProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table#column_name CcConfiguredTable#column_name}
    */
    readonly columnName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table#minimum CcConfiguredTable#minimum}
    */
    readonly minimum?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table#type CcConfiguredTable#type}
    */
    readonly type?: string;
}
export class AggregationConstraintPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AggregationConstraintProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._columnName !== undefined) {
            hasAnyValues = true;
            internalValueResult.columnName = this._columnName;
        }
        if (this._minimum !== undefined) {
            hasAnyValues = true;
            internalValueResult.minimum = this._minimum;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AggregationConstraintProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._columnName = undefined;
            this._minimum = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._columnName = value.columnName;
            this._minimum = value.minimum;
            this._type = value.type;
        }
    }

    // column_name - computed: true, optional: true, required: false
    private _columnName?: string; 
    public get columnName() {
        return this.getStringAttribute('column_name');
    }
    public set columnName(value: string) {
        this._columnName = value;
    }
    public resetColumnName() {
        this._columnName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get columnNameInput() {
        return this._columnName;
    }

    // minimum - computed: true, optional: true, required: false
    private _minimum?: number; 
    public get minimum() {
        return this.getNumberAttribute('minimum');
    }
    public set minimum(value: number) {
        this._minimum = value;
    }
    public resetMinimum() {
        this._minimum = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get minimumInput() {
        return this._minimum;
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

export class AggregationConstraintPropertyList extends cdktn.ComplexList {
    public internalValue? : AggregationConstraintProperty[] | cdktn.IResolvable

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
    public get(index: number): AggregationConstraintPropertyOutputReference {
        return new AggregationConstraintPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface AnalysisRuleAggregationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table#additional_analyses CcConfiguredTable#additional_analyses}
    */
    readonly additionalAnalyses?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table#aggregate_columns CcConfiguredTable#aggregate_columns}
    */
    readonly aggregateColumns?: AggregateColumnProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table#allowed_join_operators CcConfiguredTable#allowed_join_operators}
    */
    readonly allowedJoinOperators?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table#dimension_columns CcConfiguredTable#dimension_columns}
    */
    readonly dimensionColumns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table#join_columns CcConfiguredTable#join_columns}
    */
    readonly joinColumns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table#join_required CcConfiguredTable#join_required}
    */
    readonly joinRequired?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table#output_constraints CcConfiguredTable#output_constraints}
    */
    readonly outputConstraints?: AggregationConstraintProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table#scalar_functions CcConfiguredTable#scalar_functions}
    */
    readonly scalarFunctions?: string[];
}
export class AnalysisRuleAggregationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AnalysisRuleAggregationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._additionalAnalyses !== undefined) {
            hasAnyValues = true;
            internalValueResult.additionalAnalyses = this._additionalAnalyses;
        }
        if (this._aggregateColumns?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.aggregateColumns = this._aggregateColumns?.internalValue;
        }
        if (this._allowedJoinOperators !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedJoinOperators = this._allowedJoinOperators;
        }
        if (this._dimensionColumns !== undefined) {
            hasAnyValues = true;
            internalValueResult.dimensionColumns = this._dimensionColumns;
        }
        if (this._joinColumns !== undefined) {
            hasAnyValues = true;
            internalValueResult.joinColumns = this._joinColumns;
        }
        if (this._joinRequired !== undefined) {
            hasAnyValues = true;
            internalValueResult.joinRequired = this._joinRequired;
        }
        if (this._outputConstraints?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.outputConstraints = this._outputConstraints?.internalValue;
        }
        if (this._scalarFunctions !== undefined) {
            hasAnyValues = true;
            internalValueResult.scalarFunctions = this._scalarFunctions;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AnalysisRuleAggregationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._additionalAnalyses = undefined;
            this._aggregateColumns.internalValue = undefined;
            this._allowedJoinOperators = undefined;
            this._dimensionColumns = undefined;
            this._joinColumns = undefined;
            this._joinRequired = undefined;
            this._outputConstraints.internalValue = undefined;
            this._scalarFunctions = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._additionalAnalyses = value.additionalAnalyses;
            this._aggregateColumns.internalValue = value.aggregateColumns;
            this._allowedJoinOperators = value.allowedJoinOperators;
            this._dimensionColumns = value.dimensionColumns;
            this._joinColumns = value.joinColumns;
            this._joinRequired = value.joinRequired;
            this._outputConstraints.internalValue = value.outputConstraints;
            this._scalarFunctions = value.scalarFunctions;
        }
    }

    // additional_analyses - computed: true, optional: true, required: false
    private _additionalAnalyses?: string; 
    public get additionalAnalyses() {
        return this.getStringAttribute('additional_analyses');
    }
    public set additionalAnalyses(value: string) {
        this._additionalAnalyses = value;
    }
    public resetAdditionalAnalyses() {
        this._additionalAnalyses = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get additionalAnalysesInput() {
        return this._additionalAnalyses;
    }

    // aggregate_columns - computed: true, optional: true, required: false
    private _aggregateColumns = new AggregateColumnPropertyList(this, "aggregate_columns", false);
    public get aggregateColumns() {
        return this._aggregateColumns;
    }
    public putAggregateColumns(value: AggregateColumnProperty[] | cdktn.IResolvable) {
        this._aggregateColumns.internalValue = value;
    }
    public resetAggregateColumns() {
        this._aggregateColumns.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get aggregateColumnsInput() {
        return this._aggregateColumns.internalValue;
    }

    // allowed_join_operators - computed: true, optional: true, required: false
    private _allowedJoinOperators?: string[]; 
    public get allowedJoinOperators() {
        return this.getListAttribute('allowed_join_operators');
    }
    public set allowedJoinOperators(value: string[]) {
        this._allowedJoinOperators = value;
    }
    public resetAllowedJoinOperators() {
        this._allowedJoinOperators = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedJoinOperatorsInput() {
        return this._allowedJoinOperators;
    }

    // dimension_columns - computed: true, optional: true, required: false
    private _dimensionColumns?: string[]; 
    public get dimensionColumns() {
        return this.getListAttribute('dimension_columns');
    }
    public set dimensionColumns(value: string[]) {
        this._dimensionColumns = value;
    }
    public resetDimensionColumns() {
        this._dimensionColumns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dimensionColumnsInput() {
        return this._dimensionColumns;
    }

    // join_columns - computed: true, optional: true, required: false
    private _joinColumns?: string[]; 
    public get joinColumns() {
        return this.getListAttribute('join_columns');
    }
    public set joinColumns(value: string[]) {
        this._joinColumns = value;
    }
    public resetJoinColumns() {
        this._joinColumns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get joinColumnsInput() {
        return this._joinColumns;
    }

    // join_required - computed: true, optional: true, required: false
    private _joinRequired?: string; 
    public get joinRequired() {
        return this.getStringAttribute('join_required');
    }
    public set joinRequired(value: string) {
        this._joinRequired = value;
    }
    public resetJoinRequired() {
        this._joinRequired = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get joinRequiredInput() {
        return this._joinRequired;
    }

    // output_constraints - computed: true, optional: true, required: false
    private _outputConstraints = new AggregationConstraintPropertyList(this, "output_constraints", false);
    public get outputConstraints() {
        return this._outputConstraints;
    }
    public putOutputConstraints(value: AggregationConstraintProperty[] | cdktn.IResolvable) {
        this._outputConstraints.internalValue = value;
    }
    public resetOutputConstraints() {
        this._outputConstraints.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outputConstraintsInput() {
        return this._outputConstraints.internalValue;
    }

    // scalar_functions - computed: true, optional: true, required: false
    private _scalarFunctions?: string[]; 
    public get scalarFunctions() {
        return this.getListAttribute('scalar_functions');
    }
    public set scalarFunctions(value: string[]) {
        this._scalarFunctions = value;
    }
    public resetScalarFunctions() {
        this._scalarFunctions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scalarFunctionsInput() {
        return this._scalarFunctions;
    }
}
export interface DifferentialPrivacyColumnProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table#name CcConfiguredTable#name}
    */
    readonly name?: string;
}
export class DifferentialPrivacyColumnPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): DifferentialPrivacyColumnProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: DifferentialPrivacyColumnProperty | cdktn.IResolvable | undefined) {
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
}

export class DifferentialPrivacyColumnPropertyList extends cdktn.ComplexList {
    public internalValue? : DifferentialPrivacyColumnProperty[] | cdktn.IResolvable

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
    public get(index: number): DifferentialPrivacyColumnPropertyOutputReference {
        return new DifferentialPrivacyColumnPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface DifferentialPrivacyProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table#columns CcConfiguredTable#columns}
    */
    readonly columns?: DifferentialPrivacyColumnProperty[] | cdktn.IResolvable;
}
export class DifferentialPrivacyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DifferentialPrivacyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._columns?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.columns = this._columns?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DifferentialPrivacyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._columns.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._columns.internalValue = value.columns;
        }
    }

    // columns - computed: true, optional: true, required: false
    private _columns = new DifferentialPrivacyColumnPropertyList(this, "columns", false);
    public get columns() {
        return this._columns;
    }
    public putColumns(value: DifferentialPrivacyColumnProperty[] | cdktn.IResolvable) {
        this._columns.internalValue = value;
    }
    public resetColumns() {
        this._columns.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get columnsInput() {
        return this._columns.internalValue;
    }
}
export interface AnalysisRuleCustomProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table#additional_analyses CcConfiguredTable#additional_analyses}
    */
    readonly additionalAnalyses?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table#allowed_analyses CcConfiguredTable#allowed_analyses}
    */
    readonly allowedAnalyses?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table#allowed_analysis_providers CcConfiguredTable#allowed_analysis_providers}
    */
    readonly allowedAnalysisProviders?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table#differential_privacy CcConfiguredTable#differential_privacy}
    */
    readonly differentialPrivacy?: DifferentialPrivacyProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table#disallowed_output_columns CcConfiguredTable#disallowed_output_columns}
    */
    readonly disallowedOutputColumns?: string[];
}
export class AnalysisRuleCustomPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AnalysisRuleCustomProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._additionalAnalyses !== undefined) {
            hasAnyValues = true;
            internalValueResult.additionalAnalyses = this._additionalAnalyses;
        }
        if (this._allowedAnalyses !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedAnalyses = this._allowedAnalyses;
        }
        if (this._allowedAnalysisProviders !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedAnalysisProviders = this._allowedAnalysisProviders;
        }
        if (this._differentialPrivacy?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.differentialPrivacy = this._differentialPrivacy?.internalValue;
        }
        if (this._disallowedOutputColumns !== undefined) {
            hasAnyValues = true;
            internalValueResult.disallowedOutputColumns = this._disallowedOutputColumns;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AnalysisRuleCustomProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._additionalAnalyses = undefined;
            this._allowedAnalyses = undefined;
            this._allowedAnalysisProviders = undefined;
            this._differentialPrivacy.internalValue = undefined;
            this._disallowedOutputColumns = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._additionalAnalyses = value.additionalAnalyses;
            this._allowedAnalyses = value.allowedAnalyses;
            this._allowedAnalysisProviders = value.allowedAnalysisProviders;
            this._differentialPrivacy.internalValue = value.differentialPrivacy;
            this._disallowedOutputColumns = value.disallowedOutputColumns;
        }
    }

    // additional_analyses - computed: true, optional: true, required: false
    private _additionalAnalyses?: string; 
    public get additionalAnalyses() {
        return this.getStringAttribute('additional_analyses');
    }
    public set additionalAnalyses(value: string) {
        this._additionalAnalyses = value;
    }
    public resetAdditionalAnalyses() {
        this._additionalAnalyses = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get additionalAnalysesInput() {
        return this._additionalAnalyses;
    }

    // allowed_analyses - computed: true, optional: true, required: false
    private _allowedAnalyses?: string[]; 
    public get allowedAnalyses() {
        return this.getListAttribute('allowed_analyses');
    }
    public set allowedAnalyses(value: string[]) {
        this._allowedAnalyses = value;
    }
    public resetAllowedAnalyses() {
        this._allowedAnalyses = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedAnalysesInput() {
        return this._allowedAnalyses;
    }

    // allowed_analysis_providers - computed: true, optional: true, required: false
    private _allowedAnalysisProviders?: string[]; 
    public get allowedAnalysisProviders() {
        return this.getListAttribute('allowed_analysis_providers');
    }
    public set allowedAnalysisProviders(value: string[]) {
        this._allowedAnalysisProviders = value;
    }
    public resetAllowedAnalysisProviders() {
        this._allowedAnalysisProviders = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedAnalysisProvidersInput() {
        return this._allowedAnalysisProviders;
    }

    // differential_privacy - computed: true, optional: true, required: false
    private _differentialPrivacy = new DifferentialPrivacyPropertyOutputReference(this, "differential_privacy");
    public get differentialPrivacy() {
        return this._differentialPrivacy;
    }
    public putDifferentialPrivacy(value: DifferentialPrivacyProperty) {
        this._differentialPrivacy.internalValue = value;
    }
    public resetDifferentialPrivacy() {
        this._differentialPrivacy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get differentialPrivacyInput() {
        return this._differentialPrivacy.internalValue;
    }

    // disallowed_output_columns - computed: true, optional: true, required: false
    private _disallowedOutputColumns?: string[]; 
    public get disallowedOutputColumns() {
        return this.getListAttribute('disallowed_output_columns');
    }
    public set disallowedOutputColumns(value: string[]) {
        this._disallowedOutputColumns = value;
    }
    public resetDisallowedOutputColumns() {
        this._disallowedOutputColumns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get disallowedOutputColumnsInput() {
        return this._disallowedOutputColumns;
    }
}
export interface AnalysisRuleListProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table#additional_analyses CcConfiguredTable#additional_analyses}
    */
    readonly additionalAnalyses?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table#allowed_join_operators CcConfiguredTable#allowed_join_operators}
    */
    readonly allowedJoinOperators?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table#join_columns CcConfiguredTable#join_columns}
    */
    readonly joinColumns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table#list_columns CcConfiguredTable#list_columns}
    */
    readonly listColumns?: string[];
}
export class AnalysisRuleListPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AnalysisRuleListProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._additionalAnalyses !== undefined) {
            hasAnyValues = true;
            internalValueResult.additionalAnalyses = this._additionalAnalyses;
        }
        if (this._allowedJoinOperators !== undefined) {
            hasAnyValues = true;
            internalValueResult.allowedJoinOperators = this._allowedJoinOperators;
        }
        if (this._joinColumns !== undefined) {
            hasAnyValues = true;
            internalValueResult.joinColumns = this._joinColumns;
        }
        if (this._listColumns !== undefined) {
            hasAnyValues = true;
            internalValueResult.listColumns = this._listColumns;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AnalysisRuleListProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._additionalAnalyses = undefined;
            this._allowedJoinOperators = undefined;
            this._joinColumns = undefined;
            this._listColumns = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._additionalAnalyses = value.additionalAnalyses;
            this._allowedJoinOperators = value.allowedJoinOperators;
            this._joinColumns = value.joinColumns;
            this._listColumns = value.listColumns;
        }
    }

    // additional_analyses - computed: true, optional: true, required: false
    private _additionalAnalyses?: string; 
    public get additionalAnalyses() {
        return this.getStringAttribute('additional_analyses');
    }
    public set additionalAnalyses(value: string) {
        this._additionalAnalyses = value;
    }
    public resetAdditionalAnalyses() {
        this._additionalAnalyses = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get additionalAnalysesInput() {
        return this._additionalAnalyses;
    }

    // allowed_join_operators - computed: true, optional: true, required: false
    private _allowedJoinOperators?: string[]; 
    public get allowedJoinOperators() {
        return this.getListAttribute('allowed_join_operators');
    }
    public set allowedJoinOperators(value: string[]) {
        this._allowedJoinOperators = value;
    }
    public resetAllowedJoinOperators() {
        this._allowedJoinOperators = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedJoinOperatorsInput() {
        return this._allowedJoinOperators;
    }

    // join_columns - computed: true, optional: true, required: false
    private _joinColumns?: string[]; 
    public get joinColumns() {
        return this.getListAttribute('join_columns');
    }
    public set joinColumns(value: string[]) {
        this._joinColumns = value;
    }
    public resetJoinColumns() {
        this._joinColumns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get joinColumnsInput() {
        return this._joinColumns;
    }

    // list_columns - computed: true, optional: true, required: false
    private _listColumns?: string[]; 
    public get listColumns() {
        return this.getListAttribute('list_columns');
    }
    public set listColumns(value: string[]) {
        this._listColumns = value;
    }
    public resetListColumns() {
        this._listColumns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get listColumnsInput() {
        return this._listColumns;
    }
}
export interface ConfiguredTableAnalysisRulePolicyV1Property {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table#aggregation CcConfiguredTable#aggregation}
    */
    readonly aggregation?: AnalysisRuleAggregationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table#custom CcConfiguredTable#custom}
    */
    readonly custom?: AnalysisRuleCustomProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table#list CcConfiguredTable#list}
    */
    readonly list?: AnalysisRuleListProperty;
}
export class ConfiguredTableAnalysisRulePolicyV1PropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConfiguredTableAnalysisRulePolicyV1Property | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._aggregation?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.aggregation = this._aggregation?.internalValue;
        }
        if (this._custom?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.custom = this._custom?.internalValue;
        }
        if (this._list?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.list = this._list?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConfiguredTableAnalysisRulePolicyV1Property | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._aggregation.internalValue = undefined;
            this._custom.internalValue = undefined;
            this._list.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._aggregation.internalValue = value.aggregation;
            this._custom.internalValue = value.custom;
            this._list.internalValue = value.list;
        }
    }

    // aggregation - computed: true, optional: true, required: false
    private _aggregation = new AnalysisRuleAggregationPropertyOutputReference(this, "aggregation");
    public get aggregation() {
        return this._aggregation;
    }
    public putAggregation(value: AnalysisRuleAggregationProperty) {
        this._aggregation.internalValue = value;
    }
    public resetAggregation() {
        this._aggregation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get aggregationInput() {
        return this._aggregation.internalValue;
    }

    // custom - computed: true, optional: true, required: false
    private _custom = new AnalysisRuleCustomPropertyOutputReference(this, "custom");
    public get custom() {
        return this._custom;
    }
    public putCustom(value: AnalysisRuleCustomProperty) {
        this._custom.internalValue = value;
    }
    public resetCustom() {
        this._custom.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customInput() {
        return this._custom.internalValue;
    }

    // list - computed: true, optional: true, required: false
    private _list = new AnalysisRuleListPropertyOutputReference(this, "list");
    public get list() {
        return this._list;
    }
    public putList(value: AnalysisRuleListProperty) {
        this._list.internalValue = value;
    }
    public resetList() {
        this._list.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get listInput() {
        return this._list.internalValue;
    }
}
export interface ConfiguredTableAnalysisRulePolicyProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table#v1 CcConfiguredTable#v1}
    */
    readonly v1?: ConfiguredTableAnalysisRulePolicyV1Property;
}
export class ConfiguredTableAnalysisRulePolicyPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConfiguredTableAnalysisRulePolicyProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._v1?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.v1 = this._v1?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConfiguredTableAnalysisRulePolicyProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._v1.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._v1.internalValue = value.v1;
        }
    }

    // v1 - computed: true, optional: true, required: false
    private _v1 = new ConfiguredTableAnalysisRulePolicyV1PropertyOutputReference(this, "v1");
    public get v1() {
        return this._v1;
    }
    public putV1(value: ConfiguredTableAnalysisRulePolicyV1Property) {
        this._v1.internalValue = value;
    }
    public resetV1() {
        this._v1.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get v1Input() {
        return this._v1.internalValue;
    }
}
export interface AnalysisRuleProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table#policy CcConfiguredTable#policy}
    */
    readonly policy?: ConfiguredTableAnalysisRulePolicyProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table#type CcConfiguredTable#type}
    */
    readonly type?: string;
}
export class AnalysisRulePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): AnalysisRuleProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._policy?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.policy = this._policy?.internalValue;
        }
        if (this._type !== undefined) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AnalysisRuleProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._policy.internalValue = undefined;
            this._type = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._policy.internalValue = value.policy;
            this._type = value.type;
        }
    }

    // policy - computed: true, optional: true, required: false
    private _policy = new ConfiguredTableAnalysisRulePolicyPropertyOutputReference(this, "policy");
    public get policy() {
        return this._policy;
    }
    public putPolicy(value: ConfiguredTableAnalysisRulePolicyProperty) {
        this._policy.internalValue = value;
    }
    public resetPolicy() {
        this._policy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get policyInput() {
        return this._policy.internalValue;
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

export class AnalysisRulePropertyList extends cdktn.ComplexList {
    public internalValue? : AnalysisRuleProperty[] | cdktn.IResolvable

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
    public get(index: number): AnalysisRulePropertyOutputReference {
        return new AnalysisRulePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface AthenaTableReferenceProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table#catalog_name CcConfiguredTable#catalog_name}
    */
    readonly catalogName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table#database_name CcConfiguredTable#database_name}
    */
    readonly databaseName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table#output_location CcConfiguredTable#output_location}
    */
    readonly outputLocation?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table#region CcConfiguredTable#region}
    */
    readonly region?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table#table_name CcConfiguredTable#table_name}
    */
    readonly tableName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table#work_group CcConfiguredTable#work_group}
    */
    readonly workGroup?: string;
}
export class AthenaTableReferencePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AthenaTableReferenceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._catalogName !== undefined) {
            hasAnyValues = true;
            internalValueResult.catalogName = this._catalogName;
        }
        if (this._databaseName !== undefined) {
            hasAnyValues = true;
            internalValueResult.databaseName = this._databaseName;
        }
        if (this._outputLocation !== undefined) {
            hasAnyValues = true;
            internalValueResult.outputLocation = this._outputLocation;
        }
        if (this._region !== undefined) {
            hasAnyValues = true;
            internalValueResult.region = this._region;
        }
        if (this._tableName !== undefined) {
            hasAnyValues = true;
            internalValueResult.tableName = this._tableName;
        }
        if (this._workGroup !== undefined) {
            hasAnyValues = true;
            internalValueResult.workGroup = this._workGroup;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AthenaTableReferenceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._catalogName = undefined;
            this._databaseName = undefined;
            this._outputLocation = undefined;
            this._region = undefined;
            this._tableName = undefined;
            this._workGroup = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._catalogName = value.catalogName;
            this._databaseName = value.databaseName;
            this._outputLocation = value.outputLocation;
            this._region = value.region;
            this._tableName = value.tableName;
            this._workGroup = value.workGroup;
        }
    }

    // catalog_name - computed: true, optional: true, required: false
    private _catalogName?: string; 
    public get catalogName() {
        return this.getStringAttribute('catalog_name');
    }
    public set catalogName(value: string) {
        this._catalogName = value;
    }
    public resetCatalogName() {
        this._catalogName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get catalogNameInput() {
        return this._catalogName;
    }

    // database_name - computed: true, optional: true, required: false
    private _databaseName?: string; 
    public get databaseName() {
        return this.getStringAttribute('database_name');
    }
    public set databaseName(value: string) {
        this._databaseName = value;
    }
    public resetDatabaseName() {
        this._databaseName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseNameInput() {
        return this._databaseName;
    }

    // output_location - computed: true, optional: true, required: false
    private _outputLocation?: string; 
    public get outputLocation() {
        return this.getStringAttribute('output_location');
    }
    public set outputLocation(value: string) {
        this._outputLocation = value;
    }
    public resetOutputLocation() {
        this._outputLocation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get outputLocationInput() {
        return this._outputLocation;
    }

    // region - computed: true, optional: true, required: false
    private _region?: string; 
    public get region() {
        return this.getStringAttribute('region');
    }
    public set region(value: string) {
        this._region = value;
    }
    public resetRegion() {
        this._region = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get regionInput() {
        return this._region;
    }

    // table_name - computed: true, optional: true, required: false
    private _tableName?: string; 
    public get tableName() {
        return this.getStringAttribute('table_name');
    }
    public set tableName(value: string) {
        this._tableName = value;
    }
    public resetTableName() {
        this._tableName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tableNameInput() {
        return this._tableName;
    }

    // work_group - computed: true, optional: true, required: false
    private _workGroup?: string; 
    public get workGroup() {
        return this.getStringAttribute('work_group');
    }
    public set workGroup(value: string) {
        this._workGroup = value;
    }
    public resetWorkGroup() {
        this._workGroup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get workGroupInput() {
        return this._workGroup;
    }
}
export interface GlueTableReferenceProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table#database_name CcConfiguredTable#database_name}
    */
    readonly databaseName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table#region CcConfiguredTable#region}
    */
    readonly region?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table#table_name CcConfiguredTable#table_name}
    */
    readonly tableName?: string;
}
export class GlueTableReferencePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): GlueTableReferenceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._databaseName !== undefined) {
            hasAnyValues = true;
            internalValueResult.databaseName = this._databaseName;
        }
        if (this._region !== undefined) {
            hasAnyValues = true;
            internalValueResult.region = this._region;
        }
        if (this._tableName !== undefined) {
            hasAnyValues = true;
            internalValueResult.tableName = this._tableName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: GlueTableReferenceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._databaseName = undefined;
            this._region = undefined;
            this._tableName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._databaseName = value.databaseName;
            this._region = value.region;
            this._tableName = value.tableName;
        }
    }

    // database_name - computed: true, optional: true, required: false
    private _databaseName?: string; 
    public get databaseName() {
        return this.getStringAttribute('database_name');
    }
    public set databaseName(value: string) {
        this._databaseName = value;
    }
    public resetDatabaseName() {
        this._databaseName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseNameInput() {
        return this._databaseName;
    }

    // region - computed: true, optional: true, required: false
    private _region?: string; 
    public get region() {
        return this.getStringAttribute('region');
    }
    public set region(value: string) {
        this._region = value;
    }
    public resetRegion() {
        this._region = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get regionInput() {
        return this._region;
    }

    // table_name - computed: true, optional: true, required: false
    private _tableName?: string; 
    public get tableName() {
        return this.getStringAttribute('table_name');
    }
    public set tableName(value: string) {
        this._tableName = value;
    }
    public resetTableName() {
        this._tableName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tableNameInput() {
        return this._tableName;
    }
}
export interface SnowflakeTableSchemaV1Property {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table#column_name CcConfiguredTable#column_name}
    */
    readonly columnName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table#column_type CcConfiguredTable#column_type}
    */
    readonly columnType?: string;
}
export class SnowflakeTableSchemaV1PropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): SnowflakeTableSchemaV1Property | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._columnName !== undefined) {
            hasAnyValues = true;
            internalValueResult.columnName = this._columnName;
        }
        if (this._columnType !== undefined) {
            hasAnyValues = true;
            internalValueResult.columnType = this._columnType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SnowflakeTableSchemaV1Property | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._columnName = undefined;
            this._columnType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._columnName = value.columnName;
            this._columnType = value.columnType;
        }
    }

    // column_name - computed: true, optional: true, required: false
    private _columnName?: string; 
    public get columnName() {
        return this.getStringAttribute('column_name');
    }
    public set columnName(value: string) {
        this._columnName = value;
    }
    public resetColumnName() {
        this._columnName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get columnNameInput() {
        return this._columnName;
    }

    // column_type - computed: true, optional: true, required: false
    private _columnType?: string; 
    public get columnType() {
        return this.getStringAttribute('column_type');
    }
    public set columnType(value: string) {
        this._columnType = value;
    }
    public resetColumnType() {
        this._columnType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get columnTypeInput() {
        return this._columnType;
    }
}

export class SnowflakeTableSchemaV1PropertyList extends cdktn.ComplexList {
    public internalValue? : SnowflakeTableSchemaV1Property[] | cdktn.IResolvable

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
    public get(index: number): SnowflakeTableSchemaV1PropertyOutputReference {
        return new SnowflakeTableSchemaV1PropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface SnowflakeTableSchemaProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table#v1 CcConfiguredTable#v1}
    */
    readonly v1?: SnowflakeTableSchemaV1Property[] | cdktn.IResolvable;
}
export class SnowflakeTableSchemaPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SnowflakeTableSchemaProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._v1?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.v1 = this._v1?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SnowflakeTableSchemaProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._v1.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._v1.internalValue = value.v1;
        }
    }

    // v1 - computed: true, optional: true, required: false
    private _v1 = new SnowflakeTableSchemaV1PropertyList(this, "v1", false);
    public get v1() {
        return this._v1;
    }
    public putV1(value: SnowflakeTableSchemaV1Property[] | cdktn.IResolvable) {
        this._v1.internalValue = value;
    }
    public resetV1() {
        this._v1.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get v1Input() {
        return this._v1.internalValue;
    }
}
export interface SnowflakeTableReferenceProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table#account_identifier CcConfiguredTable#account_identifier}
    */
    readonly accountIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table#database_name CcConfiguredTable#database_name}
    */
    readonly databaseName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table#schema_name CcConfiguredTable#schema_name}
    */
    readonly schemaName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table#secret_arn CcConfiguredTable#secret_arn}
    */
    readonly secretArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table#table_name CcConfiguredTable#table_name}
    */
    readonly tableName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table#table_schema CcConfiguredTable#table_schema}
    */
    readonly tableSchema?: SnowflakeTableSchemaProperty;
}
export class SnowflakeTableReferencePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SnowflakeTableReferenceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._accountIdentifier !== undefined) {
            hasAnyValues = true;
            internalValueResult.accountIdentifier = this._accountIdentifier;
        }
        if (this._databaseName !== undefined) {
            hasAnyValues = true;
            internalValueResult.databaseName = this._databaseName;
        }
        if (this._schemaName !== undefined) {
            hasAnyValues = true;
            internalValueResult.schemaName = this._schemaName;
        }
        if (this._secretArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretArn = this._secretArn;
        }
        if (this._tableName !== undefined) {
            hasAnyValues = true;
            internalValueResult.tableName = this._tableName;
        }
        if (this._tableSchema?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tableSchema = this._tableSchema?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SnowflakeTableReferenceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accountIdentifier = undefined;
            this._databaseName = undefined;
            this._schemaName = undefined;
            this._secretArn = undefined;
            this._tableName = undefined;
            this._tableSchema.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accountIdentifier = value.accountIdentifier;
            this._databaseName = value.databaseName;
            this._schemaName = value.schemaName;
            this._secretArn = value.secretArn;
            this._tableName = value.tableName;
            this._tableSchema.internalValue = value.tableSchema;
        }
    }

    // account_identifier - computed: true, optional: true, required: false
    private _accountIdentifier?: string; 
    public get accountIdentifier() {
        return this.getStringAttribute('account_identifier');
    }
    public set accountIdentifier(value: string) {
        this._accountIdentifier = value;
    }
    public resetAccountIdentifier() {
        this._accountIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accountIdentifierInput() {
        return this._accountIdentifier;
    }

    // database_name - computed: true, optional: true, required: false
    private _databaseName?: string; 
    public get databaseName() {
        return this.getStringAttribute('database_name');
    }
    public set databaseName(value: string) {
        this._databaseName = value;
    }
    public resetDatabaseName() {
        this._databaseName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseNameInput() {
        return this._databaseName;
    }

    // schema_name - computed: true, optional: true, required: false
    private _schemaName?: string; 
    public get schemaName() {
        return this.getStringAttribute('schema_name');
    }
    public set schemaName(value: string) {
        this._schemaName = value;
    }
    public resetSchemaName() {
        this._schemaName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get schemaNameInput() {
        return this._schemaName;
    }

    // secret_arn - computed: true, optional: true, required: false
    private _secretArn?: string; 
    public get secretArn() {
        return this.getStringAttribute('secret_arn');
    }
    public set secretArn(value: string) {
        this._secretArn = value;
    }
    public resetSecretArn() {
        this._secretArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretArnInput() {
        return this._secretArn;
    }

    // table_name - computed: true, optional: true, required: false
    private _tableName?: string; 
    public get tableName() {
        return this.getStringAttribute('table_name');
    }
    public set tableName(value: string) {
        this._tableName = value;
    }
    public resetTableName() {
        this._tableName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tableNameInput() {
        return this._tableName;
    }

    // table_schema - computed: true, optional: true, required: false
    private _tableSchema = new SnowflakeTableSchemaPropertyOutputReference(this, "table_schema");
    public get tableSchema() {
        return this._tableSchema;
    }
    public putTableSchema(value: SnowflakeTableSchemaProperty) {
        this._tableSchema.internalValue = value;
    }
    public resetTableSchema() {
        this._tableSchema.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tableSchemaInput() {
        return this._tableSchema.internalValue;
    }
}
export interface TableReferenceProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table#athena CcConfiguredTable#athena}
    */
    readonly athena?: AthenaTableReferenceProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table#glue CcConfiguredTable#glue}
    */
    readonly glue?: GlueTableReferenceProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table#snowflake CcConfiguredTable#snowflake}
    */
    readonly snowflake?: SnowflakeTableReferenceProperty;
}
export class TableReferencePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TableReferenceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._athena?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.athena = this._athena?.internalValue;
        }
        if (this._glue?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.glue = this._glue?.internalValue;
        }
        if (this._snowflake?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.snowflake = this._snowflake?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TableReferenceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._athena.internalValue = undefined;
            this._glue.internalValue = undefined;
            this._snowflake.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._athena.internalValue = value.athena;
            this._glue.internalValue = value.glue;
            this._snowflake.internalValue = value.snowflake;
        }
    }

    // athena - computed: true, optional: true, required: false
    private _athena = new AthenaTableReferencePropertyOutputReference(this, "athena");
    public get athena() {
        return this._athena;
    }
    public putAthena(value: AthenaTableReferenceProperty) {
        this._athena.internalValue = value;
    }
    public resetAthena() {
        this._athena.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get athenaInput() {
        return this._athena.internalValue;
    }

    // glue - computed: true, optional: true, required: false
    private _glue = new GlueTableReferencePropertyOutputReference(this, "glue");
    public get glue() {
        return this._glue;
    }
    public putGlue(value: GlueTableReferenceProperty) {
        this._glue.internalValue = value;
    }
    public resetGlue() {
        this._glue.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get glueInput() {
        return this._glue.internalValue;
    }

    // snowflake - computed: true, optional: true, required: false
    private _snowflake = new SnowflakeTableReferencePropertyOutputReference(this, "snowflake");
    public get snowflake() {
        return this._snowflake;
    }
    public putSnowflake(value: SnowflakeTableReferenceProperty) {
        this._snowflake.internalValue = value;
    }
    public resetSnowflake() {
        this._snowflake.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get snowflakeInput() {
        return this._snowflake.internalValue;
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table#key CcConfiguredTable#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cleanrooms_configured_table#value CcConfiguredTable#value}
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
