// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lakeformation_data_cells_filter

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcDataCellsFilterProps extends cdktn.TerraformMetaArguments {
    /**
    * A list of columns to be included in this Data Cells Filter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lakeformation_data_cells_filter#column_names CcDataCellsFilter#column_names}
    */
    readonly columnNames?: string[];
    /**
    * An object representing the Data Cells Filter's Columns. Either Column Names or a Wildcard is required
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lakeformation_data_cells_filter#column_wildcard CcDataCellsFilter#column_wildcard}
    */
    readonly columnWildcard?: CcDataCellsFilter.ColumnWildcardProperty;
    /**
    * The name of the Database that the Table resides in.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lakeformation_data_cells_filter#database_name CcDataCellsFilter#database_name}
    */
    readonly databaseName: string;
    /**
    * The desired name of the Data Cells Filter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lakeformation_data_cells_filter#name CcDataCellsFilter#name}
    */
    readonly name: string;
    /**
    * An object representing the Data Cells Filter's Row Filter. Either a Filter Expression or a Wildcard is required
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lakeformation_data_cells_filter#row_filter CcDataCellsFilter#row_filter}
    */
    readonly rowFilter?: CcDataCellsFilter.RowFilterProperty;
    /**
    * The Catalog Id of the Table on which to create a Data Cells Filter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lakeformation_data_cells_filter#table_catalog_id CcDataCellsFilter#table_catalog_id}
    */
    readonly tableCatalogId: string;
    /**
    * The name of the Table to create a Data Cells Filter for.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lakeformation_data_cells_filter#table_name CcDataCellsFilter#table_name}
    */
    readonly tableName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lakeformation_data_cells_filter awscc_lakeformation_data_cells_filter}
*/
export class CcDataCellsFilter extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_lakeformation_data_cells_filter";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcDataCellsFilter resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcDataCellsFilter to import
    * @param importFromId The id of the existing CcDataCellsFilter that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lakeformation_data_cells_filter#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcDataCellsFilter to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_lakeformation_data_cells_filter", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lakeformation_data_cells_filter awscc_lakeformation_data_cells_filter} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcDataCellsFilterProps
    */
    public constructor(scope: Construct, id: string, config: CcDataCellsFilterProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_lakeformation_data_cells_filter',
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
        this._columnNames = config.columnNames;
        this._columnWildcard.internalValue = config.columnWildcard;
        this._databaseName = config.databaseName;
        this._name = config.name;
        this._rowFilter.internalValue = config.rowFilter;
        this._tableCatalogId = config.tableCatalogId;
        this._tableName = config.tableName;
    }

    // ==========
    // ATTRIBUTES
    // ==========

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

    // column_wildcard - computed: true, optional: true, required: false
    private _columnWildcard = new CcDataCellsFilter.ColumnWildcardPropertyOutputReference(this, "column_wildcard");
    public get columnWildcard() {
        return this._columnWildcard;
    }
    public putColumnWildcard(value: CcDataCellsFilter.ColumnWildcardProperty) {
        this._columnWildcard.internalValue = value;
    }
    public resetColumnWildcard() {
        this._columnWildcard.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get columnWildcardInput() {
        return this._columnWildcard.internalValue;
    }

    // database_name - computed: false, optional: false, required: true
    private _databaseName?: string; 
    public get databaseName() {
        return this.getStringAttribute('database_name');
    }
    public set databaseName(value: string) {
        this._databaseName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseNameInput() {
        return this._databaseName;
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

    // row_filter - computed: true, optional: true, required: false
    private _rowFilter = new CcDataCellsFilter.RowFilterPropertyOutputReference(this, "row_filter");
    public get rowFilter() {
        return this._rowFilter;
    }
    public putRowFilter(value: CcDataCellsFilter.RowFilterProperty) {
        this._rowFilter.internalValue = value;
    }
    public resetRowFilter() {
        this._rowFilter.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rowFilterInput() {
        return this._rowFilter.internalValue;
    }

    // table_catalog_id - computed: false, optional: false, required: true
    private _tableCatalogId?: string; 
    public get tableCatalogId() {
        return this.getStringAttribute('table_catalog_id');
    }
    public set tableCatalogId(value: string) {
        this._tableCatalogId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get tableCatalogIdInput() {
        return this._tableCatalogId;
    }

    // table_name - computed: false, optional: false, required: true
    private _tableName?: string; 
    public get tableName() {
        return this.getStringAttribute('table_name');
    }
    public set tableName(value: string) {
        this._tableName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get tableNameInput() {
        return this._tableName;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            column_names: cdktn.listMapper(cdktn.stringToTerraform, false)(this._columnNames),
            column_wildcard: ccDataCellsFilterColumnWildcardPropertyToTerraform(this._columnWildcard.internalValue),
            database_name: cdktn.stringToTerraform(this._databaseName),
            name: cdktn.stringToTerraform(this._name),
            row_filter: ccDataCellsFilterRowFilterPropertyToTerraform(this._rowFilter.internalValue),
            table_catalog_id: cdktn.stringToTerraform(this._tableCatalogId),
            table_name: cdktn.stringToTerraform(this._tableName),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            column_names: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._columnNames),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            column_wildcard: {
                value: ccDataCellsFilterColumnWildcardPropertyToHclTerraform(this._columnWildcard.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDataCellsFilter.ColumnWildcardProperty",
            },
            database_name: {
                value: cdktn.stringToHclTerraform(this._databaseName),
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
            row_filter: {
                value: ccDataCellsFilterRowFilterPropertyToHclTerraform(this._rowFilter.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDataCellsFilter.RowFilterProperty",
            },
            table_catalog_id: {
                value: cdktn.stringToHclTerraform(this._tableCatalogId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            table_name: {
                value: cdktn.stringToHclTerraform(this._tableName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccDataCellsFilterColumnWildcardPropertyToTerraform(struct?: CcDataCellsFilter.ColumnWildcardProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        excluded_column_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.excludedColumnNames),
    }
}


export function ccDataCellsFilterColumnWildcardPropertyToHclTerraform(struct?: CcDataCellsFilter.ColumnWildcardProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        excluded_column_names: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.excludedColumnNames),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDataCellsFilterRowFilterPropertyToTerraform(struct?: CcDataCellsFilter.RowFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        all_rows_wildcard: cdktn.stringToTerraform(struct!.allRowsWildcard),
        filter_expression: cdktn.stringToTerraform(struct!.filterExpression),
    }
}


export function ccDataCellsFilterRowFilterPropertyToHclTerraform(struct?: CcDataCellsFilter.RowFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        all_rows_wildcard: {
            value: cdktn.stringToHclTerraform(struct!.allRowsWildcard),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        filter_expression: {
            value: cdktn.stringToHclTerraform(struct!.filterExpression),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcDataCellsFilter {
export interface ColumnWildcardProperty {
    /**
    * A list of column names to be excluded from the Data Cells Filter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lakeformation_data_cells_filter#excluded_column_names CcDataCellsFilter#excluded_column_names}
    */
    readonly excludedColumnNames?: string[];
}
export class ColumnWildcardPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ColumnWildcardProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._excludedColumnNames !== undefined) {
            hasAnyValues = true;
            internalValueResult.excludedColumnNames = this._excludedColumnNames;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ColumnWildcardProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._excludedColumnNames = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._excludedColumnNames = value.excludedColumnNames;
        }
    }

    // excluded_column_names - computed: true, optional: true, required: false
    private _excludedColumnNames?: string[]; 
    public get excludedColumnNames() {
        return this.getListAttribute('excluded_column_names');
    }
    public set excludedColumnNames(value: string[]) {
        this._excludedColumnNames = value;
    }
    public resetExcludedColumnNames() {
        this._excludedColumnNames = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get excludedColumnNamesInput() {
        return this._excludedColumnNames;
    }
}
export interface RowFilterProperty {
    /**
    * An empty object representing a row wildcard.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lakeformation_data_cells_filter#all_rows_wildcard CcDataCellsFilter#all_rows_wildcard}
    */
    readonly allRowsWildcard?: string;
    /**
    * A PartiQL predicate.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lakeformation_data_cells_filter#filter_expression CcDataCellsFilter#filter_expression}
    */
    readonly filterExpression?: string;
}
export class RowFilterPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RowFilterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._allRowsWildcard !== undefined) {
            hasAnyValues = true;
            internalValueResult.allRowsWildcard = this._allRowsWildcard;
        }
        if (this._filterExpression !== undefined) {
            hasAnyValues = true;
            internalValueResult.filterExpression = this._filterExpression;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RowFilterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allRowsWildcard = undefined;
            this._filterExpression = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allRowsWildcard = value.allRowsWildcard;
            this._filterExpression = value.filterExpression;
        }
    }

    // all_rows_wildcard - computed: true, optional: true, required: false
    private _allRowsWildcard?: string; 
    public get allRowsWildcard() {
        return this.getStringAttribute('all_rows_wildcard');
    }
    public set allRowsWildcard(value: string) {
        this._allRowsWildcard = value;
    }
    public resetAllRowsWildcard() {
        this._allRowsWildcard = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allRowsWildcardInput() {
        return this._allRowsWildcard;
    }

    // filter_expression - computed: true, optional: true, required: false
    private _filterExpression?: string; 
    public get filterExpression() {
        return this.getStringAttribute('filter_expression');
    }
    public set filterExpression(value: string) {
        this._filterExpression = value;
    }
    public resetFilterExpression() {
        this._filterExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get filterExpressionInput() {
        return this._filterExpression;
    }
}
}
