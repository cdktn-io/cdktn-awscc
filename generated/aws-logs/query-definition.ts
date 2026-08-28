// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_query_definition

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcQueryDefinitionProps extends cdktn.TerraformMetaArguments {
    /**
    * Optionally define specific log groups as part of your query definition
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_query_definition#log_group_names CcQueryDefinition#log_group_names}
    */
    readonly logGroupNames?: string[];
    /**
    * A name for the saved query definition
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_query_definition#name CcQueryDefinition#name}
    */
    readonly name: string;
    /**
    * Use this parameter to include specific query parameters as part of your query definition. Query parameters are supported only for Logs Insights QL queries. Query parameters allow you to use placeholder variables in your query string that are substituted with values at execution time. Use the {{parameterName}} syntax in your query string to reference a parameter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_query_definition#parameters CcQueryDefinition#parameters}
    */
    readonly parameters?: CcQueryDefinition.QueryParameterProperty[] | cdktn.IResolvable;
    /**
    * Query language of the query string. Possible values are CWLI, SQL, PPL, with CWLI being the default.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_query_definition#query_language CcQueryDefinition#query_language}
    */
    readonly queryLanguage?: string;
    /**
    * The query string to use for this definition
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_query_definition#query_string CcQueryDefinition#query_string}
    */
    readonly queryString: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_query_definition awscc_logs_query_definition}
*/
export class CcQueryDefinition extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_logs_query_definition";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcQueryDefinition resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcQueryDefinition to import
    * @param importFromId The id of the existing CcQueryDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_query_definition#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcQueryDefinition to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_logs_query_definition", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_query_definition awscc_logs_query_definition} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcQueryDefinitionProps
    */
    public constructor(scope: Construct, id: string, config: CcQueryDefinitionProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_logs_query_definition',
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
        this._logGroupNames = config.logGroupNames;
        this._name = config.name;
        this._parameters.internalValue = config.parameters;
        this._queryLanguage = config.queryLanguage;
        this._queryString = config.queryString;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // log_group_names - computed: true, optional: true, required: false
    private _logGroupNames?: string[]; 
    public get logGroupNames() {
        return this.getListAttribute('log_group_names');
    }
    public set logGroupNames(value: string[]) {
        this._logGroupNames = value;
    }
    public resetLogGroupNames() {
        this._logGroupNames = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get logGroupNamesInput() {
        return this._logGroupNames;
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

    // parameters - computed: true, optional: true, required: false
    private _parameters = new CcQueryDefinition.QueryParameterPropertyList(this, "parameters", false);
    public get parameters() {
        return this._parameters;
    }
    public putParameters(value: CcQueryDefinition.QueryParameterProperty[] | cdktn.IResolvable) {
        this._parameters.internalValue = value;
    }
    public resetParameters() {
        this._parameters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parametersInput() {
        return this._parameters.internalValue;
    }

    // query_definition_id - computed: true, optional: false, required: false
    public get queryDefinitionId() {
        return this.getStringAttribute('query_definition_id');
    }

    // query_language - computed: true, optional: true, required: false
    private _queryLanguage?: string; 
    public get queryLanguage() {
        return this.getStringAttribute('query_language');
    }
    public set queryLanguage(value: string) {
        this._queryLanguage = value;
    }
    public resetQueryLanguage() {
        this._queryLanguage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get queryLanguageInput() {
        return this._queryLanguage;
    }

    // query_string - computed: false, optional: false, required: true
    private _queryString?: string; 
    public get queryString() {
        return this.getStringAttribute('query_string');
    }
    public set queryString(value: string) {
        this._queryString = value;
    }
    // Temporarily expose input value. Use with caution.
    public get queryStringInput() {
        return this._queryString;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            log_group_names: cdktn.listMapper(cdktn.stringToTerraform, false)(this._logGroupNames),
            name: cdktn.stringToTerraform(this._name),
            parameters: cdktn.listMapper(ccQueryDefinitionQueryParameterPropertyToTerraform, false)(this._parameters.internalValue),
            query_language: cdktn.stringToTerraform(this._queryLanguage),
            query_string: cdktn.stringToTerraform(this._queryString),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            log_group_names: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._logGroupNames),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            parameters: {
                value: cdktn.listMapperHcl(ccQueryDefinitionQueryParameterPropertyToHclTerraform, false)(this._parameters.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcQueryDefinition.QueryParameterPropertyList",
            },
            query_language: {
                value: cdktn.stringToHclTerraform(this._queryLanguage),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            query_string: {
                value: cdktn.stringToHclTerraform(this._queryString),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccQueryDefinitionQueryParameterPropertyToTerraform(struct?: CcQueryDefinition.QueryParameterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        default_value: cdktn.stringToTerraform(struct!.defaultValue),
        description: cdktn.stringToTerraform(struct!.description),
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccQueryDefinitionQueryParameterPropertyToHclTerraform(struct?: CcQueryDefinition.QueryParameterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        default_value: {
            value: cdktn.stringToHclTerraform(struct!.defaultValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        description: {
            value: cdktn.stringToHclTerraform(struct!.description),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcQueryDefinition {
export interface QueryParameterProperty {
    /**
    * The default value to use for this query parameter if no value is supplied at execution time.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_query_definition#default_value CcQueryDefinition#default_value}
    */
    readonly defaultValue?: string;
    /**
    * A description of the query parameter that explains its purpose or expected values.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_query_definition#description CcQueryDefinition#description}
    */
    readonly description?: string;
    /**
    * The name of the query parameter. A query parameter name must start with a letter or underscore, and contain only letters, digits, and underscores.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/logs_query_definition#name CcQueryDefinition#name}
    */
    readonly name?: string;
}
export class QueryParameterPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): QueryParameterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._defaultValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultValue = this._defaultValue;
        }
        if (this._description !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: QueryParameterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._defaultValue = undefined;
            this._description = undefined;
            this._name = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._defaultValue = value.defaultValue;
            this._description = value.description;
            this._name = value.name;
        }
    }

    // default_value - computed: true, optional: true, required: false
    private _defaultValue?: string; 
    public get defaultValue() {
        return this.getStringAttribute('default_value');
    }
    public set defaultValue(value: string) {
        this._defaultValue = value;
    }
    public resetDefaultValue() {
        this._defaultValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultValueInput() {
        return this._defaultValue;
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

export class QueryParameterPropertyList extends cdktn.ComplexList {
    public internalValue? : QueryParameterProperty[] | cdktn.IResolvable

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
    public get(index: number): QueryParameterPropertyOutputReference {
        return new QueryParameterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
