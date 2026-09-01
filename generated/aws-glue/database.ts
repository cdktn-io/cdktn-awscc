// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_database

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcDatabaseProps extends cdktn.TerraformMetaArguments {
    /**
    * The AWS account ID for the account in which to create the catalog object.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_database#catalog_id CcDatabase#catalog_id}
    */
    readonly catalogId: string;
    /**
    * The metadata for the database.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_database#database_input CcDatabase#database_input}
    */
    readonly databaseInput: CcDatabase.DatabaseInputProperty;
    /**
    * The name of the database. For hive compatibility, this is folded to lowercase when it is store.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_database#database_name CcDatabase#database_name}
    */
    readonly databaseName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_database awscc_glue_database}
*/
export class CcDatabase extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_glue_database";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcDatabase resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcDatabase to import
    * @param importFromId The id of the existing CcDatabase that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_database#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcDatabase to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_glue_database", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_database awscc_glue_database} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcDatabaseProps
    */
    public constructor(scope: Construct, id: string, config: CcDatabaseProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_glue_database',
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
        this._catalogId = config.catalogId;
        this._databaseInput.internalValue = config.databaseInput;
        this._databaseName = config.databaseName;
    }

    // ==========
    // ATTRIBUTES
    // ==========

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

    // database_input - computed: false, optional: false, required: true
    private _databaseInput = new CcDatabase.DatabaseInputPropertyOutputReference(this, "database_input");
    public get databaseInput() {
        return this._databaseInput;
    }
    public putDatabaseInput(value: CcDatabase.DatabaseInputProperty) {
        this._databaseInput.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseInputInput() {
        return this._databaseInput.internalValue;
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

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            catalog_id: cdktn.stringToTerraform(this._catalogId),
            database_input: ccDatabaseDatabaseInputPropertyToTerraform(this._databaseInput.internalValue),
            database_name: cdktn.stringToTerraform(this._databaseName),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            catalog_id: {
                value: cdktn.stringToHclTerraform(this._catalogId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            database_input: {
                value: ccDatabaseDatabaseInputPropertyToHclTerraform(this._databaseInput.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDatabase.DatabaseInputProperty",
            },
            database_name: {
                value: cdktn.stringToHclTerraform(this._databaseName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccDatabaseDataLakePrincipalPropertyToTerraform(struct?: CcDatabase.DataLakePrincipalProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        data_lake_principal_identifier: cdktn.stringToTerraform(struct!.dataLakePrincipalIdentifier),
    }
}


export function ccDatabaseDataLakePrincipalPropertyToHclTerraform(struct?: CcDatabase.DataLakePrincipalProperty | cdktn.IResolvable): any {
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


export function ccDatabasePrincipalPrivilegesPropertyToTerraform(struct?: CcDatabase.PrincipalPrivilegesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        permissions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.permissions),
        principal: ccDatabaseDataLakePrincipalPropertyToTerraform(struct!.principal),
    }
}


export function ccDatabasePrincipalPrivilegesPropertyToHclTerraform(struct?: CcDatabase.PrincipalPrivilegesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        permissions: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.permissions),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        principal: {
            value: ccDatabaseDataLakePrincipalPropertyToHclTerraform(struct!.principal),
            isBlock: true,
            type: "struct",
            storageClassType: "DataLakePrincipalProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDatabaseFederatedDatabasePropertyToTerraform(struct?: CcDatabase.FederatedDatabaseProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        connection_name: cdktn.stringToTerraform(struct!.connectionName),
        identifier: cdktn.stringToTerraform(struct!.identifier),
    }
}


export function ccDatabaseFederatedDatabasePropertyToHclTerraform(struct?: CcDatabase.FederatedDatabaseProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        connection_name: {
            value: cdktn.stringToHclTerraform(struct!.connectionName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        identifier: {
            value: cdktn.stringToHclTerraform(struct!.identifier),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDatabaseDatabaseIdentifierPropertyToTerraform(struct?: CcDatabase.DatabaseIdentifierProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        catalog_id: cdktn.stringToTerraform(struct!.catalogId),
        database_name: cdktn.stringToTerraform(struct!.databaseName),
        region: cdktn.stringToTerraform(struct!.region),
    }
}


export function ccDatabaseDatabaseIdentifierPropertyToHclTerraform(struct?: CcDatabase.DatabaseIdentifierProperty | cdktn.IResolvable): any {
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
        region: {
            value: cdktn.stringToHclTerraform(struct!.region),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDatabaseDatabaseInputPropertyToTerraform(struct?: CcDatabase.DatabaseInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        create_table_default_permissions: cdktn.listMapper(ccDatabasePrincipalPrivilegesPropertyToTerraform, false)(struct!.createTableDefaultPermissions),
        description: cdktn.stringToTerraform(struct!.description),
        federated_database: ccDatabaseFederatedDatabasePropertyToTerraform(struct!.federatedDatabase),
        location_uri: cdktn.stringToTerraform(struct!.locationUri),
        name: cdktn.stringToTerraform(struct!.name),
        parameters: cdktn.stringToTerraform(struct!.parameters),
        target_database: ccDatabaseDatabaseIdentifierPropertyToTerraform(struct!.targetDatabase),
    }
}


export function ccDatabaseDatabaseInputPropertyToHclTerraform(struct?: CcDatabase.DatabaseInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        create_table_default_permissions: {
            value: cdktn.listMapperHcl(ccDatabasePrincipalPrivilegesPropertyToHclTerraform, false)(struct!.createTableDefaultPermissions),
            isBlock: true,
            type: "list",
            storageClassType: "PrincipalPrivilegesPropertyList",
        },
        description: {
            value: cdktn.stringToHclTerraform(struct!.description),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        federated_database: {
            value: ccDatabaseFederatedDatabasePropertyToHclTerraform(struct!.federatedDatabase),
            isBlock: true,
            type: "struct",
            storageClassType: "FederatedDatabaseProperty",
        },
        location_uri: {
            value: cdktn.stringToHclTerraform(struct!.locationUri),
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
        parameters: {
            value: cdktn.stringToHclTerraform(struct!.parameters),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        target_database: {
            value: ccDatabaseDatabaseIdentifierPropertyToHclTerraform(struct!.targetDatabase),
            isBlock: true,
            type: "struct",
            storageClassType: "DatabaseIdentifierProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcDatabase {
export interface DataLakePrincipalProperty {
    /**
    * An identifier for the AWS Lake Formation principal.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_database#data_lake_principal_identifier CcDatabase#data_lake_principal_identifier}
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
export interface PrincipalPrivilegesProperty {
    /**
    * The permissions that are granted to the principal.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_database#permissions CcDatabase#permissions}
    */
    readonly permissions?: string[];
    /**
    * The principal who is granted permissions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_database#principal CcDatabase#principal}
    */
    readonly principal?: DataLakePrincipalProperty;
}
export class PrincipalPrivilegesPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): PrincipalPrivilegesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._permissions !== undefined) {
            hasAnyValues = true;
            internalValueResult.permissions = this._permissions;
        }
        if (this._principal?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.principal = this._principal?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PrincipalPrivilegesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._permissions = undefined;
            this._principal.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._permissions = value.permissions;
            this._principal.internalValue = value.principal;
        }
    }

    // permissions - computed: true, optional: true, required: false
    private _permissions?: string[]; 
    public get permissions() {
        return this.getListAttribute('permissions');
    }
    public set permissions(value: string[]) {
        this._permissions = value;
    }
    public resetPermissions() {
        this._permissions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get permissionsInput() {
        return this._permissions;
    }

    // principal - computed: true, optional: true, required: false
    private _principal = new DataLakePrincipalPropertyOutputReference(this, "principal");
    public get principal() {
        return this._principal;
    }
    public putPrincipal(value: DataLakePrincipalProperty) {
        this._principal.internalValue = value;
    }
    public resetPrincipal() {
        this._principal.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get principalInput() {
        return this._principal.internalValue;
    }
}

export class PrincipalPrivilegesPropertyList extends cdktn.ComplexList {
    public internalValue? : PrincipalPrivilegesProperty[] | cdktn.IResolvable

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
    public get(index: number): PrincipalPrivilegesPropertyOutputReference {
        return new PrincipalPrivilegesPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface FederatedDatabaseProperty {
    /**
    * The name of the connection to the external metastore.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_database#connection_name CcDatabase#connection_name}
    */
    readonly connectionName?: string;
    /**
    * A unique identifier for the federated database.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_database#identifier CcDatabase#identifier}
    */
    readonly identifier?: string;
}
export class FederatedDatabasePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FederatedDatabaseProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._connectionName !== undefined) {
            hasAnyValues = true;
            internalValueResult.connectionName = this._connectionName;
        }
        if (this._identifier !== undefined) {
            hasAnyValues = true;
            internalValueResult.identifier = this._identifier;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FederatedDatabaseProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._connectionName = undefined;
            this._identifier = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._connectionName = value.connectionName;
            this._identifier = value.identifier;
        }
    }

    // connection_name - computed: true, optional: true, required: false
    private _connectionName?: string; 
    public get connectionName() {
        return this.getStringAttribute('connection_name');
    }
    public set connectionName(value: string) {
        this._connectionName = value;
    }
    public resetConnectionName() {
        this._connectionName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectionNameInput() {
        return this._connectionName;
    }

    // identifier - computed: true, optional: true, required: false
    private _identifier?: string; 
    public get identifier() {
        return this.getStringAttribute('identifier');
    }
    public set identifier(value: string) {
        this._identifier = value;
    }
    public resetIdentifier() {
        this._identifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get identifierInput() {
        return this._identifier;
    }
}
export interface DatabaseIdentifierProperty {
    /**
    * The ID of the Data Catalog in which the database resides.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_database#catalog_id CcDatabase#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * The name of the catalog database.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_database#database_name CcDatabase#database_name}
    */
    readonly databaseName?: string;
    /**
    * Region of the target database.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_database#region CcDatabase#region}
    */
    readonly region?: string;
}
export class DatabaseIdentifierPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DatabaseIdentifierProperty | cdktn.IResolvable | undefined {
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
        if (this._region !== undefined) {
            hasAnyValues = true;
            internalValueResult.region = this._region;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DatabaseIdentifierProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._catalogId = undefined;
            this._databaseName = undefined;
            this._region = undefined;
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
            this._region = value.region;
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
}
export interface DatabaseInputProperty {
    /**
    * Creates a set of default permissions on the table for principals. Used by AWS Lake Formation. Not used in the normal course of AWS Glue operations.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_database#create_table_default_permissions CcDatabase#create_table_default_permissions}
    */
    readonly createTableDefaultPermissions?: PrincipalPrivilegesProperty[] | cdktn.IResolvable;
    /**
    * A description of the database.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_database#description CcDatabase#description}
    */
    readonly description?: string;
    /**
    * A FederatedDatabase structure that references an entity outside the AWS Glue Data Catalog.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_database#federated_database CcDatabase#federated_database}
    */
    readonly federatedDatabase?: FederatedDatabaseProperty;
    /**
    * The location of the database (for example, an HDFS path).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_database#location_uri CcDatabase#location_uri}
    */
    readonly locationUri?: string;
    /**
    * The name of the database. For hive compatibility, this is folded to lowercase when it is stored.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_database#name CcDatabase#name}
    */
    readonly name?: string;
    /**
    * These key-value pairs define parameters and properties of the database.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_database#parameters CcDatabase#parameters}
    */
    readonly parameters?: string;
    /**
    * A DatabaseIdentifier structure that describes a target database for resource linking.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/glue_database#target_database CcDatabase#target_database}
    */
    readonly targetDatabase?: DatabaseIdentifierProperty;
}
export class DatabaseInputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DatabaseInputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._createTableDefaultPermissions?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.createTableDefaultPermissions = this._createTableDefaultPermissions?.internalValue;
        }
        if (this._description !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._federatedDatabase?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.federatedDatabase = this._federatedDatabase?.internalValue;
        }
        if (this._locationUri !== undefined) {
            hasAnyValues = true;
            internalValueResult.locationUri = this._locationUri;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._parameters !== undefined) {
            hasAnyValues = true;
            internalValueResult.parameters = this._parameters;
        }
        if (this._targetDatabase?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetDatabase = this._targetDatabase?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DatabaseInputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._createTableDefaultPermissions.internalValue = undefined;
            this._description = undefined;
            this._federatedDatabase.internalValue = undefined;
            this._locationUri = undefined;
            this._name = undefined;
            this._parameters = undefined;
            this._targetDatabase.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._createTableDefaultPermissions.internalValue = value.createTableDefaultPermissions;
            this._description = value.description;
            this._federatedDatabase.internalValue = value.federatedDatabase;
            this._locationUri = value.locationUri;
            this._name = value.name;
            this._parameters = value.parameters;
            this._targetDatabase.internalValue = value.targetDatabase;
        }
    }

    // create_table_default_permissions - computed: true, optional: true, required: false
    private _createTableDefaultPermissions = new PrincipalPrivilegesPropertyList(this, "create_table_default_permissions", false);
    public get createTableDefaultPermissions() {
        return this._createTableDefaultPermissions;
    }
    public putCreateTableDefaultPermissions(value: PrincipalPrivilegesProperty[] | cdktn.IResolvable) {
        this._createTableDefaultPermissions.internalValue = value;
    }
    public resetCreateTableDefaultPermissions() {
        this._createTableDefaultPermissions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createTableDefaultPermissionsInput() {
        return this._createTableDefaultPermissions.internalValue;
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

    // federated_database - computed: true, optional: true, required: false
    private _federatedDatabase = new FederatedDatabasePropertyOutputReference(this, "federated_database");
    public get federatedDatabase() {
        return this._federatedDatabase;
    }
    public putFederatedDatabase(value: FederatedDatabaseProperty) {
        this._federatedDatabase.internalValue = value;
    }
    public resetFederatedDatabase() {
        this._federatedDatabase.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get federatedDatabaseInput() {
        return this._federatedDatabase.internalValue;
    }

    // location_uri - computed: true, optional: true, required: false
    private _locationUri?: string; 
    public get locationUri() {
        return this.getStringAttribute('location_uri');
    }
    public set locationUri(value: string) {
        this._locationUri = value;
    }
    public resetLocationUri() {
        this._locationUri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get locationUriInput() {
        return this._locationUri;
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

    // parameters - computed: true, optional: true, required: false
    private _parameters?: string; 
    public get parameters() {
        return this.getStringAttribute('parameters');
    }
    public set parameters(value: string) {
        this._parameters = value;
    }
    public resetParameters() {
        this._parameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get parametersInput() {
        return this._parameters;
    }

    // target_database - computed: true, optional: true, required: false
    private _targetDatabase = new DatabaseIdentifierPropertyOutputReference(this, "target_database");
    public get targetDatabase() {
        return this._targetDatabase;
    }
    public putTargetDatabase(value: DatabaseIdentifierProperty) {
        this._targetDatabase.internalValue = value;
    }
    public resetTargetDatabase() {
        this._targetDatabase.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetDatabaseInput() {
        return this._targetDatabase.internalValue;
    }
}
}
