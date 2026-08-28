// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lakeformation_principal_permissions

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcPrincipalPermissionsProps extends cdktn.TerraformMetaArguments {
    /**
    * The identifier for the GLUDC. By default, the account ID. The GLUDC is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your Lake Formation environment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lakeformation_principal_permissions#catalog CcPrincipalPermissions#catalog}
    */
    readonly catalog?: string;
    /**
    * The permissions granted or revoked.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lakeformation_principal_permissions#permissions CcPrincipalPermissions#permissions}
    */
    readonly permissions: string[];
    /**
    * Indicates the ability to grant permissions (as a subset of permissions granted).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lakeformation_principal_permissions#permissions_with_grant_option CcPrincipalPermissions#permissions_with_grant_option}
    */
    readonly permissionsWithGrantOption: string[];
    /**
    * The principal to be granted a permission.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lakeformation_principal_permissions#principal CcPrincipalPermissions#principal}
    */
    readonly principal: CcPrincipalPermissions.DataLakePrincipalProperty;
    /**
    * The resource to be granted or revoked permissions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lakeformation_principal_permissions#resource CcPrincipalPermissions#resource}
    */
    readonly resource: CcPrincipalPermissions.ResourceProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lakeformation_principal_permissions awscc_lakeformation_principal_permissions}
*/
export class CcPrincipalPermissions extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_lakeformation_principal_permissions";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcPrincipalPermissions resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcPrincipalPermissions to import
    * @param importFromId The id of the existing CcPrincipalPermissions that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lakeformation_principal_permissions#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcPrincipalPermissions to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_lakeformation_principal_permissions", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lakeformation_principal_permissions awscc_lakeformation_principal_permissions} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcPrincipalPermissionsProps
    */
    public constructor(scope: Construct, id: string, config: CcPrincipalPermissionsProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_lakeformation_principal_permissions',
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
        this._catalog = config.catalog;
        this._permissions = config.permissions;
        this._permissionsWithGrantOption = config.permissionsWithGrantOption;
        this._principal.internalValue = config.principal;
        this._resource.internalValue = config.resource;
    }

    // ==========
    // ATTRIBUTES
    // ==========

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

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // permissions - computed: false, optional: false, required: true
    private _permissions?: string[]; 
    public get permissions() {
        return this.getListAttribute('permissions');
    }
    public set permissions(value: string[]) {
        this._permissions = value;
    }
    // Temporarily expose input value. Use with caution.
    public get permissionsInput() {
        return this._permissions;
    }

    // permissions_with_grant_option - computed: false, optional: false, required: true
    private _permissionsWithGrantOption?: string[]; 
    public get permissionsWithGrantOption() {
        return this.getListAttribute('permissions_with_grant_option');
    }
    public set permissionsWithGrantOption(value: string[]) {
        this._permissionsWithGrantOption = value;
    }
    // Temporarily expose input value. Use with caution.
    public get permissionsWithGrantOptionInput() {
        return this._permissionsWithGrantOption;
    }

    // principal - computed: false, optional: false, required: true
    private _principal = new CcPrincipalPermissions.DataLakePrincipalPropertyOutputReference(this, "principal");
    public get principal() {
        return this._principal;
    }
    public putPrincipal(value: CcPrincipalPermissions.DataLakePrincipalProperty) {
        this._principal.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get principalInput() {
        return this._principal.internalValue;
    }

    // principal_identifier - computed: true, optional: false, required: false
    public get principalIdentifier() {
        return this.getStringAttribute('principal_identifier');
    }

    // resource - computed: false, optional: false, required: true
    private _resource = new CcPrincipalPermissions.ResourcePropertyOutputReference(this, "resource");
    public get resource() {
        return this._resource;
    }
    public putResource(value: CcPrincipalPermissions.ResourceProperty) {
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            catalog: cdktn.stringToTerraform(this._catalog),
            permissions: cdktn.listMapper(cdktn.stringToTerraform, false)(this._permissions),
            permissions_with_grant_option: cdktn.listMapper(cdktn.stringToTerraform, false)(this._permissionsWithGrantOption),
            principal: ccPrincipalPermissionsDataLakePrincipalPropertyToTerraform(this._principal.internalValue),
            resource: ccPrincipalPermissionsResourcePropertyToTerraform(this._resource.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            catalog: {
                value: cdktn.stringToHclTerraform(this._catalog),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            permissions: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._permissions),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            permissions_with_grant_option: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._permissionsWithGrantOption),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            principal: {
                value: ccPrincipalPermissionsDataLakePrincipalPropertyToHclTerraform(this._principal.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcPrincipalPermissions.DataLakePrincipalProperty",
            },
            resource: {
                value: ccPrincipalPermissionsResourcePropertyToHclTerraform(this._resource.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcPrincipalPermissions.ResourceProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccPrincipalPermissionsDataLakePrincipalPropertyToTerraform(struct?: CcPrincipalPermissions.DataLakePrincipalProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        data_lake_principal_identifier: cdktn.stringToTerraform(struct!.dataLakePrincipalIdentifier),
    }
}


export function ccPrincipalPermissionsDataLakePrincipalPropertyToHclTerraform(struct?: CcPrincipalPermissions.DataLakePrincipalProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        data_lake_principal_identifier: {
            value: cdktn.stringToHclTerraform(struct!.dataLakePrincipalIdentifier),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPrincipalPermissionsDataCellsFilterResourcePropertyToTerraform(struct?: CcPrincipalPermissions.DataCellsFilterResourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        database_name: cdktn.stringToTerraform(struct!.databaseName),
        name: cdktn.stringToTerraform(struct!.name),
        table_catalog_id: cdktn.stringToTerraform(struct!.tableCatalogId),
        table_name: cdktn.stringToTerraform(struct!.tableName),
    }
}


export function ccPrincipalPermissionsDataCellsFilterResourcePropertyToHclTerraform(struct?: CcPrincipalPermissions.DataCellsFilterResourceProperty | cdktn.IResolvable): any {
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
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        table_catalog_id: {
            value: cdktn.stringToHclTerraform(struct!.tableCatalogId),
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


export function ccPrincipalPermissionsDataLocationResourcePropertyToTerraform(struct?: CcPrincipalPermissions.DataLocationResourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        catalog_id: cdktn.stringToTerraform(struct!.catalogId),
        resource_arn: cdktn.stringToTerraform(struct!.resourceArn),
    }
}


export function ccPrincipalPermissionsDataLocationResourcePropertyToHclTerraform(struct?: CcPrincipalPermissions.DataLocationResourceProperty | cdktn.IResolvable): any {
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
        resource_arn: {
            value: cdktn.stringToHclTerraform(struct!.resourceArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPrincipalPermissionsDatabaseResourcePropertyToTerraform(struct?: CcPrincipalPermissions.DatabaseResourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        catalog_id: cdktn.stringToTerraform(struct!.catalogId),
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccPrincipalPermissionsDatabaseResourcePropertyToHclTerraform(struct?: CcPrincipalPermissions.DatabaseResourceProperty | cdktn.IResolvable): any {
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


export function ccPrincipalPermissionsLFTagKeyResourcePropertyToTerraform(struct?: CcPrincipalPermissions.LFTagKeyResourceProperty | cdktn.IResolvable): any {
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


export function ccPrincipalPermissionsLFTagKeyResourcePropertyToHclTerraform(struct?: CcPrincipalPermissions.LFTagKeyResourceProperty | cdktn.IResolvable): any {
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


export function ccPrincipalPermissionsLFTagPropertyToTerraform(struct?: CcPrincipalPermissions.LFTagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        tag_key: cdktn.stringToTerraform(struct!.tagKey),
        tag_values: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.tagValues),
    }
}


export function ccPrincipalPermissionsLFTagPropertyToHclTerraform(struct?: CcPrincipalPermissions.LFTagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
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


export function ccPrincipalPermissionsLFTagPolicyResourcePropertyToTerraform(struct?: CcPrincipalPermissions.LFTagPolicyResourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        catalog_id: cdktn.stringToTerraform(struct!.catalogId),
        expression: cdktn.listMapper(ccPrincipalPermissionsLFTagPropertyToTerraform, false)(struct!.expression),
        resource_type: cdktn.stringToTerraform(struct!.resourceType),
    }
}


export function ccPrincipalPermissionsLFTagPolicyResourcePropertyToHclTerraform(struct?: CcPrincipalPermissions.LFTagPolicyResourceProperty | cdktn.IResolvable): any {
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
        expression: {
            value: cdktn.listMapperHcl(ccPrincipalPermissionsLFTagPropertyToHclTerraform, false)(struct!.expression),
            isBlock: true,
            type: "list",
            storageClassType: "LFTagPropertyList",
        },
        resource_type: {
            value: cdktn.stringToHclTerraform(struct!.resourceType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPrincipalPermissionsTableResourcePropertyToTerraform(struct?: CcPrincipalPermissions.TableResourceProperty | cdktn.IResolvable): any {
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


export function ccPrincipalPermissionsTableResourcePropertyToHclTerraform(struct?: CcPrincipalPermissions.TableResourceProperty | cdktn.IResolvable): any {
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


export function ccPrincipalPermissionsColumnWildcardPropertyToTerraform(struct?: CcPrincipalPermissions.ColumnWildcardProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        excluded_column_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.excludedColumnNames),
    }
}


export function ccPrincipalPermissionsColumnWildcardPropertyToHclTerraform(struct?: CcPrincipalPermissions.ColumnWildcardProperty | cdktn.IResolvable): any {
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


export function ccPrincipalPermissionsTableWithColumnsResourcePropertyToTerraform(struct?: CcPrincipalPermissions.TableWithColumnsResourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        catalog_id: cdktn.stringToTerraform(struct!.catalogId),
        column_names: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.columnNames),
        column_wildcard: ccPrincipalPermissionsColumnWildcardPropertyToTerraform(struct!.columnWildcard),
        database_name: cdktn.stringToTerraform(struct!.databaseName),
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccPrincipalPermissionsTableWithColumnsResourcePropertyToHclTerraform(struct?: CcPrincipalPermissions.TableWithColumnsResourceProperty | cdktn.IResolvable): any {
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
        column_wildcard: {
            value: ccPrincipalPermissionsColumnWildcardPropertyToHclTerraform(struct!.columnWildcard),
            isBlock: true,
            type: "struct",
            storageClassType: "ColumnWildcardProperty",
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


export function ccPrincipalPermissionsResourcePropertyToTerraform(struct?: CcPrincipalPermissions.ResourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        catalog: cdktn.stringToTerraform(struct!.catalog),
        data_cells_filter: ccPrincipalPermissionsDataCellsFilterResourcePropertyToTerraform(struct!.dataCellsFilter),
        data_location: ccPrincipalPermissionsDataLocationResourcePropertyToTerraform(struct!.dataLocation),
        database: ccPrincipalPermissionsDatabaseResourcePropertyToTerraform(struct!.database),
        lf_tag: ccPrincipalPermissionsLFTagKeyResourcePropertyToTerraform(struct!.lfTag),
        lf_tag_policy: ccPrincipalPermissionsLFTagPolicyResourcePropertyToTerraform(struct!.lfTagPolicy),
        table: ccPrincipalPermissionsTableResourcePropertyToTerraform(struct!.table),
        table_with_columns: ccPrincipalPermissionsTableWithColumnsResourcePropertyToTerraform(struct!.tableWithColumns),
    }
}


export function ccPrincipalPermissionsResourcePropertyToHclTerraform(struct?: CcPrincipalPermissions.ResourceProperty | cdktn.IResolvable): any {
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
        data_cells_filter: {
            value: ccPrincipalPermissionsDataCellsFilterResourcePropertyToHclTerraform(struct!.dataCellsFilter),
            isBlock: true,
            type: "struct",
            storageClassType: "DataCellsFilterResourceProperty",
        },
        data_location: {
            value: ccPrincipalPermissionsDataLocationResourcePropertyToHclTerraform(struct!.dataLocation),
            isBlock: true,
            type: "struct",
            storageClassType: "DataLocationResourceProperty",
        },
        database: {
            value: ccPrincipalPermissionsDatabaseResourcePropertyToHclTerraform(struct!.database),
            isBlock: true,
            type: "struct",
            storageClassType: "DatabaseResourceProperty",
        },
        lf_tag: {
            value: ccPrincipalPermissionsLFTagKeyResourcePropertyToHclTerraform(struct!.lfTag),
            isBlock: true,
            type: "struct",
            storageClassType: "LFTagKeyResourceProperty",
        },
        lf_tag_policy: {
            value: ccPrincipalPermissionsLFTagPolicyResourcePropertyToHclTerraform(struct!.lfTagPolicy),
            isBlock: true,
            type: "struct",
            storageClassType: "LFTagPolicyResourceProperty",
        },
        table: {
            value: ccPrincipalPermissionsTableResourcePropertyToHclTerraform(struct!.table),
            isBlock: true,
            type: "struct",
            storageClassType: "TableResourceProperty",
        },
        table_with_columns: {
            value: ccPrincipalPermissionsTableWithColumnsResourcePropertyToHclTerraform(struct!.tableWithColumns),
            isBlock: true,
            type: "struct",
            storageClassType: "TableWithColumnsResourceProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcPrincipalPermissions {
export interface DataLakePrincipalProperty {
    /**
    * An identifier for the LFlong principal.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lakeformation_principal_permissions#data_lake_principal_identifier CcPrincipalPermissions#data_lake_principal_identifier}
    */
    readonly dataLakePrincipalIdentifier?: string;
}
export class DataLakePrincipalPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DataLakePrincipalProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dataLakePrincipalIdentifier !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataLakePrincipalIdentifier = this._dataLakePrincipalIdentifier;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DataLakePrincipalProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dataLakePrincipalIdentifier = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dataLakePrincipalIdentifier = value.dataLakePrincipalIdentifier;
        }
    }

    // data_lake_principal_identifier - computed: true, optional: true, required: false
    private _dataLakePrincipalIdentifier?: string; 
    public get dataLakePrincipalIdentifier() {
        return this.getStringAttribute('data_lake_principal_identifier');
    }
    public set dataLakePrincipalIdentifier(value: string) {
        this._dataLakePrincipalIdentifier = value;
    }
    public resetDataLakePrincipalIdentifier() {
        this._dataLakePrincipalIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataLakePrincipalIdentifierInput() {
        return this._dataLakePrincipalIdentifier;
    }
}
export interface DataCellsFilterResourceProperty {
    /**
    * A database in the GLUDC.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lakeformation_principal_permissions#database_name CcPrincipalPermissions#database_name}
    */
    readonly databaseName?: string;
    /**
    * The name given by the user to the data filter cell.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lakeformation_principal_permissions#name CcPrincipalPermissions#name}
    */
    readonly name?: string;
    /**
    * The ID of the catalog to which the table belongs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lakeformation_principal_permissions#table_catalog_id CcPrincipalPermissions#table_catalog_id}
    */
    readonly tableCatalogId?: string;
    /**
    * The name of the table.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lakeformation_principal_permissions#table_name CcPrincipalPermissions#table_name}
    */
    readonly tableName?: string;
}
export class DataCellsFilterResourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DataCellsFilterResourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._databaseName !== undefined) {
            hasAnyValues = true;
            internalValueResult.databaseName = this._databaseName;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._tableCatalogId !== undefined) {
            hasAnyValues = true;
            internalValueResult.tableCatalogId = this._tableCatalogId;
        }
        if (this._tableName !== undefined) {
            hasAnyValues = true;
            internalValueResult.tableName = this._tableName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DataCellsFilterResourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._databaseName = undefined;
            this._name = undefined;
            this._tableCatalogId = undefined;
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
            this._name = value.name;
            this._tableCatalogId = value.tableCatalogId;
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

    // table_catalog_id - computed: true, optional: true, required: false
    private _tableCatalogId?: string; 
    public get tableCatalogId() {
        return this.getStringAttribute('table_catalog_id');
    }
    public set tableCatalogId(value: string) {
        this._tableCatalogId = value;
    }
    public resetTableCatalogId() {
        this._tableCatalogId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tableCatalogIdInput() {
        return this._tableCatalogId;
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
export interface DataLocationResourceProperty {
    /**
    * The identifier for the GLUDC where the location is registered with LFlong.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lakeformation_principal_permissions#catalog_id CcPrincipalPermissions#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * The Amazon Resource Name (ARN) that uniquely identifies the data location resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lakeformation_principal_permissions#resource_arn CcPrincipalPermissions#resource_arn}
    */
    readonly resourceArn?: string;
}
export class DataLocationResourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DataLocationResourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._catalogId !== undefined) {
            hasAnyValues = true;
            internalValueResult.catalogId = this._catalogId;
        }
        if (this._resourceArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceArn = this._resourceArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DataLocationResourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._catalogId = undefined;
            this._resourceArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._catalogId = value.catalogId;
            this._resourceArn = value.resourceArn;
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

    // resource_arn - computed: true, optional: true, required: false
    private _resourceArn?: string; 
    public get resourceArn() {
        return this.getStringAttribute('resource_arn');
    }
    public set resourceArn(value: string) {
        this._resourceArn = value;
    }
    public resetResourceArn() {
        this._resourceArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceArnInput() {
        return this._resourceArn;
    }
}
export interface DatabaseResourceProperty {
    /**
    * The identifier for the Data Catalog. By default, it is the account ID of the caller.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lakeformation_principal_permissions#catalog_id CcPrincipalPermissions#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * The name of the database resource. Unique to the Data Catalog.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lakeformation_principal_permissions#name CcPrincipalPermissions#name}
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
export interface LFTagKeyResourceProperty {
    /**
    * The identifier for the GLUDC where the location is registered with GLUDC.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lakeformation_principal_permissions#catalog_id CcPrincipalPermissions#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * The key-name for the LF-tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lakeformation_principal_permissions#tag_key CcPrincipalPermissions#tag_key}
    */
    readonly tagKey?: string;
    /**
    * A list of possible values for the corresponding ``TagKey`` of an LF-tag key-value pair.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lakeformation_principal_permissions#tag_values CcPrincipalPermissions#tag_values}
    */
    readonly tagValues?: string[];
}
export class LFTagKeyResourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LFTagKeyResourceProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: LFTagKeyResourceProperty | cdktn.IResolvable | undefined) {
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

    // tag_key - computed: true, optional: true, required: false
    private _tagKey?: string; 
    public get tagKey() {
        return this.getStringAttribute('tag_key');
    }
    public set tagKey(value: string) {
        this._tagKey = value;
    }
    public resetTagKey() {
        this._tagKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagKeyInput() {
        return this._tagKey;
    }

    // tag_values - computed: true, optional: true, required: false
    private _tagValues?: string[]; 
    public get tagValues() {
        return this.getListAttribute('tag_values');
    }
    public set tagValues(value: string[]) {
        this._tagValues = value;
    }
    public resetTagValues() {
        this._tagValues = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagValuesInput() {
        return this._tagValues;
    }
}
export interface LFTagProperty {
    /**
    * The key-name for the LF-tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lakeformation_principal_permissions#tag_key CcPrincipalPermissions#tag_key}
    */
    readonly tagKey?: string;
    /**
    * A list of possible values of the corresponding ``TagKey`` of an LF-tag key-value pair.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lakeformation_principal_permissions#tag_values CcPrincipalPermissions#tag_values}
    */
    readonly tagValues?: string[];
}
export class LFTagPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): LFTagProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
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

    public set internalValue(value: LFTagProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
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
            this._tagKey = value.tagKey;
            this._tagValues = value.tagValues;
        }
    }

    // tag_key - computed: true, optional: true, required: false
    private _tagKey?: string; 
    public get tagKey() {
        return this.getStringAttribute('tag_key');
    }
    public set tagKey(value: string) {
        this._tagKey = value;
    }
    public resetTagKey() {
        this._tagKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagKeyInput() {
        return this._tagKey;
    }

    // tag_values - computed: true, optional: true, required: false
    private _tagValues?: string[]; 
    public get tagValues() {
        return this.getListAttribute('tag_values');
    }
    public set tagValues(value: string[]) {
        this._tagValues = value;
    }
    public resetTagValues() {
        this._tagValues = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagValuesInput() {
        return this._tagValues;
    }
}

export class LFTagPropertyList extends cdktn.ComplexList {
    public internalValue? : LFTagProperty[] | cdktn.IResolvable

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
    public get(index: number): LFTagPropertyOutputReference {
        return new LFTagPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface LFTagPolicyResourceProperty {
    /**
    * The identifier for the GLUDC. The GLUDC is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your LFlong environment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lakeformation_principal_permissions#catalog_id CcPrincipalPermissions#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * A list of LF-tag conditions that apply to the resource's LF-tag policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lakeformation_principal_permissions#expression CcPrincipalPermissions#expression}
    */
    readonly expression?: LFTagProperty[] | cdktn.IResolvable;
    /**
    * The resource type for which the LF-tag policy applies.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lakeformation_principal_permissions#resource_type CcPrincipalPermissions#resource_type}
    */
    readonly resourceType?: string;
}
export class LFTagPolicyResourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LFTagPolicyResourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._catalogId !== undefined) {
            hasAnyValues = true;
            internalValueResult.catalogId = this._catalogId;
        }
        if (this._expression?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.expression = this._expression?.internalValue;
        }
        if (this._resourceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.resourceType = this._resourceType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LFTagPolicyResourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._catalogId = undefined;
            this._expression.internalValue = undefined;
            this._resourceType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._catalogId = value.catalogId;
            this._expression.internalValue = value.expression;
            this._resourceType = value.resourceType;
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

    // expression - computed: true, optional: true, required: false
    private _expression = new LFTagPropertyList(this, "expression", false);
    public get expression() {
        return this._expression;
    }
    public putExpression(value: LFTagProperty[] | cdktn.IResolvable) {
        this._expression.internalValue = value;
    }
    public resetExpression() {
        this._expression.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get expressionInput() {
        return this._expression.internalValue;
    }

    // resource_type - computed: true, optional: true, required: false
    private _resourceType?: string; 
    public get resourceType() {
        return this.getStringAttribute('resource_type');
    }
    public set resourceType(value: string) {
        this._resourceType = value;
    }
    public resetResourceType() {
        this._resourceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceTypeInput() {
        return this._resourceType;
    }
}
export interface TableResourceProperty {
    /**
    * The identifier for the Data Catalog. By default, it is the account ID of the caller.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lakeformation_principal_permissions#catalog_id CcPrincipalPermissions#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * The name of the database for the table. Unique to a Data Catalog. A database is a set of associated table definitions organized into a logical group. You can Grant and Revoke database privileges to a principal.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lakeformation_principal_permissions#database_name CcPrincipalPermissions#database_name}
    */
    readonly databaseName?: string;
    /**
    * The name of the table.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lakeformation_principal_permissions#name CcPrincipalPermissions#name}
    */
    readonly name?: string;
    /**
    * A wildcard object representing every table under a database.
    *  At least one of ``TableResource$Name`` or ``TableResource$TableWildcard`` is required.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lakeformation_principal_permissions#table_wildcard CcPrincipalPermissions#table_wildcard}
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
export interface ColumnWildcardProperty {
    /**
    * Excludes column names. Any column with this name will be excluded.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lakeformation_principal_permissions#excluded_column_names CcPrincipalPermissions#excluded_column_names}
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
export interface TableWithColumnsResourceProperty {
    /**
    * The identifier for the GLUDC where the location is registered with LFlong.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lakeformation_principal_permissions#catalog_id CcPrincipalPermissions#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * The list of column names for the table. At least one of ``ColumnNames`` or ``ColumnWildcard`` is required.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lakeformation_principal_permissions#column_names CcPrincipalPermissions#column_names}
    */
    readonly columnNames?: string[];
    /**
    * A wildcard specified by a ``ColumnWildcard`` object. At least one of ``ColumnNames`` or ``ColumnWildcard`` is required.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lakeformation_principal_permissions#column_wildcard CcPrincipalPermissions#column_wildcard}
    */
    readonly columnWildcard?: ColumnWildcardProperty;
    /**
    * The name of the database for the table with columns resource. Unique to the Data Catalog. A database is a set of associated table definitions organized into a logical group. You can Grant and Revoke database privileges to a principal.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lakeformation_principal_permissions#database_name CcPrincipalPermissions#database_name}
    */
    readonly databaseName?: string;
    /**
    * The name of the table resource. A table is a metadata definition that represents your data. You can Grant and Revoke table privileges to a principal.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lakeformation_principal_permissions#name CcPrincipalPermissions#name}
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
        if (this._columnWildcard?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.columnWildcard = this._columnWildcard?.internalValue;
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
            this._columnWildcard.internalValue = undefined;
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
            this._columnWildcard.internalValue = value.columnWildcard;
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

    // column_wildcard - computed: true, optional: true, required: false
    private _columnWildcard = new ColumnWildcardPropertyOutputReference(this, "column_wildcard");
    public get columnWildcard() {
        return this._columnWildcard;
    }
    public putColumnWildcard(value: ColumnWildcardProperty) {
        this._columnWildcard.internalValue = value;
    }
    public resetColumnWildcard() {
        this._columnWildcard.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get columnWildcardInput() {
        return this._columnWildcard.internalValue;
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
    * The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your LFlong environment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lakeformation_principal_permissions#catalog CcPrincipalPermissions#catalog}
    */
    readonly catalog?: string;
    /**
    * A data cell filter.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lakeformation_principal_permissions#data_cells_filter CcPrincipalPermissions#data_cells_filter}
    */
    readonly dataCellsFilter?: DataCellsFilterResourceProperty;
    /**
    * The location of an Amazon S3 path where permissions are granted or revoked.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lakeformation_principal_permissions#data_location CcPrincipalPermissions#data_location}
    */
    readonly dataLocation?: DataLocationResourceProperty;
    /**
    * The database for the resource. Unique to the Data Catalog. A database is a set of associated table definitions organized into a logical group. You can Grant and Revoke database permissions to a principal.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lakeformation_principal_permissions#database CcPrincipalPermissions#database}
    */
    readonly database?: DatabaseResourceProperty;
    /**
    * The LF-tag key and values attached to a resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lakeformation_principal_permissions#lf_tag CcPrincipalPermissions#lf_tag}
    */
    readonly lfTag?: LFTagKeyResourceProperty;
    /**
    * A list of LF-tag conditions that define a resource's LF-tag policy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lakeformation_principal_permissions#lf_tag_policy CcPrincipalPermissions#lf_tag_policy}
    */
    readonly lfTagPolicy?: LFTagPolicyResourceProperty;
    /**
    * The table for the resource. A table is a metadata definition that represents your data. You can Grant and Revoke table privileges to a principal.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lakeformation_principal_permissions#table CcPrincipalPermissions#table}
    */
    readonly table?: TableResourceProperty;
    /**
    * The table with columns for the resource. A principal with permissions to this resource can select metadata from the columns of a table in the Data Catalog and the underlying data in Amazon S3.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lakeformation_principal_permissions#table_with_columns CcPrincipalPermissions#table_with_columns}
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
        if (this._dataCellsFilter?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataCellsFilter = this._dataCellsFilter?.internalValue;
        }
        if (this._dataLocation?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataLocation = this._dataLocation?.internalValue;
        }
        if (this._database?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.database = this._database?.internalValue;
        }
        if (this._lfTag?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.lfTag = this._lfTag?.internalValue;
        }
        if (this._lfTagPolicy?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.lfTagPolicy = this._lfTagPolicy?.internalValue;
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
            this._dataCellsFilter.internalValue = undefined;
            this._dataLocation.internalValue = undefined;
            this._database.internalValue = undefined;
            this._lfTag.internalValue = undefined;
            this._lfTagPolicy.internalValue = undefined;
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
            this._dataCellsFilter.internalValue = value.dataCellsFilter;
            this._dataLocation.internalValue = value.dataLocation;
            this._database.internalValue = value.database;
            this._lfTag.internalValue = value.lfTag;
            this._lfTagPolicy.internalValue = value.lfTagPolicy;
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

    // data_cells_filter - computed: true, optional: true, required: false
    private _dataCellsFilter = new DataCellsFilterResourcePropertyOutputReference(this, "data_cells_filter");
    public get dataCellsFilter() {
        return this._dataCellsFilter;
    }
    public putDataCellsFilter(value: DataCellsFilterResourceProperty) {
        this._dataCellsFilter.internalValue = value;
    }
    public resetDataCellsFilter() {
        this._dataCellsFilter.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataCellsFilterInput() {
        return this._dataCellsFilter.internalValue;
    }

    // data_location - computed: true, optional: true, required: false
    private _dataLocation = new DataLocationResourcePropertyOutputReference(this, "data_location");
    public get dataLocation() {
        return this._dataLocation;
    }
    public putDataLocation(value: DataLocationResourceProperty) {
        this._dataLocation.internalValue = value;
    }
    public resetDataLocation() {
        this._dataLocation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataLocationInput() {
        return this._dataLocation.internalValue;
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

    // lf_tag - computed: true, optional: true, required: false
    private _lfTag = new LFTagKeyResourcePropertyOutputReference(this, "lf_tag");
    public get lfTag() {
        return this._lfTag;
    }
    public putLfTag(value: LFTagKeyResourceProperty) {
        this._lfTag.internalValue = value;
    }
    public resetLfTag() {
        this._lfTag.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lfTagInput() {
        return this._lfTag.internalValue;
    }

    // lf_tag_policy - computed: true, optional: true, required: false
    private _lfTagPolicy = new LFTagPolicyResourcePropertyOutputReference(this, "lf_tag_policy");
    public get lfTagPolicy() {
        return this._lfTagPolicy;
    }
    public putLfTagPolicy(value: LFTagPolicyResourceProperty) {
        this._lfTagPolicy.internalValue = value;
    }
    public resetLfTagPolicy() {
        this._lfTagPolicy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lfTagPolicyInput() {
        return this._lfTagPolicy.internalValue;
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
