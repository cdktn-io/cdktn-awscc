// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcTagAssociationProps extends cdktn.TerraformMetaArguments {
    /**
    * List of Lake Formation Tags to associate with the Lake Formation Resource
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#lf_tags CcTagAssociation#lf_tags}
    */
    readonly lfTags: CcTagAssociation.LFTagPairProperty[] | cdktn.IResolvable;
    /**
    * Resource to tag with the Lake Formation Tags
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#resource CcTagAssociation#resource}
    */
    readonly resource: CcTagAssociation.ResourceProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association awscc_lakeformation_tag_association}
*/
export class CcTagAssociation extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_lakeformation_tag_association";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcTagAssociation resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcTagAssociation to import
    * @param importFromId The id of the existing CcTagAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcTagAssociation to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_lakeformation_tag_association", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association awscc_lakeformation_tag_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcTagAssociationProps
    */
    public constructor(scope: Construct, id: string, config: CcTagAssociationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_lakeformation_tag_association',
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
        this._lfTags.internalValue = config.lfTags;
        this._resource.internalValue = config.resource;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // lf_tags - computed: false, optional: false, required: true
    private _lfTags = new CcTagAssociation.LFTagPairPropertyList(this, "lf_tags", false);
    public get lfTags() {
        return this._lfTags;
    }
    public putLfTags(value: CcTagAssociation.LFTagPairProperty[] | cdktn.IResolvable) {
        this._lfTags.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get lfTagsInput() {
        return this._lfTags.internalValue;
    }

    // resource - computed: false, optional: false, required: true
    private _resource = new CcTagAssociation.ResourcePropertyOutputReference(this, "resource");
    public get resource() {
        return this._resource;
    }
    public putResource(value: CcTagAssociation.ResourceProperty) {
        this._resource.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceInput() {
        return this._resource.internalValue;
    }

    // resource_identifier - computed: true, optional: false, required: false
    public get resourceIdentifier() {
        return this.getStringAttribute('resource_identifier');
    }

    // tags_identifier - computed: true, optional: false, required: false
    public get tagsIdentifier() {
        return this.getStringAttribute('tags_identifier');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            lf_tags: cdktn.listMapper(ccTagAssociationLFTagPairPropertyToTerraform, false)(this._lfTags.internalValue),
            resource: ccTagAssociationResourcePropertyToTerraform(this._resource.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            lf_tags: {
                value: cdktn.listMapperHcl(ccTagAssociationLFTagPairPropertyToHclTerraform, false)(this._lfTags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcTagAssociation.LFTagPairPropertyList",
            },
            resource: {
                value: ccTagAssociationResourcePropertyToHclTerraform(this._resource.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcTagAssociation.ResourceProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccTagAssociationLFTagPairPropertyToTerraform(struct?: CcTagAssociation.LFTagPairProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        catalog_id: cdktn.stringToTerraform(struct!.catalogId),
        tag_key: cdktn.stringToTerraform(struct!.tagKey),
        tag_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.tagValues),
    }
}


export function ccTagAssociationLFTagPairPropertyToHclTerraform(struct?: CcTagAssociation.LFTagPairProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        catalog_id: {
            value: cdktn.stringToHclTerraform(struct!.catalogId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        tag_key: {
            value: cdktn.stringToHclTerraform(struct!.tagKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        tag_values: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.tagValues),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTagAssociationDatabaseResourcePropertyToTerraform(struct?: CcTagAssociation.DatabaseResourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        catalog_id: cdktn.stringToTerraform(struct!.catalogId),
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccTagAssociationDatabaseResourcePropertyToHclTerraform(struct?: CcTagAssociation.DatabaseResourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        catalog_id: {
            value: cdktn.stringToHclTerraform(struct!.catalogId),
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


export function ccTagAssociationTableResourcePropertyToTerraform(struct?: CcTagAssociation.TableResourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        catalog_id: cdktn.stringToTerraform(struct!.catalogId),
        database_name: cdktn.stringToTerraform(struct!.databaseName),
        name: cdktn.stringToTerraform(struct!.name),
        table_wildcard: cdktn.stringToTerraform(struct!.tableWildcard),
    }
}


export function ccTagAssociationTableResourcePropertyToHclTerraform(struct?: CcTagAssociation.TableResourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        catalog_id: {
            value: cdktn.stringToHclTerraform(struct!.catalogId),
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
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        table_wildcard: {
            value: cdktn.stringToHclTerraform(struct!.tableWildcard),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccTagAssociationTableWithColumnsResourcePropertyToTerraform(struct?: CcTagAssociation.TableWithColumnsResourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        catalog_id: cdktn.stringToTerraform(struct!.catalogId),
        column_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.columnNames),
        database_name: cdktn.stringToTerraform(struct!.databaseName),
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccTagAssociationTableWithColumnsResourcePropertyToHclTerraform(struct?: CcTagAssociation.TableWithColumnsResourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        catalog_id: {
            value: cdktn.stringToHclTerraform(struct!.catalogId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        column_names: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.columnNames),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        database_name: {
            value: cdktn.stringToHclTerraform(struct!.databaseName),
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


export function ccTagAssociationResourcePropertyToTerraform(struct?: CcTagAssociation.ResourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        catalog: cdktn.stringToTerraform(struct!.catalog),
        database: ccTagAssociationDatabaseResourcePropertyToTerraform(struct!.database),
        table: ccTagAssociationTableResourcePropertyToTerraform(struct!.table),
        table_with_columns: ccTagAssociationTableWithColumnsResourcePropertyToTerraform(struct!.tableWithColumns),
    }
}


export function ccTagAssociationResourcePropertyToHclTerraform(struct?: CcTagAssociation.ResourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        catalog: {
            value: cdktn.stringToHclTerraform(struct!.catalog),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        database: {
            value: ccTagAssociationDatabaseResourcePropertyToHclTerraform(struct!.database),
            isBlock: true,
            type: "struct",
            storageClassType: "DatabaseResourceProperty",
        },
        table: {
            value: ccTagAssociationTableResourcePropertyToHclTerraform(struct!.table),
            isBlock: true,
            type: "struct",
            storageClassType: "TableResourceProperty",
        },
        table_with_columns: {
            value: ccTagAssociationTableWithColumnsResourcePropertyToHclTerraform(struct!.tableWithColumns),
            isBlock: true,
            type: "struct",
            storageClassType: "TableWithColumnsResourceProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcTagAssociation {
export interface LFTagPairProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#catalog_id CcTagAssociation#catalog_id}
    */
    readonly catalogId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#tag_key CcTagAssociation#tag_key}
    */
    readonly tagKey: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#tag_values CcTagAssociation#tag_values}
    */
    readonly tagValues: string[];
}
export class LFTagPairPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): LFTagPairProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._catalogId !== undefined) {
            hasAnyValues = true;
            internalValueResult.catalogId = this._catalogId;
        }
        if (this._tagKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.tagKey = this._tagKey;
        }
        if (this._tagValues !== undefined) {
            hasAnyValues = true;
            internalValueResult.tagValues = this._tagValues;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LFTagPairProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._catalogId = undefined;
            this._tagKey = undefined;
            this._tagValues = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._catalogId = value.catalogId;
            this._tagKey = value.tagKey;
            this._tagValues = value.tagValues;
        }
    }

    // catalog_id - computed: false, optional: false, required: true
    private _catalogId?: string; 
    public get catalogId() {
        return this.getStringAttribute('catalog_id');
    }
    public set catalogId(value: string) {
        this._catalogId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get catalogIdInput() {
        return this._catalogId;
    }

    // tag_key - computed: false, optional: false, required: true
    private _tagKey?: string; 
    public get tagKey() {
        return this.getStringAttribute('tag_key');
    }
    public set tagKey(value: string) {
        this._tagKey = value;
    }
    // Temporarily expose input value. Use with caution.
    public get tagKeyInput() {
        return this._tagKey;
    }

    // tag_values - computed: false, optional: false, required: true
    private _tagValues?: string[]; 
    public get tagValues() {
        return this.getListAttribute('tag_values');
    }
    public set tagValues(value: string[]) {
        this._tagValues = value;
    }
    // Temporarily expose input value. Use with caution.
    public get tagValuesInput() {
        return this._tagValues;
    }
}

export class LFTagPairPropertyList extends cdktn.ComplexList {
    public internalValue? : LFTagPairProperty[] | cdktn.IResolvable

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
    public get(index: number): LFTagPairPropertyOutputReference {
        return new LFTagPairPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface DatabaseResourceProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#catalog_id CcTagAssociation#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#name CcTagAssociation#name}
    */
    readonly name?: string;
}
export class DatabaseResourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DatabaseResourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._catalogId !== undefined) {
            hasAnyValues = true;
            internalValueResult.catalogId = this._catalogId;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DatabaseResourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._catalogId = undefined;
            this._name = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._catalogId = value.catalogId;
            this._name = value.name;
        }
    }

    // catalog_id - computed: true, optional: true, required: false
    private _catalogId?: string; 
    public get catalogId() {
        return this.getStringAttribute('catalog_id');
    }
    public set catalogId(value: string) {
        this._catalogId = value;
    }
    public resetCatalogId() {
        this._catalogId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get catalogIdInput() {
        return this._catalogId;
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
export interface TableResourceProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#catalog_id CcTagAssociation#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#database_name CcTagAssociation#database_name}
    */
    readonly databaseName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#name CcTagAssociation#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#table_wildcard CcTagAssociation#table_wildcard}
    */
    readonly tableWildcard?: string;
}
export class TableResourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TableResourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._catalogId !== undefined) {
            hasAnyValues = true;
            internalValueResult.catalogId = this._catalogId;
        }
        if (this._databaseName !== undefined) {
            hasAnyValues = true;
            internalValueResult.databaseName = this._databaseName;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._tableWildcard !== undefined) {
            hasAnyValues = true;
            internalValueResult.tableWildcard = this._tableWildcard;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TableResourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._catalogId = undefined;
            this._databaseName = undefined;
            this._name = undefined;
            this._tableWildcard = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._catalogId = value.catalogId;
            this._databaseName = value.databaseName;
            this._name = value.name;
            this._tableWildcard = value.tableWildcard;
        }
    }

    // catalog_id - computed: true, optional: true, required: false
    private _catalogId?: string; 
    public get catalogId() {
        return this.getStringAttribute('catalog_id');
    }
    public set catalogId(value: string) {
        this._catalogId = value;
    }
    public resetCatalogId() {
        this._catalogId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get catalogIdInput() {
        return this._catalogId;
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

    // table_wildcard - computed: true, optional: true, required: false
    private _tableWildcard?: string; 
    public get tableWildcard() {
        return this.getStringAttribute('table_wildcard');
    }
    public set tableWildcard(value: string) {
        this._tableWildcard = value;
    }
    public resetTableWildcard() {
        this._tableWildcard = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tableWildcardInput() {
        return this._tableWildcard;
    }
}
export interface TableWithColumnsResourceProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#catalog_id CcTagAssociation#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#column_names CcTagAssociation#column_names}
    */
    readonly columnNames?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#database_name CcTagAssociation#database_name}
    */
    readonly databaseName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#name CcTagAssociation#name}
    */
    readonly name?: string;
}
export class TableWithColumnsResourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TableWithColumnsResourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._catalogId !== undefined) {
            hasAnyValues = true;
            internalValueResult.catalogId = this._catalogId;
        }
        if (this._columnNames !== undefined) {
            hasAnyValues = true;
            internalValueResult.columnNames = this._columnNames;
        }
        if (this._databaseName !== undefined) {
            hasAnyValues = true;
            internalValueResult.databaseName = this._databaseName;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TableWithColumnsResourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._catalogId = undefined;
            this._columnNames = undefined;
            this._databaseName = undefined;
            this._name = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._catalogId = value.catalogId;
            this._columnNames = value.columnNames;
            this._databaseName = value.databaseName;
            this._name = value.name;
        }
    }

    // catalog_id - computed: true, optional: true, required: false
    private _catalogId?: string; 
    public get catalogId() {
        return this.getStringAttribute('catalog_id');
    }
    public set catalogId(value: string) {
        this._catalogId = value;
    }
    public resetCatalogId() {
        this._catalogId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get catalogIdInput() {
        return this._catalogId;
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
export interface ResourceProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#catalog CcTagAssociation#catalog}
    */
    readonly catalog?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#database CcTagAssociation#database}
    */
    readonly database?: DatabaseResourceProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#table CcTagAssociation#table}
    */
    readonly table?: TableResourceProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lakeformation_tag_association#table_with_columns CcTagAssociation#table_with_columns}
    */
    readonly tableWithColumns?: TableWithColumnsResourceProperty;
}
export class ResourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ResourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._catalog !== undefined) {
            hasAnyValues = true;
            internalValueResult.catalog = this._catalog;
        }
        if (this._database?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.database = this._database?.internalValue;
        }
        if (this._table?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.table = this._table?.internalValue;
        }
        if (this._tableWithColumns?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.tableWithColumns = this._tableWithColumns?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ResourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._catalog = undefined;
            this._database.internalValue = undefined;
            this._table.internalValue = undefined;
            this._tableWithColumns.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._catalog = value.catalog;
            this._database.internalValue = value.database;
            this._table.internalValue = value.table;
            this._tableWithColumns.internalValue = value.tableWithColumns;
        }
    }

    // catalog - computed: true, optional: true, required: false
    private _catalog?: string; 
    public get catalog() {
        return this.getStringAttribute('catalog');
    }
    public set catalog(value: string) {
        this._catalog = value;
    }
    public resetCatalog() {
        this._catalog = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get catalogInput() {
        return this._catalog;
    }

    // database - computed: true, optional: true, required: false
    private _database = new DatabaseResourcePropertyOutputReference(this, "database");
    public get database() {
        return this._database;
    }
    public putDatabase(value: DatabaseResourceProperty) {
        this._database.internalValue = value;
    }
    public resetDatabase() {
        this._database.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseInput() {
        return this._database.internalValue;
    }

    // table - computed: true, optional: true, required: false
    private _table = new TableResourcePropertyOutputReference(this, "table");
    public get table() {
        return this._table;
    }
    public putTable(value: TableResourceProperty) {
        this._table.internalValue = value;
    }
    public resetTable() {
        this._table.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tableInput() {
        return this._table.internalValue;
    }

    // table_with_columns - computed: true, optional: true, required: false
    private _tableWithColumns = new TableWithColumnsResourcePropertyOutputReference(this, "table_with_columns");
    public get tableWithColumns() {
        return this._tableWithColumns;
    }
    public putTableWithColumns(value: TableWithColumnsResourceProperty) {
        this._tableWithColumns.internalValue = value;
    }
    public resetTableWithColumns() {
        this._tableWithColumns.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tableWithColumnsInput() {
        return this._tableWithColumns.internalValue;
    }
}
}
